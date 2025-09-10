'use strict';

/**
 * Experience Builder - Server (Koa)
 * - HTTP/HTTPS
 * - Gzip opcional
 * - CORS básico
 * - Dev/static middlewares originais
 * - PROXY: /proxy/portalgis → https://portalgis.petrobras.com.br
 */

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const Koa = require('koa');
const compress = require('koa-compress');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const { bodyParser, commonRouter } = require('./middlewares/common');
const proxies = require('koa-proxies');

const app = new Koa();
const program = new Command();

program
  .version('0.0.1')
  .option('--disable_gzip', 'Disable gzip')
  .option('--enable_file_cache', 'Enable file cache in server')
  .option('-p, --port <port>', 'Http port')
  .option('--https_port <port>', 'Https port')
  .option('--path <path>', 'Mount path')
  .option('-h, --host_env <hostEnv>', 'Host env')
  .option('-d, --dev_edition', 'Is Dev Edition')
  .option('--http_only', 'Disable https')
  .option('-c, --cert_folder <folder>', 'Folder that stores the certificate')
  .option('--host_static_file', 'Host static files')
  .parse(process.argv);

const commanderOption = program.opts();
global.commanderOption = commanderOption;

// ---- Globals populated by init() ----
let isDevEdition;
let mountPath;
let port;
let httpsPort;

// ---- Start up sequence ----
init();

app.use(handleProtocol);
app.use(supportCORS);

// gzip (a não ser que desabilitado)
if (!commanderOption.disable_gzip) {
  app.use(
    compress({
      filter: (contentType) =>
        /(text)|(application\/javascript)|(application\/json)/i.test(contentType),
      threshold: 2048,
      gzip: { flush: require('zlib').constants.Z_SYNC_FLUSH },
      deflate: { flush: require('zlib').constants.Z_SYNC_FLUSH },
      br: false
    })
  );
}

// Middlewares comuns do ExB
app.use(bodyParser)
   .use(commonRouter.routes())
   .use(commonRouter.allowedMethods());

// ========================= PROXY =========================
//  /proxy/portalgis/... → https://portalgis.petrobras.com.br/...
//  Use caminhos absolutos no client: esriConfig.request.proxyUrl = '/proxy/portalgis/'
app.use(
  proxies('/proxy/portalgis', {
    target: 'https://portalgis.petrobras.com.br',
    changeOrigin: true,
    secure: true,                    // true se o cert do alvo for válido
    logs: true,                      // log no console do server
    rewrite: (p) => p.replace(/^\/proxy\/portalgis/, ''),
    headers: { Origin: 'https://portalgis.petrobras.com.br' }
  })
);
// =========================================================

// Middlewares de dev + estáticos do ExB
if (isDevEdition) {
  const { devRouter } = require('./middlewares/dev');
  const { getStaticServeMiddleWares } = require('./middlewares/static-server');
  app.use(devRouter.routes()).use(devRouter.allowedMethods());
  getStaticServeMiddleWares().forEach((mw) => app.use(mw));
} else if (commanderOption.host_static_file) {
  const { getStaticServeMiddleWares } = require('./middlewares/static-server');
  getStaticServeMiddleWares().forEach((mw) => app.use(mw));
}

// Erros do app
app.on('error', (err) => {
  if (err && err.code !== 'ECONNRESET' && err.code !== 'ECONNABORTED') {
    console.log('server error', err.message);
  }
});

// HTTP server
const httpServer = http.createServer(app.callback()).listen(port, () => {
  console.log('Http server running on port', port);
});
handleConnectError(httpServer);

// HTTPS server (se não estiver forçando http_only)
if (!commanderOption.http_only) {
  const certFolder = commanderOption.cert_folder || path.join(__dirname, '../cert');

  if (!fs.existsSync(certFolder)) {
    console.error('Certificate folder does not exist.');
    process.exit(0);
  }
  if (
    !fs.existsSync(path.join(certFolder, 'server.key')) ||
    !fs.existsSync(path.join(certFolder, 'server.cert'))
  ) {
    console.error('Does not find certificate.');
    process.exit(0);
  }

  const httpsServer = https
    .createServer(
      {
        key: fs.readFileSync(path.join(certFolder, 'server.key'), 'utf8'),
        cert: fs.readFileSync(path.join(certFolder, 'server.cert'), 'utf8')
      },
      app.callback()
    )
    .listen(httpsPort, () => {
      console.log('Https server running on port', httpsPort);
    });

  handleConnectError(httpsServer);
}

/* ================================= Helpers ================================ */

function init() {
  // host env
  const envFromOpt = commanderOption.host_env || process.env.EXB_HOST_ENV;
  global.hostEnv = envFromOpt || 'prod';

  // dev edition flag
  isDevEdition = commanderOption.dev_edition;
  if (!commanderOption.dev_edition) {
    // em prod/leitura, pegar de setting.json
    const settingPath = path.join(__dirname, 'setting.json');
    if (fs.existsSync(settingPath)) {
      try {
        const json = JSON.parse(fs.readFileSync(settingPath, 'utf8'));
        isDevEdition = json.isDevEdition;
      } catch (e) {
        // fallback silencioso
      }
    }
  }
  global.isDevEdition = isDevEdition;

  // mountPath (com barra final)
  mountPath = commanderOption.path || process.env.EXB_MOUNT_PATH;
  if (mountPath) {
    if (!/\/$/.test(mountPath)) mountPath += '/';
  } else {
    mountPath = '/';
  }
  global.mountPath = mountPath;

  // portas
  port = commanderOption.port || process.env.EXB_HTTP_PORT || 3000;
  httpsPort = commanderOption.https_port || process.env.EXB_HTTPS_PORT || 3001;
}

function handleConnectError(server) {
  if (!server) return;
  server.setTimeout(120000); // 2min
  server.on('connection', (socket) => {
    socket.on('error', () => socket.destroy());
  });
}

/**
 * Redireciona HTTP → HTTPS (a não ser que --http_only esteja ativo)
 */
async function handleProtocol(ctx, next) {
  if (commanderOption.http_only) {
    return next();
  }
  if (ctx.protocol === 'http') {
    // substitui porta pelo httpsPort
    const hostNoPort = ctx.host.replace(/:\d+$/, '');
    const newUrl = `https://${hostNoPort}:${httpsPort}${ctx.url}`;
    return ctx.redirect(newUrl);
  }
  return next();
}

/**
 * CORS básico para facilitar chamadas cross-origin feitas pelo próprio app
 * (o proxy já resolve o caso do destino externo).
 */
async function supportCORS(ctx, next) {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type');
  ctx.set('Referrer-Policy', 'no-referrer-when-downgrade');
  await next();
}
