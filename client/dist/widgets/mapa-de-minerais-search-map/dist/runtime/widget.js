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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXBhLWRlLW1pbmVyYWlzLXNlYXJjaC1tYXAvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxlQUFlO0FBQ2YsOEJBQThCO0FBQ2E7QUFVM0MsTUFBTSxJQUFJLEdBQUcsOENBQUc7Ozs7OztDQU1mO0FBQ0QsTUFBTSxPQUFPLEdBQUcsOENBQUc7Ozs7Ozs7Ozs7Q0FVbEI7QUFDRCxNQUFNLFFBQVEsR0FBRyw4Q0FBRzs7O0NBR25CO0FBQ0QsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLDhDQUFHOztTQUUzQixHQUFHLEdBQUcsTUFBTTtDQUNwQjtBQUVELFNBQVMsUUFBUSxDQUFDLENBQVM7SUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sQ0FBQztJQUNwQixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUNmLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDdEQsT0FBTyxJQUFJLEdBQUcsQ0FBQztBQUNqQixDQUFDO0FBRWMsU0FBUyxjQUFjLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQVM7SUFDMUUsK0RBQStEO0lBQy9ELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUMzQixJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUFDLENBQUM7SUFDOUQsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFFNUMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkUsTUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsRixNQUFNLFNBQVMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBQyxZQUFZO0lBRW5ELE9BQU8sQ0FDTDtRQUNHLEtBQUssSUFBSSx3REFBSyxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsSUFBRyxLQUFLLENBQU87UUFDekUsd0RBQUssR0FBRyxFQUFFLElB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Q0FDRjtnQkFDTix5REFBTSxHQUFHLEVBQUUsZUFBZSxJQUFHLENBQUMsQ0FBQyxLQUFLLENBQVEsQ0FDeEMsQ0FDUCxDQUFDLENBQ2EsQ0FDbEIsQ0FBQyxDQUNFLENBQ1A7UUFFRCwrQ0FBQyw2REFBb0IsSUFBQyxjQUFjLEVBQUUsV0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxHQUFJLENBQ3BHLENBQ1A7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFwYS1kZS1taW5lcmFpcy1zZWFyY2gtbWFwL3NyYy9ydW50aW1lL0dyYWRpZW50TGVnZW5kLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFwYS1kZS1taW5lcmFpcy1zZWFyY2gtbWFwL3NyYy9ydW50aW1lL01pbmVyYWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXBhLWRlLW1pbmVyYWlzLXNlYXJjaC1tYXAvc3JjL3J1bnRpbWUvTWluZXJhbHNMaXN0UGFuZWwudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXBhLWRlLW1pbmVyYWlzLXNlYXJjaC1tYXAvc3JjL3J1bnRpbWUvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvcmVuZGVyZXJzL0NsYXNzQnJlYWtzUmVuZGVyZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvc3ltYm9scy9TaW1wbGVNYXJrZXJTeW1ib2xcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9MZWdlbmRcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcGEtZGUtbWluZXJhaXMtc2VhcmNoLW1hcC9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG4vKiogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cclxuaW1wb3J0IHsgUmVhY3QsIGpzeCwgY3NzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5cclxudHlwZSBUaWNrID0geyBsYWJlbDogc3RyaW5nIH1cclxudHlwZSBQcm9wcyA9IHtcclxuICB0aXRsZT86IHN0cmluZ1xyXG4gIG1pbjogbnVtYmVyXHJcbiAgbWF4OiBudW1iZXJcclxuICBpc1BlcmNlbnQ/OiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IHdyYXAgPSBjc3NgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0cHggMWZyO1xyXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xyXG4gIGdhcDogOHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuYFxyXG5jb25zdCByYW1wQm94ID0gY3NzYFxyXG4gIHdpZHRoOiAyNHB4OyBoZWlnaHQ6IDE1MHB4OyBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gdG9wLFxyXG4gICAgcmdiKDI0OSwyMzgsMjI1KSAwJSxcclxuICAgIHJnYigyNTEsMTkwLDEzMCkgMjUlLFxyXG4gICAgcmdiKDI1MywxNDIsNTUpIDUwJSxcclxuICAgIHJnYigyMzMsODUsNikgNzUlLFxyXG4gICAgcmdiKDE2NSw2MCwyKSAxMDAlXHJcbiAgKTtcclxuYFxyXG5jb25zdCB0aWNrc0JveCA9IGNzc2BcclxuICBoZWlnaHQ6IDE1MHB4OyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAuOXJlbTsgbGluZS1oZWlnaHQ6IDEuMTtcclxuYFxyXG5jb25zdCB0aWNrID0gKHBvc1BjdDogbnVtYmVyKSA9PiBjc3NgXHJcbiAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyByaWdodDogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRvcDogJHsxMDAgLSBwb3NQY3R9JTtcclxuYFxyXG5cclxuZnVuY3Rpb24gbmljZUNlaWwoeDogbnVtYmVyKSB7XHJcbiAgaWYgKHggPD0gMCkgcmV0dXJuIDBcclxuICBjb25zdCBwID0gTWF0aC5wb3coMTAsIE1hdGguZmxvb3IoTWF0aC5sb2cxMCh4KSkpXHJcbiAgY29uc3QgbSA9IHggLyBwXHJcbiAgY29uc3Qgc3RlcCA9IG0gPD0gMSA/IDEgOiBtIDw9IDIgPyAyIDogbSA8PSA1ID8gNSA6IDEwXHJcbiAgcmV0dXJuIHN0ZXAgKiBwXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyYWRpZW50TGVnZW5kKHsgdGl0bGUsIG1pbiwgbWF4LCBpc1BlcmNlbnQgfTogUHJvcHMpIHtcclxuICAvLyB0aWNrczogNSBuw612ZWlzICgwJSwgMjUlLCA1MCUsIDc1JSwgMTAwJSkg4oCUIGxhYmVscyDigJxib25pdGFz4oCdXHJcbiAgbGV0IGxvID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obWluLCBtYXgpKVxyXG4gIGxldCBoaSA9IE1hdGgubWF4KG1pbiwgbWF4KVxyXG4gIGlmIChpc1BlcmNlbnQpIHsgbG8gPSAwOyBoaSA9IE1hdGgubWluKDEwMCwgTWF0aC5tYXgoMCwgaGkpKSB9XHJcbiAgY29uc3QgaGlOaWNlID0gaXNQZXJjZW50ID8gaGkgOiBuaWNlQ2VpbChoaSlcclxuXHJcbiAgY29uc3QgdmFsdWVzID0gWzEsIDAuNzUsIDAuNSwgMC4yNSwgMF0ubWFwKGYgPT4gTWF0aC5yb3VuZChoaU5pY2UgKiBmKSlcclxuICBjb25zdCBsYWJlbHM6IFRpY2tbXSA9IHZhbHVlcy5tYXAodiA9PiAoeyBsYWJlbDogaXNQZXJjZW50ID8gYCR7dn0gJWAgOiBgJHt2fWAgfSkpXHJcbiAgY29uc3QgcG9zaXRpb25zID0gWzEwMCwgNzUsIDUwLCAyNSwgMF0gLy8gdG9wb+KGkmJhc2VcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt0aXRsZSAmJiA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luQm90dG9tOiA0IH19Pnt0aXRsZX08L2Rpdj59XHJcbiAgICAgIDxkaXYgY3NzPXt3cmFwfT5cclxuICAgICAgICA8ZGl2IGNzcz17cmFtcEJveH0gLz5cclxuICAgICAgICA8ZGl2IGNzcz17dGlja3NCb3h9PlxyXG4gICAgICAgICAge2xhYmVscy5tYXAoKHQsIGkpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNzcz17dGljayhwb3NpdGlvbnNbaV0pfT57dC5sYWJlbH08L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCIvKiogTWluZXJhbHMudHNcclxuICogTMOzZ2ljYSBkYSBEaXN0cmlidWnDp8OjbyBkZSBNaW5lcmFpczpcclxuICogIC0gQnVzY2EgZG8gQ09OVEFET1IgcG9yIGFuw6FsaXNlIChEUlgvUWVtc2Nhbi9Ub2RhcykgPT4gYmFzZSBlbSBjbHVzdGVycy9ib2xoYXMgdmlhIGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCXHJcbiAqICAtIEJ1c2NhIGRhIExJU1RBIGRlIG1pbmVyYWlzIChwYXJhIG8gc2VhcmNoKVxyXG4gKiAgLSBCdXNjYSBkb3MgQUdSVVBBRE9SRVMgKGFuYWxpc2V8bWVkaWF8bWF4aW1hKSBwYXJhIHVtIG1pbmVyYWwgc2VsZWNpb25hZG9cclxuICogIC0gQXBsaWNhw6fDo28gZGUgdmlzdWFsVmFyaWFibGVzIChjb2xvciByYW1wKSBOQSBNRVNNQSBDQU1BREEsIHBvciBjaW1hIGRvIGNsdXN0ZXIgYmFzZVxyXG4gKi9cclxuXHJcbmltcG9ydCB0eXBlIHsgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuLyoqIE9ww6fDtWVzIGRlIGFuw6FsaXNlIG1pbmVyYWwgcGFyYSBvcyByw6FkaW9zICovXHJcbmV4cG9ydCBjb25zdCBNSU5FUkFMX09QVElPTlMgPSBbXHJcbiAgeyB2YWx1ZTogJ0RSWC1UT1QnLCBsYWJlbDogJ0RSWC1Ub3RhbCcgfSxcclxuICB7IHZhbHVlOiAnRFJYLUFSRycsIGxhYmVsOiAnRFJYLUFyZ2lsb21pbmVyYWlzJyB9LFxyXG4gIHsgdmFsdWU6ICdNQVNTQScsICAgbGFiZWw6ICdRZW1zY2FuLU1hc3NhJyB9LFxyXG4gIHsgdmFsdWU6ICdBUkVBJywgICAgbGFiZWw6ICdRZW1zY2FuLcOBcmVhJyB9LFxyXG4gIHsgdmFsdWU6ICd0b2Rhc0FuYWxpc2VzJywgbGFiZWw6ICdUb2RhcyBhcyBBbsOhbGlzZXMnIH1cclxuXSBhcyBjb25zdFxyXG5cclxuZXhwb3J0IHR5cGUgTWluZXJhbFRpcG8gPSB0eXBlb2YgTUlORVJBTF9PUFRJT05TW251bWJlcl1bJ3ZhbHVlJ11cclxuZXhwb3J0IHR5cGUgQWdydXBhZG9yVGlwbyA9ICdhbmFsaXNlJyB8ICdtZWRpYScgfCAnbWF4aW1hJ1xyXG5cclxuLyoqIEl0ZW5zIGRvIGNvbnRhZG9yICh0b3RhbCBwb3IgcG/Dp28pICovXHJcbmV4cG9ydCB0eXBlIE1pbmVyYWxJdGVtID0ge1xyXG4gIGNvZGlnb1BvY286IG51bWJlclxyXG4gIHRvdGFsTWluZXJhaXM6IG51bWJlclxyXG59XHJcblxyXG4vKiogSXRlbSBkYSBsaXN0YSBkZSBtaW5lcmFpcyAocGFyYSBvIHNlYXJjaCkgKi9cclxuZXhwb3J0IHR5cGUgTWluZXJhbExpc3RhSXRlbSA9IHtcclxuICBub21lTWluZXJhbDogc3RyaW5nXHJcbiAgbm9tZVJlc3VtaWRvTWluZXJhbD86IHN0cmluZ1xyXG59XHJcblxyXG4vKiogSXRlbSBkZSByZXRvcm5vIGRvIGFncnVwYWRvciAqL1xyXG5leHBvcnQgdHlwZSBNaW5lcmFsQWdydXBhZG9ySXRlbSA9IHtcclxuICBjb2RpZ29Qb2NvOiBudW1iZXJcclxuICBub21lUmVzdW1pZG8/OiBzdHJpbmdcclxuICBxdEFuYWxpc2U6IG51bWJlclxyXG4gIHZhbG9yTWVkaW86IG51bWJlclxyXG4gIHZhbG9yTWF4aW1vOiBudW1iZXJcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PSBOb3JtYWxpemHDp8O1ZXMgPT09PT09PT09PT09PT09PT09PSAqL1xyXG5mdW5jdGlvbiBub3JtYWxpemVNaW5lcmFsQ29udGFkb3IocmF3OiBhbnlbXSk6IE1pbmVyYWxJdGVtW10ge1xyXG4gIHJldHVybiAoQXJyYXkuaXNBcnJheShyYXcpID8gcmF3IDogW10pXHJcbiAgICAubWFwKChyOiBhbnkpID0+ICh7XHJcbiAgICAgIGNvZGlnb1BvY286IE51bWJlcihyLmNvZGlnb1BvY28gPz8gci5QT0NPX0NEX1BPQ08gPz8gci5wb2NvID8/IHIuY29kaWdvID8/IDApLFxyXG4gICAgICB0b3RhbE1pbmVyYWlzOiBOdW1iZXIoci50b3RhbE1pbmVyYWlzID8/IHIudG90YWwgPz8gMClcclxuICAgIH0pKVxyXG4gICAgLmZpbHRlcih4ID0+ICEheC5jb2RpZ29Qb2NvKVxyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVNaW5lcmFsTGlzdGEocmF3OiBhbnlbXSk6IE1pbmVyYWxMaXN0YUl0ZW1bXSB7XHJcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5KHJhdykgPyByYXcgOiBbXSlcclxuICAgIC5tYXAoKHI6IGFueSkgPT4gKHtcclxuICAgICAgbm9tZU1pbmVyYWw6IFN0cmluZyhyLm5vbWVNaW5lcmFsID8/IHIubm9tZSA/PyByLm1pbmVyYWwgPz8gJycpLnRyaW0oKSxcclxuICAgICAgbm9tZVJlc3VtaWRvTWluZXJhbDogci5ub21lUmVzdW1pZG9NaW5lcmFsID8/IHIubm9tZVJlc3VtaWRvID8/IHVuZGVmaW5lZFxyXG4gICAgfSkpXHJcbiAgICAuZmlsdGVyKHggPT4gISF4Lm5vbWVNaW5lcmFsKVxyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVBZ3J1cGFkb3IocmF3OiBhbnlbXSk6IE1pbmVyYWxBZ3J1cGFkb3JJdGVtW10ge1xyXG4gIHJldHVybiAoQXJyYXkuaXNBcnJheShyYXcpID8gcmF3IDogW10pXHJcbiAgICAubWFwKChyOiBhbnkpID0+ICh7XHJcbiAgICAgIGNvZGlnb1BvY286IE51bWJlcihyLmNvZGlnb1BvY28gPz8gci5QT0NPX0NEX1BPQ08gPz8gci5wb2NvID8/IHIuY29kaWdvID8/IDApLFxyXG4gICAgICBub21lUmVzdW1pZG86IHIubm9tZVJlc3VtaWRvID8/IHIubm9tZVJlc3VtaWRvTWluZXJhbCA/PyB1bmRlZmluZWQsXHJcbiAgICAgIHF0QW5hbGlzZTogTnVtYmVyKHIucXRBbmFsaXNlID8/IHIudG90YWwgPz8gMCksXHJcbiAgICAgIHZhbG9yTWVkaW86IE51bWJlcihyLnZhbG9yTWVkaW8gPz8gci5tZWRpYSA/PyAwKSxcclxuICAgICAgdmFsb3JNYXhpbW86IE51bWJlcihyLnZhbG9yTWF4aW1vID8/IHIubWF4aW1vID8/IDApXHJcbiAgICB9KSlcclxuICAgIC5maWx0ZXIoeCA9PiAhIXguY29kaWdvUG9jbylcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PSBQb3N0TWVzc2FnZSBoZWxwZXJzID09PT09PT09PT09PT09PT09PT0gKi9cclxuZnVuY3Rpb24gcG9zdFZpYVBhcmVudDxUID0gYW55Pih0eXBlOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgb2tUeXBlOiBzdHJpbmcsIGVyclR5cGU6IHN0cmluZyk6IFByb21pc2U8VD4ge1xyXG4gIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFttaW5lcmFsc10gcG9zdFZpYVBhcmVudCAtPiAke3R5cGV9YClcclxuICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSBib2R5JywgYm9keSlcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcmVxSWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKVxyXG4gICAgbGV0IHRhcmdldE9yaWdpbiA9ICcqJ1xyXG4gICAgdHJ5IHsgaWYgKGRvY3VtZW50LnJlZmVycmVyKSB0YXJnZXRPcmlnaW4gPSBuZXcgVVJMKGRvY3VtZW50LnJlZmVycmVyKS5vcmlnaW4gfSBjYXRjaCB7fVxyXG4gICAgY29uc29sZS5sb2coJ1ttaW5lcmFsc10gdGFyZ2V0T3JpZ2luJywgdGFyZ2V0T3JpZ2luLCAncmVxSWQnLCByZXFJZClcclxuXHJcbiAgICBjb25zdCBvbk1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBkOiBhbnkgPSAoZXZlbnQgYXMgYW55KS5kYXRhIHx8IHt9XHJcbiAgICAgIGlmIChkLnJlcUlkICE9PSByZXFJZCkgcmV0dXJuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIHJlc3Bvc3RhIHJlY2ViaWRhJywgZC50eXBlLCBkKVxyXG4gICAgICBjbGVhclRpbWVvdXQodG8pIC8vIDw8PCBJTVBPUlRBTlRFXHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG5cclxuICAgICAgaWYgKGQudHlwZSA9PT0gb2tUeXBlKSB7XHJcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgICAgICAgcmVzb2x2ZShkLnBheWxvYWQgYXMgVClcclxuICAgICAgfSBlbHNlIGlmIChkLnR5cGUgPT09IGVyclR5cGUpIHtcclxuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgICAgICByZWplY3QobmV3IEVycm9yKGQubWVzc2FnZSB8fCAnRXJybyBubyBmZXRjaCB2aWEgcGFyZW50JykpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdbbWluZXJhbHNdIHRpcG8gaW5lc3BlcmFkbycsIGQudHlwZSlcclxuICAgICAgICByZWplY3QobmV3IEVycm9yKCdSZXNwb3N0YSBkZXNjb25oZWNpZGEgZG8gcGFpJykpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG5cclxuICAgIGNvbnN0IHRvID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSlcclxuICAgICAgY29uc29sZS53YXJuKCdbbWluZXJhbHNdIFRJTUVPVVQgYWd1YXJkYW5kbyByZXNwb3N0YSBkbyBwYWknLCB7IHR5cGUsIG9rVHlwZSwgZXJyVHlwZSwgcmVxSWQgfSlcclxuICAgICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1RpbWVvdXQgYWd1YXJkYW5kbyByZXNwb3N0YSBkbyBwYWkgKG1pbmVyYWlzKScpKVxyXG4gICAgfSwgMjAwMDApXHJcblxyXG4gICAgd2luZG93LnBhcmVudD8ucG9zdE1lc3NhZ2UoeyB0eXBlLCBib2R5LCByZXFJZCB9LCB0YXJnZXRPcmlnaW4pXHJcbiAgfSlcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PSBCb2RpZXMgRXhwbG9yYSA9PT09PT09PT09PT09PT09PT09ICovXHJcbmZ1bmN0aW9uIGJ1aWxkQm9keUNvbnRhZG9yKHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbywgZmFpeGFJbnRlcmVzc2U6IGJvb2xlYW4pIHtcclxuICBjb25zdCBwID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXHJcbiAgcC5zZXQoJ2hkU3lzJywgJ25vdmFpbnRjb25zJylcclxuICBwLnNldCgnaGRVQycsICdNYXBhJylcclxuICBwLnNldCgnaGRBY2FvJywgJ0NhcnJlZ2FyTWFwYURpc3RyaWJ1aWNhb01pbmVyYWlzQ29udGFkb3InKVxyXG4gIHAuc2V0KCdoZFNlc3Npb25GaWx0ZXInLCAndHJ1ZScpXHJcbiAgcC5zZXQoJ3RpcG9BbmFsaXNlJywgdGlwb0FuYWxpc2UpXHJcbiAgcC5zZXQoJ2ZhaXhhSW50ZXJlc3NlJywgU3RyaW5nKCEhZmFpeGFJbnRlcmVzc2UpKVxyXG4gIHJldHVybiBwLnRvU3RyaW5nKClcclxufVxyXG5mdW5jdGlvbiBidWlsZEJvZHlMaXN0YSh0aXBvQW5hbGlzZTogTWluZXJhbFRpcG8sIGZhaXhhSW50ZXJlc3NlOiBib29sZWFuKSB7XHJcbiAgY29uc3QgcCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG4gIHAuc2V0KCdoZFN5cycsICdub3ZhaW50Y29ucycpXHJcbiAgcC5zZXQoJ2hkVUMnLCAnTWFwYScpXHJcbiAgcC5zZXQoJ2hkQWNhbycsICdDYXJyZWdhck1hcGFEaXN0cmlidWljYW9NaW5lcmFpc0xpc3RhJylcclxuICBwLnNldCgnaGRTZXNzaW9uRmlsdGVyJywgJ3RydWUnKVxyXG4gIHAuc2V0KCd0aXBvQW5hbGlzZScsIHRpcG9BbmFsaXNlKVxyXG4gIHAuc2V0KCdmYWl4YUludGVyZXNzZScsIFN0cmluZyghIWZhaXhhSW50ZXJlc3NlKSlcclxuICByZXR1cm4gcC50b1N0cmluZygpXHJcbn1cclxuZnVuY3Rpb24gYnVpbGRCb2R5QWdydXBhZG9yKHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbywgbm9tZVJlc3VtaWRvTWluZXJhbDogc3RyaW5nIHwgdW5kZWZpbmVkLCBmYWl4YUludGVyZXNzZTogYm9vbGVhbikge1xyXG4gIGNvbnN0IHAgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcclxuICBwLnNldCgnaGRTeXMnLCAnbm92YWludGNvbnMnKVxyXG4gIHAuc2V0KCdoZFVDJywgJ01hcGEnKVxyXG4gIHAuc2V0KCdoZEFjYW8nLCAnQ2FycmVnYXJNYXBhRGlzdHJpYnVpY2FvTWluZXJhaXNBZ3J1cGFkb3InKVxyXG4gIHAuc2V0KCdoZFNlc3Npb25GaWx0ZXInLCAndHJ1ZScpXHJcbiAgcC5zZXQoJ3RpcG9BbmFsaXNlJywgdGlwb0FuYWxpc2UpXHJcbiAgaWYgKG5vbWVSZXN1bWlkb01pbmVyYWwpIHAuc2V0KCdub21lUmVzdW1pZG9NaW5lcmFsJywgbm9tZVJlc3VtaWRvTWluZXJhbClcclxuICBwLnNldCgnZmFpeGFJbnRlcmVzc2UnLCBTdHJpbmcoISFmYWl4YUludGVyZXNzZSkpXHJcbiAgcmV0dXJuIHAudG9TdHJpbmcoKVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09IEZldGNoIEFQSXMgPT09PT09PT09PT09PT09PT09PSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpc0NvbnRhZG9yKFxyXG4gIHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbyxcclxuICBmYWl4YUludGVyZXNzZTogYm9vbGVhblxyXG4pOiBQcm9taXNlPE1pbmVyYWxJdGVtW10+IHtcclxuICBjb25zdCBib2R5ID0gYnVpbGRCb2R5Q29udGFkb3IodGlwb0FuYWxpc2UsIGZhaXhhSW50ZXJlc3NlKVxyXG4gIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBwb3N0VmlhUGFyZW50PGFueVtdPignZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpcycsIGJvZHksICdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzOm9rJywgJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXM6ZXJyJylcclxuICBjb25zdCBub3JtID0gbm9ybWFsaXplTWluZXJhbENvbnRhZG9yKHBheWxvYWQpXHJcbiAgY29uc29sZS5sb2coJ1ttaW5lcmFsc10gY29udGFkb3Igbm9ybWFsaXphZG8nLCBub3JtLmxlbmd0aCwgbm9ybS5zbGljZSgwLCAxMCkpXHJcbiAgcmV0dXJuIG5vcm1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoTWluZXJhbExpc3RhKFxyXG4gIHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbyxcclxuICBmYWl4YUludGVyZXNzZTogYm9vbGVhblxyXG4pOiBQcm9taXNlPE1pbmVyYWxMaXN0YUl0ZW1bXT4ge1xyXG4gIGNvbnN0IGJvZHkgPSBidWlsZEJvZHlMaXN0YSh0aXBvQW5hbGlzZSwgZmFpeGFJbnRlcmVzc2UpXHJcbiAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHBvc3RWaWFQYXJlbnQ8YW55W10+KCdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzJywgYm9keSwgJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXM6b2snLCAnZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpczplcnInKVxyXG4gIGNvbnN0IG5vcm0gPSBub3JtYWxpemVNaW5lcmFsTGlzdGEocGF5bG9hZClcclxuICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSBsaXN0YSBub3JtYWxpemFkYScsIG5vcm0ubGVuZ3RoLCBub3JtLnNsaWNlKDAsIDEwKSlcclxuICByZXR1cm4gbm9ybVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNaW5lcmFsQWdydXBhZG9yKFxyXG4gIHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbyxcclxuICBub21lUmVzdW1pZG9NaW5lcmFsOiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgZmFpeGFJbnRlcmVzc2U6IGJvb2xlYW5cclxuKTogUHJvbWlzZTxNaW5lcmFsQWdydXBhZG9ySXRlbVtdPiB7XHJcbiAgY29uc3QgYm9keSA9IGJ1aWxkQm9keUFncnVwYWRvcih0aXBvQW5hbGlzZSwgbm9tZVJlc3VtaWRvTWluZXJhbCwgZmFpeGFJbnRlcmVzc2UpXHJcbiAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHBvc3RWaWFQYXJlbnQ8YW55W10+KCdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzJywgYm9keSwgJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXM6b2snLCAnZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpczplcnInKVxyXG4gIGNvbnN0IG5vcm0gPSBub3JtYWxpemVBZ3J1cGFkb3IocGF5bG9hZClcclxuICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSBhZ3J1cGFkb3Igbm9ybWFsaXphZG8nLCBub3JtLmxlbmd0aCwgbm9ybS5zbGljZSgwLCAxMCkpXHJcbiAgcmV0dXJuIG5vcm1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PSBSZW5kZXIgaGVscGVycyA9PT09PT09PT09PT09PT09PT09ICovXHJcbmNvbnN0IGxheWVySWRGb3IgPSAodGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvKSA9PiBgbWluZXJhaXNfJHtTdHJpbmcodGlwb0FuYWxpc2UpLnRvTG93ZXJDYXNlKCl9YFxyXG5jb25zdCBsZWdlbmRJZEZvciA9ICh0aXBvQW5hbGlzZTogTWluZXJhbFRpcG8pID0+IGBsZ2RfJHtsYXllcklkRm9yKHRpcG9BbmFsaXNlKX1gXHJcblxyXG5mdW5jdGlvbiBkaXNhYmxlQ2x1c3Rlck51bWJlcnMobHlyOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgaWYgKCFseXIpIHJldHVyblxyXG4gICAgaWYgKGx5ci5mZWF0dXJlUmVkdWN0aW9uICYmIGx5ci5mZWF0dXJlUmVkdWN0aW9uLnR5cGUgPT09ICdjbHVzdGVyJykge1xyXG4gICAgICBseXIuZmVhdHVyZVJlZHVjdGlvbiA9IHsgLi4ubHlyLmZlYXR1cmVSZWR1Y3Rpb24sIGxhYmVsc1Zpc2libGU6IGZhbHNlIH1cclxuICAgIH1cclxuICAgIGlmICgnbGFiZWxzVmlzaWJsZScgaW4gbHlyKSAobHlyIGFzIGFueSkubGFiZWxzVmlzaWJsZSA9IGZhbHNlXHJcbiAgICBpZiAoJ2xhYmVsaW5nSW5mbycgaW4gbHlyKSAobHlyIGFzIGFueSkubGFiZWxpbmdJbmZvID0gW11cclxuICAgIGlmIChBcnJheS5pc0FycmF5KChseXIgYXMgYW55KS5zdWJsYXllcnMpKSAobHlyIGFzIGFueSkuc3VibGF5ZXJzLmZvckVhY2goKHNsOiBhbnkpID0+IGRpc2FibGVDbHVzdGVyTnVtYmVycyhzbCkpXHJcbiAgfSBjYXRjaCB7fVxyXG59XHJcblxyXG4vKiogRGVzZW5oYSBhIGJhc2UgKGNvbnRhZG9yKSBlbSBjbHVzdGVycy9ib2xoYXMsIGNvbSB0w610dWxvIGNvbmZvcm1lIGFuw6FsaXNlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZXNlbmhhckRpc3RyaWJ1aWNhb01pbmVyYWlzKFxyXG4gIGppbXVNYXBWaWV3OiBKaW11TWFwVmlldyxcclxuICBkYWRvczogTWluZXJhbEl0ZW1bXSxcclxuICB0aXBvQW5hbGlzZTogTWluZXJhbFRpcG8sXHJcbiAgd2l0aEludGVyZXN0OiBib29sZWFuXHJcbikge1xyXG4gIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJ1ttaW5lcmFsc10gZGVzZW5oYXJEaXN0cmlidWljYW9NaW5lcmFpcycpXHJcbiAgY29uc29sZS5sb2coJ1ttaW5lcmFsc10gdGlwb0FuYWxpc2UnLCB0aXBvQW5hbGlzZSwgJ3dpdGhJbnRlcmVzdCcsIHdpdGhJbnRlcmVzdCwgJ24gZGFkb3MnLCBkYWRvcz8ubGVuZ3RoKVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHZpZXcgfSA9IGppbXVNYXBWaWV3XHJcbiAgICBpZiAoIXZpZXcgfHwgIUFycmF5LmlzQXJyYXkoZGFkb3MpIHx8IGRhZG9zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ1ttaW5lcmFsc10gdmlldyBpbmV4aXN0ZW50ZSBvdSBkYWRvcyB2YXppb3MnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IHBvbnRvcyA9IGRhZG9zLm1hcChkID0+ICh7IGNvZGlnb1BvY286IGQuY29kaWdvUG9jbywgdG90YWw6IGQudG90YWxNaW5lcmFpcyB9KSlcclxuICAgIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIGFtb3N0cmEgZG9zIHBvbnRvcycsIHBvbnRvcy5zbGljZSgwLCAxMCkpXHJcblxyXG4gICAgY29uc3QgaWRDYW1hZGEgPSBsYXllcklkRm9yKHRpcG9BbmFsaXNlKVxyXG4gICAgY29uc3QgaWRMZWdlbmRhID0gbGVnZW5kSWRGb3IodGlwb0FuYWxpc2UpXHJcbiAgICBnZXJhck1hcGFEaXN0cmlidWljYW9FQih7XHJcbiAgICAgIGppbXVNYXBWaWV3LCBkYWRvczogcG9udG9zLCBjb2xvckZpbGw6ICdyZ2IoMjUzLDE0Miw1NSknLFxyXG4gICAgICBpZENhbWFkYSwgaWRMZWdlbmRhLFxyXG4gICAgICB0aXRsZUxlZ2VuZGE6ICh3aXRoSW50ZXJlc3QgPyAnSW50ZXJ2YWxvIGRlIEludGVyZXNzZSAtICcgOiAnJykgKyBsYWJlbEZyb21WYWx1ZSh0aXBvQW5hbGlzZSksXHJcbiAgICAgIHdpdGhJbnRlcmVzdFxyXG4gICAgfSBhcyBhbnkpXHJcblxyXG4gICAgY29uc3QgbHlyID0gdmlldy5tYXAuZmluZExheWVyQnlJZChpZENhbWFkYSkgYXMgYW55XHJcbiAgICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSBsYXllciBjcmlhZGE/JywgISFseXIsIGx5cilcclxuICAgIGlmIChseXIpIGRpc2FibGVDbHVzdGVyTnVtYmVycyhseXIpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW21pbmVyYWxzXSBFUlJPIGRlc2VuaGFyRGlzdHJpYnVpY2FvTWluZXJhaXMnLCBlKVxyXG4gIH0gZmluYWxseSB7XHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICB9XHJcbn1cclxuXHJcbi8qKiBBcGxpY2EgdmlzdWFsIHZhcmlhYmxlIGRlIENPUiBwb3IgY2ltYSBkYSBjYW1hZGEgYmFzZSAoc2VtIG1leGVyIG5vIHRhbWFuaG8vY2x1c3RlcikgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwbGljYXJDb2xvcml6YWNhb1BvckFncnVwYWRvcihcclxuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXcsXHJcbiAgdGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvLFxyXG4gIGRhZG9zQWdydXBhZG9yZXM6IE1pbmVyYWxBZ3J1cGFkb3JJdGVtW10sXHJcbiAgYWdydXBhZG9yOiBBZ3J1cGFkb3JUaXBvXHJcbikge1xyXG4gIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJ1ttaW5lcmFsc10gYXBsaWNhckNvbG9yaXphY2FvUG9yQWdydXBhZG9yJylcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyB2aWV3IH0gPSBqaW11TWFwVmlld1xyXG4gICAgY29uc3QgbGF5ZXIgPSB2aWV3Py5tYXA/LmZpbmRMYXllckJ5SWQobGF5ZXJJZEZvcih0aXBvQW5hbGlzZSkpIGFzIGFueVxyXG4gICAgaWYgKCFsYXllcikgeyBjb25zb2xlLndhcm4oJ1ttaW5lcmFsc10gY2FtYWRhIGJhc2UgbsOjbyBlbmNvbnRyYWRhJyk7IHJldHVybiB9XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGFkb3NBZ3J1cGFkb3JlcykgfHwgZGFkb3NBZ3J1cGFkb3Jlcy5sZW5ndGggPT09IDApIHsgY29uc29sZS53YXJuKCdbbWluZXJhbHNdIGFncnVwYWRvcmVzIHZhemlvcycpOyByZXR1cm4gfVxyXG5cclxuICAgIC8vIMOtbmRpY2UgcG9yIHBvw6dvXHJcbiAgICBjb25zdCBieVBvY28gPSBuZXcgTWFwPG51bWJlciwgTWluZXJhbEFncnVwYWRvckl0ZW0+KClcclxuICAgIGZvciAoY29uc3QgaXQgb2YgZGFkb3NBZ3J1cGFkb3JlcykgYnlQb2NvLnNldChOdW1iZXIoaXQuY29kaWdvUG9jbyksIGl0KVxyXG5cclxuICAgIC8vIGRlZmluaW1vcyB1bSBjYW1wbyBcIm1kX3ZhbFwiIHBhcmEgbyB2aXN1YWwgdmFyaWFibGUgZGUgY29yXHJcbiAgICBjb25zdCBmaWVsZFZhciA9ICdtZF92YWwnXHJcblxyXG4gICAgLy8gMSkgQXR1YWxpemEgYXRyaWJ1dG9zIHBvciBwb8OnbyBjb20gbyB2YWxvciBkbyBhZ3J1cGFkb3IgZXNjb2xoaWRvXHJcbiAgICBjb25zb2xlLnRpbWUoJ1ttaW5lcmFsc10gcXVlcnlGZWF0dXJlcyBiYXNlJylcclxuICAgIGNvbnN0IGZlYXR1cmVTZXQgPSBhd2FpdCBsYXllci5xdWVyeUZlYXR1cmVzKHsgd2hlcmU6ICcxPTEnLCByZXR1cm5HZW9tZXRyeTogdHJ1ZSwgb3V0RmllbGRzOiBbJyonXSB9KVxyXG4gICAgY29uc29sZS50aW1lRW5kKCdbbWluZXJhbHNdIHF1ZXJ5RmVhdHVyZXMgYmFzZScpXHJcbiAgICBjb25zdCB1cGRhdGVzOiBhbnlbXSA9IFtdXHJcbiAgICBsZXQgbWluVmFsID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXHJcbiAgICBsZXQgbWF4VmFsID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZXHJcblxyXG4gICAgZm9yIChjb25zdCBmIG9mIGZlYXR1cmVTZXQuZmVhdHVyZXMpIHtcclxuICAgICAgY29uc3QgY29kaWdvID0gTnVtYmVyKFxyXG4gICAgICAgIGYuYXR0cmlidXRlcz8uUE9DT19DRF9QT0NPID8/XHJcbiAgICAgICAgZi5hdHRyaWJ1dGVzPy5jb2RpZ29Qb2NvID8/XHJcbiAgICAgICAgZi5hdHRyaWJ1dGVzPy5wb2NvID8/XHJcbiAgICAgICAgZi5hdHRyaWJ1dGVzPy5jb2RpZ29cclxuICAgICAgKVxyXG4gICAgICBjb25zdCBhZyA9IGJ5UG9jby5nZXQoY29kaWdvKVxyXG4gICAgICBsZXQgdmFsID0gMFxyXG4gICAgICBpZiAoYWcpIHtcclxuICAgICAgICBpZiAoYWdydXBhZG9yID09PSAnYW5hbGlzZScpIHZhbCA9IGFnLnF0QW5hbGlzZVxyXG4gICAgICAgIGVsc2UgaWYgKGFncnVwYWRvciA9PT0gJ21lZGlhJykgdmFsID0gYWcudmFsb3JNZWRpb1xyXG4gICAgICAgIGVsc2UgdmFsID0gYWcudmFsb3JNYXhpbW9cclxuICAgICAgfVxyXG4gICAgICBmLmF0dHJpYnV0ZXNbZmllbGRWYXJdID0gdmFsXHJcbiAgICAgIG1pblZhbCA9IE1hdGgubWluKG1pblZhbCwgdmFsKVxyXG4gICAgICBtYXhWYWwgPSBNYXRoLm1heChtYXhWYWwsIHZhbClcclxuICAgICAgdXBkYXRlcy5wdXNoKGYpXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSBpbnRlcnZhbG8gdmFsb3JlcycsIHsgbWluVmFsLCBtYXhWYWwsIHVwZGF0ZXM6IHVwZGF0ZXMubGVuZ3RoIH0pXHJcblxyXG4gICAgaWYgKHVwZGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zb2xlLnRpbWUoJ1ttaW5lcmFsc10gYXBwbHlFZGl0cycpXHJcbiAgICAgIGF3YWl0IGxheWVyLmFwcGx5RWRpdHMoeyB1cGRhdGVGZWF0dXJlczogdXBkYXRlcyB9KVxyXG4gICAgICBjb25zb2xlLnRpbWVFbmQoJ1ttaW5lcmFsc10gYXBwbHlFZGl0cycpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gMikgTW9udGEgb3Mgc3RvcHNcclxuICAgIGNvbnN0IGRpZmYgPSBtYXhWYWwgLSBtaW5WYWxcclxuICAgIGNvbnN0IGJ1aWxkTGFiZWwgPSAodjogbnVtYmVyKSA9PiBhZ3J1cGFkb3IgPT09ICdhbmFsaXNlJyA/IGAke3Z9YCA6IGAke3Z9ICVgXHJcblxyXG4gICAgbGV0IHN0b3BzOiBBcnJheTx7IHZhbHVlOiBudW1iZXI7IGNvbG9yOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfT5cclxuICAgIGlmIChkaWZmIDwgMykge1xyXG4gICAgICBzdG9wcyA9IFtcclxuICAgICAgICB7IHZhbHVlOiBtaW5WYWwsIGNvbG9yOiAncmdiKDI0OSwyMzgsMjI1KScsIGxhYmVsOiBidWlsZExhYmVsKG1pblZhbCkgfSxcclxuICAgICAgICB7IHZhbHVlOiBtYXhWYWwsIGNvbG9yOiAncmdiKDE2NSw2MCwyKScsICAgbGFiZWw6IGJ1aWxkTGFiZWwobWF4VmFsKSB9XHJcbiAgICAgIF1cclxuICAgIH0gZWxzZSBpZiAoZGlmZiA8IDUpIHtcclxuICAgICAgY29uc3Qgc3RlcCA9IE1hdGgucm91bmQoZGlmZiAvIDQpIHx8IDFcclxuICAgICAgc3RvcHMgPSBbXHJcbiAgICAgICAgeyB2YWx1ZTogbWluVmFsLCAgICAgICAgICAgIGNvbG9yOiAncmdiKDI0OSwyMzgsMjI1KScsIGxhYmVsOiBidWlsZExhYmVsKG1pblZhbCkgfSxcclxuICAgICAgICB7IHZhbHVlOiBtaW5WYWwgKyAyICogc3RlcCwgY29sb3I6ICdyZ2IoMjUzLDE0Miw1NSknLCAgbGFiZWw6IGJ1aWxkTGFiZWwobWluVmFsICsgMiAqIHN0ZXApIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogbWF4VmFsLCAgICAgICAgICAgIGNvbG9yOiAncmdiKDE2NSw2MCwyKScsICAgIGxhYmVsOiBidWlsZExhYmVsKG1heFZhbCkgfVxyXG4gICAgICBdXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBzdGVwID0gTWF0aC5yb3VuZChkaWZmIC8gNCkgfHwgMVxyXG4gICAgICBzdG9wcyA9IFtcclxuICAgICAgICB7IHZhbHVlOiBtaW5WYWwsICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjQ5LDIzOCwyMjUpJywgbGFiZWw6IGJ1aWxkTGFiZWwobWluVmFsKSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IG1pblZhbCArIDEgKiBzdGVwLCBjb2xvcjogJ3JnYigyNTEsMTkwLDEzMCknLCBsYWJlbDogYnVpbGRMYWJlbChtaW5WYWwgKyAxICogc3RlcCkgfSxcclxuICAgICAgICB7IHZhbHVlOiBtaW5WYWwgKyAyICogc3RlcCwgY29sb3I6ICdyZ2IoMjUzLDE0Miw1NSknLCAgbGFiZWw6IGJ1aWxkTGFiZWwobWluVmFsICsgMiAqIHN0ZXApIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogbWF4VmFsIC0gMSAqIHN0ZXAsIGNvbG9yOiAncmdiKDIzMyw4NSw2KScsICAgIGxhYmVsOiBidWlsZExhYmVsKG1heFZhbCAtIDEgKiBzdGVwKSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IG1heFZhbCwgICAgICAgICAgICBjb2xvcjogJ3JnYigxNjUsNjAsMiknLCAgICBsYWJlbDogYnVpbGRMYWJlbChtYXhWYWwpIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDMpIEFwbGljYSB2aXN1YWwgdmFyaWFibGUgZGUgY29yXHJcbiAgICBjb25zdCByZW5kZXJlciA9IGxheWVyLnJlbmRlcmVyPy5jbG9uZSA/IGxheWVyLnJlbmRlcmVyLmNsb25lKCkgOiBsYXllci5yZW5kZXJlclxyXG4gICAgY29uc3QgY29sb3JWaXNWYXIgPSB7XHJcbiAgICAgIHR5cGU6ICdjb2xvcicsXHJcbiAgICAgIGZpZWxkOiBmaWVsZFZhcixcclxuICAgICAgbGVnZW5kT3B0aW9uczogeyB0aXRsZTogJycgfSxcclxuICAgICAgc3RvcHNcclxuICAgIH0gYXMgYW55XHJcbiAgICByZW5kZXJlci52aXN1YWxWYXJpYWJsZXMgPSBbY29sb3JWaXNWYXJdXHJcbiAgICBsYXllci5yZW5kZXJlciA9IHJlbmRlcmVyXHJcbiAgICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSB2aXN1YWxWYXJpYWJsZXMgYXBsaWNhZGFzJylcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW21pbmVyYWxzXSBFUlJPIGFwbGljYXJDb2xvcml6YWNhb1BvckFncnVwYWRvcicsIGUpXHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gIH1cclxufVxyXG5cclxuLyoqIExhYmVsIGh1bWFubyBwYXJhIG8gdMOtdHVsbyBkYSBsZWdlbmRhL2Jhc2UgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRnJvbVZhbHVlKHY6IE1pbmVyYWxUaXBvKSB7XHJcbiAgY29uc3QgZiA9IE1JTkVSQUxfT1BUSU9OUy5maW5kKG8gPT4gby52YWx1ZSA9PT0gdilcclxuICByZXR1cm4gZj8ubGFiZWwgPz8gU3RyaW5nKHYpXHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbi8qKiBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCAqL1xyXG5pbXBvcnQgeyBSZWFjdCwganN4LCBjc3MgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB0eXBlIHsgTWluZXJhbExpc3RhSXRlbSwgTWluZXJhbFRpcG8gfSBmcm9tICcuL01pbmVyYWxzJ1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBtaW5lcmFsQW5hbGlzZTogTWluZXJhbFRpcG8gfCAnJyAgICAgICAgICAgIC8vIERSWC1UT1QgfCBEUlgtQVJHIHwgTUFTU0EgfCBBUkVBIHwgdG9kYXNBbmFsaXNlc1xyXG4gIGxpc3RhTWluZXJhaXM6IE1pbmVyYWxMaXN0YUl0ZW1bXVxyXG4gIGxvYWRpbmdNaW5lcmFpczogYm9vbGVhblxyXG4gIGVycm9yTWluZXJhaXM6IHN0cmluZ1xyXG5cclxuICBidXNjYU1pbmVyYWw6IHN0cmluZ1xyXG4gIHNldEJ1c2NhTWluZXJhbDogKHY6IHN0cmluZykgPT4gdm9pZFxyXG4gIG1pbmVyYWxTZWxlY2lvbmFkbzogTWluZXJhbExpc3RhSXRlbSB8IG51bGxcclxuICBzZXRNaW5lcmFsU2VsZWNpb25hZG86IChtOiBNaW5lcmFsTGlzdGFJdGVtIHwgbnVsbCkgPT4gdm9pZFxyXG5cclxuICBhZ3J1cGFkb3I6ICdhbmFsaXNlJyB8ICdtZWRpYScgfCAnbWF4aW1hJyB8ICcnXHJcbiAgc2V0QWdydXBhZG9yOiAodjogJ2FuYWxpc2UnIHwgJ21lZGlhJyB8ICdtYXhpbWEnIHwgJycpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgYm94U3R5bGUgPSBjc3NgbWFyZ2luLXRvcDo4cHg7Ym9yZGVyOjFweCBzb2xpZCAjZWVlO2JvcmRlci1yYWRpdXM6NnB4O2JhY2tncm91bmQ6I2ZmZjtwYWRkaW5nOjhweDtgXHJcbmNvbnN0IGhlYWRlciA9IGNzc2Bmb250LXdlaWdodDo2MDA7bWFyZ2luOjRweCAwIDZweDtgXHJcbmNvbnN0IHNlYXJjaElucHV0ID0gY3NzYFxyXG4gIHdpZHRoOjEwMCU7Ym9yZGVyOjFweCBzb2xpZCAjY2ZjZmNmO2JvcmRlci1yYWRpdXM6NHB4O3BhZGRpbmc6NnB4IDhweDtmb250LXNpemU6Ljk1cmVtO291dGxpbmU6bm9uZTtcclxuICAmOmZvY3Vze2JvcmRlci1jb2xvcjojOTk5O31cclxuYFxyXG5jb25zdCBsaXN0Qm94ID0gY3NzYFxyXG4gIG1hcmdpbi10b3A6NnB4O2JvcmRlcjoxcHggc29saWQgI2VlZTtib3JkZXItcmFkaXVzOjZweDttYXgtaGVpZ2h0OjE4MHB4O292ZXJmbG93OmF1dG87cGFkZGluZzo0cHg7YmFja2dyb3VuZDojZmFmYWZhO1xyXG5gXHJcbmNvbnN0IGxpc3RJdGVtID0gY3NzYFxyXG4gIHBhZGRpbmc6NnB4IDhweDtib3JkZXItcmFkaXVzOjRweDtjdXJzb3I6cG9pbnRlcjt1c2VyLXNlbGVjdDpub25lO1xyXG4gICY6aG92ZXJ7YmFja2dyb3VuZDojZjBmMGYwO31cclxuICAmLmFjdGl2ZXtiYWNrZ3JvdW5kOiNlOGYwZmU7Ym9yZGVyOjFweCBzb2xpZCAjYzlkZWZkO31cclxuYFxyXG5jb25zdCByYWRpb3NXcmFwcGVyID0gY3NzYFxyXG4gIG1hcmdpbi10b3A6OHB4O3BhZGRpbmc6NnB4O2JvcmRlcjoxcHggc29saWQgI2VlZTtib3JkZXItcmFkaXVzOjZweDtiYWNrZ3JvdW5kOiNmYWZhZmE7XHJcbiAgZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMyxtaW5tYXgoMTAwcHgsMWZyKSk7Z2FwOjZweDtcclxuYFxyXG5jb25zdCByYWRpb0xhYmVsID0gY3NzYFxyXG4gIGRpc3BsYXk6aW5saW5lLWdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOmF1dG8gMWZyO2FsaWduLWl0ZW1zOmNlbnRlcjtjb2x1bW4tZ2FwOjZweDtmb250LXNpemU6Ljk1cmVtO2N1cnNvcjpwb2ludGVyO1xyXG4gIGlucHV0e3dpZHRoOjE0cHg7aGVpZ2h0OjE0cHg7fVxyXG5gXHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemUoczogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIChzfHwnJykubm9ybWFsaXplKCdORkQnKS5yZXBsYWNlKC9cXHB7RGlhY3JpdGljfS9ndSwnJykudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWluZXJhbHNMaXN0UGFuZWwoe1xyXG4gIG1pbmVyYWxBbmFsaXNlLCBsaXN0YU1pbmVyYWlzLCBsb2FkaW5nTWluZXJhaXMsIGVycm9yTWluZXJhaXMsXHJcbiAgYnVzY2FNaW5lcmFsLCBzZXRCdXNjYU1pbmVyYWwsXHJcbiAgbWluZXJhbFNlbGVjaW9uYWRvLCBzZXRNaW5lcmFsU2VsZWNpb25hZG8sXHJcbiAgYWdydXBhZG9yLCBzZXRBZ3J1cGFkb3JcclxufTogUHJvcHMpIHtcclxuICAvLyDirIfvuI8gTk9WTzogY29udHJvbGEgYWJlcnR1cmEgZGEgbGlzdGEgcXVhbmRvIG8gaW5wdXQgZ2FuaGEgZm9jby9jbGlxdWVcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgcSA9IG5vcm1hbGl6ZShidXNjYU1pbmVyYWwpXHJcbiAgLy8g4qyH77iPIE1VRE9VOiBxdWFuZG8gcSB2YXppbywgbGlzdGEgY29tcGxldGE7IHF1YW5kbyBow6EgcSwgZmlsdHJhXHJcbiAgY29uc3QgbGlzdGFGaWx0cmFkYSA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiAobGlzdGFNaW5lcmFpcyB8fCBbXSkuZmlsdGVyKG0gPT4gIXEgfHwgbm9ybWFsaXplKG0ubm9tZU1pbmVyYWwpLmluY2x1ZGVzKHEpKSxcclxuICAgIFtsaXN0YU1pbmVyYWlzLCBxXVxyXG4gIClcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWROYW1lID0gbWluZXJhbFNlbGVjaW9uYWRvPy5ub21lTWluZXJhbCB8fCAnJ1xyXG4gIGNvbnN0IGRpc2FibGVkQWxsID0gIW1pbmVyYWxBbmFsaXNlXHJcblxyXG4gIGNvbnN0IGhhbmRsZVBpY2sgPSAobTogTWluZXJhbExpc3RhSXRlbSkgPT4ge1xyXG4gICAgc2V0TWluZXJhbFNlbGVjaW9uYWRvKG0pXHJcbiAgICBzZXRCdXNjYU1pbmVyYWwobS5ub21lTWluZXJhbClcclxuICAgIHNldE9wZW4oZmFsc2UpIC8vIOKshe+4jyBmZWNoYSBhcMOzcyBlc2NvbGhlclxyXG4gIH1cclxuXHJcbiAgLy8gUGFyYSBuw6NvIGZlY2hhciBhIGxpc3RhIGFudGVzIGRvIGNsaXF1ZSBubyBpdGVtIChvcmRlbSBibHVyL2NsaWNrIGRvIGJyb3dzZXIpXHJcbiAgY29uc3QgZGVsYXllZENsb3NlID0gKCkgPT4gc2V0VGltZW91dCgoKSA9PiBzZXRPcGVuKGZhbHNlKSwgMTIwKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e2JveFN0eWxlfSBhcmlhLWxhYmVsPVwibGlzdGFnZW0tZGUtbWluZXJhaXNcIj5cclxuICAgICAgPGRpdiBjc3M9e2hlYWRlcn0+TGlzdGFyIG9zIG1pbmVyYWlzPC9kaXY+XHJcblxyXG4gICAgICB7Lyog4qyH77iPIGFicmUgYSBsaXN0YSBhbyBmb2Nhci9jbGljYXI7IG1hbnTDqW0gZmlsdHJhZ2VtIGFvIGRpZ2l0YXIgKi99XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNzcz17c2VhcmNoSW5wdXR9XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtkaXNhYmxlZEFsbCA/ICdTZWxlY2lvbmUgdW0gdGlwbyBkZSBhbsOhbGlzZSBhY2ltYScgOiAnRGlnaXRlIG91IGNsaXF1ZSBwYXJhIGxpc3Rhcid9XHJcbiAgICAgICAgdmFsdWU9e2J1c2NhTWluZXJhbH1cclxuICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IHNldEJ1c2NhTWluZXJhbChlLnRhcmdldC52YWx1ZSk7IHNldE9wZW4odHJ1ZSkgfX1cclxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRPcGVuKHRydWUpfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgb25CbHVyPXtkZWxheWVkQ2xvc2V9XHJcbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkQWxsIHx8IGxvYWRpbmdNaW5lcmFpc31cclxuICAgICAgICBhcmlhLWxhYmVsPVwiYnVzY2FyLW1pbmVyYWxcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgey8qIOKsh++4jyBBIGxpc3RhIGFnb3JhIGFicmUgcXVhbmRvIG9wZW49dHJ1ZSAoZm9jby9jbGlxdWUpLCBtZXNtbyBzZW0gdGV4dG8gKi99XHJcbiAgICAgIHtvcGVuICYmICFkaXNhYmxlZEFsbCAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY3NzPXtsaXN0Qm94fVxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cImxpc3RhLWRlLW1pbmVyYWlzXCJcclxuICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IGUucHJldmVudERlZmF1bHQoKX0gLy8gaW1wZWRlIGJsdXIgYW50ZXMgZG8gY2xpY2tcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZ01pbmVyYWlzICYmIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT5DYXJyZWdhbmRvIGxpc3Rh4oCmPC9kaXY+fVxyXG4gICAgICAgICAgeyEhZXJyb3JNaW5lcmFpcyAmJiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDgsIGNvbG9yOiAnI2IwMCcgfX0+RXJybzoge2Vycm9yTWluZXJhaXN9PC9kaXY+fVxyXG4gICAgICAgICAgeyFsb2FkaW5nTWluZXJhaXMgJiYgIWVycm9yTWluZXJhaXMgJiYgbGlzdGFGaWx0cmFkYS5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDggfX0+TmVuaHVtIG1pbmVyYWwgZW5jb250cmFkby48L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7IWxvYWRpbmdNaW5lcmFpcyAmJiAhZXJyb3JNaW5lcmFpcyAmJiBsaXN0YUZpbHRyYWRhLm1hcChtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYWN0aXZlID0gbS5ub21lTWluZXJhbCA9PT0gc2VsZWN0ZWROYW1lXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXtgJHttLm5vbWVNaW5lcmFsfS0ke20ubm9tZVJlc3VtaWRvTWluZXJhbH1gfVxyXG4gICAgICAgICAgICAgICAgY3NzPXtsaXN0SXRlbX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlID8gJ2FjdGl2ZScgOiAnJ31cclxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IGUucHJldmVudERlZmF1bHQoKX0gLy8gZ2FyYW50ZSBxdWUgbyBjbGljayBuw6NvIHBlcmNhIG8gZm9jbyBhbnRlc1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGljayhtKX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXttLm5vbWVNaW5lcmFsfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHttLm5vbWVNaW5lcmFsfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiByw6FkaW9zIGUgZGljYXMg4oCUIGluYWx0ZXJhZG9zICovfVxyXG4gICAgICA8ZGl2IGNzcz17cmFkaW9zV3JhcHBlcn0gYXJpYS1sYWJlbD1cImFncnVwYWRvcmVzLW1pbmVyYWlzXCI+XHJcbiAgICAgICAgPGxhYmVsIGNzcz17cmFkaW9MYWJlbH0gdGl0bGU9XCJRdWFudGlkYWRlIGRlIEFuw6FsaXNlc1wiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXBvLW1pbmVyYWxcIlxyXG4gICAgICAgICAgICBjaGVja2VkPXthZ3J1cGFkb3IgPT09ICdhbmFsaXNlJ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldEFncnVwYWRvcignYW5hbGlzZScpfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IW1pbmVyYWxTZWxlY2lvbmFkb31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3Bhbj5BbsOhbGlzZXM8L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgY3NzPXtyYWRpb0xhYmVsfSB0aXRsZT1cIk3DqWRpYSBkbyBtaW5lcmFsIHNlbGVjaW9uYWRvXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgbmFtZT1cInRpcG8tbWluZXJhbFwiXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2FncnVwYWRvciA9PT0gJ21lZGlhJ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldEFncnVwYWRvcignbWVkaWEnKX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFtaW5lcmFsU2VsZWNpb25hZG99XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNwYW4+TcOpZGlhPC9zcGFuPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGNzcz17cmFkaW9MYWJlbH0gdGl0bGU9XCJNw6F4aW1vIGRvIG1pbmVyYWwgc2VsZWNpb25hZG9cIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICBuYW1lPVwidGlwby1taW5lcmFsXCJcclxuICAgICAgICAgICAgY2hlY2tlZD17YWdydXBhZG9yID09PSAnbWF4aW1hJ31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldEFncnVwYWRvcignbWF4aW1hJyl9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshbWluZXJhbFNlbGVjaW9uYWRvfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuPk3DoXhpbWE8L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogNiwgZm9udFNpemU6ICcuOXJlbScsIGNvbG9yOiAnIzY2NicgfX0+XHJcbiAgICAgICAgeyFtaW5lcmFsQW5hbGlzZSAmJiAnRXNjb2xoYSBEUlgvUWVtc2Nhbi9Ub2RhcyBwYXJhIGhhYmlsaXRhciBhIGJ1c2NhLid9XHJcbiAgICAgICAge21pbmVyYWxBbmFsaXNlICYmICFtaW5lcmFsU2VsZWNpb25hZG8gJiYgJ0NsaXF1ZSBubyBjYW1wbyBwYXJhIGxpc3RhciBvdSBkaWdpdGUgcGFyYSBmaWx0cmFyOyBzZWxlY2lvbmUgdW0gbWluZXJhbCBwYXJhIGhhYmlsaXRhciBNw6lkaWEvTcOheGltYS4nfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuIiwiLy8gdXRpbHMudHMgKEVTTSBAYXJjZ2lzL2NvcmUpXHJcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvRmVhdHVyZUxheWVyXCJcclxuaW1wb3J0IExlZ2VuZCBmcm9tIFwiQGFyY2dpcy9jb3JlL3dpZGdldHMvTGVnZW5kXCJcclxuaW1wb3J0IENsYXNzQnJlYWtzUmVuZGVyZXIgZnJvbSBcIkBhcmNnaXMvY29yZS9yZW5kZXJlcnMvQ2xhc3NCcmVha3NSZW5kZXJlclwiXHJcbmltcG9ydCBTaW1wbGVNYXJrZXJTeW1ib2wgZnJvbSBcIkBhcmNnaXMvY29yZS9zeW1ib2xzL1NpbXBsZU1hcmtlclN5bWJvbFwiXHJcblxyXG5leHBvcnQgY29uc3QgY29yZXNUaXBvczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICBsYXRlcmFsOiBcInJnYmEoODgsIDE5LCAyNTIsIDAuNylcIixcclxuICB0ZXN0ZW11bmhvOiBcInJnYmEoMjU1LCAwLCAyNTUsIDAuNylcIixcclxuICBjYWxoYTogXCJyZ2JhKDI0NSwgMjAxLCAzOCwgMC43KVwiLFxyXG4gIHBsdWc6IFwicmdiYSgxMjUsIDI1MywgMTQ4LCAwLjcpXCIsXHJcbiAgXCJ3aG9sZSBjb3JlXCI6IFwicmdiYSgyNTUsIDQzLCAyNCwgMC43KVwiXHJcbn1cclxuXHJcbnR5cGUgR2VyYXJQYXJhbXMgPSB7XHJcbiAgamltdU1hcFZpZXc6IGFueVxyXG4gIGRhZG9zOiB7IGNvZGlnb1BvY286IG51bWJlcjsgdG90YWw6IG51bWJlciB9W11cclxuICBjb2xvckZpbGw6IHN0cmluZ1xyXG4gIGlkQ2FtYWRhOiBzdHJpbmdcclxuICBpZExlZ2VuZGE6IHN0cmluZ1xyXG4gIHRpdGxlTGVnZW5kYTogc3RyaW5nXHJcbiAgd2l0aEludGVyZXN0PzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIoe1xyXG4gIGppbXVNYXBWaWV3LCBkYWRvcywgY29sb3JGaWxsLCBpZENhbWFkYSwgaWRMZWdlbmRhLCB0aXRsZUxlZ2VuZGFcclxufTogR2VyYXJQYXJhbXMpIHtcclxuICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBbZGlzdC1lYl0gZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIgaWQ9JHtpZENhbWFkYX1gKVxyXG4gIGNvbnNvbGUudGltZShgW2Rpc3QtZWJdIHRlbXBvLXRvdGFsICR7aWRDYW1hZGF9YClcclxuICB0cnkge1xyXG4gICAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3LnZpZXdcclxuICAgIGNvbnN0IG1hcCA9IHZpZXcubWFwXHJcblxyXG4gICAgY29uc29sZS5sb2coJ1tkaXN0LWViXSBxdGQgZGFkb3MnLCBkYWRvcy5sZW5ndGgsIGRhZG9zLnNsaWNlKDAsIDEwKSlcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShkYWRvcykgfHwgZGFkb3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignW2Rpc3QtZWJdIHNlbSBkYWRvcyAtPiBuw6NvIGNyaWEgY2FtYWRhJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTm9ybWFsaXphIGxpc3RhIGRlIGPDs2RpZ29zIChhcGVuYXMgbsO6bWVyb3MpXHJcbiAgICBjb25zdCBjb2RpZ29zQXJyID0gZGFkb3MubWFwKHAgPT4gTnVtYmVyKHAuY29kaWdvUG9jbykpLmZpbHRlcih2ID0+IE51bWJlci5pc0Zpbml0ZSh2KSlcclxuICAgIGNvbnN0IGNvZGlnb3MgPSBjb2RpZ29zQXJyLmpvaW4oJywnKVxyXG4gICAgaWYgKCFjb2RpZ29zKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignW2Rpc3QtZWJdIGxpc3RhIGRlIGPDs2RpZ29zIHZhemlhIGFww7NzIG5vcm1hbGl6YcOnw6NvJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCBleHByZXNzaW9uID0gYFBPQ09fQ0RfUE9DTyBJTiAoJHtjb2RpZ29zfSlgXHJcbiAgICBjb25zb2xlLmxvZygnW2Rpc3QtZWJdIGRlZmluaXRpb25FeHByZXNzaW9uJywgZXhwcmVzc2lvbilcclxuXHJcbiAgICAvLyBMYXllciBiYXNlIGRvIHNlcnZpw6dvXHJcbiAgICBjb25zdCBjYW1hZGFQb2Nvc1NydiA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICB1cmw6ICdodHRwczovL2Jhc2VnaXMucGV0cm9icmFzLmNvbS5ici9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9FWFBMT1JBL0ZlYXR1cmVfUG9jb3MvTWFwU2VydmVyLzAnLFxyXG4gICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbjogZXhwcmVzc2lvbixcclxuICAgICAgdGl0bGU6ICdQb8Onb3MgKGJhc2UpJyxcclxuICAgICAgb3V0RmllbGRzOiBbJyonXSxcclxuICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgIH0pXHJcblxyXG4gICAgY29uc29sZS50aW1lKCdbZGlzdC1lYl0gbG9hZCBjYW1hZGFQb8Onb3MnKVxyXG4gICAgYXdhaXQgY2FtYWRhUG9jb3NTcnYubG9hZCgpXHJcbiAgICBjb25zb2xlLnRpbWVFbmQoJ1tkaXN0LWViXSBsb2FkIGNhbWFkYVBvw6dvcycpXHJcblxyXG4gICAgLy8gT0lEIHJlYWwgZG8gc2VydmnDp28gKHBvZGUgc2VyIFBPQ09fQ0RfUE9DTylcclxuICAgIGNvbnN0IG9iamVjdElkRmllbGQgPSAoY2FtYWRhUG9jb3NTcnYgYXMgYW55KS5vYmplY3RJZEZpZWxkIHx8ICdPQkpFQ1RJRCdcclxuICAgIGNvbnNvbGUubG9nKCdbZGlzdC1lYl0gb2JqZWN0SWRGaWVsZCBkbyBzZXJ2acOnbzonLCBvYmplY3RJZEZpZWxkKVxyXG5cclxuICAgIGNvbnNvbGUudGltZSgnW2Rpc3QtZWJdIHF1ZXJ5RmVhdHVyZXMnKVxyXG4gICAgY29uc3QgcXVlcnlSZXN1bHQgPSBhd2FpdCBjYW1hZGFQb2Nvc1Nydi5xdWVyeUZlYXR1cmVzKHtcclxuICAgICAgd2hlcmU6IGV4cHJlc3Npb24sXHJcbiAgICAgIG91dEZpZWxkczogWycqJ10sXHJcbiAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS50aW1lRW5kKCdbZGlzdC1lYl0gcXVlcnlGZWF0dXJlcycpXHJcbiAgICBjb25zb2xlLmxvZygnW2Rpc3QtZWJdIGZlYXR1cmVzIHJldG9ybmFkYXMnLCBxdWVyeVJlc3VsdC5mZWF0dXJlcy5sZW5ndGgpXHJcblxyXG4gICAgLy8gQXRyaWJ1aSBUT1RBTCBlIGluaWNpYWxpemEgbWRfdmFsXHJcbiAgICBjb25zdCBmZWF0dXJlcyA9IHF1ZXJ5UmVzdWx0LmZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4ge1xyXG4gICAgICBjb25zdCBjb2RpZ28gPSBOdW1iZXIoZmVhdHVyZS5hdHRyaWJ1dGVzLlBPQ09fQ0RfUE9DTylcclxuICAgICAgY29uc3QgZGFkbyA9IGRhZG9zLmZpbmQocCA9PiBwLmNvZGlnb1BvY28gPT09IGNvZGlnbylcclxuICAgICAgY29uc3QgdG90YWwgPSBkYWRvID8gTnVtYmVyKGRhZG8udG90YWwpIDogMFxyXG4gICAgICBmZWF0dXJlLmF0dHJpYnV0ZXMuUE9DT19NRF9NRVJJRF9DRU5UID0gdG90YWxcclxuICAgICAgZmVhdHVyZS5hdHRyaWJ1dGVzLm1kX3ZhbCA9IDAgLy8gdXNhZG8gcGVsb3MgYWdydXBhZG9yZXNcclxuICAgICAgcmV0dXJuIGZlYXR1cmVcclxuICAgIH0pXHJcblxyXG4gICAgLy8gRXN0YXTDrXN0aWNhIHBhcmEgY2xhc3Nlcy9idWJibGVcclxuICAgIGNvbnN0IHZhbG9yZXMgPSBkYWRvcy5tYXAocCA9PiBOdW1iZXIocC50b3RhbCkpLmZpbHRlcih2ID0+IE51bWJlci5pc0Zpbml0ZSh2KSlcclxuICAgIGxldCBtaW4gPSBNYXRoLm1pbiguLi52YWxvcmVzKVxyXG4gICAgbGV0IG1heCA9IE1hdGgubWF4KC4uLnZhbG9yZXMpXHJcbiAgICBjb25zb2xlLmxvZygnW2Rpc3QtZWJdIG1pbi9tYXggYW50ZXMnLCB7IG1pbiwgbWF4IH0pXHJcblxyXG4gICAgY29uc3QgaW5mbzogYW55W10gPSBbXVxyXG4gICAgY29uc3Qgb3V0bGluZSA9IHsgY29sb3I6IFwiYmxhY2tcIiwgd2lkdGg6IFwiMXB4XCIgfSBhcyBjb25zdFxyXG5cclxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG1pbikgfHwgIU51bWJlci5pc0Zpbml0ZShtYXgpKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignW2Rpc3QtZWJdIHZhbG9yZXMgaW52w6FsaWRvcyAtPiBuw6NvIGNyaWEgY2FtYWRhJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1pbiA9PT0gMCAmJiBtYXggPT09IDApIHtcclxuICAgICAgaW5mby5wdXNoKHtcclxuICAgICAgICBtaW5WYWx1ZTogMCwgbWF4VmFsdWU6IDAsXHJcbiAgICAgICAgbGFiZWw6IFwiTsOjbyBow6EgZGFkb3Mgc3VmaWNpZW50ZXNcIixcclxuICAgICAgICBzeW1ib2w6IG5ldyBTaW1wbGVNYXJrZXJTeW1ib2woeyBjb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCIsIHNpemU6IDAsIHN0eWxlOiBcImNpcmNsZVwiLCBvdXRsaW5lIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB6ZXJhZG9zID0gdmFsb3Jlcy5maWx0ZXIodiA9PiB2ID09PSAwKS5sZW5ndGhcclxuICAgICAgY29uc3QgbmFvWmVyYWRvcyA9IHZhbG9yZXMuZmlsdGVyKHYgPT4gdiA+IDApXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbZGlzdC1lYl0gemVyYWRvcy9uYW9aZXJhZG9zJywgeyB6ZXJhZG9zLCBuYW9aZXJhZG9zOiBuYW9aZXJhZG9zLmxlbmd0aCB9KVxyXG5cclxuICAgICAgaWYgKHplcmFkb3MgPiAwKSB7XHJcbiAgICAgICAgaW5mby5wdXNoKHtcclxuICAgICAgICAgIG1pblZhbHVlOiAwLCBtYXhWYWx1ZTogMCxcclxuICAgICAgICAgIGxhYmVsOiBgfCAwIHwgKCR7emVyYWRvc30gcG/Dp28ke3plcmFkb3MgPiAxID8gJ3MnIDogJyd9KWAsXHJcbiAgICAgICAgICBzeW1ib2w6IG5ldyBTaW1wbGVNYXJrZXJTeW1ib2woeyBjb2xvcjogXCJyZ2JhKDIwMCwyMDAsMjAwLDAuMylcIiwgc2l6ZTogNiwgc3R5bGU6IFwiY2lyY2xlXCIsIG91dGxpbmUgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBtaW4gPSBNYXRoLm1heCgxLCBtaW4pXHJcbiAgICAgIGNvbnN0IG4gPSBuYW9aZXJhZG9zLmxlbmd0aFxyXG4gICAgICBjb25zdCBudW1DbGFzc2VzID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZCgxICsgMy4zICogTWF0aC5sb2cxMChuIHx8IDEpKSlcclxuICAgICAgY29uc3QgYnJlYWtzID0gTWF0aC5jZWlsKChtYXggLSBtaW4gKyAxKSAvIE1hdGgubWF4KDEsIG51bUNsYXNzZXMpKVxyXG4gICAgICBjb25zdCBtYXhTaXplID0gNDBcclxuICAgICAgY29uc29sZS5sb2coJ1tkaXN0LWViXSBjbGFzc2VzJywgeyBudW1DbGFzc2VzLCBicmVha3MsIG1heFNpemUgfSlcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ2xhc3NlczsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbWluVmFsdWUgPSBtaW4gKyAoaSAqIGJyZWFrcylcclxuICAgICAgICBjb25zdCBtYXhWYWx1ZSA9IG1pbiArICgoaSArIDEpICogYnJlYWtzKSAtIDFcclxuICAgICAgICBpZiAobWluVmFsdWUgPiBtYXgpIGJyZWFrXHJcbiAgICAgICAgY29uc3QgY291bnQgPSBuYW9aZXJhZG9zLmZpbHRlcih2ID0+IHYgPj0gbWluVmFsdWUgJiYgdiA8PSBtYXhWYWx1ZSkubGVuZ3RoXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBgJHttaW5WYWx1ZX0gfC0tLXwgJHttYXhWYWx1ZX0gKCR7Y291bnR9IHBvw6dvJHtjb3VudCA+IDEgPyAncycgOiAnJ30pYFxyXG4gICAgICAgIGNvbnN0IHNpemUgPSA2ICsgKGkgKiAobWF4U2l6ZSAvIG51bUNsYXNzZXMpKVxyXG4gICAgICAgIGluZm8ucHVzaCh7XHJcbiAgICAgICAgICBtaW5WYWx1ZSwgbWF4VmFsdWUsIGxhYmVsLFxyXG4gICAgICAgICAgc3ltYm9sOiBuZXcgU2ltcGxlTWFya2VyU3ltYm9sKHsgY29sb3I6IGNvbG9yRmlsbCwgc2l6ZSwgc3R5bGU6IFwiY2lyY2xlXCIsIG91dGxpbmUgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgQ2xhc3NCcmVha3NSZW5kZXJlcih7XHJcbiAgICAgIGZpZWxkOiBcIlBPQ09fTURfTUVSSURfQ0VOVFwiLFxyXG4gICAgICBjbGFzc0JyZWFrSW5mb3M6IGluZm9cclxuICAgIH0pXHJcblxyXG4gICAgLy8gU2NoZW1hIGRvIGxheWVyIGNsaWVudC1zaWRlOlxyXG4gICAgLy8gLSBoZXJkYSBjYW1wb3MgZG8gc2VydmnDp29cclxuICAgIC8vIC0gcmVtb3ZlIGR1cGxpY2F0YXMgcXVlIHZhbW9zIGFkaWNpb25hclxyXG4gICAgY29uc3QgYmFzZUZpZWxkcyA9IGNhbWFkYVBvY29zU3J2LmZpZWxkcy5maWx0ZXIoZiA9PlxyXG4gICAgICBmPy5uYW1lICE9PSAnUE9DT19NRF9NRVJJRF9DRU5UJyAmJiBmPy5uYW1lICE9PSAnbWRfdmFsJ1xyXG4gICAgKVxyXG4gICAgY29uc3QgZmllbGRzID0gW1xyXG4gICAgICAuLi5iYXNlRmllbGRzLFxyXG4gICAgICB7IG5hbWU6IFwiUE9DT19NRF9NRVJJRF9DRU5UXCIsIGFsaWFzOiBcIlZhbG9yIChNaW5lcmFpcy9BbW9zdHJhcylcIiwgdHlwZTogXCJkb3VibGVcIiBhcyBjb25zdCB9LFxyXG4gICAgICB7IG5hbWU6IFwibWRfdmFsXCIsIGFsaWFzOiBcIlZhbG9yIEFncnVwYWRvclwiLCB0eXBlOiBcImRvdWJsZVwiIGFzIGNvbnN0IH1cclxuICAgIF1cclxuXHJcbiAgICAvLyBSZW1vdmUgY2FtYWRhIGFudGVyaW9yIChzZSBleGlzdGlyKVxyXG4gICAgY29uc3QgZXhpc3RlbnRlID0gbWFwLmZpbmRMYXllckJ5SWQoaWRDYW1hZGEpXHJcbiAgICBpZiAoZXhpc3RlbnRlKSB7IGNvbnNvbGUubG9nKCdbZGlzdC1lYl0gcmVtb3ZlIGNhbWFkYSBleGlzdGVudGUnLCBpZENhbWFkYSk7IG1hcC5yZW1vdmUoZXhpc3RlbnRlKSB9XHJcblxyXG4gICAgLy8gQ3JpYSBjYW1hZGEgY2xpZW50LXNpZGUgY29tIG8gT0lEIHJlYWwgZG8gc2VydmnDp29cclxuICAgIGNvbnN0IGNhbWFkYURpc3RyaWJ1aWNhbyA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICBpZDogaWRDYW1hZGEsXHJcbiAgICAgIHNvdXJjZTogZmVhdHVyZXMsXHJcbiAgICAgIGZpZWxkcyxcclxuICAgICAgb2JqZWN0SWRGaWVsZCwgLy8gPDw8IGhlcmRhZG8gZG8gc2VydmnDp28gKGV4LjogJ1BPQ09fQ0RfUE9DTycpXHJcbiAgICAgIGdlb21ldHJ5VHlwZTogXCJwb2ludFwiLFxyXG4gICAgICBzcGF0aWFsUmVmZXJlbmNlOiB2aWV3LnNwYXRpYWxSZWZlcmVuY2UgPz8geyB3a2lkOiAxMDIxMDAgfSxcclxuICAgICAgcmVuZGVyZXIsXHJcbiAgICAgIHRpdGxlOiB0aXRsZUxlZ2VuZGEsXHJcbiAgICAgIGxpc3RNb2RlOiBcImhpZGVcIixcclxuICAgICAgZmVhdHVyZVJlZHVjdGlvbjogeyB0eXBlOiBcImNsdXN0ZXJcIiwgY2x1c3Rlck1pblNpemU6IDE4LCBjbHVzdGVyTWF4U2l6ZTogNDgsIGxhYmVsc1Zpc2libGU6IGZhbHNlIH1cclxuICAgIH0pXHJcblxyXG4gICAgbWFwLmFkZChjYW1hZGFEaXN0cmlidWljYW8pXHJcbiAgICBjb25zb2xlLmxvZygnW2Rpc3QtZWJdIGNhbWFkYSBhZGljaW9uYWRhJywgaWRDYW1hZGEsICdmZWF0dXJlczonLCBmZWF0dXJlcy5sZW5ndGgpXHJcblxyXG4gICAgLy8gKE9wY2lvbmFsKSBsZWdlbmRhIG5vIG1hcGFcclxuICAgIGNvbnN0IGxlZ2VuZCA9IG5ldyBMZWdlbmQoe1xyXG4gICAgICB2aWV3LFxyXG4gICAgICBsYXllckluZm9zOiBbeyBsYXllcjogY2FtYWRhRGlzdHJpYnVpY2FvLCB0aXRsZTogdGl0bGVMZWdlbmRhIH1dXHJcbiAgICB9KVxyXG4gICAgLy8gdmlldy51aS5hZGQobGVnZW5kLCBcImJvdHRvbS1sZWZ0XCIpXHJcblxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tkaXN0LWViXSBFUlJPIGFvIGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCJywgZSlcclxuICB9IGZpbmFsbHkge1xyXG4gICAgY29uc29sZS50aW1lRW5kKGBbZGlzdC1lYl0gdGVtcG8tdG90YWwgJHtpZENhbWFkYX1gKVxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfbGF5ZXJzX0ZlYXR1cmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfcmVuZGVyZXJzX0NsYXNzQnJlYWtzUmVuZGVyZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX3N5bWJvbHNfU2ltcGxlTWFya2VyU3ltYm9sX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV93aWRnZXRzX0xlZ2VuZF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuLyoqIEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50ICovXHJcbmltcG9ydCB7IFJlYWN0LCBqc3gsIGNzcywgR2xvYmFsIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIsIGNvcmVzVGlwb3MgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQge1xyXG4gIE1JTkVSQUxfT1BUSU9OUyxcclxuICBmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzQ29udGFkb3IsXHJcbiAgZmV0Y2hNaW5lcmFsTGlzdGEsXHJcbiAgZmV0Y2hNaW5lcmFsQWdydXBhZG9yLFxyXG4gIGRlc2VuaGFyRGlzdHJpYnVpY2FvTWluZXJhaXMsXHJcbiAgYXBsaWNhckNvbG9yaXphY2FvUG9yQWdydXBhZG9yLFxyXG4gIGxhYmVsRnJvbVZhbHVlLFxyXG4gIHR5cGUgTWluZXJhbFRpcG8sXHJcbiAgdHlwZSBNaW5lcmFsTGlzdGFJdGVtXHJcbn0gZnJvbSAnLi9NaW5lcmFscydcclxuXHJcbmltcG9ydCBNaW5lcmFsc0xpc3RQYW5lbCBmcm9tICcuL01pbmVyYWxzTGlzdFBhbmVsJ1xyXG5pbXBvcnQgR3JhZGllbnRMZWdlbmQgZnJvbSAnLi9HcmFkaWVudExlZ2VuZCdcclxuXHJcbi8qID09PT09IFRpcG9zID09PT09ICovXHJcbnR5cGUgTXNnRmFpeGFJbnRlcmVzc2UgPSB7IHR5cGU6ICdmYWl4YS1pbnRlcmVzc2UnOyBjb2RpZ29zUG9jb3M6IChudW1iZXIgfCBzdHJpbmcpW10gfVxyXG50eXBlIE1zZ0xlZ2VuZE1pbmVyYWlzID0geyB0eXBlOiAnbGVnZW5kOm1pbmVyYWlzJzsgcGF5bG9hZDogYW55IH1cclxudHlwZSBNc2dDb25maWcgPSB7IHR5cGU6ICdmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzOm9rJzsgc3RhcnRXaXRoSW50ZXJlc3Q/OiBib29sZWFuIH1cclxudHlwZSBNc2dDb25maWdJbnRlcmVzdCA9IHsgdHlwZTogJ2NvbmZpZyc7IHN0YXJ0V2l0aEludGVyZXN0PzogYm9vbGVhbjsgY2dWaXNpYmxlPzogYm9vbGVhbiB9XHJcblxyXG50eXBlIEFtb3N0cmFJdGVtID0ge1xyXG4gIGNvZGlnb1BvY286IG51bWJlclxyXG4gIHRvdGFsQW1vc3RyYXNMYXRlcmFpczogbnVtYmVyXHJcbiAgdG90YWxDYWxoYXM6IG51bWJlclxyXG4gIHRvdGFsUGx1Z3M6IG51bWJlclxyXG4gIHRvdGFsVGVzdGVtdW5ob3M6IG51bWJlclxyXG4gIHRvdGFsV2hvbGVDb3JlOiBudW1iZXJcclxufVxyXG5cclxuLyogPT09PT0gQ29uZmlnID09PT09ICovXHJcbmNvbnN0IERFRkFVTFRfRkFJWEFfSU5URVJFU1NFID0gZmFsc2VcclxuXHJcbi8qID09PT09IExheW91dCA9PT09PSAqL1xyXG5jb25zdCBERUZBVUxUX1dJRFRIID0gMzYwXHJcbmNvbnN0IFBBTkVMX01BUkdJTl9UT1AgPSA1MFxyXG5jb25zdCBQQU5FTF9NQVJHSU5fUklHSFQgPSAxMFxyXG5jb25zdCBERUZBVUxUX0hFSUdIVCA9IDY1MFxyXG5cclxuLyogPT09PT0gQ2FtcG9zIHBvciB0aXBvIChhbW9zdHJhcykgPT09PT0gKi9cclxuY29uc3QgVFlQRV9GSUVMRDogUmVjb3JkPHN0cmluZywga2V5b2YgQW1vc3RyYUl0ZW0+ID0ge1xyXG4gIGxhdGVyYWw6ICd0b3RhbEFtb3N0cmFzTGF0ZXJhaXMnLFxyXG4gIHRlc3RlbXVuaG86ICd0b3RhbFRlc3RlbXVuaG9zJyxcclxuICBjYWxoYTogJ3RvdGFsQ2FsaGFzJyxcclxuICBwbHVnOiAndG90YWxQbHVncycsXHJcbiAgJ3dob2xlIGNvcmUnOiAndG90YWxXaG9sZUNvcmUnXHJcbn1cclxuY29uc3QgTElTVF9UWVBFUyA9IE9iamVjdC5rZXlzKFRZUEVfRklFTEQpXHJcblxyXG5jb25zdCBsb2cxMCA9ICh4OiBudW1iZXIpID0+IChNYXRoLmxvZzEwID8gTWF0aC5sb2cxMCh4KSA6IE1hdGgubG9nKHgpIC8gTWF0aC5MTjEwKVxyXG5cclxuLyogPT09PT0gRmV0Y2ggYmFzZSAoYW1vc3RyYXMpID09PT09ICovXHJcbmZ1bmN0aW9uIGJ1aWxkU2Vzc2lvbkJvZHkoZmFpeGFJbnRlcmVzc2U6IGJvb2xlYW4pIHtcclxuICBjb25zdCBwID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXHJcbiAgcC5zZXQoJ2hkU3lzJywgJ25vdmFpbnRjb25zJylcclxuICBwLnNldCgnaGRVQycsICdNYXBhJylcclxuICBwLnNldCgnaGRBY2FvJywgJ0NhcnJlZ2FyTWFwYURpc3RyaWJ1aWNhb0Ftb3N0cmFzQ29udGFkb3InKVxyXG4gIHAuc2V0KCdoZFNlc3Npb25GaWx0ZXInLCAndHJ1ZScpXHJcbiAgcC5zZXQoJ2ZhaXhhSW50ZXJlc3NlJywgU3RyaW5nKCEhZmFpeGFJbnRlcmVzc2UpKVxyXG4gIHJldHVybiBwLnRvU3RyaW5nKClcclxufVxyXG5mdW5jdGlvbiBub3JtYWxpemVMaXN0KHJhdzogYW55W10pOiBBbW9zdHJhSXRlbVtdIHtcclxuICByZXR1cm4gKEFycmF5LmlzQXJyYXkocmF3KSA/IHJhdyA6IFtdKVxyXG4gICAgLm1hcCgocjogYW55KSA9PiAoe1xyXG4gICAgICBjb2RpZ29Qb2NvOiBOdW1iZXIoci5jb2RpZ29Qb2NvID8/IHIuUE9DT19DRF9QT0NPID8/IHIucG9jbyA/PyByLmNvZGlnbyA/PyAwKSxcclxuICAgICAgdG90YWxBbW9zdHJhc0xhdGVyYWlzOiBOdW1iZXIoci50b3RhbEFtb3N0cmFzTGF0ZXJhaXMgPz8gci5sYXRlcmFpcyA/PyAwKSxcclxuICAgICAgdG90YWxDYWxoYXM6IE51bWJlcihyLnRvdGFsQ2FsaGFzID8/IHIuY2FsaGFzID8/IDApLFxyXG4gICAgICB0b3RhbFBsdWdzOiBOdW1iZXIoci50b3RhbFBsdWdzID8/IHIucGx1Z3MgPz8gMCksXHJcbiAgICAgIHRvdGFsVGVzdGVtdW5ob3M6IE51bWJlcihyLnRvdGFsVGVzdGVtdW5ob3MgPz8gci50ZXN0ZW11bmhvcyA/PyAwKSxcclxuICAgICAgdG90YWxXaG9sZUNvcmU6IE51bWJlcihyLnRvdGFsV2hvbGVDb3JlID8/IHIud2hvbGVDb3JlID8/IDApXHJcbiAgICB9KSlcclxuICAgIC5maWx0ZXIoKHgpID0+ICEheC5jb2RpZ29Qb2NvKVxyXG59XHJcbmZ1bmN0aW9uIGZldGNoVmlhUGFyZW50KGJvZHk6IHN0cmluZyk6IFByb21pc2U8QW1vc3RyYUl0ZW1bXT4ge1xyXG4gIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJ1thbW9zdHJhc10gZmV0Y2hWaWFQYXJlbnQnKVxyXG4gIGNvbnNvbGUubG9nKCdbYW1vc3RyYXNdIGJvZHknLCBib2R5KVxyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcmVxSWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKVxyXG5cclxuICAgIGxldCB0YXJnZXRPcmlnaW4gPSAnKidcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5yZWZlcnJlcikgdGFyZ2V0T3JpZ2luID0gbmV3IFVSTChkb2N1bWVudC5yZWZlcnJlcikub3JpZ2luXHJcbiAgICB9IGNhdGNoIHt9XHJcblxyXG4gICAgY29uc3QgT0sgPSAnZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhczpvaydcclxuICAgIGNvbnN0IEVSUiA9ICdmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzOmVycidcclxuXHJcbiAgICBjb25zdCBvbk1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBkOiBhbnkgPSBldmVudD8uZGF0YSB8fCB7fVxyXG4gICAgICBpZiAoIWQgfHwgZC5yZXFJZCAhPT0gcmVxSWQpIHJldHVyblxyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1thbW9zdHJhc10gcmVzcG9zdGEgZG8gcGFpJywge1xyXG4gICAgICAgIHJlY2VpdmVkVHlwZTogZC50eXBlLFxyXG4gICAgICAgIGV4cGVjdGVkT2s6IE9LLFxyXG4gICAgICAgIGV4cGVjdGVkRXJyOiBFUlIsXHJcbiAgICAgICAgb3JpZ2luOiBldmVudC5vcmlnaW4sXHJcbiAgICAgICAgc2FtZU9yaWdpbjogZXZlbnQub3JpZ2luID09PSB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxyXG4gICAgICAgIHJlcUlkLFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKGQudHlwZSA9PT0gT0spIHtcclxuICAgICAgICB0cnkgeyBjbGVhclRpbWVvdXQodG8pIH0gY2F0Y2gge31cclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSlcclxuICAgICAgICBjb25zdCBjb3VudCA9IEFycmF5LmlzQXJyYXkoZC5wYXlsb2FkKSA/IGQucGF5bG9hZC5sZW5ndGggOiBudWxsXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1thbW9zdHJhc10gT0sg4oCUIG5vcm1hbGl6YW5kbyBwYXlsb2FkJywgeyBjb3VudCwgc2FtcGxlOiBBcnJheS5pc0FycmF5KGQucGF5bG9hZCkgPyBkLnBheWxvYWQuc2xpY2UoMCwgMykgOiBkLnBheWxvYWQgfSlcclxuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgICAgICByZXNvbHZlKG5vcm1hbGl6ZUxpc3QoZC5wYXlsb2FkKSlcclxuICAgICAgfSBlbHNlIGlmIChkLnR5cGUgPT09IEVSUikge1xyXG4gICAgICAgIHRyeSB7IGNsZWFyVGltZW91dCh0bykgfSBjYXRjaCB7fVxyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG4gICAgICAgIGNvbnNvbGUud2FybignW2Ftb3N0cmFzXSBFUlJPIGRvIHBhaScsIGQubWVzc2FnZSlcclxuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgICAgICByZWplY3QobmV3IEVycm9yKGQubWVzc2FnZSB8fCAnRXJybyBubyBmZXRjaCB2aWEgcGFyZW50JykpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gTWVuc2FnZW0gY29tIHJlcUlkIGNlcnRvIG1hcyB0eXBlIGRpZmVyZW50ZSDigJQgYXBlbmFzIGlnbm9yZSAocG9kZSBzZXIgb3V0cmEgcGlwZWxpbmUpXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdbYW1vc3RyYXNdIGlnbm9yYW5kbyBtZW5zYWdlbSBjb20gcmVxSWQgdsOhbGlkbyBwb3LDqW0gdHlwZSBpbmVzcGVyYWRvOicsIGQudHlwZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG5cclxuICAgIGNvbnN0IHRvID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSlcclxuICAgICAgY29uc29sZS53YXJuKCdbYW1vc3RyYXNdIFRJTUVPVVQgYWd1YXJkYW5kbyByZXNwb3N0YSBkbyBwYWknLCB7IHJlcUlkLCBleHBlY3RlZDogW09LLCBFUlJdIH0pXHJcbiAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICByZWplY3QobmV3IEVycm9yKCdUaW1lb3V0IGFndWFyZGFuZG8gcmVzcG9zdGEgZG8gcGFpIChhbW9zdHJhcyknKSlcclxuICAgIH0sIDIwMDAwKVxyXG5cclxuICAgIHdpbmRvdy5wYXJlbnQ/LnBvc3RNZXNzYWdlKHsgdHlwZTogJ2ZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXMnLCBib2R5LCByZXFJZCB9LCB0YXJnZXRPcmlnaW4pXHJcbiAgICBjb25zb2xlLmxvZygnW2Ftb3N0cmFzXSBwb3N0TWVzc2FnZSAtPiBQQUknLCB7XHJcbiAgICAgIHR5cGU6ICdmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzJyxcclxuICAgICAgdGFyZ2V0T3JpZ2luLFxyXG4gICAgICByZXFJZFxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzKGZhaXhhSW50ZXJlc3NlID0gZmFsc2UpOiBQcm9taXNlPEFtb3N0cmFJdGVtW10+IHtcclxuICBjb25zdCBib2R5ID0gYnVpbGRTZXNzaW9uQm9keShmYWl4YUludGVyZXNzZSlcclxuICByZXR1cm4gZmV0Y2hWaWFQYXJlbnQoYm9keSlcclxufVxyXG5cclxuLyogPT09PT0gRXN0aWxvcyA9PT09PSAqL1xyXG5jb25zdCBNQVhfQlVCQkxFID0gNDBcclxuY29uc3QgZ2xvYmFsUGFuZWxTdHlsZSA9IGNzc2BcclxuICBkaXZbcm9sZT0nZGlhbG9nJ11bYXJpYS1sYWJlbD0nbWFwYS1kZS1kaXN0cmlidWljYW8nXSxcclxuICBkaXZbcm9sZT0nZGlhbG9nJ11bYXJpYS1sYWJlbD0nbWFwYS1kZS1kaXN0cmlidWljYW8tdjInXSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIGluc2V0OiAke1BBTkVMX01BUkdJTl9UT1B9cHggJHtQQU5FTF9NQVJHSU5fUklHSFR9cHggYXV0byBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAke0RFRkFVTFRfV0lEVEh9cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogJHtERUZBVUxUX0hFSUdIVH1weCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjRweCkgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBsZWdlbmRIZWFkZXJTdHlsZSA9IGNzc2Bmb250LXdlaWdodDo2MDA7bWFyZ2luOjRweCAwO2ZvbnQtc2l6ZTouODVyZW07bGluZS1oZWlnaHQ6MS4xO2BcclxuY29uc3QgYnViYmxlQm94U3R5bGUgPSBjc3Ngd2lkdGg6JHtNQVhfQlVCQkxFfXB4O2hlaWdodDoke01BWF9CVUJCTEV9cHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1yaWdodDo4cHg7YFxyXG5jb25zdCB3cmFwcGVyU3R5bGUgPSBjc3NgcG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO2JvcmRlci1yYWRpdXM6NnB4O2JveC1zaGFkb3c6MCA0cHggMTJweCByZ2JhKDAsMCwwLC4xKTtwYWRkaW5nOjE2cHg7b3ZlcmZsb3c6aGlkZGVuO2BcclxuY29uc3QgdGl0bGVTdHlsZSA9IGNzc2Bmb250LXdlaWdodDo2MDA7bWFyZ2luLWJvdHRvbTo0cHg7ZGlzcGxheTpibG9jaztgXHJcbmNvbnN0IHNlbGVjdFN0eWxlID0gY3NzYHdpZHRoOjEwMCU7cGFkZGluZzo2cHggOHB4O21hcmdpbi1ib3R0b206MTJweDtib3JkZXI6MXB4IHNvbGlkICNjY2M7Ym9yZGVyLXJhZGl1czo0cHg7YFxyXG5cclxuLyoqIEdyaWQgdXNhZGEgcGFyYSBvcMOnw7VlcyAoYW1vc3RyYXMpIOKAkyAyIGNvbHVuYXMsIGZsdXhvIHBvciBsaW5oYXMgKG1hbnTDqW0gVGVzdGVtdW5ob3MgZGVudHJvIGRvIGJsb2NvIGNpbnphKSAqL1xyXG5jb25zdCBsaXN0U3R5bGUgPSBjc3NgXHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDE0MHB4LCAxZnIpKTtcclxuICBncmlkLWF1dG8tcm93czogbWlubWF4KDI0cHgsIGF1dG8pO1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgY29sdW1uLWdhcDogNHB4O1xyXG4gIHJvdy1nYXA6IDJweDtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbmBcclxuXHJcbi8qKiByw7N0dWxvIGNvbXBhY3RvIHNlcnZlIHBhcmEgY2hlY2tib3ggZSByYWRpbyAqL1xyXG5jb25zdCBjaGVja2JveExhYmVsU3R5bGUgPSBjc3NgXHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbHVtbi1nYXA6IDZweDtcclxuICBwYWRkaW5nOiAxcHggMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgJiA+ICogeyBtYXJnaW46IDAgIWltcG9ydGFudDsgcGFkZGluZzogMCAhaW1wb3J0YW50OyB9XHJcbiAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSwgaW5wdXRbdHlwZT0ncmFkaW8nXSB7IHdpZHRoOiAxNHB4OyBoZWlnaHQ6IDE0cHg7IG1hcmdpbjogMCAhaW1wb3J0YW50OyBmbGV4OiAwIDAgYXV0bzsgfVxyXG5cclxuICAubGJsIHsgbWluLXdpZHRoOiAwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgZm9udC1zaXplOiAuODRyZW07IGxpbmUtaGVpZ2h0OiAxLjE1OyBwYWRkaW5nLWJvdHRvbTogMXB4OyB9XHJcbmBcclxuXHJcbi8qKiBHcmlkIGRvcyByw6FkaW9zIGRlIG1pbmVyYWlzICgyIGNvbHVuYXMgLyAzIGxpbmhhcykgKi9cclxuY29uc3QgbWluZXJhbHNMaXN0U3R5bGUgPSBjc3NgXHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE0MHB4LCAxZnIpIG1pbm1heCgxNDBweCwgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtaW5tYXgoMjRweCwgYXV0bykpO1xyXG4gIGNvbHVtbi1nYXA6IDRweDtcclxuICByb3ctZ2FwOiAycHg7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG5cclxuICAvKiBEUlgtVG90YWwgKFJvdzEsIENvbDEpICovXHJcbiAgbGFiZWxbZGF0YS1rZXk9J0RSWC1UT1QnXSB7IGdyaWQtY29sdW1uOiAxOyBncmlkLXJvdzogMTsgfVxyXG4gIC8qIFFlbXNjYW4tTWFzc2EgKFJvdzEsIENvbDIpICovXHJcbiAgbGFiZWxbZGF0YS1rZXk9J01BU1NBJ10gICB7IGdyaWQtY29sdW1uOiAyOyBncmlkLXJvdzogMTsgfVxyXG4gIC8qIERSWC1BcmdpbG9taW5lcmFpcyAoUm93MiwgQ29sMSkgKi9cclxuICBsYWJlbFtkYXRhLWtleT0nRFJYLUFSRyddIHsgZ3JpZC1jb2x1bW46IDE7IGdyaWQtcm93OiAyOyB9XHJcbiAgLyogUWVtc2Nhbi3DgXJlYSAoUm93MiwgQ29sMikgKi9cclxuICBsYWJlbFtkYXRhLWtleT0nQVJFQSddICAgIHsgZ3JpZC1jb2x1bW46IDI7IGdyaWQtcm93OiAyOyB9XHJcbiAgLyogXCJUb2RhcyBhcyBBbsOhbGlzZXNcIiAoUm93Mywgb2N1cGFuZG8gMiBjb2x1bmFzKSAqL1xyXG4gIGxhYmVsW2RhdGEta2V5PSd0b2Rhc0FuYWxpc2VzJ10geyBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjsgZ3JpZC1yb3c6IDM7IH1cclxuYFxyXG5jb25zdCBzY3JvbGxBcmVhU3R5bGUgPSBjc3NgXHJcbiAgbWF4LWhlaWdodDogMjYwcHg7ICAgLyog4oap77iPIGTDoSByb2xhZ2VtIGVudHJlIG8gVE9UQUwgZSBvIGZpbmFsIGRvIGJsb2NvICovXHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbmBcclxuXHJcbmNvbnN0IHN1bW1hcnlMaXN0U3R5bGUgPSBjc3NgbWF4LWhlaWdodDozMDBweDtvdmVyZmxvdy15OmF1dG87bWFyZ2luLXRvcDo4cHg7cGFkZGluZzo4cHggOHB4IDM2cHg7YmFja2dyb3VuZDojZmZmO2JvcmRlcjoxcHggc29saWQgI2RkZDtib3JkZXItcmFkaXVzOjRweDtwb3NpdGlvbjpyZWxhdGl2ZTtgXHJcbmNvbnN0IHN1bW1hcnlJdGVtU3R5bGUgPSBjc3NgZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW46MnB4O2BcclxuY29uc3QgcmFuZ2VMYWJlbFN0eWxlID0gY3NzYGZvbnQtc2l6ZTouNzhyZW07bGluZS1oZWlnaHQ6MS4xO2BcclxuXHJcbmNvbnN0IGZvb3RlclN0eWxlID0gY3NzYHBvc2l0aW9uOiBzdGlja3k7IGJvdHRvbTogMDsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7IHBhZGRpbmc6IDRweCAwOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiA2cHg7YFxyXG5jb25zdCBmb290ZXJMYWJlbFN0eWxlID0gY3NzYGRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjZweDtwYWRkaW5nLWxlZnQ6LjVlbTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6LjlyZW07YFxyXG5jb25zdCBmb290ZXJMYWJlbFN0eWxlSW50ZXJlc3NlID0gZm9vdGVyTGFiZWxTdHlsZVxyXG5cclxuLyogPT09PT0gU3Vtw6FyaW8gKGFtb3N0cmFzLyBtaW5lcmFpcykgPT09PT0gKi9cclxuZnVuY3Rpb24gY2FsY3VsYXJRdWVicmFzKGRhZG9zOiB7IHRvdGFsOiBudW1iZXIgfVtdLCBjb2xvckZpbGw6IHN0cmluZykge1xyXG4gIGNvbnN0IHZhbG9yZXMgPSBkYWRvcy5tYXAoKHApID0+IE51bWJlcihwLnRvdGFsKSB8fCAwKVxyXG4gIGxldCBtaW4gPSBNYXRoLm1pbiguLi52YWxvcmVzKVxyXG4gIGxldCBtYXggPSBNYXRoLm1heCguLi52YWxvcmVzKVxyXG5cclxuICBjb25zdCBpbmZvOiB7IGxhYmVsOiBzdHJpbmc7IHNpemU6IG51bWJlcjsgY29yOiBzdHJpbmc7IGNvdW50OiBudW1iZXIgfVtdID0gW11cclxuICBpZiAoIWlzRmluaXRlKG1pbikgfHwgIWlzRmluaXRlKG1heCkpIHJldHVybiBpbmZvXHJcblxyXG4gIGlmIChtaW4gPT09IDAgJiYgbWF4ID09PSAwKSB7XHJcbiAgICBpbmZvLnB1c2goeyBsYWJlbDogJ07Do28gaMOhIGRhZG9zIHN1ZmljaWVudGVzJywgc2l6ZTogMCwgY29yOiBjb2xvckZpbGwsIGNvdW50OiAwIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHplcmFkb3MgPSB2YWxvcmVzLmZpbHRlcigodikgPT4gdiA9PT0gMCkubGVuZ3RoXHJcbiAgICBjb25zdCBuYW9aZXJhZG9zID0gdmFsb3Jlcy5maWx0ZXIoKHYpID0+IHYgPiAwKVxyXG5cclxuICAgIGlmICh6ZXJhZG9zID4gMCkge1xyXG4gICAgICBpbmZvLnB1c2goeyBsYWJlbDogYHwgMCB8ICgke3plcmFkb3N9IHBvw6dvJHt6ZXJhZG9zID4gMSA/ICdzJyA6ICcnfSlgLCBzaXplOiA2LCBjb3I6ICdyZ2JhKDIwMCwyMDAsMjAwLDAuMyknLCBjb3VudDogemVyYWRvcyB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1pbiA9IDFcclxuICAgIGNvbnN0IG4gPSBuYW9aZXJhZG9zLmxlbmd0aFxyXG4gICAgY29uc3QgbnVtQ2xhc3NlcyA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQoMSArIDMuMyAqIGxvZzEwKG4gfHwgMSkpKVxyXG4gICAgY29uc3QgYnJlYWtzID0gTWF0aC5jZWlsKChtYXggLSBtaW4gKyAxKSAvIE1hdGgubWF4KDEsIG51bUNsYXNzZXMpKVxyXG4gICAgY29uc3QgbWF4U2l6ZSA9IE1BWF9CVUJCTEVcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNsYXNzZXM7IGkrKykge1xyXG4gICAgICBjb25zdCBtaW5WYWx1ZSA9IG1pbiArIGkgKiBicmVha3NcclxuICAgICAgY29uc3QgbWF4VmFsdWUgPSBtaW4gKyAoaSArIDEpICogYnJlYWtzIC0gMVxyXG4gICAgICBpZiAobWluVmFsdWUgPiBtYXgpIGJyZWFrXHJcbiAgICAgIGNvbnN0IGNvdW50ID0gbmFvWmVyYWRvcy5maWx0ZXIoKHYpID0+IHYgPj0gbWluVmFsdWUgJiYgdiA8PSBtYXhWYWx1ZSkubGVuZ3RoXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gYCR7bWluVmFsdWV9IHwtLS18ICR7bWF4VmFsdWV9ICgke2NvdW50fSBwb8OnbyR7Y291bnQgPiAxID8gJ3MnIDogJyd9KWBcclxuICAgICAgY29uc3Qgc2l6ZSA9IDYgKyBpICogKG1heFNpemUgLyBudW1DbGFzc2VzKVxyXG4gICAgICBpbmZvLnB1c2goeyBsYWJlbCwgc2l6ZSwgY29yOiBjb2xvckZpbGwsIGNvdW50IH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBpbmZvXHJcbn1cclxuXHJcbi8qID09PT09IEhlbHBlcnMgZGlhbG9nL3Bvc2ljaW9uYW1lbnRvID09PT09ICovXHJcbmZ1bmN0aW9uIGZpbmRDbG9zZXN0RGlhbG9nKGVsOiBIVE1MRWxlbWVudCB8IG51bGwpOiBIVE1MRWxlbWVudCB8IG51bGwge1xyXG4gIGxldCBjdXI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGVsXHJcbiAgd2hpbGUgKGN1cikgeyBpZiAoY3VyLmdldEF0dHJpYnV0ZSAmJiBjdXIuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICdkaWFsb2cnKSByZXR1cm4gY3VyOyBjdXIgPSBjdXI/LnBhcmVudEVsZW1lbnQgPz8gbnVsbCB9XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5mdW5jdGlvbiBpc0RpYWxvZ0hpZGRlbihkbGc6IEhUTUxFbGVtZW50KSB7XHJcbiAgY29uc3QgY3MgPSBnZXRDb21wdXRlZFN0eWxlKGRsZylcclxuICByZXR1cm4gZGxnLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSA9PT0gJ3RydWUnIHx8IGNzLmRpc3BsYXkgPT09ICdub25lJyB8fCBjcy52aXNpYmlsaXR5ID09PSAnaGlkZGVuJ1xyXG59XHJcbmxldCBfYXBwbHlpbmdTdHlsZSA9IGZhbHNlXHJcbmZ1bmN0aW9uIGZvcmNlUGFuZWxTdHlsZShkbGc6IEhUTUxFbGVtZW50KSB7XHJcbiAgaWYgKF9hcHBseWluZ1N0eWxlKSByZXR1cm5cclxuICBfYXBwbHlpbmdTdHlsZSA9IHRydWVcclxuICB0cnkge1xyXG4gICAgY29uc3QgcyA9IGRsZy5zdHlsZVxyXG4gICAgaWYgKHMuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKSAhPT0gJ2Fic29sdXRlJykgcy5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnYWJzb2x1dGUnLCAnaW1wb3J0YW50JylcclxuICAgIHMucmVtb3ZlUHJvcGVydHkoJ2xlZnQnKTsgcy5yZW1vdmVQcm9wZXJ0eSgnYm90dG9tJyk7IHMucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpXHJcbiAgICBzLnNldFByb3BlcnR5KCdpbnNldCcsICdhdXRvIGF1dG8gYXV0byBhdXRvJylcclxuICAgIHMuc2V0UHJvcGVydHkoJ3RvcCcsIGAke1BBTkVMX01BUkdJTl9UT1B9cHhgLCAnaW1wb3J0YW50JylcclxuICAgIHMuc2V0UHJvcGVydHkoJ3JpZ2h0JywgYCR7UEFORUxfTUFSR0lOX1JJR0hUfXB4YCwgJ2ltcG9ydGFudCcpXHJcbiAgICBpZiAocy5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpICE9PSBgJHtERUZBVUxUX1dJRFRIfXB4YCkgcy5zZXRQcm9wZXJ0eSgnd2lkdGgnLCBgJHtERUZBVUxUX1dJRFRIfXB4YCwgJ2ltcG9ydGFudCcpXHJcbiAgICBpZiAocy5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSAhPT0gYCR7REVGQVVMVF9IRUlHSFR9cHhgKSBzLnNldFByb3BlcnR5KCdoZWlnaHQnLCBgJHtERUZBVUxUX0hFSUdIVH1weGAsICdpbXBvcnRhbnQnKVxyXG4gICAgaWYgKHMuZ2V0UHJvcGVydHlWYWx1ZSgnbWF4LWhlaWdodCcpICE9PSAnY2FsYygxMDAlIC0gMjRweCknKSBzLnNldFByb3BlcnR5KCdtYXgtaGVpZ2h0JywgJ2NhbGMoMTAwJSAtIDI0cHgpJywgJ2ltcG9ydGFudCcpXHJcbiAgICBpZiAocy5nZXRQcm9wZXJ0eVZhbHVlKCdvdmVyZmxvdycpICE9PSAndmlzaWJsZScpIHMuc2V0UHJvcGVydHkoJ292ZXJmbG93JywgJ3Zpc2libGUnLCAnaW1wb3J0YW50JylcclxuICAgIGlmIChzLmdldFByb3BlcnR5VmFsdWUoJ3otaW5kZXgnKSAhPT0gJzk5OTknKSBzLnNldFByb3BlcnR5KCd6LWluZGV4JywgJzk5OTknLCAnaW1wb3J0YW50JylcclxuICB9IGZpbmFsbHkgeyBfYXBwbHlpbmdTdHlsZSA9IGZhbHNlIH1cclxufVxyXG5mdW5jdGlvbiB1c2VGb3JjZVJpZ2h0UG9zaXRpb24ocm9vdFJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50Pikge1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2xlYW51cDogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGxcclxuICAgIGNvbnN0IGFwcGx5ID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBkbGcgPVxyXG4gICAgICAgIChyb290UmVmLmN1cnJlbnQgJiYgKHJvb3RSZWYuY3VycmVudC5jbG9zZXN0KCdbcm9sZT1cImRpYWxvZ1wiXScpIGFzIEhUTUxFbGVtZW50KSkgfHxcclxuICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2W3JvbGU9XCJkaWFsb2dcIl1bYXJpYS1sYWJlbD1cIm1hcGEtZGUtZGlzdHJpYnVpY2FvLXYyXCJdJykgYXMgSFRNTEVsZW1lbnQpIHx8XHJcbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdltyb2xlPVwiZGlhbG9nXCJdW2FyaWEtbGFiZWw9XCJtYXBhLWRlLWRpc3RyaWJ1aWNhb1wiXScpIGFzIEhUTUxFbGVtZW50KVxyXG4gICAgICBpZiAoIWRsZykgcmV0dXJuXHJcbiAgICAgIGZvcmNlUGFuZWxTdHlsZShkbGcpXHJcbiAgICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xyXG4gICAgICAgIGlmIChfYXBwbHlpbmdTdHlsZSkgcmV0dXJuXHJcbiAgICAgICAgaWYgKG11dGF0aW9ucy5zb21lKChtKSA9PiBtLmF0dHJpYnV0ZU5hbWUgPT09ICdzdHlsZScpKSB7XHJcbiAgICAgICAgICBjb25zdCBzID0gZGxnLnN0eWxlXHJcbiAgICAgICAgICBjb25zdCBkcmlmdCA9IHMuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKSAhPT0gJ2Fic29sdXRlJ1xyXG4gICAgICAgICAgICB8fCBzLmdldFByb3BlcnR5VmFsdWUoJ3RvcCcpICE9PSBgJHtQQU5FTF9NQVJHSU5fVE9QfXB4YFxyXG4gICAgICAgICAgICB8fCBzLmdldFByb3BlcnR5VmFsdWUoJ3JpZ2h0JykgIT09IGAke1BBTkVMX01BUkdJTl9SSUdIVH1weGBcclxuICAgICAgICAgICAgfHwgKHMudHJhbnNmb3JtICYmIHMudHJhbnNmb3JtICE9PSAnbm9uZScpXHJcbiAgICAgICAgICBpZiAoZHJpZnQpIGZvcmNlUGFuZWxTdHlsZShkbGcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBtby5vYnNlcnZlKGRsZywgeyBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXSB9KVxyXG4gICAgICBsZXQgdG86IGFueVxyXG4gICAgICBjb25zdCBvblJlc2l6ZSA9ICgpID0+IHsgY2xlYXJUaW1lb3V0KHRvKTsgdG8gPSBzZXRUaW1lb3V0KCgpID0+IGZvcmNlUGFuZWxTdHlsZShkbGcpLCA4MCkgfVxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpXHJcbiAgICAgIGNsZWFudXAgPSAoKSA9PiB7IG1vLmRpc2Nvbm5lY3QoKTsgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKSB9XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXBwbHkpOyBzZXRUaW1lb3V0KGFwcGx5LCA4MCk7IHNldFRpbWVvdXQoYXBwbHksIDMwMClcclxuICAgIHJldHVybiAoKSA9PiB7IGNsZWFudXA/LigpIH1cclxuICB9LCBbcm9vdFJlZl0pXHJcbn1cclxuXHJcbmNvbnN0IGxheWVySWRGb3JTYW1wbGUgPSAodGlwbzogc3RyaW5nKSA9PiBgYW1vc3RyYXNfJHt0aXBvLnJlcGxhY2UoL1xccysvZywgJ18nKX1gXHJcbmZ1bmN0aW9uIGNsZWFyQW1vc3RyYXModmlldzogX19lc3JpLlZpZXcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWxsID0gKHZpZXcubWFwIGFzIGFueSkuYWxsTGF5ZXJzPy50b0FycmF5Py4oKSA/PyB2aWV3Lm1hcC5sYXllcnM/LnRvQXJyYXk/LigpID8/IFtdXHJcbiAgICBhbGwuZm9yRWFjaCgobHk6IGFueSkgPT4geyBjb25zdCBpZCA9IFN0cmluZyhseT8uaWQgPz8gJycpOyBpZiAoaWQuc3RhcnRzV2l0aCgnYW1vc3RyYXNfJykpIHZpZXcubWFwLnJlbW92ZShseSkgfSlcclxuICB9IGNhdGNoIHt9XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJNaW5lcmFpcyh2aWV3OiBfX2VzcmkuVmlldykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhbGwgPSAodmlldy5tYXAgYXMgYW55KS5hbGxMYXllcnM/LnRvQXJyYXk/LigpID8/IHZpZXcubWFwLmxheWVycz8udG9BcnJheT8uKCkgPz8gW11cclxuICAgIGNvbnN0IHRvUmVtb3ZlOiBhbnlbXSA9IFtdXHJcbiAgICBhbGwuZm9yRWFjaCgobHk6IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCBpZCA9IFN0cmluZyhseT8uaWQgPz8gJycpXHJcbiAgICAgIGlmICgvXm1pbmVyYWlzXy9pLnRlc3QoaWQpKSB0b1JlbW92ZS5wdXNoKGx5KVxyXG4gICAgfSlcclxuICAgIHRvUmVtb3ZlLmZvckVhY2gobHkgPT4gdmlldy5tYXAucmVtb3ZlKGx5KSlcclxuICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XSBjbGVhck1pbmVyYWlzIC0+IHJlbW92aWRhcycsIHRvUmVtb3ZlLm1hcChsID0+IGwuaWQpKVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUud2FybignW3dpZGdldF0gY2xlYXJNaW5lcmFpcyBmYWxob3UnLCBlKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJMYXllck9mVGlwbyh2aWV3OiBfX2VzcmkuVmlldywgdGlwbzogc3RyaW5nKSB7XHJcbiAgdHJ5IHsgY29uc3QgbHlyID0gdmlldy5tYXAuZmluZExheWVyQnlJZChsYXllcklkRm9yU2FtcGxlKHRpcG8pKSBhcyBhbnk7IGlmIChseXIpIHZpZXcubWFwLnJlbW92ZShseXIpIH0gY2F0Y2gge31cclxufVxyXG5mdW5jdGlvbiBkaXNhYmxlQ2x1c3Rlck51bWJlcnMobHlyOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgaWYgKCFseXIpIHJldHVyblxyXG4gICAgaWYgKGx5ci5mZWF0dXJlUmVkdWN0aW9uICYmIGx5ci5mZWF0dXJlUmVkdWN0aW9uLnR5cGUgPT09ICdjbHVzdGVyJykge1xyXG4gICAgICBseXIuZmVhdHVyZVJlZHVjdGlvbiA9IHsgLi4ubHlyLmZlYXR1cmVSZWR1Y3Rpb24sIGxhYmVsc1Zpc2libGU6IGZhbHNlIH1cclxuICAgIH1cclxuICAgIGlmICgnbGFiZWxzVmlzaWJsZScgaW4gbHlyKSAobHlyIGFzIGFueSkubGFiZWxzVmlzaWJsZSA9IGZhbHNlXHJcbiAgICBpZiAoJ2xhYmVsaW5nSW5mbycgaW4gbHlyKSAobHlyIGFzIGFueSkubGFiZWxpbmdJbmZvID0gW11cclxuICAgIGlmIChBcnJheS5pc0FycmF5KChseXIgYXMgYW55KS5zdWJsYXllcnMpKSAobHlyIGFzIGFueSkuc3VibGF5ZXJzLmZvckVhY2goKHNsOiBhbnkpID0+IGRpc2FibGVDbHVzdGVyTnVtYmVycyhzbCkpXHJcbiAgfSBjYXRjaCB7fVxyXG59XHJcblxyXG5cclxuLyogPT09PT0gQ29tcG9uZW50ZSA9PT09PSAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQocHJvcHM6IGFueSkge1xyXG4gIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddID0gUmVhY3QudXNlU3RhdGU8SmltdU1hcFZpZXc+KClcclxuICBjb25zdCBbY2F0ZWdvcmlhLCBzZXRDYXRlZ29yaWFdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJykgLy8gJ3NhbXBsZScgfCAnbWluZXJhbHMnXHJcbiAgY29uc3QgW3RpcG9zU2VsLCBzZXRUaXBvc1NlbF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pIC8vIGFtb3N0cmFzIChjaGVja2JveGVzKVxyXG4gIGNvbnN0IFtzaG93RW1wdHksIHNldFNob3dFbXB0eV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuXHJcbiAgLy8gSW50ZXJlc3NlXHJcbiAgY29uc3QgW3dpdGhJbnRlcmVzdCwgc2V0V2l0aEludGVyZXN0XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtzaG93V2l0aEludGVyZXN0LCBzZXRzaG93V2l0aEludGVyZXN0XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtmYWl4YVNldCwgc2V0RmFpeGFTZXRdID0gUmVhY3QudXNlU3RhdGU8U2V0PG51bWJlcj4+KFxyXG4gICAgKCkgPT4gbmV3IFNldDxudW1iZXI+KChBcnJheS5pc0FycmF5KHByb3BzPy5jb2RpZ29zRmFpeGFJbnRlcmVzc2UpID8gcHJvcHMuY29kaWdvc0ZhaXhhSW50ZXJlc3NlIDogW10pXHJcbiAgICAgIC5tYXAoKHY6IGFueSkgPT4gTnVtYmVyKHYpKS5maWx0ZXIoKHY6IGFueSkgPT4gIWlzTmFOKHYpKSlcclxuICApXHJcblxyXG4gIC8vYnVzY2Fkb3IgZGUgbWluZXJhaXNcclxuICBjb25zdCBbYWdydXBhZG9yRGFkb3MsIHNldEFncnVwYWRvckRhZG9zXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PHtcclxuICAgIGNvZGlnb1BvY286IG51bWJlclxyXG4gICAgcXRBbmFsaXNlOiBudW1iZXJcclxuICAgIHZhbG9yTWVkaW86IG51bWJlclxyXG4gICAgdmFsb3JNYXhpbW86IG51bWJlclxyXG4gIH0+IHwgbnVsbD4obnVsbClcclxuXHJcbiAgLy8gQmFzZXMgKGFtb3N0cmFzKVxyXG4gIGNvbnN0IFtkYWRvc0Z1bGwsIHNldERhZG9zRnVsbF0gPSBSZWFjdC51c2VTdGF0ZTxBbW9zdHJhSXRlbVtdIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBbZGFkb3NGYWl4YUFQSSwgc2V0RGFkb3NGYWl4YUFQSV0gPSBSZWFjdC51c2VTdGF0ZTxBbW9zdHJhSXRlbVtdIHwgbnVsbD4obnVsbClcclxuXHJcbiAgLy8gTWluZXJhaXNcclxuICBjb25zdCBbbWluZXJhbEFuYWxpc2UsIHNldE1pbmVyYWxBbmFsaXNlXSA9IFJlYWN0LnVzZVN0YXRlPE1pbmVyYWxUaXBvIHwgJyc+KCcnKSAvLyByw6FkaW8gKERSWC9RZW1zY2FuL1RvZGFzKVxyXG4gIGNvbnN0IFtsaXN0YU1pbmVyYWlzLCBzZXRMaXN0YU1pbmVyYWlzXSA9IFJlYWN0LnVzZVN0YXRlPE1pbmVyYWxMaXN0YUl0ZW1bXT4oW10pXHJcbiAgY29uc3QgW2J1c2NhTWluZXJhbCwgc2V0QnVzY2FNaW5lcmFsXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFttaW5lcmFsU2VsZWNpb25hZG8sIHNldE1pbmVyYWxTZWxlY2lvbmFkb10gPSBSZWFjdC51c2VTdGF0ZTxNaW5lcmFsTGlzdGFJdGVtIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBbYWdydXBhZG9yLCBzZXRBZ3J1cGFkb3JdID0gUmVhY3QudXNlU3RhdGU8J2FuYWxpc2UnIHwgJ21lZGlhJyB8ICdtYXhpbWEnIHwgJyc+KCcnKSAvLyBhZ3J1cGFkb3Jlc1xyXG4gIGNvbnN0IFtkYWRvc01pbmVyYWlzLCBzZXREYWRvc01pbmVyYWlzXSA9IFJlYWN0LnVzZVN0YXRlPGltcG9ydCgnLi9NaW5lcmFscycpLk1pbmVyYWxJdGVtW10gfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFtsb2FkaW5nTWluZXJhaXMsIHNldExvYWRpbmdNaW5lcmFpc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZXJyb3JNaW5lcmFpcywgc2V0RXJyb3JNaW5lcmFpc10gPSBSZWFjdC51c2VTdGF0ZSgnJylcclxuXHJcbiAgLy8gTG9hZGluZyAvIGVycm9zIChhbW9zdHJhcylcclxuICBjb25zdCBbbG9hZGluZ0Z1bGwsIHNldExvYWRpbmdGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsb2FkaW5nSW50ZXJlc3QsIHNldExvYWRpbmdJbnRlcmVzdF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZXJyb3JGdWxsLCBzZXRFcnJvckZ1bGxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJylcclxuICBjb25zdCBbZXJyb3JJbnRlcmVzdCwgc2V0RXJyb3JJbnRlcmVzdF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKVxyXG5cclxuICBjb25zdCByb290UmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxyXG4gIHVzZUZvcmNlUmlnaHRQb3NpdGlvbihyb290UmVmKVxyXG5cclxuICBjb25zdCBpbnRlcmVzdE1hbnVhbFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSlcclxuXHJcbiAgLyogPj4+IFNpbmFsaXphIGFvIFBBSSBxdWUgbyB3aWRnZXQgZXN0w6EgcHJvbnRvIChwYXJhIGVsZSBtYW5kYXIgY29kaWdvcy9jb25maWcpICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB0YXJnZXRPcmlnaW4gPSAnKidcclxuICAgIHRyeSB7IGlmIChkb2N1bWVudC5yZWZlcnJlcikgdGFyZ2V0T3JpZ2luID0gbmV3IFVSTChkb2N1bWVudC5yZWZlcnJlcikub3JpZ2luIH0gY2F0Y2gge31cclxuICAgIC8vIGF2aXNhIHF1ZSBvIHdpZGdldCBlc3TDoSBwcm9udG9cclxuICAgIHdpbmRvdy5wYXJlbnQ/LnBvc3RNZXNzYWdlKHsgdHlwZTogJ3dpZGdldFJlYWR5JyB9LCB0YXJnZXRPcmlnaW4pXHJcbiAgICBjb25zb2xlLmxvZygnW3dpZGdldF0gd2lkZ2V0UmVhZHkgZW52aWFkbyBwYXJhJywgdGFyZ2V0T3JpZ2luKVxyXG4gIH0sIFtdKVxyXG5cclxuICAvKiBSZWNlYmUgbWVuc2FnZW5zIGRvIFBBSSAoZmFpeGEtaW50ZXJlc3NlLCBsZWdlbmQ6bWluZXJhaXMsIGNvbmZpZykgKi9cclxuICAvLyBNZW5zYWdlbnMgdmluZGFzIGRvIFBBSSAoRXhwbG9yYSk6IGZhaXhhLWludGVyZXNzZSwgY29uZmlnLCBsZWdlbmQ6bWluZXJhaXNcclxuUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBsaXN0ZW5lciBPTiDigJQgYWd1YXJkYW5kbyBtZW5zYWdlbnMgZG8gcGFp4oCmJywge1xyXG4gICAgc2VsZk9yaWdpbjogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcclxuICAgIHJlZmVycmVyOiBkb2N1bWVudC5yZWZlcnJlciB8fCAnKHNlbSByZWZlcnJlciknXHJcbiAgfSlcclxuXHJcbiAgY29uc3Qgb25Nc2cgPSAoZXY6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGV2Py5kYXRhIGFzIGFueVxyXG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhLnR5cGUpIHJldHVyblxyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFt3aWRnZXRdW21zZ10gcmVjZWJpZG8gdHlwZT1cIiR7ZGF0YS50eXBlfVwiYClcclxuICAgIGNvbnNvbGUubG9nKCdvcmlnaW46JywgZXYub3JpZ2luLCAnc291cmNlPT09cGFyZW50PycsIGV2LnNvdXJjZSA9PT0gd2luZG93LnBhcmVudClcclxuICAgIGNvbnNvbGUubG9nKCdwYXlsb2FkIGJydXRvOicsIGRhdGEpXHJcblxyXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2ZhaXhhLWludGVyZXNzZScgJiYgQXJyYXkuaXNBcnJheSgoZGF0YSBhcyBNc2dGYWl4YUludGVyZXNzZSkuY29kaWdvc1BvY29zKSkge1xyXG4gICAgICBjb25zdCBudW1zID0gKGRhdGEgYXMgTXNnRmFpeGFJbnRlcmVzc2UpLmNvZGlnb3NQb2Nvc1xyXG4gICAgICAgIC5tYXAoKHYpID0+IE51bWJlcih2KSlcclxuICAgICAgICAuZmlsdGVyKCh2KSA9PiAhaXNOYU4odikpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIGZhaXhhLWludGVyZXNzZSA9PiBub3JtYWxpemFkb3M6Jywge1xyXG4gICAgICAgIHJlY2ViaWRvczogKGRhdGEgYXMgTXNnRmFpeGFJbnRlcmVzc2UpLmNvZGlnb3NQb2Nvcy5sZW5ndGgsXHJcbiAgICAgICAgdmFsaWRvczogbnVtcy5sZW5ndGgsXHJcbiAgICAgICAgcHJldmlldzogbnVtcy5zbGljZSgwLCAxMClcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIGVzdGFkbyBhdHVhbCBhbnRlcyBkZSBkZWNpZGlyXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIGVzdGFkbyBBTlRFUyAoZmFpeGEtaW50ZXJlc3NlKTonLCB7XHJcbiAgICAgICAgc2hvd1dpdGhJbnRlcmVzdCxcclxuICAgICAgICB3aXRoSW50ZXJlc3QsXHJcbiAgICAgICAgaW50ZXJlc3RNYW51YWw6IGludGVyZXN0TWFudWFsUmVmLmN1cnJlbnRcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIGFwbGljYSBvIFNldCBkZSBjw7NkaWdvc1xyXG4gICAgICBzZXRGYWl4YVNldChuZXcgU2V0PG51bWJlcj4obnVtcykpXHJcblxyXG4gICAgICAvLyBzw7MgZXhpYmltb3MvY2hlY2Ftb3Mgc2UgbyBwYWkgcXVlciBxdWUgYXBhcmXDp2EgKHJlc3BlaXRvIMOpIHRyYXRhZG8gbm8gb3V0cm8gdXNlRWZmZWN0KTtcclxuICAgICAgLy8gYXF1aSBhcGVuYXMgXCJwcm9wb21vc1wiIGV4aWJpciBjYXNvIHZlbmhhIGZhaXhhIGNvbSBlbGVtZW50b3NcclxuICAgICAgaWYgKG51bXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIGhhdmVyw6EgdGVudGF0aXZhIGRlIGV4aWJpci9jaGVjYXIgbyBpbnRlcnZhbG8gKGRlcGVuZGVuZG8gZG8gb3V0cm8gZWZlaXRvIGUgZG8gbWFudWFsUmVmKScpXHJcbiAgICAgICAgc2V0c2hvd1dpdGhJbnRlcmVzdCh0cnVlKVxyXG4gICAgICAgIGlmICghaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gbWFyY2FuZG8gd2l0aEludGVyZXN0IGF1dG9tYXRpY2FtZW50ZSAodXN1w6FyaW8gYWluZGEgbsOjbyBhbHRlcm91IG1hbnVhbG1lbnRlKScpXHJcbiAgICAgICAgICBzZXRXaXRoSW50ZXJlc3QodHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gTsODTyBtYXJjYW1vcyB3aXRoSW50ZXJlc3QgKHVzdcOhcmlvIGrDoSBtZXhldSBtYW51YWxtZW50ZSknKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBsaXN0YSBkYSBmYWl4YSBlc3TDoSB2YXppYSDigJQgbsOjbyBhbHRlcmFtb3Mgd2l0aEludGVyZXN0JylcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gbG9nYSBvIGVzdGFkbyDigJxsb2dvIGFww7Nz4oCdIG8gY2ljbG8gYXR1YWwgZGUgcmVuZGVyIChtZWxob3IgdmlzaWJpbGlkYWRlKVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBlc3RhZG8gQVDDk1Mgc2V0U3RhdGUgKGZhaXhhLWludGVyZXNzZSk6Jywge1xyXG4gICAgICAgICAgc2hvd1dpdGhJbnRlcmVzdCxcclxuICAgICAgICAgIHdpdGhJbnRlcmVzdCxcclxuICAgICAgICAgIGludGVyZXN0TWFudWFsOiBpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50XHJcbiAgICAgICAgfSlcclxuICAgICAgfSwgMClcclxuICAgICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzOm9rJykge1xyXG4gICAgICBjb25zdCBjZmcgPSBkYXRhIGFzIE1zZ0NvbmZpZ1xyXG4gICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzOm9rIHJlY2ViaWRhOicsIGNmZylcclxuXHJcbiAgICAgIC8vQWp1c3RhbmRvIGludGVydmFsbyBkZSBpbnRlcmVzc2UgcGFyYSBhcGFyZWNlclxyXG4gICAgICBzZXRXaXRoSW50ZXJlc3QoY2ZnWydtZXNzYWdlJ11bJ3Zpc2libGUnXSlcclxuICAgICAgc2V0c2hvd1dpdGhJbnRlcmVzdCgoY2ZnWydtZXNzYWdlJ11bJ3Zpc2libGUnXSkpXHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBlc3RhZG8gQU5URVMgKGZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXM6b2spOicsIHtcclxuICAgICAgICBzaG93V2l0aEludGVyZXN0LFxyXG4gICAgICAgIHdpdGhJbnRlcmVzdCxcclxuICAgICAgICBpbnRlcmVzdE1hbnVhbDogaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKGNmZy5zdGFydFdpdGhJbnRlcmVzdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIHBhaSBzaW5hbGl6b3Ugc3RhcnRXaXRoSW50ZXJlc3Q9VFJVRSAtPiBtb3N0cmFyIGNoZWNrYm94JylcclxuICAgICAgICBzZXRzaG93V2l0aEludGVyZXN0KHRydWUpXHJcbiAgICAgICAgaWYgKCFpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBtYXJjYW5kbyB3aXRoSW50ZXJlc3QgcG9ycXVlIHVzdcOhcmlvIG7Do28gbWV4ZXUgbWFudWFsbWVudGUnKVxyXG4gICAgICAgICAgc2V0V2l0aEludGVyZXN0KHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIE7Dg08gbWFyY2Ftb3Mgd2l0aEludGVyZXN0IChyZXNwZWl0YW5kbyBlc2NvbGhhIG1hbnVhbCBwcsOpdmlhKScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIHN0YXJ0V2l0aEludGVyZXN0IGF1c2VudGUvZmFsc28g4oCUIG7Do28gZm9yw6dhbW9zIG5hZGEgYXF1aScpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIGVzdGFkbyBBUMOTUyBzZXRTdGF0ZSAoZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhczpvayk6Jywge1xyXG4gICAgICAgICAgc2hvd1dpdGhJbnRlcmVzdCxcclxuICAgICAgICAgIHdpdGhJbnRlcmVzdCxcclxuICAgICAgICAgIGludGVyZXN0TWFudWFsOiBpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50XHJcbiAgICAgICAgfSlcclxuICAgICAgfSwgMClcclxuICAgICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdsZWdlbmQ6bWluZXJhaXMnIHx8IGRhdGEudHlwZSA9PT0gJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXM6b2snKSB7XHJcbiAgICAgIGNvbnN0IF9tc2cgPSBkYXRhIGFzIE1zZ0xlZ2VuZE1pbmVyYWlzXHJcblxyXG4gICAgICAvL0FqdXN0YW5kbyBpbnRlcnZhbG8gZGUgaW50ZXJlc3NlIHBhcmEgYXBhcmVjZXJcclxuICAgICAgc2V0V2l0aEludGVyZXN0KF9tc2dbJ21lc3NhZ2UnXVsndmlzaWJsZSddKVxyXG4gICAgICBzZXRzaG93V2l0aEludGVyZXN0KChfbXNnWydtZXNzYWdlJ11bJ3Zpc2libGUnXSkpXHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBsZWdlbmQ6bWluZXJhaXMgcGF5bG9hZDonLCBfbXNnPy5wYXlsb2FkKVxyXG4gICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJURVNURTogXCIsIGRhdGEpXHJcblxyXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2NvbmZpZycgfHwgZGF0YS50eXBlID09PSAnZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpczpvaycpIHtcclxuICAgICAgY29uc3QgY2ZnID0gZGF0YSBhcyBNc2dDb25maWdcclxuICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gY29uZmlnIHJlY2ViaWRhOicsIGNmZylcclxuICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gKipjZ1Zpc2libGUgZG8gcGFpKiogPScsIGNmZy5jZ1Zpc2libGUpIC8vIDw8PCBpbXByaW1lIG8gJ3Zpc2libGUnXHJcblxyXG4gICAgICAvLyBNb3N0cmFyL29jdWx0YXIgbyBjaGVja2JveCBkZSBJbnRlcnZhbG8gZGUgSW50ZXJlc3NlIGRlIGFjb3JkbyBjb20gYSB2aXNpYmlsaWRhZGUgbm8gcGFpXHJcbiAgICAgIGlmIChjZmcuY2dWaXNpYmxlID09PSB0cnVlKSB7XHJcbiAgICAgICAgc2V0c2hvd1dpdGhJbnRlcmVzdCh0cnVlKVxyXG4gICAgICAgIC8vIFNlIHBhaSB0YW1iw6ltIHBlZGl1IHBhcmEgY29tZcOnYXIgbWFyY2FkbyBlIG8gdXN1w6FyaW8gYWluZGEgbsOjbyBtZXhldTpcclxuICAgICAgICBpZiAoY2ZnLnN0YXJ0V2l0aEludGVyZXN0ICYmICFpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICBzZXRXaXRoSW50ZXJlc3QodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gTsOjbyBtb3N0cmFyIChuZW0gbWFyY2FkbykgcXVhbmRvIG8gY2hlY2tib3ggbsOjbyDDqSB2aXPDrXZlbCBubyBwYWlcclxuICAgICAgICBzZXRzaG93V2l0aEludGVyZXN0KGZhbHNlKVxyXG4gICAgICAgIGlmICghaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudCkgc2V0V2l0aEludGVyZXN0KGZhbHNlKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzw7MgcHJhIGRlcHVyYcOnw6NvIGRvIHJlc3VsdGFkbyBmaW5hbCBuZXN0ZSB0aWNrOlxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBlc3RhZG8gcMOzcy1jb25maWc6Jywge1xyXG4gICAgICAgICAgc2hvd1dpdGhJbnRlcmVzdCxcclxuICAgICAgICAgIHdpdGhJbnRlcmVzdCxcclxuICAgICAgICAgIGludGVyZXN0TWFudWFsOiBpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50XHJcbiAgICAgICAgfSlcclxuICAgICAgfSwgMClcclxuXHJcbiAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gdGlwbyBuw6NvIHRyYXRhZG86JywgZGF0YS50eXBlKVxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTXNnKVxyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTXNnKVxyXG4gICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gbGlzdGVuZXIgT0ZGIOKAlCByZW1vdmlkbyBuYSBkZXNtb250YWdlbSBkbyBlZmVpdG8nKVxyXG4gIH1cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbn0sIFtdKVxyXG5cclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChmYWl4YVNldC5zaXplID4gMCkge1xyXG4gICAgICBzZXRzaG93V2l0aEludGVyZXN0KHRydWUpXHJcbiAgICAgIGlmICghaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudCkgc2V0V2l0aEludGVyZXN0KHRydWUpXHJcbiAgICB9XHJcbiAgfSwgW2ZhaXhhU2V0XSlcclxuXHJcbiAgLyogPT09PT09IEFNT1NUUkFTOiBjYXJyZWdhciBiYXNlID09PT09PSAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnW3dpZGdldF0gZWZlaXRvIGFtb3N0cmFzOmNhcnJlZ2FyIGJhc2UnKVxyXG4gICAgICBjb25zb2xlLmxvZyh7IGNhdGVnb3JpYSwgd2l0aEludGVyZXN0IH0pXHJcbiAgICAgIGlmIChjYXRlZ29yaWEgIT09ICdzYW1wbGUnKSB7IGNvbnNvbGUubG9nKCdza2lwJyk7IGNvbnNvbGUuZ3JvdXBFbmQoKTsgcmV0dXJuIH1cclxuICAgICAgc2V0TG9hZGluZ0Z1bGwodHJ1ZSk7IHNldEVycm9yRnVsbCgnJylcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcyh3aXRoSW50ZXJlc3QgfHwgREVGQVVMVF9GQUlYQV9JTlRFUkVTU0UpXHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHsgc2V0RGFkb3NGdWxsKGRhdGEpOyBjb25zb2xlLmxvZygnW3dpZGdldF0gYW1vc3RyYXMgYmFzZScsIGRhdGE/Lmxlbmd0aCkgfVxyXG4gICAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbd2lkZ2V0XSBlcnJvIGJhc2UgYW1vc3RyYXMnLCBlKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7IHNldEVycm9yRnVsbChlPy5tZXNzYWdlIHx8ICdGYWxoYSBhbyBidXNjYXIgZGFkb3MnKTsgc2V0RGFkb3NGdWxsKFtdKSB9XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHsgc2V0TG9hZGluZ0Z1bGwoZmFsc2UpOyBjb25zb2xlLmdyb3VwRW5kKCkgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBydW4oKVxyXG4gICAgcmV0dXJuICgpID0+IHsgY2FuY2VsbGVkID0gdHJ1ZSB9XHJcbiAgfSwgW2NhdGVnb3JpYSwgd2l0aEludGVyZXN0XSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbd2lkZ2V0XSBlZmVpdG8gYW1vc3RyYXM6Y2FycmVnYXIgZmFpeGEgQVBJJylcclxuICAgICAgY29uc29sZS5sb2coeyBjYXRlZ29yaWEsIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXRTaXplOiBmYWl4YVNldC5zaXplLCBoYXNEYWRvc0ZhaXhhQVBJOiBkYWRvc0ZhaXhhQVBJICE9PSBudWxsIH0pXHJcbiAgICAgIGlmIChjYXRlZ29yaWEgIT09ICdzYW1wbGUnKSB7IGNvbnNvbGUubG9nKCdza2lwIGNhdGVnb3JpYScpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcbiAgICAgIGlmICghd2l0aEludGVyZXN0KSB7IGNvbnNvbGUubG9nKCdza2lwIHNlbSBpbnRlcmVzc2UnKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG4gICAgICBpZiAoZmFpeGFTZXQuc2l6ZSA+IDApIHsgY29uc29sZS5sb2coJ3NraXAgZmFpeGEgdmluZGEgZG8gcGFpJyk7IGNvbnNvbGUuZ3JvdXBFbmQoKTsgcmV0dXJuIH1cclxuICAgICAgaWYgKGRhZG9zRmFpeGFBUEkgIT09IG51bGwpIHsgY29uc29sZS5sb2coJ3NraXAgasOhIGNhcnJlZ2FkbycpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcbiAgICAgIHNldExvYWRpbmdJbnRlcmVzdCh0cnVlKTsgc2V0RXJyb3JJbnRlcmVzdCgnJylcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcyh0cnVlKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7IHNldERhZG9zRmFpeGFBUEkoZGF0YSk7IGNvbnNvbGUubG9nKCdbd2lkZ2V0XSBhbW9zdHJhcyBmYWl4YSBBUEknLCBkYXRhPy5sZW5ndGgpIH1cclxuICAgICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW3dpZGdldF0gZXJybyBmYWl4YSBBUEknLCBlKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7IHNldEVycm9ySW50ZXJlc3QoZT8ubWVzc2FnZSB8fCAnRmFsaGEgYW8gYnVzY2FyIGRhZG9zIGRvIGludGVydmFsbyBkZSBpbnRlcmVzc2UnKTsgc2V0RGFkb3NGYWl4YUFQSShbXSkgfVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7IHNldExvYWRpbmdJbnRlcmVzdChmYWxzZSk7IGNvbnNvbGUuZ3JvdXBFbmQoKSB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJ1bigpXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbY2F0ZWdvcmlhLCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0LCBkYWRvc0ZhaXhhQVBJXSlcclxuXHJcbiAgLyogPT09PT09IEFNT1NUUkFTOiBkZXNlbmhhciA9PT09PT0gKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnW3dpZGdldF0gZWZlaXRvIGFtb3N0cmFzOmRlc2VuaGFyJylcclxuICAgIGNvbnN0IGptdiA9IGppbXVNYXBWaWV3XHJcbiAgICBpZiAoIWptdj8udmlldykgeyBjb25zb2xlLmxvZygnc2tpcCBzZW0gdmlldycpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcbiAgICBpZiAoY2F0ZWdvcmlhICE9PSAnc2FtcGxlJykgeyBjb25zb2xlLmxvZygnc2tpcCBjYXRlZ29yaWEnKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG5cclxuICAgIGNvbnN0IGJhc2U6IEFtb3N0cmFJdGVtW10gPSB3aXRoSW50ZXJlc3RcclxuICAgICAgPyAoZmFpeGFTZXQuc2l6ZSA+IDBcclxuICAgICAgICAgID8gKGRhZG9zRnVsbCA/PyBbXSkuZmlsdGVyKHggPT4gZmFpeGFTZXQuaGFzKE51bWJlcih4LmNvZGlnb1BvY28pKSlcclxuICAgICAgICAgIDogKGRhZG9zRmFpeGFBUEkgPz8gZGFkb3NGdWxsID8/IFtdKSlcclxuICAgICAgOiAoZGFkb3NGdWxsID8/IFtdKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XSBiYXNlIHNpemUnLCBiYXNlLmxlbmd0aCwgJ3RpcG9zU2VsJywgdGlwb3NTZWwpXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYmFzZSkgfHwgYmFzZS5sZW5ndGggPT09IDApIHsgY29uc29sZS5sb2coJ3NraXAgYmFzZSB2YXppYScpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGlwb3NTZWwpIHx8IHRpcG9zU2VsLmxlbmd0aCA9PT0gMCkgeyBjb25zb2xlLmxvZygnc2tpcCBzZW0gdGlwb3MnKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG5cclxuICAgIGNvbnN0IHsgdmlldyB9ID0gam12XHJcblxyXG4gICAgdGlwb3NTZWwuZm9yRWFjaCgodGlwbykgPT4ge1xyXG4gICAgICBjb25zdCBkYWRvcyA9IGJhc2VcclxuICAgICAgICAubWFwKGQgPT4gKHsgY29kaWdvUG9jbzogZC5jb2RpZ29Qb2NvLCB0b3RhbDogZFtUWVBFX0ZJRUxEW3RpcG9dXSA/PyAwIH0pKVxyXG4gICAgICAgIC5maWx0ZXIoZCA9PiAoZC50b3RhbCA/PyAwKSA+IDApXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhgW3dpZGdldF0gdGlwbz0ke3RpcG99IGRhZG9zYCwgZGFkb3MubGVuZ3RoKVxyXG5cclxuICAgICAgY2xlYXJMYXllck9mVGlwbyh2aWV3LCB0aXBvKVxyXG4gICAgICBpZiAoZGFkb3MubGVuZ3RoID09PSAwKSByZXR1cm5cclxuXHJcbiAgICAgIGNvbnN0IGNvbG9yRmlsbCA9IGNvcmVzVGlwb3NbdGlwb10gfHwgJ3JnYmEoMCwwLDAsMC41KSdcclxuICAgICAgY29uc3QgaWRDYW1hZGEgPSBsYXllcklkRm9yU2FtcGxlKHRpcG8pXHJcbiAgICAgIGNvbnN0IGlkTGVnZW5kYSA9IGBsZ2RfJHtpZENhbWFkYX1gXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCKHtcclxuICAgICAgICAgIGppbXVNYXBWaWV3OiBqbXYsXHJcbiAgICAgICAgICBkYWRvcyxcclxuICAgICAgICAgIGNvbG9yRmlsbCxcclxuICAgICAgICAgIGlkQ2FtYWRhLFxyXG4gICAgICAgICAgaWRMZWdlbmRhLFxyXG4gICAgICAgICAgdGl0bGVMZWdlbmRhOiAod2l0aEludGVyZXN0ID8gJ0ludGVydmFsbyBkZSBJbnRlcmVzc2UgLSAnIDogJycpICsgKHRpcG8uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aXBvLnNsaWNlKDEpKSxcclxuICAgICAgICAgIHdpdGhJbnRlcmVzdFxyXG4gICAgICAgIH0gYXMgYW55KVxyXG5cclxuICAgICAgICBjb25zdCBseXIgPSB2aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGlkQ2FtYWRhKSBhcyBhbnlcclxuICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF0gY2FtYWRhIGNyaWFkYT8nLCAhIWx5ciwgaWRDYW1hZGEpXHJcbiAgICAgICAgaWYgKGx5cikgZGlzYWJsZUNsdXN0ZXJOdW1iZXJzKGx5cilcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFthbW9zdHJhc10gZmFsaGEgYW8gZ2VyYXIgY2FtYWRhICR7aWRDYW1hZGF9YCwgZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gIH0sIFtqaW11TWFwVmlldywgdGlwb3NTZWwsIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXQsIGRhZG9zRnVsbCwgZGFkb3NGYWl4YUFQSSwgY2F0ZWdvcmlhXSlcclxuXHJcbiAgLyogPT09PT09IE1JTkVSQUlTOiBhbyBtdWRhciBvIHJhZGlvIGRlIGFuw6FsaXNlIC0+IGJ1c2NhIENPTlRBRE9SIGUgTElTVEEgPT09PT09ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbd2lkZ2V0XSBlZmVpdG8gbWluZXJhaXM6cmFkaW8nKVxyXG4gICAgICBjb25zb2xlLmxvZyh7IGNhdGVnb3JpYSwgbWluZXJhbEFuYWxpc2UsIHdpdGhJbnRlcmVzdCB9KVxyXG4gICAgICBpZiAoY2F0ZWdvcmlhICE9PSAnbWluZXJhbHMnKSB7IGNvbnNvbGUubG9nKCdza2lwIGNhdGVnb3JpYScpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcbiAgICAgIGlmICghbWluZXJhbEFuYWxpc2UpIHsgY29uc29sZS5sb2coJ3NraXAgc2VtIGFuYWxpc2UnKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG5cclxuICAgICAgLy8gcmVzZXQgVUkgZGVwZW5kZW50ZVxyXG4gICAgICBzZXRNaW5lcmFsU2VsZWNpb25hZG8obnVsbClcclxuICAgICAgc2V0QWdydXBhZG9yKCcnKVxyXG4gICAgICBzZXRMaXN0YU1pbmVyYWlzKFtdKVxyXG4gICAgICBzZXRCdXNjYU1pbmVyYWwoJycpXHJcbiAgICAgIHNldEVycm9yTWluZXJhaXMoJycpXHJcbiAgICAgIHNldExvYWRpbmdNaW5lcmFpcyh0cnVlKVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBbY29udGFkb3IsIGxpc3RhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgIGZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXNDb250YWRvcihtaW5lcmFsQW5hbGlzZSBhcyBNaW5lcmFsVGlwbywgd2l0aEludGVyZXN0KSxcclxuICAgICAgICAgIGZldGNoTWluZXJhbExpc3RhKG1pbmVyYWxBbmFsaXNlIGFzIE1pbmVyYWxUaXBvLCB3aXRoSW50ZXJlc3QpXHJcbiAgICAgICAgXSlcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdIGNvbnRhZG9yLyBsaXN0YSByZWNlYmlkb3MnLCBjb250YWRvcj8ubGVuZ3RoLCBsaXN0YT8ubGVuZ3RoKVxyXG4gICAgICAgICAgc2V0RGFkb3NNaW5lcmFpcyhjb250YWRvcilcclxuICAgICAgICAgIHNldExpc3RhTWluZXJhaXMobGlzdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbd2lkZ2V0XSBlcnJvIGZldGNoIG1pbmVyYWlzJywgZSlcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgc2V0RXJyb3JNaW5lcmFpcyhlPy5tZXNzYWdlIHx8ICdGYWxoYSBhbyBidXNjYXIgbWluZXJhaXMnKVxyXG4gICAgICAgICAgc2V0RGFkb3NNaW5lcmFpcyhbXSlcclxuICAgICAgICAgIHNldExpc3RhTWluZXJhaXMoW10pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7IHNldExvYWRpbmdNaW5lcmFpcyhmYWxzZSk7IGNvbnNvbGUuZ3JvdXBFbmQoKSB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJ1bigpXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbY2F0ZWdvcmlhLCBtaW5lcmFsQW5hbGlzZSwgd2l0aEludGVyZXN0XSlcclxuXHJcbiAgLyogPT09PT09IE1JTkVSQUlTOiBkZXNlbmhhciBiYXNlIChjb250YWRvcikgcXVhbmRvIGNoZWdhID09PT09PSAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbd2lkZ2V0XSBlZmVpdG8gbWluZXJhaXM6ZGVzZW5oYXIgYmFzZScpXHJcbiAgICBjb25zb2xlLmxvZyh7IGNhdGVnb3JpYSwgaGFzSk1WOiAhIWppbXVNYXBWaWV3Py52aWV3LCBtaW5lcmFsQW5hbGlzZSwgZGFkb3NNaW5lcmFpc0xlbjogZGFkb3NNaW5lcmFpcz8ubGVuZ3RoLCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0U2l6ZTogZmFpeGFTZXQuc2l6ZSB9KVxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGNhdGVnb3JpYSAhPT0gJ21pbmVyYWxzJykgcmV0dXJuIGNvbnNvbGUubG9nKCdza2lwIGNhdGVnb3JpYScpXHJcbiAgICAgIGlmICghamltdU1hcFZpZXc/LnZpZXcpIHJldHVybiBjb25zb2xlLmxvZygnc2tpcCB2aWV3JylcclxuICAgICAgaWYgKCFtaW5lcmFsQW5hbGlzZSkgcmV0dXJuIGNvbnNvbGUubG9nKCdza2lwIG1pbmVyYWxBbmFsaXNlJylcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhZG9zTWluZXJhaXMpKSByZXR1cm4gY29uc29sZS5sb2coJ3NraXAgZGFkb3NNaW5lcmFpcyBudWxsJylcclxuXHJcbiAgICAgIGNvbnN0IGJhc2UgPSAod2l0aEludGVyZXN0ICYmIGZhaXhhU2V0LnNpemUgPiAwKVxyXG4gICAgICAgID8gZGFkb3NNaW5lcmFpcy5maWx0ZXIoZCA9PiBmYWl4YVNldC5oYXMoTnVtYmVyKGQuY29kaWdvUG9jbykpKVxyXG4gICAgICAgIDogZGFkb3NNaW5lcmFpc1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdIGJhc2UgcGFyYSBkZXNlbmhhcicsIGJhc2UubGVuZ3RoKVxyXG4gICAgICBpZiAoYmFzZS5sZW5ndGggPT09IDApIHJldHVybiBjb25zb2xlLndhcm4oJ1t3aWRnZXRdIGJhc2UgdmF6aWEg4oCUIG5hZGEgYSBwbG90dGFyJylcclxuXHJcbiAgICAgIGRlc2VuaGFyRGlzdHJpYnVpY2FvTWluZXJhaXMoamltdU1hcFZpZXcsIGJhc2UsIG1pbmVyYWxBbmFsaXNlIGFzIE1pbmVyYWxUaXBvLCB3aXRoSW50ZXJlc3QpXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgIH1cclxuICB9LCBbamltdU1hcFZpZXcsIGNhdGVnb3JpYSwgbWluZXJhbEFuYWxpc2UsIGRhZG9zTWluZXJhaXMsIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXRdKVxyXG5cclxuICAvKiA9PT09PT0gTUlORVJBSVM6IGFvIGVzY29saGVyIE1JTkVSQUwgKyBBR1JVUEFET1IgLT4gYXBsaWNhIGNvbG9yaXphw6fDo28gc3RvcHMgPT09PT09ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbd2lkZ2V0XSBlZmVpdG8gbWluZXJhaXM6Y29sb3JpemHDp8OjbyBhZ3J1cGFkb3InKVxyXG4gICAgICBjb25zb2xlLmxvZyh7IGNhdGVnb3JpYSwgaGFzSk1WOiAhIWppbXVNYXBWaWV3Py52aWV3LCBtaW5lcmFsQW5hbGlzZSwgbWluZXJhbFNlbGVjaW9uYWRvLCBhZ3J1cGFkb3IsIHdpdGhJbnRlcmVzdCB9KVxyXG4gICAgICBpZiAoY2F0ZWdvcmlhICE9PSAnbWluZXJhbHMnIHx8ICFqaW11TWFwVmlldz8udmlldyB8fCAhbWluZXJhbEFuYWxpc2UgfHwgIW1pbmVyYWxTZWxlY2lvbmFkbyB8fCAhYWdydXBhZG9yKSB7IGNvbnNvbGUubG9nKCdza2lwJyk7IGNvbnNvbGUuZ3JvdXBFbmQoKTsgcmV0dXJuIH1cclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGFkb3MgPSBhd2FpdCBmZXRjaE1pbmVyYWxBZ3J1cGFkb3IoXHJcbiAgICAgICAgICBtaW5lcmFsQW5hbGlzZSBhcyBNaW5lcmFsVGlwbyxcclxuICAgICAgICAgIG1pbmVyYWxTZWxlY2lvbmFkby5ub21lUmVzdW1pZG9NaW5lcmFsLFxyXG4gICAgICAgICAgd2l0aEludGVyZXN0XHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XSBhZ3J1cGFkb3IgZGFkb3MnLCBkYWRvcz8ubGVuZ3RoLCBkYWRvcz8uc2xpY2U/LigwLDEwKSlcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgc2V0QWdydXBhZG9yRGFkb3MoZGFkb3MgfHwgW10pXHJcbiAgICAgICAgICBhd2FpdCBhcGxpY2FyQ29sb3JpemFjYW9Qb3JBZ3J1cGFkb3IoXHJcbiAgICAgICAgICAgIGppbXVNYXBWaWV3LFxyXG4gICAgICAgICAgICBtaW5lcmFsQW5hbGlzZSBhcyBNaW5lcmFsVGlwbyxcclxuICAgICAgICAgICAgZGFkb3MsXHJcbiAgICAgICAgICAgIGFncnVwYWRvciBhcyAnYW5hbGlzZScgfCAnbWVkaWEnIHwgJ21heGltYSdcclxuICAgICAgICAgIClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XSBjb2xvcml6YcOnw6NvIGFwbGljYWRhJylcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWxoYSBhbyBhcGxpY2FyIGNvbG9yaXphw6fDo28gcG9yIGFncnVwYWRvcicsIGUpXHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHsgY2FuY2VsbGVkID0gdHJ1ZSB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJ1bigpXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbamltdU1hcFZpZXcsIGNhdGVnb3JpYSwgbWluZXJhbEFuYWxpc2UsIG1pbmVyYWxTZWxlY2lvbmFkbywgYWdydXBhZG9yLCB3aXRoSW50ZXJlc3RdKVxyXG5cclxuICAvLyBSZXNldC9mZWNoYXJcclxuICBjb25zdCByZXNldFVpU3RhdGUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRUaXBvc1NlbChbXSk7IHNldFNob3dFbXB0eShmYWxzZSk7IHNldFdpdGhJbnRlcmVzdChmYWxzZSk7IHNldENhdGVnb3JpYSgnJyk7XHJcbiAgICBzZXREYWRvc0Z1bGwobnVsbCk7IHNldERhZG9zRmFpeGFBUEkobnVsbCk7XHJcbiAgICBzZXRNaW5lcmFsQW5hbGlzZSgnJyk7IHNldERhZG9zTWluZXJhaXMobnVsbCk7IHNldEVycm9yTWluZXJhaXMoJycpOyBzZXRMb2FkaW5nTWluZXJhaXMoZmFsc2UpO1xyXG4gICAgc2V0TGlzdGFNaW5lcmFpcyhbXSk7IHNldEJ1c2NhTWluZXJhbCgnJyk7IHNldE1pbmVyYWxTZWxlY2lvbmFkbyhudWxsKTsgc2V0QWdydXBhZG9yKCcnKTtcclxuICAgIGludGVyZXN0TWFudWFsUmVmLmN1cnJlbnQgPSBmYWxzZVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3Py52aWV3XHJcbiAgICBpZiAodmlldykge1xyXG4gICAgY2xlYXJBbW9zdHJhcyh2aWV3KVxyXG4gICAgY2xlYXJNaW5lcmFpcyh2aWV3KSAvLyA8PDwgdGFtYsOpbSByZW1vdmUgYXMgY2FtYWRhcyBkZSBtaW5lcmFpc1xyXG4gIH1cclxuICAgIHJlc2V0VWlTdGF0ZSgpXHJcbiAgfSwgW2ppbXVNYXBWaWV3LCByZXNldFVpU3RhdGVdKVxyXG5cclxuICAvLyBGZWNoYXIgcG9yIGJvdMOjby9vY3VsdGFyIGRpw6Fsb2dvIChjb3JyaWdpZG86IHNlbGV0b3IgY29tIGFzcGFzIGZlY2hhZGFzIGNvcnJldGFtZW50ZSlcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3Py52aWV3OyBpZiAoIXZpZXcpIHJldHVyblxyXG4gICAgY29uc3Qgcm9vdCA9IHJvb3RSZWYuY3VycmVudDsgaWYgKCFyb290KSByZXR1cm5cclxuICAgIGNvbnN0IGRsZyA9IGZpbmRDbG9zZXN0RGlhbG9nKHJvb3QpOyBpZiAoIWRsZykgcmV0dXJuXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRsZy5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnYnV0dG9uW2FyaWEtbGFiZWw9XCJDbG9zZVwiXSwgYnV0dG9uW3RpdGxlPVwiQ2xvc2VcIl0sIGJ1dHRvblthcmlhLWxhYmVsPVwiRmVjaGFyXCJdLCBidXR0b25bdGl0bGU9XCJGZWNoYXJcIl0sIFtkYXRhLWFjdGlvbj1cImNsb3NlXCJdJ1xyXG4gICAgKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcclxuICAgIGlmICghY2xvc2VCdG4pIHJldHVyblxyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbG9zZSlcclxuICAgIHJldHVybiAoKSA9PiBjbG9zZUJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsb3NlKVxyXG4gIH0sIFtqaW11TWFwVmlldywgaGFuZGxlQ2xvc2VdKVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgcm9vdCA9IHJvb3RSZWYuY3VycmVudDsgaWYgKCFyb290KSByZXR1cm5cclxuICAgIGNvbnN0IGRsZyA9IGZpbmRDbG9zZXN0RGlhbG9nKHJvb3QpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxyXG4gICAgaWYgKCFkbGcpIHJldHVyblxyXG4gICAgbGV0IHdhc1Zpc2libGUgPSAhaXNEaWFsb2dIaWRkZW4oZGxnKVxyXG4gICAgY29uc3QgY2hlY2sgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vd0hpZGRlbiA9IGlzRGlhbG9nSGlkZGVuKGRsZylcclxuICAgICAgaWYgKHdhc1Zpc2libGUgJiYgbm93SGlkZGVuKSB7IGhhbmRsZUNsb3NlKCk7IHdhc1Zpc2libGUgPSBmYWxzZSB9XHJcbiAgICAgIGVsc2UgaWYgKCF3YXNWaXNpYmxlICYmICFub3dIaWRkZW4pIHsgd2FzVmlzaWJsZSA9IHRydWUgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjaGVjaylcclxuICAgIG1vLm9ic2VydmUoZGxnLCB7IGF0dHJpYnV0ZXM6IHRydWUsIGF0dHJpYnV0ZUZpbHRlcjogWydzdHlsZScsICdjbGFzcycsICdhcmlhLWhpZGRlbiddIH0pXHJcbiAgICBjaGVjaygpXHJcbiAgICByZXR1cm4gKCkgPT4gbW8uZGlzY29ubmVjdCgpXHJcbiAgfSwgW2hhbmRsZUNsb3NlXSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9uS2V5ID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHsgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgaGFuZGxlQ2xvc2UoKSB9XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXkpXHJcbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5KVxyXG4gIH0sIFtoYW5kbGVDbG9zZV0pXHJcblxyXG4gIC8qKiBTdW3DoXJpbyAoYW1vc3RyYXMgYXBlbmFzKSAqL1xyXG4gIGNvbnN0IHN1bW1hcnlHcm91cHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChjYXRlZ29yaWEgIT09ICdzYW1wbGUnKSByZXR1cm4gW11cclxuICAgIGNvbnN0IGJhc2U6IEFtb3N0cmFJdGVtW10gPSB3aXRoSW50ZXJlc3RcclxuICAgICAgPyAoZmFpeGFTZXQuc2l6ZSA+IDBcclxuICAgICAgICAgID8gKGRhZG9zRnVsbCA/PyBbXSkuZmlsdGVyKHggPT4gZmFpeGFTZXQuaGFzKE51bWJlcih4LmNvZGlnb1BvY28pKSlcclxuICAgICAgICAgIDogKGRhZG9zRmFpeGFBUEkgPz8gZGFkb3NGdWxsID8/IFtdKSlcclxuICAgICAgOiAoZGFkb3NGdWxsID8/IFtdKVxyXG5cclxuICAgIHJldHVybiB0aXBvc1NlbC5tYXAodGlwbyA9PiB7XHJcbiAgICAgIGNvbnN0IGNvciA9IGNvcmVzVGlwb3NbdGlwb11cclxuICAgICAgY29uc3QgZGFkb3MgPSBiYXNlLm1hcChkID0+ICh7IGNvZGlnb1BvY286IGQuY29kaWdvUG9jbywgdG90YWw6IGRbVFlQRV9GSUVMRFt0aXBvXV0gPz8gMCB9KSlcclxuICAgICAgbGV0IHJvd3MgPSBjYWxjdWxhclF1ZWJyYXMoZGFkb3MsIGNvcikucmV2ZXJzZSgpXHJcbiAgICAgIGlmICghc2hvd0VtcHR5KSByb3dzID0gcm93cy5maWx0ZXIociA9PiByLmNvdW50ID4gMCB8fCByLmxhYmVsLnN0YXJ0c1dpdGgoJ3wgMCB8JykpXHJcbiAgICAgIHJldHVybiB7IHRpcG8sIHJvd3MgfVxyXG4gICAgfSlcclxuICB9LCBbdGlwb3NTZWwsIHNob3dFbXB0eSwgd2l0aEludGVyZXN0LCBmYWl4YVNldCwgZGFkb3NGdWxsLCBkYWRvc0ZhaXhhQVBJLCBjYXRlZ29yaWFdKVxyXG5cclxuICAvKiogU3Vtw6FyaW8gKG1pbmVyYWlzIOKAlCBUb3RhbCBkZSBBbW9zdHJhcy9Db2xldGFzKSAqL1xyXG4gIGNvbnN0IHN1bW1hcnlNaW5lcmFscyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKGNhdGVnb3JpYSAhPT0gJ21pbmVyYWxzJykgcmV0dXJuIG51bGxcclxuICAgIGlmICghbWluZXJhbEFuYWxpc2UpIHJldHVybiBudWxsXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGFkb3NNaW5lcmFpcykgfHwgZGFkb3NNaW5lcmFpcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsXHJcblxyXG4gICAgY29uc3QgYmFzZSA9ICh3aXRoSW50ZXJlc3QgJiYgZmFpeGFTZXQuc2l6ZSA+IDApXHJcbiAgICAgID8gZGFkb3NNaW5lcmFpcy5maWx0ZXIoZCA9PiBmYWl4YVNldC5oYXMoTnVtYmVyKGQuY29kaWdvUG9jbykpKVxyXG4gICAgICA6IGRhZG9zTWluZXJhaXNcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9ICh3aXRoSW50ZXJlc3QgPyAnSW50ZXJ2YWxvIGRlIEludGVyZXNzZSAtICcgOiAnJykgKyBsYWJlbEZyb21WYWx1ZShtaW5lcmFsQW5hbGlzZSBhcyBNaW5lcmFsVGlwbylcclxuICAgIGlmICghYmFzZS5sZW5ndGgpIHJldHVybiB7IHRpdGxlLCByb3dzOiBbXSBhcyBhbnlbXSB9XHJcblxyXG4gICAgY29uc3QgY29sb3IgPSAncmdiKDI1MywxNDIsNTUpJyAvLyBtZXNtYSBjb3IgdXNhZGEgbmEgY2FtYWRhIGRlIG1pbmVyYWlzXHJcbiAgICBjb25zdCBkYWRvcyA9IGJhc2UubWFwKGQgPT4gKHsgdG90YWw6IGQudG90YWxNaW5lcmFpcyB9KSlcclxuICAgIGxldCByb3dzID0gY2FsY3VsYXJRdWVicmFzKGRhZG9zLCBjb2xvcikucmV2ZXJzZSgpXHJcbiAgICBpZiAoIXNob3dFbXB0eSkgcm93cyA9IHJvd3MuZmlsdGVyKHIgPT4gci5jb3VudCA+IDAgfHwgci5sYWJlbC5zdGFydHNXaXRoKCd8IDAgfCcpKVxyXG5cclxuICAgIHJldHVybiB7IHRpdGxlLCByb3dzIH1cclxuICB9LCBbY2F0ZWdvcmlhLCBtaW5lcmFsQW5hbGlzZSwgZGFkb3NNaW5lcmFpcywgd2l0aEludGVyZXN0LCBmYWl4YVNldCwgc2hvd0VtcHR5XSlcclxuXHJcbiAgY29uc3Qgc3VtbWFyeU1pbmVyYWxzQWdyID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoY2F0ZWdvcmlhICE9PSAnbWluZXJhbHMnKSByZXR1cm4gbnVsbFxyXG4gICAgaWYgKCFtaW5lcmFsQW5hbGlzZSB8fCAhbWluZXJhbFNlbGVjaW9uYWRvIHx8ICFhZ3J1cGFkb3IpIHJldHVybiBudWxsXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYWdydXBhZG9yRGFkb3MpIHx8IGFncnVwYWRvckRhZG9zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcclxuXHJcbiAgICAvLyBlc2NvbGhlIG8gY2FtcG8gY2VydG8gY29uZm9ybWUgYWdydXBhZG9yXHJcbiAgICBjb25zdCBmaWVsZCA9IGFncnVwYWRvciA9PT0gJ2FuYWxpc2UnID8gJ3F0QW5hbGlzZScgOiAoYWdydXBhZG9yID09PSAnbWVkaWEnID8gJ3ZhbG9yTWVkaW8nIDogJ3ZhbG9yTWF4aW1vJylcclxuXHJcbiAgICAvLyBhcGxpY2EgXCJJbnRlcnZhbG8gZGUgSW50ZXJlc3NlXCIgc2UgbmVjZXNzw6FyaW9cclxuICAgIGNvbnN0IGJhc2UgPSAod2l0aEludGVyZXN0ICYmIGZhaXhhU2V0LnNpemUgPiAwKVxyXG4gICAgICA/IGFncnVwYWRvckRhZG9zLmZpbHRlcihkID0+IGZhaXhhU2V0LmhhcyhOdW1iZXIoZC5jb2RpZ29Qb2NvKSkpXHJcbiAgICAgIDogYWdydXBhZG9yRGFkb3NcclxuXHJcbiAgICBjb25zdCB0aXRsZUJhc2UgPVxyXG4gICAgICAoYWdydXBhZG9yID09PSAnYW5hbGlzZScgPyAnUXVhbnRpZGFkZSBkZSBBbsOhbGlzZXMnIDpcclxuICAgICAgYWdydXBhZG9yID09PSAnbWVkaWEnICAgPyBgTcOpZGlhIGRlICR7bWluZXJhbFNlbGVjaW9uYWRvLm5vbWVNaW5lcmFsfWAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBNw6F4aW1hIGRlICR7bWluZXJhbFNlbGVjaW9uYWRvLm5vbWVNaW5lcmFsfWApXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSAod2l0aEludGVyZXN0ID8gJ0ludGVydmFsbyBkZSBJbnRlcmVzc2UgLSAnIDogJycpICsgdGl0bGVCYXNlXHJcblxyXG4gICAgaWYgKCFiYXNlLmxlbmd0aCkgcmV0dXJuIHsgdGl0bGUsIHJvd3M6IFtdIGFzIGFueVtdIH1cclxuXHJcbiAgICAvLyBBIHBhbGV0YSBzZWd1ZSBjb2VyZW50ZSBjb20gbyDigJx0b3RhbOKAnSAoYm9saGFzKSDigJQgY29yIGxhcmFuamEgdXNhZGEgbm8gY29udGFkb3JcclxuICAgIGNvbnN0IGNvbG9yID0gJ3JnYigyNTMsMTQyLDU1KSdcclxuICAgIGNvbnN0IGRhZG9zID0gYmFzZS5tYXAoZCA9PiAoeyB0b3RhbDogTnVtYmVyKChkIGFzIGFueSlbZmllbGRdIHx8IDApIH0pKVxyXG4gICAgbGV0IHJvd3MgPSBjYWxjdWxhclF1ZWJyYXMoZGFkb3MsIGNvbG9yKS5yZXZlcnNlKClcclxuICAgIGlmICghc2hvd0VtcHR5KSByb3dzID0gcm93cy5maWx0ZXIociA9PiByLmNvdW50ID4gMCB8fCByLmxhYmVsLnN0YXJ0c1dpdGgoJ3wgMCB8JykpXHJcblxyXG4gICAgcmV0dXJuIHsgdGl0bGUsIHJvd3MgfVxyXG4gIH0sIFtjYXRlZ29yaWEsIG1pbmVyYWxBbmFsaXNlLCBtaW5lcmFsU2VsZWNpb25hZG8sIGFncnVwYWRvciwgYWdydXBhZG9yRGFkb3MsIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXQsIHNob3dFbXB0eV0pXHJcblxyXG5cclxuXHJcbiAgY29uc3QgaGFzQW55QmFzZSA9XHJcbiAgICAoQXJyYXkuaXNBcnJheShkYWRvc0Z1bGwpICYmIGRhZG9zRnVsbC5sZW5ndGggPiAwKSB8fFxyXG4gICAgKEFycmF5LmlzQXJyYXkoZGFkb3NGYWl4YUFQSSkgJiYgZGFkb3NGYWl4YUFQSS5sZW5ndGggPiAwKVxyXG5cclxuICAvLyA9PT09PSBmaWx0cm9zIHBhcmEgbyBzZWFyY2ggZGUgbWluZXJhaXNcclxuICBjb25zdCBsaXN0YUZpbHRyYWRhID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBxID0gKGJ1c2NhTWluZXJhbCB8fCAnJykubm9ybWFsaXplKCdORkQnKS5yZXBsYWNlKC9cXHB7RGlhY3JpdGljfS9ndSwgJycpLnRvTG93ZXJDYXNlKClcclxuICAgIHJldHVybiAobGlzdGFNaW5lcmFpcyB8fCBbXSkuZmlsdGVyKG0gPT4ge1xyXG4gICAgICBjb25zdCBub21lID0gKG0ubm9tZU1pbmVyYWwgfHwgJycpLm5vcm1hbGl6ZSgnTkZEJykucmVwbGFjZSgvXFxwe0RpYWNyaXRpY30vZ3UsICcnKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIHJldHVybiBub21lLmluY2x1ZGVzKHEpXHJcbiAgICB9KVxyXG4gIH0sIFtsaXN0YU1pbmVyYWlzLCBidXNjYU1pbmVyYWxdKVxyXG5cclxuICAvLyBwcmltZWlyYXMgNCBvcMOnw7VlcyArIGEgdGVyY2VpcmEgbGluaGEgKMOabHRpbWEpXHJcbiAgY29uc3QgRklSU1RfRk9VUiA9IE1JTkVSQUxfT1BUSU9OUy5zbGljZSgwLCA0KVxyXG4gIGNvbnN0IExBU1RfT05FID0gTUlORVJBTF9PUFRJT05TLnNsaWNlKDQpXHJcblxyXG4gIGNvbnN0IGxlZ2VuZEFnciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKGNhdGVnb3JpYSAhPT0gJ21pbmVyYWxzJykgcmV0dXJuIG51bGxcclxuICAgIGlmICghbWluZXJhbEFuYWxpc2UgfHwgIW1pbmVyYWxTZWxlY2lvbmFkbyB8fCAhYWdydXBhZG9yKSByZXR1cm4gbnVsbFxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFncnVwYWRvckRhZG9zKSB8fCBhZ3J1cGFkb3JEYWRvcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsXHJcblxyXG4gICAgY29uc3QgZmllbGQgPSBhZ3J1cGFkb3IgPT09ICdhbmFsaXNlJyA/ICdxdEFuYWxpc2UnIDogKGFncnVwYWRvciA9PT0gJ21lZGlhJyA/ICd2YWxvck1lZGlvJyA6ICd2YWxvck1heGltbycpXHJcbiAgICBjb25zdCBiYXNlID0gKHdpdGhJbnRlcmVzdCAmJiBmYWl4YVNldC5zaXplID4gMClcclxuICAgICAgPyBhZ3J1cGFkb3JEYWRvcy5maWx0ZXIoZCA9PiBmYWl4YVNldC5oYXMoTnVtYmVyKGQuY29kaWdvUG9jbykpKVxyXG4gICAgICA6IGFncnVwYWRvckRhZG9zXHJcblxyXG4gICAgaWYgKCFiYXNlLmxlbmd0aCkgcmV0dXJuIHsgbWluOiAwLCBtYXg6IDAsIGlzUGVyY2VudDogYWdydXBhZG9yICE9PSAnYW5hbGlzZScsIHRpdGxlOiAnJyB9XHJcblxyXG4gICAgbGV0IHZhbHMgPSBiYXNlLm1hcCgoZDogYW55KSA9PiBOdW1iZXIoZFtmaWVsZF0gfHwgMCkpXHJcbiAgICBpZiAoYWdydXBhZG9yICE9PSAnYW5hbGlzZScpIHZhbHMgPSB2YWxzLm1hcCh2ID0+IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgdikpKSAvLyB0cmF2YSAwLi4xMDBcclxuICAgIGNvbnN0IG1pbiA9IDBcclxuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLnZhbHMsIDApXHJcblxyXG4gICAgY29uc3QgdGl0bGVCYXNlID1cclxuICAgICAgYWdydXBhZG9yID09PSAnYW5hbGlzZScgPyAnQW7DoWxpc2VzJyA6XHJcbiAgICAgIGFncnVwYWRvciA9PT0gJ21lZGlhJyAgID8gYE3DqWRpYSBkZSAke21pbmVyYWxTZWxlY2lvbmFkby5ub21lTWluZXJhbH1gIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgTcOheGltYSBkZSAke21pbmVyYWxTZWxlY2lvbmFkby5ub21lTWluZXJhbH1gXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWluLCBtYXgsXHJcbiAgICAgIGlzUGVyY2VudDogYWdydXBhZG9yICE9PSAnYW5hbGlzZScsXHJcbiAgICAgIHRpdGxlOiAod2l0aEludGVyZXN0ID8gJ0ludGVydmFsbyBkZSBJbnRlcmVzc2UgLSAnIDogJycpICsgdGl0bGVCYXNlXHJcbiAgICB9XHJcbiAgfSwgW2NhdGVnb3JpYSwgbWluZXJhbEFuYWxpc2UsIG1pbmVyYWxTZWxlY2lvbmFkbywgYWdydXBhZG9yLCBhZ3J1cGFkb3JEYWRvcywgd2l0aEludGVyZXN0LCBmYWl4YVNldF0pXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e3dyYXBwZXJTdHlsZX0gcmVmPXtyb290UmVmfT5cclxuICAgICAgPEdsb2JhbCBzdHlsZXM9e2dsb2JhbFBhbmVsU3R5bGV9IC8+XHJcbiAgICAgIDxsYWJlbCBjc3M9e3RpdGxlU3R5bGV9PlNlbGVjaW9uZSBhIGRpc3RyaWJ1acOnw6NvPC9sYWJlbD5cclxuXHJcbiAgICAgIDxzZWxlY3QgY3NzPXtzZWxlY3RTdHlsZX0gdmFsdWU9e2NhdGVnb3JpYX0gb25DaGFuZ2U9e2UgPT4gc2V0Q2F0ZWdvcmlhKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nJz5TZWxlY2lvbmUgbyB0aXBvPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nc2FtcGxlJz5EaXN0cmlidWnDp8OjbyBkZSBhbW9zdHJhczwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9J21pbmVyYWxzJz5EaXN0cmlidWnDp8OjbyBkZSBNaW5lcmFpczwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgIHsvKiA9PT09PT09PSBVSTogQU1PU1RSQVMgPT09PT09PT0gKi99XHJcbiAgICAgIHtjYXRlZ29yaWEgPT09ICdzYW1wbGUnICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2xvYWRpbmdGdWxsICYmIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4IH19PkNhcnJlZ2FuZG8gYmFzZeKApjwvZGl2Pn1cclxuICAgICAgICAgIHshIWVycm9yRnVsbCAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnI2IwMCcsIG1hcmdpbkJvdHRvbTogOCB9fT5FcnJvOiB7ZXJyb3JGdWxsfTwvZGl2Pn1cclxuICAgICAgICAgIHt3aXRoSW50ZXJlc3QgJiYgbG9hZGluZ0ludGVyZXN0ICYmIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4IH19PkNhcnJlZ2FuZG8gaW50ZXJ2YWxvIGRlIGludGVyZXNzZeKApjwvZGl2Pn1cclxuICAgICAgICAgIHt3aXRoSW50ZXJlc3QgJiYgISFlcnJvckludGVyZXN0ICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjYjAwJywgbWFyZ2luQm90dG9tOiA4IH19PkVycm86IHtlcnJvckludGVyZXN0fTwvZGl2Pn1cclxuXHJcbiAgICAgICAgICB7aGFzQW55QmFzZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtsaXN0U3R5bGV9PlxyXG4gICAgICAgICAgICAgIHtMSVNUX1RZUEVTLm1hcCh0ID0+IChcclxuICAgICAgICAgICAgICAgIDxsYWJlbCBrZXk9e3R9IGNzcz17Y2hlY2tib3hMYWJlbFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aXBvc1NlbC5pbmNsdWRlcyh0KX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIHNldFRpcG9zU2VsKHByZXYgPT4gcHJldi5pbmNsdWRlcyh0KSA/IHByZXYuZmlsdGVyKHggPT4geCAhPT0gdCkgOiBbLi4ucHJldiwgdF0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYmxcIj57dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHQuc2xpY2UoMSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qID09PT09PT09IFVJOiBNSU5FUkFJUyA9PT09PT09PSAqL31cclxuICAgICAge2NhdGVnb3JpYSA9PT0gJ21pbmVyYWxzJyAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHsvKiAxKSByw6FkaW9zIHByaW5jaXBhaXMgRFJYL1FlbXNjYW4vVG9kYXMgKG1hbnTDqW0gY29tbyBlc3RhdmEpICovfVxyXG4gICAgICAgICAgPGRpdiBjc3M9e21pbmVyYWxzTGlzdFN0eWxlfT5cclxuICAgICAgICAgICAge01JTkVSQUxfT1BUSU9OUy5tYXAob3B0ID0+IChcclxuICAgICAgICAgICAgICA8bGFiZWwga2V5PXtvcHQudmFsdWV9IGNzcz17Y2hlY2tib3hMYWJlbFN0eWxlfSBkYXRhLWtleT17b3B0LnZhbHVlfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibWluZXJhbC1hbmFsaXNlXCJcclxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bWluZXJhbEFuYWxpc2UgPT09IG9wdC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldE1pbmVyYWxBbmFsaXNlKG9wdC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGJsXCI+e29wdC5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7bG9hZGluZ01pbmVyYWlzICYmIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4IH19PkNhcnJlZ2FuZG8gbWluZXJhaXPigKY8L2Rpdj59XHJcbiAgICAgICAgICB7ISFlcnJvck1pbmVyYWlzICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjYjAwJywgbWFyZ2luQm90dG9tOiA4IH19PkVycm86IHtlcnJvck1pbmVyYWlzfTwvZGl2Pn1cclxuXHJcbiAgICAgICAgICB7LyogMikgVE9UQUwgKGJvbGhhcykg4oCUIHBlcm1hbmVjZSBwcmltZWlybyAqL31cclxuICAgICAgICAgIHtzdW1tYXJ5TWluZXJhbHMgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNzcz17c3VtbWFyeUxpc3RTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjc3M9e2xlZ2VuZEhlYWRlclN0eWxlfT57c3VtbWFyeU1pbmVyYWxzLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgIHtzdW1tYXJ5TWluZXJhbHMucm93cy5tYXAoKHIsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BtaW4tdG90YWwtJHtpZHh9YH0gY3NzPXtzdW1tYXJ5SXRlbVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjc3M9e2J1YmJsZUJveFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPXtyLnNpemV9IGhlaWdodD17ci5zaXplfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9e3Iuc2l6ZS8yfSBjeT17ci5zaXplLzJ9IHI9e3Iuc2l6ZS8yfSBmaWxsPXtyLmNvcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNzcz17cmFuZ2VMYWJlbFN0eWxlfT57ci5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHsvKiAzKSBUVURPIGFiYWl4byBkbyBUb3RhbCBlbnRyYSBubyBTQ1JPTEwgKGxpc3RhICsgcsOhZGlvcyArIHJhbXBhICsgY2hlY2tib3hlcykgKi99XHJcbiAgICAgICAgICA8ZGl2IGNzcz17c2Nyb2xsQXJlYVN0eWxlfT5cclxuICAgICAgICAgICAge21pbmVyYWxBbmFsaXNlICYmIChcclxuICAgICAgICAgICAgICA8TWluZXJhbHNMaXN0UGFuZWxcclxuICAgICAgICAgICAgICAgIG1pbmVyYWxBbmFsaXNlPXttaW5lcmFsQW5hbGlzZX1cclxuICAgICAgICAgICAgICAgIGxpc3RhTWluZXJhaXM9e2xpc3RhTWluZXJhaXN9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nTWluZXJhaXM9e2xvYWRpbmdNaW5lcmFpc31cclxuICAgICAgICAgICAgICAgIGVycm9yTWluZXJhaXM9e2Vycm9yTWluZXJhaXN9XHJcbiAgICAgICAgICAgICAgICBidXNjYU1pbmVyYWw9e2J1c2NhTWluZXJhbH1cclxuICAgICAgICAgICAgICAgIHNldEJ1c2NhTWluZXJhbD17c2V0QnVzY2FNaW5lcmFsfVxyXG4gICAgICAgICAgICAgICAgbWluZXJhbFNlbGVjaW9uYWRvPXttaW5lcmFsU2VsZWNpb25hZG99XHJcbiAgICAgICAgICAgICAgICBzZXRNaW5lcmFsU2VsZWNpb25hZG89e3NldE1pbmVyYWxTZWxlY2lvbmFkb31cclxuICAgICAgICAgICAgICAgIGFncnVwYWRvcj17YWdydXBhZG9yfVxyXG4gICAgICAgICAgICAgICAgc2V0QWdydXBhZG9yPXtzZXRBZ3J1cGFkb3J9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtsZWdlbmRBZ3IgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgPEdyYWRpZW50TGVnZW5kXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtsZWdlbmRBZ3IudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIG1pbj17bGVnZW5kQWdyLm1pbn1cclxuICAgICAgICAgICAgICAgICAgbWF4PXtsZWdlbmRBZ3IubWF4fVxyXG4gICAgICAgICAgICAgICAgICBpc1BlcmNlbnQ9e2xlZ2VuZEFnci5pc1BlcmNlbnR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgeyhzdW1tYXJ5TWluZXJhbHMgfHwgbGVnZW5kQWdyIHx8IHNob3dXaXRoSW50ZXJlc3QpICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogOCwgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNlZWUnLCBwYWRkaW5nVG9wOiA2IH19PlxyXG4gICAgICAgICAgICAgICAgeyhzdW1tYXJ5TWluZXJhbHMgfHwgbGVnZW5kQWdyKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjc3M9e2Zvb3RlckxhYmVsU3R5bGV9IHRpdGxlPVwiRXhpYmlyIHRhbWLDqW0gY2xhc3NlcyBzZW0gcG/Dp29zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2hvd0VtcHR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2hvd0VtcHR5KGUudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgRXhpYmlyIGNsYXNzZXMgdmF6aWFzXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHtzaG93V2l0aEludGVyZXN0ICYmIChcclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNzcz17Zm9vdGVyTGFiZWxTdHlsZUludGVyZXNzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJRdWFuZG8gbWFyY2FkbywgYXBsaWNhIG8gZmlsdHJvIGRlIEludGVydmFsbyBkZSBJbnRlcmVzc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt3aXRoSW50ZXJlc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IGludGVyZXN0TWFudWFsUmVmLmN1cnJlbnQgPSB0cnVlOyBzZXRXaXRoSW50ZXJlc3QoZS50YXJnZXQuY2hlY2tlZCkgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIEludGVydmFsbyBkZSBJbnRlcmVzc2VcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiA9PT09PT09PSBTdW3DoXJpbyBBTU9TVFJBUyA9PT09PT09PSAqL31cclxuICAgICAge2NhdGVnb3JpYSA9PT0gJ3NhbXBsZScgJiYgc3VtbWFyeUdyb3Vwcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IGNzcz17c3VtbWFyeUxpc3RTdHlsZX0+XHJcbiAgICAgICAgICB7c3VtbWFyeUdyb3Vwcy5tYXAoZ3JvdXAgPT4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtncm91cC50aXBvfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNzcz17bGVnZW5kSGVhZGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgeyh3aXRoSW50ZXJlc3QgPyAnSW50ZXJ2YWxvIGRlIEludGVyZXNzZSAtICcgOiAnJyl9XHJcbiAgICAgICAgICAgICAgICB7Z3JvdXAudGlwby5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGdyb3VwLnRpcG8uc2xpY2UoMSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2dyb3VwLnJvd3MubWFwKChyLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtncm91cC50aXBvfS0ke2lkeH1gfSBjc3M9e3N1bW1hcnlJdGVtU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNzcz17YnViYmxlQm94U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9e3Iuc2l6ZX0gaGVpZ2h0PXtyLnNpemV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17ci5zaXplIC8gMn0gY3k9e3Iuc2l6ZSAvIDJ9IHI9e3Iuc2l6ZSAvIDJ9IGZpbGw9e3IuY29yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY3NzPXtyYW5nZUxhYmVsU3R5bGV9PntyLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8SmltdU1hcFZpZXdDb21wb25lbnQgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfSBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3NldEppbXVNYXBWaWV3fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=