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

/***/ "./your-extensions/widgets/mapa-de-minerais-search-map/src/runtime/GradientLegend.tsx":
/*!********************************************************************************************!*\
  !*** ./your-extensions/widgets/mapa-de-minerais-search-map/src/runtime/GradientLegend.tsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GradientLegend)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/** @jsx jsx */
/** @jsxFrag React.Fragment */

const wrap = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  display: grid;
  grid-template-columns: 24px 1fr;
  grid-auto-rows: auto;
  gap: 8px;
  align-items: start;
`;
const rampBox = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  width: 24px; height: 150px; border: 1px solid #ddd; border-radius: 2px;
  background: linear-gradient(
    to top,
    rgb(249,238,225) 0%,
    rgb(251,190,130) 25%,
    rgb(253,142,55) 50%,
    rgb(233,85,6) 75%,
    rgb(165,60,2) 100%
  );
`;
const ticksBox = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  height: 150px; position: relative;
  font-size: .9rem; line-height: 1.1;
`;
const tick = (posPct) => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  position: absolute; left: 0; right: 0; transform: translateY(-50%);
  top: ${100 - posPct}%;
`;
function niceCeil(x) {
    if (x <= 0)
        return 0;
    const p = Math.pow(10, Math.floor(Math.log10(x)));
    const m = x / p;
    const step = m <= 1 ? 1 : m <= 2 ? 2 : m <= 5 ? 5 : 10;
    return step * p;
}
function GradientLegend({ title, min, max, isPercent }) {
    // ticks: 5 níveis (0%, 25%, 50%, 75%, 100%) — labels “bonitas”
    let lo = Math.max(0, Math.min(min, max));
    let hi = Math.max(min, max);
    if (isPercent) {
        lo = 0;
        hi = Math.min(100, Math.max(0, hi));
    }
    const hiNice = isPercent ? hi : niceCeil(hi);
    const values = [1, 0.75, 0.5, 0.25, 0].map(f => Math.round(hiNice * f));
    const labels = values.map(v => ({ label: isPercent ? `${v} %` : `${v}` }));
    const positions = [100, 75, 50, 25, 0]; // topo→base
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
        title && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontWeight: 600, marginBottom: 4 } }, title),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: wrap },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: rampBox }),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: ticksBox }, labels.map((t, i) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: i, css: tick(positions[i]) }, t.label)))))));
}


/***/ }),

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

/***/ "./your-extensions/widgets/mapa-de-minerais-search-map/src/runtime/MineralsListPanel.tsx":
/*!***********************************************************************************************!*\
  !*** ./your-extensions/widgets/mapa-de-minerais-search-map/src/runtime/MineralsListPanel.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MineralsListPanel)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/** @jsx jsx */
/** @jsxFrag React.Fragment */

const boxStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `margin-top:8px;border:1px solid #eee;border-radius:6px;background:#fff;padding:8px;`;
const header = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `font-weight:600;margin:4px 0 6px;`;
const searchInput = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  width:100%;border:1px solid #cfcfcf;border-radius:4px;padding:6px 8px;font-size:.95rem;outline:none;
  &:focus{border-color:#999;}
`;
const listBox = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  margin-top:6px;border:1px solid #eee;border-radius:6px;max-height:180px;overflow:auto;padding:4px;background:#fafafa;
`;
const listItem = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  padding:6px 8px;border-radius:4px;cursor:pointer;user-select:none;
  &:hover{background:#f0f0f0;}
  &.active{background:#e8f0fe;border:1px solid #c9defd;}
`;
const radiosWrapper = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  margin-top:8px;padding:6px;border:1px solid #eee;border-radius:6px;background:#fafafa;
  display:grid;grid-template-columns:repeat(3,minmax(100px,1fr));gap:6px;
`;
const radioLabel = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  display:inline-grid;grid-template-columns:auto 1fr;align-items:center;column-gap:6px;font-size:.95rem;cursor:pointer;
  input{width:14px;height:14px;}
`;
function normalize(s) {
    return (s || '').normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
}
function MineralsListPanel({ mineralAnalise, listaMinerais, loadingMinerais, errorMinerais, buscaMineral, setBuscaMineral, mineralSelecionado, setMineralSelecionado, agrupador, setAgrupador }) {
    // ⬇️ NOVO: controla abertura da lista quando o input ganha foco/clique
    const [open, setOpen] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const q = normalize(buscaMineral);
    // ⬇️ MUDOU: quando q vazio, lista completa; quando há q, filtra
    const listaFiltrada = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => (listaMinerais || []).filter(m => !q || normalize(m.nomeMineral).includes(q)), [listaMinerais, q]);
    const selectedName = (mineralSelecionado === null || mineralSelecionado === void 0 ? void 0 : mineralSelecionado.nomeMineral) || '';
    const disabledAll = !mineralAnalise;
    const handlePick = (m) => {
        setMineralSelecionado(m);
        setBuscaMineral(m.nomeMineral);
        setOpen(false); // ⬅️ fecha após escolher
    };
    // Para não fechar a lista antes do clique no item (ordem blur/click do browser)
    const delayedClose = () => setTimeout(() => setOpen(false), 120);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: boxStyle, "aria-label": "listagem-de-minerais" },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: header }, "Listar os minerais"),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { css: searchInput, type: "text", placeholder: disabledAll ? 'Selecione um tipo de análise acima' : 'Digite ou clique para listar', value: buscaMineral, onChange: e => { setBuscaMineral(e.target.value); setOpen(true); }, onFocus: () => setOpen(true), onClick: () => setOpen(true), onBlur: delayedClose, disabled: disabledAll || loadingMinerais, "aria-label": "buscar-mineral" }),
        open && !disabledAll && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: listBox, "aria-label": "lista-de-minerais", onMouseDown: e => e.preventDefault() },
            loadingMinerais && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { padding: 8 } }, "Carregando lista\u2026"),
            !!errorMinerais && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { padding: 8, color: '#b00' } },
                "Erro: ",
                errorMinerais),
            !loadingMinerais && !errorMinerais && listaFiltrada.length === 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { padding: 8 } }, "Nenhum mineral encontrado.")),
            !loadingMinerais && !errorMinerais && listaFiltrada.map(m => {
                const active = m.nomeMineral === selectedName;
                return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: `${m.nomeMineral}-${m.nomeResumidoMineral}`, css: listItem, className: active ? 'active' : '', onMouseDown: e => e.preventDefault(), onClick: () => handlePick(m), title: m.nomeMineral }, m.nomeMineral));
            }))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: radiosWrapper, "aria-label": "agrupadores-minerais" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: radioLabel, title: "Quantidade de An\u00E1lises" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", name: "tipo-mineral", checked: agrupador === 'analise', onChange: () => setAgrupador('analise'), disabled: !mineralSelecionado }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, "An\u00E1lises")),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: radioLabel, title: "M\u00E9dia do mineral selecionado" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", name: "tipo-mineral", checked: agrupador === 'media', onChange: () => setAgrupador('media'), disabled: !mineralSelecionado }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, "M\u00E9dia")),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: radioLabel, title: "M\u00E1ximo do mineral selecionado" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", name: "tipo-mineral", checked: agrupador === 'maxima', onChange: () => setAgrupador('maxima'), disabled: !mineralSelecionado }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, "M\u00E1xima"))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: 6, fontSize: '.9rem', color: '#666' } },
            !mineralAnalise && 'Escolha DRX/Qemscan/Todas para habilitar a busca.',
            mineralAnalise && !mineralSelecionado && 'Clique no campo para listar ou digite para filtrar; selecione um mineral para habilitar Média/Máxima.')));
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
/* harmony import */ var _MineralsListPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MineralsListPanel */ "./your-extensions/widgets/mapa-de-minerais-search-map/src/runtime/MineralsListPanel.tsx");
/* harmony import */ var _GradientLegend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GradientLegend */ "./your-extensions/widgets/mapa-de-minerais-search-map/src/runtime/GradientLegend.tsx");
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
    /* nada de position/top/right/transform/height aqui */
    z-index: 9999 !important;
    width: ${DEFAULT_WIDTH}px !important;
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
const scrollAreaStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  max-height: 260px;   /* ↩️ dá rolagem entre o TOTAL e o final do bloco */
  overflow-y: auto;
  padding-right: 4px;
  margin-top: 8px;
  border-top: 1px solid #eee;
  padding-top: 8px;
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
            s.setProperty('position', 'absolute'); // sem !important
        if (s.getPropertyValue('z-index') !== '9999')
            s.setProperty('z-index', '9999');
        if (s.getPropertyValue('width') !== `${DEFAULT_WIDTH}px`) {
            s.setProperty('width', `${DEFAULT_WIDTH}px`, 'important');
        }
    }
    finally {
        _applyingStyle = false;
    }
}
function initFirstOpenLayout(dlg) {
    // evita repetir
    if (dlg.getAttribute('data-first-open-initialized') === '1')
        return;
    dlg.setAttribute('data-first-open-initialized', '1');
    const s = dlg.style;
    // 🔒 1ª abertura: força âncora canto superior direito e tamanho grande
    s.setProperty('position', 'absolute'); // sem !important
    s.setProperty('top', `${PANEL_MARGIN_TOP}px`, 'important');
    s.setProperty('right', `${PANEL_MARGIN_RIGHT}px`, 'important');
    s.setProperty('left', 'auto');
    s.setProperty('bottom', 'auto');
    // neutraliza o translate do Popper só na estreia (não observamos style, então sem loop)
    s.setProperty('transform', 'none', 'important');
    // largura permanece fixa
    s.setProperty('width', `${DEFAULT_WIDTH}px`, 'important');
    // altura “grande” apenas na estreia
    s.setProperty('height', `${DEFAULT_HEIGHT}px`, 'important');
    s.setProperty('max-height', 'calc(100% - 24px)', 'important');
    s.setProperty('overflow', 'visible', 'important');
    // ⇢ libere a altura após pequena janela (ou no 1º clique de recolher/expandir)
    const release = () => {
        // mantém posição/top/right/transform; solta só altura p/ expansão nativa funcionar
        s.removeProperty('height');
        s.removeProperty('max-height');
        s.removeProperty('overflow');
        // remove ouvinte (se houver)
        btnCollapse === null || btnCollapse === void 0 ? void 0 : btnCollapse.removeEventListener('click', onToggleOnce);
    };
    // libera sozinho após ~800ms (tempo suficiente p/ “abrir grande”)
    const to = setTimeout(release, 800);
    // também libera na 1ª interação do usuário (recolher/expandir)
    const btnCollapse = dlg.querySelector('button.action-collapse, button[title="Recolher"], button[aria-label="Recolher"], button[title="Expandir"], button[aria-label="Expandir"]');
    const onToggleOnce = () => { clearTimeout(to); release(); };
    if (btnCollapse)
        btnCollapse.addEventListener('click', onToggleOnce, { once: true });
}
function useForceRightPosition(rootRef) {
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        let cleanup = null;
        const apply = () => {
            var _a;
            const dlg = ((_a = rootRef.current) === null || _a === void 0 ? void 0 : _a.closest('[role="dialog"]')) ||
                document.querySelector('div[role="dialog"][aria-label="mapa-de-distribuicao-v2"]') ||
                document.querySelector('div[role="dialog"][aria-label="mapa-de-distribuicao"]');
            if (!dlg)
                return;
            // aplica layout “seguro”
            forcePanelStyle(dlg);
            // e faz o “layout de estreia” (canto direito + grande)
            initFirstOpenLayout(dlg);
            // reaplique apenas em resize (sem observar style do Popper)
            let to;
            const onResize = () => { clearTimeout(to); to = setTimeout(() => forcePanelStyle(dlg), 80); };
            window.addEventListener('resize', onResize);
            cleanup = () => { window.removeEventListener('resize', onResize); };
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
    //buscador de minerais
    const [agrupadorDados, setAgrupadorDados] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
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
                //Ajustando intervalo de interesse para aparecer
                setWithInterest(_msg['message']['visible']);
                setshowWithInterest((_msg['message']['visible']));
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
                        setAgrupadorDados(dados || []);
                        yield (0,_Minerals__WEBPACK_IMPORTED_MODULE_3__.aplicarColorizacaoPorAgrupador)(jimuMapView, mineralAnalise, dados, agrupador);
                        console.log('[widget] colorização aplicada');
                    }
                }
                catch (e) {
                    console.error('Falha ao aplicar colorização por agrupador', e);
                }
                finally {
                    return () => { cancelled = true; };
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
    const summaryMineralsAgr = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        if (categoria !== 'minerals')
            return null;
        if (!mineralAnalise || !mineralSelecionado || !agrupador)
            return null;
        if (!Array.isArray(agrupadorDados) || agrupadorDados.length === 0)
            return null;
        // escolhe o campo certo conforme agrupador
        const field = agrupador === 'analise' ? 'qtAnalise' : (agrupador === 'media' ? 'valorMedio' : 'valorMaximo');
        // aplica "Intervalo de Interesse" se necessário
        const base = (withInterest && faixaSet.size > 0)
            ? agrupadorDados.filter(d => faixaSet.has(Number(d.codigoPoco)))
            : agrupadorDados;
        const titleBase = (agrupador === 'analise' ? 'Quantidade de Análises' :
            agrupador === 'media' ? `Média de ${mineralSelecionado.nomeMineral}` :
                `Máxima de ${mineralSelecionado.nomeMineral}`);
        const title = (withInterest ? 'Intervalo de Interesse - ' : '') + titleBase;
        if (!base.length)
            return { title, rows: [] };
        // A paleta segue coerente com o “total” (bolhas) — cor laranja usada no contador
        const color = 'rgb(253,142,55)';
        const dados = base.map(d => ({ total: Number(d[field] || 0) }));
        let rows = calcularQuebras(dados, color).reverse();
        if (!showEmpty)
            rows = rows.filter(r => r.count > 0 || r.label.startsWith('| 0 |'));
        return { title, rows };
    }, [categoria, mineralAnalise, mineralSelecionado, agrupador, agrupadorDados, withInterest, faixaSet, showEmpty]);
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
    const legendAgr = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        if (categoria !== 'minerals')
            return null;
        if (!mineralAnalise || !mineralSelecionado || !agrupador)
            return null;
        if (!Array.isArray(agrupadorDados) || agrupadorDados.length === 0)
            return null;
        const field = agrupador === 'analise' ? 'qtAnalise' : (agrupador === 'media' ? 'valorMedio' : 'valorMaximo');
        const base = (withInterest && faixaSet.size > 0)
            ? agrupadorDados.filter(d => faixaSet.has(Number(d.codigoPoco)))
            : agrupadorDados;
        if (!base.length)
            return { min: 0, max: 0, isPercent: agrupador !== 'analise', title: '' };
        let vals = base.map((d) => Number(d[field] || 0));
        if (agrupador !== 'analise')
            vals = vals.map(v => Math.max(0, Math.min(100, v))); // trava 0..100
        const min = 0;
        const max = Math.max(...vals, 0);
        const titleBase = agrupador === 'analise' ? 'Análises' :
            agrupador === 'media' ? `Média de ${mineralSelecionado.nomeMineral}` :
                `Máxima de ${mineralSelecionado.nomeMineral}`;
        return {
            min, max,
            isPercent: agrupador !== 'analise',
            title: (withInterest ? 'Intervalo de Interesse - ' : '') + titleBase
        };
    }, [categoria, mineralAnalise, mineralSelecionado, agrupador, agrupadorDados, withInterest, faixaSet]);
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
                errorMinerais),
            summaryMinerals && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: summaryListStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: legendHeaderStyle }, summaryMinerals.title),
                summaryMinerals.rows.map((r, idx) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: `min-total-${idx}`, css: summaryItemStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: bubbleBoxStyle },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: r.size, height: r.size },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: r.size / 2, cy: r.size / 2, r: r.size / 2, fill: r.cor }))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { css: rangeLabelStyle }, r.label)))))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: scrollAreaStyle },
                mineralAnalise && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MineralsListPanel__WEBPACK_IMPORTED_MODULE_4__["default"], { mineralAnalise: mineralAnalise, listaMinerais: listaMinerais, loadingMinerais: loadingMinerais, errorMinerais: errorMinerais, buscaMineral: buscaMineral, setBuscaMineral: setBuscaMineral, mineralSelecionado: mineralSelecionado, setMineralSelecionado: setMineralSelecionado, agrupador: agrupador, setAgrupador: setAgrupador })),
                legendAgr && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: 8 } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GradientLegend__WEBPACK_IMPORTED_MODULE_5__["default"], { title: legendAgr.title, min: legendAgr.min, max: legendAgr.max, isPercent: legendAgr.isPercent }))),
                (summaryMinerals || legendAgr || showWithInterest) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: 8, borderTop: '1px solid #eee', paddingTop: 6 } },
                    (summaryMinerals || legendAgr) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: footerLabelStyle, title: "Exibir tamb\u00E9m classes sem po\u00E7os" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: showEmpty, onChange: e => setShowEmpty(e.target.checked) }),
                        "Exibir classes vazias")),
                    showWithInterest && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: footerLabelStyleInteresse, title: "Quando marcado, aplica o filtro de Intervalo de Interesse" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: withInterest, onChange: e => { interestManualRef.current = true; setWithInterest(e.target.checked); } }),
                        "Intervalo de Interesse"))))))),
        categoria === 'sample' && summaryGroups.length > 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: summaryListStyle }, summaryGroups.map(group => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, { key: group.tipo },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: legendHeaderStyle },
                (withInterest ? 'Intervalo de Interesse - ' : ''),
                group.tipo.charAt(0).toUpperCase() + group.tipo.slice(1)),
            group.rows.map((r, idx) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: `${group.tipo}-${idx}`, css: summaryItemStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: bubbleBoxStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: r.size, height: r.size },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: r.size / 2, cy: r.size / 2, r: r.size / 2, fill: r.cor }))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { css: rangeLabelStyle }, r.label))))))))),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXBhLWRlLW1pbmVyYWlzLXNlYXJjaC1tYXAvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxlQUFlO0FBQ2YsOEJBQThCO0FBQ2E7QUFVM0MsTUFBTSxJQUFJLEdBQUcsOENBQUc7Ozs7OztDQU1mO0FBQ0QsTUFBTSxPQUFPLEdBQUcsOENBQUc7Ozs7Ozs7Ozs7Q0FVbEI7QUFDRCxNQUFNLFFBQVEsR0FBRyw4Q0FBRzs7O0NBR25CO0FBQ0QsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLDhDQUFHOztTQUUzQixHQUFHLEdBQUcsTUFBTTtDQUNwQjtBQUVELFNBQVMsUUFBUSxDQUFDLENBQVM7SUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sQ0FBQztJQUNwQixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUNmLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDdEQsT0FBTyxJQUFJLEdBQUcsQ0FBQztBQUNqQixDQUFDO0FBRWMsU0FBUyxjQUFjLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQVM7SUFDMUUsK0RBQStEO0lBQy9ELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUMzQixJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUFDLENBQUM7SUFDOUQsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFFNUMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkUsTUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsRixNQUFNLFNBQVMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBQyxZQUFZO0lBRW5ELE9BQU8sQ0FDTDtRQUNHLEtBQUssSUFBSSx3REFBSyxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsSUFBRyxLQUFLLENBQU87UUFDekUsd0RBQUssR0FBRyxFQUFFLElB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LENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNyRDtZQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FDMUIsd0RBQUssR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCO2dCQUNyRCx3REFBSyxHQUFHLEVBQUUsY0FBYztvQkFDdEIsd0RBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJO3dCQUNoQywyREFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBSSxDQUNsRSxDQUNGO2dCQUNOLHlEQUFNLEdBQUcsRUFBRSxlQUFlLElBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBUSxDQUN4QyxDQUNQLENBQUMsQ0FDYSxDQUNsQixDQUFDLENBQ0UsQ0FDUDtRQUVELCtDQUFDLDZEQUFvQixJQUFDLGNBQWMsRUFBRSxXQUFLLENBQUMsZUFBZSwwQ0FBRyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEdBQUksQ0FDcEcsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXBhLWRlLW1pbmVyYWlzLXNlYXJjaC1tYXAvc3JjL3J1bnRpbWUvR3JhZGllbnRMZWdlbmQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXBhLWRlLW1pbmVyYWlzLXNlYXJjaC1tYXAvc3JjL3J1bnRpbWUvTWluZXJhbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcGEtZGUtbWluZXJhaXMtc2VhcmNoLW1hcC9zcmMvcnVudGltZS9NaW5lcmFsc0xpc3RQYW5lbC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcGEtZGUtbWluZXJhaXMtc2VhcmNoLW1hcC9zcmMvcnVudGltZS91dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9yZW5kZXJlcnMvQ2xhc3NCcmVha3NSZW5kZXJlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9zeW1ib2xzL1NpbXBsZU1hcmtlclN5bWJvbFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS93aWRnZXRzL0xlZ2VuZFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFwYS1kZS1taW5lcmFpcy1zZWFyY2gtbWFwL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbi8qKiBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCAqL1xyXG5pbXBvcnQgeyBSZWFjdCwganN4LCBjc3MgfSBmcm9tICdqaW11LWNvcmUnXHJcblxyXG50eXBlIFRpY2sgPSB7IGxhYmVsOiBzdHJpbmcgfVxyXG50eXBlIFByb3BzID0ge1xyXG4gIHRpdGxlPzogc3RyaW5nXHJcbiAgbWluOiBudW1iZXJcclxuICBtYXg6IG51bWJlclxyXG4gIGlzUGVyY2VudD86IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3Qgd3JhcCA9IGNzc2BcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjRweCAxZnI7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbiAgZ2FwOiA4cHg7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG5gXHJcbmNvbnN0IHJhbXBCb3ggPSBjc3NgXHJcbiAgd2lkdGg6IDI0cHg7IGhlaWdodDogMTUwcHg7IGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byB0b3AsXHJcbiAgICByZ2IoMjQ5LDIzOCwyMjUpIDAlLFxyXG4gICAgcmdiKDI1MSwxOTAsMTMwKSAyNSUsXHJcbiAgICByZ2IoMjUzLDE0Miw1NSkgNTAlLFxyXG4gICAgcmdiKDIzMyw4NSw2KSA3NSUsXHJcbiAgICByZ2IoMTY1LDYwLDIpIDEwMCVcclxuICApO1xyXG5gXHJcbmNvbnN0IHRpY2tzQm94ID0gY3NzYFxyXG4gIGhlaWdodDogMTUwcHg7IHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IC45cmVtOyBsaW5lLWhlaWdodDogMS4xO1xyXG5gXHJcbmNvbnN0IHRpY2sgPSAocG9zUGN0OiBudW1iZXIpID0+IGNzc2BcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHJpZ2h0OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdG9wOiAkezEwMCAtIHBvc1BjdH0lO1xyXG5gXHJcblxyXG5mdW5jdGlvbiBuaWNlQ2VpbCh4OiBudW1iZXIpIHtcclxuICBpZiAoeCA8PSAwKSByZXR1cm4gMFxyXG4gIGNvbnN0IHAgPSBNYXRoLnBvdygxMCwgTWF0aC5mbG9vcihNYXRoLmxvZzEwKHgpKSlcclxuICBjb25zdCBtID0geCAvIHBcclxuICBjb25zdCBzdGVwID0gbSA8PSAxID8gMSA6IG0gPD0gMiA/IDIgOiBtIDw9IDUgPyA1IDogMTBcclxuICByZXR1cm4gc3RlcCAqIHBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JhZGllbnRMZWdlbmQoeyB0aXRsZSwgbWluLCBtYXgsIGlzUGVyY2VudCB9OiBQcm9wcykge1xyXG4gIC8vIHRpY2tzOiA1IG7DrXZlaXMgKDAlLCAyNSUsIDUwJSwgNzUlLCAxMDAlKSDigJQgbGFiZWxzIOKAnGJvbml0YXPigJ1cclxuICBsZXQgbG8gPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtaW4sIG1heCkpXHJcbiAgbGV0IGhpID0gTWF0aC5tYXgobWluLCBtYXgpXHJcbiAgaWYgKGlzUGVyY2VudCkgeyBsbyA9IDA7IGhpID0gTWF0aC5taW4oMTAwLCBNYXRoLm1heCgwLCBoaSkpIH1cclxuICBjb25zdCBoaU5pY2UgPSBpc1BlcmNlbnQgPyBoaSA6IG5pY2VDZWlsKGhpKVxyXG5cclxuICBjb25zdCB2YWx1ZXMgPSBbMSwgMC43NSwgMC41LCAwLjI1LCAwXS5tYXAoZiA9PiBNYXRoLnJvdW5kKGhpTmljZSAqIGYpKVxyXG4gIGNvbnN0IGxhYmVsczogVGlja1tdID0gdmFsdWVzLm1hcCh2ID0+ICh7IGxhYmVsOiBpc1BlcmNlbnQgPyBgJHt2fSAlYCA6IGAke3Z9YCB9KSlcclxuICBjb25zdCBwb3NpdGlvbnMgPSBbMTAwLCA3NSwgNTAsIDI1LCAwXSAvLyB0b3Bv4oaSYmFzZVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3RpdGxlICYmIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBtYXJnaW5Cb3R0b206IDQgfX0+e3RpdGxlfTwvZGl2Pn1cclxuICAgICAgPGRpdiBjc3M9e3dyYXB9PlxyXG4gICAgICAgIDxkaXYgY3NzPXtyYW1wQm94fSAvPlxyXG4gICAgICAgIDxkaXYgY3NzPXt0aWNrc0JveH0+XHJcbiAgICAgICAgICB7bGFiZWxzLm1hcCgodCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0gY3NzPXt0aWNrKHBvc2l0aW9uc1tpXSl9Pnt0LmxhYmVsfTwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsIi8qKiBNaW5lcmFscy50c1xyXG4gKiBMw7NnaWNhIGRhIERpc3RyaWJ1acOnw6NvIGRlIE1pbmVyYWlzOlxyXG4gKiAgLSBCdXNjYSBkbyBDT05UQURPUiBwb3IgYW7DoWxpc2UgKERSWC9RZW1zY2FuL1RvZGFzKSA9PiBiYXNlIGVtIGNsdXN0ZXJzL2JvbGhhcyB2aWEgZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUJcclxuICogIC0gQnVzY2EgZGEgTElTVEEgZGUgbWluZXJhaXMgKHBhcmEgbyBzZWFyY2gpXHJcbiAqICAtIEJ1c2NhIGRvcyBBR1JVUEFET1JFUyAoYW5hbGlzZXxtZWRpYXxtYXhpbWEpIHBhcmEgdW0gbWluZXJhbCBzZWxlY2lvbmFkb1xyXG4gKiAgLSBBcGxpY2HDp8OjbyBkZSB2aXN1YWxWYXJpYWJsZXMgKGNvbG9yIHJhbXApIE5BIE1FU01BIENBTUFEQSwgcG9yIGNpbWEgZG8gY2x1c3RlciBiYXNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHR5cGUgeyBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyBnZXJhck1hcGFEaXN0cmlidWljYW9FQiB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG4vKiogT3DDp8O1ZXMgZGUgYW7DoWxpc2UgbWluZXJhbCBwYXJhIG9zIHLDoWRpb3MgKi9cclxuZXhwb3J0IGNvbnN0IE1JTkVSQUxfT1BUSU9OUyA9IFtcclxuICB7IHZhbHVlOiAnRFJYLVRPVCcsIGxhYmVsOiAnRFJYLVRvdGFsJyB9LFxyXG4gIHsgdmFsdWU6ICdEUlgtQVJHJywgbGFiZWw6ICdEUlgtQXJnaWxvbWluZXJhaXMnIH0sXHJcbiAgeyB2YWx1ZTogJ01BU1NBJywgICBsYWJlbDogJ1FlbXNjYW4tTWFzc2EnIH0sXHJcbiAgeyB2YWx1ZTogJ0FSRUEnLCAgICBsYWJlbDogJ1FlbXNjYW4tw4FyZWEnIH0sXHJcbiAgeyB2YWx1ZTogJ3RvZGFzQW5hbGlzZXMnLCBsYWJlbDogJ1RvZGFzIGFzIEFuw6FsaXNlcycgfVxyXG5dIGFzIGNvbnN0XHJcblxyXG5leHBvcnQgdHlwZSBNaW5lcmFsVGlwbyA9IHR5cGVvZiBNSU5FUkFMX09QVElPTlNbbnVtYmVyXVsndmFsdWUnXVxyXG5leHBvcnQgdHlwZSBBZ3J1cGFkb3JUaXBvID0gJ2FuYWxpc2UnIHwgJ21lZGlhJyB8ICdtYXhpbWEnXHJcblxyXG4vKiogSXRlbnMgZG8gY29udGFkb3IgKHRvdGFsIHBvciBwb8OnbykgKi9cclxuZXhwb3J0IHR5cGUgTWluZXJhbEl0ZW0gPSB7XHJcbiAgY29kaWdvUG9jbzogbnVtYmVyXHJcbiAgdG90YWxNaW5lcmFpczogbnVtYmVyXHJcbn1cclxuXHJcbi8qKiBJdGVtIGRhIGxpc3RhIGRlIG1pbmVyYWlzIChwYXJhIG8gc2VhcmNoKSAqL1xyXG5leHBvcnQgdHlwZSBNaW5lcmFsTGlzdGFJdGVtID0ge1xyXG4gIG5vbWVNaW5lcmFsOiBzdHJpbmdcclxuICBub21lUmVzdW1pZG9NaW5lcmFsPzogc3RyaW5nXHJcbn1cclxuXHJcbi8qKiBJdGVtIGRlIHJldG9ybm8gZG8gYWdydXBhZG9yICovXHJcbmV4cG9ydCB0eXBlIE1pbmVyYWxBZ3J1cGFkb3JJdGVtID0ge1xyXG4gIGNvZGlnb1BvY286IG51bWJlclxyXG4gIG5vbWVSZXN1bWlkbz86IHN0cmluZ1xyXG4gIHF0QW5hbGlzZTogbnVtYmVyXHJcbiAgdmFsb3JNZWRpbzogbnVtYmVyXHJcbiAgdmFsb3JNYXhpbW86IG51bWJlclxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09IE5vcm1hbGl6YcOnw7VlcyA9PT09PT09PT09PT09PT09PT09ICovXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZU1pbmVyYWxDb250YWRvcihyYXc6IGFueVtdKTogTWluZXJhbEl0ZW1bXSB7XHJcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5KHJhdykgPyByYXcgOiBbXSlcclxuICAgIC5tYXAoKHI6IGFueSkgPT4gKHtcclxuICAgICAgY29kaWdvUG9jbzogTnVtYmVyKHIuY29kaWdvUG9jbyA/PyByLlBPQ09fQ0RfUE9DTyA/PyByLnBvY28gPz8gci5jb2RpZ28gPz8gMCksXHJcbiAgICAgIHRvdGFsTWluZXJhaXM6IE51bWJlcihyLnRvdGFsTWluZXJhaXMgPz8gci50b3RhbCA/PyAwKVxyXG4gICAgfSkpXHJcbiAgICAuZmlsdGVyKHggPT4gISF4LmNvZGlnb1BvY28pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZU1pbmVyYWxMaXN0YShyYXc6IGFueVtdKTogTWluZXJhbExpc3RhSXRlbVtdIHtcclxuICByZXR1cm4gKEFycmF5LmlzQXJyYXkocmF3KSA/IHJhdyA6IFtdKVxyXG4gICAgLm1hcCgocjogYW55KSA9PiAoe1xyXG4gICAgICBub21lTWluZXJhbDogU3RyaW5nKHIubm9tZU1pbmVyYWwgPz8gci5ub21lID8/IHIubWluZXJhbCA/PyAnJykudHJpbSgpLFxyXG4gICAgICBub21lUmVzdW1pZG9NaW5lcmFsOiByLm5vbWVSZXN1bWlkb01pbmVyYWwgPz8gci5ub21lUmVzdW1pZG8gPz8gdW5kZWZpbmVkXHJcbiAgICB9KSlcclxuICAgIC5maWx0ZXIoeCA9PiAhIXgubm9tZU1pbmVyYWwpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFncnVwYWRvcihyYXc6IGFueVtdKTogTWluZXJhbEFncnVwYWRvckl0ZW1bXSB7XHJcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5KHJhdykgPyByYXcgOiBbXSlcclxuICAgIC5tYXAoKHI6IGFueSkgPT4gKHtcclxuICAgICAgY29kaWdvUG9jbzogTnVtYmVyKHIuY29kaWdvUG9jbyA/PyByLlBPQ09fQ0RfUE9DTyA/PyByLnBvY28gPz8gci5jb2RpZ28gPz8gMCksXHJcbiAgICAgIG5vbWVSZXN1bWlkbzogci5ub21lUmVzdW1pZG8gPz8gci5ub21lUmVzdW1pZG9NaW5lcmFsID8/IHVuZGVmaW5lZCxcclxuICAgICAgcXRBbmFsaXNlOiBOdW1iZXIoci5xdEFuYWxpc2UgPz8gci50b3RhbCA/PyAwKSxcclxuICAgICAgdmFsb3JNZWRpbzogTnVtYmVyKHIudmFsb3JNZWRpbyA/PyByLm1lZGlhID8/IDApLFxyXG4gICAgICB2YWxvck1heGltbzogTnVtYmVyKHIudmFsb3JNYXhpbW8gPz8gci5tYXhpbW8gPz8gMClcclxuICAgIH0pKVxyXG4gICAgLmZpbHRlcih4ID0+ICEheC5jb2RpZ29Qb2NvKVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09IFBvc3RNZXNzYWdlIGhlbHBlcnMgPT09PT09PT09PT09PT09PT09PSAqL1xyXG5mdW5jdGlvbiBwb3N0VmlhUGFyZW50PFQgPSBhbnk+KHR5cGU6IHN0cmluZywgYm9keTogc3RyaW5nLCBva1R5cGU6IHN0cmluZywgZXJyVHlwZTogc3RyaW5nKTogUHJvbWlzZTxUPiB7XHJcbiAgY29uc29sZS5ncm91cENvbGxhcHNlZChgW21pbmVyYWxzXSBwb3N0VmlhUGFyZW50IC0+ICR7dHlwZX1gKVxyXG4gIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIGJvZHknLCBib2R5KVxyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCByZXFJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpXHJcbiAgICBsZXQgdGFyZ2V0T3JpZ2luID0gJyonXHJcbiAgICB0cnkgeyBpZiAoZG9jdW1lbnQucmVmZXJyZXIpIHRhcmdldE9yaWdpbiA9IG5ldyBVUkwoZG9jdW1lbnQucmVmZXJyZXIpLm9yaWdpbiB9IGNhdGNoIHt9XHJcbiAgICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSB0YXJnZXRPcmlnaW4nLCB0YXJnZXRPcmlnaW4sICdyZXFJZCcsIHJlcUlkKVxyXG5cclxuICAgIGNvbnN0IG9uTWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGQ6IGFueSA9IChldmVudCBhcyBhbnkpLmRhdGEgfHwge31cclxuICAgICAgaWYgKGQucmVxSWQgIT09IHJlcUlkKSByZXR1cm5cclxuICAgICAgY29uc29sZS5sb2coJ1ttaW5lcmFsc10gcmVzcG9zdGEgcmVjZWJpZGEnLCBkLnR5cGUsIGQpXHJcbiAgICAgIGNsZWFyVGltZW91dCh0bykgLy8gPDw8IElNUE9SVEFOVEVcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpXHJcblxyXG4gICAgICBpZiAoZC50eXBlID09PSBva1R5cGUpIHtcclxuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgICAgICByZXNvbHZlKGQucGF5bG9hZCBhcyBUKVxyXG4gICAgICB9IGVsc2UgaWYgKGQudHlwZSA9PT0gZXJyVHlwZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoZC5tZXNzYWdlIHx8ICdFcnJvIG5vIGZldGNoIHZpYSBwYXJlbnQnKSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1ttaW5lcmFsc10gdGlwbyBpbmVzcGVyYWRvJywgZC50eXBlKVxyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1Jlc3Bvc3RhIGRlc2NvbmhlY2lkYSBkbyBwYWknKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpXHJcblxyXG4gICAgY29uc3QgdG8gPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG4gICAgICBjb25zb2xlLndhcm4oJ1ttaW5lcmFsc10gVElNRU9VVCBhZ3VhcmRhbmRvIHJlc3Bvc3RhIGRvIHBhaScsIHsgdHlwZSwgb2tUeXBlLCBlcnJUeXBlLCByZXFJZCB9KVxyXG4gICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgICAgcmVqZWN0KG5ldyBFcnJvcignVGltZW91dCBhZ3VhcmRhbmRvIHJlc3Bvc3RhIGRvIHBhaSAobWluZXJhaXMpJykpXHJcbiAgICB9LCAyMDAwMClcclxuXHJcbiAgICB3aW5kb3cucGFyZW50Py5wb3N0TWVzc2FnZSh7IHR5cGUsIGJvZHksIHJlcUlkIH0sIHRhcmdldE9yaWdpbilcclxuICB9KVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09IEJvZGllcyBFeHBsb3JhID09PT09PT09PT09PT09PT09PT0gKi9cclxuZnVuY3Rpb24gYnVpbGRCb2R5Q29udGFkb3IodGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvLCBmYWl4YUludGVyZXNzZTogYm9vbGVhbikge1xyXG4gIGNvbnN0IHAgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcclxuICBwLnNldCgnaGRTeXMnLCAnbm92YWludGNvbnMnKVxyXG4gIHAuc2V0KCdoZFVDJywgJ01hcGEnKVxyXG4gIHAuc2V0KCdoZEFjYW8nLCAnQ2FycmVnYXJNYXBhRGlzdHJpYnVpY2FvTWluZXJhaXNDb250YWRvcicpXHJcbiAgcC5zZXQoJ2hkU2Vzc2lvbkZpbHRlcicsICd0cnVlJylcclxuICBwLnNldCgndGlwb0FuYWxpc2UnLCB0aXBvQW5hbGlzZSlcclxuICBwLnNldCgnZmFpeGFJbnRlcmVzc2UnLCBTdHJpbmcoISFmYWl4YUludGVyZXNzZSkpXHJcbiAgcmV0dXJuIHAudG9TdHJpbmcoKVxyXG59XHJcbmZ1bmN0aW9uIGJ1aWxkQm9keUxpc3RhKHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbywgZmFpeGFJbnRlcmVzc2U6IGJvb2xlYW4pIHtcclxuICBjb25zdCBwID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXHJcbiAgcC5zZXQoJ2hkU3lzJywgJ25vdmFpbnRjb25zJylcclxuICBwLnNldCgnaGRVQycsICdNYXBhJylcclxuICBwLnNldCgnaGRBY2FvJywgJ0NhcnJlZ2FyTWFwYURpc3RyaWJ1aWNhb01pbmVyYWlzTGlzdGEnKVxyXG4gIHAuc2V0KCdoZFNlc3Npb25GaWx0ZXInLCAndHJ1ZScpXHJcbiAgcC5zZXQoJ3RpcG9BbmFsaXNlJywgdGlwb0FuYWxpc2UpXHJcbiAgcC5zZXQoJ2ZhaXhhSW50ZXJlc3NlJywgU3RyaW5nKCEhZmFpeGFJbnRlcmVzc2UpKVxyXG4gIHJldHVybiBwLnRvU3RyaW5nKClcclxufVxyXG5mdW5jdGlvbiBidWlsZEJvZHlBZ3J1cGFkb3IodGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvLCBub21lUmVzdW1pZG9NaW5lcmFsOiBzdHJpbmcgfCB1bmRlZmluZWQsIGZhaXhhSW50ZXJlc3NlOiBib29sZWFuKSB7XHJcbiAgY29uc3QgcCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG4gIHAuc2V0KCdoZFN5cycsICdub3ZhaW50Y29ucycpXHJcbiAgcC5zZXQoJ2hkVUMnLCAnTWFwYScpXHJcbiAgcC5zZXQoJ2hkQWNhbycsICdDYXJyZWdhck1hcGFEaXN0cmlidWljYW9NaW5lcmFpc0FncnVwYWRvcicpXHJcbiAgcC5zZXQoJ2hkU2Vzc2lvbkZpbHRlcicsICd0cnVlJylcclxuICBwLnNldCgndGlwb0FuYWxpc2UnLCB0aXBvQW5hbGlzZSlcclxuICBpZiAobm9tZVJlc3VtaWRvTWluZXJhbCkgcC5zZXQoJ25vbWVSZXN1bWlkb01pbmVyYWwnLCBub21lUmVzdW1pZG9NaW5lcmFsKVxyXG4gIHAuc2V0KCdmYWl4YUludGVyZXNzZScsIFN0cmluZyghIWZhaXhhSW50ZXJlc3NlKSlcclxuICByZXR1cm4gcC50b1N0cmluZygpXHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT0gRmV0Y2ggQVBJcyA9PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzQ29udGFkb3IoXHJcbiAgdGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvLFxyXG4gIGZhaXhhSW50ZXJlc3NlOiBib29sZWFuXHJcbik6IFByb21pc2U8TWluZXJhbEl0ZW1bXT4ge1xyXG4gIGNvbnN0IGJvZHkgPSBidWlsZEJvZHlDb250YWRvcih0aXBvQW5hbGlzZSwgZmFpeGFJbnRlcmVzc2UpXHJcbiAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHBvc3RWaWFQYXJlbnQ8YW55W10+KCdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzJywgYm9keSwgJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXM6b2snLCAnZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpczplcnInKVxyXG4gIGNvbnN0IG5vcm0gPSBub3JtYWxpemVNaW5lcmFsQ29udGFkb3IocGF5bG9hZClcclxuICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSBjb250YWRvciBub3JtYWxpemFkbycsIG5vcm0ubGVuZ3RoLCBub3JtLnNsaWNlKDAsIDEwKSlcclxuICByZXR1cm4gbm9ybVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNaW5lcmFsTGlzdGEoXHJcbiAgdGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvLFxyXG4gIGZhaXhhSW50ZXJlc3NlOiBib29sZWFuXHJcbik6IFByb21pc2U8TWluZXJhbExpc3RhSXRlbVtdPiB7XHJcbiAgY29uc3QgYm9keSA9IGJ1aWxkQm9keUxpc3RhKHRpcG9BbmFsaXNlLCBmYWl4YUludGVyZXNzZSlcclxuICBjb25zdCBwYXlsb2FkID0gYXdhaXQgcG9zdFZpYVBhcmVudDxhbnlbXT4oJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXMnLCBib2R5LCAnZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpczpvaycsICdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzOmVycicpXHJcbiAgY29uc3Qgbm9ybSA9IG5vcm1hbGl6ZU1pbmVyYWxMaXN0YShwYXlsb2FkKVxyXG4gIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIGxpc3RhIG5vcm1hbGl6YWRhJywgbm9ybS5sZW5ndGgsIG5vcm0uc2xpY2UoMCwgMTApKVxyXG4gIHJldHVybiBub3JtXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaE1pbmVyYWxBZ3J1cGFkb3IoXHJcbiAgdGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvLFxyXG4gIG5vbWVSZXN1bWlkb01pbmVyYWw6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICBmYWl4YUludGVyZXNzZTogYm9vbGVhblxyXG4pOiBQcm9taXNlPE1pbmVyYWxBZ3J1cGFkb3JJdGVtW10+IHtcclxuICBjb25zdCBib2R5ID0gYnVpbGRCb2R5QWdydXBhZG9yKHRpcG9BbmFsaXNlLCBub21lUmVzdW1pZG9NaW5lcmFsLCBmYWl4YUludGVyZXNzZSlcclxuICBjb25zdCBwYXlsb2FkID0gYXdhaXQgcG9zdFZpYVBhcmVudDxhbnlbXT4oJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXMnLCBib2R5LCAnZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpczpvaycsICdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzOmVycicpXHJcbiAgY29uc3Qgbm9ybSA9IG5vcm1hbGl6ZUFncnVwYWRvcihwYXlsb2FkKVxyXG4gIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIGFncnVwYWRvciBub3JtYWxpemFkbycsIG5vcm0ubGVuZ3RoLCBub3JtLnNsaWNlKDAsIDEwKSlcclxuICByZXR1cm4gbm9ybVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09IFJlbmRlciBoZWxwZXJzID09PT09PT09PT09PT09PT09PT0gKi9cclxuY29uc3QgbGF5ZXJJZEZvciA9ICh0aXBvQW5hbGlzZTogTWluZXJhbFRpcG8pID0+IGBtaW5lcmFpc18ke1N0cmluZyh0aXBvQW5hbGlzZSkudG9Mb3dlckNhc2UoKX1gXHJcbmNvbnN0IGxlZ2VuZElkRm9yID0gKHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbykgPT4gYGxnZF8ke2xheWVySWRGb3IodGlwb0FuYWxpc2UpfWBcclxuXHJcbmZ1bmN0aW9uIGRpc2FibGVDbHVzdGVyTnVtYmVycyhseXI6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWx5cikgcmV0dXJuXHJcbiAgICBpZiAobHlyLmZlYXR1cmVSZWR1Y3Rpb24gJiYgbHlyLmZlYXR1cmVSZWR1Y3Rpb24udHlwZSA9PT0gJ2NsdXN0ZXInKSB7XHJcbiAgICAgIGx5ci5mZWF0dXJlUmVkdWN0aW9uID0geyAuLi5seXIuZmVhdHVyZVJlZHVjdGlvbiwgbGFiZWxzVmlzaWJsZTogZmFsc2UgfVxyXG4gICAgfVxyXG4gICAgaWYgKCdsYWJlbHNWaXNpYmxlJyBpbiBseXIpIChseXIgYXMgYW55KS5sYWJlbHNWaXNpYmxlID0gZmFsc2VcclxuICAgIGlmICgnbGFiZWxpbmdJbmZvJyBpbiBseXIpIChseXIgYXMgYW55KS5sYWJlbGluZ0luZm8gPSBbXVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoKGx5ciBhcyBhbnkpLnN1YmxheWVycykpIChseXIgYXMgYW55KS5zdWJsYXllcnMuZm9yRWFjaCgoc2w6IGFueSkgPT4gZGlzYWJsZUNsdXN0ZXJOdW1iZXJzKHNsKSlcclxuICB9IGNhdGNoIHt9XHJcbn1cclxuXHJcbi8qKiBEZXNlbmhhIGEgYmFzZSAoY29udGFkb3IpIGVtIGNsdXN0ZXJzL2JvbGhhcywgY29tIHTDrXR1bG8gY29uZm9ybWUgYW7DoWxpc2UgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VuaGFyRGlzdHJpYnVpY2FvTWluZXJhaXMoXHJcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LFxyXG4gIGRhZG9zOiBNaW5lcmFsSXRlbVtdLFxyXG4gIHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbyxcclxuICB3aXRoSW50ZXJlc3Q6IGJvb2xlYW5cclxuKSB7XHJcbiAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnW21pbmVyYWxzXSBkZXNlbmhhckRpc3RyaWJ1aWNhb01pbmVyYWlzJylcclxuICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSB0aXBvQW5hbGlzZScsIHRpcG9BbmFsaXNlLCAnd2l0aEludGVyZXN0Jywgd2l0aEludGVyZXN0LCAnbiBkYWRvcycsIGRhZG9zPy5sZW5ndGgpXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdmlldyB9ID0gamltdU1hcFZpZXdcclxuICAgIGlmICghdmlldyB8fCAhQXJyYXkuaXNBcnJheShkYWRvcykgfHwgZGFkb3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignW21pbmVyYWxzXSB2aWV3IGluZXhpc3RlbnRlIG91IGRhZG9zIHZhemlvcycpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgcG9udG9zID0gZGFkb3MubWFwKGQgPT4gKHsgY29kaWdvUG9jbzogZC5jb2RpZ29Qb2NvLCB0b3RhbDogZC50b3RhbE1pbmVyYWlzIH0pKVxyXG4gICAgY29uc29sZS5sb2coJ1ttaW5lcmFsc10gYW1vc3RyYSBkb3MgcG9udG9zJywgcG9udG9zLnNsaWNlKDAsIDEwKSlcclxuXHJcbiAgICBjb25zdCBpZENhbWFkYSA9IGxheWVySWRGb3IodGlwb0FuYWxpc2UpXHJcbiAgICBjb25zdCBpZExlZ2VuZGEgPSBsZWdlbmRJZEZvcih0aXBvQW5hbGlzZSlcclxuICAgIGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCKHtcclxuICAgICAgamltdU1hcFZpZXcsIGRhZG9zOiBwb250b3MsIGNvbG9yRmlsbDogJ3JnYigyNTMsMTQyLDU1KScsXHJcbiAgICAgIGlkQ2FtYWRhLCBpZExlZ2VuZGEsXHJcbiAgICAgIHRpdGxlTGVnZW5kYTogKHdpdGhJbnRlcmVzdCA/ICdJbnRlcnZhbG8gZGUgSW50ZXJlc3NlIC0gJyA6ICcnKSArIGxhYmVsRnJvbVZhbHVlKHRpcG9BbmFsaXNlKSxcclxuICAgICAgd2l0aEludGVyZXN0XHJcbiAgICB9IGFzIGFueSlcclxuXHJcbiAgICBjb25zdCBseXIgPSB2aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGlkQ2FtYWRhKSBhcyBhbnlcclxuICAgIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIGxheWVyIGNyaWFkYT8nLCAhIWx5ciwgbHlyKVxyXG4gICAgaWYgKGx5cikgZGlzYWJsZUNsdXN0ZXJOdW1iZXJzKGx5cilcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbbWluZXJhbHNdIEVSUk8gZGVzZW5oYXJEaXN0cmlidWljYW9NaW5lcmFpcycsIGUpXHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gIH1cclxufVxyXG5cclxuLyoqIEFwbGljYSB2aXN1YWwgdmFyaWFibGUgZGUgQ09SIHBvciBjaW1hIGRhIGNhbWFkYSBiYXNlIChzZW0gbWV4ZXIgbm8gdGFtYW5oby9jbHVzdGVyKSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBsaWNhckNvbG9yaXphY2FvUG9yQWdydXBhZG9yKFxyXG4gIGppbXVNYXBWaWV3OiBKaW11TWFwVmlldyxcclxuICB0aXBvQW5hbGlzZTogTWluZXJhbFRpcG8sXHJcbiAgZGFkb3NBZ3J1cGFkb3JlczogTWluZXJhbEFncnVwYWRvckl0ZW1bXSxcclxuICBhZ3J1cGFkb3I6IEFncnVwYWRvclRpcG9cclxuKSB7XHJcbiAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnW21pbmVyYWxzXSBhcGxpY2FyQ29sb3JpemFjYW9Qb3JBZ3J1cGFkb3InKVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHZpZXcgfSA9IGppbXVNYXBWaWV3XHJcbiAgICBjb25zdCBsYXllciA9IHZpZXc/Lm1hcD8uZmluZExheWVyQnlJZChsYXllcklkRm9yKHRpcG9BbmFsaXNlKSkgYXMgYW55XHJcbiAgICBpZiAoIWxheWVyKSB7IGNvbnNvbGUud2FybignW21pbmVyYWxzXSBjYW1hZGEgYmFzZSBuw6NvIGVuY29udHJhZGEnKTsgcmV0dXJuIH1cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShkYWRvc0FncnVwYWRvcmVzKSB8fCBkYWRvc0FncnVwYWRvcmVzLmxlbmd0aCA9PT0gMCkgeyBjb25zb2xlLndhcm4oJ1ttaW5lcmFsc10gYWdydXBhZG9yZXMgdmF6aW9zJyk7IHJldHVybiB9XHJcblxyXG4gICAgLy8gw61uZGljZSBwb3IgcG/Dp29cclxuICAgIGNvbnN0IGJ5UG9jbyA9IG5ldyBNYXA8bnVtYmVyLCBNaW5lcmFsQWdydXBhZG9ySXRlbT4oKVxyXG4gICAgZm9yIChjb25zdCBpdCBvZiBkYWRvc0FncnVwYWRvcmVzKSBieVBvY28uc2V0KE51bWJlcihpdC5jb2RpZ29Qb2NvKSwgaXQpXHJcblxyXG4gICAgLy8gZGVmaW5pbW9zIHVtIGNhbXBvIFwibWRfdmFsXCIgcGFyYSBvIHZpc3VhbCB2YXJpYWJsZSBkZSBjb3JcclxuICAgIGNvbnN0IGZpZWxkVmFyID0gJ21kX3ZhbCdcclxuXHJcbiAgICAvLyAxKSBBdHVhbGl6YSBhdHJpYnV0b3MgcG9yIHBvw6dvIGNvbSBvIHZhbG9yIGRvIGFncnVwYWRvciBlc2NvbGhpZG9cclxuICAgIGNvbnNvbGUudGltZSgnW21pbmVyYWxzXSBxdWVyeUZlYXR1cmVzIGJhc2UnKVxyXG4gICAgY29uc3QgZmVhdHVyZVNldCA9IGF3YWl0IGxheWVyLnF1ZXJ5RmVhdHVyZXMoeyB3aGVyZTogJzE9MScsIHJldHVybkdlb21ldHJ5OiB0cnVlLCBvdXRGaWVsZHM6IFsnKiddIH0pXHJcbiAgICBjb25zb2xlLnRpbWVFbmQoJ1ttaW5lcmFsc10gcXVlcnlGZWF0dXJlcyBiYXNlJylcclxuICAgIGNvbnN0IHVwZGF0ZXM6IGFueVtdID0gW11cclxuICAgIGxldCBtaW5WYWwgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFlcclxuICAgIGxldCBtYXhWYWwgPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFlcclxuXHJcbiAgICBmb3IgKGNvbnN0IGYgb2YgZmVhdHVyZVNldC5mZWF0dXJlcykge1xyXG4gICAgICBjb25zdCBjb2RpZ28gPSBOdW1iZXIoXHJcbiAgICAgICAgZi5hdHRyaWJ1dGVzPy5QT0NPX0NEX1BPQ08gPz9cclxuICAgICAgICBmLmF0dHJpYnV0ZXM/LmNvZGlnb1BvY28gPz9cclxuICAgICAgICBmLmF0dHJpYnV0ZXM/LnBvY28gPz9cclxuICAgICAgICBmLmF0dHJpYnV0ZXM/LmNvZGlnb1xyXG4gICAgICApXHJcbiAgICAgIGNvbnN0IGFnID0gYnlQb2NvLmdldChjb2RpZ28pXHJcbiAgICAgIGxldCB2YWwgPSAwXHJcbiAgICAgIGlmIChhZykge1xyXG4gICAgICAgIGlmIChhZ3J1cGFkb3IgPT09ICdhbmFsaXNlJykgdmFsID0gYWcucXRBbmFsaXNlXHJcbiAgICAgICAgZWxzZSBpZiAoYWdydXBhZG9yID09PSAnbWVkaWEnKSB2YWwgPSBhZy52YWxvck1lZGlvXHJcbiAgICAgICAgZWxzZSB2YWwgPSBhZy52YWxvck1heGltb1xyXG4gICAgICB9XHJcbiAgICAgIGYuYXR0cmlidXRlc1tmaWVsZFZhcl0gPSB2YWxcclxuICAgICAgbWluVmFsID0gTWF0aC5taW4obWluVmFsLCB2YWwpXHJcbiAgICAgIG1heFZhbCA9IE1hdGgubWF4KG1heFZhbCwgdmFsKVxyXG4gICAgICB1cGRhdGVzLnB1c2goZilcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIGludGVydmFsbyB2YWxvcmVzJywgeyBtaW5WYWwsIG1heFZhbCwgdXBkYXRlczogdXBkYXRlcy5sZW5ndGggfSlcclxuXHJcbiAgICBpZiAodXBkYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnNvbGUudGltZSgnW21pbmVyYWxzXSBhcHBseUVkaXRzJylcclxuICAgICAgYXdhaXQgbGF5ZXIuYXBwbHlFZGl0cyh7IHVwZGF0ZUZlYXR1cmVzOiB1cGRhdGVzIH0pXHJcbiAgICAgIGNvbnNvbGUudGltZUVuZCgnW21pbmVyYWxzXSBhcHBseUVkaXRzJylcclxuICAgIH1cclxuXHJcbiAgICAvLyAyKSBNb250YSBvcyBzdG9wc1xyXG4gICAgY29uc3QgZGlmZiA9IG1heFZhbCAtIG1pblZhbFxyXG4gICAgY29uc3QgYnVpbGRMYWJlbCA9ICh2OiBudW1iZXIpID0+IGFncnVwYWRvciA9PT0gJ2FuYWxpc2UnID8gYCR7dn1gIDogYCR7dn0gJWBcclxuXHJcbiAgICBsZXQgc3RvcHM6IEFycmF5PHsgdmFsdWU6IG51bWJlcjsgY29sb3I6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9PlxyXG4gICAgaWYgKGRpZmYgPCAzKSB7XHJcbiAgICAgIHN0b3BzID0gW1xyXG4gICAgICAgIHsgdmFsdWU6IG1pblZhbCwgY29sb3I6ICdyZ2IoMjQ5LDIzOCwyMjUpJywgbGFiZWw6IGJ1aWxkTGFiZWwobWluVmFsKSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IG1heFZhbCwgY29sb3I6ICdyZ2IoMTY1LDYwLDIpJywgICBsYWJlbDogYnVpbGRMYWJlbChtYXhWYWwpIH1cclxuICAgICAgXVxyXG4gICAgfSBlbHNlIGlmIChkaWZmIDwgNSkge1xyXG4gICAgICBjb25zdCBzdGVwID0gTWF0aC5yb3VuZChkaWZmIC8gNCkgfHwgMVxyXG4gICAgICBzdG9wcyA9IFtcclxuICAgICAgICB7IHZhbHVlOiBtaW5WYWwsICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjQ5LDIzOCwyMjUpJywgbGFiZWw6IGJ1aWxkTGFiZWwobWluVmFsKSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IG1pblZhbCArIDIgKiBzdGVwLCBjb2xvcjogJ3JnYigyNTMsMTQyLDU1KScsICBsYWJlbDogYnVpbGRMYWJlbChtaW5WYWwgKyAyICogc3RlcCkgfSxcclxuICAgICAgICB7IHZhbHVlOiBtYXhWYWwsICAgICAgICAgICAgY29sb3I6ICdyZ2IoMTY1LDYwLDIpJywgICAgbGFiZWw6IGJ1aWxkTGFiZWwobWF4VmFsKSB9XHJcbiAgICAgIF1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHN0ZXAgPSBNYXRoLnJvdW5kKGRpZmYgLyA0KSB8fCAxXHJcbiAgICAgIHN0b3BzID0gW1xyXG4gICAgICAgIHsgdmFsdWU6IG1pblZhbCwgICAgICAgICAgICBjb2xvcjogJ3JnYigyNDksMjM4LDIyNSknLCBsYWJlbDogYnVpbGRMYWJlbChtaW5WYWwpIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogbWluVmFsICsgMSAqIHN0ZXAsIGNvbG9yOiAncmdiKDI1MSwxOTAsMTMwKScsIGxhYmVsOiBidWlsZExhYmVsKG1pblZhbCArIDEgKiBzdGVwKSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IG1pblZhbCArIDIgKiBzdGVwLCBjb2xvcjogJ3JnYigyNTMsMTQyLDU1KScsICBsYWJlbDogYnVpbGRMYWJlbChtaW5WYWwgKyAyICogc3RlcCkgfSxcclxuICAgICAgICB7IHZhbHVlOiBtYXhWYWwgLSAxICogc3RlcCwgY29sb3I6ICdyZ2IoMjMzLDg1LDYpJywgICAgbGFiZWw6IGJ1aWxkTGFiZWwobWF4VmFsIC0gMSAqIHN0ZXApIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogbWF4VmFsLCAgICAgICAgICAgIGNvbG9yOiAncmdiKDE2NSw2MCwyKScsICAgIGxhYmVsOiBidWlsZExhYmVsKG1heFZhbCkgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgLy8gMykgQXBsaWNhIHZpc3VhbCB2YXJpYWJsZSBkZSBjb3JcclxuICAgIGNvbnN0IHJlbmRlcmVyID0gbGF5ZXIucmVuZGVyZXI/LmNsb25lID8gbGF5ZXIucmVuZGVyZXIuY2xvbmUoKSA6IGxheWVyLnJlbmRlcmVyXHJcbiAgICBjb25zdCBjb2xvclZpc1ZhciA9IHtcclxuICAgICAgdHlwZTogJ2NvbG9yJyxcclxuICAgICAgZmllbGQ6IGZpZWxkVmFyLFxyXG4gICAgICBsZWdlbmRPcHRpb25zOiB7IHRpdGxlOiAnJyB9LFxyXG4gICAgICBzdG9wc1xyXG4gICAgfSBhcyBhbnlcclxuICAgIHJlbmRlcmVyLnZpc3VhbFZhcmlhYmxlcyA9IFtjb2xvclZpc1Zhcl1cclxuICAgIGxheWVyLnJlbmRlcmVyID0gcmVuZGVyZXJcclxuICAgIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIHZpc3VhbFZhcmlhYmxlcyBhcGxpY2FkYXMnKVxyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbbWluZXJhbHNdIEVSUk8gYXBsaWNhckNvbG9yaXphY2FvUG9yQWdydXBhZG9yJywgZSlcclxuICB9IGZpbmFsbHkge1xyXG4gICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgfVxyXG59XHJcblxyXG4vKiogTGFiZWwgaHVtYW5vIHBhcmEgbyB0w610dWxvIGRhIGxlZ2VuZGEvYmFzZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tVmFsdWUodjogTWluZXJhbFRpcG8pIHtcclxuICBjb25zdCBmID0gTUlORVJBTF9PUFRJT05TLmZpbmQobyA9PiBvLnZhbHVlID09PSB2KVxyXG4gIHJldHVybiBmPy5sYWJlbCA/PyBTdHJpbmcodilcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuLyoqIEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50ICovXHJcbmltcG9ydCB7IFJlYWN0LCBqc3gsIGNzcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHR5cGUgeyBNaW5lcmFsTGlzdGFJdGVtLCBNaW5lcmFsVGlwbyB9IGZyb20gJy4vTWluZXJhbHMnXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIG1pbmVyYWxBbmFsaXNlOiBNaW5lcmFsVGlwbyB8ICcnICAgICAgICAgICAgLy8gRFJYLVRPVCB8IERSWC1BUkcgfCBNQVNTQSB8IEFSRUEgfCB0b2Rhc0FuYWxpc2VzXHJcbiAgbGlzdGFNaW5lcmFpczogTWluZXJhbExpc3RhSXRlbVtdXHJcbiAgbG9hZGluZ01pbmVyYWlzOiBib29sZWFuXHJcbiAgZXJyb3JNaW5lcmFpczogc3RyaW5nXHJcblxyXG4gIGJ1c2NhTWluZXJhbDogc3RyaW5nXHJcbiAgc2V0QnVzY2FNaW5lcmFsOiAodjogc3RyaW5nKSA9PiB2b2lkXHJcbiAgbWluZXJhbFNlbGVjaW9uYWRvOiBNaW5lcmFsTGlzdGFJdGVtIHwgbnVsbFxyXG4gIHNldE1pbmVyYWxTZWxlY2lvbmFkbzogKG06IE1pbmVyYWxMaXN0YUl0ZW0gfCBudWxsKSA9PiB2b2lkXHJcblxyXG4gIGFncnVwYWRvcjogJ2FuYWxpc2UnIHwgJ21lZGlhJyB8ICdtYXhpbWEnIHwgJydcclxuICBzZXRBZ3J1cGFkb3I6ICh2OiAnYW5hbGlzZScgfCAnbWVkaWEnIHwgJ21heGltYScgfCAnJykgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBib3hTdHlsZSA9IGNzc2BtYXJnaW4tdG9wOjhweDtib3JkZXI6MXB4IHNvbGlkICNlZWU7Ym9yZGVyLXJhZGl1czo2cHg7YmFja2dyb3VuZDojZmZmO3BhZGRpbmc6OHB4O2BcclxuY29uc3QgaGVhZGVyID0gY3NzYGZvbnQtd2VpZ2h0OjYwMDttYXJnaW46NHB4IDAgNnB4O2BcclxuY29uc3Qgc2VhcmNoSW5wdXQgPSBjc3NgXHJcbiAgd2lkdGg6MTAwJTtib3JkZXI6MXB4IHNvbGlkICNjZmNmY2Y7Ym9yZGVyLXJhZGl1czo0cHg7cGFkZGluZzo2cHggOHB4O2ZvbnQtc2l6ZTouOTVyZW07b3V0bGluZTpub25lO1xyXG4gICY6Zm9jdXN7Ym9yZGVyLWNvbG9yOiM5OTk7fVxyXG5gXHJcbmNvbnN0IGxpc3RCb3ggPSBjc3NgXHJcbiAgbWFyZ2luLXRvcDo2cHg7Ym9yZGVyOjFweCBzb2xpZCAjZWVlO2JvcmRlci1yYWRpdXM6NnB4O21heC1oZWlnaHQ6MTgwcHg7b3ZlcmZsb3c6YXV0bztwYWRkaW5nOjRweDtiYWNrZ3JvdW5kOiNmYWZhZmE7XHJcbmBcclxuY29uc3QgbGlzdEl0ZW0gPSBjc3NgXHJcbiAgcGFkZGluZzo2cHggOHB4O2JvcmRlci1yYWRpdXM6NHB4O2N1cnNvcjpwb2ludGVyO3VzZXItc2VsZWN0Om5vbmU7XHJcbiAgJjpob3ZlcntiYWNrZ3JvdW5kOiNmMGYwZjA7fVxyXG4gICYuYWN0aXZle2JhY2tncm91bmQ6I2U4ZjBmZTtib3JkZXI6MXB4IHNvbGlkICNjOWRlZmQ7fVxyXG5gXHJcbmNvbnN0IHJhZGlvc1dyYXBwZXIgPSBjc3NgXHJcbiAgbWFyZ2luLXRvcDo4cHg7cGFkZGluZzo2cHg7Ym9yZGVyOjFweCBzb2xpZCAjZWVlO2JvcmRlci1yYWRpdXM6NnB4O2JhY2tncm91bmQ6I2ZhZmFmYTtcclxuICBkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgzLG1pbm1heCgxMDBweCwxZnIpKTtnYXA6NnB4O1xyXG5gXHJcbmNvbnN0IHJhZGlvTGFiZWwgPSBjc3NgXHJcbiAgZGlzcGxheTppbmxpbmUtZ3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6YXV0byAxZnI7YWxpZ24taXRlbXM6Y2VudGVyO2NvbHVtbi1nYXA6NnB4O2ZvbnQtc2l6ZTouOTVyZW07Y3Vyc29yOnBvaW50ZXI7XHJcbiAgaW5wdXR7d2lkdGg6MTRweDtoZWlnaHQ6MTRweDt9XHJcbmBcclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZShzOiBzdHJpbmcpIHtcclxuICByZXR1cm4gKHN8fCcnKS5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1xccHtEaWFjcml0aWN9L2d1LCcnKS50b0xvd2VyQ2FzZSgpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNaW5lcmFsc0xpc3RQYW5lbCh7XHJcbiAgbWluZXJhbEFuYWxpc2UsIGxpc3RhTWluZXJhaXMsIGxvYWRpbmdNaW5lcmFpcywgZXJyb3JNaW5lcmFpcyxcclxuICBidXNjYU1pbmVyYWwsIHNldEJ1c2NhTWluZXJhbCxcclxuICBtaW5lcmFsU2VsZWNpb25hZG8sIHNldE1pbmVyYWxTZWxlY2lvbmFkbyxcclxuICBhZ3J1cGFkb3IsIHNldEFncnVwYWRvclxyXG59OiBQcm9wcykge1xyXG4gIC8vIOKsh++4jyBOT1ZPOiBjb250cm9sYSBhYmVydHVyYSBkYSBsaXN0YSBxdWFuZG8gbyBpbnB1dCBnYW5oYSBmb2NvL2NsaXF1ZVxyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBxID0gbm9ybWFsaXplKGJ1c2NhTWluZXJhbClcclxuICAvLyDirIfvuI8gTVVET1U6IHF1YW5kbyBxIHZhemlvLCBsaXN0YSBjb21wbGV0YTsgcXVhbmRvIGjDoSBxLCBmaWx0cmFcclxuICBjb25zdCBsaXN0YUZpbHRyYWRhID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+IChsaXN0YU1pbmVyYWlzIHx8IFtdKS5maWx0ZXIobSA9PiAhcSB8fCBub3JtYWxpemUobS5ub21lTWluZXJhbCkuaW5jbHVkZXMocSkpLFxyXG4gICAgW2xpc3RhTWluZXJhaXMsIHFdXHJcbiAgKVxyXG5cclxuICBjb25zdCBzZWxlY3RlZE5hbWUgPSBtaW5lcmFsU2VsZWNpb25hZG8/Lm5vbWVNaW5lcmFsIHx8ICcnXHJcbiAgY29uc3QgZGlzYWJsZWRBbGwgPSAhbWluZXJhbEFuYWxpc2VcclxuXHJcbiAgY29uc3QgaGFuZGxlUGljayA9IChtOiBNaW5lcmFsTGlzdGFJdGVtKSA9PiB7XHJcbiAgICBzZXRNaW5lcmFsU2VsZWNpb25hZG8obSlcclxuICAgIHNldEJ1c2NhTWluZXJhbChtLm5vbWVNaW5lcmFsKVxyXG4gICAgc2V0T3BlbihmYWxzZSkgLy8g4qyF77iPIGZlY2hhIGFww7NzIGVzY29saGVyXHJcbiAgfVxyXG5cclxuICAvLyBQYXJhIG7Do28gZmVjaGFyIGEgbGlzdGEgYW50ZXMgZG8gY2xpcXVlIG5vIGl0ZW0gKG9yZGVtIGJsdXIvY2xpY2sgZG8gYnJvd3NlcilcclxuICBjb25zdCBkZWxheWVkQ2xvc2UgPSAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHNldE9wZW4oZmFsc2UpLCAxMjApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNzcz17Ym94U3R5bGV9IGFyaWEtbGFiZWw9XCJsaXN0YWdlbS1kZS1taW5lcmFpc1wiPlxyXG4gICAgICA8ZGl2IGNzcz17aGVhZGVyfT5MaXN0YXIgb3MgbWluZXJhaXM8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiDirIfvuI8gYWJyZSBhIGxpc3RhIGFvIGZvY2FyL2NsaWNhcjsgbWFudMOpbSBmaWx0cmFnZW0gYW8gZGlnaXRhciAqL31cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY3NzPXtzZWFyY2hJbnB1dH1cclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e2Rpc2FibGVkQWxsID8gJ1NlbGVjaW9uZSB1bSB0aXBvIGRlIGFuw6FsaXNlIGFjaW1hJyA6ICdEaWdpdGUgb3UgY2xpcXVlIHBhcmEgbGlzdGFyJ31cclxuICAgICAgICB2YWx1ZT17YnVzY2FNaW5lcmFsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgc2V0QnVzY2FNaW5lcmFsKGUudGFyZ2V0LnZhbHVlKTsgc2V0T3Blbih0cnVlKSB9fVxyXG4gICAgICAgIG9uRm9jdXM9eygpID0+IHNldE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX1cclxuICAgICAgICBvbkJsdXI9e2RlbGF5ZWRDbG9zZX1cclxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWRBbGwgfHwgbG9hZGluZ01pbmVyYWlzfVxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJidXNjYXItbWluZXJhbFwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7Lyog4qyH77iPIEEgbGlzdGEgYWdvcmEgYWJyZSBxdWFuZG8gb3Blbj10cnVlIChmb2NvL2NsaXF1ZSksIG1lc21vIHNlbSB0ZXh0byAqL31cclxuICAgICAge29wZW4gJiYgIWRpc2FibGVkQWxsICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjc3M9e2xpc3RCb3h9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwibGlzdGEtZGUtbWluZXJhaXNcIlxyXG4gICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSAvLyBpbXBlZGUgYmx1ciBhbnRlcyBkbyBjbGlja1xyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nTWluZXJhaXMgJiYgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PkNhcnJlZ2FuZG8gbGlzdGHigKY8L2Rpdj59XHJcbiAgICAgICAgICB7ISFlcnJvck1pbmVyYWlzICYmIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCwgY29sb3I6ICcjYjAwJyB9fT5FcnJvOiB7ZXJyb3JNaW5lcmFpc308L2Rpdj59XHJcbiAgICAgICAgICB7IWxvYWRpbmdNaW5lcmFpcyAmJiAhZXJyb3JNaW5lcmFpcyAmJiBsaXN0YUZpbHRyYWRhLmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT5OZW5odW0gbWluZXJhbCBlbmNvbnRyYWRvLjwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHshbG9hZGluZ01pbmVyYWlzICYmICFlcnJvck1pbmVyYWlzICYmIGxpc3RhRmlsdHJhZGEubWFwKG0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmUgPSBtLm5vbWVNaW5lcmFsID09PSBzZWxlY3RlZE5hbWVcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2Ake20ubm9tZU1pbmVyYWx9LSR7bS5ub21lUmVzdW1pZG9NaW5lcmFsfWB9XHJcbiAgICAgICAgICAgICAgICBjc3M9e2xpc3RJdGVtfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmUgPyAnYWN0aXZlJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSAvLyBnYXJhbnRlIHF1ZSBvIGNsaWNrIG7Do28gcGVyY2EgbyBmb2NvIGFudGVzXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQaWNrKG0pfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e20ubm9tZU1pbmVyYWx9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge20ubm9tZU1pbmVyYWx9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qIHLDoWRpb3MgZSBkaWNhcyDigJQgaW5hbHRlcmFkb3MgKi99XHJcbiAgICAgIDxkaXYgY3NzPXtyYWRpb3NXcmFwcGVyfSBhcmlhLWxhYmVsPVwiYWdydXBhZG9yZXMtbWluZXJhaXNcIj5cclxuICAgICAgICA8bGFiZWwgY3NzPXtyYWRpb0xhYmVsfSB0aXRsZT1cIlF1YW50aWRhZGUgZGUgQW7DoWxpc2VzXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgbmFtZT1cInRpcG8tbWluZXJhbFwiXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2FncnVwYWRvciA9PT0gJ2FuYWxpc2UnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0QWdydXBhZG9yKCdhbmFsaXNlJyl9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshbWluZXJhbFNlbGVjaW9uYWRvfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuPkFuw6FsaXNlczwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBjc3M9e3JhZGlvTGFiZWx9IHRpdGxlPVwiTcOpZGlhIGRvIG1pbmVyYWwgc2VsZWNpb25hZG9cIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICBuYW1lPVwidGlwby1taW5lcmFsXCJcclxuICAgICAgICAgICAgY2hlY2tlZD17YWdydXBhZG9yID09PSAnbWVkaWEnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0QWdydXBhZG9yKCdtZWRpYScpfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IW1pbmVyYWxTZWxlY2lvbmFkb31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3Bhbj5Nw6lkaWE8L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgY3NzPXtyYWRpb0xhYmVsfSB0aXRsZT1cIk3DoXhpbW8gZG8gbWluZXJhbCBzZWxlY2lvbmFkb1wiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXBvLW1pbmVyYWxcIlxyXG4gICAgICAgICAgICBjaGVja2VkPXthZ3J1cGFkb3IgPT09ICdtYXhpbWEnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0QWdydXBhZG9yKCdtYXhpbWEnKX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFtaW5lcmFsU2VsZWNpb25hZG99XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNwYW4+TcOheGltYTwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA2LCBmb250U2l6ZTogJy45cmVtJywgY29sb3I6ICcjNjY2JyB9fT5cclxuICAgICAgICB7IW1pbmVyYWxBbmFsaXNlICYmICdFc2NvbGhhIERSWC9RZW1zY2FuL1RvZGFzIHBhcmEgaGFiaWxpdGFyIGEgYnVzY2EuJ31cclxuICAgICAgICB7bWluZXJhbEFuYWxpc2UgJiYgIW1pbmVyYWxTZWxlY2lvbmFkbyAmJiAnQ2xpcXVlIG5vIGNhbXBvIHBhcmEgbGlzdGFyIG91IGRpZ2l0ZSBwYXJhIGZpbHRyYXI7IHNlbGVjaW9uZSB1bSBtaW5lcmFsIHBhcmEgaGFiaWxpdGFyIE3DqWRpYS9Nw6F4aW1hLid9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4iLCIvLyB1dGlscy50cyAoRVNNIEBhcmNnaXMvY29yZSlcclxuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tIFwiQGFyY2dpcy9jb3JlL2xheWVycy9GZWF0dXJlTGF5ZXJcIlxyXG5pbXBvcnQgTGVnZW5kIGZyb20gXCJAYXJjZ2lzL2NvcmUvd2lkZ2V0cy9MZWdlbmRcIlxyXG5pbXBvcnQgQ2xhc3NCcmVha3NSZW5kZXJlciBmcm9tIFwiQGFyY2dpcy9jb3JlL3JlbmRlcmVycy9DbGFzc0JyZWFrc1JlbmRlcmVyXCJcclxuaW1wb3J0IFNpbXBsZU1hcmtlclN5bWJvbCBmcm9tIFwiQGFyY2dpcy9jb3JlL3N5bWJvbHMvU2ltcGxlTWFya2VyU3ltYm9sXCJcclxuXHJcbmV4cG9ydCBjb25zdCBjb3Jlc1RpcG9zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gIGxhdGVyYWw6IFwicmdiYSg4OCwgMTksIDI1MiwgMC43KVwiLFxyXG4gIHRlc3RlbXVuaG86IFwicmdiYSgyNTUsIDAsIDI1NSwgMC43KVwiLFxyXG4gIGNhbGhhOiBcInJnYmEoMjQ1LCAyMDEsIDM4LCAwLjcpXCIsXHJcbiAgcGx1ZzogXCJyZ2JhKDEyNSwgMjUzLCAxNDgsIDAuNylcIixcclxuICBcIndob2xlIGNvcmVcIjogXCJyZ2JhKDI1NSwgNDMsIDI0LCAwLjcpXCJcclxufVxyXG5cclxudHlwZSBHZXJhclBhcmFtcyA9IHtcclxuICBqaW11TWFwVmlldzogYW55XHJcbiAgZGFkb3M6IHsgY29kaWdvUG9jbzogbnVtYmVyOyB0b3RhbDogbnVtYmVyIH1bXVxyXG4gIGNvbG9yRmlsbDogc3RyaW5nXHJcbiAgaWRDYW1hZGE6IHN0cmluZ1xyXG4gIGlkTGVnZW5kYTogc3RyaW5nXHJcbiAgdGl0bGVMZWdlbmRhOiBzdHJpbmdcclxuICB3aXRoSW50ZXJlc3Q/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXJhck1hcGFEaXN0cmlidWljYW9FQih7XHJcbiAgamltdU1hcFZpZXcsIGRhZG9zLCBjb2xvckZpbGwsIGlkQ2FtYWRhLCBpZExlZ2VuZGEsIHRpdGxlTGVnZW5kYVxyXG59OiBHZXJhclBhcmFtcykge1xyXG4gIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFtkaXN0LWViXSBnZXJhck1hcGFEaXN0cmlidWljYW9FQiBpZD0ke2lkQ2FtYWRhfWApXHJcbiAgY29uc29sZS50aW1lKGBbZGlzdC1lYl0gdGVtcG8tdG90YWwgJHtpZENhbWFkYX1gKVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlld1xyXG4gICAgY29uc3QgbWFwID0gdmlldy5tYXBcclxuXHJcbiAgICBjb25zb2xlLmxvZygnW2Rpc3QtZWJdIHF0ZCBkYWRvcycsIGRhZG9zLmxlbmd0aCwgZGFkb3Muc2xpY2UoMCwgMTApKVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhZG9zKSB8fCBkYWRvcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS53YXJuKCdbZGlzdC1lYl0gc2VtIGRhZG9zIC0+IG7Do28gY3JpYSBjYW1hZGEnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3JtYWxpemEgbGlzdGEgZGUgY8OzZGlnb3MgKGFwZW5hcyBuw7ptZXJvcylcclxuICAgIGNvbnN0IGNvZGlnb3NBcnIgPSBkYWRvcy5tYXAocCA9PiBOdW1iZXIocC5jb2RpZ29Qb2NvKSkuZmlsdGVyKHYgPT4gTnVtYmVyLmlzRmluaXRlKHYpKVxyXG4gICAgY29uc3QgY29kaWdvcyA9IGNvZGlnb3NBcnIuam9pbignLCcpXHJcbiAgICBpZiAoIWNvZGlnb3MpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdbZGlzdC1lYl0gbGlzdGEgZGUgY8OzZGlnb3MgdmF6aWEgYXDDs3Mgbm9ybWFsaXphw6fDo28nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBgUE9DT19DRF9QT0NPIElOICgke2NvZGlnb3N9KWBcclxuICAgIGNvbnNvbGUubG9nKCdbZGlzdC1lYl0gZGVmaW5pdGlvbkV4cHJlc3Npb24nLCBleHByZXNzaW9uKVxyXG5cclxuICAgIC8vIExheWVyIGJhc2UgZG8gc2VydmnDp29cclxuICAgIGNvbnN0IGNhbWFkYVBvY29zU3J2ID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vYmFzZWdpcy5wZXRyb2JyYXMuY29tLmJyL2FyY2dpcy9yZXN0L3NlcnZpY2VzL0VYUExPUkEvRmVhdHVyZV9Qb2Nvcy9NYXBTZXJ2ZXIvMCcsXHJcbiAgICAgIGRlZmluaXRpb25FeHByZXNzaW9uOiBleHByZXNzaW9uLFxyXG4gICAgICB0aXRsZTogJ1Bvw6dvcyAoYmFzZSknLFxyXG4gICAgICBvdXRGaWVsZHM6IFsnKiddLFxyXG4gICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zb2xlLnRpbWUoJ1tkaXN0LWViXSBsb2FkIGNhbWFkYVBvw6dvcycpXHJcbiAgICBhd2FpdCBjYW1hZGFQb2Nvc1Nydi5sb2FkKClcclxuICAgIGNvbnNvbGUudGltZUVuZCgnW2Rpc3QtZWJdIGxvYWQgY2FtYWRhUG/Dp29zJylcclxuXHJcbiAgICAvLyBPSUQgcmVhbCBkbyBzZXJ2acOnbyAocG9kZSBzZXIgUE9DT19DRF9QT0NPKVxyXG4gICAgY29uc3Qgb2JqZWN0SWRGaWVsZCA9IChjYW1hZGFQb2Nvc1NydiBhcyBhbnkpLm9iamVjdElkRmllbGQgfHwgJ09CSkVDVElEJ1xyXG4gICAgY29uc29sZS5sb2coJ1tkaXN0LWViXSBvYmplY3RJZEZpZWxkIGRvIHNlcnZpw6dvOicsIG9iamVjdElkRmllbGQpXHJcblxyXG4gICAgY29uc29sZS50aW1lKCdbZGlzdC1lYl0gcXVlcnlGZWF0dXJlcycpXHJcbiAgICBjb25zdCBxdWVyeVJlc3VsdCA9IGF3YWl0IGNhbWFkYVBvY29zU3J2LnF1ZXJ5RmVhdHVyZXMoe1xyXG4gICAgICB3aGVyZTogZXhwcmVzc2lvbixcclxuICAgICAgb3V0RmllbGRzOiBbJyonXSxcclxuICAgICAgcmV0dXJuR2VvbWV0cnk6IHRydWVcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLnRpbWVFbmQoJ1tkaXN0LWViXSBxdWVyeUZlYXR1cmVzJylcclxuICAgIGNvbnNvbGUubG9nKCdbZGlzdC1lYl0gZmVhdHVyZXMgcmV0b3JuYWRhcycsIHF1ZXJ5UmVzdWx0LmZlYXR1cmVzLmxlbmd0aClcclxuXHJcbiAgICAvLyBBdHJpYnVpIFRPVEFMIGUgaW5pY2lhbGl6YSBtZF92YWxcclxuICAgIGNvbnN0IGZlYXR1cmVzID0gcXVlcnlSZXN1bHQuZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvZGlnbyA9IE51bWJlcihmZWF0dXJlLmF0dHJpYnV0ZXMuUE9DT19DRF9QT0NPKVxyXG4gICAgICBjb25zdCBkYWRvID0gZGFkb3MuZmluZChwID0+IHAuY29kaWdvUG9jbyA9PT0gY29kaWdvKVxyXG4gICAgICBjb25zdCB0b3RhbCA9IGRhZG8gPyBOdW1iZXIoZGFkby50b3RhbCkgOiAwXHJcbiAgICAgIGZlYXR1cmUuYXR0cmlidXRlcy5QT0NPX01EX01FUklEX0NFTlQgPSB0b3RhbFxyXG4gICAgICBmZWF0dXJlLmF0dHJpYnV0ZXMubWRfdmFsID0gMCAvLyB1c2FkbyBwZWxvcyBhZ3J1cGFkb3Jlc1xyXG4gICAgICByZXR1cm4gZmVhdHVyZVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBFc3RhdMOtc3RpY2EgcGFyYSBjbGFzc2VzL2J1YmJsZVxyXG4gICAgY29uc3QgdmFsb3JlcyA9IGRhZG9zLm1hcChwID0+IE51bWJlcihwLnRvdGFsKSkuZmlsdGVyKHYgPT4gTnVtYmVyLmlzRmluaXRlKHYpKVxyXG4gICAgbGV0IG1pbiA9IE1hdGgubWluKC4uLnZhbG9yZXMpXHJcbiAgICBsZXQgbWF4ID0gTWF0aC5tYXgoLi4udmFsb3JlcylcclxuICAgIGNvbnNvbGUubG9nKCdbZGlzdC1lYl0gbWluL21heCBhbnRlcycsIHsgbWluLCBtYXggfSlcclxuXHJcbiAgICBjb25zdCBpbmZvOiBhbnlbXSA9IFtdXHJcbiAgICBjb25zdCBvdXRsaW5lID0geyBjb2xvcjogXCJibGFja1wiLCB3aWR0aDogXCIxcHhcIiB9IGFzIGNvbnN0XHJcblxyXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobWluKSB8fCAhTnVtYmVyLmlzRmluaXRlKG1heCkpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdbZGlzdC1lYl0gdmFsb3JlcyBpbnbDoWxpZG9zIC0+IG7Do28gY3JpYSBjYW1hZGEnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAobWluID09PSAwICYmIG1heCA9PT0gMCkge1xyXG4gICAgICBpbmZvLnB1c2goe1xyXG4gICAgICAgIG1pblZhbHVlOiAwLCBtYXhWYWx1ZTogMCxcclxuICAgICAgICBsYWJlbDogXCJOw6NvIGjDoSBkYWRvcyBzdWZpY2llbnRlc1wiLFxyXG4gICAgICAgIHN5bWJvbDogbmV3IFNpbXBsZU1hcmtlclN5bWJvbCh7IGNvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsMClcIiwgc2l6ZTogMCwgc3R5bGU6IFwiY2lyY2xlXCIsIG91dGxpbmUgfSlcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHplcmFkb3MgPSB2YWxvcmVzLmZpbHRlcih2ID0+IHYgPT09IDApLmxlbmd0aFxyXG4gICAgICBjb25zdCBuYW9aZXJhZG9zID0gdmFsb3Jlcy5maWx0ZXIodiA9PiB2ID4gMClcclxuICAgICAgY29uc29sZS5sb2coJ1tkaXN0LWViXSB6ZXJhZG9zL25hb1plcmFkb3MnLCB7IHplcmFkb3MsIG5hb1plcmFkb3M6IG5hb1plcmFkb3MubGVuZ3RoIH0pXHJcblxyXG4gICAgICBpZiAoemVyYWRvcyA+IDApIHtcclxuICAgICAgICBpbmZvLnB1c2goe1xyXG4gICAgICAgICAgbWluVmFsdWU6IDAsIG1heFZhbHVlOiAwLFxyXG4gICAgICAgICAgbGFiZWw6IGB8IDAgfCAoJHt6ZXJhZG9zfSBwb8OnbyR7emVyYWRvcyA+IDEgPyAncycgOiAnJ30pYCxcclxuICAgICAgICAgIHN5bWJvbDogbmV3IFNpbXBsZU1hcmtlclN5bWJvbCh7IGNvbG9yOiBcInJnYmEoMjAwLDIwMCwyMDAsMC4zKVwiLCBzaXplOiA2LCBzdHlsZTogXCJjaXJjbGVcIiwgb3V0bGluZSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1pbiA9IE1hdGgubWF4KDEsIG1pbilcclxuICAgICAgY29uc3QgbiA9IG5hb1plcmFkb3MubGVuZ3RoXHJcbiAgICAgIGNvbnN0IG51bUNsYXNzZXMgPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKDEgKyAzLjMgKiBNYXRoLmxvZzEwKG4gfHwgMSkpKVxyXG4gICAgICBjb25zdCBicmVha3MgPSBNYXRoLmNlaWwoKG1heCAtIG1pbiArIDEpIC8gTWF0aC5tYXgoMSwgbnVtQ2xhc3NlcykpXHJcbiAgICAgIGNvbnN0IG1heFNpemUgPSA0MFxyXG4gICAgICBjb25zb2xlLmxvZygnW2Rpc3QtZWJdIGNsYXNzZXMnLCB7IG51bUNsYXNzZXMsIGJyZWFrcywgbWF4U2l6ZSB9KVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1DbGFzc2VzOyBpKyspIHtcclxuICAgICAgICBjb25zdCBtaW5WYWx1ZSA9IG1pbiArIChpICogYnJlYWtzKVxyXG4gICAgICAgIGNvbnN0IG1heFZhbHVlID0gbWluICsgKChpICsgMSkgKiBicmVha3MpIC0gMVxyXG4gICAgICAgIGlmIChtaW5WYWx1ZSA+IG1heCkgYnJlYWtcclxuICAgICAgICBjb25zdCBjb3VudCA9IG5hb1plcmFkb3MuZmlsdGVyKHYgPT4gdiA+PSBtaW5WYWx1ZSAmJiB2IDw9IG1heFZhbHVlKS5sZW5ndGhcclxuICAgICAgICBjb25zdCBsYWJlbCA9IGAke21pblZhbHVlfSB8LS0tfCAke21heFZhbHVlfSAoJHtjb3VudH0gcG/Dp28ke2NvdW50ID4gMSA/ICdzJyA6ICcnfSlgXHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IDYgKyAoaSAqIChtYXhTaXplIC8gbnVtQ2xhc3NlcykpXHJcbiAgICAgICAgaW5mby5wdXNoKHtcclxuICAgICAgICAgIG1pblZhbHVlLCBtYXhWYWx1ZSwgbGFiZWwsXHJcbiAgICAgICAgICBzeW1ib2w6IG5ldyBTaW1wbGVNYXJrZXJTeW1ib2woeyBjb2xvcjogY29sb3JGaWxsLCBzaXplLCBzdHlsZTogXCJjaXJjbGVcIiwgb3V0bGluZSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBDbGFzc0JyZWFrc1JlbmRlcmVyKHtcclxuICAgICAgZmllbGQ6IFwiUE9DT19NRF9NRVJJRF9DRU5UXCIsXHJcbiAgICAgIGNsYXNzQnJlYWtJbmZvczogaW5mb1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBTY2hlbWEgZG8gbGF5ZXIgY2xpZW50LXNpZGU6XHJcbiAgICAvLyAtIGhlcmRhIGNhbXBvcyBkbyBzZXJ2acOnb1xyXG4gICAgLy8gLSByZW1vdmUgZHVwbGljYXRhcyBxdWUgdmFtb3MgYWRpY2lvbmFyXHJcbiAgICBjb25zdCBiYXNlRmllbGRzID0gY2FtYWRhUG9jb3NTcnYuZmllbGRzLmZpbHRlcihmID0+XHJcbiAgICAgIGY/Lm5hbWUgIT09ICdQT0NPX01EX01FUklEX0NFTlQnICYmIGY/Lm5hbWUgIT09ICdtZF92YWwnXHJcbiAgICApXHJcbiAgICBjb25zdCBmaWVsZHMgPSBbXHJcbiAgICAgIC4uLmJhc2VGaWVsZHMsXHJcbiAgICAgIHsgbmFtZTogXCJQT0NPX01EX01FUklEX0NFTlRcIiwgYWxpYXM6IFwiVmFsb3IgKE1pbmVyYWlzL0Ftb3N0cmFzKVwiLCB0eXBlOiBcImRvdWJsZVwiIGFzIGNvbnN0IH0sXHJcbiAgICAgIHsgbmFtZTogXCJtZF92YWxcIiwgYWxpYXM6IFwiVmFsb3IgQWdydXBhZG9yXCIsIHR5cGU6IFwiZG91YmxlXCIgYXMgY29uc3QgfVxyXG4gICAgXVxyXG5cclxuICAgIC8vIFJlbW92ZSBjYW1hZGEgYW50ZXJpb3IgKHNlIGV4aXN0aXIpXHJcbiAgICBjb25zdCBleGlzdGVudGUgPSBtYXAuZmluZExheWVyQnlJZChpZENhbWFkYSlcclxuICAgIGlmIChleGlzdGVudGUpIHsgY29uc29sZS5sb2coJ1tkaXN0LWViXSByZW1vdmUgY2FtYWRhIGV4aXN0ZW50ZScsIGlkQ2FtYWRhKTsgbWFwLnJlbW92ZShleGlzdGVudGUpIH1cclxuXHJcbiAgICAvLyBDcmlhIGNhbWFkYSBjbGllbnQtc2lkZSBjb20gbyBPSUQgcmVhbCBkbyBzZXJ2acOnb1xyXG4gICAgY29uc3QgY2FtYWRhRGlzdHJpYnVpY2FvID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICAgIGlkOiBpZENhbWFkYSxcclxuICAgICAgc291cmNlOiBmZWF0dXJlcyxcclxuICAgICAgZmllbGRzLFxyXG4gICAgICBvYmplY3RJZEZpZWxkLCAvLyA8PDwgaGVyZGFkbyBkbyBzZXJ2acOnbyAoZXguOiAnUE9DT19DRF9QT0NPJylcclxuICAgICAgZ2VvbWV0cnlUeXBlOiBcInBvaW50XCIsXHJcbiAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHZpZXcuc3BhdGlhbFJlZmVyZW5jZSA/PyB7IHdraWQ6IDEwMjEwMCB9LFxyXG4gICAgICByZW5kZXJlcixcclxuICAgICAgdGl0bGU6IHRpdGxlTGVnZW5kYSxcclxuICAgICAgbGlzdE1vZGU6IFwiaGlkZVwiLFxyXG4gICAgICBmZWF0dXJlUmVkdWN0aW9uOiB7IHR5cGU6IFwiY2x1c3RlclwiLCBjbHVzdGVyTWluU2l6ZTogMTgsIGNsdXN0ZXJNYXhTaXplOiA0OCwgbGFiZWxzVmlzaWJsZTogZmFsc2UgfVxyXG4gICAgfSlcclxuXHJcbiAgICBtYXAuYWRkKGNhbWFkYURpc3RyaWJ1aWNhbylcclxuICAgIGNvbnNvbGUubG9nKCdbZGlzdC1lYl0gY2FtYWRhIGFkaWNpb25hZGEnLCBpZENhbWFkYSwgJ2ZlYXR1cmVzOicsIGZlYXR1cmVzLmxlbmd0aClcclxuXHJcbiAgICAvLyAoT3BjaW9uYWwpIGxlZ2VuZGEgbm8gbWFwYVxyXG4gICAgY29uc3QgbGVnZW5kID0gbmV3IExlZ2VuZCh7XHJcbiAgICAgIHZpZXcsXHJcbiAgICAgIGxheWVySW5mb3M6IFt7IGxheWVyOiBjYW1hZGFEaXN0cmlidWljYW8sIHRpdGxlOiB0aXRsZUxlZ2VuZGEgfV1cclxuICAgIH0pXHJcbiAgICAvLyB2aWV3LnVpLmFkZChsZWdlbmQsIFwiYm90dG9tLWxlZnRcIilcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW2Rpc3QtZWJdIEVSUk8gYW8gZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUInLCBlKVxyXG4gIH0gZmluYWxseSB7XHJcbiAgICBjb25zb2xlLnRpbWVFbmQoYFtkaXN0LWViXSB0ZW1wby10b3RhbCAke2lkQ2FtYWRhfWApXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9sYXllcnNfRmVhdHVyZUxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9yZW5kZXJlcnNfQ2xhc3NCcmVha3NSZW5kZXJlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfc3ltYm9sc19TaW1wbGVNYXJrZXJTeW1ib2xfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX3dpZGdldHNfTGVnZW5kX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG4vKiogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cclxuaW1wb3J0IHsgUmVhY3QsIGpzeCwgY3NzLCBHbG9iYWwgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyBnZXJhck1hcGFEaXN0cmlidWljYW9FQiwgY29yZXNUaXBvcyB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCB7XHJcbiAgTUlORVJBTF9PUFRJT05TLFxyXG4gIGZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXNDb250YWRvcixcclxuICBmZXRjaE1pbmVyYWxMaXN0YSxcclxuICBmZXRjaE1pbmVyYWxBZ3J1cGFkb3IsXHJcbiAgZGVzZW5oYXJEaXN0cmlidWljYW9NaW5lcmFpcyxcclxuICBhcGxpY2FyQ29sb3JpemFjYW9Qb3JBZ3J1cGFkb3IsXHJcbiAgbGFiZWxGcm9tVmFsdWUsXHJcbiAgdHlwZSBNaW5lcmFsVGlwbyxcclxuICB0eXBlIE1pbmVyYWxMaXN0YUl0ZW1cclxufSBmcm9tICcuL01pbmVyYWxzJ1xyXG5cclxuaW1wb3J0IE1pbmVyYWxzTGlzdFBhbmVsIGZyb20gJy4vTWluZXJhbHNMaXN0UGFuZWwnXHJcbmltcG9ydCBHcmFkaWVudExlZ2VuZCBmcm9tICcuL0dyYWRpZW50TGVnZW5kJ1xyXG5cclxuLyogPT09PT0gVGlwb3MgPT09PT0gKi9cclxudHlwZSBNc2dGYWl4YUludGVyZXNzZSA9IHsgdHlwZTogJ2ZhaXhhLWludGVyZXNzZSc7IGNvZGlnb3NQb2NvczogKG51bWJlciB8IHN0cmluZylbXSB9XHJcbnR5cGUgTXNnTGVnZW5kTWluZXJhaXMgPSB7IHR5cGU6ICdsZWdlbmQ6bWluZXJhaXMnOyBwYXlsb2FkOiBhbnkgfVxyXG50eXBlIE1zZ0NvbmZpZyA9IHsgdHlwZTogJ2ZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXM6b2snOyBzdGFydFdpdGhJbnRlcmVzdD86IGJvb2xlYW4gfVxyXG50eXBlIE1zZ0NvbmZpZ0ludGVyZXN0ID0geyB0eXBlOiAnY29uZmlnJzsgc3RhcnRXaXRoSW50ZXJlc3Q/OiBib29sZWFuOyBjZ1Zpc2libGU/OiBib29sZWFuIH1cclxuXHJcbnR5cGUgQW1vc3RyYUl0ZW0gPSB7XHJcbiAgY29kaWdvUG9jbzogbnVtYmVyXHJcbiAgdG90YWxBbW9zdHJhc0xhdGVyYWlzOiBudW1iZXJcclxuICB0b3RhbENhbGhhczogbnVtYmVyXHJcbiAgdG90YWxQbHVnczogbnVtYmVyXHJcbiAgdG90YWxUZXN0ZW11bmhvczogbnVtYmVyXHJcbiAgdG90YWxXaG9sZUNvcmU6IG51bWJlclxyXG59XHJcblxyXG4vKiA9PT09PSBDb25maWcgPT09PT0gKi9cclxuY29uc3QgREVGQVVMVF9GQUlYQV9JTlRFUkVTU0UgPSBmYWxzZVxyXG5cclxuLyogPT09PT0gTGF5b3V0ID09PT09ICovXHJcbmNvbnN0IERFRkFVTFRfV0lEVEggPSAzNjBcclxuY29uc3QgUEFORUxfTUFSR0lOX1RPUCA9IDUwXHJcbmNvbnN0IFBBTkVMX01BUkdJTl9SSUdIVCA9IDEwXHJcbmNvbnN0IERFRkFVTFRfSEVJR0hUID0gNjUwXHJcblxyXG4vKiA9PT09PSBDYW1wb3MgcG9yIHRpcG8gKGFtb3N0cmFzKSA9PT09PSAqL1xyXG5jb25zdCBUWVBFX0ZJRUxEOiBSZWNvcmQ8c3RyaW5nLCBrZXlvZiBBbW9zdHJhSXRlbT4gPSB7XHJcbiAgbGF0ZXJhbDogJ3RvdGFsQW1vc3RyYXNMYXRlcmFpcycsXHJcbiAgdGVzdGVtdW5obzogJ3RvdGFsVGVzdGVtdW5ob3MnLFxyXG4gIGNhbGhhOiAndG90YWxDYWxoYXMnLFxyXG4gIHBsdWc6ICd0b3RhbFBsdWdzJyxcclxuICAnd2hvbGUgY29yZSc6ICd0b3RhbFdob2xlQ29yZSdcclxufVxyXG5jb25zdCBMSVNUX1RZUEVTID0gT2JqZWN0LmtleXMoVFlQRV9GSUVMRClcclxuXHJcbmNvbnN0IGxvZzEwID0gKHg6IG51bWJlcikgPT4gKE1hdGgubG9nMTAgPyBNYXRoLmxvZzEwKHgpIDogTWF0aC5sb2coeCkgLyBNYXRoLkxOMTApXHJcblxyXG4vKiA9PT09PSBGZXRjaCBiYXNlIChhbW9zdHJhcykgPT09PT0gKi9cclxuZnVuY3Rpb24gYnVpbGRTZXNzaW9uQm9keShmYWl4YUludGVyZXNzZTogYm9vbGVhbikge1xyXG4gIGNvbnN0IHAgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcclxuICBwLnNldCgnaGRTeXMnLCAnbm92YWludGNvbnMnKVxyXG4gIHAuc2V0KCdoZFVDJywgJ01hcGEnKVxyXG4gIHAuc2V0KCdoZEFjYW8nLCAnQ2FycmVnYXJNYXBhRGlzdHJpYnVpY2FvQW1vc3RyYXNDb250YWRvcicpXHJcbiAgcC5zZXQoJ2hkU2Vzc2lvbkZpbHRlcicsICd0cnVlJylcclxuICBwLnNldCgnZmFpeGFJbnRlcmVzc2UnLCBTdHJpbmcoISFmYWl4YUludGVyZXNzZSkpXHJcbiAgcmV0dXJuIHAudG9TdHJpbmcoKVxyXG59XHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUxpc3QocmF3OiBhbnlbXSk6IEFtb3N0cmFJdGVtW10ge1xyXG4gIHJldHVybiAoQXJyYXkuaXNBcnJheShyYXcpID8gcmF3IDogW10pXHJcbiAgICAubWFwKChyOiBhbnkpID0+ICh7XHJcbiAgICAgIGNvZGlnb1BvY286IE51bWJlcihyLmNvZGlnb1BvY28gPz8gci5QT0NPX0NEX1BPQ08gPz8gci5wb2NvID8/IHIuY29kaWdvID8/IDApLFxyXG4gICAgICB0b3RhbEFtb3N0cmFzTGF0ZXJhaXM6IE51bWJlcihyLnRvdGFsQW1vc3RyYXNMYXRlcmFpcyA/PyByLmxhdGVyYWlzID8/IDApLFxyXG4gICAgICB0b3RhbENhbGhhczogTnVtYmVyKHIudG90YWxDYWxoYXMgPz8gci5jYWxoYXMgPz8gMCksXHJcbiAgICAgIHRvdGFsUGx1Z3M6IE51bWJlcihyLnRvdGFsUGx1Z3MgPz8gci5wbHVncyA/PyAwKSxcclxuICAgICAgdG90YWxUZXN0ZW11bmhvczogTnVtYmVyKHIudG90YWxUZXN0ZW11bmhvcyA/PyByLnRlc3RlbXVuaG9zID8/IDApLFxyXG4gICAgICB0b3RhbFdob2xlQ29yZTogTnVtYmVyKHIudG90YWxXaG9sZUNvcmUgPz8gci53aG9sZUNvcmUgPz8gMClcclxuICAgIH0pKVxyXG4gICAgLmZpbHRlcigoeCkgPT4gISF4LmNvZGlnb1BvY28pXHJcbn1cclxuZnVuY3Rpb24gZmV0Y2hWaWFQYXJlbnQoYm9keTogc3RyaW5nKTogUHJvbWlzZTxBbW9zdHJhSXRlbVtdPiB7XHJcbiAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnW2Ftb3N0cmFzXSBmZXRjaFZpYVBhcmVudCcpXHJcbiAgY29uc29sZS5sb2coJ1thbW9zdHJhc10gYm9keScsIGJvZHkpXHJcblxyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCByZXFJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpXHJcblxyXG4gICAgbGV0IHRhcmdldE9yaWdpbiA9ICcqJ1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGRvY3VtZW50LnJlZmVycmVyKSB0YXJnZXRPcmlnaW4gPSBuZXcgVVJMKGRvY3VtZW50LnJlZmVycmVyKS5vcmlnaW5cclxuICAgIH0gY2F0Y2gge31cclxuXHJcbiAgICBjb25zdCBPSyA9ICdmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzOm9rJ1xyXG4gICAgY29uc3QgRVJSID0gJ2ZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXM6ZXJyJ1xyXG5cclxuICAgIGNvbnN0IG9uTWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGQ6IGFueSA9IGV2ZW50Py5kYXRhIHx8IHt9XHJcbiAgICAgIGlmICghZCB8fCBkLnJlcUlkICE9PSByZXFJZCkgcmV0dXJuXHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnW2Ftb3N0cmFzXSByZXNwb3N0YSBkbyBwYWknLCB7XHJcbiAgICAgICAgcmVjZWl2ZWRUeXBlOiBkLnR5cGUsXHJcbiAgICAgICAgZXhwZWN0ZWRPazogT0ssXHJcbiAgICAgICAgZXhwZWN0ZWRFcnI6IEVSUixcclxuICAgICAgICBvcmlnaW46IGV2ZW50Lm9yaWdpbixcclxuICAgICAgICBzYW1lT3JpZ2luOiBldmVudC5vcmlnaW4gPT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXHJcbiAgICAgICAgcmVxSWQsXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAoZC50eXBlID09PSBPSykge1xyXG4gICAgICAgIHRyeSB7IGNsZWFyVGltZW91dCh0bykgfSBjYXRjaCB7fVxyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gQXJyYXkuaXNBcnJheShkLnBheWxvYWQpID8gZC5wYXlsb2FkLmxlbmd0aCA6IG51bGxcclxuICAgICAgICBjb25zb2xlLmxvZygnW2Ftb3N0cmFzXSBPSyDigJQgbm9ybWFsaXphbmRvIHBheWxvYWQnLCB7IGNvdW50LCBzYW1wbGU6IEFycmF5LmlzQXJyYXkoZC5wYXlsb2FkKSA/IGQucGF5bG9hZC5zbGljZSgwLCAzKSA6IGQucGF5bG9hZCB9KVxyXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICAgIHJlc29sdmUobm9ybWFsaXplTGlzdChkLnBheWxvYWQpKVxyXG4gICAgICB9IGVsc2UgaWYgKGQudHlwZSA9PT0gRVJSKSB7XHJcbiAgICAgICAgdHJ5IHsgY2xlYXJUaW1lb3V0KHRvKSB9IGNhdGNoIHt9XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdbYW1vc3RyYXNdIEVSUk8gZG8gcGFpJywgZC5tZXNzYWdlKVxyXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoZC5tZXNzYWdlIHx8ICdFcnJvIG5vIGZldGNoIHZpYSBwYXJlbnQnKSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBNZW5zYWdlbSBjb20gcmVxSWQgY2VydG8gbWFzIHR5cGUgZGlmZXJlbnRlIOKAlCBhcGVuYXMgaWdub3JlIChwb2RlIHNlciBvdXRyYSBwaXBlbGluZSlcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1thbW9zdHJhc10gaWdub3JhbmRvIG1lbnNhZ2VtIGNvbSByZXFJZCB2w6FsaWRvIHBvcsOpbSB0eXBlIGluZXNwZXJhZG86JywgZC50eXBlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpXHJcblxyXG4gICAgY29uc3QgdG8gPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG4gICAgICBjb25zb2xlLndhcm4oJ1thbW9zdHJhc10gVElNRU9VVCBhZ3VhcmRhbmRvIHJlc3Bvc3RhIGRvIHBhaScsIHsgcmVxSWQsIGV4cGVjdGVkOiBbT0ssIEVSUl0gfSlcclxuICAgICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1RpbWVvdXQgYWd1YXJkYW5kbyByZXNwb3N0YSBkbyBwYWkgKGFtb3N0cmFzKScpKVxyXG4gICAgfSwgMjAwMDApXHJcblxyXG4gICAgd2luZG93LnBhcmVudD8ucG9zdE1lc3NhZ2UoeyB0eXBlOiAnZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcycsIGJvZHksIHJlcUlkIH0sIHRhcmdldE9yaWdpbilcclxuICAgIGNvbnNvbGUubG9nKCdbYW1vc3RyYXNdIHBvc3RNZXNzYWdlIC0+IFBBSScsIHtcclxuICAgICAgdHlwZTogJ2ZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXMnLFxyXG4gICAgICB0YXJnZXRPcmlnaW4sXHJcbiAgICAgIHJlcUlkXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXMoZmFpeGFJbnRlcmVzc2UgPSBmYWxzZSk6IFByb21pc2U8QW1vc3RyYUl0ZW1bXT4ge1xyXG4gIGNvbnN0IGJvZHkgPSBidWlsZFNlc3Npb25Cb2R5KGZhaXhhSW50ZXJlc3NlKVxyXG4gIHJldHVybiBmZXRjaFZpYVBhcmVudChib2R5KVxyXG59XHJcblxyXG4vKiA9PT09PSBFc3RpbG9zID09PT09ICovXHJcbmNvbnN0IE1BWF9CVUJCTEUgPSA0MFxyXG5jb25zdCBnbG9iYWxQYW5lbFN0eWxlID0gY3NzYFxyXG4gIGRpdltyb2xlPSdkaWFsb2cnXVthcmlhLWxhYmVsPSdtYXBhLWRlLWRpc3RyaWJ1aWNhbyddLFxyXG4gIGRpdltyb2xlPSdkaWFsb2cnXVthcmlhLWxhYmVsPSdtYXBhLWRlLWRpc3RyaWJ1aWNhby12MiddIHtcclxuICAgIC8qIG5hZGEgZGUgcG9zaXRpb24vdG9wL3JpZ2h0L3RyYW5zZm9ybS9oZWlnaHQgYXF1aSAqL1xyXG4gICAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6ICR7REVGQVVMVF9XSURUSH1weCAhaW1wb3J0YW50O1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBsZWdlbmRIZWFkZXJTdHlsZSA9IGNzc2Bmb250LXdlaWdodDo2MDA7bWFyZ2luOjRweCAwO2ZvbnQtc2l6ZTouODVyZW07bGluZS1oZWlnaHQ6MS4xO2BcclxuY29uc3QgYnViYmxlQm94U3R5bGUgPSBjc3Ngd2lkdGg6JHtNQVhfQlVCQkxFfXB4O2hlaWdodDoke01BWF9CVUJCTEV9cHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1yaWdodDo4cHg7YFxyXG5jb25zdCB3cmFwcGVyU3R5bGUgPSBjc3NgcG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO2JvcmRlci1yYWRpdXM6NnB4O2JveC1zaGFkb3c6MCA0cHggMTJweCByZ2JhKDAsMCwwLC4xKTtwYWRkaW5nOjE2cHg7b3ZlcmZsb3c6aGlkZGVuO2BcclxuY29uc3QgdGl0bGVTdHlsZSA9IGNzc2Bmb250LXdlaWdodDo2MDA7bWFyZ2luLWJvdHRvbTo0cHg7ZGlzcGxheTpibG9jaztgXHJcbmNvbnN0IHNlbGVjdFN0eWxlID0gY3NzYHdpZHRoOjEwMCU7cGFkZGluZzo2cHggOHB4O21hcmdpbi1ib3R0b206MTJweDtib3JkZXI6MXB4IHNvbGlkICNjY2M7Ym9yZGVyLXJhZGl1czo0cHg7YFxyXG5cclxuLyoqIEdyaWQgdXNhZGEgcGFyYSBvcMOnw7VlcyAoYW1vc3RyYXMpIOKAkyAyIGNvbHVuYXMsIGZsdXhvIHBvciBsaW5oYXMgKG1hbnTDqW0gVGVzdGVtdW5ob3MgZGVudHJvIGRvIGJsb2NvIGNpbnphKSAqL1xyXG5jb25zdCBsaXN0U3R5bGUgPSBjc3NgXHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDE0MHB4LCAxZnIpKTtcclxuICBncmlkLWF1dG8tcm93czogbWlubWF4KDI0cHgsIGF1dG8pO1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgY29sdW1uLWdhcDogNHB4O1xyXG4gIHJvdy1nYXA6IDJweDtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbmBcclxuXHJcbi8qKiByw7N0dWxvIGNvbXBhY3RvIHNlcnZlIHBhcmEgY2hlY2tib3ggZSByYWRpbyAqL1xyXG5jb25zdCBjaGVja2JveExhYmVsU3R5bGUgPSBjc3NgXHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbHVtbi1nYXA6IDZweDtcclxuICBwYWRkaW5nOiAxcHggMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgJiA+ICogeyBtYXJnaW46IDAgIWltcG9ydGFudDsgcGFkZGluZzogMCAhaW1wb3J0YW50OyB9XHJcbiAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSwgaW5wdXRbdHlwZT0ncmFkaW8nXSB7IHdpZHRoOiAxNHB4OyBoZWlnaHQ6IDE0cHg7IG1hcmdpbjogMCAhaW1wb3J0YW50OyBmbGV4OiAwIDAgYXV0bzsgfVxyXG5cclxuICAubGJsIHsgbWluLXdpZHRoOiAwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgZm9udC1zaXplOiAuODRyZW07IGxpbmUtaGVpZ2h0OiAxLjE1OyBwYWRkaW5nLWJvdHRvbTogMXB4OyB9XHJcbmBcclxuXHJcbi8qKiBHcmlkIGRvcyByw6FkaW9zIGRlIG1pbmVyYWlzICgyIGNvbHVuYXMgLyAzIGxpbmhhcykgKi9cclxuY29uc3QgbWluZXJhbHNMaXN0U3R5bGUgPSBjc3NgXHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE0MHB4LCAxZnIpIG1pbm1heCgxNDBweCwgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtaW5tYXgoMjRweCwgYXV0bykpO1xyXG4gIGNvbHVtbi1nYXA6IDRweDtcclxuICByb3ctZ2FwOiAycHg7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG5cclxuICAvKiBEUlgtVG90YWwgKFJvdzEsIENvbDEpICovXHJcbiAgbGFiZWxbZGF0YS1rZXk9J0RSWC1UT1QnXSB7IGdyaWQtY29sdW1uOiAxOyBncmlkLXJvdzogMTsgfVxyXG4gIC8qIFFlbXNjYW4tTWFzc2EgKFJvdzEsIENvbDIpICovXHJcbiAgbGFiZWxbZGF0YS1rZXk9J01BU1NBJ10gICB7IGdyaWQtY29sdW1uOiAyOyBncmlkLXJvdzogMTsgfVxyXG4gIC8qIERSWC1BcmdpbG9taW5lcmFpcyAoUm93MiwgQ29sMSkgKi9cclxuICBsYWJlbFtkYXRhLWtleT0nRFJYLUFSRyddIHsgZ3JpZC1jb2x1bW46IDE7IGdyaWQtcm93OiAyOyB9XHJcbiAgLyogUWVtc2Nhbi3DgXJlYSAoUm93MiwgQ29sMikgKi9cclxuICBsYWJlbFtkYXRhLWtleT0nQVJFQSddICAgIHsgZ3JpZC1jb2x1bW46IDI7IGdyaWQtcm93OiAyOyB9XHJcbiAgLyogXCJUb2RhcyBhcyBBbsOhbGlzZXNcIiAoUm93Mywgb2N1cGFuZG8gMiBjb2x1bmFzKSAqL1xyXG4gIGxhYmVsW2RhdGEta2V5PSd0b2Rhc0FuYWxpc2VzJ10geyBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjsgZ3JpZC1yb3c6IDM7IH1cclxuYFxyXG5jb25zdCBzY3JvbGxBcmVhU3R5bGUgPSBjc3NgXHJcbiAgbWF4LWhlaWdodDogMjYwcHg7ICAgLyog4oap77iPIGTDoSByb2xhZ2VtIGVudHJlIG8gVE9UQUwgZSBvIGZpbmFsIGRvIGJsb2NvICovXHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbmBcclxuXHJcbmNvbnN0IHN1bW1hcnlMaXN0U3R5bGUgPSBjc3NgbWF4LWhlaWdodDozMDBweDtvdmVyZmxvdy15OmF1dG87bWFyZ2luLXRvcDo4cHg7cGFkZGluZzo4cHggOHB4IDM2cHg7YmFja2dyb3VuZDojZmZmO2JvcmRlcjoxcHggc29saWQgI2RkZDtib3JkZXItcmFkaXVzOjRweDtwb3NpdGlvbjpyZWxhdGl2ZTtgXHJcbmNvbnN0IHN1bW1hcnlJdGVtU3R5bGUgPSBjc3NgZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW46MnB4O2BcclxuY29uc3QgcmFuZ2VMYWJlbFN0eWxlID0gY3NzYGZvbnQtc2l6ZTouNzhyZW07bGluZS1oZWlnaHQ6MS4xO2BcclxuXHJcbmNvbnN0IGZvb3RlclN0eWxlID0gY3NzYHBvc2l0aW9uOiBzdGlja3k7IGJvdHRvbTogMDsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7IHBhZGRpbmc6IDRweCAwOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiA2cHg7YFxyXG5jb25zdCBmb290ZXJMYWJlbFN0eWxlID0gY3NzYGRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjZweDtwYWRkaW5nLWxlZnQ6LjVlbTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6LjlyZW07YFxyXG5jb25zdCBmb290ZXJMYWJlbFN0eWxlSW50ZXJlc3NlID0gZm9vdGVyTGFiZWxTdHlsZVxyXG5cclxuLyogPT09PT0gU3Vtw6FyaW8gKGFtb3N0cmFzLyBtaW5lcmFpcykgPT09PT0gKi9cclxuZnVuY3Rpb24gY2FsY3VsYXJRdWVicmFzKGRhZG9zOiB7IHRvdGFsOiBudW1iZXIgfVtdLCBjb2xvckZpbGw6IHN0cmluZykge1xyXG4gIGNvbnN0IHZhbG9yZXMgPSBkYWRvcy5tYXAoKHApID0+IE51bWJlcihwLnRvdGFsKSB8fCAwKVxyXG4gIGxldCBtaW4gPSBNYXRoLm1pbiguLi52YWxvcmVzKVxyXG4gIGxldCBtYXggPSBNYXRoLm1heCguLi52YWxvcmVzKVxyXG5cclxuICBjb25zdCBpbmZvOiB7IGxhYmVsOiBzdHJpbmc7IHNpemU6IG51bWJlcjsgY29yOiBzdHJpbmc7IGNvdW50OiBudW1iZXIgfVtdID0gW11cclxuICBpZiAoIWlzRmluaXRlKG1pbikgfHwgIWlzRmluaXRlKG1heCkpIHJldHVybiBpbmZvXHJcblxyXG4gIGlmIChtaW4gPT09IDAgJiYgbWF4ID09PSAwKSB7XHJcbiAgICBpbmZvLnB1c2goeyBsYWJlbDogJ07Do28gaMOhIGRhZG9zIHN1ZmljaWVudGVzJywgc2l6ZTogMCwgY29yOiBjb2xvckZpbGwsIGNvdW50OiAwIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHplcmFkb3MgPSB2YWxvcmVzLmZpbHRlcigodikgPT4gdiA9PT0gMCkubGVuZ3RoXHJcbiAgICBjb25zdCBuYW9aZXJhZG9zID0gdmFsb3Jlcy5maWx0ZXIoKHYpID0+IHYgPiAwKVxyXG5cclxuICAgIGlmICh6ZXJhZG9zID4gMCkge1xyXG4gICAgICBpbmZvLnB1c2goeyBsYWJlbDogYHwgMCB8ICgke3plcmFkb3N9IHBvw6dvJHt6ZXJhZG9zID4gMSA/ICdzJyA6ICcnfSlgLCBzaXplOiA2LCBjb3I6ICdyZ2JhKDIwMCwyMDAsMjAwLDAuMyknLCBjb3VudDogemVyYWRvcyB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1pbiA9IDFcclxuICAgIGNvbnN0IG4gPSBuYW9aZXJhZG9zLmxlbmd0aFxyXG4gICAgY29uc3QgbnVtQ2xhc3NlcyA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQoMSArIDMuMyAqIGxvZzEwKG4gfHwgMSkpKVxyXG4gICAgY29uc3QgYnJlYWtzID0gTWF0aC5jZWlsKChtYXggLSBtaW4gKyAxKSAvIE1hdGgubWF4KDEsIG51bUNsYXNzZXMpKVxyXG4gICAgY29uc3QgbWF4U2l6ZSA9IE1BWF9CVUJCTEVcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNsYXNzZXM7IGkrKykge1xyXG4gICAgICBjb25zdCBtaW5WYWx1ZSA9IG1pbiArIGkgKiBicmVha3NcclxuICAgICAgY29uc3QgbWF4VmFsdWUgPSBtaW4gKyAoaSArIDEpICogYnJlYWtzIC0gMVxyXG4gICAgICBpZiAobWluVmFsdWUgPiBtYXgpIGJyZWFrXHJcbiAgICAgIGNvbnN0IGNvdW50ID0gbmFvWmVyYWRvcy5maWx0ZXIoKHYpID0+IHYgPj0gbWluVmFsdWUgJiYgdiA8PSBtYXhWYWx1ZSkubGVuZ3RoXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gYCR7bWluVmFsdWV9IHwtLS18ICR7bWF4VmFsdWV9ICgke2NvdW50fSBwb8OnbyR7Y291bnQgPiAxID8gJ3MnIDogJyd9KWBcclxuICAgICAgY29uc3Qgc2l6ZSA9IDYgKyBpICogKG1heFNpemUgLyBudW1DbGFzc2VzKVxyXG4gICAgICBpbmZvLnB1c2goeyBsYWJlbCwgc2l6ZSwgY29yOiBjb2xvckZpbGwsIGNvdW50IH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBpbmZvXHJcbn1cclxuXHJcbi8qID09PT09IEhlbHBlcnMgZGlhbG9nL3Bvc2ljaW9uYW1lbnRvID09PT09ICovXHJcbmZ1bmN0aW9uIGZpbmRDbG9zZXN0RGlhbG9nKGVsOiBIVE1MRWxlbWVudCB8IG51bGwpOiBIVE1MRWxlbWVudCB8IG51bGwge1xyXG4gIGxldCBjdXI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGVsXHJcbiAgd2hpbGUgKGN1cikgeyBpZiAoY3VyLmdldEF0dHJpYnV0ZSAmJiBjdXIuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICdkaWFsb2cnKSByZXR1cm4gY3VyOyBjdXIgPSBjdXI/LnBhcmVudEVsZW1lbnQgPz8gbnVsbCB9XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5mdW5jdGlvbiBpc0RpYWxvZ0hpZGRlbihkbGc6IEhUTUxFbGVtZW50KSB7XHJcbiAgY29uc3QgY3MgPSBnZXRDb21wdXRlZFN0eWxlKGRsZylcclxuICByZXR1cm4gZGxnLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSA9PT0gJ3RydWUnIHx8IGNzLmRpc3BsYXkgPT09ICdub25lJyB8fCBjcy52aXNpYmlsaXR5ID09PSAnaGlkZGVuJ1xyXG59XHJcbmxldCBfYXBwbHlpbmdTdHlsZSA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gZm9yY2VQYW5lbFN0eWxlKGRsZzogSFRNTEVsZW1lbnQpIHtcclxuICBpZiAoX2FwcGx5aW5nU3R5bGUpIHJldHVybjtcclxuICBfYXBwbHlpbmdTdHlsZSA9IHRydWU7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHMgPSBkbGcuc3R5bGU7XHJcbiAgICBpZiAocy5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpICE9PSAnYWJzb2x1dGUnKSBzLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdhYnNvbHV0ZScpOyAvLyBzZW0gIWltcG9ydGFudFxyXG4gICAgaWYgKHMuZ2V0UHJvcGVydHlWYWx1ZSgnei1pbmRleCcpICE9PSAnOTk5OScpICAgICAgIHMuc2V0UHJvcGVydHkoJ3otaW5kZXgnLCAnOTk5OScpO1xyXG4gICAgaWYgKHMuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKSAhPT0gYCR7REVGQVVMVF9XSURUSH1weGApIHtcclxuICAgICAgcy5zZXRQcm9wZXJ0eSgnd2lkdGgnLCBgJHtERUZBVUxUX1dJRFRIfXB4YCwgJ2ltcG9ydGFudCcpO1xyXG4gICAgfVxyXG4gIH0gZmluYWxseSB7XHJcbiAgICBfYXBwbHlpbmdTdHlsZSA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEZpcnN0T3BlbkxheW91dChkbGc6IEhUTUxFbGVtZW50KSB7XHJcbiAgLy8gZXZpdGEgcmVwZXRpclxyXG4gIGlmIChkbGcuZ2V0QXR0cmlidXRlKCdkYXRhLWZpcnN0LW9wZW4taW5pdGlhbGl6ZWQnKSA9PT0gJzEnKSByZXR1cm47XHJcbiAgZGxnLnNldEF0dHJpYnV0ZSgnZGF0YS1maXJzdC1vcGVuLWluaXRpYWxpemVkJywgJzEnKTtcclxuXHJcbiAgY29uc3QgcyA9IGRsZy5zdHlsZTtcclxuXHJcbiAgLy8g8J+UkiAxwqogYWJlcnR1cmE6IGZvcsOnYSDDom5jb3JhIGNhbnRvIHN1cGVyaW9yIGRpcmVpdG8gZSB0YW1hbmhvIGdyYW5kZVxyXG4gIHMuc2V0UHJvcGVydHkoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7ICAgICAgICAgICAgLy8gc2VtICFpbXBvcnRhbnRcclxuICBzLnNldFByb3BlcnR5KCd0b3AnLCBgJHtQQU5FTF9NQVJHSU5fVE9QfXB4YCwgJ2ltcG9ydGFudCcpO1xyXG4gIHMuc2V0UHJvcGVydHkoJ3JpZ2h0JywgYCR7UEFORUxfTUFSR0lOX1JJR0hUfXB4YCwgJ2ltcG9ydGFudCcpO1xyXG4gIHMuc2V0UHJvcGVydHkoJ2xlZnQnLCAnYXV0bycpO1xyXG4gIHMuc2V0UHJvcGVydHkoJ2JvdHRvbScsICdhdXRvJyk7XHJcblxyXG4gIC8vIG5ldXRyYWxpemEgbyB0cmFuc2xhdGUgZG8gUG9wcGVyIHPDsyBuYSBlc3RyZWlhIChuw6NvIG9ic2VydmFtb3Mgc3R5bGUsIGVudMOjbyBzZW0gbG9vcClcclxuICBzLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCAnbm9uZScsICdpbXBvcnRhbnQnKTtcclxuXHJcbiAgLy8gbGFyZ3VyYSBwZXJtYW5lY2UgZml4YVxyXG4gIHMuc2V0UHJvcGVydHkoJ3dpZHRoJywgYCR7REVGQVVMVF9XSURUSH1weGAsICdpbXBvcnRhbnQnKTtcclxuXHJcbiAgLy8gYWx0dXJhIOKAnGdyYW5kZeKAnSBhcGVuYXMgbmEgZXN0cmVpYVxyXG4gIHMuc2V0UHJvcGVydHkoJ2hlaWdodCcsIGAke0RFRkFVTFRfSEVJR0hUfXB4YCwgJ2ltcG9ydGFudCcpO1xyXG4gIHMuc2V0UHJvcGVydHkoJ21heC1oZWlnaHQnLCAnY2FsYygxMDAlIC0gMjRweCknLCAnaW1wb3J0YW50Jyk7XHJcbiAgcy5zZXRQcm9wZXJ0eSgnb3ZlcmZsb3cnLCAndmlzaWJsZScsICdpbXBvcnRhbnQnKTtcclxuXHJcbiAgLy8g4oeiIGxpYmVyZSBhIGFsdHVyYSBhcMOzcyBwZXF1ZW5hIGphbmVsYSAob3Ugbm8gMcK6IGNsaXF1ZSBkZSByZWNvbGhlci9leHBhbmRpcilcclxuICBjb25zdCByZWxlYXNlID0gKCkgPT4ge1xyXG4gICAgLy8gbWFudMOpbSBwb3Npw6fDo28vdG9wL3JpZ2h0L3RyYW5zZm9ybTsgc29sdGEgc8OzIGFsdHVyYSBwLyBleHBhbnPDo28gbmF0aXZhIGZ1bmNpb25hclxyXG4gICAgcy5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XHJcbiAgICBzLnJlbW92ZVByb3BlcnR5KCdtYXgtaGVpZ2h0Jyk7XHJcbiAgICBzLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xyXG4gICAgLy8gcmVtb3ZlIG91dmludGUgKHNlIGhvdXZlcilcclxuICAgIGJ0bkNvbGxhcHNlPy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uVG9nZ2xlT25jZSBhcyBhbnkpO1xyXG4gIH07XHJcblxyXG4gIC8vIGxpYmVyYSBzb3ppbmhvIGFww7NzIH44MDBtcyAodGVtcG8gc3VmaWNpZW50ZSBwLyDigJxhYnJpciBncmFuZGXigJ0pXHJcbiAgY29uc3QgdG8gPSBzZXRUaW1lb3V0KHJlbGVhc2UsIDgwMCk7XHJcblxyXG4gIC8vIHRhbWLDqW0gbGliZXJhIG5hIDHCqiBpbnRlcmHDp8OjbyBkbyB1c3XDoXJpbyAocmVjb2xoZXIvZXhwYW5kaXIpXHJcbiAgY29uc3QgYnRuQ29sbGFwc2UgPSBkbGcucXVlcnlTZWxlY3RvcihcclxuICAgICdidXR0b24uYWN0aW9uLWNvbGxhcHNlLCBidXR0b25bdGl0bGU9XCJSZWNvbGhlclwiXSwgYnV0dG9uW2FyaWEtbGFiZWw9XCJSZWNvbGhlclwiXSwgYnV0dG9uW3RpdGxlPVwiRXhwYW5kaXJcIl0sIGJ1dHRvblthcmlhLWxhYmVsPVwiRXhwYW5kaXJcIl0nXHJcbiAgKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XHJcblxyXG4gIGNvbnN0IG9uVG9nZ2xlT25jZSA9ICgpID0+IHsgY2xlYXJUaW1lb3V0KHRvKTsgcmVsZWFzZSgpOyB9O1xyXG4gIGlmIChidG5Db2xsYXBzZSkgYnRuQ29sbGFwc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblRvZ2dsZU9uY2UsIHsgb25jZTogdHJ1ZSB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHVzZUZvcmNlUmlnaHRQb3NpdGlvbihyb290UmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+KSB7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjbGVhbnVwOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCBhcHBseSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgZGxnID1cclxuICAgICAgICAocm9vdFJlZi5jdXJyZW50Py5jbG9zZXN0KCdbcm9sZT1cImRpYWxvZ1wiXScpIGFzIEhUTUxFbGVtZW50KSB8fFxyXG4gICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXZbcm9sZT1cImRpYWxvZ1wiXVthcmlhLWxhYmVsPVwibWFwYS1kZS1kaXN0cmlidWljYW8tdjJcIl0nKSBhcyBIVE1MRWxlbWVudCkgfHxcclxuICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2W3JvbGU9XCJkaWFsb2dcIl1bYXJpYS1sYWJlbD1cIm1hcGEtZGUtZGlzdHJpYnVpY2FvXCJdJykgYXMgSFRNTEVsZW1lbnQpO1xyXG5cclxuICAgICAgaWYgKCFkbGcpIHJldHVybjtcclxuXHJcbiAgICAgIC8vIGFwbGljYSBsYXlvdXQg4oCcc2VndXJv4oCdXHJcbiAgICAgIGZvcmNlUGFuZWxTdHlsZShkbGcpO1xyXG5cclxuICAgICAgLy8gZSBmYXogbyDigJxsYXlvdXQgZGUgZXN0cmVpYeKAnSAoY2FudG8gZGlyZWl0byArIGdyYW5kZSlcclxuICAgICAgaW5pdEZpcnN0T3BlbkxheW91dChkbGcpO1xyXG5cclxuICAgICAgLy8gcmVhcGxpcXVlIGFwZW5hcyBlbSByZXNpemUgKHNlbSBvYnNlcnZhciBzdHlsZSBkbyBQb3BwZXIpXHJcbiAgICAgIGxldCB0bzogYW55O1xyXG4gICAgICBjb25zdCBvblJlc2l6ZSA9ICgpID0+IHsgY2xlYXJUaW1lb3V0KHRvKTsgdG8gPSBzZXRUaW1lb3V0KCgpID0+IGZvcmNlUGFuZWxTdHlsZShkbGcpLCA4MCk7IH07XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSk7XHJcbiAgICAgIGNsZWFudXAgPSAoKSA9PiB7IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSk7IH07XHJcbiAgICB9O1xyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhcHBseSk7XHJcbiAgICBzZXRUaW1lb3V0KGFwcGx5LCA4MCk7XHJcbiAgICBzZXRUaW1lb3V0KGFwcGx5LCAzMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7IGNsZWFudXA/LigpOyB9O1xyXG4gIH0sIFtyb290UmVmXSk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBsYXllcklkRm9yU2FtcGxlID0gKHRpcG86IHN0cmluZykgPT4gYGFtb3N0cmFzXyR7dGlwby5yZXBsYWNlKC9cXHMrL2csICdfJyl9YFxyXG5mdW5jdGlvbiBjbGVhckFtb3N0cmFzKHZpZXc6IF9fZXNyaS5WaWV3KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFsbCA9ICh2aWV3Lm1hcCBhcyBhbnkpLmFsbExheWVycz8udG9BcnJheT8uKCkgPz8gdmlldy5tYXAubGF5ZXJzPy50b0FycmF5Py4oKSA/PyBbXVxyXG4gICAgYWxsLmZvckVhY2goKGx5OiBhbnkpID0+IHsgY29uc3QgaWQgPSBTdHJpbmcobHk/LmlkID8/ICcnKTsgaWYgKGlkLnN0YXJ0c1dpdGgoJ2Ftb3N0cmFzXycpKSB2aWV3Lm1hcC5yZW1vdmUobHkpIH0pXHJcbiAgfSBjYXRjaCB7fVxyXG59XHJcbmZ1bmN0aW9uIGNsZWFyTWluZXJhaXModmlldzogX19lc3JpLlZpZXcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWxsID0gKHZpZXcubWFwIGFzIGFueSkuYWxsTGF5ZXJzPy50b0FycmF5Py4oKSA/PyB2aWV3Lm1hcC5sYXllcnM/LnRvQXJyYXk/LigpID8/IFtdXHJcbiAgICBjb25zdCB0b1JlbW92ZTogYW55W10gPSBbXVxyXG4gICAgYWxsLmZvckVhY2goKGx5OiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgaWQgPSBTdHJpbmcobHk/LmlkID8/ICcnKVxyXG4gICAgICBpZiAoL15taW5lcmFpc18vaS50ZXN0KGlkKSkgdG9SZW1vdmUucHVzaChseSlcclxuICAgIH0pXHJcbiAgICB0b1JlbW92ZS5mb3JFYWNoKGx5ID0+IHZpZXcubWFwLnJlbW92ZShseSkpXHJcbiAgICBjb25zb2xlLmxvZygnW3dpZGdldF0gY2xlYXJNaW5lcmFpcyAtPiByZW1vdmlkYXMnLCB0b1JlbW92ZS5tYXAobCA9PiBsLmlkKSlcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ1t3aWRnZXRdIGNsZWFyTWluZXJhaXMgZmFsaG91JywgZSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyTGF5ZXJPZlRpcG8odmlldzogX19lc3JpLlZpZXcsIHRpcG86IHN0cmluZykge1xyXG4gIHRyeSB7IGNvbnN0IGx5ciA9IHZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXJJZEZvclNhbXBsZSh0aXBvKSkgYXMgYW55OyBpZiAobHlyKSB2aWV3Lm1hcC5yZW1vdmUobHlyKSB9IGNhdGNoIHt9XHJcbn1cclxuZnVuY3Rpb24gZGlzYWJsZUNsdXN0ZXJOdW1iZXJzKGx5cjogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghbHlyKSByZXR1cm5cclxuICAgIGlmIChseXIuZmVhdHVyZVJlZHVjdGlvbiAmJiBseXIuZmVhdHVyZVJlZHVjdGlvbi50eXBlID09PSAnY2x1c3RlcicpIHtcclxuICAgICAgbHlyLmZlYXR1cmVSZWR1Y3Rpb24gPSB7IC4uLmx5ci5mZWF0dXJlUmVkdWN0aW9uLCBsYWJlbHNWaXNpYmxlOiBmYWxzZSB9XHJcbiAgICB9XHJcbiAgICBpZiAoJ2xhYmVsc1Zpc2libGUnIGluIGx5cikgKGx5ciBhcyBhbnkpLmxhYmVsc1Zpc2libGUgPSBmYWxzZVxyXG4gICAgaWYgKCdsYWJlbGluZ0luZm8nIGluIGx5cikgKGx5ciBhcyBhbnkpLmxhYmVsaW5nSW5mbyA9IFtdXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSgobHlyIGFzIGFueSkuc3VibGF5ZXJzKSkgKGx5ciBhcyBhbnkpLnN1YmxheWVycy5mb3JFYWNoKChzbDogYW55KSA9PiBkaXNhYmxlQ2x1c3Rlck51bWJlcnMoc2wpKVxyXG4gIH0gY2F0Y2gge31cclxufVxyXG5cclxuXHJcbi8qID09PT09IENvbXBvbmVudGUgPT09PT0gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0KHByb3BzOiBhbnkpIHtcclxuICBjb25zdCBbamltdU1hcFZpZXcsIHNldEppbXVNYXBWaWV3XSA9IFJlYWN0LnVzZVN0YXRlPEppbXVNYXBWaWV3PigpXHJcbiAgY29uc3QgW2NhdGVnb3JpYSwgc2V0Q2F0ZWdvcmlhXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpIC8vICdzYW1wbGUnIHwgJ21pbmVyYWxzJ1xyXG4gIGNvbnN0IFt0aXBvc1NlbCwgc2V0VGlwb3NTZWxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKSAvLyBhbW9zdHJhcyAoY2hlY2tib3hlcylcclxuICBjb25zdCBbc2hvd0VtcHR5LCBzZXRTaG93RW1wdHldID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG4gIC8vIEludGVyZXNzZVxyXG4gIGNvbnN0IFt3aXRoSW50ZXJlc3QsIHNldFdpdGhJbnRlcmVzdF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBbc2hvd1dpdGhJbnRlcmVzdCwgc2V0c2hvd1dpdGhJbnRlcmVzdF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBbZmFpeGFTZXQsIHNldEZhaXhhU2V0XSA9IFJlYWN0LnVzZVN0YXRlPFNldDxudW1iZXI+PihcclxuICAgICgpID0+IG5ldyBTZXQ8bnVtYmVyPigoQXJyYXkuaXNBcnJheShwcm9wcz8uY29kaWdvc0ZhaXhhSW50ZXJlc3NlKSA/IHByb3BzLmNvZGlnb3NGYWl4YUludGVyZXNzZSA6IFtdKVxyXG4gICAgICAubWFwKCh2OiBhbnkpID0+IE51bWJlcih2KSkuZmlsdGVyKCh2OiBhbnkpID0+ICFpc05hTih2KSkpXHJcbiAgKVxyXG5cclxuICAvL2J1c2NhZG9yIGRlIG1pbmVyYWlzXHJcbiAgY29uc3QgW2FncnVwYWRvckRhZG9zLCBzZXRBZ3J1cGFkb3JEYWRvc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTx7XHJcbiAgICBjb2RpZ29Qb2NvOiBudW1iZXJcclxuICAgIHF0QW5hbGlzZTogbnVtYmVyXHJcbiAgICB2YWxvck1lZGlvOiBudW1iZXJcclxuICAgIHZhbG9yTWF4aW1vOiBudW1iZXJcclxuICB9PiB8IG51bGw+KG51bGwpXHJcblxyXG4gIC8vIEJhc2VzIChhbW9zdHJhcylcclxuICBjb25zdCBbZGFkb3NGdWxsLCBzZXREYWRvc0Z1bGxdID0gUmVhY3QudXNlU3RhdGU8QW1vc3RyYUl0ZW1bXSB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW2RhZG9zRmFpeGFBUEksIHNldERhZG9zRmFpeGFBUEldID0gUmVhY3QudXNlU3RhdGU8QW1vc3RyYUl0ZW1bXSB8IG51bGw+KG51bGwpXHJcblxyXG4gIC8vIE1pbmVyYWlzXHJcbiAgY29uc3QgW21pbmVyYWxBbmFsaXNlLCBzZXRNaW5lcmFsQW5hbGlzZV0gPSBSZWFjdC51c2VTdGF0ZTxNaW5lcmFsVGlwbyB8ICcnPignJykgLy8gcsOhZGlvIChEUlgvUWVtc2Nhbi9Ub2RhcylcclxuICBjb25zdCBbbGlzdGFNaW5lcmFpcywgc2V0TGlzdGFNaW5lcmFpc10gPSBSZWFjdC51c2VTdGF0ZTxNaW5lcmFsTGlzdGFJdGVtW10+KFtdKVxyXG4gIGNvbnN0IFtidXNjYU1pbmVyYWwsIHNldEJ1c2NhTWluZXJhbF0gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbWluZXJhbFNlbGVjaW9uYWRvLCBzZXRNaW5lcmFsU2VsZWNpb25hZG9dID0gUmVhY3QudXNlU3RhdGU8TWluZXJhbExpc3RhSXRlbSB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW2FncnVwYWRvciwgc2V0QWdydXBhZG9yXSA9IFJlYWN0LnVzZVN0YXRlPCdhbmFsaXNlJyB8ICdtZWRpYScgfCAnbWF4aW1hJyB8ICcnPignJykgLy8gYWdydXBhZG9yZXNcclxuICBjb25zdCBbZGFkb3NNaW5lcmFpcywgc2V0RGFkb3NNaW5lcmFpc10gPSBSZWFjdC51c2VTdGF0ZTxpbXBvcnQoJy4vTWluZXJhbHMnKS5NaW5lcmFsSXRlbVtdIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBbbG9hZGluZ01pbmVyYWlzLCBzZXRMb2FkaW5nTWluZXJhaXNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2Vycm9yTWluZXJhaXMsIHNldEVycm9yTWluZXJhaXNdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gIC8vIExvYWRpbmcgLyBlcnJvcyAoYW1vc3RyYXMpXHJcbiAgY29uc3QgW2xvYWRpbmdGdWxsLCBzZXRMb2FkaW5nRnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbG9hZGluZ0ludGVyZXN0LCBzZXRMb2FkaW5nSW50ZXJlc3RdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2Vycm9yRnVsbCwgc2V0RXJyb3JGdWxsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpXHJcbiAgY29uc3QgW2Vycm9ySW50ZXJlc3QsIHNldEVycm9ySW50ZXJlc3RdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJylcclxuXHJcbiAgY29uc3Qgcm9vdFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcclxuICB1c2VGb3JjZVJpZ2h0UG9zaXRpb24ocm9vdFJlZilcclxuXHJcbiAgY29uc3QgaW50ZXJlc3RNYW51YWxSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpXHJcblxyXG4gIC8qID4+PiBTaW5hbGl6YSBhbyBQQUkgcXVlIG8gd2lkZ2V0IGVzdMOhIHByb250byAocGFyYSBlbGUgbWFuZGFyIGNvZGlnb3MvY29uZmlnKSAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdGFyZ2V0T3JpZ2luID0gJyonXHJcbiAgICB0cnkgeyBpZiAoZG9jdW1lbnQucmVmZXJyZXIpIHRhcmdldE9yaWdpbiA9IG5ldyBVUkwoZG9jdW1lbnQucmVmZXJyZXIpLm9yaWdpbiB9IGNhdGNoIHt9XHJcbiAgICAvLyBhdmlzYSBxdWUgbyB3aWRnZXQgZXN0w6EgcHJvbnRvXHJcbiAgICB3aW5kb3cucGFyZW50Py5wb3N0TWVzc2FnZSh7IHR5cGU6ICd3aWRnZXRSZWFkeScgfSwgdGFyZ2V0T3JpZ2luKVxyXG4gICAgY29uc29sZS5sb2coJ1t3aWRnZXRdIHdpZGdldFJlYWR5IGVudmlhZG8gcGFyYScsIHRhcmdldE9yaWdpbilcclxuICB9LCBbXSlcclxuXHJcbiAgLyogUmVjZWJlIG1lbnNhZ2VucyBkbyBQQUkgKGZhaXhhLWludGVyZXNzZSwgbGVnZW5kOm1pbmVyYWlzLCBjb25maWcpICovXHJcbiAgLy8gTWVuc2FnZW5zIHZpbmRhcyBkbyBQQUkgKEV4cGxvcmEpOiBmYWl4YS1pbnRlcmVzc2UsIGNvbmZpZywgbGVnZW5kOm1pbmVyYWlzXHJcblJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gbGlzdGVuZXIgT04g4oCUIGFndWFyZGFuZG8gbWVuc2FnZW5zIGRvIHBhaeKApicsIHtcclxuICAgIHNlbGZPcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXHJcbiAgICByZWZlcnJlcjogZG9jdW1lbnQucmVmZXJyZXIgfHwgJyhzZW0gcmVmZXJyZXIpJ1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IG9uTXNnID0gKGV2OiBNZXNzYWdlRXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBldj8uZGF0YSBhcyBhbnlcclxuICAgIGlmICghZGF0YSB8fCAhZGF0YS50eXBlKSByZXR1cm5cclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBbd2lkZ2V0XVttc2ddIHJlY2ViaWRvIHR5cGU9XCIke2RhdGEudHlwZX1cImApXHJcbiAgICBjb25zb2xlLmxvZygnb3JpZ2luOicsIGV2Lm9yaWdpbiwgJ3NvdXJjZT09PXBhcmVudD8nLCBldi5zb3VyY2UgPT09IHdpbmRvdy5wYXJlbnQpXHJcbiAgICBjb25zb2xlLmxvZygncGF5bG9hZCBicnV0bzonLCBkYXRhKVxyXG5cclxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdmYWl4YS1pbnRlcmVzc2UnICYmIEFycmF5LmlzQXJyYXkoKGRhdGEgYXMgTXNnRmFpeGFJbnRlcmVzc2UpLmNvZGlnb3NQb2NvcykpIHtcclxuICAgICAgY29uc3QgbnVtcyA9IChkYXRhIGFzIE1zZ0ZhaXhhSW50ZXJlc3NlKS5jb2RpZ29zUG9jb3NcclxuICAgICAgICAubWFwKCh2KSA9PiBOdW1iZXIodikpXHJcbiAgICAgICAgLmZpbHRlcigodikgPT4gIWlzTmFOKHYpKVxyXG4gICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBmYWl4YS1pbnRlcmVzc2UgPT4gbm9ybWFsaXphZG9zOicsIHtcclxuICAgICAgICByZWNlYmlkb3M6IChkYXRhIGFzIE1zZ0ZhaXhhSW50ZXJlc3NlKS5jb2RpZ29zUG9jb3MubGVuZ3RoLFxyXG4gICAgICAgIHZhbGlkb3M6IG51bXMubGVuZ3RoLFxyXG4gICAgICAgIHByZXZpZXc6IG51bXMuc2xpY2UoMCwgMTApXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyBlc3RhZG8gYXR1YWwgYW50ZXMgZGUgZGVjaWRpclxyXG4gICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBlc3RhZG8gQU5URVMgKGZhaXhhLWludGVyZXNzZSk6Jywge1xyXG4gICAgICAgIHNob3dXaXRoSW50ZXJlc3QsXHJcbiAgICAgICAgd2l0aEludGVyZXN0LFxyXG4gICAgICAgIGludGVyZXN0TWFudWFsOiBpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyBhcGxpY2EgbyBTZXQgZGUgY8OzZGlnb3NcclxuICAgICAgc2V0RmFpeGFTZXQobmV3IFNldDxudW1iZXI+KG51bXMpKVxyXG5cclxuICAgICAgLy8gc8OzIGV4aWJpbW9zL2NoZWNhbW9zIHNlIG8gcGFpIHF1ZXIgcXVlIGFwYXJlw6dhIChyZXNwZWl0byDDqSB0cmF0YWRvIG5vIG91dHJvIHVzZUVmZmVjdCk7XHJcbiAgICAgIC8vIGFxdWkgYXBlbmFzIFwicHJvcG9tb3NcIiBleGliaXIgY2FzbyB2ZW5oYSBmYWl4YSBjb20gZWxlbWVudG9zXHJcbiAgICAgIGlmIChudW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBoYXZlcsOhIHRlbnRhdGl2YSBkZSBleGliaXIvY2hlY2FyIG8gaW50ZXJ2YWxvIChkZXBlbmRlbmRvIGRvIG91dHJvIGVmZWl0byBlIGRvIG1hbnVhbFJlZiknKVxyXG4gICAgICAgIHNldHNob3dXaXRoSW50ZXJlc3QodHJ1ZSlcclxuICAgICAgICBpZiAoIWludGVyZXN0TWFudWFsUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIG1hcmNhbmRvIHdpdGhJbnRlcmVzdCBhdXRvbWF0aWNhbWVudGUgKHVzdcOhcmlvIGFpbmRhIG7Do28gYWx0ZXJvdSBtYW51YWxtZW50ZSknKVxyXG4gICAgICAgICAgc2V0V2l0aEludGVyZXN0KHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIE7Dg08gbWFyY2Ftb3Mgd2l0aEludGVyZXN0ICh1c3XDoXJpbyBqw6EgbWV4ZXUgbWFudWFsbWVudGUpJylcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gbGlzdGEgZGEgZmFpeGEgZXN0w6EgdmF6aWEg4oCUIG7Do28gYWx0ZXJhbW9zIHdpdGhJbnRlcmVzdCcpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGxvZ2EgbyBlc3RhZG8g4oCcbG9nbyBhcMOzc+KAnSBvIGNpY2xvIGF0dWFsIGRlIHJlbmRlciAobWVsaG9yIHZpc2liaWxpZGFkZSlcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gZXN0YWRvIEFQw5NTIHNldFN0YXRlIChmYWl4YS1pbnRlcmVzc2UpOicsIHtcclxuICAgICAgICAgIHNob3dXaXRoSW50ZXJlc3QsXHJcbiAgICAgICAgICB3aXRoSW50ZXJlc3QsXHJcbiAgICAgICAgICBpbnRlcmVzdE1hbnVhbDogaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sIDApXHJcbiAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS50eXBlID09PSAnZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhczpvaycpIHtcclxuICAgICAgY29uc3QgY2ZnID0gZGF0YSBhcyBNc2dDb25maWdcclxuICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhczpvayByZWNlYmlkYTonLCBjZmcpXHJcblxyXG4gICAgICAvL0FqdXN0YW5kbyBpbnRlcnZhbG8gZGUgaW50ZXJlc3NlIHBhcmEgYXBhcmVjZXJcclxuICAgICAgc2V0V2l0aEludGVyZXN0KGNmZ1snbWVzc2FnZSddWyd2aXNpYmxlJ10pXHJcbiAgICAgIHNldHNob3dXaXRoSW50ZXJlc3QoKGNmZ1snbWVzc2FnZSddWyd2aXNpYmxlJ10pKVxyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gZXN0YWRvIEFOVEVTIChmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzOm9rKTonLCB7XHJcbiAgICAgICAgc2hvd1dpdGhJbnRlcmVzdCxcclxuICAgICAgICB3aXRoSW50ZXJlc3QsXHJcbiAgICAgICAgaW50ZXJlc3RNYW51YWw6IGludGVyZXN0TWFudWFsUmVmLmN1cnJlbnRcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChjZmcuc3RhcnRXaXRoSW50ZXJlc3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBwYWkgc2luYWxpem91IHN0YXJ0V2l0aEludGVyZXN0PVRSVUUgLT4gbW9zdHJhciBjaGVja2JveCcpXHJcbiAgICAgICAgc2V0c2hvd1dpdGhJbnRlcmVzdCh0cnVlKVxyXG4gICAgICAgIGlmICghaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gbWFyY2FuZG8gd2l0aEludGVyZXN0IHBvcnF1ZSB1c3XDoXJpbyBuw6NvIG1leGV1IG1hbnVhbG1lbnRlJylcclxuICAgICAgICAgIHNldFdpdGhJbnRlcmVzdCh0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBOw4NPIG1hcmNhbW9zIHdpdGhJbnRlcmVzdCAocmVzcGVpdGFuZG8gZXNjb2xoYSBtYW51YWwgcHLDqXZpYSknKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBzdGFydFdpdGhJbnRlcmVzdCBhdXNlbnRlL2ZhbHNvIOKAlCBuw6NvIGZvcsOnYW1vcyBuYWRhIGFxdWknKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBlc3RhZG8gQVDDk1Mgc2V0U3RhdGUgKGZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXM6b2spOicsIHtcclxuICAgICAgICAgIHNob3dXaXRoSW50ZXJlc3QsXHJcbiAgICAgICAgICB3aXRoSW50ZXJlc3QsXHJcbiAgICAgICAgICBpbnRlcmVzdE1hbnVhbDogaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sIDApXHJcbiAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS50eXBlID09PSAnbGVnZW5kOm1pbmVyYWlzJyB8fCBkYXRhLnR5cGUgPT09ICdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzOm9rJykge1xyXG4gICAgICBjb25zdCBfbXNnID0gZGF0YSBhcyBNc2dMZWdlbmRNaW5lcmFpc1xyXG5cclxuICAgICAgLy9BanVzdGFuZG8gaW50ZXJ2YWxvIGRlIGludGVyZXNzZSBwYXJhIGFwYXJlY2VyXHJcbiAgICAgIHNldFdpdGhJbnRlcmVzdChfbXNnWydtZXNzYWdlJ11bJ3Zpc2libGUnXSlcclxuICAgICAgc2V0c2hvd1dpdGhJbnRlcmVzdCgoX21zZ1snbWVzc2FnZSddWyd2aXNpYmxlJ10pKVxyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gbGVnZW5kOm1pbmVyYWlzIHBheWxvYWQ6JywgX21zZz8ucGF5bG9hZClcclxuICAgICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiVEVTVEU6IFwiLCBkYXRhKVxyXG5cclxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdjb25maWcnIHx8IGRhdGEudHlwZSA9PT0gJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXM6b2snKSB7XHJcbiAgICAgIGNvbnN0IGNmZyA9IGRhdGEgYXMgTXNnQ29uZmlnXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIGNvbmZpZyByZWNlYmlkYTonLCBjZmcpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddICoqY2dWaXNpYmxlIGRvIHBhaSoqID0nLCBjZmcuY2dWaXNpYmxlKSAvLyA8PDwgaW1wcmltZSBvICd2aXNpYmxlJ1xyXG5cclxuICAgICAgLy8gTW9zdHJhci9vY3VsdGFyIG8gY2hlY2tib3ggZGUgSW50ZXJ2YWxvIGRlIEludGVyZXNzZSBkZSBhY29yZG8gY29tIGEgdmlzaWJpbGlkYWRlIG5vIHBhaVxyXG4gICAgICBpZiAoY2ZnLmNnVmlzaWJsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHNldHNob3dXaXRoSW50ZXJlc3QodHJ1ZSlcclxuICAgICAgICAvLyBTZSBwYWkgdGFtYsOpbSBwZWRpdSBwYXJhIGNvbWXDp2FyIG1hcmNhZG8gZSBvIHVzdcOhcmlvIGFpbmRhIG7Do28gbWV4ZXU6XHJcbiAgICAgICAgaWYgKGNmZy5zdGFydFdpdGhJbnRlcmVzdCAmJiAhaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgc2V0V2l0aEludGVyZXN0KHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIE7Do28gbW9zdHJhciAobmVtIG1hcmNhZG8pIHF1YW5kbyBvIGNoZWNrYm94IG7Do28gw6kgdmlzw612ZWwgbm8gcGFpXHJcbiAgICAgICAgc2V0c2hvd1dpdGhJbnRlcmVzdChmYWxzZSlcclxuICAgICAgICBpZiAoIWludGVyZXN0TWFudWFsUmVmLmN1cnJlbnQpIHNldFdpdGhJbnRlcmVzdChmYWxzZSlcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gc8OzIHByYSBkZXB1cmHDp8OjbyBkbyByZXN1bHRhZG8gZmluYWwgbmVzdGUgdGljazpcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gZXN0YWRvIHDDs3MtY29uZmlnOicsIHtcclxuICAgICAgICAgIHNob3dXaXRoSW50ZXJlc3QsXHJcbiAgICAgICAgICB3aXRoSW50ZXJlc3QsXHJcbiAgICAgICAgICBpbnRlcmVzdE1hbnVhbDogaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sIDApXHJcblxyXG4gICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIHRpcG8gbsOjbyB0cmF0YWRvOicsIGRhdGEudHlwZSlcclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gIH1cclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1zZylcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1zZylcclxuICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIGxpc3RlbmVyIE9GRiDigJQgcmVtb3ZpZG8gbmEgZGVzbW9udGFnZW0gZG8gZWZlaXRvJylcclxuICB9XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG59LCBbXSlcclxuXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZmFpeGFTZXQuc2l6ZSA+IDApIHtcclxuICAgICAgc2V0c2hvd1dpdGhJbnRlcmVzdCh0cnVlKVxyXG4gICAgICBpZiAoIWludGVyZXN0TWFudWFsUmVmLmN1cnJlbnQpIHNldFdpdGhJbnRlcmVzdCh0cnVlKVxyXG4gICAgfVxyXG4gIH0sIFtmYWl4YVNldF0pXHJcblxyXG4gIC8qID09PT09PSBBTU9TVFJBUzogY2FycmVnYXIgYmFzZSA9PT09PT0gKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXHJcbiAgICBhc3luYyBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJ1t3aWRnZXRdIGVmZWl0byBhbW9zdHJhczpjYXJyZWdhciBiYXNlJylcclxuICAgICAgY29uc29sZS5sb2coeyBjYXRlZ29yaWEsIHdpdGhJbnRlcmVzdCB9KVxyXG4gICAgICBpZiAoY2F0ZWdvcmlhICE9PSAnc2FtcGxlJykgeyBjb25zb2xlLmxvZygnc2tpcCcpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcbiAgICAgIHNldExvYWRpbmdGdWxsKHRydWUpOyBzZXRFcnJvckZ1bGwoJycpXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXMod2l0aEludGVyZXN0IHx8IERFRkFVTFRfRkFJWEFfSU5URVJFU1NFKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7IHNldERhZG9zRnVsbChkYXRhKTsgY29uc29sZS5sb2coJ1t3aWRnZXRdIGFtb3N0cmFzIGJhc2UnLCBkYXRhPy5sZW5ndGgpIH1cclxuICAgICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW3dpZGdldF0gZXJybyBiYXNlIGFtb3N0cmFzJywgZSlcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkgeyBzZXRFcnJvckZ1bGwoZT8ubWVzc2FnZSB8fCAnRmFsaGEgYW8gYnVzY2FyIGRhZG9zJyk7IHNldERhZG9zRnVsbChbXSkgfVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7IHNldExvYWRpbmdGdWxsKGZhbHNlKTsgY29uc29sZS5ncm91cEVuZCgpIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcnVuKClcclxuICAgIHJldHVybiAoKSA9PiB7IGNhbmNlbGxlZCA9IHRydWUgfVxyXG4gIH0sIFtjYXRlZ29yaWEsIHdpdGhJbnRlcmVzdF0pXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnW3dpZGdldF0gZWZlaXRvIGFtb3N0cmFzOmNhcnJlZ2FyIGZhaXhhIEFQSScpXHJcbiAgICAgIGNvbnNvbGUubG9nKHsgY2F0ZWdvcmlhLCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0U2l6ZTogZmFpeGFTZXQuc2l6ZSwgaGFzRGFkb3NGYWl4YUFQSTogZGFkb3NGYWl4YUFQSSAhPT0gbnVsbCB9KVxyXG4gICAgICBpZiAoY2F0ZWdvcmlhICE9PSAnc2FtcGxlJykgeyBjb25zb2xlLmxvZygnc2tpcCBjYXRlZ29yaWEnKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG4gICAgICBpZiAoIXdpdGhJbnRlcmVzdCkgeyBjb25zb2xlLmxvZygnc2tpcCBzZW0gaW50ZXJlc3NlJyk7IGNvbnNvbGUuZ3JvdXBFbmQoKTsgcmV0dXJuIH1cclxuICAgICAgaWYgKGZhaXhhU2V0LnNpemUgPiAwKSB7IGNvbnNvbGUubG9nKCdza2lwIGZhaXhhIHZpbmRhIGRvIHBhaScpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcbiAgICAgIGlmIChkYWRvc0ZhaXhhQVBJICE9PSBudWxsKSB7IGNvbnNvbGUubG9nKCdza2lwIGrDoSBjYXJyZWdhZG8nKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG4gICAgICBzZXRMb2FkaW5nSW50ZXJlc3QodHJ1ZSk7IHNldEVycm9ySW50ZXJlc3QoJycpXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXModHJ1ZSlcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkgeyBzZXREYWRvc0ZhaXhhQVBJKGRhdGEpOyBjb25zb2xlLmxvZygnW3dpZGdldF0gYW1vc3RyYXMgZmFpeGEgQVBJJywgZGF0YT8ubGVuZ3RoKSB9XHJcbiAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1t3aWRnZXRdIGVycm8gZmFpeGEgQVBJJywgZSlcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkgeyBzZXRFcnJvckludGVyZXN0KGU/Lm1lc3NhZ2UgfHwgJ0ZhbGhhIGFvIGJ1c2NhciBkYWRvcyBkbyBpbnRlcnZhbG8gZGUgaW50ZXJlc3NlJyk7IHNldERhZG9zRmFpeGFBUEkoW10pIH1cclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkgeyBzZXRMb2FkaW5nSW50ZXJlc3QoZmFsc2UpOyBjb25zb2xlLmdyb3VwRW5kKCkgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBydW4oKVxyXG4gICAgcmV0dXJuICgpID0+IHsgY2FuY2VsbGVkID0gdHJ1ZSB9XHJcbiAgfSwgW2NhdGVnb3JpYSwgd2l0aEludGVyZXN0LCBmYWl4YVNldCwgZGFkb3NGYWl4YUFQSV0pXHJcblxyXG4gIC8qID09PT09PSBBTU9TVFJBUzogZGVzZW5oYXIgPT09PT09ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJ1t3aWRnZXRdIGVmZWl0byBhbW9zdHJhczpkZXNlbmhhcicpXHJcbiAgICBjb25zdCBqbXYgPSBqaW11TWFwVmlld1xyXG4gICAgaWYgKCFqbXY/LnZpZXcpIHsgY29uc29sZS5sb2coJ3NraXAgc2VtIHZpZXcnKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG4gICAgaWYgKGNhdGVnb3JpYSAhPT0gJ3NhbXBsZScpIHsgY29uc29sZS5sb2coJ3NraXAgY2F0ZWdvcmlhJyk7IGNvbnNvbGUuZ3JvdXBFbmQoKTsgcmV0dXJuIH1cclxuXHJcbiAgICBjb25zdCBiYXNlOiBBbW9zdHJhSXRlbVtdID0gd2l0aEludGVyZXN0XHJcbiAgICAgID8gKGZhaXhhU2V0LnNpemUgPiAwXHJcbiAgICAgICAgICA/IChkYWRvc0Z1bGwgPz8gW10pLmZpbHRlcih4ID0+IGZhaXhhU2V0LmhhcyhOdW1iZXIoeC5jb2RpZ29Qb2NvKSkpXHJcbiAgICAgICAgICA6IChkYWRvc0ZhaXhhQVBJID8/IGRhZG9zRnVsbCA/PyBbXSkpXHJcbiAgICAgIDogKGRhZG9zRnVsbCA/PyBbXSlcclxuXHJcbiAgICBjb25zb2xlLmxvZygnW3dpZGdldF0gYmFzZSBzaXplJywgYmFzZS5sZW5ndGgsICd0aXBvc1NlbCcsIHRpcG9zU2VsKVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGJhc2UpIHx8IGJhc2UubGVuZ3RoID09PSAwKSB7IGNvbnNvbGUubG9nKCdza2lwIGJhc2UgdmF6aWEnKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRpcG9zU2VsKSB8fCB0aXBvc1NlbC5sZW5ndGggPT09IDApIHsgY29uc29sZS5sb2coJ3NraXAgc2VtIHRpcG9zJyk7IGNvbnNvbGUuZ3JvdXBFbmQoKTsgcmV0dXJuIH1cclxuXHJcbiAgICBjb25zdCB7IHZpZXcgfSA9IGptdlxyXG5cclxuICAgIHRpcG9zU2VsLmZvckVhY2goKHRpcG8pID0+IHtcclxuICAgICAgY29uc3QgZGFkb3MgPSBiYXNlXHJcbiAgICAgICAgLm1hcChkID0+ICh7IGNvZGlnb1BvY286IGQuY29kaWdvUG9jbywgdG90YWw6IGRbVFlQRV9GSUVMRFt0aXBvXV0gPz8gMCB9KSlcclxuICAgICAgICAuZmlsdGVyKGQgPT4gKGQudG90YWwgPz8gMCkgPiAwKVxyXG5cclxuICAgICAgY29uc29sZS5sb2coYFt3aWRnZXRdIHRpcG89JHt0aXBvfSBkYWRvc2AsIGRhZG9zLmxlbmd0aClcclxuXHJcbiAgICAgIGNsZWFyTGF5ZXJPZlRpcG8odmlldywgdGlwbylcclxuICAgICAgaWYgKGRhZG9zLmxlbmd0aCA9PT0gMCkgcmV0dXJuXHJcblxyXG4gICAgICBjb25zdCBjb2xvckZpbGwgPSBjb3Jlc1RpcG9zW3RpcG9dIHx8ICdyZ2JhKDAsMCwwLDAuNSknXHJcbiAgICAgIGNvbnN0IGlkQ2FtYWRhID0gbGF5ZXJJZEZvclNhbXBsZSh0aXBvKVxyXG4gICAgICBjb25zdCBpZExlZ2VuZGEgPSBgbGdkXyR7aWRDYW1hZGF9YFxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBnZXJhck1hcGFEaXN0cmlidWljYW9FQih7XHJcbiAgICAgICAgICBqaW11TWFwVmlldzogam12LFxyXG4gICAgICAgICAgZGFkb3MsXHJcbiAgICAgICAgICBjb2xvckZpbGwsXHJcbiAgICAgICAgICBpZENhbWFkYSxcclxuICAgICAgICAgIGlkTGVnZW5kYSxcclxuICAgICAgICAgIHRpdGxlTGVnZW5kYTogKHdpdGhJbnRlcmVzdCA/ICdJbnRlcnZhbG8gZGUgSW50ZXJlc3NlIC0gJyA6ICcnKSArICh0aXBvLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGlwby5zbGljZSgxKSksXHJcbiAgICAgICAgICB3aXRoSW50ZXJlc3RcclxuICAgICAgICB9IGFzIGFueSlcclxuXHJcbiAgICAgICAgY29uc3QgbHlyID0gdmlldy5tYXAuZmluZExheWVyQnlJZChpZENhbWFkYSkgYXMgYW55XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdIGNhbWFkYSBjcmlhZGE/JywgISFseXIsIGlkQ2FtYWRhKVxyXG4gICAgICAgIGlmIChseXIpIGRpc2FibGVDbHVzdGVyTnVtYmVycyhseXIpXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBbYW1vc3RyYXNdIGZhbGhhIGFvIGdlcmFyIGNhbWFkYSAke2lkQ2FtYWRhfWAsIGUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICB9LCBbamltdU1hcFZpZXcsIHRpcG9zU2VsLCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0LCBkYWRvc0Z1bGwsIGRhZG9zRmFpeGFBUEksIGNhdGVnb3JpYV0pXHJcblxyXG4gIC8qID09PT09PSBNSU5FUkFJUzogYW8gbXVkYXIgbyByYWRpbyBkZSBhbsOhbGlzZSAtPiBidXNjYSBDT05UQURPUiBlIExJU1RBID09PT09PSAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnW3dpZGdldF0gZWZlaXRvIG1pbmVyYWlzOnJhZGlvJylcclxuICAgICAgY29uc29sZS5sb2coeyBjYXRlZ29yaWEsIG1pbmVyYWxBbmFsaXNlLCB3aXRoSW50ZXJlc3QgfSlcclxuICAgICAgaWYgKGNhdGVnb3JpYSAhPT0gJ21pbmVyYWxzJykgeyBjb25zb2xlLmxvZygnc2tpcCBjYXRlZ29yaWEnKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG4gICAgICBpZiAoIW1pbmVyYWxBbmFsaXNlKSB7IGNvbnNvbGUubG9nKCdza2lwIHNlbSBhbmFsaXNlJyk7IGNvbnNvbGUuZ3JvdXBFbmQoKTsgcmV0dXJuIH1cclxuXHJcbiAgICAgIC8vIHJlc2V0IFVJIGRlcGVuZGVudGVcclxuICAgICAgc2V0TWluZXJhbFNlbGVjaW9uYWRvKG51bGwpXHJcbiAgICAgIHNldEFncnVwYWRvcignJylcclxuICAgICAgc2V0TGlzdGFNaW5lcmFpcyhbXSlcclxuICAgICAgc2V0QnVzY2FNaW5lcmFsKCcnKVxyXG4gICAgICBzZXRFcnJvck1pbmVyYWlzKCcnKVxyXG4gICAgICBzZXRMb2FkaW5nTWluZXJhaXModHJ1ZSlcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgW2NvbnRhZG9yLCBsaXN0YV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICBmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzQ29udGFkb3IobWluZXJhbEFuYWxpc2UgYXMgTWluZXJhbFRpcG8sIHdpdGhJbnRlcmVzdCksXHJcbiAgICAgICAgICBmZXRjaE1pbmVyYWxMaXN0YShtaW5lcmFsQW5hbGlzZSBhcyBNaW5lcmFsVGlwbywgd2l0aEludGVyZXN0KVxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XSBjb250YWRvci8gbGlzdGEgcmVjZWJpZG9zJywgY29udGFkb3I/Lmxlbmd0aCwgbGlzdGE/Lmxlbmd0aClcclxuICAgICAgICAgIHNldERhZG9zTWluZXJhaXMoY29udGFkb3IpXHJcbiAgICAgICAgICBzZXRMaXN0YU1pbmVyYWlzKGxpc3RhKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW3dpZGdldF0gZXJybyBmZXRjaCBtaW5lcmFpcycsIGUpXHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcclxuICAgICAgICAgIHNldEVycm9yTWluZXJhaXMoZT8ubWVzc2FnZSB8fCAnRmFsaGEgYW8gYnVzY2FyIG1pbmVyYWlzJylcclxuICAgICAgICAgIHNldERhZG9zTWluZXJhaXMoW10pXHJcbiAgICAgICAgICBzZXRMaXN0YU1pbmVyYWlzKFtdKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkgeyBzZXRMb2FkaW5nTWluZXJhaXMoZmFsc2UpOyBjb25zb2xlLmdyb3VwRW5kKCkgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBydW4oKVxyXG4gICAgcmV0dXJuICgpID0+IHsgY2FuY2VsbGVkID0gdHJ1ZSB9XHJcbiAgfSwgW2NhdGVnb3JpYSwgbWluZXJhbEFuYWxpc2UsIHdpdGhJbnRlcmVzdF0pXHJcblxyXG4gIC8qID09PT09PSBNSU5FUkFJUzogZGVzZW5oYXIgYmFzZSAoY29udGFkb3IpIHF1YW5kbyBjaGVnYSA9PT09PT0gKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnW3dpZGdldF0gZWZlaXRvIG1pbmVyYWlzOmRlc2VuaGFyIGJhc2UnKVxyXG4gICAgY29uc29sZS5sb2coeyBjYXRlZ29yaWEsIGhhc0pNVjogISFqaW11TWFwVmlldz8udmlldywgbWluZXJhbEFuYWxpc2UsIGRhZG9zTWluZXJhaXNMZW46IGRhZG9zTWluZXJhaXM/Lmxlbmd0aCwgd2l0aEludGVyZXN0LCBmYWl4YVNldFNpemU6IGZhaXhhU2V0LnNpemUgfSlcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChjYXRlZ29yaWEgIT09ICdtaW5lcmFscycpIHJldHVybiBjb25zb2xlLmxvZygnc2tpcCBjYXRlZ29yaWEnKVxyXG4gICAgICBpZiAoIWppbXVNYXBWaWV3Py52aWV3KSByZXR1cm4gY29uc29sZS5sb2coJ3NraXAgdmlldycpXHJcbiAgICAgIGlmICghbWluZXJhbEFuYWxpc2UpIHJldHVybiBjb25zb2xlLmxvZygnc2tpcCBtaW5lcmFsQW5hbGlzZScpXHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYWRvc01pbmVyYWlzKSkgcmV0dXJuIGNvbnNvbGUubG9nKCdza2lwIGRhZG9zTWluZXJhaXMgbnVsbCcpXHJcblxyXG4gICAgICBjb25zdCBiYXNlID0gKHdpdGhJbnRlcmVzdCAmJiBmYWl4YVNldC5zaXplID4gMClcclxuICAgICAgICA/IGRhZG9zTWluZXJhaXMuZmlsdGVyKGQgPT4gZmFpeGFTZXQuaGFzKE51bWJlcihkLmNvZGlnb1BvY28pKSlcclxuICAgICAgICA6IGRhZG9zTWluZXJhaXNcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XSBiYXNlIHBhcmEgZGVzZW5oYXInLCBiYXNlLmxlbmd0aClcclxuICAgICAgaWYgKGJhc2UubGVuZ3RoID09PSAwKSByZXR1cm4gY29uc29sZS53YXJuKCdbd2lkZ2V0XSBiYXNlIHZhemlhIOKAlCBuYWRhIGEgcGxvdHRhcicpXHJcblxyXG4gICAgICBkZXNlbmhhckRpc3RyaWJ1aWNhb01pbmVyYWlzKGppbXVNYXBWaWV3LCBiYXNlLCBtaW5lcmFsQW5hbGlzZSBhcyBNaW5lcmFsVGlwbywgd2l0aEludGVyZXN0KVxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgICB9XHJcbiAgfSwgW2ppbXVNYXBWaWV3LCBjYXRlZ29yaWEsIG1pbmVyYWxBbmFsaXNlLCBkYWRvc01pbmVyYWlzLCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0XSlcclxuXHJcbiAgLyogPT09PT09IE1JTkVSQUlTOiBhbyBlc2NvbGhlciBNSU5FUkFMICsgQUdSVVBBRE9SIC0+IGFwbGljYSBjb2xvcml6YcOnw6NvIHN0b3BzID09PT09PSAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnW3dpZGdldF0gZWZlaXRvIG1pbmVyYWlzOmNvbG9yaXphw6fDo28gYWdydXBhZG9yJylcclxuICAgICAgY29uc29sZS5sb2coeyBjYXRlZ29yaWEsIGhhc0pNVjogISFqaW11TWFwVmlldz8udmlldywgbWluZXJhbEFuYWxpc2UsIG1pbmVyYWxTZWxlY2lvbmFkbywgYWdydXBhZG9yLCB3aXRoSW50ZXJlc3QgfSlcclxuICAgICAgaWYgKGNhdGVnb3JpYSAhPT0gJ21pbmVyYWxzJyB8fCAhamltdU1hcFZpZXc/LnZpZXcgfHwgIW1pbmVyYWxBbmFsaXNlIHx8ICFtaW5lcmFsU2VsZWNpb25hZG8gfHwgIWFncnVwYWRvcikgeyBjb25zb2xlLmxvZygnc2tpcCcpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhZG9zID0gYXdhaXQgZmV0Y2hNaW5lcmFsQWdydXBhZG9yKFxyXG4gICAgICAgICAgbWluZXJhbEFuYWxpc2UgYXMgTWluZXJhbFRpcG8sXHJcbiAgICAgICAgICBtaW5lcmFsU2VsZWNpb25hZG8ubm9tZVJlc3VtaWRvTWluZXJhbCxcclxuICAgICAgICAgIHdpdGhJbnRlcmVzdFxyXG4gICAgICAgIClcclxuICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF0gYWdydXBhZG9yIGRhZG9zJywgZGFkb3M/Lmxlbmd0aCwgZGFkb3M/LnNsaWNlPy4oMCwxMCkpXHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcclxuICAgICAgICAgIHNldEFncnVwYWRvckRhZG9zKGRhZG9zIHx8IFtdKVxyXG4gICAgICAgICAgYXdhaXQgYXBsaWNhckNvbG9yaXphY2FvUG9yQWdydXBhZG9yKFxyXG4gICAgICAgICAgICBqaW11TWFwVmlldyxcclxuICAgICAgICAgICAgbWluZXJhbEFuYWxpc2UgYXMgTWluZXJhbFRpcG8sXHJcbiAgICAgICAgICAgIGRhZG9zLFxyXG4gICAgICAgICAgICBhZ3J1cGFkb3IgYXMgJ2FuYWxpc2UnIHwgJ21lZGlhJyB8ICdtYXhpbWEnXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF0gY29sb3JpemHDp8OjbyBhcGxpY2FkYScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFsaGEgYW8gYXBsaWNhciBjb2xvcml6YcOnw6NvIHBvciBhZ3J1cGFkb3InLCBlKVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7IGNhbmNlbGxlZCA9IHRydWUgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBydW4oKVxyXG4gICAgcmV0dXJuICgpID0+IHsgY2FuY2VsbGVkID0gdHJ1ZSB9XHJcbiAgfSwgW2ppbXVNYXBWaWV3LCBjYXRlZ29yaWEsIG1pbmVyYWxBbmFsaXNlLCBtaW5lcmFsU2VsZWNpb25hZG8sIGFncnVwYWRvciwgd2l0aEludGVyZXN0XSlcclxuXHJcbiAgLy8gUmVzZXQvZmVjaGFyXHJcbiAgY29uc3QgcmVzZXRVaVN0YXRlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0VGlwb3NTZWwoW10pOyBzZXRTaG93RW1wdHkoZmFsc2UpOyBzZXRXaXRoSW50ZXJlc3QoZmFsc2UpOyBzZXRDYXRlZ29yaWEoJycpO1xyXG4gICAgc2V0RGFkb3NGdWxsKG51bGwpOyBzZXREYWRvc0ZhaXhhQVBJKG51bGwpO1xyXG4gICAgc2V0TWluZXJhbEFuYWxpc2UoJycpOyBzZXREYWRvc01pbmVyYWlzKG51bGwpOyBzZXRFcnJvck1pbmVyYWlzKCcnKTsgc2V0TG9hZGluZ01pbmVyYWlzKGZhbHNlKTtcclxuICAgIHNldExpc3RhTWluZXJhaXMoW10pOyBzZXRCdXNjYU1pbmVyYWwoJycpOyBzZXRNaW5lcmFsU2VsZWNpb25hZG8obnVsbCk7IHNldEFncnVwYWRvcignJyk7XHJcbiAgICBpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50ID0gZmFsc2VcclxuICB9LCBbXSlcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldz8udmlld1xyXG4gICAgaWYgKHZpZXcpIHtcclxuICAgIGNsZWFyQW1vc3RyYXModmlldylcclxuICAgIGNsZWFyTWluZXJhaXModmlldykgLy8gPDw8IHRhbWLDqW0gcmVtb3ZlIGFzIGNhbWFkYXMgZGUgbWluZXJhaXNcclxuICB9XHJcbiAgICByZXNldFVpU3RhdGUoKVxyXG4gIH0sIFtqaW11TWFwVmlldywgcmVzZXRVaVN0YXRlXSlcclxuXHJcbiAgLy8gRmVjaGFyIHBvciBib3TDo28vb2N1bHRhciBkacOhbG9nbyAoY29ycmlnaWRvOiBzZWxldG9yIGNvbSBhc3BhcyBmZWNoYWRhcyBjb3JyZXRhbWVudGUpXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldz8udmlldzsgaWYgKCF2aWV3KSByZXR1cm5cclxuICAgIGNvbnN0IHJvb3QgPSByb290UmVmLmN1cnJlbnQ7IGlmICghcm9vdCkgcmV0dXJuXHJcbiAgICBjb25zdCBkbGcgPSBmaW5kQ2xvc2VzdERpYWxvZyhyb290KTsgaWYgKCFkbGcpIHJldHVyblxyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkbGcucXVlcnlTZWxlY3RvcihcclxuICAgICAgJ2J1dHRvblthcmlhLWxhYmVsPVwiQ2xvc2VcIl0sIGJ1dHRvblt0aXRsZT1cIkNsb3NlXCJdLCBidXR0b25bYXJpYS1sYWJlbD1cIkZlY2hhclwiXSwgYnV0dG9uW3RpdGxlPVwiRmVjaGFyXCJdLCBbZGF0YS1hY3Rpb249XCJjbG9zZVwiXSdcclxuICAgICkgYXMgSFRNTEVsZW1lbnQgfCBudWxsXHJcbiAgICBpZiAoIWNsb3NlQnRuKSByZXR1cm5cclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xvc2UpXHJcbiAgICByZXR1cm4gKCkgPT4gY2xvc2VCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbG9zZSlcclxuICB9LCBbamltdU1hcFZpZXcsIGhhbmRsZUNsb3NlXSlcclxuXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvbktleSA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7IGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIGhhbmRsZUNsb3NlKCkgfVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5KVxyXG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleSlcclxuICB9LCBbaGFuZGxlQ2xvc2VdKVxyXG5cclxuICAvKiogU3Vtw6FyaW8gKGFtb3N0cmFzIGFwZW5hcykgKi9cclxuICBjb25zdCBzdW1tYXJ5R3JvdXBzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoY2F0ZWdvcmlhICE9PSAnc2FtcGxlJykgcmV0dXJuIFtdXHJcbiAgICBjb25zdCBiYXNlOiBBbW9zdHJhSXRlbVtdID0gd2l0aEludGVyZXN0XHJcbiAgICAgID8gKGZhaXhhU2V0LnNpemUgPiAwXHJcbiAgICAgICAgICA/IChkYWRvc0Z1bGwgPz8gW10pLmZpbHRlcih4ID0+IGZhaXhhU2V0LmhhcyhOdW1iZXIoeC5jb2RpZ29Qb2NvKSkpXHJcbiAgICAgICAgICA6IChkYWRvc0ZhaXhhQVBJID8/IGRhZG9zRnVsbCA/PyBbXSkpXHJcbiAgICAgIDogKGRhZG9zRnVsbCA/PyBbXSlcclxuXHJcbiAgICByZXR1cm4gdGlwb3NTZWwubWFwKHRpcG8gPT4ge1xyXG4gICAgICBjb25zdCBjb3IgPSBjb3Jlc1RpcG9zW3RpcG9dXHJcbiAgICAgIGNvbnN0IGRhZG9zID0gYmFzZS5tYXAoZCA9PiAoeyBjb2RpZ29Qb2NvOiBkLmNvZGlnb1BvY28sIHRvdGFsOiBkW1RZUEVfRklFTERbdGlwb11dID8/IDAgfSkpXHJcbiAgICAgIGxldCByb3dzID0gY2FsY3VsYXJRdWVicmFzKGRhZG9zLCBjb3IpLnJldmVyc2UoKVxyXG4gICAgICBpZiAoIXNob3dFbXB0eSkgcm93cyA9IHJvd3MuZmlsdGVyKHIgPT4gci5jb3VudCA+IDAgfHwgci5sYWJlbC5zdGFydHNXaXRoKCd8IDAgfCcpKVxyXG4gICAgICByZXR1cm4geyB0aXBvLCByb3dzIH1cclxuICAgIH0pXHJcbiAgfSwgW3RpcG9zU2VsLCBzaG93RW1wdHksIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXQsIGRhZG9zRnVsbCwgZGFkb3NGYWl4YUFQSSwgY2F0ZWdvcmlhXSlcclxuXHJcbiAgLyoqIFN1bcOhcmlvIChtaW5lcmFpcyDigJQgVG90YWwgZGUgQW1vc3RyYXMvQ29sZXRhcykgKi9cclxuICBjb25zdCBzdW1tYXJ5TWluZXJhbHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChjYXRlZ29yaWEgIT09ICdtaW5lcmFscycpIHJldHVybiBudWxsXHJcbiAgICBpZiAoIW1pbmVyYWxBbmFsaXNlKSByZXR1cm4gbnVsbFxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhZG9zTWluZXJhaXMpIHx8IGRhZG9zTWluZXJhaXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxyXG5cclxuICAgIGNvbnN0IGJhc2UgPSAod2l0aEludGVyZXN0ICYmIGZhaXhhU2V0LnNpemUgPiAwKVxyXG4gICAgICA/IGRhZG9zTWluZXJhaXMuZmlsdGVyKGQgPT4gZmFpeGFTZXQuaGFzKE51bWJlcihkLmNvZGlnb1BvY28pKSlcclxuICAgICAgOiBkYWRvc01pbmVyYWlzXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSAod2l0aEludGVyZXN0ID8gJ0ludGVydmFsbyBkZSBJbnRlcmVzc2UgLSAnIDogJycpICsgbGFiZWxGcm9tVmFsdWUobWluZXJhbEFuYWxpc2UgYXMgTWluZXJhbFRpcG8pXHJcbiAgICBpZiAoIWJhc2UubGVuZ3RoKSByZXR1cm4geyB0aXRsZSwgcm93czogW10gYXMgYW55W10gfVxyXG5cclxuICAgIGNvbnN0IGNvbG9yID0gJ3JnYigyNTMsMTQyLDU1KScgLy8gbWVzbWEgY29yIHVzYWRhIG5hIGNhbWFkYSBkZSBtaW5lcmFpc1xyXG4gICAgY29uc3QgZGFkb3MgPSBiYXNlLm1hcChkID0+ICh7IHRvdGFsOiBkLnRvdGFsTWluZXJhaXMgfSkpXHJcbiAgICBsZXQgcm93cyA9IGNhbGN1bGFyUXVlYnJhcyhkYWRvcywgY29sb3IpLnJldmVyc2UoKVxyXG4gICAgaWYgKCFzaG93RW1wdHkpIHJvd3MgPSByb3dzLmZpbHRlcihyID0+IHIuY291bnQgPiAwIHx8IHIubGFiZWwuc3RhcnRzV2l0aCgnfCAwIHwnKSlcclxuXHJcbiAgICByZXR1cm4geyB0aXRsZSwgcm93cyB9XHJcbiAgfSwgW2NhdGVnb3JpYSwgbWluZXJhbEFuYWxpc2UsIGRhZG9zTWluZXJhaXMsIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXQsIHNob3dFbXB0eV0pXHJcblxyXG4gIGNvbnN0IHN1bW1hcnlNaW5lcmFsc0FnciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKGNhdGVnb3JpYSAhPT0gJ21pbmVyYWxzJykgcmV0dXJuIG51bGxcclxuICAgIGlmICghbWluZXJhbEFuYWxpc2UgfHwgIW1pbmVyYWxTZWxlY2lvbmFkbyB8fCAhYWdydXBhZG9yKSByZXR1cm4gbnVsbFxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFncnVwYWRvckRhZG9zKSB8fCBhZ3J1cGFkb3JEYWRvcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsXHJcblxyXG4gICAgLy8gZXNjb2xoZSBvIGNhbXBvIGNlcnRvIGNvbmZvcm1lIGFncnVwYWRvclxyXG4gICAgY29uc3QgZmllbGQgPSBhZ3J1cGFkb3IgPT09ICdhbmFsaXNlJyA/ICdxdEFuYWxpc2UnIDogKGFncnVwYWRvciA9PT0gJ21lZGlhJyA/ICd2YWxvck1lZGlvJyA6ICd2YWxvck1heGltbycpXHJcblxyXG4gICAgLy8gYXBsaWNhIFwiSW50ZXJ2YWxvIGRlIEludGVyZXNzZVwiIHNlIG5lY2Vzc8OhcmlvXHJcbiAgICBjb25zdCBiYXNlID0gKHdpdGhJbnRlcmVzdCAmJiBmYWl4YVNldC5zaXplID4gMClcclxuICAgICAgPyBhZ3J1cGFkb3JEYWRvcy5maWx0ZXIoZCA9PiBmYWl4YVNldC5oYXMoTnVtYmVyKGQuY29kaWdvUG9jbykpKVxyXG4gICAgICA6IGFncnVwYWRvckRhZG9zXHJcblxyXG4gICAgY29uc3QgdGl0bGVCYXNlID1cclxuICAgICAgKGFncnVwYWRvciA9PT0gJ2FuYWxpc2UnID8gJ1F1YW50aWRhZGUgZGUgQW7DoWxpc2VzJyA6XHJcbiAgICAgIGFncnVwYWRvciA9PT0gJ21lZGlhJyAgID8gYE3DqWRpYSBkZSAke21pbmVyYWxTZWxlY2lvbmFkby5ub21lTWluZXJhbH1gIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgTcOheGltYSBkZSAke21pbmVyYWxTZWxlY2lvbmFkby5ub21lTWluZXJhbH1gKVxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gKHdpdGhJbnRlcmVzdCA/ICdJbnRlcnZhbG8gZGUgSW50ZXJlc3NlIC0gJyA6ICcnKSArIHRpdGxlQmFzZVxyXG5cclxuICAgIGlmICghYmFzZS5sZW5ndGgpIHJldHVybiB7IHRpdGxlLCByb3dzOiBbXSBhcyBhbnlbXSB9XHJcblxyXG4gICAgLy8gQSBwYWxldGEgc2VndWUgY29lcmVudGUgY29tIG8g4oCcdG90YWzigJ0gKGJvbGhhcykg4oCUIGNvciBsYXJhbmphIHVzYWRhIG5vIGNvbnRhZG9yXHJcbiAgICBjb25zdCBjb2xvciA9ICdyZ2IoMjUzLDE0Miw1NSknXHJcbiAgICBjb25zdCBkYWRvcyA9IGJhc2UubWFwKGQgPT4gKHsgdG90YWw6IE51bWJlcigoZCBhcyBhbnkpW2ZpZWxkXSB8fCAwKSB9KSlcclxuICAgIGxldCByb3dzID0gY2FsY3VsYXJRdWVicmFzKGRhZG9zLCBjb2xvcikucmV2ZXJzZSgpXHJcbiAgICBpZiAoIXNob3dFbXB0eSkgcm93cyA9IHJvd3MuZmlsdGVyKHIgPT4gci5jb3VudCA+IDAgfHwgci5sYWJlbC5zdGFydHNXaXRoKCd8IDAgfCcpKVxyXG5cclxuICAgIHJldHVybiB7IHRpdGxlLCByb3dzIH1cclxuICB9LCBbY2F0ZWdvcmlhLCBtaW5lcmFsQW5hbGlzZSwgbWluZXJhbFNlbGVjaW9uYWRvLCBhZ3J1cGFkb3IsIGFncnVwYWRvckRhZG9zLCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0LCBzaG93RW1wdHldKVxyXG5cclxuXHJcblxyXG4gIGNvbnN0IGhhc0FueUJhc2UgPVxyXG4gICAgKEFycmF5LmlzQXJyYXkoZGFkb3NGdWxsKSAmJiBkYWRvc0Z1bGwubGVuZ3RoID4gMCkgfHxcclxuICAgIChBcnJheS5pc0FycmF5KGRhZG9zRmFpeGFBUEkpICYmIGRhZG9zRmFpeGFBUEkubGVuZ3RoID4gMClcclxuXHJcbiAgLy8gPT09PT0gZmlsdHJvcyBwYXJhIG8gc2VhcmNoIGRlIG1pbmVyYWlzXHJcbiAgY29uc3QgbGlzdGFGaWx0cmFkYSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgcSA9IChidXNjYU1pbmVyYWwgfHwgJycpLm5vcm1hbGl6ZSgnTkZEJykucmVwbGFjZSgvXFxwe0RpYWNyaXRpY30vZ3UsICcnKS50b0xvd2VyQ2FzZSgpXHJcbiAgICByZXR1cm4gKGxpc3RhTWluZXJhaXMgfHwgW10pLmZpbHRlcihtID0+IHtcclxuICAgICAgY29uc3Qgbm9tZSA9IChtLm5vbWVNaW5lcmFsIHx8ICcnKS5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1xccHtEaWFjcml0aWN9L2d1LCAnJykudG9Mb3dlckNhc2UoKVxyXG4gICAgICByZXR1cm4gbm9tZS5pbmNsdWRlcyhxKVxyXG4gICAgfSlcclxuICB9LCBbbGlzdGFNaW5lcmFpcywgYnVzY2FNaW5lcmFsXSlcclxuXHJcbiAgLy8gcHJpbWVpcmFzIDQgb3DDp8O1ZXMgKyBhIHRlcmNlaXJhIGxpbmhhICjDmmx0aW1hKVxyXG4gIGNvbnN0IEZJUlNUX0ZPVVIgPSBNSU5FUkFMX09QVElPTlMuc2xpY2UoMCwgNClcclxuICBjb25zdCBMQVNUX09ORSA9IE1JTkVSQUxfT1BUSU9OUy5zbGljZSg0KVxyXG5cclxuICBjb25zdCBsZWdlbmRBZ3IgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChjYXRlZ29yaWEgIT09ICdtaW5lcmFscycpIHJldHVybiBudWxsXHJcbiAgICBpZiAoIW1pbmVyYWxBbmFsaXNlIHx8ICFtaW5lcmFsU2VsZWNpb25hZG8gfHwgIWFncnVwYWRvcikgcmV0dXJuIG51bGxcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhZ3J1cGFkb3JEYWRvcykgfHwgYWdydXBhZG9yRGFkb3MubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxyXG5cclxuICAgIGNvbnN0IGZpZWxkID0gYWdydXBhZG9yID09PSAnYW5hbGlzZScgPyAncXRBbmFsaXNlJyA6IChhZ3J1cGFkb3IgPT09ICdtZWRpYScgPyAndmFsb3JNZWRpbycgOiAndmFsb3JNYXhpbW8nKVxyXG4gICAgY29uc3QgYmFzZSA9ICh3aXRoSW50ZXJlc3QgJiYgZmFpeGFTZXQuc2l6ZSA+IDApXHJcbiAgICAgID8gYWdydXBhZG9yRGFkb3MuZmlsdGVyKGQgPT4gZmFpeGFTZXQuaGFzKE51bWJlcihkLmNvZGlnb1BvY28pKSlcclxuICAgICAgOiBhZ3J1cGFkb3JEYWRvc1xyXG5cclxuICAgIGlmICghYmFzZS5sZW5ndGgpIHJldHVybiB7IG1pbjogMCwgbWF4OiAwLCBpc1BlcmNlbnQ6IGFncnVwYWRvciAhPT0gJ2FuYWxpc2UnLCB0aXRsZTogJycgfVxyXG5cclxuICAgIGxldCB2YWxzID0gYmFzZS5tYXAoKGQ6IGFueSkgPT4gTnVtYmVyKGRbZmllbGRdIHx8IDApKVxyXG4gICAgaWYgKGFncnVwYWRvciAhPT0gJ2FuYWxpc2UnKSB2YWxzID0gdmFscy5tYXAodiA9PiBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIHYpKSkgLy8gdHJhdmEgMC4uMTAwXHJcbiAgICBjb25zdCBtaW4gPSAwXHJcbiAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi52YWxzLCAwKVxyXG5cclxuICAgIGNvbnN0IHRpdGxlQmFzZSA9XHJcbiAgICAgIGFncnVwYWRvciA9PT0gJ2FuYWxpc2UnID8gJ0Fuw6FsaXNlcycgOlxyXG4gICAgICBhZ3J1cGFkb3IgPT09ICdtZWRpYScgICA/IGBNw6lkaWEgZGUgJHttaW5lcmFsU2VsZWNpb25hZG8ubm9tZU1pbmVyYWx9YCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYE3DoXhpbWEgZGUgJHttaW5lcmFsU2VsZWNpb25hZG8ubm9tZU1pbmVyYWx9YFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1pbiwgbWF4LFxyXG4gICAgICBpc1BlcmNlbnQ6IGFncnVwYWRvciAhPT0gJ2FuYWxpc2UnLFxyXG4gICAgICB0aXRsZTogKHdpdGhJbnRlcmVzdCA/ICdJbnRlcnZhbG8gZGUgSW50ZXJlc3NlIC0gJyA6ICcnKSArIHRpdGxlQmFzZVxyXG4gICAgfVxyXG4gIH0sIFtjYXRlZ29yaWEsIG1pbmVyYWxBbmFsaXNlLCBtaW5lcmFsU2VsZWNpb25hZG8sIGFncnVwYWRvciwgYWdydXBhZG9yRGFkb3MsIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXRdKVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY3NzPXt3cmFwcGVyU3R5bGV9IHJlZj17cm9vdFJlZn0+XHJcbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxQYW5lbFN0eWxlfSAvPlxyXG4gICAgICA8bGFiZWwgY3NzPXt0aXRsZVN0eWxlfT5TZWxlY2lvbmUgYSBkaXN0cmlidWnDp8OjbzwvbGFiZWw+XHJcblxyXG4gICAgICA8c2VsZWN0IGNzcz17c2VsZWN0U3R5bGV9IHZhbHVlPXtjYXRlZ29yaWF9IG9uQ2hhbmdlPXtlID0+IHNldENhdGVnb3JpYShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9Jyc+U2VsZWNpb25lIG8gdGlwbzwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9J3NhbXBsZSc+RGlzdHJpYnVpw6fDo28gZGUgYW1vc3RyYXM8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPSdtaW5lcmFscyc+RGlzdHJpYnVpw6fDo28gZGUgTWluZXJhaXM8L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICB7LyogPT09PT09PT0gVUk6IEFNT1NUUkFTID09PT09PT09ICovfVxyXG4gICAgICB7Y2F0ZWdvcmlhID09PSAnc2FtcGxlJyAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtsb2FkaW5nRnVsbCAmJiA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCB9fT5DYXJyZWdhbmRvIGJhc2XigKY8L2Rpdj59XHJcbiAgICAgICAgICB7ISFlcnJvckZ1bGwgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogJyNiMDAnLCBtYXJnaW5Cb3R0b206IDggfX0+RXJybzoge2Vycm9yRnVsbH08L2Rpdj59XHJcbiAgICAgICAgICB7d2l0aEludGVyZXN0ICYmIGxvYWRpbmdJbnRlcmVzdCAmJiA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCB9fT5DYXJyZWdhbmRvIGludGVydmFsbyBkZSBpbnRlcmVzc2XigKY8L2Rpdj59XHJcbiAgICAgICAgICB7d2l0aEludGVyZXN0ICYmICEhZXJyb3JJbnRlcmVzdCAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnI2IwMCcsIG1hcmdpbkJvdHRvbTogOCB9fT5FcnJvOiB7ZXJyb3JJbnRlcmVzdH08L2Rpdj59XHJcblxyXG4gICAgICAgICAge2hhc0FueUJhc2UgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNzcz17bGlzdFN0eWxlfT5cclxuICAgICAgICAgICAgICB7TElTVF9UWVBFUy5tYXAodCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwga2V5PXt0fSBjc3M9e2NoZWNrYm94TGFiZWxTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGlwb3NTZWwuaW5jbHVkZXModCl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUaXBvc1NlbChwcmV2ID0+IHByZXYuaW5jbHVkZXModCkgPyBwcmV2LmZpbHRlcih4ID0+IHggIT09IHQpIDogWy4uLnByZXYsIHRdKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGJsXCI+e3QuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0LnNsaWNlKDEpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiA9PT09PT09PSBVSTogTUlORVJBSVMgPT09PT09PT0gKi99XHJcbiAgICAgIHtjYXRlZ29yaWEgPT09ICdtaW5lcmFscycgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7LyogMSkgcsOhZGlvcyBwcmluY2lwYWlzIERSWC9RZW1zY2FuL1RvZGFzIChtYW50w6ltIGNvbW8gZXN0YXZhKSAqL31cclxuICAgICAgICAgIDxkaXYgY3NzPXttaW5lcmFsc0xpc3RTdHlsZX0+XHJcbiAgICAgICAgICAgIHtNSU5FUkFMX09QVElPTlMubWFwKG9wdCA9PiAoXHJcbiAgICAgICAgICAgICAgPGxhYmVsIGtleT17b3B0LnZhbHVlfSBjc3M9e2NoZWNrYm94TGFiZWxTdHlsZX0gZGF0YS1rZXk9e29wdC52YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm1pbmVyYWwtYW5hbGlzZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e21pbmVyYWxBbmFsaXNlID09PSBvcHQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRNaW5lcmFsQW5hbGlzZShvcHQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxibFwiPntvcHQubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAge2xvYWRpbmdNaW5lcmFpcyAmJiA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCB9fT5DYXJyZWdhbmRvIG1pbmVyYWlz4oCmPC9kaXY+fVxyXG4gICAgICAgICAgeyEhZXJyb3JNaW5lcmFpcyAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnI2IwMCcsIG1hcmdpbkJvdHRvbTogOCB9fT5FcnJvOiB7ZXJyb3JNaW5lcmFpc308L2Rpdj59XHJcblxyXG4gICAgICAgICAgey8qIDIpIFRPVEFMIChib2xoYXMpIOKAlCBwZXJtYW5lY2UgcHJpbWVpcm8gKi99XHJcbiAgICAgICAgICB7c3VtbWFyeU1pbmVyYWxzICYmIChcclxuICAgICAgICAgICAgPGRpdiBjc3M9e3N1bW1hcnlMaXN0U3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY3NzPXtsZWdlbmRIZWFkZXJTdHlsZX0+e3N1bW1hcnlNaW5lcmFscy50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICB7c3VtbWFyeU1pbmVyYWxzLnJvd3MubWFwKChyLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgbWluLXRvdGFsLSR7aWR4fWB9IGNzcz17c3VtbWFyeUl0ZW1TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY3NzPXtidWJibGVCb3hTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD17ci5zaXplfSBoZWlnaHQ9e3Iuc2l6ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXtyLnNpemUvMn0gY3k9e3Iuc2l6ZS8yfSByPXtyLnNpemUvMn0gZmlsbD17ci5jb3J9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjc3M9e3JhbmdlTGFiZWxTdHlsZX0+e3IubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7LyogMykgVFVETyBhYmFpeG8gZG8gVG90YWwgZW50cmEgbm8gU0NST0xMIChsaXN0YSArIHLDoWRpb3MgKyByYW1wYSArIGNoZWNrYm94ZXMpICovfVxyXG4gICAgICAgICAgPGRpdiBjc3M9e3Njcm9sbEFyZWFTdHlsZX0+XHJcbiAgICAgICAgICAgIHttaW5lcmFsQW5hbGlzZSAmJiAoXHJcbiAgICAgICAgICAgICAgPE1pbmVyYWxzTGlzdFBhbmVsXHJcbiAgICAgICAgICAgICAgICBtaW5lcmFsQW5hbGlzZT17bWluZXJhbEFuYWxpc2V9XHJcbiAgICAgICAgICAgICAgICBsaXN0YU1pbmVyYWlzPXtsaXN0YU1pbmVyYWlzfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZ01pbmVyYWlzPXtsb2FkaW5nTWluZXJhaXN9XHJcbiAgICAgICAgICAgICAgICBlcnJvck1pbmVyYWlzPXtlcnJvck1pbmVyYWlzfVxyXG4gICAgICAgICAgICAgICAgYnVzY2FNaW5lcmFsPXtidXNjYU1pbmVyYWx9XHJcbiAgICAgICAgICAgICAgICBzZXRCdXNjYU1pbmVyYWw9e3NldEJ1c2NhTWluZXJhbH1cclxuICAgICAgICAgICAgICAgIG1pbmVyYWxTZWxlY2lvbmFkbz17bWluZXJhbFNlbGVjaW9uYWRvfVxyXG4gICAgICAgICAgICAgICAgc2V0TWluZXJhbFNlbGVjaW9uYWRvPXtzZXRNaW5lcmFsU2VsZWNpb25hZG99XHJcbiAgICAgICAgICAgICAgICBhZ3J1cGFkb3I9e2FncnVwYWRvcn1cclxuICAgICAgICAgICAgICAgIHNldEFncnVwYWRvcj17c2V0QWdydXBhZG9yfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7bGVnZW5kQWdyICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT5cclxuICAgICAgICAgICAgICAgIDxHcmFkaWVudExlZ2VuZFxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17bGVnZW5kQWdyLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICBtaW49e2xlZ2VuZEFnci5taW59XHJcbiAgICAgICAgICAgICAgICAgIG1heD17bGVnZW5kQWdyLm1heH1cclxuICAgICAgICAgICAgICAgICAgaXNQZXJjZW50PXtsZWdlbmRBZ3IuaXNQZXJjZW50fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHsoc3VtbWFyeU1pbmVyYWxzIHx8IGxlZ2VuZEFnciB8fCBzaG93V2l0aEludGVyZXN0KSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDgsIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZWVlJywgcGFkZGluZ1RvcDogNiB9fT5cclxuICAgICAgICAgICAgICAgIHsoc3VtbWFyeU1pbmVyYWxzIHx8IGxlZ2VuZEFncikgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY3NzPXtmb290ZXJMYWJlbFN0eWxlfSB0aXRsZT1cIkV4aWJpciB0YW1iw6ltIGNsYXNzZXMgc2VtIHBvw6dvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Nob3dFbXB0eX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNob3dFbXB0eShlLnRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIEV4aWJpciBjbGFzc2VzIHZhemlhc1xyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7c2hvd1dpdGhJbnRlcmVzdCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjc3M9e2Zvb3RlckxhYmVsU3R5bGVJbnRlcmVzc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUXVhbmRvIG1hcmNhZG8sIGFwbGljYSBvIGZpbHRybyBkZSBJbnRlcnZhbG8gZGUgSW50ZXJlc3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17d2l0aEludGVyZXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50ID0gdHJ1ZTsgc2V0V2l0aEludGVyZXN0KGUudGFyZ2V0LmNoZWNrZWQpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICBJbnRlcnZhbG8gZGUgSW50ZXJlc3NlXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogPT09PT09PT0gU3Vtw6FyaW8gQU1PU1RSQVMgPT09PT09PT0gKi99XHJcbiAgICAgIHtjYXRlZ29yaWEgPT09ICdzYW1wbGUnICYmIHN1bW1hcnlHcm91cHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdiBjc3M9e3N1bW1hcnlMaXN0U3R5bGV9PlxyXG4gICAgICAgICAge3N1bW1hcnlHcm91cHMubWFwKGdyb3VwID0+IChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17Z3JvdXAudGlwb30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjc3M9e2xlZ2VuZEhlYWRlclN0eWxlfT5cclxuICAgICAgICAgICAgICAgIHsod2l0aEludGVyZXN0ID8gJ0ludGVydmFsbyBkZSBJbnRlcmVzc2UgLSAnIDogJycpfVxyXG4gICAgICAgICAgICAgICAge2dyb3VwLnRpcG8uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBncm91cC50aXBvLnNsaWNlKDEpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtncm91cC5yb3dzLm1hcCgociwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7Z3JvdXAudGlwb30tJHtpZHh9YH0gY3NzPXtzdW1tYXJ5SXRlbVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjc3M9e2J1YmJsZUJveFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPXtyLnNpemV9IGhlaWdodD17ci5zaXplfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9e3Iuc2l6ZSAvIDJ9IGN5PXtyLnNpemUgLyAyfSByPXtyLnNpemUgLyAyfSBmaWxsPXtyLmNvcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNzcz17cmFuZ2VMYWJlbFN0eWxlfT57ci5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50IHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX0gb25BY3RpdmVWaWV3Q2hhbmdlPXtzZXRKaW11TWFwVmlld30gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9