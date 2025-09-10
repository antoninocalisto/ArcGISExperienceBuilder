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
        console.log('[amostras] targetOrigin', targetOrigin, 'reqId', reqId);
        const onMessage = (event) => {
            const d = event.data || {};
            if (!d || d.reqId !== reqId)
                return;
            console.log('[amostras] resposta', d.type, d);
            // limpa timeout e listener
            try {
                clearTimeout(to);
            }
            catch (_a) { }
            window.removeEventListener('message', onMessage);
            console.groupEnd();
            if (d.type === 'fetchDistribuicaoAmostras:ok') {
                resolve(normalizeList(d.payload));
            }
            else if (d.type === 'fetchDistribuicaoAmostras:err') {
                reject(new Error(d.message || 'Erro no fetch via parent'));
            }
            else {
                reject(new Error('Resposta desconhecida do pai'));
            }
        };
        window.addEventListener('message', onMessage);
        const to = window.setTimeout(() => {
            window.removeEventListener('message', onMessage);
            console.warn('[amostras] TIMEOUT aguardando resposta do pai', { reqId });
            console.groupEnd();
            reject(new Error('Timeout aguardando resposta do pai'));
        }, 20000);
        // dispara para o PAI (Explora)
        (_a = window.parent) === null || _a === void 0 ? void 0 : _a.postMessage({ type: 'fetchDistribuicaoAmostras', body, reqId }, targetOrigin);
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
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const onMsg = (ev) => {
            const data = ev === null || ev === void 0 ? void 0 : ev.data;
            if (!data || !data.type)
                return;
            if (data.type === 'faixa-interesse' && Array.isArray(data.codigosPocos)) {
                const nums = data.codigosPocos.map((v) => Number(v)).filter((v) => !isNaN(v));
                console.log('[widget] faixa-interesse recebida', nums.length, nums.slice(0, 10));
                setFaixaSet(new Set(nums));
                if (nums.length > 0) {
                    setshowWithInterest(true);
                    if (!interestManualRef.current)
                        setWithInterest(true);
                }
            }
            if (data.type === 'config') {
                const cfg = data;
                if (cfg.startWithInterest) {
                    setshowWithInterest(true);
                    if (!interestManualRef.current)
                        setWithInterest(true);
                }
                console.log('[widget] config recebida', cfg);
            }
            // Opcional: se futuramente quiser renderizar legenda vinda do pai
            if (data.type === 'legend:minerais') {
                const _msg = data;
                console.log('[widget] legend:minerais recebida', _msg === null || _msg === void 0 ? void 0 : _msg.payload);
            }
        };
        window.addEventListener('message', onMsg);
        return () => window.removeEventListener('message', onMsg);
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
        if (view)
            clearAmostras(view);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXBhLWRlLW1pbmVyYWlzLXNlYXJjaC1tYXAvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7QUFHOEM7QUFFakQsK0NBQStDO0FBQ3hDLE1BQU0sZUFBZSxHQUFHO0lBQzdCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO0lBQ3hDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsb0JBQW9CLEVBQUU7SUFDakQsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFJLEtBQUssRUFBRSxlQUFlLEVBQUU7SUFDNUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFLLEtBQUssRUFBRSxjQUFjLEVBQUU7SUFDM0MsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRTtDQUM5QztBQTBCViwyREFBMkQ7QUFDM0QsU0FBUyx3QkFBd0IsQ0FBQyxHQUFVO0lBQzFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUNuQyxHQUFHLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTs7UUFBQyxRQUFDO1lBQ2hCLFVBQVUsRUFBRSxNQUFNLENBQUMseUJBQUMsQ0FBQyxVQUFVLG1DQUFJLENBQUMsQ0FBQyxZQUFZLG1DQUFJLENBQUMsQ0FBQyxJQUFJLG1DQUFJLENBQUMsQ0FBQyxNQUFNLG1DQUFJLENBQUMsQ0FBQztZQUM3RSxhQUFhLEVBQUUsTUFBTSxDQUFDLGFBQUMsQ0FBQyxhQUFhLG1DQUFJLENBQUMsQ0FBQyxLQUFLLG1DQUFJLENBQUMsQ0FBQztTQUN2RCxDQUFDO0tBQUEsQ0FBQztTQUNGLE1BQU0s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QUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcGEtZGUtbWluZXJhaXMtc2VhcmNoLW1hcC9zcmMvcnVudGltZS9NaW5lcmFscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFwYS1kZS1taW5lcmFpcy1zZWFyY2gtbWFwL3NyYy9ydW50aW1lL3V0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3JlbmRlcmVycy9DbGFzc0JyZWFrc1JlbmRlcmVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3N5bWJvbHMvU2ltcGxlTWFya2VyU3ltYm9sXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3dpZGdldHMvTGVnZW5kXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXBhLWRlLW1pbmVyYWlzLXNlYXJjaC1tYXAvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogTWluZXJhbHMudHNcclxuICogTMOzZ2ljYSBkYSBEaXN0cmlidWnDp8OjbyBkZSBNaW5lcmFpczpcclxuICogIC0gQnVzY2EgZG8gQ09OVEFET1IgcG9yIGFuw6FsaXNlIChEUlgvUWVtc2Nhbi9Ub2RhcykgPT4gYmFzZSBlbSBjbHVzdGVycy9ib2xoYXMgdmlhIGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCXHJcbiAqICAtIEJ1c2NhIGRhIExJU1RBIGRlIG1pbmVyYWlzIChwYXJhIG8gc2VhcmNoKVxyXG4gKiAgLSBCdXNjYSBkb3MgQUdSVVBBRE9SRVMgKGFuYWxpc2V8bWVkaWF8bWF4aW1hKSBwYXJhIHVtIG1pbmVyYWwgc2VsZWNpb25hZG9cclxuICogIC0gQXBsaWNhw6fDo28gZGUgdmlzdWFsVmFyaWFibGVzIChjb2xvciByYW1wKSBOQSBNRVNNQSBDQU1BREEsIHBvciBjaW1hIGRvIGNsdXN0ZXIgYmFzZVxyXG4gKi9cclxuXHJcbmltcG9ydCB0eXBlIHsgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuLyoqIE9ww6fDtWVzIGRlIGFuw6FsaXNlIG1pbmVyYWwgcGFyYSBvcyByw6FkaW9zICovXHJcbmV4cG9ydCBjb25zdCBNSU5FUkFMX09QVElPTlMgPSBbXHJcbiAgeyB2YWx1ZTogJ0RSWC1UT1QnLCBsYWJlbDogJ0RSWC1Ub3RhbCcgfSxcclxuICB7IHZhbHVlOiAnRFJYLUFSRycsIGxhYmVsOiAnRFJYLUFyZ2lsb21pbmVyYWlzJyB9LFxyXG4gIHsgdmFsdWU6ICdNQVNTQScsICAgbGFiZWw6ICdRZW1zY2FuLU1hc3NhJyB9LFxyXG4gIHsgdmFsdWU6ICdBUkVBJywgICAgbGFiZWw6ICdRZW1zY2FuLcOBcmVhJyB9LFxyXG4gIHsgdmFsdWU6ICd0b2Rhc0FuYWxpc2VzJywgbGFiZWw6ICdUb2RhcyBhcyBBbsOhbGlzZXMnIH1cclxuXSBhcyBjb25zdFxyXG5cclxuZXhwb3J0IHR5cGUgTWluZXJhbFRpcG8gPSB0eXBlb2YgTUlORVJBTF9PUFRJT05TW251bWJlcl1bJ3ZhbHVlJ11cclxuZXhwb3J0IHR5cGUgQWdydXBhZG9yVGlwbyA9ICdhbmFsaXNlJyB8ICdtZWRpYScgfCAnbWF4aW1hJ1xyXG5cclxuLyoqIEl0ZW5zIGRvIGNvbnRhZG9yICh0b3RhbCBwb3IgcG/Dp28pICovXHJcbmV4cG9ydCB0eXBlIE1pbmVyYWxJdGVtID0ge1xyXG4gIGNvZGlnb1BvY286IG51bWJlclxyXG4gIHRvdGFsTWluZXJhaXM6IG51bWJlclxyXG59XHJcblxyXG4vKiogSXRlbSBkYSBsaXN0YSBkZSBtaW5lcmFpcyAocGFyYSBvIHNlYXJjaCkgKi9cclxuZXhwb3J0IHR5cGUgTWluZXJhbExpc3RhSXRlbSA9IHtcclxuICBub21lTWluZXJhbDogc3RyaW5nXHJcbiAgbm9tZVJlc3VtaWRvTWluZXJhbD86IHN0cmluZ1xyXG59XHJcblxyXG4vKiogSXRlbSBkZSByZXRvcm5vIGRvIGFncnVwYWRvciAqL1xyXG5leHBvcnQgdHlwZSBNaW5lcmFsQWdydXBhZG9ySXRlbSA9IHtcclxuICBjb2RpZ29Qb2NvOiBudW1iZXJcclxuICBub21lUmVzdW1pZG8/OiBzdHJpbmdcclxuICBxdEFuYWxpc2U6IG51bWJlclxyXG4gIHZhbG9yTWVkaW86IG51bWJlclxyXG4gIHZhbG9yTWF4aW1vOiBudW1iZXJcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PSBOb3JtYWxpemHDp8O1ZXMgPT09PT09PT09PT09PT09PT09PSAqL1xyXG5mdW5jdGlvbiBub3JtYWxpemVNaW5lcmFsQ29udGFkb3IocmF3OiBhbnlbXSk6IE1pbmVyYWxJdGVtW10ge1xyXG4gIHJldHVybiAoQXJyYXkuaXNBcnJheShyYXcpID8gcmF3IDogW10pXHJcbiAgICAubWFwKChyOiBhbnkpID0+ICh7XHJcbiAgICAgIGNvZGlnb1BvY286IE51bWJlcihyLmNvZGlnb1BvY28gPz8gci5QT0NPX0NEX1BPQ08gPz8gci5wb2NvID8/IHIuY29kaWdvID8/IDApLFxyXG4gICAgICB0b3RhbE1pbmVyYWlzOiBOdW1iZXIoci50b3RhbE1pbmVyYWlzID8/IHIudG90YWwgPz8gMClcclxuICAgIH0pKVxyXG4gICAgLmZpbHRlcih4ID0+ICEheC5jb2RpZ29Qb2NvKVxyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVNaW5lcmFsTGlzdGEocmF3OiBhbnlbXSk6IE1pbmVyYWxMaXN0YUl0ZW1bXSB7XHJcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5KHJhdykgPyByYXcgOiBbXSlcclxuICAgIC5tYXAoKHI6IGFueSkgPT4gKHtcclxuICAgICAgbm9tZU1pbmVyYWw6IFN0cmluZyhyLm5vbWVNaW5lcmFsID8/IHIubm9tZSA/PyByLm1pbmVyYWwgPz8gJycpLnRyaW0oKSxcclxuICAgICAgbm9tZVJlc3VtaWRvTWluZXJhbDogci5ub21lUmVzdW1pZG9NaW5lcmFsID8/IHIubm9tZVJlc3VtaWRvID8/IHVuZGVmaW5lZFxyXG4gICAgfSkpXHJcbiAgICAuZmlsdGVyKHggPT4gISF4Lm5vbWVNaW5lcmFsKVxyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVBZ3J1cGFkb3IocmF3OiBhbnlbXSk6IE1pbmVyYWxBZ3J1cGFkb3JJdGVtW10ge1xyXG4gIHJldHVybiAoQXJyYXkuaXNBcnJheShyYXcpID8gcmF3IDogW10pXHJcbiAgICAubWFwKChyOiBhbnkpID0+ICh7XHJcbiAgICAgIGNvZGlnb1BvY286IE51bWJlcihyLmNvZGlnb1BvY28gPz8gci5QT0NPX0NEX1BPQ08gPz8gci5wb2NvID8/IHIuY29kaWdvID8/IDApLFxyXG4gICAgICBub21lUmVzdW1pZG86IHIubm9tZVJlc3VtaWRvID8/IHIubm9tZVJlc3VtaWRvTWluZXJhbCA/PyB1bmRlZmluZWQsXHJcbiAgICAgIHF0QW5hbGlzZTogTnVtYmVyKHIucXRBbmFsaXNlID8/IHIudG90YWwgPz8gMCksXHJcbiAgICAgIHZhbG9yTWVkaW86IE51bWJlcihyLnZhbG9yTWVkaW8gPz8gci5tZWRpYSA/PyAwKSxcclxuICAgICAgdmFsb3JNYXhpbW86IE51bWJlcihyLnZhbG9yTWF4aW1vID8/IHIubWF4aW1vID8/IDApXHJcbiAgICB9KSlcclxuICAgIC5maWx0ZXIoeCA9PiAhIXguY29kaWdvUG9jbylcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PSBQb3N0TWVzc2FnZSBoZWxwZXJzID09PT09PT09PT09PT09PT09PT0gKi9cclxuZnVuY3Rpb24gcG9zdFZpYVBhcmVudDxUID0gYW55Pih0eXBlOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgb2tUeXBlOiBzdHJpbmcsIGVyclR5cGU6IHN0cmluZyk6IFByb21pc2U8VD4ge1xyXG4gIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFttaW5lcmFsc10gcG9zdFZpYVBhcmVudCAtPiAke3R5cGV9YClcclxuICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSBib2R5JywgYm9keSlcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcmVxSWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKVxyXG4gICAgbGV0IHRhcmdldE9yaWdpbiA9ICcqJ1xyXG4gICAgdHJ5IHsgaWYgKGRvY3VtZW50LnJlZmVycmVyKSB0YXJnZXRPcmlnaW4gPSBuZXcgVVJMKGRvY3VtZW50LnJlZmVycmVyKS5vcmlnaW4gfSBjYXRjaCB7fVxyXG4gICAgY29uc29sZS5sb2coJ1ttaW5lcmFsc10gdGFyZ2V0T3JpZ2luJywgdGFyZ2V0T3JpZ2luLCAncmVxSWQnLCByZXFJZClcclxuXHJcbiAgICBjb25zdCBvbk1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBkOiBhbnkgPSAoZXZlbnQgYXMgYW55KS5kYXRhIHx8IHt9XHJcbiAgICAgIGlmIChkLnJlcUlkICE9PSByZXFJZCkgcmV0dXJuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIHJlc3Bvc3RhIHJlY2ViaWRhJywgZC50eXBlLCBkKVxyXG4gICAgICBjbGVhclRpbWVvdXQodG8pIC8vIDw8PCBJTVBPUlRBTlRFXHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG5cclxuICAgICAgaWYgKGQudHlwZSA9PT0gb2tUeXBlKSB7XHJcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgICAgICAgcmVzb2x2ZShkLnBheWxvYWQgYXMgVClcclxuICAgICAgfSBlbHNlIGlmIChkLnR5cGUgPT09IGVyclR5cGUpIHtcclxuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgICAgICByZWplY3QobmV3IEVycm9yKGQubWVzc2FnZSB8fCAnRXJybyBubyBmZXRjaCB2aWEgcGFyZW50JykpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdbbWluZXJhbHNdIHRpcG8gaW5lc3BlcmFkbycsIGQudHlwZSlcclxuICAgICAgICByZWplY3QobmV3IEVycm9yKCdSZXNwb3N0YSBkZXNjb25oZWNpZGEgZG8gcGFpJykpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG5cclxuICAgIGNvbnN0IHRvID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSlcclxuICAgICAgY29uc29sZS53YXJuKCdbbWluZXJhbHNdIFRJTUVPVVQgYWd1YXJkYW5kbyByZXNwb3N0YSBkbyBwYWknLCB7IHR5cGUsIG9rVHlwZSwgZXJyVHlwZSwgcmVxSWQgfSlcclxuICAgICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1RpbWVvdXQgYWd1YXJkYW5kbyByZXNwb3N0YSBkbyBwYWkgKG1pbmVyYWlzKScpKVxyXG4gICAgfSwgMjAwMDApXHJcblxyXG4gICAgd2luZG93LnBhcmVudD8ucG9zdE1lc3NhZ2UoeyB0eXBlLCBib2R5LCByZXFJZCB9LCB0YXJnZXRPcmlnaW4pXHJcbiAgfSlcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PSBCb2RpZXMgRXhwbG9yYSA9PT09PT09PT09PT09PT09PT09ICovXHJcbmZ1bmN0aW9uIGJ1aWxkQm9keUNvbnRhZG9yKHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbywgZmFpeGFJbnRlcmVzc2U6IGJvb2xlYW4pIHtcclxuICBjb25zdCBwID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXHJcbiAgcC5zZXQoJ2hkU3lzJywgJ25vdmFpbnRjb25zJylcclxuICBwLnNldCgnaGRVQycsICdNYXBhJylcclxuICBwLnNldCgnaGRBY2FvJywgJ0NhcnJlZ2FyTWFwYURpc3RyaWJ1aWNhb01pbmVyYWlzQ29udGFkb3InKVxyXG4gIHAuc2V0KCdoZFNlc3Npb25GaWx0ZXInLCAndHJ1ZScpXHJcbiAgcC5zZXQoJ3RpcG9BbmFsaXNlJywgdGlwb0FuYWxpc2UpXHJcbiAgcC5zZXQoJ2ZhaXhhSW50ZXJlc3NlJywgU3RyaW5nKCEhZmFpeGFJbnRlcmVzc2UpKVxyXG4gIHJldHVybiBwLnRvU3RyaW5nKClcclxufVxyXG5mdW5jdGlvbiBidWlsZEJvZHlMaXN0YSh0aXBvQW5hbGlzZTogTWluZXJhbFRpcG8sIGZhaXhhSW50ZXJlc3NlOiBib29sZWFuKSB7XHJcbiAgY29uc3QgcCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG4gIHAuc2V0KCdoZFN5cycsICdub3ZhaW50Y29ucycpXHJcbiAgcC5zZXQoJ2hkVUMnLCAnTWFwYScpXHJcbiAgcC5zZXQoJ2hkQWNhbycsICdDYXJyZWdhck1hcGFEaXN0cmlidWljYW9NaW5lcmFpc0xpc3RhJylcclxuICBwLnNldCgnaGRTZXNzaW9uRmlsdGVyJywgJ3RydWUnKVxyXG4gIHAuc2V0KCd0aXBvQW5hbGlzZScsIHRpcG9BbmFsaXNlKVxyXG4gIHAuc2V0KCdmYWl4YUludGVyZXNzZScsIFN0cmluZyghIWZhaXhhSW50ZXJlc3NlKSlcclxuICByZXR1cm4gcC50b1N0cmluZygpXHJcbn1cclxuZnVuY3Rpb24gYnVpbGRCb2R5QWdydXBhZG9yKHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbywgbm9tZVJlc3VtaWRvTWluZXJhbDogc3RyaW5nIHwgdW5kZWZpbmVkLCBmYWl4YUludGVyZXNzZTogYm9vbGVhbikge1xyXG4gIGNvbnN0IHAgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcclxuICBwLnNldCgnaGRTeXMnLCAnbm92YWludGNvbnMnKVxyXG4gIHAuc2V0KCdoZFVDJywgJ01hcGEnKVxyXG4gIHAuc2V0KCdoZEFjYW8nLCAnQ2FycmVnYXJNYXBhRGlzdHJpYnVpY2FvTWluZXJhaXNBZ3J1cGFkb3InKVxyXG4gIHAuc2V0KCdoZFNlc3Npb25GaWx0ZXInLCAndHJ1ZScpXHJcbiAgcC5zZXQoJ3RpcG9BbmFsaXNlJywgdGlwb0FuYWxpc2UpXHJcbiAgaWYgKG5vbWVSZXN1bWlkb01pbmVyYWwpIHAuc2V0KCdub21lUmVzdW1pZG9NaW5lcmFsJywgbm9tZVJlc3VtaWRvTWluZXJhbClcclxuICBwLnNldCgnZmFpeGFJbnRlcmVzc2UnLCBTdHJpbmcoISFmYWl4YUludGVyZXNzZSkpXHJcbiAgcmV0dXJuIHAudG9TdHJpbmcoKVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09IEZldGNoIEFQSXMgPT09PT09PT09PT09PT09PT09PSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpc0NvbnRhZG9yKFxyXG4gIHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbyxcclxuICBmYWl4YUludGVyZXNzZTogYm9vbGVhblxyXG4pOiBQcm9taXNlPE1pbmVyYWxJdGVtW10+IHtcclxuICBjb25zdCBib2R5ID0gYnVpbGRCb2R5Q29udGFkb3IodGlwb0FuYWxpc2UsIGZhaXhhSW50ZXJlc3NlKVxyXG4gIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBwb3N0VmlhUGFyZW50PGFueVtdPignZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpcycsIGJvZHksICdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzOm9rJywgJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXM6ZXJyJylcclxuICBjb25zdCBub3JtID0gbm9ybWFsaXplTWluZXJhbENvbnRhZG9yKHBheWxvYWQpXHJcbiAgY29uc29sZS5sb2coJ1ttaW5lcmFsc10gY29udGFkb3Igbm9ybWFsaXphZG8nLCBub3JtLmxlbmd0aCwgbm9ybS5zbGljZSgwLCAxMCkpXHJcbiAgcmV0dXJuIG5vcm1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoTWluZXJhbExpc3RhKFxyXG4gIHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbyxcclxuICBmYWl4YUludGVyZXNzZTogYm9vbGVhblxyXG4pOiBQcm9taXNlPE1pbmVyYWxMaXN0YUl0ZW1bXT4ge1xyXG4gIGNvbnN0IGJvZHkgPSBidWlsZEJvZHlMaXN0YSh0aXBvQW5hbGlzZSwgZmFpeGFJbnRlcmVzc2UpXHJcbiAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHBvc3RWaWFQYXJlbnQ8YW55W10+KCdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzJywgYm9keSwgJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXM6b2snLCAnZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpczplcnInKVxyXG4gIGNvbnN0IG5vcm0gPSBub3JtYWxpemVNaW5lcmFsTGlzdGEocGF5bG9hZClcclxuICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSBsaXN0YSBub3JtYWxpemFkYScsIG5vcm0ubGVuZ3RoLCBub3JtLnNsaWNlKDAsIDEwKSlcclxuICByZXR1cm4gbm9ybVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNaW5lcmFsQWdydXBhZG9yKFxyXG4gIHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbyxcclxuICBub21lUmVzdW1pZG9NaW5lcmFsOiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgZmFpeGFJbnRlcmVzc2U6IGJvb2xlYW5cclxuKTogUHJvbWlzZTxNaW5lcmFsQWdydXBhZG9ySXRlbVtdPiB7XHJcbiAgY29uc3QgYm9keSA9IGJ1aWxkQm9keUFncnVwYWRvcih0aXBvQW5hbGlzZSwgbm9tZVJlc3VtaWRvTWluZXJhbCwgZmFpeGFJbnRlcmVzc2UpXHJcbiAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHBvc3RWaWFQYXJlbnQ8YW55W10+KCdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzJywgYm9keSwgJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXM6b2snLCAnZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpczplcnInKVxyXG4gIGNvbnN0IG5vcm0gPSBub3JtYWxpemVBZ3J1cGFkb3IocGF5bG9hZClcclxuICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSBhZ3J1cGFkb3Igbm9ybWFsaXphZG8nLCBub3JtLmxlbmd0aCwgbm9ybS5zbGljZSgwLCAxMCkpXHJcbiAgcmV0dXJuIG5vcm1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PSBSZW5kZXIgaGVscGVycyA9PT09PT09PT09PT09PT09PT09ICovXHJcbmNvbnN0IGxheWVySWRGb3IgPSAodGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvKSA9PiBgbWluZXJhaXNfJHtTdHJpbmcodGlwb0FuYWxpc2UpLnRvTG93ZXJDYXNlKCl9YFxyXG5jb25zdCBsZWdlbmRJZEZvciA9ICh0aXBvQW5hbGlzZTogTWluZXJhbFRpcG8pID0+IGBsZ2RfJHtsYXllcklkRm9yKHRpcG9BbmFsaXNlKX1gXHJcblxyXG5mdW5jdGlvbiBkaXNhYmxlQ2x1c3Rlck51bWJlcnMobHlyOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgaWYgKCFseXIpIHJldHVyblxyXG4gICAgaWYgKGx5ci5mZWF0dXJlUmVkdWN0aW9uICYmIGx5ci5mZWF0dXJlUmVkdWN0aW9uLnR5cGUgPT09ICdjbHVzdGVyJykge1xyXG4gICAgICBseXIuZmVhdHVyZVJlZHVjdGlvbiA9IHsgLi4ubHlyLmZlYXR1cmVSZWR1Y3Rpb24sIGxhYmVsc1Zpc2libGU6IGZhbHNlIH1cclxuICAgIH1cclxuICAgIGlmICgnbGFiZWxzVmlzaWJsZScgaW4gbHlyKSAobHlyIGFzIGFueSkubGFiZWxzVmlzaWJsZSA9IGZhbHNlXHJcbiAgICBpZiAoJ2xhYmVsaW5nSW5mbycgaW4gbHlyKSAobHlyIGFzIGFueSkubGFiZWxpbmdJbmZvID0gW11cclxuICAgIGlmIChBcnJheS5pc0FycmF5KChseXIgYXMgYW55KS5zdWJsYXllcnMpKSAobHlyIGFzIGFueSkuc3VibGF5ZXJzLmZvckVhY2goKHNsOiBhbnkpID0+IGRpc2FibGVDbHVzdGVyTnVtYmVycyhzbCkpXHJcbiAgfSBjYXRjaCB7fVxyXG59XHJcblxyXG4vKiogRGVzZW5oYSBhIGJhc2UgKGNvbnRhZG9yKSBlbSBjbHVzdGVycy9ib2xoYXMsIGNvbSB0w610dWxvIGNvbmZvcm1lIGFuw6FsaXNlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZXNlbmhhckRpc3RyaWJ1aWNhb01pbmVyYWlzKFxyXG4gIGppbXVNYXBWaWV3OiBKaW11TWFwVmlldyxcclxuICBkYWRvczogTWluZXJhbEl0ZW1bXSxcclxuICB0aXBvQW5hbGlzZTogTWluZXJhbFRpcG8sXHJcbiAgd2l0aEludGVyZXN0OiBib29sZWFuXHJcbikge1xyXG4gIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJ1ttaW5lcmFsc10gZGVzZW5oYXJEaXN0cmlidWljYW9NaW5lcmFpcycpXHJcbiAgY29uc29sZS5sb2coJ1ttaW5lcmFsc10gdGlwb0FuYWxpc2UnLCB0aXBvQW5hbGlzZSwgJ3dpdGhJbnRlcmVzdCcsIHdpdGhJbnRlcmVzdCwgJ24gZGFkb3MnLCBkYWRvcz8ubGVuZ3RoKVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHZpZXcgfSA9IGppbXVNYXBWaWV3XHJcbiAgICBpZiAoIXZpZXcgfHwgIUFycmF5LmlzQXJyYXkoZGFkb3MpIHx8IGRhZG9zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ1ttaW5lcmFsc10gdmlldyBpbmV4aXN0ZW50ZSBvdSBkYWRvcyB2YXppb3MnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IHBvbnRvcyA9IGRhZG9zLm1hcChkID0+ICh7IGNvZGlnb1BvY286IGQuY29kaWdvUG9jbywgdG90YWw6IGQudG90YWxNaW5lcmFpcyB9KSlcclxuICAgIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIGFtb3N0cmEgZG9zIHBvbnRvcycsIHBvbnRvcy5zbGljZSgwLCAxMCkpXHJcblxyXG4gICAgY29uc3QgaWRDYW1hZGEgPSBsYXllcklkRm9yKHRpcG9BbmFsaXNlKVxyXG4gICAgY29uc3QgaWRMZWdlbmRhID0gbGVnZW5kSWRGb3IodGlwb0FuYWxpc2UpXHJcbiAgICBnZXJhck1hcGFEaXN0cmlidWljYW9FQih7XHJcbiAgICAgIGppbXVNYXBWaWV3LCBkYWRvczogcG9udG9zLCBjb2xvckZpbGw6ICdyZ2IoMjUzLDE0Miw1NSknLFxyXG4gICAgICBpZENhbWFkYSwgaWRMZWdlbmRhLFxyXG4gICAgICB0aXRsZUxlZ2VuZGE6ICh3aXRoSW50ZXJlc3QgPyAnSW50ZXJ2YWxvIGRlIEludGVyZXNzZSAtICcgOiAnJykgKyBsYWJlbEZyb21WYWx1ZSh0aXBvQW5hbGlzZSksXHJcbiAgICAgIHdpdGhJbnRlcmVzdFxyXG4gICAgfSBhcyBhbnkpXHJcblxyXG4gICAgY29uc3QgbHlyID0gdmlldy5tYXAuZmluZExheWVyQnlJZChpZENhbWFkYSkgYXMgYW55XHJcbiAgICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSBsYXllciBjcmlhZGE/JywgISFseXIsIGx5cilcclxuICAgIGlmIChseXIpIGRpc2FibGVDbHVzdGVyTnVtYmVycyhseXIpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW21pbmVyYWxzXSBFUlJPIGRlc2VuaGFyRGlzdHJpYnVpY2FvTWluZXJhaXMnLCBlKVxyXG4gIH0gZmluYWxseSB7XHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICB9XHJcbn1cclxuXHJcbi8qKiBBcGxpY2EgdmlzdWFsIHZhcmlhYmxlIGRlIENPUiBwb3IgY2ltYSBkYSBjYW1hZGEgYmFzZSAoc2VtIG1leGVyIG5vIHRhbWFuaG8vY2x1c3RlcikgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwbGljYXJDb2xvcml6YWNhb1BvckFncnVwYWRvcihcclxuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXcsXHJcbiAgdGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvLFxyXG4gIGRhZG9zQWdydXBhZG9yZXM6IE1pbmVyYWxBZ3J1cGFkb3JJdGVtW10sXHJcbiAgYWdydXBhZG9yOiBBZ3J1cGFkb3JUaXBvXHJcbikge1xyXG4gIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJ1ttaW5lcmFsc10gYXBsaWNhckNvbG9yaXphY2FvUG9yQWdydXBhZG9yJylcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyB2aWV3IH0gPSBqaW11TWFwVmlld1xyXG4gICAgY29uc3QgbGF5ZXIgPSB2aWV3Py5tYXA/LmZpbmRMYXllckJ5SWQobGF5ZXJJZEZvcih0aXBvQW5hbGlzZSkpIGFzIGFueVxyXG4gICAgaWYgKCFsYXllcikgeyBjb25zb2xlLndhcm4oJ1ttaW5lcmFsc10gY2FtYWRhIGJhc2UgbsOjbyBlbmNvbnRyYWRhJyk7IHJldHVybiB9XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGFkb3NBZ3J1cGFkb3JlcykgfHwgZGFkb3NBZ3J1cGFkb3Jlcy5sZW5ndGggPT09IDApIHsgY29uc29sZS53YXJuKCdbbWluZXJhbHNdIGFncnVwYWRvcmVzIHZhemlvcycpOyByZXR1cm4gfVxyXG5cclxuICAgIC8vIMOtbmRpY2UgcG9yIHBvw6dvXHJcbiAgICBjb25zdCBieVBvY28gPSBuZXcgTWFwPG51bWJlciwgTWluZXJhbEFncnVwYWRvckl0ZW0+KClcclxuICAgIGZvciAoY29uc3QgaXQgb2YgZGFkb3NBZ3J1cGFkb3JlcykgYnlQb2NvLnNldChOdW1iZXIoaXQuY29kaWdvUG9jbyksIGl0KVxyXG5cclxuICAgIC8vIGRlZmluaW1vcyB1bSBjYW1wbyBcIm1kX3ZhbFwiIHBhcmEgbyB2aXN1YWwgdmFyaWFibGUgZGUgY29yXHJcbiAgICBjb25zdCBmaWVsZFZhciA9ICdtZF92YWwnXHJcblxyXG4gICAgLy8gMSkgQXR1YWxpemEgYXRyaWJ1dG9zIHBvciBwb8OnbyBjb20gbyB2YWxvciBkbyBhZ3J1cGFkb3IgZXNjb2xoaWRvXHJcbiAgICBjb25zb2xlLnRpbWUoJ1ttaW5lcmFsc10gcXVlcnlGZWF0dXJlcyBiYXNlJylcclxuICAgIGNvbnN0IGZlYXR1cmVTZXQgPSBhd2FpdCBsYXllci5xdWVyeUZlYXR1cmVzKHsgd2hlcmU6ICcxPTEnLCByZXR1cm5HZW9tZXRyeTogdHJ1ZSwgb3V0RmllbGRzOiBbJyonXSB9KVxyXG4gICAgY29uc29sZS50aW1lRW5kKCdbbWluZXJhbHNdIHF1ZXJ5RmVhdHVyZXMgYmFzZScpXHJcbiAgICBjb25zdCB1cGRhdGVzOiBhbnlbXSA9IFtdXHJcbiAgICBsZXQgbWluVmFsID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXHJcbiAgICBsZXQgbWF4VmFsID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZXHJcblxyXG4gICAgZm9yIChjb25zdCBmIG9mIGZlYXR1cmVTZXQuZmVhdHVyZXMpIHtcclxuICAgICAgY29uc3QgY29kaWdvID0gTnVtYmVyKFxyXG4gICAgICAgIGYuYXR0cmlidXRlcz8uUE9DT19DRF9QT0NPID8/XHJcbiAgICAgICAgZi5hdHRyaWJ1dGVzPy5jb2RpZ29Qb2NvID8/XHJcbiAgICAgICAgZi5hdHRyaWJ1dGVzPy5wb2NvID8/XHJcbiAgICAgICAgZi5hdHRyaWJ1dGVzPy5jb2RpZ29cclxuICAgICAgKVxyXG4gICAgICBjb25zdCBhZyA9IGJ5UG9jby5nZXQoY29kaWdvKVxyXG4gICAgICBsZXQgdmFsID0gMFxyXG4gICAgICBpZiAoYWcpIHtcclxuICAgICAgICBpZiAoYWdydXBhZG9yID09PSAnYW5hbGlzZScpIHZhbCA9IGFnLnF0QW5hbGlzZVxyXG4gICAgICAgIGVsc2UgaWYgKGFncnVwYWRvciA9PT0gJ21lZGlhJykgdmFsID0gYWcudmFsb3JNZWRpb1xyXG4gICAgICAgIGVsc2UgdmFsID0gYWcudmFsb3JNYXhpbW9cclxuICAgICAgfVxyXG4gICAgICBmLmF0dHJpYnV0ZXNbZmllbGRWYXJdID0gdmFsXHJcbiAgICAgIG1pblZhbCA9IE1hdGgubWluKG1pblZhbCwgdmFsKVxyXG4gICAgICBtYXhWYWwgPSBNYXRoLm1heChtYXhWYWwsIHZhbClcclxuICAgICAgdXBkYXRlcy5wdXNoKGYpXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSBpbnRlcnZhbG8gdmFsb3JlcycsIHsgbWluVmFsLCBtYXhWYWwsIHVwZGF0ZXM6IHVwZGF0ZXMubGVuZ3RoIH0pXHJcblxyXG4gICAgaWYgKHVwZGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zb2xlLnRpbWUoJ1ttaW5lcmFsc10gYXBwbHlFZGl0cycpXHJcbiAgICAgIGF3YWl0IGxheWVyLmFwcGx5RWRpdHMoeyB1cGRhdGVGZWF0dXJlczogdXBkYXRlcyB9KVxyXG4gICAgICBjb25zb2xlLnRpbWVFbmQoJ1ttaW5lcmFsc10gYXBwbHlFZGl0cycpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gMikgTW9udGEgb3Mgc3RvcHNcclxuICAgIGNvbnN0IGRpZmYgPSBtYXhWYWwgLSBtaW5WYWxcclxuICAgIGNvbnN0IGJ1aWxkTGFiZWwgPSAodjogbnVtYmVyKSA9PiBhZ3J1cGFkb3IgPT09ICdhbmFsaXNlJyA/IGAke3Z9YCA6IGAke3Z9ICVgXHJcblxyXG4gICAgbGV0IHN0b3BzOiBBcnJheTx7IHZhbHVlOiBudW1iZXI7IGNvbG9yOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfT5cclxuICAgIGlmIChkaWZmIDwgMykge1xyXG4gICAgICBzdG9wcyA9IFtcclxuICAgICAgICB7IHZhbHVlOiBtaW5WYWwsIGNvbG9yOiAncmdiKDI0OSwyMzgsMjI1KScsIGxhYmVsOiBidWlsZExhYmVsKG1pblZhbCkgfSxcclxuICAgICAgICB7IHZhbHVlOiBtYXhWYWwsIGNvbG9yOiAncmdiKDE2NSw2MCwyKScsICAgbGFiZWw6IGJ1aWxkTGFiZWwobWF4VmFsKSB9XHJcbiAgICAgIF1cclxuICAgIH0gZWxzZSBpZiAoZGlmZiA8IDUpIHtcclxuICAgICAgY29uc3Qgc3RlcCA9IE1hdGgucm91bmQoZGlmZiAvIDQpIHx8IDFcclxuICAgICAgc3RvcHMgPSBbXHJcbiAgICAgICAgeyB2YWx1ZTogbWluVmFsLCAgICAgICAgICAgIGNvbG9yOiAncmdiKDI0OSwyMzgsMjI1KScsIGxhYmVsOiBidWlsZExhYmVsKG1pblZhbCkgfSxcclxuICAgICAgICB7IHZhbHVlOiBtaW5WYWwgKyAyICogc3RlcCwgY29sb3I6ICdyZ2IoMjUzLDE0Miw1NSknLCAgbGFiZWw6IGJ1aWxkTGFiZWwobWluVmFsICsgMiAqIHN0ZXApIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogbWF4VmFsLCAgICAgICAgICAgIGNvbG9yOiAncmdiKDE2NSw2MCwyKScsICAgIGxhYmVsOiBidWlsZExhYmVsKG1heFZhbCkgfVxyXG4gICAgICBdXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBzdGVwID0gTWF0aC5yb3VuZChkaWZmIC8gNCkgfHwgMVxyXG4gICAgICBzdG9wcyA9IFtcclxuICAgICAgICB7IHZhbHVlOiBtaW5WYWwsICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjQ5LDIzOCwyMjUpJywgbGFiZWw6IGJ1aWxkTGFiZWwobWluVmFsKSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IG1pblZhbCArIDEgKiBzdGVwLCBjb2xvcjogJ3JnYigyNTEsMTkwLDEzMCknLCBsYWJlbDogYnVpbGRMYWJlbChtaW5WYWwgKyAxICogc3RlcCkgfSxcclxuICAgICAgICB7IHZhbHVlOiBtaW5WYWwgKyAyICogc3RlcCwgY29sb3I6ICdyZ2IoMjUzLDE0Miw1NSknLCAgbGFiZWw6IGJ1aWxkTGFiZWwobWluVmFsICsgMiAqIHN0ZXApIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogbWF4VmFsIC0gMSAqIHN0ZXAsIGNvbG9yOiAncmdiKDIzMyw4NSw2KScsICAgIGxhYmVsOiBidWlsZExhYmVsKG1heFZhbCAtIDEgKiBzdGVwKSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IG1heFZhbCwgICAgICAgICAgICBjb2xvcjogJ3JnYigxNjUsNjAsMiknLCAgICBsYWJlbDogYnVpbGRMYWJlbChtYXhWYWwpIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDMpIEFwbGljYSB2aXN1YWwgdmFyaWFibGUgZGUgY29yXHJcbiAgICBjb25zdCByZW5kZXJlciA9IGxheWVyLnJlbmRlcmVyPy5jbG9uZSA/IGxheWVyLnJlbmRlcmVyLmNsb25lKCkgOiBsYXllci5yZW5kZXJlclxyXG4gICAgY29uc3QgY29sb3JWaXNWYXIgPSB7XHJcbiAgICAgIHR5cGU6ICdjb2xvcicsXHJcbiAgICAgIGZpZWxkOiBmaWVsZFZhcixcclxuICAgICAgbGVnZW5kT3B0aW9uczogeyB0aXRsZTogJycgfSxcclxuICAgICAgc3RvcHNcclxuICAgIH0gYXMgYW55XHJcbiAgICByZW5kZXJlci52aXN1YWxWYXJpYWJsZXMgPSBbY29sb3JWaXNWYXJdXHJcbiAgICBsYXllci5yZW5kZXJlciA9IHJlbmRlcmVyXHJcbiAgICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSB2aXN1YWxWYXJpYWJsZXMgYXBsaWNhZGFzJylcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW21pbmVyYWxzXSBFUlJPIGFwbGljYXJDb2xvcml6YWNhb1BvckFncnVwYWRvcicsIGUpXHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gIH1cclxufVxyXG5cclxuLyoqIExhYmVsIGh1bWFubyBwYXJhIG8gdMOtdHVsbyBkYSBsZWdlbmRhL2Jhc2UgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbVZhbHVlKHY6IE1pbmVyYWxUaXBvKSB7XHJcbiAgY29uc3QgZiA9IE1JTkVSQUxfT1BUSU9OUy5maW5kKG8gPT4gby52YWx1ZSA9PT0gdilcclxuICByZXR1cm4gZj8ubGFiZWwgPz8gU3RyaW5nKHYpXHJcbn1cclxuIiwiLy8gdXRpbHMudHMgKEVTTSBAYXJjZ2lzL2NvcmUpXHJcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvRmVhdHVyZUxheWVyXCJcclxuaW1wb3J0IExlZ2VuZCBmcm9tIFwiQGFyY2dpcy9jb3JlL3dpZGdldHMvTGVnZW5kXCJcclxuaW1wb3J0IENsYXNzQnJlYWtzUmVuZGVyZXIgZnJvbSBcIkBhcmNnaXMvY29yZS9yZW5kZXJlcnMvQ2xhc3NCcmVha3NSZW5kZXJlclwiXHJcbmltcG9ydCBTaW1wbGVNYXJrZXJTeW1ib2wgZnJvbSBcIkBhcmNnaXMvY29yZS9zeW1ib2xzL1NpbXBsZU1hcmtlclN5bWJvbFwiXHJcblxyXG5leHBvcnQgY29uc3QgY29yZXNUaXBvczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICBsYXRlcmFsOiBcInJnYmEoODgsIDE5LCAyNTIsIDAuNylcIixcclxuICB0ZXN0ZW11bmhvOiBcInJnYmEoMjU1LCAwLCAyNTUsIDAuNylcIixcclxuICBjYWxoYTogXCJyZ2JhKDI0NSwgMjAxLCAzOCwgMC43KVwiLFxyXG4gIHBsdWc6IFwicmdiYSgxMjUsIDI1MywgMTQ4LCAwLjcpXCIsXHJcbiAgXCJ3aG9sZSBjb3JlXCI6IFwicmdiYSgyNTUsIDQzLCAyNCwgMC43KVwiXHJcbn1cclxuXHJcbnR5cGUgR2VyYXJQYXJhbXMgPSB7XHJcbiAgamltdU1hcFZpZXc6IGFueVxyXG4gIGRhZG9zOiB7IGNvZGlnb1BvY286IG51bWJlcjsgdG90YWw6IG51bWJlciB9W11cclxuICBjb2xvckZpbGw6IHN0cmluZ1xyXG4gIGlkQ2FtYWRhOiBzdHJpbmdcclxuICBpZExlZ2VuZGE6IHN0cmluZ1xyXG4gIHRpdGxlTGVnZW5kYTogc3RyaW5nXHJcbiAgd2l0aEludGVyZXN0PzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIoe1xyXG4gIGppbXVNYXBWaWV3LCBkYWRvcywgY29sb3JGaWxsLCBpZENhbWFkYSwgaWRMZWdlbmRhLCB0aXRsZUxlZ2VuZGFcclxufTogR2VyYXJQYXJhbXMpIHtcclxuICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBbZGlzdC1lYl0gZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIgaWQ9JHtpZENhbWFkYX1gKVxyXG4gIGNvbnNvbGUudGltZShgW2Rpc3QtZWJdIHRlbXBvLXRvdGFsICR7aWRDYW1hZGF9YClcclxuICB0cnkge1xyXG4gICAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3LnZpZXdcclxuICAgIGNvbnN0IG1hcCA9IHZpZXcubWFwXHJcblxyXG4gICAgY29uc29sZS5sb2coJ1tkaXN0LWViXSBxdGQgZGFkb3MnLCBkYWRvcy5sZW5ndGgsIGRhZG9zLnNsaWNlKDAsIDEwKSlcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShkYWRvcykgfHwgZGFkb3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignW2Rpc3QtZWJdIHNlbSBkYWRvcyAtPiBuw6NvIGNyaWEgY2FtYWRhJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTm9ybWFsaXphIGxpc3RhIGRlIGPDs2RpZ29zIChhcGVuYXMgbsO6bWVyb3MpXHJcbiAgICBjb25zdCBjb2RpZ29zQXJyID0gZGFkb3MubWFwKHAgPT4gTnVtYmVyKHAuY29kaWdvUG9jbykpLmZpbHRlcih2ID0+IE51bWJlci5pc0Zpbml0ZSh2KSlcclxuICAgIGNvbnN0IGNvZGlnb3MgPSBjb2RpZ29zQXJyLmpvaW4oJywnKVxyXG4gICAgaWYgKCFjb2RpZ29zKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignW2Rpc3QtZWJdIGxpc3RhIGRlIGPDs2RpZ29zIHZhemlhIGFww7NzIG5vcm1hbGl6YcOnw6NvJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCBleHByZXNzaW9uID0gYFBPQ09fQ0RfUE9DTyBJTiAoJHtjb2RpZ29zfSlgXHJcbiAgICBjb25zb2xlLmxvZygnW2Rpc3QtZWJdIGRlZmluaXRpb25FeHByZXNzaW9uJywgZXhwcmVzc2lvbilcclxuXHJcbiAgICAvLyBMYXllciBiYXNlIGRvIHNlcnZpw6dvXHJcbiAgICBjb25zdCBjYW1hZGFQb2Nvc1NydiA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICB1cmw6ICdodHRwczovL2Jhc2VnaXMucGV0cm9icmFzLmNvbS5ici9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9FWFBMT1JBL0ZlYXR1cmVfUG9jb3MvTWFwU2VydmVyLzAnLFxyXG4gICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbjogZXhwcmVzc2lvbixcclxuICAgICAgdGl0bGU6ICdQb8Onb3MgKGJhc2UpJyxcclxuICAgICAgb3V0RmllbGRzOiBbJyonXSxcclxuICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgIH0pXHJcblxyXG4gICAgY29uc29sZS50aW1lKCdbZGlzdC1lYl0gbG9hZCBjYW1hZGFQb8Onb3MnKVxyXG4gICAgYXdhaXQgY2FtYWRhUG9jb3NTcnYubG9hZCgpXHJcbiAgICBjb25zb2xlLnRpbWVFbmQoJ1tkaXN0LWViXSBsb2FkIGNhbWFkYVBvw6dvcycpXHJcblxyXG4gICAgLy8gT0lEIHJlYWwgZG8gc2VydmnDp28gKHBvZGUgc2VyIFBPQ09fQ0RfUE9DTylcclxuICAgIGNvbnN0IG9iamVjdElkRmllbGQgPSAoY2FtYWRhUG9jb3NTcnYgYXMgYW55KS5vYmplY3RJZEZpZWxkIHx8ICdPQkpFQ1RJRCdcclxuICAgIGNvbnNvbGUubG9nKCdbZGlzdC1lYl0gb2JqZWN0SWRGaWVsZCBkbyBzZXJ2acOnbzonLCBvYmplY3RJZEZpZWxkKVxyXG5cclxuICAgIGNvbnNvbGUudGltZSgnW2Rpc3QtZWJdIHF1ZXJ5RmVhdHVyZXMnKVxyXG4gICAgY29uc3QgcXVlcnlSZXN1bHQgPSBhd2FpdCBjYW1hZGFQb2Nvc1Nydi5xdWVyeUZlYXR1cmVzKHtcclxuICAgICAgd2hlcmU6IGV4cHJlc3Npb24sXHJcbiAgICAgIG91dEZpZWxkczogWycqJ10sXHJcbiAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS50aW1lRW5kKCdbZGlzdC1lYl0gcXVlcnlGZWF0dXJlcycpXHJcbiAgICBjb25zb2xlLmxvZygnW2Rpc3QtZWJdIGZlYXR1cmVzIHJldG9ybmFkYXMnLCBxdWVyeVJlc3VsdC5mZWF0dXJlcy5sZW5ndGgpXHJcblxyXG4gICAgLy8gQXRyaWJ1aSBUT1RBTCBlIGluaWNpYWxpemEgbWRfdmFsXHJcbiAgICBjb25zdCBmZWF0dXJlcyA9IHF1ZXJ5UmVzdWx0LmZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4ge1xyXG4gICAgICBjb25zdCBjb2RpZ28gPSBOdW1iZXIoZmVhdHVyZS5hdHRyaWJ1dGVzLlBPQ09fQ0RfUE9DTylcclxuICAgICAgY29uc3QgZGFkbyA9IGRhZG9zLmZpbmQocCA9PiBwLmNvZGlnb1BvY28gPT09IGNvZGlnbylcclxuICAgICAgY29uc3QgdG90YWwgPSBkYWRvID8gTnVtYmVyKGRhZG8udG90YWwpIDogMFxyXG4gICAgICBmZWF0dXJlLmF0dHJpYnV0ZXMuUE9DT19NRF9NRVJJRF9DRU5UID0gdG90YWxcclxuICAgICAgZmVhdHVyZS5hdHRyaWJ1dGVzLm1kX3ZhbCA9IDAgLy8gdXNhZG8gcGVsb3MgYWdydXBhZG9yZXNcclxuICAgICAgcmV0dXJuIGZlYXR1cmVcclxuICAgIH0pXHJcblxyXG4gICAgLy8gRXN0YXTDrXN0aWNhIHBhcmEgY2xhc3Nlcy9idWJibGVcclxuICAgIGNvbnN0IHZhbG9yZXMgPSBkYWRvcy5tYXAocCA9PiBOdW1iZXIocC50b3RhbCkpLmZpbHRlcih2ID0+IE51bWJlci5pc0Zpbml0ZSh2KSlcclxuICAgIGxldCBtaW4gPSBNYXRoLm1pbiguLi52YWxvcmVzKVxyXG4gICAgbGV0IG1heCA9IE1hdGgubWF4KC4uLnZhbG9yZXMpXHJcbiAgICBjb25zb2xlLmxvZygnW2Rpc3QtZWJdIG1pbi9tYXggYW50ZXMnLCB7IG1pbiwgbWF4IH0pXHJcblxyXG4gICAgY29uc3QgaW5mbzogYW55W10gPSBbXVxyXG4gICAgY29uc3Qgb3V0bGluZSA9IHsgY29sb3I6IFwiYmxhY2tcIiwgd2lkdGg6IFwiMXB4XCIgfSBhcyBjb25zdFxyXG5cclxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG1pbikgfHwgIU51bWJlci5pc0Zpbml0ZShtYXgpKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignW2Rpc3QtZWJdIHZhbG9yZXMgaW52w6FsaWRvcyAtPiBuw6NvIGNyaWEgY2FtYWRhJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1pbiA9PT0gMCAmJiBtYXggPT09IDApIHtcclxuICAgICAgaW5mby5wdXNoKHtcclxuICAgICAgICBtaW5WYWx1ZTogMCwgbWF4VmFsdWU6IDAsXHJcbiAgICAgICAgbGFiZWw6IFwiTsOjbyBow6EgZGFkb3Mgc3VmaWNpZW50ZXNcIixcclxuICAgICAgICBzeW1ib2w6IG5ldyBTaW1wbGVNYXJrZXJTeW1ib2woeyBjb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCIsIHNpemU6IDAsIHN0eWxlOiBcImNpcmNsZVwiLCBvdXRsaW5lIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB6ZXJhZG9zID0gdmFsb3Jlcy5maWx0ZXIodiA9PiB2ID09PSAwKS5sZW5ndGhcclxuICAgICAgY29uc3QgbmFvWmVyYWRvcyA9IHZhbG9yZXMuZmlsdGVyKHYgPT4gdiA+IDApXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbZGlzdC1lYl0gemVyYWRvcy9uYW9aZXJhZG9zJywgeyB6ZXJhZG9zLCBuYW9aZXJhZG9zOiBuYW9aZXJhZG9zLmxlbmd0aCB9KVxyXG5cclxuICAgICAgaWYgKHplcmFkb3MgPiAwKSB7XHJcbiAgICAgICAgaW5mby5wdXNoKHtcclxuICAgICAgICAgIG1pblZhbHVlOiAwLCBtYXhWYWx1ZTogMCxcclxuICAgICAgICAgIGxhYmVsOiBgfCAwIHwgKCR7emVyYWRvc30gcG/Dp28ke3plcmFkb3MgPiAxID8gJ3MnIDogJyd9KWAsXHJcbiAgICAgICAgICBzeW1ib2w6IG5ldyBTaW1wbGVNYXJrZXJTeW1ib2woeyBjb2xvcjogXCJyZ2JhKDIwMCwyMDAsMjAwLDAuMylcIiwgc2l6ZTogNiwgc3R5bGU6IFwiY2lyY2xlXCIsIG91dGxpbmUgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBtaW4gPSBNYXRoLm1heCgxLCBtaW4pXHJcbiAgICAgIGNvbnN0IG4gPSBuYW9aZXJhZG9zLmxlbmd0aFxyXG4gICAgICBjb25zdCBudW1DbGFzc2VzID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZCgxICsgMy4zICogTWF0aC5sb2cxMChuIHx8IDEpKSlcclxuICAgICAgY29uc3QgYnJlYWtzID0gTWF0aC5jZWlsKChtYXggLSBtaW4gKyAxKSAvIE1hdGgubWF4KDEsIG51bUNsYXNzZXMpKVxyXG4gICAgICBjb25zdCBtYXhTaXplID0gNDBcclxuICAgICAgY29uc29sZS5sb2coJ1tkaXN0LWViXSBjbGFzc2VzJywgeyBudW1DbGFzc2VzLCBicmVha3MsIG1heFNpemUgfSlcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ2xhc3NlczsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbWluVmFsdWUgPSBtaW4gKyAoaSAqIGJyZWFrcylcclxuICAgICAgICBjb25zdCBtYXhWYWx1ZSA9IG1pbiArICgoaSArIDEpICogYnJlYWtzKSAtIDFcclxuICAgICAgICBpZiAobWluVmFsdWUgPiBtYXgpIGJyZWFrXHJcbiAgICAgICAgY29uc3QgY291bnQgPSBuYW9aZXJhZG9zLmZpbHRlcih2ID0+IHYgPj0gbWluVmFsdWUgJiYgdiA8PSBtYXhWYWx1ZSkubGVuZ3RoXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBgJHttaW5WYWx1ZX0gfC0tLXwgJHttYXhWYWx1ZX0gKCR7Y291bnR9IHBvw6dvJHtjb3VudCA+IDEgPyAncycgOiAnJ30pYFxyXG4gICAgICAgIGNvbnN0IHNpemUgPSA2ICsgKGkgKiAobWF4U2l6ZSAvIG51bUNsYXNzZXMpKVxyXG4gICAgICAgIGluZm8ucHVzaCh7XHJcbiAgICAgICAgICBtaW5WYWx1ZSwgbWF4VmFsdWUsIGxhYmVsLFxyXG4gICAgICAgICAgc3ltYm9sOiBuZXcgU2ltcGxlTWFya2VyU3ltYm9sKHsgY29sb3I6IGNvbG9yRmlsbCwgc2l6ZSwgc3R5bGU6IFwiY2lyY2xlXCIsIG91dGxpbmUgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgQ2xhc3NCcmVha3NSZW5kZXJlcih7XHJcbiAgICAgIGZpZWxkOiBcIlBPQ09fTURfTUVSSURfQ0VOVFwiLFxyXG4gICAgICBjbGFzc0JyZWFrSW5mb3M6IGluZm9cclxuICAgIH0pXHJcblxyXG4gICAgLy8gU2NoZW1hIGRvIGxheWVyIGNsaWVudC1zaWRlOlxyXG4gICAgLy8gLSBoZXJkYSBjYW1wb3MgZG8gc2VydmnDp29cclxuICAgIC8vIC0gcmVtb3ZlIGR1cGxpY2F0YXMgcXVlIHZhbW9zIGFkaWNpb25hclxyXG4gICAgY29uc3QgYmFzZUZpZWxkcyA9IGNhbWFkYVBvY29zU3J2LmZpZWxkcy5maWx0ZXIoZiA9PlxyXG4gICAgICBmPy5uYW1lICE9PSAnUE9DT19NRF9NRVJJRF9DRU5UJyAmJiBmPy5uYW1lICE9PSAnbWRfdmFsJ1xyXG4gICAgKVxyXG4gICAgY29uc3QgZmllbGRzID0gW1xyXG4gICAgICAuLi5iYXNlRmllbGRzLFxyXG4gICAgICB7IG5hbWU6IFwiUE9DT19NRF9NRVJJRF9DRU5UXCIsIGFsaWFzOiBcIlZhbG9yIChNaW5lcmFpcy9BbW9zdHJhcylcIiwgdHlwZTogXCJkb3VibGVcIiBhcyBjb25zdCB9LFxyXG4gICAgICB7IG5hbWU6IFwibWRfdmFsXCIsIGFsaWFzOiBcIlZhbG9yIEFncnVwYWRvclwiLCB0eXBlOiBcImRvdWJsZVwiIGFzIGNvbnN0IH1cclxuICAgIF1cclxuXHJcbiAgICAvLyBSZW1vdmUgY2FtYWRhIGFudGVyaW9yIChzZSBleGlzdGlyKVxyXG4gICAgY29uc3QgZXhpc3RlbnRlID0gbWFwLmZpbmRMYXllckJ5SWQoaWRDYW1hZGEpXHJcbiAgICBpZiAoZXhpc3RlbnRlKSB7IGNvbnNvbGUubG9nKCdbZGlzdC1lYl0gcmVtb3ZlIGNhbWFkYSBleGlzdGVudGUnLCBpZENhbWFkYSk7IG1hcC5yZW1vdmUoZXhpc3RlbnRlKSB9XHJcblxyXG4gICAgLy8gQ3JpYSBjYW1hZGEgY2xpZW50LXNpZGUgY29tIG8gT0lEIHJlYWwgZG8gc2VydmnDp29cclxuICAgIGNvbnN0IGNhbWFkYURpc3RyaWJ1aWNhbyA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICBpZDogaWRDYW1hZGEsXHJcbiAgICAgIHNvdXJjZTogZmVhdHVyZXMsXHJcbiAgICAgIGZpZWxkcyxcclxuICAgICAgb2JqZWN0SWRGaWVsZCwgLy8gPDw8IGhlcmRhZG8gZG8gc2VydmnDp28gKGV4LjogJ1BPQ09fQ0RfUE9DTycpXHJcbiAgICAgIGdlb21ldHJ5VHlwZTogXCJwb2ludFwiLFxyXG4gICAgICBzcGF0aWFsUmVmZXJlbmNlOiB2aWV3LnNwYXRpYWxSZWZlcmVuY2UgPz8geyB3a2lkOiAxMDIxMDAgfSxcclxuICAgICAgcmVuZGVyZXIsXHJcbiAgICAgIHRpdGxlOiB0aXRsZUxlZ2VuZGEsXHJcbiAgICAgIGxpc3RNb2RlOiBcImhpZGVcIixcclxuICAgICAgZmVhdHVyZVJlZHVjdGlvbjogeyB0eXBlOiBcImNsdXN0ZXJcIiwgY2x1c3Rlck1pblNpemU6IDE4LCBjbHVzdGVyTWF4U2l6ZTogNDgsIGxhYmVsc1Zpc2libGU6IGZhbHNlIH1cclxuICAgIH0pXHJcblxyXG4gICAgbWFwLmFkZChjYW1hZGFEaXN0cmlidWljYW8pXHJcbiAgICBjb25zb2xlLmxvZygnW2Rpc3QtZWJdIGNhbWFkYSBhZGljaW9uYWRhJywgaWRDYW1hZGEsICdmZWF0dXJlczonLCBmZWF0dXJlcy5sZW5ndGgpXHJcblxyXG4gICAgLy8gKE9wY2lvbmFsKSBsZWdlbmRhIG5vIG1hcGFcclxuICAgIGNvbnN0IGxlZ2VuZCA9IG5ldyBMZWdlbmQoe1xyXG4gICAgICB2aWV3LFxyXG4gICAgICBsYXllckluZm9zOiBbeyBsYXllcjogY2FtYWRhRGlzdHJpYnVpY2FvLCB0aXRsZTogdGl0bGVMZWdlbmRhIH1dXHJcbiAgICB9KVxyXG4gICAgLy8gdmlldy51aS5hZGQobGVnZW5kLCBcImJvdHRvbS1sZWZ0XCIpXHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tkaXN0LWViXSBFUlJPIGFvIGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCJywgZSlcclxuICB9IGZpbmFsbHkge1xyXG4gICAgY29uc29sZS50aW1lRW5kKGBbZGlzdC1lYl0gdGVtcG8tdG90YWwgJHtpZENhbWFkYX1gKVxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfbGF5ZXJzX0ZlYXR1cmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfcmVuZGVyZXJzX0NsYXNzQnJlYWtzUmVuZGVyZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX3N5bWJvbHNfU2ltcGxlTWFya2VyU3ltYm9sX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV93aWRnZXRzX0xlZ2VuZF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuLyoqIEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50ICovXHJcbmltcG9ydCB7IFJlYWN0LCBqc3gsIGNzcywgR2xvYmFsIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIsIGNvcmVzVGlwb3MgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQge1xyXG4gIE1JTkVSQUxfT1BUSU9OUyxcclxuICBmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzQ29udGFkb3IsXHJcbiAgZmV0Y2hNaW5lcmFsTGlzdGEsXHJcbiAgZmV0Y2hNaW5lcmFsQWdydXBhZG9yLFxyXG4gIGRlc2VuaGFyRGlzdHJpYnVpY2FvTWluZXJhaXMsXHJcbiAgYXBsaWNhckNvbG9yaXphY2FvUG9yQWdydXBhZG9yLFxyXG4gIGxhYmVsRnJvbVZhbHVlLFxyXG4gIHR5cGUgTWluZXJhbFRpcG8sXHJcbiAgdHlwZSBNaW5lcmFsTGlzdGFJdGVtXHJcbn0gZnJvbSAnLi9NaW5lcmFscydcclxuXHJcbi8qID09PT09IFRpcG9zID09PT09ICovXHJcbnR5cGUgTXNnRmFpeGFJbnRlcmVzc2UgPSB7IHR5cGU6ICdmYWl4YS1pbnRlcmVzc2UnOyBjb2RpZ29zUG9jb3M6IChudW1iZXIgfCBzdHJpbmcpW10gfVxyXG50eXBlIE1zZ0xlZ2VuZE1pbmVyYWlzID0geyB0eXBlOiAnbGVnZW5kOm1pbmVyYWlzJzsgcGF5bG9hZDogYW55IH1cclxudHlwZSBNc2dDb25maWcgPSB7IHR5cGU6ICdjb25maWcnOyBzdGFydFdpdGhJbnRlcmVzdD86IGJvb2xlYW4gfVxyXG5cclxudHlwZSBBbW9zdHJhSXRlbSA9IHtcclxuICBjb2RpZ29Qb2NvOiBudW1iZXJcclxuICB0b3RhbEFtb3N0cmFzTGF0ZXJhaXM6IG51bWJlclxyXG4gIHRvdGFsQ2FsaGFzOiBudW1iZXJcclxuICB0b3RhbFBsdWdzOiBudW1iZXJcclxuICB0b3RhbFRlc3RlbXVuaG9zOiBudW1iZXJcclxuICB0b3RhbFdob2xlQ29yZTogbnVtYmVyXHJcbn1cclxuXHJcbi8qID09PT09IENvbmZpZyA9PT09PSAqL1xyXG5jb25zdCBERUZBVUxUX0ZBSVhBX0lOVEVSRVNTRSA9IGZhbHNlXHJcblxyXG4vKiA9PT09PSBMYXlvdXQgPT09PT0gKi9cclxuY29uc3QgREVGQVVMVF9XSURUSCA9IDM2MFxyXG5jb25zdCBQQU5FTF9NQVJHSU5fVE9QID0gNTBcclxuY29uc3QgUEFORUxfTUFSR0lOX1JJR0hUID0gMTBcclxuY29uc3QgREVGQVVMVF9IRUlHSFQgPSA2NTBcclxuXHJcbi8qID09PT09IENhbXBvcyBwb3IgdGlwbyAoYW1vc3RyYXMpID09PT09ICovXHJcbmNvbnN0IFRZUEVfRklFTEQ6IFJlY29yZDxzdHJpbmcsIGtleW9mIEFtb3N0cmFJdGVtPiA9IHtcclxuICBsYXRlcmFsOiAndG90YWxBbW9zdHJhc0xhdGVyYWlzJyxcclxuICB0ZXN0ZW11bmhvOiAndG90YWxUZXN0ZW11bmhvcycsXHJcbiAgY2FsaGE6ICd0b3RhbENhbGhhcycsXHJcbiAgcGx1ZzogJ3RvdGFsUGx1Z3MnLFxyXG4gICd3aG9sZSBjb3JlJzogJ3RvdGFsV2hvbGVDb3JlJ1xyXG59XHJcbmNvbnN0IExJU1RfVFlQRVMgPSBPYmplY3Qua2V5cyhUWVBFX0ZJRUxEKVxyXG5cclxuY29uc3QgbG9nMTAgPSAoeDogbnVtYmVyKSA9PiAoTWF0aC5sb2cxMCA/IE1hdGgubG9nMTAoeCkgOiBNYXRoLmxvZyh4KSAvIE1hdGguTE4xMClcclxuXHJcbi8qID09PT09IEZldGNoIGJhc2UgKGFtb3N0cmFzKSA9PT09PSAqL1xyXG5mdW5jdGlvbiBidWlsZFNlc3Npb25Cb2R5KGZhaXhhSW50ZXJlc3NlOiBib29sZWFuKSB7XHJcbiAgY29uc3QgcCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG4gIHAuc2V0KCdoZFN5cycsICdub3ZhaW50Y29ucycpXHJcbiAgcC5zZXQoJ2hkVUMnLCAnTWFwYScpXHJcbiAgcC5zZXQoJ2hkQWNhbycsICdDYXJyZWdhck1hcGFEaXN0cmlidWljYW9BbW9zdHJhc0NvbnRhZG9yJylcclxuICBwLnNldCgnaGRTZXNzaW9uRmlsdGVyJywgJ3RydWUnKVxyXG4gIHAuc2V0KCdmYWl4YUludGVyZXNzZScsIFN0cmluZyghIWZhaXhhSW50ZXJlc3NlKSlcclxuICByZXR1cm4gcC50b1N0cmluZygpXHJcbn1cclxuZnVuY3Rpb24gbm9ybWFsaXplTGlzdChyYXc6IGFueVtdKTogQW1vc3RyYUl0ZW1bXSB7XHJcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5KHJhdykgPyByYXcgOiBbXSlcclxuICAgIC5tYXAoKHI6IGFueSkgPT4gKHtcclxuICAgICAgY29kaWdvUG9jbzogTnVtYmVyKHIuY29kaWdvUG9jbyA/PyByLlBPQ09fQ0RfUE9DTyA/PyByLnBvY28gPz8gci5jb2RpZ28gPz8gMCksXHJcbiAgICAgIHRvdGFsQW1vc3RyYXNMYXRlcmFpczogTnVtYmVyKHIudG90YWxBbW9zdHJhc0xhdGVyYWlzID8/IHIubGF0ZXJhaXMgPz8gMCksXHJcbiAgICAgIHRvdGFsQ2FsaGFzOiBOdW1iZXIoci50b3RhbENhbGhhcyA/PyByLmNhbGhhcyA/PyAwKSxcclxuICAgICAgdG90YWxQbHVnczogTnVtYmVyKHIudG90YWxQbHVncyA/PyByLnBsdWdzID8/IDApLFxyXG4gICAgICB0b3RhbFRlc3RlbXVuaG9zOiBOdW1iZXIoci50b3RhbFRlc3RlbXVuaG9zID8/IHIudGVzdGVtdW5ob3MgPz8gMCksXHJcbiAgICAgIHRvdGFsV2hvbGVDb3JlOiBOdW1iZXIoci50b3RhbFdob2xlQ29yZSA/PyByLndob2xlQ29yZSA/PyAwKVxyXG4gICAgfSkpXHJcbiAgICAuZmlsdGVyKCh4KSA9PiAhIXguY29kaWdvUG9jbylcclxufVxyXG5mdW5jdGlvbiBmZXRjaFZpYVBhcmVudChib2R5OiBzdHJpbmcpOiBQcm9taXNlPEFtb3N0cmFJdGVtW10+IHtcclxuICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbYW1vc3RyYXNdIGZldGNoVmlhUGFyZW50JylcclxuICBjb25zb2xlLmxvZygnW2Ftb3N0cmFzXSBib2R5JywgYm9keSlcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcmVxSWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKVxyXG4gICAgbGV0IHRhcmdldE9yaWdpbiA9ICcqJ1xyXG4gICAgdHJ5IHsgaWYgKGRvY3VtZW50LnJlZmVycmVyKSB0YXJnZXRPcmlnaW4gPSBuZXcgVVJMKGRvY3VtZW50LnJlZmVycmVyKS5vcmlnaW4gfSBjYXRjaCB7fVxyXG4gICAgY29uc29sZS5sb2coJ1thbW9zdHJhc10gdGFyZ2V0T3JpZ2luJywgdGFyZ2V0T3JpZ2luLCAncmVxSWQnLCByZXFJZClcclxuXHJcbiAgICBjb25zdCBvbk1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBkID0gKGV2ZW50IGFzIGFueSkuZGF0YSB8fCB7fVxyXG4gICAgICBpZiAoIWQgfHwgZC5yZXFJZCAhPT0gcmVxSWQpIHJldHVyblxyXG4gICAgICBjb25zb2xlLmxvZygnW2Ftb3N0cmFzXSByZXNwb3N0YScsIGQudHlwZSwgZClcclxuXHJcbiAgICAgIC8vIGxpbXBhIHRpbWVvdXQgZSBsaXN0ZW5lclxyXG4gICAgICB0cnkgeyBjbGVhclRpbWVvdXQodG8pIH0gY2F0Y2gge31cclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpXHJcbiAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG5cclxuICAgICAgaWYgKGQudHlwZSA9PT0gJ2ZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXM6b2snKSB7XHJcbiAgICAgICAgcmVzb2x2ZShub3JtYWxpemVMaXN0KGQucGF5bG9hZCkpXHJcbiAgICAgIH0gZWxzZSBpZiAoZC50eXBlID09PSAnZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhczplcnInKSB7XHJcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihkLm1lc3NhZ2UgfHwgJ0Vycm8gbm8gZmV0Y2ggdmlhIHBhcmVudCcpKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1Jlc3Bvc3RhIGRlc2NvbmhlY2lkYSBkbyBwYWknKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpXHJcblxyXG4gICAgY29uc3QgdG8gPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG4gICAgICBjb25zb2xlLndhcm4oJ1thbW9zdHJhc10gVElNRU9VVCBhZ3VhcmRhbmRvIHJlc3Bvc3RhIGRvIHBhaScsIHsgcmVxSWQgfSlcclxuICAgICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1RpbWVvdXQgYWd1YXJkYW5kbyByZXNwb3N0YSBkbyBwYWknKSlcclxuICAgIH0sIDIwMDAwKVxyXG5cclxuICAgIC8vIGRpc3BhcmEgcGFyYSBvIFBBSSAoRXhwbG9yYSlcclxuICAgIHdpbmRvdy5wYXJlbnQ/LnBvc3RNZXNzYWdlKHsgdHlwZTogJ2ZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXMnLCBib2R5LCByZXFJZCB9LCB0YXJnZXRPcmlnaW4pXHJcbiAgfSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzKGZhaXhhSW50ZXJlc3NlID0gZmFsc2UpOiBQcm9taXNlPEFtb3N0cmFJdGVtW10+IHtcclxuICBjb25zdCBib2R5ID0gYnVpbGRTZXNzaW9uQm9keShmYWl4YUludGVyZXNzZSlcclxuICByZXR1cm4gZmV0Y2hWaWFQYXJlbnQoYm9keSlcclxufVxyXG5cclxuLyogPT09PT0gRXN0aWxvcyA9PT09PSAqL1xyXG5jb25zdCBNQVhfQlVCQkxFID0gNDBcclxuY29uc3QgZ2xvYmFsUGFuZWxTdHlsZSA9IGNzc2BcclxuICBkaXZbcm9sZT0nZGlhbG9nJ11bYXJpYS1sYWJlbD0nbWFwYS1kZS1kaXN0cmlidWljYW8nXSxcclxuICBkaXZbcm9sZT0nZGlhbG9nJ11bYXJpYS1sYWJlbD0nbWFwYS1kZS1kaXN0cmlidWljYW8tdjInXSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIGluc2V0OiAke1BBTkVMX01BUkdJTl9UT1B9cHggJHtQQU5FTF9NQVJHSU5fUklHSFR9cHggYXV0byBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAke0RFRkFVTFRfV0lEVEh9cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogJHtERUZBVUxUX0hFSUdIVH1weCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjRweCkgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBsZWdlbmRIZWFkZXJTdHlsZSA9IGNzc2Bmb250LXdlaWdodDo2MDA7bWFyZ2luOjRweCAwO2ZvbnQtc2l6ZTouODVyZW07bGluZS1oZWlnaHQ6MS4xO2BcclxuY29uc3QgYnViYmxlQm94U3R5bGUgPSBjc3Ngd2lkdGg6JHtNQVhfQlVCQkxFfXB4O2hlaWdodDoke01BWF9CVUJCTEV9cHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1yaWdodDo4cHg7YFxyXG5jb25zdCB3cmFwcGVyU3R5bGUgPSBjc3NgcG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO2JvcmRlci1yYWRpdXM6NnB4O2JveC1zaGFkb3c6MCA0cHggMTJweCByZ2JhKDAsMCwwLC4xKTtwYWRkaW5nOjE2cHg7b3ZlcmZsb3c6aGlkZGVuO2BcclxuY29uc3QgdGl0bGVTdHlsZSA9IGNzc2Bmb250LXdlaWdodDo2MDA7bWFyZ2luLWJvdHRvbTo0cHg7ZGlzcGxheTpibG9jaztgXHJcbmNvbnN0IHNlbGVjdFN0eWxlID0gY3NzYHdpZHRoOjEwMCU7cGFkZGluZzo2cHggOHB4O21hcmdpbi1ib3R0b206MTJweDtib3JkZXI6MXB4IHNvbGlkICNjY2M7Ym9yZGVyLXJhZGl1czo0cHg7YFxyXG5cclxuLyoqIEdyaWQgdXNhZGEgcGFyYSBvcMOnw7VlcyAoYW1vc3RyYXMpIOKAkyAyIGNvbHVuYXMsIGZsdXhvIHBvciBsaW5oYXMgKG1hbnTDqW0gVGVzdGVtdW5ob3MgZGVudHJvIGRvIGJsb2NvIGNpbnphKSAqL1xyXG5jb25zdCBsaXN0U3R5bGUgPSBjc3NgXHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDE0MHB4LCAxZnIpKTtcclxuICBncmlkLWF1dG8tcm93czogbWlubWF4KDI0cHgsIGF1dG8pO1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgY29sdW1uLWdhcDogNHB4O1xyXG4gIHJvdy1nYXA6IDJweDtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbmBcclxuXHJcbi8qKiByw7N0dWxvIGNvbXBhY3RvIHNlcnZlIHBhcmEgY2hlY2tib3ggZSByYWRpbyAqL1xyXG5jb25zdCBjaGVja2JveExhYmVsU3R5bGUgPSBjc3NgXHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbHVtbi1nYXA6IDZweDtcclxuICBwYWRkaW5nOiAxcHggMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgJiA+ICogeyBtYXJnaW46IDAgIWltcG9ydGFudDsgcGFkZGluZzogMCAhaW1wb3J0YW50OyB9XHJcbiAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSwgaW5wdXRbdHlwZT0ncmFkaW8nXSB7IHdpZHRoOiAxNHB4OyBoZWlnaHQ6IDE0cHg7IG1hcmdpbjogMCAhaW1wb3J0YW50OyBmbGV4OiAwIDAgYXV0bzsgfVxyXG5cclxuICAubGJsIHsgbWluLXdpZHRoOiAwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgZm9udC1zaXplOiAuODRyZW07IGxpbmUtaGVpZ2h0OiAxLjE1OyBwYWRkaW5nLWJvdHRvbTogMXB4OyB9XHJcbmBcclxuXHJcbi8qKiBHcmlkIGRvcyByw6FkaW9zIGRlIG1pbmVyYWlzICgyIGNvbHVuYXMgLyAzIGxpbmhhcykgKi9cclxuY29uc3QgbWluZXJhbHNMaXN0U3R5bGUgPSBjc3NgXHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE0MHB4LCAxZnIpIG1pbm1heCgxNDBweCwgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtaW5tYXgoMjRweCwgYXV0bykpO1xyXG4gIGNvbHVtbi1nYXA6IDRweDtcclxuICByb3ctZ2FwOiAycHg7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG5cclxuICAvKiBEUlgtVG90YWwgKFJvdzEsIENvbDEpICovXHJcbiAgbGFiZWxbZGF0YS1rZXk9J0RSWC1UT1QnXSB7IGdyaWQtY29sdW1uOiAxOyBncmlkLXJvdzogMTsgfVxyXG4gIC8qIFFlbXNjYW4tTWFzc2EgKFJvdzEsIENvbDIpICovXHJcbiAgbGFiZWxbZGF0YS1rZXk9J01BU1NBJ10gICB7IGdyaWQtY29sdW1uOiAyOyBncmlkLXJvdzogMTsgfVxyXG4gIC8qIERSWC1BcmdpbG9taW5lcmFpcyAoUm93MiwgQ29sMSkgKi9cclxuICBsYWJlbFtkYXRhLWtleT0nRFJYLUFSRyddIHsgZ3JpZC1jb2x1bW46IDE7IGdyaWQtcm93OiAyOyB9XHJcbiAgLyogUWVtc2Nhbi3DgXJlYSAoUm93MiwgQ29sMikgKi9cclxuICBsYWJlbFtkYXRhLWtleT0nQVJFQSddICAgIHsgZ3JpZC1jb2x1bW46IDI7IGdyaWQtcm93OiAyOyB9XHJcbiAgLyogXCJUb2RhcyBhcyBBbsOhbGlzZXNcIiAoUm93Mywgb2N1cGFuZG8gMiBjb2x1bmFzKSAqL1xyXG4gIGxhYmVsW2RhdGEta2V5PSd0b2Rhc0FuYWxpc2VzJ10geyBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjsgZ3JpZC1yb3c6IDM7IH1cclxuYFxyXG5cclxuY29uc3Qgc3VtbWFyeUxpc3RTdHlsZSA9IGNzc2BtYXgtaGVpZ2h0OjMwMHB4O292ZXJmbG93LXk6YXV0bzttYXJnaW4tdG9wOjhweDtwYWRkaW5nOjhweCA4cHggMzZweDtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO2JvcmRlci1yYWRpdXM6NHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2BcclxuY29uc3Qgc3VtbWFyeUl0ZW1TdHlsZSA9IGNzc2BkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbjoycHg7YFxyXG5jb25zdCByYW5nZUxhYmVsU3R5bGUgPSBjc3NgZm9udC1zaXplOi43OHJlbTtsaW5lLWhlaWdodDoxLjE7YFxyXG5cclxuY29uc3QgZm9vdGVyU3R5bGUgPSBjc3NgcG9zaXRpb246IHN0aWNreTsgYm90dG9tOiAwOyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTsgcGFkZGluZzogNHB4IDA7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBnYXA6IDZweDtgXHJcbmNvbnN0IGZvb3RlckxhYmVsU3R5bGUgPSBjc3NgZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NnB4O3BhZGRpbmctbGVmdDouNWVtO2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZTouOXJlbTtgXHJcbmNvbnN0IGZvb3RlckxhYmVsU3R5bGVJbnRlcmVzc2UgPSBmb290ZXJMYWJlbFN0eWxlXHJcblxyXG4vKiA9PT09PSBTdW3DoXJpbyAoYW1vc3RyYXMvIG1pbmVyYWlzKSA9PT09PSAqL1xyXG5mdW5jdGlvbiBjYWxjdWxhclF1ZWJyYXMoZGFkb3M6IHsgdG90YWw6IG51bWJlciB9W10sIGNvbG9yRmlsbDogc3RyaW5nKSB7XHJcbiAgY29uc3QgdmFsb3JlcyA9IGRhZG9zLm1hcCgocCkgPT4gTnVtYmVyKHAudG90YWwpIHx8IDApXHJcbiAgbGV0IG1pbiA9IE1hdGgubWluKC4uLnZhbG9yZXMpXHJcbiAgbGV0IG1heCA9IE1hdGgubWF4KC4uLnZhbG9yZXMpXHJcblxyXG4gIGNvbnN0IGluZm86IHsgbGFiZWw6IHN0cmluZzsgc2l6ZTogbnVtYmVyOyBjb3I6IHN0cmluZzsgY291bnQ6IG51bWJlciB9W10gPSBbXVxyXG4gIGlmICghaXNGaW5pdGUobWluKSB8fCAhaXNGaW5pdGUobWF4KSkgcmV0dXJuIGluZm9cclxuXHJcbiAgaWYgKG1pbiA9PT0gMCAmJiBtYXggPT09IDApIHtcclxuICAgIGluZm8ucHVzaCh7IGxhYmVsOiAnTsOjbyBow6EgZGFkb3Mgc3VmaWNpZW50ZXMnLCBzaXplOiAwLCBjb3I6IGNvbG9yRmlsbCwgY291bnQ6IDAgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgemVyYWRvcyA9IHZhbG9yZXMuZmlsdGVyKCh2KSA9PiB2ID09PSAwKS5sZW5ndGhcclxuICAgIGNvbnN0IG5hb1plcmFkb3MgPSB2YWxvcmVzLmZpbHRlcigodikgPT4gdiA+IDApXHJcblxyXG4gICAgaWYgKHplcmFkb3MgPiAwKSB7XHJcbiAgICAgIGluZm8ucHVzaCh7IGxhYmVsOiBgfCAwIHwgKCR7emVyYWRvc30gcG/Dp28ke3plcmFkb3MgPiAxID8gJ3MnIDogJyd9KWAsIHNpemU6IDYsIGNvcjogJ3JnYmEoMjAwLDIwMCwyMDAsMC4zKScsIGNvdW50OiB6ZXJhZG9zIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbWluID0gMVxyXG4gICAgY29uc3QgbiA9IG5hb1plcmFkb3MubGVuZ3RoXHJcbiAgICBjb25zdCBudW1DbGFzc2VzID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZCgxICsgMy4zICogbG9nMTAobiB8fCAxKSkpXHJcbiAgICBjb25zdCBicmVha3MgPSBNYXRoLmNlaWwoKG1heCAtIG1pbiArIDEpIC8gTWF0aC5tYXgoMSwgbnVtQ2xhc3NlcykpXHJcbiAgICBjb25zdCBtYXhTaXplID0gTUFYX0JVQkJMRVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ2xhc3NlczsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG1pblZhbHVlID0gbWluICsgaSAqIGJyZWFrc1xyXG4gICAgICBjb25zdCBtYXhWYWx1ZSA9IG1pbiArIChpICsgMSkgKiBicmVha3MgLSAxXHJcbiAgICAgIGlmIChtaW5WYWx1ZSA+IG1heCkgYnJlYWtcclxuICAgICAgY29uc3QgY291bnQgPSBuYW9aZXJhZG9zLmZpbHRlcigodikgPT4gdiA+PSBtaW5WYWx1ZSAmJiB2IDw9IG1heFZhbHVlKS5sZW5ndGhcclxuICAgICAgY29uc3QgbGFiZWwgPSBgJHttaW5WYWx1ZX0gfC0tLXwgJHttYXhWYWx1ZX0gKCR7Y291bnR9IHBvw6dvJHtjb3VudCA+IDEgPyAncycgOiAnJ30pYFxyXG4gICAgICBjb25zdCBzaXplID0gNiArIGkgKiAobWF4U2l6ZSAvIG51bUNsYXNzZXMpXHJcbiAgICAgIGluZm8ucHVzaCh7IGxhYmVsLCBzaXplLCBjb3I6IGNvbG9yRmlsbCwgY291bnQgfSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGluZm9cclxufVxyXG5cclxuLyogPT09PT0gSGVscGVycyBkaWFsb2cvcG9zaWNpb25hbWVudG8gPT09PT0gKi9cclxuZnVuY3Rpb24gZmluZENsb3Nlc3REaWFsb2coZWw6IEhUTUxFbGVtZW50IHwgbnVsbCk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XHJcbiAgbGV0IGN1cjogSFRNTEVsZW1lbnQgfCBudWxsID0gZWxcclxuICB3aGlsZSAoY3VyKSB7IGlmIChjdXIuZ2V0QXR0cmlidXRlICYmIGN1ci5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ2RpYWxvZycpIHJldHVybiBjdXI7IGN1ciA9IGN1cj8ucGFyZW50RWxlbWVudCA/PyBudWxsIH1cclxuICByZXR1cm4gbnVsbFxyXG59XHJcbmZ1bmN0aW9uIGlzRGlhbG9nSGlkZGVuKGRsZzogSFRNTEVsZW1lbnQpIHtcclxuICBjb25zdCBjcyA9IGdldENvbXB1dGVkU3R5bGUoZGxnKVxyXG4gIHJldHVybiBkbGcuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpID09PSAndHJ1ZScgfHwgY3MuZGlzcGxheSA9PT0gJ25vbmUnIHx8IGNzLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nXHJcbn1cclxubGV0IF9hcHBseWluZ1N0eWxlID0gZmFsc2VcclxuZnVuY3Rpb24gZm9yY2VQYW5lbFN0eWxlKGRsZzogSFRNTEVsZW1lbnQpIHtcclxuICBpZiAoX2FwcGx5aW5nU3R5bGUpIHJldHVyblxyXG4gIF9hcHBseWluZ1N0eWxlID0gdHJ1ZVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzID0gZGxnLnN0eWxlXHJcbiAgICBpZiAocy5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpICE9PSAnYWJzb2x1dGUnKSBzLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdhYnNvbHV0ZScsICdpbXBvcnRhbnQnKVxyXG4gICAgcy5yZW1vdmVQcm9wZXJ0eSgnbGVmdCcpOyBzLnJlbW92ZVByb3BlcnR5KCdib3R0b20nKTsgcy5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJylcclxuICAgIHMuc2V0UHJvcGVydHkoJ2luc2V0JywgJ2F1dG8gYXV0byBhdXRvIGF1dG8nKVxyXG4gICAgcy5zZXRQcm9wZXJ0eSgndG9wJywgYCR7UEFORUxfTUFSR0lOX1RPUH1weGAsICdpbXBvcnRhbnQnKVxyXG4gICAgcy5zZXRQcm9wZXJ0eSgncmlnaHQnLCBgJHtQQU5FTF9NQVJHSU5fUklHSFR9cHhgLCAnaW1wb3J0YW50JylcclxuICAgIGlmIChzLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJykgIT09IGAke0RFRkFVTFRfV0lEVEh9cHhgKSBzLnNldFByb3BlcnR5KCd3aWR0aCcsIGAke0RFRkFVTFRfV0lEVEh9cHhgLCAnaW1wb3J0YW50JylcclxuICAgIGlmIChzLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpICE9PSBgJHtERUZBVUxUX0hFSUdIVH1weGApIHMuc2V0UHJvcGVydHkoJ2hlaWdodCcsIGAke0RFRkFVTFRfSEVJR0hUfXB4YCwgJ2ltcG9ydGFudCcpXHJcbiAgICBpZiAocy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXgtaGVpZ2h0JykgIT09ICdjYWxjKDEwMCUgLSAyNHB4KScpIHMuc2V0UHJvcGVydHkoJ21heC1oZWlnaHQnLCAnY2FsYygxMDAlIC0gMjRweCknLCAnaW1wb3J0YW50JylcclxuICAgIGlmIChzLmdldFByb3BlcnR5VmFsdWUoJ292ZXJmbG93JykgIT09ICd2aXNpYmxlJykgcy5zZXRQcm9wZXJ0eSgnb3ZlcmZsb3cnLCAndmlzaWJsZScsICdpbXBvcnRhbnQnKVxyXG4gICAgaWYgKHMuZ2V0UHJvcGVydHlWYWx1ZSgnei1pbmRleCcpICE9PSAnOTk5OScpIHMuc2V0UHJvcGVydHkoJ3otaW5kZXgnLCAnOTk5OScsICdpbXBvcnRhbnQnKVxyXG4gIH0gZmluYWxseSB7IF9hcHBseWluZ1N0eWxlID0gZmFsc2UgfVxyXG59XHJcbmZ1bmN0aW9uIHVzZUZvcmNlUmlnaHRQb3NpdGlvbihyb290UmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+KSB7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjbGVhbnVwOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbFxyXG4gICAgY29uc3QgYXBwbHkgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRsZyA9XHJcbiAgICAgICAgKHJvb3RSZWYuY3VycmVudCAmJiAocm9vdFJlZi5jdXJyZW50LmNsb3Nlc3QoJ1tyb2xlPVwiZGlhbG9nXCJdJykgYXMgSFRNTEVsZW1lbnQpKSB8fFxyXG4gICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXZbcm9sZT1cImRpYWxvZ1wiXVthcmlhLWxhYmVsPVwibWFwYS1kZS1kaXN0cmlidWljYW8tdjJcIl0nKSBhcyBIVE1MRWxlbWVudCkgfHxcclxuICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2W3JvbGU9XCJkaWFsb2dcIl1bYXJpYS1sYWJlbD1cIm1hcGEtZGUtZGlzdHJpYnVpY2FvXCJdJykgYXMgSFRNTEVsZW1lbnQpXHJcbiAgICAgIGlmICghZGxnKSByZXR1cm5cclxuICAgICAgZm9yY2VQYW5lbFN0eWxlKGRsZylcclxuICAgICAgY29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgaWYgKF9hcHBseWluZ1N0eWxlKSByZXR1cm5cclxuICAgICAgICBpZiAobXV0YXRpb25zLnNvbWUoKG0pID0+IG0uYXR0cmlidXRlTmFtZSA9PT0gJ3N0eWxlJykpIHtcclxuICAgICAgICAgIGNvbnN0IHMgPSBkbGcuc3R5bGVcclxuICAgICAgICAgIGNvbnN0IGRyaWZ0ID0gcy5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpICE9PSAnYWJzb2x1dGUnXHJcbiAgICAgICAgICAgIHx8IHMuZ2V0UHJvcGVydHlWYWx1ZSgndG9wJykgIT09IGAke1BBTkVMX01BUkdJTl9UT1B9cHhgXHJcbiAgICAgICAgICAgIHx8IHMuZ2V0UHJvcGVydHlWYWx1ZSgncmlnaHQnKSAhPT0gYCR7UEFORUxfTUFSR0lOX1JJR0hUfXB4YFxyXG4gICAgICAgICAgICB8fCAocy50cmFuc2Zvcm0gJiYgcy50cmFuc2Zvcm0gIT09ICdub25lJylcclxuICAgICAgICAgIGlmIChkcmlmdCkgZm9yY2VQYW5lbFN0eWxlKGRsZylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIG1vLm9ic2VydmUoZGxnLCB7IGF0dHJpYnV0ZXM6IHRydWUsIGF0dHJpYnV0ZUZpbHRlcjogWydzdHlsZSddIH0pXHJcbiAgICAgIGxldCB0bzogYW55XHJcbiAgICAgIGNvbnN0IG9uUmVzaXplID0gKCkgPT4geyBjbGVhclRpbWVvdXQodG8pOyB0byA9IHNldFRpbWVvdXQoKCkgPT4gZm9yY2VQYW5lbFN0eWxlKGRsZyksIDgwKSB9XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSlcclxuICAgICAgY2xlYW51cCA9ICgpID0+IHsgbW8uZGlzY29ubmVjdCgpOyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpIH1cclxuICAgIH1cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhcHBseSk7IHNldFRpbWVvdXQoYXBwbHksIDgwKTsgc2V0VGltZW91dChhcHBseSwgMzAwKVxyXG4gICAgcmV0dXJuICgpID0+IHsgY2xlYW51cD8uKCkgfVxyXG4gIH0sIFtyb290UmVmXSlcclxufVxyXG5cclxuY29uc3QgbGF5ZXJJZEZvclNhbXBsZSA9ICh0aXBvOiBzdHJpbmcpID0+IGBhbW9zdHJhc18ke3RpcG8ucmVwbGFjZSgvXFxzKy9nLCAnXycpfWBcclxuZnVuY3Rpb24gY2xlYXJBbW9zdHJhcyh2aWV3OiBfX2VzcmkuVmlldykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhbGwgPSAodmlldy5tYXAgYXMgYW55KS5hbGxMYXllcnM/LnRvQXJyYXk/LigpID8/IHZpZXcubWFwLmxheWVycz8udG9BcnJheT8uKCkgPz8gW11cclxuICAgIGFsbC5mb3JFYWNoKChseTogYW55KSA9PiB7IGNvbnN0IGlkID0gU3RyaW5nKGx5Py5pZCA/PyAnJyk7IGlmIChpZC5zdGFydHNXaXRoKCdhbW9zdHJhc18nKSkgdmlldy5tYXAucmVtb3ZlKGx5KSB9KVxyXG4gIH0gY2F0Y2gge31cclxufVxyXG5mdW5jdGlvbiBjbGVhckxheWVyT2ZUaXBvKHZpZXc6IF9fZXNyaS5WaWV3LCB0aXBvOiBzdHJpbmcpIHtcclxuICB0cnkgeyBjb25zdCBseXIgPSB2aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVySWRGb3JTYW1wbGUodGlwbykpIGFzIGFueTsgaWYgKGx5cikgdmlldy5tYXAucmVtb3ZlKGx5cikgfSBjYXRjaCB7fVxyXG59XHJcbmZ1bmN0aW9uIGRpc2FibGVDbHVzdGVyTnVtYmVycyhseXI6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWx5cikgcmV0dXJuXHJcbiAgICBpZiAobHlyLmZlYXR1cmVSZWR1Y3Rpb24gJiYgbHlyLmZlYXR1cmVSZWR1Y3Rpb24udHlwZSA9PT0gJ2NsdXN0ZXInKSB7XHJcbiAgICAgIGx5ci5mZWF0dXJlUmVkdWN0aW9uID0geyAuLi5seXIuZmVhdHVyZVJlZHVjdGlvbiwgbGFiZWxzVmlzaWJsZTogZmFsc2UgfVxyXG4gICAgfVxyXG4gICAgaWYgKCdsYWJlbHNWaXNpYmxlJyBpbiBseXIpIChseXIgYXMgYW55KS5sYWJlbHNWaXNpYmxlID0gZmFsc2VcclxuICAgIGlmICgnbGFiZWxpbmdJbmZvJyBpbiBseXIpIChseXIgYXMgYW55KS5sYWJlbGluZ0luZm8gPSBbXVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoKGx5ciBhcyBhbnkpLnN1YmxheWVycykpIChseXIgYXMgYW55KS5zdWJsYXllcnMuZm9yRWFjaCgoc2w6IGFueSkgPT4gZGlzYWJsZUNsdXN0ZXJOdW1iZXJzKHNsKSlcclxuICB9IGNhdGNoIHt9XHJcbn1cclxuXHJcbi8qID09PT09IENvbXBvbmVudGUgPT09PT0gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0KHByb3BzOiBhbnkpIHtcclxuICBjb25zdCBbamltdU1hcFZpZXcsIHNldEppbXVNYXBWaWV3XSA9IFJlYWN0LnVzZVN0YXRlPEppbXVNYXBWaWV3PigpXHJcbiAgY29uc3QgW2NhdGVnb3JpYSwgc2V0Q2F0ZWdvcmlhXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpIC8vICdzYW1wbGUnIHwgJ21pbmVyYWxzJ1xyXG4gIGNvbnN0IFt0aXBvc1NlbCwgc2V0VGlwb3NTZWxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKSAvLyBhbW9zdHJhcyAoY2hlY2tib3hlcylcclxuICBjb25zdCBbc2hvd0VtcHR5LCBzZXRTaG93RW1wdHldID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG4gIC8vIEludGVyZXNzZVxyXG4gIGNvbnN0IFt3aXRoSW50ZXJlc3QsIHNldFdpdGhJbnRlcmVzdF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBbc2hvd1dpdGhJbnRlcmVzdCwgc2V0c2hvd1dpdGhJbnRlcmVzdF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBbZmFpeGFTZXQsIHNldEZhaXhhU2V0XSA9IFJlYWN0LnVzZVN0YXRlPFNldDxudW1iZXI+PihcclxuICAgICgpID0+IG5ldyBTZXQ8bnVtYmVyPigoQXJyYXkuaXNBcnJheShwcm9wcz8uY29kaWdvc0ZhaXhhSW50ZXJlc3NlKSA/IHByb3BzLmNvZGlnb3NGYWl4YUludGVyZXNzZSA6IFtdKVxyXG4gICAgICAubWFwKCh2OiBhbnkpID0+IE51bWJlcih2KSkuZmlsdGVyKCh2OiBhbnkpID0+ICFpc05hTih2KSkpXHJcbiAgKVxyXG5cclxuICAvLyBCYXNlcyAoYW1vc3RyYXMpXHJcbiAgY29uc3QgW2RhZG9zRnVsbCwgc2V0RGFkb3NGdWxsXSA9IFJlYWN0LnVzZVN0YXRlPEFtb3N0cmFJdGVtW10gfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFtkYWRvc0ZhaXhhQVBJLCBzZXREYWRvc0ZhaXhhQVBJXSA9IFJlYWN0LnVzZVN0YXRlPEFtb3N0cmFJdGVtW10gfCBudWxsPihudWxsKVxyXG5cclxuICAvLyBNaW5lcmFpc1xyXG4gIGNvbnN0IFttaW5lcmFsQW5hbGlzZSwgc2V0TWluZXJhbEFuYWxpc2VdID0gUmVhY3QudXNlU3RhdGU8TWluZXJhbFRpcG8gfCAnJz4oJycpIC8vIHLDoWRpbyAoRFJYL1FlbXNjYW4vVG9kYXMpXHJcbiAgY29uc3QgW2xpc3RhTWluZXJhaXMsIHNldExpc3RhTWluZXJhaXNdID0gUmVhY3QudXNlU3RhdGU8TWluZXJhbExpc3RhSXRlbVtdPihbXSlcclxuICBjb25zdCBbYnVzY2FNaW5lcmFsLCBzZXRCdXNjYU1pbmVyYWxdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW21pbmVyYWxTZWxlY2lvbmFkbywgc2V0TWluZXJhbFNlbGVjaW9uYWRvXSA9IFJlYWN0LnVzZVN0YXRlPE1pbmVyYWxMaXN0YUl0ZW0gfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFthZ3J1cGFkb3IsIHNldEFncnVwYWRvcl0gPSBSZWFjdC51c2VTdGF0ZTwnYW5hbGlzZScgfCAnbWVkaWEnIHwgJ21heGltYScgfCAnJz4oJycpIC8vIGFncnVwYWRvcmVzXHJcbiAgY29uc3QgW2RhZG9zTWluZXJhaXMsIHNldERhZG9zTWluZXJhaXNdID0gUmVhY3QudXNlU3RhdGU8aW1wb3J0KCcuL01pbmVyYWxzJykuTWluZXJhbEl0ZW1bXSB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW2xvYWRpbmdNaW5lcmFpcywgc2V0TG9hZGluZ01pbmVyYWlzXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtlcnJvck1pbmVyYWlzLCBzZXRFcnJvck1pbmVyYWlzXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG5cclxuICAvLyBMb2FkaW5nIC8gZXJyb3MgKGFtb3N0cmFzKVxyXG4gIGNvbnN0IFtsb2FkaW5nRnVsbCwgc2V0TG9hZGluZ0Z1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2xvYWRpbmdJbnRlcmVzdCwgc2V0TG9hZGluZ0ludGVyZXN0XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtlcnJvckZ1bGwsIHNldEVycm9yRnVsbF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKVxyXG4gIGNvbnN0IFtlcnJvckludGVyZXN0LCBzZXRFcnJvckludGVyZXN0XSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpXHJcblxyXG4gIGNvbnN0IHJvb3RSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXHJcbiAgdXNlRm9yY2VSaWdodFBvc2l0aW9uKHJvb3RSZWYpXHJcblxyXG4gIGNvbnN0IGludGVyZXN0TWFudWFsUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKVxyXG5cclxuICAvKiA+Pj4gU2luYWxpemEgYW8gUEFJIHF1ZSBvIHdpZGdldCBlc3TDoSBwcm9udG8gKHBhcmEgZWxlIG1hbmRhciBjb2RpZ29zL2NvbmZpZykgKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRhcmdldE9yaWdpbiA9ICcqJ1xyXG4gICAgdHJ5IHsgaWYgKGRvY3VtZW50LnJlZmVycmVyKSB0YXJnZXRPcmlnaW4gPSBuZXcgVVJMKGRvY3VtZW50LnJlZmVycmVyKS5vcmlnaW4gfSBjYXRjaCB7fVxyXG4gICAgLy8gYXZpc2EgcXVlIG8gd2lkZ2V0IGVzdMOhIHByb250b1xyXG4gICAgd2luZG93LnBhcmVudD8ucG9zdE1lc3NhZ2UoeyB0eXBlOiAnd2lkZ2V0UmVhZHknIH0sIHRhcmdldE9yaWdpbilcclxuICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XSB3aWRnZXRSZWFkeSBlbnZpYWRvIHBhcmEnLCB0YXJnZXRPcmlnaW4pXHJcbiAgfSwgW10pXHJcblxyXG4gIC8qIFJlY2ViZSBtZW5zYWdlbnMgZG8gUEFJIChmYWl4YS1pbnRlcmVzc2UsIGxlZ2VuZDptaW5lcmFpcywgY29uZmlnKSAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvbk1zZyA9IChldjogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBldj8uZGF0YSBhcyBhbnlcclxuICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLnR5cGUpIHJldHVyblxyXG5cclxuICAgICAgaWYgKGRhdGEudHlwZSA9PT0gJ2ZhaXhhLWludGVyZXNzZScgJiYgQXJyYXkuaXNBcnJheSgoZGF0YSBhcyBNc2dGYWl4YUludGVyZXNzZSkuY29kaWdvc1BvY29zKSkge1xyXG4gICAgICAgIGNvbnN0IG51bXMgPSAoZGF0YSBhcyBNc2dGYWl4YUludGVyZXNzZSkuY29kaWdvc1BvY29zLm1hcCgodikgPT4gTnVtYmVyKHYpKS5maWx0ZXIoKHYpID0+ICFpc05hTih2KSlcclxuICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF0gZmFpeGEtaW50ZXJlc3NlIHJlY2ViaWRhJywgbnVtcy5sZW5ndGgsIG51bXMuc2xpY2UoMCwgMTApKVxyXG4gICAgICAgIHNldEZhaXhhU2V0KG5ldyBTZXQ8bnVtYmVyPihudW1zKSlcclxuICAgICAgICBpZiAobnVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBzZXRzaG93V2l0aEludGVyZXN0KHRydWUpXHJcbiAgICAgICAgICBpZiAoIWludGVyZXN0TWFudWFsUmVmLmN1cnJlbnQpIHNldFdpdGhJbnRlcmVzdCh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGRhdGEudHlwZSA9PT0gJ2NvbmZpZycpIHtcclxuICAgICAgICBjb25zdCBjZmcgPSBkYXRhIGFzIE1zZ0NvbmZpZ1xyXG4gICAgICAgIGlmIChjZmcuc3RhcnRXaXRoSW50ZXJlc3QpIHtcclxuICAgICAgICAgIHNldHNob3dXaXRoSW50ZXJlc3QodHJ1ZSlcclxuICAgICAgICAgIGlmICghaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudCkgc2V0V2l0aEludGVyZXN0KHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XSBjb25maWcgcmVjZWJpZGEnLCBjZmcpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE9wY2lvbmFsOiBzZSBmdXR1cmFtZW50ZSBxdWlzZXIgcmVuZGVyaXphciBsZWdlbmRhIHZpbmRhIGRvIHBhaVxyXG4gICAgICBpZiAoZGF0YS50eXBlID09PSAnbGVnZW5kOm1pbmVyYWlzJykge1xyXG4gICAgICAgIGNvbnN0IF9tc2cgPSBkYXRhIGFzIE1zZ0xlZ2VuZE1pbmVyYWlzXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdIGxlZ2VuZDptaW5lcmFpcyByZWNlYmlkYScsIF9tc2c/LnBheWxvYWQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Nc2cpXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1zZylcclxuICB9LCBbXSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChmYWl4YVNldC5zaXplID4gMCkge1xyXG4gICAgICBzZXRzaG93V2l0aEludGVyZXN0KHRydWUpXHJcbiAgICAgIGlmICghaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudCkgc2V0V2l0aEludGVyZXN0KHRydWUpXHJcbiAgICB9XHJcbiAgfSwgW2ZhaXhhU2V0XSlcclxuXHJcbiAgLyogPT09PT09IEFNT1NUUkFTOiBjYXJyZWdhciBiYXNlID09PT09PSAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnW3dpZGdldF0gZWZlaXRvIGFtb3N0cmFzOmNhcnJlZ2FyIGJhc2UnKVxyXG4gICAgICBjb25zb2xlLmxvZyh7IGNhdGVnb3JpYSwgd2l0aEludGVyZXN0IH0pXHJcbiAgICAgIGlmIChjYXRlZ29yaWEgIT09ICdzYW1wbGUnKSB7IGNvbnNvbGUubG9nKCdza2lwJyk7IGNvbnNvbGUuZ3JvdXBFbmQoKTsgcmV0dXJuIH1cclxuICAgICAgc2V0TG9hZGluZ0Z1bGwodHJ1ZSk7IHNldEVycm9yRnVsbCgnJylcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcyh3aXRoSW50ZXJlc3QgfHwgREVGQVVMVF9GQUlYQV9JTlRFUkVTU0UpXHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHsgc2V0RGFkb3NGdWxsKGRhdGEpOyBjb25zb2xlLmxvZygnW3dpZGdldF0gYW1vc3RyYXMgYmFzZScsIGRhdGE/Lmxlbmd0aCkgfVxyXG4gICAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbd2lkZ2V0XSBlcnJvIGJhc2UgYW1vc3RyYXMnLCBlKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7IHNldEVycm9yRnVsbChlPy5tZXNzYWdlIHx8ICdGYWxoYSBhbyBidXNjYXIgZGFkb3MnKTsgc2V0RGFkb3NGdWxsKFtdKSB9XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHsgc2V0TG9hZGluZ0Z1bGwoZmFsc2UpOyBjb25zb2xlLmdyb3VwRW5kKCkgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBydW4oKVxyXG4gICAgcmV0dXJuICgpID0+IHsgY2FuY2VsbGVkID0gdHJ1ZSB9XHJcbiAgfSwgW2NhdGVnb3JpYSwgd2l0aEludGVyZXN0XSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbd2lkZ2V0XSBlZmVpdG8gYW1vc3RyYXM6Y2FycmVnYXIgZmFpeGEgQVBJJylcclxuICAgICAgY29uc29sZS5sb2coeyBjYXRlZ29yaWEsIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXRTaXplOiBmYWl4YVNldC5zaXplLCBoYXNEYWRvc0ZhaXhhQVBJOiBkYWRvc0ZhaXhhQVBJICE9PSBudWxsIH0pXHJcbiAgICAgIGlmIChjYXRlZ29yaWEgIT09ICdzYW1wbGUnKSB7IGNvbnNvbGUubG9nKCdza2lwIGNhdGVnb3JpYScpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcbiAgICAgIGlmICghd2l0aEludGVyZXN0KSB7IGNvbnNvbGUubG9nKCdza2lwIHNlbSBpbnRlcmVzc2UnKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG4gICAgICBpZiAoZmFpeGFTZXQuc2l6ZSA+IDApIHsgY29uc29sZS5sb2coJ3NraXAgZmFpeGEgdmluZGEgZG8gcGFpJyk7IGNvbnNvbGUuZ3JvdXBFbmQoKTsgcmV0dXJuIH1cclxuICAgICAgaWYgKGRhZG9zRmFpeGFBUEkgIT09IG51bGwpIHsgY29uc29sZS5sb2coJ3NraXAgasOhIGNhcnJlZ2FkbycpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcbiAgICAgIHNldExvYWRpbmdJbnRlcmVzdCh0cnVlKTsgc2V0RXJyb3JJbnRlcmVzdCgnJylcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcyh0cnVlKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7IHNldERhZG9zRmFpeGFBUEkoZGF0YSk7IGNvbnNvbGUubG9nKCdbd2lkZ2V0XSBhbW9zdHJhcyBmYWl4YSBBUEknLCBkYXRhPy5sZW5ndGgpIH1cclxuICAgICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW3dpZGdldF0gZXJybyBmYWl4YSBBUEknLCBlKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7IHNldEVycm9ySW50ZXJlc3QoZT8ubWVzc2FnZSB8fCAnRmFsaGEgYW8gYnVzY2FyIGRhZG9zIGRvIGludGVydmFsbyBkZSBpbnRlcmVzc2UnKTsgc2V0RGFkb3NGYWl4YUFQSShbXSkgfVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7IHNldExvYWRpbmdJbnRlcmVzdChmYWxzZSk7IGNvbnNvbGUuZ3JvdXBFbmQoKSB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJ1bigpXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbY2F0ZWdvcmlhLCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0LCBkYWRvc0ZhaXhhQVBJXSlcclxuXHJcbiAgLyogPT09PT09IEFNT1NUUkFTOiBkZXNlbmhhciA9PT09PT0gKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnW3dpZGdldF0gZWZlaXRvIGFtb3N0cmFzOmRlc2VuaGFyJylcclxuICAgIGNvbnN0IGptdiA9IGppbXVNYXBWaWV3XHJcbiAgICBpZiAoIWptdj8udmlldykgeyBjb25zb2xlLmxvZygnc2tpcCBzZW0gdmlldycpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcbiAgICBpZiAoY2F0ZWdvcmlhICE9PSAnc2FtcGxlJykgeyBjb25zb2xlLmxvZygnc2tpcCBjYXRlZ29yaWEnKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG5cclxuICAgIGNvbnN0IGJhc2U6IEFtb3N0cmFJdGVtW10gPSB3aXRoSW50ZXJlc3RcclxuICAgICAgPyAoZmFpeGFTZXQuc2l6ZSA+IDBcclxuICAgICAgICAgID8gKGRhZG9zRnVsbCA/PyBbXSkuZmlsdGVyKHggPT4gZmFpeGFTZXQuaGFzKE51bWJlcih4LmNvZGlnb1BvY28pKSlcclxuICAgICAgICAgIDogKGRhZG9zRmFpeGFBUEkgPz8gZGFkb3NGdWxsID8/IFtdKSlcclxuICAgICAgOiAoZGFkb3NGdWxsID8/IFtdKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XSBiYXNlIHNpemUnLCBiYXNlLmxlbmd0aCwgJ3RpcG9zU2VsJywgdGlwb3NTZWwpXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYmFzZSkgfHwgYmFzZS5sZW5ndGggPT09IDApIHsgY29uc29sZS5sb2coJ3NraXAgYmFzZSB2YXppYScpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGlwb3NTZWwpIHx8IHRpcG9zU2VsLmxlbmd0aCA9PT0gMCkgeyBjb25zb2xlLmxvZygnc2tpcCBzZW0gdGlwb3MnKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG5cclxuICAgIGNvbnN0IHsgdmlldyB9ID0gam12XHJcblxyXG4gICAgdGlwb3NTZWwuZm9yRWFjaCgodGlwbykgPT4ge1xyXG4gICAgICBjb25zdCBkYWRvcyA9IGJhc2VcclxuICAgICAgICAubWFwKGQgPT4gKHsgY29kaWdvUG9jbzogZC5jb2RpZ29Qb2NvLCB0b3RhbDogZFtUWVBFX0ZJRUxEW3RpcG9dXSA/PyAwIH0pKVxyXG4gICAgICAgIC5maWx0ZXIoZCA9PiAoZC50b3RhbCA/PyAwKSA+IDApXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhgW3dpZGdldF0gdGlwbz0ke3RpcG99IGRhZG9zYCwgZGFkb3MubGVuZ3RoKVxyXG5cclxuICAgICAgY2xlYXJMYXllck9mVGlwbyh2aWV3LCB0aXBvKVxyXG4gICAgICBpZiAoZGFkb3MubGVuZ3RoID09PSAwKSByZXR1cm5cclxuXHJcbiAgICAgIGNvbnN0IGNvbG9yRmlsbCA9IGNvcmVzVGlwb3NbdGlwb10gfHwgJ3JnYmEoMCwwLDAsMC41KSdcclxuICAgICAgY29uc3QgaWRDYW1hZGEgPSBsYXllcklkRm9yU2FtcGxlKHRpcG8pXHJcbiAgICAgIGNvbnN0IGlkTGVnZW5kYSA9IGBsZ2RfJHtpZENhbWFkYX1gXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCKHtcclxuICAgICAgICAgIGppbXVNYXBWaWV3OiBqbXYsXHJcbiAgICAgICAgICBkYWRvcyxcclxuICAgICAgICAgIGNvbG9yRmlsbCxcclxuICAgICAgICAgIGlkQ2FtYWRhLFxyXG4gICAgICAgICAgaWRMZWdlbmRhLFxyXG4gICAgICAgICAgdGl0bGVMZWdlbmRhOiAod2l0aEludGVyZXN0ID8gJ0ludGVydmFsbyBkZSBJbnRlcmVzc2UgLSAnIDogJycpICsgKHRpcG8uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aXBvLnNsaWNlKDEpKSxcclxuICAgICAgICAgIHdpdGhJbnRlcmVzdFxyXG4gICAgICAgIH0gYXMgYW55KVxyXG5cclxuICAgICAgICBjb25zdCBseXIgPSB2aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGlkQ2FtYWRhKSBhcyBhbnlcclxuICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF0gY2FtYWRhIGNyaWFkYT8nLCAhIWx5ciwgaWRDYW1hZGEpXHJcbiAgICAgICAgaWYgKGx5cikgZGlzYWJsZUNsdXN0ZXJOdW1iZXJzKGx5cilcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFthbW9zdHJhc10gZmFsaGEgYW8gZ2VyYXIgY2FtYWRhICR7aWRDYW1hZGF9YCwgZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gIH0sIFtqaW11TWFwVmlldywgdGlwb3NTZWwsIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXQsIGRhZG9zRnVsbCwgZGFkb3NGYWl4YUFQSSwgY2F0ZWdvcmlhXSlcclxuXHJcbiAgLyogPT09PT09IE1JTkVSQUlTOiBhbyBtdWRhciBvIHJhZGlvIGRlIGFuw6FsaXNlIC0+IGJ1c2NhIENPTlRBRE9SIGUgTElTVEEgPT09PT09ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbd2lkZ2V0XSBlZmVpdG8gbWluZXJhaXM6cmFkaW8nKVxyXG4gICAgICBjb25zb2xlLmxvZyh7IGNhdGVnb3JpYSwgbWluZXJhbEFuYWxpc2UsIHdpdGhJbnRlcmVzdCB9KVxyXG4gICAgICBpZiAoY2F0ZWdvcmlhICE9PSAnbWluZXJhbHMnKSB7IGNvbnNvbGUubG9nKCdza2lwIGNhdGVnb3JpYScpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcbiAgICAgIGlmICghbWluZXJhbEFuYWxpc2UpIHsgY29uc29sZS5sb2coJ3NraXAgc2VtIGFuYWxpc2UnKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG5cclxuICAgICAgLy8gcmVzZXQgVUkgZGVwZW5kZW50ZVxyXG4gICAgICBzZXRNaW5lcmFsU2VsZWNpb25hZG8obnVsbClcclxuICAgICAgc2V0QWdydXBhZG9yKCcnKVxyXG4gICAgICBzZXRMaXN0YU1pbmVyYWlzKFtdKVxyXG4gICAgICBzZXRCdXNjYU1pbmVyYWwoJycpXHJcbiAgICAgIHNldEVycm9yTWluZXJhaXMoJycpXHJcbiAgICAgIHNldExvYWRpbmdNaW5lcmFpcyh0cnVlKVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBbY29udGFkb3IsIGxpc3RhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgIGZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXNDb250YWRvcihtaW5lcmFsQW5hbGlzZSBhcyBNaW5lcmFsVGlwbywgd2l0aEludGVyZXN0KSxcclxuICAgICAgICAgIGZldGNoTWluZXJhbExpc3RhKG1pbmVyYWxBbmFsaXNlIGFzIE1pbmVyYWxUaXBvLCB3aXRoSW50ZXJlc3QpXHJcbiAgICAgICAgXSlcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdIGNvbnRhZG9yLyBsaXN0YSByZWNlYmlkb3MnLCBjb250YWRvcj8ubGVuZ3RoLCBsaXN0YT8ubGVuZ3RoKVxyXG4gICAgICAgICAgc2V0RGFkb3NNaW5lcmFpcyhjb250YWRvcilcclxuICAgICAgICAgIHNldExpc3RhTWluZXJhaXMobGlzdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbd2lkZ2V0XSBlcnJvIGZldGNoIG1pbmVyYWlzJywgZSlcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgc2V0RXJyb3JNaW5lcmFpcyhlPy5tZXNzYWdlIHx8ICdGYWxoYSBhbyBidXNjYXIgbWluZXJhaXMnKVxyXG4gICAgICAgICAgc2V0RGFkb3NNaW5lcmFpcyhbXSlcclxuICAgICAgICAgIHNldExpc3RhTWluZXJhaXMoW10pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7IHNldExvYWRpbmdNaW5lcmFpcyhmYWxzZSk7IGNvbnNvbGUuZ3JvdXBFbmQoKSB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJ1bigpXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbY2F0ZWdvcmlhLCBtaW5lcmFsQW5hbGlzZSwgd2l0aEludGVyZXN0XSlcclxuXHJcbiAgLyogPT09PT09IE1JTkVSQUlTOiBkZXNlbmhhciBiYXNlIChjb250YWRvcikgcXVhbmRvIGNoZWdhID09PT09PSAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbd2lkZ2V0XSBlZmVpdG8gbWluZXJhaXM6ZGVzZW5oYXIgYmFzZScpXHJcbiAgICBjb25zb2xlLmxvZyh7IGNhdGVnb3JpYSwgaGFzSk1WOiAhIWppbXVNYXBWaWV3Py52aWV3LCBtaW5lcmFsQW5hbGlzZSwgZGFkb3NNaW5lcmFpc0xlbjogZGFkb3NNaW5lcmFpcz8ubGVuZ3RoLCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0U2l6ZTogZmFpeGFTZXQuc2l6ZSB9KVxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGNhdGVnb3JpYSAhPT0gJ21pbmVyYWxzJykgcmV0dXJuIGNvbnNvbGUubG9nKCdza2lwIGNhdGVnb3JpYScpXHJcbiAgICAgIGlmICghamltdU1hcFZpZXc/LnZpZXcpIHJldHVybiBjb25zb2xlLmxvZygnc2tpcCB2aWV3JylcclxuICAgICAgaWYgKCFtaW5lcmFsQW5hbGlzZSkgcmV0dXJuIGNvbnNvbGUubG9nKCdza2lwIG1pbmVyYWxBbmFsaXNlJylcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhZG9zTWluZXJhaXMpKSByZXR1cm4gY29uc29sZS5sb2coJ3NraXAgZGFkb3NNaW5lcmFpcyBudWxsJylcclxuXHJcbiAgICAgIGNvbnN0IGJhc2UgPSAod2l0aEludGVyZXN0ICYmIGZhaXhhU2V0LnNpemUgPiAwKVxyXG4gICAgICAgID8gZGFkb3NNaW5lcmFpcy5maWx0ZXIoZCA9PiBmYWl4YVNldC5oYXMoTnVtYmVyKGQuY29kaWdvUG9jbykpKVxyXG4gICAgICAgIDogZGFkb3NNaW5lcmFpc1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdIGJhc2UgcGFyYSBkZXNlbmhhcicsIGJhc2UubGVuZ3RoKVxyXG4gICAgICBpZiAoYmFzZS5sZW5ndGggPT09IDApIHJldHVybiBjb25zb2xlLndhcm4oJ1t3aWRnZXRdIGJhc2UgdmF6aWEg4oCUIG5hZGEgYSBwbG90dGFyJylcclxuXHJcbiAgICAgIGRlc2VuaGFyRGlzdHJpYnVpY2FvTWluZXJhaXMoamltdU1hcFZpZXcsIGJhc2UsIG1pbmVyYWxBbmFsaXNlIGFzIE1pbmVyYWxUaXBvLCB3aXRoSW50ZXJlc3QpXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgIH1cclxuICB9LCBbamltdU1hcFZpZXcsIGNhdGVnb3JpYSwgbWluZXJhbEFuYWxpc2UsIGRhZG9zTWluZXJhaXMsIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXRdKVxyXG5cclxuICAvKiA9PT09PT0gTUlORVJBSVM6IGFvIGVzY29saGVyIE1JTkVSQUwgKyBBR1JVUEFET1IgLT4gYXBsaWNhIGNvbG9yaXphw6fDo28gc3RvcHMgPT09PT09ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbd2lkZ2V0XSBlZmVpdG8gbWluZXJhaXM6Y29sb3JpemHDp8OjbyBhZ3J1cGFkb3InKVxyXG4gICAgICBjb25zb2xlLmxvZyh7IGNhdGVnb3JpYSwgaGFzSk1WOiAhIWppbXVNYXBWaWV3Py52aWV3LCBtaW5lcmFsQW5hbGlzZSwgbWluZXJhbFNlbGVjaW9uYWRvLCBhZ3J1cGFkb3IsIHdpdGhJbnRlcmVzdCB9KVxyXG4gICAgICBpZiAoY2F0ZWdvcmlhICE9PSAnbWluZXJhbHMnIHx8ICFqaW11TWFwVmlldz8udmlldyB8fCAhbWluZXJhbEFuYWxpc2UgfHwgIW1pbmVyYWxTZWxlY2lvbmFkbyB8fCAhYWdydXBhZG9yKSB7IGNvbnNvbGUubG9nKCdza2lwJyk7IGNvbnNvbGUuZ3JvdXBFbmQoKTsgcmV0dXJuIH1cclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGFkb3MgPSBhd2FpdCBmZXRjaE1pbmVyYWxBZ3J1cGFkb3IoXHJcbiAgICAgICAgICBtaW5lcmFsQW5hbGlzZSBhcyBNaW5lcmFsVGlwbyxcclxuICAgICAgICAgIG1pbmVyYWxTZWxlY2lvbmFkby5ub21lUmVzdW1pZG9NaW5lcmFsLFxyXG4gICAgICAgICAgd2l0aEludGVyZXN0XHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XSBhZ3J1cGFkb3IgZGFkb3MnLCBkYWRvcz8ubGVuZ3RoLCBkYWRvcz8uc2xpY2U/LigwLDEwKSlcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgYXdhaXQgYXBsaWNhckNvbG9yaXphY2FvUG9yQWdydXBhZG9yKFxyXG4gICAgICAgICAgICBqaW11TWFwVmlldyxcclxuICAgICAgICAgICAgbWluZXJhbEFuYWxpc2UgYXMgTWluZXJhbFRpcG8sXHJcbiAgICAgICAgICAgIGRhZG9zLFxyXG4gICAgICAgICAgICBhZ3J1cGFkb3IgYXMgJ2FuYWxpc2UnIHwgJ21lZGlhJyB8ICdtYXhpbWEnXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF0gY29sb3JpemHDp8OjbyBhcGxpY2FkYScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFsaGEgYW8gYXBsaWNhciBjb2xvcml6YcOnw6NvIHBvciBhZ3J1cGFkb3InLCBlKVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBydW4oKVxyXG4gICAgcmV0dXJuICgpID0+IHsgY2FuY2VsbGVkID0gdHJ1ZSB9XHJcbiAgfSwgW2ppbXVNYXBWaWV3LCBjYXRlZ29yaWEsIG1pbmVyYWxBbmFsaXNlLCBtaW5lcmFsU2VsZWNpb25hZG8sIGFncnVwYWRvciwgd2l0aEludGVyZXN0XSlcclxuXHJcbiAgLy8gUmVzZXQvZmVjaGFyXHJcbiAgY29uc3QgcmVzZXRVaVN0YXRlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0VGlwb3NTZWwoW10pOyBzZXRTaG93RW1wdHkoZmFsc2UpOyBzZXRXaXRoSW50ZXJlc3QoZmFsc2UpOyBzZXRDYXRlZ29yaWEoJycpO1xyXG4gICAgc2V0RGFkb3NGdWxsKG51bGwpOyBzZXREYWRvc0ZhaXhhQVBJKG51bGwpO1xyXG4gICAgc2V0TWluZXJhbEFuYWxpc2UoJycpOyBzZXREYWRvc01pbmVyYWlzKG51bGwpOyBzZXRFcnJvck1pbmVyYWlzKCcnKTsgc2V0TG9hZGluZ01pbmVyYWlzKGZhbHNlKTtcclxuICAgIHNldExpc3RhTWluZXJhaXMoW10pOyBzZXRCdXNjYU1pbmVyYWwoJycpOyBzZXRNaW5lcmFsU2VsZWNpb25hZG8obnVsbCk7IHNldEFncnVwYWRvcignJyk7XHJcbiAgICBpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50ID0gZmFsc2VcclxuICB9LCBbXSlcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldz8udmlld1xyXG4gICAgaWYgKHZpZXcpIGNsZWFyQW1vc3RyYXModmlldylcclxuICAgIHJlc2V0VWlTdGF0ZSgpXHJcbiAgfSwgW2ppbXVNYXBWaWV3LCByZXNldFVpU3RhdGVdKVxyXG5cclxuICAvLyBGZWNoYXIgcG9yIGJvdMOjby9vY3VsdGFyIGRpw6Fsb2dvIChjb3JyaWdpZG86IHNlbGV0b3IgY29tIGFzcGFzIGZlY2hhZGFzIGNvcnJldGFtZW50ZSlcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3Py52aWV3OyBpZiAoIXZpZXcpIHJldHVyblxyXG4gICAgY29uc3Qgcm9vdCA9IHJvb3RSZWYuY3VycmVudDsgaWYgKCFyb290KSByZXR1cm5cclxuICAgIGNvbnN0IGRsZyA9IGZpbmRDbG9zZXN0RGlhbG9nKHJvb3QpOyBpZiAoIWRsZykgcmV0dXJuXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRsZy5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnYnV0dG9uW2FyaWEtbGFiZWw9XCJDbG9zZVwiXSwgYnV0dG9uW3RpdGxlPVwiQ2xvc2VcIl0sIGJ1dHRvblthcmlhLWxhYmVsPVwiRmVjaGFyXCJdLCBidXR0b25bdGl0bGU9XCJGZWNoYXJcIl0sIFtkYXRhLWFjdGlvbj1cImNsb3NlXCJdJ1xyXG4gICAgKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcclxuICAgIGlmICghY2xvc2VCdG4pIHJldHVyblxyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbG9zZSlcclxuICAgIHJldHVybiAoKSA9PiBjbG9zZUJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsb3NlKVxyXG4gIH0sIFtqaW11TWFwVmlldywgaGFuZGxlQ2xvc2VdKVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgcm9vdCA9IHJvb3RSZWYuY3VycmVudDsgaWYgKCFyb290KSByZXR1cm5cclxuICAgIGNvbnN0IGRsZyA9IGZpbmRDbG9zZXN0RGlhbG9nKHJvb3QpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxyXG4gICAgaWYgKCFkbGcpIHJldHVyblxyXG4gICAgbGV0IHdhc1Zpc2libGUgPSAhaXNEaWFsb2dIaWRkZW4oZGxnKVxyXG4gICAgY29uc3QgY2hlY2sgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vd0hpZGRlbiA9IGlzRGlhbG9nSGlkZGVuKGRsZylcclxuICAgICAgaWYgKHdhc1Zpc2libGUgJiYgbm93SGlkZGVuKSB7IGhhbmRsZUNsb3NlKCk7IHdhc1Zpc2libGUgPSBmYWxzZSB9XHJcbiAgICAgIGVsc2UgaWYgKCF3YXNWaXNpYmxlICYmICFub3dIaWRkZW4pIHsgd2FzVmlzaWJsZSA9IHRydWUgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjaGVjaylcclxuICAgIG1vLm9ic2VydmUoZGxnLCB7IGF0dHJpYnV0ZXM6IHRydWUsIGF0dHJpYnV0ZUZpbHRlcjogWydzdHlsZScsICdjbGFzcycsICdhcmlhLWhpZGRlbiddIH0pXHJcbiAgICBjaGVjaygpXHJcbiAgICByZXR1cm4gKCkgPT4gbW8uZGlzY29ubmVjdCgpXHJcbiAgfSwgW2hhbmRsZUNsb3NlXSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9uS2V5ID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHsgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgaGFuZGxlQ2xvc2UoKSB9XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXkpXHJcbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5KVxyXG4gIH0sIFtoYW5kbGVDbG9zZV0pXHJcblxyXG4gIC8qKiBTdW3DoXJpbyAoYW1vc3RyYXMgYXBlbmFzKSAqL1xyXG4gIGNvbnN0IHN1bW1hcnlHcm91cHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChjYXRlZ29yaWEgIT09ICdzYW1wbGUnKSByZXR1cm4gW11cclxuICAgIGNvbnN0IGJhc2U6IEFtb3N0cmFJdGVtW10gPSB3aXRoSW50ZXJlc3RcclxuICAgICAgPyAoZmFpeGFTZXQuc2l6ZSA+IDBcclxuICAgICAgICAgID8gKGRhZG9zRnVsbCA/PyBbXSkuZmlsdGVyKHggPT4gZmFpeGFTZXQuaGFzKE51bWJlcih4LmNvZGlnb1BvY28pKSlcclxuICAgICAgICAgIDogKGRhZG9zRmFpeGFBUEkgPz8gZGFkb3NGdWxsID8/IFtdKSlcclxuICAgICAgOiAoZGFkb3NGdWxsID8/IFtdKVxyXG5cclxuICAgIHJldHVybiB0aXBvc1NlbC5tYXAodGlwbyA9PiB7XHJcbiAgICAgIGNvbnN0IGNvciA9IGNvcmVzVGlwb3NbdGlwb11cclxuICAgICAgY29uc3QgZGFkb3MgPSBiYXNlLm1hcChkID0+ICh7IGNvZGlnb1BvY286IGQuY29kaWdvUG9jbywgdG90YWw6IGRbVFlQRV9GSUVMRFt0aXBvXV0gPz8gMCB9KSlcclxuICAgICAgbGV0IHJvd3MgPSBjYWxjdWxhclF1ZWJyYXMoZGFkb3MsIGNvcikucmV2ZXJzZSgpXHJcbiAgICAgIGlmICghc2hvd0VtcHR5KSByb3dzID0gcm93cy5maWx0ZXIociA9PiByLmNvdW50ID4gMCB8fCByLmxhYmVsLnN0YXJ0c1dpdGgoJ3wgMCB8JykpXHJcbiAgICAgIHJldHVybiB7IHRpcG8sIHJvd3MgfVxyXG4gICAgfSlcclxuICB9LCBbdGlwb3NTZWwsIHNob3dFbXB0eSwgd2l0aEludGVyZXN0LCBmYWl4YVNldCwgZGFkb3NGdWxsLCBkYWRvc0ZhaXhhQVBJLCBjYXRlZ29yaWFdKVxyXG5cclxuICAvKiogU3Vtw6FyaW8gKG1pbmVyYWlzIOKAlCBUb3RhbCBkZSBBbW9zdHJhcy9Db2xldGFzKSAqL1xyXG4gIGNvbnN0IHN1bW1hcnlNaW5lcmFscyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKGNhdGVnb3JpYSAhPT0gJ21pbmVyYWxzJykgcmV0dXJuIG51bGxcclxuICAgIGlmICghbWluZXJhbEFuYWxpc2UpIHJldHVybiBudWxsXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGFkb3NNaW5lcmFpcykgfHwgZGFkb3NNaW5lcmFpcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsXHJcblxyXG4gICAgY29uc3QgYmFzZSA9ICh3aXRoSW50ZXJlc3QgJiYgZmFpeGFTZXQuc2l6ZSA+IDApXHJcbiAgICAgID8gZGFkb3NNaW5lcmFpcy5maWx0ZXIoZCA9PiBmYWl4YVNldC5oYXMoTnVtYmVyKGQuY29kaWdvUG9jbykpKVxyXG4gICAgICA6IGRhZG9zTWluZXJhaXNcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9ICh3aXRoSW50ZXJlc3QgPyAnSW50ZXJ2YWxvIGRlIEludGVyZXNzZSAtICcgOiAnJykgKyBsYWJlbEZyb21WYWx1ZShtaW5lcmFsQW5hbGlzZSBhcyBNaW5lcmFsVGlwbylcclxuICAgIGlmICghYmFzZS5sZW5ndGgpIHJldHVybiB7IHRpdGxlLCByb3dzOiBbXSBhcyBhbnlbXSB9XHJcblxyXG4gICAgY29uc3QgY29sb3IgPSAncmdiKDI1MywxNDIsNTUpJyAvLyBtZXNtYSBjb3IgdXNhZGEgbmEgY2FtYWRhIGRlIG1pbmVyYWlzXHJcbiAgICBjb25zdCBkYWRvcyA9IGJhc2UubWFwKGQgPT4gKHsgdG90YWw6IGQudG90YWxNaW5lcmFpcyB9KSlcclxuICAgIGxldCByb3dzID0gY2FsY3VsYXJRdWVicmFzKGRhZG9zLCBjb2xvcikucmV2ZXJzZSgpXHJcbiAgICBpZiAoIXNob3dFbXB0eSkgcm93cyA9IHJvd3MuZmlsdGVyKHIgPT4gci5jb3VudCA+IDAgfHwgci5sYWJlbC5zdGFydHNXaXRoKCd8IDAgfCcpKVxyXG5cclxuICAgIHJldHVybiB7IHRpdGxlLCByb3dzIH1cclxuICB9LCBbY2F0ZWdvcmlhLCBtaW5lcmFsQW5hbGlzZSwgZGFkb3NNaW5lcmFpcywgd2l0aEludGVyZXN0LCBmYWl4YVNldCwgc2hvd0VtcHR5XSlcclxuXHJcbiAgY29uc3QgaGFzQW55QmFzZSA9XHJcbiAgICAoQXJyYXkuaXNBcnJheShkYWRvc0Z1bGwpICYmIGRhZG9zRnVsbC5sZW5ndGggPiAwKSB8fFxyXG4gICAgKEFycmF5LmlzQXJyYXkoZGFkb3NGYWl4YUFQSSkgJiYgZGFkb3NGYWl4YUFQSS5sZW5ndGggPiAwKVxyXG5cclxuICAvLyA9PT09PSBmaWx0cm9zIHBhcmEgbyBzZWFyY2ggZGUgbWluZXJhaXNcclxuICBjb25zdCBsaXN0YUZpbHRyYWRhID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBxID0gKGJ1c2NhTWluZXJhbCB8fCAnJykubm9ybWFsaXplKCdORkQnKS5yZXBsYWNlKC9cXHB7RGlhY3JpdGljfS9ndSwgJycpLnRvTG93ZXJDYXNlKClcclxuICAgIHJldHVybiAobGlzdGFNaW5lcmFpcyB8fCBbXSkuZmlsdGVyKG0gPT4ge1xyXG4gICAgICBjb25zdCBub21lID0gKG0ubm9tZU1pbmVyYWwgfHwgJycpLm5vcm1hbGl6ZSgnTkZEJykucmVwbGFjZSgvXFxwe0RpYWNyaXRpY30vZ3UsICcnKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIHJldHVybiBub21lLmluY2x1ZGVzKHEpXHJcbiAgICB9KVxyXG4gIH0sIFtsaXN0YU1pbmVyYWlzLCBidXNjYU1pbmVyYWxdKVxyXG5cclxuICAvLyBwcmltZWlyYXMgNCBvcMOnw7VlcyArIGEgdGVyY2VpcmEgbGluaGEgKMOabHRpbWEpXHJcbiAgY29uc3QgRklSU1RfRk9VUiA9IE1JTkVSQUxfT1BUSU9OUy5zbGljZSgwLCA0KVxyXG4gIGNvbnN0IExBU1RfT05FID0gTUlORVJBTF9PUFRJT05TLnNsaWNlKDQpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNzcz17d3JhcHBlclN0eWxlfSByZWY9e3Jvb3RSZWZ9PlxyXG4gICAgICA8R2xvYmFsIHN0eWxlcz17Z2xvYmFsUGFuZWxTdHlsZX0gLz5cclxuICAgICAgPGxhYmVsIGNzcz17dGl0bGVTdHlsZX0+U2VsZWNpb25lIGEgZGlzdHJpYnVpw6fDo288L2xhYmVsPlxyXG5cclxuICAgICAgPHNlbGVjdCBjc3M9e3NlbGVjdFN0eWxlfSB2YWx1ZT17Y2F0ZWdvcmlhfSBvbkNoYW5nZT17ZSA9PiBzZXRDYXRlZ29yaWEoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPScnPlNlbGVjaW9uZSBvIHRpcG88L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPSdzYW1wbGUnPkRpc3RyaWJ1acOnw6NvIGRlIGFtb3N0cmFzPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nbWluZXJhbHMnPkRpc3RyaWJ1acOnw6NvIGRlIE1pbmVyYWlzPC9vcHRpb24+XHJcbiAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgey8qID09PT09PT09IFVJOiBBTU9TVFJBUyA9PT09PT09PSAqL31cclxuICAgICAge2NhdGVnb3JpYSA9PT0gJ3NhbXBsZScgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7bG9hZGluZ0Z1bGwgJiYgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDggfX0+Q2FycmVnYW5kbyBiYXNl4oCmPC9kaXY+fVxyXG4gICAgICAgICAgeyEhZXJyb3JGdWxsICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjYjAwJywgbWFyZ2luQm90dG9tOiA4IH19PkVycm86IHtlcnJvckZ1bGx9PC9kaXY+fVxyXG4gICAgICAgICAge3dpdGhJbnRlcmVzdCAmJiBsb2FkaW5nSW50ZXJlc3QgJiYgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDggfX0+Q2FycmVnYW5kbyBpbnRlcnZhbG8gZGUgaW50ZXJlc3Nl4oCmPC9kaXY+fVxyXG4gICAgICAgICAge3dpdGhJbnRlcmVzdCAmJiAhIWVycm9ySW50ZXJlc3QgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogJyNiMDAnLCBtYXJnaW5Cb3R0b206IDggfX0+RXJybzoge2Vycm9ySW50ZXJlc3R9PC9kaXY+fVxyXG5cclxuICAgICAgICAgIHtoYXNBbnlCYXNlICYmIChcclxuICAgICAgICAgICAgPGRpdiBjc3M9e2xpc3RTdHlsZX0+XHJcbiAgICAgICAgICAgICAge0xJU1RfVFlQRVMubWFwKHQgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGtleT17dH0gY3NzPXtjaGVja2JveExhYmVsU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RpcG9zU2VsLmluY2x1ZGVzKHQpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0VGlwb3NTZWwocHJldiA9PiBwcmV2LmluY2x1ZGVzKHQpID8gcHJldi5maWx0ZXIoeCA9PiB4ICE9PSB0KSA6IFsuLi5wcmV2LCB0XSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxibFwiPnt0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdC5zbGljZSgxKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogPT09PT09PT0gVUk6IE1JTkVSQUlTID09PT09PT09ICovfVxyXG4gICAgICB7Y2F0ZWdvcmlhID09PSAnbWluZXJhbHMnICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjc3M9e21pbmVyYWxzTGlzdFN0eWxlfT5cclxuICAgICAgICAgICAge01JTkVSQUxfT1BUSU9OUy5tYXAob3B0ID0+IChcclxuICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgIGtleT17b3B0LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgY3NzPXtjaGVja2JveExhYmVsU3R5bGV9XHJcbiAgICAgICAgICAgICAgICBkYXRhLWtleT17b3B0LnZhbHVlfSAgIC8vIERSWC1UT1QgfCBNQVNTQSB8IERSWC1BUkcgfCBBUkVBIHwgdG9kYXNBbmFsaXNlc1xyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibWluZXJhbC1hbmFsaXNlXCJcclxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bWluZXJhbEFuYWxpc2UgPT09IG9wdC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldE1pbmVyYWxBbmFsaXNlKG9wdC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGJsXCI+e29wdC5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7bG9hZGluZ01pbmVyYWlzICYmIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4IH19PkNhcnJlZ2FuZG8gbWluZXJhaXPigKY8L2Rpdj59XHJcbiAgICAgICAgICB7ISFlcnJvck1pbmVyYWlzICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjYjAwJywgbWFyZ2luQm90dG9tOiA4IH19PkVycm86IHtlcnJvck1pbmVyYWlzfTwvZGl2Pn1cclxuXHJcbiAgICAgICAgICB7LyogKHN1YSBVSSBkZSBidXNjYS9saXN0YS9hZ3J1cGFkb3JlcyBwZXJtYW5lY2UgYXF1aSkgKi99XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogPT09PT09PT0gU3Vtw6FyaW8gQU1PU1RSQVMgPT09PT09PT0gKi99XHJcbiAgICAgIHtjYXRlZ29yaWEgPT09ICdzYW1wbGUnICYmIHN1bW1hcnlHcm91cHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdiBjc3M9e3N1bW1hcnlMaXN0U3R5bGV9PlxyXG4gICAgICAgICAge3N1bW1hcnlHcm91cHMubWFwKGdyb3VwID0+IChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17Z3JvdXAudGlwb30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjc3M9e2xlZ2VuZEhlYWRlclN0eWxlfT5cclxuICAgICAgICAgICAgICAgIHsod2l0aEludGVyZXN0ID8gJ0ludGVydmFsbyBkZSBJbnRlcmVzc2UgLSAnIDogJycpfVxyXG4gICAgICAgICAgICAgICAge2dyb3VwLnRpcG8uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBncm91cC50aXBvLnNsaWNlKDEpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtncm91cC5yb3dzLm1hcCgociwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7Z3JvdXAudGlwb30tJHtpZHh9YH0gY3NzPXtzdW1tYXJ5SXRlbVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjc3M9e2J1YmJsZUJveFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPXtyLnNpemV9IGhlaWdodD17ci5zaXplfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9e3Iuc2l6ZSAvIDJ9IGN5PXtyLnNpemUgLyAyfSByPXtyLnNpemUgLyAyfSBmaWxsPXtyLmNvcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNzcz17cmFuZ2VMYWJlbFN0eWxlfT57ci5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qID09PT09PT09IFN1bcOhcmlvIE1JTkVSQUlTIChUb3RhbCBkZSBBbW9zdHJhcy9Db2xldGFzKSA9PT09PT09PSAqL31cclxuICAgICAge2NhdGVnb3JpYSA9PT0gJ21pbmVyYWxzJyAmJiBzdW1tYXJ5TWluZXJhbHMgJiYgKFxyXG4gICAgICAgIDxkaXYgY3NzPXtzdW1tYXJ5TGlzdFN0eWxlfT5cclxuICAgICAgICAgIDxkaXYgY3NzPXtsZWdlbmRIZWFkZXJTdHlsZX0+e3N1bW1hcnlNaW5lcmFscy50aXRsZX08L2Rpdj5cclxuICAgICAgICAgIHtzdW1tYXJ5TWluZXJhbHMucm93cy5tYXAoKHIsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17YG1pbi0ke2lkeH1gfSBjc3M9e3N1bW1hcnlJdGVtU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY3NzPXtidWJibGVCb3hTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPXtyLnNpemV9IGhlaWdodD17ci5zaXplfT5cclxuICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17ci5zaXplLzJ9IGN5PXtyLnNpemUvMn0gcj17ci5zaXplLzJ9IGZpbGw9e3IuY29yfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY3NzPXtyYW5nZUxhYmVsU3R5bGV9PntyLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiA9PT09PT09PSBSb2RhcMOpIGNvbXVtID09PT09PT09ICovfVxyXG4gICAgICB7KHN1bW1hcnlHcm91cHMubGVuZ3RoID4gMCB8fCBzdW1tYXJ5TWluZXJhbHMgfHwgc2hvd1dpdGhJbnRlcmVzdCkgJiYgKFxyXG4gICAgICAgIDxkaXYgY3NzPXtmb290ZXJTdHlsZX0+XHJcbiAgICAgICAgICB7KChjYXRlZ29yaWEgPT09ICdzYW1wbGUnICYmIHN1bW1hcnlHcm91cHMubGVuZ3RoID4gMCkgfHxcclxuICAgICAgICAgICAgKGNhdGVnb3JpYSA9PT0gJ21pbmVyYWxzJyAmJiAhIXN1bW1hcnlNaW5lcmFscykpICYmIChcclxuICAgICAgICAgICAgPGxhYmVsIGNzcz17Zm9vdGVyTGFiZWxTdHlsZX0gdGl0bGU9XCJFeGliaXIgdGFtYsOpbSBjbGFzc2VzIHNlbSBwb8Onb3NcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c2hvd0VtcHR5fSBvbkNoYW5nZT17ZSA9PiBzZXRTaG93RW1wdHkoZS50YXJnZXQuY2hlY2tlZCl9IC8+XHJcbiAgICAgICAgICAgICAgRXhpYmlyIGNsYXNzZXMgdmF6aWFzXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHtzaG93V2l0aEludGVyZXN0ICYmIChcclxuICAgICAgICAgICAgPGxhYmVsIGNzcz17Zm9vdGVyTGFiZWxTdHlsZUludGVyZXNzZX0gdGl0bGU9XCJRdWFuZG8gbWFyY2FkbywgYXBsaWNhIG8gZmlsdHJvIGRlIEludGVydmFsbyBkZSBJbnRlcmVzc2UgKGPDs2RpZ29zIHZpbmRvcyBkbyBFeHBsb3JhIG91IHZpYSBBUEkpXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17d2l0aEludGVyZXN0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50ID0gdHJ1ZTsgc2V0V2l0aEludGVyZXN0KGUudGFyZ2V0LmNoZWNrZWQpIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICBJbnRlcnZhbG8gZGUgaW50ZXJlc3NlXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50IHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX0gb25BY3RpdmVWaWV3Q2hhbmdlPXtzZXRKaW11TWFwVmlld30gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9