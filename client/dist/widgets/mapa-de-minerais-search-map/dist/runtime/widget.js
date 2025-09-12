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
const DEFAULT_HEIGHT = 750;
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
const wrapperStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  position:relative;
  width:100%;
  height:100%;
  display:flex;               /* 👈 vira flex column */
  flex-direction:column;
  min-height:0;               /* 👈 permite filhos com overflow rolarem */
  background:#fff;
  border:1px solid #ddd;
  border-radius:6px;
  box-shadow:0 4px 12px rgba(0,0,0,.1);
  padding:16px;
  overflow:hidden;
`;
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
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding-right: 4px;
  margin-top: 8px;
  border-top: 1px solid #eee;
  padding-top: 8px;

  /* remova a folga grande do fim */
  padding-bottom: 8px;
  scroll-padding-bottom: 8px;
`;
// troque footerStyle por:
const footerDockStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  flex: 0 0 auto;
  margin-top: 8px;

  /* 💡 esta linha faz o bloco “subir” um pouco do fim */
  margin-bottom: 12px;

  background: #fff;
  border-top: 1px solid #eee;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  box-shadow: 0 -4px 10px rgba(0,0,0,.04);
`;
const afterRadiosColStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  display:flex;
  flex-direction:column;
  flex:1;        /* 👈 ocupa o resto da altura do wrapper */
  min-height:0;  /* 👈 necessário p/ a scrollArea rolar */
`;
const summaryListStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  max-height: none;   /* estava 300px; deixe rolar o container pai */
  overflow: visible;  /* quem rola agora é o scrollArea */
  margin-top: 8px;
  padding: 8px 8px 36px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  position: relative;
`;
const summaryItemStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `display:flex;align-items:center;margin:2px;`;
const rangeLabelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `font-size:.78rem;line-height:1.1;`;
const footerStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  position: sticky;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #eee;
  padding: 6px 0; /* um pouco mais de respiro */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  /* opcional: sombra suave para separar do conteúdo */
  box-shadow: 0 -4px 10px rgba(0,0,0,.04);
`;
const footerLabelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `display:flex;align-items:center;gap:6px;padding-left:.5em;cursor:pointer;font-size:.9rem; `;
const footerLabelStyleInteresse = footerLabelStyle;
// 1) crie um estilo “compacto” para o bloco de charts
const chartsCompact = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  /* afeta textos dentro de SVGs (rótulos, eixos etc.) */
  svg text { font-size: 11px; }

  /* Recharts (se estiver usando): legendas e tooltips */
  .recharts-legend-wrapper,
  .recharts-default-legend,
  .recharts-tooltip-wrapper { font-size: 11px !important; }

  /* ECharts (se estiver usando): tooltips/legendas em div */
  .echarts-tooltip,
  .echarts-legend { font-size: 11px !important; }
`;
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
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: [afterRadiosColStyle, chartsCompact] },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: scrollAreaStyle },
                    summaryMinerals && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: summaryListStyle },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: legendHeaderStyle }, summaryMinerals.title),
                        summaryMinerals.rows.map((r, idx) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: `min-total-${idx}`, css: summaryItemStyle },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: bubbleBoxStyle },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: r.size, height: r.size },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: r.size / 2, cy: r.size / 2, r: r.size / 2, fill: r.cor }))),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { css: rangeLabelStyle }, r.label)))))),
                    mineralAnalise && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MineralsListPanel__WEBPACK_IMPORTED_MODULE_4__["default"], { mineralAnalise: mineralAnalise, listaMinerais: listaMinerais, loadingMinerais: loadingMinerais, errorMinerais: errorMinerais, buscaMineral: buscaMineral, setBuscaMineral: setBuscaMineral, mineralSelecionado: mineralSelecionado, setMineralSelecionado: setMineralSelecionado, agrupador: agrupador, setAgrupador: setAgrupador })),
                    legendAgr && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginTop: 8 } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GradientLegend__WEBPACK_IMPORTED_MODULE_5__["default"], { title: legendAgr.title, min: legendAgr.min, max: legendAgr.max, isPercent: legendAgr.isPercent })))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: footerDockStyle }, (summaryMinerals || legendAgr || showWithInterest) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: footerStyle },
                    (summaryMinerals || legendAgr) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: footerLabelStyle, title: "Exibir tamb\u00E9m classes sem po\u00E7os" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: showEmpty, onChange: e => setShowEmpty(e.target.checked) }),
                        "Exibir classes vazias")),
                    showWithInterest && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: footerLabelStyleInteresse, title: "Quando marcado, aplica o filtro de Intervalo de Interesse" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: withInterest, onChange: e => { interestManualRef.current = true; setWithInterest(e.target.checked); } }),
                        "Intervalo de Interesse")))))))),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXBhLWRlLW1pbmVyYWlzLXNlYXJjaC1tYXAvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxlQUFlO0FBQ2YsOEJBQThCO0FBQ2E7QUFVM0MsTUFBTSxJQUFJLEdBQUcsOENBQUc7Ozs7OztDQU1mO0FBQ0QsTUFBTSxPQUFPLEdBQUcsOENBQUc7Ozs7Ozs7Ozs7Q0FVbEI7QUFDRCxNQUFNLFFBQVEsR0FBRyw4Q0FBRzs7O0NBR25CO0FBQ0QsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLDhDQUFHOztTQUUzQixHQUFHLEdBQUcsTUFBTTtDQUNwQjtBQUVELFNBQVMsUUFBUSxDQUFDLENBQVM7SUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sQ0FBQztJQUNwQixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUNmLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDdEQsT0FBTyxJQUFJLEdBQUcsQ0FBQztBQUNqQixDQUFDO0FBRWMsU0FBUyxjQUFjLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQVM7SUFDMUUsK0RBQStEO0lBQy9ELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUMzQixJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUFDLENBQUM7SUFDOUQsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFFNUMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkUsTUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsRixNQUFNLFNBQVMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBQyxZQUFZO0lBRW5ELE9BQU8sQ0FDTDtRQUNHLEtBQUssSUFBSSx3REFBSyxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsSUFBRyxLQUFLLENBQU87UUFDekUsd0RBQUssR0FBRyxFQUFFLElB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Q0FBQyxHQUFHLE9BQU8sQ0FBQztJQUU5QixNQUFNLElBQUksR0FBa0UsRUFBRTtJQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUFFLE9BQU8sSUFBSTtJQUVqRCxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyRixDQUFDO1NBQU0sQ0FBQztRQUNOLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3JELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFL0MsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLE9BQU8sUUFBUSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUNqSSxDQUFDO1FBRUQsR0FBRyxHQUFHLENBQUM7UUFDUCxNQUFNLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTTtRQUMzQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMs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LEdBQUksQ0FDcEcsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXBhLWRlLW1pbmVyYWlzLXNlYXJjaC1tYXAvc3JjL3J1bnRpbWUvR3JhZGllbnRMZWdlbmQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXBhLWRlLW1pbmVyYWlzLXNlYXJjaC1tYXAvc3JjL3J1bnRpbWUvTWluZXJhbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcGEtZGUtbWluZXJhaXMtc2VhcmNoLW1hcC9zcmMvcnVudGltZS9NaW5lcmFsc0xpc3RQYW5lbC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcGEtZGUtbWluZXJhaXMtc2VhcmNoLW1hcC9zcmMvcnVudGltZS91dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9yZW5kZXJlcnMvQ2xhc3NCcmVha3NSZW5kZXJlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9zeW1ib2xzL1NpbXBsZU1hcmtlclN5bWJvbFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS93aWRnZXRzL0xlZ2VuZFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFwYS1kZS1taW5lcmFpcy1zZWFyY2gtbWFwL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbi8qKiBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCAqL1xyXG5pbXBvcnQgeyBSZWFjdCwganN4LCBjc3MgfSBmcm9tICdqaW11LWNvcmUnXHJcblxyXG50eXBlIFRpY2sgPSB7IGxhYmVsOiBzdHJpbmcgfVxyXG50eXBlIFByb3BzID0ge1xyXG4gIHRpdGxlPzogc3RyaW5nXHJcbiAgbWluOiBudW1iZXJcclxuICBtYXg6IG51bWJlclxyXG4gIGlzUGVyY2VudD86IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3Qgd3JhcCA9IGNzc2BcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjRweCAxZnI7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbiAgZ2FwOiA4cHg7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG5gXHJcbmNvbnN0IHJhbXBCb3ggPSBjc3NgXHJcbiAgd2lkdGg6IDI0cHg7IGhlaWdodDogMTUwcHg7IGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byB0b3AsXHJcbiAgICByZ2IoMjQ5LDIzOCwyMjUpIDAlLFxyXG4gICAgcmdiKDI1MSwxOTAsMTMwKSAyNSUsXHJcbiAgICByZ2IoMjUzLDE0Miw1NSkgNTAlLFxyXG4gICAgcmdiKDIzMyw4NSw2KSA3NSUsXHJcbiAgICByZ2IoMTY1LDYwLDIpIDEwMCVcclxuICApO1xyXG5gXHJcbmNvbnN0IHRpY2tzQm94ID0gY3NzYFxyXG4gIGhlaWdodDogMTUwcHg7IHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IC45cmVtOyBsaW5lLWhlaWdodDogMS4xO1xyXG5gXHJcbmNvbnN0IHRpY2sgPSAocG9zUGN0OiBudW1iZXIpID0+IGNzc2BcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHJpZ2h0OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdG9wOiAkezEwMCAtIHBvc1BjdH0lO1xyXG5gXHJcblxyXG5mdW5jdGlvbiBuaWNlQ2VpbCh4OiBudW1iZXIpIHtcclxuICBpZiAoeCA8PSAwKSByZXR1cm4gMFxyXG4gIGNvbnN0IHAgPSBNYXRoLnBvdygxMCwgTWF0aC5mbG9vcihNYXRoLmxvZzEwKHgpKSlcclxuICBjb25zdCBtID0geCAvIHBcclxuICBjb25zdCBzdGVwID0gbSA8PSAxID8gMSA6IG0gPD0gMiA/IDIgOiBtIDw9IDUgPyA1IDogMTBcclxuICByZXR1cm4gc3RlcCAqIHBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JhZGllbnRMZWdlbmQoeyB0aXRsZSwgbWluLCBtYXgsIGlzUGVyY2VudCB9OiBQcm9wcykge1xyXG4gIC8vIHRpY2tzOiA1IG7DrXZlaXMgKDAlLCAyNSUsIDUwJSwgNzUlLCAxMDAlKSDigJQgbGFiZWxzIOKAnGJvbml0YXPigJ1cclxuICBsZXQgbG8gPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtaW4sIG1heCkpXHJcbiAgbGV0IGhpID0gTWF0aC5tYXgobWluLCBtYXgpXHJcbiAgaWYgKGlzUGVyY2VudCkgeyBsbyA9IDA7IGhpID0gTWF0aC5taW4oMTAwLCBNYXRoLm1heCgwLCBoaSkpIH1cclxuICBjb25zdCBoaU5pY2UgPSBpc1BlcmNlbnQgPyBoaSA6IG5pY2VDZWlsKGhpKVxyXG5cclxuICBjb25zdCB2YWx1ZXMgPSBbMSwgMC43NSwgMC41LCAwLjI1LCAwXS5tYXAoZiA9PiBNYXRoLnJvdW5kKGhpTmljZSAqIGYpKVxyXG4gIGNvbnN0IGxhYmVsczogVGlja1tdID0gdmFsdWVzLm1hcCh2ID0+ICh7IGxhYmVsOiBpc1BlcmNlbnQgPyBgJHt2fSAlYCA6IGAke3Z9YCB9KSlcclxuICBjb25zdCBwb3NpdGlvbnMgPSBbMTAwLCA3NSwgNTAsIDI1LCAwXSAvLyB0b3Bv4oaSYmFzZVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3RpdGxlICYmIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBtYXJnaW5Cb3R0b206IDQgfX0+e3RpdGxlfTwvZGl2Pn1cclxuICAgICAgPGRpdiBjc3M9e3dyYXB9PlxyXG4gICAgICAgIDxkaXYgY3NzPXtyYW1wQm94fSAvPlxyXG4gICAgICAgIDxkaXYgY3NzPXt0aWNrc0JveH0+XHJcbiAgICAgICAgICB7bGFiZWxzLm1hcCgodCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0gY3NzPXt0aWNrKHBvc2l0aW9uc1tpXSl9Pnt0LmxhYmVsfTwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsIi8qKiBNaW5lcmFscy50c1xyXG4gKiBMw7NnaWNhIGRhIERpc3RyaWJ1acOnw6NvIGRlIE1pbmVyYWlzOlxyXG4gKiAgLSBCdXNjYSBkbyBDT05UQURPUiBwb3IgYW7DoWxpc2UgKERSWC9RZW1zY2FuL1RvZGFzKSA9PiBiYXNlIGVtIGNsdXN0ZXJzL2JvbGhhcyB2aWEgZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUJcclxuICogIC0gQnVzY2EgZGEgTElTVEEgZGUgbWluZXJhaXMgKHBhcmEgbyBzZWFyY2gpXHJcbiAqICAtIEJ1c2NhIGRvcyBBR1JVUEFET1JFUyAoYW5hbGlzZXxtZWRpYXxtYXhpbWEpIHBhcmEgdW0gbWluZXJhbCBzZWxlY2lvbmFkb1xyXG4gKiAgLSBBcGxpY2HDp8OjbyBkZSB2aXN1YWxWYXJpYWJsZXMgKGNvbG9yIHJhbXApIE5BIE1FU01BIENBTUFEQSwgcG9yIGNpbWEgZG8gY2x1c3RlciBiYXNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHR5cGUgeyBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyBnZXJhck1hcGFEaXN0cmlidWljYW9FQiB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG4vKiogT3DDp8O1ZXMgZGUgYW7DoWxpc2UgbWluZXJhbCBwYXJhIG9zIHLDoWRpb3MgKi9cclxuZXhwb3J0IGNvbnN0IE1JTkVSQUxfT1BUSU9OUyA9IFtcclxuICB7IHZhbHVlOiAnRFJYLVRPVCcsIGxhYmVsOiAnRFJYLVRvdGFsJyB9LFxyXG4gIHsgdmFsdWU6ICdEUlgtQVJHJywgbGFiZWw6ICdEUlgtQXJnaWxvbWluZXJhaXMnIH0sXHJcbiAgeyB2YWx1ZTogJ01BU1NBJywgICBsYWJlbDogJ1FlbXNjYW4tTWFzc2EnIH0sXHJcbiAgeyB2YWx1ZTogJ0FSRUEnLCAgICBsYWJlbDogJ1FlbXNjYW4tw4FyZWEnIH0sXHJcbiAgeyB2YWx1ZTogJ3RvZGFzQW5hbGlzZXMnLCBsYWJlbDogJ1RvZGFzIGFzIEFuw6FsaXNlcycgfVxyXG5dIGFzIGNvbnN0XHJcblxyXG5leHBvcnQgdHlwZSBNaW5lcmFsVGlwbyA9IHR5cGVvZiBNSU5FUkFMX09QVElPTlNbbnVtYmVyXVsndmFsdWUnXVxyXG5leHBvcnQgdHlwZSBBZ3J1cGFkb3JUaXBvID0gJ2FuYWxpc2UnIHwgJ21lZGlhJyB8ICdtYXhpbWEnXHJcblxyXG4vKiogSXRlbnMgZG8gY29udGFkb3IgKHRvdGFsIHBvciBwb8OnbykgKi9cclxuZXhwb3J0IHR5cGUgTWluZXJhbEl0ZW0gPSB7XHJcbiAgY29kaWdvUG9jbzogbnVtYmVyXHJcbiAgdG90YWxNaW5lcmFpczogbnVtYmVyXHJcbn1cclxuXHJcbi8qKiBJdGVtIGRhIGxpc3RhIGRlIG1pbmVyYWlzIChwYXJhIG8gc2VhcmNoKSAqL1xyXG5leHBvcnQgdHlwZSBNaW5lcmFsTGlzdGFJdGVtID0ge1xyXG4gIG5vbWVNaW5lcmFsOiBzdHJpbmdcclxuICBub21lUmVzdW1pZG9NaW5lcmFsPzogc3RyaW5nXHJcbn1cclxuXHJcbi8qKiBJdGVtIGRlIHJldG9ybm8gZG8gYWdydXBhZG9yICovXHJcbmV4cG9ydCB0eXBlIE1pbmVyYWxBZ3J1cGFkb3JJdGVtID0ge1xyXG4gIGNvZGlnb1BvY286IG51bWJlclxyXG4gIG5vbWVSZXN1bWlkbz86IHN0cmluZ1xyXG4gIHF0QW5hbGlzZTogbnVtYmVyXHJcbiAgdmFsb3JNZWRpbzogbnVtYmVyXHJcbiAgdmFsb3JNYXhpbW86IG51bWJlclxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09IE5vcm1hbGl6YcOnw7VlcyA9PT09PT09PT09PT09PT09PT09ICovXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZU1pbmVyYWxDb250YWRvcihyYXc6IGFueVtdKTogTWluZXJhbEl0ZW1bXSB7XHJcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5KHJhdykgPyByYXcgOiBbXSlcclxuICAgIC5tYXAoKHI6IGFueSkgPT4gKHtcclxuICAgICAgY29kaWdvUG9jbzogTnVtYmVyKHIuY29kaWdvUG9jbyA/PyByLlBPQ09fQ0RfUE9DTyA/PyByLnBvY28gPz8gci5jb2RpZ28gPz8gMCksXHJcbiAgICAgIHRvdGFsTWluZXJhaXM6IE51bWJlcihyLnRvdGFsTWluZXJhaXMgPz8gci50b3RhbCA/PyAwKVxyXG4gICAgfSkpXHJcbiAgICAuZmlsdGVyKHggPT4gISF4LmNvZGlnb1BvY28pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZU1pbmVyYWxMaXN0YShyYXc6IGFueVtdKTogTWluZXJhbExpc3RhSXRlbVtdIHtcclxuICByZXR1cm4gKEFycmF5LmlzQXJyYXkocmF3KSA/IHJhdyA6IFtdKVxyXG4gICAgLm1hcCgocjogYW55KSA9PiAoe1xyXG4gICAgICBub21lTWluZXJhbDogU3RyaW5nKHIubm9tZU1pbmVyYWwgPz8gci5ub21lID8/IHIubWluZXJhbCA/PyAnJykudHJpbSgpLFxyXG4gICAgICBub21lUmVzdW1pZG9NaW5lcmFsOiByLm5vbWVSZXN1bWlkb01pbmVyYWwgPz8gci5ub21lUmVzdW1pZG8gPz8gdW5kZWZpbmVkXHJcbiAgICB9KSlcclxuICAgIC5maWx0ZXIoeCA9PiAhIXgubm9tZU1pbmVyYWwpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFncnVwYWRvcihyYXc6IGFueVtdKTogTWluZXJhbEFncnVwYWRvckl0ZW1bXSB7XHJcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5KHJhdykgPyByYXcgOiBbXSlcclxuICAgIC5tYXAoKHI6IGFueSkgPT4gKHtcclxuICAgICAgY29kaWdvUG9jbzogTnVtYmVyKHIuY29kaWdvUG9jbyA/PyByLlBPQ09fQ0RfUE9DTyA/PyByLnBvY28gPz8gci5jb2RpZ28gPz8gMCksXHJcbiAgICAgIG5vbWVSZXN1bWlkbzogci5ub21lUmVzdW1pZG8gPz8gci5ub21lUmVzdW1pZG9NaW5lcmFsID8/IHVuZGVmaW5lZCxcclxuICAgICAgcXRBbmFsaXNlOiBOdW1iZXIoci5xdEFuYWxpc2UgPz8gci50b3RhbCA/PyAwKSxcclxuICAgICAgdmFsb3JNZWRpbzogTnVtYmVyKHIudmFsb3JNZWRpbyA/PyByLm1lZGlhID8/IDApLFxyXG4gICAgICB2YWxvck1heGltbzogTnVtYmVyKHIudmFsb3JNYXhpbW8gPz8gci5tYXhpbW8gPz8gMClcclxuICAgIH0pKVxyXG4gICAgLmZpbHRlcih4ID0+ICEheC5jb2RpZ29Qb2NvKVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09IFBvc3RNZXNzYWdlIGhlbHBlcnMgPT09PT09PT09PT09PT09PT09PSAqL1xyXG5mdW5jdGlvbiBwb3N0VmlhUGFyZW50PFQgPSBhbnk+KHR5cGU6IHN0cmluZywgYm9keTogc3RyaW5nLCBva1R5cGU6IHN0cmluZywgZXJyVHlwZTogc3RyaW5nKTogUHJvbWlzZTxUPiB7XHJcbiAgY29uc29sZS5ncm91cENvbGxhcHNlZChgW21pbmVyYWxzXSBwb3N0VmlhUGFyZW50IC0+ICR7dHlwZX1gKVxyXG4gIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIGJvZHknLCBib2R5KVxyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCByZXFJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpXHJcbiAgICBsZXQgdGFyZ2V0T3JpZ2luID0gJyonXHJcbiAgICB0cnkgeyBpZiAoZG9jdW1lbnQucmVmZXJyZXIpIHRhcmdldE9yaWdpbiA9IG5ldyBVUkwoZG9jdW1lbnQucmVmZXJyZXIpLm9yaWdpbiB9IGNhdGNoIHt9XHJcbiAgICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSB0YXJnZXRPcmlnaW4nLCB0YXJnZXRPcmlnaW4sICdyZXFJZCcsIHJlcUlkKVxyXG5cclxuICAgIGNvbnN0IG9uTWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGQ6IGFueSA9IChldmVudCBhcyBhbnkpLmRhdGEgfHwge31cclxuICAgICAgaWYgKGQucmVxSWQgIT09IHJlcUlkKSByZXR1cm5cclxuICAgICAgY29uc29sZS5sb2coJ1ttaW5lcmFsc10gcmVzcG9zdGEgcmVjZWJpZGEnLCBkLnR5cGUsIGQpXHJcbiAgICAgIGNsZWFyVGltZW91dCh0bykgLy8gPDw8IElNUE9SVEFOVEVcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpXHJcblxyXG4gICAgICBpZiAoZC50eXBlID09PSBva1R5cGUpIHtcclxuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgICAgICByZXNvbHZlKGQucGF5bG9hZCBhcyBUKVxyXG4gICAgICB9IGVsc2UgaWYgKGQudHlwZSA9PT0gZXJyVHlwZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoZC5tZXNzYWdlIHx8ICdFcnJvIG5vIGZldGNoIHZpYSBwYXJlbnQnKSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1ttaW5lcmFsc10gdGlwbyBpbmVzcGVyYWRvJywgZC50eXBlKVxyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1Jlc3Bvc3RhIGRlc2NvbmhlY2lkYSBkbyBwYWknKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpXHJcblxyXG4gICAgY29uc3QgdG8gPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG4gICAgICBjb25zb2xlLndhcm4oJ1ttaW5lcmFsc10gVElNRU9VVCBhZ3VhcmRhbmRvIHJlc3Bvc3RhIGRvIHBhaScsIHsgdHlwZSwgb2tUeXBlLCBlcnJUeXBlLCByZXFJZCB9KVxyXG4gICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgICAgcmVqZWN0KG5ldyBFcnJvcignVGltZW91dCBhZ3VhcmRhbmRvIHJlc3Bvc3RhIGRvIHBhaSAobWluZXJhaXMpJykpXHJcbiAgICB9LCAyMDAwMClcclxuXHJcbiAgICB3aW5kb3cucGFyZW50Py5wb3N0TWVzc2FnZSh7IHR5cGUsIGJvZHksIHJlcUlkIH0sIHRhcmdldE9yaWdpbilcclxuICB9KVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09IEJvZGllcyBFeHBsb3JhID09PT09PT09PT09PT09PT09PT0gKi9cclxuZnVuY3Rpb24gYnVpbGRCb2R5Q29udGFkb3IodGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvLCBmYWl4YUludGVyZXNzZTogYm9vbGVhbikge1xyXG4gIGNvbnN0IHAgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcclxuICBwLnNldCgnaGRTeXMnLCAnbm92YWludGNvbnMnKVxyXG4gIHAuc2V0KCdoZFVDJywgJ01hcGEnKVxyXG4gIHAuc2V0KCdoZEFjYW8nLCAnQ2FycmVnYXJNYXBhRGlzdHJpYnVpY2FvTWluZXJhaXNDb250YWRvcicpXHJcbiAgcC5zZXQoJ2hkU2Vzc2lvbkZpbHRlcicsICd0cnVlJylcclxuICBwLnNldCgndGlwb0FuYWxpc2UnLCB0aXBvQW5hbGlzZSlcclxuICBwLnNldCgnZmFpeGFJbnRlcmVzc2UnLCBTdHJpbmcoISFmYWl4YUludGVyZXNzZSkpXHJcbiAgcmV0dXJuIHAudG9TdHJpbmcoKVxyXG59XHJcbmZ1bmN0aW9uIGJ1aWxkQm9keUxpc3RhKHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbywgZmFpeGFJbnRlcmVzc2U6IGJvb2xlYW4pIHtcclxuICBjb25zdCBwID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXHJcbiAgcC5zZXQoJ2hkU3lzJywgJ25vdmFpbnRjb25zJylcclxuICBwLnNldCgnaGRVQycsICdNYXBhJylcclxuICBwLnNldCgnaGRBY2FvJywgJ0NhcnJlZ2FyTWFwYURpc3RyaWJ1aWNhb01pbmVyYWlzTGlzdGEnKVxyXG4gIHAuc2V0KCdoZFNlc3Npb25GaWx0ZXInLCAndHJ1ZScpXHJcbiAgcC5zZXQoJ3RpcG9BbmFsaXNlJywgdGlwb0FuYWxpc2UpXHJcbiAgcC5zZXQoJ2ZhaXhhSW50ZXJlc3NlJywgU3RyaW5nKCEhZmFpeGFJbnRlcmVzc2UpKVxyXG4gIHJldHVybiBwLnRvU3RyaW5nKClcclxufVxyXG5mdW5jdGlvbiBidWlsZEJvZHlBZ3J1cGFkb3IodGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvLCBub21lUmVzdW1pZG9NaW5lcmFsOiBzdHJpbmcgfCB1bmRlZmluZWQsIGZhaXhhSW50ZXJlc3NlOiBib29sZWFuKSB7XHJcbiAgY29uc3QgcCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG4gIHAuc2V0KCdoZFN5cycsICdub3ZhaW50Y29ucycpXHJcbiAgcC5zZXQoJ2hkVUMnLCAnTWFwYScpXHJcbiAgcC5zZXQoJ2hkQWNhbycsICdDYXJyZWdhck1hcGFEaXN0cmlidWljYW9NaW5lcmFpc0FncnVwYWRvcicpXHJcbiAgcC5zZXQoJ2hkU2Vzc2lvbkZpbHRlcicsICd0cnVlJylcclxuICBwLnNldCgndGlwb0FuYWxpc2UnLCB0aXBvQW5hbGlzZSlcclxuICBpZiAobm9tZVJlc3VtaWRvTWluZXJhbCkgcC5zZXQoJ25vbWVSZXN1bWlkb01pbmVyYWwnLCBub21lUmVzdW1pZG9NaW5lcmFsKVxyXG4gIHAuc2V0KCdmYWl4YUludGVyZXNzZScsIFN0cmluZyghIWZhaXhhSW50ZXJlc3NlKSlcclxuICByZXR1cm4gcC50b1N0cmluZygpXHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT0gRmV0Y2ggQVBJcyA9PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzQ29udGFkb3IoXHJcbiAgdGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvLFxyXG4gIGZhaXhhSW50ZXJlc3NlOiBib29sZWFuXHJcbik6IFByb21pc2U8TWluZXJhbEl0ZW1bXT4ge1xyXG4gIGNvbnN0IGJvZHkgPSBidWlsZEJvZHlDb250YWRvcih0aXBvQW5hbGlzZSwgZmFpeGFJbnRlcmVzc2UpXHJcbiAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHBvc3RWaWFQYXJlbnQ8YW55W10+KCdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzJywgYm9keSwgJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXM6b2snLCAnZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpczplcnInKVxyXG4gIGNvbnN0IG5vcm0gPSBub3JtYWxpemVNaW5lcmFsQ29udGFkb3IocGF5bG9hZClcclxuICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSBjb250YWRvciBub3JtYWxpemFkbycsIG5vcm0ubGVuZ3RoLCBub3JtLnNsaWNlKDAsIDEwKSlcclxuICByZXR1cm4gbm9ybVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNaW5lcmFsTGlzdGEoXHJcbiAgdGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvLFxyXG4gIGZhaXhhSW50ZXJlc3NlOiBib29sZWFuXHJcbik6IFByb21pc2U8TWluZXJhbExpc3RhSXRlbVtdPiB7XHJcbiAgY29uc3QgYm9keSA9IGJ1aWxkQm9keUxpc3RhKHRpcG9BbmFsaXNlLCBmYWl4YUludGVyZXNzZSlcclxuICBjb25zdCBwYXlsb2FkID0gYXdhaXQgcG9zdFZpYVBhcmVudDxhbnlbXT4oJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXMnLCBib2R5LCAnZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpczpvaycsICdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzOmVycicpXHJcbiAgY29uc3Qgbm9ybSA9IG5vcm1hbGl6ZU1pbmVyYWxMaXN0YShwYXlsb2FkKVxyXG4gIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIGxpc3RhIG5vcm1hbGl6YWRhJywgbm9ybS5sZW5ndGgsIG5vcm0uc2xpY2UoMCwgMTApKVxyXG4gIHJldHVybiBub3JtXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaE1pbmVyYWxBZ3J1cGFkb3IoXHJcbiAgdGlwb0FuYWxpc2U6IE1pbmVyYWxUaXBvLFxyXG4gIG5vbWVSZXN1bWlkb01pbmVyYWw6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICBmYWl4YUludGVyZXNzZTogYm9vbGVhblxyXG4pOiBQcm9taXNlPE1pbmVyYWxBZ3J1cGFkb3JJdGVtW10+IHtcclxuICBjb25zdCBib2R5ID0gYnVpbGRCb2R5QWdydXBhZG9yKHRpcG9BbmFsaXNlLCBub21lUmVzdW1pZG9NaW5lcmFsLCBmYWl4YUludGVyZXNzZSlcclxuICBjb25zdCBwYXlsb2FkID0gYXdhaXQgcG9zdFZpYVBhcmVudDxhbnlbXT4oJ2ZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXMnLCBib2R5LCAnZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpczpvaycsICdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzOmVycicpXHJcbiAgY29uc3Qgbm9ybSA9IG5vcm1hbGl6ZUFncnVwYWRvcihwYXlsb2FkKVxyXG4gIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIGFncnVwYWRvciBub3JtYWxpemFkbycsIG5vcm0ubGVuZ3RoLCBub3JtLnNsaWNlKDAsIDEwKSlcclxuICByZXR1cm4gbm9ybVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09IFJlbmRlciBoZWxwZXJzID09PT09PT09PT09PT09PT09PT0gKi9cclxuY29uc3QgbGF5ZXJJZEZvciA9ICh0aXBvQW5hbGlzZTogTWluZXJhbFRpcG8pID0+IGBtaW5lcmFpc18ke1N0cmluZyh0aXBvQW5hbGlzZSkudG9Mb3dlckNhc2UoKX1gXHJcbmNvbnN0IGxlZ2VuZElkRm9yID0gKHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbykgPT4gYGxnZF8ke2xheWVySWRGb3IodGlwb0FuYWxpc2UpfWBcclxuXHJcbmZ1bmN0aW9uIGRpc2FibGVDbHVzdGVyTnVtYmVycyhseXI6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWx5cikgcmV0dXJuXHJcbiAgICBpZiAobHlyLmZlYXR1cmVSZWR1Y3Rpb24gJiYgbHlyLmZlYXR1cmVSZWR1Y3Rpb24udHlwZSA9PT0gJ2NsdXN0ZXInKSB7XHJcbiAgICAgIGx5ci5mZWF0dXJlUmVkdWN0aW9uID0geyAuLi5seXIuZmVhdHVyZVJlZHVjdGlvbiwgbGFiZWxzVmlzaWJsZTogZmFsc2UgfVxyXG4gICAgfVxyXG4gICAgaWYgKCdsYWJlbHNWaXNpYmxlJyBpbiBseXIpIChseXIgYXMgYW55KS5sYWJlbHNWaXNpYmxlID0gZmFsc2VcclxuICAgIGlmICgnbGFiZWxpbmdJbmZvJyBpbiBseXIpIChseXIgYXMgYW55KS5sYWJlbGluZ0luZm8gPSBbXVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoKGx5ciBhcyBhbnkpLnN1YmxheWVycykpIChseXIgYXMgYW55KS5zdWJsYXllcnMuZm9yRWFjaCgoc2w6IGFueSkgPT4gZGlzYWJsZUNsdXN0ZXJOdW1iZXJzKHNsKSlcclxuICB9IGNhdGNoIHt9XHJcbn1cclxuXHJcbi8qKiBEZXNlbmhhIGEgYmFzZSAoY29udGFkb3IpIGVtIGNsdXN0ZXJzL2JvbGhhcywgY29tIHTDrXR1bG8gY29uZm9ybWUgYW7DoWxpc2UgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VuaGFyRGlzdHJpYnVpY2FvTWluZXJhaXMoXHJcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LFxyXG4gIGRhZG9zOiBNaW5lcmFsSXRlbVtdLFxyXG4gIHRpcG9BbmFsaXNlOiBNaW5lcmFsVGlwbyxcclxuICB3aXRoSW50ZXJlc3Q6IGJvb2xlYW5cclxuKSB7XHJcbiAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnW21pbmVyYWxzXSBkZXNlbmhhckRpc3RyaWJ1aWNhb01pbmVyYWlzJylcclxuICBjb25zb2xlLmxvZygnW21pbmVyYWxzXSB0aXBvQW5hbGlzZScsIHRpcG9BbmFsaXNlLCAnd2l0aEludGVyZXN0Jywgd2l0aEludGVyZXN0LCAnbiBkYWRvcycsIGRhZG9zPy5sZW5ndGgpXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdmlldyB9ID0gamltdU1hcFZpZXdcclxuICAgIGlmICghdmlldyB8fCAhQXJyYXkuaXNBcnJheShkYWRvcykgfHwgZGFkb3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignW21pbmVyYWxzXSB2aWV3IGluZXhpc3RlbnRlIG91IGRhZG9zIHZhemlvcycpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgcG9udG9zID0gZGFkb3MubWFwKGQgPT4gKHsgY29kaWdvUG9jbzogZC5jb2RpZ29Qb2NvLCB0b3RhbDogZC50b3RhbE1pbmVyYWlzIH0pKVxyXG4gICAgY29uc29sZS5sb2coJ1ttaW5lcmFsc10gYW1vc3RyYSBkb3MgcG9udG9zJywgcG9udG9zLnNsaWNlKDAsIDEwKSlcclxuXHJcbiAgICBjb25zdCBpZENhbWFkYSA9IGxheWVySWRGb3IodGlwb0FuYWxpc2UpXHJcbiAgICBjb25zdCBpZExlZ2VuZGEgPSBsZWdlbmRJZEZvcih0aXBvQW5hbGlzZSlcclxuICAgIGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCKHtcclxuICAgICAgamltdU1hcFZpZXcsIGRhZG9zOiBwb250b3MsIGNvbG9yRmlsbDogJ3JnYigyNTMsMTQyLDU1KScsXHJcbiAgICAgIGlkQ2FtYWRhLCBpZExlZ2VuZGEsXHJcbiAgICAgIHRpdGxlTGVnZW5kYTogKHdpdGhJbnRlcmVzdCA/ICdJbnRlcnZhbG8gZGUgSW50ZXJlc3NlIC0gJyA6ICcnKSArIGxhYmVsRnJvbVZhbHVlKHRpcG9BbmFsaXNlKSxcclxuICAgICAgd2l0aEludGVyZXN0XHJcbiAgICB9IGFzIGFueSlcclxuXHJcbiAgICBjb25zdCBseXIgPSB2aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGlkQ2FtYWRhKSBhcyBhbnlcclxuICAgIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIGxheWVyIGNyaWFkYT8nLCAhIWx5ciwgbHlyKVxyXG4gICAgaWYgKGx5cikgZGlzYWJsZUNsdXN0ZXJOdW1iZXJzKGx5cilcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbbWluZXJhbHNdIEVSUk8gZGVzZW5oYXJEaXN0cmlidWljYW9NaW5lcmFpcycsIGUpXHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gIH1cclxufVxyXG5cclxuLyoqIEFwbGljYSB2aXN1YWwgdmFyaWFibGUgZGUgQ09SIHBvciBjaW1hIGRhIGNhbWFkYSBiYXNlIChzZW0gbWV4ZXIgbm8gdGFtYW5oby9jbHVzdGVyKSAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBsaWNhckNvbG9yaXphY2FvUG9yQWdydXBhZG9yKFxyXG4gIGppbXVNYXBWaWV3OiBKaW11TWFwVmlldyxcclxuICB0aXBvQW5hbGlzZTogTWluZXJhbFRpcG8sXHJcbiAgZGFkb3NBZ3J1cGFkb3JlczogTWluZXJhbEFncnVwYWRvckl0ZW1bXSxcclxuICBhZ3J1cGFkb3I6IEFncnVwYWRvclRpcG9cclxuKSB7XHJcbiAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnW21pbmVyYWxzXSBhcGxpY2FyQ29sb3JpemFjYW9Qb3JBZ3J1cGFkb3InKVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHZpZXcgfSA9IGppbXVNYXBWaWV3XHJcbiAgICBjb25zdCBsYXllciA9IHZpZXc/Lm1hcD8uZmluZExheWVyQnlJZChsYXllcklkRm9yKHRpcG9BbmFsaXNlKSkgYXMgYW55XHJcbiAgICBpZiAoIWxheWVyKSB7IGNvbnNvbGUud2FybignW21pbmVyYWxzXSBjYW1hZGEgYmFzZSBuw6NvIGVuY29udHJhZGEnKTsgcmV0dXJuIH1cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShkYWRvc0FncnVwYWRvcmVzKSB8fCBkYWRvc0FncnVwYWRvcmVzLmxlbmd0aCA9PT0gMCkgeyBjb25zb2xlLndhcm4oJ1ttaW5lcmFsc10gYWdydXBhZG9yZXMgdmF6aW9zJyk7IHJldHVybiB9XHJcblxyXG4gICAgLy8gw61uZGljZSBwb3IgcG/Dp29cclxuICAgIGNvbnN0IGJ5UG9jbyA9IG5ldyBNYXA8bnVtYmVyLCBNaW5lcmFsQWdydXBhZG9ySXRlbT4oKVxyXG4gICAgZm9yIChjb25zdCBpdCBvZiBkYWRvc0FncnVwYWRvcmVzKSBieVBvY28uc2V0KE51bWJlcihpdC5jb2RpZ29Qb2NvKSwgaXQpXHJcblxyXG4gICAgLy8gZGVmaW5pbW9zIHVtIGNhbXBvIFwibWRfdmFsXCIgcGFyYSBvIHZpc3VhbCB2YXJpYWJsZSBkZSBjb3JcclxuICAgIGNvbnN0IGZpZWxkVmFyID0gJ21kX3ZhbCdcclxuXHJcbiAgICAvLyAxKSBBdHVhbGl6YSBhdHJpYnV0b3MgcG9yIHBvw6dvIGNvbSBvIHZhbG9yIGRvIGFncnVwYWRvciBlc2NvbGhpZG9cclxuICAgIGNvbnNvbGUudGltZSgnW21pbmVyYWxzXSBxdWVyeUZlYXR1cmVzIGJhc2UnKVxyXG4gICAgY29uc3QgZmVhdHVyZVNldCA9IGF3YWl0IGxheWVyLnF1ZXJ5RmVhdHVyZXMoeyB3aGVyZTogJzE9MScsIHJldHVybkdlb21ldHJ5OiB0cnVlLCBvdXRGaWVsZHM6IFsnKiddIH0pXHJcbiAgICBjb25zb2xlLnRpbWVFbmQoJ1ttaW5lcmFsc10gcXVlcnlGZWF0dXJlcyBiYXNlJylcclxuICAgIGNvbnN0IHVwZGF0ZXM6IGFueVtdID0gW11cclxuICAgIGxldCBtaW5WYWwgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFlcclxuICAgIGxldCBtYXhWYWwgPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFlcclxuXHJcbiAgICBmb3IgKGNvbnN0IGYgb2YgZmVhdHVyZVNldC5mZWF0dXJlcykge1xyXG4gICAgICBjb25zdCBjb2RpZ28gPSBOdW1iZXIoXHJcbiAgICAgICAgZi5hdHRyaWJ1dGVzPy5QT0NPX0NEX1BPQ08gPz9cclxuICAgICAgICBmLmF0dHJpYnV0ZXM/LmNvZGlnb1BvY28gPz9cclxuICAgICAgICBmLmF0dHJpYnV0ZXM/LnBvY28gPz9cclxuICAgICAgICBmLmF0dHJpYnV0ZXM/LmNvZGlnb1xyXG4gICAgICApXHJcbiAgICAgIGNvbnN0IGFnID0gYnlQb2NvLmdldChjb2RpZ28pXHJcbiAgICAgIGxldCB2YWwgPSAwXHJcbiAgICAgIGlmIChhZykge1xyXG4gICAgICAgIGlmIChhZ3J1cGFkb3IgPT09ICdhbmFsaXNlJykgdmFsID0gYWcucXRBbmFsaXNlXHJcbiAgICAgICAgZWxzZSBpZiAoYWdydXBhZG9yID09PSAnbWVkaWEnKSB2YWwgPSBhZy52YWxvck1lZGlvXHJcbiAgICAgICAgZWxzZSB2YWwgPSBhZy52YWxvck1heGltb1xyXG4gICAgICB9XHJcbiAgICAgIGYuYXR0cmlidXRlc1tmaWVsZFZhcl0gPSB2YWxcclxuICAgICAgbWluVmFsID0gTWF0aC5taW4obWluVmFsLCB2YWwpXHJcbiAgICAgIG1heFZhbCA9IE1hdGgubWF4KG1heFZhbCwgdmFsKVxyXG4gICAgICB1cGRhdGVzLnB1c2goZilcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIGludGVydmFsbyB2YWxvcmVzJywgeyBtaW5WYWwsIG1heFZhbCwgdXBkYXRlczogdXBkYXRlcy5sZW5ndGggfSlcclxuXHJcbiAgICBpZiAodXBkYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnNvbGUudGltZSgnW21pbmVyYWxzXSBhcHBseUVkaXRzJylcclxuICAgICAgYXdhaXQgbGF5ZXIuYXBwbHlFZGl0cyh7IHVwZGF0ZUZlYXR1cmVzOiB1cGRhdGVzIH0pXHJcbiAgICAgIGNvbnNvbGUudGltZUVuZCgnW21pbmVyYWxzXSBhcHBseUVkaXRzJylcclxuICAgIH1cclxuXHJcbiAgICAvLyAyKSBNb250YSBvcyBzdG9wc1xyXG4gICAgY29uc3QgZGlmZiA9IG1heFZhbCAtIG1pblZhbFxyXG4gICAgY29uc3QgYnVpbGRMYWJlbCA9ICh2OiBudW1iZXIpID0+IGFncnVwYWRvciA9PT0gJ2FuYWxpc2UnID8gYCR7dn1gIDogYCR7dn0gJWBcclxuXHJcbiAgICBsZXQgc3RvcHM6IEFycmF5PHsgdmFsdWU6IG51bWJlcjsgY29sb3I6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9PlxyXG4gICAgaWYgKGRpZmYgPCAzKSB7XHJcbiAgICAgIHN0b3BzID0gW1xyXG4gICAgICAgIHsgdmFsdWU6IG1pblZhbCwgY29sb3I6ICdyZ2IoMjQ5LDIzOCwyMjUpJywgbGFiZWw6IGJ1aWxkTGFiZWwobWluVmFsKSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IG1heFZhbCwgY29sb3I6ICdyZ2IoMTY1LDYwLDIpJywgICBsYWJlbDogYnVpbGRMYWJlbChtYXhWYWwpIH1cclxuICAgICAgXVxyXG4gICAgfSBlbHNlIGlmIChkaWZmIDwgNSkge1xyXG4gICAgICBjb25zdCBzdGVwID0gTWF0aC5yb3VuZChkaWZmIC8gNCkgfHwgMVxyXG4gICAgICBzdG9wcyA9IFtcclxuICAgICAgICB7IHZhbHVlOiBtaW5WYWwsICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjQ5LDIzOCwyMjUpJywgbGFiZWw6IGJ1aWxkTGFiZWwobWluVmFsKSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IG1pblZhbCArIDIgKiBzdGVwLCBjb2xvcjogJ3JnYigyNTMsMTQyLDU1KScsICBsYWJlbDogYnVpbGRMYWJlbChtaW5WYWwgKyAyICogc3RlcCkgfSxcclxuICAgICAgICB7IHZhbHVlOiBtYXhWYWwsICAgICAgICAgICAgY29sb3I6ICdyZ2IoMTY1LDYwLDIpJywgICAgbGFiZWw6IGJ1aWxkTGFiZWwobWF4VmFsKSB9XHJcbiAgICAgIF1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHN0ZXAgPSBNYXRoLnJvdW5kKGRpZmYgLyA0KSB8fCAxXHJcbiAgICAgIHN0b3BzID0gW1xyXG4gICAgICAgIHsgdmFsdWU6IG1pblZhbCwgICAgICAgICAgICBjb2xvcjogJ3JnYigyNDksMjM4LDIyNSknLCBsYWJlbDogYnVpbGRMYWJlbChtaW5WYWwpIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogbWluVmFsICsgMSAqIHN0ZXAsIGNvbG9yOiAncmdiKDI1MSwxOTAsMTMwKScsIGxhYmVsOiBidWlsZExhYmVsKG1pblZhbCArIDEgKiBzdGVwKSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IG1pblZhbCArIDIgKiBzdGVwLCBjb2xvcjogJ3JnYigyNTMsMTQyLDU1KScsICBsYWJlbDogYnVpbGRMYWJlbChtaW5WYWwgKyAyICogc3RlcCkgfSxcclxuICAgICAgICB7IHZhbHVlOiBtYXhWYWwgLSAxICogc3RlcCwgY29sb3I6ICdyZ2IoMjMzLDg1LDYpJywgICAgbGFiZWw6IGJ1aWxkTGFiZWwobWF4VmFsIC0gMSAqIHN0ZXApIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogbWF4VmFsLCAgICAgICAgICAgIGNvbG9yOiAncmdiKDE2NSw2MCwyKScsICAgIGxhYmVsOiBidWlsZExhYmVsKG1heFZhbCkgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgLy8gMykgQXBsaWNhIHZpc3VhbCB2YXJpYWJsZSBkZSBjb3JcclxuICAgIGNvbnN0IHJlbmRlcmVyID0gbGF5ZXIucmVuZGVyZXI/LmNsb25lID8gbGF5ZXIucmVuZGVyZXIuY2xvbmUoKSA6IGxheWVyLnJlbmRlcmVyXHJcbiAgICBjb25zdCBjb2xvclZpc1ZhciA9IHtcclxuICAgICAgdHlwZTogJ2NvbG9yJyxcclxuICAgICAgZmllbGQ6IGZpZWxkVmFyLFxyXG4gICAgICBsZWdlbmRPcHRpb25zOiB7IHRpdGxlOiAnJyB9LFxyXG4gICAgICBzdG9wc1xyXG4gICAgfSBhcyBhbnlcclxuICAgIHJlbmRlcmVyLnZpc3VhbFZhcmlhYmxlcyA9IFtjb2xvclZpc1Zhcl1cclxuICAgIGxheWVyLnJlbmRlcmVyID0gcmVuZGVyZXJcclxuICAgIGNvbnNvbGUubG9nKCdbbWluZXJhbHNdIHZpc3VhbFZhcmlhYmxlcyBhcGxpY2FkYXMnKVxyXG5cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbbWluZXJhbHNdIEVSUk8gYXBsaWNhckNvbG9yaXphY2FvUG9yQWdydXBhZG9yJywgZSlcclxuICB9IGZpbmFsbHkge1xyXG4gICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgfVxyXG59XHJcblxyXG4vKiogTGFiZWwgaHVtYW5vIHBhcmEgbyB0w610dWxvIGRhIGxlZ2VuZGEvYmFzZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxGcm9tVmFsdWUodjogTWluZXJhbFRpcG8pIHtcclxuICBjb25zdCBmID0gTUlORVJBTF9PUFRJT05TLmZpbmQobyA9PiBvLnZhbHVlID09PSB2KVxyXG4gIHJldHVybiBmPy5sYWJlbCA/PyBTdHJpbmcodilcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuLyoqIEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50ICovXHJcbmltcG9ydCB7IFJlYWN0LCBqc3gsIGNzcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHR5cGUgeyBNaW5lcmFsTGlzdGFJdGVtLCBNaW5lcmFsVGlwbyB9IGZyb20gJy4vTWluZXJhbHMnXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIG1pbmVyYWxBbmFsaXNlOiBNaW5lcmFsVGlwbyB8ICcnICAgICAgICAgICAgLy8gRFJYLVRPVCB8IERSWC1BUkcgfCBNQVNTQSB8IEFSRUEgfCB0b2Rhc0FuYWxpc2VzXHJcbiAgbGlzdGFNaW5lcmFpczogTWluZXJhbExpc3RhSXRlbVtdXHJcbiAgbG9hZGluZ01pbmVyYWlzOiBib29sZWFuXHJcbiAgZXJyb3JNaW5lcmFpczogc3RyaW5nXHJcblxyXG4gIGJ1c2NhTWluZXJhbDogc3RyaW5nXHJcbiAgc2V0QnVzY2FNaW5lcmFsOiAodjogc3RyaW5nKSA9PiB2b2lkXHJcbiAgbWluZXJhbFNlbGVjaW9uYWRvOiBNaW5lcmFsTGlzdGFJdGVtIHwgbnVsbFxyXG4gIHNldE1pbmVyYWxTZWxlY2lvbmFkbzogKG06IE1pbmVyYWxMaXN0YUl0ZW0gfCBudWxsKSA9PiB2b2lkXHJcblxyXG4gIGFncnVwYWRvcjogJ2FuYWxpc2UnIHwgJ21lZGlhJyB8ICdtYXhpbWEnIHwgJydcclxuICBzZXRBZ3J1cGFkb3I6ICh2OiAnYW5hbGlzZScgfCAnbWVkaWEnIHwgJ21heGltYScgfCAnJykgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBib3hTdHlsZSA9IGNzc2BtYXJnaW4tdG9wOjhweDtib3JkZXI6MXB4IHNvbGlkICNlZWU7Ym9yZGVyLXJhZGl1czo2cHg7YmFja2dyb3VuZDojZmZmO3BhZGRpbmc6OHB4O2BcclxuY29uc3QgaGVhZGVyID0gY3NzYGZvbnQtd2VpZ2h0OjYwMDttYXJnaW46NHB4IDAgNnB4O2BcclxuY29uc3Qgc2VhcmNoSW5wdXQgPSBjc3NgXHJcbiAgd2lkdGg6MTAwJTtib3JkZXI6MXB4IHNvbGlkICNjZmNmY2Y7Ym9yZGVyLXJhZGl1czo0cHg7cGFkZGluZzo2cHggOHB4O2ZvbnQtc2l6ZTouOTVyZW07b3V0bGluZTpub25lO1xyXG4gICY6Zm9jdXN7Ym9yZGVyLWNvbG9yOiM5OTk7fVxyXG5gXHJcbmNvbnN0IGxpc3RCb3ggPSBjc3NgXHJcbiAgbWFyZ2luLXRvcDo2cHg7Ym9yZGVyOjFweCBzb2xpZCAjZWVlO2JvcmRlci1yYWRpdXM6NnB4O21heC1oZWlnaHQ6MTgwcHg7b3ZlcmZsb3c6YXV0bztwYWRkaW5nOjRweDtiYWNrZ3JvdW5kOiNmYWZhZmE7XHJcbmBcclxuY29uc3QgbGlzdEl0ZW0gPSBjc3NgXHJcbiAgcGFkZGluZzo2cHggOHB4O2JvcmRlci1yYWRpdXM6NHB4O2N1cnNvcjpwb2ludGVyO3VzZXItc2VsZWN0Om5vbmU7XHJcbiAgJjpob3ZlcntiYWNrZ3JvdW5kOiNmMGYwZjA7fVxyXG4gICYuYWN0aXZle2JhY2tncm91bmQ6I2U4ZjBmZTtib3JkZXI6MXB4IHNvbGlkICNjOWRlZmQ7fVxyXG5gXHJcbmNvbnN0IHJhZGlvc1dyYXBwZXIgPSBjc3NgXHJcbiAgbWFyZ2luLXRvcDo4cHg7cGFkZGluZzo2cHg7Ym9yZGVyOjFweCBzb2xpZCAjZWVlO2JvcmRlci1yYWRpdXM6NnB4O2JhY2tncm91bmQ6I2ZhZmFmYTtcclxuICBkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgzLG1pbm1heCgxMDBweCwxZnIpKTtnYXA6NnB4O1xyXG5gXHJcbmNvbnN0IHJhZGlvTGFiZWwgPSBjc3NgXHJcbiAgZGlzcGxheTppbmxpbmUtZ3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6YXV0byAxZnI7YWxpZ24taXRlbXM6Y2VudGVyO2NvbHVtbi1nYXA6NnB4O2ZvbnQtc2l6ZTouOTVyZW07Y3Vyc29yOnBvaW50ZXI7XHJcbiAgaW5wdXR7d2lkdGg6MTRweDtoZWlnaHQ6MTRweDt9XHJcbmBcclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZShzOiBzdHJpbmcpIHtcclxuICByZXR1cm4gKHN8fCcnKS5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1xccHtEaWFjcml0aWN9L2d1LCcnKS50b0xvd2VyQ2FzZSgpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNaW5lcmFsc0xpc3RQYW5lbCh7XHJcbiAgbWluZXJhbEFuYWxpc2UsIGxpc3RhTWluZXJhaXMsIGxvYWRpbmdNaW5lcmFpcywgZXJyb3JNaW5lcmFpcyxcclxuICBidXNjYU1pbmVyYWwsIHNldEJ1c2NhTWluZXJhbCxcclxuICBtaW5lcmFsU2VsZWNpb25hZG8sIHNldE1pbmVyYWxTZWxlY2lvbmFkbyxcclxuICBhZ3J1cGFkb3IsIHNldEFncnVwYWRvclxyXG59OiBQcm9wcykge1xyXG4gIC8vIOKsh++4jyBOT1ZPOiBjb250cm9sYSBhYmVydHVyYSBkYSBsaXN0YSBxdWFuZG8gbyBpbnB1dCBnYW5oYSBmb2NvL2NsaXF1ZVxyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBxID0gbm9ybWFsaXplKGJ1c2NhTWluZXJhbClcclxuICAvLyDirIfvuI8gTVVET1U6IHF1YW5kbyBxIHZhemlvLCBsaXN0YSBjb21wbGV0YTsgcXVhbmRvIGjDoSBxLCBmaWx0cmFcclxuICBjb25zdCBsaXN0YUZpbHRyYWRhID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+IChsaXN0YU1pbmVyYWlzIHx8IFtdKS5maWx0ZXIobSA9PiAhcSB8fCBub3JtYWxpemUobS5ub21lTWluZXJhbCkuaW5jbHVkZXMocSkpLFxyXG4gICAgW2xpc3RhTWluZXJhaXMsIHFdXHJcbiAgKVxyXG5cclxuICBjb25zdCBzZWxlY3RlZE5hbWUgPSBtaW5lcmFsU2VsZWNpb25hZG8/Lm5vbWVNaW5lcmFsIHx8ICcnXHJcbiAgY29uc3QgZGlzYWJsZWRBbGwgPSAhbWluZXJhbEFuYWxpc2VcclxuXHJcbiAgY29uc3QgaGFuZGxlUGljayA9IChtOiBNaW5lcmFsTGlzdGFJdGVtKSA9PiB7XHJcbiAgICBzZXRNaW5lcmFsU2VsZWNpb25hZG8obSlcclxuICAgIHNldEJ1c2NhTWluZXJhbChtLm5vbWVNaW5lcmFsKVxyXG4gICAgc2V0T3BlbihmYWxzZSkgLy8g4qyF77iPIGZlY2hhIGFww7NzIGVzY29saGVyXHJcbiAgfVxyXG5cclxuICAvLyBQYXJhIG7Do28gZmVjaGFyIGEgbGlzdGEgYW50ZXMgZG8gY2xpcXVlIG5vIGl0ZW0gKG9yZGVtIGJsdXIvY2xpY2sgZG8gYnJvd3NlcilcclxuICBjb25zdCBkZWxheWVkQ2xvc2UgPSAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHNldE9wZW4oZmFsc2UpLCAxMjApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNzcz17Ym94U3R5bGV9IGFyaWEtbGFiZWw9XCJsaXN0YWdlbS1kZS1taW5lcmFpc1wiPlxyXG4gICAgICA8ZGl2IGNzcz17aGVhZGVyfT5MaXN0YXIgb3MgbWluZXJhaXM8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiDirIfvuI8gYWJyZSBhIGxpc3RhIGFvIGZvY2FyL2NsaWNhcjsgbWFudMOpbSBmaWx0cmFnZW0gYW8gZGlnaXRhciAqL31cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY3NzPXtzZWFyY2hJbnB1dH1cclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e2Rpc2FibGVkQWxsID8gJ1NlbGVjaW9uZSB1bSB0aXBvIGRlIGFuw6FsaXNlIGFjaW1hJyA6ICdEaWdpdGUgb3UgY2xpcXVlIHBhcmEgbGlzdGFyJ31cclxuICAgICAgICB2YWx1ZT17YnVzY2FNaW5lcmFsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgc2V0QnVzY2FNaW5lcmFsKGUudGFyZ2V0LnZhbHVlKTsgc2V0T3Blbih0cnVlKSB9fVxyXG4gICAgICAgIG9uRm9jdXM9eygpID0+IHNldE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX1cclxuICAgICAgICBvbkJsdXI9e2RlbGF5ZWRDbG9zZX1cclxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWRBbGwgfHwgbG9hZGluZ01pbmVyYWlzfVxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJidXNjYXItbWluZXJhbFwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7Lyog4qyH77iPIEEgbGlzdGEgYWdvcmEgYWJyZSBxdWFuZG8gb3Blbj10cnVlIChmb2NvL2NsaXF1ZSksIG1lc21vIHNlbSB0ZXh0byAqL31cclxuICAgICAge29wZW4gJiYgIWRpc2FibGVkQWxsICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjc3M9e2xpc3RCb3h9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwibGlzdGEtZGUtbWluZXJhaXNcIlxyXG4gICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSAvLyBpbXBlZGUgYmx1ciBhbnRlcyBkbyBjbGlja1xyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nTWluZXJhaXMgJiYgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PkNhcnJlZ2FuZG8gbGlzdGHigKY8L2Rpdj59XHJcbiAgICAgICAgICB7ISFlcnJvck1pbmVyYWlzICYmIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCwgY29sb3I6ICcjYjAwJyB9fT5FcnJvOiB7ZXJyb3JNaW5lcmFpc308L2Rpdj59XHJcbiAgICAgICAgICB7IWxvYWRpbmdNaW5lcmFpcyAmJiAhZXJyb3JNaW5lcmFpcyAmJiBsaXN0YUZpbHRyYWRhLmxlbmd0aCA9PT0gMCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT5OZW5odW0gbWluZXJhbCBlbmNvbnRyYWRvLjwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHshbG9hZGluZ01pbmVyYWlzICYmICFlcnJvck1pbmVyYWlzICYmIGxpc3RhRmlsdHJhZGEubWFwKG0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmUgPSBtLm5vbWVNaW5lcmFsID09PSBzZWxlY3RlZE5hbWVcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2Ake20ubm9tZU1pbmVyYWx9LSR7bS5ub21lUmVzdW1pZG9NaW5lcmFsfWB9XHJcbiAgICAgICAgICAgICAgICBjc3M9e2xpc3RJdGVtfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmUgPyAnYWN0aXZlJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSAvLyBnYXJhbnRlIHF1ZSBvIGNsaWNrIG7Do28gcGVyY2EgbyBmb2NvIGFudGVzXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQaWNrKG0pfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e20ubm9tZU1pbmVyYWx9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge20ubm9tZU1pbmVyYWx9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qIHLDoWRpb3MgZSBkaWNhcyDigJQgaW5hbHRlcmFkb3MgKi99XHJcbiAgICAgIDxkaXYgY3NzPXtyYWRpb3NXcmFwcGVyfSBhcmlhLWxhYmVsPVwiYWdydXBhZG9yZXMtbWluZXJhaXNcIj5cclxuICAgICAgICA8bGFiZWwgY3NzPXtyYWRpb0xhYmVsfSB0aXRsZT1cIlF1YW50aWRhZGUgZGUgQW7DoWxpc2VzXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgbmFtZT1cInRpcG8tbWluZXJhbFwiXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2FncnVwYWRvciA9PT0gJ2FuYWxpc2UnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0QWdydXBhZG9yKCdhbmFsaXNlJyl9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshbWluZXJhbFNlbGVjaW9uYWRvfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuPkFuw6FsaXNlczwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBjc3M9e3JhZGlvTGFiZWx9IHRpdGxlPVwiTcOpZGlhIGRvIG1pbmVyYWwgc2VsZWNpb25hZG9cIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICBuYW1lPVwidGlwby1taW5lcmFsXCJcclxuICAgICAgICAgICAgY2hlY2tlZD17YWdydXBhZG9yID09PSAnbWVkaWEnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0QWdydXBhZG9yKCdtZWRpYScpfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IW1pbmVyYWxTZWxlY2lvbmFkb31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3Bhbj5Nw6lkaWE8L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgY3NzPXtyYWRpb0xhYmVsfSB0aXRsZT1cIk3DoXhpbW8gZG8gbWluZXJhbCBzZWxlY2lvbmFkb1wiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXBvLW1pbmVyYWxcIlxyXG4gICAgICAgICAgICBjaGVja2VkPXthZ3J1cGFkb3IgPT09ICdtYXhpbWEnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0QWdydXBhZG9yKCdtYXhpbWEnKX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFtaW5lcmFsU2VsZWNpb25hZG99XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNwYW4+TcOheGltYTwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA2LCBmb250U2l6ZTogJy45cmVtJywgY29sb3I6ICcjNjY2JyB9fT5cclxuICAgICAgICB7IW1pbmVyYWxBbmFsaXNlICYmICdFc2NvbGhhIERSWC9RZW1zY2FuL1RvZGFzIHBhcmEgaGFiaWxpdGFyIGEgYnVzY2EuJ31cclxuICAgICAgICB7bWluZXJhbEFuYWxpc2UgJiYgIW1pbmVyYWxTZWxlY2lvbmFkbyAmJiAnQ2xpcXVlIG5vIGNhbXBvIHBhcmEgbGlzdGFyIG91IGRpZ2l0ZSBwYXJhIGZpbHRyYXI7IHNlbGVjaW9uZSB1bSBtaW5lcmFsIHBhcmEgaGFiaWxpdGFyIE3DqWRpYS9Nw6F4aW1hLid9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4iLCIvLyB1dGlscy50cyAoRVNNIEBhcmNnaXMvY29yZSlcclxuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tIFwiQGFyY2dpcy9jb3JlL2xheWVycy9GZWF0dXJlTGF5ZXJcIlxyXG5pbXBvcnQgTGVnZW5kIGZyb20gXCJAYXJjZ2lzL2NvcmUvd2lkZ2V0cy9MZWdlbmRcIlxyXG5pbXBvcnQgQ2xhc3NCcmVha3NSZW5kZXJlciBmcm9tIFwiQGFyY2dpcy9jb3JlL3JlbmRlcmVycy9DbGFzc0JyZWFrc1JlbmRlcmVyXCJcclxuaW1wb3J0IFNpbXBsZU1hcmtlclN5bWJvbCBmcm9tIFwiQGFyY2dpcy9jb3JlL3N5bWJvbHMvU2ltcGxlTWFya2VyU3ltYm9sXCJcclxuXHJcbmV4cG9ydCBjb25zdCBjb3Jlc1RpcG9zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gIGxhdGVyYWw6IFwicmdiYSg4OCwgMTksIDI1MiwgMC43KVwiLFxyXG4gIHRlc3RlbXVuaG86IFwicmdiYSgyNTUsIDAsIDI1NSwgMC43KVwiLFxyXG4gIGNhbGhhOiBcInJnYmEoMjQ1LCAyMDEsIDM4LCAwLjcpXCIsXHJcbiAgcGx1ZzogXCJyZ2JhKDEyNSwgMjUzLCAxNDgsIDAuNylcIixcclxuICBcIndob2xlIGNvcmVcIjogXCJyZ2JhKDI1NSwgNDMsIDI0LCAwLjcpXCJcclxufVxyXG5cclxudHlwZSBHZXJhclBhcmFtcyA9IHtcclxuICBqaW11TWFwVmlldzogYW55XHJcbiAgZGFkb3M6IHsgY29kaWdvUG9jbzogbnVtYmVyOyB0b3RhbDogbnVtYmVyIH1bXVxyXG4gIGNvbG9yRmlsbDogc3RyaW5nXHJcbiAgaWRDYW1hZGE6IHN0cmluZ1xyXG4gIGlkTGVnZW5kYTogc3RyaW5nXHJcbiAgdGl0bGVMZWdlbmRhOiBzdHJpbmdcclxuICB3aXRoSW50ZXJlc3Q/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXJhck1hcGFEaXN0cmlidWljYW9FQih7XHJcbiAgamltdU1hcFZpZXcsIGRhZG9zLCBjb2xvckZpbGwsIGlkQ2FtYWRhLCBpZExlZ2VuZGEsIHRpdGxlTGVnZW5kYVxyXG59OiBHZXJhclBhcmFtcykge1xyXG4gIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFtkaXN0LWViXSBnZXJhck1hcGFEaXN0cmlidWljYW9FQiBpZD0ke2lkQ2FtYWRhfWApXHJcbiAgY29uc29sZS50aW1lKGBbZGlzdC1lYl0gdGVtcG8tdG90YWwgJHtpZENhbWFkYX1gKVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlld1xyXG4gICAgY29uc3QgbWFwID0gdmlldy5tYXBcclxuXHJcbiAgICBjb25zb2xlLmxvZygnW2Rpc3QtZWJdIHF0ZCBkYWRvcycsIGRhZG9zLmxlbmd0aCwgZGFkb3Muc2xpY2UoMCwgMTApKVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhZG9zKSB8fCBkYWRvcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS53YXJuKCdbZGlzdC1lYl0gc2VtIGRhZG9zIC0+IG7Do28gY3JpYSBjYW1hZGEnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICAvLyBOb3JtYWxpemEgbGlzdGEgZGUgY8OzZGlnb3MgKGFwZW5hcyBuw7ptZXJvcylcclxuICAgIGNvbnN0IGNvZGlnb3NBcnIgPSBkYWRvcy5tYXAocCA9PiBOdW1iZXIocC5jb2RpZ29Qb2NvKSkuZmlsdGVyKHYgPT4gTnVtYmVyLmlzRmluaXRlKHYpKVxyXG4gICAgY29uc3QgY29kaWdvcyA9IGNvZGlnb3NBcnIuam9pbignLCcpXHJcbiAgICBpZiAoIWNvZGlnb3MpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdbZGlzdC1lYl0gbGlzdGEgZGUgY8OzZGlnb3MgdmF6aWEgYXDDs3Mgbm9ybWFsaXphw6fDo28nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBgUE9DT19DRF9QT0NPIElOICgke2NvZGlnb3N9KWBcclxuICAgIGNvbnNvbGUubG9nKCdbZGlzdC1lYl0gZGVmaW5pdGlvbkV4cHJlc3Npb24nLCBleHByZXNzaW9uKVxyXG5cclxuICAgIC8vIExheWVyIGJhc2UgZG8gc2VydmnDp29cclxuICAgIGNvbnN0IGNhbWFkYVBvY29zU3J2ID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vYmFzZWdpcy5wZXRyb2JyYXMuY29tLmJyL2FyY2dpcy9yZXN0L3NlcnZpY2VzL0VYUExPUkEvRmVhdHVyZV9Qb2Nvcy9NYXBTZXJ2ZXIvMCcsXHJcbiAgICAgIGRlZmluaXRpb25FeHByZXNzaW9uOiBleHByZXNzaW9uLFxyXG4gICAgICB0aXRsZTogJ1Bvw6dvcyAoYmFzZSknLFxyXG4gICAgICBvdXRGaWVsZHM6IFsnKiddLFxyXG4gICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zb2xlLnRpbWUoJ1tkaXN0LWViXSBsb2FkIGNhbWFkYVBvw6dvcycpXHJcbiAgICBhd2FpdCBjYW1hZGFQb2Nvc1Nydi5sb2FkKClcclxuICAgIGNvbnNvbGUudGltZUVuZCgnW2Rpc3QtZWJdIGxvYWQgY2FtYWRhUG/Dp29zJylcclxuXHJcbiAgICAvLyBPSUQgcmVhbCBkbyBzZXJ2acOnbyAocG9kZSBzZXIgUE9DT19DRF9QT0NPKVxyXG4gICAgY29uc3Qgb2JqZWN0SWRGaWVsZCA9IChjYW1hZGFQb2Nvc1NydiBhcyBhbnkpLm9iamVjdElkRmllbGQgfHwgJ09CSkVDVElEJ1xyXG4gICAgY29uc29sZS5sb2coJ1tkaXN0LWViXSBvYmplY3RJZEZpZWxkIGRvIHNlcnZpw6dvOicsIG9iamVjdElkRmllbGQpXHJcblxyXG4gICAgY29uc29sZS50aW1lKCdbZGlzdC1lYl0gcXVlcnlGZWF0dXJlcycpXHJcbiAgICBjb25zdCBxdWVyeVJlc3VsdCA9IGF3YWl0IGNhbWFkYVBvY29zU3J2LnF1ZXJ5RmVhdHVyZXMoe1xyXG4gICAgICB3aGVyZTogZXhwcmVzc2lvbixcclxuICAgICAgb3V0RmllbGRzOiBbJyonXSxcclxuICAgICAgcmV0dXJuR2VvbWV0cnk6IHRydWVcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLnRpbWVFbmQoJ1tkaXN0LWViXSBxdWVyeUZlYXR1cmVzJylcclxuICAgIGNvbnNvbGUubG9nKCdbZGlzdC1lYl0gZmVhdHVyZXMgcmV0b3JuYWRhcycsIHF1ZXJ5UmVzdWx0LmZlYXR1cmVzLmxlbmd0aClcclxuXHJcbiAgICAvLyBBdHJpYnVpIFRPVEFMIGUgaW5pY2lhbGl6YSBtZF92YWxcclxuICAgIGNvbnN0IGZlYXR1cmVzID0gcXVlcnlSZXN1bHQuZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvZGlnbyA9IE51bWJlcihmZWF0dXJlLmF0dHJpYnV0ZXMuUE9DT19DRF9QT0NPKVxyXG4gICAgICBjb25zdCBkYWRvID0gZGFkb3MuZmluZChwID0+IHAuY29kaWdvUG9jbyA9PT0gY29kaWdvKVxyXG4gICAgICBjb25zdCB0b3RhbCA9IGRhZG8gPyBOdW1iZXIoZGFkby50b3RhbCkgOiAwXHJcbiAgICAgIGZlYXR1cmUuYXR0cmlidXRlcy5QT0NPX01EX01FUklEX0NFTlQgPSB0b3RhbFxyXG4gICAgICBmZWF0dXJlLmF0dHJpYnV0ZXMubWRfdmFsID0gMCAvLyB1c2FkbyBwZWxvcyBhZ3J1cGFkb3Jlc1xyXG4gICAgICByZXR1cm4gZmVhdHVyZVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBFc3RhdMOtc3RpY2EgcGFyYSBjbGFzc2VzL2J1YmJsZVxyXG4gICAgY29uc3QgdmFsb3JlcyA9IGRhZG9zLm1hcChwID0+IE51bWJlcihwLnRvdGFsKSkuZmlsdGVyKHYgPT4gTnVtYmVyLmlzRmluaXRlKHYpKVxyXG4gICAgbGV0IG1pbiA9IE1hdGgubWluKC4uLnZhbG9yZXMpXHJcbiAgICBsZXQgbWF4ID0gTWF0aC5tYXgoLi4udmFsb3JlcylcclxuICAgIGNvbnNvbGUubG9nKCdbZGlzdC1lYl0gbWluL21heCBhbnRlcycsIHsgbWluLCBtYXggfSlcclxuXHJcbiAgICBjb25zdCBpbmZvOiBhbnlbXSA9IFtdXHJcbiAgICBjb25zdCBvdXRsaW5lID0geyBjb2xvcjogXCJibGFja1wiLCB3aWR0aDogXCIxcHhcIiB9IGFzIGNvbnN0XHJcblxyXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobWluKSB8fCAhTnVtYmVyLmlzRmluaXRlKG1heCkpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdbZGlzdC1lYl0gdmFsb3JlcyBpbnbDoWxpZG9zIC0+IG7Do28gY3JpYSBjYW1hZGEnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAobWluID09PSAwICYmIG1heCA9PT0gMCkge1xyXG4gICAgICBpbmZvLnB1c2goe1xyXG4gICAgICAgIG1pblZhbHVlOiAwLCBtYXhWYWx1ZTogMCxcclxuICAgICAgICBsYWJlbDogXCJOw6NvIGjDoSBkYWRvcyBzdWZpY2llbnRlc1wiLFxyXG4gICAgICAgIHN5bWJvbDogbmV3IFNpbXBsZU1hcmtlclN5bWJvbCh7IGNvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsMClcIiwgc2l6ZTogMCwgc3R5bGU6IFwiY2lyY2xlXCIsIG91dGxpbmUgfSlcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHplcmFkb3MgPSB2YWxvcmVzLmZpbHRlcih2ID0+IHYgPT09IDApLmxlbmd0aFxyXG4gICAgICBjb25zdCBuYW9aZXJhZG9zID0gdmFsb3Jlcy5maWx0ZXIodiA9PiB2ID4gMClcclxuICAgICAgY29uc29sZS5sb2coJ1tkaXN0LWViXSB6ZXJhZG9zL25hb1plcmFkb3MnLCB7IHplcmFkb3MsIG5hb1plcmFkb3M6IG5hb1plcmFkb3MubGVuZ3RoIH0pXHJcblxyXG4gICAgICBpZiAoemVyYWRvcyA+IDApIHtcclxuICAgICAgICBpbmZvLnB1c2goe1xyXG4gICAgICAgICAgbWluVmFsdWU6IDAsIG1heFZhbHVlOiAwLFxyXG4gICAgICAgICAgbGFiZWw6IGB8IDAgfCAoJHt6ZXJhZG9zfSBwb8OnbyR7emVyYWRvcyA+IDEgPyAncycgOiAnJ30pYCxcclxuICAgICAgICAgIHN5bWJvbDogbmV3IFNpbXBsZU1hcmtlclN5bWJvbCh7IGNvbG9yOiBcInJnYmEoMjAwLDIwMCwyMDAsMC4zKVwiLCBzaXplOiA2LCBzdHlsZTogXCJjaXJjbGVcIiwgb3V0bGluZSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1pbiA9IE1hdGgubWF4KDEsIG1pbilcclxuICAgICAgY29uc3QgbiA9IG5hb1plcmFkb3MubGVuZ3RoXHJcbiAgICAgIGNvbnN0IG51bUNsYXNzZXMgPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKDEgKyAzLjMgKiBNYXRoLmxvZzEwKG4gfHwgMSkpKVxyXG4gICAgICBjb25zdCBicmVha3MgPSBNYXRoLmNlaWwoKG1heCAtIG1pbiArIDEpIC8gTWF0aC5tYXgoMSwgbnVtQ2xhc3NlcykpXHJcbiAgICAgIGNvbnN0IG1heFNpemUgPSA0MFxyXG4gICAgICBjb25zb2xlLmxvZygnW2Rpc3QtZWJdIGNsYXNzZXMnLCB7IG51bUNsYXNzZXMsIGJyZWFrcywgbWF4U2l6ZSB9KVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1DbGFzc2VzOyBpKyspIHtcclxuICAgICAgICBjb25zdCBtaW5WYWx1ZSA9IG1pbiArIChpICogYnJlYWtzKVxyXG4gICAgICAgIGNvbnN0IG1heFZhbHVlID0gbWluICsgKChpICsgMSkgKiBicmVha3MpIC0gMVxyXG4gICAgICAgIGlmIChtaW5WYWx1ZSA+IG1heCkgYnJlYWtcclxuICAgICAgICBjb25zdCBjb3VudCA9IG5hb1plcmFkb3MuZmlsdGVyKHYgPT4gdiA+PSBtaW5WYWx1ZSAmJiB2IDw9IG1heFZhbHVlKS5sZW5ndGhcclxuICAgICAgICBjb25zdCBsYWJlbCA9IGAke21pblZhbHVlfSB8LS0tfCAke21heFZhbHVlfSAoJHtjb3VudH0gcG/Dp28ke2NvdW50ID4gMSA/ICdzJyA6ICcnfSlgXHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IDYgKyAoaSAqIChtYXhTaXplIC8gbnVtQ2xhc3NlcykpXHJcbiAgICAgICAgaW5mby5wdXNoKHtcclxuICAgICAgICAgIG1pblZhbHVlLCBtYXhWYWx1ZSwgbGFiZWwsXHJcbiAgICAgICAgICBzeW1ib2w6IG5ldyBTaW1wbGVNYXJrZXJTeW1ib2woeyBjb2xvcjogY29sb3JGaWxsLCBzaXplLCBzdHlsZTogXCJjaXJjbGVcIiwgb3V0bGluZSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBDbGFzc0JyZWFrc1JlbmRlcmVyKHtcclxuICAgICAgZmllbGQ6IFwiUE9DT19NRF9NRVJJRF9DRU5UXCIsXHJcbiAgICAgIGNsYXNzQnJlYWtJbmZvczogaW5mb1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBTY2hlbWEgZG8gbGF5ZXIgY2xpZW50LXNpZGU6XHJcbiAgICAvLyAtIGhlcmRhIGNhbXBvcyBkbyBzZXJ2acOnb1xyXG4gICAgLy8gLSByZW1vdmUgZHVwbGljYXRhcyBxdWUgdmFtb3MgYWRpY2lvbmFyXHJcbiAgICBjb25zdCBiYXNlRmllbGRzID0gY2FtYWRhUG9jb3NTcnYuZmllbGRzLmZpbHRlcihmID0+XHJcbiAgICAgIGY/Lm5hbWUgIT09ICdQT0NPX01EX01FUklEX0NFTlQnICYmIGY/Lm5hbWUgIT09ICdtZF92YWwnXHJcbiAgICApXHJcbiAgICBjb25zdCBmaWVsZHMgPSBbXHJcbiAgICAgIC4uLmJhc2VGaWVsZHMsXHJcbiAgICAgIHsgbmFtZTogXCJQT0NPX01EX01FUklEX0NFTlRcIiwgYWxpYXM6IFwiVmFsb3IgKE1pbmVyYWlzL0Ftb3N0cmFzKVwiLCB0eXBlOiBcImRvdWJsZVwiIGFzIGNvbnN0IH0sXHJcbiAgICAgIHsgbmFtZTogXCJtZF92YWxcIiwgYWxpYXM6IFwiVmFsb3IgQWdydXBhZG9yXCIsIHR5cGU6IFwiZG91YmxlXCIgYXMgY29uc3QgfVxyXG4gICAgXVxyXG5cclxuICAgIC8vIFJlbW92ZSBjYW1hZGEgYW50ZXJpb3IgKHNlIGV4aXN0aXIpXHJcbiAgICBjb25zdCBleGlzdGVudGUgPSBtYXAuZmluZExheWVyQnlJZChpZENhbWFkYSlcclxuICAgIGlmIChleGlzdGVudGUpIHsgY29uc29sZS5sb2coJ1tkaXN0LWViXSByZW1vdmUgY2FtYWRhIGV4aXN0ZW50ZScsIGlkQ2FtYWRhKTsgbWFwLnJlbW92ZShleGlzdGVudGUpIH1cclxuXHJcbiAgICAvLyBDcmlhIGNhbWFkYSBjbGllbnQtc2lkZSBjb20gbyBPSUQgcmVhbCBkbyBzZXJ2acOnb1xyXG4gICAgY29uc3QgY2FtYWRhRGlzdHJpYnVpY2FvID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICAgIGlkOiBpZENhbWFkYSxcclxuICAgICAgc291cmNlOiBmZWF0dXJlcyxcclxuICAgICAgZmllbGRzLFxyXG4gICAgICBvYmplY3RJZEZpZWxkLCAvLyA8PDwgaGVyZGFkbyBkbyBzZXJ2acOnbyAoZXguOiAnUE9DT19DRF9QT0NPJylcclxuICAgICAgZ2VvbWV0cnlUeXBlOiBcInBvaW50XCIsXHJcbiAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHZpZXcuc3BhdGlhbFJlZmVyZW5jZSA/PyB7IHdraWQ6IDEwMjEwMCB9LFxyXG4gICAgICByZW5kZXJlcixcclxuICAgICAgdGl0bGU6IHRpdGxlTGVnZW5kYSxcclxuICAgICAgbGlzdE1vZGU6IFwiaGlkZVwiLFxyXG4gICAgICBmZWF0dXJlUmVkdWN0aW9uOiB7IHR5cGU6IFwiY2x1c3RlclwiLCBjbHVzdGVyTWluU2l6ZTogMTgsIGNsdXN0ZXJNYXhTaXplOiA0OCwgbGFiZWxzVmlzaWJsZTogZmFsc2UgfVxyXG4gICAgfSlcclxuXHJcbiAgICBtYXAuYWRkKGNhbWFkYURpc3RyaWJ1aWNhbylcclxuICAgIGNvbnNvbGUubG9nKCdbZGlzdC1lYl0gY2FtYWRhIGFkaWNpb25hZGEnLCBpZENhbWFkYSwgJ2ZlYXR1cmVzOicsIGZlYXR1cmVzLmxlbmd0aClcclxuXHJcbiAgICAvLyAoT3BjaW9uYWwpIGxlZ2VuZGEgbm8gbWFwYVxyXG4gICAgY29uc3QgbGVnZW5kID0gbmV3IExlZ2VuZCh7XHJcbiAgICAgIHZpZXcsXHJcbiAgICAgIGxheWVySW5mb3M6IFt7IGxheWVyOiBjYW1hZGFEaXN0cmlidWljYW8sIHRpdGxlOiB0aXRsZUxlZ2VuZGEgfV1cclxuICAgIH0pXHJcbiAgICAvLyB2aWV3LnVpLmFkZChsZWdlbmQsIFwiYm90dG9tLWxlZnRcIilcclxuXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW2Rpc3QtZWJdIEVSUk8gYW8gZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUInLCBlKVxyXG4gIH0gZmluYWxseSB7XHJcbiAgICBjb25zb2xlLnRpbWVFbmQoYFtkaXN0LWViXSB0ZW1wby10b3RhbCAke2lkQ2FtYWRhfWApXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9sYXllcnNfRmVhdHVyZUxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9yZW5kZXJlcnNfQ2xhc3NCcmVha3NSZW5kZXJlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfc3ltYm9sc19TaW1wbGVNYXJrZXJTeW1ib2xfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX3dpZGdldHNfTGVnZW5kX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG4vKiogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cclxuaW1wb3J0IHsgUmVhY3QsIGpzeCwgY3NzLCBHbG9iYWwgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyBnZXJhck1hcGFEaXN0cmlidWljYW9FQiwgY29yZXNUaXBvcyB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCB7XHJcbiAgTUlORVJBTF9PUFRJT05TLFxyXG4gIGZldGNoRGlzdHJpYnVpY2FvTWluZXJhaXNDb250YWRvcixcclxuICBmZXRjaE1pbmVyYWxMaXN0YSxcclxuICBmZXRjaE1pbmVyYWxBZ3J1cGFkb3IsXHJcbiAgZGVzZW5oYXJEaXN0cmlidWljYW9NaW5lcmFpcyxcclxuICBhcGxpY2FyQ29sb3JpemFjYW9Qb3JBZ3J1cGFkb3IsXHJcbiAgbGFiZWxGcm9tVmFsdWUsXHJcbiAgdHlwZSBNaW5lcmFsVGlwbyxcclxuICB0eXBlIE1pbmVyYWxMaXN0YUl0ZW1cclxufSBmcm9tICcuL01pbmVyYWxzJ1xyXG5cclxuaW1wb3J0IE1pbmVyYWxzTGlzdFBhbmVsIGZyb20gJy4vTWluZXJhbHNMaXN0UGFuZWwnXHJcbmltcG9ydCBHcmFkaWVudExlZ2VuZCBmcm9tICcuL0dyYWRpZW50TGVnZW5kJ1xyXG5cclxuLyogPT09PT0gVGlwb3MgPT09PT0gKi9cclxudHlwZSBNc2dGYWl4YUludGVyZXNzZSA9IHsgdHlwZTogJ2ZhaXhhLWludGVyZXNzZSc7IGNvZGlnb3NQb2NvczogKG51bWJlciB8IHN0cmluZylbXSB9XHJcbnR5cGUgTXNnTGVnZW5kTWluZXJhaXMgPSB7IHR5cGU6ICdsZWdlbmQ6bWluZXJhaXMnOyBwYXlsb2FkOiBhbnkgfVxyXG50eXBlIE1zZ0NvbmZpZyA9IHsgdHlwZTogJ2ZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXM6b2snOyBzdGFydFdpdGhJbnRlcmVzdD86IGJvb2xlYW4gfVxyXG50eXBlIE1zZ0NvbmZpZ0ludGVyZXN0ID0geyB0eXBlOiAnY29uZmlnJzsgc3RhcnRXaXRoSW50ZXJlc3Q/OiBib29sZWFuOyBjZ1Zpc2libGU/OiBib29sZWFuIH1cclxuXHJcbnR5cGUgQW1vc3RyYUl0ZW0gPSB7XHJcbiAgY29kaWdvUG9jbzogbnVtYmVyXHJcbiAgdG90YWxBbW9zdHJhc0xhdGVyYWlzOiBudW1iZXJcclxuICB0b3RhbENhbGhhczogbnVtYmVyXHJcbiAgdG90YWxQbHVnczogbnVtYmVyXHJcbiAgdG90YWxUZXN0ZW11bmhvczogbnVtYmVyXHJcbiAgdG90YWxXaG9sZUNvcmU6IG51bWJlclxyXG59XHJcblxyXG4vKiA9PT09PSBDb25maWcgPT09PT0gKi9cclxuY29uc3QgREVGQVVMVF9GQUlYQV9JTlRFUkVTU0UgPSBmYWxzZVxyXG5cclxuLyogPT09PT0gTGF5b3V0ID09PT09ICovXHJcbmNvbnN0IERFRkFVTFRfV0lEVEggPSAzNjBcclxuY29uc3QgUEFORUxfTUFSR0lOX1RPUCA9IDUwXHJcbmNvbnN0IFBBTkVMX01BUkdJTl9SSUdIVCA9IDEwXHJcbmNvbnN0IERFRkFVTFRfSEVJR0hUID0gNzUwXHJcblxyXG4vKiA9PT09PSBDYW1wb3MgcG9yIHRpcG8gKGFtb3N0cmFzKSA9PT09PSAqL1xyXG5jb25zdCBUWVBFX0ZJRUxEOiBSZWNvcmQ8c3RyaW5nLCBrZXlvZiBBbW9zdHJhSXRlbT4gPSB7XHJcbiAgbGF0ZXJhbDogJ3RvdGFsQW1vc3RyYXNMYXRlcmFpcycsXHJcbiAgdGVzdGVtdW5obzogJ3RvdGFsVGVzdGVtdW5ob3MnLFxyXG4gIGNhbGhhOiAndG90YWxDYWxoYXMnLFxyXG4gIHBsdWc6ICd0b3RhbFBsdWdzJyxcclxuICAnd2hvbGUgY29yZSc6ICd0b3RhbFdob2xlQ29yZSdcclxufVxyXG5jb25zdCBMSVNUX1RZUEVTID0gT2JqZWN0LmtleXMoVFlQRV9GSUVMRClcclxuXHJcbmNvbnN0IGxvZzEwID0gKHg6IG51bWJlcikgPT4gKE1hdGgubG9nMTAgPyBNYXRoLmxvZzEwKHgpIDogTWF0aC5sb2coeCkgLyBNYXRoLkxOMTApXHJcblxyXG4vKiA9PT09PSBGZXRjaCBiYXNlIChhbW9zdHJhcykgPT09PT0gKi9cclxuZnVuY3Rpb24gYnVpbGRTZXNzaW9uQm9keShmYWl4YUludGVyZXNzZTogYm9vbGVhbikge1xyXG4gIGNvbnN0IHAgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcclxuICBwLnNldCgnaGRTeXMnLCAnbm92YWludGNvbnMnKVxyXG4gIHAuc2V0KCdoZFVDJywgJ01hcGEnKVxyXG4gIHAuc2V0KCdoZEFjYW8nLCAnQ2FycmVnYXJNYXBhRGlzdHJpYnVpY2FvQW1vc3RyYXNDb250YWRvcicpXHJcbiAgcC5zZXQoJ2hkU2Vzc2lvbkZpbHRlcicsICd0cnVlJylcclxuICBwLnNldCgnZmFpeGFJbnRlcmVzc2UnLCBTdHJpbmcoISFmYWl4YUludGVyZXNzZSkpXHJcbiAgcmV0dXJuIHAudG9TdHJpbmcoKVxyXG59XHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUxpc3QocmF3OiBhbnlbXSk6IEFtb3N0cmFJdGVtW10ge1xyXG4gIHJldHVybiAoQXJyYXkuaXNBcnJheShyYXcpID8gcmF3IDogW10pXHJcbiAgICAubWFwKChyOiBhbnkpID0+ICh7XHJcbiAgICAgIGNvZGlnb1BvY286IE51bWJlcihyLmNvZGlnb1BvY28gPz8gci5QT0NPX0NEX1BPQ08gPz8gci5wb2NvID8/IHIuY29kaWdvID8/IDApLFxyXG4gICAgICB0b3RhbEFtb3N0cmFzTGF0ZXJhaXM6IE51bWJlcihyLnRvdGFsQW1vc3RyYXNMYXRlcmFpcyA/PyByLmxhdGVyYWlzID8/IDApLFxyXG4gICAgICB0b3RhbENhbGhhczogTnVtYmVyKHIudG90YWxDYWxoYXMgPz8gci5jYWxoYXMgPz8gMCksXHJcbiAgICAgIHRvdGFsUGx1Z3M6IE51bWJlcihyLnRvdGFsUGx1Z3MgPz8gci5wbHVncyA/PyAwKSxcclxuICAgICAgdG90YWxUZXN0ZW11bmhvczogTnVtYmVyKHIudG90YWxUZXN0ZW11bmhvcyA/PyByLnRlc3RlbXVuaG9zID8/IDApLFxyXG4gICAgICB0b3RhbFdob2xlQ29yZTogTnVtYmVyKHIudG90YWxXaG9sZUNvcmUgPz8gci53aG9sZUNvcmUgPz8gMClcclxuICAgIH0pKVxyXG4gICAgLmZpbHRlcigoeCkgPT4gISF4LmNvZGlnb1BvY28pXHJcbn1cclxuZnVuY3Rpb24gZmV0Y2hWaWFQYXJlbnQoYm9keTogc3RyaW5nKTogUHJvbWlzZTxBbW9zdHJhSXRlbVtdPiB7XHJcbiAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnW2Ftb3N0cmFzXSBmZXRjaFZpYVBhcmVudCcpXHJcbiAgY29uc29sZS5sb2coJ1thbW9zdHJhc10gYm9keScsIGJvZHkpXHJcblxyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCByZXFJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpXHJcblxyXG4gICAgbGV0IHRhcmdldE9yaWdpbiA9ICcqJ1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGRvY3VtZW50LnJlZmVycmVyKSB0YXJnZXRPcmlnaW4gPSBuZXcgVVJMKGRvY3VtZW50LnJlZmVycmVyKS5vcmlnaW5cclxuICAgIH0gY2F0Y2gge31cclxuXHJcbiAgICBjb25zdCBPSyA9ICdmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzOm9rJ1xyXG4gICAgY29uc3QgRVJSID0gJ2ZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXM6ZXJyJ1xyXG5cclxuICAgIGNvbnN0IG9uTWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGQ6IGFueSA9IGV2ZW50Py5kYXRhIHx8IHt9XHJcbiAgICAgIGlmICghZCB8fCBkLnJlcUlkICE9PSByZXFJZCkgcmV0dXJuXHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnW2Ftb3N0cmFzXSByZXNwb3N0YSBkbyBwYWknLCB7XHJcbiAgICAgICAgcmVjZWl2ZWRUeXBlOiBkLnR5cGUsXHJcbiAgICAgICAgZXhwZWN0ZWRPazogT0ssXHJcbiAgICAgICAgZXhwZWN0ZWRFcnI6IEVSUixcclxuICAgICAgICBvcmlnaW46IGV2ZW50Lm9yaWdpbixcclxuICAgICAgICBzYW1lT3JpZ2luOiBldmVudC5vcmlnaW4gPT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXHJcbiAgICAgICAgcmVxSWQsXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAoZC50eXBlID09PSBPSykge1xyXG4gICAgICAgIHRyeSB7IGNsZWFyVGltZW91dCh0bykgfSBjYXRjaCB7fVxyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gQXJyYXkuaXNBcnJheShkLnBheWxvYWQpID8gZC5wYXlsb2FkLmxlbmd0aCA6IG51bGxcclxuICAgICAgICBjb25zb2xlLmxvZygnW2Ftb3N0cmFzXSBPSyDigJQgbm9ybWFsaXphbmRvIHBheWxvYWQnLCB7IGNvdW50LCBzYW1wbGU6IEFycmF5LmlzQXJyYXkoZC5wYXlsb2FkKSA/IGQucGF5bG9hZC5zbGljZSgwLCAzKSA6IGQucGF5bG9hZCB9KVxyXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICAgIHJlc29sdmUobm9ybWFsaXplTGlzdChkLnBheWxvYWQpKVxyXG4gICAgICB9IGVsc2UgaWYgKGQudHlwZSA9PT0gRVJSKSB7XHJcbiAgICAgICAgdHJ5IHsgY2xlYXJUaW1lb3V0KHRvKSB9IGNhdGNoIHt9XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdbYW1vc3RyYXNdIEVSUk8gZG8gcGFpJywgZC5tZXNzYWdlKVxyXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoZC5tZXNzYWdlIHx8ICdFcnJvIG5vIGZldGNoIHZpYSBwYXJlbnQnKSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBNZW5zYWdlbSBjb20gcmVxSWQgY2VydG8gbWFzIHR5cGUgZGlmZXJlbnRlIOKAlCBhcGVuYXMgaWdub3JlIChwb2RlIHNlciBvdXRyYSBwaXBlbGluZSlcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1thbW9zdHJhc10gaWdub3JhbmRvIG1lbnNhZ2VtIGNvbSByZXFJZCB2w6FsaWRvIHBvcsOpbSB0eXBlIGluZXNwZXJhZG86JywgZC50eXBlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpXHJcblxyXG4gICAgY29uc3QgdG8gPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG4gICAgICBjb25zb2xlLndhcm4oJ1thbW9zdHJhc10gVElNRU9VVCBhZ3VhcmRhbmRvIHJlc3Bvc3RhIGRvIHBhaScsIHsgcmVxSWQsIGV4cGVjdGVkOiBbT0ssIEVSUl0gfSlcclxuICAgICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1RpbWVvdXQgYWd1YXJkYW5kbyByZXNwb3N0YSBkbyBwYWkgKGFtb3N0cmFzKScpKVxyXG4gICAgfSwgMjAwMDApXHJcblxyXG4gICAgd2luZG93LnBhcmVudD8ucG9zdE1lc3NhZ2UoeyB0eXBlOiAnZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcycsIGJvZHksIHJlcUlkIH0sIHRhcmdldE9yaWdpbilcclxuICAgIGNvbnNvbGUubG9nKCdbYW1vc3RyYXNdIHBvc3RNZXNzYWdlIC0+IFBBSScsIHtcclxuICAgICAgdHlwZTogJ2ZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXMnLFxyXG4gICAgICB0YXJnZXRPcmlnaW4sXHJcbiAgICAgIHJlcUlkXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXMoZmFpeGFJbnRlcmVzc2UgPSBmYWxzZSk6IFByb21pc2U8QW1vc3RyYUl0ZW1bXT4ge1xyXG4gIGNvbnN0IGJvZHkgPSBidWlsZFNlc3Npb25Cb2R5KGZhaXhhSW50ZXJlc3NlKVxyXG4gIHJldHVybiBmZXRjaFZpYVBhcmVudChib2R5KVxyXG59XHJcblxyXG4vKiA9PT09PSBFc3RpbG9zID09PT09ICovXHJcbmNvbnN0IE1BWF9CVUJCTEUgPSA0MFxyXG5jb25zdCBnbG9iYWxQYW5lbFN0eWxlID0gY3NzYFxyXG4gIGRpdltyb2xlPSdkaWFsb2cnXVthcmlhLWxhYmVsPSdtYXBhLWRlLWRpc3RyaWJ1aWNhbyddLFxyXG4gIGRpdltyb2xlPSdkaWFsb2cnXVthcmlhLWxhYmVsPSdtYXBhLWRlLWRpc3RyaWJ1aWNhby12MiddIHtcclxuICAgIC8qIG5hZGEgZGUgcG9zaXRpb24vdG9wL3JpZ2h0L3RyYW5zZm9ybS9oZWlnaHQgYXF1aSAqL1xyXG4gICAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6ICR7REVGQVVMVF9XSURUSH1weCAhaW1wb3J0YW50O1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBsZWdlbmRIZWFkZXJTdHlsZSA9IGNzc2Bmb250LXdlaWdodDo2MDA7bWFyZ2luOjRweCAwO2ZvbnQtc2l6ZTouODVyZW07bGluZS1oZWlnaHQ6MS4xO2BcclxuY29uc3QgYnViYmxlQm94U3R5bGUgPSBjc3Ngd2lkdGg6JHtNQVhfQlVCQkxFfXB4O2hlaWdodDoke01BWF9CVUJCTEV9cHg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1yaWdodDo4cHg7YFxyXG5jb25zdCB3cmFwcGVyU3R5bGUgPSBjc3NgXHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBkaXNwbGF5OmZsZXg7ICAgICAgICAgICAgICAgLyog8J+RiCB2aXJhIGZsZXggY29sdW1uICovXHJcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6MDsgICAgICAgICAgICAgICAvKiDwn5GIIHBlcm1pdGUgZmlsaG9zIGNvbSBvdmVyZmxvdyByb2xhcmVtICovXHJcbiAgYmFja2dyb3VuZDojZmZmO1xyXG4gIGJvcmRlcjoxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOjZweDtcclxuICBib3gtc2hhZG93OjAgNHB4IDEycHggcmdiYSgwLDAsMCwuMSk7XHJcbiAgcGFkZGluZzoxNnB4O1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuYFxyXG5jb25zdCB0aXRsZVN0eWxlID0gY3NzYGZvbnQtd2VpZ2h0OjYwMDttYXJnaW4tYm90dG9tOjRweDtkaXNwbGF5OmJsb2NrO2BcclxuY29uc3Qgc2VsZWN0U3R5bGUgPSBjc3Ngd2lkdGg6MTAwJTtwYWRkaW5nOjZweCA4cHg7bWFyZ2luLWJvdHRvbToxMnB4O2JvcmRlcjoxcHggc29saWQgI2NjYztib3JkZXItcmFkaXVzOjRweDtgXHJcblxyXG4vKiogR3JpZCB1c2FkYSBwYXJhIG9ww6fDtWVzIChhbW9zdHJhcykg4oCTIDIgY29sdW5hcywgZmx1eG8gcG9yIGxpbmhhcyAobWFudMOpbSBUZXN0ZW11bmhvcyBkZW50cm8gZG8gYmxvY28gY2luemEpICovXHJcbmNvbnN0IGxpc3RTdHlsZSA9IGNzc2BcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMTQwcHgsIDFmcikpO1xyXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMjRweCwgYXV0byk7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuICBjb2x1bW4tZ2FwOiA0cHg7XHJcbiAgcm93LWdhcDogMnB4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuYFxyXG5cclxuLyoqIHLDs3R1bG8gY29tcGFjdG8gc2VydmUgcGFyYSBjaGVja2JveCBlIHJhZGlvICovXHJcbmNvbnN0IGNoZWNrYm94TGFiZWxTdHlsZSA9IGNzc2BcclxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sdW1uLWdhcDogNnB4O1xyXG4gIHBhZGRpbmc6IDFweCAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAmID4gKiB7IG1hcmdpbjogMCAhaW1wb3J0YW50OyBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IH1cclxuICBpbnB1dFt0eXBlPSdjaGVja2JveCddLCBpbnB1dFt0eXBlPSdyYWRpbyddIHsgd2lkdGg6IDE0cHg7IGhlaWdodDogMTRweDsgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IGZsZXg6IDAgMCBhdXRvOyB9XHJcblxyXG4gIC5sYmwgeyBtaW4td2lkdGg6IDA7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBmb250LXNpemU6IC44NHJlbTsgbGluZS1oZWlnaHQ6IDEuMTU7IHBhZGRpbmctYm90dG9tOiAxcHg7IH1cclxuYFxyXG5cclxuLyoqIEdyaWQgZG9zIHLDoWRpb3MgZGUgbWluZXJhaXMgKDIgY29sdW5hcyAvIDMgbGluaGFzKSAqL1xyXG5jb25zdCBtaW5lcmFsc0xpc3RTdHlsZSA9IGNzc2BcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTQwcHgsIDFmcikgbWlubWF4KDE0MHB4LCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1pbm1heCgyNHB4LCBhdXRvKSk7XHJcbiAgY29sdW1uLWdhcDogNHB4O1xyXG4gIHJvdy1nYXA6IDJweDtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcblxyXG4gIC8qIERSWC1Ub3RhbCAoUm93MSwgQ29sMSkgKi9cclxuICBsYWJlbFtkYXRhLWtleT0nRFJYLVRPVCddIHsgZ3JpZC1jb2x1bW46IDE7IGdyaWQtcm93OiAxOyB9XHJcbiAgLyogUWVtc2Nhbi1NYXNzYSAoUm93MSwgQ29sMikgKi9cclxuICBsYWJlbFtkYXRhLWtleT0nTUFTU0EnXSAgIHsgZ3JpZC1jb2x1bW46IDI7IGdyaWQtcm93OiAxOyB9XHJcbiAgLyogRFJYLUFyZ2lsb21pbmVyYWlzIChSb3cyLCBDb2wxKSAqL1xyXG4gIGxhYmVsW2RhdGEta2V5PSdEUlgtQVJHJ10geyBncmlkLWNvbHVtbjogMTsgZ3JpZC1yb3c6IDI7IH1cclxuICAvKiBRZW1zY2FuLcOBcmVhIChSb3cyLCBDb2wyKSAqL1xyXG4gIGxhYmVsW2RhdGEta2V5PSdBUkVBJ10gICAgeyBncmlkLWNvbHVtbjogMjsgZ3JpZC1yb3c6IDI7IH1cclxuICAvKiBcIlRvZGFzIGFzIEFuw6FsaXNlc1wiIChSb3czLCBvY3VwYW5kbyAyIGNvbHVuYXMpICovXHJcbiAgbGFiZWxbZGF0YS1rZXk9J3RvZGFzQW5hbGlzZXMnXSB7IGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyOyBncmlkLXJvdzogMzsgfVxyXG5gXHJcbmNvbnN0IHNjcm9sbEFyZWFTdHlsZSA9IGNzc2BcclxuICBmbGV4OiAxO1xyXG4gIG1pbi1oZWlnaHQ6IDA7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcblxyXG4gIC8qIHJlbW92YSBhIGZvbGdhIGdyYW5kZSBkbyBmaW0gKi9cclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIHNjcm9sbC1wYWRkaW5nLWJvdHRvbTogOHB4O1xyXG5gXHJcblxyXG5cclxuLy8gdHJvcXVlIGZvb3RlclN0eWxlIHBvcjpcclxuY29uc3QgZm9vdGVyRG9ja1N0eWxlID0gY3NzYFxyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuXHJcbiAgLyog8J+SoSBlc3RhIGxpbmhhIGZheiBvIGJsb2NvIOKAnHN1Ymly4oCdIHVtIHBvdWNvIGRvIGZpbSAqL1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcblxyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgcGFkZGluZzogOHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgLTRweCAxMHB4IHJnYmEoMCwwLDAsLjA0KTtcclxuYFxyXG5cclxuXHJcbmNvbnN0IGFmdGVyUmFkaW9zQ29sU3R5bGUgPSBjc3NgXHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICBmbGV4OjE7ICAgICAgICAvKiDwn5GIIG9jdXBhIG8gcmVzdG8gZGEgYWx0dXJhIGRvIHdyYXBwZXIgKi9cclxuICBtaW4taGVpZ2h0OjA7ICAvKiDwn5GIIG5lY2Vzc8OhcmlvIHAvIGEgc2Nyb2xsQXJlYSByb2xhciAqL1xyXG5gXHJcblxyXG5cclxuY29uc3Qgc3VtbWFyeUxpc3RTdHlsZSA9IGNzc2BcclxuICBtYXgtaGVpZ2h0OiBub25lOyAgIC8qIGVzdGF2YSAzMDBweDsgZGVpeGUgcm9sYXIgbyBjb250YWluZXIgcGFpICovXHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7ICAvKiBxdWVtIHJvbGEgYWdvcmEgw6kgbyBzY3JvbGxBcmVhICovXHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIHBhZGRpbmc6IDhweCA4cHggMzZweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYFxyXG5jb25zdCBzdW1tYXJ5SXRlbVN0eWxlID0gY3NzYGRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOjJweDtgXHJcbmNvbnN0IHJhbmdlTGFiZWxTdHlsZSA9IGNzc2Bmb250LXNpemU6Ljc4cmVtO2xpbmUtaGVpZ2h0OjEuMTtgXHJcblxyXG5jb25zdCBmb290ZXJTdHlsZSA9IGNzc2BcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gIHBhZGRpbmc6IDZweCAwOyAvKiB1bSBwb3VjbyBtYWlzIGRlIHJlc3Bpcm8gKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiA2cHg7XHJcblxyXG4gIC8qIG9wY2lvbmFsOiBzb21icmEgc3VhdmUgcGFyYSBzZXBhcmFyIGRvIGNvbnRlw7pkbyAqL1xyXG4gIGJveC1zaGFkb3c6IDAgLTRweCAxMHB4IHJnYmEoMCwwLDAsLjA0KTtcclxuYFxyXG5jb25zdCBmb290ZXJMYWJlbFN0eWxlID0gY3NzYGRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjZweDtwYWRkaW5nLWxlZnQ6LjVlbTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6LjlyZW07IGBcclxuY29uc3QgZm9vdGVyTGFiZWxTdHlsZUludGVyZXNzZSA9IGZvb3RlckxhYmVsU3R5bGVcclxuXHJcbi8vIDEpIGNyaWUgdW0gZXN0aWxvIOKAnGNvbXBhY3Rv4oCdIHBhcmEgbyBibG9jbyBkZSBjaGFydHNcclxuY29uc3QgY2hhcnRzQ29tcGFjdCA9IGNzc2BcclxuICAvKiBhZmV0YSB0ZXh0b3MgZGVudHJvIGRlIFNWR3MgKHLDs3R1bG9zLCBlaXhvcyBldGMuKSAqL1xyXG4gIHN2ZyB0ZXh0IHsgZm9udC1zaXplOiAxMXB4OyB9XHJcblxyXG4gIC8qIFJlY2hhcnRzIChzZSBlc3RpdmVyIHVzYW5kbyk6IGxlZ2VuZGFzIGUgdG9vbHRpcHMgKi9cclxuICAucmVjaGFydHMtbGVnZW5kLXdyYXBwZXIsXHJcbiAgLnJlY2hhcnRzLWRlZmF1bHQtbGVnZW5kLFxyXG4gIC5yZWNoYXJ0cy10b29sdGlwLXdyYXBwZXIgeyBmb250LXNpemU6IDExcHggIWltcG9ydGFudDsgfVxyXG5cclxuICAvKiBFQ2hhcnRzIChzZSBlc3RpdmVyIHVzYW5kbyk6IHRvb2x0aXBzL2xlZ2VuZGFzIGVtIGRpdiAqL1xyXG4gIC5lY2hhcnRzLXRvb2x0aXAsXHJcbiAgLmVjaGFydHMtbGVnZW5kIHsgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7IH1cclxuYFxyXG5cclxuXHJcbi8qID09PT09IFN1bcOhcmlvIChhbW9zdHJhcy8gbWluZXJhaXMpID09PT09ICovXHJcbmZ1bmN0aW9uIGNhbGN1bGFyUXVlYnJhcyhkYWRvczogeyB0b3RhbDogbnVtYmVyIH1bXSwgY29sb3JGaWxsOiBzdHJpbmcpIHtcclxuICBjb25zdCB2YWxvcmVzID0gZGFkb3MubWFwKChwKSA9PiBOdW1iZXIocC50b3RhbCkgfHwgMClcclxuICBsZXQgbWluID0gTWF0aC5taW4oLi4udmFsb3JlcylcclxuICBsZXQgbWF4ID0gTWF0aC5tYXgoLi4udmFsb3JlcylcclxuXHJcbiAgY29uc3QgaW5mbzogeyBsYWJlbDogc3RyaW5nOyBzaXplOiBudW1iZXI7IGNvcjogc3RyaW5nOyBjb3VudDogbnVtYmVyIH1bXSA9IFtdXHJcbiAgaWYgKCFpc0Zpbml0ZShtaW4pIHx8ICFpc0Zpbml0ZShtYXgpKSByZXR1cm4gaW5mb1xyXG5cclxuICBpZiAobWluID09PSAwICYmIG1heCA9PT0gMCkge1xyXG4gICAgaW5mby5wdXNoKHsgbGFiZWw6ICdOw6NvIGjDoSBkYWRvcyBzdWZpY2llbnRlcycsIHNpemU6IDAsIGNvcjogY29sb3JGaWxsLCBjb3VudDogMCB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB6ZXJhZG9zID0gdmFsb3Jlcy5maWx0ZXIoKHYpID0+IHYgPT09IDApLmxlbmd0aFxyXG4gICAgY29uc3QgbmFvWmVyYWRvcyA9IHZhbG9yZXMuZmlsdGVyKCh2KSA9PiB2ID4gMClcclxuXHJcbiAgICBpZiAoemVyYWRvcyA+IDApIHtcclxuICAgICAgaW5mby5wdXNoKHsgbGFiZWw6IGB8IDAgfCAoJHt6ZXJhZG9zfSBwb8OnbyR7emVyYWRvcyA+IDEgPyAncycgOiAnJ30pYCwgc2l6ZTogNiwgY29yOiAncmdiYSgyMDAsMjAwLDIwMCwwLjMpJywgY291bnQ6IHplcmFkb3MgfSlcclxuICAgIH1cclxuXHJcbiAgICBtaW4gPSAxXHJcbiAgICBjb25zdCBuID0gbmFvWmVyYWRvcy5sZW5ndGhcclxuICAgIGNvbnN0IG51bUNsYXNzZXMgPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKDEgKyAzLjMgKiBsb2cxMChuIHx8IDEpKSlcclxuICAgIGNvbnN0IGJyZWFrcyA9IE1hdGguY2VpbCgobWF4IC0gbWluICsgMSkgLyBNYXRoLm1heCgxLCBudW1DbGFzc2VzKSlcclxuICAgIGNvbnN0IG1heFNpemUgPSBNQVhfQlVCQkxFXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1DbGFzc2VzOyBpKyspIHtcclxuICAgICAgY29uc3QgbWluVmFsdWUgPSBtaW4gKyBpICogYnJlYWtzXHJcbiAgICAgIGNvbnN0IG1heFZhbHVlID0gbWluICsgKGkgKyAxKSAqIGJyZWFrcyAtIDFcclxuICAgICAgaWYgKG1pblZhbHVlID4gbWF4KSBicmVha1xyXG4gICAgICBjb25zdCBjb3VudCA9IG5hb1plcmFkb3MuZmlsdGVyKCh2KSA9PiB2ID49IG1pblZhbHVlICYmIHYgPD0gbWF4VmFsdWUpLmxlbmd0aFxyXG4gICAgICBjb25zdCBsYWJlbCA9IGAke21pblZhbHVlfSB8LS0tfCAke21heFZhbHVlfSAoJHtjb3VudH0gcG/Dp28ke2NvdW50ID4gMSA/ICdzJyA6ICcnfSlgXHJcbiAgICAgIGNvbnN0IHNpemUgPSA2ICsgaSAqIChtYXhTaXplIC8gbnVtQ2xhc3NlcylcclxuICAgICAgaW5mby5wdXNoKHsgbGFiZWwsIHNpemUsIGNvcjogY29sb3JGaWxsLCBjb3VudCB9KVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gaW5mb1xyXG59XHJcblxyXG4vKiA9PT09PSBIZWxwZXJzIGRpYWxvZy9wb3NpY2lvbmFtZW50byA9PT09PSAqL1xyXG5mdW5jdGlvbiBmaW5kQ2xvc2VzdERpYWxvZyhlbDogSFRNTEVsZW1lbnQgfCBudWxsKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICBsZXQgY3VyOiBIVE1MRWxlbWVudCB8IG51bGwgPSBlbFxyXG4gIHdoaWxlIChjdXIpIHsgaWYgKGN1ci5nZXRBdHRyaWJ1dGUgJiYgY3VyLmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAnZGlhbG9nJykgcmV0dXJuIGN1cjsgY3VyID0gY3VyPy5wYXJlbnRFbGVtZW50ID8/IG51bGwgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuZnVuY3Rpb24gaXNEaWFsb2dIaWRkZW4oZGxnOiBIVE1MRWxlbWVudCkge1xyXG4gIGNvbnN0IGNzID0gZ2V0Q29tcHV0ZWRTdHlsZShkbGcpXHJcbiAgcmV0dXJuIGRsZy5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykgPT09ICd0cnVlJyB8fCBjcy5kaXNwbGF5ID09PSAnbm9uZScgfHwgY3MudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbidcclxufVxyXG5sZXQgX2FwcGx5aW5nU3R5bGUgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIGZvcmNlUGFuZWxTdHlsZShkbGc6IEhUTUxFbGVtZW50KSB7XHJcbiAgaWYgKF9hcHBseWluZ1N0eWxlKSByZXR1cm47XHJcbiAgX2FwcGx5aW5nU3R5bGUgPSB0cnVlO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzID0gZGxnLnN0eWxlO1xyXG4gICAgaWYgKHMuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKSAhPT0gJ2Fic29sdXRlJykgcy5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKTsgLy8gc2VtICFpbXBvcnRhbnRcclxuICAgIGlmIChzLmdldFByb3BlcnR5VmFsdWUoJ3otaW5kZXgnKSAhPT0gJzk5OTknKSAgICAgICBzLnNldFByb3BlcnR5KCd6LWluZGV4JywgJzk5OTknKTtcclxuICAgIGlmIChzLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJykgIT09IGAke0RFRkFVTFRfV0lEVEh9cHhgKSB7XHJcbiAgICAgIHMuc2V0UHJvcGVydHkoJ3dpZHRoJywgYCR7REVGQVVMVF9XSURUSH1weGAsICdpbXBvcnRhbnQnKTtcclxuICAgIH1cclxuICB9IGZpbmFsbHkge1xyXG4gICAgX2FwcGx5aW5nU3R5bGUgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRGaXJzdE9wZW5MYXlvdXQoZGxnOiBIVE1MRWxlbWVudCkge1xyXG4gIC8vIGV2aXRhIHJlcGV0aXJcclxuICBpZiAoZGxnLmdldEF0dHJpYnV0ZSgnZGF0YS1maXJzdC1vcGVuLWluaXRpYWxpemVkJykgPT09ICcxJykgcmV0dXJuO1xyXG4gIGRsZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtZmlyc3Qtb3Blbi1pbml0aWFsaXplZCcsICcxJyk7XHJcblxyXG4gIGNvbnN0IHMgPSBkbGcuc3R5bGU7XHJcblxyXG4gIC8vIPCflJIgMcKqIGFiZXJ0dXJhOiBmb3LDp2Egw6JuY29yYSBjYW50byBzdXBlcmlvciBkaXJlaXRvIGUgdGFtYW5obyBncmFuZGVcclxuICBzLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdhYnNvbHV0ZScpOyAgICAgICAgICAgIC8vIHNlbSAhaW1wb3J0YW50XHJcbiAgcy5zZXRQcm9wZXJ0eSgndG9wJywgYCR7UEFORUxfTUFSR0lOX1RPUH1weGAsICdpbXBvcnRhbnQnKTtcclxuICBzLnNldFByb3BlcnR5KCdyaWdodCcsIGAke1BBTkVMX01BUkdJTl9SSUdIVH1weGAsICdpbXBvcnRhbnQnKTtcclxuICBzLnNldFByb3BlcnR5KCdsZWZ0JywgJ2F1dG8nKTtcclxuICBzLnNldFByb3BlcnR5KCdib3R0b20nLCAnYXV0bycpO1xyXG5cclxuICAvLyBuZXV0cmFsaXphIG8gdHJhbnNsYXRlIGRvIFBvcHBlciBzw7MgbmEgZXN0cmVpYSAobsOjbyBvYnNlcnZhbW9zIHN0eWxlLCBlbnTDo28gc2VtIGxvb3ApXHJcbiAgcy5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ25vbmUnLCAnaW1wb3J0YW50Jyk7XHJcblxyXG4gIC8vIGxhcmd1cmEgcGVybWFuZWNlIGZpeGFcclxuICBzLnNldFByb3BlcnR5KCd3aWR0aCcsIGAke0RFRkFVTFRfV0lEVEh9cHhgLCAnaW1wb3J0YW50Jyk7XHJcblxyXG4gIC8vIGFsdHVyYSDigJxncmFuZGXigJ0gYXBlbmFzIG5hIGVzdHJlaWFcclxuICBzLnNldFByb3BlcnR5KCdoZWlnaHQnLCBgJHtERUZBVUxUX0hFSUdIVH1weGAsICdpbXBvcnRhbnQnKTtcclxuICBzLnNldFByb3BlcnR5KCdtYXgtaGVpZ2h0JywgJ2NhbGMoMTAwJSAtIDI0cHgpJywgJ2ltcG9ydGFudCcpO1xyXG4gIHMuc2V0UHJvcGVydHkoJ292ZXJmbG93JywgJ3Zpc2libGUnLCAnaW1wb3J0YW50Jyk7XHJcblxyXG4gIC8vIOKHoiBsaWJlcmUgYSBhbHR1cmEgYXDDs3MgcGVxdWVuYSBqYW5lbGEgKG91IG5vIDHCuiBjbGlxdWUgZGUgcmVjb2xoZXIvZXhwYW5kaXIpXHJcbiAgY29uc3QgcmVsZWFzZSA9ICgpID0+IHtcclxuICAgIC8vIG1hbnTDqW0gcG9zacOnw6NvL3RvcC9yaWdodC90cmFuc2Zvcm07IHNvbHRhIHPDsyBhbHR1cmEgcC8gZXhwYW5zw6NvIG5hdGl2YSBmdW5jaW9uYXJcclxuICAgIHMucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xyXG4gICAgcy5yZW1vdmVQcm9wZXJ0eSgnbWF4LWhlaWdodCcpO1xyXG4gICAgcy5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuICAgIC8vIHJlbW92ZSBvdXZpbnRlIChzZSBob3V2ZXIpXHJcbiAgICBidG5Db2xsYXBzZT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblRvZ2dsZU9uY2UgYXMgYW55KTtcclxuICB9O1xyXG5cclxuICAvLyBsaWJlcmEgc296aW5obyBhcMOzcyB+ODAwbXMgKHRlbXBvIHN1ZmljaWVudGUgcC8g4oCcYWJyaXIgZ3JhbmRl4oCdKVxyXG4gIGNvbnN0IHRvID0gc2V0VGltZW91dChyZWxlYXNlLCA4MDApO1xyXG5cclxuICAvLyB0YW1iw6ltIGxpYmVyYSBuYSAxwqogaW50ZXJhw6fDo28gZG8gdXN1w6FyaW8gKHJlY29saGVyL2V4cGFuZGlyKVxyXG4gIGNvbnN0IGJ0bkNvbGxhcHNlID0gZGxnLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAnYnV0dG9uLmFjdGlvbi1jb2xsYXBzZSwgYnV0dG9uW3RpdGxlPVwiUmVjb2xoZXJcIl0sIGJ1dHRvblthcmlhLWxhYmVsPVwiUmVjb2xoZXJcIl0sIGJ1dHRvblt0aXRsZT1cIkV4cGFuZGlyXCJdLCBidXR0b25bYXJpYS1sYWJlbD1cIkV4cGFuZGlyXCJdJ1xyXG4gICkgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xyXG5cclxuICBjb25zdCBvblRvZ2dsZU9uY2UgPSAoKSA9PiB7IGNsZWFyVGltZW91dCh0byk7IHJlbGVhc2UoKTsgfTtcclxuICBpZiAoYnRuQ29sbGFwc2UpIGJ0bkNvbGxhcHNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25Ub2dnbGVPbmNlLCB7IG9uY2U6IHRydWUgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB1c2VGb3JjZVJpZ2h0UG9zaXRpb24ocm9vdFJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50Pikge1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2xlYW51cDogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgYXBwbHkgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRsZyA9XHJcbiAgICAgICAgKHJvb3RSZWYuY3VycmVudD8uY2xvc2VzdCgnW3JvbGU9XCJkaWFsb2dcIl0nKSBhcyBIVE1MRWxlbWVudCkgfHxcclxuICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2W3JvbGU9XCJkaWFsb2dcIl1bYXJpYS1sYWJlbD1cIm1hcGEtZGUtZGlzdHJpYnVpY2FvLXYyXCJdJykgYXMgSFRNTEVsZW1lbnQpIHx8XHJcbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdltyb2xlPVwiZGlhbG9nXCJdW2FyaWEtbGFiZWw9XCJtYXBhLWRlLWRpc3RyaWJ1aWNhb1wiXScpIGFzIEhUTUxFbGVtZW50KTtcclxuXHJcbiAgICAgIGlmICghZGxnKSByZXR1cm47XHJcblxyXG4gICAgICAvLyBhcGxpY2EgbGF5b3V0IOKAnHNlZ3Vyb+KAnVxyXG4gICAgICBmb3JjZVBhbmVsU3R5bGUoZGxnKTtcclxuXHJcbiAgICAgIC8vIGUgZmF6IG8g4oCcbGF5b3V0IGRlIGVzdHJlaWHigJ0gKGNhbnRvIGRpcmVpdG8gKyBncmFuZGUpXHJcbiAgICAgIGluaXRGaXJzdE9wZW5MYXlvdXQoZGxnKTtcclxuXHJcbiAgICAgIC8vIHJlYXBsaXF1ZSBhcGVuYXMgZW0gcmVzaXplIChzZW0gb2JzZXJ2YXIgc3R5bGUgZG8gUG9wcGVyKVxyXG4gICAgICBsZXQgdG86IGFueTtcclxuICAgICAgY29uc3Qgb25SZXNpemUgPSAoKSA9PiB7IGNsZWFyVGltZW91dCh0byk7IHRvID0gc2V0VGltZW91dCgoKSA9PiBmb3JjZVBhbmVsU3R5bGUoZGxnKSwgODApOyB9O1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpO1xyXG4gICAgICBjbGVhbnVwID0gKCkgPT4geyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpOyB9O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXBwbHkpO1xyXG4gICAgc2V0VGltZW91dChhcHBseSwgODApO1xyXG4gICAgc2V0VGltZW91dChhcHBseSwgMzAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4geyBjbGVhbnVwPy4oKTsgfTtcclxuICB9LCBbcm9vdFJlZl0pO1xyXG59XHJcblxyXG5cclxuY29uc3QgbGF5ZXJJZEZvclNhbXBsZSA9ICh0aXBvOiBzdHJpbmcpID0+IGBhbW9zdHJhc18ke3RpcG8ucmVwbGFjZSgvXFxzKy9nLCAnXycpfWBcclxuZnVuY3Rpb24gY2xlYXJBbW9zdHJhcyh2aWV3OiBfX2VzcmkuVmlldykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhbGwgPSAodmlldy5tYXAgYXMgYW55KS5hbGxMYXllcnM/LnRvQXJyYXk/LigpID8/IHZpZXcubWFwLmxheWVycz8udG9BcnJheT8uKCkgPz8gW11cclxuICAgIGFsbC5mb3JFYWNoKChseTogYW55KSA9PiB7IGNvbnN0IGlkID0gU3RyaW5nKGx5Py5pZCA/PyAnJyk7IGlmIChpZC5zdGFydHNXaXRoKCdhbW9zdHJhc18nKSkgdmlldy5tYXAucmVtb3ZlKGx5KSB9KVxyXG4gIH0gY2F0Y2gge31cclxufVxyXG5mdW5jdGlvbiBjbGVhck1pbmVyYWlzKHZpZXc6IF9fZXNyaS5WaWV3KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGFsbCA9ICh2aWV3Lm1hcCBhcyBhbnkpLmFsbExheWVycz8udG9BcnJheT8uKCkgPz8gdmlldy5tYXAubGF5ZXJzPy50b0FycmF5Py4oKSA/PyBbXVxyXG4gICAgY29uc3QgdG9SZW1vdmU6IGFueVtdID0gW11cclxuICAgIGFsbC5mb3JFYWNoKChseTogYW55KSA9PiB7XHJcbiAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGx5Py5pZCA/PyAnJylcclxuICAgICAgaWYgKC9ebWluZXJhaXNfL2kudGVzdChpZCkpIHRvUmVtb3ZlLnB1c2gobHkpXHJcbiAgICB9KVxyXG4gICAgdG9SZW1vdmUuZm9yRWFjaChseSA9PiB2aWV3Lm1hcC5yZW1vdmUobHkpKVxyXG4gICAgY29uc29sZS5sb2coJ1t3aWRnZXRdIGNsZWFyTWluZXJhaXMgLT4gcmVtb3ZpZGFzJywgdG9SZW1vdmUubWFwKGwgPT4gbC5pZCkpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS53YXJuKCdbd2lkZ2V0XSBjbGVhck1pbmVyYWlzIGZhbGhvdScsIGUpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckxheWVyT2ZUaXBvKHZpZXc6IF9fZXNyaS5WaWV3LCB0aXBvOiBzdHJpbmcpIHtcclxuICB0cnkgeyBjb25zdCBseXIgPSB2aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVySWRGb3JTYW1wbGUodGlwbykpIGFzIGFueTsgaWYgKGx5cikgdmlldy5tYXAucmVtb3ZlKGx5cikgfSBjYXRjaCB7fVxyXG59XHJcbmZ1bmN0aW9uIGRpc2FibGVDbHVzdGVyTnVtYmVycyhseXI6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWx5cikgcmV0dXJuXHJcbiAgICBpZiAobHlyLmZlYXR1cmVSZWR1Y3Rpb24gJiYgbHlyLmZlYXR1cmVSZWR1Y3Rpb24udHlwZSA9PT0gJ2NsdXN0ZXInKSB7XHJcbiAgICAgIGx5ci5mZWF0dXJlUmVkdWN0aW9uID0geyAuLi5seXIuZmVhdHVyZVJlZHVjdGlvbiwgbGFiZWxzVmlzaWJsZTogZmFsc2UgfVxyXG4gICAgfVxyXG4gICAgaWYgKCdsYWJlbHNWaXNpYmxlJyBpbiBseXIpIChseXIgYXMgYW55KS5sYWJlbHNWaXNpYmxlID0gZmFsc2VcclxuICAgIGlmICgnbGFiZWxpbmdJbmZvJyBpbiBseXIpIChseXIgYXMgYW55KS5sYWJlbGluZ0luZm8gPSBbXVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoKGx5ciBhcyBhbnkpLnN1YmxheWVycykpIChseXIgYXMgYW55KS5zdWJsYXllcnMuZm9yRWFjaCgoc2w6IGFueSkgPT4gZGlzYWJsZUNsdXN0ZXJOdW1iZXJzKHNsKSlcclxuICB9IGNhdGNoIHt9XHJcbn1cclxuXHJcblxyXG4vKiA9PT09PSBDb21wb25lbnRlID09PT09ICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldChwcm9wczogYW55KSB7XHJcbiAgY29uc3QgW2ppbXVNYXBWaWV3LCBzZXRKaW11TWFwVmlld10gPSBSZWFjdC51c2VTdGF0ZTxKaW11TWFwVmlldz4oKVxyXG4gIGNvbnN0IFtjYXRlZ29yaWEsIHNldENhdGVnb3JpYV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKSAvLyAnc2FtcGxlJyB8ICdtaW5lcmFscydcclxuICBjb25zdCBbdGlwb3NTZWwsIHNldFRpcG9zU2VsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSkgLy8gYW1vc3RyYXMgKGNoZWNrYm94ZXMpXHJcbiAgY29uc3QgW3Nob3dFbXB0eSwgc2V0U2hvd0VtcHR5XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICAvLyBJbnRlcmVzc2VcclxuICBjb25zdCBbd2l0aEludGVyZXN0LCBzZXRXaXRoSW50ZXJlc3RdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgY29uc3QgW3Nob3dXaXRoSW50ZXJlc3QsIHNldHNob3dXaXRoSW50ZXJlc3RdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgY29uc3QgW2ZhaXhhU2V0LCBzZXRGYWl4YVNldF0gPSBSZWFjdC51c2VTdGF0ZTxTZXQ8bnVtYmVyPj4oXHJcbiAgICAoKSA9PiBuZXcgU2V0PG51bWJlcj4oKEFycmF5LmlzQXJyYXkocHJvcHM/LmNvZGlnb3NGYWl4YUludGVyZXNzZSkgPyBwcm9wcy5jb2RpZ29zRmFpeGFJbnRlcmVzc2UgOiBbXSlcclxuICAgICAgLm1hcCgodjogYW55KSA9PiBOdW1iZXIodikpLmZpbHRlcigodjogYW55KSA9PiAhaXNOYU4odikpKVxyXG4gIClcclxuXHJcbiAgLy9idXNjYWRvciBkZSBtaW5lcmFpc1xyXG4gIGNvbnN0IFthZ3J1cGFkb3JEYWRvcywgc2V0QWdydXBhZG9yRGFkb3NdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8e1xyXG4gICAgY29kaWdvUG9jbzogbnVtYmVyXHJcbiAgICBxdEFuYWxpc2U6IG51bWJlclxyXG4gICAgdmFsb3JNZWRpbzogbnVtYmVyXHJcbiAgICB2YWxvck1heGltbzogbnVtYmVyXHJcbiAgfT4gfCBudWxsPihudWxsKVxyXG5cclxuICAvLyBCYXNlcyAoYW1vc3RyYXMpXHJcbiAgY29uc3QgW2RhZG9zRnVsbCwgc2V0RGFkb3NGdWxsXSA9IFJlYWN0LnVzZVN0YXRlPEFtb3N0cmFJdGVtW10gfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFtkYWRvc0ZhaXhhQVBJLCBzZXREYWRvc0ZhaXhhQVBJXSA9IFJlYWN0LnVzZVN0YXRlPEFtb3N0cmFJdGVtW10gfCBudWxsPihudWxsKVxyXG5cclxuICAvLyBNaW5lcmFpc1xyXG4gIGNvbnN0IFttaW5lcmFsQW5hbGlzZSwgc2V0TWluZXJhbEFuYWxpc2VdID0gUmVhY3QudXNlU3RhdGU8TWluZXJhbFRpcG8gfCAnJz4oJycpIC8vIHLDoWRpbyAoRFJYL1FlbXNjYW4vVG9kYXMpXHJcbiAgY29uc3QgW2xpc3RhTWluZXJhaXMsIHNldExpc3RhTWluZXJhaXNdID0gUmVhY3QudXNlU3RhdGU8TWluZXJhbExpc3RhSXRlbVtdPihbXSlcclxuICBjb25zdCBbYnVzY2FNaW5lcmFsLCBzZXRCdXNjYU1pbmVyYWxdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW21pbmVyYWxTZWxlY2lvbmFkbywgc2V0TWluZXJhbFNlbGVjaW9uYWRvXSA9IFJlYWN0LnVzZVN0YXRlPE1pbmVyYWxMaXN0YUl0ZW0gfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFthZ3J1cGFkb3IsIHNldEFncnVwYWRvcl0gPSBSZWFjdC51c2VTdGF0ZTwnYW5hbGlzZScgfCAnbWVkaWEnIHwgJ21heGltYScgfCAnJz4oJycpIC8vIGFncnVwYWRvcmVzXHJcbiAgY29uc3QgW2RhZG9zTWluZXJhaXMsIHNldERhZG9zTWluZXJhaXNdID0gUmVhY3QudXNlU3RhdGU8aW1wb3J0KCcuL01pbmVyYWxzJykuTWluZXJhbEl0ZW1bXSB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW2xvYWRpbmdNaW5lcmFpcywgc2V0TG9hZGluZ01pbmVyYWlzXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtlcnJvck1pbmVyYWlzLCBzZXRFcnJvck1pbmVyYWlzXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG5cclxuICAvLyBMb2FkaW5nIC8gZXJyb3MgKGFtb3N0cmFzKVxyXG4gIGNvbnN0IFtsb2FkaW5nRnVsbCwgc2V0TG9hZGluZ0Z1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2xvYWRpbmdJbnRlcmVzdCwgc2V0TG9hZGluZ0ludGVyZXN0XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtlcnJvckZ1bGwsIHNldEVycm9yRnVsbF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKVxyXG4gIGNvbnN0IFtlcnJvckludGVyZXN0LCBzZXRFcnJvckludGVyZXN0XSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpXHJcblxyXG4gIGNvbnN0IHJvb3RSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXHJcbiAgdXNlRm9yY2VSaWdodFBvc2l0aW9uKHJvb3RSZWYpXHJcblxyXG4gIGNvbnN0IGludGVyZXN0TWFudWFsUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKVxyXG5cclxuICAvKiA+Pj4gU2luYWxpemEgYW8gUEFJIHF1ZSBvIHdpZGdldCBlc3TDoSBwcm9udG8gKHBhcmEgZWxlIG1hbmRhciBjb2RpZ29zL2NvbmZpZykgKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRhcmdldE9yaWdpbiA9ICcqJ1xyXG4gICAgdHJ5IHsgaWYgKGRvY3VtZW50LnJlZmVycmVyKSB0YXJnZXRPcmlnaW4gPSBuZXcgVVJMKGRvY3VtZW50LnJlZmVycmVyKS5vcmlnaW4gfSBjYXRjaCB7fVxyXG4gICAgLy8gYXZpc2EgcXVlIG8gd2lkZ2V0IGVzdMOhIHByb250b1xyXG4gICAgd2luZG93LnBhcmVudD8ucG9zdE1lc3NhZ2UoeyB0eXBlOiAnd2lkZ2V0UmVhZHknIH0sIHRhcmdldE9yaWdpbilcclxuICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XSB3aWRnZXRSZWFkeSBlbnZpYWRvIHBhcmEnLCB0YXJnZXRPcmlnaW4pXHJcbiAgfSwgW10pXHJcblxyXG4gIC8qIFJlY2ViZSBtZW5zYWdlbnMgZG8gUEFJIChmYWl4YS1pbnRlcmVzc2UsIGxlZ2VuZDptaW5lcmFpcywgY29uZmlnKSAqL1xyXG4gIC8vIE1lbnNhZ2VucyB2aW5kYXMgZG8gUEFJIChFeHBsb3JhKTogZmFpeGEtaW50ZXJlc3NlLCBjb25maWcsIGxlZ2VuZDptaW5lcmFpc1xyXG5SZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIGxpc3RlbmVyIE9OIOKAlCBhZ3VhcmRhbmRvIG1lbnNhZ2VucyBkbyBwYWnigKYnLCB7XHJcbiAgICBzZWxmT3JpZ2luOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxyXG4gICAgcmVmZXJyZXI6IGRvY3VtZW50LnJlZmVycmVyIHx8ICcoc2VtIHJlZmVycmVyKSdcclxuICB9KVxyXG5cclxuICBjb25zdCBvbk1zZyA9IChldjogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gZXY/LmRhdGEgYXMgYW55XHJcbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEudHlwZSkgcmV0dXJuXHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgW3dpZGdldF1bbXNnXSByZWNlYmlkbyB0eXBlPVwiJHtkYXRhLnR5cGV9XCJgKVxyXG4gICAgY29uc29sZS5sb2coJ29yaWdpbjonLCBldi5vcmlnaW4sICdzb3VyY2U9PT1wYXJlbnQ/JywgZXYuc291cmNlID09PSB3aW5kb3cucGFyZW50KVxyXG4gICAgY29uc29sZS5sb2coJ3BheWxvYWQgYnJ1dG86JywgZGF0YSlcclxuXHJcbiAgICBpZiAoZGF0YS50eXBlID09PSAnZmFpeGEtaW50ZXJlc3NlJyAmJiBBcnJheS5pc0FycmF5KChkYXRhIGFzIE1zZ0ZhaXhhSW50ZXJlc3NlKS5jb2RpZ29zUG9jb3MpKSB7XHJcbiAgICAgIGNvbnN0IG51bXMgPSAoZGF0YSBhcyBNc2dGYWl4YUludGVyZXNzZSkuY29kaWdvc1BvY29zXHJcbiAgICAgICAgLm1hcCgodikgPT4gTnVtYmVyKHYpKVxyXG4gICAgICAgIC5maWx0ZXIoKHYpID0+ICFpc05hTih2KSlcclxuICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gZmFpeGEtaW50ZXJlc3NlID0+IG5vcm1hbGl6YWRvczonLCB7XHJcbiAgICAgICAgcmVjZWJpZG9zOiAoZGF0YSBhcyBNc2dGYWl4YUludGVyZXNzZSkuY29kaWdvc1BvY29zLmxlbmd0aCxcclxuICAgICAgICB2YWxpZG9zOiBudW1zLmxlbmd0aCxcclxuICAgICAgICBwcmV2aWV3OiBudW1zLnNsaWNlKDAsIDEwKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8gZXN0YWRvIGF0dWFsIGFudGVzIGRlIGRlY2lkaXJcclxuICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gZXN0YWRvIEFOVEVTIChmYWl4YS1pbnRlcmVzc2UpOicsIHtcclxuICAgICAgICBzaG93V2l0aEludGVyZXN0LFxyXG4gICAgICAgIHdpdGhJbnRlcmVzdCxcclxuICAgICAgICBpbnRlcmVzdE1hbnVhbDogaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8gYXBsaWNhIG8gU2V0IGRlIGPDs2RpZ29zXHJcbiAgICAgIHNldEZhaXhhU2V0KG5ldyBTZXQ8bnVtYmVyPihudW1zKSlcclxuXHJcbiAgICAgIC8vIHPDsyBleGliaW1vcy9jaGVjYW1vcyBzZSBvIHBhaSBxdWVyIHF1ZSBhcGFyZcOnYSAocmVzcGVpdG8gw6kgdHJhdGFkbyBubyBvdXRybyB1c2VFZmZlY3QpO1xyXG4gICAgICAvLyBhcXVpIGFwZW5hcyBcInByb3BvbW9zXCIgZXhpYmlyIGNhc28gdmVuaGEgZmFpeGEgY29tIGVsZW1lbnRvc1xyXG4gICAgICBpZiAobnVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gaGF2ZXLDoSB0ZW50YXRpdmEgZGUgZXhpYmlyL2NoZWNhciBvIGludGVydmFsbyAoZGVwZW5kZW5kbyBkbyBvdXRybyBlZmVpdG8gZSBkbyBtYW51YWxSZWYpJylcclxuICAgICAgICBzZXRzaG93V2l0aEludGVyZXN0KHRydWUpXHJcbiAgICAgICAgaWYgKCFpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBtYXJjYW5kbyB3aXRoSW50ZXJlc3QgYXV0b21hdGljYW1lbnRlICh1c3XDoXJpbyBhaW5kYSBuw6NvIGFsdGVyb3UgbWFudWFsbWVudGUpJylcclxuICAgICAgICAgIHNldFdpdGhJbnRlcmVzdCh0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBOw4NPIG1hcmNhbW9zIHdpdGhJbnRlcmVzdCAodXN1w6FyaW8gasOhIG1leGV1IG1hbnVhbG1lbnRlKScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIGxpc3RhIGRhIGZhaXhhIGVzdMOhIHZhemlhIOKAlCBuw6NvIGFsdGVyYW1vcyB3aXRoSW50ZXJlc3QnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBsb2dhIG8gZXN0YWRvIOKAnGxvZ28gYXDDs3PigJ0gbyBjaWNsbyBhdHVhbCBkZSByZW5kZXIgKG1lbGhvciB2aXNpYmlsaWRhZGUpXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIGVzdGFkbyBBUMOTUyBzZXRTdGF0ZSAoZmFpeGEtaW50ZXJlc3NlKTonLCB7XHJcbiAgICAgICAgICBzaG93V2l0aEludGVyZXN0LFxyXG4gICAgICAgICAgd2l0aEludGVyZXN0LFxyXG4gICAgICAgICAgaW50ZXJlc3RNYW51YWw6IGludGVyZXN0TWFudWFsUmVmLmN1cnJlbnRcclxuICAgICAgICB9KVxyXG4gICAgICB9LCAwKVxyXG4gICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2ZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXM6b2snKSB7XHJcbiAgICAgIGNvbnN0IGNmZyA9IGRhdGEgYXMgTXNnQ29uZmlnXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIGZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXM6b2sgcmVjZWJpZGE6JywgY2ZnKVxyXG5cclxuICAgICAgLy9BanVzdGFuZG8gaW50ZXJ2YWxvIGRlIGludGVyZXNzZSBwYXJhIGFwYXJlY2VyXHJcbiAgICAgIHNldFdpdGhJbnRlcmVzdChjZmdbJ21lc3NhZ2UnXVsndmlzaWJsZSddKVxyXG4gICAgICBzZXRzaG93V2l0aEludGVyZXN0KChjZmdbJ21lc3NhZ2UnXVsndmlzaWJsZSddKSlcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIGVzdGFkbyBBTlRFUyAoZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhczpvayk6Jywge1xyXG4gICAgICAgIHNob3dXaXRoSW50ZXJlc3QsXHJcbiAgICAgICAgd2l0aEludGVyZXN0LFxyXG4gICAgICAgIGludGVyZXN0TWFudWFsOiBpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAoY2ZnLnN0YXJ0V2l0aEludGVyZXN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gcGFpIHNpbmFsaXpvdSBzdGFydFdpdGhJbnRlcmVzdD1UUlVFIC0+IG1vc3RyYXIgY2hlY2tib3gnKVxyXG4gICAgICAgIHNldHNob3dXaXRoSW50ZXJlc3QodHJ1ZSlcclxuICAgICAgICBpZiAoIWludGVyZXN0TWFudWFsUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIG1hcmNhbmRvIHdpdGhJbnRlcmVzdCBwb3JxdWUgdXN1w6FyaW8gbsOjbyBtZXhldSBtYW51YWxtZW50ZScpXHJcbiAgICAgICAgICBzZXRXaXRoSW50ZXJlc3QodHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gTsODTyBtYXJjYW1vcyB3aXRoSW50ZXJlc3QgKHJlc3BlaXRhbmRvIGVzY29saGEgbWFudWFsIHByw6l2aWEpJylcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gc3RhcnRXaXRoSW50ZXJlc3QgYXVzZW50ZS9mYWxzbyDigJQgbsOjbyBmb3LDp2Ftb3MgbmFkYSBhcXVpJylcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdW21zZ10gZXN0YWRvIEFQw5NTIHNldFN0YXRlIChmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzOm9rKTonLCB7XHJcbiAgICAgICAgICBzaG93V2l0aEludGVyZXN0LFxyXG4gICAgICAgICAgd2l0aEludGVyZXN0LFxyXG4gICAgICAgICAgaW50ZXJlc3RNYW51YWw6IGludGVyZXN0TWFudWFsUmVmLmN1cnJlbnRcclxuICAgICAgICB9KVxyXG4gICAgICB9LCAwKVxyXG4gICAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2xlZ2VuZDptaW5lcmFpcycgfHwgZGF0YS50eXBlID09PSAnZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpczpvaycpIHtcclxuICAgICAgY29uc3QgX21zZyA9IGRhdGEgYXMgTXNnTGVnZW5kTWluZXJhaXNcclxuXHJcbiAgICAgIC8vQWp1c3RhbmRvIGludGVydmFsbyBkZSBpbnRlcmVzc2UgcGFyYSBhcGFyZWNlclxyXG4gICAgICBzZXRXaXRoSW50ZXJlc3QoX21zZ1snbWVzc2FnZSddWyd2aXNpYmxlJ10pXHJcbiAgICAgIHNldHNob3dXaXRoSW50ZXJlc3QoKF9tc2dbJ21lc3NhZ2UnXVsndmlzaWJsZSddKSlcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIGxlZ2VuZDptaW5lcmFpcyBwYXlsb2FkOicsIF9tc2c/LnBheWxvYWQpXHJcbiAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIlRFU1RFOiBcIiwgZGF0YSlcclxuXHJcbiAgICBpZiAoZGF0YS50eXBlID09PSAnY29uZmlnJyB8fCBkYXRhLnR5cGUgPT09ICdmZXRjaERpc3RyaWJ1aWNhb01pbmVyYWlzOm9rJykge1xyXG4gICAgICBjb25zdCBjZmcgPSBkYXRhIGFzIE1zZ0NvbmZpZ1xyXG4gICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBjb25maWcgcmVjZWJpZGE6JywgY2ZnKVxyXG4gICAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSAqKmNnVmlzaWJsZSBkbyBwYWkqKiA9JywgY2ZnLmNnVmlzaWJsZSkgLy8gPDw8IGltcHJpbWUgbyAndmlzaWJsZSdcclxuXHJcbiAgICAgIC8vIE1vc3RyYXIvb2N1bHRhciBvIGNoZWNrYm94IGRlIEludGVydmFsbyBkZSBJbnRlcmVzc2UgZGUgYWNvcmRvIGNvbSBhIHZpc2liaWxpZGFkZSBubyBwYWlcclxuICAgICAgaWYgKGNmZy5jZ1Zpc2libGUgPT09IHRydWUpIHtcclxuICAgICAgICBzZXRzaG93V2l0aEludGVyZXN0KHRydWUpXHJcbiAgICAgICAgLy8gU2UgcGFpIHRhbWLDqW0gcGVkaXUgcGFyYSBjb21lw6dhciBtYXJjYWRvIGUgbyB1c3XDoXJpbyBhaW5kYSBuw6NvIG1leGV1OlxyXG4gICAgICAgIGlmIChjZmcuc3RhcnRXaXRoSW50ZXJlc3QgJiYgIWludGVyZXN0TWFudWFsUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIHNldFdpdGhJbnRlcmVzdCh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBOw6NvIG1vc3RyYXIgKG5lbSBtYXJjYWRvKSBxdWFuZG8gbyBjaGVja2JveCBuw6NvIMOpIHZpc8OtdmVsIG5vIHBhaVxyXG4gICAgICAgIHNldHNob3dXaXRoSW50ZXJlc3QoZmFsc2UpXHJcbiAgICAgICAgaWYgKCFpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50KSBzZXRXaXRoSW50ZXJlc3QoZmFsc2UpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHPDsyBwcmEgZGVwdXJhw6fDo28gZG8gcmVzdWx0YWRvIGZpbmFsIG5lc3RlIHRpY2s6XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XVttc2ddIGVzdGFkbyBww7NzLWNvbmZpZzonLCB7XHJcbiAgICAgICAgICBzaG93V2l0aEludGVyZXN0LFxyXG4gICAgICAgICAgd2l0aEludGVyZXN0LFxyXG4gICAgICAgICAgaW50ZXJlc3RNYW51YWw6IGludGVyZXN0TWFudWFsUmVmLmN1cnJlbnRcclxuICAgICAgICB9KVxyXG4gICAgICB9LCAwKVxyXG5cclxuICAgICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSB0aXBvIG7Do28gdHJhdGFkbzonLCBkYXRhLnR5cGUpXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKClcclxuICB9XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Nc2cpXHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Nc2cpXHJcbiAgICBjb25zb2xlLmxvZygnW3dpZGdldF1bbXNnXSBsaXN0ZW5lciBPRkYg4oCUIHJlbW92aWRvIG5hIGRlc21vbnRhZ2VtIGRvIGVmZWl0bycpXHJcbiAgfVxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxufSwgW10pXHJcblxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGZhaXhhU2V0LnNpemUgPiAwKSB7XHJcbiAgICAgIHNldHNob3dXaXRoSW50ZXJlc3QodHJ1ZSlcclxuICAgICAgaWYgKCFpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50KSBzZXRXaXRoSW50ZXJlc3QodHJ1ZSlcclxuICAgIH1cclxuICB9LCBbZmFpeGFTZXRdKVxyXG5cclxuICAvKiA9PT09PT0gQU1PU1RSQVM6IGNhcnJlZ2FyIGJhc2UgPT09PT09ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbd2lkZ2V0XSBlZmVpdG8gYW1vc3RyYXM6Y2FycmVnYXIgYmFzZScpXHJcbiAgICAgIGNvbnNvbGUubG9nKHsgY2F0ZWdvcmlhLCB3aXRoSW50ZXJlc3QgfSlcclxuICAgICAgaWYgKGNhdGVnb3JpYSAhPT0gJ3NhbXBsZScpIHsgY29uc29sZS5sb2coJ3NraXAnKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG4gICAgICBzZXRMb2FkaW5nRnVsbCh0cnVlKTsgc2V0RXJyb3JGdWxsKCcnKVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzKHdpdGhJbnRlcmVzdCB8fCBERUZBVUxUX0ZBSVhBX0lOVEVSRVNTRSlcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkgeyBzZXREYWRvc0Z1bGwoZGF0YSk7IGNvbnNvbGUubG9nKCdbd2lkZ2V0XSBhbW9zdHJhcyBiYXNlJywgZGF0YT8ubGVuZ3RoKSB9XHJcbiAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1t3aWRnZXRdIGVycm8gYmFzZSBhbW9zdHJhcycsIGUpXHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHsgc2V0RXJyb3JGdWxsKGU/Lm1lc3NhZ2UgfHwgJ0ZhbGhhIGFvIGJ1c2NhciBkYWRvcycpOyBzZXREYWRvc0Z1bGwoW10pIH1cclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkgeyBzZXRMb2FkaW5nRnVsbChmYWxzZSk7IGNvbnNvbGUuZ3JvdXBFbmQoKSB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJ1bigpXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbY2F0ZWdvcmlhLCB3aXRoSW50ZXJlc3RdKVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXHJcbiAgICBhc3luYyBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJ1t3aWRnZXRdIGVmZWl0byBhbW9zdHJhczpjYXJyZWdhciBmYWl4YSBBUEknKVxyXG4gICAgICBjb25zb2xlLmxvZyh7IGNhdGVnb3JpYSwgd2l0aEludGVyZXN0LCBmYWl4YVNldFNpemU6IGZhaXhhU2V0LnNpemUsIGhhc0RhZG9zRmFpeGFBUEk6IGRhZG9zRmFpeGFBUEkgIT09IG51bGwgfSlcclxuICAgICAgaWYgKGNhdGVnb3JpYSAhPT0gJ3NhbXBsZScpIHsgY29uc29sZS5sb2coJ3NraXAgY2F0ZWdvcmlhJyk7IGNvbnNvbGUuZ3JvdXBFbmQoKTsgcmV0dXJuIH1cclxuICAgICAgaWYgKCF3aXRoSW50ZXJlc3QpIHsgY29uc29sZS5sb2coJ3NraXAgc2VtIGludGVyZXNzZScpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcbiAgICAgIGlmIChmYWl4YVNldC5zaXplID4gMCkgeyBjb25zb2xlLmxvZygnc2tpcCBmYWl4YSB2aW5kYSBkbyBwYWknKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG4gICAgICBpZiAoZGFkb3NGYWl4YUFQSSAhPT0gbnVsbCkgeyBjb25zb2xlLmxvZygnc2tpcCBqw6EgY2FycmVnYWRvJyk7IGNvbnNvbGUuZ3JvdXBFbmQoKTsgcmV0dXJuIH1cclxuICAgICAgc2V0TG9hZGluZ0ludGVyZXN0KHRydWUpOyBzZXRFcnJvckludGVyZXN0KCcnKVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzKHRydWUpXHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHsgc2V0RGFkb3NGYWl4YUFQSShkYXRhKTsgY29uc29sZS5sb2coJ1t3aWRnZXRdIGFtb3N0cmFzIGZhaXhhIEFQSScsIGRhdGE/Lmxlbmd0aCkgfVxyXG4gICAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbd2lkZ2V0XSBlcnJvIGZhaXhhIEFQSScsIGUpXHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHsgc2V0RXJyb3JJbnRlcmVzdChlPy5tZXNzYWdlIHx8ICdGYWxoYSBhbyBidXNjYXIgZGFkb3MgZG8gaW50ZXJ2YWxvIGRlIGludGVyZXNzZScpOyBzZXREYWRvc0ZhaXhhQVBJKFtdKSB9XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHsgc2V0TG9hZGluZ0ludGVyZXN0KGZhbHNlKTsgY29uc29sZS5ncm91cEVuZCgpIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcnVuKClcclxuICAgIHJldHVybiAoKSA9PiB7IGNhbmNlbGxlZCA9IHRydWUgfVxyXG4gIH0sIFtjYXRlZ29yaWEsIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXQsIGRhZG9zRmFpeGFBUEldKVxyXG5cclxuICAvKiA9PT09PT0gQU1PU1RSQVM6IGRlc2VuaGFyID09PT09PSAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdbd2lkZ2V0XSBlZmVpdG8gYW1vc3RyYXM6ZGVzZW5oYXInKVxyXG4gICAgY29uc3Qgam12ID0gamltdU1hcFZpZXdcclxuICAgIGlmICgham12Py52aWV3KSB7IGNvbnNvbGUubG9nKCdza2lwIHNlbSB2aWV3Jyk7IGNvbnNvbGUuZ3JvdXBFbmQoKTsgcmV0dXJuIH1cclxuICAgIGlmIChjYXRlZ29yaWEgIT09ICdzYW1wbGUnKSB7IGNvbnNvbGUubG9nKCdza2lwIGNhdGVnb3JpYScpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcblxyXG4gICAgY29uc3QgYmFzZTogQW1vc3RyYUl0ZW1bXSA9IHdpdGhJbnRlcmVzdFxyXG4gICAgICA/IChmYWl4YVNldC5zaXplID4gMFxyXG4gICAgICAgICAgPyAoZGFkb3NGdWxsID8/IFtdKS5maWx0ZXIoeCA9PiBmYWl4YVNldC5oYXMoTnVtYmVyKHguY29kaWdvUG9jbykpKVxyXG4gICAgICAgICAgOiAoZGFkb3NGYWl4YUFQSSA/PyBkYWRvc0Z1bGwgPz8gW10pKVxyXG4gICAgICA6IChkYWRvc0Z1bGwgPz8gW10pXHJcblxyXG4gICAgY29uc29sZS5sb2coJ1t3aWRnZXRdIGJhc2Ugc2l6ZScsIGJhc2UubGVuZ3RoLCAndGlwb3NTZWwnLCB0aXBvc1NlbClcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShiYXNlKSB8fCBiYXNlLmxlbmd0aCA9PT0gMCkgeyBjb25zb2xlLmxvZygnc2tpcCBiYXNlIHZhemlhJyk7IGNvbnNvbGUuZ3JvdXBFbmQoKTsgcmV0dXJuIH1cclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aXBvc1NlbCkgfHwgdGlwb3NTZWwubGVuZ3RoID09PSAwKSB7IGNvbnNvbGUubG9nKCdza2lwIHNlbSB0aXBvcycpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcblxyXG4gICAgY29uc3QgeyB2aWV3IH0gPSBqbXZcclxuXHJcbiAgICB0aXBvc1NlbC5mb3JFYWNoKCh0aXBvKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhZG9zID0gYmFzZVxyXG4gICAgICAgIC5tYXAoZCA9PiAoeyBjb2RpZ29Qb2NvOiBkLmNvZGlnb1BvY28sIHRvdGFsOiBkW1RZUEVfRklFTERbdGlwb11dID8/IDAgfSkpXHJcbiAgICAgICAgLmZpbHRlcihkID0+IChkLnRvdGFsID8/IDApID4gMClcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGBbd2lkZ2V0XSB0aXBvPSR7dGlwb30gZGFkb3NgLCBkYWRvcy5sZW5ndGgpXHJcblxyXG4gICAgICBjbGVhckxheWVyT2ZUaXBvKHZpZXcsIHRpcG8pXHJcbiAgICAgIGlmIChkYWRvcy5sZW5ndGggPT09IDApIHJldHVyblxyXG5cclxuICAgICAgY29uc3QgY29sb3JGaWxsID0gY29yZXNUaXBvc1t0aXBvXSB8fCAncmdiYSgwLDAsMCwwLjUpJ1xyXG4gICAgICBjb25zdCBpZENhbWFkYSA9IGxheWVySWRGb3JTYW1wbGUodGlwbylcclxuICAgICAgY29uc3QgaWRMZWdlbmRhID0gYGxnZF8ke2lkQ2FtYWRhfWBcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIoe1xyXG4gICAgICAgICAgamltdU1hcFZpZXc6IGptdixcclxuICAgICAgICAgIGRhZG9zLFxyXG4gICAgICAgICAgY29sb3JGaWxsLFxyXG4gICAgICAgICAgaWRDYW1hZGEsXHJcbiAgICAgICAgICBpZExlZ2VuZGEsXHJcbiAgICAgICAgICB0aXRsZUxlZ2VuZGE6ICh3aXRoSW50ZXJlc3QgPyAnSW50ZXJ2YWxvIGRlIEludGVyZXNzZSAtICcgOiAnJykgKyAodGlwby5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRpcG8uc2xpY2UoMSkpLFxyXG4gICAgICAgICAgd2l0aEludGVyZXN0XHJcbiAgICAgICAgfSBhcyBhbnkpXHJcblxyXG4gICAgICAgIGNvbnN0IGx5ciA9IHZpZXcubWFwLmZpbmRMYXllckJ5SWQoaWRDYW1hZGEpIGFzIGFueVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbd2lkZ2V0XSBjYW1hZGEgY3JpYWRhPycsICEhbHlyLCBpZENhbWFkYSlcclxuICAgICAgICBpZiAobHlyKSBkaXNhYmxlQ2x1c3Rlck51bWJlcnMobHlyKVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgW2Ftb3N0cmFzXSBmYWxoYSBhbyBnZXJhciBjYW1hZGEgJHtpZENhbWFkYX1gLCBlKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpXHJcbiAgfSwgW2ppbXVNYXBWaWV3LCB0aXBvc1NlbCwgd2l0aEludGVyZXN0LCBmYWl4YVNldCwgZGFkb3NGdWxsLCBkYWRvc0ZhaXhhQVBJLCBjYXRlZ29yaWFdKVxyXG5cclxuICAvKiA9PT09PT0gTUlORVJBSVM6IGFvIG11ZGFyIG8gcmFkaW8gZGUgYW7DoWxpc2UgLT4gYnVzY2EgQ09OVEFET1IgZSBMSVNUQSA9PT09PT0gKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXHJcbiAgICBhc3luYyBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJ1t3aWRnZXRdIGVmZWl0byBtaW5lcmFpczpyYWRpbycpXHJcbiAgICAgIGNvbnNvbGUubG9nKHsgY2F0ZWdvcmlhLCBtaW5lcmFsQW5hbGlzZSwgd2l0aEludGVyZXN0IH0pXHJcbiAgICAgIGlmIChjYXRlZ29yaWEgIT09ICdtaW5lcmFscycpIHsgY29uc29sZS5sb2coJ3NraXAgY2F0ZWdvcmlhJyk7IGNvbnNvbGUuZ3JvdXBFbmQoKTsgcmV0dXJuIH1cclxuICAgICAgaWYgKCFtaW5lcmFsQW5hbGlzZSkgeyBjb25zb2xlLmxvZygnc2tpcCBzZW0gYW5hbGlzZScpOyBjb25zb2xlLmdyb3VwRW5kKCk7IHJldHVybiB9XHJcblxyXG4gICAgICAvLyByZXNldCBVSSBkZXBlbmRlbnRlXHJcbiAgICAgIHNldE1pbmVyYWxTZWxlY2lvbmFkbyhudWxsKVxyXG4gICAgICBzZXRBZ3J1cGFkb3IoJycpXHJcbiAgICAgIHNldExpc3RhTWluZXJhaXMoW10pXHJcbiAgICAgIHNldEJ1c2NhTWluZXJhbCgnJylcclxuICAgICAgc2V0RXJyb3JNaW5lcmFpcygnJylcclxuICAgICAgc2V0TG9hZGluZ01pbmVyYWlzKHRydWUpXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IFtjb250YWRvciwgbGlzdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgZmV0Y2hEaXN0cmlidWljYW9NaW5lcmFpc0NvbnRhZG9yKG1pbmVyYWxBbmFsaXNlIGFzIE1pbmVyYWxUaXBvLCB3aXRoSW50ZXJlc3QpLFxyXG4gICAgICAgICAgZmV0Y2hNaW5lcmFsTGlzdGEobWluZXJhbEFuYWxpc2UgYXMgTWluZXJhbFRpcG8sIHdpdGhJbnRlcmVzdClcclxuICAgICAgICBdKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3dpZGdldF0gY29udGFkb3IvIGxpc3RhIHJlY2ViaWRvcycsIGNvbnRhZG9yPy5sZW5ndGgsIGxpc3RhPy5sZW5ndGgpXHJcbiAgICAgICAgICBzZXREYWRvc01pbmVyYWlzKGNvbnRhZG9yKVxyXG4gICAgICAgICAgc2V0TGlzdGFNaW5lcmFpcyhsaXN0YSlcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1t3aWRnZXRdIGVycm8gZmV0Y2ggbWluZXJhaXMnLCBlKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICBzZXRFcnJvck1pbmVyYWlzKGU/Lm1lc3NhZ2UgfHwgJ0ZhbGhhIGFvIGJ1c2NhciBtaW5lcmFpcycpXHJcbiAgICAgICAgICBzZXREYWRvc01pbmVyYWlzKFtdKVxyXG4gICAgICAgICAgc2V0TGlzdGFNaW5lcmFpcyhbXSlcclxuICAgICAgICB9XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHsgc2V0TG9hZGluZ01pbmVyYWlzKGZhbHNlKTsgY29uc29sZS5ncm91cEVuZCgpIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcnVuKClcclxuICAgIHJldHVybiAoKSA9PiB7IGNhbmNlbGxlZCA9IHRydWUgfVxyXG4gIH0sIFtjYXRlZ29yaWEsIG1pbmVyYWxBbmFsaXNlLCB3aXRoSW50ZXJlc3RdKVxyXG5cclxuICAvKiA9PT09PT0gTUlORVJBSVM6IGRlc2VuaGFyIGJhc2UgKGNvbnRhZG9yKSBxdWFuZG8gY2hlZ2EgPT09PT09ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJ1t3aWRnZXRdIGVmZWl0byBtaW5lcmFpczpkZXNlbmhhciBiYXNlJylcclxuICAgIGNvbnNvbGUubG9nKHsgY2F0ZWdvcmlhLCBoYXNKTVY6ICEhamltdU1hcFZpZXc/LnZpZXcsIG1pbmVyYWxBbmFsaXNlLCBkYWRvc01pbmVyYWlzTGVuOiBkYWRvc01pbmVyYWlzPy5sZW5ndGgsIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXRTaXplOiBmYWl4YVNldC5zaXplIH0pXHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoY2F0ZWdvcmlhICE9PSAnbWluZXJhbHMnKSByZXR1cm4gY29uc29sZS5sb2coJ3NraXAgY2F0ZWdvcmlhJylcclxuICAgICAgaWYgKCFqaW11TWFwVmlldz8udmlldykgcmV0dXJuIGNvbnNvbGUubG9nKCdza2lwIHZpZXcnKVxyXG4gICAgICBpZiAoIW1pbmVyYWxBbmFsaXNlKSByZXR1cm4gY29uc29sZS5sb2coJ3NraXAgbWluZXJhbEFuYWxpc2UnKVxyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGFkb3NNaW5lcmFpcykpIHJldHVybiBjb25zb2xlLmxvZygnc2tpcCBkYWRvc01pbmVyYWlzIG51bGwnKVxyXG5cclxuICAgICAgY29uc3QgYmFzZSA9ICh3aXRoSW50ZXJlc3QgJiYgZmFpeGFTZXQuc2l6ZSA+IDApXHJcbiAgICAgICAgPyBkYWRvc01pbmVyYWlzLmZpbHRlcihkID0+IGZhaXhhU2V0LmhhcyhOdW1iZXIoZC5jb2RpZ29Qb2NvKSkpXHJcbiAgICAgICAgOiBkYWRvc01pbmVyYWlzXHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnW3dpZGdldF0gYmFzZSBwYXJhIGRlc2VuaGFyJywgYmFzZS5sZW5ndGgpXHJcbiAgICAgIGlmIChiYXNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGNvbnNvbGUud2FybignW3dpZGdldF0gYmFzZSB2YXppYSDigJQgbmFkYSBhIHBsb3R0YXInKVxyXG5cclxuICAgICAgZGVzZW5oYXJEaXN0cmlidWljYW9NaW5lcmFpcyhqaW11TWFwVmlldywgYmFzZSwgbWluZXJhbEFuYWxpc2UgYXMgTWluZXJhbFRpcG8sIHdpdGhJbnRlcmVzdClcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxyXG4gICAgfVxyXG4gIH0sIFtqaW11TWFwVmlldywgY2F0ZWdvcmlhLCBtaW5lcmFsQW5hbGlzZSwgZGFkb3NNaW5lcmFpcywgd2l0aEludGVyZXN0LCBmYWl4YVNldF0pXHJcblxyXG4gIC8qID09PT09PSBNSU5FUkFJUzogYW8gZXNjb2xoZXIgTUlORVJBTCArIEFHUlVQQURPUiAtPiBhcGxpY2EgY29sb3JpemHDp8OjbyBzdG9wcyA9PT09PT0gKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXHJcbiAgICBhc3luYyBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJ1t3aWRnZXRdIGVmZWl0byBtaW5lcmFpczpjb2xvcml6YcOnw6NvIGFncnVwYWRvcicpXHJcbiAgICAgIGNvbnNvbGUubG9nKHsgY2F0ZWdvcmlhLCBoYXNKTVY6ICEhamltdU1hcFZpZXc/LnZpZXcsIG1pbmVyYWxBbmFsaXNlLCBtaW5lcmFsU2VsZWNpb25hZG8sIGFncnVwYWRvciwgd2l0aEludGVyZXN0IH0pXHJcbiAgICAgIGlmIChjYXRlZ29yaWEgIT09ICdtaW5lcmFscycgfHwgIWppbXVNYXBWaWV3Py52aWV3IHx8ICFtaW5lcmFsQW5hbGlzZSB8fCAhbWluZXJhbFNlbGVjaW9uYWRvIHx8ICFhZ3J1cGFkb3IpIHsgY29uc29sZS5sb2coJ3NraXAnKTsgY29uc29sZS5ncm91cEVuZCgpOyByZXR1cm4gfVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYWRvcyA9IGF3YWl0IGZldGNoTWluZXJhbEFncnVwYWRvcihcclxuICAgICAgICAgIG1pbmVyYWxBbmFsaXNlIGFzIE1pbmVyYWxUaXBvLFxyXG4gICAgICAgICAgbWluZXJhbFNlbGVjaW9uYWRvLm5vbWVSZXN1bWlkb01pbmVyYWwsXHJcbiAgICAgICAgICB3aXRoSW50ZXJlc3RcclxuICAgICAgICApXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdIGFncnVwYWRvciBkYWRvcycsIGRhZG9zPy5sZW5ndGgsIGRhZG9zPy5zbGljZT8uKDAsMTApKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICBzZXRBZ3J1cGFkb3JEYWRvcyhkYWRvcyB8fCBbXSlcclxuICAgICAgICAgIGF3YWl0IGFwbGljYXJDb2xvcml6YWNhb1BvckFncnVwYWRvcihcclxuICAgICAgICAgICAgamltdU1hcFZpZXcsXHJcbiAgICAgICAgICAgIG1pbmVyYWxBbmFsaXNlIGFzIE1pbmVyYWxUaXBvLFxyXG4gICAgICAgICAgICBkYWRvcyxcclxuICAgICAgICAgICAgYWdydXBhZG9yIGFzICdhbmFsaXNlJyB8ICdtZWRpYScgfCAnbWF4aW1hJ1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1t3aWRnZXRdIGNvbG9yaXphw6fDo28gYXBsaWNhZGEnKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhbGhhIGFvIGFwbGljYXIgY29sb3JpemHDp8OjbyBwb3IgYWdydXBhZG9yJywgZSlcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcnVuKClcclxuICAgIHJldHVybiAoKSA9PiB7IGNhbmNlbGxlZCA9IHRydWUgfVxyXG4gIH0sIFtqaW11TWFwVmlldywgY2F0ZWdvcmlhLCBtaW5lcmFsQW5hbGlzZSwgbWluZXJhbFNlbGVjaW9uYWRvLCBhZ3J1cGFkb3IsIHdpdGhJbnRlcmVzdF0pXHJcblxyXG4gIC8vIFJlc2V0L2ZlY2hhclxyXG4gIGNvbnN0IHJlc2V0VWlTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFRpcG9zU2VsKFtdKTsgc2V0U2hvd0VtcHR5KGZhbHNlKTsgc2V0V2l0aEludGVyZXN0KGZhbHNlKTsgc2V0Q2F0ZWdvcmlhKCcnKTtcclxuICAgIHNldERhZG9zRnVsbChudWxsKTsgc2V0RGFkb3NGYWl4YUFQSShudWxsKTtcclxuICAgIHNldE1pbmVyYWxBbmFsaXNlKCcnKTsgc2V0RGFkb3NNaW5lcmFpcyhudWxsKTsgc2V0RXJyb3JNaW5lcmFpcygnJyk7IHNldExvYWRpbmdNaW5lcmFpcyhmYWxzZSk7XHJcbiAgICBzZXRMaXN0YU1pbmVyYWlzKFtdKTsgc2V0QnVzY2FNaW5lcmFsKCcnKTsgc2V0TWluZXJhbFNlbGVjaW9uYWRvKG51bGwpOyBzZXRBZ3J1cGFkb3IoJycpO1xyXG4gICAgaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudCA9IGZhbHNlXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXc/LnZpZXdcclxuICAgIGlmICh2aWV3KSB7XHJcbiAgICBjbGVhckFtb3N0cmFzKHZpZXcpXHJcbiAgICBjbGVhck1pbmVyYWlzKHZpZXcpIC8vIDw8PCB0YW1iw6ltIHJlbW92ZSBhcyBjYW1hZGFzIGRlIG1pbmVyYWlzXHJcbiAgfVxyXG4gICAgcmVzZXRVaVN0YXRlKClcclxuICB9LCBbamltdU1hcFZpZXcsIHJlc2V0VWlTdGF0ZV0pXHJcblxyXG4gIC8vIEZlY2hhciBwb3IgYm90w6NvL29jdWx0YXIgZGnDoWxvZ28gKGNvcnJpZ2lkbzogc2VsZXRvciBjb20gYXNwYXMgZmVjaGFkYXMgY29ycmV0YW1lbnRlKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXc/LnZpZXc7IGlmICghdmlldykgcmV0dXJuXHJcbiAgICBjb25zdCByb290ID0gcm9vdFJlZi5jdXJyZW50OyBpZiAoIXJvb3QpIHJldHVyblxyXG4gICAgY29uc3QgZGxnID0gZmluZENsb3Nlc3REaWFsb2cocm9vdCk7IGlmICghZGxnKSByZXR1cm5cclxuICAgIGNvbnN0IGNsb3NlQnRuID0gZGxnLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICdidXR0b25bYXJpYS1sYWJlbD1cIkNsb3NlXCJdLCBidXR0b25bdGl0bGU9XCJDbG9zZVwiXSwgYnV0dG9uW2FyaWEtbGFiZWw9XCJGZWNoYXJcIl0sIGJ1dHRvblt0aXRsZT1cIkZlY2hhclwiXSwgW2RhdGEtYWN0aW9uPVwiY2xvc2VcIl0nXHJcbiAgICApIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxyXG4gICAgaWYgKCFjbG9zZUJ0bikgcmV0dXJuXHJcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsb3NlKVxyXG4gICAgcmV0dXJuICgpID0+IGNsb3NlQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xvc2UpXHJcbiAgfSwgW2ppbXVNYXBWaWV3LCBoYW5kbGVDbG9zZV0pXHJcblxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb25LZXkgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4geyBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSBoYW5kbGVDbG9zZSgpIH1cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleSlcclxuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXkpXHJcbiAgfSwgW2hhbmRsZUNsb3NlXSlcclxuXHJcbiAgLyoqIFN1bcOhcmlvIChhbW9zdHJhcyBhcGVuYXMpICovXHJcbiAgY29uc3Qgc3VtbWFyeUdyb3VwcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKGNhdGVnb3JpYSAhPT0gJ3NhbXBsZScpIHJldHVybiBbXVxyXG4gICAgY29uc3QgYmFzZTogQW1vc3RyYUl0ZW1bXSA9IHdpdGhJbnRlcmVzdFxyXG4gICAgICA/IChmYWl4YVNldC5zaXplID4gMFxyXG4gICAgICAgICAgPyAoZGFkb3NGdWxsID8/IFtdKS5maWx0ZXIoeCA9PiBmYWl4YVNldC5oYXMoTnVtYmVyKHguY29kaWdvUG9jbykpKVxyXG4gICAgICAgICAgOiAoZGFkb3NGYWl4YUFQSSA/PyBkYWRvc0Z1bGwgPz8gW10pKVxyXG4gICAgICA6IChkYWRvc0Z1bGwgPz8gW10pXHJcblxyXG4gICAgcmV0dXJuIHRpcG9zU2VsLm1hcCh0aXBvID0+IHtcclxuICAgICAgY29uc3QgY29yID0gY29yZXNUaXBvc1t0aXBvXVxyXG4gICAgICBjb25zdCBkYWRvcyA9IGJhc2UubWFwKGQgPT4gKHsgY29kaWdvUG9jbzogZC5jb2RpZ29Qb2NvLCB0b3RhbDogZFtUWVBFX0ZJRUxEW3RpcG9dXSA/PyAwIH0pKVxyXG4gICAgICBsZXQgcm93cyA9IGNhbGN1bGFyUXVlYnJhcyhkYWRvcywgY29yKS5yZXZlcnNlKClcclxuICAgICAgaWYgKCFzaG93RW1wdHkpIHJvd3MgPSByb3dzLmZpbHRlcihyID0+IHIuY291bnQgPiAwIHx8IHIubGFiZWwuc3RhcnRzV2l0aCgnfCAwIHwnKSlcclxuICAgICAgcmV0dXJuIHsgdGlwbywgcm93cyB9XHJcbiAgICB9KVxyXG4gIH0sIFt0aXBvc1NlbCwgc2hvd0VtcHR5LCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0LCBkYWRvc0Z1bGwsIGRhZG9zRmFpeGFBUEksIGNhdGVnb3JpYV0pXHJcblxyXG4gIC8qKiBTdW3DoXJpbyAobWluZXJhaXMg4oCUIFRvdGFsIGRlIEFtb3N0cmFzL0NvbGV0YXMpICovXHJcbiAgY29uc3Qgc3VtbWFyeU1pbmVyYWxzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoY2F0ZWdvcmlhICE9PSAnbWluZXJhbHMnKSByZXR1cm4gbnVsbFxyXG4gICAgaWYgKCFtaW5lcmFsQW5hbGlzZSkgcmV0dXJuIG51bGxcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShkYWRvc01pbmVyYWlzKSB8fCBkYWRvc01pbmVyYWlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcclxuXHJcbiAgICBjb25zdCBiYXNlID0gKHdpdGhJbnRlcmVzdCAmJiBmYWl4YVNldC5zaXplID4gMClcclxuICAgICAgPyBkYWRvc01pbmVyYWlzLmZpbHRlcihkID0+IGZhaXhhU2V0LmhhcyhOdW1iZXIoZC5jb2RpZ29Qb2NvKSkpXHJcbiAgICAgIDogZGFkb3NNaW5lcmFpc1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gKHdpdGhJbnRlcmVzdCA/ICdJbnRlcnZhbG8gZGUgSW50ZXJlc3NlIC0gJyA6ICcnKSArIGxhYmVsRnJvbVZhbHVlKG1pbmVyYWxBbmFsaXNlIGFzIE1pbmVyYWxUaXBvKVxyXG4gICAgaWYgKCFiYXNlLmxlbmd0aCkgcmV0dXJuIHsgdGl0bGUsIHJvd3M6IFtdIGFzIGFueVtdIH1cclxuXHJcbiAgICBjb25zdCBjb2xvciA9ICdyZ2IoMjUzLDE0Miw1NSknIC8vIG1lc21hIGNvciB1c2FkYSBuYSBjYW1hZGEgZGUgbWluZXJhaXNcclxuICAgIGNvbnN0IGRhZG9zID0gYmFzZS5tYXAoZCA9PiAoeyB0b3RhbDogZC50b3RhbE1pbmVyYWlzIH0pKVxyXG4gICAgbGV0IHJvd3MgPSBjYWxjdWxhclF1ZWJyYXMoZGFkb3MsIGNvbG9yKS5yZXZlcnNlKClcclxuICAgIGlmICghc2hvd0VtcHR5KSByb3dzID0gcm93cy5maWx0ZXIociA9PiByLmNvdW50ID4gMCB8fCByLmxhYmVsLnN0YXJ0c1dpdGgoJ3wgMCB8JykpXHJcblxyXG4gICAgcmV0dXJuIHsgdGl0bGUsIHJvd3MgfVxyXG4gIH0sIFtjYXRlZ29yaWEsIG1pbmVyYWxBbmFsaXNlLCBkYWRvc01pbmVyYWlzLCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0LCBzaG93RW1wdHldKVxyXG5cclxuICBjb25zdCBzdW1tYXJ5TWluZXJhbHNBZ3IgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChjYXRlZ29yaWEgIT09ICdtaW5lcmFscycpIHJldHVybiBudWxsXHJcbiAgICBpZiAoIW1pbmVyYWxBbmFsaXNlIHx8ICFtaW5lcmFsU2VsZWNpb25hZG8gfHwgIWFncnVwYWRvcikgcmV0dXJuIG51bGxcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhZ3J1cGFkb3JEYWRvcykgfHwgYWdydXBhZG9yRGFkb3MubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxyXG5cclxuICAgIC8vIGVzY29saGUgbyBjYW1wbyBjZXJ0byBjb25mb3JtZSBhZ3J1cGFkb3JcclxuICAgIGNvbnN0IGZpZWxkID0gYWdydXBhZG9yID09PSAnYW5hbGlzZScgPyAncXRBbmFsaXNlJyA6IChhZ3J1cGFkb3IgPT09ICdtZWRpYScgPyAndmFsb3JNZWRpbycgOiAndmFsb3JNYXhpbW8nKVxyXG5cclxuICAgIC8vIGFwbGljYSBcIkludGVydmFsbyBkZSBJbnRlcmVzc2VcIiBzZSBuZWNlc3PDoXJpb1xyXG4gICAgY29uc3QgYmFzZSA9ICh3aXRoSW50ZXJlc3QgJiYgZmFpeGFTZXQuc2l6ZSA+IDApXHJcbiAgICAgID8gYWdydXBhZG9yRGFkb3MuZmlsdGVyKGQgPT4gZmFpeGFTZXQuaGFzKE51bWJlcihkLmNvZGlnb1BvY28pKSlcclxuICAgICAgOiBhZ3J1cGFkb3JEYWRvc1xyXG5cclxuICAgIGNvbnN0IHRpdGxlQmFzZSA9XHJcbiAgICAgIChhZ3J1cGFkb3IgPT09ICdhbmFsaXNlJyA/ICdRdWFudGlkYWRlIGRlIEFuw6FsaXNlcycgOlxyXG4gICAgICBhZ3J1cGFkb3IgPT09ICdtZWRpYScgICA/IGBNw6lkaWEgZGUgJHttaW5lcmFsU2VsZWNpb25hZG8ubm9tZU1pbmVyYWx9YCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYE3DoXhpbWEgZGUgJHttaW5lcmFsU2VsZWNpb25hZG8ubm9tZU1pbmVyYWx9YClcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9ICh3aXRoSW50ZXJlc3QgPyAnSW50ZXJ2YWxvIGRlIEludGVyZXNzZSAtICcgOiAnJykgKyB0aXRsZUJhc2VcclxuXHJcbiAgICBpZiAoIWJhc2UubGVuZ3RoKSByZXR1cm4geyB0aXRsZSwgcm93czogW10gYXMgYW55W10gfVxyXG5cclxuICAgIC8vIEEgcGFsZXRhIHNlZ3VlIGNvZXJlbnRlIGNvbSBvIOKAnHRvdGFs4oCdIChib2xoYXMpIOKAlCBjb3IgbGFyYW5qYSB1c2FkYSBubyBjb250YWRvclxyXG4gICAgY29uc3QgY29sb3IgPSAncmdiKDI1MywxNDIsNTUpJ1xyXG4gICAgY29uc3QgZGFkb3MgPSBiYXNlLm1hcChkID0+ICh7IHRvdGFsOiBOdW1iZXIoKGQgYXMgYW55KVtmaWVsZF0gfHwgMCkgfSkpXHJcbiAgICBsZXQgcm93cyA9IGNhbGN1bGFyUXVlYnJhcyhkYWRvcywgY29sb3IpLnJldmVyc2UoKVxyXG4gICAgaWYgKCFzaG93RW1wdHkpIHJvd3MgPSByb3dzLmZpbHRlcihyID0+IHIuY291bnQgPiAwIHx8IHIubGFiZWwuc3RhcnRzV2l0aCgnfCAwIHwnKSlcclxuXHJcbiAgICByZXR1cm4geyB0aXRsZSwgcm93cyB9XHJcbiAgfSwgW2NhdGVnb3JpYSwgbWluZXJhbEFuYWxpc2UsIG1pbmVyYWxTZWxlY2lvbmFkbywgYWdydXBhZG9yLCBhZ3J1cGFkb3JEYWRvcywgd2l0aEludGVyZXN0LCBmYWl4YVNldCwgc2hvd0VtcHR5XSlcclxuXHJcblxyXG5cclxuICBjb25zdCBoYXNBbnlCYXNlID1cclxuICAgIChBcnJheS5pc0FycmF5KGRhZG9zRnVsbCkgJiYgZGFkb3NGdWxsLmxlbmd0aCA+IDApIHx8XHJcbiAgICAoQXJyYXkuaXNBcnJheShkYWRvc0ZhaXhhQVBJKSAmJiBkYWRvc0ZhaXhhQVBJLmxlbmd0aCA+IDApXHJcblxyXG4gIC8vID09PT09IGZpbHRyb3MgcGFyYSBvIHNlYXJjaCBkZSBtaW5lcmFpc1xyXG4gIGNvbnN0IGxpc3RhRmlsdHJhZGEgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IHEgPSAoYnVzY2FNaW5lcmFsIHx8ICcnKS5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1xccHtEaWFjcml0aWN9L2d1LCAnJykudG9Mb3dlckNhc2UoKVxyXG4gICAgcmV0dXJuIChsaXN0YU1pbmVyYWlzIHx8IFtdKS5maWx0ZXIobSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vbWUgPSAobS5ub21lTWluZXJhbCB8fCAnJykubm9ybWFsaXplKCdORkQnKS5yZXBsYWNlKC9cXHB7RGlhY3JpdGljfS9ndSwgJycpLnRvTG93ZXJDYXNlKClcclxuICAgICAgcmV0dXJuIG5vbWUuaW5jbHVkZXMocSlcclxuICAgIH0pXHJcbiAgfSwgW2xpc3RhTWluZXJhaXMsIGJ1c2NhTWluZXJhbF0pXHJcblxyXG4gIC8vIHByaW1laXJhcyA0IG9ww6fDtWVzICsgYSB0ZXJjZWlyYSBsaW5oYSAow5psdGltYSlcclxuICBjb25zdCBGSVJTVF9GT1VSID0gTUlORVJBTF9PUFRJT05TLnNsaWNlKDAsIDQpXHJcbiAgY29uc3QgTEFTVF9PTkUgPSBNSU5FUkFMX09QVElPTlMuc2xpY2UoNClcclxuXHJcbiAgY29uc3QgbGVnZW5kQWdyID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoY2F0ZWdvcmlhICE9PSAnbWluZXJhbHMnKSByZXR1cm4gbnVsbFxyXG4gICAgaWYgKCFtaW5lcmFsQW5hbGlzZSB8fCAhbWluZXJhbFNlbGVjaW9uYWRvIHx8ICFhZ3J1cGFkb3IpIHJldHVybiBudWxsXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYWdydXBhZG9yRGFkb3MpIHx8IGFncnVwYWRvckRhZG9zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcclxuXHJcbiAgICBjb25zdCBmaWVsZCA9IGFncnVwYWRvciA9PT0gJ2FuYWxpc2UnID8gJ3F0QW5hbGlzZScgOiAoYWdydXBhZG9yID09PSAnbWVkaWEnID8gJ3ZhbG9yTWVkaW8nIDogJ3ZhbG9yTWF4aW1vJylcclxuICAgIGNvbnN0IGJhc2UgPSAod2l0aEludGVyZXN0ICYmIGZhaXhhU2V0LnNpemUgPiAwKVxyXG4gICAgICA/IGFncnVwYWRvckRhZG9zLmZpbHRlcihkID0+IGZhaXhhU2V0LmhhcyhOdW1iZXIoZC5jb2RpZ29Qb2NvKSkpXHJcbiAgICAgIDogYWdydXBhZG9yRGFkb3NcclxuXHJcbiAgICBpZiAoIWJhc2UubGVuZ3RoKSByZXR1cm4geyBtaW46IDAsIG1heDogMCwgaXNQZXJjZW50OiBhZ3J1cGFkb3IgIT09ICdhbmFsaXNlJywgdGl0bGU6ICcnIH1cclxuXHJcbiAgICBsZXQgdmFscyA9IGJhc2UubWFwKChkOiBhbnkpID0+IE51bWJlcihkW2ZpZWxkXSB8fCAwKSlcclxuICAgIGlmIChhZ3J1cGFkb3IgIT09ICdhbmFsaXNlJykgdmFscyA9IHZhbHMubWFwKHYgPT4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCB2KSkpIC8vIHRyYXZhIDAuLjEwMFxyXG4gICAgY29uc3QgbWluID0gMFxyXG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4udmFscywgMClcclxuXHJcbiAgICBjb25zdCB0aXRsZUJhc2UgPVxyXG4gICAgICBhZ3J1cGFkb3IgPT09ICdhbmFsaXNlJyA/ICdBbsOhbGlzZXMnIDpcclxuICAgICAgYWdydXBhZG9yID09PSAnbWVkaWEnICAgPyBgTcOpZGlhIGRlICR7bWluZXJhbFNlbGVjaW9uYWRvLm5vbWVNaW5lcmFsfWAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBNw6F4aW1hIGRlICR7bWluZXJhbFNlbGVjaW9uYWRvLm5vbWVNaW5lcmFsfWBcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtaW4sIG1heCxcclxuICAgICAgaXNQZXJjZW50OiBhZ3J1cGFkb3IgIT09ICdhbmFsaXNlJyxcclxuICAgICAgdGl0bGU6ICh3aXRoSW50ZXJlc3QgPyAnSW50ZXJ2YWxvIGRlIEludGVyZXNzZSAtICcgOiAnJykgKyB0aXRsZUJhc2VcclxuICAgIH1cclxuICB9LCBbY2F0ZWdvcmlhLCBtaW5lcmFsQW5hbGlzZSwgbWluZXJhbFNlbGVjaW9uYWRvLCBhZ3J1cGFkb3IsIGFncnVwYWRvckRhZG9zLCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0XSlcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNzcz17d3JhcHBlclN0eWxlfSByZWY9e3Jvb3RSZWZ9PlxyXG4gICAgICA8R2xvYmFsIHN0eWxlcz17Z2xvYmFsUGFuZWxTdHlsZX0gLz5cclxuICAgICAgPGxhYmVsIGNzcz17dGl0bGVTdHlsZX0+U2VsZWNpb25lIGEgZGlzdHJpYnVpw6fDo288L2xhYmVsPlxyXG5cclxuICAgICAgPHNlbGVjdCBjc3M9e3NlbGVjdFN0eWxlfSB2YWx1ZT17Y2F0ZWdvcmlhfSBvbkNoYW5nZT17ZSA9PiBzZXRDYXRlZ29yaWEoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPScnPlNlbGVjaW9uZSBvIHRpcG88L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPSdzYW1wbGUnPkRpc3RyaWJ1acOnw6NvIGRlIGFtb3N0cmFzPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nbWluZXJhbHMnPkRpc3RyaWJ1acOnw6NvIGRlIE1pbmVyYWlzPC9vcHRpb24+XHJcbiAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgey8qID09PT09PT09IFVJOiBBTU9TVFJBUyA9PT09PT09PSAqL31cclxuICAgICAge2NhdGVnb3JpYSA9PT0gJ3NhbXBsZScgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7bG9hZGluZ0Z1bGwgJiYgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDggfX0+Q2FycmVnYW5kbyBiYXNl4oCmPC9kaXY+fVxyXG4gICAgICAgICAgeyEhZXJyb3JGdWxsICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjYjAwJywgbWFyZ2luQm90dG9tOiA4IH19PkVycm86IHtlcnJvckZ1bGx9PC9kaXY+fVxyXG4gICAgICAgICAge3dpdGhJbnRlcmVzdCAmJiBsb2FkaW5nSW50ZXJlc3QgJiYgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDggfX0+Q2FycmVnYW5kbyBpbnRlcnZhbG8gZGUgaW50ZXJlc3Nl4oCmPC9kaXY+fVxyXG4gICAgICAgICAge3dpdGhJbnRlcmVzdCAmJiAhIWVycm9ySW50ZXJlc3QgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogJyNiMDAnLCBtYXJnaW5Cb3R0b206IDggfX0+RXJybzoge2Vycm9ySW50ZXJlc3R9PC9kaXY+fVxyXG5cclxuICAgICAgICAgIHtoYXNBbnlCYXNlICYmIChcclxuICAgICAgICAgICAgPGRpdiBjc3M9e2xpc3RTdHlsZX0+XHJcbiAgICAgICAgICAgICAge0xJU1RfVFlQRVMubWFwKHQgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGtleT17dH0gY3NzPXtjaGVja2JveExhYmVsU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RpcG9zU2VsLmluY2x1ZGVzKHQpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0VGlwb3NTZWwocHJldiA9PiBwcmV2LmluY2x1ZGVzKHQpID8gcHJldi5maWx0ZXIoeCA9PiB4ICE9PSB0KSA6IFsuLi5wcmV2LCB0XSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxibFwiPnt0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdC5zbGljZSgxKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogPT09PT09PT0gVUk6IE1JTkVSQUlTID09PT09PT09ICovfVxyXG4gICAgICB7Y2F0ZWdvcmlhID09PSAnbWluZXJhbHMnICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgey8qIDEpIHLDoWRpb3MgcHJpbmNpcGFpcyBEUlgvUWVtc2Nhbi9Ub2RhcyAobWFudMOpbSBjb21vIGVzdGF2YSkgKi99XHJcbiAgICAgICAgICA8ZGl2IGNzcz17bWluZXJhbHNMaXN0U3R5bGV9PlxyXG4gICAgICAgICAgICB7TUlORVJBTF9PUFRJT05TLm1hcChvcHQgPT4gKFxyXG4gICAgICAgICAgICAgIDxsYWJlbCBrZXk9e29wdC52YWx1ZX0gY3NzPXtjaGVja2JveExhYmVsU3R5bGV9IGRhdGEta2V5PXtvcHQudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJtaW5lcmFsLWFuYWxpc2VcIlxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXttaW5lcmFsQW5hbGlzZSA9PT0gb3B0LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0TWluZXJhbEFuYWxpc2Uob3B0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYmxcIj57b3B0LmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtsb2FkaW5nTWluZXJhaXMgJiYgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDggfX0+Q2FycmVnYW5kbyBtaW5lcmFpc+KApjwvZGl2Pn1cclxuICAgICAgICAgIHshIWVycm9yTWluZXJhaXMgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogJyNiMDAnLCBtYXJnaW5Cb3R0b206IDggfX0+RXJybzoge2Vycm9yTWluZXJhaXN9PC9kaXY+fVxyXG5cclxuICAgICAgICAgIHsvKiAzKSBUVURPIGFiYWl4byBkbyBUb3RhbCBlbnRyYSBubyBTQ1JPTEwgKGxpc3RhICsgcsOhZGlvcyArIHJhbXBhICsgY2hlY2tib3hlcykgKi99XHJcbiAgICAgICAgICA8ZGl2IGNzcz17W2FmdGVyUmFkaW9zQ29sU3R5bGUsIGNoYXJ0c0NvbXBhY3RdfT5cclxuICAgICAgICAgICAgPGRpdiBjc3M9e3Njcm9sbEFyZWFTdHlsZX0+XHJcbiAgICAgICAgICAgICAge3N1bW1hcnlNaW5lcmFscyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNzcz17c3VtbWFyeUxpc3RTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY3NzPXtsZWdlbmRIZWFkZXJTdHlsZX0+e3N1bW1hcnlNaW5lcmFscy50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAge3N1bW1hcnlNaW5lcmFscy5yb3dzLm1hcCgociwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BtaW4tdG90YWwtJHtpZHh9YH0gY3NzPXtzdW1tYXJ5SXRlbVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY3NzPXtidWJibGVCb3hTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9e3Iuc2l6ZX0gaGVpZ2h0PXtyLnNpemV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9e3Iuc2l6ZS8yfSBjeT17ci5zaXplLzJ9IHI9e3Iuc2l6ZS8yfSBmaWxsPXtyLmNvcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNzcz17cmFuZ2VMYWJlbFN0eWxlfT57ci5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAge21pbmVyYWxBbmFsaXNlICYmIChcclxuICAgICAgICAgICAgICAgIDxNaW5lcmFsc0xpc3RQYW5lbFxyXG4gICAgICAgICAgICAgICAgICBtaW5lcmFsQW5hbGlzZT17bWluZXJhbEFuYWxpc2V9XHJcbiAgICAgICAgICAgICAgICAgIGxpc3RhTWluZXJhaXM9e2xpc3RhTWluZXJhaXN9XHJcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmdNaW5lcmFpcz17bG9hZGluZ01pbmVyYWlzfVxyXG4gICAgICAgICAgICAgICAgICBlcnJvck1pbmVyYWlzPXtlcnJvck1pbmVyYWlzfVxyXG4gICAgICAgICAgICAgICAgICBidXNjYU1pbmVyYWw9e2J1c2NhTWluZXJhbH1cclxuICAgICAgICAgICAgICAgICAgc2V0QnVzY2FNaW5lcmFsPXtzZXRCdXNjYU1pbmVyYWx9XHJcbiAgICAgICAgICAgICAgICAgIG1pbmVyYWxTZWxlY2lvbmFkbz17bWluZXJhbFNlbGVjaW9uYWRvfVxyXG4gICAgICAgICAgICAgICAgICBzZXRNaW5lcmFsU2VsZWNpb25hZG89e3NldE1pbmVyYWxTZWxlY2lvbmFkb31cclxuICAgICAgICAgICAgICAgICAgYWdydXBhZG9yPXthZ3J1cGFkb3J9XHJcbiAgICAgICAgICAgICAgICAgIHNldEFncnVwYWRvcj17c2V0QWdydXBhZG9yfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICB7bGVnZW5kQWdyICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICA8R3JhZGllbnRMZWdlbmRcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17bGVnZW5kQWdyLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1pbj17bGVnZW5kQWdyLm1pbn1cclxuICAgICAgICAgICAgICAgICAgICBtYXg9e2xlZ2VuZEFnci5tYXh9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNQZXJjZW50PXtsZWdlbmRBZ3IuaXNQZXJjZW50fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PjxkaXYgY3NzPXtmb290ZXJEb2NrU3R5bGV9PlxyXG4gICAgICAgICAgICAgIHsoc3VtbWFyeU1pbmVyYWxzIHx8IGxlZ2VuZEFnciB8fCBzaG93V2l0aEludGVyZXN0KSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNzcz17Zm9vdGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICB7KHN1bW1hcnlNaW5lcmFscyB8fCBsZWdlbmRBZ3IpICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY3NzPXtmb290ZXJMYWJlbFN0eWxlfSB0aXRsZT1cIkV4aWJpciB0YW1iw6ltIGNsYXNzZXMgc2VtIHBvw6dvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Nob3dFbXB0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2hvd0VtcHR5KGUudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIEV4aWJpciBjbGFzc2VzIHZhemlhc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7c2hvd1dpdGhJbnRlcmVzdCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNzcz17Zm9vdGVyTGFiZWxTdHlsZUludGVyZXNzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlF1YW5kbyBtYXJjYWRvLCBhcGxpY2EgbyBmaWx0cm8gZGUgSW50ZXJ2YWxvIGRlIEludGVyZXNzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3dpdGhJbnRlcmVzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50ID0gdHJ1ZTsgc2V0V2l0aEludGVyZXN0KGUudGFyZ2V0LmNoZWNrZWQpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSW50ZXJ2YWxvIGRlIEludGVyZXNzZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiA9PT09PT09PSBTdW3DoXJpbyBBTU9TVFJBUyA9PT09PT09PSAqL31cclxuICAgICAge2NhdGVnb3JpYSA9PT0gJ3NhbXBsZScgJiYgc3VtbWFyeUdyb3Vwcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IGNzcz17c3VtbWFyeUxpc3RTdHlsZX0+XHJcbiAgICAgICAgICB7c3VtbWFyeUdyb3Vwcy5tYXAoZ3JvdXAgPT4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtncm91cC50aXBvfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNzcz17bGVnZW5kSGVhZGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgeyh3aXRoSW50ZXJlc3QgPyAnSW50ZXJ2YWxvIGRlIEludGVyZXNzZSAtICcgOiAnJyl9XHJcbiAgICAgICAgICAgICAgICB7Z3JvdXAudGlwby5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGdyb3VwLnRpcG8uc2xpY2UoMSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2dyb3VwLnJvd3MubWFwKChyLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtncm91cC50aXBvfS0ke2lkeH1gfSBjc3M9e3N1bW1hcnlJdGVtU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNzcz17YnViYmxlQm94U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9e3Iuc2l6ZX0gaGVpZ2h0PXtyLnNpemV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17ci5zaXplIC8gMn0gY3k9e3Iuc2l6ZSAvIDJ9IHI9e3Iuc2l6ZSAvIDJ9IGZpbGw9e3IuY29yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY3NzPXtyYW5nZUxhYmVsU3R5bGV9PntyLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8SmltdU1hcFZpZXdDb21wb25lbnQgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfSBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3NldEppbXVNYXBWaWV3fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=