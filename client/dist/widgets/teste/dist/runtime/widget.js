System.register(["jimu-core","jimu-arcgis","esri/layers/FeatureLayer","esri/layers/support/Field","esri/renderers/ClassBreaksRenderer","esri/symbols/SimpleMarkerSymbol"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_support_Field__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_renderers_ClassBreaksRenderer__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_symbols_SimpleMarkerSymbol__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_support_Field__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_support_Field__[key] = module[key];
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

/***/ "./your-extensions/widgets/teste/src/runtime/utils.ts":
/*!************************************************************!*\
  !*** ./your-extensions/widgets/teste/src/runtime/utils.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coresTipos: () => (/* binding */ coresTipos),
/* harmony export */   gerarMapaDistribuicaoEB: () => (/* binding */ gerarMapaDistribuicaoEB)
/* harmony export */ });
/* harmony import */ var _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @arcgis/core/layers/FeatureLayer */ "@arcgis/core/layers/FeatureLayer");
/* harmony import */ var _arcgis_core_layers_support_Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @arcgis/core/layers/support/Field */ "@arcgis/core/layers/support/Field");
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
// Monta IN(...) respeitando se o campo é string
function toSqlInList(values, asString) {
    if (asString) {
        const quoted = values.map(v => `'${String(v).replace(/'/g, "''")}'`);
        return `(${quoted.join(",")})`;
    }
    return `(${values.join(",")})`;
}
function gerarMapaDistribuicaoEB(_a) {
    return __awaiter(this, arguments, void 0, function* ({ jimuMapView, dados, colorFill, idCamada, idLegenda, // mantido por compat., não usado aqui
    titleLegenda, withInterest // opcional, só para manter a assinatura do caller
     }) {
        var _b;
        const view = jimuMapView.view;
        const map = view.map;
        // nada para desenhar -> remove camada antiga (se existir) e sai
        if (!dados || dados.length === 0) {
            const existente = map.findLayerById(idCamada);
            if (existente)
                map.remove(existente);
            return;
        }
        // 1) Camada base (pegar geometria por código)
        const camadaPocos = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_0__["default"]({
            url: "https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Feature_Pocos/MapServer/0",
            outFields: ["POCO_CD_POCO"],
            visible: false,
            title: "Poços (base)"
        });
        yield camadaPocos.load();
        const pocoField = camadaPocos.fields.find(f => f.name === "POCO_CD_POCO");
        const isStringField = ((pocoField === null || pocoField === void 0 ? void 0 : pocoField.type) === "string");
        const codigos = dados.map(p => p.codigoPoco).filter(v => v !== undefined && v !== null);
        const where = `POCO_CD_POCO IN ${toSqlInList(codigos, !!isStringField)}`;
        const queryResult = yield camadaPocos.queryFeatures({
            where,
            outFields: ["POCO_CD_POCO"],
            returnGeometry: true
        });
        // 2) Monta source com OBJECTID próprio e TOTAL
        const totalByCodigo = new Map();
        dados.forEach(d => { var _a; return totalByCodigo.set(String(d.codigoPoco), Number((_a = d.total) !== null && _a !== void 0 ? _a : 0)); });
        const source = queryResult.features.map((feat, i) => {
            var _a;
            const cod = String(feat.attributes.POCO_CD_POCO);
            const total = (_a = totalByCodigo.get(cod)) !== null && _a !== void 0 ? _a : 0;
            feat.attributes = {
                OBJECTID: i + 1,
                POCO_CD_POCO: cod,
                TOTAL: total
            };
            return feat;
        });
        // 3) Quebras (usar PROPERTIES para evitar erro de tipagem)
        const valores = dados.map(p => { var _a; return Number((_a = p.total) !== null && _a !== void 0 ? _a : 0); });
        let min = Math.min(...valores);
        let max = Math.max(...valores);
        const info = [];
        const outline = { color: "black", width: 1 }; // width numérico!
        if (!isFinite(min) || !isFinite(max)) {
            // sem dados válidos: deixa info vazio (não deve ocorrer pois já retornamos acima)
        }
        else if (min === 0 && max === 0) {
            // todos zero -> manter bolha pequena e cinza (para não “sumir” cluster)
            const qtd = valores.length;
            info.push({
                minValue: 0,
                maxValue: 0,
                label: `| 0 | (${qtd} poço${qtd > 1 ? "s" : ""})`,
                symbol: new _arcgis_core_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_3__["default"]({
                    color: "rgba(200,200,200,0.3)",
                    size: 6,
                    style: "circle",
                    outline
                })
            });
        }
        else {
            const zerados = valores.filter(v => v === 0).length;
            const naoZerados = valores.filter(v => v > 0);
            if (zerados > 0) {
                info.push({
                    minValue: 0,
                    maxValue: 0,
                    label: `| 0 | (${zerados} poço${zerados > 1 ? "s" : ""})`,
                    symbol: new _arcgis_core_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_3__["default"]({
                        color: "rgba(200,200,200,0.3)",
                        size: 6,
                        style: "circle",
                        outline
                    })
                });
            }
            min = 1;
            const n = Math.max(naoZerados.length, 1);
            const numClasses = Math.max(2, Math.round(1 + 3.3 * Math.log10(n)));
            const breaks = Math.ceil((max - min + 1) / numClasses);
            const maxSize = 40;
            for (let i = 0; i < numClasses; i++) {
                const minValue = min + i * breaks;
                const maxValue = min + (i + 1) * breaks - 1;
                if (minValue > max)
                    break;
                const count = naoZerados.filter(v => v >= minValue && v <= maxValue).length;
                const label = `${minValue} |---| ${maxValue} (${count} poço${count > 1 ? "s" : ""})`;
                const size = 6 + i * (maxSize / numClasses);
                info.push({
                    minValue,
                    maxValue,
                    label,
                    symbol: new _arcgis_core_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_3__["default"]({ color: colorFill, size, style: "circle", outline })
                });
            }
        }
        const renderer = new _arcgis_core_renderers_ClassBreaksRenderer__WEBPACK_IMPORTED_MODULE_2__["default"]({
            field: "TOTAL",
            classBreakInfos: info
        });
        // 4) Schema mínimo (Field instances) + CLUSTERING
        const fields = [
            new _arcgis_core_layers_support_Field__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: "OBJECTID", alias: "OBJECTID", type: "oid" }),
            new _arcgis_core_layers_support_Field__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: "POCO_CD_POCO", alias: "Código do Poço", type: "string" }),
            new _arcgis_core_layers_support_Field__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: "TOTAL", alias: "Total", type: "double" })
        ];
        const layer = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_0__["default"]({
            id: idCamada,
            title: titleLegenda,
            source,
            fields,
            objectIdField: "OBJECTID",
            geometryType: "point",
            spatialReference: (_b = view === null || view === void 0 ? void 0 : view.spatialReference) !== null && _b !== void 0 ? _b : { wkid: 102100 },
            renderer,
            listMode: "hide",
            popupEnabled: true,
            popupTemplate: {
                title: "{POCO_CD_POCO}",
                content: "Total: {TOTAL}"
            },
            featureReduction: {
                type: "cluster",
                clusterRadius: "80px",
                // símbolo do cluster na cor da série
                symbol: {
                    type: "simple-marker",
                    style: "circle",
                    size: 28,
                    color: colorFill,
                    outline: { color: "white", width: 1.5 }
                },
                // compatibilidade com builds que usam clusterSymbol
                // @ts-ignore
                clusterSymbol: {
                    type: "simple-marker",
                    style: "circle",
                    size: 28,
                    color: colorFill,
                    outline: { color: "white", width: 1.5 }
                },
                labelsVisible: true,
                labelingInfo: [{
                        deconflictionStrategy: "none",
                        labelExpressionInfo: { expression: "Text($feature.cluster_count, '#,###')" },
                        symbol: {
                            type: "text",
                            color: "white",
                            haloColor: "#333",
                            haloSize: 1.5,
                            font: { size: 10, weight: "bold" }
                        }
                    }]
            }
        });
        const existente = map.findLayerById(idCamada);
        if (existente)
            map.remove(existente);
        map.add(layer);
        return layer;
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

/***/ "@arcgis/core/layers/support/Field":
/*!********************************************!*\
  !*** external "esri/layers/support/Field" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_support_Field__;

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
/*!**************************************************************!*\
  !*** ./your-extensions/widgets/teste/src/runtime/widget.tsx ***!
  \**************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/teste/src/runtime/utils.ts");
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
/* ===== Map de campos por tipo ===== */
const TYPE_FIELD = {
    lateral: 'totalAmostrasLaterais',
    testemunho: 'totalTestemunhos',
    calha: 'totalCalhas',
    plug: 'totalPlugs',
    'whole core': 'totalWholeCore'
};
const LIST_TYPES = Object.keys(TYPE_FIELD); // ['lateral', 'testemunho', …]
/* ===== Util ===== */
const log10 = (x) => Math.log10 ? Math.log10(x) : Math.log(x) / Math.LN10;
/** Monta o corpo x-www-form-urlencoded igual ao que o back espera */
function buildSessionBody(faixaInteresse) {
    const p = new URLSearchParams();
    p.set('hdSys', 'novaintcons');
    p.set('hdUC', 'Mapa');
    p.set('hdAcao', 'CarregarMapaDistribuicaoAmostrasContador');
    p.set('hdSessionFilter', 'true');
    p.set('faixaInteresse', String(!!faixaInteresse));
    return p.toString();
}
/** Normaliza resposta da API */
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
/** Faz o fetch via página pai (resolve CORS) */
function fetchViaParent(body) {
    return new Promise((resolve, reject) => {
        const reqId = Math.random().toString(36).slice(2);
        let targetOrigin = '*';
        try {
            if (document.referrer)
                targetOrigin = new URL(document.referrer).origin;
        }
        catch ( /* noop */_a) { /* noop */ }
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
            // url: '/explora/explora',   // caminho relativo resolvido no APP pai
            body,
            reqId
        }, targetOrigin);
    });
}
/** API principal (sempre via parent) */
function fetchDistribuicaoAmostras() {
    return __awaiter(this, arguments, void 0, function* (faixaInteresse = false) {
        const body = buildSessionBody(faixaInteresse);
        return fetchViaParent(body);
    });
}
/* ===== Estilos ===== */
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
  padding-left: 1em;
  cursor: pointer;
  font-size: 0.9rem;
  `;
/* ===== Quebras para o sumário ===== */
function calcularQuebras(dados, colorFill) {
    const valores = dados.map(p => p.total);
    let min = Math.min(...valores);
    let max = Math.max(...valores);
    const info = [];
    if (!isFinite(min) || !isFinite(max)) {
        return info;
    }
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
        const numClasses = Math.max(2, Math.round(1 + 3.3 * log10(n || 1)));
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
/* ===== ADIÇÃO: helpers mínimos para localizar o dialog do EB ===== */
function findClosestDialog(el) {
    let cur = el;
    while (cur) {
        if (cur.getAttribute && cur.getAttribute('role') === 'dialog')
            return cur;
        cur = cur.parentElement;
    }
    return null;
}
/* ===== Componente ===== */
function Widget(props) {
    var _a;
    /** Estado base */
    const [jimuMapView, setJimuMapView] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState();
    const [categoria, setCategoria] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(''); // select
    const [tiposSel, setTiposSel] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]); // checkboxes
    const [showEmpty, setShowEmpty] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    /** Intervalo de interesse */
    const [withInterest, setWithInterest] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [showWithInterest, setshowWithInterest] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [faixaSet, setFaixaSet] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(() => new Set((Array.isArray(props === null || props === void 0 ? void 0 : props.codigosFaixaInteresse) ? props.codigosFaixaInteresse : [])
        .map((v) => Number(v)).filter((v) => !isNaN(v))));
    /** Bases de dados */
    const [dadosFull, setDadosFull] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [dadosFaixaAPI, setDadosFaixaAPI] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    /** Loading / erros */
    const [loadingFull, setLoadingFull] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [loadingInterest, setLoadingInterest] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [errorFull, setErrorFull] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('');
    const [errorInterest, setErrorInterest] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('');
    /* ADIÇÃO: ref para localizar o dialog do EB que contém o widget */
    const rootRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    /* >>>>> ADIÇÃO: logar o valor enviado pelo pai (concGeo -> startWithInterest) <<<<< */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        console.log("Widget atualizado em 30/08/2025");
        const onCfg = (ev) => {
            const d = (ev === null || ev === void 0 ? void 0 : ev.data) || {};
            if ((d === null || d === void 0 ? void 0 : d.type) === 'fetchDistribuicaoAmostras:ok') {
                setshowWithInterest(!!d.startWithInterest);
            }
        };
        window.addEventListener('message', onCfg);
        return () => window.removeEventListener('message', onCfg);
    }, []);
    /* >>>>> FIM DA ADIÇÃO <<<<< */
    /* Recebe faixa de interesse via postMessage */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const onMsg = (ev) => {
            const data = ev === null || ev === void 0 ? void 0 : ev.data;
            if (!data || data.type !== 'faixa-interesse' || !Array.isArray(data.codigosPocos))
                return;
            const nums = data.codigosPocos.map((v) => Number(v)).filter(v => !isNaN(v));
            console.debug('[intervalo] Recebidos', data.codigosPocos.length, '-> válidos (números):', nums.length);
            setFaixaSet(new Set(nums));
        };
        window.addEventListener('message', onMsg);
        return () => window.removeEventListener('message', onMsg);
    }, []);
    /** Carrega base completa ao selecionar a categoria "sample" */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        let cancelled = false;
        function run() {
            return __awaiter(this, void 0, void 0, function* () {
                if (categoria !== 'sample')
                    return;
                setLoadingFull(true);
                setErrorFull('');
                try {
                    const data = yield fetchDistribuicaoAmostras(DEFAULT_FAIXA_INTERESSE);
                    if (!cancelled) {
                        setDadosFull(data);
                        setTiposSel([]); // limpa seleção anterior
                        console.debug('[full] Total de poços:', data.length);
                    }
                }
                catch (e) {
                    if (!cancelled) {
                        setErrorFull((e === null || e === void 0 ? void 0 : e.message) || 'Falha ao buscar dados (base completa)');
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
    }, [categoria]);
    /** Busca base do interesse no servidor quando necessário */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        let cancelled = false;
        function run() {
            return __awaiter(this, void 0, void 0, function* () {
                if (categoria !== 'sample')
                    return;
                if (!withInterest)
                    return;
                if (faixaSet.size > 0)
                    return; // já vamos filtrar local
                if (dadosFaixaAPI !== null)
                    return; // já temos (ou já falhou)
                setLoadingInterest(true);
                setErrorInterest('');
                try {
                    const data = yield fetchDistribuicaoAmostras(true);
                    if (!cancelled) {
                        setDadosFaixaAPI(data);
                        console.debug('[faixaAPI] Total de poços (API):', data.length);
                    }
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
    /** Redesenha as camadas quando base/seleção/intersse mudam */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        var _a;
        if (!jimuMapView)
            return;
        const base = withInterest
            ? (faixaSet.size > 0
                ? (dadosFull !== null && dadosFull !== void 0 ? dadosFull : []).filter(x => faixaSet.has(Number(x.codigoPoco)))
                : ((_a = dadosFaixaAPI !== null && dadosFaixaAPI !== void 0 ? dadosFaixaAPI : dadosFull) !== null && _a !== void 0 ? _a : []))
            : (dadosFull !== null && dadosFull !== void 0 ? dadosFull : []);
        if (!base || base.length === 0)
            return; // evita apagar sem ter substituto
        const { view } = jimuMapView;
        // limpa camadas antigas da nossa distribuição
        LIST_TYPES.forEach(t => {
            const layer = view.map.findLayerById('amostras_' + t);
            if (layer)
                view.map.remove(layer);
        });
        // desenha por tipo selecionado (cores por tipo se mantêm)
        tiposSel.forEach(tipo => {
            const dados = base.map(d => {
                var _a;
                return ({
                    codigoPoco: d.codigoPoco,
                    total: (_a = d[TYPE_FIELD[tipo]]) !== null && _a !== void 0 ? _a : 0
                });
            });
            const numComValor = dados.filter(d => { var _a; return ((_a = d.total) !== null && _a !== void 0 ? _a : 0) > 0; }).length;
            console.debug(`[draw] tipo=${tipo} com valor>0:`, numComValor, 'de', dados.length);
            const cor = _utils__WEBPACK_IMPORTED_MODULE_2__.coresTipos[tipo] || 'rgba(0,0,0,0.5)';
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.gerarMapaDistribuicaoEB)({
                jimuMapView,
                dados,
                colorFill: cor,
                idCamada: 'amostras_' + tipo,
                idLegenda: 'lgd_amostras_' + tipo,
                titleLegenda: (withInterest ? 'Intervalo de Interesse - ' : '') +
                    (tipo.charAt(0).toUpperCase() + tipo.slice(1)),
                withInterest
            });
        });
    }, [jimuMapView, tiposSel, withInterest, faixaSet, dadosFull, dadosFaixaAPI]);
    /* ===== ADIÇÃO: limpar camadas ao clicar no "Fechar" do dialog do EB ===== */
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
        const clearOnClose = () => {
            var _a, _b, _c, _d, _e, _f;
            try {
                // remove as camadas que este widget adicionou
                LIST_TYPES.forEach(t => {
                    const lyr = view.map.findLayerById('amostras_' + t);
                    if (lyr)
                        view.map.remove(lyr);
                });
                // varredura extra: qualquer layer com id iniciando por "amostras_"
                const all = (_f = (_c = (_b = (_a = view.map.allLayers) === null || _a === void 0 ? void 0 : _a.toArray) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : (_e = (_d = view.map.layers) === null || _d === void 0 ? void 0 : _d.toArray) === null || _e === void 0 ? void 0 : _e.call(_d)) !== null && _f !== void 0 ? _f : [];
                all.forEach((ly) => {
                    var _a;
                    const id = String((_a = ly === null || ly === void 0 ? void 0 : ly.id) !== null && _a !== void 0 ? _a : '');
                    if (id.startsWith('amostras_'))
                        view.map.remove(ly);
                });
            }
            catch ( /* noop */_g) { /* noop */ }
        };
        closeBtn.addEventListener('click', clearOnClose);
        return () => {
            closeBtn.removeEventListener('click', clearOnClose);
        };
    }, [jimuMapView]);
    /* ADIÇÃO: por segurança, também limpa no unmount do widget */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        return () => {
            var _a, _b, _c, _d, _e, _f;
            const view = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view;
            if (!view)
                return;
            try {
                LIST_TYPES.forEach(t => {
                    const lyr = view.map.findLayerById('amostras_' + t);
                    if (lyr)
                        view.map.remove(lyr);
                });
                const all = (_f = (_c = (_b = (_a = view.map.allLayers) === null || _a === void 0 ? void 0 : _a.toArray) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : (_e = (_d = view.map.layers) === null || _d === void 0 ? void 0 : _d.toArray) === null || _e === void 0 ? void 0 : _e.call(_d)) !== null && _f !== void 0 ? _f : [];
                all.forEach((ly) => {
                    var _a;
                    const id = String((_a = ly === null || ly === void 0 ? void 0 : ly.id) !== null && _a !== void 0 ? _a : '');
                    if (id.startsWith('amostras_'))
                        view.map.remove(ly);
                });
            }
            catch ( /* noop */_g) { /* noop */ }
        };
    }, [jimuMapView]);
    /** Sumário por tipo usando SEMPRE a base atual */
    const summaryGroups = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        var _a;
        const base = withInterest
            ? (faixaSet.size > 0
                ? (dadosFull !== null && dadosFull !== void 0 ? dadosFull : []).filter(x => faixaSet.has(Number(x.codigoPoco)))
                : ((_a = dadosFaixaAPI !== null && dadosFaixaAPI !== void 0 ? dadosFaixaAPI : dadosFull) !== null && _a !== void 0 ? _a : []))
            : (dadosFull !== null && dadosFull !== void 0 ? dadosFull : []);
        return tiposSel.map(tipo => {
            const cor = _utils__WEBPACK_IMPORTED_MODULE_2__.coresTipos[tipo];
            const dados = base.map(d => {
                var _a;
                return ({
                    codigoPoco: d.codigoPoco,
                    total: (_a = d[TYPE_FIELD[tipo]]) !== null && _a !== void 0 ? _a : 0
                });
            });
            let rows = calcularQuebras(dados, cor).reverse();
            if (!showEmpty) {
                rows = rows.filter(r => r.count > 0 || r.label.startsWith('| 0 |'));
            }
            return { tipo, rows };
        });
    }, [tiposSel, showEmpty, withInterest, faixaSet, dadosFull, dadosFaixaAPI]);
    /** Helpers UI */
    const toggleTipo = (tipo) => setTiposSel(prev => prev.includes(tipo) ? prev.filter(t => t !== tipo) : [...prev, tipo]);
    const hasAnyBase = (Array.isArray(dadosFull) && dadosFull.length > 0) ||
        (Array.isArray(dadosFaixaAPI) && dadosFaixaAPI.length > 0);
    /* ===== Render ===== */
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: wrapperStyle, ref: rootRef },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.Global, { styles: globalPanelStyle }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: titleStyle }, "Selecione a distribui\u00E7\u00E3o"),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", { css: selectStyle, value: categoria, onChange: e => setCategoria(e.target.value) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: '' }, "Selecione o tipo"),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 'sample' }, "Distribui\u00E7\u00E3o de amostra")),
        categoria === 'sample' && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            loadingFull && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: 8 } }, "Carregando base completa\u2026"),
            !!errorFull && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#b00', marginBottom: 8 } },
                "Erro: ",
                errorFull),
            withInterest && loadingInterest && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginBottom: 8 } }, "Carregando intervalo de interesse\u2026"),
            withInterest && !!errorInterest && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { color: '#b00', marginBottom: 8 } },
                "Erro: ",
                errorInterest),
            hasAnyBase && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: listStyle }, LIST_TYPES.map(t => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: t, css: checkboxRowStyle, onClick: () => toggleTipo(t) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'checkbox', checked: tiposSel.includes(t), readOnly: true, style: { marginRight: 6 } }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, t.charAt(0).toUpperCase() + t.slice(1))))))))),
        summaryGroups.length > 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: summaryListStyle },
            summaryGroups.map(group => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, { key: group.tipo },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `font-weight:600; margin:4px 0;` },
                    (withInterest ? 'Intervalo de Interesse - ' : ''),
                    group.tipo.charAt(0).toUpperCase() + group.tipo.slice(1)),
                group.rows.map((r, idx) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: `${group.tipo}-${idx}`, css: summaryItemStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: bubbleBoxStyle },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: r.size, height: r.size },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: r.size / 2, cy: r.size / 2, r: r.size / 2, fill: r.cor }))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { css: rangeLabelStyle }, r.label))))))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: footerStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: footerLabelStyle, title: "Exibir tamb\u00E9m classes sem po\u00E7os" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: showEmpty, onChange: e => setShowEmpty(e.target.checked) }),
                    "Exibir classes vazias"),
                showWithInterest && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: footerLabelStyle, title: "Quando marcado, aplica o filtro de Intervalo de Interesse (c\u00F3digos vindos do Explora ou via API)" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: withInterest, onChange: e => setWithInterest(e.target.checked) }),
                    "Intervalo de interesse"))))),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90ZXN0ZS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxXQUFXO0FBQ2dEO0FBQ047QUFDdUI7QUFDSjtBQUVqRSxNQUFNLFVBQVUsR0FBMkI7SUFDaEQsT0FBTyxFQUFFLHdCQUF3QjtJQUNqQyxVQUFVLEVBQUUsd0JBQXdCO0lBQ3BDLEtBQUssRUFBRSx5QkFBeUI7SUFDaEMsSUFBSSxFQUFFLDBCQUEwQjtJQUNoQyxZQUFZLEVBQUUsd0JBQXdCO0NBQ3ZDO0FBRUQsZ0RBQWdEO0FBQ2hELFNBQVMsV0FBVyxDQUFDLE1BQTJCLEVBQUUsUUFBaUI7SUFDakUsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUNiLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEUsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUc7SUFDaEMsQ0FBQztJQUNELE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHO0FBQ2hDLENBQUM7QUFFTSxTQUFlLHVCQUF1Qjt5REFBQyxFQUM1QyxXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBQ1IsU0FBUyxFQUFJLHNDQUFzQztJQUNuRCxZQUFZLEVBQ1osWUFBWSxDQUFFLGtEQUFrRDtNQVNqRTs7UUFDQyxNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSTtRQUM3QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRztRQUVwQixnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFB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S0FBSyxFQUFDLHVHQUFrRztvQkFDdEksMERBQ0UsSUFBSSxFQUFDLFVBQVUsRUFDZixPQUFPLEVBQUUsWUFBWSxFQUNyQixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FDaEQ7NkNBRUksQ0FBQyxDQUNMLENBQ0YsQ0FDUDtRQUVELCtDQUFDLDZEQUFvQixJQUNuQixjQUFjLEVBQUUsV0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEVBQzFDLGtCQUFrQixFQUFFLGNBQWMsR0FDbEMsQ0FDRSxDQUNQO0FBQ0gsQ0FBQyxDQUFDLGVBQWU7QUFFVCxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy90ZXN0ZS9zcmMvcnVudGltZS91dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvc3VwcG9ydC9GaWVsZFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9yZW5kZXJlcnMvQ2xhc3NCcmVha3NSZW5kZXJlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9zeW1ib2xzL1NpbXBsZU1hcmtlclN5bWJvbFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdGVzdGUvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1dGlscy50c1xyXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL0ZlYXR1cmVMYXllclwiXHJcbmltcG9ydCBGaWVsZCBmcm9tIFwiQGFyY2dpcy9jb3JlL2xheWVycy9zdXBwb3J0L0ZpZWxkXCJcclxuaW1wb3J0IENsYXNzQnJlYWtzUmVuZGVyZXIgZnJvbSBcIkBhcmNnaXMvY29yZS9yZW5kZXJlcnMvQ2xhc3NCcmVha3NSZW5kZXJlclwiXHJcbmltcG9ydCBTaW1wbGVNYXJrZXJTeW1ib2wgZnJvbSBcIkBhcmNnaXMvY29yZS9zeW1ib2xzL1NpbXBsZU1hcmtlclN5bWJvbFwiXHJcblxyXG5leHBvcnQgY29uc3QgY29yZXNUaXBvczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICBsYXRlcmFsOiBcInJnYmEoODgsIDE5LCAyNTIsIDAuNylcIixcclxuICB0ZXN0ZW11bmhvOiBcInJnYmEoMjU1LCAwLCAyNTUsIDAuNylcIixcclxuICBjYWxoYTogXCJyZ2JhKDI0NSwgMjAxLCAzOCwgMC43KVwiLFxyXG4gIHBsdWc6IFwicmdiYSgxMjUsIDI1MywgMTQ4LCAwLjcpXCIsXHJcbiAgXCJ3aG9sZSBjb3JlXCI6IFwicmdiYSgyNTUsIDQzLCAyNCwgMC43KVwiXHJcbn1cclxuXHJcbi8vIE1vbnRhIElOKC4uLikgcmVzcGVpdGFuZG8gc2UgbyBjYW1wbyDDqSBzdHJpbmdcclxuZnVuY3Rpb24gdG9TcWxJbkxpc3QodmFsdWVzOiAoc3RyaW5nIHwgbnVtYmVyKVtdLCBhc1N0cmluZzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgaWYgKGFzU3RyaW5nKSB7XHJcbiAgICBjb25zdCBxdW90ZWQgPSB2YWx1ZXMubWFwKHYgPT4gYCcke1N0cmluZyh2KS5yZXBsYWNlKC8nL2csIFwiJydcIil9J2ApXHJcbiAgICByZXR1cm4gYCgke3F1b3RlZC5qb2luKFwiLFwiKX0pYFxyXG4gIH1cclxuICByZXR1cm4gYCgke3ZhbHVlcy5qb2luKFwiLFwiKX0pYFxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIoe1xyXG4gIGppbXVNYXBWaWV3LFxyXG4gIGRhZG9zLFxyXG4gIGNvbG9yRmlsbCxcclxuICBpZENhbWFkYSxcclxuICBpZExlZ2VuZGEsICAgLy8gbWFudGlkbyBwb3IgY29tcGF0LiwgbsOjbyB1c2FkbyBhcXVpXHJcbiAgdGl0bGVMZWdlbmRhLFxyXG4gIHdpdGhJbnRlcmVzdCAgLy8gb3BjaW9uYWwsIHPDsyBwYXJhIG1hbnRlciBhIGFzc2luYXR1cmEgZG8gY2FsbGVyXHJcbn06IHtcclxuICBqaW11TWFwVmlldzogYW55XHJcbiAgZGFkb3M6IHsgY29kaWdvUG9jbzogbnVtYmVyIHwgc3RyaW5nOyB0b3RhbDogbnVtYmVyIH1bXVxyXG4gIGNvbG9yRmlsbDogc3RyaW5nXHJcbiAgaWRDYW1hZGE6IHN0cmluZ1xyXG4gIGlkTGVnZW5kYT86IHN0cmluZ1xyXG4gIHRpdGxlTGVnZW5kYTogc3RyaW5nXHJcbiAgd2l0aEludGVyZXN0PzogYm9vbGVhblxyXG59KSB7XHJcbiAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3LnZpZXdcclxuICBjb25zdCBtYXAgPSB2aWV3Lm1hcFxyXG5cclxuICAvLyBuYWRhIHBhcmEgZGVzZW5oYXIgLT4gcmVtb3ZlIGNhbWFkYSBhbnRpZ2EgKHNlIGV4aXN0aXIpIGUgc2FpXHJcbiAgaWYgKCFkYWRvcyB8fCBkYWRvcy5sZW5ndGggPT09IDApIHtcclxuICAgIGNvbnN0IGV4aXN0ZW50ZSA9IG1hcC5maW5kTGF5ZXJCeUlkKGlkQ2FtYWRhKVxyXG4gICAgaWYgKGV4aXN0ZW50ZSkgbWFwLnJlbW92ZShleGlzdGVudGUpXHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIC8vIDEpIENhbWFkYSBiYXNlIChwZWdhciBnZW9tZXRyaWEgcG9yIGPDs2RpZ28pXHJcbiAgY29uc3QgY2FtYWRhUG9jb3MgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgIHVybDogXCJodHRwczovL2Jhc2VnaXMucGV0cm9icmFzLmNvbS5ici9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9FWFBMT1JBL0ZlYXR1cmVfUG9jb3MvTWFwU2VydmVyLzBcIixcclxuICAgIG91dEZpZWxkczogW1wiUE9DT19DRF9QT0NPXCJdLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICB0aXRsZTogXCJQb8Onb3MgKGJhc2UpXCJcclxuICB9KVxyXG4gIGF3YWl0IGNhbWFkYVBvY29zLmxvYWQoKVxyXG5cclxuICBjb25zdCBwb2NvRmllbGQgPSBjYW1hZGFQb2Nvcy5maWVsZHMuZmluZChmID0+IGYubmFtZSA9PT0gXCJQT0NPX0NEX1BPQ09cIilcclxuICBjb25zdCBpc1N0cmluZ0ZpZWxkID0gKHBvY29GaWVsZD8udHlwZSA9PT0gXCJzdHJpbmdcIilcclxuXHJcbiAgY29uc3QgY29kaWdvcyA9IGRhZG9zLm1hcChwID0+IHAuY29kaWdvUG9jbykuZmlsdGVyKHYgPT4gdiAhPT0gdW5kZWZpbmVkICYmIHYgIT09IG51bGwpXHJcbiAgY29uc3Qgd2hlcmUgPSBgUE9DT19DRF9QT0NPIElOICR7dG9TcWxJbkxpc3QoY29kaWdvcywgISFpc1N0cmluZ0ZpZWxkKX1gXHJcblxyXG4gIGNvbnN0IHF1ZXJ5UmVzdWx0ID0gYXdhaXQgY2FtYWRhUG9jb3MucXVlcnlGZWF0dXJlcyh7XHJcbiAgICB3aGVyZSxcclxuICAgIG91dEZpZWxkczogW1wiUE9DT19DRF9QT0NPXCJdLFxyXG4gICAgcmV0dXJuR2VvbWV0cnk6IHRydWVcclxuICB9KVxyXG5cclxuICAvLyAyKSBNb250YSBzb3VyY2UgY29tIE9CSkVDVElEIHByw7NwcmlvIGUgVE9UQUxcclxuICBjb25zdCB0b3RhbEJ5Q29kaWdvID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKVxyXG4gIGRhZG9zLmZvckVhY2goZCA9PiB0b3RhbEJ5Q29kaWdvLnNldChTdHJpbmcoZC5jb2RpZ29Qb2NvKSwgTnVtYmVyKGQudG90YWwgPz8gMCkpKVxyXG5cclxuICBjb25zdCBzb3VyY2UgPSBxdWVyeVJlc3VsdC5mZWF0dXJlcy5tYXAoKGZlYXQsIGkpID0+IHtcclxuICAgIGNvbnN0IGNvZCA9IFN0cmluZyhmZWF0LmF0dHJpYnV0ZXMuUE9DT19DRF9QT0NPKVxyXG4gICAgY29uc3QgdG90YWwgPSB0b3RhbEJ5Q29kaWdvLmdldChjb2QpID8/IDBcclxuICAgIGZlYXQuYXR0cmlidXRlcyA9IHtcclxuICAgICAgT0JKRUNUSUQ6IGkgKyAxLFxyXG4gICAgICBQT0NPX0NEX1BPQ086IGNvZCxcclxuICAgICAgVE9UQUw6IHRvdGFsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmVhdFxyXG4gIH0pXHJcblxyXG4gIC8vIDMpIFF1ZWJyYXMgKHVzYXIgUFJPUEVSVElFUyBwYXJhIGV2aXRhciBlcnJvIGRlIHRpcGFnZW0pXHJcbiAgY29uc3QgdmFsb3JlcyA9IGRhZG9zLm1hcChwID0+IE51bWJlcihwLnRvdGFsID8/IDApKVxyXG4gIGxldCBtaW4gPSBNYXRoLm1pbiguLi52YWxvcmVzKVxyXG4gIGxldCBtYXggPSBNYXRoLm1heCguLi52YWxvcmVzKVxyXG5cclxuICBjb25zdCBpbmZvOiBfX2VzcmkuQ2xhc3NCcmVha0luZm9Qcm9wZXJ0aWVzW10gPSBbXVxyXG4gIGNvbnN0IG91dGxpbmUgPSB7IGNvbG9yOiBcImJsYWNrXCIsIHdpZHRoOiAxIH0gLy8gd2lkdGggbnVtw6lyaWNvIVxyXG5cclxuICBpZiAoIWlzRmluaXRlKG1pbikgfHwgIWlzRmluaXRlKG1heCkpIHtcclxuICAgIC8vIHNlbSBkYWRvcyB2w6FsaWRvczogZGVpeGEgaW5mbyB2YXppbyAobsOjbyBkZXZlIG9jb3JyZXIgcG9pcyBqw6EgcmV0b3JuYW1vcyBhY2ltYSlcclxuICB9IGVsc2UgaWYgKG1pbiA9PT0gMCAmJiBtYXggPT09IDApIHtcclxuICAgIC8vIHRvZG9zIHplcm8gLT4gbWFudGVyIGJvbGhhIHBlcXVlbmEgZSBjaW56YSAocGFyYSBuw6NvIOKAnHN1bWly4oCdIGNsdXN0ZXIpXHJcbiAgICBjb25zdCBxdGQgPSB2YWxvcmVzLmxlbmd0aFxyXG4gICAgaW5mby5wdXNoKHtcclxuICAgICAgbWluVmFsdWU6IDAsXHJcbiAgICAgIG1heFZhbHVlOiAwLFxyXG4gICAgICBsYWJlbDogYHwgMCB8ICgke3F0ZH0gcG/Dp28ke3F0ZCA+IDEgPyBcInNcIiA6IFwiXCJ9KWAsXHJcbiAgICAgIHN5bWJvbDogbmV3IFNpbXBsZU1hcmtlclN5bWJvbCh7XHJcbiAgICAgICAgY29sb3I6IFwicmdiYSgyMDAsMjAwLDIwMCwwLjMpXCIsXHJcbiAgICAgICAgc2l6ZTogNixcclxuICAgICAgICBzdHlsZTogXCJjaXJjbGVcIixcclxuICAgICAgICBvdXRsaW5lXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB6ZXJhZG9zID0gdmFsb3Jlcy5maWx0ZXIodiA9PiB2ID09PSAwKS5sZW5ndGhcclxuICAgIGNvbnN0IG5hb1plcmFkb3MgPSB2YWxvcmVzLmZpbHRlcih2ID0+IHYgPiAwKVxyXG5cclxuICAgIGlmICh6ZXJhZG9zID4gMCkge1xyXG4gICAgICBpbmZvLnB1c2goe1xyXG4gICAgICAgIG1pblZhbHVlOiAwLFxyXG4gICAgICAgIG1heFZhbHVlOiAwLFxyXG4gICAgICAgIGxhYmVsOiBgfCAwIHwgKCR7emVyYWRvc30gcG/Dp28ke3plcmFkb3MgPiAxID8gXCJzXCIgOiBcIlwifSlgLFxyXG4gICAgICAgIHN5bWJvbDogbmV3IFNpbXBsZU1hcmtlclN5bWJvbCh7XHJcbiAgICAgICAgICBjb2xvcjogXCJyZ2JhKDIwMCwyMDAsMjAwLDAuMylcIixcclxuICAgICAgICAgIHNpemU6IDYsXHJcbiAgICAgICAgICBzdHlsZTogXCJjaXJjbGVcIixcclxuICAgICAgICAgIG91dGxpbmVcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1pbiA9IDFcclxuICAgIGNvbnN0IG4gPSBNYXRoLm1heChuYW9aZXJhZG9zLmxlbmd0aCwgMSlcclxuICAgIGNvbnN0IG51bUNsYXNzZXMgPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKDEgKyAzLjMgKiBNYXRoLmxvZzEwKG4pKSlcclxuICAgIGNvbnN0IGJyZWFrcyA9IE1hdGguY2VpbCgobWF4IC0gbWluICsgMSkgLyBudW1DbGFzc2VzKVxyXG4gICAgY29uc3QgbWF4U2l6ZSA9IDQwXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1DbGFzc2VzOyBpKyspIHtcclxuICAgICAgY29uc3QgbWluVmFsdWUgPSBtaW4gKyBpICogYnJlYWtzXHJcbiAgICAgIGNvbnN0IG1heFZhbHVlID0gbWluICsgKGkgKyAxKSAqIGJyZWFrcyAtIDFcclxuICAgICAgaWYgKG1pblZhbHVlID4gbWF4KSBicmVha1xyXG5cclxuICAgICAgY29uc3QgY291bnQgPSBuYW9aZXJhZG9zLmZpbHRlcih2ID0+IHYgPj0gbWluVmFsdWUgJiYgdiA8PSBtYXhWYWx1ZSkubGVuZ3RoXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gYCR7bWluVmFsdWV9IHwtLS18ICR7bWF4VmFsdWV9ICgke2NvdW50fSBwb8OnbyR7Y291bnQgPiAxID8gXCJzXCIgOiBcIlwifSlgXHJcbiAgICAgIGNvbnN0IHNpemUgPSA2ICsgaSAqIChtYXhTaXplIC8gbnVtQ2xhc3NlcylcclxuXHJcbiAgICAgIGluZm8ucHVzaCh7XHJcbiAgICAgICAgbWluVmFsdWUsXHJcbiAgICAgICAgbWF4VmFsdWUsXHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgc3ltYm9sOiBuZXcgU2ltcGxlTWFya2VyU3ltYm9sKHsgY29sb3I6IGNvbG9yRmlsbCwgc2l6ZSwgc3R5bGU6IFwiY2lyY2xlXCIsIG91dGxpbmUgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlcmVyID0gbmV3IENsYXNzQnJlYWtzUmVuZGVyZXIoe1xyXG4gICAgZmllbGQ6IFwiVE9UQUxcIixcclxuICAgIGNsYXNzQnJlYWtJbmZvczogaW5mb1xyXG4gIH0pXHJcblxyXG4gIC8vIDQpIFNjaGVtYSBtw61uaW1vIChGaWVsZCBpbnN0YW5jZXMpICsgQ0xVU1RFUklOR1xyXG4gIGNvbnN0IGZpZWxkcyA9IFtcclxuICAgIG5ldyBGaWVsZCh7IG5hbWU6IFwiT0JKRUNUSURcIiwgYWxpYXM6IFwiT0JKRUNUSURcIiwgdHlwZTogXCJvaWRcIiB9KSxcclxuICAgIG5ldyBGaWVsZCh7IG5hbWU6IFwiUE9DT19DRF9QT0NPXCIsIGFsaWFzOiBcIkPDs2RpZ28gZG8gUG/Dp29cIiwgdHlwZTogXCJzdHJpbmdcIiB9KSxcclxuICAgIG5ldyBGaWVsZCh7IG5hbWU6IFwiVE9UQUxcIiwgYWxpYXM6IFwiVG90YWxcIiwgdHlwZTogXCJkb3VibGVcIiB9KVxyXG4gIF1cclxuXHJcbiAgY29uc3QgbGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgIGlkOiBpZENhbWFkYSxcclxuICAgIHRpdGxlOiB0aXRsZUxlZ2VuZGEsXHJcbiAgICBzb3VyY2UsXHJcbiAgICBmaWVsZHMsXHJcbiAgICBvYmplY3RJZEZpZWxkOiBcIk9CSkVDVElEXCIsXHJcbiAgICBnZW9tZXRyeVR5cGU6IFwicG9pbnRcIixcclxuICAgIHNwYXRpYWxSZWZlcmVuY2U6IHZpZXc/LnNwYXRpYWxSZWZlcmVuY2UgPz8geyB3a2lkOiAxMDIxMDAgfSxcclxuICAgIHJlbmRlcmVyLFxyXG4gICAgbGlzdE1vZGU6IFwiaGlkZVwiLFxyXG4gICAgcG9wdXBFbmFibGVkOiB0cnVlLFxyXG4gICAgcG9wdXBUZW1wbGF0ZToge1xyXG4gICAgICB0aXRsZTogXCJ7UE9DT19DRF9QT0NPfVwiLFxyXG4gICAgICBjb250ZW50OiBcIlRvdGFsOiB7VE9UQUx9XCJcclxuICAgIH0sXHJcbiAgICBmZWF0dXJlUmVkdWN0aW9uOiB7XHJcbiAgICAgIHR5cGU6IFwiY2x1c3RlclwiLFxyXG4gICAgICBjbHVzdGVyUmFkaXVzOiBcIjgwcHhcIixcclxuICAgICAgLy8gc8OtbWJvbG8gZG8gY2x1c3RlciBuYSBjb3IgZGEgc8OpcmllXHJcbiAgICAgIHN5bWJvbDoge1xyXG4gICAgICAgIHR5cGU6IFwic2ltcGxlLW1hcmtlclwiLFxyXG4gICAgICAgIHN0eWxlOiBcImNpcmNsZVwiLFxyXG4gICAgICAgIHNpemU6IDI4LFxyXG4gICAgICAgIGNvbG9yOiBjb2xvckZpbGwsXHJcbiAgICAgICAgb3V0bGluZTogeyBjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDogMS41IH1cclxuICAgICAgfSBhcyBhbnksXHJcbiAgICAgIC8vIGNvbXBhdGliaWxpZGFkZSBjb20gYnVpbGRzIHF1ZSB1c2FtIGNsdXN0ZXJTeW1ib2xcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICBjbHVzdGVyU3ltYm9sOiB7XHJcbiAgICAgICAgdHlwZTogXCJzaW1wbGUtbWFya2VyXCIsXHJcbiAgICAgICAgc3R5bGU6IFwiY2lyY2xlXCIsXHJcbiAgICAgICAgc2l6ZTogMjgsXHJcbiAgICAgICAgY29sb3I6IGNvbG9yRmlsbCxcclxuICAgICAgICBvdXRsaW5lOiB7IGNvbG9yOiBcIndoaXRlXCIsIHdpZHRoOiAxLjUgfVxyXG4gICAgICB9LFxyXG4gICAgICBsYWJlbHNWaXNpYmxlOiB0cnVlLFxyXG4gICAgICBsYWJlbGluZ0luZm86IFt7XHJcbiAgICAgICAgZGVjb25mbGljdGlvblN0cmF0ZWd5OiBcIm5vbmVcIixcclxuICAgICAgICBsYWJlbEV4cHJlc3Npb25JbmZvOiB7IGV4cHJlc3Npb246IFwiVGV4dCgkZmVhdHVyZS5jbHVzdGVyX2NvdW50LCAnIywjIyMnKVwiIH0sXHJcbiAgICAgICAgc3ltYm9sOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICBoYWxvQ29sb3I6IFwiIzMzM1wiLFxyXG4gICAgICAgICAgaGFsb1NpemU6IDEuNSxcclxuICAgICAgICAgIGZvbnQ6IHsgc2l6ZTogMTAsIHdlaWdodDogXCJib2xkXCIgfVxyXG4gICAgICAgIH0gYXMgYW55XHJcbiAgICAgIH1dXHJcbiAgICB9IGFzIGFueVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGV4aXN0ZW50ZSA9IG1hcC5maW5kTGF5ZXJCeUlkKGlkQ2FtYWRhKVxyXG4gIGlmIChleGlzdGVudGUpIG1hcC5yZW1vdmUoZXhpc3RlbnRlKVxyXG4gIG1hcC5hZGQobGF5ZXIpXHJcblxyXG4gIHJldHVybiBsYXllclxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfbGF5ZXJzX0ZlYXR1cmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfbGF5ZXJzX3N1cHBvcnRfRmllbGRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX3JlbmRlcmVyc19DbGFzc0JyZWFrc1JlbmRlcmVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9zeW1ib2xzX1NpbXBsZU1hcmtlclN5bWJvbF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuLyoqIEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50ICovXHJcbmltcG9ydCB7IFJlYWN0LCBqc3gsIGNzcywgR2xvYmFsIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgZ2VyYXJNYXBhRGlzdHJpYnVpY2FvRUIsIGNvcmVzVGlwb3MgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuLyogPT09PT0gVGlwb3MgPT09PT0gKi9cclxudHlwZSBNc2dGYWl4YUludGVyZXNzZSA9IHsgdHlwZTogJ2ZhaXhhLWludGVyZXNzZSc7IGNvZGlnb3NQb2NvczogKG51bWJlciB8IHN0cmluZylbXSB9XHJcblxyXG50eXBlIEFtb3N0cmFJdGVtID0ge1xyXG4gIGNvZGlnb1BvY286IG51bWJlclxyXG4gIHRvdGFsQW1vc3RyYXNMYXRlcmFpczogbnVtYmVyXHJcbiAgdG90YWxDYWxoYXM6IG51bWJlclxyXG4gIHRvdGFsUGx1Z3M6IG51bWJlclxyXG4gIHRvdGFsVGVzdGVtdW5ob3M6IG51bWJlclxyXG4gIHRvdGFsV2hvbGVDb3JlOiBudW1iZXJcclxufVxyXG5cclxuLyogPT09PT0gQ29uZmlnID09PT09ICovXHJcbmNvbnN0IERFRkFVTFRfRkFJWEFfSU5URVJFU1NFID0gZmFsc2VcclxuXHJcbi8qID09PT09IE1hcCBkZSBjYW1wb3MgcG9yIHRpcG8gPT09PT0gKi9cclxuY29uc3QgVFlQRV9GSUVMRDogUmVjb3JkPHN0cmluZywga2V5b2YgQW1vc3RyYUl0ZW0+ID0ge1xyXG4gIGxhdGVyYWw6ICd0b3RhbEFtb3N0cmFzTGF0ZXJhaXMnLFxyXG4gIHRlc3RlbXVuaG86ICd0b3RhbFRlc3RlbXVuaG9zJyxcclxuICBjYWxoYTogJ3RvdGFsQ2FsaGFzJyxcclxuICBwbHVnOiAndG90YWxQbHVncycsXHJcbiAgJ3dob2xlIGNvcmUnOiAndG90YWxXaG9sZUNvcmUnXHJcbn1cclxuY29uc3QgTElTVF9UWVBFUyA9IE9iamVjdC5rZXlzKFRZUEVfRklFTEQpIC8vIFsnbGF0ZXJhbCcsICd0ZXN0ZW11bmhvJywg4oCmXVxyXG5cclxuLyogPT09PT0gVXRpbCA9PT09PSAqL1xyXG5jb25zdCBsb2cxMCA9ICh4OiBudW1iZXIpID0+IE1hdGgubG9nMTAgPyBNYXRoLmxvZzEwKHgpIDogTWF0aC5sb2coeCkgLyBNYXRoLkxOMTBcclxuXHJcbi8qKiBNb250YSBvIGNvcnBvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZCBpZ3VhbCBhbyBxdWUgbyBiYWNrIGVzcGVyYSAqL1xyXG5mdW5jdGlvbiBidWlsZFNlc3Npb25Cb2R5KGZhaXhhSW50ZXJlc3NlOiBib29sZWFuKSB7XHJcbiAgY29uc3QgcCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG4gIHAuc2V0KCdoZFN5cycsICdub3ZhaW50Y29ucycpXHJcbiAgcC5zZXQoJ2hkVUMnLCAnTWFwYScpXHJcbiAgcC5zZXQoJ2hkQWNhbycsICdDYXJyZWdhck1hcGFEaXN0cmlidWljYW9BbW9zdHJhc0NvbnRhZG9yJylcclxuICBwLnNldCgnaGRTZXNzaW9uRmlsdGVyJywgJ3RydWUnKVxyXG4gIHAuc2V0KCdmYWl4YUludGVyZXNzZScsIFN0cmluZyghIWZhaXhhSW50ZXJlc3NlKSlcclxuICByZXR1cm4gcC50b1N0cmluZygpXHJcbn1cclxuXHJcbi8qKiBOb3JtYWxpemEgcmVzcG9zdGEgZGEgQVBJICovXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUxpc3QocmF3OiBhbnlbXSk6IEFtb3N0cmFJdGVtW10ge1xyXG4gIHJldHVybiAoQXJyYXkuaXNBcnJheShyYXcpID8gcmF3IDogW10pXHJcbiAgICAubWFwKChyOiBhbnkpID0+ICh7XHJcbiAgICAgIGNvZGlnb1BvY286IE51bWJlcihyLmNvZGlnb1BvY28gPz8gci5QT0NPX0NEX1BPQ08gPz8gci5wb2NvID8/IHIuY29kaWdvID8/IDApLFxyXG4gICAgICB0b3RhbEFtb3N0cmFzTGF0ZXJhaXM6IE51bWJlcihyLnRvdGFsQW1vc3RyYXNMYXRlcmFpcyA/PyByLmxhdGVyYWlzID8/IDApLFxyXG4gICAgICB0b3RhbENhbGhhczogTnVtYmVyKHIudG90YWxDYWxoYXMgPz8gci5jYWxoYXMgPz8gMCksXHJcbiAgICAgIHRvdGFsUGx1Z3M6IE51bWJlcihyLnRvdGFsUGx1Z3MgPz8gci5wbHVncyA/PyAwKSxcclxuICAgICAgdG90YWxUZXN0ZW11bmhvczogTnVtYmVyKHIudG90YWxUZXN0ZW11bmhvcyA/PyByLnRlc3RlbXVuaG9zID8/IDApLFxyXG4gICAgICB0b3RhbFdob2xlQ29yZTogTnVtYmVyKHIudG90YWxXaG9sZUNvcmUgPz8gci53aG9sZUNvcmUgPz8gMClcclxuICAgIH0pKVxyXG4gICAgLmZpbHRlcih4ID0+ICEheC5jb2RpZ29Qb2NvKVxyXG59XHJcblxyXG4vKiogRmF6IG8gZmV0Y2ggdmlhIHDDoWdpbmEgcGFpIChyZXNvbHZlIENPUlMpICovXHJcbmZ1bmN0aW9uIGZldGNoVmlhUGFyZW50KGJvZHk6IHN0cmluZyk6IFByb21pc2U8QW1vc3RyYUl0ZW1bXT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCByZXFJZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpXHJcbiAgICBsZXQgdGFyZ2V0T3JpZ2luID0gJyonXHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoZG9jdW1lbnQucmVmZXJyZXIpIHRhcmdldE9yaWdpbiA9IG5ldyBVUkwoZG9jdW1lbnQucmVmZXJyZXIpLm9yaWdpblxyXG4gICAgfSBjYXRjaCB7IC8qIG5vb3AgKi8gfVxyXG5cclxuICAgIGNvbnN0IG9uTWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGQgPSAoZXZlbnQgYXMgYW55KS5kYXRhIHx8IHt9XHJcbiAgICAgIGlmIChkLnJlcUlkICE9PSByZXFJZCkgcmV0dXJuXHJcbiAgICAgIGlmIChkLnR5cGUgPT09ICdmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzOm9rJykge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG4gICAgICAgIHJlc29sdmUobm9ybWFsaXplTGlzdChkLnBheWxvYWQpKVxyXG4gICAgICB9IGVsc2UgaWYgKGQudHlwZSA9PT0gJ2ZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXM6ZXJyJykge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoZC5tZXNzYWdlIHx8ICdFcnJvIG5vIGZldGNoIHZpYSBwYXJlbnQnKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpXHJcblxyXG4gICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIHR5cGU6ICdmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzJyxcclxuICAgICAgLy8gdXJsOiAnL2V4cGxvcmEvZXhwbG9yYScsICAgLy8gY2FtaW5obyByZWxhdGl2byByZXNvbHZpZG8gbm8gQVBQIHBhaVxyXG4gICAgICBib2R5LFxyXG4gICAgICByZXFJZFxyXG4gICAgfSwgdGFyZ2V0T3JpZ2luKVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKiBBUEkgcHJpbmNpcGFsIChzZW1wcmUgdmlhIHBhcmVudCkgKi9cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcyhmYWl4YUludGVyZXNzZSA9IGZhbHNlKTogUHJvbWlzZTxBbW9zdHJhSXRlbVtdPiB7XHJcbiAgY29uc3QgYm9keSA9IGJ1aWxkU2Vzc2lvbkJvZHkoZmFpeGFJbnRlcmVzc2UpXHJcbiAgcmV0dXJuIGZldGNoVmlhUGFyZW50KGJvZHkpXHJcbn1cclxuXHJcbi8qID09PT09IEVzdGlsb3MgPT09PT0gKi9cclxuY29uc3QgTUFYX0JVQkJMRSA9IDQwXHJcbmNvbnN0IGdsb2JhbFBhbmVsU3R5bGUgPSBjc3NgXHJcbiAgZGl2W3JvbGU9J2RpYWxvZyddW2FyaWEtbGFiZWw9J21hcGEtZGUtZGlzdHJpYnVpY2FvJ10ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBpbnNldDogNTBweCAxMnB4IGF1dG8gYXV0byAhaW1wb3J0YW50OyAvKiB0b3A6MTIsIHJpZ2h0OjEyICovXHJcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzNjBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1NTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjRweCkgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IGJ1YmJsZUJveFN0eWxlID0gY3NzYFxyXG4gIHdpZHRoOiAke01BWF9CVUJCTEV9cHg7XHJcbiAgaGVpZ2h0OiAke01BWF9CVUJCTEV9cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG5gXHJcbmNvbnN0IHdyYXBwZXJTdHlsZSA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLDAsMCwuMSk7IHBhZGRpbmc6IDE2cHg7IG92ZXJmbG93OiBoaWRkZW47XHJcbmBcclxuY29uc3QgdGl0bGVTdHlsZSA9IGNzc2Bmb250LXdlaWdodDo2MDA7IG1hcmdpbi1ib3R0b206NHB4OyBkaXNwbGF5OmJsb2NrO2BcclxuY29uc3Qgc2VsZWN0U3R5bGUgPSBjc3Ngd2lkdGg6MTAwJTsgcGFkZGluZzo2cHggOHB4OyBtYXJnaW4tYm90dG9tOjEycHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjY2NjOyBib3JkZXItcmFkaXVzOjRweDtgXHJcbmNvbnN0IGxpc3RTdHlsZSA9IGNzc2BvdmVyZmxvdy15OmF1dG87IG1hcmdpbi1ib3R0b206MTJweDtcclxuICBwYWRkaW5nOjhweDsgYmFja2dyb3VuZDojZmFmYWZhOyBib3JkZXI6MXB4IHNvbGlkICNlZWU7IGJvcmRlci1yYWRpdXM6NHB4O2BcclxuY29uc3QgY2hlY2tib3hSb3dTdHlsZSA9IGNzc2BkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgbWFyZ2luLWJvdHRvbTo2cHg7IGN1cnNvcjpwb2ludGVyO2BcclxuY29uc3Qgc3VtbWFyeUxpc3RTdHlsZSA9IGNzc2BcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDM2cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmBcclxuY29uc3Qgc3VtbWFyeUl0ZW1TdHlsZSA9IGNzc2BkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgbWFyZ2luLWJvdHRvbTo2cHg7YFxyXG5jb25zdCByYW5nZUxhYmVsU3R5bGUgPSBjc3NgZm9udC1zaXplOjAuOXJlbTtgXHJcbmNvbnN0IGZvb3RlclN0eWxlID0gY3NzYFxyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgcGFkZGluZzogNHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IGZvb3RlckxhYmVsU3R5bGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBgXHJcblxyXG4vKiA9PT09PSBRdWVicmFzIHBhcmEgbyBzdW3DoXJpbyA9PT09PSAqL1xyXG5mdW5jdGlvbiBjYWxjdWxhclF1ZWJyYXMoZGFkb3M6IHsgdG90YWw6IG51bWJlciB9W10sIGNvbG9yRmlsbDogc3RyaW5nKSB7XHJcbiAgY29uc3QgdmFsb3JlcyA9IGRhZG9zLm1hcChwID0+IHAudG90YWwpXHJcbiAgbGV0IG1pbiA9IE1hdGgubWluKC4uLnZhbG9yZXMpXHJcbiAgbGV0IG1heCA9IE1hdGgubWF4KC4uLnZhbG9yZXMpXHJcblxyXG4gIGNvbnN0IGluZm86IHsgbGFiZWw6IHN0cmluZzsgc2l6ZTogbnVtYmVyOyBjb3I6IHN0cmluZzsgY291bnQ6IG51bWJlciB9W10gPSBbXVxyXG5cclxuICBpZiAoIWlzRmluaXRlKG1pbikgfHwgIWlzRmluaXRlKG1heCkpIHtcclxuICAgIHJldHVybiBpbmZvXHJcbiAgfVxyXG5cclxuICBpZiAobWluID09PSAwICYmIG1heCA9PT0gMCkge1xyXG4gICAgaW5mby5wdXNoKHsgbGFiZWw6ICdOw6NvIGjDoSBkYWRvcyBzdWZpY2llbnRlcycsIHNpemU6IDAsIGNvcjogY29sb3JGaWxsLCBjb3VudDogMCB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB6ZXJhZG9zID0gdmFsb3Jlcy5maWx0ZXIodiA9PiB2ID09PSAwKS5sZW5ndGhcclxuICAgIGNvbnN0IG5hb1plcmFkb3MgPSB2YWxvcmVzLmZpbHRlcih2ID0+IHYgPiAwKVxyXG5cclxuICAgIGlmICh6ZXJhZG9zID4gMCkge1xyXG4gICAgICBpbmZvLnB1c2goe1xyXG4gICAgICAgIGxhYmVsOiBgfCAwIHwgKCR7emVyYWRvc30gcG/Dp28ke3plcmFkb3MgPiAxID8gJ3MnIDogJyd9KWAsXHJcbiAgICAgICAgc2l6ZTogNiwgY29yOiAncmdiYSgyMDAsMjAwLDIwMCwwLjMpJywgY291bnQ6IHplcmFkb3NcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBtaW4gPSAxXHJcbiAgICBjb25zdCBuID0gbmFvWmVyYWRvcy5sZW5ndGhcclxuICAgIGNvbnN0IG51bUNsYXNzZXMgPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKDEgKyAzLjMgKiBsb2cxMChuIHx8IDEpKSlcclxuICAgIGNvbnN0IGJyZWFrcyA9IE1hdGguY2VpbCgobWF4IC0gbWluICsgMSkgLyBudW1DbGFzc2VzKVxyXG4gICAgY29uc3QgbWF4U2l6ZSA9IDQwXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1DbGFzc2VzOyBpKyspIHtcclxuICAgICAgY29uc3QgbWluVmFsdWUgPSBtaW4gKyBpICogYnJlYWtzXHJcbiAgICAgIGNvbnN0IG1heFZhbHVlID0gbWluICsgKGkgKyAxKSAqIGJyZWFrcyAtIDFcclxuICAgICAgaWYgKG1pblZhbHVlID4gbWF4KSBicmVha1xyXG5cclxuICAgICAgY29uc3QgY291bnQgPSBuYW9aZXJhZG9zLmZpbHRlcih2ID0+IHYgPj0gbWluVmFsdWUgJiYgdiA8PSBtYXhWYWx1ZSkubGVuZ3RoXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gYCR7bWluVmFsdWV9IHwtLS18ICR7bWF4VmFsdWV9ICgke2NvdW50fSBwb8OnbyR7Y291bnQgPiAxID8gJ3MnIDogJyd9KWBcclxuICAgICAgY29uc3Qgc2l6ZSA9IDYgKyBpICogKG1heFNpemUgLyBudW1DbGFzc2VzKVxyXG5cclxuICAgICAgaW5mby5wdXNoKHsgbGFiZWwsIHNpemUsIGNvcjogY29sb3JGaWxsLCBjb3VudCB9KVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gaW5mb1xyXG59XHJcblxyXG4vKiA9PT09PSBBREnDh8ODTzogaGVscGVycyBtw61uaW1vcyBwYXJhIGxvY2FsaXphciBvIGRpYWxvZyBkbyBFQiA9PT09PSAqL1xyXG5mdW5jdGlvbiBmaW5kQ2xvc2VzdERpYWxvZyhlbDogSFRNTEVsZW1lbnQgfCBudWxsKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICBsZXQgY3VyOiBIVE1MRWxlbWVudCB8IG51bGwgPSBlbFxyXG4gIHdoaWxlIChjdXIpIHtcclxuICAgIGlmIChjdXIuZ2V0QXR0cmlidXRlICYmIGN1ci5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ2RpYWxvZycpIHJldHVybiBjdXJcclxuICAgIGN1ciA9IGN1ci5wYXJlbnRFbGVtZW50XHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbi8qID09PT09IENvbXBvbmVudGUgPT09PT0gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0KHByb3BzOiBhbnkpIHtcclxuICAvKiogRXN0YWRvIGJhc2UgKi9cclxuICBjb25zdCBbamltdU1hcFZpZXcsIHNldEppbXVNYXBWaWV3XSA9IFJlYWN0LnVzZVN0YXRlPEppbXVNYXBWaWV3PigpXHJcbiAgY29uc3QgW2NhdGVnb3JpYSwgc2V0Q2F0ZWdvcmlhXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpICAgICAgICAvLyBzZWxlY3RcclxuICBjb25zdCBbdGlwb3NTZWwsIHNldFRpcG9zU2VsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSkgICAgICAgIC8vIGNoZWNrYm94ZXNcclxuICBjb25zdCBbc2hvd0VtcHR5LCBzZXRTaG93RW1wdHldID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG4gIC8qKiBJbnRlcnZhbG8gZGUgaW50ZXJlc3NlICovXHJcbiAgY29uc3QgW3dpdGhJbnRlcmVzdCwgc2V0V2l0aEludGVyZXN0XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtzaG93V2l0aEludGVyZXN0LCBzZXRzaG93V2l0aEludGVyZXN0XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtmYWl4YVNldCwgc2V0RmFpeGFTZXRdID0gUmVhY3QudXNlU3RhdGU8U2V0PG51bWJlcj4+KFxyXG4gICAgKCkgPT4gbmV3IFNldDxudW1iZXI+KFxyXG4gICAgICAoQXJyYXkuaXNBcnJheShwcm9wcz8uY29kaWdvc0ZhaXhhSW50ZXJlc3NlKSA/IHByb3BzLmNvZGlnb3NGYWl4YUludGVyZXNzZSA6IFtdKVxyXG4gICAgICAgIC5tYXAoKHY6IGFueSkgPT4gTnVtYmVyKHYpKS5maWx0ZXIoKHY6IGFueSkgPT4gIWlzTmFOKHYpKVxyXG4gICAgKVxyXG4gIClcclxuXHJcbiAgLyoqIEJhc2VzIGRlIGRhZG9zICovXHJcbiAgY29uc3QgW2RhZG9zRnVsbCwgc2V0RGFkb3NGdWxsXSA9IFJlYWN0LnVzZVN0YXRlPEFtb3N0cmFJdGVtW10gfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFtkYWRvc0ZhaXhhQVBJLCBzZXREYWRvc0ZhaXhhQVBJXSA9IFJlYWN0LnVzZVN0YXRlPEFtb3N0cmFJdGVtW10gfCBudWxsPihudWxsKVxyXG5cclxuICAvKiogTG9hZGluZyAvIGVycm9zICovXHJcbiAgY29uc3QgW2xvYWRpbmdGdWxsLCBzZXRMb2FkaW5nRnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbG9hZGluZ0ludGVyZXN0LCBzZXRMb2FkaW5nSW50ZXJlc3RdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2Vycm9yRnVsbCwgc2V0RXJyb3JGdWxsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpXHJcbiAgY29uc3QgW2Vycm9ySW50ZXJlc3QsIHNldEVycm9ySW50ZXJlc3RdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJylcclxuXHJcbiAgLyogQURJw4fDg086IHJlZiBwYXJhIGxvY2FsaXphciBvIGRpYWxvZyBkbyBFQiBxdWUgY29udMOpbSBvIHdpZGdldCAqL1xyXG4gIGNvbnN0IHJvb3RSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXHJcblxyXG4gIC8qID4+Pj4+IEFEScOHw4NPOiBsb2dhciBvIHZhbG9yIGVudmlhZG8gcGVsbyBwYWkgKGNvbmNHZW8gLT4gc3RhcnRXaXRoSW50ZXJlc3QpIDw8PDw8ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiV2lkZ2V0IGF0dWFsaXphZG8gZW0gMzAvMDgvMjAyNVwiKVxyXG4gICAgY29uc3Qgb25DZmcgPSAoZXY6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBkOiBhbnkgPSBldj8uZGF0YSB8fCB7fVxyXG4gICAgICBpZiAoZD8udHlwZSA9PT0gJ2ZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXM6b2snKSB7XHJcbiAgICAgICAgc2V0c2hvd1dpdGhJbnRlcmVzdCghIWQuc3RhcnRXaXRoSW50ZXJlc3QpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25DZmcpXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbkNmZylcclxuICB9LCBbXSlcclxuICAvKiA+Pj4+PiBGSU0gREEgQURJw4fDg08gPDw8PDwgKi9cclxuXHJcbiAgLyogUmVjZWJlIGZhaXhhIGRlIGludGVyZXNzZSB2aWEgcG9zdE1lc3NhZ2UgKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb25Nc2cgPSAoZXY6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gZXY/LmRhdGEgYXMgTXNnRmFpeGFJbnRlcmVzc2VcclxuICAgICAgaWYgKCFkYXRhIHx8IGRhdGEudHlwZSAhPT0gJ2ZhaXhhLWludGVyZXNzZScgfHwgIUFycmF5LmlzQXJyYXkoZGF0YS5jb2RpZ29zUG9jb3MpKSByZXR1cm5cclxuICAgICAgY29uc3QgbnVtcyA9IGRhdGEuY29kaWdvc1BvY29zLm1hcCgodikgPT4gTnVtYmVyKHYpKS5maWx0ZXIodiA9PiAhaXNOYU4odikpXHJcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1tpbnRlcnZhbG9dIFJlY2ViaWRvcycsIGRhdGEuY29kaWdvc1BvY29zLmxlbmd0aCwgJy0+IHbDoWxpZG9zIChuw7ptZXJvcyk6JywgbnVtcy5sZW5ndGgpXHJcbiAgICAgIHNldEZhaXhhU2V0KG5ldyBTZXQ8bnVtYmVyPihudW1zKSlcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Nc2cpXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1zZylcclxuICB9LCBbXSlcclxuXHJcbiAgLyoqIENhcnJlZ2EgYmFzZSBjb21wbGV0YSBhbyBzZWxlY2lvbmFyIGEgY2F0ZWdvcmlhIFwic2FtcGxlXCIgKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXHJcbiAgICBhc3luYyBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICAgIGlmIChjYXRlZ29yaWEgIT09ICdzYW1wbGUnKSByZXR1cm5cclxuICAgICAgc2V0TG9hZGluZ0Z1bGwodHJ1ZSlcclxuICAgICAgc2V0RXJyb3JGdWxsKCcnKVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzKERFRkFVTFRfRkFJWEFfSU5URVJFU1NFKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICBzZXREYWRvc0Z1bGwoZGF0YSlcclxuICAgICAgICAgIHNldFRpcG9zU2VsKFtdKSAvLyBsaW1wYSBzZWxlw6fDo28gYW50ZXJpb3JcclxuICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1tmdWxsXSBUb3RhbCBkZSBwb8Onb3M6JywgZGF0YS5sZW5ndGgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgc2V0RXJyb3JGdWxsKGU/Lm1lc3NhZ2UgfHwgJ0ZhbGhhIGFvIGJ1c2NhciBkYWRvcyAoYmFzZSBjb21wbGV0YSknKVxyXG4gICAgICAgICAgc2V0RGFkb3NGdWxsKFtdKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkgc2V0TG9hZGluZ0Z1bGwoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJ1bigpXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbY2F0ZWdvcmlhXSlcclxuXHJcbiAgLyoqIEJ1c2NhIGJhc2UgZG8gaW50ZXJlc3NlIG5vIHNlcnZpZG9yIHF1YW5kbyBuZWNlc3PDoXJpbyAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgaWYgKGNhdGVnb3JpYSAhPT0gJ3NhbXBsZScpIHJldHVyblxyXG4gICAgICBpZiAoIXdpdGhJbnRlcmVzdCkgcmV0dXJuXHJcbiAgICAgIGlmIChmYWl4YVNldC5zaXplID4gMCkgcmV0dXJuIC8vIGrDoSB2YW1vcyBmaWx0cmFyIGxvY2FsXHJcbiAgICAgIGlmIChkYWRvc0ZhaXhhQVBJICE9PSBudWxsKSByZXR1cm4gLy8gasOhIHRlbW9zIChvdSBqw6EgZmFsaG91KVxyXG4gICAgICBzZXRMb2FkaW5nSW50ZXJlc3QodHJ1ZSlcclxuICAgICAgc2V0RXJyb3JJbnRlcmVzdCgnJylcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcyh0cnVlKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICBzZXREYWRvc0ZhaXhhQVBJKGRhdGEpXHJcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbZmFpeGFBUEldIFRvdGFsIGRlIHBvw6dvcyAoQVBJKTonLCBkYXRhLmxlbmd0aClcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICBzZXRFcnJvckludGVyZXN0KGU/Lm1lc3NhZ2UgfHwgJ0ZhbGhhIGFvIGJ1c2NhciBkYWRvcyBkbyBpbnRlcnZhbG8gZGUgaW50ZXJlc3NlJylcclxuICAgICAgICAgIHNldERhZG9zRmFpeGFBUEkoW10pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSBzZXRMb2FkaW5nSW50ZXJlc3QoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJ1bigpXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbY2F0ZWdvcmlhLCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0LCBkYWRvc0ZhaXhhQVBJXSlcclxuXHJcbiAgLyoqIFJlZGVzZW5oYSBhcyBjYW1hZGFzIHF1YW5kbyBiYXNlL3NlbGXDp8Ojby9pbnRlcnNzZSBtdWRhbSAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWppbXVNYXBWaWV3KSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBiYXNlOiBBbW9zdHJhSXRlbVtdID0gd2l0aEludGVyZXN0XHJcbiAgICAgID8gKGZhaXhhU2V0LnNpemUgPiAwXHJcbiAgICAgICAgICA/IChkYWRvc0Z1bGwgPz8gW10pLmZpbHRlcih4ID0+IGZhaXhhU2V0LmhhcyhOdW1iZXIoeC5jb2RpZ29Qb2NvKSkpXHJcbiAgICAgICAgICA6IChkYWRvc0ZhaXhhQVBJID8/IGRhZG9zRnVsbCA/PyBbXSkpXHJcbiAgICAgIDogKGRhZG9zRnVsbCA/PyBbXSlcclxuXHJcbiAgICBpZiAoIWJhc2UgfHwgYmFzZS5sZW5ndGggPT09IDApIHJldHVybiAvLyBldml0YSBhcGFnYXIgc2VtIHRlciBzdWJzdGl0dXRvXHJcblxyXG4gICAgY29uc3QgeyB2aWV3IH0gPSBqaW11TWFwVmlld1xyXG5cclxuICAgIC8vIGxpbXBhIGNhbWFkYXMgYW50aWdhcyBkYSBub3NzYSBkaXN0cmlidWnDp8Ojb1xyXG4gICAgTElTVF9UWVBFUy5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICBjb25zdCBsYXllciA9IHZpZXcubWFwLmZpbmRMYXllckJ5SWQoJ2Ftb3N0cmFzXycgKyB0KVxyXG4gICAgICBpZiAobGF5ZXIpIHZpZXcubWFwLnJlbW92ZShsYXllcilcclxuICAgIH0pXHJcblxyXG4gICAgLy8gZGVzZW5oYSBwb3IgdGlwbyBzZWxlY2lvbmFkbyAoY29yZXMgcG9yIHRpcG8gc2UgbWFudMOqbSlcclxuICAgIHRpcG9zU2VsLmZvckVhY2godGlwbyA9PiB7XHJcbiAgICAgIGNvbnN0IGRhZG9zID0gYmFzZS5tYXAoZCA9PiAoe1xyXG4gICAgICAgIGNvZGlnb1BvY286IGQuY29kaWdvUG9jbyxcclxuICAgICAgICB0b3RhbDogZFtUWVBFX0ZJRUxEW3RpcG9dXSA/PyAwXHJcbiAgICAgIH0pKVxyXG5cclxuICAgICAgY29uc3QgbnVtQ29tVmFsb3IgPSBkYWRvcy5maWx0ZXIoZCA9PiAoZC50b3RhbCA/PyAwKSA+IDApLmxlbmd0aFxyXG4gICAgICBjb25zb2xlLmRlYnVnKGBbZHJhd10gdGlwbz0ke3RpcG99IGNvbSB2YWxvcj4wOmAsIG51bUNvbVZhbG9yLCAnZGUnLCBkYWRvcy5sZW5ndGgpXHJcblxyXG4gICAgICBjb25zdCBjb3IgPSBjb3Jlc1RpcG9zW3RpcG9dIHx8ICdyZ2JhKDAsMCwwLDAuNSknXHJcblxyXG4gICAgICBnZXJhck1hcGFEaXN0cmlidWljYW9FQih7XHJcbiAgICAgICAgamltdU1hcFZpZXcsXHJcbiAgICAgICAgZGFkb3MsXHJcbiAgICAgICAgY29sb3JGaWxsOiBjb3IsXHJcbiAgICAgICAgaWRDYW1hZGE6ICdhbW9zdHJhc18nICsgdGlwbyxcclxuICAgICAgICBpZExlZ2VuZGE6ICdsZ2RfYW1vc3RyYXNfJyArIHRpcG8sXHJcbiAgICAgICAgdGl0bGVMZWdlbmRhOiAod2l0aEludGVyZXN0ID8gJ0ludGVydmFsbyBkZSBJbnRlcmVzc2UgLSAnIDogJycpICtcclxuICAgICAgICAgICAgICAgICAgICAgICh0aXBvLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGlwby5zbGljZSgxKSksXHJcbiAgICAgICAgd2l0aEludGVyZXN0XHJcbiAgICAgIH0gYXMgYW55KVxyXG4gICAgfSlcclxuICB9LCBbamltdU1hcFZpZXcsIHRpcG9zU2VsLCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0LCBkYWRvc0Z1bGwsIGRhZG9zRmFpeGFBUEldKVxyXG5cclxuICAvKiA9PT09PSBBREnDh8ODTzogbGltcGFyIGNhbWFkYXMgYW8gY2xpY2FyIG5vIFwiRmVjaGFyXCIgZG8gZGlhbG9nIGRvIEVCID09PT09ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldz8udmlld1xyXG4gICAgaWYgKCF2aWV3KSByZXR1cm5cclxuICAgIGNvbnN0IHJvb3QgPSByb290UmVmLmN1cnJlbnRcclxuICAgIGlmICghcm9vdCkgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgZGxnID0gZmluZENsb3Nlc3REaWFsb2cocm9vdClcclxuICAgIGlmICghZGxnKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRsZy5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnYnV0dG9uW2FyaWEtbGFiZWw9XCJDbG9zZVwiXSwgYnV0dG9uW3RpdGxlPVwiQ2xvc2VcIl0sIGJ1dHRvblthcmlhLWxhYmVsPVwiRmVjaGFyXCJdLCBidXR0b25bdGl0bGU9XCJGZWNoYXJcIl0sIFtkYXRhLWFjdGlvbj1cImNsb3NlXCJdJ1xyXG4gICAgKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcclxuICAgIGlmICghY2xvc2VCdG4pIHJldHVyblxyXG5cclxuICAgIGNvbnN0IGNsZWFyT25DbG9zZSA9ICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyByZW1vdmUgYXMgY2FtYWRhcyBxdWUgZXN0ZSB3aWRnZXQgYWRpY2lvbm91XHJcbiAgICAgICAgTElTVF9UWVBFUy5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbHlyID0gdmlldy5tYXAuZmluZExheWVyQnlJZCgnYW1vc3RyYXNfJyArIHQpXHJcbiAgICAgICAgICBpZiAobHlyKSB2aWV3Lm1hcC5yZW1vdmUobHlyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdmFycmVkdXJhIGV4dHJhOiBxdWFscXVlciBsYXllciBjb20gaWQgaW5pY2lhbmRvIHBvciBcImFtb3N0cmFzX1wiXHJcbiAgICAgICAgY29uc3QgYWxsID0gKHZpZXcubWFwIGFzIGFueSkuYWxsTGF5ZXJzPy50b0FycmF5Py4oKSA/PyB2aWV3Lm1hcC5sYXllcnM/LnRvQXJyYXk/LigpID8/IFtdXHJcbiAgICAgICAgYWxsLmZvckVhY2goKGx5OiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGx5Py5pZCA/PyAnJylcclxuICAgICAgICAgIGlmIChpZC5zdGFydHNXaXRoKCdhbW9zdHJhc18nKSkgdmlldy5tYXAucmVtb3ZlKGx5KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gY2F0Y2ggeyAvKiBub29wICovIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyT25DbG9zZSlcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsb3NlQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJPbkNsb3NlKVxyXG4gICAgfVxyXG4gIH0sIFtqaW11TWFwVmlld10pXHJcblxyXG4gIC8qIEFEScOHw4NPOiBwb3Igc2VndXJhbsOnYSwgdGFtYsOpbSBsaW1wYSBubyB1bm1vdW50IGRvIHdpZGdldCAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXc/LnZpZXdcclxuICAgICAgaWYgKCF2aWV3KSByZXR1cm5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBMSVNUX1RZUEVTLmZvckVhY2godCA9PiB7XHJcbiAgICAgICAgICBjb25zdCBseXIgPSB2aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKCdhbW9zdHJhc18nICsgdClcclxuICAgICAgICAgIGlmIChseXIpIHZpZXcubWFwLnJlbW92ZShseXIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBhbGwgPSAodmlldy5tYXAgYXMgYW55KS5hbGxMYXllcnM/LnRvQXJyYXk/LigpID8/IHZpZXcubWFwLmxheWVycz8udG9BcnJheT8uKCkgPz8gW11cclxuICAgICAgICBhbGwuZm9yRWFjaCgobHk6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcobHk/LmlkID8/ICcnKVxyXG4gICAgICAgICAgaWYgKGlkLnN0YXJ0c1dpdGgoJ2Ftb3N0cmFzXycpKSB2aWV3Lm1hcC5yZW1vdmUobHkpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBjYXRjaCB7IC8qIG5vb3AgKi8gfVxyXG4gICAgfVxyXG4gIH0sIFtqaW11TWFwVmlld10pXHJcblxyXG4gIC8qKiBTdW3DoXJpbyBwb3IgdGlwbyB1c2FuZG8gU0VNUFJFIGEgYmFzZSBhdHVhbCAqL1xyXG4gIGNvbnN0IHN1bW1hcnlHcm91cHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGJhc2U6IEFtb3N0cmFJdGVtW10gPSB3aXRoSW50ZXJlc3RcclxuICAgICAgPyAoZmFpeGFTZXQuc2l6ZSA+IDBcclxuICAgICAgICAgID8gKGRhZG9zRnVsbCA/PyBbXSkuZmlsdGVyKHggPT4gZmFpeGFTZXQuaGFzKE51bWJlcih4LmNvZGlnb1BvY28pKSlcclxuICAgICAgICAgIDogKGRhZG9zRmFpeGFBUEkgPz8gZGFkb3NGdWxsID8/IFtdKSlcclxuICAgICAgOiAoZGFkb3NGdWxsID8/IFtdKVxyXG5cclxuICAgIHJldHVybiB0aXBvc1NlbC5tYXAodGlwbyA9PiB7XHJcbiAgICAgIGNvbnN0IGNvciA9IGNvcmVzVGlwb3NbdGlwb11cclxuICAgICAgY29uc3QgZGFkb3MgPSBiYXNlLm1hcChkID0+ICh7XHJcbiAgICAgICAgY29kaWdvUG9jbzogZC5jb2RpZ29Qb2NvLFxyXG4gICAgICAgIHRvdGFsOiBkW1RZUEVfRklFTERbdGlwb11dID8/IDBcclxuICAgICAgfSkpXHJcbiAgICAgIGxldCByb3dzID0gY2FsY3VsYXJRdWVicmFzKGRhZG9zLCBjb3IpLnJldmVyc2UoKVxyXG4gICAgICBpZiAoIXNob3dFbXB0eSkge1xyXG4gICAgICAgIHJvd3MgPSByb3dzLmZpbHRlcihyID0+IHIuY291bnQgPiAwIHx8IHIubGFiZWwuc3RhcnRzV2l0aCgnfCAwIHwnKSlcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyB0aXBvLCByb3dzIH1cclxuICAgIH0pXHJcbiAgfSwgW3RpcG9zU2VsLCBzaG93RW1wdHksIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXQsIGRhZG9zRnVsbCwgZGFkb3NGYWl4YUFQSV0pXHJcblxyXG4gIC8qKiBIZWxwZXJzIFVJICovXHJcbiAgY29uc3QgdG9nZ2xlVGlwbyA9ICh0aXBvOiBzdHJpbmcpID0+XHJcbiAgICBzZXRUaXBvc1NlbChwcmV2ID0+IHByZXYuaW5jbHVkZXModGlwbykgPyBwcmV2LmZpbHRlcih0ID0+IHQgIT09IHRpcG8pIDogWy4uLnByZXYsIHRpcG9dKVxyXG5cclxuICBjb25zdCBoYXNBbnlCYXNlID0gKEFycmF5LmlzQXJyYXkoZGFkb3NGdWxsKSAmJiBkYWRvc0Z1bGwubGVuZ3RoID4gMCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkoZGFkb3NGYWl4YUFQSSkgJiYgZGFkb3NGYWl4YUFQSS5sZW5ndGggPiAwKVxyXG5cclxuICAvKiA9PT09PSBSZW5kZXIgPT09PT0gKi9cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e3dyYXBwZXJTdHlsZX0gcmVmPXtyb290UmVmfT5cclxuICAgICAgPEdsb2JhbCBzdHlsZXM9e2dsb2JhbFBhbmVsU3R5bGV9IC8+XHJcbiAgICAgIDxsYWJlbCBjc3M9e3RpdGxlU3R5bGV9PlNlbGVjaW9uZSBhIGRpc3RyaWJ1acOnw6NvPC9sYWJlbD5cclxuXHJcbiAgICAgIDxzZWxlY3RcclxuICAgICAgICBjc3M9e3NlbGVjdFN0eWxlfVxyXG4gICAgICAgIHZhbHVlPXtjYXRlZ29yaWF9XHJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q2F0ZWdvcmlhKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9Jyc+U2VsZWNpb25lIG8gdGlwbzwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9J3NhbXBsZSc+RGlzdHJpYnVpw6fDo28gZGUgYW1vc3RyYTwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgIHtjYXRlZ29yaWEgPT09ICdzYW1wbGUnICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2xvYWRpbmdGdWxsICYmIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4IH19PkNhcnJlZ2FuZG8gYmFzZSBjb21wbGV0YeKApjwvZGl2Pn1cclxuICAgICAgICAgIHshIWVycm9yRnVsbCAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnI2IwMCcsIG1hcmdpbkJvdHRvbTogOCB9fT5FcnJvOiB7ZXJyb3JGdWxsfTwvZGl2Pn1cclxuICAgICAgICAgIHt3aXRoSW50ZXJlc3QgJiYgbG9hZGluZ0ludGVyZXN0ICYmIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4IH19PkNhcnJlZ2FuZG8gaW50ZXJ2YWxvIGRlIGludGVyZXNzZeKApjwvZGl2Pn1cclxuICAgICAgICAgIHt3aXRoSW50ZXJlc3QgJiYgISFlcnJvckludGVyZXN0ICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjYjAwJywgbWFyZ2luQm90dG9tOiA4IH19PkVycm86IHtlcnJvckludGVyZXN0fTwvZGl2Pn1cclxuXHJcbiAgICAgICAgICB7aGFzQW55QmFzZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtsaXN0U3R5bGV9PlxyXG4gICAgICAgICAgICAgIHtMSVNUX1RZUEVTLm1hcCh0ID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt0fSBjc3M9e2NoZWNrYm94Um93U3R5bGV9IG9uQ2xpY2s9eygpID0+IHRvZ2dsZVRpcG8odCl9PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aXBvc1NlbC5pbmNsdWRlcyh0KX1cclxuICAgICAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA2IH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdC5zbGljZSgxKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAge3N1bW1hcnlHcm91cHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdiBjc3M9e3N1bW1hcnlMaXN0U3R5bGV9PlxyXG4gICAgICAgICAge3N1bW1hcnlHcm91cHMubWFwKGdyb3VwID0+IChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17Z3JvdXAudGlwb30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjc3M9e2Nzc2Bmb250LXdlaWdodDo2MDA7IG1hcmdpbjo0cHggMDtgfT5cclxuICAgICAgICAgICAgICAgIHsod2l0aEludGVyZXN0ID8gJ0ludGVydmFsbyBkZSBJbnRlcmVzc2UgLSAnIDogJycpfVxyXG4gICAgICAgICAgICAgICAge2dyb3VwLnRpcG8uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBncm91cC50aXBvLnNsaWNlKDEpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICB7Z3JvdXAucm93cy5tYXAoKHIsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake2dyb3VwLnRpcG99LSR7aWR4fWB9IGNzcz17c3VtbWFyeUl0ZW1TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY3NzPXtidWJibGVCb3hTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD17ci5zaXplfSBoZWlnaHQ9e3Iuc2l6ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXtyLnNpemUgLyAyfSBjeT17ci5zaXplIC8gMn0gcj17ci5zaXplIC8gMn0gZmlsbD17ci5jb3J9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjc3M9e3JhbmdlTGFiZWxTdHlsZX0+e3IubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICA8ZGl2IGNzcz17Zm9vdGVyU3R5bGV9PlxyXG4gICAgICAgICAgICA8bGFiZWwgY3NzPXtmb290ZXJMYWJlbFN0eWxlfSB0aXRsZT1cIkV4aWJpciB0YW1iw6ltIGNsYXNzZXMgc2VtIHBvw6dvc1wiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Nob3dFbXB0eX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNob3dFbXB0eShlLnRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIEV4aWJpciBjbGFzc2VzIHZhemlhc1xyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgeyBzaG93V2l0aEludGVyZXN0ICYmIChcclxuICAgICAgICAgICAgICA8bGFiZWwgY3NzPXtmb290ZXJMYWJlbFN0eWxlfSB0aXRsZT1cIlF1YW5kbyBtYXJjYWRvLCBhcGxpY2EgbyBmaWx0cm8gZGUgSW50ZXJ2YWxvIGRlIEludGVyZXNzZSAoY8OzZGlnb3MgdmluZG9zIGRvIEV4cGxvcmEgb3UgdmlhIEFQSSlcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt3aXRoSW50ZXJlc3R9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRXaXRoSW50ZXJlc3QoZS50YXJnZXQuY2hlY2tlZCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICBJbnRlcnZhbG8gZGUgaW50ZXJlc3NlXHJcbiAgICAgICAgICAgIDwvbGFiZWw+KSB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cclxuICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3NldEppbXVNYXBWaWV3fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IC8vIE1lbGhvcmFtZW50b1xyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9