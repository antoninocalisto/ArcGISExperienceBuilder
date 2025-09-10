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

/***/ "./your-extensions/widgets/mapa-de-distribuicao/src/runtime/utils.ts":
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/mapa-de-distribuicao/src/runtime/utils.ts ***!
  \***************************************************************************/
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
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/mapa-de-distribuicao/src/runtime/widget.tsx ***!
  \*****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/mapa-de-distribuicao/src/runtime/utils.ts");
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



const log10 = (x) => Math.log10 ? Math.log10(x) : Math.log(x) / Math.LN10;
const TYPE_FIELD = {
    lateral: 'totalAmostrasLaterais',
    testemunho: 'totalTestemunhos',
    calha: 'totalCalhas',
    plug: 'totalPlugs',
    'whole core': 'totalWholeCore'
};
const LIST_TYPES = Object.keys(TYPE_FIELD); // ['lateral', 'testemunho', …]
/** ========= CONFIG =========
 * Use caminho relativo para funcionar em DEV (http://localhost:8080)
 * e também dentro do Explora/EB em homolog/produção sem alterar código.
 */
// const SESSION_ENDPOINT = '/ExPlora/explora'
const DEFAULT_FAIXA_INTERESSE = false;
/** Descobre a origem do Portal (página que embeda o widget) */
function resolveExploraOrigin() {
    try {
        // quando o widget está em um iframe, o referrer costuma ser a página do Explora
        if (document.referrer) {
            return new URL(document.referrer).origin;
        }
    }
    catch (_a) { }
    // fallback: a própria origem do widget
    return window.location.origin;
}
/** Monta o endpoint usando o host/origin detectado */
function getSessionEndpoint() {
    return '/module-explora/explora'; // sempre relativo
}
/** Constrói corpo x-www-form-urlencoded igual ao do Postman */
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
            url: '/module-explora/explora', // caminho relativo no Explora
            body,
            reqId
        }, targetOrigin);
    });
}
/** Use SEMPRE via parent em produção (origens diferentes) */
function fetchDistribuicaoAmostras() {
    return __awaiter(this, arguments, void 0, function* (faixaInteresse = false) {
        const body = buildSessionBody(faixaInteresse);
        return fetchViaParent(body);
    });
}
/** ======== UI / estilos que você já tinha ======== */
const MAX_BUBBLE = 40;
const globalPanelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  div[role='dialog'][aria-label='mapa-de-distribuicao'] {
    position: absolute !important;
    inset: 50px 12px auto auto !important; /* top:12, right:12 */
    transform: none !important;
    z-index: 9999 !important;
    width: 360px !important;
    height: 550px !important;
    max-height: calc(100% - 24px) !important;
    overflow: auto !important;
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
  box-shadow: 0 4px 12px rgba(0,0,0,.1); padding: 16px; overflow: hidden;
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
/** === cálculo dos breaks para o sumário (mantido) === */
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
function Widget(props) {
    var _a;
    // ===== estados =====
    const [jimuMapView, setJimuMapView] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState();
    const [categoria, setCategoria] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(''); // select
    const [tiposSel, setTiposSel] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]); // checkboxes
    const [showEmpty, setShowEmpty] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [dadosAPI, setDadosAPI] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [loading, setLoading] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [error, setError] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('');
    // dispara a consulta da sessão quando selecionar "Distribuição de amostra"
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        console.log('mapa-de-distribuicao novo 25-08: categoria mudou ', categoria);
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
                        // opcional: limpar seleção anterior para forçar o usuário a escolher os tipos
                        setTiposSel([]);
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
    // helper: gera [{codigoPoco,total}] para 1 tipo, agora usando dados reais
    const gerarArrayTotal = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((tipo) => (dadosAPI !== null && dadosAPI !== void 0 ? dadosAPI : []).map(d => {
        var _a;
        return ({
            codigoPoco: d.codigoPoco,
            total: (_a = d[TYPE_FIELD[tipo]]) !== null && _a !== void 0 ? _a : 0
        });
    }), [dadosAPI]);
    // redesenha as camadas quando checkboxes mudam e temos dados
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (!jimuMapView)
            return;
        const { view } = jimuMapView;
        // limpa camadas antigas da nossa distribuição
        LIST_TYPES.forEach(t => {
            const layer = view.map.findLayerById('amostras_' + t);
            if (layer)
                view.map.remove(layer);
        });
        if (!dadosAPI || dadosAPI.length === 0)
            return;
        // desenha por tipo selecionado
        tiposSel.forEach(tipo => {
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
    }, [jimuMapView, tiposSel, gerarArrayTotal, dadosAPI]);
    const toggleTipo = (tipo) => setTiposSel(prev => prev.includes(tipo) ? prev.filter(t => t !== tipo) : [...prev, tipo]);
    const summaryGroups = tiposSel.map(tipo => {
        const dados = gerarArrayTotal(tipo);
        const cor = _utils__WEBPACK_IMPORTED_MODULE_2__.coresTipos[tipo];
        let rows = calcularQuebras(dados, cor).reverse();
        if (!showEmpty) {
            rows = rows.filter(r => r.count > 0 || r.label.startsWith('| 0 |'));
        }
        return { tipo, rows };
    });
    const hasData = Array.isArray(dadosAPI) && dadosAPI.length > 0;
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: wrapperStyle },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXBhLWRlLWRpc3RyaWJ1aWNhby9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxXQUFXO0FBQ2dEO0FBQ1g7QUFDNEI7QUFDSjtBQUV4RSxNQUFNLFVBQVUsR0FBMkI7SUFDekMsT0FBTyxFQUFFLHdCQUF3QjtJQUNqQyxVQUFVLEVBQUUsd0JBQXdCO0lBQ3BDLEtBQUssRUFBRSx5QkFBeUI7SUFDaEMsSUFBSSxFQUFFLDBCQUEwQjtJQUNoQyxZQUFZLEVBQUUsd0JBQXdCO0NBQ3ZDO0FBRU0sU0FBZSx1QkFBdUI7eURBQUMsRUFDNUMsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFNBQVMsRUFDVCxZQUFZLEVBUWI7UUFDQyxNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSTtRQUM3QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRztRQUVwQixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDdEQsTUFBTSxVQUFVLEdBQUcsb0JBQW9CLE9BQU8sR0FBRztRQUVqRCxNQUFNLFdBQVcsR0FBRyxJQUFJLHdFQUFZLENBQUM7WUFDbkMsR0FBRyxFQUFFLHlGQUF5RjtZQUM5RixvQkFBb0IsRUFBRSxVQUFVO1lBQ2hDLEtBQUssRUFBRSxPQUFPO1lBQ2QsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztRQUVGLE1BQU0sV0FBVyxDQUFDLElBQUksRUFBRTtRQUV4QixNQUFNLFdBQVcsR0FBRyxNQUFNLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDbEQsS0FBSyxFQUFFLFVB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QUNsQyxDQUNFLENBQ1A7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFwYS1kZS1kaXN0cmlidWljYW8vc3JjL3J1bnRpbWUvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvcmVuZGVyZXJzL0NsYXNzQnJlYWtzUmVuZGVyZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvc3ltYm9scy9TaW1wbGVNYXJrZXJTeW1ib2xcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9MZWdlbmRcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcGEtZGUtZGlzdHJpYnVpY2FvL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdXRpbHMudHNcclxuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tIFwiQGFyY2dpcy9jb3JlL2xheWVycy9GZWF0dXJlTGF5ZXJcIlxyXG5pbXBvcnQgTGVnZW5kIGZyb20gXCJAYXJjZ2lzL2NvcmUvd2lkZ2V0cy9MZWdlbmRcIlxyXG5pbXBvcnQgQ2xhc3NCcmVha3NSZW5kZXJlciBmcm9tIFwiQGFyY2dpcy9jb3JlL3JlbmRlcmVycy9DbGFzc0JyZWFrc1JlbmRlcmVyXCJcclxuaW1wb3J0IFNpbXBsZU1hcmtlclN5bWJvbCBmcm9tIFwiQGFyY2dpcy9jb3JlL3N5bWJvbHMvU2ltcGxlTWFya2VyU3ltYm9sXCJcclxuXHJcbmNvbnN0IGNvcmVzVGlwb3M6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgbGF0ZXJhbDogXCJyZ2JhKDg4LCAxOSwgMjUyLCAwLjcpXCIsXHJcbiAgdGVzdGVtdW5obzogXCJyZ2JhKDI1NSwgMCwgMjU1LCAwLjcpXCIsXHJcbiAgY2FsaGE6IFwicmdiYSgyNDUsIDIwMSwgMzgsIDAuNylcIixcclxuICBwbHVnOiBcInJnYmEoMTI1LCAyNTMsIDE0OCwgMC43KVwiLFxyXG4gIFwid2hvbGUgY29yZVwiOiBcInJnYmEoMjU1LCA0MywgMjQsIDAuNylcIlxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIoe1xyXG4gIGppbXVNYXBWaWV3LFxyXG4gIGRhZG9zLFxyXG4gIGNvbG9yRmlsbCxcclxuICBpZENhbWFkYSxcclxuICBpZExlZ2VuZGEsXHJcbiAgdGl0bGVMZWdlbmRhXHJcbn06IHtcclxuICBqaW11TWFwVmlldzogYW55XHJcbiAgZGFkb3M6IHsgY29kaWdvUG9jbzogbnVtYmVyOyB0b3RhbDogbnVtYmVyIH1bXVxyXG4gIGNvbG9yRmlsbDogc3RyaW5nXHJcbiAgaWRDYW1hZGE6IHN0cmluZ1xyXG4gIGlkTGVnZW5kYTogc3RyaW5nXHJcbiAgdGl0bGVMZWdlbmRhOiBzdHJpbmdcclxufSkge1xyXG4gIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldy52aWV3XHJcbiAgY29uc3QgbWFwID0gdmlldy5tYXBcclxuXHJcbiAgY29uc3QgY29kaWdvcyA9IGRhZG9zLm1hcChwID0+IHAuY29kaWdvUG9jbykuam9pbignLCcpXHJcbiAgY29uc3QgZXhwcmVzc2lvbiA9IGBQT0NPX0NEX1BPQ08gSU4gKCR7Y29kaWdvc30pYFxyXG5cclxuICBjb25zdCBjYW1hZGFQb8Onb3MgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgIHVybDogJ2h0dHBzOi8vYmFzZWdpcy5wZXRyb2JyYXMuY29tLmJyL2FyY2dpcy9yZXN0L3NlcnZpY2VzL0VYUExPUkEvRmVhdHVyZV9Qb2Nvcy9NYXBTZXJ2ZXIvMCcsXHJcbiAgICBkZWZpbml0aW9uRXhwcmVzc2lvbjogZXhwcmVzc2lvbixcclxuICAgIHRpdGxlOiAnUG/Dp29zJyxcclxuICAgIG91dEZpZWxkczogWycqJ10sXHJcbiAgICB2aXNpYmxlOiBmYWxzZVxyXG4gIH0pXHJcblxyXG4gIGF3YWl0IGNhbWFkYVBvw6dvcy5sb2FkKClcclxuXHJcbiAgY29uc3QgcXVlcnlSZXN1bHQgPSBhd2FpdCBjYW1hZGFQb8Onb3MucXVlcnlGZWF0dXJlcyh7XHJcbiAgICB3aGVyZTogZXhwcmVzc2lvbixcclxuICAgIG91dEZpZWxkczogWycqJ10sXHJcbiAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGZlYXR1cmVzID0gcXVlcnlSZXN1bHQuZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiB7XHJcbiAgICBjb25zdCBkYWRvID0gZGFkb3MuZmluZChwID0+IHAuY29kaWdvUG9jbyA9PT0gZmVhdHVyZS5hdHRyaWJ1dGVzLlBPQ09fQ0RfUE9DTylcclxuICAgIGZlYXR1cmUuYXR0cmlidXRlcy5QT0NPX01EX01FUklEX0NFTlQgPSBkYWRvID8gZGFkby50b3RhbCA6IDBcclxuICAgIHJldHVybiBmZWF0dXJlXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgdmFsb3JlcyA9IGRhZG9zLm1hcChwID0+IHAudG90YWwpXHJcbiAgbGV0IG1pbiA9IE1hdGgubWluKC4uLnZhbG9yZXMpXHJcbiAgbGV0IG1heCA9IE1hdGgubWF4KC4uLnZhbG9yZXMpXHJcblxyXG4gIGNvbnN0IGluZm8gPSBbXVxyXG4gIGNvbnN0IG91dGxpbmUgPSB7IGNvbG9yOiBcImJsYWNrXCIsIHdpZHRoOiBcIjFweFwiIH1cclxuXHJcbiAgaWYgKG1pbiA9PT0gbWF4ICYmIG1pbiA9PT0gMCkge1xyXG4gICAgaW5mby5wdXNoKHtcclxuICAgICAgbWluVmFsdWU6IDAsXHJcbiAgICAgIG1heFZhbHVlOiAwLFxyXG4gICAgICBsYWJlbDogXCJOw6NvIGjDoSBkYWRvcyBzdWZpY2llbnRlc1wiLFxyXG4gICAgICBzeW1ib2w6IG5ldyBTaW1wbGVNYXJrZXJTeW1ib2woeyBjb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCIsIHNpemU6IDAsIHN0eWxlOiBcImNpcmNsZVwiLCBvdXRsaW5lIH0pXHJcbiAgICB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB6ZXJhZG9zID0gdmFsb3Jlcy5maWx0ZXIodiA9PiB2ID09PSAwKS5sZW5ndGhcclxuICAgIGNvbnN0IG5hb1plcmFkb3MgPSB2YWxvcmVzLmZpbHRlcih2ID0+IHYgPiAwKVxyXG5cclxuICAgIGlmICh6ZXJhZG9zID4gMCkge1xyXG4gICAgICBpbmZvLnB1c2goe1xyXG4gICAgICAgIG1pblZhbHVlOiAwLFxyXG4gICAgICAgIG1heFZhbHVlOiAwLFxyXG4gICAgICAgIGxhYmVsOiBgfCAwIHwgKCR7emVyYWRvc30gcG/Dp28ke3plcmFkb3MgPiAxID8gJ3MnIDogJyd9KWAsXHJcbiAgICAgICAgc3ltYm9sOiBuZXcgU2ltcGxlTWFya2VyU3ltYm9sKHsgY29sb3I6IFwicmdiYSgyMDAsMjAwLDIwMCwwLjMpXCIsIHNpemU6IDYsIHN0eWxlOiBcImNpcmNsZVwiLCBvdXRsaW5lIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbWluID0gMVxyXG4gICAgY29uc3QgbiA9IG5hb1plcmFkb3MubGVuZ3RoXHJcbiAgICBjb25zdCBudW1DbGFzc2VzID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZCgxICsgMy4zICogTWF0aC5sb2cxMChuKSkpXHJcbiAgICBjb25zdCBicmVha3MgPSBNYXRoLmNlaWwoKG1heCAtIG1pbiArIDEpIC8gbnVtQ2xhc3NlcylcclxuICAgIGNvbnN0IG1heFNpemUgPSA0MFxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ2xhc3NlczsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG1pblZhbHVlID0gbWluICsgKGkgKiBicmVha3MpXHJcbiAgICAgIGNvbnN0IG1heFZhbHVlID0gbWluICsgKChpICsgMSkgKiBicmVha3MpIC0gMVxyXG4gICAgICBpZiAobWluVmFsdWUgPiBtYXgpIGJyZWFrXHJcblxyXG4gICAgICBjb25zdCBjb3VudCA9IG5hb1plcmFkb3MuZmlsdGVyKHYgPT4gdiA+PSBtaW5WYWx1ZSAmJiB2IDw9IG1heFZhbHVlKS5sZW5ndGhcclxuICAgICAgY29uc3QgbGFiZWwgPSBgJHttaW5WYWx1ZX0gfC0tLXwgJHttYXhWYWx1ZX0gKCR7Y291bnR9IHBvw6dvJHtjb3VudCA+IDEgPyAncycgOiAnJ30pYFxyXG5cclxuICAgICAgY29uc3Qgc2l6ZSA9IDYgKyAoaSAqIChtYXhTaXplIC8gbnVtQ2xhc3NlcykpXHJcblxyXG4gICAgICBpbmZvLnB1c2goe1xyXG4gICAgICAgIG1pblZhbHVlLFxyXG4gICAgICAgIG1heFZhbHVlLFxyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHN5bWJvbDogbmV3IFNpbXBsZU1hcmtlclN5bWJvbCh7IGNvbG9yOiBjb2xvckZpbGwsIHNpemUsIHN0eWxlOiBcImNpcmNsZVwiLCBvdXRsaW5lIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJlciA9IG5ldyBDbGFzc0JyZWFrc1JlbmRlcmVyKHtcclxuICAgIGZpZWxkOiBcIlBPQ09fTURfTUVSSURfQ0VOVFwiLFxyXG4gICAgY2xhc3NCcmVha0luZm9zOiBpbmZvXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY2FtYWRhRGlzdHJpYnVpY2FvID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICBpZDogaWRDYW1hZGEsXHJcbiAgICBzb3VyY2U6IGZlYXR1cmVzLFxyXG4gICAgZmllbGRzOiBjYW1hZGFQb8Onb3MuZmllbGRzLFxyXG4gICAgb2JqZWN0SWRGaWVsZDogXCJPQkpFQ1RJRFwiLFxyXG4gICAgZ2VvbWV0cnlUeXBlOiBcInBvaW50XCIsXHJcbiAgICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9LFxyXG4gICAgcmVuZGVyZXIsXHJcbiAgICB0aXRsZTogdGl0bGVMZWdlbmRhLFxyXG4gICAgbGlzdE1vZGU6IFwiaGlkZVwiLFxyXG4gICAgLy8gbGF5ZXJDcmVhdGVkRnJvbVBvcnRhbDogZmFsc2VcclxuICB9KVxyXG5cclxuICBjb25zdCBleGlzdGVudGUgPSBtYXAuZmluZExheWVyQnlJZChpZENhbWFkYSlcclxuICBpZiAoZXhpc3RlbnRlKSBtYXAucmVtb3ZlKGV4aXN0ZW50ZSlcclxuICBtYXAuYWRkKGNhbWFkYURpc3RyaWJ1aWNhbylcclxuXHJcbiAgY29uc3QgbGVnZW5kID0gbmV3IExlZ2VuZCh7XHJcbiAgICB2aWV3LFxyXG4gICAgbGF5ZXJJbmZvczogW3sgbGF5ZXI6IGNhbWFkYURpc3RyaWJ1aWNhbywgdGl0bGU6IHRpdGxlTGVnZW5kYSB9XVxyXG4gIH0pXHJcbiAgLy8gdmlldy51aS5hZGQobGVnZW5kLCBcImJvdHRvbS1sZWZ0XCIpXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNvcmVzVGlwb3MgfSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfbGF5ZXJzX0ZlYXR1cmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfcmVuZGVyZXJzX0NsYXNzQnJlYWtzUmVuZGVyZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX3N5bWJvbHNfU2ltcGxlTWFya2VyU3ltYm9sX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV93aWRnZXRzX0xlZ2VuZF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuLyoqIEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50ICovXHJcbmltcG9ydCB7IFJlYWN0LCBqc3gsIGNzcywgR2xvYmFsIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIsIGNvcmVzVGlwb3MgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuY29uc3QgbG9nMTAgPSAoeDogbnVtYmVyKSA9PiBNYXRoLmxvZzEwID8gTWF0aC5sb2cxMCh4KSA6IE1hdGgubG9nKHgpIC8gTWF0aC5MTjEwXHJcblxyXG50eXBlIEFtb3N0cmFJdGVtID0ge1xyXG4gIGNvZGlnb1BvY286IG51bWJlclxyXG4gIHRvdGFsQW1vc3RyYXNMYXRlcmFpczogbnVtYmVyXHJcbiAgdG90YWxDYWxoYXM6IG51bWJlclxyXG4gIHRvdGFsUGx1Z3M6IG51bWJlclxyXG4gIHRvdGFsVGVzdGVtdW5ob3M6IG51bWJlclxyXG4gIHRvdGFsV2hvbGVDb3JlOiBudW1iZXJcclxufVxyXG5cclxuY29uc3QgVFlQRV9GSUVMRDogUmVjb3JkPHN0cmluZywga2V5b2YgQW1vc3RyYUl0ZW0+ID0ge1xyXG4gIGxhdGVyYWw6ICd0b3RhbEFtb3N0cmFzTGF0ZXJhaXMnLFxyXG4gIHRlc3RlbXVuaG86ICd0b3RhbFRlc3RlbXVuaG9zJyxcclxuICBjYWxoYTogJ3RvdGFsQ2FsaGFzJyxcclxuICBwbHVnOiAndG90YWxQbHVncycsXHJcbiAgJ3dob2xlIGNvcmUnOiAndG90YWxXaG9sZUNvcmUnXHJcbn1cclxuY29uc3QgTElTVF9UWVBFUyA9IE9iamVjdC5rZXlzKFRZUEVfRklFTEQpIC8vIFsnbGF0ZXJhbCcsICd0ZXN0ZW11bmhvJywg4oCmXVxyXG5cclxuLyoqID09PT09PT09PSBDT05GSUcgPT09PT09PT09XHJcbiAqIFVzZSBjYW1pbmhvIHJlbGF0aXZvIHBhcmEgZnVuY2lvbmFyIGVtIERFViAoaHR0cDovL2xvY2FsaG9zdDo4MDgwKVxyXG4gKiBlIHRhbWLDqW0gZGVudHJvIGRvIEV4cGxvcmEvRUIgZW0gaG9tb2xvZy9wcm9kdcOnw6NvIHNlbSBhbHRlcmFyIGPDs2RpZ28uXHJcbiAqL1xyXG4vLyBjb25zdCBTRVNTSU9OX0VORFBPSU5UID0gJy9FeFBsb3JhL2V4cGxvcmEnXHJcbmNvbnN0IERFRkFVTFRfRkFJWEFfSU5URVJFU1NFID0gZmFsc2VcclxuXHJcbi8qKiBEZXNjb2JyZSBhIG9yaWdlbSBkbyBQb3J0YWwgKHDDoWdpbmEgcXVlIGVtYmVkYSBvIHdpZGdldCkgKi9cclxuZnVuY3Rpb24gcmVzb2x2ZUV4cGxvcmFPcmlnaW4oKTogc3RyaW5nIHtcclxuICB0cnkge1xyXG4gICAgLy8gcXVhbmRvIG8gd2lkZ2V0IGVzdMOhIGVtIHVtIGlmcmFtZSwgbyByZWZlcnJlciBjb3N0dW1hIHNlciBhIHDDoWdpbmEgZG8gRXhwbG9yYVxyXG4gICAgaWYgKGRvY3VtZW50LnJlZmVycmVyKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVVJMKGRvY3VtZW50LnJlZmVycmVyKS5vcmlnaW5cclxuICAgIH1cclxuICB9IGNhdGNoIHsgfVxyXG4gIC8vIGZhbGxiYWNrOiBhIHByw7NwcmlhIG9yaWdlbSBkbyB3aWRnZXRcclxuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpblxyXG59XHJcblxyXG4vKiogTW9udGEgbyBlbmRwb2ludCB1c2FuZG8gbyBob3N0L29yaWdpbiBkZXRlY3RhZG8gKi9cclxuZnVuY3Rpb24gZ2V0U2Vzc2lvbkVuZHBvaW50KCk6IHN0cmluZyB7XHJcbiAgcmV0dXJuICcvbW9kdWxlLWV4cGxvcmEvZXhwbG9yYScgLy8gc2VtcHJlIHJlbGF0aXZvXHJcbn1cclxuXHJcblxyXG4vKiogQ29uc3Ryw7NpIGNvcnBvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZCBpZ3VhbCBhbyBkbyBQb3N0bWFuICovXHJcbmZ1bmN0aW9uIGJ1aWxkU2Vzc2lvbkJvZHkoZmFpeGFJbnRlcmVzc2U6IGJvb2xlYW4pIHtcclxuICBjb25zdCBwID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXHJcbiAgcC5zZXQoJ2hkU3lzJywgJ25vdmFpbnRjb25zJylcclxuICBwLnNldCgnaGRVQycsICdNYXBhJylcclxuICBwLnNldCgnaGRBY2FvJywgJ0NhcnJlZ2FyTWFwYURpc3RyaWJ1aWNhb0Ftb3N0cmFzQ29udGFkb3InKVxyXG4gIHAuc2V0KCdoZFNlc3Npb25GaWx0ZXInLCAndHJ1ZScpXHJcbiAgcC5zZXQoJ2ZhaXhhSW50ZXJlc3NlJywgU3RyaW5nKCEhZmFpeGFJbnRlcmVzc2UpKVxyXG4gIHJldHVybiBwLnRvU3RyaW5nKClcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplTGlzdChyYXc6IGFueVtdKTogQW1vc3RyYUl0ZW1bXSB7XHJcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5KHJhdykgPyByYXcgOiBbXSkubWFwKChyOiBhbnkpID0+ICh7XHJcbiAgICBjb2RpZ29Qb2NvOiBOdW1iZXIoci5jb2RpZ29Qb2NvID8/IHIuUE9DT19DRF9QT0NPID8/IHIucG9jbyA/PyByLmNvZGlnbyA/PyAwKSxcclxuICAgIHRvdGFsQW1vc3RyYXNMYXRlcmFpczogTnVtYmVyKHIudG90YWxBbW9zdHJhc0xhdGVyYWlzID8/IHIubGF0ZXJhaXMgPz8gMCksXHJcbiAgICB0b3RhbENhbGhhczogTnVtYmVyKHIudG90YWxDYWxoYXMgPz8gci5jYWxoYXMgPz8gMCksXHJcbiAgICB0b3RhbFBsdWdzOiBOdW1iZXIoci50b3RhbFBsdWdzID8/IHIucGx1Z3MgPz8gMCksXHJcbiAgICB0b3RhbFRlc3RlbXVuaG9zOiBOdW1iZXIoci50b3RhbFRlc3RlbXVuaG9zID8/IHIudGVzdGVtdW5ob3MgPz8gMCksXHJcbiAgICB0b3RhbFdob2xlQ29yZTogTnVtYmVyKHIudG90YWxXaG9sZUNvcmUgPz8gci53aG9sZUNvcmUgPz8gMClcclxuICB9KSkuZmlsdGVyKHggPT4gISF4LmNvZGlnb1BvY28pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZldGNoVmlhUGFyZW50KGJvZHk6IHN0cmluZyk6IFByb21pc2U8QW1vc3RyYUl0ZW1bXT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCByZXFJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpXHJcbiAgICBsZXQgdGFyZ2V0T3JpZ2luID0gJyonXHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoZG9jdW1lbnQucmVmZXJyZXIpIHRhcmdldE9yaWdpbiA9IG5ldyBVUkwoZG9jdW1lbnQucmVmZXJyZXIpLm9yaWdpblxyXG4gICAgfSBjYXRjaCB7IH1cclxuXHJcbiAgICBjb25zdCBvbk1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBkID0gZXZlbnQuZGF0YSB8fCB7fVxyXG4gICAgICBpZiAoZC5yZXFJZCAhPT0gcmVxSWQpIHJldHVyblxyXG4gICAgICBpZiAoZC50eXBlID09PSAnZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhczpvaycpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSlcclxuICAgICAgICByZXNvbHZlKG5vcm1hbGl6ZUxpc3QoZC5wYXlsb2FkKSlcclxuICAgICAgfSBlbHNlIGlmIChkLnR5cGUgPT09ICdmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzOmVycicpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSlcclxuICAgICAgICByZWplY3QobmV3IEVycm9yKGQubWVzc2FnZSB8fCAnRXJybyBubyBmZXRjaCB2aWEgcGFyZW50JykpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG5cclxuICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICB0eXBlOiAnZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcycsXHJcbiAgICAgIHVybDogJy9tb2R1bGUtZXhwbG9yYS9leHBsb3JhJywgICAvLyBjYW1pbmhvIHJlbGF0aXZvIG5vIEV4cGxvcmFcclxuICAgICAgYm9keSxcclxuICAgICAgcmVxSWRcclxuICAgIH0sIHRhcmdldE9yaWdpbilcclxuICB9KVxyXG59XHJcblxyXG4vKiogVXNlIFNFTVBSRSB2aWEgcGFyZW50IGVtIHByb2R1w6fDo28gKG9yaWdlbnMgZGlmZXJlbnRlcykgKi9cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcyhmYWl4YUludGVyZXNzZSA9IGZhbHNlKTogUHJvbWlzZTxBbW9zdHJhSXRlbVtdPiB7XHJcbiAgY29uc3QgYm9keSA9IGJ1aWxkU2Vzc2lvbkJvZHkoZmFpeGFJbnRlcmVzc2UpXHJcbiAgcmV0dXJuIGZldGNoVmlhUGFyZW50KGJvZHkpXHJcbn1cclxuXHJcblxyXG4vKiogPT09PT09PT0gVUkgLyBlc3RpbG9zIHF1ZSB2b2PDqiBqw6EgdGluaGEgPT09PT09PT0gKi9cclxuY29uc3QgTUFYX0JVQkJMRSA9IDQwXHJcbmNvbnN0IGdsb2JhbFBhbmVsU3R5bGUgPSBjc3NgXHJcbiAgZGl2W3JvbGU9J2RpYWxvZyddW2FyaWEtbGFiZWw9J21hcGEtZGUtZGlzdHJpYnVpY2FvJ10ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBpbnNldDogNTBweCAxMnB4IGF1dG8gYXV0byAhaW1wb3J0YW50OyAvKiB0b3A6MTIsIHJpZ2h0OjEyICovXHJcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzNjBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1NTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjRweCkgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IGJ1YmJsZUJveFN0eWxlID0gY3NzYFxyXG4gIHdpZHRoOiAke01BWF9CVUJCTEV9cHg7XHJcbiAgaGVpZ2h0OiAke01BWF9CVUJCTEV9cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG5gXHJcbmNvbnN0IHdyYXBwZXJTdHlsZSA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLDAsMCwuMSk7IHBhZGRpbmc6IDE2cHg7IG92ZXJmbG93OiBoaWRkZW47XHJcbmBcclxuY29uc3QgdGl0bGVTdHlsZSA9IGNzc2Bmb250LXdlaWdodDo2MDA7IG1hcmdpbi1ib3R0b206NHB4OyBkaXNwbGF5OmJsb2NrO2BcclxuY29uc3Qgc2VsZWN0U3R5bGUgPSBjc3Ngd2lkdGg6MTAwJTsgcGFkZGluZzo2cHggOHB4OyBtYXJnaW4tYm90dG9tOjEycHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjY2NjOyBib3JkZXItcmFkaXVzOjRweDtgXHJcbmNvbnN0IGxpc3RTdHlsZSA9IGNzc2BvdmVyZmxvdy15OmF1dG87IG1hcmdpbi1ib3R0b206MTJweDtcclxuICBwYWRkaW5nOjhweDsgYmFja2dyb3VuZDojZmFmYWZhOyBib3JkZXI6MXB4IHNvbGlkICNlZWU7IGJvcmRlci1yYWRpdXM6NHB4O2BcclxuY29uc3QgY2hlY2tib3hSb3dTdHlsZSA9IGNzc2BkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgbWFyZ2luLWJvdHRvbTo2cHg7IGN1cnNvcjpwb2ludGVyO2BcclxuY29uc3Qgc3VtbWFyeUxpc3RTdHlsZSA9IGNzc2BcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDM2cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmBcclxuY29uc3Qgc3VtbWFyeUl0ZW1TdHlsZSA9IGNzc2BkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgbWFyZ2luLWJvdHRvbTo2cHg7YFxyXG5jb25zdCByYW5nZUxhYmVsU3R5bGUgPSBjc3NgZm9udC1zaXplOjAuOXJlbTtgXHJcbmNvbnN0IGZvb3RlclN0eWxlID0gY3NzYFxyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgcGFkZGluZzogNHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IGZvb3RlckxhYmVsU3R5bGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuYFxyXG5cclxuLyoqID09PSBjw6FsY3VsbyBkb3MgYnJlYWtzIHBhcmEgbyBzdW3DoXJpbyAobWFudGlkbykgPT09ICovXHJcbmZ1bmN0aW9uIGNhbGN1bGFyUXVlYnJhcyhkYWRvczogeyB0b3RhbDogbnVtYmVyIH1bXSwgY29sb3JGaWxsOiBzdHJpbmcpIHtcclxuICBjb25zdCB2YWxvcmVzID0gZGFkb3MubWFwKHAgPT4gcC50b3RhbClcclxuICBsZXQgbWluID0gTWF0aC5taW4oLi4udmFsb3JlcylcclxuICBsZXQgbWF4ID0gTWF0aC5tYXgoLi4udmFsb3JlcylcclxuXHJcbiAgY29uc3QgaW5mbzogeyBsYWJlbDogc3RyaW5nOyBzaXplOiBudW1iZXI7IGNvcjogc3RyaW5nLCBjb3VudDogbnVtYmVyIH1bXSA9IFtdXHJcblxyXG4gIGlmIChtaW4gPT09IDAgJiYgbWF4ID09PSAwKSB7XHJcbiAgICBpbmZvLnB1c2goeyBsYWJlbDogJ07Do28gaMOhIGRhZG9zIHN1ZmljaWVudGVzJywgc2l6ZTogMCwgY29yOiBjb2xvckZpbGwsIGNvdW50OiAwIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHplcmFkb3MgPSB2YWxvcmVzLmZpbHRlcih2ID0+IHYgPT09IDApLmxlbmd0aFxyXG4gICAgY29uc3QgbmFvWmVyYWRvcyA9IHZhbG9yZXMuZmlsdGVyKHYgPT4gdiA+IDApXHJcblxyXG4gICAgaWYgKHplcmFkb3MgPiAwKSB7XHJcbiAgICAgIGluZm8ucHVzaCh7XHJcbiAgICAgICAgbGFiZWw6IGB8IDAgfCAoJHt6ZXJhZG9zfSBwb8OnbyR7emVyYWRvcyA+IDEgPyAncycgOiAnJ30pYCxcclxuICAgICAgICBzaXplOiA2LCBjb3I6ICdyZ2JhKDIwMCwyMDAsMjAwLDAuMyknLCBjb3VudDogemVyYWRvc1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1pbiA9IDFcclxuICAgIGNvbnN0IG4gPSBuYW9aZXJhZG9zLmxlbmd0aFxyXG4gICAgY29uc3QgbnVtQ2xhc3NlcyA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQoMSArIDMuMyAqIGxvZzEwKG4pKSlcclxuICAgIGNvbnN0IGJyZWFrcyA9IE1hdGguY2VpbCgobWF4IC0gbWluICsgMSkgLyBudW1DbGFzc2VzKVxyXG4gICAgY29uc3QgbWF4U2l6ZSA9IDQwXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1DbGFzc2VzOyBpKyspIHtcclxuICAgICAgY29uc3QgbWluVmFsdWUgPSBtaW4gKyBpICogYnJlYWtzXHJcbiAgICAgIGNvbnN0IG1heFZhbHVlID0gbWluICsgKGkgKyAxKSAqIGJyZWFrcyAtIDFcclxuICAgICAgaWYgKG1pblZhbHVlID4gbWF4KSBicmVha1xyXG5cclxuICAgICAgY29uc3QgY291bnQgPSBuYW9aZXJhZG9zLmZpbHRlcih2ID0+IHYgPj0gbWluVmFsdWUgJiYgdiA8PSBtYXhWYWx1ZSkubGVuZ3RoXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gYCR7bWluVmFsdWV9IHwtLS18ICR7bWF4VmFsdWV9ICgke2NvdW50fSBwb8OnbyR7Y291bnQgPiAxID8gJ3MnIDogJyd9KWBcclxuICAgICAgY29uc3Qgc2l6ZSA9IDYgKyBpICogKG1heFNpemUgLyBudW1DbGFzc2VzKVxyXG5cclxuICAgICAgaW5mby5wdXNoKHsgbGFiZWwsIHNpemUsIGNvcjogY29sb3JGaWxsLCBjb3VudCB9KVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gaW5mb1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQocHJvcHM6IGFueSkge1xyXG4gIC8vID09PT09IGVzdGFkb3MgPT09PT1cclxuICBjb25zdCBbamltdU1hcFZpZXcsIHNldEppbXVNYXBWaWV3XSA9IFJlYWN0LnVzZVN0YXRlPEppbXVNYXBWaWV3PigpXHJcbiAgY29uc3QgW2NhdGVnb3JpYSwgc2V0Q2F0ZWdvcmlhXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpICAgICAgIC8vIHNlbGVjdFxyXG4gIGNvbnN0IFt0aXBvc1NlbCwgc2V0VGlwb3NTZWxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKSAgICAgICAvLyBjaGVja2JveGVzXHJcbiAgY29uc3QgW3Nob3dFbXB0eSwgc2V0U2hvd0VtcHR5XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtkYWRvc0FQSSwgc2V0RGFkb3NBUEldID0gUmVhY3QudXNlU3RhdGU8QW1vc3RyYUl0ZW1bXSB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKVxyXG5cclxuICAvLyBkaXNwYXJhIGEgY29uc3VsdGEgZGEgc2Vzc8OjbyBxdWFuZG8gc2VsZWNpb25hciBcIkRpc3RyaWJ1acOnw6NvIGRlIGFtb3N0cmFcIlxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnbWFwYS1kZS1kaXN0cmlidWljYW8gbm92byAyNS0wODogY2F0ZWdvcmlhIG11ZG91ICcsIGNhdGVnb3JpYSlcclxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgaWYgKGNhdGVnb3JpYSAhPT0gJ3NhbXBsZScpIHJldHVyblxyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgIHNldEVycm9yKCcnKVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzKERFRkFVTFRfRkFJWEFfSU5URVJFU1NFKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICBzZXREYWRvc0FQSShkYXRhKVxyXG4gICAgICAgICAgLy8gb3BjaW9uYWw6IGxpbXBhciBzZWxlw6fDo28gYW50ZXJpb3IgcGFyYSBmb3LDp2FyIG8gdXN1w6FyaW8gYSBlc2NvbGhlciBvcyB0aXBvc1xyXG4gICAgICAgICAgc2V0VGlwb3NTZWwoW10pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgc2V0RXJyb3IoZT8ubWVzc2FnZSB8fCAnRmFsaGEgYW8gYnVzY2FyIGRhZG9zJylcclxuICAgICAgICAgIHNldERhZG9zQVBJKFtdKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJ1bigpXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbY2F0ZWdvcmlhXSlcclxuXHJcbiAgLy8gaGVscGVyOiBnZXJhIFt7Y29kaWdvUG9jbyx0b3RhbH1dIHBhcmEgMSB0aXBvLCBhZ29yYSB1c2FuZG8gZGFkb3MgcmVhaXNcclxuICBjb25zdCBnZXJhckFycmF5VG90YWwgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgICh0aXBvOiBzdHJpbmcpID0+IChkYWRvc0FQSSA/PyBbXSkubWFwKGQgPT4gKHtcclxuICAgICAgY29kaWdvUG9jbzogZC5jb2RpZ29Qb2NvLFxyXG4gICAgICB0b3RhbDogZFtUWVBFX0ZJRUxEW3RpcG9dXSA/PyAwXHJcbiAgICB9KSksXHJcbiAgICBbZGFkb3NBUEldXHJcbiAgKVxyXG5cclxuICAvLyByZWRlc2VuaGEgYXMgY2FtYWRhcyBxdWFuZG8gY2hlY2tib3hlcyBtdWRhbSBlIHRlbW9zIGRhZG9zXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghamltdU1hcFZpZXcpIHJldHVyblxyXG4gICAgY29uc3QgeyB2aWV3IH0gPSBqaW11TWFwVmlld1xyXG5cclxuICAgIC8vIGxpbXBhIGNhbWFkYXMgYW50aWdhcyBkYSBub3NzYSBkaXN0cmlidWnDp8Ojb1xyXG4gICAgTElTVF9UWVBFUy5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICBjb25zdCBsYXllciA9IHZpZXcubWFwLmZpbmRMYXllckJ5SWQoJ2Ftb3N0cmFzXycgKyB0KVxyXG4gICAgICBpZiAobGF5ZXIpIHZpZXcubWFwLnJlbW92ZShsYXllcilcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCFkYWRvc0FQSSB8fCBkYWRvc0FQSS5sZW5ndGggPT09IDApIHJldHVyblxyXG4gICAgLy8gZGVzZW5oYSBwb3IgdGlwbyBzZWxlY2lvbmFkb1xyXG4gICAgdGlwb3NTZWwuZm9yRWFjaCh0aXBvID0+IHtcclxuICAgICAgY29uc3QgZGFkb3MgPSBnZXJhckFycmF5VG90YWwodGlwbylcclxuICAgICAgY29uc3QgY29yID0gY29yZXNUaXBvc1t0aXBvXSB8fCAncmdiYSgwLDAsMCwwLjUpJ1xyXG5cclxuICAgICAgZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIoe1xyXG4gICAgICAgIGppbXVNYXBWaWV3LFxyXG4gICAgICAgIGRhZG9zLFxyXG4gICAgICAgIGNvbG9yRmlsbDogY29yLFxyXG4gICAgICAgIGlkQ2FtYWRhOiAnYW1vc3RyYXNfJyArIHRpcG8sXHJcbiAgICAgICAgaWRMZWdlbmRhOiAnbGdkX2Ftb3N0cmFzXycgKyB0aXBvLFxyXG4gICAgICAgIHRpdGxlTGVnZW5kYTogdGlwby5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRpcG8uc2xpY2UoMSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSwgW2ppbXVNYXBWaWV3LCB0aXBvc1NlbCwgZ2VyYXJBcnJheVRvdGFsLCBkYWRvc0FQSV0pXHJcblxyXG4gIGNvbnN0IHRvZ2dsZVRpcG8gPSAodGlwbzogc3RyaW5nKSA9PlxyXG4gICAgc2V0VGlwb3NTZWwocHJldiA9PlxyXG4gICAgICBwcmV2LmluY2x1ZGVzKHRpcG8pID8gcHJldi5maWx0ZXIodCA9PiB0ICE9PSB0aXBvKSA6IFsuLi5wcmV2LCB0aXBvXVxyXG4gICAgKVxyXG5cclxuICBjb25zdCBzdW1tYXJ5R3JvdXBzID0gdGlwb3NTZWwubWFwKHRpcG8gPT4ge1xyXG4gICAgY29uc3QgZGFkb3MgPSBnZXJhckFycmF5VG90YWwodGlwbylcclxuICAgIGNvbnN0IGNvciA9IGNvcmVzVGlwb3NbdGlwb11cclxuICAgIGxldCByb3dzID0gY2FsY3VsYXJRdWVicmFzKGRhZG9zLCBjb3IpLnJldmVyc2UoKVxyXG4gICAgaWYgKCFzaG93RW1wdHkpIHtcclxuICAgICAgcm93cyA9IHJvd3MuZmlsdGVyKHIgPT4gci5jb3VudCA+IDAgfHwgci5sYWJlbC5zdGFydHNXaXRoKCd8IDAgfCcpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgdGlwbywgcm93cyB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgaGFzRGF0YSA9IEFycmF5LmlzQXJyYXkoZGFkb3NBUEkpICYmIGRhZG9zQVBJLmxlbmd0aCA+IDBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY3NzPXt3cmFwcGVyU3R5bGV9PlxyXG4gICAgICA8R2xvYmFsIHN0eWxlcz17Z2xvYmFsUGFuZWxTdHlsZX0gLz5cclxuICAgICAgPGxhYmVsIGNzcz17dGl0bGVTdHlsZX0+U2VsZWNpb25lIGEgZGlzdHJpYnVpw6fDo288L2xhYmVsPlxyXG5cclxuICAgICAgPHNlbGVjdFxyXG4gICAgICAgIGNzcz17c2VsZWN0U3R5bGV9XHJcbiAgICAgICAgdmFsdWU9e2NhdGVnb3JpYX1cclxuICAgICAgICBvbkNoYW5nZT17ZSA9PiB7IHNldENhdGVnb3JpYShlLnRhcmdldC52YWx1ZSkgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9Jyc+U2VsZWNpb25lIG8gdGlwbzwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9J3NhbXBsZSc+RGlzdHJpYnVpw6fDo28gZGUgYW1vc3RyYTwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgIHtjYXRlZ29yaWEgPT09ICdzYW1wbGUnICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2xvYWRpbmcgJiYgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDggfX0+Q2FycmVnYW5kbyBkYWRvcyBkYSBzZXNzw6Nv4oCmPC9kaXY+fVxyXG4gICAgICAgICAgeyEhZXJyb3IgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogJyNiMDAnLCBtYXJnaW5Cb3R0b206IDggfX0+RXJybzoge2Vycm9yfTwvZGl2Pn1cclxuICAgICAgICAgIHtoYXNEYXRhICYmIChcclxuICAgICAgICAgICAgPGRpdiBjc3M9e2xpc3RTdHlsZX0+XHJcbiAgICAgICAgICAgICAge0xJU1RfVFlQRVMubWFwKHQgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3R9IGNzcz17Y2hlY2tib3hSb3dTdHlsZX0gb25DbGljaz17KCkgPT4gdG9nZ2xlVGlwbyh0KX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCdcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aXBvc1NlbC5pbmNsdWRlcyh0KX1cclxuICAgICAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA2IH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdC5zbGljZSgxKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAge3N1bW1hcnlHcm91cHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdiBjc3M9e3N1bW1hcnlMaXN0U3R5bGV9PlxyXG4gICAgICAgICAge3N1bW1hcnlHcm91cHMubWFwKGdyb3VwID0+IChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17Z3JvdXAudGlwb30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjc3M9e2Nzc2Bmb250LXdlaWdodDo2MDA7IG1hcmdpbjo0cHggMDtgfT5cclxuICAgICAgICAgICAgICAgIHtncm91cC50aXBvLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZ3JvdXAudGlwby5zbGljZSgxKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAge2dyb3VwLnJvd3MubWFwKChyLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtncm91cC50aXBvfS0ke2lkeH1gfSBjc3M9e3N1bW1hcnlJdGVtU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNzcz17YnViYmxlQm94U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9e3Iuc2l6ZX0gaGVpZ2h0PXtyLnNpemV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD17ci5zaXplIC8gMn0gY3k9e3Iuc2l6ZSAvIDJ9IHI9e3Iuc2l6ZSAvIDJ9IGZpbGw9e3IuY29yfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY3NzPXtyYW5nZUxhYmVsU3R5bGV9PntyLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8ZGl2IGNzcz17Zm9vdGVyU3R5bGV9PlxyXG4gICAgICAgICAgICA8bGFiZWwgY3NzPXtmb290ZXJMYWJlbFN0eWxlfT5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtzaG93RW1wdHl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTaG93RW1wdHkoZS50YXJnZXQuY2hlY2tlZCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICBFeGliaXIgY2xhc3NlcyB2YXppYXNcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxyXG4gICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17c2V0SmltdU1hcFZpZXd9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==