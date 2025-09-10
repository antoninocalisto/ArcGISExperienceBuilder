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

/***/ "./your-extensions/widgets/mapa-de-distribuicao-v3/src/runtime/utils.ts":
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/mapa-de-distribuicao-v3/src/runtime/utils.ts ***!
  \******************************************************************************/
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
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/mapa-de-distribuicao-v3/src/runtime/widget.tsx ***!
  \********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/mapa-de-distribuicao-v3/src/runtime/utils.ts");
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
const DEFAULT_HEIGHT = 650; // <<< AJUSTE: altura inicial maior
/* ===== Campos por tipo ===== */
const TYPE_FIELD = {
    lateral: 'totalAmostrasLaterais',
    testemunho: 'totalTestemunhos',
    calha: 'totalCalhas',
    plug: 'totalPlugs',
    'whole core': 'totalWholeCore'
};
const LIST_TYPES = Object.keys(TYPE_FIELD);
const log10 = (x) => Math.log10 ? Math.log10(x) : Math.log(x) / Math.LN10;
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
        .filter(x => !!x.codigoPoco);
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
    overflow: visible !important;   /* <<< sem scroll no painel */
  }
`;
const legendHeaderStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `font-weight:600;margin:4px 0;font-size:.85rem;line-height:1.1;`;
const bubbleBoxStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `width:${MAX_BUBBLE}px;height:${MAX_BUBBLE}px;display:flex;align-items:center;justify-content:center;margin-right:8px;`;
const wrapperStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `position:relative;width:100%;height:100%;background:#fff;border:1px solid #ddd;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,.1);padding:16px;overflow:hidden;`;
const titleStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `font-weight:600;margin-bottom:4px;display:block;`;
const selectStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `width:100%;padding:6px 8px;margin-bottom:12px;border:1px solid #ccc;border-radius:4px;`;
/* <<< AJUSTE: container da lista em GRID com wrap automático */
/* container da lista: 2 colunas confortáveis e sem sobreposição */
const listStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  /* nada de scroll aqui */
  overflow: visible;                /* <<< sem scroll */
  margin-bottom: 8px;               /* ↓ */
  padding: 4px;                     /* ↓ */
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 4px;

  display: grid;

  /* DUAS LINHAS FIXAS */
  grid-template-rows: repeat(2, minmax(24px, auto));

  /* Preenche por colunas (1ª linha, 2ª linha, depois nova coluna) */
  grid-auto-flow: column;

  /* Colunas estreitas para caber mais conjuntos */
  grid-auto-columns: minmax(105px, 1fr); /* ajuste fino: 100–120px */

  /* Espaços MÍNIMOS entre conjuntos */
  column-gap: 4px;  /* <<< menor espaço horizontal entre conjuntos */
  row-gap: 2px;     /* <<< menor espaço vertical entre as 2 linhas */

  align-items: start;
`;
/* cada item: checkbox + texto LADO A LADO e clicável */
/* cada item: NÃO deixa “vazar” para a coluna ao lado */
const checkboxLabelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  display: inline-grid;
  grid-template-columns: auto 1fr;  /* checkbox | texto */
  align-items: center;

  column-gap: 1px;
  padding: 1px 1px;                 /* ↑ adiciona 1px de altura útil */
  border-radius: 3px;
  cursor: pointer;
  user-select: none;

  min-width: 0;
  box-sizing: border-box;
  overflow: hidden;

  & > * { margin: 0 !important; padding: 0 !important; }

  input[type='checkbox'] {
    width: 14px; height: 14px;
    margin: 0 !important;
    flex: 0 0 auto;
  }

  .lbl {
    min-width: 0;
    overflow: hidden;               /* só horizontal (não corta vertical) */
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .84rem;
    line-height: 1.15;              /* ↑ evita cortar “perna” do G */
    padding-bottom: 1px;            /* ↑ micro-respiro extra */
  }
`;
/* <<< AJUSTE: cada item alinhado, sem margin-bottom (o grid controla os gaps) */
const checkboxRowStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const summaryListStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `max-height:300px;overflow-y:auto;margin-top:8px;padding:8px 8px 36px;background:#fff;border:1px solid #ddd;border-radius:4px;position:relative;`;
const summaryItemStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `display:flex;align-items:center;margin:2px;`;
const rangeLabelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `font-size:.78rem;line-height:1.1;`;
/* checkboxes de rodapé: coluna e próximos */
const footerStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  position: sticky;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #eee;
  padding: 4px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;
const footerLabelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  display: flex;
  align-items: center;
  gap: 6px;
  padding-left: .5em;
  cursor: pointer;
  font-size: .9rem;
`;
const footerLabelStyleInteresse = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  display: flex;
  align-items: center;
  gap: 6px;
  padding-left: .5em;
  cursor: pointer;
  font-size: .9rem;
`;
/* ===== Sumário ===== */
function calcularQuebras(dados, colorFill) {
    const valores = dados.map(p => p.total);
    let min = Math.min(...valores);
    let max = Math.max(...valores);
    const info = [];
    if (!isFinite(min) || !isFinite(max))
        return info;
    if (min === 0 && max === 0) {
        info.push({ label: 'Não há dados suficientes', size: 0, cor: colorFill, count: 0 });
    }
    else {
        const zerados = valores.filter(v => v === 0).length;
        const naoZerados = valores.filter(v => v > 0);
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
            const count = naoZerados.filter(v => v >= minValue && v <= maxValue).length;
            const label = `${minValue} |---| ${maxValue} (${count} poço${count > 1 ? 's' : ''})`;
            const size = 6 + i * (maxSize / numClasses);
            info.push({ label, size, cor: colorFill, count });
        }
    }
    return info;
}
/* ===== DOM helpers ===== */
function findClosestDialog(el) {
    let cur = el;
    while (cur) {
        if (cur.getAttribute && cur.getAttribute('role') === 'dialog')
            return cur;
        cur = cur.parentElement;
    }
    return null;
}
function getDialogBodies(dlg) {
    return Array.from(dlg.querySelectorAll('.jimu-dialog__body, .jimu-dialog-body, .dialog-body, .modal-body, .jimu-dialog__content, .jimu-dialog__content'));
}
function isDialogHidden(dlg) {
    const cs = getComputedStyle(dlg);
    return dlg.getAttribute('aria-hidden') === 'true' || cs.display === 'none' || cs.visibility === 'hidden';
}
/* ===== Right anchor ===== */
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
        if (s.getPropertyValue('width') !== `${DEFAULT_WIDTH}px`) {
            s.setProperty('width', `${DEFAULT_WIDTH}px`, 'important');
        }
        if (s.getPropertyValue('height') !== `${DEFAULT_HEIGHT}px`)
            s.setProperty('height', `${DEFAULT_HEIGHT}px`, 'important'); // <<< AJUSTE: usa DEFAULT_HEIGHT
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
                if (mutations.some(m => m.attributeName === 'style')) {
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
/* ===== IDs ===== */
const layerIdFor = (tipo) => `amostras_${tipo.replace(/\s+/g, '_')}`;
/* ===== Map helpers ===== */
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
        const lyr = view.map.findLayerById(layerIdFor(tipo));
        if (lyr)
            view.map.remove(lyr);
    }
    catch (_a) { }
}
/* === Desativa rótulos dos clusters === */
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
        if (Array.isArray(lyr.sublayers)) {
            ;
            lyr.sublayers.forEach((sl) => disableClusterNumbers(sl));
        }
    }
    catch ( /* noop */_a) { /* noop */ }
}
/* ===== Componente ===== */
function Widget(props) {
    var _a;
    const [jimuMapView, setJimuMapView] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState();
    const [categoria, setCategoria] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(''); // select
    const [tiposSel, setTiposSel] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]); // checkboxes
    const [showEmpty, setShowEmpty] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    // Interesse
    const [withInterest, setWithInterest] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [showWithInterest, setshowWithInterest] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [faixaSet, setFaixaSet] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(() => new Set((Array.isArray(props === null || props === void 0 ? void 0 : props.codigosFaixaInteresse) ? props.codigosFaixaInteresse : [])
        .map((v) => Number(v)).filter((v) => !isNaN(v))));
    // Bases
    const [dadosFull, setDadosFull] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [dadosFaixaAPI, setDadosFaixaAPI] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    // Loading / erros
    const [loadingFull, setLoadingFull] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [loadingInterest, setLoadingInterest] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [errorFull, setErrorFull] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('');
    const [errorInterest, setErrorInterest] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('');
    const rootRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    useForceRightPosition(rootRef);
    // flag para respeitar escolha do usuário
    const interestManualRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(false);
    /* ======== detecção do log/concatenação ======== */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const onLogLike = (ev) => {
            const d = ev === null || ev === void 0 ? void 0 : ev.data;
            if (d["type"] === 'fetchDistribuicaoAmostras:ok') {
                const s = d.toString();
                const hasTag = /\[Explora\]\[CG\]/i.test(s);
                const existsTrue = /checkbox\s+existe\?\s*true/i.test(s);
                const visibleTrue = /vis.*vel\?\s*true/i.test(s);
                if (d["startWithInterest"]) {
                    setshowWithInterest(true);
                    if (!interestManualRef.current)
                        setWithInterest(true);
                }
            }
            if (d && typeof d === 'object' && d.type === 'explora-cg-visibility') {
                if (d.exists === true && d.visible === true) {
                    setshowWithInterest(true);
                    if (!interestManualRef.current)
                        setWithInterest(true);
                }
            }
        };
        window.addEventListener('message', onLogLike);
        return () => window.removeEventListener('message', onLogLike);
    }, []);
    /* Mensagem de config (fallback) */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const onCfg = (ev) => {
            var _a;
            const d = (ev === null || ev === void 0 ? void 0 : ev.data) || {};
            if ((d === null || d === void 0 ? void 0 : d.type) === 'config' && ('startWithInterest' in d || 'concatGeologica' in d)) {
                const flag = !!((_a = d.startWithInterest) !== null && _a !== void 0 ? _a : d.concatGeologica);
                setshowWithInterest(flag);
                if (flag && !interestManualRef.current)
                    setWithInterest(true);
            }
        };
        window.addEventListener('message', onCfg);
        return () => window.removeEventListener('message', onCfg);
    }, []);
    /* Recebe faixa de interesse */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const onMsg = (ev) => {
            const data = ev === null || ev === void 0 ? void 0 : ev.data;
            if (!data || data.type !== 'faixa-interesse' || !Array.isArray(data.codigosPocos))
                return;
            const nums = data.codigosPocos.map((v) => Number(v)).filter(v => !isNaN(v));
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
    /* Se já vier códigos via props */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (faixaSet.size > 0) {
            setshowWithInterest(true);
            if (!interestManualRef.current)
                setWithInterest(true);
        }
    }, [faixaSet]);
    /* Carrega base respeitando withInterest */
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
                    if (!cancelled) {
                        setDadosFull(data);
                    }
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
    /* Fallback: buscar base do interesse quando necessário */
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
    /* Desenho de camadas (e desativação dos números de cluster) */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        var _a;
        const jmv = jimuMapView;
        if (!(jmv === null || jmv === void 0 ? void 0 : jmv.view))
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
            // limpa camada desse tipo e redesenha se houver dados
            clearLayerOfTipo(view, tipo);
            if (dados.length === 0)
                return;
            const colorFill = _utils__WEBPACK_IMPORTED_MODULE_2__.coresTipos[tipo] || 'rgba(0,0,0,0.5)';
            const idCamada = layerIdFor(tipo);
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
    }, [jimuMapView, tiposSel, withInterest, faixaSet, dadosFull, dadosFaixaAPI]);
    // Reset e fechar
    const resetUiState = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => {
        setTiposSel([]);
        setShowEmpty(false);
        setWithInterest(false);
        setCategoria('');
        setDadosFull(null);
        setDadosFaixaAPI(null);
        interestManualRef.current = false;
    }, []);
    const handleClose = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => {
        const view = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view;
        if (view)
            clearAmostras(view);
        resetUiState();
    }, [jimuMapView, resetUiState]);
    // Liga botão Fechar
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
    // Fechou por ocultar diálogo
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
    /** Sumário */
    const summaryGroups = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        var _a;
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
    }, [tiposSel, showEmpty, withInterest, faixaSet, dadosFull, dadosFaixaAPI]);
    /* ===== Render ===== */
    const hasAnyBase = (Array.isArray(dadosFull) && dadosFull.length > 0) ||
        (Array.isArray(dadosFaixaAPI) && dadosFaixaAPI.length > 0);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: wrapperStyle, ref: rootRef },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.Global, { styles: globalPanelStyle }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: titleStyle }, "Selecione a distribui\u00E7\u00E3o"),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", { css: selectStyle, value: categoria, onChange: e => setCategoria(e.target.value) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: '' }, "Selecione o tipo"),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 'sample' }, "Distribui\u00E7\u00E3o de amostra")),
        categoria === 'sample' && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            loadingFull && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: 8 } }, "Carregando base\u2026"),
            !!errorFull && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#b00', marginBottom: 8 } },
                "Erro: ",
                errorFull),
            withInterest && loadingInterest && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: 8 } }, "Carregando intervalo de interesse\u2026"),
            withInterest && !!errorInterest && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#b00', marginBottom: 8 } },
                "Erro: ",
                errorInterest),
            hasAnyBase && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: listStyle }, LIST_TYPES.map(t => (
            // depois
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { key: t, css: checkboxLabelStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: tiposSel.includes(t), onChange: () => setTiposSel(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]) }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "lbl" }, t.charAt(0).toUpperCase() + t.slice(1))))))))),
        summaryGroups.length > 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: summaryListStyle }, summaryGroups.map(group => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, { key: group.tipo },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: legendHeaderStyle },
                (withInterest ? 'Intervalo de Interesse - ' : ''),
                group.tipo.charAt(0).toUpperCase() + group.tipo.slice(1)),
            group.rows.map((r, idx) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: `${group.tipo}-${idx}`, css: summaryItemStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: bubbleBoxStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: r.size, height: r.size },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: r.size / 2, cy: r.size / 2, r: r.size / 2, fill: r.cor }))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { css: rangeLabelStyle }, r.label))))))))),
        (summaryGroups.length > 0 || showWithInterest) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: footerStyle },
            summaryGroups.length > 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: footerLabelStyle, title: "Exibir tamb\u00E9m classes sem po\u00E7os" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: showEmpty, onChange: e => setShowEmpty(e.target.checked) }),
                "Exibir classes vazias")),
            showWithInterest && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: footerLabelStyleInteresse, title: "Quando marcado, aplica o filtro de Intervalo de Interesse (c\u00F3digos vindos do Explora ou via API)" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: withInterest, onChange: e => {
                        interestManualRef.current = true;
                        setWithInterest(e.target.checked);
                    } }),
                "Intervalo de interesse")))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: setJimuMapView })));
} // Melhoramento
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXBhLWRlLWRpc3RyaWJ1aWNhby12My9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxXQUFXO0FBQ2dEO0FBQ1g7QUFDNEI7QUFDSjtBQUV4RSxNQUFNLFVBQVUsR0FBMkI7SUFDekMsT0FBTyxFQUFFLHdCQUF3QjtJQUNqQyxVQUFVLEVBQUUsd0JBQXdCO0lBQ3BDLEtBQUssRUFBRSx5QkFBeUI7SUFDaEMsSUFBSSxFQUFFLDBCQUEwQjtJQUNoQyxZQUFZLEVBQUUsd0JBQXdCO0NBQ3ZDO0FBRU0sU0FBZSx1QkFBdUI7eURBQUMsRUFDNUMsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFNBQVMsRUFDVCxZQUFZLEVBUWI7UUFDQyxNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSTtRQUM3QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRztRQUVwQixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDdEQsTUFBTSxVQUFVLEdBQUcsb0JBQW9CLE9BQU8sR0FBRztRQUVqRCxNQUFNLFdBQVcsR0FBRyxJQUFJLHdFQUFZLENBQUM7WUFDbkMsR0FBRyxFQUFFLHlGQUF5RjtZQUM5RixvQkFBb0IsRUFBRSxVQUFVO1lBQ2hDLEtBQUssRUFBRSxPQUFPO1lBQ2QsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztRQUVGLE1BQU0sV0FBVyxDQUFDLElBQUksRUFBRTtRQUV4QixNQUFNLFdBQVcsR0FBRyxNQUFNLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDbEQsS0FBSyxFQUFF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REFBSyxHQUFHLEVBQUUsV0FBVztZQUNsQixhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUMzQiwwREFBTyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFDLDJDQUFpQztnQkFDbkUsMERBQ0UsSUFBSSxFQUFDLFVBQVUsRUFDZixPQUFPLEVBQUUsU0FBUyxFQUNsQixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FDN0M7d0NBRUksQ0FDVDtZQUVBLGdCQUFnQixJQUFJLENBQ25CLDBEQUFPLEdBQUcsRUFBRSx5QkFBeUIsRUFBRSxLQUFLLEVBQUMsdUdBQWtHO2dCQUM3SSwwREFDRSxJQUFJLEVBQUMsVUFBVSxFQUNmLE9BQU8sRUFBRSxZQUFZLEVBQ3JCLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRTt3QkFDWixpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsSUFBSTt3QkFDaEMsZUFBZSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUNuQyxDQUFDLEdBQ0Q7eUNBRUksQ0FDVCxDQUNHLENBQ1A7UUFFRCwrQ0FBQyw2REFBb0IsSUFBQyxjQUFjLEVBQUUsV0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxHQUFJLENBQ3BHLENBQ1A7QUFDSCxDQUFDLENBQUMsZUFBZTtBQUVULFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcGEtZGUtZGlzdHJpYnVpY2FvLXYzL3NyYy9ydW50aW1lL3V0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3JlbmRlcmVycy9DbGFzc0JyZWFrc1JlbmRlcmVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3N5bWJvbHMvU2ltcGxlTWFya2VyU3ltYm9sXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3dpZGdldHMvTGVnZW5kXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXBhLWRlLWRpc3RyaWJ1aWNhby12My9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHV0aWxzLnRzXHJcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvRmVhdHVyZUxheWVyXCJcclxuaW1wb3J0IExlZ2VuZCBmcm9tIFwiQGFyY2dpcy9jb3JlL3dpZGdldHMvTGVnZW5kXCJcclxuaW1wb3J0IENsYXNzQnJlYWtzUmVuZGVyZXIgZnJvbSBcIkBhcmNnaXMvY29yZS9yZW5kZXJlcnMvQ2xhc3NCcmVha3NSZW5kZXJlclwiXHJcbmltcG9ydCBTaW1wbGVNYXJrZXJTeW1ib2wgZnJvbSBcIkBhcmNnaXMvY29yZS9zeW1ib2xzL1NpbXBsZU1hcmtlclN5bWJvbFwiXHJcblxyXG5jb25zdCBjb3Jlc1RpcG9zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gIGxhdGVyYWw6IFwicmdiYSg4OCwgMTksIDI1MiwgMC43KVwiLFxyXG4gIHRlc3RlbXVuaG86IFwicmdiYSgyNTUsIDAsIDI1NSwgMC43KVwiLFxyXG4gIGNhbGhhOiBcInJnYmEoMjQ1LCAyMDEsIDM4LCAwLjcpXCIsXHJcbiAgcGx1ZzogXCJyZ2JhKDEyNSwgMjUzLCAxNDgsIDAuNylcIixcclxuICBcIndob2xlIGNvcmVcIjogXCJyZ2JhKDI1NSwgNDMsIDI0LCAwLjcpXCJcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCKHtcclxuICBqaW11TWFwVmlldyxcclxuICBkYWRvcyxcclxuICBjb2xvckZpbGwsXHJcbiAgaWRDYW1hZGEsXHJcbiAgaWRMZWdlbmRhLFxyXG4gIHRpdGxlTGVnZW5kYVxyXG59OiB7XHJcbiAgamltdU1hcFZpZXc6IGFueVxyXG4gIGRhZG9zOiB7IGNvZGlnb1BvY286IG51bWJlcjsgdG90YWw6IG51bWJlciB9W11cclxuICBjb2xvckZpbGw6IHN0cmluZ1xyXG4gIGlkQ2FtYWRhOiBzdHJpbmdcclxuICBpZExlZ2VuZGE6IHN0cmluZ1xyXG4gIHRpdGxlTGVnZW5kYTogc3RyaW5nXHJcbn0pIHtcclxuICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlld1xyXG4gIGNvbnN0IG1hcCA9IHZpZXcubWFwXHJcblxyXG4gIGNvbnN0IGNvZGlnb3MgPSBkYWRvcy5tYXAocCA9PiBwLmNvZGlnb1BvY28pLmpvaW4oJywnKVxyXG4gIGNvbnN0IGV4cHJlc3Npb24gPSBgUE9DT19DRF9QT0NPIElOICgke2NvZGlnb3N9KWBcclxuXHJcbiAgY29uc3QgY2FtYWRhUG/Dp29zID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICB1cmw6ICdodHRwczovL2Jhc2VnaXMucGV0cm9icmFzLmNvbS5ici9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9FWFBMT1JBL0ZlYXR1cmVfUG9jb3MvTWFwU2VydmVyLzAnLFxyXG4gICAgZGVmaW5pdGlvbkV4cHJlc3Npb246IGV4cHJlc3Npb24sXHJcbiAgICB0aXRsZTogJ1Bvw6dvcycsXHJcbiAgICBvdXRGaWVsZHM6IFsnKiddLFxyXG4gICAgdmlzaWJsZTogZmFsc2VcclxuICB9KVxyXG5cclxuICBhd2FpdCBjYW1hZGFQb8Onb3MubG9hZCgpXHJcblxyXG4gIGNvbnN0IHF1ZXJ5UmVzdWx0ID0gYXdhaXQgY2FtYWRhUG/Dp29zLnF1ZXJ5RmVhdHVyZXMoe1xyXG4gICAgd2hlcmU6IGV4cHJlc3Npb24sXHJcbiAgICBvdXRGaWVsZHM6IFsnKiddLFxyXG4gICAgcmV0dXJuR2VvbWV0cnk6IHRydWVcclxuICB9KVxyXG5cclxuICBjb25zdCBmZWF0dXJlcyA9IHF1ZXJ5UmVzdWx0LmZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4ge1xyXG4gICAgY29uc3QgZGFkbyA9IGRhZG9zLmZpbmQocCA9PiBwLmNvZGlnb1BvY28gPT09IGZlYXR1cmUuYXR0cmlidXRlcy5QT0NPX0NEX1BPQ08pXHJcbiAgICBmZWF0dXJlLmF0dHJpYnV0ZXMuUE9DT19NRF9NRVJJRF9DRU5UID0gZGFkbyA/IGRhZG8udG90YWwgOiAwXHJcbiAgICByZXR1cm4gZmVhdHVyZVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHZhbG9yZXMgPSBkYWRvcy5tYXAocCA9PiBwLnRvdGFsKVxyXG4gIGxldCBtaW4gPSBNYXRoLm1pbiguLi52YWxvcmVzKVxyXG4gIGxldCBtYXggPSBNYXRoLm1heCguLi52YWxvcmVzKVxyXG5cclxuICBjb25zdCBpbmZvID0gW11cclxuICBjb25zdCBvdXRsaW5lID0geyBjb2xvcjogXCJibGFja1wiLCB3aWR0aDogXCIxcHhcIiB9XHJcblxyXG4gIGlmIChtaW4gPT09IG1heCAmJiBtaW4gPT09IDApIHtcclxuICAgIGluZm8ucHVzaCh7XHJcbiAgICAgIG1pblZhbHVlOiAwLFxyXG4gICAgICBtYXhWYWx1ZTogMCxcclxuICAgICAgbGFiZWw6IFwiTsOjbyBow6EgZGFkb3Mgc3VmaWNpZW50ZXNcIixcclxuICAgICAgc3ltYm9sOiBuZXcgU2ltcGxlTWFya2VyU3ltYm9sKHsgY29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwKVwiLCBzaXplOiAwLCBzdHlsZTogXCJjaXJjbGVcIiwgb3V0bGluZSB9KVxyXG4gICAgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgemVyYWRvcyA9IHZhbG9yZXMuZmlsdGVyKHYgPT4gdiA9PT0gMCkubGVuZ3RoXHJcbiAgICBjb25zdCBuYW9aZXJhZG9zID0gdmFsb3Jlcy5maWx0ZXIodiA9PiB2ID4gMClcclxuXHJcbiAgICBpZiAoemVyYWRvcyA+IDApIHtcclxuICAgICAgaW5mby5wdXNoKHtcclxuICAgICAgICBtaW5WYWx1ZTogMCxcclxuICAgICAgICBtYXhWYWx1ZTogMCxcclxuICAgICAgICBsYWJlbDogYHwgMCB8ICgke3plcmFkb3N9IHBvw6dvJHt6ZXJhZG9zID4gMSA/ICdzJyA6ICcnfSlgLFxyXG4gICAgICAgIHN5bWJvbDogbmV3IFNpbXBsZU1hcmtlclN5bWJvbCh7IGNvbG9yOiBcInJnYmEoMjAwLDIwMCwyMDAsMC4zKVwiLCBzaXplOiA2LCBzdHlsZTogXCJjaXJjbGVcIiwgb3V0bGluZSB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1pbiA9IDFcclxuICAgIGNvbnN0IG4gPSBuYW9aZXJhZG9zLmxlbmd0aFxyXG4gICAgY29uc3QgbnVtQ2xhc3NlcyA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQoMSArIDMuMyAqIE1hdGgubG9nMTAobikpKVxyXG4gICAgY29uc3QgYnJlYWtzID0gTWF0aC5jZWlsKChtYXggLSBtaW4gKyAxKSAvIG51bUNsYXNzZXMpXHJcbiAgICBjb25zdCBtYXhTaXplID0gNDBcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNsYXNzZXM7IGkrKykge1xyXG4gICAgICBjb25zdCBtaW5WYWx1ZSA9IG1pbiArIChpICogYnJlYWtzKVxyXG4gICAgICBjb25zdCBtYXhWYWx1ZSA9IG1pbiArICgoaSArIDEpICogYnJlYWtzKSAtIDFcclxuICAgICAgaWYgKG1pblZhbHVlID4gbWF4KSBicmVha1xyXG5cclxuICAgICAgY29uc3QgY291bnQgPSBuYW9aZXJhZG9zLmZpbHRlcih2ID0+IHYgPj0gbWluVmFsdWUgJiYgdiA8PSBtYXhWYWx1ZSkubGVuZ3RoXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gYCR7bWluVmFsdWV9IHwtLS18ICR7bWF4VmFsdWV9ICgke2NvdW50fSBwb8OnbyR7Y291bnQgPiAxID8gJ3MnIDogJyd9KWBcclxuXHJcbiAgICAgIGNvbnN0IHNpemUgPSA2ICsgKGkgKiAobWF4U2l6ZSAvIG51bUNsYXNzZXMpKVxyXG5cclxuICAgICAgaW5mby5wdXNoKHtcclxuICAgICAgICBtaW5WYWx1ZSxcclxuICAgICAgICBtYXhWYWx1ZSxcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICBzeW1ib2w6IG5ldyBTaW1wbGVNYXJrZXJTeW1ib2woeyBjb2xvcjogY29sb3JGaWxsLCBzaXplLCBzdHlsZTogXCJjaXJjbGVcIiwgb3V0bGluZSB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVuZGVyZXIgPSBuZXcgQ2xhc3NCcmVha3NSZW5kZXJlcih7XHJcbiAgICBmaWVsZDogXCJQT0NPX01EX01FUklEX0NFTlRcIixcclxuICAgIGNsYXNzQnJlYWtJbmZvczogaW5mb1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGNhbWFkYURpc3RyaWJ1aWNhbyA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgaWQ6IGlkQ2FtYWRhLFxyXG4gICAgc291cmNlOiBmZWF0dXJlcyxcclxuICAgIGZpZWxkczogY2FtYWRhUG/Dp29zLmZpZWxkcyxcclxuICAgIG9iamVjdElkRmllbGQ6IFwiT0JKRUNUSURcIixcclxuICAgIGdlb21ldHJ5VHlwZTogXCJwb2ludFwiLFxyXG4gICAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiAxMDIxMDAgfSxcclxuICAgIHJlbmRlcmVyLFxyXG4gICAgdGl0bGU6IHRpdGxlTGVnZW5kYSxcclxuICAgIGxpc3RNb2RlOiBcImhpZGVcIixcclxuICAgIC8vIGxheWVyQ3JlYXRlZEZyb21Qb3J0YWw6IGZhbHNlXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZXhpc3RlbnRlID0gbWFwLmZpbmRMYXllckJ5SWQoaWRDYW1hZGEpXHJcbiAgaWYgKGV4aXN0ZW50ZSkgbWFwLnJlbW92ZShleGlzdGVudGUpXHJcbiAgbWFwLmFkZChjYW1hZGFEaXN0cmlidWljYW8pXHJcblxyXG4gIGNvbnN0IGxlZ2VuZCA9IG5ldyBMZWdlbmQoe1xyXG4gICAgdmlldyxcclxuICAgIGxheWVySW5mb3M6IFt7IGxheWVyOiBjYW1hZGFEaXN0cmlidWljYW8sIHRpdGxlOiB0aXRsZUxlZ2VuZGEgfV1cclxuICB9KVxyXG4gIC8vIHZpZXcudWkuYWRkKGxlZ2VuZCwgXCJib3R0b20tbGVmdFwiKVxyXG59XHJcblxyXG5leHBvcnQgeyBjb3Jlc1RpcG9zIH0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX3JlbmRlcmVyc19DbGFzc0JyZWFrc1JlbmRlcmVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9zeW1ib2xzX1NpbXBsZU1hcmtlclN5bWJvbF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfd2lkZ2V0c19MZWdlbmRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbi8qKiBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCAqL1xyXG5pbXBvcnQgeyBSZWFjdCwganN4LCBjc3MsIEdsb2JhbCB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7IGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCLCBjb3Jlc1RpcG9zIH0gZnJvbSAnLi91dGlscydcclxuXHJcbi8qID09PT09IFRpcG9zID09PT09ICovXHJcbnR5cGUgTXNnRmFpeGFJbnRlcmVzc2UgPSB7IHR5cGU6ICdmYWl4YS1pbnRlcmVzc2UnOyBjb2RpZ29zUG9jb3M6IChudW1iZXIgfCBzdHJpbmcpW10gfVxyXG5cclxudHlwZSBBbW9zdHJhSXRlbSA9IHtcclxuICBjb2RpZ29Qb2NvOiBudW1iZXJcclxuICB0b3RhbEFtb3N0cmFzTGF0ZXJhaXM6IG51bWJlclxyXG4gIHRvdGFsQ2FsaGFzOiBudW1iZXJcclxuICB0b3RhbFBsdWdzOiBudW1iZXJcclxuICB0b3RhbFRlc3RlbXVuaG9zOiBudW1iZXJcclxuICB0b3RhbFdob2xlQ29yZTogbnVtYmVyXHJcbn1cclxuXHJcbi8qID09PT09IENvbmZpZyA9PT09PSAqL1xyXG5jb25zdCBERUZBVUxUX0ZBSVhBX0lOVEVSRVNTRSA9IGZhbHNlXHJcblxyXG4vKiA9PT09PSBMYXlvdXQgPT09PT0gKi9cclxuY29uc3QgREVGQVVMVF9XSURUSCA9IDM2MFxyXG5jb25zdCBQQU5FTF9NQVJHSU5fVE9QID0gNTBcclxuY29uc3QgUEFORUxfTUFSR0lOX1JJR0hUID0gMTBcclxuY29uc3QgREVGQVVMVF9IRUlHSFQgPSA2NTAgLy8gPDw8IEFKVVNURTogYWx0dXJhIGluaWNpYWwgbWFpb3JcclxuXHJcbi8qID09PT09IENhbXBvcyBwb3IgdGlwbyA9PT09PSAqL1xyXG5jb25zdCBUWVBFX0ZJRUxEOiBSZWNvcmQ8c3RyaW5nLCBrZXlvZiBBbW9zdHJhSXRlbT4gPSB7XHJcbiAgbGF0ZXJhbDogJ3RvdGFsQW1vc3RyYXNMYXRlcmFpcycsXHJcbiAgdGVzdGVtdW5obzogJ3RvdGFsVGVzdGVtdW5ob3MnLFxyXG4gIGNhbGhhOiAndG90YWxDYWxoYXMnLFxyXG4gIHBsdWc6ICd0b3RhbFBsdWdzJyxcclxuICAnd2hvbGUgY29yZSc6ICd0b3RhbFdob2xlQ29yZSdcclxufVxyXG5jb25zdCBMSVNUX1RZUEVTID0gT2JqZWN0LmtleXMoVFlQRV9GSUVMRClcclxuXHJcbmNvbnN0IGxvZzEwID0gKHg6IG51bWJlcikgPT4gTWF0aC5sb2cxMCA/IE1hdGgubG9nMTAoeCkgOiBNYXRoLmxvZyh4KSAvIE1hdGguTE4xMFxyXG5cclxuZnVuY3Rpb24gYnVpbGRTZXNzaW9uQm9keShmYWl4YUludGVyZXNzZTogYm9vbGVhbikge1xyXG4gIGNvbnN0IHAgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcclxuICBwLnNldCgnaGRTeXMnLCAnbm92YWludGNvbnMnKVxyXG4gIHAuc2V0KCdoZFVDJywgJ01hcGEnKVxyXG4gIHAuc2V0KCdoZEFjYW8nLCAnQ2FycmVnYXJNYXBhRGlzdHJpYnVpY2FvQW1vc3RyYXNDb250YWRvcicpXHJcbiAgcC5zZXQoJ2hkU2Vzc2lvbkZpbHRlcicsICd0cnVlJylcclxuICBwLnNldCgnZmFpeGFJbnRlcmVzc2UnLCBTdHJpbmcoISFmYWl4YUludGVyZXNzZSkpXHJcbiAgcmV0dXJuIHAudG9TdHJpbmcoKVxyXG59XHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUxpc3QocmF3OiBhbnlbXSk6IEFtb3N0cmFJdGVtW10ge1xyXG4gIHJldHVybiAoQXJyYXkuaXNBcnJheShyYXcpID8gcmF3IDogW10pXHJcbiAgICAubWFwKChyOiBhbnkpID0+ICh7XHJcbiAgICAgIGNvZGlnb1BvY286IE51bWJlcihyLmNvZGlnb1BvY28gPz8gci5QT0NPX0NEX1BPQ08gPz8gci5wb2NvID8/IHIuY29kaWdvID8/IDApLFxyXG4gICAgICB0b3RhbEFtb3N0cmFzTGF0ZXJhaXM6IE51bWJlcihyLnRvdGFsQW1vc3RyYXNMYXRlcmFpcyA/PyByLmxhdGVyYWlzID8/IDApLFxyXG4gICAgICB0b3RhbENhbGhhczogTnVtYmVyKHIudG90YWxDYWxoYXMgPz8gci5jYWxoYXMgPz8gMCksXHJcbiAgICAgIHRvdGFsUGx1Z3M6IE51bWJlcihyLnRvdGFsUGx1Z3MgPz8gci5wbHVncyA/PyAwKSxcclxuICAgICAgdG90YWxUZXN0ZW11bmhvczogTnVtYmVyKHIudG90YWxUZXN0ZW11bmhvcyA/PyByLnRlc3RlbXVuaG9zID8/IDApLFxyXG4gICAgICB0b3RhbFdob2xlQ29yZTogTnVtYmVyKHIudG90YWxXaG9sZUNvcmUgPz8gci53aG9sZUNvcmUgPz8gMClcclxuICAgIH0pKVxyXG4gIC5maWx0ZXIoeCA9PiAhIXguY29kaWdvUG9jbylcclxufVxyXG5mdW5jdGlvbiBmZXRjaFZpYVBhcmVudChib2R5OiBzdHJpbmcpOiBQcm9taXNlPEFtb3N0cmFJdGVtW10+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcmVxSWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKVxyXG4gICAgbGV0IHRhcmdldE9yaWdpbiA9ICcqJ1xyXG4gICAgdHJ5IHsgaWYgKGRvY3VtZW50LnJlZmVycmVyKSB0YXJnZXRPcmlnaW4gPSBuZXcgVVJMKGRvY3VtZW50LnJlZmVycmVyKS5vcmlnaW4gfSBjYXRjaCB7fVxyXG5cclxuICAgIGNvbnN0IG9uTWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGQgPSAoZXZlbnQgYXMgYW55KS5kYXRhIHx8IHt9XHJcbiAgICAgIGlmIChkLnJlcUlkICE9PSByZXFJZCkgcmV0dXJuXHJcbiAgICAgIGlmIChkLnR5cGUgPT09ICdmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzOm9rJykge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG4gICAgICAgIHJlc29sdmUobm9ybWFsaXplTGlzdChkLnBheWxvYWQpKVxyXG4gICAgICB9IGVsc2UgaWYgKGQudHlwZSA9PT0gJ2ZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXM6ZXJyJykge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoZC5tZXNzYWdlIHx8ICdFcnJvIG5vIGZldGNoIHZpYSBwYXJlbnQnKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpXHJcbiAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHsgdHlwZTogJ2ZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXMnLCBib2R5LCByZXFJZCB9LCB0YXJnZXRPcmlnaW4pXHJcbiAgfSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzKGZhaXhhSW50ZXJlc3NlID0gZmFsc2UpOiBQcm9taXNlPEFtb3N0cmFJdGVtW10+IHtcclxuICBjb25zdCBib2R5ID0gYnVpbGRTZXNzaW9uQm9keShmYWl4YUludGVyZXNzZSlcclxuICByZXR1cm4gZmV0Y2hWaWFQYXJlbnQoYm9keSlcclxufVxyXG5cclxuLyogPT09PT0gRXN0aWxvcyA9PT09PSAqL1xyXG5jb25zdCBNQVhfQlVCQkxFID0gNDBcclxuY29uc3QgZ2xvYmFsUGFuZWxTdHlsZSA9IGNzc2BcclxuICBkaXZbcm9sZT0nZGlhbG9nJ11bYXJpYS1sYWJlbD0nbWFwYS1kZS1kaXN0cmlidWljYW8nXSxcclxuICBkaXZbcm9sZT0nZGlhbG9nJ11bYXJpYS1sYWJlbD0nbWFwYS1kZS1kaXN0cmlidWljYW8tdjInXSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIGluc2V0OiAke1BBTkVMX01BUkdJTl9UT1B9cHggJHtQQU5FTF9NQVJHSU5fUklHSFR9cHggYXV0byBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAke0RFRkFVTFRfV0lEVEh9cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogJHtERUZBVUxUX0hFSUdIVH1weCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjRweCkgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7ICAgLyogPDw8IHNlbSBzY3JvbGwgbm8gcGFpbmVsICovXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgbGVnZW5kSGVhZGVyU3R5bGUgPSBjc3NgZm9udC13ZWlnaHQ6NjAwO21hcmdpbjo0cHggMDtmb250LXNpemU6Ljg1cmVtO2xpbmUtaGVpZ2h0OjEuMTtgXHJcbmNvbnN0IGJ1YmJsZUJveFN0eWxlID0gY3NzYHdpZHRoOiR7TUFYX0JVQkJMRX1weDtoZWlnaHQ6JHtNQVhfQlVCQkxFfXB4O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW4tcmlnaHQ6OHB4O2BcclxuY29uc3Qgd3JhcHBlclN0eWxlID0gY3NzYHBvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDojZmZmO2JvcmRlcjoxcHggc29saWQgI2RkZDtib3JkZXItcmFkaXVzOjZweDtib3gtc2hhZG93OjAgNHB4IDEycHggcmdiYSgwLDAsMCwuMSk7cGFkZGluZzoxNnB4O292ZXJmbG93OmhpZGRlbjtgXHJcbmNvbnN0IHRpdGxlU3R5bGUgPSBjc3NgZm9udC13ZWlnaHQ6NjAwO21hcmdpbi1ib3R0b206NHB4O2Rpc3BsYXk6YmxvY2s7YFxyXG5jb25zdCBzZWxlY3RTdHlsZSA9IGNzc2B3aWR0aDoxMDAlO3BhZGRpbmc6NnB4IDhweDttYXJnaW4tYm90dG9tOjEycHg7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JvcmRlci1yYWRpdXM6NHB4O2BcclxuXHJcbi8qIDw8PCBBSlVTVEU6IGNvbnRhaW5lciBkYSBsaXN0YSBlbSBHUklEIGNvbSB3cmFwIGF1dG9tw6F0aWNvICovXHJcbi8qIGNvbnRhaW5lciBkYSBsaXN0YTogMiBjb2x1bmFzIGNvbmZvcnTDoXZlaXMgZSBzZW0gc29icmVwb3Npw6fDo28gKi9cclxuY29uc3QgbGlzdFN0eWxlID0gY3NzYFxyXG4gIC8qIG5hZGEgZGUgc2Nyb2xsIGFxdWkgKi9cclxuICBvdmVyZmxvdzogdmlzaWJsZTsgICAgICAgICAgICAgICAgLyogPDw8IHNlbSBzY3JvbGwgKi9cclxuICBtYXJnaW4tYm90dG9tOiA4cHg7ICAgICAgICAgICAgICAgLyog4oaTICovXHJcbiAgcGFkZGluZzogNHB4OyAgICAgICAgICAgICAgICAgICAgIC8qIOKGkyAqL1xyXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcblxyXG4gIC8qIERVQVMgTElOSEFTIEZJWEFTICovXHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWlubWF4KDI0cHgsIGF1dG8pKTtcclxuXHJcbiAgLyogUHJlZW5jaGUgcG9yIGNvbHVuYXMgKDHCqiBsaW5oYSwgMsKqIGxpbmhhLCBkZXBvaXMgbm92YSBjb2x1bmEpICovXHJcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuXHJcbiAgLyogQ29sdW5hcyBlc3RyZWl0YXMgcGFyYSBjYWJlciBtYWlzIGNvbmp1bnRvcyAqL1xyXG4gIGdyaWQtYXV0by1jb2x1bW5zOiBtaW5tYXgoMTA1cHgsIDFmcik7IC8qIGFqdXN0ZSBmaW5vOiAxMDDigJMxMjBweCAqL1xyXG5cclxuICAvKiBFc3Bhw6dvcyBNw41OSU1PUyBlbnRyZSBjb25qdW50b3MgKi9cclxuICBjb2x1bW4tZ2FwOiA0cHg7ICAvKiA8PDwgbWVub3IgZXNwYcOnbyBob3Jpem9udGFsIGVudHJlIGNvbmp1bnRvcyAqL1xyXG4gIHJvdy1nYXA6IDJweDsgICAgIC8qIDw8PCBtZW5vciBlc3Bhw6dvIHZlcnRpY2FsIGVudHJlIGFzIDIgbGluaGFzICovXHJcblxyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuYDtcclxuXHJcblxyXG5cclxuXHJcbi8qIGNhZGEgaXRlbTogY2hlY2tib3ggKyB0ZXh0byBMQURPIEEgTEFETyBlIGNsaWPDoXZlbCAqL1xyXG4vKiBjYWRhIGl0ZW06IE7Dg08gZGVpeGEg4oCcdmF6YXLigJ0gcGFyYSBhIGNvbHVuYSBhbyBsYWRvICovXHJcbmNvbnN0IGNoZWNrYm94TGFiZWxTdHlsZSA9IGNzc2BcclxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyOyAgLyogY2hlY2tib3ggfCB0ZXh0byAqL1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGNvbHVtbi1nYXA6IDFweDtcclxuICBwYWRkaW5nOiAxcHggMXB4OyAgICAgICAgICAgICAgICAgLyog4oaRIGFkaWNpb25hIDFweCBkZSBhbHR1cmEgw7p0aWwgKi9cclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICBtaW4td2lkdGg6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAmID4gKiB7IG1hcmdpbjogMCAhaW1wb3J0YW50OyBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IH1cclxuXHJcbiAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XHJcbiAgICB3aWR0aDogMTRweDsgaGVpZ2h0OiAxNHB4O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICB9XHJcblxyXG4gIC5sYmwge1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgICAgICAgICAgICAgICAvKiBzw7MgaG9yaXpvbnRhbCAobsOjbyBjb3J0YSB2ZXJ0aWNhbCkgKi9cclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZvbnQtc2l6ZTogLjg0cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7ICAgICAgICAgICAgICAvKiDihpEgZXZpdGEgY29ydGFyIOKAnHBlcm5h4oCdIGRvIEcgKi9cclxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7ICAgICAgICAgICAgLyog4oaRIG1pY3JvLXJlc3Bpcm8gZXh0cmEgKi9cclxuICB9XHJcbmA7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogPDw8IEFKVVNURTogY2FkYSBpdGVtIGFsaW5oYWRvLCBzZW0gbWFyZ2luLWJvdHRvbSAobyBncmlkIGNvbnRyb2xhIG9zIGdhcHMpICovXHJcbmNvbnN0IGNoZWNrYm94Um93U3R5bGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5cclxuY29uc3Qgc3VtbWFyeUxpc3RTdHlsZSA9IGNzc2BtYXgtaGVpZ2h0OjMwMHB4O292ZXJmbG93LXk6YXV0bzttYXJnaW4tdG9wOjhweDtwYWRkaW5nOjhweCA4cHggMzZweDtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO2JvcmRlci1yYWRpdXM6NHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2BcclxuY29uc3Qgc3VtbWFyeUl0ZW1TdHlsZSA9IGNzc2BkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbjoycHg7YFxyXG5jb25zdCByYW5nZUxhYmVsU3R5bGUgPSBjc3NgZm9udC1zaXplOi43OHJlbTtsaW5lLWhlaWdodDoxLjE7YFxyXG5cclxuLyogY2hlY2tib3hlcyBkZSByb2RhcMOpOiBjb2x1bmEgZSBwcsOzeGltb3MgKi9cclxuY29uc3QgZm9vdGVyU3R5bGUgPSBjc3NgXHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICBwYWRkaW5nOiA0cHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiA2cHg7XHJcbmBcclxuY29uc3QgZm9vdGVyTGFiZWxTdHlsZSA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAuNWVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IC45cmVtO1xyXG5gXHJcbmNvbnN0IGZvb3RlckxhYmVsU3R5bGVJbnRlcmVzc2UgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIHBhZGRpbmctbGVmdDogLjVlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAuOXJlbTtcclxuYFxyXG5cclxuLyogPT09PT0gU3Vtw6FyaW8gPT09PT0gKi9cclxuZnVuY3Rpb24gY2FsY3VsYXJRdWVicmFzKGRhZG9zOiB7IHRvdGFsOiBudW1iZXIgfVtdLCBjb2xvckZpbGw6IHN0cmluZykge1xyXG4gIGNvbnN0IHZhbG9yZXMgPSBkYWRvcy5tYXAocCA9PiBwLnRvdGFsKVxyXG4gIGxldCBtaW4gPSBNYXRoLm1pbiguLi52YWxvcmVzKVxyXG4gIGxldCBtYXggPSBNYXRoLm1heCguLi52YWxvcmVzKVxyXG5cclxuICBjb25zdCBpbmZvOiB7IGxhYmVsOiBzdHJpbmc7IHNpemU6IG51bWJlcjsgY29yOiBzdHJpbmc7IGNvdW50OiBudW1iZXIgfVtdID0gW11cclxuICBpZiAoIWlzRmluaXRlKG1pbikgfHwgIWlzRmluaXRlKG1heCkpIHJldHVybiBpbmZvXHJcblxyXG4gIGlmIChtaW4gPT09IDAgJiYgbWF4ID09PSAwKSB7XHJcbiAgICBpbmZvLnB1c2goeyBsYWJlbDogJ07Do28gaMOhIGRhZG9zIHN1ZmljaWVudGVzJywgc2l6ZTogMCwgY29yOiBjb2xvckZpbGwsIGNvdW50OiAwIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHplcmFkb3MgPSB2YWxvcmVzLmZpbHRlcih2ID0+IHYgPT09IDApLmxlbmd0aFxyXG4gICAgY29uc3QgbmFvWmVyYWRvcyA9IHZhbG9yZXMuZmlsdGVyKHYgPT4gdiA+IDApXHJcblxyXG4gICAgaWYgKHplcmFkb3MgPiAwKSB7XHJcbiAgICAgIGluZm8ucHVzaCh7IGxhYmVsOiBgfCAwIHwgKCR7emVyYWRvc30gcG/Dp28ke3plcmFkb3MgPiAxID8gJ3MnIDogJyd9KWAsIHNpemU6IDYsIGNvcjogJ3JnYmEoMjAwLDIwMCwyMDAsMC4zKScsIGNvdW50OiB6ZXJhZG9zIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbWluID0gMVxyXG4gICAgY29uc3QgbiA9IG5hb1plcmFkb3MubGVuZ3RoXHJcbiAgICBjb25zdCBudW1DbGFzc2VzID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZCgxICsgMy4zICogbG9nMTAobiB8fCAxKSkpXHJcbiAgICBjb25zdCBicmVha3MgPSBNYXRoLmNlaWwoKG1heCAtIG1pbiArIDEpIC8gbnVtQ2xhc3NlcylcclxuICAgIGNvbnN0IG1heFNpemUgPSAzMFxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ2xhc3NlczsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG1pblZhbHVlID0gbWluICsgaSAqIGJyZWFrc1xyXG4gICAgICBjb25zdCBtYXhWYWx1ZSA9IG1pbiArIChpICsgMSkgKiBicmVha3MgLSAxXHJcbiAgICAgIGlmIChtaW5WYWx1ZSA+IG1heCkgYnJlYWtcclxuICAgICAgY29uc3QgY291bnQgPSBuYW9aZXJhZG9zLmZpbHRlcih2ID0+IHYgPj0gbWluVmFsdWUgJiYgdiA8PSBtYXhWYWx1ZSkubGVuZ3RoXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gYCR7bWluVmFsdWV9IHwtLS18ICR7bWF4VmFsdWV9ICgke2NvdW50fSBwb8OnbyR7Y291bnQgPiAxID8gJ3MnIDogJyd9KWBcclxuICAgICAgY29uc3Qgc2l6ZSA9IDYgKyBpICogKG1heFNpemUgLyBudW1DbGFzc2VzKVxyXG4gICAgICBpbmZvLnB1c2goeyBsYWJlbCwgc2l6ZSwgY29yOiBjb2xvckZpbGwsIGNvdW50IH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBpbmZvXHJcbn1cclxuXHJcbi8qID09PT09IERPTSBoZWxwZXJzID09PT09ICovXHJcbmZ1bmN0aW9uIGZpbmRDbG9zZXN0RGlhbG9nKGVsOiBIVE1MRWxlbWVudCB8IG51bGwpOiBIVE1MRWxlbWVudCB8IG51bGwge1xyXG4gIGxldCBjdXI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGVsXHJcbiAgd2hpbGUgKGN1cikge1xyXG4gICAgaWYgKGN1ci5nZXRBdHRyaWJ1dGUgJiYgY3VyLmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAnZGlhbG9nJykgcmV0dXJuIGN1clxyXG4gICAgY3VyID0gY3VyLnBhcmVudEVsZW1lbnRcclxuICB9XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5mdW5jdGlvbiBnZXREaWFsb2dCb2RpZXMoZGxnOiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50W10ge1xyXG4gIHJldHVybiBBcnJheS5mcm9tKGRsZy5xdWVyeVNlbGVjdG9yQWxsKCcuamltdS1kaWFsb2dfX2JvZHksIC5qaW11LWRpYWxvZy1ib2R5LCAuZGlhbG9nLWJvZHksIC5tb2RhbC1ib2R5LCAuamltdS1kaWFsb2dfX2NvbnRlbnQsIC5qaW11LWRpYWxvZ19fY29udGVudCcpKSBhcyBIVE1MRWxlbWVudFtdXHJcbn1cclxuZnVuY3Rpb24gaXNEaWFsb2dIaWRkZW4oZGxnOiBIVE1MRWxlbWVudCkge1xyXG4gIGNvbnN0IGNzID0gZ2V0Q29tcHV0ZWRTdHlsZShkbGcpXHJcbiAgcmV0dXJuIGRsZy5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykgPT09ICd0cnVlJyB8fCBjcy5kaXNwbGF5ID09PSAnbm9uZScgfHwgY3MudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbidcclxufVxyXG5cclxuLyogPT09PT0gUmlnaHQgYW5jaG9yID09PT09ICovXHJcbmxldCBfYXBwbHlpbmdTdHlsZSA9IGZhbHNlXHJcbmZ1bmN0aW9uIGZvcmNlUGFuZWxTdHlsZShkbGc6IEhUTUxFbGVtZW50KSB7XHJcbiAgaWYgKF9hcHBseWluZ1N0eWxlKSByZXR1cm5cclxuICBfYXBwbHlpbmdTdHlsZSA9IHRydWVcclxuICB0cnkge1xyXG4gICAgY29uc3QgcyA9IGRsZy5zdHlsZVxyXG4gICAgaWYgKHMuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKSAhPT0gJ2Fic29sdXRlJykgcy5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnYWJzb2x1dGUnLCAnaW1wb3J0YW50JylcclxuICAgIHMucmVtb3ZlUHJvcGVydHkoJ2xlZnQnKTsgcy5yZW1vdmVQcm9wZXJ0eSgnYm90dG9tJyk7IHMucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpXHJcbiAgICBzLnNldFByb3BlcnR5KCdpbnNldCcsICdhdXRvIGF1dG8gYXV0byBhdXRvJylcclxuICAgIHMuc2V0UHJvcGVydHkoJ3RvcCcsIGAke1BBTkVMX01BUkdJTl9UT1B9cHhgLCAnaW1wb3J0YW50JylcclxuICAgIHMuc2V0UHJvcGVydHkoJ3JpZ2h0JywgYCR7UEFORUxfTUFSR0lOX1JJR0hUfXB4YCwgJ2ltcG9ydGFudCcpXHJcbiAgICBcclxuICAgIGlmIChzLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJykgIT09IGAke0RFRkFVTFRfV0lEVEh9cHhgKSB7XHJcbiAgICAgIHMuc2V0UHJvcGVydHkoJ3dpZHRoJywgYCR7REVGQVVMVF9XSURUSH1weGAsICdpbXBvcnRhbnQnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChzLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpICE9PSBgJHtERUZBVUxUX0hFSUdIVH1weGApIHMuc2V0UHJvcGVydHkoJ2hlaWdodCcsIGAke0RFRkFVTFRfSEVJR0hUfXB4YCwgJ2ltcG9ydGFudCcpIC8vIDw8PCBBSlVTVEU6IHVzYSBERUZBVUxUX0hFSUdIVFxyXG4gICAgaWYgKHMuZ2V0UHJvcGVydHlWYWx1ZSgnbWF4LWhlaWdodCcpICE9PSAnY2FsYygxMDAlIC0gMjRweCknKSBzLnNldFByb3BlcnR5KCdtYXgtaGVpZ2h0JywgJ2NhbGMoMTAwJSAtIDI0cHgpJywgJ2ltcG9ydGFudCcpXHJcbiAgICBpZiAocy5nZXRQcm9wZXJ0eVZhbHVlKCdvdmVyZmxvdycpICE9PSAndmlzaWJsZScpIHMuc2V0UHJvcGVydHkoJ292ZXJmbG93JywgJ3Zpc2libGUnLCAnaW1wb3J0YW50JylcclxuICAgIGlmIChzLmdldFByb3BlcnR5VmFsdWUoJ3otaW5kZXgnKSAhPT0gJzk5OTknKSBzLnNldFByb3BlcnR5KCd6LWluZGV4JywgJzk5OTknLCAnaW1wb3J0YW50JylcclxuICB9IGZpbmFsbHkgeyBfYXBwbHlpbmdTdHlsZSA9IGZhbHNlIH1cclxufVxyXG5mdW5jdGlvbiB1c2VGb3JjZVJpZ2h0UG9zaXRpb24ocm9vdFJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50Pikge1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2xlYW51cDogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGxcclxuICAgIGNvbnN0IGFwcGx5ID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBkbGcgPVxyXG4gICAgICAgIChyb290UmVmLmN1cnJlbnQgJiYgKHJvb3RSZWYuY3VycmVudC5jbG9zZXN0KCdbcm9sZT1cImRpYWxvZ1wiXScpIGFzIEhUTUxFbGVtZW50KSkgfHxcclxuICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2W3JvbGU9XCJkaWFsb2dcIl1bYXJpYS1sYWJlbD1cIm1hcGEtZGUtZGlzdHJpYnVpY2FvLXYyXCJdJykgYXMgSFRNTEVsZW1lbnQpIHx8XHJcbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdltyb2xlPVwiZGlhbG9nXCJdW2FyaWEtbGFiZWw9XCJtYXBhLWRlLWRpc3RyaWJ1aWNhb1wiXScpIGFzIEhUTUxFbGVtZW50KVxyXG4gICAgICBpZiAoIWRsZykgcmV0dXJuXHJcbiAgICAgIGZvcmNlUGFuZWxTdHlsZShkbGcpXHJcblxyXG4gICAgICBjb25zdCBtbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcclxuICAgICAgICBpZiAoX2FwcGx5aW5nU3R5bGUpIHJldHVyblxyXG4gICAgICAgIGlmIChtdXRhdGlvbnMuc29tZShtID0+IG0uYXR0cmlidXRlTmFtZSA9PT0gJ3N0eWxlJykpIHtcclxuICAgICAgICAgIGNvbnN0IHMgPSBkbGcuc3R5bGVcclxuICAgICAgICAgIGNvbnN0IGRyaWZ0ID0gcy5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpICE9PSAnYWJzb2x1dGUnXHJcbiAgICAgICAgICAgIHx8IHMuZ2V0UHJvcGVydHlWYWx1ZSgndG9wJykgIT09IGAke1BBTkVMX01BUkdJTl9UT1B9cHhgXHJcbiAgICAgICAgICAgIHx8IHMuZ2V0UHJvcGVydHlWYWx1ZSgncmlnaHQnKSAhPT0gYCR7UEFORUxfTUFSR0lOX1JJR0hUfXB4YFxyXG4gICAgICAgICAgICB8fCAocy50cmFuc2Zvcm0gJiYgcy50cmFuc2Zvcm0gIT09ICdub25lJylcclxuICAgICAgICAgIGlmIChkcmlmdCkgZm9yY2VQYW5lbFN0eWxlKGRsZylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIG1vLm9ic2VydmUoZGxnLCB7IGF0dHJpYnV0ZXM6IHRydWUsIGF0dHJpYnV0ZUZpbHRlcjogWydzdHlsZSddIH0pXHJcblxyXG4gICAgICBsZXQgdG86IGFueVxyXG4gICAgICBjb25zdCBvblJlc2l6ZSA9ICgpID0+IHsgY2xlYXJUaW1lb3V0KHRvKTsgdG8gPSBzZXRUaW1lb3V0KCgpID0+IGZvcmNlUGFuZWxTdHlsZShkbGcpLCA4MCkgfVxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpXHJcbiAgICAgIGNsZWFudXAgPSAoKSA9PiB7IG1vLmRpc2Nvbm5lY3QoKTsgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKSB9XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXBwbHkpXHJcbiAgICBzZXRUaW1lb3V0KGFwcGx5LCA4MClcclxuICAgIHNldFRpbWVvdXQoYXBwbHksIDMwMClcclxuICAgIHJldHVybiAoKSA9PiB7IGNsZWFudXA/LigpIH1cclxuICB9LCBbcm9vdFJlZl0pXHJcbn1cclxuXHJcbi8qID09PT09IElEcyA9PT09PSAqL1xyXG5jb25zdCBsYXllcklkRm9yID0gKHRpcG86IHN0cmluZykgPT4gYGFtb3N0cmFzXyR7dGlwby5yZXBsYWNlKC9cXHMrL2csICdfJyl9YFxyXG5cclxuLyogPT09PT0gTWFwIGhlbHBlcnMgPT09PT0gKi9cclxuZnVuY3Rpb24gY2xlYXJBbW9zdHJhcyh2aWV3OiBfX2VzcmkuVmlldykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhbGwgPSAodmlldy5tYXAgYXMgYW55KS5hbGxMYXllcnM/LnRvQXJyYXk/LigpID8/IHZpZXcubWFwLmxheWVycz8udG9BcnJheT8uKCkgPz8gW11cclxuICAgIGFsbC5mb3JFYWNoKChseTogYW55KSA9PiB7IGNvbnN0IGlkID0gU3RyaW5nKGx5Py5pZCA/PyAnJyk7IGlmIChpZC5zdGFydHNXaXRoKCdhbW9zdHJhc18nKSkgdmlldy5tYXAucmVtb3ZlKGx5KSB9KVxyXG4gIH0gY2F0Y2gge31cclxufVxyXG5mdW5jdGlvbiBjbGVhckxheWVyT2ZUaXBvKHZpZXc6IF9fZXNyaS5WaWV3LCB0aXBvOiBzdHJpbmcpIHtcclxuICB0cnkgeyBjb25zdCBseXIgPSB2aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGxheWVySWRGb3IodGlwbykpIGFzIGFueTsgaWYgKGx5cikgdmlldy5tYXAucmVtb3ZlKGx5cikgfSBjYXRjaCB7fVxyXG59XHJcblxyXG4vKiA9PT0gRGVzYXRpdmEgcsOzdHVsb3MgZG9zIGNsdXN0ZXJzID09PSAqL1xyXG5mdW5jdGlvbiBkaXNhYmxlQ2x1c3Rlck51bWJlcnMobHlyOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgaWYgKCFseXIpIHJldHVyblxyXG4gICAgaWYgKGx5ci5mZWF0dXJlUmVkdWN0aW9uICYmIGx5ci5mZWF0dXJlUmVkdWN0aW9uLnR5cGUgPT09ICdjbHVzdGVyJykge1xyXG4gICAgICBseXIuZmVhdHVyZVJlZHVjdGlvbiA9IHsgLi4ubHlyLmZlYXR1cmVSZWR1Y3Rpb24sIGxhYmVsc1Zpc2libGU6IGZhbHNlIH1cclxuICAgIH1cclxuICAgIGlmICgnbGFiZWxzVmlzaWJsZScgaW4gbHlyKSBseXIubGFiZWxzVmlzaWJsZSA9IGZhbHNlIGFzIGFueVxyXG4gICAgaWYgKCdsYWJlbGluZ0luZm8nIGluIGx5cikgbHlyLmxhYmVsaW5nSW5mbyA9IFtdXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSgobHlyIGFzIGFueSkuc3VibGF5ZXJzKSkge1xyXG4gICAgICA7KGx5ciBhcyBhbnkpLnN1YmxheWVycy5mb3JFYWNoKChzbDogYW55KSA9PiBkaXNhYmxlQ2x1c3Rlck51bWJlcnMoc2wpKVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggeyAvKiBub29wICovIH1cclxufVxyXG5cclxuLyogPT09PT0gQ29tcG9uZW50ZSA9PT09PSAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQocHJvcHM6IGFueSkge1xyXG4gIGNvbnN0IFtqaW11TWFwVmlldywgc2V0SmltdU1hcFZpZXddID0gUmVhY3QudXNlU3RhdGU8SmltdU1hcFZpZXc+KClcclxuICBjb25zdCBbY2F0ZWdvcmlhLCBzZXRDYXRlZ29yaWFdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJykgICAgICAgIC8vIHNlbGVjdFxyXG4gIGNvbnN0IFt0aXBvc1NlbCwgc2V0VGlwb3NTZWxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKSAgICAgICAgLy8gY2hlY2tib3hlc1xyXG4gIGNvbnN0IFtzaG93RW1wdHksIHNldFNob3dFbXB0eV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuXHJcbiAgLy8gSW50ZXJlc3NlXHJcbiAgY29uc3QgW3dpdGhJbnRlcmVzdCwgc2V0V2l0aEludGVyZXN0XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtzaG93V2l0aEludGVyZXN0LCBzZXRzaG93V2l0aEludGVyZXN0XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtmYWl4YVNldCwgc2V0RmFpeGFTZXRdID0gUmVhY3QudXNlU3RhdGU8U2V0PG51bWJlcj4+KFxyXG4gICAgKCkgPT4gbmV3IFNldDxudW1iZXI+KChBcnJheS5pc0FycmF5KHByb3BzPy5jb2RpZ29zRmFpeGFJbnRlcmVzc2UpID8gcHJvcHMuY29kaWdvc0ZhaXhhSW50ZXJlc3NlIDogW10pXHJcbiAgICAgIC5tYXAoKHY6IGFueSkgPT4gTnVtYmVyKHYpKS5maWx0ZXIoKHY6IGFueSkgPT4gIWlzTmFOKHYpKSlcclxuICApXHJcblxyXG4gIC8vIEJhc2VzXHJcbiAgY29uc3QgW2RhZG9zRnVsbCwgc2V0RGFkb3NGdWxsXSA9IFJlYWN0LnVzZVN0YXRlPEFtb3N0cmFJdGVtW10gfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFtkYWRvc0ZhaXhhQVBJLCBzZXREYWRvc0ZhaXhhQVBJXSA9IFJlYWN0LnVzZVN0YXRlPEFtb3N0cmFJdGVtW10gfCBudWxsPihudWxsKVxyXG5cclxuICAvLyBMb2FkaW5nIC8gZXJyb3NcclxuICBjb25zdCBbbG9hZGluZ0Z1bGwsIHNldExvYWRpbmdGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsb2FkaW5nSW50ZXJlc3QsIHNldExvYWRpbmdJbnRlcmVzdF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZXJyb3JGdWxsLCBzZXRFcnJvckZ1bGxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJylcclxuICBjb25zdCBbZXJyb3JJbnRlcmVzdCwgc2V0RXJyb3JJbnRlcmVzdF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKVxyXG5cclxuICBjb25zdCByb290UmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxyXG4gIHVzZUZvcmNlUmlnaHRQb3NpdGlvbihyb290UmVmKVxyXG5cclxuICAvLyBmbGFnIHBhcmEgcmVzcGVpdGFyIGVzY29saGEgZG8gdXN1w6FyaW9cclxuICBjb25zdCBpbnRlcmVzdE1hbnVhbFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSlcclxuXHJcbiAgLyogPT09PT09PT0gZGV0ZWPDp8OjbyBkbyBsb2cvY29uY2F0ZW5hw6fDo28gPT09PT09PT0gKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb25Mb2dMaWtlID0gKGV2OiBNZXNzYWdlRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgZDogYW55ID0gZXY/LmRhdGFcclxuICAgICAgaWYgKGRbXCJ0eXBlXCJdID09PSAnZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhczpvaycpIHtcclxuICAgICAgICBjb25zdCBzID0gZC50b1N0cmluZygpXHJcbiAgICAgICAgY29uc3QgaGFzVGFnID0gL1xcW0V4cGxvcmFcXF1cXFtDR1xcXS9pLnRlc3QocylcclxuICAgICAgICBjb25zdCBleGlzdHNUcnVlID0gL2NoZWNrYm94XFxzK2V4aXN0ZVxcP1xccyp0cnVlL2kudGVzdChzKVxyXG4gICAgICAgIGNvbnN0IHZpc2libGVUcnVlID0gL3Zpcy4qdmVsXFw/XFxzKnRydWUvaS50ZXN0KHMpXHJcbiAgICAgICAgaWYgKGRbXCJzdGFydFdpdGhJbnRlcmVzdFwiXSkge1xyXG4gICAgICAgICAgc2V0c2hvd1dpdGhJbnRlcmVzdCh0cnVlKVxyXG4gICAgICAgICAgaWYgKCFpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50KSBzZXRXaXRoSW50ZXJlc3QodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGQgJiYgdHlwZW9mIGQgPT09ICdvYmplY3QnICYmIGQudHlwZSA9PT0gJ2V4cGxvcmEtY2ctdmlzaWJpbGl0eScpIHtcclxuICAgICAgICBpZiAoZC5leGlzdHMgPT09IHRydWUgJiYgZC52aXNpYmxlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBzZXRzaG93V2l0aEludGVyZXN0KHRydWUpXHJcbiAgICAgICAgICBpZiAoIWludGVyZXN0TWFudWFsUmVmLmN1cnJlbnQpIHNldFdpdGhJbnRlcmVzdCh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbkxvZ0xpa2UpXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbkxvZ0xpa2UpXHJcbiAgfSwgW10pXHJcblxyXG4gIC8qIE1lbnNhZ2VtIGRlIGNvbmZpZyAoZmFsbGJhY2spICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9uQ2ZnID0gKGV2OiBNZXNzYWdlRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgZDogYW55ID0gZXY/LmRhdGEgfHwge31cclxuICAgICAgaWYgKGQ/LnR5cGUgPT09ICdjb25maWcnICYmICgnc3RhcnRXaXRoSW50ZXJlc3QnIGluIGQgfHwgJ2NvbmNhdEdlb2xvZ2ljYScgaW4gZCkpIHtcclxuICAgICAgICBjb25zdCBmbGFnID0gISEoZC5zdGFydFdpdGhJbnRlcmVzdCA/PyBkLmNvbmNhdEdlb2xvZ2ljYSlcclxuICAgICAgICBzZXRzaG93V2l0aEludGVyZXN0KGZsYWcpXHJcbiAgICAgICAgaWYgKGZsYWcgJiYgIWludGVyZXN0TWFudWFsUmVmLmN1cnJlbnQpIHNldFdpdGhJbnRlcmVzdCh0cnVlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uQ2ZnKVxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25DZmcpXHJcbiAgfSwgW10pXHJcblxyXG4gIC8qIFJlY2ViZSBmYWl4YSBkZSBpbnRlcmVzc2UgKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb25Nc2cgPSAoZXY6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gZXY/LmRhdGEgYXMgTXNnRmFpeGFJbnRlcmVzc2VcclxuICAgICAgaWYgKCFkYXRhIHx8IGRhdGEudHlwZSAhPT0gJ2ZhaXhhLWludGVyZXNzZScgfHwgIUFycmF5LmlzQXJyYXkoZGF0YS5jb2RpZ29zUG9jb3MpKSByZXR1cm5cclxuICAgICAgY29uc3QgbnVtcyA9IGRhdGEuY29kaWdvc1BvY29zLm1hcCgodikgPT4gTnVtYmVyKHYpKS5maWx0ZXIodiA9PiAhaXNOYU4odikpXHJcbiAgICAgIHNldEZhaXhhU2V0KG5ldyBTZXQ8bnVtYmVyPihudW1zKSlcclxuICAgICAgaWYgKG51bXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNldHNob3dXaXRoSW50ZXJlc3QodHJ1ZSlcclxuICAgICAgICBpZiAoIWludGVyZXN0TWFudWFsUmVmLmN1cnJlbnQpIHNldFdpdGhJbnRlcmVzdCh0cnVlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTXNnKVxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Nc2cpXHJcbiAgfSwgW10pXHJcblxyXG4gIC8qIFNlIGrDoSB2aWVyIGPDs2RpZ29zIHZpYSBwcm9wcyAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZmFpeGFTZXQuc2l6ZSA+IDApIHtcclxuICAgICAgc2V0c2hvd1dpdGhJbnRlcmVzdCh0cnVlKVxyXG4gICAgICBpZiAoIWludGVyZXN0TWFudWFsUmVmLmN1cnJlbnQpIHNldFdpdGhJbnRlcmVzdCh0cnVlKVxyXG4gICAgfVxyXG4gIH0sIFtmYWl4YVNldF0pXHJcblxyXG4gIC8qIENhcnJlZ2EgYmFzZSByZXNwZWl0YW5kbyB3aXRoSW50ZXJlc3QgKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXHJcbiAgICBhc3luYyBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICAgIGlmIChjYXRlZ29yaWEgIT09ICdzYW1wbGUnKSByZXR1cm5cclxuICAgICAgc2V0TG9hZGluZ0Z1bGwodHJ1ZSk7IHNldEVycm9yRnVsbCgnJylcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcyh3aXRoSW50ZXJlc3QgfHwgREVGQVVMVF9GQUlYQV9JTlRFUkVTU0UpXHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHsgc2V0RGFkb3NGdWxsKGRhdGEpIH1cclxuICAgICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHsgc2V0RXJyb3JGdWxsKGU/Lm1lc3NhZ2UgfHwgJ0ZhbGhhIGFvIGJ1c2NhciBkYWRvcycpOyBzZXREYWRvc0Z1bGwoW10pIH1cclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkgc2V0TG9hZGluZ0Z1bGwoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJ1bigpXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbY2F0ZWdvcmlhLCB3aXRoSW50ZXJlc3RdKVxyXG5cclxuICAvKiBGYWxsYmFjazogYnVzY2FyIGJhc2UgZG8gaW50ZXJlc3NlIHF1YW5kbyBuZWNlc3PDoXJpbyAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgaWYgKGNhdGVnb3JpYSAhPT0gJ3NhbXBsZScpIHJldHVyblxyXG4gICAgICBpZiAoIXdpdGhJbnRlcmVzdCkgcmV0dXJuXHJcbiAgICAgIGlmIChmYWl4YVNldC5zaXplID4gMCkgcmV0dXJuXHJcbiAgICAgIGlmIChkYWRvc0ZhaXhhQVBJICE9PSBudWxsKSByZXR1cm5cclxuICAgICAgc2V0TG9hZGluZ0ludGVyZXN0KHRydWUpOyBzZXRFcnJvckludGVyZXN0KCcnKVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzKHRydWUpXHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHNldERhZG9zRmFpeGFBUEkoZGF0YSlcclxuICAgICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHsgc2V0RXJyb3JJbnRlcmVzdChlPy5tZXNzYWdlIHx8ICdGYWxoYSBhbyBidXNjYXIgZGFkb3MgZG8gaW50ZXJ2YWxvIGRlIGludGVyZXNzZScpOyBzZXREYWRvc0ZhaXhhQVBJKFtdKSB9XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHNldExvYWRpbmdJbnRlcmVzdChmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcnVuKClcclxuICAgIHJldHVybiAoKSA9PiB7IGNhbmNlbGxlZCA9IHRydWUgfVxyXG4gIH0sIFtjYXRlZ29yaWEsIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXQsIGRhZG9zRmFpeGFBUEldKVxyXG5cclxuICAvKiBEZXNlbmhvIGRlIGNhbWFkYXMgKGUgZGVzYXRpdmHDp8OjbyBkb3MgbsO6bWVyb3MgZGUgY2x1c3RlcikgKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgam12ID0gamltdU1hcFZpZXdcclxuICAgIGlmICgham12Py52aWV3KSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBiYXNlOiBBbW9zdHJhSXRlbVtdID0gd2l0aEludGVyZXN0XHJcbiAgICAgID8gKGZhaXhhU2V0LnNpemUgPiAwXHJcbiAgICAgICAgICA/IChkYWRvc0Z1bGwgPz8gW10pLmZpbHRlcih4ID0+IGZhaXhhU2V0LmhhcyhOdW1iZXIoeC5jb2RpZ29Qb2NvKSkpXHJcbiAgICAgICAgICA6IChkYWRvc0ZhaXhhQVBJID8/IGRhZG9zRnVsbCA/PyBbXSkpXHJcbiAgICAgIDogKGRhZG9zRnVsbCA/PyBbXSlcclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYmFzZSkgfHwgYmFzZS5sZW5ndGggPT09IDApIHJldHVyblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRpcG9zU2VsKSB8fCB0aXBvc1NlbC5sZW5ndGggPT09IDApIHJldHVyblxyXG5cclxuICAgIGNvbnN0IHsgdmlldyB9ID0gam12XHJcblxyXG4gICAgdGlwb3NTZWwuZm9yRWFjaCgodGlwbykgPT4ge1xyXG4gICAgICBjb25zdCBkYWRvcyA9IGJhc2VcclxuICAgICAgICAubWFwKGQgPT4gKHsgY29kaWdvUG9jbzogZC5jb2RpZ29Qb2NvLCB0b3RhbDogZFtUWVBFX0ZJRUxEW3RpcG9dXSA/PyAwIH0pKVxyXG4gICAgICAgIC5maWx0ZXIoZCA9PiAoZC50b3RhbCA/PyAwKSA+IDApXHJcblxyXG4gICAgICAvLyBsaW1wYSBjYW1hZGEgZGVzc2UgdGlwbyBlIHJlZGVzZW5oYSBzZSBob3V2ZXIgZGFkb3NcclxuICAgICAgY2xlYXJMYXllck9mVGlwbyh2aWV3LCB0aXBvKVxyXG4gICAgICBpZiAoZGFkb3MubGVuZ3RoID09PSAwKSByZXR1cm5cclxuXHJcbiAgICAgIGNvbnN0IGNvbG9yRmlsbCA9IGNvcmVzVGlwb3NbdGlwb10gfHwgJ3JnYmEoMCwwLDAsMC41KSdcclxuICAgICAgY29uc3QgaWRDYW1hZGEgPSBsYXllcklkRm9yKHRpcG8pXHJcbiAgICAgIGNvbnN0IGlkTGVnZW5kYSA9IGBsZ2RfJHtpZENhbWFkYX1gXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCKHtcclxuICAgICAgICAgIGppbXVNYXBWaWV3OiBqbXYsXHJcbiAgICAgICAgICBkYWRvcyxcclxuICAgICAgICAgIGNvbG9yRmlsbCxcclxuICAgICAgICAgIGlkQ2FtYWRhLFxyXG4gICAgICAgICAgaWRMZWdlbmRhLFxyXG4gICAgICAgICAgdGl0bGVMZWdlbmRhOiAod2l0aEludGVyZXN0ID8gJ0ludGVydmFsbyBkZSBJbnRlcmVzc2UgLSAnIDogJycpICsgKHRpcG8uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aXBvLnNsaWNlKDEpKSxcclxuICAgICAgICAgIHdpdGhJbnRlcmVzdFxyXG4gICAgICAgIH0gYXMgYW55KVxyXG5cclxuICAgICAgICBjb25zdCBseXIgPSB2aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKGlkQ2FtYWRhKSBhcyBhbnlcclxuICAgICAgICBpZiAobHlyKSBkaXNhYmxlQ2x1c3Rlck51bWJlcnMobHlyKVxyXG5cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFthbW9zdHJhc10gZmFsaGEgYW8gZ2VyYXIgY2FtYWRhICR7aWRDYW1hZGF9YCwgZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LCBbamltdU1hcFZpZXcsIHRpcG9zU2VsLCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0LCBkYWRvc0Z1bGwsIGRhZG9zRmFpeGFBUEldKVxyXG5cclxuICAvLyBSZXNldCBlIGZlY2hhclxyXG4gIGNvbnN0IHJlc2V0VWlTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFRpcG9zU2VsKFtdKTsgc2V0U2hvd0VtcHR5KGZhbHNlKTsgc2V0V2l0aEludGVyZXN0KGZhbHNlKTsgc2V0Q2F0ZWdvcmlhKCcnKTsgc2V0RGFkb3NGdWxsKG51bGwpOyBzZXREYWRvc0ZhaXhhQVBJKG51bGwpXHJcbiAgICBpbnRlcmVzdE1hbnVhbFJlZi5jdXJyZW50ID0gZmFsc2VcclxuICB9LCBbXSlcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldz8udmlld1xyXG4gICAgaWYgKHZpZXcpIGNsZWFyQW1vc3RyYXModmlldylcclxuICAgIHJlc2V0VWlTdGF0ZSgpXHJcbiAgfSwgW2ppbXVNYXBWaWV3LCByZXNldFVpU3RhdGVdKVxyXG5cclxuICAvLyBMaWdhIGJvdMOjbyBGZWNoYXJcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3Py52aWV3OyBpZiAoIXZpZXcpIHJldHVyblxyXG4gICAgY29uc3Qgcm9vdCA9IHJvb3RSZWYuY3VycmVudDsgaWYgKCFyb290KSByZXR1cm5cclxuICAgIGNvbnN0IGRsZyA9IGZpbmRDbG9zZXN0RGlhbG9nKHJvb3QpOyBpZiAoIWRsZykgcmV0dXJuXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRsZy5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnYnV0dG9uW2FyaWEtbGFiZWw9XCJDbG9zZVwiXSwgYnV0dG9uW3RpdGxlPVwiQ2xvc2VcIl0sIGJ1dHRvblthcmlhLWxhYmVsPVwiRmVjaGFyXCJdLCBidXR0b25bdGl0bGU9XCJGZWNoYXJcIl0sIFtkYXRhLWFjdGlvbj1cImNsb3NlXCJdJ1xyXG4gICAgKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcclxuICAgIGlmICghY2xvc2VCdG4pIHJldHVyblxyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbG9zZSlcclxuICAgIHJldHVybiAoKSA9PiBjbG9zZUJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsb3NlKVxyXG4gIH0sIFtqaW11TWFwVmlldywgaGFuZGxlQ2xvc2VdKVxyXG5cclxuICAvLyBGZWNob3UgcG9yIG9jdWx0YXIgZGnDoWxvZ29cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgcm9vdCA9IHJvb3RSZWYuY3VycmVudDsgaWYgKCFyb290KSByZXR1cm5cclxuICAgIGNvbnN0IGRsZyA9IGZpbmRDbG9zZXN0RGlhbG9nKHJvb3QpIGFzIEhUTUxFbGVtZW50IHwgbnVsbFxyXG4gICAgaWYgKCFkbGcpIHJldHVyblxyXG4gICAgbGV0IHdhc1Zpc2libGUgPSAhaXNEaWFsb2dIaWRkZW4oZGxnKVxyXG4gICAgY29uc3QgY2hlY2sgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vd0hpZGRlbiA9IGlzRGlhbG9nSGlkZGVuKGRsZylcclxuICAgICAgaWYgKHdhc1Zpc2libGUgJiYgbm93SGlkZGVuKSB7IGhhbmRsZUNsb3NlKCk7IHdhc1Zpc2libGUgPSBmYWxzZSB9XHJcbiAgICAgIGVsc2UgaWYgKCF3YXNWaXNpYmxlICYmICFub3dIaWRkZW4pIHsgd2FzVmlzaWJsZSA9IHRydWUgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjaGVjaylcclxuICAgIG1vLm9ic2VydmUoZGxnLCB7IGF0dHJpYnV0ZXM6IHRydWUsIGF0dHJpYnV0ZUZpbHRlcjogWydzdHlsZScsICdjbGFzcycsICdhcmlhLWhpZGRlbiddIH0pXHJcbiAgICBjaGVjaygpXHJcbiAgICByZXR1cm4gKCkgPT4gbW8uZGlzY29ubmVjdCgpXHJcbiAgfSwgW2hhbmRsZUNsb3NlXSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9uS2V5ID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHsgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgaGFuZGxlQ2xvc2UoKSB9XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXkpXHJcbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5KVxyXG4gIH0sIFtoYW5kbGVDbG9zZV0pXHJcblxyXG4gIC8qKiBTdW3DoXJpbyAqL1xyXG4gIGNvbnN0IHN1bW1hcnlHcm91cHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGJhc2U6IEFtb3N0cmFJdGVtW10gPSB3aXRoSW50ZXJlc3RcclxuICAgICAgPyAoZmFpeGFTZXQuc2l6ZSA+IDBcclxuICAgICAgICAgID8gKGRhZG9zRnVsbCA/PyBbXSkuZmlsdGVyKHggPT4gZmFpeGFTZXQuaGFzKE51bWJlcih4LmNvZGlnb1BvY28pKSlcclxuICAgICAgICAgIDogKGRhZG9zRmFpeGFBUEkgPz8gZGFkb3NGdWxsID8/IFtdKSlcclxuICAgICAgOiAoZGFkb3NGdWxsID8/IFtdKVxyXG5cclxuICAgIHJldHVybiB0aXBvc1NlbC5tYXAodGlwbyA9PiB7XHJcbiAgICAgIGNvbnN0IGNvciA9IGNvcmVzVGlwb3NbdGlwb11cclxuICAgICAgY29uc3QgZGFkb3MgPSBiYXNlLm1hcChkID0+ICh7IGNvZGlnb1BvY286IGQuY29kaWdvUG9jbywgdG90YWw6IGRbVFlQRV9GSUVMRFt0aXBvXV0gPz8gMCB9KSlcclxuICAgICAgbGV0IHJvd3MgPSBjYWxjdWxhclF1ZWJyYXMoZGFkb3MsIGNvcikucmV2ZXJzZSgpXHJcbiAgICAgIGlmICghc2hvd0VtcHR5KSByb3dzID0gcm93cy5maWx0ZXIociA9PiByLmNvdW50ID4gMCB8fCByLmxhYmVsLnN0YXJ0c1dpdGgoJ3wgMCB8JykpXHJcbiAgICAgIHJldHVybiB7IHRpcG8sIHJvd3MgfVxyXG4gICAgfSlcclxuICB9LCBbdGlwb3NTZWwsIHNob3dFbXB0eSwgd2l0aEludGVyZXN0LCBmYWl4YVNldCwgZGFkb3NGdWxsLCBkYWRvc0ZhaXhhQVBJXSlcclxuXHJcbiAgLyogPT09PT0gUmVuZGVyID09PT09ICovXHJcbiAgY29uc3QgaGFzQW55QmFzZSA9IChBcnJheS5pc0FycmF5KGRhZG9zRnVsbCkgJiYgZGFkb3NGdWxsLmxlbmd0aCA+IDApIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KGRhZG9zRmFpeGFBUEkpICYmIGRhZG9zRmFpeGFBUEkubGVuZ3RoID4gMClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY3NzPXt3cmFwcGVyU3R5bGV9IHJlZj17cm9vdFJlZn0+XHJcbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxQYW5lbFN0eWxlfSAvPlxyXG4gICAgICA8bGFiZWwgY3NzPXt0aXRsZVN0eWxlfT5TZWxlY2lvbmUgYSBkaXN0cmlidWnDp8OjbzwvbGFiZWw+XHJcblxyXG4gICAgICA8c2VsZWN0IGNzcz17c2VsZWN0U3R5bGV9IHZhbHVlPXtjYXRlZ29yaWF9IG9uQ2hhbmdlPXtlID0+IHNldENhdGVnb3JpYShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9Jyc+U2VsZWNpb25lIG8gdGlwbzwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9J3NhbXBsZSc+RGlzdHJpYnVpw6fDo28gZGUgYW1vc3RyYTwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgIHtjYXRlZ29yaWEgPT09ICdzYW1wbGUnICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2xvYWRpbmdGdWxsICYmIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4IH19PkNhcnJlZ2FuZG8gYmFzZeKApjwvZGl2Pn1cclxuICAgICAgICAgIHshIWVycm9yRnVsbCAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnI2IwMCcsIG1hcmdpbkJvdHRvbTogOCB9fT5FcnJvOiB7ZXJyb3JGdWxsfTwvZGl2Pn1cclxuICAgICAgICAgIHt3aXRoSW50ZXJlc3QgJiYgbG9hZGluZ0ludGVyZXN0ICYmIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4IH19PkNhcnJlZ2FuZG8gaW50ZXJ2YWxvIGRlIGludGVyZXNzZeKApjwvZGl2Pn1cclxuICAgICAgICAgIHt3aXRoSW50ZXJlc3QgJiYgISFlcnJvckludGVyZXN0ICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjYjAwJywgbWFyZ2luQm90dG9tOiA4IH19PkVycm86IHtlcnJvckludGVyZXN0fTwvZGl2Pn1cclxuXHJcbiAgICAgICAgICB7aGFzQW55QmFzZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtsaXN0U3R5bGV9PlxyXG4gICAgICAgICAgICAgIHtMSVNUX1RZUEVTLm1hcCh0ID0+IChcclxuICAgICAgICAgICAgICAgIC8vIGRlcG9pc1xyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGtleT17dH0gY3NzPXtjaGVja2JveExhYmVsU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RpcG9zU2VsLmluY2x1ZGVzKHQpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0VGlwb3NTZWwocHJldiA9PiBwcmV2LmluY2x1ZGVzKHQpID8gcHJldi5maWx0ZXIoeCA9PiB4ICE9PSB0KSA6IFsuLi5wcmV2LCB0XSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxibFwiPnt0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdC5zbGljZSgxKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7c3VtbWFyeUdyb3Vwcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IGNzcz17c3VtbWFyeUxpc3RTdHlsZX0+XHJcbiAgICAgICAgICB7c3VtbWFyeUdyb3Vwcy5tYXAoZ3JvdXAgPT4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtncm91cC50aXBvfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNzcz17bGVnZW5kSGVhZGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgeyh3aXRoSW50ZXJlc3QgPyAnSW50ZXJ2YWxvIGRlIEludGVyZXNzZSAtICcgOiAnJyl9XHJcbiAgICAgICAgICAgICAgICB7Z3JvdXAudGlwby5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGdyb3VwLnRpcG8uc2xpY2UoMSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2dyb3VwLnJvd3MubWFwKChyLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtncm91cC50aXBvfS0ke2lkeH1gfSBjc3M9e3N1bW1hcnlJdGVtU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNzcz17YnViYmxlQm94U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9e3Iuc2l6ZX0gaGVpZ2h0PXtyLnNpemV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17ci5zaXplIC8gMn0gY3k9e3Iuc2l6ZSAvIDJ9IHI9e3Iuc2l6ZSAvIDJ9IGZpbGw9e3IuY29yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY3NzPXtyYW5nZUxhYmVsU3R5bGV9PntyLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7KHN1bW1hcnlHcm91cHMubGVuZ3RoID4gMCB8fCBzaG93V2l0aEludGVyZXN0KSAmJiAoXHJcbiAgICAgICAgPGRpdiBjc3M9e2Zvb3RlclN0eWxlfT5cclxuICAgICAgICAgIHtzdW1tYXJ5R3JvdXBzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8bGFiZWwgY3NzPXtmb290ZXJMYWJlbFN0eWxlfSB0aXRsZT1cIkV4aWJpciB0YW1iw6ltIGNsYXNzZXMgc2VtIHBvw6dvc1wiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Nob3dFbXB0eX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNob3dFbXB0eShlLnRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIEV4aWJpciBjbGFzc2VzIHZhemlhc1xyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7c2hvd1dpdGhJbnRlcmVzdCAmJiAoXHJcbiAgICAgICAgICAgIDxsYWJlbCBjc3M9e2Zvb3RlckxhYmVsU3R5bGVJbnRlcmVzc2V9IHRpdGxlPVwiUXVhbmRvIG1hcmNhZG8sIGFwbGljYSBvIGZpbHRybyBkZSBJbnRlcnZhbG8gZGUgSW50ZXJlc3NlIChjw7NkaWdvcyB2aW5kb3MgZG8gRXhwbG9yYSBvdSB2aWEgQVBJKVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3dpdGhJbnRlcmVzdH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgaW50ZXJlc3RNYW51YWxSZWYuY3VycmVudCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgc2V0V2l0aEludGVyZXN0KGUudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgSW50ZXJ2YWxvIGRlIGludGVyZXNzZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudCB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19IG9uQWN0aXZlVmlld0NoYW5nZT17c2V0SmltdU1hcFZpZXd9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0gLy8gTWVsaG9yYW1lbnRvXHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=