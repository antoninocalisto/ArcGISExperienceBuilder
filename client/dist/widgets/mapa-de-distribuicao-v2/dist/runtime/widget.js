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

/***/ "./your-extensions/widgets/mapa-de-distribuicao-v2/src/runtime/utils.ts":
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/mapa-de-distribuicao-v2/src/runtime/utils.ts ***!
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
  !*** ./your-extensions/widgets/mapa-de-distribuicao-v2/src/runtime/widget.tsx ***!
  \********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/mapa-de-distribuicao-v2/src/runtime/utils.ts");
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



/* ===== Config de layout inicial ===== */
const DEFAULT_OPEN = { x: 938, y: 47, height: 550 }; // posição/altura padrão ao abrir a PRIMEIRA vez
const DEFAULT_WIDTH = 360; // largura base (não força, só sugere)
/* ===== util ===== */
const log10 = (x) => Math.log10 ? Math.log10(x) : Math.log(x) / Math.LN10;
const TYPE_FIELD = {
    lateral: 'totalAmostrasLaterais',
    testemunho: 'totalTestemunhos',
    calha: 'totalCalhas',
    plug: 'totalPlugs',
    'whole core': 'totalWholeCore'
};
const LIST_TYPES = Object.keys(TYPE_FIELD);
const DEFAULT_FAIXA_INTERESSE = false;
/* ===== sessão / fetch via página-pai (Explora) ===== */
function getSessionEndpoint() {
    return '/ExPlora/explora';
}
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
    return (Array.isArray(raw) ? raw : []).map((r) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        return ({
            codigoPoco: Number((_d = (_c = (_b = (_a = r.codigoPoco) !== null && _a !== void 0 ? _a : r.POCO_CD_POCO) !== null && _b !== void 0 ? _b : r.poco) !== null && _c !== void 0 ? _c : r.codigo) !== null && _d !== void 0 ? _d : 0),
            totalAmostrasLaterais: Number((_f = (_e = r.totalAmostrasLaterais) !== null && _e !== void 0 ? _e : r.laterais) !== null && _f !== void 0 ? _f : 0),
            totalCalhas: Number((_h = (_g = r.totalCalhas) !== null && _g !== void 0 ? _g : r.calhas) !== null && _h !== void 0 ? _h : 0),
            totalPlugs: Number((_k = (_j = r.totalPlugs) !== null && _j !== void 0 ? _j : r.plugs) !== null && _k !== void 0 ? _k : 0),
            totalTestemunhos: Number((_m = (_l = r.totalTestemunhos) !== null && _l !== void 0 ? _l : r.testemunhos) !== null && _m !== void 0 ? _m : 0),
            totalWholeCore: Number((_p = (_o = r.totalWholeCore) !== null && _o !== void 0 ? _o : r.wholeCore) !== null && _p !== void 0 ? _p : 0)
        });
    }).filter(x => !!x.codigoPoco);
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
        window.parent.postMessage({
            type: 'fetchDistribuicaoAmostras',
            url: getSessionEndpoint(),
            body,
            reqId
        }, targetOrigin);
    });
}
function fetchDistribuicaoAmostras() {
    return __awaiter(this, arguments, void 0, function* (faixaInteresse = false) {
        const body = buildSessionBody(faixaInteresse);
        return fetchViaParent(body);
    });
}
/* ===== estilos ===== */
const MAX_BUBBLE = 40;
const globalPanelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  /* largura base e z-index; não quebrar drag/resize do EB */
  div[role='dialog'][aria-label='mapa-de-distribuicao-v2'],
  div[role='dialog'][aria-label='mapa-de-distribuicao']{
    z-index: 9999;
    width: ${DEFAULT_WIDTH}px;
  }
`;
const bubbleBoxStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  width: ${MAX_BUBBLE}px;
  height: ${MAX_BUBBLE}px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;
const wrapperStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  position: relative; width: 100%; height: 100%;
  background: #fff; border: 1px solid #ddd; border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,.1); padding: 16px; overflow: visible;
`;
const titleStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `font-weight:600; margin-bottom:4px; display:block;`;
const selectStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `width:100%; padding:6px 8px; margin-bottom:12px;
  border:1px solid #ccc; border-radius:4px;`;
const listStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `overflow-y:auto; margin-bottom:12px;
  padding:8px; background:#fafafa; border:1px solid #eee; border-radius:4px;`;
const checkboxRowStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `display:flex; align-items:center; margin-bottom:6px; cursor:pointer;`;
const summaryListStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  max-height: 300px;
  overflow-y: auto;
  margin-top: 8px;
  padding: 8px;
  padding-bottom: 36px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  position: relative;
`;
const summaryItemStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `display:flex; align-items:center; margin-bottom:6px;`;
const rangeLabelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `font-size:0.9rem;`;
const footerStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  position: sticky;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #eee;
  padding: 4px 0;
  display: flex;
  align-items: center;
`;
const footerLabelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 0.9rem;
`;
/* ===== cálculo dos breaks ===== */
function calcularQuebras(dados, colorFill) {
    const valores = dados.map(p => p.total);
    let min = Math.min(...valores);
    let max = Math.max(...valores);
    const info = [];
    if (min === 0 && max === 0) {
        info.push({ label: 'Não há dados suficientes', size: 0, cor: colorFill, count: 0 });
    }
    else {
        const zerados = valores.filter(v => v === 0).length;
        const naoZerados = valores.filter(v => v > 0);
        if (zerados > 0) {
            info.push({
                label: `| 0 | (${zerados} poço${zerados > 1 ? 's' : ''})`,
                size: 6, cor: 'rgba(200,200,200,0.3)', count: zerados
            });
        }
        min = 1;
        const n = naoZerados.length;
        const numClasses = Math.max(2, Math.round(1 + 3.3 * log10(n)));
        const breaks = Math.ceil((max - min + 1) / numClasses);
        const maxSize = 40;
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
/* ===== helpers DOM ===== */
function getDialogParts() {
    const dlg = document.querySelector('div[role="dialog"][aria-label="mapa-de-distribuicao-v2"], div[role="dialog"][aria-label="mapa-de-distribuicao"]');
    if (!dlg)
        return { dlg: null, box: null, header: null };
    const header = dlg.querySelector('.jimu-dialog__header, .jimu-dialog-header, .dialog-header, [role="toolbar"], header') ||
        null;
    // wrapper que o EB costuma redimensionar
    let box = dlg.querySelector('.jimu-dialog__dialog, .jimu-dialog') ||
        (header === null || header === void 0 ? void 0 : header.parentElement) ||
        null;
    if (box && header && box === header)
        box = header.parentElement;
    if (!box)
        box = dlg;
    return { dlg, box, header };
}
function getDialogBodies(dlg) {
    return Array.from(dlg.querySelectorAll('.jimu-dialog__body, .jimu-dialog-body, .dialog-body, .modal-body, .jimu-dialog__content, .jimu-dialog-content'));
}
function isToggleLike(el) {
    if (!el)
        return false;
    const cls = (el.className || '').toString().toLowerCase();
    const label = (el.getAttribute('aria-label') || el.getAttribute('title') || el.textContent || '').toLowerCase();
    return /(^|\s)action-(collapse|expand)(\s|$)/.test(cls) ||
        /(recolher|minimizar|expandir|maximizar|restore|collapse|expand)/i.test(label);
}
function findToggleFromTarget(t) {
    if (!t)
        return null;
    return t.closest('button,[role="button"],[title],[aria-label],.icon,.icons,.jimu-title,[class*="action-"]') || null;
}
/* ===== componente ===== */
function Widget(props) {
    var _a;
    const [jimuMapView, setJimuMapView] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState();
    const [categoria, setCategoria] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('');
    const [tiposSel, setTiposSel] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [showEmpty, setShowEmpty] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [dadosAPI, setDadosAPI] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [loading, setLoading] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [error, setError] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('');
    const [collapsed, setCollapsed] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const collapsedRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(false);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => { collapsedRef.current = collapsed; }, [collapsed]);
    const prevTiposSelRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef([]);
    const rootRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const lastExpandedHRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    /* === busca dados === */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        let cancelled = false;
        function run() {
            return __awaiter(this, void 0, void 0, function* () {
                if (categoria !== 'sample')
                    return;
                setLoading(true);
                setError('');
                try {
                    const data = yield fetchDistribuicaoAmostras(DEFAULT_FAIXA_INTERESSE);
                    if (!cancelled) {
                        setDadosAPI(data);
                        setTiposSel([]);
                        prevTiposSelRef.current = [];
                    }
                }
                catch (e) {
                    if (!cancelled) {
                        setError((e === null || e === void 0 ? void 0 : e.message) || 'Falha ao buscar dados');
                        setDadosAPI([]);
                    }
                }
                finally {
                    if (!cancelled)
                        setLoading(false);
                }
            });
        }
        run();
        return () => { cancelled = true; };
    }, [categoria]);
    /* === helper: array por tipo === */
    const gerarArrayTotal = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((tipo) => (dadosAPI !== null && dadosAPI !== void 0 ? dadosAPI : []).map(d => {
        var _a;
        return ({
            codigoPoco: d.codigoPoco,
            total: (_a = d[TYPE_FIELD[tipo]]) !== null && _a !== void 0 ? _a : 0
        });
    }), [dadosAPI]);
    /* === diffs de camadas sem piscar === */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (!jimuMapView)
            return;
        if (!dadosAPI || dadosAPI.length === 0)
            return;
        const { view } = jimuMapView;
        const prev = new Set(prevTiposSelRef.current);
        const cur = new Set(tiposSel);
        const adicionados = [...cur].filter(t => !prev.has(t));
        const removidos = [...prev].filter(t => !cur.has(t));
        removidos.forEach(t => {
            const layer = view.map.findLayerById('amostras_' + t);
            if (layer)
                view.map.remove(layer);
        });
        adicionados.forEach(tipo => {
            const dados = gerarArrayTotal(tipo);
            const cor = _utils__WEBPACK_IMPORTED_MODULE_2__.coresTipos[tipo] || 'rgba(0,0,0,0.5)';
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.gerarMapaDistribuicaoEB)({
                jimuMapView,
                dados,
                colorFill: cor,
                idCamada: 'amostras_' + tipo,
                idLegenda: 'lgd_amostras_' + tipo,
                titleLegenda: tipo.charAt(0).toUpperCase() + tipo.slice(1)
            });
        });
        prevTiposSelRef.current = tiposSel;
    }, [jimuMapView, dadosAPI, tiposSel, gerarArrayTotal]);
    /* === fechar: limpa tudo e reseta flags (reabre com padrão) === */
    const handleClose = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => {
        var _a, _b;
        try {
            if (jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) {
                const { view } = jimuMapView;
                LIST_TYPES.forEach(t => {
                    const lyr = view.map.findLayerById('amostras_' + t);
                    if (lyr)
                        view.map.remove(lyr);
                });
                (_b = (_a = view.map.layers) === null || _a === void 0 ? void 0 : _a.forEach) === null || _b === void 0 ? void 0 : _b.call(_a, (lyr) => {
                    var _a, _b;
                    if ((_b = (_a = lyr === null || lyr === void 0 ? void 0 : lyr.id) === null || _a === void 0 ? void 0 : _a.startsWith) === null || _b === void 0 ? void 0 : _b.call(_a, 'amostras_'))
                        view.map.remove(lyr);
                });
            }
        }
        catch (_c) { }
        setTiposSel([]);
        prevTiposSelRef.current = [];
        setShowEmpty(false);
        setDadosAPI(null);
        setError('');
        setCategoria('');
        lastExpandedHRef.current = null;
        setCollapsed(false);
        const { dlg } = getDialogParts();
        if (dlg) {
            dlg.removeAttribute('data-user-moved');
            dlg.removeAttribute('data-user-sized');
        }
        if (rootRef.current)
            rootRef.current.style.display = 'block';
    }, [jimuMapView]);
    /* === observar abrir/fechar + marcar “moved/sized” === */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const { dlg, box } = getDialogParts();
        if (!dlg || !box)
            return;
        // 1) marca "user moved" quando transform muda
        const moStyle = new MutationObserver(() => {
            const tr = (dlg.style.transform || '').trim();
            if (tr && !dlg.hasAttribute('data-user-moved'))
                dlg.setAttribute('data-user-moved', '1');
        });
        moStyle.observe(dlg, { attributes: true, attributeFilter: ['style'] });
        // 2) marca "user sized" quando variar altura
        let lastH = Math.round(box.getBoundingClientRect().height);
        const ro = new ResizeObserver(() => {
            const h = Math.round(box.getBoundingClientRect().height);
            if (Math.abs(h - lastH) >= 6) {
                dlg.setAttribute('data-user-sized', '1');
                lastH = h;
            }
        });
        ro.observe(box);
        // 3) botão fechar -> reset
        const closeBtn = dlg.querySelector('button[aria-label="Close"], button[title="Close"], button[aria-label="Fechar"], button[title="Fechar"], [data-action="close"]');
        closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', handleClose);
        // 4) quando visível novamente, aplica layout padrão uma ÚNICA vez
        let appliedThisOpen = false;
        const applyDefaultOnce = () => {
            if (appliedThisOpen)
                return;
            const hidden = dlg.getAttribute('aria-hidden') === 'true' ||
                getComputedStyle(dlg).display === 'none' ||
                getComputedStyle(dlg).visibility === 'hidden';
            if (hidden)
                return;
            // posição padrão se usuário NÃO moveu
            if (!dlg.hasAttribute('data-user-moved')) {
                dlg.style.transform = `translate(${DEFAULT_OPEN.x}px, ${DEFAULT_OPEN.y}px)`;
            }
            // altura padrão se usuário NÃO redimensionou
            if (!dlg.hasAttribute('data-user-sized')) {
                box.style.height = `${DEFAULT_OPEN.height}px`;
                box.style.maxHeight = 'calc(100% - 24px)';
                box.style.overflow = 'visible';
            }
            // garante bodies visíveis ao abrir
            getDialogBodies(dlg).forEach(b => {
                b.style.removeProperty('display');
                b.removeAttribute('aria-hidden');
            });
            if (rootRef.current)
                rootRef.current.style.display = 'block';
            setCollapsed(false);
            appliedThisOpen = true;
        };
        const moOpen = new MutationObserver(applyDefaultOnce);
        moOpen.observe(dlg, { attributes: true, attributeFilter: ['style', 'class', 'aria-hidden'] });
        requestAnimationFrame(applyDefaultOnce);
        return () => {
            closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.removeEventListener('click', handleClose);
            moOpen.disconnect();
            moStyle.disconnect();
            ro.disconnect();
        };
    }, [handleClose]);
    /* === recolher/expandir (robusto) === */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const { dlg, box } = getDialogParts();
        if (!dlg || !box)
            return;
        const getHeader = () => dlg.querySelector('.jimu-dialog__header, .jimu-dialog-header, .dialog-header, [role="toolbar"], header') ||
            dlg.firstElementChild;
        const bodies = getDialogBodies(dlg);
        const getContainers = () => Array.from(new Set([
            dlg,
            box,
            ...Array.from(dlg.querySelectorAll('.jimu-dialog__dialog, .jimu-dialog, .jimu-dialog__content, .jimu-dialog-content, .modal-content'))
        ]));
        const showBodies = () => {
            bodies.forEach(b => {
                b.style.removeProperty('display');
                b.removeAttribute('aria-hidden');
            });
            if (rootRef.current)
                rootRef.current.style.display = 'block';
            dlg.classList.remove('collapsed', 'minimized', 'is-collapsed', 'is-minimized');
            dlg.removeAttribute('data-eb-collapsed');
            dlg.setAttribute('aria-expanded', 'true');
        };
        const hideBodies = () => {
            bodies.forEach(b => {
                b.style.setProperty('display', 'none', 'important');
                b.setAttribute('aria-hidden', 'true');
            });
            if (rootRef.current)
                rootRef.current.style.display = 'none';
            dlg.classList.add('collapsed');
            dlg.setAttribute('data-eb-collapsed', '1');
            dlg.setAttribute('aria-expanded', 'false');
        };
        const forceHeights = (hPx, collapsedFlag) => {
            const containers = getContainers();
            containers.forEach(el => {
                el.style.removeProperty('min-height');
                el.style.setProperty('height', `${hPx}px`, 'important');
                el.style.setProperty('max-height', collapsedFlag ? `${hPx}px` : 'calc(100% - 24px)', 'important');
                el.style.setProperty('overflow', collapsedFlag ? 'hidden' : 'visible', 'important');
            });
        };
        const applyExpandHeight = (h) => {
            const tgt = Math.max(120, Math.round(h || 0)) || DEFAULT_OPEN.height;
            forceHeights(tgt, false);
            showBodies();
        };
        const setCollapsedUI = (wantCollapsed) => {
            if (wantCollapsed) {
                // salva altura atual antes de recolher
                const hNow = Math.round(box.getBoundingClientRect().height);
                if (hNow > 100)
                    lastExpandedHRef.current = hNow;
                const header = getHeader();
                const hHeader = Math.max(40, Math.round((header === null || header === void 0 ? void 0 : header.getBoundingClientRect().height) || 56));
                forceHeights(hHeader, true);
                hideBodies();
                setCollapsed(true);
            }
            else {
                const targetH = (lastExpandedHRef.current && lastExpandedHRef.current > 100)
                    ? lastExpandedHRef.current
                    : DEFAULT_OPEN.height;
                applyExpandHeight(targetH);
                setCollapsed(false);
                // reforços contra reescritas tardias
                requestAnimationFrame(() => applyExpandHeight(targetH));
                setTimeout(() => applyExpandHeight(targetH), 60);
                setTimeout(() => applyExpandHeight(targetH), 160);
            }
        };
        // salva altura ANTES do clique que vai colapsar
        const onPointerDownCapture = (e) => {
            const el = findToggleFromTarget(e.target);
            if (!el || !isToggleLike(el))
                return;
            const cls = (el.className || '').toString().toLowerCase();
            const label = (el.getAttribute('aria-label') || el.getAttribute('title') || el.textContent || '').toLowerCase();
            const willCollapse = cls.includes('action-collapse') || /(recolher|minimizar|collapse)/i.test(label);
            if (willCollapse) {
                const hNow = Math.round(box.getBoundingClientRect().height);
                if (hNow > 100)
                    lastExpandedHRef.current = hNow;
            }
        };
        // aplica a ação após o clique
        const onClickCapture = (e) => {
            const el = findToggleFromTarget(e.target);
            if (!el || !isToggleLike(el))
                return;
            const cls = (el.className || '').toString().toLowerCase();
            const label = (el.getAttribute('aria-label') || el.getAttribute('title') || el.textContent || '').toLowerCase();
            let toCollapse = null;
            if (cls.includes('action-collapse') || /(recolher|minimizar|collapse)/i.test(label))
                toCollapse = true;
            if (cls.includes('action-expand') || /(expandir|maximizar|restore|expand)/i.test(label))
                toCollapse = false;
            // fallback: se não deu pra inferir pelo rótulo, alterna
            if (toCollapse === null)
                toCollapse = !collapsedRef.current;
            setCollapsedUI(toCollapse);
            requestAnimationFrame(() => setCollapsedUI(toCollapse));
        };
        // se alguém “colar” em 40px quando deveríamos estar expandidos, reexpande
        const ro = new ResizeObserver(() => {
            if (!collapsedRef.current) {
                const header = getHeader();
                const hHeader = Math.max(40, Math.round((header === null || header === void 0 ? void 0 : header.getBoundingClientRect().height) || 56));
                const h = Math.round(box.getBoundingClientRect().height);
                if (h <= hHeader + 2) {
                    const targetH = (lastExpandedHRef.current && lastExpandedHRef.current > 100)
                        ? lastExpandedHRef.current
                        : DEFAULT_OPEN.height;
                    applyExpandHeight(targetH);
                }
            }
        });
        ro.observe(box);
        document.addEventListener('pointerdown', onPointerDownCapture, true);
        document.addEventListener('click', onClickCapture, true);
        return () => {
            ro.disconnect();
            document.removeEventListener('pointerdown', onPointerDownCapture, true);
            document.removeEventListener('click', onClickCapture, true);
        };
    }, []); // sem depender de `collapsed`
    /* === UI === */
    const toggleTipo = (tipo) => setTiposSel(prev => prev.includes(tipo) ? prev.filter(t => t !== tipo) : [...prev, tipo]);
    const summaryGroups = tiposSel.map(tipo => {
        const dados = gerarArrayTotal(tipo);
        const cor = _utils__WEBPACK_IMPORTED_MODULE_2__.coresTipos[tipo];
        let rows = calcularQuebras(dados, cor).reverse();
        if (!showEmpty)
            rows = rows.filter(r => r.count > 0 || r.label.startsWith('| 0 |'));
        return { tipo, rows };
    });
    const hasData = Array.isArray(dadosAPI) && dadosAPI.length > 0;
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: rootRef, css: wrapperStyle },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.Global, { styles: globalPanelStyle }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: titleStyle }, "Selecione a distribui\u00E7\u00E3o"),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", { css: selectStyle, value: categoria, onChange: e => { setCategoria(e.target.value); } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: '' }, "Selecione o tipo"),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 'sample' }, "Distribui\u00E7\u00E3o de amostra")),
        categoria === 'sample' && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            loading && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: 8 } }, "Carregando dados da sess\u00E3o\u2026"),
            !!error && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#b00', marginBottom: 8 } },
                "Erro: ",
                error),
            hasData && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: listStyle }, LIST_TYPES.map(t => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: t, css: checkboxRowStyle, onClick: () => toggleTipo(t) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'checkbox', checked: tiposSel.includes(t), readOnly: true, style: { marginRight: 6 } }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, t.charAt(0).toUpperCase() + t.slice(1))))))))),
        summaryGroups.length > 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: summaryListStyle },
            summaryGroups.map(group => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, { key: group.tipo },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `font-weight:600; margin:4px 0;` }, group.tipo.charAt(0).toUpperCase() + group.tipo.slice(1)),
                group.rows.map((r, idx) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: `${group.tipo}-${idx}`, css: summaryItemStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: bubbleBoxStyle },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: r.size, height: r.size },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: r.size / 2, cy: r.size / 2, r: r.size / 2, fill: r.cor }))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { css: rangeLabelStyle }, r.label))))))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: footerStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: footerLabelStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: showEmpty, onChange: e => setShowEmpty(e.target.checked) }),
                    "Exibir classes vazias")))),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXBhLWRlLWRpc3RyaWJ1aWNhby12Mi9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxXQUFXO0FBQ2dEO0FBQ1g7QUFDNEI7QUFDSjtBQUV4RSxNQUFNLFVBQVUsR0FBMkI7SUFDekMsT0FBTyxFQUFFLHdCQUF3QjtJQUNqQyxVQUFVLEVBQUUsd0JBQXdCO0lBQ3BDLEtBQUssRUFBRSx5QkFBeUI7SUFDaEMsSUFBSSxFQUFFLDBCQUEwQjtJQUNoQyxZQUFZLEVBQUUsd0JBQXdCO0NBQ3ZDO0FBRU0sU0FBZSx1QkFBdUI7eURBQUMsRUFDNUMsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFNBQVMsRUFDVCxZQUFZLEVBUWI7UUFDQyxNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSTtRQUM3QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRztRQUVwQixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDdEQsTUFBTSxVQUFVLEdBQUcsb0JBQW9CLE9BQU8sR0FBRztRQUVqRCxNQUFNLFdBQVcsR0FBRyxJQUFJLHdFQUFZLENBQUM7WUFDbkMsR0FBRyxFQUFFLHlGQUF5RjtZQUM5RixvQkFBb0IsRUFBRSxVQUFVO1lBQ2hDLEtBQUssRUFBRSxPQUFPO1lBQ2QsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztRQUVGLE1BQU0sV0FBVyxDQUFDLElBQUksRUFBRTtRQUV4QixNQUFNLFdBQVcsR0FBRyxNQUFNLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDbEQsS0FBSyxFQUFF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dHMvbWFwYS1kZS1kaXN0cmlidWljYW8tdjIvc3JjL3J1bnRpbWUvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvcmVuZGVyZXJzL0NsYXNzQnJlYWtzUmVuZGVyZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvc3ltYm9scy9TaW1wbGVNYXJrZXJTeW1ib2xcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9MZWdlbmRcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcGEtZGUtZGlzdHJpYnVpY2FvLXYyL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdXRpbHMudHNcclxuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tIFwiQGFyY2dpcy9jb3JlL2xheWVycy9GZWF0dXJlTGF5ZXJcIlxyXG5pbXBvcnQgTGVnZW5kIGZyb20gXCJAYXJjZ2lzL2NvcmUvd2lkZ2V0cy9MZWdlbmRcIlxyXG5pbXBvcnQgQ2xhc3NCcmVha3NSZW5kZXJlciBmcm9tIFwiQGFyY2dpcy9jb3JlL3JlbmRlcmVycy9DbGFzc0JyZWFrc1JlbmRlcmVyXCJcclxuaW1wb3J0IFNpbXBsZU1hcmtlclN5bWJvbCBmcm9tIFwiQGFyY2dpcy9jb3JlL3N5bWJvbHMvU2ltcGxlTWFya2VyU3ltYm9sXCJcclxuXHJcbmNvbnN0IGNvcmVzVGlwb3M6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgbGF0ZXJhbDogXCJyZ2JhKDg4LCAxOSwgMjUyLCAwLjcpXCIsXHJcbiAgdGVzdGVtdW5obzogXCJyZ2JhKDI1NSwgMCwgMjU1LCAwLjcpXCIsXHJcbiAgY2FsaGE6IFwicmdiYSgyNDUsIDIwMSwgMzgsIDAuNylcIixcclxuICBwbHVnOiBcInJnYmEoMTI1LCAyNTMsIDE0OCwgMC43KVwiLFxyXG4gIFwid2hvbGUgY29yZVwiOiBcInJnYmEoMjU1LCA0MywgMjQsIDAuNylcIlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIoe1xyXG4gIGppbXVNYXBWaWV3LFxyXG4gIGRhZG9zLFxyXG4gIGNvbG9yRmlsbCxcclxuICBpZENhbWFkYSxcclxuICBpZExlZ2VuZGEsXHJcbiAgdGl0bGVMZWdlbmRhXHJcbn06IHtcclxuICBqaW11TWFwVmlldzogYW55XHJcbiAgZGFkb3M6IHsgY29kaWdvUG9jbzogbnVtYmVyOyB0b3RhbDogbnVtYmVyIH1bXVxyXG4gIGNvbG9yRmlsbDogc3RyaW5nXHJcbiAgaWRDYW1hZGE6IHN0cmluZ1xyXG4gIGlkTGVnZW5kYTogc3RyaW5nXHJcbiAgdGl0bGVMZWdlbmRhOiBzdHJpbmdcclxufSkge1xyXG4gIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldy52aWV3XHJcbiAgY29uc3QgbWFwID0gdmlldy5tYXBcclxuXHJcbiAgY29uc3QgY29kaWdvcyA9IGRhZG9zLm1hcChwID0+IHAuY29kaWdvUG9jbykuam9pbignLCcpXHJcbiAgY29uc3QgZXhwcmVzc2lvbiA9IGBQT0NPX0NEX1BPQ08gSU4gKCR7Y29kaWdvc30pYFxyXG5cclxuICBjb25zdCBjYW1hZGFQb8Onb3MgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgIHVybDogJ2h0dHBzOi8vYmFzZWdpcy5wZXRyb2JyYXMuY29tLmJyL2FyY2dpcy9yZXN0L3NlcnZpY2VzL0VYUExPUkEvRmVhdHVyZV9Qb2Nvcy9NYXBTZXJ2ZXIvMCcsXHJcbiAgICBkZWZpbml0aW9uRXhwcmVzc2lvbjogZXhwcmVzc2lvbixcclxuICAgIHRpdGxlOiAnUG/Dp29zJyxcclxuICAgIG91dEZpZWxkczogWycqJ10sXHJcbiAgICB2aXNpYmxlOiBmYWxzZVxyXG4gIH0pXHJcblxyXG4gIGF3YWl0IGNhbWFkYVBvw6dvcy5sb2FkKClcclxuXHJcbiAgY29uc3QgcXVlcnlSZXN1bHQgPSBhd2FpdCBjYW1hZGFQb8Onb3MucXVlcnlGZWF0dXJlcyh7XHJcbiAgICB3aGVyZTogZXhwcmVzc2lvbixcclxuICAgIG91dEZpZWxkczogWycqJ10sXHJcbiAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGZlYXR1cmVzID0gcXVlcnlSZXN1bHQuZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiB7XHJcbiAgICBjb25zdCBkYWRvID0gZGFkb3MuZmluZChwID0+IHAuY29kaWdvUG9jbyA9PT0gZmVhdHVyZS5hdHRyaWJ1dGVzLlBPQ09fQ0RfUE9DTylcclxuICAgIGZlYXR1cmUuYXR0cmlidXRlcy5QT0NPX01EX01FUklEX0NFTlQgPSBkYWRvID8gZGFkby50b3RhbCA6IDBcclxuICAgIHJldHVybiBmZWF0dXJlXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgdmFsb3JlcyA9IGRhZG9zLm1hcChwID0+IHAudG90YWwpXHJcbiAgbGV0IG1pbiA9IE1hdGgubWluKC4uLnZhbG9yZXMpXHJcbiAgbGV0IG1heCA9IE1hdGgubWF4KC4uLnZhbG9yZXMpXHJcblxyXG4gIGNvbnN0IGluZm8gPSBbXVxyXG4gIGNvbnN0IG91dGxpbmUgPSB7IGNvbG9yOiBcImJsYWNrXCIsIHdpZHRoOiBcIjFweFwiIH1cclxuXHJcbiAgaWYgKG1pbiA9PT0gbWF4ICYmIG1pbiA9PT0gMCkge1xyXG4gICAgaW5mby5wdXNoKHtcclxuICAgICAgbWluVmFsdWU6IDAsXHJcbiAgICAgIG1heFZhbHVlOiAwLFxyXG4gICAgICBsYWJlbDogXCJOw6NvIGjDoSBkYWRvcyBzdWZpY2llbnRlc1wiLFxyXG4gICAgICBzeW1ib2w6IG5ldyBTaW1wbGVNYXJrZXJTeW1ib2woeyBjb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCIsIHNpemU6IDAsIHN0eWxlOiBcImNpcmNsZVwiLCBvdXRsaW5lIH0pXHJcbiAgICB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB6ZXJhZG9zID0gdmFsb3Jlcy5maWx0ZXIodiA9PiB2ID09PSAwKS5sZW5ndGhcclxuICAgIGNvbnN0IG5hb1plcmFkb3MgPSB2YWxvcmVzLmZpbHRlcih2ID0+IHYgPiAwKVxyXG5cclxuICAgIGlmICh6ZXJhZG9zID4gMCkge1xyXG4gICAgICBpbmZvLnB1c2goe1xyXG4gICAgICAgIG1pblZhbHVlOiAwLFxyXG4gICAgICAgIG1heFZhbHVlOiAwLFxyXG4gICAgICAgIGxhYmVsOiBgfCAwIHwgKCR7emVyYWRvc30gcG/Dp28ke3plcmFkb3MgPiAxID8gJ3MnIDogJyd9KWAsXHJcbiAgICAgICAgc3ltYm9sOiBuZXcgU2ltcGxlTWFya2VyU3ltYm9sKHsgY29sb3I6IFwicmdiYSgyMDAsMjAwLDIwMCwwLjMpXCIsIHNpemU6IDYsIHN0eWxlOiBcImNpcmNsZVwiLCBvdXRsaW5lIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbWluID0gMVxyXG4gICAgY29uc3QgbiA9IG5hb1plcmFkb3MubGVuZ3RoXHJcbiAgICBjb25zdCBudW1DbGFzc2VzID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZCgxICsgMy4zICogTWF0aC5sb2cxMChuKSkpXHJcbiAgICBjb25zdCBicmVha3MgPSBNYXRoLmNlaWwoKG1heCAtIG1pbiArIDEpIC8gbnVtQ2xhc3NlcylcclxuICAgIGNvbnN0IG1heFNpemUgPSA0MFxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ2xhc3NlczsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG1pblZhbHVlID0gbWluICsgKGkgKiBicmVha3MpXHJcbiAgICAgIGNvbnN0IG1heFZhbHVlID0gbWluICsgKChpICsgMSkgKiBicmVha3MpIC0gMVxyXG4gICAgICBpZiAobWluVmFsdWUgPiBtYXgpIGJyZWFrXHJcblxyXG4gICAgICBjb25zdCBjb3VudCA9IG5hb1plcmFkb3MuZmlsdGVyKHYgPT4gdiA+PSBtaW5WYWx1ZSAmJiB2IDw9IG1heFZhbHVlKS5sZW5ndGhcclxuICAgICAgY29uc3QgbGFiZWwgPSBgJHttaW5WYWx1ZX0gfC0tLXwgJHttYXhWYWx1ZX0gKCR7Y291bnR9IHBvw6dvJHtjb3VudCA+IDEgPyAncycgOiAnJ30pYFxyXG5cclxuICAgICAgY29uc3Qgc2l6ZSA9IDYgKyAoaSAqIChtYXhTaXplIC8gbnVtQ2xhc3NlcykpXHJcblxyXG4gICAgICBpbmZvLnB1c2goe1xyXG4gICAgICAgIG1pblZhbHVlLFxyXG4gICAgICAgIG1heFZhbHVlLFxyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHN5bWJvbDogbmV3IFNpbXBsZU1hcmtlclN5bWJvbCh7IGNvbG9yOiBjb2xvckZpbGwsIHNpemUsIHN0eWxlOiBcImNpcmNsZVwiLCBvdXRsaW5lIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJlciA9IG5ldyBDbGFzc0JyZWFrc1JlbmRlcmVyKHtcclxuICAgIGZpZWxkOiBcIlBPQ09fTURfTUVSSURfQ0VOVFwiLFxyXG4gICAgY2xhc3NCcmVha0luZm9zOiBpbmZvXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY2FtYWRhRGlzdHJpYnVpY2FvID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICBpZDogaWRDYW1hZGEsXHJcbiAgICBzb3VyY2U6IGZlYXR1cmVzLFxyXG4gICAgZmllbGRzOiBjYW1hZGFQb8Onb3MuZmllbGRzLFxyXG4gICAgb2JqZWN0SWRGaWVsZDogXCJPQkpFQ1RJRFwiLFxyXG4gICAgZ2VvbWV0cnlUeXBlOiBcInBvaW50XCIsXHJcbiAgICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9LFxyXG4gICAgcmVuZGVyZXIsXHJcbiAgICB0aXRsZTogdGl0bGVMZWdlbmRhLFxyXG4gICAgbGlzdE1vZGU6IFwiaGlkZVwiLFxyXG4gICAgLy8gbGF5ZXJDcmVhdGVkRnJvbVBvcnRhbDogZmFsc2VcclxuICB9KVxyXG5cclxuICBjb25zdCBleGlzdGVudGUgPSBtYXAuZmluZExheWVyQnlJZChpZENhbWFkYSlcclxuICBpZiAoZXhpc3RlbnRlKSBtYXAucmVtb3ZlKGV4aXN0ZW50ZSlcclxuICBtYXAuYWRkKGNhbWFkYURpc3RyaWJ1aWNhbylcclxuXHJcbiAgY29uc3QgbGVnZW5kID0gbmV3IExlZ2VuZCh7XHJcbiAgICB2aWV3LFxyXG4gICAgbGF5ZXJJbmZvczogW3sgbGF5ZXI6IGNhbWFkYURpc3RyaWJ1aWNhbywgdGl0bGU6IHRpdGxlTGVnZW5kYSB9XVxyXG4gIH0pXHJcbiAgLy8gdmlldy51aS5hZGQobGVnZW5kLCBcImJvdHRvbS1sZWZ0XCIpXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNvcmVzVGlwb3MgfSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfbGF5ZXJzX0ZlYXR1cmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfcmVuZGVyZXJzX0NsYXNzQnJlYWtzUmVuZGVyZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX3N5bWJvbHNfU2ltcGxlTWFya2VyU3ltYm9sX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV93aWRnZXRzX0xlZ2VuZF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuLyoqIEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50ICovXHJcbmltcG9ydCB7IFJlYWN0LCBqc3gsIGNzcywgR2xvYmFsIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIsIGNvcmVzVGlwb3MgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuLyogPT09PT0gQ29uZmlnIGRlIGxheW91dCBpbmljaWFsID09PT09ICovXHJcbmNvbnN0IERFRkFVTFRfT1BFTiA9IHsgeDogOTM4LCB5OiA0NywgaGVpZ2h0OiA1NTAgfSAvLyBwb3Npw6fDo28vYWx0dXJhIHBhZHLDo28gYW8gYWJyaXIgYSBQUklNRUlSQSB2ZXpcclxuY29uc3QgREVGQVVMVF9XSURUSCA9IDM2MCAvLyBsYXJndXJhIGJhc2UgKG7Do28gZm9yw6dhLCBzw7Mgc3VnZXJlKVxyXG5cclxuLyogPT09PT0gdXRpbCA9PT09PSAqL1xyXG5jb25zdCBsb2cxMCA9ICh4OiBudW1iZXIpID0+IE1hdGgubG9nMTAgPyBNYXRoLmxvZzEwKHgpIDogTWF0aC5sb2coeCkgLyBNYXRoLkxOMTBcclxuXHJcbnR5cGUgQW1vc3RyYUl0ZW0gPSB7XHJcbiAgY29kaWdvUG9jbzogbnVtYmVyXHJcbiAgdG90YWxBbW9zdHJhc0xhdGVyYWlzOiBudW1iZXJcclxuICB0b3RhbENhbGhhczogbnVtYmVyXHJcbiAgdG90YWxQbHVnczogbnVtYmVyXHJcbiAgdG90YWxUZXN0ZW11bmhvczogbnVtYmVyXHJcbiAgdG90YWxXaG9sZUNvcmU6IG51bWJlclxyXG59XHJcblxyXG5jb25zdCBUWVBFX0ZJRUxEOiBSZWNvcmQ8c3RyaW5nLCBrZXlvZiBBbW9zdHJhSXRlbT4gPSB7XHJcbiAgbGF0ZXJhbDogJ3RvdGFsQW1vc3RyYXNMYXRlcmFpcycsXHJcbiAgdGVzdGVtdW5obzogJ3RvdGFsVGVzdGVtdW5ob3MnLFxyXG4gIGNhbGhhOiAndG90YWxDYWxoYXMnLFxyXG4gIHBsdWc6ICd0b3RhbFBsdWdzJyxcclxuICAnd2hvbGUgY29yZSc6ICd0b3RhbFdob2xlQ29yZSdcclxufVxyXG5jb25zdCBMSVNUX1RZUEVTID0gT2JqZWN0LmtleXMoVFlQRV9GSUVMRClcclxuY29uc3QgREVGQVVMVF9GQUlYQV9JTlRFUkVTU0UgPSBmYWxzZVxyXG5cclxuLyogPT09PT0gc2Vzc8OjbyAvIGZldGNoIHZpYSBww6FnaW5hLXBhaSAoRXhwbG9yYSkgPT09PT0gKi9cclxuZnVuY3Rpb24gZ2V0U2Vzc2lvbkVuZHBvaW50KCk6IHN0cmluZyB7XHJcbiAgcmV0dXJuICcvRXhQbG9yYS9leHBsb3JhJ1xyXG59XHJcbmZ1bmN0aW9uIGJ1aWxkU2Vzc2lvbkJvZHkoZmFpeGFJbnRlcmVzc2U6IGJvb2xlYW4pIHtcclxuICBjb25zdCBwID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXHJcbiAgcC5zZXQoJ2hkU3lzJywgJ25vdmFpbnRjb25zJylcclxuICBwLnNldCgnaGRVQycsICdNYXBhJylcclxuICBwLnNldCgnaGRBY2FvJywgJ0NhcnJlZ2FyTWFwYURpc3RyaWJ1aWNhb0Ftb3N0cmFzQ29udGFkb3InKVxyXG4gIHAuc2V0KCdoZFNlc3Npb25GaWx0ZXInLCAndHJ1ZScpXHJcbiAgcC5zZXQoJ2ZhaXhhSW50ZXJlc3NlJywgU3RyaW5nKCEhZmFpeGFJbnRlcmVzc2UpKVxyXG4gIHJldHVybiBwLnRvU3RyaW5nKClcclxufVxyXG5mdW5jdGlvbiBub3JtYWxpemVMaXN0KHJhdzogYW55W10pOiBBbW9zdHJhSXRlbVtdIHtcclxuICByZXR1cm4gKEFycmF5LmlzQXJyYXkocmF3KSA/IHJhdyA6IFtdKS5tYXAoKHI6IGFueSkgPT4gKHtcclxuICAgIGNvZGlnb1BvY286IE51bWJlcihyLmNvZGlnb1BvY28gPz8gci5QT0NPX0NEX1BPQ08gPz8gci5wb2NvID8/IHIuY29kaWdvID8/IDApLFxyXG4gICAgdG90YWxBbW9zdHJhc0xhdGVyYWlzOiBOdW1iZXIoci50b3RhbEFtb3N0cmFzTGF0ZXJhaXMgPz8gci5sYXRlcmFpcyA/PyAwKSxcclxuICAgIHRvdGFsQ2FsaGFzOiBOdW1iZXIoci50b3RhbENhbGhhcyA/PyByLmNhbGhhcyA/PyAwKSxcclxuICAgIHRvdGFsUGx1Z3M6IE51bWJlcihyLnRvdGFsUGx1Z3MgPz8gci5wbHVncyA/PyAwKSxcclxuICAgIHRvdGFsVGVzdGVtdW5ob3M6IE51bWJlcihyLnRvdGFsVGVzdGVtdW5ob3MgPz8gci50ZXN0ZW11bmhvcyA/PyAwKSxcclxuICAgIHRvdGFsV2hvbGVDb3JlOiBOdW1iZXIoci50b3RhbFdob2xlQ29yZSA/PyByLndob2xlQ29yZSA/PyAwKVxyXG4gIH0pKS5maWx0ZXIoeCA9PiAhIXguY29kaWdvUG9jbylcclxufVxyXG5mdW5jdGlvbiBmZXRjaFZpYVBhcmVudChib2R5OiBzdHJpbmcpOiBQcm9taXNlPEFtb3N0cmFJdGVtW10+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcmVxSWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKVxyXG4gICAgbGV0IHRhcmdldE9yaWdpbiA9ICcqJ1xyXG4gICAgdHJ5IHsgaWYgKGRvY3VtZW50LnJlZmVycmVyKSB0YXJnZXRPcmlnaW4gPSBuZXcgVVJMKGRvY3VtZW50LnJlZmVycmVyKS5vcmlnaW4gfSBjYXRjaCB7IH1cclxuXHJcbiAgICBjb25zdCBvbk1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBkID0gZXZlbnQuZGF0YSB8fCB7fVxyXG4gICAgICBpZiAoZC5yZXFJZCAhPT0gcmVxSWQpIHJldHVyblxyXG4gICAgICBpZiAoZC50eXBlID09PSAnZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhczpvaycpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSlcclxuICAgICAgICByZXNvbHZlKG5vcm1hbGl6ZUxpc3QoZC5wYXlsb2FkKSlcclxuICAgICAgfSBlbHNlIGlmIChkLnR5cGUgPT09ICdmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzOmVycicpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSlcclxuICAgICAgICByZWplY3QobmV3IEVycm9yKGQubWVzc2FnZSB8fCAnRXJybyBubyBmZXRjaCB2aWEgcGFyZW50JykpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG5cclxuICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICB0eXBlOiAnZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcycsXHJcbiAgICAgIHVybDogZ2V0U2Vzc2lvbkVuZHBvaW50KCksXHJcbiAgICAgIGJvZHksXHJcbiAgICAgIHJlcUlkXHJcbiAgICB9LCB0YXJnZXRPcmlnaW4pXHJcbiAgfSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzKGZhaXhhSW50ZXJlc3NlID0gZmFsc2UpOiBQcm9taXNlPEFtb3N0cmFJdGVtW10+IHtcclxuICBjb25zdCBib2R5ID0gYnVpbGRTZXNzaW9uQm9keShmYWl4YUludGVyZXNzZSlcclxuICByZXR1cm4gZmV0Y2hWaWFQYXJlbnQoYm9keSlcclxufVxyXG5cclxuLyogPT09PT0gZXN0aWxvcyA9PT09PSAqL1xyXG5jb25zdCBNQVhfQlVCQkxFID0gNDBcclxuY29uc3QgZ2xvYmFsUGFuZWxTdHlsZSA9IGNzc2BcclxuICAvKiBsYXJndXJhIGJhc2UgZSB6LWluZGV4OyBuw6NvIHF1ZWJyYXIgZHJhZy9yZXNpemUgZG8gRUIgKi9cclxuICBkaXZbcm9sZT0nZGlhbG9nJ11bYXJpYS1sYWJlbD0nbWFwYS1kZS1kaXN0cmlidWljYW8tdjInXSxcclxuICBkaXZbcm9sZT0nZGlhbG9nJ11bYXJpYS1sYWJlbD0nbWFwYS1kZS1kaXN0cmlidWljYW8nXXtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICB3aWR0aDogJHtERUZBVUxUX1dJRFRIfXB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBidWJibGVCb3hTdHlsZSA9IGNzc2BcclxuICB3aWR0aDogJHtNQVhfQlVCQkxFfXB4O1xyXG4gIGhlaWdodDogJHtNQVhfQlVCQkxFfXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuYFxyXG5jb25zdCB3cmFwcGVyU3R5bGUgPSBjc3NgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwwLDAsLjEpOyBwYWRkaW5nOiAxNnB4OyBvdmVyZmxvdzogdmlzaWJsZTtcclxuYFxyXG5jb25zdCB0aXRsZVN0eWxlID0gY3NzYGZvbnQtd2VpZ2h0OjYwMDsgbWFyZ2luLWJvdHRvbTo0cHg7IGRpc3BsYXk6YmxvY2s7YFxyXG5jb25zdCBzZWxlY3RTdHlsZSA9IGNzc2B3aWR0aDoxMDAlOyBwYWRkaW5nOjZweCA4cHg7IG1hcmdpbi1ib3R0b206MTJweDtcclxuICBib3JkZXI6MXB4IHNvbGlkICNjY2M7IGJvcmRlci1yYWRpdXM6NHB4O2BcclxuY29uc3QgbGlzdFN0eWxlID0gY3NzYG92ZXJmbG93LXk6YXV0bzsgbWFyZ2luLWJvdHRvbToxMnB4O1xyXG4gIHBhZGRpbmc6OHB4OyBiYWNrZ3JvdW5kOiNmYWZhZmE7IGJvcmRlcjoxcHggc29saWQgI2VlZTsgYm9yZGVyLXJhZGl1czo0cHg7YFxyXG5jb25zdCBjaGVja2JveFJvd1N0eWxlID0gY3NzYGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBtYXJnaW4tYm90dG9tOjZweDsgY3Vyc29yOnBvaW50ZXI7YFxyXG5jb25zdCBzdW1tYXJ5TGlzdFN0eWxlID0gY3NzYFxyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzZweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYFxyXG5jb25zdCBzdW1tYXJ5SXRlbVN0eWxlID0gY3NzYGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBtYXJnaW4tYm90dG9tOjZweDtgXHJcbmNvbnN0IHJhbmdlTGFiZWxTdHlsZSA9IGNzc2Bmb250LXNpemU6MC45cmVtO2BcclxuY29uc3QgZm9vdGVyU3R5bGUgPSBjc3NgXHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICBwYWRkaW5nOiA0cHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgZm9vdGVyTGFiZWxTdHlsZSA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG5gXHJcblxyXG4vKiA9PT09PSBjw6FsY3VsbyBkb3MgYnJlYWtzID09PT09ICovXHJcbmZ1bmN0aW9uIGNhbGN1bGFyUXVlYnJhcyhkYWRvczogeyB0b3RhbDogbnVtYmVyIH1bXSwgY29sb3JGaWxsOiBzdHJpbmcpIHtcclxuICBjb25zdCB2YWxvcmVzID0gZGFkb3MubWFwKHAgPT4gcC50b3RhbClcclxuICBsZXQgbWluID0gTWF0aC5taW4oLi4udmFsb3JlcylcclxuICBsZXQgbWF4ID0gTWF0aC5tYXgoLi4udmFsb3JlcylcclxuICBjb25zdCBpbmZvOiB7IGxhYmVsOiBzdHJpbmc7IHNpemU6IG51bWJlcjsgY29yOiBzdHJpbmc7IGNvdW50OiBudW1iZXIgfVtdID0gW11cclxuXHJcbiAgaWYgKG1pbiA9PT0gMCAmJiBtYXggPT09IDApIHtcclxuICAgIGluZm8ucHVzaCh7IGxhYmVsOiAnTsOjbyBow6EgZGFkb3Mgc3VmaWNpZW50ZXMnLCBzaXplOiAwLCBjb3I6IGNvbG9yRmlsbCwgY291bnQ6IDAgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgemVyYWRvcyA9IHZhbG9yZXMuZmlsdGVyKHYgPT4gdiA9PT0gMCkubGVuZ3RoXHJcbiAgICBjb25zdCBuYW9aZXJhZG9zID0gdmFsb3Jlcy5maWx0ZXIodiA9PiB2ID4gMClcclxuXHJcbiAgICBpZiAoemVyYWRvcyA+IDApIHtcclxuICAgICAgaW5mby5wdXNoKHtcclxuICAgICAgICBsYWJlbDogYHwgMCB8ICgke3plcmFkb3N9IHBvw6dvJHt6ZXJhZG9zID4gMSA/ICdzJyA6ICcnfSlgLFxyXG4gICAgICAgIHNpemU6IDYsIGNvcjogJ3JnYmEoMjAwLDIwMCwyMDAsMC4zKScsIGNvdW50OiB6ZXJhZG9zXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbWluID0gMVxyXG4gICAgY29uc3QgbiA9IG5hb1plcmFkb3MubGVuZ3RoXHJcbiAgICBjb25zdCBudW1DbGFzc2VzID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZCgxICsgMy4zICogbG9nMTAobikpKVxyXG4gICAgY29uc3QgYnJlYWtzID0gTWF0aC5jZWlsKChtYXggLSBtaW4gKyAxKSAvIG51bUNsYXNzZXMpXHJcbiAgICBjb25zdCBtYXhTaXplID0gNDBcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNsYXNzZXM7IGkrKykge1xyXG4gICAgICBjb25zdCBtaW5WYWx1ZSA9IG1pbiArIGkgKiBicmVha3NcclxuICAgICAgY29uc3QgbWF4VmFsdWUgPSBtaW4gKyAoaSArIDEpICogYnJlYWtzIC0gMVxyXG4gICAgICBpZiAobWluVmFsdWUgPiBtYXgpIGJyZWFrXHJcbiAgICAgIGNvbnN0IGNvdW50ID0gbmFvWmVyYWRvcy5maWx0ZXIodiA9PiB2ID49IG1pblZhbHVlICYmIHYgPD0gbWF4VmFsdWUpLmxlbmd0aFxyXG4gICAgICBjb25zdCBsYWJlbCA9IGAke21pblZhbHVlfSB8LS0tfCAke21heFZhbHVlfSAoJHtjb3VudH0gcG/Dp28ke2NvdW50ID4gMSA/ICdzJyA6ICcnfSlgXHJcbiAgICAgIGNvbnN0IHNpemUgPSA2ICsgaSAqIChtYXhTaXplIC8gbnVtQ2xhc3NlcylcclxuICAgICAgaW5mby5wdXNoKHsgbGFiZWwsIHNpemUsIGNvcjogY29sb3JGaWxsLCBjb3VudCB9KVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gaW5mb1xyXG59XHJcblxyXG4vKiA9PT09PSBoZWxwZXJzIERPTSA9PT09PSAqL1xyXG5mdW5jdGlvbiBnZXREaWFsb2dQYXJ0cygpIHtcclxuICBjb25zdCBkbGcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgJ2Rpdltyb2xlPVwiZGlhbG9nXCJdW2FyaWEtbGFiZWw9XCJtYXBhLWRlLWRpc3RyaWJ1aWNhby12MlwiXSwgZGl2W3JvbGU9XCJkaWFsb2dcIl1bYXJpYS1sYWJlbD1cIm1hcGEtZGUtZGlzdHJpYnVpY2FvXCJdJ1xyXG4gICkgYXMgSFRNTEVsZW1lbnQgfCBudWxsXHJcblxyXG4gIGlmICghZGxnKSByZXR1cm4geyBkbGc6IG51bGwgYXMgSFRNTEVsZW1lbnQgfCBudWxsLCBib3g6IG51bGwgYXMgSFRNTEVsZW1lbnQgfCBudWxsLCBoZWFkZXI6IG51bGwgYXMgSFRNTEVsZW1lbnQgfCBudWxsIH1cclxuXHJcbiAgY29uc3QgaGVhZGVyID1cclxuICAgIChkbGcucXVlcnlTZWxlY3RvcignLmppbXUtZGlhbG9nX19oZWFkZXIsIC5qaW11LWRpYWxvZy1oZWFkZXIsIC5kaWFsb2ctaGVhZGVyLCBbcm9sZT1cInRvb2xiYXJcIl0sIGhlYWRlcicpIGFzIEhUTUxFbGVtZW50KSB8fFxyXG4gICAgbnVsbFxyXG5cclxuICAvLyB3cmFwcGVyIHF1ZSBvIEVCIGNvc3R1bWEgcmVkaW1lbnNpb25hclxyXG4gIGxldCBib3ggPVxyXG4gICAgKGRsZy5xdWVyeVNlbGVjdG9yKCcuamltdS1kaWFsb2dfX2RpYWxvZywgLmppbXUtZGlhbG9nJykgYXMgSFRNTEVsZW1lbnQpIHx8XHJcbiAgICAoaGVhZGVyPy5wYXJlbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50IHwgbnVsbCkgfHxcclxuICAgIG51bGxcclxuXHJcbiAgaWYgKGJveCAmJiBoZWFkZXIgJiYgYm94ID09PSBoZWFkZXIpIGJveCA9IGhlYWRlci5wYXJlbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50XHJcbiAgaWYgKCFib3gpIGJveCA9IGRsZ1xyXG5cclxuICByZXR1cm4geyBkbGcsIGJveCwgaGVhZGVyIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGlhbG9nQm9kaWVzKGRsZzogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudFtdIHtcclxuICByZXR1cm4gQXJyYXkuZnJvbShcclxuICAgIGRsZy5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAnLmppbXUtZGlhbG9nX19ib2R5LCAuamltdS1kaWFsb2ctYm9keSwgLmRpYWxvZy1ib2R5LCAubW9kYWwtYm9keSwgLmppbXUtZGlhbG9nX19jb250ZW50LCAuamltdS1kaWFsb2ctY29udGVudCdcclxuICAgIClcclxuICApIGFzIEhUTUxFbGVtZW50W11cclxufVxyXG5cclxuZnVuY3Rpb24gaXNUb2dnbGVMaWtlKGVsOiBIVE1MRWxlbWVudCB8IG51bGwpIHtcclxuICBpZiAoIWVsKSByZXR1cm4gZmFsc2VcclxuICBjb25zdCBjbHMgPSAoZWwuY2xhc3NOYW1lIHx8ICcnKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKClcclxuICBjb25zdCBsYWJlbCA9IChlbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCBlbC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgZWwudGV4dENvbnRlbnQgfHwgJycpLnRvTG93ZXJDYXNlKClcclxuICByZXR1cm4gLyhefFxccylhY3Rpb24tKGNvbGxhcHNlfGV4cGFuZCkoXFxzfCQpLy50ZXN0KGNscykgfHxcclxuICAgIC8ocmVjb2xoZXJ8bWluaW1pemFyfGV4cGFuZGlyfG1heGltaXphcnxyZXN0b3JlfGNvbGxhcHNlfGV4cGFuZCkvaS50ZXN0KGxhYmVsKVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kVG9nZ2xlRnJvbVRhcmdldCh0OiBIVE1MRWxlbWVudCB8IG51bGwpIHtcclxuICBpZiAoIXQpIHJldHVybiBudWxsXHJcbiAgcmV0dXJuICh0LmNsb3Nlc3QoJ2J1dHRvbixbcm9sZT1cImJ1dHRvblwiXSxbdGl0bGVdLFthcmlhLWxhYmVsXSwuaWNvbiwuaWNvbnMsLmppbXUtdGl0bGUsW2NsYXNzKj1cImFjdGlvbi1cIl0nKSBhcyBIVE1MRWxlbWVudCkgfHwgbnVsbFxyXG59XHJcblxyXG4vKiA9PT09PSBjb21wb25lbnRlID09PT09ICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldChwcm9wczogYW55KSB7XHJcbiAgY29uc3QgW2ppbXVNYXBWaWV3LCBzZXRKaW11TWFwVmlld10gPSBSZWFjdC51c2VTdGF0ZTxKaW11TWFwVmlldz4oKVxyXG4gIGNvbnN0IFtjYXRlZ29yaWEsIHNldENhdGVnb3JpYV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKVxyXG4gIGNvbnN0IFt0aXBvc1NlbCwgc2V0VGlwb3NTZWxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKVxyXG4gIGNvbnN0IFtzaG93RW1wdHksIHNldFNob3dFbXB0eV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBbZGFkb3NBUEksIHNldERhZG9zQVBJXSA9IFJlYWN0LnVzZVN0YXRlPEFtb3N0cmFJdGVtW10gfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJylcclxuXHJcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGNvbGxhcHNlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSlcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4geyBjb2xsYXBzZWRSZWYuY3VycmVudCA9IGNvbGxhcHNlZCB9LCBbY29sbGFwc2VkXSlcclxuXHJcbiAgY29uc3QgcHJldlRpcG9zU2VsUmVmID0gUmVhY3QudXNlUmVmPHN0cmluZ1tdPihbXSlcclxuICBjb25zdCByb290UmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxyXG4gIGNvbnN0IGxhc3RFeHBhbmRlZEhSZWYgPSBSZWFjdC51c2VSZWY8bnVtYmVyIHwgbnVsbD4obnVsbClcclxuXHJcbiAgLyogPT09IGJ1c2NhIGRhZG9zID09PSAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgaWYgKGNhdGVnb3JpYSAhPT0gJ3NhbXBsZScpIHJldHVyblxyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpOyBzZXRFcnJvcignJylcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcyhERUZBVUxUX0ZBSVhBX0lOVEVSRVNTRSlcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgc2V0RGFkb3NBUEkoZGF0YSlcclxuICAgICAgICAgIHNldFRpcG9zU2VsKFtdKVxyXG4gICAgICAgICAgcHJldlRpcG9zU2VsUmVmLmN1cnJlbnQgPSBbXVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHsgc2V0RXJyb3IoZT8ubWVzc2FnZSB8fCAnRmFsaGEgYW8gYnVzY2FyIGRhZG9zJyk7IHNldERhZG9zQVBJKFtdKSB9XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJ1bigpXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbY2F0ZWdvcmlhXSlcclxuXHJcbiAgLyogPT09IGhlbHBlcjogYXJyYXkgcG9yIHRpcG8gPT09ICovXHJcbiAgY29uc3QgZ2VyYXJBcnJheVRvdGFsID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAodGlwbzogc3RyaW5nKSA9PiAoZGFkb3NBUEkgPz8gW10pLm1hcChkID0+ICh7XHJcbiAgICAgIGNvZGlnb1BvY286IGQuY29kaWdvUG9jbyxcclxuICAgICAgdG90YWw6IGRbVFlQRV9GSUVMRFt0aXBvXV0gPz8gMFxyXG4gICAgfSkpLFxyXG4gICAgW2RhZG9zQVBJXVxyXG4gIClcclxuXHJcbiAgLyogPT09IGRpZmZzIGRlIGNhbWFkYXMgc2VtIHBpc2NhciA9PT0gKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFqaW11TWFwVmlldykgcmV0dXJuXHJcbiAgICBpZiAoIWRhZG9zQVBJIHx8IGRhZG9zQVBJLmxlbmd0aCA9PT0gMCkgcmV0dXJuXHJcbiAgICBjb25zdCB7IHZpZXcgfSA9IGppbXVNYXBWaWV3XHJcbiAgICBjb25zdCBwcmV2ID0gbmV3IFNldChwcmV2VGlwb3NTZWxSZWYuY3VycmVudClcclxuICAgIGNvbnN0IGN1ciA9IG5ldyBTZXQodGlwb3NTZWwpXHJcblxyXG4gICAgY29uc3QgYWRpY2lvbmFkb3MgPSBbLi4uY3VyXS5maWx0ZXIodCA9PiAhcHJldi5oYXModCkpXHJcbiAgICBjb25zdCByZW1vdmlkb3MgPSBbLi4ucHJldl0uZmlsdGVyKHQgPT4gIWN1ci5oYXModCkpXHJcblxyXG4gICAgcmVtb3ZpZG9zLmZvckVhY2godCA9PiB7XHJcbiAgICAgIGNvbnN0IGxheWVyID0gdmlldy5tYXAuZmluZExheWVyQnlJZCgnYW1vc3RyYXNfJyArIHQpXHJcbiAgICAgIGlmIChsYXllcikgdmlldy5tYXAucmVtb3ZlKGxheWVyKVxyXG4gICAgfSlcclxuICAgIGFkaWNpb25hZG9zLmZvckVhY2godGlwbyA9PiB7XHJcbiAgICAgIGNvbnN0IGRhZG9zID0gZ2VyYXJBcnJheVRvdGFsKHRpcG8pXHJcbiAgICAgIGNvbnN0IGNvciA9IGNvcmVzVGlwb3NbdGlwb10gfHwgJ3JnYmEoMCwwLDAsMC41KSdcclxuICAgICAgZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIoe1xyXG4gICAgICAgIGppbXVNYXBWaWV3LFxyXG4gICAgICAgIGRhZG9zLFxyXG4gICAgICAgIGNvbG9yRmlsbDogY29yLFxyXG4gICAgICAgIGlkQ2FtYWRhOiAnYW1vc3RyYXNfJyArIHRpcG8sXHJcbiAgICAgICAgaWRMZWdlbmRhOiAnbGdkX2Ftb3N0cmFzXycgKyB0aXBvLFxyXG4gICAgICAgIHRpdGxlTGVnZW5kYTogdGlwby5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRpcG8uc2xpY2UoMSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgcHJldlRpcG9zU2VsUmVmLmN1cnJlbnQgPSB0aXBvc1NlbFxyXG4gIH0sIFtqaW11TWFwVmlldywgZGFkb3NBUEksIHRpcG9zU2VsLCBnZXJhckFycmF5VG90YWxdKVxyXG5cclxuICAvKiA9PT0gZmVjaGFyOiBsaW1wYSB0dWRvIGUgcmVzZXRhIGZsYWdzIChyZWFicmUgY29tIHBhZHLDo28pID09PSAqL1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGppbXVNYXBWaWV3Py52aWV3KSB7XHJcbiAgICAgICAgY29uc3QgeyB2aWV3IH0gPSBqaW11TWFwVmlld1xyXG4gICAgICAgIExJU1RfVFlQRVMuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICAgIGNvbnN0IGx5ciA9IHZpZXcubWFwLmZpbmRMYXllckJ5SWQoJ2Ftb3N0cmFzXycgKyB0KVxyXG4gICAgICAgICAgaWYgKGx5cikgdmlldy5tYXAucmVtb3ZlKGx5cilcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgOyAodmlldy5tYXAubGF5ZXJzIGFzIGFueSk/LmZvckVhY2g/LigobHlyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGx5cj8uaWQ/LnN0YXJ0c1dpdGg/LignYW1vc3RyYXNfJykpIHZpZXcubWFwLnJlbW92ZShseXIpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIHsgfVxyXG5cclxuICAgIHNldFRpcG9zU2VsKFtdKTsgcHJldlRpcG9zU2VsUmVmLmN1cnJlbnQgPSBbXVxyXG4gICAgc2V0U2hvd0VtcHR5KGZhbHNlKTsgc2V0RGFkb3NBUEkobnVsbCk7IHNldEVycm9yKCcnKTsgc2V0Q2F0ZWdvcmlhKCcnKVxyXG4gICAgbGFzdEV4cGFuZGVkSFJlZi5jdXJyZW50ID0gbnVsbFxyXG4gICAgc2V0Q29sbGFwc2VkKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IHsgZGxnIH0gPSBnZXREaWFsb2dQYXJ0cygpXHJcbiAgICBpZiAoZGxnKSB7XHJcbiAgICAgIGRsZy5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdXNlci1tb3ZlZCcpXHJcbiAgICAgIGRsZy5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdXNlci1zaXplZCcpXHJcbiAgICB9XHJcbiAgICBpZiAocm9vdFJlZi5jdXJyZW50KSByb290UmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICB9LCBbamltdU1hcFZpZXddKVxyXG5cclxuICAvKiA9PT0gb2JzZXJ2YXIgYWJyaXIvZmVjaGFyICsgbWFyY2FyIOKAnG1vdmVkL3NpemVk4oCdID09PSAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRsZywgYm94IH0gPSBnZXREaWFsb2dQYXJ0cygpXHJcbiAgICBpZiAoIWRsZyB8fCAhYm94KSByZXR1cm5cclxuXHJcbiAgICAvLyAxKSBtYXJjYSBcInVzZXIgbW92ZWRcIiBxdWFuZG8gdHJhbnNmb3JtIG11ZGFcclxuICAgIGNvbnN0IG1vU3R5bGUgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRyID0gKGRsZy5zdHlsZS50cmFuc2Zvcm0gfHwgJycpLnRyaW0oKVxyXG4gICAgICBpZiAodHIgJiYgIWRsZy5oYXNBdHRyaWJ1dGUoJ2RhdGEtdXNlci1tb3ZlZCcpKSBkbGcuc2V0QXR0cmlidXRlKCdkYXRhLXVzZXItbW92ZWQnLCAnMScpXHJcbiAgICB9KVxyXG4gICAgbW9TdHlsZS5vYnNlcnZlKGRsZywgeyBhdHRyaWJ1dGVzOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXSB9KVxyXG5cclxuICAgIC8vIDIpIG1hcmNhIFwidXNlciBzaXplZFwiIHF1YW5kbyB2YXJpYXIgYWx0dXJhXHJcbiAgICBsZXQgbGFzdEggPSBNYXRoLnJvdW5kKGJveC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpXHJcbiAgICBjb25zdCBybyA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGggPSBNYXRoLnJvdW5kKGJveC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpXHJcbiAgICAgIGlmIChNYXRoLmFicyhoIC0gbGFzdEgpID49IDYpIHtcclxuICAgICAgICBkbGcuc2V0QXR0cmlidXRlKCdkYXRhLXVzZXItc2l6ZWQnLCAnMScpXHJcbiAgICAgICAgbGFzdEggPSBoXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByby5vYnNlcnZlKGJveClcclxuXHJcbiAgICAvLyAzKSBib3TDo28gZmVjaGFyIC0+IHJlc2V0XHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRsZy5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnYnV0dG9uW2FyaWEtbGFiZWw9XCJDbG9zZVwiXSwgYnV0dG9uW3RpdGxlPVwiQ2xvc2VcIl0sIGJ1dHRvblthcmlhLWxhYmVsPVwiRmVjaGFyXCJdLCBidXR0b25bdGl0bGU9XCJGZWNoYXJcIl0sIFtkYXRhLWFjdGlvbj1cImNsb3NlXCJdJ1xyXG4gICAgKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcclxuICAgIGNsb3NlQnRuPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsb3NlKVxyXG5cclxuICAgIC8vIDQpIHF1YW5kbyB2aXPDrXZlbCBub3ZhbWVudGUsIGFwbGljYSBsYXlvdXQgcGFkcsOjbyB1bWEgw5pOSUNBIHZlelxyXG4gICAgbGV0IGFwcGxpZWRUaGlzT3BlbiA9IGZhbHNlXHJcbiAgICBjb25zdCBhcHBseURlZmF1bHRPbmNlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoYXBwbGllZFRoaXNPcGVuKSByZXR1cm5cclxuICAgICAgY29uc3QgaGlkZGVuID0gZGxnLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSA9PT0gJ3RydWUnIHx8XHJcbiAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShkbGcpLmRpc3BsYXkgPT09ICdub25lJyB8fFxyXG4gICAgICAgIGdldENvbXB1dGVkU3R5bGUoZGxnKS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJ1xyXG4gICAgICBpZiAoaGlkZGVuKSByZXR1cm5cclxuXHJcbiAgICAgIC8vIHBvc2nDp8OjbyBwYWRyw6NvIHNlIHVzdcOhcmlvIE7Dg08gbW92ZXVcclxuICAgICAgaWYgKCFkbGcuaGFzQXR0cmlidXRlKCdkYXRhLXVzZXItbW92ZWQnKSkge1xyXG4gICAgICAgIGRsZy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7REVGQVVMVF9PUEVOLnh9cHgsICR7REVGQVVMVF9PUEVOLnl9cHgpYFxyXG4gICAgICB9XHJcbiAgICAgIC8vIGFsdHVyYSBwYWRyw6NvIHNlIHVzdcOhcmlvIE7Dg08gcmVkaW1lbnNpb25vdVxyXG4gICAgICBpZiAoIWRsZy5oYXNBdHRyaWJ1dGUoJ2RhdGEtdXNlci1zaXplZCcpKSB7XHJcbiAgICAgICAgYm94LnN0eWxlLmhlaWdodCA9IGAke0RFRkFVTFRfT1BFTi5oZWlnaHR9cHhgXHJcbiAgICAgICAgYm94LnN0eWxlLm1heEhlaWdodCA9ICdjYWxjKDEwMCUgLSAyNHB4KSdcclxuICAgICAgICBib3guc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSdcclxuICAgICAgfVxyXG4gICAgICAvLyBnYXJhbnRlIGJvZGllcyB2aXPDrXZlaXMgYW8gYWJyaXJcclxuICAgICAgZ2V0RGlhbG9nQm9kaWVzKGRsZykuZm9yRWFjaChiID0+IHtcclxuICAgICAgICBiLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5JylcclxuICAgICAgICBiLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHJvb3RSZWYuY3VycmVudCkgcm9vdFJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgIHNldENvbGxhcHNlZChmYWxzZSlcclxuICAgICAgYXBwbGllZFRoaXNPcGVuID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vT3BlbiA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGFwcGx5RGVmYXVsdE9uY2UpXHJcbiAgICBtb09wZW4ub2JzZXJ2ZShkbGcsIHsgYXR0cmlidXRlczogdHJ1ZSwgYXR0cmlidXRlRmlsdGVyOiBbJ3N0eWxlJywgJ2NsYXNzJywgJ2FyaWEtaGlkZGVuJ10gfSlcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhcHBseURlZmF1bHRPbmNlKVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsb3NlQnRuPy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsb3NlKVxyXG4gICAgICBtb09wZW4uZGlzY29ubmVjdCgpXHJcbiAgICAgIG1vU3R5bGUuZGlzY29ubmVjdCgpXHJcbiAgICAgIHJvLmRpc2Nvbm5lY3QoKVxyXG4gICAgfVxyXG4gIH0sIFtoYW5kbGVDbG9zZV0pXHJcblxyXG4gIC8qID09PSByZWNvbGhlci9leHBhbmRpciAocm9idXN0bykgPT09ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHsgZGxnLCBib3ggfSA9IGdldERpYWxvZ1BhcnRzKClcclxuICAgIGlmICghZGxnIHx8ICFib3gpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IGdldEhlYWRlciA9ICgpID0+XHJcbiAgICAgIChkbGcucXVlcnlTZWxlY3RvcignLmppbXUtZGlhbG9nX19oZWFkZXIsIC5qaW11LWRpYWxvZy1oZWFkZXIsIC5kaWFsb2ctaGVhZGVyLCBbcm9sZT1cInRvb2xiYXJcIl0sIGhlYWRlcicpIGFzIEhUTUxFbGVtZW50KSB8fFxyXG4gICAgICAoZGxnLmZpcnN0RWxlbWVudENoaWxkIGFzIEhUTUxFbGVtZW50KVxyXG5cclxuICAgIGNvbnN0IGJvZGllcyA9IGdldERpYWxvZ0JvZGllcyhkbGcpXHJcblxyXG4gICAgY29uc3QgZ2V0Q29udGFpbmVycyA9ICgpOiBIVE1MRWxlbWVudFtdID0+IEFycmF5LmZyb20obmV3IFNldChbXHJcbiAgICAgIGRsZyxcclxuICAgICAgYm94LFxyXG4gICAgICAuLi5BcnJheS5mcm9tKFxyXG4gICAgICAgIGRsZy5xdWVyeVNlbGVjdG9yQWxsKCcuamltdS1kaWFsb2dfX2RpYWxvZywgLmppbXUtZGlhbG9nLCAuamltdS1kaWFsb2dfX2NvbnRlbnQsIC5qaW11LWRpYWxvZy1jb250ZW50LCAubW9kYWwtY29udGVudCcpXHJcbiAgICAgICkgYXMgSFRNTEVsZW1lbnRbXVxyXG4gICAgXSkpXHJcblxyXG4gICAgY29uc3Qgc2hvd0JvZGllcyA9ICgpID0+IHtcclxuICAgICAgYm9kaWVzLmZvckVhY2goYiA9PiB7XHJcbiAgICAgICAgYi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpXHJcbiAgICAgICAgYi5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcclxuICAgICAgfSlcclxuICAgICAgaWYgKHJvb3RSZWYuY3VycmVudCkgcm9vdFJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgIGRsZy5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZWQnLCAnbWluaW1pemVkJywgJ2lzLWNvbGxhcHNlZCcsICdpcy1taW5pbWl6ZWQnKVxyXG4gICAgICBkbGcucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWViLWNvbGxhcHNlZCcpXHJcbiAgICAgIGRsZy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGlkZUJvZGllcyA9ICgpID0+IHtcclxuICAgICAgYm9kaWVzLmZvckVhY2goYiA9PiB7XHJcbiAgICAgICAgYi5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJywgJ2ltcG9ydGFudCcpXHJcbiAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxyXG4gICAgICB9KVxyXG4gICAgICBpZiAocm9vdFJlZi5jdXJyZW50KSByb290UmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICBkbGcuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2VkJylcclxuICAgICAgZGxnLnNldEF0dHJpYnV0ZSgnZGF0YS1lYi1jb2xsYXBzZWQnLCAnMScpXHJcbiAgICAgIGRsZy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcmNlSGVpZ2h0cyA9IChoUHg6IG51bWJlciwgY29sbGFwc2VkRmxhZzogYm9vbGVhbikgPT4ge1xyXG4gICAgICBjb25zdCBjb250YWluZXJzID0gZ2V0Q29udGFpbmVycygpXHJcbiAgICAgIGNvbnRhaW5lcnMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21pbi1oZWlnaHQnKVxyXG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCdoZWlnaHQnLCBgJHtoUHh9cHhgLCAnaW1wb3J0YW50JylcclxuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnbWF4LWhlaWdodCcsIGNvbGxhcHNlZEZsYWcgPyBgJHtoUHh9cHhgIDogJ2NhbGMoMTAwJSAtIDI0cHgpJywgJ2ltcG9ydGFudCcpXHJcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ292ZXJmbG93JywgY29sbGFwc2VkRmxhZyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnLCAnaW1wb3J0YW50JylcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBseUV4cGFuZEhlaWdodCA9IChoOiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc3QgdGd0ID0gTWF0aC5tYXgoMTIwLCBNYXRoLnJvdW5kKGggfHwgMCkpIHx8IERFRkFVTFRfT1BFTi5oZWlnaHRcclxuICAgICAgZm9yY2VIZWlnaHRzKHRndCwgZmFsc2UpXHJcbiAgICAgIHNob3dCb2RpZXMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldENvbGxhcHNlZFVJID0gKHdhbnRDb2xsYXBzZWQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgaWYgKHdhbnRDb2xsYXBzZWQpIHtcclxuICAgICAgICAvLyBzYWx2YSBhbHR1cmEgYXR1YWwgYW50ZXMgZGUgcmVjb2xoZXJcclxuICAgICAgICBjb25zdCBoTm93ID0gTWF0aC5yb3VuZChib3guZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KVxyXG4gICAgICAgIGlmIChoTm93ID4gMTAwKSBsYXN0RXhwYW5kZWRIUmVmLmN1cnJlbnQgPSBoTm93XHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGdldEhlYWRlcigpXHJcbiAgICAgICAgY29uc3QgaEhlYWRlciA9IE1hdGgubWF4KDQwLCBNYXRoLnJvdW5kKGhlYWRlcj8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IHx8IDU2KSlcclxuICAgICAgICBmb3JjZUhlaWdodHMoaEhlYWRlciwgdHJ1ZSlcclxuICAgICAgICBoaWRlQm9kaWVzKClcclxuICAgICAgICBzZXRDb2xsYXBzZWQodHJ1ZSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRIID0gKGxhc3RFeHBhbmRlZEhSZWYuY3VycmVudCAmJiBsYXN0RXhwYW5kZWRIUmVmLmN1cnJlbnQgPiAxMDApXHJcbiAgICAgICAgICA/IGxhc3RFeHBhbmRlZEhSZWYuY3VycmVudFxyXG4gICAgICAgICAgOiBERUZBVUxUX09QRU4uaGVpZ2h0XHJcbiAgICAgICAgYXBwbHlFeHBhbmRIZWlnaHQodGFyZ2V0SClcclxuICAgICAgICBzZXRDb2xsYXBzZWQoZmFsc2UpXHJcbiAgICAgICAgLy8gcmVmb3LDp29zIGNvbnRyYSByZWVzY3JpdGFzIHRhcmRpYXNcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gYXBwbHlFeHBhbmRIZWlnaHQodGFyZ2V0SCkpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhcHBseUV4cGFuZEhlaWdodCh0YXJnZXRIKSwgNjApXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhcHBseUV4cGFuZEhlaWdodCh0YXJnZXRIKSwgMTYwKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2FsdmEgYWx0dXJhIEFOVEVTIGRvIGNsaXF1ZSBxdWUgdmFpIGNvbGFwc2FyXHJcbiAgICBjb25zdCBvblBvaW50ZXJEb3duQ2FwdHVyZSA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBlbCA9IGZpbmRUb2dnbGVGcm9tVGFyZ2V0KGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KVxyXG4gICAgICBpZiAoIWVsIHx8ICFpc1RvZ2dsZUxpa2UoZWwpKSByZXR1cm5cclxuICAgICAgY29uc3QgY2xzID0gKGVsLmNsYXNzTmFtZSB8fCAnJykudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gKGVsLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8IGVsLmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCBlbC50ZXh0Q29udGVudCB8fCAnJykudG9Mb3dlckNhc2UoKVxyXG4gICAgICBjb25zdCB3aWxsQ29sbGFwc2UgPVxyXG4gICAgICAgIGNscy5pbmNsdWRlcygnYWN0aW9uLWNvbGxhcHNlJykgfHwgLyhyZWNvbGhlcnxtaW5pbWl6YXJ8Y29sbGFwc2UpL2kudGVzdChsYWJlbClcclxuICAgICAgaWYgKHdpbGxDb2xsYXBzZSkge1xyXG4gICAgICAgIGNvbnN0IGhOb3cgPSBNYXRoLnJvdW5kKGJveC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpXHJcbiAgICAgICAgaWYgKGhOb3cgPiAxMDApIGxhc3RFeHBhbmRlZEhSZWYuY3VycmVudCA9IGhOb3dcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGFwbGljYSBhIGHDp8OjbyBhcMOzcyBvIGNsaXF1ZVxyXG4gICAgY29uc3Qgb25DbGlja0NhcHR1cmUgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgZWwgPSBmaW5kVG9nZ2xlRnJvbVRhcmdldChlLnRhcmdldCBhcyBIVE1MRWxlbWVudClcclxuICAgICAgaWYgKCFlbCB8fCAhaXNUb2dnbGVMaWtlKGVsKSkgcmV0dXJuXHJcbiAgICAgIGNvbnN0IGNscyA9IChlbC5jbGFzc05hbWUgfHwgJycpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKVxyXG4gICAgICBjb25zdCBsYWJlbCA9IChlbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCBlbC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgZWwudGV4dENvbnRlbnQgfHwgJycpLnRvTG93ZXJDYXNlKClcclxuXHJcbiAgICAgIGxldCB0b0NvbGxhcHNlOiBib29sZWFuIHwgbnVsbCA9IG51bGxcclxuICAgICAgaWYgKGNscy5pbmNsdWRlcygnYWN0aW9uLWNvbGxhcHNlJykgfHwgLyhyZWNvbGhlcnxtaW5pbWl6YXJ8Y29sbGFwc2UpL2kudGVzdChsYWJlbCkpIHRvQ29sbGFwc2UgPSB0cnVlXHJcbiAgICAgIGlmIChjbHMuaW5jbHVkZXMoJ2FjdGlvbi1leHBhbmQnKSB8fCAvKGV4cGFuZGlyfG1heGltaXphcnxyZXN0b3JlfGV4cGFuZCkvaS50ZXN0KGxhYmVsKSkgdG9Db2xsYXBzZSA9IGZhbHNlXHJcblxyXG4gICAgICAvLyBmYWxsYmFjazogc2UgbsOjbyBkZXUgcHJhIGluZmVyaXIgcGVsbyByw7N0dWxvLCBhbHRlcm5hXHJcbiAgICAgIGlmICh0b0NvbGxhcHNlID09PSBudWxsKSB0b0NvbGxhcHNlID0gIWNvbGxhcHNlZFJlZi5jdXJyZW50XHJcblxyXG4gICAgICBzZXRDb2xsYXBzZWRVSSh0b0NvbGxhcHNlKVxyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gc2V0Q29sbGFwc2VkVUkodG9Db2xsYXBzZSkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2UgYWxndcOpbSDigJxjb2xhcuKAnSBlbSA0MHB4IHF1YW5kbyBkZXZlcsOtYW1vcyBlc3RhciBleHBhbmRpZG9zLCByZWV4cGFuZGVcclxuICAgIGNvbnN0IHJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHtcclxuICAgICAgaWYgKCFjb2xsYXBzZWRSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGdldEhlYWRlcigpXHJcbiAgICAgICAgY29uc3QgaEhlYWRlciA9IE1hdGgubWF4KDQwLCBNYXRoLnJvdW5kKGhlYWRlcj8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IHx8IDU2KSlcclxuICAgICAgICBjb25zdCBoID0gTWF0aC5yb3VuZChib3guZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KVxyXG4gICAgICAgIGlmIChoIDw9IGhIZWFkZXIgKyAyKSB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRIID0gKGxhc3RFeHBhbmRlZEhSZWYuY3VycmVudCAmJiBsYXN0RXhwYW5kZWRIUmVmLmN1cnJlbnQgPiAxMDApXHJcbiAgICAgICAgICAgID8gbGFzdEV4cGFuZGVkSFJlZi5jdXJyZW50XHJcbiAgICAgICAgICAgIDogREVGQVVMVF9PUEVOLmhlaWdodFxyXG4gICAgICAgICAgYXBwbHlFeHBhbmRIZWlnaHQodGFyZ2V0SClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByby5vYnNlcnZlKGJveClcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uUG9pbnRlckRvd25DYXB0dXJlLCB0cnVlKVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrQ2FwdHVyZSwgdHJ1ZSlcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICByby5kaXNjb25uZWN0KClcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBvblBvaW50ZXJEb3duQ2FwdHVyZSwgdHJ1ZSlcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrQ2FwdHVyZSwgdHJ1ZSlcclxuICAgIH1cclxuICB9LCBbXSkgLy8gc2VtIGRlcGVuZGVyIGRlIGBjb2xsYXBzZWRgXHJcblxyXG4gIC8qID09PSBVSSA9PT0gKi9cclxuICBjb25zdCB0b2dnbGVUaXBvID0gKHRpcG86IHN0cmluZykgPT5cclxuICAgIHNldFRpcG9zU2VsKHByZXYgPT4gcHJldi5pbmNsdWRlcyh0aXBvKSA/IHByZXYuZmlsdGVyKHQgPT4gdCAhPT0gdGlwbykgOiBbLi4ucHJldiwgdGlwb10pXHJcblxyXG4gIGNvbnN0IHN1bW1hcnlHcm91cHMgPSB0aXBvc1NlbC5tYXAodGlwbyA9PiB7XHJcbiAgICBjb25zdCBkYWRvcyA9IGdlcmFyQXJyYXlUb3RhbCh0aXBvKVxyXG4gICAgY29uc3QgY29yID0gY29yZXNUaXBvc1t0aXBvXVxyXG4gICAgbGV0IHJvd3MgPSBjYWxjdWxhclF1ZWJyYXMoZGFkb3MsIGNvcikucmV2ZXJzZSgpXHJcbiAgICBpZiAoIXNob3dFbXB0eSkgcm93cyA9IHJvd3MuZmlsdGVyKHIgPT4gci5jb3VudCA+IDAgfHwgci5sYWJlbC5zdGFydHNXaXRoKCd8IDAgfCcpKVxyXG4gICAgcmV0dXJuIHsgdGlwbywgcm93cyB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgaGFzRGF0YSA9IEFycmF5LmlzQXJyYXkoZGFkb3NBUEkpICYmIGRhZG9zQVBJLmxlbmd0aCA+IDBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmPXtyb290UmVmfSBjc3M9e3dyYXBwZXJTdHlsZX0+XHJcbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxQYW5lbFN0eWxlfSAvPlxyXG4gICAgICA8bGFiZWwgY3NzPXt0aXRsZVN0eWxlfT5TZWxlY2lvbmUgYSBkaXN0cmlidWnDp8OjbzwvbGFiZWw+XHJcblxyXG4gICAgICA8c2VsZWN0XHJcbiAgICAgICAgY3NzPXtzZWxlY3RTdHlsZX1cclxuICAgICAgICB2YWx1ZT17Y2F0ZWdvcmlhfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHsgc2V0Q2F0ZWdvcmlhKGUudGFyZ2V0LnZhbHVlKSB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nJz5TZWxlY2lvbmUgbyB0aXBvPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nc2FtcGxlJz5EaXN0cmlidWnDp8OjbyBkZSBhbW9zdHJhPC9vcHRpb24+XHJcbiAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAge2NhdGVnb3JpYSA9PT0gJ3NhbXBsZScgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7bG9hZGluZyAmJiA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCB9fT5DYXJyZWdhbmRvIGRhZG9zIGRhIHNlc3PDo2/igKY8L2Rpdj59XHJcbiAgICAgICAgICB7ISFlcnJvciAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnI2IwMCcsIG1hcmdpbkJvdHRvbTogOCB9fT5FcnJvOiB7ZXJyb3J9PC9kaXY+fVxyXG4gICAgICAgICAge2hhc0RhdGEgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNzcz17bGlzdFN0eWxlfT5cclxuICAgICAgICAgICAgICB7TElTVF9UWVBFUy5tYXAodCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17dH0gY3NzPXtjaGVja2JveFJvd1N0eWxlfSBvbkNsaWNrPXsoKSA9PiB0b2dnbGVUaXBvKHQpfT5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nY2hlY2tib3gnXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGlwb3NTZWwuaW5jbHVkZXModCl9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogNiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHQuc2xpY2UoMSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtzdW1tYXJ5R3JvdXBzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgY3NzPXtzdW1tYXJ5TGlzdFN0eWxlfT5cclxuICAgICAgICAgIHtzdW1tYXJ5R3JvdXBzLm1hcChncm91cCA9PiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2dyb3VwLnRpcG99PlxyXG4gICAgICAgICAgICAgIDxkaXYgY3NzPXtjc3NgZm9udC13ZWlnaHQ6NjAwOyBtYXJnaW46NHB4IDA7YH0+XHJcbiAgICAgICAgICAgICAgICB7Z3JvdXAudGlwby5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGdyb3VwLnRpcG8uc2xpY2UoMSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2dyb3VwLnJvd3MubWFwKChyLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtncm91cC50aXBvfS0ke2lkeH1gfSBjc3M9e3N1bW1hcnlJdGVtU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNzcz17YnViYmxlQm94U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9e3Iuc2l6ZX0gaGVpZ2h0PXtyLnNpemV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17ci5zaXplIC8gMn0gY3k9e3Iuc2l6ZSAvIDJ9IHI9e3Iuc2l6ZSAvIDJ9IGZpbGw9e3IuY29yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY3NzPXtyYW5nZUxhYmVsU3R5bGV9PntyLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8ZGl2IGNzcz17Zm9vdGVyU3R5bGV9PlxyXG4gICAgICAgICAgICA8bGFiZWwgY3NzPXtmb290ZXJMYWJlbFN0eWxlfT5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtzaG93RW1wdHl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTaG93RW1wdHkoZS50YXJnZXQuY2hlY2tlZCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICBFeGliaXIgY2xhc3NlcyB2YXppYXNcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxyXG4gICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17c2V0SmltdU1hcFZpZXd9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==