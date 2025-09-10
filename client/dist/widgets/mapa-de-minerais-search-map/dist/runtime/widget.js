System.register(["jimu-core","jimu-arcgis","esri/layers/FeatureLayer","esri/widgets/Legend","esri/renderers/ClassBreaksRenderer","esri/symbols/SimpleMarkerSymbol"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Legend__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_renderers_ClassBreaksRenderer__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_symbols_SimpleMarkerSymbol__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Legend__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_renderers_ClassBreaksRenderer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_symbols_SimpleMarkerSymbol__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Legend__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_renderers_ClassBreaksRenderer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_symbols_SimpleMarkerSymbol__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/mapa-de-minerais-search-map/src/runtime/Minerals.ts":
/*!*************************************************************************************!*\
  !*** ./your-extensions/widgets/mapa-de-minerais-search-map/src/runtime/Minerals.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MINERAL_OPTIONS: () => (/* binding */ MINERAL_OPTIONS),
/* harmony export */   aplicarColorizacaoPorAgrupador: () => (/* binding */ aplicarColorizacaoPorAgrupador),
/* harmony export */   desenharDistribuicaoMinerais: () => (/* binding */ desenharDistribuicaoMinerais),
/* harmony export */   fetchDistribuicaoMineraisContador: () => (/* binding */ fetchDistribuicaoMineraisContador),
/* harmony export */   fetchMineralAgrupador: () => (/* binding */ fetchMineralAgrupador),
/* harmony export */   fetchMineralLista: () => (/* binding */ fetchMineralLista),
/* harmony export */   labelFromValue: () => (/* binding */ labelFromValue)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/mapa-de-minerais-search-map/src/runtime/utils.ts");
/** Minerals.ts
 * Lógica da Distribuição de Minerais:
 *  - Busca do CONTADOR por análise (DRX/Qemscan/Todas) => base em clusters/bolhas via gerarMapaDistribuicaoEB
 *  - Busca da LISTA de minerais (para o search)
 *  - Busca dos AGRUPADORES (analise|media|maxima) para um mineral selecionado
 *  - Aplicação de visualVariables (color ramp) NA MESMA CAMADA, por cima do cluster base
 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/** Opções de análise mineral para os rádios */
const MINERAL_OPTIONS = [
    { value: 'DRX-TOT', label: 'DRX-Total' },
    { value: 'DRX-ARG', label: 'DRX-Argilominerais' },
    { value: 'MASSA', label: 'Qemscan-Massa' },
    { value: 'AREA', label: 'Qemscan-Área' },
    { value: 'todasAnalises', label: 'Todas as Análises' }
];
/* =================== Normalizações =================== */
function normalizeMineralContador(raw) {
    return (Array.isArray(raw) ? raw : [])
        .map((r) => {
        var _a, _b, _c, _d, _e, _f;
        return ({
            codigoPoco: Number((_d = (_c = (_b = (_a = r.codigoPoco) !== null && _a !== void 0 ? _a : r.POCO_CD_POCO) !== null && _b !== void 0 ? _b : r.poco) !== null && _c !== void 0 ? _c : r.codigo) !== null && _d !== void 0 ? _d : 0),
            totalMinerais: Number((_f = (_e = r.totalMinerais) !== null && _e !== void 0 ? _e : r.total) !== null && _f !== void 0 ? _f : 0)
        });
    })
        .filter(x => !!x.codigoPoco);
}
function normalizeMineralLista(raw) {
    return (Array.isArray(raw) ? raw : [])
        .map((r) => {
        var _a, _b, _c, _d, _e;
        return ({
            nomeMineral: String((_c = (_b = (_a = r.nomeMineral) !== null && _a !== void 0 ? _a : r.nome) !== null && _b !== void 0 ? _b : r.mineral) !== null && _c !== void 0 ? _c : '').trim(),
            nomeResumidoMineral: (_e = (_d = r.nomeResumidoMineral) !== null && _d !== void 0 ? _d : r.nomeResumido) !== null && _e !== void 0 ? _e : undefined
        });
    })
        .filter(x => !!x.nomeMineral);
}
function normalizeAgrupador(raw) {
    return (Array.isArray(raw) ? raw : [])
        .map((r) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return ({
            codigoPoco: Number((_d = (_c = (_b = (_a = r.codigoPoco) !== null && _a !== void 0 ? _a : r.POCO_CD_POCO) !== null && _b !== void 0 ? _b : r.poco) !== null && _c !== void 0 ? _c : r.codigo) !== null && _d !== void 0 ? _d : 0),
            nomeResumido: (_f = (_e = r.nomeResumido) !== null && _e !== void 0 ? _e : r.nomeResumidoMineral) !== null && _f !== void 0 ? _f : undefined,
            qtAnalise: Number((_h = (_g = r.qtAnalise) !== null && _g !== void 0 ? _g : r.total) !== null && _h !== void 0 ? _h : 0),
            valorMedio: Number((_k = (_j = r.valorMedio) !== null && _j !== void 0 ? _j : r.media) !== null && _k !== void 0 ? _k : 0),
            valorMaximo: Number((_m = (_l = r.valorMaximo) !== null && _l !== void 0 ? _l : r.maximo) !== null && _m !== void 0 ? _m : 0)
        });
    })
        .filter(x => !!x.codigoPoco);
}
/* =================== PostMessage helpers =================== */
function postViaParent(type, body, okType, errType) {
    console.groupCollapsed(`[minerals] postViaParent -> ${type}`);
    console.log('[minerals] body', body);
    return new Promise((resolve, reject) => {
        var _a;
        const reqId = Math.random().toString(36).slice(2);
        let targetOrigin = '*';
        try {
            if (document.referrer)
                targetOrigin = new URL(document.referrer).origin;
        }
        catch (_b) { }
        console.log('[minerals] targetOrigin', targetOrigin, 'reqId', reqId);
        const onMessage = (event) => {
            const d = event.data || {};
            if (d.reqId !== reqId)
                return;
            console.log('[minerals] resposta recebida', d.type, d);
            clearTimeout(to); // <<< IMPORTANTE
            window.removeEventListener('message', onMessage);
            if (d.type === okType) {
                console.groupEnd();
                resolve(d.payload);
            }
            else if (d.type === errType) {
                console.groupEnd();
                reject(new Error(d.message || 'Erro no fetch via parent'));
            }
            else {
                console.warn('[minerals] tipo inesperado', d.type);
                reject(new Error('Resposta desconhecida do pai'));
            }
        };
        window.addEventListener('message', onMessage);
        const to = window.setTimeout(() => {
            window.removeEventListener('message', onMessage);
            console.warn('[minerals] TIMEOUT aguardando resposta do pai', { type, okType, errType, reqId });
            console.groupEnd();
            reject(new Error('Timeout aguardando resposta do pai (minerais)'));
        }, 20000);
        (_a = window.parent) === null || _a === void 0 ? void 0 : _a.postMessage({ type, body, reqId }, targetOrigin);
    });
}
/* =================== Bodies Explora =================== */
function buildBodyContador(tipoAnalise, faixaInteresse) {
    const p = new URLSearchParams();
    p.set('hdSys', 'novaintcons');
    p.set('hdUC', 'Mapa');
    p.set('hdAcao', 'CarregarMapaDistribuicaoMineraisContador');
    p.set('hdSessionFilter', 'true');
    p.set('tipoAnalise', tipoAnalise);
    p.set('faixaInteresse', String(!!faixaInteresse));
    return p.toString();
}
function buildBodyLista(tipoAnalise, faixaInteresse) {
    const p = new URLSearchParams();
    p.set('hdSys', 'novaintcons');
    p.set('hdUC', 'Mapa');
    p.set('hdAcao', 'CarregarMapaDistribuicaoMineraisLista');
    p.set('hdSessionFilter', 'true');
    p.set('tipoAnalise', tipoAnalise);
    p.set('faixaInteresse', String(!!faixaInteresse));
    return p.toString();
}
function buildBodyAgrupador(tipoAnalise, nomeResumidoMineral, faixaInteresse) {
    const p = new URLSearchParams();
    p.set('hdSys', 'novaintcons');
    p.set('hdUC', 'Mapa');
    p.set('hdAcao', 'CarregarMapaDistribuicaoMineraisAgrupador');
    p.set('hdSessionFilter', 'true');
    p.set('tipoAnalise', tipoAnalise);
    if (nomeResumidoMineral)
        p.set('nomeResumidoMineral', nomeResumidoMineral);
    p.set('faixaInteresse', String(!!faixaInteresse));
    return p.toString();
}
/* =================== Fetch APIs =================== */
function fetchDistribuicaoMineraisContador(tipoAnalise, faixaInteresse) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = buildBodyContador(tipoAnalise, faixaInteresse);
        const payload = yield postViaParent('fetchDistribuicaoMinerais', body, 'fetchDistribuicaoMinerais:ok', 'fetchDistribuicaoMinerais:err');
        const norm = normalizeMineralContador(payload);
        console.log('[minerals] contador normalizado', norm.length, norm.slice(0, 10));
        return norm;
    });
}
function fetchMineralLista(tipoAnalise, faixaInteresse) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = buildBodyLista(tipoAnalise, faixaInteresse);
        const payload = yield postViaParent('fetchDistribuicaoMinerais', body, 'fetchDistribuicaoMinerais:ok', 'fetchDistribuicaoMinerais:err');
        const norm = normalizeMineralLista(payload);
        console.log('[minerals] lista normalizada', norm.length, norm.slice(0, 10));
        return norm;
    });
}
function fetchMineralAgrupador(tipoAnalise, nomeResumidoMineral, faixaInteresse) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = buildBodyAgrupador(tipoAnalise, nomeResumidoMineral, faixaInteresse);
        const payload = yield postViaParent('fetchDistribuicaoMinerais', body, 'fetchDistribuicaoMinerais:ok', 'fetchDistribuicaoMinerais:err');
        const norm = normalizeAgrupador(payload);
        console.log('[minerals] agrupador normalizado', norm.length, norm.slice(0, 10));
        return norm;
    });
}
/* =================== Render helpers =================== */
const layerIdFor = (tipoAnalise) => `minerais_${String(tipoAnalise).toLowerCase()}`;
const legendIdFor = (tipoAnalise) => `lgd_${layerIdFor(tipoAnalise)}`;
function disableClusterNumbers(lyr) {
    try {
        if (!lyr)
            return;
        if (lyr.featureReduction && lyr.featureReduction.type === 'cluster') {
            lyr.featureReduction = Object.assign(Object.assign({}, lyr.featureReduction), { labelsVisible: false });
        }
        if ('labelsVisible' in lyr)
            lyr.labelsVisible = false;
        if ('labelingInfo' in lyr)
            lyr.labelingInfo = [];
        if (Array.isArray(lyr.sublayers))
            lyr.sublayers.forEach((sl) => disableClusterNumbers(sl));
    }
    catch (_a) { }
}
/** Desenha a base (contador) em clusters/bolhas, com título conforme análise */
function desenharDistribuicaoMinerais(jimuMapView, dados, tipoAnalise, withInterest) {
    console.groupCollapsed('[minerals] desenharDistribuicaoMinerais');
    console.log('[minerals] tipoAnalise', tipoAnalise, 'withInterest', withInterest, 'n dados', dados === null || dados === void 0 ? void 0 : dados.length);
    try {
        const { view } = jimuMapView;
        if (!view || !Array.isArray(dados) || dados.length === 0) {
            console.warn('[minerals] view inexistente ou dados vazios');
            return;
        }
        const pontos = dados.map(d => ({ codigoPoco: d.codigoPoco, total: d.totalMinerais }));
        console.log('[minerals] amostra dos pontos', pontos.slice(0, 10));
        const idCamada = layerIdFor(tipoAnalise);
        const idLegenda = legendIdFor(tipoAnalise);
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.gerarMapaDistribuicaoEB)({
            jimuMapView, dados: pontos, colorFill: 'rgb(253,142,55)',
            idCamada, idLegenda,
            titleLegenda: (withInterest ? 'Intervalo de Interesse - ' : '') + labelFromValue(tipoAnalise),
            withInterest
        });
        const lyr = view.map.findLayerById(idCamada);
        console.log('[minerals] layer criada?', !!lyr, lyr);
        if (lyr)
            disableClusterNumbers(lyr);
    }
    catch (e) {
        console.error('[minerals] ERRO desenharDistribuicaoMinerais', e);
    }
    finally {
        console.groupEnd();
    }
}
/** Aplica visual variable de COR por cima da camada base (sem mexer no tamanho/cluster) */
function aplicarColorizacaoPorAgrupador(jimuMapView, tipoAnalise, dadosAgrupadores, agrupador) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        console.groupCollapsed('[minerals] aplicarColorizacaoPorAgrupador');
        try {
            const { view } = jimuMapView;
            const layer = (_a = view === null || view === void 0 ? void 0 : view.map) === null || _a === void 0 ? void 0 : _a.findLayerById(layerIdFor(tipoAnalise));
            if (!layer) {
                console.warn('[minerals] camada base não encontrada');
                return;
            }
            if (!Array.isArray(dadosAgrupadores) || dadosAgrupadores.length === 0) {
                console.warn('[minerals] agrupadores vazios');
                return;
            }
            // índice por poço
            const byPoco = new Map();
            for (const it of dadosAgrupadores)
                byPoco.set(Number(it.codigoPoco), it);
            // definimos um campo "md_val" para o visual variable de cor
            const fieldVar = 'md_val';
            // 1) Atualiza atributos por poço com o valor do agrupador escolhido
            console.time('[minerals] queryFeatures base');
            const featureSet = yield layer.queryFeatures({ where: '1=1', returnGeometry: true, outFields: ['*'] });
            console.timeEnd('[minerals] queryFeatures base');
            const updates = [];
            let minVal = Number.POSITIVE_INFINITY;
            let maxVal = Number.NEGATIVE_INFINITY;
            for (const f of featureSet.features) {
                const codigo = Number((_g = (_e = (_c = (_b = f.attributes) === null || _b === void 0 ? void 0 : _b.POCO_CD_POCO) !== null && _c !== void 0 ? _c : (_d = f.attributes) === null || _d === void 0 ? void 0 : _d.codigoPoco) !== null && _e !== void 0 ? _e : (_f = f.attributes) === null || _f === void 0 ? void 0 : _f.poco) !== null && _g !== void 0 ? _g : (_h = f.attributes) === null || _h === void 0 ? void 0 : _h.codigo);
                const ag = byPoco.get(codigo);
                let val = 0;
                if (ag) {
                    if (agrupador === 'analise')
                        val = ag.qtAnalise;
                    else if (agrupador === 'media')
                        val = ag.valorMedio;
                    else
                        val = ag.valorMaximo;
                }
                f.attributes[fieldVar] = val;
                minVal = Math.min(minVal, val);
                maxVal = Math.max(maxVal, val);
                updates.push(f);
            }
            console.log('[minerals] intervalo valores', { minVal, maxVal, updates: updates.length });
            if (updates.length > 0) {
                console.time('[minerals] applyEdits');
                yield layer.applyEdits({ updateFeatures: updates });
                console.timeEnd('[minerals] applyEdits');
            }
            // 2) Monta os stops
            const diff = maxVal - minVal;
            const buildLabel = (v) => agrupador === 'analise' ? `${v}` : `${v} %`;
            let stops;
            if (diff < 3) {
                stops = [
                    { value: minVal, color: 'rgb(249,238,225)', label: buildLabel(minVal) },
                    { value: maxVal, color: 'rgb(165,60,2)', label: buildLabel(maxVal) }
                ];
            }
            else if (diff < 5) {
                const step = Math.round(diff / 4) || 1;
                stops = [
                    { value: minVal, color: 'rgb(249,238,225)', label: buildLabel(minVal) },
                    { value: minVal + 2 * step, color: 'rgb(253,142,55)', label: buildLabel(minVal + 2 * step) },
                    { value: maxVal, color: 'rgb(165,60,2)', label: buildLabel(maxVal) }
                ];
            }
            else {
                const step = Math.round(diff / 4) || 1;
                stops = [
                    { value: minVal, color: 'rgb(249,238,225)', label: buildLabel(minVal) },
                    { value: minVal + 1 * step, color: 'rgb(251,190,130)', label: buildLabel(minVal + 1 * step) },
                    { value: minVal + 2 * step, color: 'rgb(253,142,55)', label: buildLabel(minVal + 2 * step) },
                    { value: maxVal - 1 * step, color: 'rgb(233,85,6)', label: buildLabel(maxVal - 1 * step) },
                    { value: maxVal, color: 'rgb(165,60,2)', label: buildLabel(maxVal) }
                ];
            }
            // 3) Aplica visual variable de cor
            const renderer = ((_j = layer.renderer) === null || _j === void 0 ? void 0 : _j.clone) ? layer.renderer.clone() : layer.renderer;
            const colorVisVar = {
                type: 'color',
                field: fieldVar,
                legendOptions: { title: '' },
                stops
            };
            renderer.visualVariables = [colorVisVar];
            layer.renderer = renderer;
            console.log('[minerals] visualVariables aplicadas');
        }
        catch (e) {
            console.error('[minerals] ERRO aplicarColorizacaoPorAgrupador', e);
        }
        finally {
            console.groupEnd();
        }
    });
}
/** Label humano para o título da legenda/base */
function labelFromValue(v) {
    var _a;
    const f = MINERAL_OPTIONS.find(o => o.value === v);
    return (_a = f === null || f === void 0 ? void 0 : f.label) !== null && _a !== void 0 ? _a : String(v);
}


/***/ }),

/***/ "./your-extensions/widgets/mapa-de-minerais-search-map/src/runtime/utils.ts":
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/mapa-de-minerais-search-map/src/runtime/utils.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coresTipos: () => (/* binding */ coresTipos),
/* harmony export */   gerarMapaDistribuicaoEB: () => (/* binding */ gerarMapaDistribuicaoEB)
/* harmony export */ });
/* harmony import */ var _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @arcgis/core/layers/FeatureLayer */ "@arcgis/core/layers/FeatureLayer");
/* harmony import */ var _arcgis_core_widgets_Legend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @arcgis/core/widgets/Legend */ "@arcgis/core/widgets/Legend");
/* harmony import */ var _arcgis_core_renderers_ClassBreaksRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @arcgis/core/renderers/ClassBreaksRenderer */ "@arcgis/core/renderers/ClassBreaksRenderer");
/* harmony import */ var _arcgis_core_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @arcgis/core/symbols/SimpleMarkerSymbol */ "@arcgis/core/symbols/SimpleMarkerSymbol");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// utils.ts (ESM @arcgis/core)




const coresTipos = {
    lateral: "rgba(88, 19, 252, 0.7)",
    testemunho: "rgba(255, 0, 255, 0.7)",
    calha: "rgba(245, 201, 38, 0.7)",
    plug: "rgba(125, 253, 148, 0.7)",
    "whole core": "rgba(255, 43, 24, 0.7)"
};
function gerarMapaDistribuicaoEB(_a) {
    return __awaiter(this, arguments, void 0, function* ({ jimuMapView, dados, colorFill, idCamada, idLegenda, titleLegenda }) {
        var _b;
        console.groupCollapsed(`[dist-eb] gerarMapaDistribuicaoEB id=${idCamada}`);
        console.time(`[dist-eb] tempo-total ${idCamada}`);
        try {
            const view = jimuMapView.view;
            const map = view.map;
            console.log('[dist-eb] qtd dados', dados.length, dados.slice(0, 10));
            if (!Array.isArray(dados) || dados.length === 0) {
                console.warn('[dist-eb] sem dados -> não cria camada');
                return;
            }
            // Normaliza lista de códigos (apenas números)
            const codigosArr = dados.map(p => Number(p.codigoPoco)).filter(v => Number.isFinite(v));
            const codigos = codigosArr.join(',');
            if (!codigos) {
                console.warn('[dist-eb] lista de códigos vazia após normalização');
                return;
            }
            const expression = `POCO_CD_POCO IN (${codigos})`;
            console.log('[dist-eb] definitionExpression', expression);
            // Layer base do serviço
            const camadaPocosSrv = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_0__["default"]({
                url: 'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Feature_Pocos/MapServer/0',
                definitionExpression: expression,
                title: 'Poços (base)',
                outFields: ['*'],
                visible: false
            });
            console.time('[dist-eb] load camadaPoços');
            yield camadaPocosSrv.load();
            console.timeEnd('[dist-eb] load camadaPoços');
            // OID real do serviço (pode ser POCO_CD_POCO)
            const objectIdField = camadaPocosSrv.objectIdField || 'OBJECTID';
            console.log('[dist-eb] objectIdField do serviço:', objectIdField);
            console.time('[dist-eb] queryFeatures');
            const queryResult = yield camadaPocosSrv.queryFeatures({
                where: expression,
                outFields: ['*'],
                returnGeometry: true
            });
            console.timeEnd('[dist-eb] queryFeatures');
            console.log('[dist-eb] features retornadas', queryResult.features.length);
            // Atribui TOTAL e inicializa md_val
            const features = queryResult.features.map((feature) => {
                const codigo = Number(feature.attributes.POCO_CD_POCO);
                const dado = dados.find(p => p.codigoPoco === codigo);
                const total = dado ? Number(dado.total) : 0;
                feature.attributes.POCO_MD_MERID_CENT = total;
                feature.attributes.md_val = 0; // usado pelos agrupadores
                return feature;
            });
            // Estatística para classes/bubble
            const valores = dados.map(p => Number(p.total)).filter(v => Number.isFinite(v));
            let min = Math.min(...valores);
            let max = Math.max(...valores);
            console.log('[dist-eb] min/max antes', { min, max });
            const info = [];
            const outline = { color: "black", width: "1px" };
            if (!Number.isFinite(min) || !Number.isFinite(max)) {
                console.warn('[dist-eb] valores inválidos -> não cria camada');
                return;
            }
            if (min === 0 && max === 0) {
                info.push({
                    minValue: 0, maxValue: 0,
                    label: "Não há dados suficientes",
                    symbol: new _arcgis_core_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_3__["default"]({ color: "rgba(255,255,255,0)", size: 0, style: "circle", outline })
                });
            }
            else {
                const zerados = valores.filter(v => v === 0).length;
                const naoZerados = valores.filter(v => v > 0);
                console.log('[dist-eb] zerados/naoZerados', { zerados, naoZerados: naoZerados.length });
                if (zerados > 0) {
                    info.push({
                        minValue: 0, maxValue: 0,
                        label: `| 0 | (${zerados} poço${zerados > 1 ? 's' : ''})`,
                        symbol: new _arcgis_core_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_3__["default"]({ color: "rgba(200,200,200,0.3)", size: 6, style: "circle", outline })
                    });
                }
                min = Math.max(1, min);
                const n = naoZerados.length;
                const numClasses = Math.max(2, Math.round(1 + 3.3 * Math.log10(n || 1)));
                const breaks = Math.ceil((max - min + 1) / Math.max(1, numClasses));
                const maxSize = 40;
                console.log('[dist-eb] classes', { numClasses, breaks, maxSize });
                for (let i = 0; i < numClasses; i++) {
                    const minValue = min + (i * breaks);
                    const maxValue = min + ((i + 1) * breaks) - 1;
                    if (minValue > max)
                        break;
                    const count = naoZerados.filter(v => v >= minValue && v <= maxValue).length;
                    const label = `${minValue} |---| ${maxValue} (${count} poço${count > 1 ? 's' : ''})`;
                    const size = 6 + (i * (maxSize / numClasses));
                    info.push({
                        minValue, maxValue, label,
                        symbol: new _arcgis_core_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_3__["default"]({ color: colorFill, size, style: "circle", outline })
                    });
                }
            }
            const renderer = new _arcgis_core_renderers_ClassBreaksRenderer__WEBPACK_IMPORTED_MODULE_2__["default"]({
                field: "POCO_MD_MERID_CENT",
                classBreakInfos: info
            });
            // Schema do layer client-side:
            // - herda campos do serviço
            // - remove duplicatas que vamos adicionar
            const baseFields = camadaPocosSrv.fields.filter(f => (f === null || f === void 0 ? void 0 : f.name) !== 'POCO_MD_MERID_CENT' && (f === null || f === void 0 ? void 0 : f.name) !== 'md_val');
            const fields = [
                ...baseFields,
                { name: "POCO_MD_MERID_CENT", alias: "Valor (Minerais/Amostras)", type: "double" },
                { name: "md_val", alias: "Valor Agrupador", type: "double" }
            ];
            // Remove camada anterior (se existir)
            const existente = map.findLayerById(idCamada);
            if (existente) {
                console.log('[dist-eb] remove camada existente', idCamada);
                map.remove(existente);
            }
            // Cria camada client-side com o OID real do serviço
            const camadaDistribuicao = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_0__["default"]({
                id: idCamada,
                source: features,
                fields,
                objectIdField, // <<< herdado do serviço (ex.: 'POCO_CD_POCO')
                geometryType: "point",
                spatialReference: (_b = view.spatialReference) !== null && _b !== void 0 ? _b : { wkid: 102100 },
                renderer,
                title: titleLegenda,
                listMode: "hide",
                featureReduction: { type: "cluster", clusterMinSize: 18, clusterMaxSize: 48, labelsVisible: false }
            });
            map.add(camadaDistribuicao);
            console.log('[dist-eb] camada adicionada', idCamada, 'features:', features.length);
            // (Opcional) legenda no mapa
            const legend = new _arcgis_core_widgets_Legend__WEBPACK_IMPORTED_MODULE_1__["default"]({
                view,
                layerInfos: [{ layer: camadaDistribuicao, title: titleLegenda }]
            });
            // view.ui.add(legend, "bottom-left")
        }
        catch (e) {
            console.error('[dist-eb] ERRO ao gerarMapaDistribuicaoEB', e);
        }
        finally {
            console.timeEnd(`[dist-eb] tempo-total ${idCamada}`);
            console.groupEnd();
        }
    });
}


/***/ }),

/***/ "@arcgis/core/layers/FeatureLayer":
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__;

/***/ }),

/***/ "@arcgis/core/renderers/ClassBreaksRenderer":
/*!*****************************************************!*\
  !*** external "esri/renderers/ClassBreaksRenderer" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_renderers_ClassBreaksRenderer__;

/***/ }),

/***/ "@arcgis/core/symbols/SimpleMarkerSymbol":
/*!**************************************************!*\
  !*** external "esri/symbols/SimpleMarkerSymbol" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_symbols_SimpleMarkerSymbol__;

/***/ }),

/***/ "@arcgis/core/widgets/Legend":
/*!**************************************!*\
  !*** external "esri/widgets/Legend" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Legend__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************************************************************!*\
  !*** ./your-extensions/widgets/mapa-de-minerais-search-map/src/runtime/widget.tsx ***!
  \************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/mapa-de-minerais-search-map/src/runtime/utils.ts");
/* harmony import */ var _Minerals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Minerals */ "./your-extensions/widgets/mapa-de-minerais-search-map/src/runtime/Minerals.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */
/** @jsxFrag React.Fragment */




/* ===== Config ===== */
const DEFAULT_FAIXA_INTERESSE = false;
/* ===== Layout ===== */
const DEFAULT_WIDTH = 360;
const PANEL_MARGIN_TOP = 50;
const PANEL_MARGIN_RIGHT = 10;
const DEFAULT_HEIGHT = 650;
/* ===== Campos por tipo (amostras) ===== */
const TYPE_FIELD = {
    lateral: 'totalAmostrasLaterais',
    testemunho: 'totalTestemunhos',
    calha: 'totalCalhas',
    plug: 'totalPlugs',
    'whole core': 'totalWholeCore'
};
const LIST_TYPES = Object.keys(TYPE_FIELD);
const log10 = (x) => (Math.log10 ? Math.log10(x) : Math.log(x) / Math.LN10);
/* ===== Fetch base (amostras) ===== */
function buildSessionBody(faixaInteresse) {
    const p = new URLSearchParams();
    p.set('hdSys', 'novaintcons');
    p.set('hdUC', 'Mapa');
    p.set('hdAcao', 'CarregarMapaDistribuicaoAmostrasContador');
    p.set('hdSessionFilter', 'true');
    p.set('faixaInteresse', String(!!faixaInteresse));
    return p.toString();
}
function normalizeList(raw) {
    return (Array.isArray(raw) ? raw : [])
        .map((r) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        return ({
            codigoPoco: Number((_d = (_c = (_b = (_a = r.codigoPoco) !== null && _a !== void 0 ? _a : r.POCO_CD_POCO) !== null && _b !== void 0 ? _b : r.poco) !== null && _c !== void 0 ? _c : r.codigo) !== null && _d !== void 0 ? _d : 0),
            totalAmostrasLaterais: Number((_f = (_e = r.totalAmostrasLaterais) !== null && _e !== void 0 ? _e : r.laterais) !== null && _f !== void 0 ? _f : 0),
            totalCalhas: Number((_h = (_g = r.totalCalhas) !== null && _g !== void 0 ? _g : r.calhas) !== null && _h !== void 0 ? _h : 0),
            totalPlugs: Number((_k = (_j = r.totalPlugs) !== null && _j !== void 0 ? _j : r.plugs) !== null && _k !== void 0 ? _k : 0),
            totalTestemunhos: Number((_m = (_l = r.totalTestemunhos) !== null && _l !== void 0 ? _l : r.testemunhos) !== null && _m !== void 0 ? _m : 0),
            totalWholeCore: Number((_p = (_o = r.totalWholeCore) !== null && _o !== void 0 ? _o : r.wholeCore) !== null && _p !== void 0 ? _p : 0)
        });
    })
        .filter((x) => !!x.codigoPoco);
}
function fetchViaParent(body) {
    console.groupCollapsed('[amostras] fetchViaParent');
    console.log('[amostras] body', body);
    return new Promise((resolve, reject) => {
        var _a;
        const reqId = Math.random().toString(36).slice(2);
        let targetOrigin = '*';
        try {
            if (document.referrer)
                targetOrigin = new URL(document.referrer).origin;
        }
        catch (_b) { }
        const OK = 'fetchDistribuicaoAmostras:ok';
        const ERR = 'fetchDistribuicaoAmostras:err';
        const onMessage = (event) => {
            const d = (event === null || event === void 0 ? void 0 : event.data) || {};
            if (!d || d.reqId !== reqId)
                return;
            console.log('[amostras] resposta do pai', {
                receivedType: d.type,
                expectedOk: OK,
                expectedErr: ERR,
                origin: event.origin,
                sameOrigin: event.origin === window.location.origin,
                reqId,
            });
            if (d.type === OK) {
                try {
                    clearTimeout(to);
                }
                catch (_a) { }
                window.removeEventListener('message', onMessage);
                const count = Array.isArray(d.payload) ? d.payload.length : null;
                console.log('[amostras] OK — normalizando payload', { count, sample: Array.isArray(d.payload) ? d.payload.slice(0, 3) : d.payload });
                console.groupEnd();
                resolve(normalizeList(d.payload));
            }
            else if (d.type === ERR) {
                try {
                    clearTimeout(to);
                }
                catch (_b) { }
                window.removeEventListener('message', onMessage);
                console.warn('[amostras] ERRO do pai', d.message);
                console.groupEnd();
                reject(new Error(d.message || 'Erro no fetch via parent'));
            }
            else {
                // Mensagem com reqId certo mas type diferente — apenas ignore (pode ser outra pipeline)
                console.warn('[amostras] ignorando mensagem com reqId válido porém type inesperado:', d.type);
            }
        };
        window.addEventListener('message', onMessage);
        const to = window.setTimeout(() => {
            window.removeEventListener('message', onMessage);
            console.warn('[amostras] TIMEOUT aguardando resposta do pai', { reqId, expected: [OK, ERR] });
            console.groupEnd();
            reject(new Error('Timeout aguardando resposta do pai (amostras)'));
        }, 20000);
        (_a = window.parent) === null || _a === void 0 ? void 0 : _a.postMessage({ type: 'fetchDistribuicaoAmostras', body, reqId }, targetOrigin);
        console.log('[amostras] postMessage -> PAI', {
            type: 'fetchDistribuicaoAmostras',
            targetOrigin,
            reqId
        });
    });
}
function fetchDistribuicaoAmostras() {
    return __awaiter(this, arguments, void 0, function* (faixaInteresse = false) {
        const body = buildSessionBody(faixaInteresse);
        return fetchViaParent(body);
    });
}
/* ===== Estilos ===== */
const MAX_BUBBLE = 40;
const globalPanelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  div[role='dialog'][aria-label='mapa-de-distribuicao'],
  div[role='dialog'][aria-label='mapa-de-distribuicao-v2'] {
    position: absolute !important;
    inset: ${PANEL_MARGIN_TOP}px ${PANEL_MARGIN_RIGHT}px auto auto !important;
    transform: none !important;
    z-index: 9999 !important;
    width: ${DEFAULT_WIDTH}px !important;
    height: ${DEFAULT_HEIGHT}px !important;
    max-height: calc(100% - 24px) !important;
    overflow: visible !important;
  }
`;
const legendHeaderStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `font-weight:600;margin:4px 0;font-size:.85rem;line-height:1.1;`;
const bubbleBoxStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `width:${MAX_BUBBLE}px;height:${MAX_BUBBLE}px;display:flex;align-items:center;justify-content:center;margin-right:8px;`;
const wrapperStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `position:relative;width:100%;height:100%;background:#fff;border:1px solid #ddd;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,.1);padding:16px;overflow:hidden;`;
const titleStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `font-weight:600;margin-bottom:4px;display:block;`;
const selectStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `width:100%;padding:6px 8px;margin-bottom:12px;border:1px solid #ccc;border-radius:4px;`;
/** Grid usada para opções (amostras) – 2 colunas, fluxo por linhas (mantém Testemunhos dentro do bloco cinza) */
const listStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  overflow: visible;
  margin-bottom: 8px;
  padding: 4px;
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 1fr));
  grid-auto-rows: minmax(24px, auto);
  grid-auto-flow: row;
  column-gap: 4px;
  row-gap: 2px;
  align-items: start;
`;
/** rótulo compacto serve para checkbox e radio */
const checkboxLabelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  display: inline-grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 6px;
  padding: 1px 2px;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  min-width: 0;
  box-sizing: border-box;
  overflow: hidden;

  & > * { margin: 0 !important; padding: 0 !important; }
  input[type='checkbox'], input[type='radio'] { width: 14px; height: 14px; margin: 0 !important; flex: 0 0 auto; }

  .lbl { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: .84rem; line-height: 1.15; padding-bottom: 1px; }
`;
/** Grid dos rádios de minerais (2 colunas / 3 linhas) */
const mineralsListStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  overflow: visible;
  margin-bottom: 8px;
  padding: 4px;
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 4px;

  display: grid;
  grid-template-columns: minmax(140px, 1fr) minmax(140px, 1fr);
  grid-template-rows: repeat(3, minmax(24px, auto));
  column-gap: 4px;
  row-gap: 2px;
  align-items: start;

  /* DRX-Total (Row1, Col1) */
  label[data-key='DRX-TOT'] { grid-column: 1; grid-row: 1; }
  /* Qemscan-Massa (Row1, Col2) */
  label[data-key='MASSA']   { grid-column: 2; grid-row: 1; }
  /* DRX-Argilominerais (Row2, Col1) */
  label[data-key='DRX-ARG'] { grid-column: 1; grid-row: 2; }
  /* Qemscan-Área (Row2, Col2) */
  label[data-key='AREA']    { grid-column: 2; grid-row: 2; }
  /* "Todas as Análises" (Row3, ocupando 2 colunas) */
  label[data-key='todasAnalises'] { grid-column: 1 / span 2; grid-row: 3; }
`;
const summaryListStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `max-height:300px;overflow-y:auto;margin-top:8px;padding:8px 8px 36px;background:#fff;border:1px solid #ddd;border-radius:4px;position:relative;`;
const summaryItemStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `display:flex;align-items:center;margin:2px;`;
const rangeLabelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `font-size:.78rem;line-height:1.1;`;
const footerStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `position: sticky; bottom: 0; background: #fff; border-top: 1px solid #eee; padding: 4px 0; display: flex; flex-direction: column; align-items: flex-start; gap: 6px;`;
const footerLabelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `display:flex;align-items:center;gap:6px;padding-left:.5em;cursor:pointer;font-size:.9rem;`;
const footerLabelStyleInteresse = footerLabelStyle;
/* ===== Sumário (amostras/ minerais) ===== */
function calcularQuebras(dados, colorFill) {
    const valores = dados.map((p) => Number(p.total) || 0);
    let min = Math.min(...valores);
    let max = Math.max(...valores);
    const info = [];
    if (!isFinite(min) || !isFinite(max))
        return info;
    if (min === 0 && max === 0) {
        info.push({ label: 'Não há dados suficientes', size: 0, cor: colorFill, count: 0 });
    }
    else {
        const zerados = valores.filter((v) => v === 0).length;
        const naoZerados = valores.filter((v) => v > 0);
        if (zerados > 0) {
            info.push({ label: `| 0 | (${zerados} poço${zerados > 1 ? 's' : ''})`, size: 6, cor: 'rgba(200,200,200,0.3)', count: zerados });
        }
        min = 1;
        const n = naoZerados.length;
        const numClasses = Math.max(2, Math.round(1 + 3.3 * log10(n || 1)));
        const breaks = Math.ceil((max - min + 1) / Math.max(1, numClasses));
        const maxSize = MAX_BUBBLE;
        for (let i = 0; i < numClasses; i++) {
            const minValue = min + i * breaks;
            const maxValue = min + (i + 1) * breaks - 1;
            if (minValue > max)
                break;
            const count = naoZerados.filter((v) => v >= minValue && v <= maxValue).length;
            const label = `${minValue} |---| ${maxValue} (${count} poço${count > 1 ? 's' : ''})`;
            const size = 6 + i * (maxSize / numClasses);
            info.push({ label, size, cor: colorFill, count });
        }
    }
    return info;
}
/* ===== Helpers dialog/posicionamento ===== */
function findClosestDialog(el) {
    var _a;
    let cur = el;
    while (cur) {
        if (cur.getAttribute && cur.getAttribute('role') === 'dialog')
            return cur;
        cur = (_a = cur === null || cur === void 0 ? void 0 : cur.parentElement) !== null && _a !== void 0 ? _a : null;
    }
    return null;
}
function isDialogHidden(dlg) {
    const cs = getComputedStyle(dlg);
    return dlg.getAttribute('aria-hidden') === 'true' || cs.display === 'none' || cs.visibility === 'hidden';
}
let _applyingStyle = false;
function forcePanelStyle(dlg) {
    if (_applyingStyle)
        return;
    _applyingStyle = true;
    try {
        const s = dlg.style;
        if (s.getPropertyValue('position') !== 'absolute')
            s.setProperty('position', 'absolute', 'important');
        s.removeProperty('left');
        s.removeProperty('bottom');
        s.removeProperty('transform');
        s.setProperty('inset', 'auto auto auto auto');
        s.setProperty('top', `${PANEL_MARGIN_TOP}px`, 'important');
        s.setProperty('right', `${PANEL_MARGIN_RIGHT}px`, 'important');
        if (s.getPropertyValue('width') !== `${DEFAULT_WIDTH}px`)
            s.setProperty('width', `${DEFAULT_WIDTH}px`, 'important');
        if (s.getPropertyValue('height') !== `${DEFAULT_HEIGHT}px`)
            s.setProperty('height', `${DEFAULT_HEIGHT}px`, 'important');
        if (s.getPropertyValue('max-height') !== 'calc(100% - 24px)')
            s.setProperty('max-height', 'calc(100% - 24px)', 'important');
        if (s.getPropertyValue('overflow') !== 'visible')
            s.setProperty('overflow', 'visible', 'important');
        if (s.getPropertyValue('z-index') !== '9999')
            s.setProperty('z-index', '9999', 'important');
    }
    finally {
        _applyingStyle = false;
    }
}
function useForceRightPosition(rootRef) {
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        let cleanup = null;
        const apply = () => {
            const dlg = (rootRef.current && rootRef.current.closest('[role="dialog"]')) ||
                document.querySelector('div[role="dialog"][aria-label="mapa-de-distribuicao-v2"]') ||
                document.querySelector('div[role="dialog"][aria-label="mapa-de-distribuicao"]');
            if (!dlg)
                return;
            forcePanelStyle(dlg);
            const mo = new MutationObserver((mutations) => {
                if (_applyingStyle)
                    return;
                if (mutations.some((m) => m.attributeName === 'style')) {
                    const s = dlg.style;
                    const drift = s.getPropertyValue('position') !== 'absolute'
                        || s.getPropertyValue('top') !== `${PANEL_MARGIN_TOP}px`
                        || s.getPropertyValue('right') !== `${PANEL_MARGIN_RIGHT}px`
                        || (s.transform && s.transform !== 'none');
                    if (drift)
                        forcePanelStyle(dlg);
                }
            });
            mo.observe(dlg, { attributes: true, attributeFilter: ['style'] });
            let to;
            const onResize = () => { clearTimeout(to); to = setTimeout(() => forcePanelStyle(dlg), 80); };
            window.addEventListener('resize', onResize);
            cleanup = () => { mo.disconnect(); window.removeEventListener('resize', onResize); };
        };
        requestAnimationFrame(apply);
        setTimeout(apply, 80);
        setTimeout(apply, 300);
        return () => { cleanup === null || cleanup === void 0 ? void 0 : cleanup(); };
    }, [rootRef]);
}
const layerIdForSample = (tipo) => `amostras_${tipo.replace(/\s+/g, '_')}`;
function clearAmostras(view) {
    var _a, _b, _c, _d, _e, _f;
    try {
        const all = (_f = (_c = (_b = (_a = view.map.allLayers) === null || _a === void 0 ? void 0 : _a.toArray) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : (_e = (_d = view.map.layers) === null || _d === void 0 ? void 0 : _d.toArray) === null || _e === void 0 ? void 0 : _e.call(_d)) !== null && _f !== void 0 ? _f : [];
        all.forEach((ly) => { var _a; const id = String((_a = ly === null || ly === void 0 ? void 0 : ly.id) !== null && _a !== void 0 ? _a : ''); if (id.startsWith('amostras_'))
            view.map.remove(ly); });
    }
    catch (_g) { }
}
function clearMinerais(view) {
    var _a, _b, _c, _d, _e, _f;
    try {
        const all = (_f = (_c = (_b = (_a = view.map.allLayers) === null || _a === void 0 ? void 0 : _a.toArray) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : (_e = (_d = view.map.layers) === null || _d === void 0 ? void 0 : _d.toArray) === null || _e === void 0 ? void 0 : _e.call(_d)) !== null && _f !== void 0 ? _f : [];
        const toRemove = [];
        all.forEach((ly) => {
            var _a;
            const id = String((_a = ly === null || ly === void 0 ? void 0 : ly.id) !== null && _a !== void 0 ? _a : '');
            if (/^minerais_/i.test(id))
                toRemove.push(ly);
        });
        toRemove.forEach(ly => view.map.remove(ly));
        console.log('[widget] clearMinerais -> removidas', toRemove.map(l => l.id));
    }
    catch (e) {
        console.warn('[widget] clearMinerais falhou', e);
    }
}
function clearLayerOfTipo(view, tipo) {
    try {
        const lyr = view.map.findLayerById(layerIdForSample(tipo));
        if (lyr)
            view.map.remove(lyr);
    }
    catch (_a) { }
}
function disableClusterNumbers(lyr) {
    try {
        if (!lyr)
            return;
        if (lyr.featureReduction && lyr.featureReduction.type === 'cluster') {
            lyr.featureReduction = Object.assign(Object.assign({}, lyr.featureReduction), { labelsVisible: false });
        }
        if ('labelsVisible' in lyr)
            lyr.labelsVisible = false;
        if ('labelingInfo' in lyr)
            lyr.labelingInfo = [];
        if (Array.isArray(lyr.sublayers))
            lyr.sublayers.forEach((sl) => disableClusterNumbers(sl));
    }
    catch (_a) { }
}
/* ===== Componente ===== */
function Widget(props) {
    var _a;
    const [jimuMapView, setJimuMapView] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState();
    const [categoria, setCategoria] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(''); // 'sample' | 'minerals'
    const [tiposSel, setTiposSel] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]); // amostras (checkboxes)
    const [showEmpty, setShowEmpty] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    // Interesse
    const [withInterest, setWithInterest] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [showWithInterest, setshowWithInterest] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [faixaSet, setFaixaSet] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(() => new Set((Array.isArray(props === null || props === void 0 ? void 0 : props.codigosFaixaInteresse) ? props.codigosFaixaInteresse : [])
        .map((v) => Number(v)).filter((v) => !isNaN(v))));
    // Bases (amostras)
    const [dadosFull, setDadosFull] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [dadosFaixaAPI, setDadosFaixaAPI] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    // Minerais
    const [mineralAnalise, setMineralAnalise] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(''); // rádio (DRX/Qemscan/Todas)
    const [listaMinerais, setListaMinerais] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [buscaMineral, setBuscaMineral] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('');
    const [mineralSelecionado, setMineralSelecionado] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [agrupador, setAgrupador] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(''); // agrupadores
    const [dadosMinerais, setDadosMinerais] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [loadingMinerais, setLoadingMinerais] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [errorMinerais, setErrorMinerais] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('');
    // Loading / erros (amostras)
    const [loadingFull, setLoadingFull] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [loadingInterest, setLoadingInterest] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [errorFull, setErrorFull] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('');
    const [errorInterest, setErrorInterest] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('');
    const rootRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    useForceRightPosition(rootRef);
    const interestManualRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(false);
    /* >>> Sinaliza ao PAI que o widget está pronto (para ele mandar codigos/config) */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        var _a;
        let targetOrigin = '*';
        try {
            if (document.referrer)
                targetOrigin = new URL(document.referrer).origin;
        }
        catch (_b) { }
        // avisa que o widget está pronto
        (_a = window.parent) === null || _a === void 0 ? void 0 : _a.postMessage({ type: 'widgetReady' }, targetOrigin);
        console.log('[widget] widgetReady enviado para', targetOrigin);
    }, []);
    /* Recebe mensagens do PAI (faixa-interesse, legend:minerais, config) */
    // Mensagens vindas do PAI (Explora): faixa-interesse, config, legend:minerais
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        console.log('[widget][msg] listener ON — aguardando mensagens do pai…', {
            selfOrigin: window.location.origin,
            referrer: document.referrer || '(sem referrer)'
        });
        const onMsg = (ev) => {
            const data = ev === null || ev === void 0 ? void 0 : ev.data;
            if (!data || !data.type)
                return;
            console.groupCollapsed(`[widget][msg] recebido type="${data.type}"`);
            console.log('origin:', ev.origin, 'source===parent?', ev.source === window.parent);
            console.log('payload bruto:', data);
            if (data.type === 'faixa-interesse' && Array.isArray(data.codigosPocos)) {
                const nums = data.codigosPocos
                    .map((v) => Number(v))
                    .filter((v) => !isNaN(v));
                console.log('[widget][msg] faixa-interesse => normalizados:', {
                    recebidos: data.codigosPocos.length,
                    validos: nums.length,
                    preview: nums.slice(0, 10)
                });
                // estado atual antes de decidir
                console.log('[widget][msg] estado ANTES (faixa-interesse):', {
                    showWithInterest,
                    withInterest,
                    interestManual: interestManualRef.current
                });
                // aplica o Set de códigos
                setFaixaSet(new Set(nums));
                // só exibimos/checamos se o pai quer que apareça (respeito é tratado no outro useEffect);
                // aqui apenas "propomos" exibir caso venha faixa com elementos
                if (nums.length > 0) {
                    console.log('[widget][msg] haverá tentativa de exibir/checar o intervalo (dependendo do outro efeito e do manualRef)');
                    setshowWithInterest(true);
                    if (!interestManualRef.current) {
                        console.log('[widget][msg] marcando withInterest automaticamente (usuário ainda não alterou manualmente)');
                        setWithInterest(true);
                    }
                    else {
                        console.log('[widget][msg] NÃO marcamos withInterest (usuário já mexeu manualmente)');
                    }
                }
                else {
                    console.log('[widget][msg] lista da faixa está vazia — não alteramos withInterest');
                }
                // loga o estado “logo após” o ciclo atual de render (melhor visibilidade)
                setTimeout(() => {
                    console.log('[widget][msg] estado APÓS setState (faixa-interesse):', {
                        showWithInterest,
                        withInterest,
                        interestManual: interestManualRef.current
                    });
                }, 0);
                console.groupEnd();
                return;
            }
            if (data.type === 'fetchDistribuicaoAmostras:ok') {
                const cfg = data;
                console.log('[widget][msg] fetchDistribuicaoAmostras:ok recebida:', cfg);
                //Ajustando intervalo de interesse para aparecer
                setWithInterest(cfg['message']['visible']);
                setshowWithInterest((cfg['message']['visible']));
                console.log('[widget][msg] estado ANTES (fetchDistribuicaoAmostras:ok):', {
                    showWithInterest,
                    withInterest,
                    interestManual: interestManualRef.current
                });
                if (cfg.startWithInterest) {
                    console.log('[widget][msg] pai sinalizou startWithInterest=TRUE -> mostrar checkbox');
                    setshowWithInterest(true);
                    if (!interestManualRef.current) {
                        console.log('[widget][msg] marcando withInterest porque usuário não mexeu manualmente');
                        setWithInterest(true);
                    }
                    else {
                        console.log('[widget][msg] NÃO marcamos withInterest (respeitando escolha manual prévia)');
                    }
                }
                else {
                    console.log('[widget][msg] startWithInterest ausente/falso — não forçamos nada aqui');
                }
                setTimeout(() => {
                    console.log('[widget][msg] estado APÓS setState (fetchDistribuicaoAmostras:ok):', {
                        showWithInterest,
                        withInterest,
                        interestManual: interestManualRef.current
                    });
                }, 0);
                console.groupEnd();
                return;
            }
            if (data.type === 'legend:minerais' || data.type === 'fetchDistribuicaoMinerais:ok') {
                const _msg = data;
                console.log('[widget][msg] legend:minerais payload:', _msg === null || _msg === void 0 ? void 0 : _msg.payload);
                console.groupEnd();
                return;
            }
            console.log("TESTE: ", data);
            if (data.type === 'config' || data.type === 'fetchDistribuicaoMinerais:ok') {
                const cfg = data;
                console.log('[widget][msg] config recebida:', cfg);
                console.log('[widget][msg] **cgVisible do pai** =', cfg.cgVisible); // <<< imprime o 'visible'
                // Mostrar/ocultar o checkbox de Intervalo de Interesse de acordo com a visibilidade no pai
                if (cfg.cgVisible === true) {
                    setshowWithInterest(true);
                    // Se pai também pediu para começar marcado e o usuário ainda não mexeu:
                    if (cfg.startWithInterest && !interestManualRef.current) {
                        setWithInterest(true);
                    }
                }
                else {
                    // Não mostrar (nem marcado) quando o checkbox não é visível no pai
                    setshowWithInterest(false);
                    if (!interestManualRef.current)
                        setWithInterest(false);
                }
                // só pra depuração do resultado final neste tick:
                setTimeout(() => {
                    console.log('[widget][msg] estado pós-config:', {
                        showWithInterest,
                        withInterest,
                        interestManual: interestManualRef.current
                    });
                }, 0);
                console.groupEnd();
                return;
            }
            console.log('[widget][msg] tipo não tratado:', data.type);
            console.groupEnd();
        };
        window.addEventListener('message', onMsg);
        return () => {
            window.removeEventListener('message', onMsg);
            console.log('[widget][msg] listener OFF — removido na desmontagem do efeito');
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (faixaSet.size > 0) {
            setshowWithInterest(true);
            if (!interestManualRef.current)
                setWithInterest(true);
        }
    }, [faixaSet]);
    /* ====== AMOSTRAS: carregar base ====== */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        let cancelled = false;
        function run() {
            return __awaiter(this, void 0, void 0, function* () {
                console.groupCollapsed('[widget] efeito amostras:carregar base');
                console.log({ categoria, withInterest });
                if (categoria !== 'sample') {
                    console.log('skip');
                    console.groupEnd();
                    return;
                }
                setLoadingFull(true);
                setErrorFull('');
                try {
                    const data = yield fetchDistribuicaoAmostras(withInterest || DEFAULT_FAIXA_INTERESSE);
                    if (!cancelled) {
                        setDadosFull(data);
                        console.log('[widget] amostras base', data === null || data === void 0 ? void 0 : data.length);
                    }
                }
                catch (e) {
                    console.error('[widget] erro base amostras', e);
                    if (!cancelled) {
                        setErrorFull((e === null || e === void 0 ? void 0 : e.message) || 'Falha ao buscar dados');
                        setDadosFull([]);
                    }
                }
                finally {
                    if (!cancelled) {
                        setLoadingFull(false);
                        console.groupEnd();
                    }
                }
            });
        }
        run();
        return () => { cancelled = true; };
    }, [categoria, withInterest]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        let cancelled = false;
        function run() {
            return __awaiter(this, void 0, void 0, function* () {
                console.groupCollapsed('[widget] efeito amostras:carregar faixa API');
                console.log({ categoria, withInterest, faixaSetSize: faixaSet.size, hasDadosFaixaAPI: dadosFaixaAPI !== null });
                if (categoria !== 'sample') {
                    console.log('skip categoria');
                    console.groupEnd();
                    return;
                }
                if (!withInterest) {
                    console.log('skip sem interesse');
                    console.groupEnd();
                    return;
                }
                if (faixaSet.size > 0) {
                    console.log('skip faixa vinda do pai');
                    console.groupEnd();
                    return;
                }
                if (dadosFaixaAPI !== null) {
                    console.log('skip já carregado');
                    console.groupEnd();
                    return;
                }
                setLoadingInterest(true);
                setErrorInterest('');
                try {
                    const data = yield fetchDistribuicaoAmostras(true);
                    if (!cancelled) {
                        setDadosFaixaAPI(data);
                        console.log('[widget] amostras faixa API', data === null || data === void 0 ? void 0 : data.length);
                    }
                }
                catch (e) {
                    console.error('[widget] erro faixa API', e);
                    if (!cancelled) {
                        setErrorInterest((e === null || e === void 0 ? void 0 : e.message) || 'Falha ao buscar dados do intervalo de interesse');
                        setDadosFaixaAPI([]);
                    }
                }
                finally {
                    if (!cancelled) {
                        setLoadingInterest(false);
                        console.groupEnd();
                    }
                }
            });
        }
        run();
        return () => { cancelled = true; };
    }, [categoria, withInterest, faixaSet, dadosFaixaAPI]);
    /* ====== AMOSTRAS: desenhar ====== */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        var _a;
        console.groupCollapsed('[widget] efeito amostras:desenhar');
        const jmv = jimuMapView;
        if (!(jmv === null || jmv === void 0 ? void 0 : jmv.view)) {
            console.log('skip sem view');
            console.groupEnd();
            return;
        }
        if (categoria !== 'sample') {
            console.log('skip categoria');
            console.groupEnd();
            return;
        }
        const base = withInterest
            ? (faixaSet.size > 0
                ? (dadosFull !== null && dadosFull !== void 0 ? dadosFull : []).filter(x => faixaSet.has(Number(x.codigoPoco)))
                : ((_a = dadosFaixaAPI !== null && dadosFaixaAPI !== void 0 ? dadosFaixaAPI : dadosFull) !== null && _a !== void 0 ? _a : []))
            : (dadosFull !== null && dadosFull !== void 0 ? dadosFull : []);
        console.log('[widget] base size', base.length, 'tiposSel', tiposSel);
        if (!Array.isArray(base) || base.length === 0) {
            console.log('skip base vazia');
            console.groupEnd();
            return;
        }
        if (!Array.isArray(tiposSel) || tiposSel.length === 0) {
            console.log('skip sem tipos');
            console.groupEnd();
            return;
        }
        const { view } = jmv;
        tiposSel.forEach((tipo) => {
            const dados = base
                .map(d => { var _a; return ({ codigoPoco: d.codigoPoco, total: (_a = d[TYPE_FIELD[tipo]]) !== null && _a !== void 0 ? _a : 0 }); })
                .filter(d => { var _a; return ((_a = d.total) !== null && _a !== void 0 ? _a : 0) > 0; });
            console.log(`[widget] tipo=${tipo} dados`, dados.length);
            clearLayerOfTipo(view, tipo);
            if (dados.length === 0)
                return;
            const colorFill = _utils__WEBPACK_IMPORTED_MODULE_2__.coresTipos[tipo] || 'rgba(0,0,0,0.5)';
            const idCamada = layerIdForSample(tipo);
            const idLegenda = `lgd_${idCamada}`;
            try {
                (0,_utils__WEBPACK_IMPORTED_MODULE_2__.gerarMapaDistribuicaoEB)({
                    jimuMapView: jmv,
                    dados,
                    colorFill,
                    idCamada,
                    idLegenda,
                    titleLegenda: (withInterest ? 'Intervalo de Interesse - ' : '') + (tipo.charAt(0).toUpperCase() + tipo.slice(1)),
                    withInterest
                });
                const lyr = view.map.findLayerById(idCamada);
                console.log('[widget] camada criada?', !!lyr, idCamada);
                if (lyr)
                    disableClusterNumbers(lyr);
            }
            catch (e) {
                console.error(`[amostras] falha ao gerar camada ${idCamada}`, e);
            }
        });
        console.groupEnd();
    }, [jimuMapView, tiposSel, withInterest, faixaSet, dadosFull, dadosFaixaAPI, categoria]);
    /* ====== MINERAIS: ao mudar o radio de análise -> busca CONTADOR e LISTA ====== */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        let cancelled = false;
        function run() {
            return __awaiter(this, void 0, void 0, function* () {
                console.groupCollapsed('[widget] efeito minerais:radio');
                console.log({ categoria, mineralAnalise, withInterest });
                if (categoria !== 'minerals') {
                    console.log('skip categoria');
                    console.groupEnd();
                    return;
                }
                if (!mineralAnalise) {
                    console.log('skip sem analise');
                    console.groupEnd();
                    return;
                }
                // reset UI dependente
                setMineralSelecionado(null);
                setAgrupador('');
                setListaMinerais([]);
                setBuscaMineral('');
                setErrorMinerais('');
                setLoadingMinerais(true);
                try {
                    const [contador, lista] = yield Promise.all([
                        (0,_Minerals__WEBPACK_IMPORTED_MODULE_3__.fetchDistribuicaoMineraisContador)(mineralAnalise, withInterest),
                        (0,_Minerals__WEBPACK_IMPORTED_MODULE_3__.fetchMineralLista)(mineralAnalise, withInterest)
                    ]);
                    if (!cancelled) {
                        console.log('[widget] contador/ lista recebidos', contador === null || contador === void 0 ? void 0 : contador.length, lista === null || lista === void 0 ? void 0 : lista.length);
                        setDadosMinerais(contador);
                        setListaMinerais(lista);
                    }
                }
                catch (e) {
                    console.error('[widget] erro fetch minerais', e);
                    if (!cancelled) {
                        setErrorMinerais((e === null || e === void 0 ? void 0 : e.message) || 'Falha ao buscar minerais');
                        setDadosMinerais([]);
                        setListaMinerais([]);
                    }
                }
                finally {
                    if (!cancelled) {
                        setLoadingMinerais(false);
                        console.groupEnd();
                    }
                }
            });
        }
        run();
        return () => { cancelled = true; };
    }, [categoria, mineralAnalise, withInterest]);
    /* ====== MINERAIS: desenhar base (contador) quando chega ====== */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        console.groupCollapsed('[widget] efeito minerais:desenhar base');
        console.log({ categoria, hasJMV: !!(jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view), mineralAnalise, dadosMineraisLen: dadosMinerais === null || dadosMinerais === void 0 ? void 0 : dadosMinerais.length, withInterest, faixaSetSize: faixaSet.size });
        try {
            if (categoria !== 'minerals')
                return console.log('skip categoria');
            if (!(jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view))
                return console.log('skip view');
            if (!mineralAnalise)
                return console.log('skip mineralAnalise');
            if (!Array.isArray(dadosMinerais))
                return console.log('skip dadosMinerais null');
            const base = (withInterest && faixaSet.size > 0)
                ? dadosMinerais.filter(d => faixaSet.has(Number(d.codigoPoco)))
                : dadosMinerais;
            console.log('[widget] base para desenhar', base.length);
            if (base.length === 0)
                return console.warn('[widget] base vazia — nada a plottar');
            (0,_Minerals__WEBPACK_IMPORTED_MODULE_3__.desenharDistribuicaoMinerais)(jimuMapView, base, mineralAnalise, withInterest);
        }
        finally {
            console.groupEnd();
        }
    }, [jimuMapView, categoria, mineralAnalise, dadosMinerais, withInterest, faixaSet]);
    /* ====== MINERAIS: ao escolher MINERAL + AGRUPADOR -> aplica colorização stops ====== */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        let cancelled = false;
        function run() {
            return __awaiter(this, void 0, void 0, function* () {
                var _a;
                console.groupCollapsed('[widget] efeito minerais:colorização agrupador');
                console.log({ categoria, hasJMV: !!(jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view), mineralAnalise, mineralSelecionado, agrupador, withInterest });
                if (categoria !== 'minerals' || !(jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) || !mineralAnalise || !mineralSelecionado || !agrupador) {
                    console.log('skip');
                    console.groupEnd();
                    return;
                }
                try {
                    const dados = yield (0,_Minerals__WEBPACK_IMPORTED_MODULE_3__.fetchMineralAgrupador)(mineralAnalise, mineralSelecionado.nomeResumidoMineral, withInterest);
                    console.log('[widget] agrupador dados', dados === null || dados === void 0 ? void 0 : dados.length, (_a = dados === null || dados === void 0 ? void 0 : dados.slice) === null || _a === void 0 ? void 0 : _a.call(dados, 0, 10));
                    if (!cancelled) {
                        yield (0,_Minerals__WEBPACK_IMPORTED_MODULE_3__.aplicarColorizacaoPorAgrupador)(jimuMapView, mineralAnalise, dados, agrupador);
                        console.log('[widget] colorização aplicada');
                    }
                }
                catch (e) {
                    console.error('Falha ao aplicar colorização por agrupador', e);
                }
                finally {
                    console.groupEnd();
                }
            });
        }
        run();
        return () => { cancelled = true; };
    }, [jimuMapView, categoria, mineralAnalise, mineralSelecionado, agrupador, withInterest]);
    // Reset/fechar
    const resetUiState = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => {
        setTiposSel([]);
        setShowEmpty(false);
        setWithInterest(false);
        setCategoria('');
        setDadosFull(null);
        setDadosFaixaAPI(null);
        setMineralAnalise('');
        setDadosMinerais(null);
        setErrorMinerais('');
        setLoadingMinerais(false);
        setListaMinerais([]);
        setBuscaMineral('');
        setMineralSelecionado(null);
        setAgrupador('');
        interestManualRef.current = false;
    }, []);
    const handleClose = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => {
        const view = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view;
        if (view) {
            clearAmostras(view);
            clearMinerais(view); // <<< também remove as camadas de minerais
        }
        resetUiState();
    }, [jimuMapView, resetUiState]);
    // Fechar por botão/ocultar diálogo (corrigido: seletor com aspas fechadas corretamente)
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const view = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view;
        if (!view)
            return;
        const root = rootRef.current;
        if (!root)
            return;
        const dlg = findClosestDialog(root);
        if (!dlg)
            return;
        const closeBtn = dlg.querySelector('button[aria-label="Close"], button[title="Close"], button[aria-label="Fechar"], button[title="Fechar"], [data-action="close"]');
        if (!closeBtn)
            return;
        closeBtn.addEventListener('click', handleClose);
        return () => closeBtn.removeEventListener('click', handleClose);
    }, [jimuMapView, handleClose]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const root = rootRef.current;
        if (!root)
            return;
        const dlg = findClosestDialog(root);
        if (!dlg)
            return;
        let wasVisible = !isDialogHidden(dlg);
        const check = () => {
            const nowHidden = isDialogHidden(dlg);
            if (wasVisible && nowHidden) {
                handleClose();
                wasVisible = false;
            }
            else if (!wasVisible && !nowHidden) {
                wasVisible = true;
            }
        };
        const mo = new MutationObserver(check);
        mo.observe(dlg, { attributes: true, attributeFilter: ['style', 'class', 'aria-hidden'] });
        check();
        return () => mo.disconnect();
    }, [handleClose]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape')
            handleClose(); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [handleClose]);
    /** Sumário (amostras apenas) */
    const summaryGroups = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        var _a;
        if (categoria !== 'sample')
            return [];
        const base = withInterest
            ? (faixaSet.size > 0
                ? (dadosFull !== null && dadosFull !== void 0 ? dadosFull : []).filter(x => faixaSet.has(Number(x.codigoPoco)))
                : ((_a = dadosFaixaAPI !== null && dadosFaixaAPI !== void 0 ? dadosFaixaAPI : dadosFull) !== null && _a !== void 0 ? _a : []))
            : (dadosFull !== null && dadosFull !== void 0 ? dadosFull : []);
        return tiposSel.map(tipo => {
            const cor = _utils__WEBPACK_IMPORTED_MODULE_2__.coresTipos[tipo];
            const dados = base.map(d => { var _a; return ({ codigoPoco: d.codigoPoco, total: (_a = d[TYPE_FIELD[tipo]]) !== null && _a !== void 0 ? _a : 0 }); });
            let rows = calcularQuebras(dados, cor).reverse();
            if (!showEmpty)
                rows = rows.filter(r => r.count > 0 || r.label.startsWith('| 0 |'));
            return { tipo, rows };
        });
    }, [tiposSel, showEmpty, withInterest, faixaSet, dadosFull, dadosFaixaAPI, categoria]);
    /** Sumário (minerais — Total de Amostras/Coletas) */
    const summaryMinerals = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        if (categoria !== 'minerals')
            return null;
        if (!mineralAnalise)
            return null;
        if (!Array.isArray(dadosMinerais) || dadosMinerais.length === 0)
            return null;
        const base = (withInterest && faixaSet.size > 0)
            ? dadosMinerais.filter(d => faixaSet.has(Number(d.codigoPoco)))
            : dadosMinerais;
        const title = (withInterest ? 'Intervalo de Interesse - ' : '') + (0,_Minerals__WEBPACK_IMPORTED_MODULE_3__.labelFromValue)(mineralAnalise);
        if (!base.length)
            return { title, rows: [] };
        const color = 'rgb(253,142,55)'; // mesma cor usada na camada de minerais
        const dados = base.map(d => ({ total: d.totalMinerais }));
        let rows = calcularQuebras(dados, color).reverse();
        if (!showEmpty)
            rows = rows.filter(r => r.count > 0 || r.label.startsWith('| 0 |'));
        return { title, rows };
    }, [categoria, mineralAnalise, dadosMinerais, withInterest, faixaSet, showEmpty]);
    const hasAnyBase = (Array.isArray(dadosFull) && dadosFull.length > 0) ||
        (Array.isArray(dadosFaixaAPI) && dadosFaixaAPI.length > 0);
    // ===== filtros para o search de minerais
    const listaFiltrada = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        const q = (buscaMineral || '').normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
        return (listaMinerais || []).filter(m => {
            const nome = (m.nomeMineral || '').normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
            return nome.includes(q);
        });
    }, [listaMinerais, buscaMineral]);
    // primeiras 4 opções + a terceira linha (Última)
    const FIRST_FOUR = _Minerals__WEBPACK_IMPORTED_MODULE_3__.MINERAL_OPTIONS.slice(0, 4);
    const LAST_ONE = _Minerals__WEBPACK_IMPORTED_MODULE_3__.MINERAL_OPTIONS.slice(4);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: wrapperStyle, ref: rootRef },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.Global, { styles: globalPanelStyle }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: titleStyle }, "Selecione a distribui\u00E7\u00E3o"),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", { css: selectStyle, value: categoria, onChange: e => setCategoria(e.target.value) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: '' }, "Selecione o tipo"),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 'sample' }, "Distribui\u00E7\u00E3o de amostras"),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 'minerals' }, "Distribui\u00E7\u00E3o de Minerais")),
        categoria === 'sample' && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            loadingFull && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: 8 } }, "Carregando base\u2026"),
            !!errorFull && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#b00', marginBottom: 8 } },
                "Erro: ",
                errorFull),
            withInterest && loadingInterest && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: 8 } }, "Carregando intervalo de interesse\u2026"),
            withInterest && !!errorInterest && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#b00', marginBottom: 8 } },
                "Erro: ",
                errorInterest),
            hasAnyBase && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: listStyle }, LIST_TYPES.map(t => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { key: t, css: checkboxLabelStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: tiposSel.includes(t), onChange: () => setTiposSel(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]) }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "lbl" }, t.charAt(0).toUpperCase() + t.slice(1))))))))),
        categoria === 'minerals' && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: mineralsListStyle }, _Minerals__WEBPACK_IMPORTED_MODULE_3__.MINERAL_OPTIONS.map(opt => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { key: opt.value, css: checkboxLabelStyle, "data-key": opt.value },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", name: "mineral-analise", checked: mineralAnalise === opt.value, onChange: () => setMineralAnalise(opt.value) }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "lbl" }, opt.label))))),
            loadingMinerais && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: 8 } }, "Carregando minerais\u2026"),
            !!errorMinerais && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#b00', marginBottom: 8 } },
                "Erro: ",
                errorMinerais))),
        categoria === 'sample' && summaryGroups.length > 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: summaryListStyle }, summaryGroups.map(group => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, { key: group.tipo },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: legendHeaderStyle },
                (withInterest ? 'Intervalo de Interesse - ' : ''),
                group.tipo.charAt(0).toUpperCase() + group.tipo.slice(1)),
            group.rows.map((r, idx) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: `${group.tipo}-${idx}`, css: summaryItemStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: bubbleBoxStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: r.size, height: r.size },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: r.size / 2, cy: r.size / 2, r: r.size / 2, fill: r.cor }))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { css: rangeLabelStyle }, r.label))))))))),
        categoria === 'minerals' && summaryMinerals && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: summaryListStyle },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: legendHeaderStyle }, summaryMinerals.title),
            summaryMinerals.rows.map((r, idx) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: `min-${idx}`, css: summaryItemStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: bubbleBoxStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: r.size, height: r.size },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: r.size / 2, cy: r.size / 2, r: r.size / 2, fill: r.cor }))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { css: rangeLabelStyle }, r.label)))))),
        (summaryGroups.length > 0 || summaryMinerals || showWithInterest) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: footerStyle },
            ((categoria === 'sample' && summaryGroups.length > 0) ||
                (categoria === 'minerals' && !!summaryMinerals)) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: footerLabelStyle, title: "Exibir tamb\u00E9m classes sem po\u00E7os" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: showEmpty, onChange: e => setShowEmpty(e.target.checked) }),
                "Exibir classes vazias")),
            showWithInterest && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: footerLabelStyleInteresse, title: "Quando marcado, aplica o filtro de Intervalo de Interesse (c\u00F3digos vindos do Explora ou via API)" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: withInterest, onChange: e => { interestManualRef.current = true; setWithInterest(e.target.checked); } }),
                "Intervalo de interesse")))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: setJimuMapView })));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXBhLWRlLW1pbmVyYWlzLXNlYXJjaC1tYXAvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7QUFHOEM7QUFFakQsK0NBQStDO0FBQ3hDLE1BQU0sZUFBZSxHQUFHO0lBQzdCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO0lBQ3hDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsb0JBQW9CLEVBQUU7SUFDakQsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFJLEtBQUssRUFBRSxlQUFlLEVBQUU7SUFDNUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFLLEtBQUssRUFBRSxjQUFjLEVBQUU7SUFDM0MsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRTtDQUM5QztBQTBCViwyREFBMkQ7QUFDM0QsU0FBUyx3QkFBd0IsQ0FBQyxHQUFVO0lBQzFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUNuQyxHQUFHLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTs7UUFBQyxRQUFDO1lBQ2hCLFVBQVUsRUFBRSxNQUFNLENBQUMseUJBQUMsQ0FBQyxVQUFVLG1DQUFJLENBQUMsQ0FBQyxZQUFZLG1DQUFJLENBQUMsQ0FBQyxJQUFJLG1DQUFJLENBQUMsQ0FBQyxNQUFNLG1DQUFJLENBQUMsQ0FBQztZQUM3RSxhQUFhLEVBQUUsTUFBTSxDQUFDLGFBQUMsQ0FBQyxhQUFhLG1DQUFJLENBQUMsQ0FBQyxLQUFLLG1DQUFJLENBQUMsQ0FBQztTQUN2RCxDQUFDO0tBQUEsQ0FBQztTQUNGLE1BQU0s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LENBQUMsSUFBSSxDQUNwRSx3REFBSyxHQUFHLEVBQUUsV0FBVztZQUNsQixDQUFDLENBQUMsU0FBUyxLQUFLLFFBQVEsSUFBSSxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDcEQsQ0FBQyxTQUFTLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQ3BELDBEQUFPLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUMsMkNBQWlDO2dCQUNuRSwwREFBTyxJQUFJLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUk7d0NBRXRGLENBQ1Q7WUFFQSxnQkFBZ0IsSUFBSSxDQUNuQiwwREFBTyxHQUFHLEVBQUUseUJBQXlCLEVBQUUsS0FBSyxFQUFDLHVHQUFrRztnQkFDN0ksMERBQ0UsSUFBSSxFQUFDLFVBQVUsRUFDZixPQUFPLEVBQUUsWUFBWSxFQUNyQixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxHQUN0Rjt5Q0FFSSxDQUNULENBQ0csQ0FDUDtRQUVELCtDQUFDLDZEQUFvQixJQUFDLGNBQWMsRUFBRSxXQUFLLENBQUMsZUFBZSwwQ0FBRyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEdBQUksQ0FDcEcsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXBhLWRlLW1pbmVyYWlzLXNlYXJjaC1tYXAvc3JjL3J1bnRpbWUvTWluZXJhbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcGEtZGUtbWluZXJhaXMtc2VhcmNoLW1hcC9zcmMvcnVudGltZS91dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9yZW5kZXJlcnMvQ2xhc3NCcmVha3NSZW5kZXJlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9zeW1ib2xzL1NpbXBsZU1hcmtlclN5bWJvbFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS93aWRnZXRzL0xlZ2VuZFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFwYS1kZS1taW5lcmFpcy1zZWFyY2gtbWFwL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIE1pbmVyYWxzLnRzXHJcbiAqIEzDs2dpY2EgZGEgRGlzdHJpYnVpw6fDo28gZGUgTWluZXJhaXM6XHJcbiAqICAtIEJ1c2NhIGRvIENPTlRBRE9SIHBvciBhbsOhbGlzZSAoRFJYL1FlbXNjYW4vVG9kYXMpID0+IGJhc2UgZW0gY2x1c3RlcnMvYm9saGFzIHZpYSBnZXJhck1hcGFEaXN0cmlidWljYW9FQlxyXG4gKiAgLSBCdXNjYSBkYSBMSVNUQSBkZSBtaW5lcmFpcyAocGFyYSBvIHNlYXJjaClcclxuICogIC0gQnVzY2EgZG9zIEFHUlVQQURPUkVTIChhbmFsaXNlfG1lZGlhfG1heGltYSkgcGFyYSB1bSBtaW5lcmFsIHNlbGVjaW9uYWRvXHJcbiAqICAtIEFwbGljYcOnw6NvIGRlIHZpc3VhbFZhcmlhYmxlcyAoY29sb3IgcmFtcCkgTkEgTUVTTUEgQ0FNQURBLCBwb3IgY2ltYSBkbyBjbHVzdGVyIGJhc2VcclxuICovXHJcblxyXG5pbXBvcnQgdHlwZSB7IEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7IGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCIH0gZnJvbSAnLi91dGlscydcclxuXHJcbi8qKiBPcMOnw7VlcyBkZSBhbsOhbGlzZSBtaW5lcmFsIHBhcmEgb3MgcsOhZGlvcyAqL1xyXG5leHBvcnQgY29uc3QgTUlORVJBTF9PUFRJT05TID0gW1xyXG4gIHsgdmFsdWU6ICdEUlgtVE9UJywgbGFiZWw6ICdEUlgtVG90YWwnIH0sXHJcbiAgeyB2YWx1ZTogJ0RSWC1BUkcnLCBsYWJlbDogJ0RSWC1BcmdpbG9taW5lcmFpcycgfSxcclxuICB7IHZhbHVlOiAnTUFTU0EnLCAgIGxhYmVsOiAnUWVtc2Nhbi1NYXNzYScgfSxcclxuICB7IHZhbHVlOiAnQVJFQScsICAgIGxhYmVsOiAnUWVtc2Nhbi3DgXJlYScgfSxcclxuICB7IHZhbHVlOiAndG9kYXNBbmFsaXNlcycsIGxhYmVsOiAnVG9kYXMgYXMgQW7DoWxpc2VzJyB9XHJcbl0gYXMgY29uc3RcclxuXHJcbmV4cG9ydCB0eXBlIE1pbmVyYWxUaXBvID0gdHlwZW9mIE1JTkVSQUxfT1BUSU9OU1tudW1iZXJdWyd2YWx1ZSddXHJcbmV4cG9ydCB0eXBlIEFncnVwYWRvclRpcG8gPSAnYW5hbGlzZScgfCAnbWVkaWEnIHwgJ21heGltYSdcclxuXHJcbi8qKiBJdGVucyBkbyBjb250YWRvciAodG90YWwgcG9yIHBvw6dvKSAqL1xyXG5leHBvcnQgdHlwZSBNaW5lcmFsSXRlbSA9IHtcclxuICBjb2RpZ29Qb2NvOiBudW1iZXJcclxuICB0b3RhbE1pbmVyYWlzOiBudW1iZXJcclxufVxyXG5cclxuLyoqIEl0ZW0gZGEgbGlzdGEgZGUgbWluZXJhaXMgKHBhcmEgbyBzZWFyY2gpICovXHJcbmV4cG9ydCB0eXBlIE1pbmVyYWxMaXN0YUl0ZW0gPSB7XHJcbiAgbm9tZU1pbmVyYWw6IHN0cmluZ1xyXG4gIG5vbWVSZXN1bWlkb01pbmVyYWw/OiBzdHJpbmdcclxufVxyXG5cclxuLyoqIEl0ZW0gZGUgcmV0b3JubyBkbyBhZ3J1cGFkb3IgKi9cclxuZXhwb3J0IHR5cGUgTWluZXJhbEFncnVwYWRvckl0ZW0gPSB7XHJcbiAgY29kaWdvUG9jbzogbnVtYmVyXHJcbiAgbm9tZVJlc3VtaWRvPzogc3RyaW5nXHJcbiAgcXRBbmFsaXNlOiBudW1iZXJcclxuICB2YWxvck1lZGlvOiBudW1iZXJcclxuICB2YWxvck1heGltbzogbnVtYmVyXHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT0gTm9ybWFsaXphw6fDtWVzID09PT09PT09PT09PT09PT09PT0gKi9cclxuZnVuY3Rpb24gbm9ybWFsaXplTWluZXJhbENvbnRhZG9yKHJhdzogYW55W10pOiBNaW5lcmFsSXRlbVtdIHtcclxuICByZXR1cm4gKEFycmF5LmlzQXJyYXkocmF3KSA/IHJhdyA6IFtdKVxyXG4gICAgLm1hcCgocjogYW55KSA9PiAoe1xyXG4gICAgICBjb2RpZ29Qb2NvOiBOdW1iZXIoci5jb2RpZ29Qb2NvID8/IHIuUE9DT19DRF9QT0NPID8/IHIucG9jbyA/PyByLmNvZGlnbyA/PyAwKSxcclxuICAgICAgdG90YWxNaW5lcmFpczogTnVtYmVyKHIudG90YWxNaW5lcmFpcyA/PyByLnRvdGFsID8/IDApXHJcbiAgICB9KSlcclxuICAgIC5maWx0ZXIoeCA9PiAhIXguY29kaWdvUG9jbylcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplTWluZXJhbExpc3RhKHJhdzogYW55W10pOiBNaW5lcmFsTGlzdGFJdGVtW10ge1xyXG4gIHJldHVybiAoQXJyYXkuaXNBcnJheShyYXcpID8gcmF3IDogW10pXHJcbiAgICAubWFwKChyOiBhbnkpID0+ICh7XHJcbiAgICAgIG5vbWVNaW5lcmFsOiBTdHJpbmcoci5ub21lTWluZXJhbCA/PyByLm5vbWUgPz8gci5taW5lcmFsID8/ICcnKS50cmltKCksXHJcbiAgICAgIG5vbWVSZXN1bWlkb01pbmVyYWw6IHIubm9tZVJlc3VtaWRvTWluZXJhbCA/PyByLm5vbWVSZXN1bWlkbyA/PyB1bmRlZmluZWRcclxuICAgIH0pKVxyXG4gICAgLmZpbHRlcih4ID0+ICEheC5ub21lTWluZXJhbClcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplQWdydXBhZG9yKHJhdzogYW55W10pOiBNaW5lcmFsQWdydXBhZG9ySXRlbVtdIHtcclxuICByZXR1cm4gKEFycmF5LmlzQXJyYXkocmF3KSA/IHJhdyA6IFtdKVxyXG4gICAgLm1hcCgocjogYW55KSA9PiAoe1xyXG4gICAgICBjb2RpZ29Qb2NvOiBOdW1iZXIoci5jb2RpZ29Qb2NvID8/IHIuUE9DT19DRF9QT0NPID8/IHIucG9jbyA/PyByLmNvZGlnbyA/PyAwKSxcclxuICAgICAgbm9tZVJlc3VtaWRvOiByLm5vbWVSZXN1bWlkbyA/PyByLm5vbWVSZXN1bWlkb01pbmVyYWwgPz8gdW5kZWZpbmVkLFxyXG4gICAgICBxdEFuYWxpc2U6IE51bWJlcihyLnF0QW5hbGlzZSA/PyByLnRvdGFsID8/IDApLFxyXG4gICAgICB2YWxvck1lZGlvOiBOdW1iZXIoci52YWxvck1lZGlvID8/IHIubWVkaWEgPz8gMCksXHJcbiAgICAgIHZhbG9yTWF4aW1vOiBOdW1iZXIoci52YWxvck1heGltbyA/PyByLm1heGltbyA/PyAwKVxyXG4gICAgfSkpXHJcbiAgICAuZmlsdGVyKHggPT4gISF4LmNvZGlnb1BvY28pXHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT0gUG9zdE1lc3NhZ2UgaGVscGVycyA9PT09PT09PT09PT09PT09PT09ICovXHJcbmZ1bmN0aW9uIHBvc3RWaWFQYXJlbnQ8VCA9IGFueT4odHlwZTogc3RyaW5nLCBib2R5OiBzdHJpbmcsIG9rVHlwZTogc3RyaW5nLCBlcnJUeXBlOiBzdHJpbmcpOiBQcm9taXNlPFQ+IHtcclxuICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBbbWluZXJhbHNdIHBvc3RWaWFQYXJlbnQgLT4gJHt0eXBlfWApXHJcbiAgY29uc29sZS5sb2coJ1ttaW5lcmFsc10gYm9keScsIGJvZHkpXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IHJlcUlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMilcclxuICAgIGxldCB0YXJnZXRPcmlnaW4gPSAnKidcclxuICAgIHRyeSB7IGlmIChkb2N1bWVudC5yZWZlcnJlcikgdGFyZ2V0T3JpZ2luID0gbmV3IFVSTChkb2N1bWVudC5yZWZlcnJlcikub3JpZ2luIH0gY2F0Y2gge31cclxuICAgIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIHRhcmdldE9yaWdpbicsIHRhcmdldE9yaWdpbiwgJ3JlcUlkJywgcmVxSWQpXHJcblxyXG4gICAgY29uc3Qgb25NZXNzYWdlID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgZDogYW55ID0gKGV2ZW50IGFzIGFueSkuZGF0YSB8fCB7fVxyXG4gICAgICBpZiAoZC5yZXFJZCAhPT0gcmVxSWQpIHJldHVyblxyXG4gICAgICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSByZXNwb3N0YSByZWNlYmlkYScsIGQudHlwZSwgZClcclxuICAgICAgY2xlYXJUaW1lb3V0KHRvKSAvLyA8PDwgSU1QT1JUQU5URVxyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSlcclxuXHJcbiAgICAgIGlmIChkLnR5cGUgPT09IG9rVHlwZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICAgIHJlc29sdmUoZC5wYXlsb2FkIGFzIFQpXHJcbiAgICAgIH0gZWxzZSBpZiAoZC50eXBlID09PSBlcnJUeXBlKSB7XHJcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihkLm1lc3NhZ2UgfHwgJ0Vycm8gbm8gZmV0Y2ggdmlhIHBhcmVudCcpKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignW21pbmVyYWxzXSB0aXBvIGluZXNwZXJhZG8nLCBkLnR5cGUpXHJcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignUmVzcG9zdGEgZGVzY29uaGVjaWRhIGRvIHBhaScpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSlcclxuXHJcbiAgICBjb25zdCB0byA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpXHJcbiAgICAgIGNvbnNvbGUud2FybignW21pbmVyYWxzXSBUSU1FT1VUIGFndWFyZGFuZG8gcmVzcG9zdGEgZG8gcGFpJywgeyB0eXBlLCBva1R5cGUsIGVyclR5cGUsIHJlcUlkIH0pXHJcbiAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICByZWplY3QobmV3IEVycm9yKCdUaW1lb3V0IGFndWFyZGFuZG8gcmVzcG9zdGEgZG8gcGFpIChtaW5lcmFpcyknKSlcclxuICAgIH0sIDIwMDAwKVxyXG5cclxuICAgIHdpbmRvdy5wYXJlbnQ/LnBvc3RNZXNzYWdlKHsgdHlwZSwgYm9keSwgcmVxSWQgfSwgdGFyZ2V0T3JpZ2luKVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT0gQm9kaWVzIEV4cGxvcmEgPT09PT09PT09PT09PT09PT09PSAqL1xyXG5mdW5jdGlvbiBidWlsZEJvZHlDb250YWRvcih0aXBvQW5hbGlzZTogTWluZXJhbFRpcG8sIGZhaXhhSW50ZXJlc3NlOiBib29sZWFuKSB7XHJcbiAgY29uc3QgcCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG4gIHAuc2V0KCdoZFN5cycsICdub3ZhaW50Y29ucycpXHJcbiAgcC5zZXQoJ2hkVUMnLCAnTWFwYScpXHJcbiAgcC5zZXQoJ2hkQWNhbycsICdDYXJyZWdhck1hcGFEaXN0cmlidWljYW9NaW5lcmFpc0NvbnRhZG9yJylcclxuICBwLnNldCgnaGRTZXNzaW9uRmlsdGVyJywgJ3RydWUnKVxyXG4gIHAuc2V0KCd0aXBvQW5hbGlzZScsIHRpcG9BbmFsaXNlKVxyXG4gIHAuc2V0KCdmYWl4YUludGVyZXNzZScsIFN0cmluZyghIWZhaXhhSW50ZXJlc3NlKSlcclxuICByZXR1cm4gcC50b1N0cmluZygpXHJcbn1cclxuZnVuY3Rpb24gYnVpbGRCb2R5TGlzdGEodGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvLCBmYWl4YUludGVyZXNzZTogYm9vbGVhbikge1xyXG4gIGNvbnN0IHAgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcclxuICBwLnNldCgnaGRTeXMnLCAnbm92YWludGNvbnMnKVxyXG4gIHAuc2V0KCdoZFVDJywgJ01hcGEnKVxyXG4gIHAuc2V0KCdoZEFjYW8nLCAnQ2FycmVnYXJNYXBhRGlzdHJpYnVpY2FvTWluZXJhaXNMaXN0YScpXHJcbiAgcC5zZXQoJ2hkU2Vzc2lvbkZpbHRlcicsICd0cnVlJylcclxuICBwLnNldCgndGlwb0FuYWxpc2UnLCB0aXBvQW5hbGlzZSlcclxuICBwLnNldCgnZmFpeGFJbnRlcmVzc2UnLCBTdHJpbmcoISFmYWl4YUludGVyZXNzZSkpXHJcbiAgcmV0dXJuIHAudG9TdHJpbmcoKVxyXG59XHJcbmZ1bmN0aW9uIGJ1aWxkQm9keUFncnVwYWRvcih0aXBvQW5hbGlzZTogTWluZXJhbFRpcG8sIG5vbWVSZXN1bWlkb01pbmVyYWw6IHN0cmluZyB8IHVuZGVmaW5lZCwgZmFpeGFJbnRlcmVzc2U6IGJvb2xlYW4pIHtcclxuICBjb25zdCBwID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXHJcbiAgcC5zZXQoJ2hkU3lzJywgJ25vdmFpbnRjb25zJylcclxuICBwLnNldCgnaGRVQycsICdNYXBhJylcclxuICBwLnNldCgnaGRBY2FvJywgJ0NhcnJlZ2FyTWFwYURpc3RyaWJ1aWNhb01pbmVyYWlzQWdydXBhZG9yJylcclxuICBwLnNldCgnaGRTZXNzaW9uRmlsdGVyJywgJ3RydWUnKVxyXG4gIHAuc2V0KCd0aXBvQW5hbGlzZScsIHRpcG9BbmFsaXNlKVxyXG4gIGlmIChub21lUmVzdW1pZG9NaW5lcmFsKSBwLnNldCgnbm9tZVJlc3VtaWRvTWluZXJhbCcsIG5vbWVSZXN1bWlkb01pbmVyYWwpXHJcbiAgcC5zZXQoJ2ZhaXhhSW50ZXJlc3NlJywgU3RyaW5nKCEhZmFpeGFJbnRlcmVzc2UpKVxyXG4gIHJldHVybiBwLnRvU3RyaW5nKClcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PSBGZXRjaCBBUElzID09PT09PT09PT09PT09PT09PT0gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXNDb250YWRvcihcclxuICB0aXBvQW5hbGlzZTogTWluZXJhbFRpcG8sXHJcbiAgZmFpeGFJbnRlcmVzc2U6IGJvb2xlYW5cclxuKTogUHJvbWlzZTxNaW5lcmFsSXRlbVtdPiB7XHJcbiAgY29uc3QgYm9keSA9IGJ1aWxkQm9keUNvbnRhZG9yKHRpcG9BbmFsaXNlLCBmYWl4YUludGVyZXNzZSlcclxuICBjb25zdCBwYXlsb2FkID0gYXdhaXQgcG9zdFZpYVBhcmVudDxhbnlbXT4oJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXMnLCBib2R5LCAnZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpczpvaycsICdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzOmVycicpXHJcbiAgY29uc3Qgbm9ybSA9IG5vcm1hbGl6ZU1pbmVyYWxDb250YWRvcihwYXlsb2FkKVxyXG4gIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIGNvbnRhZG9yIG5vcm1hbGl6YWRvJywgbm9ybS5sZW5ndGgsIG5vcm0uc2xpY2UoMCwgMTApKVxyXG4gIHJldHVybiBub3JtXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaE1pbmVyYWxMaXN0YShcclxuICB0aXBvQW5hbGlzZTogTWluZXJhbFRpcG8sXHJcbiAgZmFpeGFJbnRlcmVzc2U6IGJvb2xlYW5cclxuKTogUHJvbWlzZTxNaW5lcmFsTGlzdGFJdGVtW10+IHtcclxuICBjb25zdCBib2R5ID0gYnVpbGRCb2R5TGlzdGEodGlwb0FuYWxpc2UsIGZhaXhhSW50ZXJlc3NlKVxyXG4gIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBwb3N0VmlhUGFyZW50PGFueVtdPignZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpcycsIGJvZHksICdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzOm9rJywgJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXM6ZXJyJylcclxuICBjb25zdCBub3JtID0gbm9ybWFsaXplTWluZXJhbExpc3RhKHBheWxvYWQpXHJcbiAgY29uc29sZS5sb2coJ1ttaW5lcmFsc10gbGlzdGEgbm9ybWFsaXphZGEnLCBub3JtLmxlbmd0aCwgbm9ybS5zbGljZSgwLCAxMCkpXHJcbiAgcmV0dXJuIG5vcm1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoTWluZXJhbEFncnVwYWRvcihcclxuICB0aXBvQW5hbGlzZTogTWluZXJhbFRpcG8sXHJcbiAgbm9tZVJlc3VtaWRvTWluZXJhbDogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gIGZhaXhhSW50ZXJlc3NlOiBib29sZWFuXHJcbik6IFByb21pc2U8TWluZXJhbEFncnVwYWRvckl0ZW1bXT4ge1xyXG4gIGNvbnN0IGJvZHkgPSBidWlsZEJvZHlBZ3J1cGFkb3IodGlwb0FuYWxpc2UsIG5vbWVSZXN1bWlkb01pbmVyYWwsIGZhaXhhSW50ZXJlc3NlKVxyXG4gIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBwb3N0VmlhUGFyZW50PGFueVtdPignZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpcycsIGJvZHksICdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzOm9rJywgJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXM6ZXJyJylcclxuICBjb25zdCBub3JtID0gbm9ybWFsaXplQWdydXBhZG9yKHBheWxvYWQpXHJcbiAgY29uc29sZS5sb2coJ1ttaW5lcmFsc10gYWdydXBhZG9yIG5vcm1hbGl6YWRvJywgbm9ybS5sZW5ndGgsIG5vcm0uc2xpY2UoMCwgMTApKVxyXG4gIHJldHVybiBub3JtXHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT0gUmVuZGVyIGhlbHBlcnMgPT09PT09PT09PT09PT09PT09PSAqL1xyXG5jb25zdCBsYXllcklkRm9yID0gKHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbykgPT4gYG1pbmVyYWlzXyR7U3RyaW5nKHRpcG9BbmFsaXNlKS50b0xvd2VyQ2FzZSgpfWBcclxuY29uc3QgbGVnZW5kSWRGb3IgPSAodGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvKSA9PiBgbGdkXyR7bGF5ZXJJZEZvcih0aXBvQW5hbGlzZSl9YFxyXG5cclxuZnVuY3Rpb24gZGlzYWJsZUNsdXN0ZXJOdW1iZXJzKGx5cjogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghbHlyKSByZXR1cm5cclxuICAgIGlmIChseXIuZmVhdHVyZVJlZHVjdGlvbiAmJiBseXIuZmVhdHVyZVJlZHVjdGlvbi50eXBlID09PSAnY2x1c3RlcicpIHtcclxuICAgICAgbHlyLmZlYXR1cmVSZWR1Y3Rpb24gPSB7IC4uLmx5ci5mZWF0dXJlUmVkdWN0aW9uLCBsYWJlbHNWaXNpYmxlOiBmYWxzZSB9XHJcbiAgICB9XHJcbiAgICBpZiAoJ2xhYmVsc1Zpc2libGUnIGluIGx5cikgKGx5ciBhcyBhbnkpLmxhYmVsc1Zpc2libGUgPSBmYWxzZVxyXG4gICAgaWYgKCdsYWJlbGluZ0luZm8nIGluIGx5cikgKGx5ciBhcyBhbnkpLmxhYmVsaW5nSW5mbyA9IFtdXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSgobHlyIGFzIGFueSkuc3VibGF5ZXJzKSkgKGx5ciBhcyBhbnkpLnN1YmxheWVycy5mb3JFYWNoKChzbDogYW55KSA9PiBkaXNhYmxlQ2x1c3Rlck51bWJlcnMoc2wpKVxyXG4gIH0gY2F0Y2gge31cclxufVxyXG5cclxuLyoqIERlc2VuaGEgYSBiYXNlIChjb250YWRvcikgZW0gY2x1c3RlcnMvYm9saGFzLCBjb20gdMOtdHVsbyBjb25mb3JtZSBhbsOhbGlzZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVzZW5oYXJEaXN0cmlidWljYW9NaW5lcmFpcyhcclxuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXcsXHJcbiAgZGFkb3M6IE1pbmVyYWxJdGVtW10sXHJcbiAgdGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvLFxyXG4gIHdpdGhJbnRlcmVzdDogYm9vbGVhblxyXG4pIHtcclxuICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbbWluZXJhbHNdIGRlc2VuaGFyRGlzdHJpYnVpY2FvTWluZXJhaXMnKVxyXG4gIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIHRpcG9BbmFsaXNlJywgdGlwb0FuYWxpc2UsICd3aXRoSW50ZXJlc3QnLCB3aXRoSW50ZXJlc3QsICduIGRhZG9zJywgZGFkb3M/Lmxlbmd0aClcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyB2aWV3IH0gPSBqaW11TWFwVmlld1xyXG4gICAgaWYgKCF2aWV3IHx8ICFBcnJheS5pc0FycmF5KGRhZG9zKSB8fCBkYWRvcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS53YXJuKCdbbWluZXJhbHNdIHZpZXcgaW5leGlzdGVudGUgb3UgZGFkb3MgdmF6aW9zJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCBwb250b3MgPSBkYWRvcy5tYXAoZCA9PiAoeyBjb2RpZ29Qb2NvOiBkLmNvZGlnb1BvY28sIHRvdGFsOiBkLnRvdGFsTWluZXJhaXMgfSkpXHJcbiAgICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSBhbW9zdHJhIGRvcyBwb250b3MnLCBwb250b3Muc2xpY2UoMCwgMTApKVxyXG5cclxuICAgIGNvbnN0IGlkQ2FtYWRhID0gbGF5ZXJJZEZvcih0aXBvQW5hbGlzZSlcclxuICAgIGNvbnN0IGlkTGVnZW5kYSA9IGxlZ2VuZElkRm9yKHRpcG9BbmFsaXNlKVxyXG4gICAgZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIoe1xyXG4gICAgICBqaW11TWFwVmlldywgZGFkb3M6IHBvbnRvcywgY29sb3JGaWxsOiAncmdiKDI1MywxNDIsNTUpJyxcclxuICAgICAgaWRDYW1hZGEsIGlkTGVnZW5kYSxcclxuICAgICAgdGl0bGVMZWdlbmRhOiAod2l0aEludGVyZXN0ID8gJ0ludGVydmFsbyBkZSBJbnRlcmVzc2UgLSAnIDogJycpICsgbGFiZWxGcm9tVmFsdWUodGlwb0FuYWxpc2UpLFxyXG4gICAgICB3aXRoSW50ZXJlc3RcclxuICAgIH0gYXMgYW55KVxyXG5cclxuICAgIGNvbnN0IGx5ciA9IHZpZXcubWFwLmZpbmRMYXllckJ5SWQoaWRDYW1hZGEpIGFzIGFueVxyXG4gICAgY29uc29sZS5sb2coJ1ttaW5lcmFsc10gbGF5ZXIgY3JpYWRhPycsICEhbHlyLCBseXIpXHJcbiAgICBpZiAobHlyKSBkaXNhYmxlQ2x1c3Rlck51bWJlcnMobHlyKVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1ttaW5lcmFsc10gRVJSTyBkZXNlbmhhckRpc3RyaWJ1aWNhb01pbmVyYWlzJywgZSlcclxuICB9IGZpbmFsbHkge1xyXG4gICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgfVxyXG59XHJcblxyXG4vKiogQXBsaWNhIHZpc3VhbCB2YXJpYWJsZSBkZSBDT1IgcG9yIGNpbWEgZGEgY2FtYWRhIGJhc2UgKHNlbSBtZXhlciBubyB0YW1hbmhvL2NsdXN0ZXIpICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcGxpY2FyQ29sb3JpemFjYW9Qb3JBZ3J1cGFkb3IoXHJcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LFxyXG4gIHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbyxcclxuICBkYWRvc0FncnVwYWRvcmVzOiBNaW5lcmFsQWdydXBhZG9ySXRlbVtdLFxyXG4gIGFncnVwYWRvcjogQWdydXBhZG9yVGlwb1xyXG4pIHtcclxuICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbbWluZXJhbHNdIGFwbGljYXJDb2xvcml6YWNhb1BvckFncnVwYWRvcicpXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdmlldyB9ID0gamltdU1hcFZpZXdcclxuICAgIGNvbnN0IGxheWVyID0gdmlldz8ubWFwPy5maW5kTGF5ZXJCeUlkKGxheWVySWRGb3IodGlwb0FuYWxpc2UpKSBhcyBhbnlcclxuICAgIGlmICghbGF5ZXIpIHsgY29uc29sZS53YXJuKCdbbWluZXJhbHNdIGNhbWFkYSBiYXNlIG7Do28gZW5jb250cmFkYScpOyByZXR1cm4gfVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhZG9zQWdydXBhZG9yZXMpIHx8IGRhZG9zQWdydXBhZG9yZXMubGVuZ3RoID09PSAwKSB7IGNvbnNvbGUud2FybignW21pbmVyYWxzXSBhZ3J1cGFkb3JlcyB2YXppb3MnKTsgcmV0dXJuIH1cclxuXHJcbiAgICAvLyDDrW5kaWNlIHBvciBwb8Onb1xyXG4gICAgY29uc3QgYnlQb2NvID0gbmV3IE1hcDxudW1iZXIsIE1pbmVyYWxBZ3J1cGFkb3JJdGVtPigpXHJcbiAgICBmb3IgKGNvbnN0IGl0IG9mIGRhZG9zQWdydXBhZG9yZXMpIGJ5UG9jby5zZXQoTnVtYmVyKGl0LmNvZGlnb1BvY28pLCBpdClcclxuXHJcbiAgICAvLyBkZWZpbmltb3MgdW0gY2FtcG8gXCJtZF92YWxcIiBwYXJhIG8gdmlzdWFsIHZhcmlhYmxlIGRlIGNvclxyXG4gICAgY29uc3QgZmllbGRWYXIgPSAnbWRfdmFsJ1xyXG5cclxuICAgIC8vIDEpIEF0dWFsaXphIGF0cmlidXRvcyBwb3IgcG/Dp28gY29tIG8gdmFsb3IgZG8gYWdydXBhZG9yIGVzY29saGlkb1xyXG4gICAgY29uc29sZS50aW1lKCdbbWluZXJhbHNdIHF1ZXJ5RmVhdHVyZXMgYmFzZScpXHJcbiAgICBjb25zdCBmZWF0dXJlU2V0ID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiAnMT0xJywgcmV0dXJuR2VvbWV0cnk6IHRydWUsIG91dEZpZWxkczogWycqJ10gfSlcclxuICAgIGNvbnNvbGUudGltZUVuZCgnW21pbmVyYWxzXSBxdWVyeUZlYXR1cmVzIGJhc2UnKVxyXG4gICAgY29uc3QgdXBkYXRlczogYW55W10gPSBbXVxyXG4gICAgbGV0IG1pblZhbCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWVxyXG4gICAgbGV0IG1heFZhbCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWVxyXG5cclxuICAgIGZvciAoY29uc3QgZiBvZiBmZWF0dXJlU2V0LmZlYXR1cmVzKSB7XHJcbiAgICAgIGNvbnN0IGNvZGlnbyA9IE51bWJlcihcclxuICAgICAgICBmLmF0dHJpYnV0ZXM/LlBPQ09fQ0RfUE9DTyA/P1xyXG4gICAgICAgIGYuYXR0cmlidXRlcz8uY29kaWdvUG9jbyA/P1xyXG4gICAgICAgIGYuYXR0cmlidXRlcz8ucG9jbyA/P1xyXG4gICAgICAgIGYuYXR0cmlidXRlcz8uY29kaWdvXHJcbiAgICAgIClcclxuICAgICAgY29uc3QgYWcgPSBieVBvY28uZ2V0KGNvZGlnbylcclxuICAgICAgbGV0IHZhbCA9IDBcclxuICAgICAgaWYgKGFnKSB7XHJcbiAgICAgICAgaWYgKGFncnVwYWRvciA9PT0gJ2FuYWxpc2UnKSB2YWwgPSBhZy5xdEFuYWxpc2VcclxuICAgICAgICBlbHNlIGlmIChhZ3J1cGFkb3IgPT09ICdtZWRpYScpIHZhbCA9IGFnLnZhbG9yTWVkaW9cclxuICAgICAgICBlbHNlIHZhbCA9IGFnLnZhbG9yTWF4aW1vXHJcbiAgICAgIH1cclxuICAgICAgZi5hdHRyaWJ1dGVzW2ZpZWxkVmFyXSA9IHZhbFxyXG4gICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbClcclxuICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpXHJcbiAgICAgIHVwZGF0ZXMucHVzaChmKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ1ttaW5lcmFsc10gaW50ZXJ2YWxvIHZhbG9yZXMnLCB7IG1pblZhbCwgbWF4VmFsLCB1cGRhdGVzOiB1cGRhdGVzLmxlbmd0aCB9KVxyXG5cclxuICAgIGlmICh1cGRhdGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc29sZS50aW1lKCdbbWluZXJhbHNdIGFwcGx5RWRpdHMnKVxyXG4gICAgICBhd2FpdCBsYXllci5hcHBseUVkaXRzKHsgdXBkYXRlRmVhdHVyZXM6IHVwZGF0ZXMgfSlcclxuICAgICAgY29uc29sZS50aW1lRW5kKCdbbWluZXJhbHNdIGFwcGx5RWRpdHMnKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDIpIE1vbnRhIG9zIHN0b3BzXHJcbiAgICBjb25zdCBkaWZmID0gbWF4VmFsIC0gbWluVmFsXHJcbiAgICBjb25zdCBidWlsZExhYmVsID0gKHY6IG51bWJlcikgPT4gYWdydXBhZG9yID09PSAnYW5hbGlzZScgPyBgJHt2fWAgOiBgJHt2fSAlYFxyXG5cclxuICAgIGxldCBzdG9wczogQXJyYXk8eyB2YWx1ZTogbnVtYmVyOyBjb2xvcjogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+XHJcbiAgICBpZiAoZGlmZiA8IDMpIHtcclxuICAgICAgc3RvcHMgPSBbXHJcbiAgICAgICAgeyB2YWx1ZTogbWluVmFsLCBjb2xvcjogJ3JnYigyNDksMjM4LDIyNSknLCBsYWJlbDogYnVpbGRMYWJlbChtaW5WYWwpIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogbWF4VmFsLCBjb2xvcjogJ3JnYigxNjUsNjAsMiknLCAgIGxhYmVsOiBidWlsZExhYmVsKG1heFZhbCkgfVxyXG4gICAgICBdXHJcbiAgICB9IGVsc2UgaWYgKGRpZmYgPCA1KSB7XHJcbiAgICAgIGNvbnN0IHN0ZXAgPSBNYXRoLnJvdW5kKGRpZmYgLyA0KSB8fCAxXHJcbiAgICAgIHN0b3BzID0gW1xyXG4gICAgICAgIHsgdmFsdWU6IG1pblZhbCwgICAgICAgICAgICBjb2xvcjogJ3JnYigyNDksMjM4LDIyNSknLCBsYWJlbDogYnVpbGRMYWJlbChtaW5WYWwpIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogbWluVmFsICsgMiAqIHN0ZXAsIGNvbG9yOiAncmdiKDI1MywxNDIsNTUpJywgIGxhYmVsOiBidWlsZExhYmVsKG1pblZhbCArIDIgKiBzdGVwKSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IG1heFZhbCwgICAgICAgICAgICBjb2xvcjogJ3JnYigxNjUsNjAsMiknLCAgICBsYWJlbDogYnVpbGRMYWJlbChtYXhWYWwpIH1cclxuICAgICAgXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgc3RlcCA9IE1hdGgucm91bmQoZGlmZiAvIDQpIHx8IDFcclxuICAgICAgc3RvcHMgPSBbXHJcbiAgICAgICAgeyB2YWx1ZTogbWluVmFsLCAgICAgICAgICAgIGNvbG9yOiAncmdiKDI0OSwyMzgsMjI1KScsIGxhYmVsOiBidWlsZExhYmVsKG1pblZhbCkgfSxcclxuICAgICAgICB7IHZhbHVlOiBtaW5WYWwgKyAxICogc3RlcCwgY29sb3I6ICdyZ2IoMjUxLDE5MCwxMzApJywgbGFiZWw6IGJ1aWxkTGFiZWwobWluVmFsICsgMSAqIHN0ZXApIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogbWluVmFsICsgMiAqIHN0ZXAsIGNvbG9yOiAncmdiKDI1MywxNDIsNTUpJywgIGxhYmVsOiBidWlsZExhYmVsKG1pblZhbCArIDIgKiBzdGVwKSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IG1heFZhbCAtIDEgKiBzdGVwLCBjb2xvcjogJ3JnYigyMzMsODUsNiknLCAgICBsYWJlbDogYnVpbGRMYWJlbChtYXhWYWwgLSAxICogc3RlcCkgfSxcclxuICAgICAgICB7IHZhbHVlOiBtYXhWYWwsICAgICAgICAgICAgY29sb3I6ICdyZ2IoMTY1LDYwLDIpJywgICAgbGFiZWw6IGJ1aWxkTGFiZWwobWF4VmFsKSB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICAvLyAzKSBBcGxpY2EgdmlzdWFsIHZhcmlhYmxlIGRlIGNvclxyXG4gICAgY29uc3QgcmVuZGVyZXIgPSBsYXllci5yZW5kZXJlcj8uY2xvbmUgPyBsYXllci5yZW5kZXJlci5jbG9uZSgpIDogbGF5ZXIucmVuZGVyZXJcclxuICAgIGNvbnN0IGNvbG9yVmlzVmFyID0ge1xyXG4gICAgICB0eXBlOiAnY29sb3InLFxyXG4gICAgICBmaWVsZDogZmllbGRWYXIsXHJcbiAgICAgIGxlZ2VuZE9wdGlvbnM6IHsgdGl0bGU6ICcnIH0sXHJcbiAgICAgIHN0b3BzXHJcbiAgICB9IGFzIGFueVxyXG4gICAgcmVuZGVyZXIudmlzdWFsVmFyaWFibGVzID0gW2NvbG9yVmlzVmFyXVxyXG4gICAgbGF5ZXIucmVuZGVyZXIgPSByZW5kZXJlclxyXG4gICAgY29uc29sZS5sb2coJ1ttaW5lcmFsc10gdmlzdWFsVmFyaWFibGVzIGFwbGljYWRhcycpXHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1ttaW5lcmFsc10gRVJSTyBhcGxpY2FyQ29sb3JpemFjYW9Qb3JBZ3J1cGFkb3InLCBlKVxyXG4gIH0gZmluYWxseSB7XHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICB9XHJcbn1cclxuXHJcbi8qKiBMYWJlbCBodW1hbm8gcGFyYSBvIHTDrXR1bG8gZGEgbGVnZW5kYS9iYXNlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEZyb21WYWx1ZSh2OiBNaW5lcmFsVGlwbykge1xyXG4gIGNvbnN0IGYgPSBNSU5FUkFMX09QVElPTlMuZmluZChvID0+IG8udmFsdWUgPT09IHYpXHJcbiAgcmV0dXJuIGY/LmxhYmVsID8/IFN0cmluZyh2KVxyXG59XHJcbiIsIi8vIHV0aWxzLnRzIChFU00gQGFyY2dpcy9jb3JlKVxyXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL0ZlYXR1cmVMYXllclwiXHJcbmltcG9ydCBMZWdlbmQgZnJvbSBcIkBhcmNnaXMvY29yZS93aWRnZXRzL0xlZ2VuZFwiXHJcbmltcG9ydCBDbGFzc0JyZWFrc1JlbmRlcmVyIGZyb20gXCJAYXJjZ2lzL2NvcmUvcmVuZGVyZXJzL0NsYXNzQnJlYWtzUmVuZGVyZXJcIlxyXG5pbXBvcnQgU2ltcGxlTWFya2VyU3ltYm9sIGZyb20gXCJAYXJjZ2lzL2NvcmUvc3ltYm9scy9TaW1wbGVNYXJrZXJTeW1ib2xcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGNvcmVzVGlwb3M6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgbGF0ZXJhbDogXCJyZ2JhKDg4LCAxOSwgMjUyLCAwLjcpXCIsXHJcbiAgdGVzdGVtdW5obzogXCJyZ2JhKDI1NSwgMCwgMjU1LCAwLjcpXCIsXHJcbiAgY2FsaGE6IFwicmdiYSgyNDUsIDIwMSwgMzgsIDAuNylcIixcclxuICBwbHVnOiBcInJnYmEoMTI1LCAyNTMsIDE0OCwgMC43KVwiLFxyXG4gIFwid2hvbGUgY29yZVwiOiBcInJnYmEoMjU1LCA0MywgMjQsIDAuNylcIlxyXG59XHJcblxyXG50eXBlIEdlcmFyUGFyYW1zID0ge1xyXG4gIGppbXVNYXBWaWV3OiBhbnlcclxuICBkYWRvczogeyBjb2RpZ29Qb2NvOiBudW1iZXI7IHRvdGFsOiBudW1iZXIgfVtdXHJcbiAgY29sb3JGaWxsOiBzdHJpbmdcclxuICBpZENhbWFkYTogc3RyaW5nXHJcbiAgaWRMZWdlbmRhOiBzdHJpbmdcclxuICB0aXRsZUxlZ2VuZGE6IHN0cmluZ1xyXG4gIHdpdGhJbnRlcmVzdD86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCKHtcclxuICBqaW11TWFwVmlldywgZGFkb3MsIGNvbG9yRmlsbCwgaWRDYW1hZGEsIGlkTGVnZW5kYSwgdGl0bGVMZWdlbmRhXHJcbn06IEdlcmFyUGFyYW1zKSB7XHJcbiAgY29uc29sZS5ncm91cENvbGxhcHNlZChgW2Rpc3QtZWJdIGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCIGlkPSR7aWRDYW1hZGF9YClcclxuICBjb25zb2xlLnRpbWUoYFtkaXN0LWViXSB0ZW1wby10b3RhbCAke2lkQ2FtYWRhfWApXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldy52aWV3XHJcbiAgICBjb25zdCBtYXAgPSB2aWV3Lm1hcFxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdbZGlzdC1lYl0gcXRkIGRhZG9zJywgZGFkb3MubGVuZ3RoLCBkYWRvcy5zbGljZSgwLCAxMCkpXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGFkb3MpIHx8IGRhZG9zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ1tkaXN0LWViXSBzZW0gZGFkb3MgLT4gbsOjbyBjcmlhIGNhbWFkYScpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vcm1hbGl6YSBsaXN0YSBkZSBjw7NkaWdvcyAoYXBlbmFzIG7Dum1lcm9zKVxyXG4gICAgY29uc3QgY29kaWdvc0FyciA9IGRhZG9zLm1hcChwID0+IE51bWJlcihwLmNvZGlnb1BvY28pKS5maWx0ZXIodiA9PiBOdW1iZXIuaXNGaW5pdGUodikpXHJcbiAgICBjb25zdCBjb2RpZ29zID0gY29kaWdvc0Fyci5qb2luKCcsJylcclxuICAgIGlmICghY29kaWdvcykge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ1tkaXN0LWViXSBsaXN0YSBkZSBjw7NkaWdvcyB2YXppYSBhcMOzcyBub3JtYWxpemHDp8OjbycpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IGBQT0NPX0NEX1BPQ08gSU4gKCR7Y29kaWdvc30pYFxyXG4gICAgY29uc29sZS5sb2coJ1tkaXN0LWViXSBkZWZpbml0aW9uRXhwcmVzc2lvbicsIGV4cHJlc3Npb24pXHJcblxyXG4gICAgLy8gTGF5ZXIgYmFzZSBkbyBzZXJ2acOnb1xyXG4gICAgY29uc3QgY2FtYWRhUG9jb3NTcnYgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9iYXNlZ2lzLnBldHJvYnJhcy5jb20uYnIvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvRVhQTE9SQS9GZWF0dXJlX1BvY29zL01hcFNlcnZlci8wJyxcclxuICAgICAgZGVmaW5pdGlvbkV4cHJlc3Npb246IGV4cHJlc3Npb24sXHJcbiAgICAgIHRpdGxlOiAnUG/Dp29zIChiYXNlKScsXHJcbiAgICAgIG91dEZpZWxkczogWycqJ10sXHJcbiAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUudGltZSgnW2Rpc3QtZWJdIGxvYWQgY2FtYWRhUG/Dp29zJylcclxuICAgIGF3YWl0IGNhbWFkYVBvY29zU3J2LmxvYWQoKVxyXG4gICAgY29uc29sZS50aW1lRW5kKCdbZGlzdC1lYl0gbG9hZCBjYW1hZGFQb8Onb3MnKVxyXG5cclxuICAgIC8vIE9JRCByZWFsIGRvIHNlcnZpw6dvIChwb2RlIHNlciBQT0NPX0NEX1BPQ08pXHJcbiAgICBjb25zdCBvYmplY3RJZEZpZWxkID0gKGNhbWFkYVBvY29zU3J2IGFzIGFueSkub2JqZWN0SWRGaWVsZCB8fCAnT0JKRUNUSUQnXHJcbiAgICBjb25zb2xlLmxvZygnW2Rpc3QtZWJdIG9iamVjdElkRmllbGQgZG8gc2VydmnDp286Jywgb2JqZWN0SWRGaWVsZClcclxuXHJcbiAgICBjb25zb2xlLnRpbWUoJ1tkaXN0LWViXSBxdWVyeUZlYXR1cmVzJylcclxuICAgIGNvbnN0IHF1ZXJ5UmVzdWx0ID0gYXdhaXQgY2FtYWRhUG9jb3NTcnYucXVlcnlGZWF0dXJlcyh7XHJcbiAgICAgIHdoZXJlOiBleHByZXNzaW9uLFxyXG4gICAgICBvdXRGaWVsZHM6IFsnKiddLFxyXG4gICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUudGltZUVuZCgnW2Rpc3QtZWJdIHF1ZXJ5RmVhdHVyZXMnKVxyXG4gICAgY29uc29sZS5sb2coJ1tkaXN0LWViXSBmZWF0dXJlcyByZXRvcm5hZGFzJywgcXVlcnlSZXN1bHQuZmVhdHVyZXMubGVuZ3RoKVxyXG5cclxuICAgIC8vIEF0cmlidWkgVE9UQUwgZSBpbmljaWFsaXphIG1kX3ZhbFxyXG4gICAgY29uc3QgZmVhdHVyZXMgPSBxdWVyeVJlc3VsdC5mZWF0dXJlcy5tYXAoKGZlYXR1cmUpID0+IHtcclxuICAgICAgY29uc3QgY29kaWdvID0gTnVtYmVyKGZlYXR1cmUuYXR0cmlidXRlcy5QT0NPX0NEX1BPQ08pXHJcbiAgICAgIGNvbnN0IGRhZG8gPSBkYWRvcy5maW5kKHAgPT4gcC5jb2RpZ29Qb2NvID09PSBjb2RpZ28pXHJcbiAgICAgIGNvbnN0IHRvdGFsID0gZGFkbyA/IE51bWJlcihkYWRvLnRvdGFsKSA6IDBcclxuICAgICAgZmVhdHVyZS5hdHRyaWJ1dGVzLlBPQ09fTURfTUVSSURfQ0VOVCA9IHRvdGFsXHJcbiAgICAgIGZlYXR1cmUuYXR0cmlidXRlcy5tZF92YWwgPSAwIC8vIHVzYWRvIHBlbG9zIGFncnVwYWRvcmVzXHJcbiAgICAgIHJldHVybiBmZWF0dXJlXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIEVzdGF0w61zdGljYSBwYXJhIGNsYXNzZXMvYnViYmxlXHJcbiAgICBjb25zdCB2YWxvcmVzID0gZGFkb3MubWFwKHAgPT4gTnVtYmVyKHAudG90YWwpKS5maWx0ZXIodiA9PiBOdW1iZXIuaXNGaW5pdGUodikpXHJcbiAgICBsZXQgbWluID0gTWF0aC5taW4oLi4udmFsb3JlcylcclxuICAgIGxldCBtYXggPSBNYXRoLm1heCguLi52YWxvcmVzKVxyXG4gICAgY29uc29sZS5sb2coJ1tkaXN0LWViXSBtaW4vbWF4IGFudGVzJywgeyBtaW4sIG1heCB9KVxyXG5cclxuICAgIGNvbnN0IGluZm86IGFueVtdID0gW11cclxuICAgIGNvbnN0IG91dGxpbmUgPSB7IGNvbG9yOiBcImJsYWNrXCIsIHdpZHRoOiBcIjFweFwiIH0gYXMgY29uc3RcclxuXHJcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShtaW4pIHx8ICFOdW1iZXIuaXNGaW5pdGUobWF4KSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ1tkaXN0LWViXSB2YWxvcmVzIGludsOhbGlkb3MgLT4gbsOjbyBjcmlhIGNhbWFkYScpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChtaW4gPT09IDAgJiYgbWF4ID09PSAwKSB7XHJcbiAgICAgIGluZm8ucHVzaCh7XHJcbiAgICAgICAgbWluVmFsdWU6IDAsIG1heFZhbHVlOiAwLFxyXG4gICAgICAgIGxhYmVsOiBcIk7Do28gaMOhIGRhZG9zIHN1ZmljaWVudGVzXCIsXHJcbiAgICAgICAgc3ltYm9sOiBuZXcgU2ltcGxlTWFya2VyU3ltYm9sKHsgY29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwKVwiLCBzaXplOiAwLCBzdHlsZTogXCJjaXJjbGVcIiwgb3V0bGluZSB9KVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgemVyYWRvcyA9IHZhbG9yZXMuZmlsdGVyKHYgPT4gdiA9PT0gMCkubGVuZ3RoXHJcbiAgICAgIGNvbnN0IG5hb1plcmFkb3MgPSB2YWxvcmVzLmZpbHRlcih2ID0+IHYgPiAwKVxyXG4gICAgICBjb25zb2xlLmxvZygnW2Rpc3QtZWJdIHplcmFkb3MvbmFvWmVyYWRvcycsIHsgemVyYWRvcywgbmFvWmVyYWRvczogbmFvWmVyYWRvcy5sZW5ndGggfSlcclxuXHJcbiAgICAgIGlmICh6ZXJhZG9zID4gMCkge1xyXG4gICAgICAgIGluZm8ucHVzaCh7XHJcbiAgICAgICAgICBtaW5WYWx1ZTogMCwgbWF4VmFsdWU6IDAsXHJcbiAgICAgICAgICBsYWJlbDogYHwgMCB8ICgke3plcmFkb3N9IHBvw6dvJHt6ZXJhZG9zID4gMSA/ICdzJyA6ICcnfSlgLFxyXG4gICAgICAgICAgc3ltYm9sOiBuZXcgU2ltcGxlTWFya2VyU3ltYm9sKHsgY29sb3I6IFwicmdiYSgyMDAsMjAwLDIwMCwwLjMpXCIsIHNpemU6IDYsIHN0eWxlOiBcImNpcmNsZVwiLCBvdXRsaW5lIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgbWluID0gTWF0aC5tYXgoMSwgbWluKVxyXG4gICAgICBjb25zdCBuID0gbmFvWmVyYWRvcy5sZW5ndGhcclxuICAgICAgY29uc3QgbnVtQ2xhc3NlcyA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQoMSArIDMuMyAqIE1hdGgubG9nMTAobiB8fCAxKSkpXHJcbiAgICAgIGNvbnN0IGJyZWFrcyA9IE1hdGguY2VpbCgobWF4IC0gbWluICsgMSkgLyBNYXRoLm1heCgxLCBudW1DbGFzc2VzKSlcclxuICAgICAgY29uc3QgbWF4U2l6ZSA9IDQwXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbZGlzdC1lYl0gY2xhc3NlcycsIHsgbnVtQ2xhc3NlcywgYnJlYWtzLCBtYXhTaXplIH0pXHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNsYXNzZXM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG1pblZhbHVlID0gbWluICsgKGkgKiBicmVha3MpXHJcbiAgICAgICAgY29uc3QgbWF4VmFsdWUgPSBtaW4gKyAoKGkgKyAxKSAqIGJyZWFrcykgLSAxXHJcbiAgICAgICAgaWYgKG1pblZhbHVlID4gbWF4KSBicmVha1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gbmFvWmVyYWRvcy5maWx0ZXIodiA9PiB2ID49IG1pblZhbHVlICYmIHYgPD0gbWF4VmFsdWUpLmxlbmd0aFxyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gYCR7bWluVmFsdWV9IHwtLS18ICR7bWF4VmFsdWV9ICgke2NvdW50fSBwb8OnbyR7Y291bnQgPiAxID8gJ3MnIDogJyd9KWBcclxuICAgICAgICBjb25zdCBzaXplID0gNiArIChpICogKG1heFNpemUgLyBudW1DbGFzc2VzKSlcclxuICAgICAgICBpbmZvLnB1c2goe1xyXG4gICAgICAgICAgbWluVmFsdWUsIG1heFZhbHVlLCBsYWJlbCxcclxuICAgICAgICAgIHN5bWJvbDogbmV3IFNpbXBsZU1hcmtlclN5bWJvbCh7IGNvbG9yOiBjb2xvckZpbGwsIHNpemUsIHN0eWxlOiBcImNpcmNsZVwiLCBvdXRsaW5lIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IENsYXNzQnJlYWtzUmVuZGVyZXIoe1xyXG4gICAgICBmaWVsZDogXCJQT0NPX01EX01FUklEX0NFTlRcIixcclxuICAgICAgY2xhc3NCcmVha0luZm9zOiBpbmZvXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIFNjaGVtYSBkbyBsYXllciBjbGllbnQtc2lkZTpcclxuICAgIC8vIC0gaGVyZGEgY2FtcG9zIGRvIHNlcnZpw6dvXHJcbiAgICAvLyAtIHJlbW92ZSBkdXBsaWNhdGFzIHF1ZSB2YW1vcyBhZGljaW9uYXJcclxuICAgIGNvbnN0IGJhc2VGaWVsZHMgPSBjYW1hZGFQb2Nvc1Nydi5maWVsZHMuZmlsdGVyKGYgPT5cclxuICAgICAgZj8ubmFtZSAhPT0gJ1BPQ09fTURfTUVSSURfQ0VOVCcgJiYgZj8ubmFtZSAhPT0gJ21kX3ZhbCdcclxuICAgIClcclxuICAgIGNvbnN0IGZpZWxkcyA9IFtcclxuICAgICAgLi4uYmFzZUZpZWxkcyxcclxuICAgICAgeyBuYW1lOiBcIlBPQ09fTURfTUVSSURfQ0VOVFwiLCBhbGlhczogXCJWYWxvciAoTWluZXJhaXMvQW1vc3RyYXMpXCIsIHR5cGU6IFwiZG91YmxlXCIgYXMgY29uc3QgfSxcclxuICAgICAgeyBuYW1lOiBcIm1kX3ZhbFwiLCBhbGlhczogXCJWYWxvciBBZ3J1cGFkb3JcIiwgdHlwZTogXCJkb3VibGVcIiBhcyBjb25zdCB9XHJcbiAgICBdXHJcblxyXG4gICAgLy8gUmVtb3ZlIGNhbWFkYSBhbnRlcmlvciAoc2UgZXhpc3RpcilcclxuICAgIGNvbnN0IGV4aXN0ZW50ZSA9IG1hcC5maW5kTGF5ZXJCeUlkKGlkQ2FtYWRhKVxyXG4gICAgaWYgKGV4aXN0ZW50ZSkgeyBjb25zb2xlLmxvZygnW2Rpc3QtZWJdIHJlbW92ZSBjYW1hZGEgZXhpc3RlbnRlJywgaWRDYW1hZGEpOyBtYXAucmVtb3ZlKGV4aXN0ZW50ZSkgfVxyXG5cclxuICAgIC8vIENyaWEgY2FtYWRhIGNsaWVudC1zaWRlIGNvbSBvIE9JRCByZWFsIGRvIHNlcnZpw6dvXHJcbiAgICBjb25zdCBjYW1hZGFEaXN0cmlidWljYW8gPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgaWQ6IGlkQ2FtYWRhLFxyXG4gICAgICBzb3VyY2U6IGZlYXR1cmVzLFxyXG4gICAgICBmaWVsZHMsXHJcbiAgICAgIG9iamVjdElkRmllbGQsIC8vIDw8PCBoZXJkYWRvIGRvIHNlcnZpw6dvIChleC46ICdQT0NPX0NEX1BPQ08nKVxyXG4gICAgICBnZW9tZXRyeVR5cGU6IFwicG9pbnRcIixcclxuICAgICAgc3BhdGlhbFJlZmVyZW5jZTogdmlldy5zcGF0aWFsUmVmZXJlbmNlID8/IHsgd2tpZDogMTAyMTAwIH0sXHJcbiAgICAgIHJlbmRlcmVyLFxyXG4gICAgICB0aXRsZTogdGl0bGVMZWdlbmRhLFxyXG4gICAgICBsaXN0TW9kZTogXCJoaWRlXCIsXHJcbiAgICAgIGZlYXR1cmVSZWR1Y3Rpb246IHsgdHlwZTogXCJjbHVzdGVyXCIsIGNsdXN0ZXJNaW5TaXplOiAxOCwgY2x1c3Rlck1heFNpemU6IDQ4LCBsYWJlbHNWaXNpYmxlOiBmYWxzZSB9XHJcbiAgICB9KVxyXG5cclxuICAgIG1hcC5hZGQoY2FtYWRhRGlzdHJpYnVpY2FvKVxyXG4gICAgY29uc29sZS5sb2coJ1tkaXN0LWViXSBjYW1hZGEgYWRpY2lvbmFkYScsIGlkQ2FtYWRhLCAnZmVhdHVyZXM6JywgZmVhdHVyZXMubGVuZ3RoKVxyXG5cclxuICAgIC8vIChPcGNpb25hbCkgbGVnZW5kYSBubyBtYXBhXHJcbiAgICBjb25zdCBsZWdlbmQgPSBuZXcgTGVnZW5kKHtcclxuICAgICAgdmlldyxcclxuICAgICAgbGF5ZXJJbmZvczogW3sgbGF5ZXI6IGNhbWFkYURpc3RyaWJ1aWNhbywgdGl0bGU6IHRpdGxlTGVnZW5kYSB9XVxyXG4gICAgfSlcclxuICAgIC8vIHZpZXcudWkuYWRkKGxlZ2VuZCwgXCJib3R0b20tbGVmdFwiKVxyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbZGlzdC1lYl0gRVJSTyBhbyBnZXJhck1hcGFEaXN0cmlidWljYW9FQicsIGUpXHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIGNvbnNvbGUudGltZUVuZChgW2Rpc3QtZWJdIHRlbXBvLXRvdGFsICR7aWRDYW1hZGF9YClcclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX3JlbmRlcmVyc19DbGFzc0JyZWFrc1JlbmRlcmVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9zeW1ib2xzX1NpbXBsZU1hcmtlclN5bWJvbF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfd2lkZ2V0c19MZWdlbmRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbi8qKiBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCAqL1xyXG5pbXBvcnQgeyBSZWFjdCwganN4LCBjc3MsIEdsb2JhbCB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7IGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCLCBjb3Jlc1RpcG9zIH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0IHtcclxuICBNSU5FUkFMX09QVElPTlMsXHJcbiAgZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpc0NvbnRhZG9yLFxyXG4gIGZldGNoTWluZXJhbExpc3RhLFxyXG4gIGZldGNoTWluZXJhbEFncnVwYWRvcixcclxuICBkZXNlbmhhckRpc3RyaWJ1aWNhb01pbmVyYWlzLFxyXG4gIGFwbGljYXJDb2xvcml6YWNhb1BvckFncnVwYWRvcixcclxuICBsYWJlbEZyb21WYWx1ZSxcclxuICB0eXBlIE1pbmVyYWxUaXBvLFxyXG4gIHR5cGUgTWluZXJhbExpc3RhSXRlbVxyXG59IGZyb20gJy4vTWluZXJhbHMnXHJcblxyXG4vKiA9PT09PSBUaXBvcyA9PT09PSAqL1xyXG50eXBlIE1zZ0ZhaXhhSW50ZXJlc3NlID0geyB0eXBlOiAnZmFpeGEtaW50ZXJlc3NlJzsgY29kaWdvc1BvY29zOiAobnVtYmVyIHwgc3RyaW5nKVtdIH1cclxudHlwZSBNc2dMZWdlbmRNaW5lcmFpcyA9IHsgdHlwZTogJ2xlZ2VuZDptaW5lcmFpcyc7IHBheWxvYWQ6IGFueSB9XHJcbnR5cGUgTXNnQ29uZmlnID0geyB0eXBlOiAnZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhczpvayc7IHN0YXJ0V2l0aEludGVyZXN0PzogYm9vbGVhbiB9XHJcbnR5cGUgTXNnQ29uZmlnSW50ZXJlc3QgPSB7IHR5cGU6ICdjb25maWcnOyBzdGFydFdpdGhJbnRlcmVzdD86IGJvb2xlYW47IGNnVmlzaWJsZT86IGJvb2xlYW4gfVxyXG5cclxudHlwZSBBbW9zdHJhSXRlbSA9IHtcclxuICBjb2RpZ29Qb2NvOiBudW1iZXJcclxuICB0b3RhbEFtb3N0cmFzTGF0ZXJhaXM6IG51bWJlclxyXG4gIHRvdGFsQ2FsaGFzOiBudW1iZXJcclxuICB0b3RhbFBsdWdzOiBudW1iZXJcclxuICB0b3RhbFRlc3RlbXVuaG9zOiBudW1iZXJcclxuICB0b3RhbFdob2xlQ29yZTogbnVtYmVyXHJcbn1cclxuXHJcbi8qID09PT09IENvbmZpZyA9PT09PSAqL1xyXG5jb25zdCBERUZBVUxUX0ZBSVhBX0lOVEVSRVNTRSA9IGZhbHNlXHJcblxyXG4vKiA9PT09PSBMYXlvdXQgPT09PT0gKi9cclxuY29uc3QgREVGQVVMVF9XSURUSCA9IDM2MFxyXG5jb25zdCBQQU5FTF9NQVJHSU5fVE9QID0gNTBcclxuY29uc3QgUEFORUxfTUFSR0lOX1JJR0hUID0gMTBcclxuY29uc3QgREVGQVVMVF9IRUlHSFQgPSA2NTBcclxuXHJcbi8qID09PT09IENhbXBvcyBwb3IgdGlwbyAoYW1vc3RyYXMpID09PT09ICovXHJcbmNvbnN0IFRZUEVfRklFTEQ6IFJlY29yZDxzdHJpbmcsIGtleW9mIEFtb3N0cmFJdGVtPiA9IHtcclxuICBsYXRlcmFsOiAndG90YWxBbW9zdHJhc0xhdGVyYWlzJyxcclxuICB0ZXN0ZW11bmhvOiAndG90YWxUZXN0ZW11bmhvcycsXHJcbiAgY2FsaGE6ICd0b3RhbENhbGhhcycsXHJcbiAgcGx1ZzogJ3RvdGFsUGx1Z3MnLFxyXG4gICd3aG9sZSBjb3JlJzogJ3RvdGFsV2hvbGVDb3JlJ1xyXG59XHJcbmNvbnN0IExJU1RfVFlQRVMgPSBPYmplY3Qua2V5cyhUWVBFX0ZJRUxEKVxyXG5cclxuY29uc3QgbG9nMTAgPSAoeDogbnVtYmVyKSA9PiAoTWF0aC5sb2cxMCA/IE1hdGgubG9nMTAoeCkgOiBNYXRoLmxvZyh4KSAvIE1hdGguTE4xMClcclxuXHJcbi8qID09PT09IEZldGNoIGJhc2UgKGFtb3N0cmFzKSA9PT09PSAqL1xyXG5mdW5jdGlvbiBidWlsZFNlc3Npb25Cb2R5KGZhaXhhSW50ZXJlc3NlOiBib29sZWFuKSB7XHJcbiAgY29uc3QgcCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG4gIHAuc2V0KCdoZFN5cycsICdub3ZhaW50Y29ucycpXHJcbiAgcC5zZXQoJ2hkVUMnLCAnTWFwYScpXHJcbiAgcC5zZXQoJ2hkQWNhbycsICdDYXJyZWdhck1hcGFEaXN0cmlidWljYW9BbW9zdHJhc0NvbnRhZG9yJylcclxuICBwLnNldCgnaGRTZXNzaW9uRmlsdGVyJywgJ3RydWUnKVxyXG4gIHAuc2V0KCdmYWl4YUludGVyZXNzZScsIFN0cmluZyghIWZhaXhhSW50ZXJlc3NlKSlcclxuICByZXR1cm4gcC50b1N0cmluZygpXHJcbn1cclxuZnVuY3Rpb24gbm9ybWFsaXplTGlzdChyYXc6IGFueVtdKTogQW1vc3RyYUl0ZW1bXSB7XHJcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5KHJhdykgPyByYXcgOiBbXSlcclxuICAgIC5tYXAoKHI6IGFueSkgPT4gKHtcclxuICAgICAgY29kaWdvUG9jbzogTnVtYmVyKHIuY29kaWdvUG9jbyA/PyByLlBPQ09fQ0RfUE9DTyA/PyByLnBvY28gPz8gci5jb2RpZ28gPz8gMCksXHJcbiAgICAgIHRvdGFsQW1vc3RyYXNMYXRlcmFpczogTnVtYmVyKHIudG90YWxBbW9zdHJhc0xhdGVyYWlzID8/IHIubGF0ZXJhaXMgPz8gMCksXHJcbiAgICAgIHRvdGFsQ2FsaGFzOiBOdW1iZXIoci50b3RhbENhbGhhcyA/PyByLmNhbGhhcyA/PyAwKSxcclxuICAgICAgdG90YWxQbHVnczogTnVtYmVyKHIudG90YWxQbHVncyA/PyByLnBsdWdzID8/IDApLFxyXG4gICAgICB0b3RhbFRlc3RlbXVuaG9zOiBOdW1iZXIoci50b3RhbFRlc3RlbXVuaG9zID8/IHIudGVzdGVtdW5ob3MgPz8gMCksXHJcbiAgICAgIHRvdGFsV2hvbGVDb3JlOiBOdW1iZXIoci50b3RhbFdob2xlQ29yZSA/PyByLndob2xlQ29yZSA/PyAwKVxyXG4gICAgfSkpXHJcbiAgICAuZmlsdGVyKCh4KSA9PiAhIXguY29kaWdvUG9jbylcclxufVxyXG5mdW5jdGlvbiBmZXRjaFZpYVBhcmVudChib2R5OiBzdHJpbmcpOiBQcm9taXNlPEFtb3N0cmFJdGVtW10+IHtcclxuICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbYW1vc3RyYXNdIGZldGNoVmlhUGFyZW50JylcclxuICBjb25zb2xlLmxvZygnW2Ftb3N0cmFzXSBib2R5JywgYm9keSlcclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IHJlcUlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMilcclxuXHJcbiAgICBsZXQgdGFyZ2V0T3JpZ2luID0gJyonXHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoZG9jdW1lbnQucmVmZXJyZXIpIHRhcmdldE9yaWdpbiA9IG5ldyBVUkwoZG9jdW1lbnQucmVmZXJyZXIpLm9yaWdpblxyXG4gICAgfSBjYXRjaCB7fVxyXG5cclxuICAgIGNvbnN0IE9LID0gJ2ZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXM6b2snXHJcbiAgICBjb25zdCBFUlIgPSAnZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhczplcnInXHJcblxyXG4gICAgY29uc3Qgb25NZXNzYWdlID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgZDogYW55ID0gZXZlbnQ/LmRhdGEgfHwge31cclxuICAgICAgaWYgKCFkIHx8IGQucmVxSWQgIT09IHJlcUlkKSByZXR1cm5cclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbYW1vc3RyYXNdIHJlc3Bvc3RhIGRvIHBhaScsIHtcclxuICAgICAgICByZWNlaXZlZFR5cGU6IGQudHlwZSxcclxuICAgICAgICBleHBlY3RlZE9rOiBPSyxcclxuICAgICAgICBleHBlY3RlZEVycjogRVJSLFxyXG4gICAgICAgIG9yaWdpbjogZXZlbnQub3JpZ2luLFxyXG4gICAgICAgIHNhbWVPcmlnaW46IGV2ZW50Lm9yaWdpbiA9PT0gd2luZG93LmxvY2F0aW9uLm9yaWdpbixcclxuICAgICAgICByZXFJZCxcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChkLnR5cGUgPT09IE9LKSB7XHJcbiAgICAgICAgdHJ5IHsgY2xlYXJUaW1lb3V0KHRvKSB9IGNhdGNoIHt9XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpXHJcbiAgICAgICAgY29uc3QgY291bnQgPSBBcnJheS5pc0FycmF5KGQucGF5bG9hZCkgPyBkLnBheWxvYWQubGVuZ3RoIDogbnVsbFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbYW1vc3RyYXNdIE9LIOKAlCBub3JtYWxpemFuZG8gcGF5bG9hZCcsIHsgY291bnQsIHNhbXBsZTogQXJyYXkuaXNBcnJheShkLnBheWxvYWQpID8gZC5wYXlsb2FkLnNsaWNlKDAsIDMpIDogZC5wYXlsb2FkIH0pXHJcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgICAgICAgcmVzb2x2ZShub3JtYWxpemVMaXN0KGQucGF5bG9hZCkpXHJcbiAgICAgIH0gZWxzZSBpZiAoZC50eXBlID09PSBFUlIpIHtcclxuICAgICAgICB0cnkgeyBjbGVhclRpbWVvdXQodG8pIH0gY2F0Y2gge31cclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSlcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1thbW9zdHJhc10gRVJSTyBkbyBwYWknLCBkLm1lc3NhZ2UpXHJcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihkLm1lc3NhZ2UgfHwgJ0Vycm8gbm8gZmV0Y2ggdmlhIHBhcmVudCcpKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIE1lbnNhZ2VtIGNvbSByZXFJZCBjZXJ0byBtYXMgdHlwZSBkaWZlcmVudGUg4oCUIGFwZW5hcyBpZ25vcmUgKHBvZGUgc2VyIG91dHJhIHBpcGVsaW5lKVxyXG4gICAgICAgIGNvbnNvbGUud2FybignW2Ftb3N0cmFzXSBpZ25vcmFuZG8gbWVuc2FnZW0gY29tIHJlcUlkIHbDoWxpZG8gcG9yw6ltIHR5cGUgaW5lc3BlcmFkbzonLCBkLnR5cGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSlcclxuXHJcbiAgICBjb25zdCB0byA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpXHJcbiAgICAgIGNvbnNvbGUud2FybignW2Ftb3N0cmFzXSBUSU1FT1VUIGFndWFyZGFuZG8gcmVzcG9zdGEgZG8gcGFpJywgeyByZXFJZCwgZXhwZWN0ZWQ6IFtPSywgRVJSXSB9KVxyXG4gICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgICAgcmVqZWN0KG5ldyBFcnJvcignVGltZW91dCBhZ3VhcmRhbmRvIHJlc3Bvc3RhIGRvIHBhaSAoYW1vc3RyYXMpJykpXHJcbiAgICB9LCAyMDAwMClcclxuXHJcbiAgICB3aW5kb3cucGFyZW50Py5wb3N0TWVzc2FnZSh7IHR5cGU6ICdmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzJywgYm9keSwgcmVxSWQgfSwgdGFyZ2V0T3JpZ2luKVxyXG4gICAgY29uc29sZS5sb2coJ1thbW9zdHJhc10gcG9zdE1lc3NhZ2UgLT4gUEFJJywge1xyXG4gICAgICB0eXBlOiAnZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcycsXHJcbiAgICAgIHRhcmdldE9yaWdpbixcclxuICAgICAgcmVxSWRcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcyhmYWl4YUludGVyZXNzZSA9IGZhbHNlKTogUHJvbWlzZTxBbW9zdHJhSXRlbVtdPiB7XHJcbiAgY29uc3QgYm9keSA9IGJ1aWxkU2Vzc2lvbkJvZHkoZmFpeGFJbnRlcmVzc2UpXHJcbiAgcmV0dXJuIGZldGNoVmlhUGFyZW50KGJvZHkpXHJcbn1cclxuXHJcbi8qID09PT09IEVzdGlsb3MgPT09PT0gKi9cclxuY29uc3QgTUFYX0JVQkJMRSA9IDQwXHJcbmNvbnN0IGdsb2JhbFBhbmVsU3R5bGUgPSBjc3NgXHJcbiAgZGl2W3JvbGU9J2RpYWxvZyddW2FyaWEtbGFiZWw9J21hcGEtZGUtZGlzdHJpYnVpY2FvJ10sXHJcbiAgZGl2W3JvbGU9J2RpYWxvZyddW2FyaWEtbGFiZWw9J21hcGEtZGUtZGlzdHJpYnVpY2FvLXYyJ10ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBpbnNldDogJHtQQU5FTF9NQVJHSU5fVE9QfXB4ICR7UEFORUxfTUFSR0lOX1JJR0hUfXB4IGF1dG8gYXV0byAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiA5OTk5ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogJHtERUZBVUxUX1dJRFRIfXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6ICR7REVGQVVMVF9IRUlHSFR9cHggIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDI0cHgpICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgbGVnZW5kSGVhZGVyU3R5bGUgPSBjc3NgZm9udC13ZWlnaHQ6NjAwO21hcmdpbjo0cHggMDtmb250LXNpemU6Ljg1cmVtO2xpbmUtaGVpZ2h0OjEuMTtgXHJcbmNvbnN0IGJ1YmJsZUJveFN0eWxlID0gY3NzYHdpZHRoOiR7TUFYX0JVQkJMRX1weDtoZWlnaHQ6JHtNQVhfQlVCQkxFfXB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW4tcmlnaHQ6OHB4O2BcclxuY29uc3Qgd3JhcHBlclN0eWxlID0gY3NzYHBvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDojZmZmO2JvcmRlcjoxcHggc29saWQgI2RkZDtib3JkZXItcmFkaXVzOjZweDtib3gtc2hhZG93OjAgNHB4IDEycHggcmdiYSgwLDAsMCwuMSk7cGFkZGluZzoxNnB4O292ZXJmbG93OmhpZGRlbjtgXHJcbmNvbnN0IHRpdGxlU3R5bGUgPSBjc3NgZm9udC13ZWlnaHQ6NjAwO21hcmdpbi1ib3R0b206NHB4O2Rpc3BsYXk6YmxvY2s7YFxyXG5jb25zdCBzZWxlY3RTdHlsZSA9IGNzc2B3aWR0aDoxMDAlO3BhZGRpbmc6NnB4IDhweDttYXJnaW4tYm90dG9tOjEycHg7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JvcmRlci1yYWRpdXM6NHB4O2BcclxuXHJcbi8qKiBHcmlkIHVzYWRhIHBhcmEgb3DDp8O1ZXMgKGFtb3N0cmFzKSDigJMgMiBjb2x1bmFzLCBmbHV4byBwb3IgbGluaGFzIChtYW50w6ltIFRlc3RlbXVuaG9zIGRlbnRybyBkbyBibG9jbyBjaW56YSkgKi9cclxuY29uc3QgbGlzdFN0eWxlID0gY3NzYFxyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgxNDBweCwgMWZyKSk7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyNHB4LCBhdXRvKTtcclxuICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gIGNvbHVtbi1nYXA6IDRweDtcclxuICByb3ctZ2FwOiAycHg7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG5gXHJcblxyXG4vKiogcsOzdHVsbyBjb21wYWN0byBzZXJ2ZSBwYXJhIGNoZWNrYm94IGUgcmFkaW8gKi9cclxuY29uc3QgY2hlY2tib3hMYWJlbFN0eWxlID0gY3NzYFxyXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2x1bW4tZ2FwOiA2cHg7XHJcbiAgcGFkZGluZzogMXB4IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIG1pbi13aWR0aDogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICYgPiAqIHsgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfVxyXG4gIGlucHV0W3R5cGU9J2NoZWNrYm94J10sIGlucHV0W3R5cGU9J3JhZGlvJ10geyB3aWR0aDogMTRweDsgaGVpZ2h0OiAxNHB4OyBtYXJnaW46IDAgIWltcG9ydGFudDsgZmxleDogMCAwIGF1dG87IH1cclxuXHJcbiAgLmxibCB7IG1pbi13aWR0aDogMDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IHdoaXRlLXNwYWNlOiBub3dyYXA7IGZvbnQtc2l6ZTogLjg0cmVtOyBsaW5lLWhlaWdodDogMS4xNTsgcGFkZGluZy1ib3R0b206IDFweDsgfVxyXG5gXHJcblxyXG4vKiogR3JpZCBkb3MgcsOhZGlvcyBkZSBtaW5lcmFpcyAoMiBjb2x1bmFzIC8gMyBsaW5oYXMpICovXHJcbmNvbnN0IG1pbmVyYWxzTGlzdFN0eWxlID0gY3NzYFxyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNDBweCwgMWZyKSBtaW5tYXgoMTQwcHgsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWlubWF4KDI0cHgsIGF1dG8pKTtcclxuICBjb2x1bW4tZ2FwOiA0cHg7XHJcbiAgcm93LWdhcDogMnB4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuXHJcbiAgLyogRFJYLVRvdGFsIChSb3cxLCBDb2wxKSAqL1xyXG4gIGxhYmVsW2RhdGEta2V5PSdEUlgtVE9UJ10geyBncmlkLWNvbHVtbjogMTsgZ3JpZC1yb3c6IDE7IH1cclxuICAvKiBRZW1zY2FuLU1hc3NhIChSb3cxLCBDb2wyKSAqL1xyXG4gIGxhYmVsW2RhdGEta2V5PSdNQVNTQSddICAgeyBncmlkLWNvbHVtbjogMjsgZ3JpZC1yb3c6IDE7IH1cclxuICAvKiBEUlgtQXJnaWxvbWluZXJhaXMgKFJvdzIsIENvbDEpICovXHJcbiAgbGFiZWxbZGF0YS1rZXk9J0RSWC1BUkcnXSB7IGdyaWQtY29sdW1uOiAxOyBncmlkLXJvdzogMjsgfVxyXG4gIC8qIFFlbXNjYW4tw4FyZWEgKFJvdzIsIENvbDIpICovXHJcbiAgbGFiZWxbZGF0YS1rZXk9J0FSRUEnXSAgICB7IGdyaWQtY29sdW1uOiAyOyBncmlkLXJvdzogMjsgfVxyXG4gIC8qIFwiVG9kYXMgYXMgQW7DoWxpc2VzXCIgKFJvdzMsIG9jdXBhbmRvIDIgY29sdW5hcykgKi9cclxuICBsYWJlbFtkYXRhLWtleT0ndG9kYXNBbmFsaXNlcyddIHsgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7IGdyaWQtcm93OiAzOyB9XHJcbmBcclxuXHJcbmNvbnN0IHN1bW1hcnlMaXN0U3R5bGUgPSBjc3NgbWF4LWhlaWdodDozMDBweDtvdmVyZmxvdy15OmF1dG87bWFyZ2luLXRvcDo4cHg7cGFkZGluZzo4cHggOHB4IDM2cHg7YmFja2dyb3VuZDojZmZmO2JvcmRlcjoxcHggc29saWQgI2RkZDtib3JkZXItcmFkaXVzOjRweDtwb3NpdGlvbjpyZWxhdGl2ZTtgXHJcbmNvbnN0IHN1bW1hcnlJdGVtU3R5bGUgPSBjc3NgZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW46MnB4O2BcclxuY29uc3QgcmFuZ2VMYWJlbFN0eWxlID0gY3NzYGZvbnQtc2l6ZTouNzhyZW07bGluZS1oZWlnaHQ6MS4xO2BcclxuXHJcbmNvbnN0IGZvb3RlclN0eWxlID0gY3NzYHBvc2l0aW9uOiBzdGlja3k7IGJvdHRvbTogMDsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7IHBhZGRpbmc6IDRweCAwOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiA2cHg7YFxyXG5jb25zdCBmb290ZXJMYWJlbFN0eWxlID0gY3NzYGRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjZweDtwYWRkaW5nLWxlZnQ6LjVlbTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6LjlyZW07YFxyXG5jb25zdCBmb290ZXJMYWJlbFN0eWxlSW50ZXJlc3NlID0gZm9vdGVyTGFiZWxTdHlsZVxyXG5cclxuLyogPT09PT0gU3Vtw6FyaW8gKGFtb3N0cmFzLyBtaW5lcmFpcykgPT09PT0gKi9cclxuZnVuY3Rpb24gY2FsY3VsYXJRdWVicmFzKGRhZG9zOiB7IHRvdGFsOiBudW1iZXIgfVtdLCBjb2xvckZpbGw6IHN0cmluZykge1xyXG4gIGNvbnN0IHZhbG9yZXMgPSBkYWRvcy5tYXAoKHApID0+IE51bWJlcihwLnRvdGFsKSB8fCAwKVxyXG4gIGxldCBtaW4gPSBNYXRoLm1pbiguLi52YWxvcmVzKVxyXG4gIGxldCBtYXggPSBNYXRoLm1heCguLi52YWxvcmVzKVxyXG5cclxuICBjb25zdCBpbmZvOiB7IGxhYmVsOiBzdHJpbmc7IHNpemU6IG51bWJlcjsgY29yOiBzdHJpbmc7IGNvdW50OiBudW1iZXIgfVtdID0gW11cclxuICBpZiAoIWlzRmluaXRlKG1pbikgfHwgIWlzRmluaXRlKG1heCkpIHJldHVybiBpbmZvXHJcblxyXG4gIGlmIChtaW4gPT09IDAgJiYgbWF4ID09PSAwKSB7XHJcbiAgICBpbmZvLnB1c2goeyBsYWJlbDogJ07Do28gaMOhIGRhZG9zIHN1ZmljaWVudGVzJywgc2l6ZTogMCwgY29yOiBjb2xvckZpbGwsIGNvdW50OiAwIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHplcmFkb3MgPSB2YWxvcmVzLmZpbHRlcigodikgPT4gdiA9PT0gMCkubGVuZ3RoXHJcbiAgICBjb25zdCBuYW9aZXJhZG9zID0gdmFsb3Jlcy5maWx0ZXIoKHYpID0+IHYgPiAwKVxyXG5cclxuICAgIGlmICh6ZXJhZG9zID4gMCkge1xyXG4gICAgICBpbmZvLnB1c2goeyBsYWJlbDogYHwgMCB8ICgke3plcmFkb3N9IHBvw6dvJHt6ZXJhZG9zID4gMSA/ICdzJyA6ICcnfSlgLCBzaXplOiA2LCBjb3I6ICdyZ2JhKDIwMCwyMDAsMjAwLDAuMyknLCBjb3VudDogemVyYWRvcyB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1pbiA9IDFcclxuICAgIGNvbnN0IG4gPSBuYW9aZXJhZG9zLmxlbmd0aFxyXG4gICAgY29uc3QgbnVtQ2xhc3NlcyA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQoMSArIDMuMyAqIGxvZzEwKG4gfHwgMSkpKVxyXG4gICAgY29uc3QgYnJlYWtzID0gTWF0aC5jZWlsKChtYXggLSBtaW4gKyAxKSAvIE1hdGgubWF4KDEsIG51bUNsYXNzZXMpKVxyXG4gICAgY29uc3QgbWF4U2l6ZSA9IE1BWF9CVUJCTEVcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNsYXNzZXM7IGkrKykge1xyXG4gICAgICBjb25zdCBtaW5WYWx1ZSA9IG1pbiArIGkgKiBicmVha3NcclxuICAgICAgY29uc3QgbWF4VmFsdWUgPSBtaW4gKyAoaSArIDEpICogYnJlYWtzIC0gMVxyXG4gICAgICBpZiAobWluVmFsdWUgPiBtYXgpIGJyZWFrXHJcbiAgICAgIGNvbnN0IGNvdW50ID0gbmFvWmVyYWRvcy5maWx0ZXIoKHYpID0+IHYgPj0gbWluVmFsdWUgJiYgdiA8PSBtYXhWYWx1ZSkubGVuZ3RoXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gYCR7bWluVmFsdWV9IHwtLS18ICR7bWF4VmFsdWV9ICgke2NvdW50fSBwb8OnbyR7Y291bnQgPiAxID8gJ3MnIDogJyd9KWBcclxuICAgICAgY29uc3Qgc2l6ZSA9IDYgKyBpICogKG1heFNpemUgLyBudW1DbGFzc2VzKVxyXG4gICAgICBpbmZvLnB1c2goeyBsYWJlbCwgc2l6ZSwgY29yOiBjb2xvckZpbGwsIGNvdW50IH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBpbmZvXHJcbn1cclxuXHJcbi8qID09PT09IEhlbHBlcnMgZGlhbG9nL3Bvc2ljaW9uYW1lbnRvID09PT09ICovXHJcbmZ1bmN0aW9uIGZpbmRDbG9zZXN0RGlhbG9nKGVsOiBIVE1MRWxlbWVudCB8IG51bGwpOiBIVE1MRWxlbWVudCB8IG51bGwge1xyXG4gIGxldCBjdXI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGVsXHJcbiAgd2hpbGUgKGN1cikgeyBpZiAoY3VyLmdldEF0dHJpYnV0ZSAmJiBjdXIuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICdkaWFsb2cnKSByZXR1cm4gY3VyOyBjdXIgPSBjdXI/LnBhcmVudEVsZW1lbnQgPz8gbnVsbCB9XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5mdW5jdGlvbiBpc0RpYWxvZ0hpZGRlbihkbGc6IEhUTUxFbGVtZW50KSB7XHJcbiAgY29uc3QgY3MgPSBnZXRDb21wdXRlZFN0eWxlKGRsZylcclxuICByZXR1cm4gZGxnLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSA9PT0gJ3RydWUnIHx8IGNzLmRpc3BsYXkgPT09ICdub25lJyB8fCBjcy52aXNpYmlsaXR5ID09PSAnaGlkZGVuJ1xyXG59XHJcbmxldCBfYXBwbHlpbmdTdHlsZSA9IGZhbHNlXHJcbmZ1bmN0aW9uIGZvcmNlUGFuZWxTdHlsZShkbGc6IEhUTUxFbGVtZW50KSB7XHJcbiAgaWYgKF9hcHBseWluZ1N0eWxlKSByZXR1cm5cclxuICBfYXBwbHlpbmdTdHlsZSA9IHRydWVcclxuICB0cnkge1xyXG4gICAgY29uc3QgcyA9IGRsZy5zdHlsZVxyXG4gICAgaWYgKHMuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKSAhPT0gJ2Fic29sdXRlJykgcy5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnYWJzb2x1dGUnLCAnaW1wb3J0YW50JylcclxuICAgIHMucmVtb3ZlUHJvcGVydHkoJ2xlZnQnKTsgcy5yZW1vdmVQcm9wZXJ0eSgnYm90dG9tJyk7IHMucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpXHJcbiAgICBzLnNldFByb3BlcnR5KCdpbnNldCcsICdhdXRvIGF1dG8gYXV0byBhdXRvJylcclxuICAgIHMuc2V0UHJvcGVydHkoJ3RvcCcsIGAke1BBTkVMX01BUkdJTl9UT1B9cHhgLCAnaW1wb3J0YW50JylcclxuICAgIHMuc2V0UHJvcGVydHkoJ3JpZ2h0JywgYCR7UEFORUxfTUFSR0lOX1JJR0hUfXB4YCwgJ2ltcG9ydGFudCcpXHJcbiAgICBpZiAocy5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpICE9PSBgJHtERUZBVUxUX1dJRFRIfXB4YCkgcy5zZXRQcm9wZXJ0eSgnd2lkdGgnLCBgJHtERUZBVUxUX1dJRFRIfXB4YCwgJ2ltcG9ydGFudCcpXHJcbiAgICBpZiAocy5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSAhPT0gYCR7REVGQVVMVF9IRUlHSFR9cHhgKSBzLnNldFByb3BlcnR5KCdoZWlnaHQnLCBgJHtERUZBVUxUX0hFSUdIVH1weGAsICdpbXBvcnRhbnQnKVxyXG4gICAgaWYgKHMuZ2V0UHJvcGVydHlWYWx1ZSgnbWF4LWhlaWdodCcpICE9PSAnY2FsYygxMDAlIC0gMjRweCknKSBzLnNldFByb3BlcnR5KCdtYXgtaGVpZ2h0JywgJ2NhbGMoMTAwJSAtIDI0cHgpJywgJ2ltcG9ydGFudCcpXHJcbiAgICBpZiAocy5nZXRQcm9wZXJ0eVZhbHVlKCdvdmVyZmxvdycpICE9PSAndmlzaWJsZScpIHMuc2V0UHJvcGVydHkoJ292ZXJmbG93JywgJ3Zpc2libGUnLCAnaW1wb3J0YW50JylcclxuICAgIGlmIChzLmdldFByb3BlcnR5VmFsdWUoJ3otaW5kZXgnKSAhPT0gJzk5OTknKSBzLnNldFByb3BlcnR5KCd6LWluZGV4JywgJzk5OTknLCAnaW1wb3J0YW50JylcclxuICB9IGZpbmFsbHkgeyBfYXBwbHlpbmdTdHlsZSA9IGZhbHNlIH1cclxufVxyXG5mdW5jdGlvbiB1c2VGb3JjZVJpZ2h0UG9zaXRpb24ocm9vdFJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50Pikge1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2xlYW51cDogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGxcclxuICAgIGNvbnN0IGFwcGx5ID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBkbGcgPVxyXG4gICAgICAgIChyb290UmVmLmN1cnJlbnQgJiYgKHJvb3RSZWYuY3VycmVudC5jbG9zZXN0KCdbcm9sZT1cImRpYWxvZ1wiXScpIGFzIEhUTUxFbGVtZW50KSkgfHxcclxuICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2W3JvbGU9XCJkaWFsb2dcIl1bYXJpYS1sYWJlbD1cIm1hcGEtZGUtZGlzdHJpYnVpY2FvLXYyXCJdJykgYXMgSFRNTEVsZW1lbnQpIHx8XHJcbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdltyb2xlPVwiZGlhbG9nXCJdW2FyaWEtbGFiZWw9XCJtYXBhLWRlLWRpc3RyaWJ1aWNhb1wiXScpIGFzIEhUTUxFbGVtZW50KVxyXG4gICAgICBpZiAoIWRsZykgcmV0dXJuXHJcbiAgICAgIGZvcmNlUGFuZWxTdHlsZShkbGcpXHJcbiAgICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xyXG4gICAgICAgIGlmIChfYXBwbHlpbmdTdHlsZSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKG11dGF0aW9ucy5zb21lKChtKSA9PiBtLmF0dHJpYnV0ZU5hbWUgPT09ICdzdHlsZScpKSB7XHJcbiAgICAgICAgICBjb25zdCBzID0gZGxnLnN0eWxlXHJcbiAgICAgICAgICBjb25zdCBkcmlmdCA9IHMuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKSAhPT0gJ2Fic29sdXRlJ1xyXG4gICAgICAgICAgICB8fCBzLmdldFByb3BlcnR5VmFsdWUoJ3RvcCcpICE9PSBgJHtQQU5FTF9NQVJHSU5fVE9QfXB4YFxyXG4gICAgICAgICAgICB8fCBzLmdldFByb3BlcnR5VmFsdWUoJ3JpZ2h0JykgIT09IGAke1BBTkVMX01BUkdJTl9SSUdIVH1weGBcclxuICAgICAgICAgICAgfHwgKHMudHJhbnNmb3JtICYmIHMudHJhbnNmb3JtICE9PSAnbm9uZScpXHJcbiAgICAgICAgICBpZiAoZHJpZnQpIGZvcmNlUGFuZWxTdHlsZShkbGcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBtby5vYnNlcnZlKGRsZywgeyBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXSB9KVxyXG4gICAgICBsZXQgdG86IGFueVxyXG4gICAgICBjb25zdCBvblJlc2l6ZSA9ICgpID0+IHsgY2xlYXJUaW1lb3V0KHRvKTsgdG8gPSBzZXRUaW1lb3V0KCgpID0+IGZvcmNlUGFuZWxTdHlsZShkbGcpLCA4MCkgfVxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpXHJcbiAgICAgIGNsZWFudXAgPSAoKSA9PiB7IG1vLmRpc2Nvbm5lY3QoKTsgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKSB9XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXBwbHkpOyBzZXRUaW1lb3V0KGFwcGx5LCA4MCk7IHNldFRpbWVvdXQoYXBwbHksIDMwMClcclxuICAgIHJldHVybiAoKSA9PiB7IGNsZWFudXA/LigpIH1cclxuICB9LCBbcm9vdFJlZl0pXHJcbn1cclxuXHJcbmNvbnN0IGxheWVySWRGb3JTYW1wbGUgPSAodGlwbzogc3RyaW5nKSA9PiBgYW1vc3RyYXNfJHt0aXBvLnJlcGxhY2UoL1xccysvZywgJ18nKX1gXHJcbmZ1bmN0aW9uIGNsZWFyQW1vc3RyYXModmlldzogX19lc3JpLlZpZXcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWxsID0gKHZpZXcubWFwIGFzIGFueSkuYWxsTGF5ZXJzPy50b0FycmF5Py4oKSA/PyB2aWV3Lm1hcC5sYXllcnM/LnRvQXJyYXk/LigpID8/IFtdXHJcbiAgICBhbGwuZm9yRWFjaCgobHk6IGFueSkgPT4geyBjb25zdCBpZCA9IFN0cmluZyhseT8uaWQgPz8gJycpOyBpZiAoaWQuc3RhcnRzV2l0aCgnYW1vc3RyYXNfJykpIHZpZXcubWFwLnJlbW92ZShseSkgfSlcclxuICB9IGNhdGNoIHt9XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJNaW5lcmFpcyh2aWV3OiBfX2VzcmkuVmlldykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhbGwgPSAodmlldy5tYXAgYXMgYW55KS5hbGxMYXllcnM/LnRvQXJyYXk/LigpID8/IHZpZXcubWFwLmxheWVycz8udG9BcnJheT8uKCkgPz8gW11cclxuICAgIGNvbnN0IHRvUmVtb3ZlOiBhbnlbXSA9IFtdXHJcbiAgICBhbGwuZm9yRWFjaCgobHk6IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCBpZCA9IFN0cmluZyhseT8uaWQgPz8gJycpXHJcbiAgICAgIGlmICgvXm1pbmVyYWlzXy9pLnRlc3QoaWQpKSB0b1JlbW92ZS5wdXNoKGx5KVxyXG4gICAgfSlcclxuICAgIHRvUmVtb3ZlLmZvckVhY2gobHkgPT4gdmlldy5tYXAucmVtb3ZlKGx5KSlcclxuICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XSBjbGVhck1pbmVyYWlzIC0+IHJlbW92aWRhcycsIHRvUmVtb3ZlLm1hcChsID0+IGwuaWQpKVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUud2FybignW3dpZGdldF0gY2xlYXJNaW5lcmFpcyBmYWxob3UnLCBlKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJMYXllck9mVGlwbyh2aWV3OiBfX2VzcmkuVmlldywgdGlwbzogc3RyaW5nKSB7XHJcbiAgdHJ5IHsgY29uc3QgbHlyID0gdmlldy5tYXAuZmluZExheWVyQnlJZChsYXllcklkRm9yU2FtcGxlKHRpcG8pKSBhcyBhbnk7IGlmIChseXIpIHZpZXcubWFwLnJlbW92ZShseXIpIH0gY2F0Y2gge31cclxufVxyXG5mdW5jdGlvbiBkaXNhYmxlQ2x1c3Rlck51bWJlcnMobHlyOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgaWYgKCFseXIpIHJldHVyblxyXG4gICAgaWYgKGx5ci5mZWF0dXJlUmVkdWN0aW9uICYmIGx5ci5mZWF0dXJlUmVkdWN0aW9uLnR5cGUgPT09ICdjbHVzdGVyJykge1xyXG4gICAgICBseXIuZmVhdHVyZVJlZHVjdGlvbiA9IHsgLi4ubHlyLmZlYXR1cmVSZWR1Y3Rpb24sIGxhYmVsc1Zpc2libGU6IGZhbHNlIH1cclxuICAgIH1cclxuICAgIGlmICgnbGFiZWxzVmlzaWJsZScgaW4gbHlyKSAobHlyIGFzIGFueSkubGFiZWxzVmlzaWJsZSA9IGZhbHNlXHJcbiAgICBpZiAoJ2xhYmVsaW5nSW5mbycgaW4gbHlyKSAobHlyIGFzIGFueSkubGFiZWxpbmdJbmZvID0gW11cclxuICAgIGlmIChBcnJheS5pc0FycmF5KChseXIgYXMgYW55KS5zdWJsYXllcnMpKSAobHlyIGFzIGFueSkuc3VibGF5ZXJzLmZvckVhY2goKHNsOiBhbnkpID0+IGRpc2FibGVDbHVzdGVyTnVtYmVycyhzbCkpXHJcbiAgfSBjYXRjaCB7fVxyXG59XHJcblxyXG5cclxuLyogPT09PT0gQ29tcG9uZW50ZSA9PT09PSAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQocHJvcHM6IGFueSkge1xyXG4gIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddID0gUmVhY3QudXNlU3RhdGU8SmltdU1hcFZpZXc+KClcclxuICBjb25zdCBbY2F0ZWdvcmlhLCBzZXRDYXRlZ29yaWFdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJykgLy8gJ3NhbXBsZScgfCAnbWluZXJhbHMnXHJcbiAgY29uc3QgW3RpcG9zU2VsLCBzZXRUaXBvc1NlbF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pIC8vIGFtb3N0cmFzIChjaGVja2JveGVzKVxyXG4gIGNvbnN0IFtzaG93RW1wdHksIHNldFNob3dFbXB0eV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuXHJcbiAgLy8gSW50ZXJlc3NlXHJcbiAgY29uc3QgW3dpdGhJbnRlcmVzdCwgc2V0V2l0aEludGVyZXN0XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtzaG93V2l0aEludGVyZXN0LCBzZXRzaG93V2l0aEludGVyZXN0XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtmYWl4YVNldCwgc2V0RmFpeGFTZXRdID0gUmVhY3QudXNlU3RhdGU8U2V0PG51bWJlcj4+KFxyXG4gICAgKCkgPT4gbmV3IFNldDxudW1iZXI+KChBcnJheS5pc0FycmF5KHByb3BzPy5jb2RpZ29zRmFpeGFJbnRlcmVzc2UpID8gcHJvcHMuY29kaWdvc0ZhaXhhSW50ZXJlc3NlIDogW10pXHJcbiAgICAgIC5tYXAoKHY6IGFueSkgPT4gTnVtYmVyKHYpKS5maWx0ZXIoKHY6IGFueSkgPT4gIWlzTmFOKHYpKSlcclxuICApXHJcblxyXG4gIC8vIEJhc2VzIChhbW9zdHJhcylcclxuICBjb25zdCBbZGFkb3NGdWxsLCBzZXREYWRvc0Z1bGxdID0gUmVhY3QudXNlU3RhdGU8QW1vc3RyYUl0ZW1bXSB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW2RhZG9zRmFpeGFBUEksIHNldERhZG9zRmFpeGFBUEldID0gUmVhY3QudXNlU3RhdGU8QW1vc3RyYUl0ZW1bXSB8IG51bGw+KG51bGwpXHJcblxyXG4gIC8vIE1pbmVyYWlzXHJcbiAgY29uc3QgW21pbmVyYWxBbmFsaXNlLCBzZXRNaW5lcmFsQW5hbGlzZV0gPSBSZWFjdC51c2VTdGF0ZTxNaW5lcmFsVGlwbyB8ICcnPignJykgLy8gcsOhZGlvIChEUlgvUWVtc2Nhbi9Ub2RhcylcclxuICBjb25zdCBbbGlzdGFNaW5lcmFpcywgc2V0TGlzdGFNaW5lcmFpc10gPSBSZWFjdC51c2VTdGF0ZTxNaW5lcmFsTGlzdGFJdGVtW10+KFtdKVxyXG4gIGNvbnN0IFtidXNjYU1pbmVyYWwsIHNldEJ1c2NhTWluZXJhbF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbWluZXJhbFNlbGVjaW9uYWRvLCBzZXRNaW5lcmFsU2VsZWNpb25hZG9dID0gUmVhY3QudXNlU3RhdGU8TWluZXJhbExpc3RhSXRlbSB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW2FncnVwYWRvciwgc2V0QWdydXBhZG9yXSA9IFJlYWN0LnVzZVN0YXRlPCdhbmFsaXNlJyB8ICdtZWRpYScgfCAnbWF4aW1hJyB8ICcnPignJykgLy8gYWdydXBhZG9yZXNcclxuICBjb25zdCBbZGFkb3NNaW5lcmFpcywgc2V0RGFkb3NNaW5lcmFpc10gPSBSZWFjdC51c2VTdGF0ZTxpbXBvcnQoJy4vTWluZXJhbHMnKS5NaW5lcmFsSXRlbVtdIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBbbG9hZGluZ01pbmVyYWlzLCBzZXRMb2FkaW5nTWluZXJhaXNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2Vycm9yTWluZXJhaXMsIHNldEVycm9yTWluZXJhaXNdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gIC8vIExvYWRpbmcgLyBlcnJvcyAoYW1vc3RyYXMpXHJcbiAgY29uc3QgW2xvYWRpbmdGdWxsLCBzZXRMb2FkaW5nRnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbG9hZGluZ0ludGVyZXN0LCBzZXRMb2FkaW5nSW50ZXJlc3RdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2Vycm9yRnVsbCwgc2V0RXJyb3JGdWxsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpXHJcbiAgY29uc3QgW2Vycm9ySW50ZXJlc3QsIHNldEVycm9ySW50ZXJlc3RdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJylcclxuXHJcbiAgY29uc3Qgcm9vdFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcclxuICB1c2VGb3JjZVJpZ2h0UG9zaXRpb24ocm9vdFJlZilcclxuXHJcbiAgY29uc3QgaW50ZXJlc3RNYW51YWxSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpXHJcblxyXG4gIC8qID4+PiBTaW5hbGl6YSBhbyBQQUkgcXVlIG8gd2lkZ2V0IGVzdMOhIHByb250byAocGFyYSBlbGUgbWFuZGFyIGNvZGlnb3MvY29uZmlnKSAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdGFyZ2V0T3JpZ2luID0gJyonXHJcbiAgICB0cnkgeyBpZiAoZG9jdW1lbnQucmVmZXJyZXIpIHRhcmdldE9yaWdpbiA9IG5ldyBVUkwoZG9jdW1lbnQucmVmZXJyZXIpLm9yaWdpbiB9IGNhdGNoIHt9XHJcbiAgICAvLyBhdmlzYSBxdWUgbyB3aWRnZXQgZXN0w6EgcHJvbnRvXHJcbiAgICB3aW5kb3cucGFyZW50Py5wb3N0TWVzc2FnZSh7IHR5cGU6ICd3aWRnZXRSZWFkeScgfSwgdGFyZ2V0T3JpZ2luKVxyXG4gICAgY29uc29sZS5sb2coJ1t3aWRnZXRdIHdpZGdldFJlYWR5IGVudmlhZG8gcGFyYScsIHRhcmdldE9yaWdpbilcclxuICB9LCBbXSlcclxuXHJcbiAgLyogUmVjZWJlIG1lbnNhZ2VucyBkbyBQQUkgKGZhaXhhLWludGVyZXNzZSwgbGVnZW5kOm1pbmVyYWlzLCBjb25maWcpICovXHJcbiAgLy8gTWVuc2FnZW5zIHZpbmRhcyBkbyBQQUkgKEV4cGxvcmEpOiBmYWl4YS1pbnRlcmVzc2UsIGNvbmZpZywgbGVnZW5kOm1pbmVyYWlzXHJcblJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gbGlzdGVuZXIgT04g4oCUIGFndWFyZGFuZG8gbWVuc2FnZW5zIGRvIHBhaeKApicsIHtcclxuICAgIHNlbGZPcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXHJcbiAgICByZWZlcnJlcjogZG9jdW1lbnQucmVmZXJyZXIgfHwgJyhzZW0gcmVmZXJyZXIpJ1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IG9uTXNnID0gKGV2OiBNZXNzYWdlRXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBldj8uZGF0YSBhcyBhbnlcclxuICAgIGlmICghZGF0YSB8fCAhZGF0YS50eXBlKSByZXR1cm5cclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBbd2lkZ2V0XVttc2ddIHJlY2ViaWRvIHR5cGU9XCIke2RhdGEudHlwZX1cImApXHJcbiAgICBjb25zb2xlLmxvZygnb3JpZ2luOicsIGV2Lm9yaWdpbiwgJ3NvdXJjZT09PXBhcmVudD8nLCBldi5zb3VyY2UgPT09IHdpbmRvdy5wYXJlbnQpXHJcbiAgICBjb25zb2xlLmxvZygncGF5bG9hZCBicnV0bzonLCBkYXRhKVxyXG5cclxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdmYWl4YS1pbnRlcmVzc2UnICYmIEFycmF5LmlzQXJyYXkoKGRhdGEgYXMgTXNnRmFpeGFJbnRlcmVzc2UpLmNvZGlnb3NQb2NvcykpIHtcclxuICAgICAgY29uc3QgbnVtcyA9IChkYXRhIGFzIE1zZ0ZhaXhhSW50ZXJlc3NlKS5jb2RpZ29zUG9jb3NcclxuICAgICAgICAubWFwKCh2KSA9PiBOdW1iZXIodikpXHJcbiAgICAgICAgLmZpbHRlcigodikgPT4gIWlzTmFOKHYpKVxyXG4gICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBmYWl4YS1pbnRlcmVzc2UgPT4gbm9ybWFsaXphZG9zOicsIHtcclxuICAgICAgICByZWNlYmlkb3M6IChkYXRhIGFzIE1zZ0ZhaXhhSW50ZXJlc3NlKS5jb2RpZ29zUG9jb3MubGVuZ3RoLFxyXG4gICAgICAgIHZhbGlkb3M6IG51bXMubGVuZ3RoLFxyXG4gICAgICAgIHByZXZpZXc6IG51bXMuc2xpY2UoMCwgMTApXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyBlc3RhZG8gYXR1YWwgYW50ZXMgZGUgZGVjaWRpclxyXG4gICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBlc3RhZG8gQU5URVMgKGZhaXhhLWludGVyZXNzZSk6Jywge1xyXG4gICAgICAgIHNob3dXaXRoSW50ZXJlc3QsXHJcbiAgICAgICAgd2l0aEludGVyZXN0LFxyXG4gICAgICAgIGludGVyZXN0TWFudWFsOiBpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyBhcGxpY2EgbyBTZXQgZGUgY8OzZGlnb3NcclxuICAgICAgc2V0RmFpeGFTZXQobmV3IFNldDxudW1iZXI+KG51bXMpKVxyXG5cclxuICAgICAgLy8gc8OzIGV4aWJpbW9zL2NoZWNhbW9zIHNlIG8gcGFpIHF1ZXIgcXVlIGFwYXJlw6dhIChyZXNwZWl0byDDqSB0cmF0YWRvIG5vIG91dHJvIHVzZUVmZmVjdCk7XHJcbiAgICAgIC8vIGFxdWkgYXBlbmFzIFwicHJvcG9tb3NcIiBleGliaXIgY2FzbyB2ZW5oYSBmYWl4YSBjb20gZWxlbWVudG9zXHJcbiAgICAgIGlmIChudW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBoYXZlcsOhIHRlbnRhdGl2YSBkZSBleGliaXIvY2hlY2FyIG8gaW50ZXJ2YWxvIChkZXBlbmRlbmRvIGRvIG91dHJvIGVmZWl0byBlIGRvIG1hbnVhbFJlZiknKVxyXG4gICAgICAgIHNldHNob3dXaXRoSW50ZXJlc3QodHJ1ZSlcclxuICAgICAgICBpZiAoIWludGVyZXN0TWFudWFsUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIG1hcmNhbmRvIHdpdGhJbnRlcmVzdCBhdXRvbWF0aWNhbWVudGUgKHVzdcOhcmlvIGFpbmRhIG7Do28gYWx0ZXJvdSBtYW51YWxtZW50ZSknKVxyXG4gICAgICAgICAgc2V0V2l0aEludGVyZXN0KHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIE7Dg08gbWFyY2Ftb3Mgd2l0aEludGVyZXN0ICh1c3XDoXJpbyBqw6EgbWV4ZXUgbWFudWFsbWVudGUpJylcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gbGlzdGEgZGEgZmFpeGEgZXN0w6EgdmF6aWEg4oCUIG7Do28gYWx0ZXJhbW9zIHdpdGhJbnRlcmVzdCcpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGxvZ2EgbyBlc3RhZG8g4oCcbG9nbyBhcMOzc+KAnSBvIGNpY2xvIGF0dWFsIGRlIHJlbmRlciAobWVsaG9yIHZpc2liaWxpZGFkZSlcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gZXN0YWRvIEFQw5NTIHNldFN0YXRlIChmYWl4YS1pbnRlcmVzc2UpOicsIHtcclxuICAgICAgICAgIHNob3dXaXRoSW50ZXJlc3QsXHJcbiAgICAgICAgICB3aXRoSW50ZXJlc3QsXHJcbiAgICAgICAgICBpbnRlcmVzdE1hbnVhbDogaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sIDApXHJcbiAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS50eXBlID09PSAnZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhczpvaycpIHtcclxuICAgICAgY29uc3QgY2ZnID0gZGF0YSBhcyBNc2dDb25maWdcclxuICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhczpvayByZWNlYmlkYTonLCBjZmcpXHJcblxyXG4gICAgICAvL0FqdXN0YW5kbyBpbnRlcnZhbG8gZGUgaW50ZXJlc3NlIHBhcmEgYXBhcmVjZXJcclxuICAgICAgc2V0V2l0aEludGVyZXN0KGNmZ1snbWVzc2FnZSddWyd2aXNpYmxlJ10pXHJcbiAgICAgIHNldHNob3dXaXRoSW50ZXJlc3QoKGNmZ1snbWVzc2FnZSddWyd2aXNpYmxlJ10pKVxyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gZXN0YWRvIEFOVEVTIChmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzOm9rKTonLCB7XHJcbiAgICAgICAgc2hvd1dpdGhJbnRlcmVzdCxcclxuICAgICAgICB3aXRoSW50ZXJlc3QsXHJcbiAgICAgICAgaW50ZXJlc3RNYW51YWw6IGludGVyZXN0TWFudWFsUmVmLmN1cnJlbnRcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChjZmcuc3RhcnRXaXRoSW50ZXJlc3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBwYWkgc2luYWxpem91IHN0YXJ0V2l0aEludGVyZXN0PVRSVUUgLT4gbW9zdHJhciBjaGVja2JveCcpXHJcbiAgICAgICAgc2V0c2hvd1dpdGhJbnRlcmVzdCh0cnVlKVxyXG4gICAgICAgIGlmICghaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gbWFyY2FuZG8gd2l0aEludGVyZXN0IHBvcnF1ZSB1c3XDoXJpbyBuw6NvIG1leGV1IG1hbnVhbG1lbnRlJylcclxuICAgICAgICAgIHNldFdpdGhJbnRlcmVzdCh0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBOw4NPIG1hcmNhbW9zIHdpdGhJbnRlcmVzdCAocmVzcGVpdGFuZG8gZXNjb2xoYSBtYW51YWwgcHLDqXZpYSknKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBzdGFydFdpdGhJbnRlcmVzdCBhdXNlbnRlL2ZhbHNvIOKAlCBuw6NvIGZvcsOnYW1vcyBuYWRhIGFxdWknKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBlc3RhZG8gQVDDk1Mgc2V0U3RhdGUgKGZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXM6b2spOicsIHtcclxuICAgICAgICAgIHNob3dXaXRoSW50ZXJlc3QsXHJcbiAgICAgICAgICB3aXRoSW50ZXJlc3QsXHJcbiAgICAgICAgICBpbnRlcmVzdE1hbnVhbDogaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sIDApXHJcbiAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS50eXBlID09PSAnbGVnZW5kOm1pbmVyYWlzJyB8fCBkYXRhLnR5cGUgPT09ICdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzOm9rJykge1xyXG4gICAgICBjb25zdCBfbXNnID0gZGF0YSBhcyBNc2dMZWdlbmRNaW5lcmFpc1xyXG4gICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBsZWdlbmQ6bWluZXJhaXMgcGF5bG9hZDonLCBfbXNnPy5wYXlsb2FkKVxyXG4gICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJURVNURTogXCIsIGRhdGEpXHJcblxyXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2NvbmZpZycgfHwgZGF0YS50eXBlID09PSAnZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpczpvaycpIHtcclxuICAgICAgY29uc3QgY2ZnID0gZGF0YSBhcyBNc2dDb25maWdcclxuICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gY29uZmlnIHJlY2ViaWRhOicsIGNmZylcclxuICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gKipjZ1Zpc2libGUgZG8gcGFpKiogPScsIGNmZy5jZ1Zpc2libGUpIC8vIDw8PCBpbXByaW1lIG8gJ3Zpc2libGUnXHJcblxyXG4gICAgICAvLyBNb3N0cmFyL29jdWx0YXIgbyBjaGVja2JveCBkZSBJbnRlcnZhbG8gZGUgSW50ZXJlc3NlIGRlIGFjb3JkbyBjb20gYSB2aXNpYmlsaWRhZGUgbm8gcGFpXHJcbiAgICAgIGlmIChjZmcuY2dWaXNpYmxlID09PSB0cnVlKSB7XHJcbiAgICAgICAgc2V0c2hvd1dpdGhJbnRlcmVzdCh0cnVlKVxyXG4gICAgICAgIC8vIFNlIHBhaSB0YW1iw6ltIHBlZGl1IHBhcmEgY29tZcOnYXIgbWFyY2FkbyBlIG8gdXN1w6FyaW8gYWluZGEgbsOjbyBtZXhldTpcclxuICAgICAgICBpZiAoY2ZnLnN0YXJ0V2l0aEludGVyZXN0ICYmICFpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICBzZXRXaXRoSW50ZXJlc3QodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gTsOjbyBtb3N0cmFyIChuZW0gbWFyY2FkbykgcXVhbmRvIG8gY2hlY2tib3ggbsOjbyDDqSB2aXPDrXZlbCBubyBwYWlcclxuICAgICAgICBzZXRzaG93V2l0aEludGVyZXN0KGZhbHNlKVxyXG4gICAgICAgIGlmICghaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudCkgc2V0V2l0aEludGVyZXN0KGZhbHNlKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzw7MgcHJhIGRlcHVyYcOnw6NvIGRvIHJlc3VsdGFkbyBmaW5hbCBuZXN0ZSB0aWNrOlxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBlc3RhZG8gcMOzcy1jb25maWc6Jywge1xyXG4gICAgICAgICAgc2hvd1dpdGhJbnRlcmVzdCxcclxuICAgICAgICAgIHdpdGhJbnRlcmVzdCxcclxuICAgICAgICAgIGludGVyZXN0TWFudWFsOiBpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50XHJcbiAgICAgICAgfSlcclxuICAgICAgfSwgMClcclxuXHJcbiAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gdGlwbyBuw6NvIHRyYXRhZG86JywgZGF0YS50eXBlKVxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTXNnKVxyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTXNnKVxyXG4gICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gbGlzdGVuZXIgT0ZGIOKAlCByZW1vdmlkbyBuYSBkZXNtb250YWdlbSBkbyBlZmVpdG8nKVxyXG4gIH1cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbn0sIFtdKVxyXG5cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChmYWl4YVNldC5zaXplID4gMCkge1xyXG4gICAgICBzZXRzaG93V2l0aEludGVyZXN0KHRydWUpXHJcbiAgICAgIGlmICghaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudCkgc2V0V2l0aEludGVyZXN0KHRydWUpXHJcbiAgICB9XHJcbiAgfSwgW2ZhaXhhU2V0XSlcclxuXHJcbiAgLyogPT09PT09IEFNT1NUUkFTOiBjYXJyZWdhciBiYXNlID09PT09PSAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnW3dpZGdldF0gZWZlaXRvIGFtb3N0cmFzOmNhcnJlZ2FyIGJhc2UnKVxyXG4gICAgICBjb25zb2xlLmxvZyh7IGNhdGVnb3JpYSwgd2l0aEludGVyZXN0IH0pXHJcbiAgICAgIGlmIChjYXRlZ29yaWEgIT09ICdzYW1wbGUnKSB7IGNvbnNvbGUubG9nKCdza2lwJyk7IGNvbnNvbGUuZ3JvdXBFbmQoKTsgcmV0dXJuIH1cclxuICAgICAgc2V0TG9hZGluZ0Z1bGwodHJ1ZSk7IHNldEVycm9yRnVsbCgnJylcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcyh3aXRoSW50ZXJlc3QgfHwgREVGQVVMVF9GQUlYQV9JTlRFUkVTU0UpXHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHsgc2V0RGFkb3NGdWxsKGRhdGEpOyBjb25zb2xlLmxvZygnW3dpZGdldF0gYW1vc3RyYXMgYmFzZScsIGRhdGE/Lmxlbmd0aCkgfVxyXG4gICAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbd2lkZ2V0XSBlcnJvIGJhc2UgYW1vc3RyYXMnLCBlKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7IHNldEVycm9yRnVsbChlPy5tZXNzYWdlIHx8ICdGYWxoYSBhbyBidXNjYXIgZGFkb3MnKTsgc2V0RGFkb3NGdWxsKFtdKSB9XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHsgc2V0TG9hZGluZ0Z1bGwoZmFsc2UpOyBjb25zb2xlLmdyb3VwRW5kKCkgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBydW4oKVxyXG4gICAgcmV0dXJuICgpID0+IHsgY2FuY2VsbGVkID0gdHJ1ZSB9XHJcbiAgfSwgW2NhdGVnb3JpYSwgd2l0aEludGVyZXN0XSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbd2lkZ2V0XSBlZmVpdG8gYW1vc3RyYXM6Y2FycmVnYXIgZmFpeGEgQVBJJylcclxuICAgICAgY29uc29sZS5sb2coeyBjYXRlZ29yaWEsIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXRTaXplOiBmYWl4YVNldC5zaXplLCBoYXNEYWRvc0ZhaXhhQVBJOiBkYWRvc0ZhaXhhQVBJICE9PSBudWxsIH0pXHJcbiAgICAgIGlmIChjYXRlZ29yaWEgIT09ICdzYW1wbGUnKSB7IGNvbnNvbGUubG9nKCdza2lwIGNhdGVnb3JpYScpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcbiAgICAgIGlmICghd2l0aEludGVyZXN0KSB7IGNvbnNvbGUubG9nKCdza2lwIHNlbSBpbnRlcmVzc2UnKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG4gICAgICBpZiAoZmFpeGFTZXQuc2l6ZSA+IDApIHsgY29uc29sZS5sb2coJ3NraXAgZmFpeGEgdmluZGEgZG8gcGFpJyk7IGNvbnNvbGUuZ3JvdXBFbmQoKTsgcmV0dXJuIH1cclxuICAgICAgaWYgKGRhZG9zRmFpeGFBUEkgIT09IG51bGwpIHsgY29uc29sZS5sb2coJ3NraXAgasOhIGNhcnJlZ2FkbycpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcbiAgICAgIHNldExvYWRpbmdJbnRlcmVzdCh0cnVlKTsgc2V0RXJyb3JJbnRlcmVzdCgnJylcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcyh0cnVlKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7IHNldERhZG9zRmFpeGFBUEkoZGF0YSk7IGNvbnNvbGUubG9nKCdbd2lkZ2V0XSBhbW9zdHJhcyBmYWl4YSBBUEknLCBkYXRhPy5sZW5ndGgpIH1cclxuICAgICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW3dpZGdldF0gZXJybyBmYWl4YSBBUEknLCBlKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7IHNldEVycm9ySW50ZXJlc3QoZT8ubWVzc2FnZSB8fCAnRmFsaGEgYW8gYnVzY2FyIGRhZG9zIGRvIGludGVydmFsbyBkZSBpbnRlcmVzc2UnKTsgc2V0RGFkb3NGYWl4YUFQSShbXSkgfVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7IHNldExvYWRpbmdJbnRlcmVzdChmYWxzZSk7IGNvbnNvbGUuZ3JvdXBFbmQoKSB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJ1bigpXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbY2F0ZWdvcmlhLCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0LCBkYWRvc0ZhaXhhQVBJXSlcclxuXHJcbiAgLyogPT09PT09IEFNT1NUUkFTOiBkZXNlbmhhciA9PT09PT0gKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnW3dpZGdldF0gZWZlaXRvIGFtb3N0cmFzOmRlc2VuaGFyJylcclxuICAgIGNvbnN0IGptdiA9IGppbXVNYXBWaWV3XHJcbiAgICBpZiAoIWptdj8udmlldykgeyBjb25zb2xlLmxvZygnc2tpcCBzZW0gdmlldycpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcbiAgICBpZiAoY2F0ZWdvcmlhICE9PSAnc2FtcGxlJykgeyBjb25zb2xlLmxvZygnc2tpcCBjYXRlZ29yaWEnKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG5cclxuICAgIGNvbnN0IGJhc2U6IEFtb3N0cmFJdGVtW10gPSB3aXRoSW50ZXJlc3RcclxuICAgICAgPyAoZmFpeGFTZXQuc2l6ZSA+IDBcclxuICAgICAgICAgID8gKGRhZG9zRnVsbCA/PyBbXSkuZmlsdGVyKHggPT4gZmFpeGFTZXQuaGFzKE51bWJlcih4LmNvZGlnb1BvY28pKSlcclxuICAgICAgICAgIDogKGRhZG9zRmFpeGFBUEkgPz8gZGFkb3NGdWxsID8/IFtdKSlcclxuICAgICAgOiAoZGFkb3NGdWxsID8/IFtdKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XSBiYXNlIHNpemUnLCBiYXNlLmxlbmd0aCwgJ3RpcG9zU2VsJywgdGlwb3NTZWwpXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYmFzZSkgfHwgYmFzZS5sZW5ndGggPT09IDApIHsgY29uc29sZS5sb2coJ3NraXAgYmFzZSB2YXppYScpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGlwb3NTZWwpIHx8IHRpcG9zU2VsLmxlbmd0aCA9PT0gMCkgeyBjb25zb2xlLmxvZygnc2tpcCBzZW0gdGlwb3MnKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG5cclxuICAgIGNvbnN0IHsgdmlldyB9ID0gam12XHJcblxyXG4gICAgdGlwb3NTZWwuZm9yRWFjaCgodGlwbykgPT4ge1xyXG4gICAgICBjb25zdCBkYWRvcyA9IGJhc2VcclxuICAgICAgICAubWFwKGQgPT4gKHsgY29kaWdvUG9jbzogZC5jb2RpZ29Qb2NvLCB0b3RhbDogZFtUWVBFX0ZJRUxEW3RpcG9dXSA/PyAwIH0pKVxyXG4gICAgICAgIC5maWx0ZXIoZCA9PiAoZC50b3RhbCA/PyAwKSA+IDApXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhgW3dpZGdldF0gdGlwbz0ke3RpcG99IGRhZG9zYCwgZGFkb3MubGVuZ3RoKVxyXG5cclxuICAgICAgY2xlYXJMYXllck9mVGlwbyh2aWV3LCB0aXBvKVxyXG4gICAgICBpZiAoZGFkb3MubGVuZ3RoID09PSAwKSByZXR1cm5cclxuXHJcbiAgICAgIGNvbnN0IGNvbG9yRmlsbCA9IGNvcmVzVGlwb3NbdGlwb10gfHwgJ3JnYmEoMCwwLDAsMC41KSdcclxuICAgICAgY29uc3QgaWRDYW1hZGEgPSBsYXllcklkRm9yU2FtcGxlKHRpcG8pXHJcbiAgICAgIGNvbnN0IGlkTGVnZW5kYSA9IGBsZ2RfJHtpZENhbWFkYX1gXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCKHtcclxuICAgICAgICAgIGppbXVNYXBWaWV3OiBqbXYsXHJcbiAgICAgICAgICBkYWRvcyxcclxuICAgICAgICAgIGNvbG9yRmlsbCxcclxuICAgICAgICAgIGlkQ2FtYWRhLFxyXG4gICAgICAgICAgaWRMZWdlbmRhLFxyXG4gICAgICAgICAgdGl0bGVMZWdlbmRhOiAod2l0aEludGVyZXN0ID8gJ0ludGVydmFsbyBkZSBJbnRlcmVzc2UgLSAnIDogJycpICsgKHRpcG8uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aXBvLnNsaWNlKDEpKSxcclxuICAgICAgICAgIHdpdGhJbnRlcmVzdFxyXG4gICAgICAgIH0gYXMgYW55KVxyXG5cclxuICAgICAgICBjb25zdCBseXIgPSB2aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGlkQ2FtYWRhKSBhcyBhbnlcclxuICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF0gY2FtYWRhIGNyaWFkYT8nLCAhIWx5ciwgaWRDYW1hZGEpXHJcbiAgICAgICAgaWYgKGx5cikgZGlzYWJsZUNsdXN0ZXJOdW1iZXJzKGx5cilcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFthbW9zdHJhc10gZmFsaGEgYW8gZ2VyYXIgY2FtYWRhICR7aWRDYW1hZGF9YCwgZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gIH0sIFtqaW11TWFwVmlldywgdGlwb3NTZWwsIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXQsIGRhZG9zRnVsbCwgZGFkb3NGYWl4YUFQSSwgY2F0ZWdvcmlhXSlcclxuXHJcbiAgLyogPT09PT09IE1JTkVSQUlTOiBhbyBtdWRhciBvIHJhZGlvIGRlIGFuw6FsaXNlIC0+IGJ1c2NhIENPTlRBRE9SIGUgTElTVEEgPT09PT09ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbd2lkZ2V0XSBlZmVpdG8gbWluZXJhaXM6cmFkaW8nKVxyXG4gICAgICBjb25zb2xlLmxvZyh7IGNhdGVnb3JpYSwgbWluZXJhbEFuYWxpc2UsIHdpdGhJbnRlcmVzdCB9KVxyXG4gICAgICBpZiAoY2F0ZWdvcmlhICE9PSAnbWluZXJhbHMnKSB7IGNvbnNvbGUubG9nKCdza2lwIGNhdGVnb3JpYScpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcbiAgICAgIGlmICghbWluZXJhbEFuYWxpc2UpIHsgY29uc29sZS5sb2coJ3NraXAgc2VtIGFuYWxpc2UnKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG5cclxuICAgICAgLy8gcmVzZXQgVUkgZGVwZW5kZW50ZVxyXG4gICAgICBzZXRNaW5lcmFsU2VsZWNpb25hZG8obnVsbClcclxuICAgICAgc2V0QWdydXBhZG9yKCcnKVxyXG4gICAgICBzZXRMaXN0YU1pbmVyYWlzKFtdKVxyXG4gICAgICBzZXRCdXNjYU1pbmVyYWwoJycpXHJcbiAgICAgIHNldEVycm9yTWluZXJhaXMoJycpXHJcbiAgICAgIHNldExvYWRpbmdNaW5lcmFpcyh0cnVlKVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBbY29udGFkb3IsIGxpc3RhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgIGZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXNDb250YWRvcihtaW5lcmFsQW5hbGlzZSBhcyBNaW5lcmFsVGlwbywgd2l0aEludGVyZXN0KSxcclxuICAgICAgICAgIGZldGNoTWluZXJhbExpc3RhKG1pbmVyYWxBbmFsaXNlIGFzIE1pbmVyYWxUaXBvLCB3aXRoSW50ZXJlc3QpXHJcbiAgICAgICAgXSlcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdIGNvbnRhZG9yLyBsaXN0YSByZWNlYmlkb3MnLCBjb250YWRvcj8ubGVuZ3RoLCBsaXN0YT8ubGVuZ3RoKVxyXG4gICAgICAgICAgc2V0RGFkb3NNaW5lcmFpcyhjb250YWRvcilcclxuICAgICAgICAgIHNldExpc3RhTWluZXJhaXMobGlzdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbd2lkZ2V0XSBlcnJvIGZldGNoIG1pbmVyYWlzJywgZSlcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgc2V0RXJyb3JNaW5lcmFpcyhlPy5tZXNzYWdlIHx8ICdGYWxoYSBhbyBidXNjYXIgbWluZXJhaXMnKVxyXG4gICAgICAgICAgc2V0RGFkb3NNaW5lcmFpcyhbXSlcclxuICAgICAgICAgIHNldExpc3RhTWluZXJhaXMoW10pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7IHNldExvYWRpbmdNaW5lcmFpcyhmYWxzZSk7IGNvbnNvbGUuZ3JvdXBFbmQoKSB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJ1bigpXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbY2F0ZWdvcmlhLCBtaW5lcmFsQW5hbGlzZSwgd2l0aEludGVyZXN0XSlcclxuXHJcbiAgLyogPT09PT09IE1JTkVSQUlTOiBkZXNlbmhhciBiYXNlIChjb250YWRvcikgcXVhbmRvIGNoZWdhID09PT09PSAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbd2lkZ2V0XSBlZmVpdG8gbWluZXJhaXM6ZGVzZW5oYXIgYmFzZScpXHJcbiAgICBjb25zb2xlLmxvZyh7IGNhdGVnb3JpYSwgaGFzSk1WOiAhIWppbXVNYXBWaWV3Py52aWV3LCBtaW5lcmFsQW5hbGlzZSwgZGFkb3NNaW5lcmFpc0xlbjogZGFkb3NNaW5lcmFpcz8ubGVuZ3RoLCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0U2l6ZTogZmFpeGFTZXQuc2l6ZSB9KVxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGNhdGVnb3JpYSAhPT0gJ21pbmVyYWxzJykgcmV0dXJuIGNvbnNvbGUubG9nKCdza2lwIGNhdGVnb3JpYScpXHJcbiAgICAgIGlmICghamltdU1hcFZpZXc/LnZpZXcpIHJldHVybiBjb25zb2xlLmxvZygnc2tpcCB2aWV3JylcclxuICAgICAgaWYgKCFtaW5lcmFsQW5hbGlzZSkgcmV0dXJuIGNvbnNvbGUubG9nKCdza2lwIG1pbmVyYWxBbmFsaXNlJylcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhZG9zTWluZXJhaXMpKSByZXR1cm4gY29uc29sZS5sb2coJ3NraXAgZGFkb3NNaW5lcmFpcyBudWxsJylcclxuXHJcbiAgICAgIGNvbnN0IGJhc2UgPSAod2l0aEludGVyZXN0ICYmIGZhaXhhU2V0LnNpemUgPiAwKVxyXG4gICAgICAgID8gZGFkb3NNaW5lcmFpcy5maWx0ZXIoZCA9PiBmYWl4YVNldC5oYXMoTnVtYmVyKGQuY29kaWdvUG9jbykpKVxyXG4gICAgICAgIDogZGFkb3NNaW5lcmFpc1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdIGJhc2UgcGFyYSBkZXNlbmhhcicsIGJhc2UubGVuZ3RoKVxyXG4gICAgICBpZiAoYmFzZS5sZW5ndGggPT09IDApIHJldHVybiBjb25zb2xlLndhcm4oJ1t3aWRnZXRdIGJhc2UgdmF6aWEg4oCUIG5hZGEgYSBwbG90dGFyJylcclxuXHJcbiAgICAgIGRlc2VuaGFyRGlzdHJpYnVpY2FvTWluZXJhaXMoamltdU1hcFZpZXcsIGJhc2UsIG1pbmVyYWxBbmFsaXNlIGFzIE1pbmVyYWxUaXBvLCB3aXRoSW50ZXJlc3QpXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgIH1cclxuICB9LCBbamltdU1hcFZpZXcsIGNhdGVnb3JpYSwgbWluZXJhbEFuYWxpc2UsIGRhZG9zTWluZXJhaXMsIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXRdKVxyXG5cclxuICAvKiA9PT09PT0gTUlORVJBSVM6IGFvIGVzY29saGVyIE1JTkVSQUwgKyBBR1JVUEFET1IgLT4gYXBsaWNhIGNvbG9yaXphw6fDo28gc3RvcHMgPT09PT09ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbd2lkZ2V0XSBlZmVpdG8gbWluZXJhaXM6Y29sb3JpemHDp8OjbyBhZ3J1cGFkb3InKVxyXG4gICAgICBjb25zb2xlLmxvZyh7IGNhdGVnb3JpYSwgaGFzSk1WOiAhIWppbXVNYXBWaWV3Py52aWV3LCBtaW5lcmFsQW5hbGlzZSwgbWluZXJhbFNlbGVjaW9uYWRvLCBhZ3J1cGFkb3IsIHdpdGhJbnRlcmVzdCB9KVxyXG4gICAgICBpZiAoY2F0ZWdvcmlhICE9PSAnbWluZXJhbHMnIHx8ICFqaW11TWFwVmlldz8udmlldyB8fCAhbWluZXJhbEFuYWxpc2UgfHwgIW1pbmVyYWxTZWxlY2lvbmFkbyB8fCAhYWdydXBhZG9yKSB7IGNvbnNvbGUubG9nKCdza2lwJyk7IGNvbnNvbGUuZ3JvdXBFbmQoKTsgcmV0dXJuIH1cclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGFkb3MgPSBhd2FpdCBmZXRjaE1pbmVyYWxBZ3J1cGFkb3IoXHJcbiAgICAgICAgICBtaW5lcmFsQW5hbGlzZSBhcyBNaW5lcmFsVGlwbyxcclxuICAgICAgICAgIG1pbmVyYWxTZWxlY2lvbmFkby5ub21lUmVzdW1pZG9NaW5lcmFsLFxyXG4gICAgICAgICAgd2l0aEludGVyZXN0XHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XSBhZ3J1cGFkb3IgZGFkb3MnLCBkYWRvcz8ubGVuZ3RoLCBkYWRvcz8uc2xpY2U/LigwLDEwKSlcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgYXdhaXQgYXBsaWNhckNvbG9yaXphY2FvUG9yQWdydXBhZG9yKFxyXG4gICAgICAgICAgICBqaW11TWFwVmlldyxcclxuICAgICAgICAgICAgbWluZXJhbEFuYWxpc2UgYXMgTWluZXJhbFRpcG8sXHJcbiAgICAgICAgICAgIGRhZG9zLFxyXG4gICAgICAgICAgICBhZ3J1cGFkb3IgYXMgJ2FuYWxpc2UnIHwgJ21lZGlhJyB8ICdtYXhpbWEnXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF0gY29sb3JpemHDp8OjbyBhcGxpY2FkYScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFsaGEgYW8gYXBsaWNhciBjb2xvcml6YcOnw6NvIHBvciBhZ3J1cGFkb3InLCBlKVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBydW4oKVxyXG4gICAgcmV0dXJuICgpID0+IHsgY2FuY2VsbGVkID0gdHJ1ZSB9XHJcbiAgfSwgW2ppbXVNYXBWaWV3LCBjYXRlZ29yaWEsIG1pbmVyYWxBbmFsaXNlLCBtaW5lcmFsU2VsZWNpb25hZG8sIGFncnVwYWRvciwgd2l0aEludGVyZXN0XSlcclxuXHJcbiAgLy8gUmVzZXQvZmVjaGFyXHJcbiAgY29uc3QgcmVzZXRVaVN0YXRlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0VGlwb3NTZWwoW10pOyBzZXRTaG93RW1wdHkoZmFsc2UpOyBzZXRXaXRoSW50ZXJlc3QoZmFsc2UpOyBzZXRDYXRlZ29yaWEoJycpO1xyXG4gICAgc2V0RGFkb3NGdWxsKG51bGwpOyBzZXREYWRvc0ZhaXhhQVBJKG51bGwpO1xyXG4gICAgc2V0TWluZXJhbEFuYWxpc2UoJycpOyBzZXREYWRvc01pbmVyYWlzKG51bGwpOyBzZXRFcnJvck1pbmVyYWlzKCcnKTsgc2V0TG9hZGluZ01pbmVyYWlzKGZhbHNlKTtcclxuICAgIHNldExpc3RhTWluZXJhaXMoW10pOyBzZXRCdXNjYU1pbmVyYWwoJycpOyBzZXRNaW5lcmFsU2VsZWNpb25hZG8obnVsbCk7IHNldEFncnVwYWRvcignJyk7XHJcbiAgICBpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50ID0gZmFsc2VcclxuICB9LCBbXSlcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldz8udmlld1xyXG4gICAgaWYgKHZpZXcpIHtcclxuICAgIGNsZWFyQW1vc3RyYXModmlldylcclxuICAgIGNsZWFyTWluZXJhaXModmlldykgLy8gPDw8IHRhbWLDqW0gcmVtb3ZlIGFzIGNhbWFkYXMgZGUgbWluZXJhaXNcclxuICB9XHJcbiAgICByZXNldFVpU3RhdGUoKVxyXG4gIH0sIFtqaW11TWFwVmlldywgcmVzZXRVaVN0YXRlXSlcclxuXHJcbiAgLy8gRmVjaGFyIHBvciBib3TDo28vb2N1bHRhciBkacOhbG9nbyAoY29ycmlnaWRvOiBzZWxldG9yIGNvbSBhc3BhcyBmZWNoYWRhcyBjb3JyZXRhbWVudGUpXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldz8udmlldzsgaWYgKCF2aWV3KSByZXR1cm5cclxuICAgIGNvbnN0IHJvb3QgPSByb290UmVmLmN1cnJlbnQ7IGlmICghcm9vdCkgcmV0dXJuXHJcbiAgICBjb25zdCBkbGcgPSBmaW5kQ2xvc2VzdERpYWxvZyhyb290KTsgaWYgKCFkbGcpIHJldHVyblxyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkbGcucXVlcnlTZWxlY3RvcihcclxuICAgICAgJ2J1dHRvblthcmlhLWxhYmVsPVwiQ2xvc2VcIl0sIGJ1dHRvblt0aXRsZT1cIkNsb3NlXCJdLCBidXR0b25bYXJpYS1sYWJlbD1cIkZlY2hhclwiXSwgYnV0dG9uW3RpdGxlPVwiRmVjaGFyXCJdLCBbZGF0YS1hY3Rpb249XCJjbG9zZVwiXSdcclxuICAgICkgYXMgSFRNTEVsZW1lbnQgfCBudWxsXHJcbiAgICBpZiAoIWNsb3NlQnRuKSByZXR1cm5cclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xvc2UpXHJcbiAgICByZXR1cm4gKCkgPT4gY2xvc2VCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbG9zZSlcclxuICB9LCBbamltdU1hcFZpZXcsIGhhbmRsZUNsb3NlXSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHJvb3QgPSByb290UmVmLmN1cnJlbnQ7IGlmICghcm9vdCkgcmV0dXJuXHJcbiAgICBjb25zdCBkbGcgPSBmaW5kQ2xvc2VzdERpYWxvZyhyb290KSBhcyBIVE1MRWxlbWVudCB8IG51bGxcclxuICAgIGlmICghZGxnKSByZXR1cm5cclxuICAgIGxldCB3YXNWaXNpYmxlID0gIWlzRGlhbG9nSGlkZGVuKGRsZylcclxuICAgIGNvbnN0IGNoZWNrID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBub3dIaWRkZW4gPSBpc0RpYWxvZ0hpZGRlbihkbGcpXHJcbiAgICAgIGlmICh3YXNWaXNpYmxlICYmIG5vd0hpZGRlbikgeyBoYW5kbGVDbG9zZSgpOyB3YXNWaXNpYmxlID0gZmFsc2UgfVxyXG4gICAgICBlbHNlIGlmICghd2FzVmlzaWJsZSAmJiAhbm93SGlkZGVuKSB7IHdhc1Zpc2libGUgPSB0cnVlIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2hlY2spXHJcbiAgICBtby5vYnNlcnZlKGRsZywgeyBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnLCAnY2xhc3MnLCAnYXJpYS1oaWRkZW4nXSB9KVxyXG4gICAgY2hlY2soKVxyXG4gICAgcmV0dXJuICgpID0+IG1vLmRpc2Nvbm5lY3QoKVxyXG4gIH0sIFtoYW5kbGVDbG9zZV0pXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvbktleSA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7IGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIGhhbmRsZUNsb3NlKCkgfVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5KVxyXG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleSlcclxuICB9LCBbaGFuZGxlQ2xvc2VdKVxyXG5cclxuICAvKiogU3Vtw6FyaW8gKGFtb3N0cmFzIGFwZW5hcykgKi9cclxuICBjb25zdCBzdW1tYXJ5R3JvdXBzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoY2F0ZWdvcmlhICE9PSAnc2FtcGxlJykgcmV0dXJuIFtdXHJcbiAgICBjb25zdCBiYXNlOiBBbW9zdHJhSXRlbVtdID0gd2l0aEludGVyZXN0XHJcbiAgICAgID8gKGZhaXhhU2V0LnNpemUgPiAwXHJcbiAgICAgICAgICA/IChkYWRvc0Z1bGwgPz8gW10pLmZpbHRlcih4ID0+IGZhaXhhU2V0LmhhcyhOdW1iZXIoeC5jb2RpZ29Qb2NvKSkpXHJcbiAgICAgICAgICA6IChkYWRvc0ZhaXhhQVBJID8/IGRhZG9zRnVsbCA/PyBbXSkpXHJcbiAgICAgIDogKGRhZG9zRnVsbCA/PyBbXSlcclxuXHJcbiAgICByZXR1cm4gdGlwb3NTZWwubWFwKHRpcG8gPT4ge1xyXG4gICAgICBjb25zdCBjb3IgPSBjb3Jlc1RpcG9zW3RpcG9dXHJcbiAgICAgIGNvbnN0IGRhZG9zID0gYmFzZS5tYXAoZCA9PiAoeyBjb2RpZ29Qb2NvOiBkLmNvZGlnb1BvY28sIHRvdGFsOiBkW1RZUEVfRklFTERbdGlwb11dID8/IDAgfSkpXHJcbiAgICAgIGxldCByb3dzID0gY2FsY3VsYXJRdWVicmFzKGRhZG9zLCBjb3IpLnJldmVyc2UoKVxyXG4gICAgICBpZiAoIXNob3dFbXB0eSkgcm93cyA9IHJvd3MuZmlsdGVyKHIgPT4gci5jb3VudCA+IDAgfHwgci5sYWJlbC5zdGFydHNXaXRoKCd8IDAgfCcpKVxyXG4gICAgICByZXR1cm4geyB0aXBvLCByb3dzIH1cclxuICAgIH0pXHJcbiAgfSwgW3RpcG9zU2VsLCBzaG93RW1wdHksIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXQsIGRhZG9zRnVsbCwgZGFkb3NGYWl4YUFQSSwgY2F0ZWdvcmlhXSlcclxuXHJcbiAgLyoqIFN1bcOhcmlvIChtaW5lcmFpcyDigJQgVG90YWwgZGUgQW1vc3RyYXMvQ29sZXRhcykgKi9cclxuICBjb25zdCBzdW1tYXJ5TWluZXJhbHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChjYXRlZ29yaWEgIT09ICdtaW5lcmFscycpIHJldHVybiBudWxsXHJcbiAgICBpZiAoIW1pbmVyYWxBbmFsaXNlKSByZXR1cm4gbnVsbFxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhZG9zTWluZXJhaXMpIHx8IGRhZG9zTWluZXJhaXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxyXG5cclxuICAgIGNvbnN0IGJhc2UgPSAod2l0aEludGVyZXN0ICYmIGZhaXhhU2V0LnNpemUgPiAwKVxyXG4gICAgICA/IGRhZG9zTWluZXJhaXMuZmlsdGVyKGQgPT4gZmFpeGFTZXQuaGFzKE51bWJlcihkLmNvZGlnb1BvY28pKSlcclxuICAgICAgOiBkYWRvc01pbmVyYWlzXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSAod2l0aEludGVyZXN0ID8gJ0ludGVydmFsbyBkZSBJbnRlcmVzc2UgLSAnIDogJycpICsgbGFiZWxGcm9tVmFsdWUobWluZXJhbEFuYWxpc2UgYXMgTWluZXJhbFRpcG8pXHJcbiAgICBpZiAoIWJhc2UubGVuZ3RoKSByZXR1cm4geyB0aXRsZSwgcm93czogW10gYXMgYW55W10gfVxyXG5cclxuICAgIGNvbnN0IGNvbG9yID0gJ3JnYigyNTMsMTQyLDU1KScgLy8gbWVzbWEgY29yIHVzYWRhIG5hIGNhbWFkYSBkZSBtaW5lcmFpc1xyXG4gICAgY29uc3QgZGFkb3MgPSBiYXNlLm1hcChkID0+ICh7IHRvdGFsOiBkLnRvdGFsTWluZXJhaXMgfSkpXHJcbiAgICBsZXQgcm93cyA9IGNhbGN1bGFyUXVlYnJhcyhkYWRvcywgY29sb3IpLnJldmVyc2UoKVxyXG4gICAgaWYgKCFzaG93RW1wdHkpIHJvd3MgPSByb3dzLmZpbHRlcihyID0+IHIuY291bnQgPiAwIHx8IHIubGFiZWwuc3RhcnRzV2l0aCgnfCAwIHwnKSlcclxuXHJcbiAgICByZXR1cm4geyB0aXRsZSwgcm93cyB9XHJcbiAgfSwgW2NhdGVnb3JpYSwgbWluZXJhbEFuYWxpc2UsIGRhZG9zTWluZXJhaXMsIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXQsIHNob3dFbXB0eV0pXHJcblxyXG4gIGNvbnN0IGhhc0FueUJhc2UgPVxyXG4gICAgKEFycmF5LmlzQXJyYXkoZGFkb3NGdWxsKSAmJiBkYWRvc0Z1bGwubGVuZ3RoID4gMCkgfHxcclxuICAgIChBcnJheS5pc0FycmF5KGRhZG9zRmFpeGFBUEkpICYmIGRhZG9zRmFpeGFBUEkubGVuZ3RoID4gMClcclxuXHJcbiAgLy8gPT09PT0gZmlsdHJvcyBwYXJhIG8gc2VhcmNoIGRlIG1pbmVyYWlzXHJcbiAgY29uc3QgbGlzdGFGaWx0cmFkYSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgcSA9IChidXNjYU1pbmVyYWwgfHwgJycpLm5vcm1hbGl6ZSgnTkZEJykucmVwbGFjZSgvXFxwe0RpYWNyaXRpY30vZ3UsICcnKS50b0xvd2VyQ2FzZSgpXHJcbiAgICByZXR1cm4gKGxpc3RhTWluZXJhaXMgfHwgW10pLmZpbHRlcihtID0+IHtcclxuICAgICAgY29uc3Qgbm9tZSA9IChtLm5vbWVNaW5lcmFsIHx8ICcnKS5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1xccHtEaWFjcml0aWN9L2d1LCAnJykudG9Mb3dlckNhc2UoKVxyXG4gICAgICByZXR1cm4gbm9tZS5pbmNsdWRlcyhxKVxyXG4gICAgfSlcclxuICB9LCBbbGlzdGFNaW5lcmFpcywgYnVzY2FNaW5lcmFsXSlcclxuXHJcbiAgLy8gcHJpbWVpcmFzIDQgb3DDp8O1ZXMgKyBhIHRlcmNlaXJhIGxpbmhhICjDmmx0aW1hKVxyXG4gIGNvbnN0IEZJUlNUX0ZPVVIgPSBNSU5FUkFMX09QVElPTlMuc2xpY2UoMCwgNClcclxuICBjb25zdCBMQVNUX09ORSA9IE1JTkVSQUxfT1BUSU9OUy5zbGljZSg0KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e3dyYXBwZXJTdHlsZX0gcmVmPXtyb290UmVmfT5cclxuICAgICAgPEdsb2JhbCBzdHlsZXM9e2dsb2JhbFBhbmVsU3R5bGV9IC8+XHJcbiAgICAgIDxsYWJlbCBjc3M9e3RpdGxlU3R5bGV9PlNlbGVjaW9uZSBhIGRpc3RyaWJ1acOnw6NvPC9sYWJlbD5cclxuXHJcbiAgICAgIDxzZWxlY3QgY3NzPXtzZWxlY3RTdHlsZX0gdmFsdWU9e2NhdGVnb3JpYX0gb25DaGFuZ2U9e2UgPT4gc2V0Q2F0ZWdvcmlhKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nJz5TZWxlY2lvbmUgbyB0aXBvPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nc2FtcGxlJz5EaXN0cmlidWnDp8OjbyBkZSBhbW9zdHJhczwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9J21pbmVyYWxzJz5EaXN0cmlidWnDp8OjbyBkZSBNaW5lcmFpczwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgIHsvKiA9PT09PT09PSBVSTogQU1PU1RSQVMgPT09PT09PT0gKi99XHJcbiAgICAgIHtjYXRlZ29yaWEgPT09ICdzYW1wbGUnICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2xvYWRpbmdGdWxsICYmIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4IH19PkNhcnJlZ2FuZG8gYmFzZeKApjwvZGl2Pn1cclxuICAgICAgICAgIHshIWVycm9yRnVsbCAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnI2IwMCcsIG1hcmdpbkJvdHRvbTogOCB9fT5FcnJvOiB7ZXJyb3JGdWxsfTwvZGl2Pn1cclxuICAgICAgICAgIHt3aXRoSW50ZXJlc3QgJiYgbG9hZGluZ0ludGVyZXN0ICYmIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4IH19PkNhcnJlZ2FuZG8gaW50ZXJ2YWxvIGRlIGludGVyZXNzZeKApjwvZGl2Pn1cclxuICAgICAgICAgIHt3aXRoSW50ZXJlc3QgJiYgISFlcnJvckludGVyZXN0ICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjYjAwJywgbWFyZ2luQm90dG9tOiA4IH19PkVycm86IHtlcnJvckludGVyZXN0fTwvZGl2Pn1cclxuXHJcbiAgICAgICAgICB7aGFzQW55QmFzZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtsaXN0U3R5bGV9PlxyXG4gICAgICAgICAgICAgIHtMSVNUX1RZUEVTLm1hcCh0ID0+IChcclxuICAgICAgICAgICAgICAgIDxsYWJlbCBrZXk9e3R9IGNzcz17Y2hlY2tib3hMYWJlbFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aXBvc1NlbC5pbmNsdWRlcyh0KX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIHNldFRpcG9zU2VsKHByZXYgPT4gcHJldi5pbmNsdWRlcyh0KSA/IHByZXYuZmlsdGVyKHggPT4geCAhPT0gdCkgOiBbLi4ucHJldiwgdF0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYmxcIj57dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHQuc2xpY2UoMSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qID09PT09PT09IFVJOiBNSU5FUkFJUyA9PT09PT09PSAqL31cclxuICAgICAge2NhdGVnb3JpYSA9PT0gJ21pbmVyYWxzJyAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY3NzPXttaW5lcmFsc0xpc3RTdHlsZX0+XHJcbiAgICAgICAgICAgIHtNSU5FUkFMX09QVElPTlMubWFwKG9wdCA9PiAoXHJcbiAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICBrZXk9e29wdC52YWx1ZX1cclxuICAgICAgICAgICAgICAgIGNzcz17Y2hlY2tib3hMYWJlbFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgZGF0YS1rZXk9e29wdC52YWx1ZX0gICAvLyBEUlgtVE9UIHwgTUFTU0EgfCBEUlgtQVJHIHwgQVJFQSB8IHRvZGFzQW5hbGlzZXNcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm1pbmVyYWwtYW5hbGlzZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e21pbmVyYWxBbmFsaXNlID09PSBvcHQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRNaW5lcmFsQW5hbGlzZShvcHQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxibFwiPntvcHQubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAge2xvYWRpbmdNaW5lcmFpcyAmJiA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCB9fT5DYXJyZWdhbmRvIG1pbmVyYWlz4oCmPC9kaXY+fVxyXG4gICAgICAgICAgeyEhZXJyb3JNaW5lcmFpcyAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnI2IwMCcsIG1hcmdpbkJvdHRvbTogOCB9fT5FcnJvOiB7ZXJyb3JNaW5lcmFpc308L2Rpdj59XHJcblxyXG4gICAgICAgICAgey8qIChzdWEgVUkgZGUgYnVzY2EvbGlzdGEvYWdydXBhZG9yZXMgcGVybWFuZWNlIGFxdWkpICovfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qID09PT09PT09IFN1bcOhcmlvIEFNT1NUUkFTID09PT09PT09ICovfVxyXG4gICAgICB7Y2F0ZWdvcmlhID09PSAnc2FtcGxlJyAmJiBzdW1tYXJ5R3JvdXBzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgY3NzPXtzdW1tYXJ5TGlzdFN0eWxlfT5cclxuICAgICAgICAgIHtzdW1tYXJ5R3JvdXBzLm1hcChncm91cCA9PiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2dyb3VwLnRpcG99PlxyXG4gICAgICAgICAgICAgIDxkaXYgY3NzPXtsZWdlbmRIZWFkZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICB7KHdpdGhJbnRlcmVzdCA/ICdJbnRlcnZhbG8gZGUgSW50ZXJlc3NlIC0gJyA6ICcnKX1cclxuICAgICAgICAgICAgICAgIHtncm91cC50aXBvLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZ3JvdXAudGlwby5zbGljZSgxKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7Z3JvdXAucm93cy5tYXAoKHIsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake2dyb3VwLnRpcG99LSR7aWR4fWB9IGNzcz17c3VtbWFyeUl0ZW1TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY3NzPXtidWJibGVCb3hTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD17ci5zaXplfSBoZWlnaHQ9e3Iuc2l6ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXtyLnNpemUgLyAyfSBjeT17ci5zaXplIC8gMn0gcj17ci5zaXplIC8gMn0gZmlsbD17ci5jb3J9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjc3M9e3JhbmdlTGFiZWxTdHlsZX0+e3IubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiA9PT09PT09PSBTdW3DoXJpbyBNSU5FUkFJUyAoVG90YWwgZGUgQW1vc3RyYXMvQ29sZXRhcykgPT09PT09PT0gKi99XHJcbiAgICAgIHtjYXRlZ29yaWEgPT09ICdtaW5lcmFscycgJiYgc3VtbWFyeU1pbmVyYWxzICYmIChcclxuICAgICAgICA8ZGl2IGNzcz17c3VtbWFyeUxpc3RTdHlsZX0+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17bGVnZW5kSGVhZGVyU3R5bGV9PntzdW1tYXJ5TWluZXJhbHMudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICB7c3VtbWFyeU1pbmVyYWxzLnJvd3MubWFwKChyLCBpZHgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2BtaW4tJHtpZHh9YH0gY3NzPXtzdW1tYXJ5SXRlbVN0eWxlfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNzcz17YnViYmxlQm94U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD17ci5zaXplfSBoZWlnaHQ9e3Iuc2l6ZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9e3Iuc2l6ZS8yfSBjeT17ci5zaXplLzJ9IHI9e3Iuc2l6ZS8yfSBmaWxsPXtyLmNvcn0gLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNzcz17cmFuZ2VMYWJlbFN0eWxlfT57ci5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogPT09PT09PT0gUm9kYXDDqSBjb211bSA9PT09PT09PSAqL31cclxuICAgICAgeyhzdW1tYXJ5R3JvdXBzLmxlbmd0aCA+IDAgfHwgc3VtbWFyeU1pbmVyYWxzIHx8IHNob3dXaXRoSW50ZXJlc3QpICYmIChcclxuICAgICAgICA8ZGl2IGNzcz17Zm9vdGVyU3R5bGV9PlxyXG4gICAgICAgICAgeygoY2F0ZWdvcmlhID09PSAnc2FtcGxlJyAmJiBzdW1tYXJ5R3JvdXBzLmxlbmd0aCA+IDApIHx8XHJcbiAgICAgICAgICAgIChjYXRlZ29yaWEgPT09ICdtaW5lcmFscycgJiYgISFzdW1tYXJ5TWluZXJhbHMpKSAmJiAoXHJcbiAgICAgICAgICAgIDxsYWJlbCBjc3M9e2Zvb3RlckxhYmVsU3R5bGV9IHRpdGxlPVwiRXhpYmlyIHRhbWLDqW0gY2xhc3NlcyBzZW0gcG/Dp29zXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3Nob3dFbXB0eX0gb25DaGFuZ2U9e2UgPT4gc2V0U2hvd0VtcHR5KGUudGFyZ2V0LmNoZWNrZWQpfSAvPlxyXG4gICAgICAgICAgICAgIEV4aWJpciBjbGFzc2VzIHZhemlhc1xyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7c2hvd1dpdGhJbnRlcmVzdCAmJiAoXHJcbiAgICAgICAgICAgIDxsYWJlbCBjc3M9e2Zvb3RlckxhYmVsU3R5bGVJbnRlcmVzc2V9IHRpdGxlPVwiUXVhbmRvIG1hcmNhZG8sIGFwbGljYSBvIGZpbHRybyBkZSBJbnRlcnZhbG8gZGUgSW50ZXJlc3NlIChjw7NkaWdvcyB2aW5kb3MgZG8gRXhwbG9yYSBvdSB2aWEgQVBJKVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3dpdGhJbnRlcmVzdH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudCA9IHRydWU7IHNldFdpdGhJbnRlcmVzdChlLnRhcmdldC5jaGVja2VkKSB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgSW50ZXJ2YWxvIGRlIGludGVyZXNzZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudCB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19IG9uQWN0aXZlVmlld0NoYW5nZT17c2V0SmltdU1hcFZpZXd9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==