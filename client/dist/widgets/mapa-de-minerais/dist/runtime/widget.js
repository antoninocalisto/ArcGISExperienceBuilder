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

/***/ "./your-extensions/widgets/mapa-de-minerais/src/runtime/Minerals.ts":
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/mapa-de-minerais/src/runtime/Minerals.ts ***!
  \**************************************************************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/mapa-de-minerais/src/runtime/utils.ts");
/** Minerals.ts
 * Lógica da Distribuição de Minerais:
 *  - Busca do CONTADOR por análise (DRX/Qemscan/Todas) => base em clusters (bolhas) via gerarMapaDistribuicaoEB
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
    { value: 'todasAnalises', label: 'Todas as Análises' } // terceira linha separada
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
/** Transporte genérico (igual ao de amostras) */
function postViaParent(type, body, okType, errType) {
    return new Promise((resolve, reject) => {
        const reqId = Math.random().toString(36).slice(2);
        let targetOrigin = '*';
        try {
            if (document.referrer)
                targetOrigin = new URL(document.referrer).origin;
        }
        catch (_a) { }
        const onMessage = (event) => {
            const d = event.data || {};
            if (d.reqId !== reqId)
                return;
            if (d.type === okType) {
                window.removeEventListener('message', onMessage);
                resolve(d.payload);
            }
            else if (d.type === errType) {
                window.removeEventListener('message', onMessage);
                reject(new Error(d.message || 'Erro no fetch via parent'));
            }
        };
        window.addEventListener('message', onMessage);
        window.parent.postMessage({ type, body, reqId }, targetOrigin);
    });
}
/* =================== Bodies Explora =================== */
/** CONTADOR por análise (Código 2 -> CarregarMapaDistribuicaoMineraisContador) */
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
/** LISTA de minerais para o radio escolhido (Código 2 -> CarregarMapaDistribuicaoMineraisLista) */
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
/** AGRUPADOR para um mineral escolhido (Código 2 -> CarregarMapaDistribuicaoMineraisAgrupador) */
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
/** Base/contador (gera a camada com clusters) */
function fetchDistribuicaoMineraisContador(tipoAnalise, faixaInteresse) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = buildBodyContador(tipoAnalise, faixaInteresse);
        const payload = yield postViaParent('fetchDistribuicaoMinerais', body, 'fetchDistribuicaoMinerais:ok', 'fetchDistribuicaoMinerais:err');
        return normalizeMineralContador(payload);
    });
}
/** Lista de minerais (popular o search) */
function fetchMineralLista(tipoAnalise, faixaInteresse) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = buildBodyLista(tipoAnalise, faixaInteresse);
        const payload = yield postViaParent('fetchDistribuicaoMinerais', body, 'fetchDistribuicaoMinerais:ok', 'fetchDistribuicaoMinerais:err');
        return normalizeMineralLista(payload);
    });
}
/** Dados do agrupador para o mineral selecionado */
function fetchMineralAgrupador(tipoAnalise, nomeResumidoMineral, faixaInteresse) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = buildBodyAgrupador(tipoAnalise, nomeResumidoMineral, faixaInteresse);
        const payload = yield postViaParent('fetchDistribuicaoMinerais', body, 'fetchDistribuicaoMinerais:ok', 'fetchDistribuicaoMinerais:err');
        return normalizeAgrupador(payload);
    });
}
/* =================== Render helpers =================== */
const layerIdFor = (tipoAnalise) => `minerais_${String(tipoAnalise).toLowerCase()}`;
const legendIdFor = (tipoAnalise) => `lgd_${layerIdFor(tipoAnalise)}`;
/** Desabilita números de cluster */
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
    const { view } = jimuMapView;
    if (!view || !Array.isArray(dados) || dados.length === 0)
        return;
    const pontos = dados.map(d => ({ codigoPoco: d.codigoPoco, total: d.totalMinerais }));
    const idCamada = layerIdFor(tipoAnalise);
    const idLegenda = legendIdFor(tipoAnalise);
    const colorFill = 'rgb(253,142,55)'; // paleta base (igual ao Explora)
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.gerarMapaDistribuicaoEB)({
        jimuMapView,
        dados: pontos,
        colorFill,
        idCamada,
        idLegenda,
        titleLegenda: (withInterest ? 'Intervalo de Interesse - ' : '') + labelFromValue(tipoAnalise),
        withInterest
    });
    const lyr = view.map.findLayerById(idCamada);
    if (lyr)
        disableClusterNumbers(lyr);
}
/** Aplica visual variable de COR por cima da camada base (sem mexer no tamanho/cluster) */
function aplicarColorizacaoPorAgrupador(jimuMapView, tipoAnalise, dadosAgrupadores, agrupador) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const { view } = jimuMapView;
        const layer = (_a = view === null || view === void 0 ? void 0 : view.map) === null || _a === void 0 ? void 0 : _a.findLayerById(layerIdFor(tipoAnalise));
        if (!layer)
            return;
        if (!Array.isArray(dadosAgrupadores) || dadosAgrupadores.length === 0)
            return;
        // índice por poço
        const byPoco = new Map();
        for (const it of dadosAgrupadores)
            byPoco.set(Number(it.codigoPoco), it);
        // definimos um campo "md_val" para o visual variable de cor
        const fieldVar = 'md_val';
        // 1) Atualiza atributos por poço com o valor do agrupador escolhido
        const featureSet = yield layer.queryFeatures({ where: '1=1', returnGeometry: true, outFields: ['*'] });
        const updates = [];
        let minVal = Number.POSITIVE_INFINITY;
        let maxVal = Number.NEGATIVE_INFINITY;
        for (const f of featureSet.features) {
            const codigo = Number((_g = (_e = (_c = (_b = f.attributes) === null || _b === void 0 ? void 0 : _b.POCO_CD_POCO) !== null && _c !== void 0 ? _c : (_d = f.attributes) === null || _d === void 0 ? void 0 : _d.codigoPoco) !== null && _e !== void 0 ? _e : (_f = f.attributes) === null || _f === void 0 ? void 0 : _f.poco) !== null && _g !== void 0 ? _g : (_h = f.attributes) === null || _h === void 0 ? void 0 : _h.codigo);
            const ag = byPoco.get(codigo);
            // valor padrão = 0 se não encontrado
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
        if (updates.length > 0) {
            yield layer.applyEdits({ updateFeatures: updates });
        }
        // 2) Monta os stops como no Código 2
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
        // 3) Aplica visual variable de cor mantendo o renderer (tamanho/cluster) original
        const renderer = ((_j = layer.renderer) === null || _j === void 0 ? void 0 : _j.clone) ? layer.renderer.clone() : layer.renderer;
        const colorVisVar = {
            type: 'color',
            field: fieldVar,
            legendOptions: { title: '' },
            stops
        };
        renderer.visualVariables = [colorVisVar];
        layer.renderer = renderer;
    });
}
/** Label humano para o título da legenda/base */
function labelFromValue(v) {
    var _a;
    const f = MINERAL_OPTIONS.find(o => o.value === v);
    return (_a = f === null || f === void 0 ? void 0 : f.label) !== null && _a !== void 0 ? _a : String(v);
}


/***/ }),

/***/ "./your-extensions/widgets/mapa-de-minerais/src/runtime/utils.ts":
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/mapa-de-minerais/src/runtime/utils.ts ***!
  \***********************************************************************/
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
// utils.ts




const coresTipos = {
    lateral: "rgba(88, 19, 252, 0.7)",
    testemunho: "rgba(255, 0, 255, 0.7)",
    calha: "rgba(245, 201, 38, 0.7)",
    plug: "rgba(125, 253, 148, 0.7)",
    "whole core": "rgba(255, 43, 24, 0.7)"
};
function gerarMapaDistribuicaoEB(_a) {
    return __awaiter(this, arguments, void 0, function* ({ jimuMapView, dados, colorFill, idCamada, idLegenda, titleLegenda }) {
        const view = jimuMapView.view;
        const map = view.map;
        const codigos = dados.map(p => p.codigoPoco).join(',');
        const expression = `POCO_CD_POCO IN (${codigos})`;
        const camadaPoços = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_0__["default"]({
            url: 'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Feature_Pocos/MapServer/0',
            definitionExpression: expression,
            title: 'Poços',
            outFields: ['*'],
            visible: false
        });
        yield camadaPoços.load();
        const queryResult = yield camadaPoços.queryFeatures({
            where: expression,
            outFields: ['*'],
            returnGeometry: true
        });
        const features = queryResult.features.map((feature) => {
            const dado = dados.find(p => p.codigoPoco === feature.attributes.POCO_CD_POCO);
            feature.attributes.POCO_MD_MERID_CENT = dado ? dado.total : 0;
            return feature;
        });
        const valores = dados.map(p => p.total);
        let min = Math.min(...valores);
        let max = Math.max(...valores);
        const info = [];
        const outline = { color: "black", width: "1px" };
        if (min === max && min === 0) {
            info.push({
                minValue: 0,
                maxValue: 0,
                label: "Não há dados suficientes",
                symbol: new _arcgis_core_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_3__["default"]({ color: "rgba(255,255,255,0)", size: 0, style: "circle", outline })
            });
        }
        else {
            const zerados = valores.filter(v => v === 0).length;
            const naoZerados = valores.filter(v => v > 0);
            if (zerados > 0) {
                info.push({
                    minValue: 0,
                    maxValue: 0,
                    label: `| 0 | (${zerados} poço${zerados > 1 ? 's' : ''})`,
                    symbol: new _arcgis_core_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_3__["default"]({ color: "rgba(200,200,200,0.3)", size: 6, style: "circle", outline })
                });
            }
            min = 1;
            const n = naoZerados.length;
            const numClasses = Math.max(2, Math.round(1 + 3.3 * Math.log10(n)));
            const breaks = Math.ceil((max - min + 1) / numClasses);
            const maxSize = 40;
            for (let i = 0; i < numClasses; i++) {
                const minValue = min + (i * breaks);
                const maxValue = min + ((i + 1) * breaks) - 1;
                if (minValue > max)
                    break;
                const count = naoZerados.filter(v => v >= minValue && v <= maxValue).length;
                const label = `${minValue} |---| ${maxValue} (${count} poço${count > 1 ? 's' : ''})`;
                const size = 6 + (i * (maxSize / numClasses));
                info.push({
                    minValue,
                    maxValue,
                    label,
                    symbol: new _arcgis_core_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_3__["default"]({ color: colorFill, size, style: "circle", outline })
                });
            }
        }
        const renderer = new _arcgis_core_renderers_ClassBreaksRenderer__WEBPACK_IMPORTED_MODULE_2__["default"]({
            field: "POCO_MD_MERID_CENT",
            classBreakInfos: info
        });
        const camadaDistribuicao = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_0__["default"]({
            id: idCamada,
            source: features,
            fields: camadaPoços.fields,
            objectIdField: "OBJECTID",
            geometryType: "point",
            spatialReference: { wkid: 102100 },
            renderer,
            title: titleLegenda,
            listMode: "hide",
            // layerCreatedFromPortal: false
        });
        const existente = map.findLayerById(idCamada);
        if (existente)
            map.remove(existente);
        map.add(camadaDistribuicao);
        const legend = new _arcgis_core_widgets_Legend__WEBPACK_IMPORTED_MODULE_1__["default"]({
            view,
            layerInfos: [{ layer: camadaDistribuicao, title: titleLegenda }]
        });
        // view.ui.add(legend, "bottom-left")
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
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/mapa-de-minerais/src/runtime/widget.tsx ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/mapa-de-minerais/src/runtime/utils.ts");
/* harmony import */ var _Minerals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Minerals */ "./your-extensions/widgets/mapa-de-minerais/src/runtime/Minerals.ts");
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
    return new Promise((resolve, reject) => {
        const reqId = Math.random().toString(36).slice(2);
        let targetOrigin = '*';
        try {
            if (document.referrer)
                targetOrigin = new URL(document.referrer).origin;
        }
        catch (_a) { }
        const onMessage = (event) => {
            const d = event.data || {};
            if (d.reqId !== reqId)
                return;
            if (d.type === 'fetchDistribuicaoAmostras:ok') {
                window.removeEventListener('message', onMessage);
                resolve(normalizeList(d.payload));
            }
            else if (d.type === 'fetchDistribuicaoAmostras:err') {
                window.removeEventListener('message', onMessage);
                reject(new Error(d.message || 'Erro no fetch via parent'));
            }
        };
        window.addEventListener('message', onMessage);
        window.parent.postMessage({ type: 'fetchDistribuicaoAmostras', body, reqId }, targetOrigin);
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
/** Grid usada para opções (2 linhas) */
const listStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  overflow: visible;
  margin-bottom: 8px;
  padding: 4px;
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 4px;
  display: grid;
  grid-template-rows: repeat(2, minmax(24px, auto));
  grid-auto-flow: column;
  grid-auto-columns: minmax(140px, 1fr);
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
/** Grid dos rádios de minerais*/
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
  label[data-key='DRX-TOT'] {
    grid-column: 1;
    grid-row: 1;
  }
  /* Qemscan-Massa (Row1, Col2) */
  label[data-key='MASSA'] {
    grid-column: 2;
    grid-row: 1;
  }
  /* DRX-Argilominerais (Row2, Col1) */
  label[data-key='DRX-ARG'] {
    grid-column: 1;
    grid-row: 2;
  }
  /* Qemscan-Área (Row2, Col2) */
  label[data-key='AREA'] {
    grid-column: 2;
    grid-row: 2;
  }
  /* "Todas as Análises" (Row3, ocupando 2 colunas) */
  label[data-key='todasAnalises'] {
    grid-column: 1 / span 2;
    grid-row: 3;
  }
`;
const summaryListStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `max-height:300px;overflow-y:auto;margin-top:8px;padding:8px 8px 36px;background:#fff;border:1px solid #ddd;border-radius:4px;position:relative;`;
const summaryItemStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `display:flex;align-items:center;margin:2px;`;
const rangeLabelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `font-size:.78rem;line-height:1.1;`;
const footerStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `position: sticky; bottom: 0; background: #fff; border-top: 1px solid #eee; padding: 4px 0; display: flex; flex-direction: column; align-items: flex-start; gap: 6px;`;
const footerLabelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `display:flex;align-items:center;gap:6px;padding-left:.5em;cursor:pointer;font-size:.9rem;`;
const footerLabelStyleInteresse = footerLabelStyle;
/* ===== Sumário (amostras) ===== */
function calcularQuebras(dados, colorFill) {
    const valores = dados.map((p) => p.total);
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
        const breaks = Math.ceil((max - min + 1) / numClasses);
        const maxSize = 30;
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
/* ===== Helpers dialog/posicionamento (mesmos do seu código) ===== */
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
    /* Recebe faixa de interesse do "pai" */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const onMsg = (ev) => {
            const data = ev === null || ev === void 0 ? void 0 : ev.data;
            if (!data || data.type !== 'faixa-interesse' || !Array.isArray(data.codigosPocos))
                return;
            const nums = data.codigosPocos.map((v) => Number(v)).filter((v) => !isNaN(v));
            setFaixaSet(new Set(nums));
            if (nums.length > 0) {
                setshowWithInterest(true);
                if (!interestManualRef.current)
                    setWithInterest(true);
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
                if (categoria !== 'sample')
                    return;
                setLoadingFull(true);
                setErrorFull('');
                try {
                    const data = yield fetchDistribuicaoAmostras(withInterest || DEFAULT_FAIXA_INTERESSE);
                    if (!cancelled)
                        setDadosFull(data);
                }
                catch (e) {
                    if (!cancelled) {
                        setErrorFull((e === null || e === void 0 ? void 0 : e.message) || 'Falha ao buscar dados');
                        setDadosFull([]);
                    }
                }
                finally {
                    if (!cancelled)
                        setLoadingFull(false);
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
                if (categoria !== 'sample')
                    return;
                if (!withInterest)
                    return;
                if (faixaSet.size > 0)
                    return;
                if (dadosFaixaAPI !== null)
                    return;
                setLoadingInterest(true);
                setErrorInterest('');
                try {
                    const data = yield fetchDistribuicaoAmostras(true);
                    if (!cancelled)
                        setDadosFaixaAPI(data);
                }
                catch (e) {
                    if (!cancelled) {
                        setErrorInterest((e === null || e === void 0 ? void 0 : e.message) || 'Falha ao buscar dados do intervalo de interesse');
                        setDadosFaixaAPI([]);
                    }
                }
                finally {
                    if (!cancelled)
                        setLoadingInterest(false);
                }
            });
        }
        run();
        return () => { cancelled = true; };
    }, [categoria, withInterest, faixaSet, dadosFaixaAPI]);
    /* ====== AMOSTRAS: desenhar ====== */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        var _a;
        const jmv = jimuMapView;
        if (!(jmv === null || jmv === void 0 ? void 0 : jmv.view))
            return;
        if (categoria !== 'sample')
            return;
        const base = withInterest
            ? (faixaSet.size > 0
                ? (dadosFull !== null && dadosFull !== void 0 ? dadosFull : []).filter(x => faixaSet.has(Number(x.codigoPoco)))
                : ((_a = dadosFaixaAPI !== null && dadosFaixaAPI !== void 0 ? dadosFaixaAPI : dadosFull) !== null && _a !== void 0 ? _a : []))
            : (dadosFull !== null && dadosFull !== void 0 ? dadosFull : []);
        if (!Array.isArray(base) || base.length === 0)
            return;
        if (!Array.isArray(tiposSel) || tiposSel.length === 0)
            return;
        const { view } = jmv;
        tiposSel.forEach((tipo) => {
            const dados = base
                .map(d => { var _a; return ({ codigoPoco: d.codigoPoco, total: (_a = d[TYPE_FIELD[tipo]]) !== null && _a !== void 0 ? _a : 0 }); })
                .filter(d => { var _a; return ((_a = d.total) !== null && _a !== void 0 ? _a : 0) > 0; });
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
                if (lyr)
                    disableClusterNumbers(lyr);
            }
            catch (e) {
                console.error(`[amostras] falha ao gerar camada ${idCamada}`, e);
            }
        });
    }, [jimuMapView, tiposSel, withInterest, faixaSet, dadosFull, dadosFaixaAPI, categoria]);
    /* ====== MINERAIS: ao mudar o radio de análise -> busca CONTADOR e LISTA ====== */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        let cancelled = false;
        function run() {
            return __awaiter(this, void 0, void 0, function* () {
                if (categoria !== 'minerals')
                    return;
                if (!mineralAnalise)
                    return;
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
                        setDadosMinerais(contador);
                        setListaMinerais(lista);
                    }
                }
                catch (e) {
                    if (!cancelled) {
                        setErrorMinerais((e === null || e === void 0 ? void 0 : e.message) || 'Falha ao buscar minerais');
                        setDadosMinerais([]);
                        setListaMinerais([]);
                    }
                }
                finally {
                    if (!cancelled)
                        setLoadingMinerais(false);
                }
            });
        }
        run();
        return () => { cancelled = true; };
    }, [categoria, mineralAnalise, withInterest]);
    /* ====== MINERAIS: desenhar base (contador) quando chega ====== */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (categoria !== 'minerals')
            return;
        if (!(jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view))
            return;
        if (!mineralAnalise)
            return;
        if (!Array.isArray(dadosMinerais))
            return;
        const base = (withInterest && faixaSet.size > 0)
            ? dadosMinerais.filter(d => faixaSet.has(Number(d.codigoPoco)))
            : dadosMinerais;
        if (base.length === 0)
            return;
        (0,_Minerals__WEBPACK_IMPORTED_MODULE_3__.desenharDistribuicaoMinerais)(jimuMapView, base, mineralAnalise, withInterest);
    }, [jimuMapView, categoria, mineralAnalise, dadosMinerais, withInterest, faixaSet]);
    /* ====== MINERAIS: ao escolher MINERAL + AGRUPADOR -> aplica colorização stops ====== */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        let cancelled = false;
        function run() {
            return __awaiter(this, void 0, void 0, function* () {
                if (categoria !== 'minerals')
                    return;
                if (!(jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view))
                    return;
                if (!mineralAnalise)
                    return;
                if (!mineralSelecionado)
                    return;
                if (!agrupador)
                    return;
                try {
                    const dados = yield (0,_Minerals__WEBPACK_IMPORTED_MODULE_3__.fetchMineralAgrupador)(mineralAnalise, mineralSelecionado.nomeResumidoMineral, withInterest);
                    if (!cancelled) {
                        yield (0,_Minerals__WEBPACK_IMPORTED_MODULE_3__.aplicarColorizacaoPorAgrupador)(jimuMapView, mineralAnalise, dados, agrupador);
                    }
                }
                catch (e) {
                    console.error('Falha ao aplicar colorização por agrupador', e);
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
    // Fechar por botão/ocultar diálogo (mantido)
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
        (summaryGroups.length > 0 || showWithInterest) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: footerStyle },
            categoria === 'sample' && summaryGroups.length > 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: footerLabelStyle, title: "Exibir tamb\u00E9m classes sem po\u00E7os" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXBhLWRlLW1pbmVyYWlzL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7O0FBRzhDO0FBRWpELCtDQUErQztBQUN4QyxNQUFNLGVBQWUsR0FBRztJQUM3QixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtJQUN4QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFO0lBQ2pELEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBSSxLQUFLLEVBQUUsZUFBZSxFQUFFO0lBQzVDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBSyxLQUFLLEVBQUUsY0FBYyxFQUFFO0lBQzNDLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQywwQkFBMEI7Q0FDekU7QUEwQlYsMkRBQTJEO0FBQzNELFNBQVMsd0JBQXdCLENBQUMsR0FBVTtJQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDbkMsR0FBRyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7O1FBQUMsUUFBQztZQUNoQixVQUFVLEVBQUUsTUFBTSxDQUFDLHlCQUFDLENBQUMsVUFBVSxtQ0FBSSxDQUFDLENBQUMsWUFBWSxtQ0FBSSxDQUFDLENBQUMsSUFBSSxtQ0FBSSxDQUFDLENBQUMsTUFBTSxtQ0FBSSxDQUFDLENBQUM7WUFDN0UsYUFBYSxFQUFFLE1BQU0sQ0FBQyxhQUFDLENBQUMsYUFBYSxtQ0FBSSxDQUFDLENBQUMsS0FBSyxtQ0FBSSxDQUFDLENBQUM7U0FDdkQsQ0FBQztLQUFBLENBQUM7U0FDRixNQUFN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LEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxHQUN0Rjt5Q0FFSSxDQUNULENBQ0csQ0FDUDtRQUVELCtDQUFDLDZEQUFvQixJQUFDLGNBQWMsRUFBRSxXQUFLLENBQUMsZUFBZSwwQ0FBRyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEdBQUksQ0FDcEcsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXBhLWRlLW1pbmVyYWlzL3NyYy9ydW50aW1lL01pbmVyYWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXBhLWRlLW1pbmVyYWlzL3NyYy9ydW50aW1lL3V0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3JlbmRlcmVycy9DbGFzc0JyZWFrc1JlbmRlcmVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3N5bWJvbHMvU2ltcGxlTWFya2VyU3ltYm9sXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3dpZGdldHMvTGVnZW5kXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXBhLWRlLW1pbmVyYWlzL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIE1pbmVyYWxzLnRzXHJcbiAqIEzDs2dpY2EgZGEgRGlzdHJpYnVpw6fDo28gZGUgTWluZXJhaXM6XHJcbiAqICAtIEJ1c2NhIGRvIENPTlRBRE9SIHBvciBhbsOhbGlzZSAoRFJYL1FlbXNjYW4vVG9kYXMpID0+IGJhc2UgZW0gY2x1c3RlcnMgKGJvbGhhcykgdmlhIGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCXHJcbiAqICAtIEJ1c2NhIGRhIExJU1RBIGRlIG1pbmVyYWlzIChwYXJhIG8gc2VhcmNoKVxyXG4gKiAgLSBCdXNjYSBkb3MgQUdSVVBBRE9SRVMgKGFuYWxpc2V8bWVkaWF8bWF4aW1hKSBwYXJhIHVtIG1pbmVyYWwgc2VsZWNpb25hZG9cclxuICogIC0gQXBsaWNhw6fDo28gZGUgdmlzdWFsVmFyaWFibGVzIChjb2xvciByYW1wKSBOQSBNRVNNQSBDQU1BREEsIHBvciBjaW1hIGRvIGNsdXN0ZXIgYmFzZVxyXG4gKi9cclxuXHJcbmltcG9ydCB0eXBlIHsgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuLyoqIE9ww6fDtWVzIGRlIGFuw6FsaXNlIG1pbmVyYWwgcGFyYSBvcyByw6FkaW9zICovXHJcbmV4cG9ydCBjb25zdCBNSU5FUkFMX09QVElPTlMgPSBbXHJcbiAgeyB2YWx1ZTogJ0RSWC1UT1QnLCBsYWJlbDogJ0RSWC1Ub3RhbCcgfSxcclxuICB7IHZhbHVlOiAnRFJYLUFSRycsIGxhYmVsOiAnRFJYLUFyZ2lsb21pbmVyYWlzJyB9LFxyXG4gIHsgdmFsdWU6ICdNQVNTQScsICAgbGFiZWw6ICdRZW1zY2FuLU1hc3NhJyB9LFxyXG4gIHsgdmFsdWU6ICdBUkVBJywgICAgbGFiZWw6ICdRZW1zY2FuLcOBcmVhJyB9LFxyXG4gIHsgdmFsdWU6ICd0b2Rhc0FuYWxpc2VzJywgbGFiZWw6ICdUb2RhcyBhcyBBbsOhbGlzZXMnIH0gLy8gdGVyY2VpcmEgbGluaGEgc2VwYXJhZGFcclxuXSBhcyBjb25zdFxyXG5cclxuZXhwb3J0IHR5cGUgTWluZXJhbFRpcG8gPSB0eXBlb2YgTUlORVJBTF9PUFRJT05TW251bWJlcl1bJ3ZhbHVlJ11cclxuZXhwb3J0IHR5cGUgQWdydXBhZG9yVGlwbyA9ICdhbmFsaXNlJyB8ICdtZWRpYScgfCAnbWF4aW1hJ1xyXG5cclxuLyoqIEl0ZW5zIGRvIGNvbnRhZG9yICh0b3RhbCBwb3IgcG/Dp28pICovXHJcbmV4cG9ydCB0eXBlIE1pbmVyYWxJdGVtID0ge1xyXG4gIGNvZGlnb1BvY286IG51bWJlclxyXG4gIHRvdGFsTWluZXJhaXM6IG51bWJlclxyXG59XHJcblxyXG4vKiogSXRlbSBkYSBsaXN0YSBkZSBtaW5lcmFpcyAocGFyYSBvIHNlYXJjaCkgKi9cclxuZXhwb3J0IHR5cGUgTWluZXJhbExpc3RhSXRlbSA9IHtcclxuICBub21lTWluZXJhbDogc3RyaW5nXHJcbiAgbm9tZVJlc3VtaWRvTWluZXJhbD86IHN0cmluZ1xyXG59XHJcblxyXG4vKiogSXRlbSBkZSByZXRvcm5vIGRvIGFncnVwYWRvciAqL1xyXG5leHBvcnQgdHlwZSBNaW5lcmFsQWdydXBhZG9ySXRlbSA9IHtcclxuICBjb2RpZ29Qb2NvOiBudW1iZXJcclxuICBub21lUmVzdW1pZG8/OiBzdHJpbmdcclxuICBxdEFuYWxpc2U6IG51bWJlclxyXG4gIHZhbG9yTWVkaW86IG51bWJlclxyXG4gIHZhbG9yTWF4aW1vOiBudW1iZXJcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PSBOb3JtYWxpemHDp8O1ZXMgPT09PT09PT09PT09PT09PT09PSAqL1xyXG5mdW5jdGlvbiBub3JtYWxpemVNaW5lcmFsQ29udGFkb3IocmF3OiBhbnlbXSk6IE1pbmVyYWxJdGVtW10ge1xyXG4gIHJldHVybiAoQXJyYXkuaXNBcnJheShyYXcpID8gcmF3IDogW10pXHJcbiAgICAubWFwKChyOiBhbnkpID0+ICh7XHJcbiAgICAgIGNvZGlnb1BvY286IE51bWJlcihyLmNvZGlnb1BvY28gPz8gci5QT0NPX0NEX1BPQ08gPz8gci5wb2NvID8/IHIuY29kaWdvID8/IDApLFxyXG4gICAgICB0b3RhbE1pbmVyYWlzOiBOdW1iZXIoci50b3RhbE1pbmVyYWlzID8/IHIudG90YWwgPz8gMClcclxuICAgIH0pKVxyXG4gICAgLmZpbHRlcih4ID0+ICEheC5jb2RpZ29Qb2NvKVxyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVNaW5lcmFsTGlzdGEocmF3OiBhbnlbXSk6IE1pbmVyYWxMaXN0YUl0ZW1bXSB7XHJcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5KHJhdykgPyByYXcgOiBbXSlcclxuICAgIC5tYXAoKHI6IGFueSkgPT4gKHtcclxuICAgICAgbm9tZU1pbmVyYWw6IFN0cmluZyhyLm5vbWVNaW5lcmFsID8/IHIubm9tZSA/PyByLm1pbmVyYWwgPz8gJycpLnRyaW0oKSxcclxuICAgICAgbm9tZVJlc3VtaWRvTWluZXJhbDogci5ub21lUmVzdW1pZG9NaW5lcmFsID8/IHIubm9tZVJlc3VtaWRvID8/IHVuZGVmaW5lZFxyXG4gICAgfSkpXHJcbiAgICAuZmlsdGVyKHggPT4gISF4Lm5vbWVNaW5lcmFsKVxyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVBZ3J1cGFkb3IocmF3OiBhbnlbXSk6IE1pbmVyYWxBZ3J1cGFkb3JJdGVtW10ge1xyXG4gIHJldHVybiAoQXJyYXkuaXNBcnJheShyYXcpID8gcmF3IDogW10pXHJcbiAgICAubWFwKChyOiBhbnkpID0+ICh7XHJcbiAgICAgIGNvZGlnb1BvY286IE51bWJlcihyLmNvZGlnb1BvY28gPz8gci5QT0NPX0NEX1BPQ08gPz8gci5wb2NvID8/IHIuY29kaWdvID8/IDApLFxyXG4gICAgICBub21lUmVzdW1pZG86IHIubm9tZVJlc3VtaWRvID8/IHIubm9tZVJlc3VtaWRvTWluZXJhbCA/PyB1bmRlZmluZWQsXHJcbiAgICAgIHF0QW5hbGlzZTogTnVtYmVyKHIucXRBbmFsaXNlID8/IHIudG90YWwgPz8gMCksXHJcbiAgICAgIHZhbG9yTWVkaW86IE51bWJlcihyLnZhbG9yTWVkaW8gPz8gci5tZWRpYSA/PyAwKSxcclxuICAgICAgdmFsb3JNYXhpbW86IE51bWJlcihyLnZhbG9yTWF4aW1vID8/IHIubWF4aW1vID8/IDApXHJcbiAgICB9KSlcclxuICAgIC5maWx0ZXIoeCA9PiAhIXguY29kaWdvUG9jbylcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PSBQb3N0TWVzc2FnZSBoZWxwZXJzID09PT09PT09PT09PT09PT09PT0gKi9cclxuLyoqIFRyYW5zcG9ydGUgZ2Vuw6lyaWNvIChpZ3VhbCBhbyBkZSBhbW9zdHJhcykgKi9cclxuZnVuY3Rpb24gcG9zdFZpYVBhcmVudDxUID0gYW55Pih0eXBlOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgb2tUeXBlOiBzdHJpbmcsIGVyclR5cGU6IHN0cmluZyk6IFByb21pc2U8VD4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCByZXFJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpXHJcbiAgICBsZXQgdGFyZ2V0T3JpZ2luID0gJyonXHJcbiAgICB0cnkgeyBpZiAoZG9jdW1lbnQucmVmZXJyZXIpIHRhcmdldE9yaWdpbiA9IG5ldyBVUkwoZG9jdW1lbnQucmVmZXJyZXIpLm9yaWdpbiB9IGNhdGNoIHt9XHJcblxyXG4gICAgY29uc3Qgb25NZXNzYWdlID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgZDogYW55ID0gKGV2ZW50IGFzIGFueSkuZGF0YSB8fCB7fVxyXG4gICAgICBpZiAoZC5yZXFJZCAhPT0gcmVxSWQpIHJldHVyblxyXG4gICAgICBpZiAoZC50eXBlID09PSBva1R5cGUpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSlcclxuICAgICAgICByZXNvbHZlKGQucGF5bG9hZCBhcyBUKVxyXG4gICAgICB9IGVsc2UgaWYgKGQudHlwZSA9PT0gZXJyVHlwZSkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoZC5tZXNzYWdlIHx8ICdFcnJvIG5vIGZldGNoIHZpYSBwYXJlbnQnKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpXHJcbiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHsgdHlwZSwgYm9keSwgcmVxSWQgfSwgdGFyZ2V0T3JpZ2luKVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT0gQm9kaWVzIEV4cGxvcmEgPT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKiogQ09OVEFET1IgcG9yIGFuw6FsaXNlIChDw7NkaWdvIDIgLT4gQ2FycmVnYXJNYXBhRGlzdHJpYnVpY2FvTWluZXJhaXNDb250YWRvcikgKi9cclxuZnVuY3Rpb24gYnVpbGRCb2R5Q29udGFkb3IodGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvLCBmYWl4YUludGVyZXNzZTogYm9vbGVhbikge1xyXG4gIGNvbnN0IHAgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcclxuICBwLnNldCgnaGRTeXMnLCAnbm92YWludGNvbnMnKVxyXG4gIHAuc2V0KCdoZFVDJywgJ01hcGEnKVxyXG4gIHAuc2V0KCdoZEFjYW8nLCAnQ2FycmVnYXJNYXBhRGlzdHJpYnVpY2FvTWluZXJhaXNDb250YWRvcicpXHJcbiAgcC5zZXQoJ2hkU2Vzc2lvbkZpbHRlcicsICd0cnVlJylcclxuICBwLnNldCgndGlwb0FuYWxpc2UnLCB0aXBvQW5hbGlzZSlcclxuICBwLnNldCgnZmFpeGFJbnRlcmVzc2UnLCBTdHJpbmcoISFmYWl4YUludGVyZXNzZSkpXHJcbiAgcmV0dXJuIHAudG9TdHJpbmcoKVxyXG59XHJcblxyXG4vKiogTElTVEEgZGUgbWluZXJhaXMgcGFyYSBvIHJhZGlvIGVzY29saGlkbyAoQ8OzZGlnbyAyIC0+IENhcnJlZ2FyTWFwYURpc3RyaWJ1aWNhb01pbmVyYWlzTGlzdGEpICovXHJcbmZ1bmN0aW9uIGJ1aWxkQm9keUxpc3RhKHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbywgZmFpeGFJbnRlcmVzc2U6IGJvb2xlYW4pIHtcclxuICBjb25zdCBwID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXHJcbiAgcC5zZXQoJ2hkU3lzJywgJ25vdmFpbnRjb25zJylcclxuICBwLnNldCgnaGRVQycsICdNYXBhJylcclxuICBwLnNldCgnaGRBY2FvJywgJ0NhcnJlZ2FyTWFwYURpc3RyaWJ1aWNhb01pbmVyYWlzTGlzdGEnKVxyXG4gIHAuc2V0KCdoZFNlc3Npb25GaWx0ZXInLCAndHJ1ZScpXHJcbiAgcC5zZXQoJ3RpcG9BbmFsaXNlJywgdGlwb0FuYWxpc2UpXHJcbiAgcC5zZXQoJ2ZhaXhhSW50ZXJlc3NlJywgU3RyaW5nKCEhZmFpeGFJbnRlcmVzc2UpKVxyXG4gIHJldHVybiBwLnRvU3RyaW5nKClcclxufVxyXG5cclxuLyoqIEFHUlVQQURPUiBwYXJhIHVtIG1pbmVyYWwgZXNjb2xoaWRvIChDw7NkaWdvIDIgLT4gQ2FycmVnYXJNYXBhRGlzdHJpYnVpY2FvTWluZXJhaXNBZ3J1cGFkb3IpICovXHJcbmZ1bmN0aW9uIGJ1aWxkQm9keUFncnVwYWRvcih0aXBvQW5hbGlzZTogTWluZXJhbFRpcG8sIG5vbWVSZXN1bWlkb01pbmVyYWw6IHN0cmluZyB8IHVuZGVmaW5lZCwgZmFpeGFJbnRlcmVzc2U6IGJvb2xlYW4pIHtcclxuICBjb25zdCBwID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXHJcbiAgcC5zZXQoJ2hkU3lzJywgJ25vdmFpbnRjb25zJylcclxuICBwLnNldCgnaGRVQycsICdNYXBhJylcclxuICBwLnNldCgnaGRBY2FvJywgJ0NhcnJlZ2FyTWFwYURpc3RyaWJ1aWNhb01pbmVyYWlzQWdydXBhZG9yJylcclxuICBwLnNldCgnaGRTZXNzaW9uRmlsdGVyJywgJ3RydWUnKVxyXG4gIHAuc2V0KCd0aXBvQW5hbGlzZScsIHRpcG9BbmFsaXNlKVxyXG4gIGlmIChub21lUmVzdW1pZG9NaW5lcmFsKSBwLnNldCgnbm9tZVJlc3VtaWRvTWluZXJhbCcsIG5vbWVSZXN1bWlkb01pbmVyYWwpXHJcbiAgcC5zZXQoJ2ZhaXhhSW50ZXJlc3NlJywgU3RyaW5nKCEhZmFpeGFJbnRlcmVzc2UpKVxyXG4gIHJldHVybiBwLnRvU3RyaW5nKClcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PSBGZXRjaCBBUElzID09PT09PT09PT09PT09PT09PT0gKi9cclxuLyoqIEJhc2UvY29udGFkb3IgKGdlcmEgYSBjYW1hZGEgY29tIGNsdXN0ZXJzKSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpc0NvbnRhZG9yKFxyXG4gIHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbyxcclxuICBmYWl4YUludGVyZXNzZTogYm9vbGVhblxyXG4pOiBQcm9taXNlPE1pbmVyYWxJdGVtW10+IHtcclxuICBjb25zdCBib2R5ID0gYnVpbGRCb2R5Q29udGFkb3IodGlwb0FuYWxpc2UsIGZhaXhhSW50ZXJlc3NlKVxyXG4gIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBwb3N0VmlhUGFyZW50PGFueVtdPignZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpcycsIGJvZHksICdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzOm9rJywgJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXM6ZXJyJylcclxuICByZXR1cm4gbm9ybWFsaXplTWluZXJhbENvbnRhZG9yKHBheWxvYWQpXHJcbn1cclxuXHJcbi8qKiBMaXN0YSBkZSBtaW5lcmFpcyAocG9wdWxhciBvIHNlYXJjaCkgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoTWluZXJhbExpc3RhKFxyXG4gIHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbyxcclxuICBmYWl4YUludGVyZXNzZTogYm9vbGVhblxyXG4pOiBQcm9taXNlPE1pbmVyYWxMaXN0YUl0ZW1bXT4ge1xyXG4gIGNvbnN0IGJvZHkgPSBidWlsZEJvZHlMaXN0YSh0aXBvQW5hbGlzZSwgZmFpeGFJbnRlcmVzc2UpXHJcbiAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHBvc3RWaWFQYXJlbnQ8YW55W10+KCdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzJywgYm9keSwgJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXM6b2snLCAnZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpczplcnInKVxyXG4gIHJldHVybiBub3JtYWxpemVNaW5lcmFsTGlzdGEocGF5bG9hZClcclxufVxyXG5cclxuLyoqIERhZG9zIGRvIGFncnVwYWRvciBwYXJhIG8gbWluZXJhbCBzZWxlY2lvbmFkbyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNaW5lcmFsQWdydXBhZG9yKFxyXG4gIHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbyxcclxuICBub21lUmVzdW1pZG9NaW5lcmFsOiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgZmFpeGFJbnRlcmVzc2U6IGJvb2xlYW5cclxuKTogUHJvbWlzZTxNaW5lcmFsQWdydXBhZG9ySXRlbVtdPiB7XHJcbiAgY29uc3QgYm9keSA9IGJ1aWxkQm9keUFncnVwYWRvcih0aXBvQW5hbGlzZSwgbm9tZVJlc3VtaWRvTWluZXJhbCwgZmFpeGFJbnRlcmVzc2UpXHJcbiAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHBvc3RWaWFQYXJlbnQ8YW55W10+KCdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzJywgYm9keSwgJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXM6b2snLCAnZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpczplcnInKVxyXG4gIHJldHVybiBub3JtYWxpemVBZ3J1cGFkb3IocGF5bG9hZClcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PSBSZW5kZXIgaGVscGVycyA9PT09PT09PT09PT09PT09PT09ICovXHJcbmNvbnN0IGxheWVySWRGb3IgPSAodGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvKSA9PiBgbWluZXJhaXNfJHtTdHJpbmcodGlwb0FuYWxpc2UpLnRvTG93ZXJDYXNlKCl9YFxyXG5jb25zdCBsZWdlbmRJZEZvciA9ICh0aXBvQW5hbGlzZTogTWluZXJhbFRpcG8pID0+IGBsZ2RfJHtsYXllcklkRm9yKHRpcG9BbmFsaXNlKX1gXHJcblxyXG4vKiogRGVzYWJpbGl0YSBuw7ptZXJvcyBkZSBjbHVzdGVyICovXHJcbmZ1bmN0aW9uIGRpc2FibGVDbHVzdGVyTnVtYmVycyhseXI6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWx5cikgcmV0dXJuXHJcbiAgICBpZiAobHlyLmZlYXR1cmVSZWR1Y3Rpb24gJiYgbHlyLmZlYXR1cmVSZWR1Y3Rpb24udHlwZSA9PT0gJ2NsdXN0ZXInKSB7XHJcbiAgICAgIGx5ci5mZWF0dXJlUmVkdWN0aW9uID0geyAuLi5seXIuZmVhdHVyZVJlZHVjdGlvbiwgbGFiZWxzVmlzaWJsZTogZmFsc2UgfVxyXG4gICAgfVxyXG4gICAgaWYgKCdsYWJlbHNWaXNpYmxlJyBpbiBseXIpIChseXIgYXMgYW55KS5sYWJlbHNWaXNpYmxlID0gZmFsc2VcclxuICAgIGlmICgnbGFiZWxpbmdJbmZvJyBpbiBseXIpIChseXIgYXMgYW55KS5sYWJlbGluZ0luZm8gPSBbXVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoKGx5ciBhcyBhbnkpLnN1YmxheWVycykpIChseXIgYXMgYW55KS5zdWJsYXllcnMuZm9yRWFjaCgoc2w6IGFueSkgPT4gZGlzYWJsZUNsdXN0ZXJOdW1iZXJzKHNsKSlcclxuICB9IGNhdGNoIHt9XHJcbn1cclxuXHJcbi8qKiBEZXNlbmhhIGEgYmFzZSAoY29udGFkb3IpIGVtIGNsdXN0ZXJzL2JvbGhhcywgY29tIHTDrXR1bG8gY29uZm9ybWUgYW7DoWxpc2UgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VuaGFyRGlzdHJpYnVpY2FvTWluZXJhaXMoXHJcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LFxyXG4gIGRhZG9zOiBNaW5lcmFsSXRlbVtdLFxyXG4gIHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbyxcclxuICB3aXRoSW50ZXJlc3Q6IGJvb2xlYW5cclxuKSB7XHJcbiAgY29uc3QgeyB2aWV3IH0gPSBqaW11TWFwVmlld1xyXG4gIGlmICghdmlldyB8fCAhQXJyYXkuaXNBcnJheShkYWRvcykgfHwgZGFkb3MubGVuZ3RoID09PSAwKSByZXR1cm5cclxuXHJcbiAgY29uc3QgcG9udG9zID0gZGFkb3MubWFwKGQgPT4gKHsgY29kaWdvUG9jbzogZC5jb2RpZ29Qb2NvLCB0b3RhbDogZC50b3RhbE1pbmVyYWlzIH0pKVxyXG5cclxuICBjb25zdCBpZENhbWFkYSA9IGxheWVySWRGb3IodGlwb0FuYWxpc2UpXHJcbiAgY29uc3QgaWRMZWdlbmRhID0gbGVnZW5kSWRGb3IodGlwb0FuYWxpc2UpXHJcbiAgY29uc3QgY29sb3JGaWxsID0gJ3JnYigyNTMsMTQyLDU1KScgLy8gcGFsZXRhIGJhc2UgKGlndWFsIGFvIEV4cGxvcmEpXHJcblxyXG4gIGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCKHtcclxuICAgIGppbXVNYXBWaWV3LFxyXG4gICAgZGFkb3M6IHBvbnRvcyxcclxuICAgIGNvbG9yRmlsbCxcclxuICAgIGlkQ2FtYWRhLFxyXG4gICAgaWRMZWdlbmRhLFxyXG4gICAgdGl0bGVMZWdlbmRhOiAod2l0aEludGVyZXN0ID8gJ0ludGVydmFsbyBkZSBJbnRlcmVzc2UgLSAnIDogJycpICsgbGFiZWxGcm9tVmFsdWUodGlwb0FuYWxpc2UpLFxyXG4gICAgd2l0aEludGVyZXN0XHJcbiAgfSBhcyBhbnkpXHJcblxyXG4gIGNvbnN0IGx5ciA9IHZpZXcubWFwLmZpbmRMYXllckJ5SWQoaWRDYW1hZGEpIGFzIGFueVxyXG4gIGlmIChseXIpIGRpc2FibGVDbHVzdGVyTnVtYmVycyhseXIpXHJcbn1cclxuXHJcbi8qKiBBcGxpY2EgdmlzdWFsIHZhcmlhYmxlIGRlIENPUiBwb3IgY2ltYSBkYSBjYW1hZGEgYmFzZSAoc2VtIG1leGVyIG5vIHRhbWFuaG8vY2x1c3RlcikgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwbGljYXJDb2xvcml6YWNhb1BvckFncnVwYWRvcihcclxuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXcsXHJcbiAgdGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvLFxyXG4gIGRhZG9zQWdydXBhZG9yZXM6IE1pbmVyYWxBZ3J1cGFkb3JJdGVtW10sXHJcbiAgYWdydXBhZG9yOiBBZ3J1cGFkb3JUaXBvXHJcbikge1xyXG4gIGNvbnN0IHsgdmlldyB9ID0gamltdU1hcFZpZXdcclxuICBjb25zdCBsYXllciA9IHZpZXc/Lm1hcD8uZmluZExheWVyQnlJZChsYXllcklkRm9yKHRpcG9BbmFsaXNlKSkgYXMgYW55XHJcbiAgaWYgKCFsYXllcikgcmV0dXJuXHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KGRhZG9zQWdydXBhZG9yZXMpIHx8IGRhZG9zQWdydXBhZG9yZXMubGVuZ3RoID09PSAwKSByZXR1cm5cclxuXHJcbiAgLy8gw61uZGljZSBwb3IgcG/Dp29cclxuICBjb25zdCBieVBvY28gPSBuZXcgTWFwPG51bWJlciwgTWluZXJhbEFncnVwYWRvckl0ZW0+KClcclxuICBmb3IgKGNvbnN0IGl0IG9mIGRhZG9zQWdydXBhZG9yZXMpIGJ5UG9jby5zZXQoTnVtYmVyKGl0LmNvZGlnb1BvY28pLCBpdClcclxuXHJcbiAgLy8gZGVmaW5pbW9zIHVtIGNhbXBvIFwibWRfdmFsXCIgcGFyYSBvIHZpc3VhbCB2YXJpYWJsZSBkZSBjb3JcclxuICBjb25zdCBmaWVsZFZhciA9ICdtZF92YWwnXHJcblxyXG4gIC8vIDEpIEF0dWFsaXphIGF0cmlidXRvcyBwb3IgcG/Dp28gY29tIG8gdmFsb3IgZG8gYWdydXBhZG9yIGVzY29saGlkb1xyXG4gIGNvbnN0IGZlYXR1cmVTZXQgPSBhd2FpdCBsYXllci5xdWVyeUZlYXR1cmVzKHsgd2hlcmU6ICcxPTEnLCByZXR1cm5HZW9tZXRyeTogdHJ1ZSwgb3V0RmllbGRzOiBbJyonXSB9KVxyXG4gIGNvbnN0IHVwZGF0ZXM6IGFueVtdID0gW11cclxuICBsZXQgbWluVmFsID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXHJcbiAgbGV0IG1heFZhbCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWVxyXG5cclxuICBmb3IgKGNvbnN0IGYgb2YgZmVhdHVyZVNldC5mZWF0dXJlcykge1xyXG4gICAgY29uc3QgY29kaWdvID0gTnVtYmVyKFxyXG4gICAgICBmLmF0dHJpYnV0ZXM/LlBPQ09fQ0RfUE9DTyA/P1xyXG4gICAgICBmLmF0dHJpYnV0ZXM/LmNvZGlnb1BvY28gPz9cclxuICAgICAgZi5hdHRyaWJ1dGVzPy5wb2NvID8/XHJcbiAgICAgIGYuYXR0cmlidXRlcz8uY29kaWdvXHJcbiAgICApXHJcbiAgICBjb25zdCBhZyA9IGJ5UG9jby5nZXQoY29kaWdvKVxyXG4gICAgLy8gdmFsb3IgcGFkcsOjbyA9IDAgc2UgbsOjbyBlbmNvbnRyYWRvXHJcbiAgICBsZXQgdmFsID0gMFxyXG4gICAgaWYgKGFnKSB7XHJcbiAgICAgIGlmIChhZ3J1cGFkb3IgPT09ICdhbmFsaXNlJykgdmFsID0gYWcucXRBbmFsaXNlXHJcbiAgICAgIGVsc2UgaWYgKGFncnVwYWRvciA9PT0gJ21lZGlhJykgdmFsID0gYWcudmFsb3JNZWRpb1xyXG4gICAgICBlbHNlIHZhbCA9IGFnLnZhbG9yTWF4aW1vXHJcbiAgICB9XHJcbiAgICBmLmF0dHJpYnV0ZXNbZmllbGRWYXJdID0gdmFsXHJcbiAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbClcclxuICAgIG1heFZhbCA9IE1hdGgubWF4KG1heFZhbCwgdmFsKVxyXG4gICAgdXBkYXRlcy5wdXNoKGYpXHJcbiAgfVxyXG5cclxuICBpZiAodXBkYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICBhd2FpdCBsYXllci5hcHBseUVkaXRzKHsgdXBkYXRlRmVhdHVyZXM6IHVwZGF0ZXMgfSlcclxuICB9XHJcblxyXG4gIC8vIDIpIE1vbnRhIG9zIHN0b3BzIGNvbW8gbm8gQ8OzZGlnbyAyXHJcbiAgY29uc3QgZGlmZiA9IG1heFZhbCAtIG1pblZhbFxyXG4gIGNvbnN0IGJ1aWxkTGFiZWwgPSAodjogbnVtYmVyKSA9PiBhZ3J1cGFkb3IgPT09ICdhbmFsaXNlJyA/IGAke3Z9YCA6IGAke3Z9ICVgXHJcblxyXG4gIGxldCBzdG9wczogQXJyYXk8eyB2YWx1ZTogbnVtYmVyOyBjb2xvcjogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+XHJcbiAgaWYgKGRpZmYgPCAzKSB7XHJcbiAgICBzdG9wcyA9IFtcclxuICAgICAgeyB2YWx1ZTogbWluVmFsLCBjb2xvcjogJ3JnYigyNDksMjM4LDIyNSknLCBsYWJlbDogYnVpbGRMYWJlbChtaW5WYWwpIH0sXHJcbiAgICAgIHsgdmFsdWU6IG1heFZhbCwgY29sb3I6ICdyZ2IoMTY1LDYwLDIpJywgICBsYWJlbDogYnVpbGRMYWJlbChtYXhWYWwpIH1cclxuICAgIF1cclxuICB9IGVsc2UgaWYgKGRpZmYgPCA1KSB7XHJcbiAgICBjb25zdCBzdGVwID0gTWF0aC5yb3VuZChkaWZmIC8gNCkgfHwgMVxyXG4gICAgc3RvcHMgPSBbXHJcbiAgICAgIHsgdmFsdWU6IG1pblZhbCwgICAgICAgICAgICBjb2xvcjogJ3JnYigyNDksMjM4LDIyNSknLCBsYWJlbDogYnVpbGRMYWJlbChtaW5WYWwpIH0sXHJcbiAgICAgIHsgdmFsdWU6IG1pblZhbCArIDIgKiBzdGVwLCBjb2xvcjogJ3JnYigyNTMsMTQyLDU1KScsICBsYWJlbDogYnVpbGRMYWJlbChtaW5WYWwgKyAyICogc3RlcCkgfSxcclxuICAgICAgeyB2YWx1ZTogbWF4VmFsLCAgICAgICAgICAgIGNvbG9yOiAncmdiKDE2NSw2MCwyKScsICAgIGxhYmVsOiBidWlsZExhYmVsKG1heFZhbCkgfVxyXG4gICAgXVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBzdGVwID0gTWF0aC5yb3VuZChkaWZmIC8gNCkgfHwgMVxyXG4gICAgc3RvcHMgPSBbXHJcbiAgICAgIHsgdmFsdWU6IG1pblZhbCwgICAgICAgICAgICBjb2xvcjogJ3JnYigyNDksMjM4LDIyNSknLCBsYWJlbDogYnVpbGRMYWJlbChtaW5WYWwpIH0sXHJcbiAgICAgIHsgdmFsdWU6IG1pblZhbCArIDEgKiBzdGVwLCBjb2xvcjogJ3JnYigyNTEsMTkwLDEzMCknLCBsYWJlbDogYnVpbGRMYWJlbChtaW5WYWwgKyAxICogc3RlcCkgfSxcclxuICAgICAgeyB2YWx1ZTogbWluVmFsICsgMiAqIHN0ZXAsIGNvbG9yOiAncmdiKDI1MywxNDIsNTUpJywgIGxhYmVsOiBidWlsZExhYmVsKG1pblZhbCArIDIgKiBzdGVwKSB9LFxyXG4gICAgICB7IHZhbHVlOiBtYXhWYWwgLSAxICogc3RlcCwgY29sb3I6ICdyZ2IoMjMzLDg1LDYpJywgICAgbGFiZWw6IGJ1aWxkTGFiZWwobWF4VmFsIC0gMSAqIHN0ZXApIH0sXHJcbiAgICAgIHsgdmFsdWU6IG1heFZhbCwgICAgICAgICAgICBjb2xvcjogJ3JnYigxNjUsNjAsMiknLCAgICBsYWJlbDogYnVpbGRMYWJlbChtYXhWYWwpIH1cclxuICAgIF1cclxuICB9XHJcblxyXG4gIC8vIDMpIEFwbGljYSB2aXN1YWwgdmFyaWFibGUgZGUgY29yIG1hbnRlbmRvIG8gcmVuZGVyZXIgKHRhbWFuaG8vY2x1c3Rlcikgb3JpZ2luYWxcclxuICBjb25zdCByZW5kZXJlciA9IGxheWVyLnJlbmRlcmVyPy5jbG9uZSA/IGxheWVyLnJlbmRlcmVyLmNsb25lKCkgOiBsYXllci5yZW5kZXJlclxyXG4gIGNvbnN0IGNvbG9yVmlzVmFyID0ge1xyXG4gICAgdHlwZTogJ2NvbG9yJyxcclxuICAgIGZpZWxkOiBmaWVsZFZhcixcclxuICAgIGxlZ2VuZE9wdGlvbnM6IHsgdGl0bGU6ICcnIH0sXHJcbiAgICBzdG9wc1xyXG4gIH1cclxuICByZW5kZXJlci52aXN1YWxWYXJpYWJsZXMgPSBbY29sb3JWaXNWYXJdXHJcbiAgbGF5ZXIucmVuZGVyZXIgPSByZW5kZXJlclxyXG59XHJcblxyXG4vKiogTGFiZWwgaHVtYW5vIHBhcmEgbyB0w610dWxvIGRhIGxlZ2VuZGEvYmFzZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tVmFsdWUodjogTWluZXJhbFRpcG8pIHtcclxuICBjb25zdCBmID0gTUlORVJBTF9PUFRJT05TLmZpbmQobyA9PiBvLnZhbHVlID09PSB2KVxyXG4gIHJldHVybiBmPy5sYWJlbCA/PyBTdHJpbmcodilcclxufVxyXG4iLCIvLyB1dGlscy50c1xyXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL0ZlYXR1cmVMYXllclwiXHJcbmltcG9ydCBMZWdlbmQgZnJvbSBcIkBhcmNnaXMvY29yZS93aWRnZXRzL0xlZ2VuZFwiXHJcbmltcG9ydCBDbGFzc0JyZWFrc1JlbmRlcmVyIGZyb20gXCJAYXJjZ2lzL2NvcmUvcmVuZGVyZXJzL0NsYXNzQnJlYWtzUmVuZGVyZXJcIlxyXG5pbXBvcnQgU2ltcGxlTWFya2VyU3ltYm9sIGZyb20gXCJAYXJjZ2lzL2NvcmUvc3ltYm9scy9TaW1wbGVNYXJrZXJTeW1ib2xcIlxyXG5cclxuY29uc3QgY29yZXNUaXBvczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICBsYXRlcmFsOiBcInJnYmEoODgsIDE5LCAyNTIsIDAuNylcIixcclxuICB0ZXN0ZW11bmhvOiBcInJnYmEoMjU1LCAwLCAyNTUsIDAuNylcIixcclxuICBjYWxoYTogXCJyZ2JhKDI0NSwgMjAxLCAzOCwgMC43KVwiLFxyXG4gIHBsdWc6IFwicmdiYSgxMjUsIDI1MywgMTQ4LCAwLjcpXCIsXHJcbiAgXCJ3aG9sZSBjb3JlXCI6IFwicmdiYSgyNTUsIDQzLCAyNCwgMC43KVwiXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXJhck1hcGFEaXN0cmlidWljYW9FQih7XHJcbiAgamltdU1hcFZpZXcsXHJcbiAgZGFkb3MsXHJcbiAgY29sb3JGaWxsLFxyXG4gIGlkQ2FtYWRhLFxyXG4gIGlkTGVnZW5kYSxcclxuICB0aXRsZUxlZ2VuZGFcclxufToge1xyXG4gIGppbXVNYXBWaWV3OiBhbnlcclxuICBkYWRvczogeyBjb2RpZ29Qb2NvOiBudW1iZXI7IHRvdGFsOiBudW1iZXIgfVtdXHJcbiAgY29sb3JGaWxsOiBzdHJpbmdcclxuICBpZENhbWFkYTogc3RyaW5nXHJcbiAgaWRMZWdlbmRhOiBzdHJpbmdcclxuICB0aXRsZUxlZ2VuZGE6IHN0cmluZ1xyXG59KSB7XHJcbiAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3LnZpZXdcclxuICBjb25zdCBtYXAgPSB2aWV3Lm1hcFxyXG5cclxuICBjb25zdCBjb2RpZ29zID0gZGFkb3MubWFwKHAgPT4gcC5jb2RpZ29Qb2NvKS5qb2luKCcsJylcclxuICBjb25zdCBleHByZXNzaW9uID0gYFBPQ09fQ0RfUE9DTyBJTiAoJHtjb2RpZ29zfSlgXHJcblxyXG4gIGNvbnN0IGNhbWFkYVBvw6dvcyA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgdXJsOiAnaHR0cHM6Ly9iYXNlZ2lzLnBldHJvYnJhcy5jb20uYnIvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvRVhQTE9SQS9GZWF0dXJlX1BvY29zL01hcFNlcnZlci8wJyxcclxuICAgIGRlZmluaXRpb25FeHByZXNzaW9uOiBleHByZXNzaW9uLFxyXG4gICAgdGl0bGU6ICdQb8Onb3MnLFxyXG4gICAgb3V0RmllbGRzOiBbJyonXSxcclxuICAgIHZpc2libGU6IGZhbHNlXHJcbiAgfSlcclxuXHJcbiAgYXdhaXQgY2FtYWRhUG/Dp29zLmxvYWQoKVxyXG5cclxuICBjb25zdCBxdWVyeVJlc3VsdCA9IGF3YWl0IGNhbWFkYVBvw6dvcy5xdWVyeUZlYXR1cmVzKHtcclxuICAgIHdoZXJlOiBleHByZXNzaW9uLFxyXG4gICAgb3V0RmllbGRzOiBbJyonXSxcclxuICAgIHJldHVybkdlb21ldHJ5OiB0cnVlXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZmVhdHVyZXMgPSBxdWVyeVJlc3VsdC5mZWF0dXJlcy5tYXAoKGZlYXR1cmUpID0+IHtcclxuICAgIGNvbnN0IGRhZG8gPSBkYWRvcy5maW5kKHAgPT4gcC5jb2RpZ29Qb2NvID09PSBmZWF0dXJlLmF0dHJpYnV0ZXMuUE9DT19DRF9QT0NPKVxyXG4gICAgZmVhdHVyZS5hdHRyaWJ1dGVzLlBPQ09fTURfTUVSSURfQ0VOVCA9IGRhZG8gPyBkYWRvLnRvdGFsIDogMFxyXG4gICAgcmV0dXJuIGZlYXR1cmVcclxuICB9KVxyXG5cclxuICBjb25zdCB2YWxvcmVzID0gZGFkb3MubWFwKHAgPT4gcC50b3RhbClcclxuICBsZXQgbWluID0gTWF0aC5taW4oLi4udmFsb3JlcylcclxuICBsZXQgbWF4ID0gTWF0aC5tYXgoLi4udmFsb3JlcylcclxuXHJcbiAgY29uc3QgaW5mbyA9IFtdXHJcbiAgY29uc3Qgb3V0bGluZSA9IHsgY29sb3I6IFwiYmxhY2tcIiwgd2lkdGg6IFwiMXB4XCIgfVxyXG5cclxuICBpZiAobWluID09PSBtYXggJiYgbWluID09PSAwKSB7XHJcbiAgICBpbmZvLnB1c2goe1xyXG4gICAgICBtaW5WYWx1ZTogMCxcclxuICAgICAgbWF4VmFsdWU6IDAsXHJcbiAgICAgIGxhYmVsOiBcIk7Do28gaMOhIGRhZG9zIHN1ZmljaWVudGVzXCIsXHJcbiAgICAgIHN5bWJvbDogbmV3IFNpbXBsZU1hcmtlclN5bWJvbCh7IGNvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsMClcIiwgc2l6ZTogMCwgc3R5bGU6IFwiY2lyY2xlXCIsIG91dGxpbmUgfSlcclxuICAgIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHplcmFkb3MgPSB2YWxvcmVzLmZpbHRlcih2ID0+IHYgPT09IDApLmxlbmd0aFxyXG4gICAgY29uc3QgbmFvWmVyYWRvcyA9IHZhbG9yZXMuZmlsdGVyKHYgPT4gdiA+IDApXHJcblxyXG4gICAgaWYgKHplcmFkb3MgPiAwKSB7XHJcbiAgICAgIGluZm8ucHVzaCh7XHJcbiAgICAgICAgbWluVmFsdWU6IDAsXHJcbiAgICAgICAgbWF4VmFsdWU6IDAsXHJcbiAgICAgICAgbGFiZWw6IGB8IDAgfCAoJHt6ZXJhZG9zfSBwb8OnbyR7emVyYWRvcyA+IDEgPyAncycgOiAnJ30pYCxcclxuICAgICAgICBzeW1ib2w6IG5ldyBTaW1wbGVNYXJrZXJTeW1ib2woeyBjb2xvcjogXCJyZ2JhKDIwMCwyMDAsMjAwLDAuMylcIiwgc2l6ZTogNiwgc3R5bGU6IFwiY2lyY2xlXCIsIG91dGxpbmUgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBtaW4gPSAxXHJcbiAgICBjb25zdCBuID0gbmFvWmVyYWRvcy5sZW5ndGhcclxuICAgIGNvbnN0IG51bUNsYXNzZXMgPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKDEgKyAzLjMgKiBNYXRoLmxvZzEwKG4pKSlcclxuICAgIGNvbnN0IGJyZWFrcyA9IE1hdGguY2VpbCgobWF4IC0gbWluICsgMSkgLyBudW1DbGFzc2VzKVxyXG4gICAgY29uc3QgbWF4U2l6ZSA9IDQwXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1DbGFzc2VzOyBpKyspIHtcclxuICAgICAgY29uc3QgbWluVmFsdWUgPSBtaW4gKyAoaSAqIGJyZWFrcylcclxuICAgICAgY29uc3QgbWF4VmFsdWUgPSBtaW4gKyAoKGkgKyAxKSAqIGJyZWFrcykgLSAxXHJcbiAgICAgIGlmIChtaW5WYWx1ZSA+IG1heCkgYnJlYWtcclxuXHJcbiAgICAgIGNvbnN0IGNvdW50ID0gbmFvWmVyYWRvcy5maWx0ZXIodiA9PiB2ID49IG1pblZhbHVlICYmIHYgPD0gbWF4VmFsdWUpLmxlbmd0aFxyXG4gICAgICBjb25zdCBsYWJlbCA9IGAke21pblZhbHVlfSB8LS0tfCAke21heFZhbHVlfSAoJHtjb3VudH0gcG/Dp28ke2NvdW50ID4gMSA/ICdzJyA6ICcnfSlgXHJcblxyXG4gICAgICBjb25zdCBzaXplID0gNiArIChpICogKG1heFNpemUgLyBudW1DbGFzc2VzKSlcclxuXHJcbiAgICAgIGluZm8ucHVzaCh7XHJcbiAgICAgICAgbWluVmFsdWUsXHJcbiAgICAgICAgbWF4VmFsdWUsXHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgc3ltYm9sOiBuZXcgU2ltcGxlTWFya2VyU3ltYm9sKHsgY29sb3I6IGNvbG9yRmlsbCwgc2l6ZSwgc3R5bGU6IFwiY2lyY2xlXCIsIG91dGxpbmUgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlcmVyID0gbmV3IENsYXNzQnJlYWtzUmVuZGVyZXIoe1xyXG4gICAgZmllbGQ6IFwiUE9DT19NRF9NRVJJRF9DRU5UXCIsXHJcbiAgICBjbGFzc0JyZWFrSW5mb3M6IGluZm9cclxuICB9KVxyXG5cclxuICBjb25zdCBjYW1hZGFEaXN0cmlidWljYW8gPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgIGlkOiBpZENhbWFkYSxcclxuICAgIHNvdXJjZTogZmVhdHVyZXMsXHJcbiAgICBmaWVsZHM6IGNhbWFkYVBvw6dvcy5maWVsZHMsXHJcbiAgICBvYmplY3RJZEZpZWxkOiBcIk9CSkVDVElEXCIsXHJcbiAgICBnZW9tZXRyeVR5cGU6IFwicG9pbnRcIixcclxuICAgIHNwYXRpYWxSZWZlcmVuY2U6IHsgd2tpZDogMTAyMTAwIH0sXHJcbiAgICByZW5kZXJlcixcclxuICAgIHRpdGxlOiB0aXRsZUxlZ2VuZGEsXHJcbiAgICBsaXN0TW9kZTogXCJoaWRlXCIsXHJcbiAgICAvLyBsYXllckNyZWF0ZWRGcm9tUG9ydGFsOiBmYWxzZVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGV4aXN0ZW50ZSA9IG1hcC5maW5kTGF5ZXJCeUlkKGlkQ2FtYWRhKVxyXG4gIGlmIChleGlzdGVudGUpIG1hcC5yZW1vdmUoZXhpc3RlbnRlKVxyXG4gIG1hcC5hZGQoY2FtYWRhRGlzdHJpYnVpY2FvKVxyXG5cclxuICBjb25zdCBsZWdlbmQgPSBuZXcgTGVnZW5kKHtcclxuICAgIHZpZXcsXHJcbiAgICBsYXllckluZm9zOiBbeyBsYXllcjogY2FtYWRhRGlzdHJpYnVpY2FvLCB0aXRsZTogdGl0bGVMZWdlbmRhIH1dXHJcbiAgfSlcclxuICAvLyB2aWV3LnVpLmFkZChsZWdlbmQsIFwiYm90dG9tLWxlZnRcIilcclxufVxyXG5cclxuZXhwb3J0IHsgY29yZXNUaXBvcyB9IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9sYXllcnNfRmVhdHVyZUxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9yZW5kZXJlcnNfQ2xhc3NCcmVha3NSZW5kZXJlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfc3ltYm9sc19TaW1wbGVNYXJrZXJTeW1ib2xfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX3dpZGdldHNfTGVnZW5kX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG4vKiogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cclxuaW1wb3J0IHsgUmVhY3QsIGpzeCwgY3NzLCBHbG9iYWwgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyBnZXJhck1hcGFEaXN0cmlidWljYW9FQiwgY29yZXNUaXBvcyB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCB7XHJcbiAgTUlORVJBTF9PUFRJT05TLFxyXG4gIGZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXNDb250YWRvcixcclxuICBmZXRjaE1pbmVyYWxMaXN0YSxcclxuICBmZXRjaE1pbmVyYWxBZ3J1cGFkb3IsXHJcbiAgZGVzZW5oYXJEaXN0cmlidWljYW9NaW5lcmFpcyxcclxuICBhcGxpY2FyQ29sb3JpemFjYW9Qb3JBZ3J1cGFkb3IsXHJcbiAgbGFiZWxGcm9tVmFsdWUsXHJcbiAgdHlwZSBNaW5lcmFsVGlwbyxcclxuICB0eXBlIE1pbmVyYWxMaXN0YUl0ZW1cclxufSBmcm9tICcuL01pbmVyYWxzJ1xyXG5cclxuLyogPT09PT0gVGlwb3MgPT09PT0gKi9cclxudHlwZSBNc2dGYWl4YUludGVyZXNzZSA9IHsgdHlwZTogJ2ZhaXhhLWludGVyZXNzZSc7IGNvZGlnb3NQb2NvczogKG51bWJlciB8IHN0cmluZylbXSB9XHJcblxyXG50eXBlIEFtb3N0cmFJdGVtID0ge1xyXG4gIGNvZGlnb1BvY286IG51bWJlclxyXG4gIHRvdGFsQW1vc3RyYXNMYXRlcmFpczogbnVtYmVyXHJcbiAgdG90YWxDYWxoYXM6IG51bWJlclxyXG4gIHRvdGFsUGx1Z3M6IG51bWJlclxyXG4gIHRvdGFsVGVzdGVtdW5ob3M6IG51bWJlclxyXG4gIHRvdGFsV2hvbGVDb3JlOiBudW1iZXJcclxufVxyXG5cclxuLyogPT09PT0gQ29uZmlnID09PT09ICovXHJcbmNvbnN0IERFRkFVTFRfRkFJWEFfSU5URVJFU1NFID0gZmFsc2VcclxuXHJcbi8qID09PT09IExheW91dCA9PT09PSAqL1xyXG5jb25zdCBERUZBVUxUX1dJRFRIID0gMzYwXHJcbmNvbnN0IFBBTkVMX01BUkdJTl9UT1AgPSA1MFxyXG5jb25zdCBQQU5FTF9NQVJHSU5fUklHSFQgPSAxMFxyXG5jb25zdCBERUZBVUxUX0hFSUdIVCA9IDY1MFxyXG5cclxuLyogPT09PT0gQ2FtcG9zIHBvciB0aXBvIChhbW9zdHJhcykgPT09PT0gKi9cclxuY29uc3QgVFlQRV9GSUVMRDogUmVjb3JkPHN0cmluZywga2V5b2YgQW1vc3RyYUl0ZW0+ID0ge1xyXG4gIGxhdGVyYWw6ICd0b3RhbEFtb3N0cmFzTGF0ZXJhaXMnLFxyXG4gIHRlc3RlbXVuaG86ICd0b3RhbFRlc3RlbXVuaG9zJyxcclxuICBjYWxoYTogJ3RvdGFsQ2FsaGFzJyxcclxuICBwbHVnOiAndG90YWxQbHVncycsXHJcbiAgJ3dob2xlIGNvcmUnOiAndG90YWxXaG9sZUNvcmUnXHJcbn1cclxuY29uc3QgTElTVF9UWVBFUyA9IE9iamVjdC5rZXlzKFRZUEVfRklFTEQpXHJcblxyXG5jb25zdCBsb2cxMCA9ICh4OiBudW1iZXIpID0+IChNYXRoLmxvZzEwID8gTWF0aC5sb2cxMCh4KSA6IE1hdGgubG9nKHgpIC8gTWF0aC5MTjEwKVxyXG5cclxuLyogPT09PT0gRmV0Y2ggYmFzZSAoYW1vc3RyYXMpID09PT09ICovXHJcbmZ1bmN0aW9uIGJ1aWxkU2Vzc2lvbkJvZHkoZmFpeGFJbnRlcmVzc2U6IGJvb2xlYW4pIHtcclxuICBjb25zdCBwID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXHJcbiAgcC5zZXQoJ2hkU3lzJywgJ25vdmFpbnRjb25zJylcclxuICBwLnNldCgnaGRVQycsICdNYXBhJylcclxuICBwLnNldCgnaGRBY2FvJywgJ0NhcnJlZ2FyTWFwYURpc3RyaWJ1aWNhb0Ftb3N0cmFzQ29udGFkb3InKVxyXG4gIHAuc2V0KCdoZFNlc3Npb25GaWx0ZXInLCAndHJ1ZScpXHJcbiAgcC5zZXQoJ2ZhaXhhSW50ZXJlc3NlJywgU3RyaW5nKCEhZmFpeGFJbnRlcmVzc2UpKVxyXG4gIHJldHVybiBwLnRvU3RyaW5nKClcclxufVxyXG5mdW5jdGlvbiBub3JtYWxpemVMaXN0KHJhdzogYW55W10pOiBBbW9zdHJhSXRlbVtdIHtcclxuICByZXR1cm4gKEFycmF5LmlzQXJyYXkocmF3KSA/IHJhdyA6IFtdKVxyXG4gICAgLm1hcCgocjogYW55KSA9PiAoe1xyXG4gICAgICBjb2RpZ29Qb2NvOiBOdW1iZXIoci5jb2RpZ29Qb2NvID8/IHIuUE9DT19DRF9QT0NPID8/IHIucG9jbyA/PyByLmNvZGlnbyA/PyAwKSxcclxuICAgICAgdG90YWxBbW9zdHJhc0xhdGVyYWlzOiBOdW1iZXIoci50b3RhbEFtb3N0cmFzTGF0ZXJhaXMgPz8gci5sYXRlcmFpcyA/PyAwKSxcclxuICAgICAgdG90YWxDYWxoYXM6IE51bWJlcihyLnRvdGFsQ2FsaGFzID8/IHIuY2FsaGFzID8/IDApLFxyXG4gICAgICB0b3RhbFBsdWdzOiBOdW1iZXIoci50b3RhbFBsdWdzID8/IHIucGx1Z3MgPz8gMCksXHJcbiAgICAgIHRvdGFsVGVzdGVtdW5ob3M6IE51bWJlcihyLnRvdGFsVGVzdGVtdW5ob3MgPz8gci50ZXN0ZW11bmhvcyA/PyAwKSxcclxuICAgICAgdG90YWxXaG9sZUNvcmU6IE51bWJlcihyLnRvdGFsV2hvbGVDb3JlID8/IHIud2hvbGVDb3JlID8/IDApXHJcbiAgICB9KSlcclxuICAgIC5maWx0ZXIoKHgpID0+ICEheC5jb2RpZ29Qb2NvKVxyXG59XHJcbmZ1bmN0aW9uIGZldGNoVmlhUGFyZW50KGJvZHk6IHN0cmluZyk6IFByb21pc2U8QW1vc3RyYUl0ZW1bXT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCByZXFJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpXHJcbiAgICBsZXQgdGFyZ2V0T3JpZ2luID0gJyonXHJcbiAgICB0cnkgeyBpZiAoZG9jdW1lbnQucmVmZXJyZXIpIHRhcmdldE9yaWdpbiA9IG5ldyBVUkwoZG9jdW1lbnQucmVmZXJyZXIpLm9yaWdpbiB9IGNhdGNoIHt9XHJcblxyXG4gICAgY29uc3Qgb25NZXNzYWdlID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgZCA9IChldmVudCBhcyBhbnkpLmRhdGEgfHwge31cclxuICAgICAgaWYgKGQucmVxSWQgIT09IHJlcUlkKSByZXR1cm5cclxuICAgICAgaWYgKGQudHlwZSA9PT0gJ2ZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXM6b2snKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpXHJcbiAgICAgICAgcmVzb2x2ZShub3JtYWxpemVMaXN0KGQucGF5bG9hZCkpXHJcbiAgICAgIH0gZWxzZSBpZiAoZC50eXBlID09PSAnZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhczplcnInKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpXHJcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihkLm1lc3NhZ2UgfHwgJ0Vycm8gbm8gZmV0Y2ggdmlhIHBhcmVudCcpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSlcclxuICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoeyB0eXBlOiAnZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcycsIGJvZHksIHJlcUlkIH0sIHRhcmdldE9yaWdpbilcclxuICB9KVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXMoZmFpeGFJbnRlcmVzc2UgPSBmYWxzZSk6IFByb21pc2U8QW1vc3RyYUl0ZW1bXT4ge1xyXG4gIGNvbnN0IGJvZHkgPSBidWlsZFNlc3Npb25Cb2R5KGZhaXhhSW50ZXJlc3NlKVxyXG4gIHJldHVybiBmZXRjaFZpYVBhcmVudChib2R5KVxyXG59XHJcblxyXG4vKiA9PT09PSBFc3RpbG9zID09PT09ICovXHJcbmNvbnN0IE1BWF9CVUJCTEUgPSA0MFxyXG5jb25zdCBnbG9iYWxQYW5lbFN0eWxlID0gY3NzYFxyXG4gIGRpdltyb2xlPSdkaWFsb2cnXVthcmlhLWxhYmVsPSdtYXBhLWRlLWRpc3RyaWJ1aWNhbyddLFxyXG4gIGRpdltyb2xlPSdkaWFsb2cnXVthcmlhLWxhYmVsPSdtYXBhLWRlLWRpc3RyaWJ1aWNhby12MiddIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgaW5zZXQ6ICR7UEFORUxfTUFSR0lOX1RPUH1weCAke1BBTkVMX01BUkdJTl9SSUdIVH1weCBhdXRvIGF1dG8gIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6ICR7REVGQVVMVF9XSURUSH1weCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAke0RFRkFVTFRfSEVJR0hUfXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNHB4KSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IGxlZ2VuZEhlYWRlclN0eWxlID0gY3NzYGZvbnQtd2VpZ2h0OjYwMDttYXJnaW46NHB4IDA7Zm9udC1zaXplOi44NXJlbTtsaW5lLWhlaWdodDoxLjE7YFxyXG5jb25zdCBidWJibGVCb3hTdHlsZSA9IGNzc2B3aWR0aDoke01BWF9CVUJCTEV9cHg7aGVpZ2h0OiR7TUFYX0JVQkJMRX1weDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luLXJpZ2h0OjhweDtgXHJcbmNvbnN0IHdyYXBwZXJTdHlsZSA9IGNzc2Bwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQ6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNkZGQ7Ym9yZGVyLXJhZGl1czo2cHg7Ym94LXNoYWRvdzowIDRweCAxMnB4IHJnYmEoMCwwLDAsLjEpO3BhZGRpbmc6MTZweDtvdmVyZmxvdzpoaWRkZW47YFxyXG5jb25zdCB0aXRsZVN0eWxlID0gY3NzYGZvbnQtd2VpZ2h0OjYwMDttYXJnaW4tYm90dG9tOjRweDtkaXNwbGF5OmJsb2NrO2BcclxuY29uc3Qgc2VsZWN0U3R5bGUgPSBjc3Ngd2lkdGg6MTAwJTtwYWRkaW5nOjZweCA4cHg7bWFyZ2luLWJvdHRvbToxMnB4O2JvcmRlcjoxcHggc29saWQgI2NjYztib3JkZXItcmFkaXVzOjRweDtgXHJcblxyXG4vKiogR3JpZCB1c2FkYSBwYXJhIG9ww6fDtWVzICgyIGxpbmhhcykgKi9cclxuY29uc3QgbGlzdFN0eWxlID0gY3NzYFxyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIG1pbm1heCgyNHB4LCBhdXRvKSk7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICBncmlkLWF1dG8tY29sdW1uczogbWlubWF4KDE0MHB4LCAxZnIpO1xyXG4gIGNvbHVtbi1nYXA6IDRweDtcclxuICByb3ctZ2FwOiAycHg7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG5gXHJcblxyXG4vKiogcsOzdHVsbyBjb21wYWN0byBzZXJ2ZSBwYXJhIGNoZWNrYm94IGUgcmFkaW8gKi9cclxuY29uc3QgY2hlY2tib3hMYWJlbFN0eWxlID0gY3NzYFxyXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2x1bW4tZ2FwOiA2cHg7XHJcbiAgcGFkZGluZzogMXB4IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIG1pbi13aWR0aDogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICYgPiAqIHsgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfVxyXG4gIGlucHV0W3R5cGU9J2NoZWNrYm94J10sIGlucHV0W3R5cGU9J3JhZGlvJ10geyB3aWR0aDogMTRweDsgaGVpZ2h0OiAxNHB4OyBtYXJnaW46IDAgIWltcG9ydGFudDsgZmxleDogMCAwIGF1dG87IH1cclxuXHJcbiAgLmxibCB7IG1pbi13aWR0aDogMDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IHdoaXRlLXNwYWNlOiBub3dyYXA7IGZvbnQtc2l6ZTogLjg0cmVtOyBsaW5lLWhlaWdodDogMS4xNTsgcGFkZGluZy1ib3R0b206IDFweDsgfVxyXG5gXHJcblxyXG4vKiogR3JpZCBkb3MgcsOhZGlvcyBkZSBtaW5lcmFpcyovXHJcbmNvbnN0IG1pbmVyYWxzTGlzdFN0eWxlID0gY3NzYFxyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNDBweCwgMWZyKSBtaW5tYXgoMTQwcHgsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWlubWF4KDI0cHgsIGF1dG8pKTtcclxuICBjb2x1bW4tZ2FwOiA0cHg7XHJcbiAgcm93LWdhcDogMnB4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuXHJcbiAgLyogRFJYLVRvdGFsIChSb3cxLCBDb2wxKSAqL1xyXG4gIGxhYmVsW2RhdGEta2V5PSdEUlgtVE9UJ10ge1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBncmlkLXJvdzogMTtcclxuICB9XHJcbiAgLyogUWVtc2Nhbi1NYXNzYSAoUm93MSwgQ29sMikgKi9cclxuICBsYWJlbFtkYXRhLWtleT0nTUFTU0EnXSB7XHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxuICAgIGdyaWQtcm93OiAxO1xyXG4gIH1cclxuICAvKiBEUlgtQXJnaWxvbWluZXJhaXMgKFJvdzIsIENvbDEpICovXHJcbiAgbGFiZWxbZGF0YS1rZXk9J0RSWC1BUkcnXSB7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gIH1cclxuICAvKiBRZW1zY2FuLcOBcmVhIChSb3cyLCBDb2wyKSAqL1xyXG4gIGxhYmVsW2RhdGEta2V5PSdBUkVBJ10ge1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICBncmlkLXJvdzogMjtcclxuICB9XHJcbiAgLyogXCJUb2RhcyBhcyBBbsOhbGlzZXNcIiAoUm93Mywgb2N1cGFuZG8gMiBjb2x1bmFzKSAqL1xyXG4gIGxhYmVsW2RhdGEta2V5PSd0b2Rhc0FuYWxpc2VzJ10ge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XHJcbiAgICBncmlkLXJvdzogMztcclxuICB9XHJcbmBcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHN1bW1hcnlMaXN0U3R5bGUgPSBjc3NgbWF4LWhlaWdodDozMDBweDtvdmVyZmxvdy15OmF1dG87bWFyZ2luLXRvcDo4cHg7cGFkZGluZzo4cHggOHB4IDM2cHg7YmFja2dyb3VuZDojZmZmO2JvcmRlcjoxcHggc29saWQgI2RkZDtib3JkZXItcmFkaXVzOjRweDtwb3NpdGlvbjpyZWxhdGl2ZTtgXHJcbmNvbnN0IHN1bW1hcnlJdGVtU3R5bGUgPSBjc3NgZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW46MnB4O2BcclxuY29uc3QgcmFuZ2VMYWJlbFN0eWxlID0gY3NzYGZvbnQtc2l6ZTouNzhyZW07bGluZS1oZWlnaHQ6MS4xO2BcclxuXHJcbmNvbnN0IGZvb3RlclN0eWxlID0gY3NzYHBvc2l0aW9uOiBzdGlja3k7IGJvdHRvbTogMDsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7IHBhZGRpbmc6IDRweCAwOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiA2cHg7YFxyXG5jb25zdCBmb290ZXJMYWJlbFN0eWxlID0gY3NzYGRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjZweDtwYWRkaW5nLWxlZnQ6LjVlbTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6LjlyZW07YFxyXG5jb25zdCBmb290ZXJMYWJlbFN0eWxlSW50ZXJlc3NlID0gZm9vdGVyTGFiZWxTdHlsZVxyXG5cclxuLyogPT09PT0gU3Vtw6FyaW8gKGFtb3N0cmFzKSA9PT09PSAqL1xyXG5mdW5jdGlvbiBjYWxjdWxhclF1ZWJyYXMoZGFkb3M6IHsgdG90YWw6IG51bWJlciB9W10sIGNvbG9yRmlsbDogc3RyaW5nKSB7XHJcbiAgY29uc3QgdmFsb3JlcyA9IGRhZG9zLm1hcCgocCkgPT4gcC50b3RhbClcclxuICBsZXQgbWluID0gTWF0aC5taW4oLi4udmFsb3JlcylcclxuICBsZXQgbWF4ID0gTWF0aC5tYXgoLi4udmFsb3JlcylcclxuXHJcbiAgY29uc3QgaW5mbzogeyBsYWJlbDogc3RyaW5nOyBzaXplOiBudW1iZXI7IGNvcjogc3RyaW5nOyBjb3VudDogbnVtYmVyIH1bXSA9IFtdXHJcbiAgaWYgKCFpc0Zpbml0ZShtaW4pIHx8ICFpc0Zpbml0ZShtYXgpKSByZXR1cm4gaW5mb1xyXG5cclxuICBpZiAobWluID09PSAwICYmIG1heCA9PT0gMCkge1xyXG4gICAgaW5mby5wdXNoKHsgbGFiZWw6ICdOw6NvIGjDoSBkYWRvcyBzdWZpY2llbnRlcycsIHNpemU6IDAsIGNvcjogY29sb3JGaWxsLCBjb3VudDogMCB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB6ZXJhZG9zID0gdmFsb3Jlcy5maWx0ZXIoKHYpID0+IHYgPT09IDApLmxlbmd0aFxyXG4gICAgY29uc3QgbmFvWmVyYWRvcyA9IHZhbG9yZXMuZmlsdGVyKCh2KSA9PiB2ID4gMClcclxuXHJcbiAgICBpZiAoemVyYWRvcyA+IDApIHtcclxuICAgICAgaW5mby5wdXNoKHsgbGFiZWw6IGB8IDAgfCAoJHt6ZXJhZG9zfSBwb8OnbyR7emVyYWRvcyA+IDEgPyAncycgOiAnJ30pYCwgc2l6ZTogNiwgY29yOiAncmdiYSgyMDAsMjAwLDIwMCwwLjMpJywgY291bnQ6IHplcmFkb3MgfSlcclxuICAgIH1cclxuXHJcbiAgICBtaW4gPSAxXHJcbiAgICBjb25zdCBuID0gbmFvWmVyYWRvcy5sZW5ndGhcclxuICAgIGNvbnN0IG51bUNsYXNzZXMgPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKDEgKyAzLjMgKiBsb2cxMChuIHx8IDEpKSlcclxuICAgIGNvbnN0IGJyZWFrcyA9IE1hdGguY2VpbCgobWF4IC0gbWluICsgMSkgLyBudW1DbGFzc2VzKVxyXG4gICAgY29uc3QgbWF4U2l6ZSA9IDMwXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1DbGFzc2VzOyBpKyspIHtcclxuICAgICAgY29uc3QgbWluVmFsdWUgPSBtaW4gKyBpICogYnJlYWtzXHJcbiAgICAgIGNvbnN0IG1heFZhbHVlID0gbWluICsgKGkgKyAxKSAqIGJyZWFrcyAtIDFcclxuICAgICAgaWYgKG1pblZhbHVlID4gbWF4KSBicmVha1xyXG4gICAgICBjb25zdCBjb3VudCA9IG5hb1plcmFkb3MuZmlsdGVyKCh2KSA9PiB2ID49IG1pblZhbHVlICYmIHYgPD0gbWF4VmFsdWUpLmxlbmd0aFxyXG4gICAgICBjb25zdCBsYWJlbCA9IGAke21pblZhbHVlfSB8LS0tfCAke21heFZhbHVlfSAoJHtjb3VudH0gcG/Dp28ke2NvdW50ID4gMSA/ICdzJyA6ICcnfSlgXHJcbiAgICAgIGNvbnN0IHNpemUgPSA2ICsgaSAqIChtYXhTaXplIC8gbnVtQ2xhc3NlcylcclxuICAgICAgaW5mby5wdXNoKHsgbGFiZWwsIHNpemUsIGNvcjogY29sb3JGaWxsLCBjb3VudCB9KVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gaW5mb1xyXG59XHJcblxyXG4vKiA9PT09PSBIZWxwZXJzIGRpYWxvZy9wb3NpY2lvbmFtZW50byAobWVzbW9zIGRvIHNldSBjw7NkaWdvKSA9PT09PSAqL1xyXG5mdW5jdGlvbiBmaW5kQ2xvc2VzdERpYWxvZyhlbDogSFRNTEVsZW1lbnQgfCBudWxsKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICBsZXQgY3VyOiBIVE1MRWxlbWVudCB8IG51bGwgPSBlbFxyXG4gIHdoaWxlIChjdXIpIHsgaWYgKGN1ci5nZXRBdHRyaWJ1dGUgJiYgY3VyLmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAnZGlhbG9nJykgcmV0dXJuIGN1cjsgY3VyID0gY3VyPy5wYXJlbnRFbGVtZW50ID8/IG51bGwgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuZnVuY3Rpb24gaXNEaWFsb2dIaWRkZW4oZGxnOiBIVE1MRWxlbWVudCkge1xyXG4gIGNvbnN0IGNzID0gZ2V0Q29tcHV0ZWRTdHlsZShkbGcpXHJcbiAgcmV0dXJuIGRsZy5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykgPT09ICd0cnVlJyB8fCBjcy5kaXNwbGF5ID09PSAnbm9uZScgfHwgY3MudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbidcclxufVxyXG5sZXQgX2FwcGx5aW5nU3R5bGUgPSBmYWxzZVxyXG5mdW5jdGlvbiBmb3JjZVBhbmVsU3R5bGUoZGxnOiBIVE1MRWxlbWVudCkge1xyXG4gIGlmIChfYXBwbHlpbmdTdHlsZSkgcmV0dXJuXHJcbiAgX2FwcGx5aW5nU3R5bGUgPSB0cnVlXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHMgPSBkbGcuc3R5bGVcclxuICAgIGlmIChzLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJykgIT09ICdhYnNvbHV0ZScpIHMuc2V0UHJvcGVydHkoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJywgJ2ltcG9ydGFudCcpXHJcbiAgICBzLnJlbW92ZVByb3BlcnR5KCdsZWZ0Jyk7IHMucmVtb3ZlUHJvcGVydHkoJ2JvdHRvbScpOyBzLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKVxyXG4gICAgcy5zZXRQcm9wZXJ0eSgnaW5zZXQnLCAnYXV0byBhdXRvIGF1dG8gYXV0bycpXHJcbiAgICBzLnNldFByb3BlcnR5KCd0b3AnLCBgJHtQQU5FTF9NQVJHSU5fVE9QfXB4YCwgJ2ltcG9ydGFudCcpXHJcbiAgICBzLnNldFByb3BlcnR5KCdyaWdodCcsIGAke1BBTkVMX01BUkdJTl9SSUdIVH1weGAsICdpbXBvcnRhbnQnKVxyXG4gICAgaWYgKHMuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKSAhPT0gYCR7REVGQVVMVF9XSURUSH1weGApIHMuc2V0UHJvcGVydHkoJ3dpZHRoJywgYCR7REVGQVVMVF9XSURUSH1weGAsICdpbXBvcnRhbnQnKVxyXG4gICAgaWYgKHMuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykgIT09IGAke0RFRkFVTFRfSEVJR0hUfXB4YCkgcy5zZXRQcm9wZXJ0eSgnaGVpZ2h0JywgYCR7REVGQVVMVF9IRUlHSFR9cHhgLCAnaW1wb3J0YW50JylcclxuICAgIGlmIChzLmdldFByb3BlcnR5VmFsdWUoJ21heC1oZWlnaHQnKSAhPT0gJ2NhbGMoMTAwJSAtIDI0cHgpJykgcy5zZXRQcm9wZXJ0eSgnbWF4LWhlaWdodCcsICdjYWxjKDEwMCUgLSAyNHB4KScsICdpbXBvcnRhbnQnKVxyXG4gICAgaWYgKHMuZ2V0UHJvcGVydHlWYWx1ZSgnb3ZlcmZsb3cnKSAhPT0gJ3Zpc2libGUnKSBzLnNldFByb3BlcnR5KCdvdmVyZmxvdycsICd2aXNpYmxlJywgJ2ltcG9ydGFudCcpXHJcbiAgICBpZiAocy5nZXRQcm9wZXJ0eVZhbHVlKCd6LWluZGV4JykgIT09ICc5OTk5Jykgcy5zZXRQcm9wZXJ0eSgnei1pbmRleCcsICc5OTk5JywgJ2ltcG9ydGFudCcpXHJcbiAgfSBmaW5hbGx5IHsgX2FwcGx5aW5nU3R5bGUgPSBmYWxzZSB9XHJcbn1cclxuZnVuY3Rpb24gdXNlRm9yY2VSaWdodFBvc2l0aW9uKHJvb3RSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4pIHtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNsZWFudXA6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsXHJcbiAgICBjb25zdCBhcHBseSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgZGxnID1cclxuICAgICAgICAocm9vdFJlZi5jdXJyZW50ICYmIChyb290UmVmLmN1cnJlbnQuY2xvc2VzdCgnW3JvbGU9XCJkaWFsb2dcIl0nKSBhcyBIVE1MRWxlbWVudCkpIHx8XHJcbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdltyb2xlPVwiZGlhbG9nXCJdW2FyaWEtbGFiZWw9XCJtYXBhLWRlLWRpc3RyaWJ1aWNhby12MlwiXScpIGFzIEhUTUxFbGVtZW50KSB8fFxyXG4gICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXZbcm9sZT1cImRpYWxvZ1wiXVthcmlhLWxhYmVsPVwibWFwYS1kZS1kaXN0cmlidWljYW9cIl0nKSBhcyBIVE1MRWxlbWVudClcclxuICAgICAgaWYgKCFkbGcpIHJldHVyblxyXG4gICAgICBmb3JjZVBhbmVsU3R5bGUoZGxnKVxyXG4gICAgICBjb25zdCBtbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcclxuICAgICAgICBpZiAoX2FwcGx5aW5nU3R5bGUpIHJldHVyblxyXG4gICAgICAgIGlmIChtdXRhdGlvbnMuc29tZSgobSkgPT4gbS5hdHRyaWJ1dGVOYW1lID09PSAnc3R5bGUnKSkge1xyXG4gICAgICAgICAgY29uc3QgcyA9IGRsZy5zdHlsZVxyXG4gICAgICAgICAgY29uc3QgZHJpZnQgPSBzLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJykgIT09ICdhYnNvbHV0ZSdcclxuICAgICAgICAgICAgfHwgcy5nZXRQcm9wZXJ0eVZhbHVlKCd0b3AnKSAhPT0gYCR7UEFORUxfTUFSR0lOX1RPUH1weGBcclxuICAgICAgICAgICAgfHwgcy5nZXRQcm9wZXJ0eVZhbHVlKCdyaWdodCcpICE9PSBgJHtQQU5FTF9NQVJHSU5fUklHSFR9cHhgXHJcbiAgICAgICAgICAgIHx8IChzLnRyYW5zZm9ybSAmJiBzLnRyYW5zZm9ybSAhPT0gJ25vbmUnKVxyXG4gICAgICAgICAgaWYgKGRyaWZ0KSBmb3JjZVBhbmVsU3R5bGUoZGxnKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgbW8ub2JzZXJ2ZShkbGcsIHsgYXR0cmlidXRlczogdHJ1ZSwgYXR0cmlidXRlRmlsdGVyOiBbJ3N0eWxlJ10gfSlcclxuICAgICAgbGV0IHRvOiBhbnlcclxuICAgICAgY29uc3Qgb25SZXNpemUgPSAoKSA9PiB7IGNsZWFyVGltZW91dCh0byk7IHRvID0gc2V0VGltZW91dCgoKSA9PiBmb3JjZVBhbmVsU3R5bGUoZGxnKSwgODApIH1cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKVxyXG4gICAgICBjbGVhbnVwID0gKCkgPT4geyBtby5kaXNjb25uZWN0KCk7IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSkgfVxyXG4gICAgfVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFwcGx5KTsgc2V0VGltZW91dChhcHBseSwgODApOyBzZXRUaW1lb3V0KGFwcGx5LCAzMDApXHJcbiAgICByZXR1cm4gKCkgPT4geyBjbGVhbnVwPy4oKSB9XHJcbiAgfSwgW3Jvb3RSZWZdKVxyXG59XHJcblxyXG5jb25zdCBsYXllcklkRm9yU2FtcGxlID0gKHRpcG86IHN0cmluZykgPT4gYGFtb3N0cmFzXyR7dGlwby5yZXBsYWNlKC9cXHMrL2csICdfJyl9YFxyXG5mdW5jdGlvbiBjbGVhckFtb3N0cmFzKHZpZXc6IF9fZXNyaS5WaWV3KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFsbCA9ICh2aWV3Lm1hcCBhcyBhbnkpLmFsbExheWVycz8udG9BcnJheT8uKCkgPz8gdmlldy5tYXAubGF5ZXJzPy50b0FycmF5Py4oKSA/PyBbXVxyXG4gICAgYWxsLmZvckVhY2goKGx5OiBhbnkpID0+IHsgY29uc3QgaWQgPSBTdHJpbmcobHk/LmlkID8/ICcnKTsgaWYgKGlkLnN0YXJ0c1dpdGgoJ2Ftb3N0cmFzXycpKSB2aWV3Lm1hcC5yZW1vdmUobHkpIH0pXHJcbiAgfSBjYXRjaCB7fVxyXG59XHJcbmZ1bmN0aW9uIGNsZWFyTGF5ZXJPZlRpcG8odmlldzogX19lc3JpLlZpZXcsIHRpcG86IHN0cmluZykge1xyXG4gIHRyeSB7IGNvbnN0IGx5ciA9IHZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXJJZEZvclNhbXBsZSh0aXBvKSkgYXMgYW55OyBpZiAobHlyKSB2aWV3Lm1hcC5yZW1vdmUobHlyKSB9IGNhdGNoIHt9XHJcbn1cclxuZnVuY3Rpb24gZGlzYWJsZUNsdXN0ZXJOdW1iZXJzKGx5cjogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghbHlyKSByZXR1cm5cclxuICAgIGlmIChseXIuZmVhdHVyZVJlZHVjdGlvbiAmJiBseXIuZmVhdHVyZVJlZHVjdGlvbi50eXBlID09PSAnY2x1c3RlcicpIHtcclxuICAgICAgbHlyLmZlYXR1cmVSZWR1Y3Rpb24gPSB7IC4uLmx5ci5mZWF0dXJlUmVkdWN0aW9uLCBsYWJlbHNWaXNpYmxlOiBmYWxzZSB9XHJcbiAgICB9XHJcbiAgICBpZiAoJ2xhYmVsc1Zpc2libGUnIGluIGx5cikgKGx5ciBhcyBhbnkpLmxhYmVsc1Zpc2libGUgPSBmYWxzZVxyXG4gICAgaWYgKCdsYWJlbGluZ0luZm8nIGluIGx5cikgKGx5ciBhcyBhbnkpLmxhYmVsaW5nSW5mbyA9IFtdXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSgobHlyIGFzIGFueSkuc3VibGF5ZXJzKSkgKGx5ciBhcyBhbnkpLnN1YmxheWVycy5mb3JFYWNoKChzbDogYW55KSA9PiBkaXNhYmxlQ2x1c3Rlck51bWJlcnMoc2wpKVxyXG4gIH0gY2F0Y2gge31cclxufVxyXG5cclxuLyogPT09PT0gQ29tcG9uZW50ZSA9PT09PSAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQocHJvcHM6IGFueSkge1xyXG4gIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddID0gUmVhY3QudXNlU3RhdGU8SmltdU1hcFZpZXc+KClcclxuICBjb25zdCBbY2F0ZWdvcmlhLCBzZXRDYXRlZ29yaWFdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJykgLy8gJ3NhbXBsZScgfCAnbWluZXJhbHMnXHJcbiAgY29uc3QgW3RpcG9zU2VsLCBzZXRUaXBvc1NlbF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pIC8vIGFtb3N0cmFzIChjaGVja2JveGVzKVxyXG4gIGNvbnN0IFtzaG93RW1wdHksIHNldFNob3dFbXB0eV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuXHJcbiAgLy8gSW50ZXJlc3NlXHJcbiAgY29uc3QgW3dpdGhJbnRlcmVzdCwgc2V0V2l0aEludGVyZXN0XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtzaG93V2l0aEludGVyZXN0LCBzZXRzaG93V2l0aEludGVyZXN0XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtmYWl4YVNldCwgc2V0RmFpeGFTZXRdID0gUmVhY3QudXNlU3RhdGU8U2V0PG51bWJlcj4+KFxyXG4gICAgKCkgPT4gbmV3IFNldDxudW1iZXI+KChBcnJheS5pc0FycmF5KHByb3BzPy5jb2RpZ29zRmFpeGFJbnRlcmVzc2UpID8gcHJvcHMuY29kaWdvc0ZhaXhhSW50ZXJlc3NlIDogW10pXHJcbiAgICAgIC5tYXAoKHY6IGFueSkgPT4gTnVtYmVyKHYpKS5maWx0ZXIoKHY6IGFueSkgPT4gIWlzTmFOKHYpKSlcclxuICApXHJcblxyXG4gIC8vIEJhc2VzIChhbW9zdHJhcylcclxuICBjb25zdCBbZGFkb3NGdWxsLCBzZXREYWRvc0Z1bGxdID0gUmVhY3QudXNlU3RhdGU8QW1vc3RyYUl0ZW1bXSB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW2RhZG9zRmFpeGFBUEksIHNldERhZG9zRmFpeGFBUEldID0gUmVhY3QudXNlU3RhdGU8QW1vc3RyYUl0ZW1bXSB8IG51bGw+KG51bGwpXHJcblxyXG4gIC8vIE1pbmVyYWlzXHJcbiAgY29uc3QgW21pbmVyYWxBbmFsaXNlLCBzZXRNaW5lcmFsQW5hbGlzZV0gPSBSZWFjdC51c2VTdGF0ZTxNaW5lcmFsVGlwbyB8ICcnPignJykgLy8gcsOhZGlvIChEUlgvUWVtc2Nhbi9Ub2RhcylcclxuICBjb25zdCBbbGlzdGFNaW5lcmFpcywgc2V0TGlzdGFNaW5lcmFpc10gPSBSZWFjdC51c2VTdGF0ZTxNaW5lcmFsTGlzdGFJdGVtW10+KFtdKVxyXG4gIGNvbnN0IFtidXNjYU1pbmVyYWwsIHNldEJ1c2NhTWluZXJhbF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbWluZXJhbFNlbGVjaW9uYWRvLCBzZXRNaW5lcmFsU2VsZWNpb25hZG9dID0gUmVhY3QudXNlU3RhdGU8TWluZXJhbExpc3RhSXRlbSB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW2FncnVwYWRvciwgc2V0QWdydXBhZG9yXSA9IFJlYWN0LnVzZVN0YXRlPCdhbmFsaXNlJyB8ICdtZWRpYScgfCAnbWF4aW1hJyB8ICcnPignJykgLy8gYWdydXBhZG9yZXNcclxuICBjb25zdCBbZGFkb3NNaW5lcmFpcywgc2V0RGFkb3NNaW5lcmFpc10gPSBSZWFjdC51c2VTdGF0ZTxpbXBvcnQoJy4vTWluZXJhbHMnKS5NaW5lcmFsSXRlbVtdIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBbbG9hZGluZ01pbmVyYWlzLCBzZXRMb2FkaW5nTWluZXJhaXNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2Vycm9yTWluZXJhaXMsIHNldEVycm9yTWluZXJhaXNdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gIC8vIExvYWRpbmcgLyBlcnJvcyAoYW1vc3RyYXMpXHJcbiAgY29uc3QgW2xvYWRpbmdGdWxsLCBzZXRMb2FkaW5nRnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbG9hZGluZ0ludGVyZXN0LCBzZXRMb2FkaW5nSW50ZXJlc3RdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2Vycm9yRnVsbCwgc2V0RXJyb3JGdWxsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpXHJcbiAgY29uc3QgW2Vycm9ySW50ZXJlc3QsIHNldEVycm9ySW50ZXJlc3RdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJylcclxuXHJcbiAgY29uc3Qgcm9vdFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcclxuICB1c2VGb3JjZVJpZ2h0UG9zaXRpb24ocm9vdFJlZilcclxuXHJcbiAgY29uc3QgaW50ZXJlc3RNYW51YWxSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpXHJcblxyXG4gIC8qIFJlY2ViZSBmYWl4YSBkZSBpbnRlcmVzc2UgZG8gXCJwYWlcIiAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvbk1zZyA9IChldjogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBldj8uZGF0YSBhcyBNc2dGYWl4YUludGVyZXNzZVxyXG4gICAgICBpZiAoIWRhdGEgfHwgZGF0YS50eXBlICE9PSAnZmFpeGEtaW50ZXJlc3NlJyB8fCAhQXJyYXkuaXNBcnJheShkYXRhLmNvZGlnb3NQb2NvcykpIHJldHVyblxyXG4gICAgICBjb25zdCBudW1zID0gZGF0YS5jb2RpZ29zUG9jb3MubWFwKCh2KSA9PiBOdW1iZXIodikpLmZpbHRlcigodikgPT4gIWlzTmFOKHYpKVxyXG4gICAgICBzZXRGYWl4YVNldChuZXcgU2V0PG51bWJlcj4obnVtcykpXHJcbiAgICAgIGlmIChudW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZXRzaG93V2l0aEludGVyZXN0KHRydWUpXHJcbiAgICAgICAgaWYgKCFpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50KSBzZXRXaXRoSW50ZXJlc3QodHJ1ZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1zZylcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTXNnKVxyXG4gIH0sIFtdKVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGZhaXhhU2V0LnNpemUgPiAwKSB7XHJcbiAgICAgIHNldHNob3dXaXRoSW50ZXJlc3QodHJ1ZSlcclxuICAgICAgaWYgKCFpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50KSBzZXRXaXRoSW50ZXJlc3QodHJ1ZSlcclxuICAgIH1cclxuICB9LCBbZmFpeGFTZXRdKVxyXG5cclxuICAvKiA9PT09PT0gQU1PU1RSQVM6IGNhcnJlZ2FyIGJhc2UgPT09PT09ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICBpZiAoY2F0ZWdvcmlhICE9PSAnc2FtcGxlJykgcmV0dXJuXHJcbiAgICAgIHNldExvYWRpbmdGdWxsKHRydWUpOyBzZXRFcnJvckZ1bGwoJycpXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXMod2l0aEludGVyZXN0IHx8IERFRkFVTFRfRkFJWEFfSU5URVJFU1NFKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSBzZXREYWRvc0Z1bGwoZGF0YSlcclxuICAgICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHsgc2V0RXJyb3JGdWxsKGU/Lm1lc3NhZ2UgfHwgJ0ZhbGhhIGFvIGJ1c2NhciBkYWRvcycpOyBzZXREYWRvc0Z1bGwoW10pIH1cclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkgc2V0TG9hZGluZ0Z1bGwoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJ1bigpXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbY2F0ZWdvcmlhLCB3aXRoSW50ZXJlc3RdKVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXHJcbiAgICBhc3luYyBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICAgIGlmIChjYXRlZ29yaWEgIT09ICdzYW1wbGUnKSByZXR1cm5cclxuICAgICAgaWYgKCF3aXRoSW50ZXJlc3QpIHJldHVyblxyXG4gICAgICBpZiAoZmFpeGFTZXQuc2l6ZSA+IDApIHJldHVyblxyXG4gICAgICBpZiAoZGFkb3NGYWl4YUFQSSAhPT0gbnVsbCkgcmV0dXJuXHJcbiAgICAgIHNldExvYWRpbmdJbnRlcmVzdCh0cnVlKTsgc2V0RXJyb3JJbnRlcmVzdCgnJylcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcyh0cnVlKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSBzZXREYWRvc0ZhaXhhQVBJKGRhdGEpXHJcbiAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7IHNldEVycm9ySW50ZXJlc3QoZT8ubWVzc2FnZSB8fCAnRmFsaGEgYW8gYnVzY2FyIGRhZG9zIGRvIGludGVydmFsbyBkZSBpbnRlcmVzc2UnKTsgc2V0RGFkb3NGYWl4YUFQSShbXSkgfVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSBzZXRMb2FkaW5nSW50ZXJlc3QoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJ1bigpXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbY2F0ZWdvcmlhLCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0LCBkYWRvc0ZhaXhhQVBJXSlcclxuXHJcbiAgLyogPT09PT09IEFNT1NUUkFTOiBkZXNlbmhhciA9PT09PT0gKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgam12ID0gamltdU1hcFZpZXdcclxuICAgIGlmICgham12Py52aWV3KSByZXR1cm5cclxuICAgIGlmIChjYXRlZ29yaWEgIT09ICdzYW1wbGUnKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBiYXNlOiBBbW9zdHJhSXRlbVtdID0gd2l0aEludGVyZXN0XHJcbiAgICAgID8gKGZhaXhhU2V0LnNpemUgPiAwXHJcbiAgICAgICAgICA/IChkYWRvc0Z1bGwgPz8gW10pLmZpbHRlcih4ID0+IGZhaXhhU2V0LmhhcyhOdW1iZXIoeC5jb2RpZ29Qb2NvKSkpXHJcbiAgICAgICAgICA6IChkYWRvc0ZhaXhhQVBJID8/IGRhZG9zRnVsbCA/PyBbXSkpXHJcbiAgICAgIDogKGRhZG9zRnVsbCA/PyBbXSlcclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYmFzZSkgfHwgYmFzZS5sZW5ndGggPT09IDApIHJldHVyblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRpcG9zU2VsKSB8fCB0aXBvc1NlbC5sZW5ndGggPT09IDApIHJldHVyblxyXG5cclxuICAgIGNvbnN0IHsgdmlldyB9ID0gam12XHJcblxyXG4gICAgdGlwb3NTZWwuZm9yRWFjaCgodGlwbykgPT4ge1xyXG4gICAgICBjb25zdCBkYWRvcyA9IGJhc2VcclxuICAgICAgICAubWFwKGQgPT4gKHsgY29kaWdvUG9jbzogZC5jb2RpZ29Qb2NvLCB0b3RhbDogZFtUWVBFX0ZJRUxEW3RpcG9dXSA/PyAwIH0pKVxyXG4gICAgICAgIC5maWx0ZXIoZCA9PiAoZC50b3RhbCA/PyAwKSA+IDApXHJcblxyXG4gICAgICBjbGVhckxheWVyT2ZUaXBvKHZpZXcsIHRpcG8pXHJcbiAgICAgIGlmIChkYWRvcy5sZW5ndGggPT09IDApIHJldHVyblxyXG5cclxuICAgICAgY29uc3QgY29sb3JGaWxsID0gY29yZXNUaXBvc1t0aXBvXSB8fCAncmdiYSgwLDAsMCwwLjUpJ1xyXG4gICAgICBjb25zdCBpZENhbWFkYSA9IGxheWVySWRGb3JTYW1wbGUodGlwbylcclxuICAgICAgY29uc3QgaWRMZWdlbmRhID0gYGxnZF8ke2lkQ2FtYWRhfWBcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIoe1xyXG4gICAgICAgICAgamltdU1hcFZpZXc6IGptdixcclxuICAgICAgICAgIGRhZG9zLFxyXG4gICAgICAgICAgY29sb3JGaWxsLFxyXG4gICAgICAgICAgaWRDYW1hZGEsXHJcbiAgICAgICAgICBpZExlZ2VuZGEsXHJcbiAgICAgICAgICB0aXRsZUxlZ2VuZGE6ICh3aXRoSW50ZXJlc3QgPyAnSW50ZXJ2YWxvIGRlIEludGVyZXNzZSAtICcgOiAnJykgKyAodGlwby5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRpcG8uc2xpY2UoMSkpLFxyXG4gICAgICAgICAgd2l0aEludGVyZXN0XHJcbiAgICAgICAgfSBhcyBhbnkpXHJcblxyXG4gICAgICAgIGNvbnN0IGx5ciA9IHZpZXcubWFwLmZpbmRMYXllckJ5SWQoaWRDYW1hZGEpIGFzIGFueVxyXG4gICAgICAgIGlmIChseXIpIGRpc2FibGVDbHVzdGVyTnVtYmVycyhseXIpXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBbYW1vc3RyYXNdIGZhbGhhIGFvIGdlcmFyIGNhbWFkYSAke2lkQ2FtYWRhfWAsIGUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSwgW2ppbXVNYXBWaWV3LCB0aXBvc1NlbCwgd2l0aEludGVyZXN0LCBmYWl4YVNldCwgZGFkb3NGdWxsLCBkYWRvc0ZhaXhhQVBJLCBjYXRlZ29yaWFdKVxyXG5cclxuICAvKiA9PT09PT0gTUlORVJBSVM6IGFvIG11ZGFyIG8gcmFkaW8gZGUgYW7DoWxpc2UgLT4gYnVzY2EgQ09OVEFET1IgZSBMSVNUQSA9PT09PT0gKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXHJcbiAgICBhc3luYyBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICAgIGlmIChjYXRlZ29yaWEgIT09ICdtaW5lcmFscycpIHJldHVyblxyXG4gICAgICBpZiAoIW1pbmVyYWxBbmFsaXNlKSByZXR1cm5cclxuXHJcbiAgICAgIC8vIHJlc2V0IFVJIGRlcGVuZGVudGVcclxuICAgICAgc2V0TWluZXJhbFNlbGVjaW9uYWRvKG51bGwpXHJcbiAgICAgIHNldEFncnVwYWRvcignJylcclxuICAgICAgc2V0TGlzdGFNaW5lcmFpcyhbXSlcclxuICAgICAgc2V0QnVzY2FNaW5lcmFsKCcnKVxyXG4gICAgICBzZXRFcnJvck1pbmVyYWlzKCcnKVxyXG4gICAgICBzZXRMb2FkaW5nTWluZXJhaXModHJ1ZSlcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgW2NvbnRhZG9yLCBsaXN0YV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICBmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzQ29udGFkb3IobWluZXJhbEFuYWxpc2UgYXMgTWluZXJhbFRpcG8sIHdpdGhJbnRlcmVzdCksXHJcbiAgICAgICAgICBmZXRjaE1pbmVyYWxMaXN0YShtaW5lcmFsQW5hbGlzZSBhcyBNaW5lcmFsVGlwbywgd2l0aEludGVyZXN0KVxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcclxuICAgICAgICAgIHNldERhZG9zTWluZXJhaXMoY29udGFkb3IpXHJcbiAgICAgICAgICBzZXRMaXN0YU1pbmVyYWlzKGxpc3RhKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcclxuICAgICAgICAgIHNldEVycm9yTWluZXJhaXMoZT8ubWVzc2FnZSB8fCAnRmFsaGEgYW8gYnVzY2FyIG1pbmVyYWlzJylcclxuICAgICAgICAgIHNldERhZG9zTWluZXJhaXMoW10pXHJcbiAgICAgICAgICBzZXRMaXN0YU1pbmVyYWlzKFtdKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkgc2V0TG9hZGluZ01pbmVyYWlzKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBydW4oKVxyXG4gICAgcmV0dXJuICgpID0+IHsgY2FuY2VsbGVkID0gdHJ1ZSB9XHJcbiAgfSwgW2NhdGVnb3JpYSwgbWluZXJhbEFuYWxpc2UsIHdpdGhJbnRlcmVzdF0pXHJcblxyXG4gIC8qID09PT09PSBNSU5FUkFJUzogZGVzZW5oYXIgYmFzZSAoY29udGFkb3IpIHF1YW5kbyBjaGVnYSA9PT09PT0gKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNhdGVnb3JpYSAhPT0gJ21pbmVyYWxzJykgcmV0dXJuXHJcbiAgICBpZiAoIWppbXVNYXBWaWV3Py52aWV3KSByZXR1cm5cclxuICAgIGlmICghbWluZXJhbEFuYWxpc2UpIHJldHVyblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhZG9zTWluZXJhaXMpKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBiYXNlID0gKHdpdGhJbnRlcmVzdCAmJiBmYWl4YVNldC5zaXplID4gMClcclxuICAgICAgPyBkYWRvc01pbmVyYWlzLmZpbHRlcihkID0+IGZhaXhhU2V0LmhhcyhOdW1iZXIoZC5jb2RpZ29Qb2NvKSkpXHJcbiAgICAgIDogZGFkb3NNaW5lcmFpc1xyXG5cclxuICAgIGlmIChiYXNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuXHJcblxyXG4gICAgZGVzZW5oYXJEaXN0cmlidWljYW9NaW5lcmFpcyhqaW11TWFwVmlldywgYmFzZSwgbWluZXJhbEFuYWxpc2UgYXMgTWluZXJhbFRpcG8sIHdpdGhJbnRlcmVzdClcclxuICB9LCBbamltdU1hcFZpZXcsIGNhdGVnb3JpYSwgbWluZXJhbEFuYWxpc2UsIGRhZG9zTWluZXJhaXMsIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXRdKVxyXG5cclxuICAvKiA9PT09PT0gTUlORVJBSVM6IGFvIGVzY29saGVyIE1JTkVSQUwgKyBBR1JVUEFET1IgLT4gYXBsaWNhIGNvbG9yaXphw6fDo28gc3RvcHMgPT09PT09ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICBpZiAoY2F0ZWdvcmlhICE9PSAnbWluZXJhbHMnKSByZXR1cm5cclxuICAgICAgaWYgKCFqaW11TWFwVmlldz8udmlldykgcmV0dXJuXHJcbiAgICAgIGlmICghbWluZXJhbEFuYWxpc2UpIHJldHVyblxyXG4gICAgICBpZiAoIW1pbmVyYWxTZWxlY2lvbmFkbykgcmV0dXJuXHJcbiAgICAgIGlmICghYWdydXBhZG9yKSByZXR1cm5cclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGFkb3MgPSBhd2FpdCBmZXRjaE1pbmVyYWxBZ3J1cGFkb3IoXHJcbiAgICAgICAgICBtaW5lcmFsQW5hbGlzZSBhcyBNaW5lcmFsVGlwbyxcclxuICAgICAgICAgIG1pbmVyYWxTZWxlY2lvbmFkby5ub21lUmVzdW1pZG9NaW5lcmFsLFxyXG4gICAgICAgICAgd2l0aEludGVyZXN0XHJcbiAgICAgICAgKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICBhd2FpdCBhcGxpY2FyQ29sb3JpemFjYW9Qb3JBZ3J1cGFkb3IoXHJcbiAgICAgICAgICAgIGppbXVNYXBWaWV3LFxyXG4gICAgICAgICAgICBtaW5lcmFsQW5hbGlzZSBhcyBNaW5lcmFsVGlwbyxcclxuICAgICAgICAgICAgZGFkb3MsXHJcbiAgICAgICAgICAgIGFncnVwYWRvciBhcyAnYW5hbGlzZScgfCAnbWVkaWEnIHwgJ21heGltYSdcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWxoYSBhbyBhcGxpY2FyIGNvbG9yaXphw6fDo28gcG9yIGFncnVwYWRvcicsIGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJ1bigpXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbamltdU1hcFZpZXcsIGNhdGVnb3JpYSwgbWluZXJhbEFuYWxpc2UsIG1pbmVyYWxTZWxlY2lvbmFkbywgYWdydXBhZG9yLCB3aXRoSW50ZXJlc3RdKVxyXG5cclxuICAvLyBSZXNldC9mZWNoYXJcclxuICBjb25zdCByZXNldFVpU3RhdGUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRUaXBvc1NlbChbXSk7IHNldFNob3dFbXB0eShmYWxzZSk7IHNldFdpdGhJbnRlcmVzdChmYWxzZSk7IHNldENhdGVnb3JpYSgnJyk7XHJcbiAgICBzZXREYWRvc0Z1bGwobnVsbCk7IHNldERhZG9zRmFpeGFBUEkobnVsbCk7XHJcbiAgICBzZXRNaW5lcmFsQW5hbGlzZSgnJyk7IHNldERhZG9zTWluZXJhaXMobnVsbCk7IHNldEVycm9yTWluZXJhaXMoJycpOyBzZXRMb2FkaW5nTWluZXJhaXMoZmFsc2UpO1xyXG4gICAgc2V0TGlzdGFNaW5lcmFpcyhbXSk7IHNldEJ1c2NhTWluZXJhbCgnJyk7IHNldE1pbmVyYWxTZWxlY2lvbmFkbyhudWxsKTsgc2V0QWdydXBhZG9yKCcnKTtcclxuICAgIGludGVyZXN0TWFudWFsUmVmLmN1cnJlbnQgPSBmYWxzZVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3Py52aWV3XHJcbiAgICBpZiAodmlldykgY2xlYXJBbW9zdHJhcyh2aWV3KVxyXG4gICAgcmVzZXRVaVN0YXRlKClcclxuICB9LCBbamltdU1hcFZpZXcsIHJlc2V0VWlTdGF0ZV0pXHJcblxyXG4gIC8vIEZlY2hhciBwb3IgYm90w6NvL29jdWx0YXIgZGnDoWxvZ28gKG1hbnRpZG8pXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldz8udmlldzsgaWYgKCF2aWV3KSByZXR1cm5cclxuICAgIGNvbnN0IHJvb3QgPSByb290UmVmLmN1cnJlbnQ7IGlmICghcm9vdCkgcmV0dXJuXHJcbiAgICBjb25zdCBkbGcgPSBmaW5kQ2xvc2VzdERpYWxvZyhyb290KTsgaWYgKCFkbGcpIHJldHVyblxyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkbGcucXVlcnlTZWxlY3RvcihcclxuICAgICAgJ2J1dHRvblthcmlhLWxhYmVsPVwiQ2xvc2VcIl0sIGJ1dHRvblt0aXRsZT1cIkNsb3NlXCJdLCBidXR0b25bYXJpYS1sYWJlbD1cIkZlY2hhclwiXSwgYnV0dG9uW3RpdGxlPVwiRmVjaGFyXCJdLCBbZGF0YS1hY3Rpb249XCJjbG9zZVwiXSdcclxuICAgICkgYXMgSFRNTEVsZW1lbnQgfCBudWxsXHJcbiAgICBpZiAoIWNsb3NlQnRuKSByZXR1cm5cclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xvc2UpXHJcbiAgICByZXR1cm4gKCkgPT4gY2xvc2VCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbG9zZSlcclxuICB9LCBbamltdU1hcFZpZXcsIGhhbmRsZUNsb3NlXSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHJvb3QgPSByb290UmVmLmN1cnJlbnQ7IGlmICghcm9vdCkgcmV0dXJuXHJcbiAgICBjb25zdCBkbGcgPSBmaW5kQ2xvc2VzdERpYWxvZyhyb290KSBhcyBIVE1MRWxlbWVudCB8IG51bGxcclxuICAgIGlmICghZGxnKSByZXR1cm5cclxuICAgIGxldCB3YXNWaXNpYmxlID0gIWlzRGlhbG9nSGlkZGVuKGRsZylcclxuICAgIGNvbnN0IGNoZWNrID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBub3dIaWRkZW4gPSBpc0RpYWxvZ0hpZGRlbihkbGcpXHJcbiAgICAgIGlmICh3YXNWaXNpYmxlICYmIG5vd0hpZGRlbikgeyBoYW5kbGVDbG9zZSgpOyB3YXNWaXNpYmxlID0gZmFsc2UgfVxyXG4gICAgICBlbHNlIGlmICghd2FzVmlzaWJsZSAmJiAhbm93SGlkZGVuKSB7IHdhc1Zpc2libGUgPSB0cnVlIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2hlY2spXHJcbiAgICBtby5vYnNlcnZlKGRsZywgeyBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnLCAnY2xhc3MnLCAnYXJpYS1oaWRkZW4nXSB9KVxyXG4gICAgY2hlY2soKVxyXG4gICAgcmV0dXJuICgpID0+IG1vLmRpc2Nvbm5lY3QoKVxyXG4gIH0sIFtoYW5kbGVDbG9zZV0pXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvbktleSA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7IGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIGhhbmRsZUNsb3NlKCkgfVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5KVxyXG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleSlcclxuICB9LCBbaGFuZGxlQ2xvc2VdKVxyXG5cclxuICAvKiogU3Vtw6FyaW8gKGFtb3N0cmFzIGFwZW5hcykgKi9cclxuICBjb25zdCBzdW1tYXJ5R3JvdXBzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoY2F0ZWdvcmlhICE9PSAnc2FtcGxlJykgcmV0dXJuIFtdXHJcbiAgICBjb25zdCBiYXNlOiBBbW9zdHJhSXRlbVtdID0gd2l0aEludGVyZXN0XHJcbiAgICAgID8gKGZhaXhhU2V0LnNpemUgPiAwXHJcbiAgICAgICAgICA/IChkYWRvc0Z1bGwgPz8gW10pLmZpbHRlcih4ID0+IGZhaXhhU2V0LmhhcyhOdW1iZXIoeC5jb2RpZ29Qb2NvKSkpXHJcbiAgICAgICAgICA6IChkYWRvc0ZhaXhhQVBJID8/IGRhZG9zRnVsbCA/PyBbXSkpXHJcbiAgICAgIDogKGRhZG9zRnVsbCA/PyBbXSlcclxuXHJcbiAgICByZXR1cm4gdGlwb3NTZWwubWFwKHRpcG8gPT4ge1xyXG4gICAgICBjb25zdCBjb3IgPSBjb3Jlc1RpcG9zW3RpcG9dXHJcbiAgICAgIGNvbnN0IGRhZG9zID0gYmFzZS5tYXAoZCA9PiAoeyBjb2RpZ29Qb2NvOiBkLmNvZGlnb1BvY28sIHRvdGFsOiBkW1RZUEVfRklFTERbdGlwb11dID8/IDAgfSkpXHJcbiAgICAgIGxldCByb3dzID0gY2FsY3VsYXJRdWVicmFzKGRhZG9zLCBjb3IpLnJldmVyc2UoKVxyXG4gICAgICBpZiAoIXNob3dFbXB0eSkgcm93cyA9IHJvd3MuZmlsdGVyKHIgPT4gci5jb3VudCA+IDAgfHwgci5sYWJlbC5zdGFydHNXaXRoKCd8IDAgfCcpKVxyXG4gICAgICByZXR1cm4geyB0aXBvLCByb3dzIH1cclxuICAgIH0pXHJcbiAgfSwgW3RpcG9zU2VsLCBzaG93RW1wdHksIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXQsIGRhZG9zRnVsbCwgZGFkb3NGYWl4YUFQSSwgY2F0ZWdvcmlhXSlcclxuXHJcbiAgY29uc3QgaGFzQW55QmFzZSA9XHJcbiAgICAoQXJyYXkuaXNBcnJheShkYWRvc0Z1bGwpICYmIGRhZG9zRnVsbC5sZW5ndGggPiAwKSB8fFxyXG4gICAgKEFycmF5LmlzQXJyYXkoZGFkb3NGYWl4YUFQSSkgJiYgZGFkb3NGYWl4YUFQSS5sZW5ndGggPiAwKVxyXG5cclxuICAvLyA9PT09PSBmaWx0cm9zIHBhcmEgbyBzZWFyY2ggZGUgbWluZXJhaXNcclxuICBjb25zdCBsaXN0YUZpbHRyYWRhID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBxID0gKGJ1c2NhTWluZXJhbCB8fCAnJykubm9ybWFsaXplKCdORkQnKS5yZXBsYWNlKC9cXHB7RGlhY3JpdGljfS9ndSwgJycpLnRvTG93ZXJDYXNlKClcclxuICAgIHJldHVybiAobGlzdGFNaW5lcmFpcyB8fCBbXSkuZmlsdGVyKG0gPT4ge1xyXG4gICAgICBjb25zdCBub21lID0gKG0ubm9tZU1pbmVyYWwgfHwgJycpLm5vcm1hbGl6ZSgnTkZEJykucmVwbGFjZSgvXFxwe0RpYWNyaXRpY30vZ3UsICcnKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIHJldHVybiBub21lLmluY2x1ZGVzKHEpXHJcbiAgICB9KVxyXG4gIH0sIFtsaXN0YU1pbmVyYWlzLCBidXNjYU1pbmVyYWxdKVxyXG5cclxuICAvLyBwcmltZWlyYXMgNCBvcMOnw7VlcyArIGEgdGVyY2VpcmEgbGluaGEgKMOabHRpbWEpXHJcbiAgY29uc3QgRklSU1RfRk9VUiA9IE1JTkVSQUxfT1BUSU9OUy5zbGljZSgwLCA0KVxyXG4gIGNvbnN0IExBU1RfT05FID0gTUlORVJBTF9PUFRJT05TLnNsaWNlKDQpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNzcz17d3JhcHBlclN0eWxlfSByZWY9e3Jvb3RSZWZ9PlxyXG4gICAgICA8R2xvYmFsIHN0eWxlcz17Z2xvYmFsUGFuZWxTdHlsZX0gLz5cclxuICAgICAgPGxhYmVsIGNzcz17dGl0bGVTdHlsZX0+U2VsZWNpb25lIGEgZGlzdHJpYnVpw6fDo288L2xhYmVsPlxyXG5cclxuICAgICAgPHNlbGVjdCBjc3M9e3NlbGVjdFN0eWxlfSB2YWx1ZT17Y2F0ZWdvcmlhfSBvbkNoYW5nZT17ZSA9PiBzZXRDYXRlZ29yaWEoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPScnPlNlbGVjaW9uZSBvIHRpcG88L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPSdzYW1wbGUnPkRpc3RyaWJ1acOnw6NvIGRlIGFtb3N0cmFzPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nbWluZXJhbHMnPkRpc3RyaWJ1acOnw6NvIGRlIE1pbmVyYWlzPC9vcHRpb24+XHJcbiAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgey8qID09PT09PT09IFVJOiBBTU9TVFJBUyA9PT09PT09PSAqL31cclxuICAgICAge2NhdGVnb3JpYSA9PT0gJ3NhbXBsZScgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7bG9hZGluZ0Z1bGwgJiYgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDggfX0+Q2FycmVnYW5kbyBiYXNl4oCmPC9kaXY+fVxyXG4gICAgICAgICAgeyEhZXJyb3JGdWxsICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjYjAwJywgbWFyZ2luQm90dG9tOiA4IH19PkVycm86IHtlcnJvckZ1bGx9PC9kaXY+fVxyXG4gICAgICAgICAge3dpdGhJbnRlcmVzdCAmJiBsb2FkaW5nSW50ZXJlc3QgJiYgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDggfX0+Q2FycmVnYW5kbyBpbnRlcnZhbG8gZGUgaW50ZXJlc3Nl4oCmPC9kaXY+fVxyXG4gICAgICAgICAge3dpdGhJbnRlcmVzdCAmJiAhIWVycm9ySW50ZXJlc3QgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogJyNiMDAnLCBtYXJnaW5Cb3R0b206IDggfX0+RXJybzoge2Vycm9ySW50ZXJlc3R9PC9kaXY+fVxyXG5cclxuICAgICAgICAgIHtoYXNBbnlCYXNlICYmIChcclxuICAgICAgICAgICAgPGRpdiBjc3M9e2xpc3RTdHlsZX0+XHJcbiAgICAgICAgICAgICAge0xJU1RfVFlQRVMubWFwKHQgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGtleT17dH0gY3NzPXtjaGVja2JveExhYmVsU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RpcG9zU2VsLmluY2x1ZGVzKHQpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0VGlwb3NTZWwocHJldiA9PiBwcmV2LmluY2x1ZGVzKHQpID8gcHJldi5maWx0ZXIoeCA9PiB4ICE9PSB0KSA6IFsuLi5wcmV2LCB0XSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxibFwiPnt0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdC5zbGljZSgxKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogPT09PT09PT0gVUk6IE1JTkVSQUlTID09PT09PT09ICovfVxyXG4gICAgICB7Y2F0ZWdvcmlhID09PSAnbWluZXJhbHMnICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgey8qIDUgcsOhZGlvcyBlbSBVTSBjb250YWluZXIsIHBvc2ljaW9uYWRvcyB2aWEgZGF0YS1rZXkgKi99XHJcbiAgICAgICAgICA8ZGl2IGNzcz17bWluZXJhbHNMaXN0U3R5bGV9PlxyXG4gICAgICAgICAgICB7TUlORVJBTF9PUFRJT05TLm1hcChvcHQgPT4gKFxyXG4gICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAga2V5PXtvcHQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICBjc3M9e2NoZWNrYm94TGFiZWxTdHlsZX1cclxuICAgICAgICAgICAgICAgIGRhdGEta2V5PXtvcHQudmFsdWV9ICAgLy8gRFJYLVRPVCB8IE1BU1NBIHwgRFJYLUFSRyB8IEFSRUEgfCB0b2Rhc0FuYWxpc2VzXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJtaW5lcmFsLWFuYWxpc2VcIlxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXttaW5lcmFsQW5hbGlzZSA9PT0gb3B0LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0TWluZXJhbEFuYWxpc2Uob3B0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYmxcIj57b3B0LmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtsb2FkaW5nTWluZXJhaXMgJiYgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDggfX0+Q2FycmVnYW5kbyBtaW5lcmFpc+KApjwvZGl2Pn1cclxuICAgICAgICAgIHshIWVycm9yTWluZXJhaXMgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogJyNiMDAnLCBtYXJnaW5Cb3R0b206IDggfX0+RXJybzoge2Vycm9yTWluZXJhaXN9PC9kaXY+fVxyXG5cclxuICAgICAgICAgIHsvKiAocmVzdGFudGUgZGEgVUkgZGUgbWluZXJhaXMg4oCUIGJ1c2NhLCBsaXN0YSBlIGFncnVwYWRvcmVzIOKAlCBwb2RlIGZpY2FyIGNvbW8gasOhIGVzdMOhKSAqL31cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiA9PT09PT09PSBTdW3DoXJpbyBBTU9TVFJBUyA9PT09PT09PSAqL31cclxuICAgICAge2NhdGVnb3JpYSA9PT0gJ3NhbXBsZScgJiYgc3VtbWFyeUdyb3Vwcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IGNzcz17c3VtbWFyeUxpc3RTdHlsZX0+XHJcbiAgICAgICAgICB7c3VtbWFyeUdyb3Vwcy5tYXAoZ3JvdXAgPT4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtncm91cC50aXBvfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNzcz17bGVnZW5kSGVhZGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgeyh3aXRoSW50ZXJlc3QgPyAnSW50ZXJ2YWxvIGRlIEludGVyZXNzZSAtICcgOiAnJyl9XHJcbiAgICAgICAgICAgICAgICB7Z3JvdXAudGlwby5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGdyb3VwLnRpcG8uc2xpY2UoMSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2dyb3VwLnJvd3MubWFwKChyLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtncm91cC50aXBvfS0ke2lkeH1gfSBjc3M9e3N1bW1hcnlJdGVtU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNzcz17YnViYmxlQm94U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9e3Iuc2l6ZX0gaGVpZ2h0PXtyLnNpemV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17ci5zaXplIC8gMn0gY3k9e3Iuc2l6ZSAvIDJ9IHI9e3Iuc2l6ZSAvIDJ9IGZpbGw9e3IuY29yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY3NzPXtyYW5nZUxhYmVsU3R5bGV9PntyLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogPT09PT09PT0gUm9kYXDDqSBjb211bSA9PT09PT09PSAqL31cclxuICAgICAgeyhzdW1tYXJ5R3JvdXBzLmxlbmd0aCA+IDAgfHwgc2hvd1dpdGhJbnRlcmVzdCkgJiYgKFxyXG4gICAgICAgIDxkaXYgY3NzPXtmb290ZXJTdHlsZX0+XHJcbiAgICAgICAgICB7Y2F0ZWdvcmlhID09PSAnc2FtcGxlJyAmJiBzdW1tYXJ5R3JvdXBzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8bGFiZWwgY3NzPXtmb290ZXJMYWJlbFN0eWxlfSB0aXRsZT1cIkV4aWJpciB0YW1iw6ltIGNsYXNzZXMgc2VtIHBvw6dvc1wiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtzaG93RW1wdHl9IG9uQ2hhbmdlPXtlID0+IHNldFNob3dFbXB0eShlLnRhcmdldC5jaGVja2VkKX0gLz5cclxuICAgICAgICAgICAgICBFeGliaXIgY2xhc3NlcyB2YXppYXNcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge3Nob3dXaXRoSW50ZXJlc3QgJiYgKFxyXG4gICAgICAgICAgICA8bGFiZWwgY3NzPXtmb290ZXJMYWJlbFN0eWxlSW50ZXJlc3NlfSB0aXRsZT1cIlF1YW5kbyBtYXJjYWRvLCBhcGxpY2EgbyBmaWx0cm8gZGUgSW50ZXJ2YWxvIGRlIEludGVyZXNzZSAoY8OzZGlnb3MgdmluZG9zIGRvIEV4cGxvcmEgb3UgdmlhIEFQSSlcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt3aXRoSW50ZXJlc3R9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IGludGVyZXN0TWFudWFsUmVmLmN1cnJlbnQgPSB0cnVlOyBzZXRXaXRoSW50ZXJlc3QoZS50YXJnZXQuY2hlY2tlZCkgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIEludGVydmFsbyBkZSBpbnRlcmVzc2VcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8SmltdU1hcFZpZXdDb21wb25lbnQgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfSBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3NldEppbXVNYXBWaWV3fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=