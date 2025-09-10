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

/***/ "./your-extensions/widgets/mapa-de-distribuicao-intervalo/src/runtime/utils.ts":
/*!*************************************************************************************!*\
  !*** ./your-extensions/widgets/mapa-de-distribuicao-intervalo/src/runtime/utils.ts ***!
  \*************************************************************************************/
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
/*!***************************************************************************************!*\
  !*** ./your-extensions/widgets/mapa-de-distribuicao-intervalo/src/runtime/widget.tsx ***!
  \***************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/mapa-de-distribuicao-intervalo/src/runtime/utils.ts");
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
            // url: '/module-explora/explora',   // caminho relativo resolvido no APP pai
            // url: '/ExPlora/explora',
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
        summaryGroups.length > 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: footerStyle },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: footerLabelStyle, title: "Exibir tamb\u00E9m classes sem po\u00E7os" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: showEmpty, onChange: e => setShowEmpty(e.target.checked) }),
                "Exibir classes vazias"),
            showWithInterest && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: footerLabelStyle, title: "Quando marcado, aplica o filtro de Intervalo de Interesse (c\u00F3digos vindos do Explora ou via API)" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: withInterest, onChange: e => setWithInterest(e.target.checked) }),
                "Intervalo de interesse")))),
        summaryGroups.length > 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: summaryListStyle }, summaryGroups.map(group => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, { key: group.tipo },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `font-weight:600; margin:4px 0;` },
                (withInterest ? 'Intervalo de Interesse - ' : ''),
                group.tipo.charAt(0).toUpperCase() + group.tipo.slice(1)),
            group.rows.map((r, idx) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: `${group.tipo}-${idx}`, css: summaryItemStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: bubbleBoxStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: r.size, height: r.size },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: r.size / 2, cy: r.size / 2, r: r.size / 2, fill: r.cor }))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { css: rangeLabelStyle }, r.label))))))))),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXBhLWRlLWRpc3RyaWJ1aWNhby1pbnRlcnZhbG8vZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsV0FBVztBQUNnRDtBQUNOO0FBQ3VCO0FBQ0o7QUFFakUsTUFBTSxVQUFVLEdBQTJCO0lBQ2hELE9BQU8sRUFBRSx3QkFBd0I7SUFDakMsVUFBVSxFQUFFLHdCQUF3QjtJQUNwQyxLQUFLLEVBQUUseUJBQXlCO0lBQ2hDLElBQUksRUFBRSwwQkFBMEI7SUFDaEMsWUFBWSxFQUFFLHdCQUF3QjtDQUN2QztBQUVELGdEQUFnRDtBQUNoRCxTQUFTLFdBQVcsQ0FBQyxNQUEyQixFQUFFLFFBQWlCO0lBQ2pFLElBQUksUUFBUSxFQUFFLENBQUM7UUFDYixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BFLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHO0lBQ2hDLENBQUM7SUFDRCxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRztBQUNoQyxDQUFDO0FBRU0sU0FBZSx1QkFBdUI7eURBQUMsRUFDNUMsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFNBQVMsRUFBSSxzQ0FBc0M7SUFDbkQsWUFBWSxFQUNaLFlBQVksQ0FBRSxrREFBa0Q7TUFTakU7O1FBQ0MsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUk7UUFDN0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUc7UUFFcEIsZ0VBQWdFO1FBQ2hFLElBQUksQ0FB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RSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFJLENBQ2xFLENBQ0Y7Z0JBQ04seURBQU0sR0FBRyxFQUFFLGVBQWUsSUFBRyxDQUFDLENBQUMsS0FBSyxDQUFRLENBQ3hDLENBQ1AsQ0FBQyxDQUNhLENBQ2xCLENBQUMsQ0FHRSxDQUNQO1FBRUQsK0NBQUMsNkRBQW9CLElBQ25CLGNBQWMsRUFBRSxXQUFLLENBQUMsZUFBZSwwQ0FBRyxDQUFDLENBQUMsRUFDMUMsa0JBQWtCLEVBQUUsY0FBYyxHQUNsQyxDQUNFLENBQ1A7QUFDSCxDQUFDLENBQUMsZUFBZTtBQUVULFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcGEtZGUtZGlzdHJpYnVpY2FvLWludGVydmFsby9zcmMvcnVudGltZS91dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvc3VwcG9ydC9GaWVsZFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9yZW5kZXJlcnMvQ2xhc3NCcmVha3NSZW5kZXJlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9zeW1ib2xzL1NpbXBsZU1hcmtlclN5bWJvbFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFwYS1kZS1kaXN0cmlidWljYW8taW50ZXJ2YWxvL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdXRpbHMudHNcclxuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tIFwiQGFyY2dpcy9jb3JlL2xheWVycy9GZWF0dXJlTGF5ZXJcIlxyXG5pbXBvcnQgRmllbGQgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvc3VwcG9ydC9GaWVsZFwiXHJcbmltcG9ydCBDbGFzc0JyZWFrc1JlbmRlcmVyIGZyb20gXCJAYXJjZ2lzL2NvcmUvcmVuZGVyZXJzL0NsYXNzQnJlYWtzUmVuZGVyZXJcIlxyXG5pbXBvcnQgU2ltcGxlTWFya2VyU3ltYm9sIGZyb20gXCJAYXJjZ2lzL2NvcmUvc3ltYm9scy9TaW1wbGVNYXJrZXJTeW1ib2xcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGNvcmVzVGlwb3M6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgbGF0ZXJhbDogXCJyZ2JhKDg4LCAxOSwgMjUyLCAwLjcpXCIsXHJcbiAgdGVzdGVtdW5obzogXCJyZ2JhKDI1NSwgMCwgMjU1LCAwLjcpXCIsXHJcbiAgY2FsaGE6IFwicmdiYSgyNDUsIDIwMSwgMzgsIDAuNylcIixcclxuICBwbHVnOiBcInJnYmEoMTI1LCAyNTMsIDE0OCwgMC43KVwiLFxyXG4gIFwid2hvbGUgY29yZVwiOiBcInJnYmEoMjU1LCA0MywgMjQsIDAuNylcIlxyXG59XHJcblxyXG4vLyBNb250YSBJTiguLi4pIHJlc3BlaXRhbmRvIHNlIG8gY2FtcG8gw6kgc3RyaW5nXHJcbmZ1bmN0aW9uIHRvU3FsSW5MaXN0KHZhbHVlczogKHN0cmluZyB8IG51bWJlcilbXSwgYXNTdHJpbmc6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gIGlmIChhc1N0cmluZykge1xyXG4gICAgY29uc3QgcXVvdGVkID0gdmFsdWVzLm1hcCh2ID0+IGAnJHtTdHJpbmcodikucmVwbGFjZSgvJy9nLCBcIicnXCIpfSdgKVxyXG4gICAgcmV0dXJuIGAoJHtxdW90ZWQuam9pbihcIixcIil9KWBcclxuICB9XHJcbiAgcmV0dXJuIGAoJHt2YWx1ZXMuam9pbihcIixcIil9KWBcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCKHtcclxuICBqaW11TWFwVmlldyxcclxuICBkYWRvcyxcclxuICBjb2xvckZpbGwsXHJcbiAgaWRDYW1hZGEsXHJcbiAgaWRMZWdlbmRhLCAgIC8vIG1hbnRpZG8gcG9yIGNvbXBhdC4sIG7Do28gdXNhZG8gYXF1aVxyXG4gIHRpdGxlTGVnZW5kYSxcclxuICB3aXRoSW50ZXJlc3QgIC8vIG9wY2lvbmFsLCBzw7MgcGFyYSBtYW50ZXIgYSBhc3NpbmF0dXJhIGRvIGNhbGxlclxyXG59OiB7XHJcbiAgamltdU1hcFZpZXc6IGFueVxyXG4gIGRhZG9zOiB7IGNvZGlnb1BvY286IG51bWJlciB8IHN0cmluZzsgdG90YWw6IG51bWJlciB9W11cclxuICBjb2xvckZpbGw6IHN0cmluZ1xyXG4gIGlkQ2FtYWRhOiBzdHJpbmdcclxuICBpZExlZ2VuZGE/OiBzdHJpbmdcclxuICB0aXRsZUxlZ2VuZGE6IHN0cmluZ1xyXG4gIHdpdGhJbnRlcmVzdD86IGJvb2xlYW5cclxufSkge1xyXG4gIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldy52aWV3XHJcbiAgY29uc3QgbWFwID0gdmlldy5tYXBcclxuXHJcbiAgLy8gbmFkYSBwYXJhIGRlc2VuaGFyIC0+IHJlbW92ZSBjYW1hZGEgYW50aWdhIChzZSBleGlzdGlyKSBlIHNhaVxyXG4gIGlmICghZGFkb3MgfHwgZGFkb3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICBjb25zdCBleGlzdGVudGUgPSBtYXAuZmluZExheWVyQnlJZChpZENhbWFkYSlcclxuICAgIGlmIChleGlzdGVudGUpIG1hcC5yZW1vdmUoZXhpc3RlbnRlKVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICAvLyAxKSBDYW1hZGEgYmFzZSAocGVnYXIgZ2VvbWV0cmlhIHBvciBjw7NkaWdvKVxyXG4gIGNvbnN0IGNhbWFkYVBvY29zID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9iYXNlZ2lzLnBldHJvYnJhcy5jb20uYnIvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvRVhQTE9SQS9GZWF0dXJlX1BvY29zL01hcFNlcnZlci8wXCIsXHJcbiAgICBvdXRGaWVsZHM6IFtcIlBPQ09fQ0RfUE9DT1wiXSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgdGl0bGU6IFwiUG/Dp29zIChiYXNlKVwiXHJcbiAgfSlcclxuICBhd2FpdCBjYW1hZGFQb2Nvcy5sb2FkKClcclxuXHJcbiAgY29uc3QgcG9jb0ZpZWxkID0gY2FtYWRhUG9jb3MuZmllbGRzLmZpbmQoZiA9PiBmLm5hbWUgPT09IFwiUE9DT19DRF9QT0NPXCIpXHJcbiAgY29uc3QgaXNTdHJpbmdGaWVsZCA9IChwb2NvRmllbGQ/LnR5cGUgPT09IFwic3RyaW5nXCIpXHJcblxyXG4gIGNvbnN0IGNvZGlnb3MgPSBkYWRvcy5tYXAocCA9PiBwLmNvZGlnb1BvY28pLmZpbHRlcih2ID0+IHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsKVxyXG4gIGNvbnN0IHdoZXJlID0gYFBPQ09fQ0RfUE9DTyBJTiAke3RvU3FsSW5MaXN0KGNvZGlnb3MsICEhaXNTdHJpbmdGaWVsZCl9YFxyXG5cclxuICBjb25zdCBxdWVyeVJlc3VsdCA9IGF3YWl0IGNhbWFkYVBvY29zLnF1ZXJ5RmVhdHVyZXMoe1xyXG4gICAgd2hlcmUsXHJcbiAgICBvdXRGaWVsZHM6IFtcIlBPQ09fQ0RfUE9DT1wiXSxcclxuICAgIHJldHVybkdlb21ldHJ5OiB0cnVlXHJcbiAgfSlcclxuXHJcbiAgLy8gMikgTW9udGEgc291cmNlIGNvbSBPQkpFQ1RJRCBwcsOzcHJpbyBlIFRPVEFMXHJcbiAgY29uc3QgdG90YWxCeUNvZGlnbyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcclxuICBkYWRvcy5mb3JFYWNoKGQgPT4gdG90YWxCeUNvZGlnby5zZXQoU3RyaW5nKGQuY29kaWdvUG9jbyksIE51bWJlcihkLnRvdGFsID8/IDApKSlcclxuXHJcbiAgY29uc3Qgc291cmNlID0gcXVlcnlSZXN1bHQuZmVhdHVyZXMubWFwKChmZWF0LCBpKSA9PiB7XHJcbiAgICBjb25zdCBjb2QgPSBTdHJpbmcoZmVhdC5hdHRyaWJ1dGVzLlBPQ09fQ0RfUE9DTylcclxuICAgIGNvbnN0IHRvdGFsID0gdG90YWxCeUNvZGlnby5nZXQoY29kKSA/PyAwXHJcbiAgICBmZWF0LmF0dHJpYnV0ZXMgPSB7XHJcbiAgICAgIE9CSkVDVElEOiBpICsgMSxcclxuICAgICAgUE9DT19DRF9QT0NPOiBjb2QsXHJcbiAgICAgIFRPVEFMOiB0b3RhbFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZlYXRcclxuICB9KVxyXG5cclxuICAvLyAzKSBRdWVicmFzICh1c2FyIFBST1BFUlRJRVMgcGFyYSBldml0YXIgZXJybyBkZSB0aXBhZ2VtKVxyXG4gIGNvbnN0IHZhbG9yZXMgPSBkYWRvcy5tYXAocCA9PiBOdW1iZXIocC50b3RhbCA/PyAwKSlcclxuICBsZXQgbWluID0gTWF0aC5taW4oLi4udmFsb3JlcylcclxuICBsZXQgbWF4ID0gTWF0aC5tYXgoLi4udmFsb3JlcylcclxuXHJcbiAgY29uc3QgaW5mbzogX19lc3JpLkNsYXNzQnJlYWtJbmZvUHJvcGVydGllc1tdID0gW11cclxuICBjb25zdCBvdXRsaW5lID0geyBjb2xvcjogXCJibGFja1wiLCB3aWR0aDogMSB9IC8vIHdpZHRoIG51bcOpcmljbyFcclxuXHJcbiAgaWYgKCFpc0Zpbml0ZShtaW4pIHx8ICFpc0Zpbml0ZShtYXgpKSB7XHJcbiAgICAvLyBzZW0gZGFkb3MgdsOhbGlkb3M6IGRlaXhhIGluZm8gdmF6aW8gKG7Do28gZGV2ZSBvY29ycmVyIHBvaXMgasOhIHJldG9ybmFtb3MgYWNpbWEpXHJcbiAgfSBlbHNlIGlmIChtaW4gPT09IDAgJiYgbWF4ID09PSAwKSB7XHJcbiAgICAvLyB0b2RvcyB6ZXJvIC0+IG1hbnRlciBib2xoYSBwZXF1ZW5hIGUgY2luemEgKHBhcmEgbsOjbyDigJxzdW1pcuKAnSBjbHVzdGVyKVxyXG4gICAgY29uc3QgcXRkID0gdmFsb3Jlcy5sZW5ndGhcclxuICAgIGluZm8ucHVzaCh7XHJcbiAgICAgIG1pblZhbHVlOiAwLFxyXG4gICAgICBtYXhWYWx1ZTogMCxcclxuICAgICAgbGFiZWw6IGB8IDAgfCAoJHtxdGR9IHBvw6dvJHtxdGQgPiAxID8gXCJzXCIgOiBcIlwifSlgLFxyXG4gICAgICBzeW1ib2w6IG5ldyBTaW1wbGVNYXJrZXJTeW1ib2woe1xyXG4gICAgICAgIGNvbG9yOiBcInJnYmEoMjAwLDIwMCwyMDAsMC4zKVwiLFxyXG4gICAgICAgIHNpemU6IDYsXHJcbiAgICAgICAgc3R5bGU6IFwiY2lyY2xlXCIsXHJcbiAgICAgICAgb3V0bGluZVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgemVyYWRvcyA9IHZhbG9yZXMuZmlsdGVyKHYgPT4gdiA9PT0gMCkubGVuZ3RoXHJcbiAgICBjb25zdCBuYW9aZXJhZG9zID0gdmFsb3Jlcy5maWx0ZXIodiA9PiB2ID4gMClcclxuXHJcbiAgICBpZiAoemVyYWRvcyA+IDApIHtcclxuICAgICAgaW5mby5wdXNoKHtcclxuICAgICAgICBtaW5WYWx1ZTogMCxcclxuICAgICAgICBtYXhWYWx1ZTogMCxcclxuICAgICAgICBsYWJlbDogYHwgMCB8ICgke3plcmFkb3N9IHBvw6dvJHt6ZXJhZG9zID4gMSA/IFwic1wiIDogXCJcIn0pYCxcclxuICAgICAgICBzeW1ib2w6IG5ldyBTaW1wbGVNYXJrZXJTeW1ib2woe1xyXG4gICAgICAgICAgY29sb3I6IFwicmdiYSgyMDAsMjAwLDIwMCwwLjMpXCIsXHJcbiAgICAgICAgICBzaXplOiA2LFxyXG4gICAgICAgICAgc3R5bGU6IFwiY2lyY2xlXCIsXHJcbiAgICAgICAgICBvdXRsaW5lXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBtaW4gPSAxXHJcbiAgICBjb25zdCBuID0gTWF0aC5tYXgobmFvWmVyYWRvcy5sZW5ndGgsIDEpXHJcbiAgICBjb25zdCBudW1DbGFzc2VzID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZCgxICsgMy4zICogTWF0aC5sb2cxMChuKSkpXHJcbiAgICBjb25zdCBicmVha3MgPSBNYXRoLmNlaWwoKG1heCAtIG1pbiArIDEpIC8gbnVtQ2xhc3NlcylcclxuICAgIGNvbnN0IG1heFNpemUgPSA0MFxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ2xhc3NlczsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG1pblZhbHVlID0gbWluICsgaSAqIGJyZWFrc1xyXG4gICAgICBjb25zdCBtYXhWYWx1ZSA9IG1pbiArIChpICsgMSkgKiBicmVha3MgLSAxXHJcbiAgICAgIGlmIChtaW5WYWx1ZSA+IG1heCkgYnJlYWtcclxuXHJcbiAgICAgIGNvbnN0IGNvdW50ID0gbmFvWmVyYWRvcy5maWx0ZXIodiA9PiB2ID49IG1pblZhbHVlICYmIHYgPD0gbWF4VmFsdWUpLmxlbmd0aFxyXG4gICAgICBjb25zdCBsYWJlbCA9IGAke21pblZhbHVlfSB8LS0tfCAke21heFZhbHVlfSAoJHtjb3VudH0gcG/Dp28ke2NvdW50ID4gMSA/IFwic1wiIDogXCJcIn0pYFxyXG4gICAgICBjb25zdCBzaXplID0gNiArIGkgKiAobWF4U2l6ZSAvIG51bUNsYXNzZXMpXHJcblxyXG4gICAgICBpbmZvLnB1c2goe1xyXG4gICAgICAgIG1pblZhbHVlLFxyXG4gICAgICAgIG1heFZhbHVlLFxyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHN5bWJvbDogbmV3IFNpbXBsZU1hcmtlclN5bWJvbCh7IGNvbG9yOiBjb2xvckZpbGwsIHNpemUsIHN0eWxlOiBcImNpcmNsZVwiLCBvdXRsaW5lIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJlciA9IG5ldyBDbGFzc0JyZWFrc1JlbmRlcmVyKHtcclxuICAgIGZpZWxkOiBcIlRPVEFMXCIsXHJcbiAgICBjbGFzc0JyZWFrSW5mb3M6IGluZm9cclxuICB9KVxyXG5cclxuICAvLyA0KSBTY2hlbWEgbcOtbmltbyAoRmllbGQgaW5zdGFuY2VzKSArIENMVVNURVJJTkdcclxuICBjb25zdCBmaWVsZHMgPSBbXHJcbiAgICBuZXcgRmllbGQoeyBuYW1lOiBcIk9CSkVDVElEXCIsIGFsaWFzOiBcIk9CSkVDVElEXCIsIHR5cGU6IFwib2lkXCIgfSksXHJcbiAgICBuZXcgRmllbGQoeyBuYW1lOiBcIlBPQ09fQ0RfUE9DT1wiLCBhbGlhczogXCJDw7NkaWdvIGRvIFBvw6dvXCIsIHR5cGU6IFwic3RyaW5nXCIgfSksXHJcbiAgICBuZXcgRmllbGQoeyBuYW1lOiBcIlRPVEFMXCIsIGFsaWFzOiBcIlRvdGFsXCIsIHR5cGU6IFwiZG91YmxlXCIgfSlcclxuICBdXHJcblxyXG4gIGNvbnN0IGxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICBpZDogaWRDYW1hZGEsXHJcbiAgICB0aXRsZTogdGl0bGVMZWdlbmRhLFxyXG4gICAgc291cmNlLFxyXG4gICAgZmllbGRzLFxyXG4gICAgb2JqZWN0SWRGaWVsZDogXCJPQkpFQ1RJRFwiLFxyXG4gICAgZ2VvbWV0cnlUeXBlOiBcInBvaW50XCIsXHJcbiAgICBzcGF0aWFsUmVmZXJlbmNlOiB2aWV3Py5zcGF0aWFsUmVmZXJlbmNlID8/IHsgd2tpZDogMTAyMTAwIH0sXHJcbiAgICByZW5kZXJlcixcclxuICAgIGxpc3RNb2RlOiBcImhpZGVcIixcclxuICAgIHBvcHVwRW5hYmxlZDogdHJ1ZSxcclxuICAgIHBvcHVwVGVtcGxhdGU6IHtcclxuICAgICAgdGl0bGU6IFwie1BPQ09fQ0RfUE9DT31cIixcclxuICAgICAgY29udGVudDogXCJUb3RhbDoge1RPVEFMfVwiXHJcbiAgICB9LFxyXG4gICAgZmVhdHVyZVJlZHVjdGlvbjoge1xyXG4gICAgICB0eXBlOiBcImNsdXN0ZXJcIixcclxuICAgICAgY2x1c3RlclJhZGl1czogXCI4MHB4XCIsXHJcbiAgICAgIC8vIHPDrW1ib2xvIGRvIGNsdXN0ZXIgbmEgY29yIGRhIHPDqXJpZVxyXG4gICAgICBzeW1ib2w6IHtcclxuICAgICAgICB0eXBlOiBcInNpbXBsZS1tYXJrZXJcIixcclxuICAgICAgICBzdHlsZTogXCJjaXJjbGVcIixcclxuICAgICAgICBzaXplOiAyOCxcclxuICAgICAgICBjb2xvcjogY29sb3JGaWxsLFxyXG4gICAgICAgIG91dGxpbmU6IHsgY29sb3I6IFwid2hpdGVcIiwgd2lkdGg6IDEuNSB9XHJcbiAgICAgIH0gYXMgYW55LFxyXG4gICAgICAvLyBjb21wYXRpYmlsaWRhZGUgY29tIGJ1aWxkcyBxdWUgdXNhbSBjbHVzdGVyU3ltYm9sXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgY2x1c3RlclN5bWJvbDoge1xyXG4gICAgICAgIHR5cGU6IFwic2ltcGxlLW1hcmtlclwiLFxyXG4gICAgICAgIHN0eWxlOiBcImNpcmNsZVwiLFxyXG4gICAgICAgIHNpemU6IDI4LFxyXG4gICAgICAgIGNvbG9yOiBjb2xvckZpbGwsXHJcbiAgICAgICAgb3V0bGluZTogeyBjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDogMS41IH1cclxuICAgICAgfSxcclxuICAgICAgbGFiZWxzVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgbGFiZWxpbmdJbmZvOiBbe1xyXG4gICAgICAgIGRlY29uZmxpY3Rpb25TdHJhdGVneTogXCJub25lXCIsXHJcbiAgICAgICAgbGFiZWxFeHByZXNzaW9uSW5mbzogeyBleHByZXNzaW9uOiBcIlRleHQoJGZlYXR1cmUuY2x1c3Rlcl9jb3VudCwgJyMsIyMjJylcIiB9LFxyXG4gICAgICAgIHN5bWJvbDoge1xyXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgaGFsb0NvbG9yOiBcIiMzMzNcIixcclxuICAgICAgICAgIGhhbG9TaXplOiAxLjUsXHJcbiAgICAgICAgICBmb250OiB7IHNpemU6IDEwLCB3ZWlnaHQ6IFwiYm9sZFwiIH1cclxuICAgICAgICB9IGFzIGFueVxyXG4gICAgICB9XVxyXG4gICAgfSBhcyBhbnlcclxuICB9KVxyXG5cclxuICBjb25zdCBleGlzdGVudGUgPSBtYXAuZmluZExheWVyQnlJZChpZENhbWFkYSlcclxuICBpZiAoZXhpc3RlbnRlKSBtYXAucmVtb3ZlKGV4aXN0ZW50ZSlcclxuICBtYXAuYWRkKGxheWVyKVxyXG5cclxuICByZXR1cm4gbGF5ZXJcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2xheWVyc19zdXBwb3J0X0ZpZWxkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9yZW5kZXJlcnNfQ2xhc3NCcmVha3NSZW5kZXJlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfc3ltYm9sc19TaW1wbGVNYXJrZXJTeW1ib2xfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbi8qKiBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCAqL1xyXG5pbXBvcnQgeyBSZWFjdCwganN4LCBjc3MsIEdsb2JhbCB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7IGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCLCBjb3Jlc1RpcG9zIH0gZnJvbSAnLi91dGlscydcclxuXHJcbi8qID09PT09IFRpcG9zID09PT09ICovXHJcbnR5cGUgTXNnRmFpeGFJbnRlcmVzc2UgPSB7IHR5cGU6ICdmYWl4YS1pbnRlcmVzc2UnOyBjb2RpZ29zUG9jb3M6IChudW1iZXIgfCBzdHJpbmcpW10gfVxyXG5cclxudHlwZSBBbW9zdHJhSXRlbSA9IHtcclxuICBjb2RpZ29Qb2NvOiBudW1iZXJcclxuICB0b3RhbEFtb3N0cmFzTGF0ZXJhaXM6IG51bWJlclxyXG4gIHRvdGFsQ2FsaGFzOiBudW1iZXJcclxuICB0b3RhbFBsdWdzOiBudW1iZXJcclxuICB0b3RhbFRlc3RlbXVuaG9zOiBudW1iZXJcclxuICB0b3RhbFdob2xlQ29yZTogbnVtYmVyXHJcbn1cclxuXHJcbi8qID09PT09IENvbmZpZyA9PT09PSAqL1xyXG5jb25zdCBERUZBVUxUX0ZBSVhBX0lOVEVSRVNTRSA9IGZhbHNlXHJcblxyXG4vKiA9PT09PSBNYXAgZGUgY2FtcG9zIHBvciB0aXBvID09PT09ICovXHJcbmNvbnN0IFRZUEVfRklFTEQ6IFJlY29yZDxzdHJpbmcsIGtleW9mIEFtb3N0cmFJdGVtPiA9IHtcclxuICBsYXRlcmFsOiAndG90YWxBbW9zdHJhc0xhdGVyYWlzJyxcclxuICB0ZXN0ZW11bmhvOiAndG90YWxUZXN0ZW11bmhvcycsXHJcbiAgY2FsaGE6ICd0b3RhbENhbGhhcycsXHJcbiAgcGx1ZzogJ3RvdGFsUGx1Z3MnLFxyXG4gICd3aG9sZSBjb3JlJzogJ3RvdGFsV2hvbGVDb3JlJ1xyXG59XHJcbmNvbnN0IExJU1RfVFlQRVMgPSBPYmplY3Qua2V5cyhUWVBFX0ZJRUxEKSAvLyBbJ2xhdGVyYWwnLCAndGVzdGVtdW5obycsIOKApl1cclxuXHJcbi8qID09PT09IFV0aWwgPT09PT0gKi9cclxuY29uc3QgbG9nMTAgPSAoeDogbnVtYmVyKSA9PiBNYXRoLmxvZzEwID8gTWF0aC5sb2cxMCh4KSA6IE1hdGgubG9nKHgpIC8gTWF0aC5MTjEwXHJcblxyXG4vKiogTW9udGEgbyBjb3JwbyB4LXd3dy1mb3JtLXVybGVuY29kZWQgaWd1YWwgYW8gcXVlIG8gYmFjayBlc3BlcmEgKi9cclxuZnVuY3Rpb24gYnVpbGRTZXNzaW9uQm9keShmYWl4YUludGVyZXNzZTogYm9vbGVhbikge1xyXG4gIGNvbnN0IHAgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcclxuICBwLnNldCgnaGRTeXMnLCAnbm92YWludGNvbnMnKVxyXG4gIHAuc2V0KCdoZFVDJywgJ01hcGEnKVxyXG4gIHAuc2V0KCdoZEFjYW8nLCAnQ2FycmVnYXJNYXBhRGlzdHJpYnVpY2FvQW1vc3RyYXNDb250YWRvcicpXHJcbiAgcC5zZXQoJ2hkU2Vzc2lvbkZpbHRlcicsICd0cnVlJylcclxuICBwLnNldCgnZmFpeGFJbnRlcmVzc2UnLCBTdHJpbmcoISFmYWl4YUludGVyZXNzZSkpXHJcbiAgcmV0dXJuIHAudG9TdHJpbmcoKVxyXG59XHJcblxyXG4vKiogTm9ybWFsaXphIHJlc3Bvc3RhIGRhIEFQSSAqL1xyXG5mdW5jdGlvbiBub3JtYWxpemVMaXN0KHJhdzogYW55W10pOiBBbW9zdHJhSXRlbVtdIHtcclxuICByZXR1cm4gKEFycmF5LmlzQXJyYXkocmF3KSA/IHJhdyA6IFtdKVxyXG4gICAgLm1hcCgocjogYW55KSA9PiAoe1xyXG4gICAgICBjb2RpZ29Qb2NvOiBOdW1iZXIoci5jb2RpZ29Qb2NvID8/IHIuUE9DT19DRF9QT0NPID8/IHIucG9jbyA/PyByLmNvZGlnbyA/PyAwKSxcclxuICAgICAgdG90YWxBbW9zdHJhc0xhdGVyYWlzOiBOdW1iZXIoci50b3RhbEFtb3N0cmFzTGF0ZXJhaXMgPz8gci5sYXRlcmFpcyA/PyAwKSxcclxuICAgICAgdG90YWxDYWxoYXM6IE51bWJlcihyLnRvdGFsQ2FsaGFzID8/IHIuY2FsaGFzID8/IDApLFxyXG4gICAgICB0b3RhbFBsdWdzOiBOdW1iZXIoci50b3RhbFBsdWdzID8/IHIucGx1Z3MgPz8gMCksXHJcbiAgICAgIHRvdGFsVGVzdGVtdW5ob3M6IE51bWJlcihyLnRvdGFsVGVzdGVtdW5ob3MgPz8gci50ZXN0ZW11bmhvcyA/PyAwKSxcclxuICAgICAgdG90YWxXaG9sZUNvcmU6IE51bWJlcihyLnRvdGFsV2hvbGVDb3JlID8/IHIud2hvbGVDb3JlID8/IDApXHJcbiAgICB9KSlcclxuICAgIC5maWx0ZXIoeCA9PiAhIXguY29kaWdvUG9jbylcclxufVxyXG5cclxuLyoqIEZheiBvIGZldGNoIHZpYSBww6FnaW5hIHBhaSAocmVzb2x2ZSBDT1JTKSAqL1xyXG5mdW5jdGlvbiBmZXRjaFZpYVBhcmVudChib2R5OiBzdHJpbmcpOiBQcm9taXNlPEFtb3N0cmFJdGVtW10+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcmVxSWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKVxyXG4gICAgbGV0IHRhcmdldE9yaWdpbiA9ICcqJ1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGRvY3VtZW50LnJlZmVycmVyKSB0YXJnZXRPcmlnaW4gPSBuZXcgVVJMKGRvY3VtZW50LnJlZmVycmVyKS5vcmlnaW5cclxuICAgIH0gY2F0Y2ggeyAvKiBub29wICovIH1cclxuXHJcbiAgICBjb25zdCBvbk1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBkID0gKGV2ZW50IGFzIGFueSkuZGF0YSB8fCB7fVxyXG4gICAgICBpZiAoZC5yZXFJZCAhPT0gcmVxSWQpIHJldHVyblxyXG4gICAgICBpZiAoZC50eXBlID09PSAnZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhczpvaycpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSlcclxuICAgICAgICByZXNvbHZlKG5vcm1hbGl6ZUxpc3QoZC5wYXlsb2FkKSlcclxuICAgICAgfSBlbHNlIGlmIChkLnR5cGUgPT09ICdmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzOmVycicpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSlcclxuICAgICAgICByZWplY3QobmV3IEVycm9yKGQubWVzc2FnZSB8fCAnRXJybyBubyBmZXRjaCB2aWEgcGFyZW50JykpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKVxyXG5cclxuICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICB0eXBlOiAnZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcycsXHJcbiAgICAgIC8vIHVybDogJy9tb2R1bGUtZXhwbG9yYS9leHBsb3JhJywgICAvLyBjYW1pbmhvIHJlbGF0aXZvIHJlc29sdmlkbyBubyBBUFAgcGFpXHJcbiAgICAgIC8vIHVybDogJy9FeFBsb3JhL2V4cGxvcmEnLFxyXG4gICAgICBib2R5LFxyXG4gICAgICByZXFJZFxyXG4gICAgfSwgdGFyZ2V0T3JpZ2luKVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKiBBUEkgcHJpbmNpcGFsIChzZW1wcmUgdmlhIHBhcmVudCkgKi9cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcyhmYWl4YUludGVyZXNzZSA9IGZhbHNlKTogUHJvbWlzZTxBbW9zdHJhSXRlbVtdPiB7XHJcbiAgY29uc3QgYm9keSA9IGJ1aWxkU2Vzc2lvbkJvZHkoZmFpeGFJbnRlcmVzc2UpXHJcbiAgcmV0dXJuIGZldGNoVmlhUGFyZW50KGJvZHkpXHJcbn1cclxuXHJcbi8qID09PT09IEVzdGlsb3MgPT09PT0gKi9cclxuY29uc3QgTUFYX0JVQkJMRSA9IDQwXHJcbmNvbnN0IGdsb2JhbFBhbmVsU3R5bGUgPSBjc3NgXHJcbiAgZGl2W3JvbGU9J2RpYWxvZyddW2FyaWEtbGFiZWw9J21hcGEtZGUtZGlzdHJpYnVpY2FvJ10ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBpbnNldDogNTBweCAxMnB4IGF1dG8gYXV0byAhaW1wb3J0YW50OyAvKiB0b3A6MTIsIHJpZ2h0OjEyICovXHJcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzNjBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1NTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjRweCkgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IGJ1YmJsZUJveFN0eWxlID0gY3NzYFxyXG4gIHdpZHRoOiAke01BWF9CVUJCTEV9cHg7XHJcbiAgaGVpZ2h0OiAke01BWF9CVUJCTEV9cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG5gXHJcbmNvbnN0IHdyYXBwZXJTdHlsZSA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLDAsMCwuMSk7IHBhZGRpbmc6IDE2cHg7IG92ZXJmbG93OiBoaWRkZW47XHJcbmBcclxuY29uc3QgdGl0bGVTdHlsZSA9IGNzc2Bmb250LXdlaWdodDo2MDA7IG1hcmdpbi1ib3R0b206NHB4OyBkaXNwbGF5OmJsb2NrO2BcclxuY29uc3Qgc2VsZWN0U3R5bGUgPSBjc3Ngd2lkdGg6MTAwJTsgcGFkZGluZzo2cHggOHB4OyBtYXJnaW4tYm90dG9tOjEycHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjY2NjOyBib3JkZXItcmFkaXVzOjRweDtgXHJcbmNvbnN0IGxpc3RTdHlsZSA9IGNzc2BvdmVyZmxvdy15OmF1dG87IG1hcmdpbi1ib3R0b206MTJweDtcclxuICBwYWRkaW5nOjhweDsgYmFja2dyb3VuZDojZmFmYWZhOyBib3JkZXI6MXB4IHNvbGlkICNlZWU7IGJvcmRlci1yYWRpdXM6NHB4O2BcclxuY29uc3QgY2hlY2tib3hSb3dTdHlsZSA9IGNzc2BkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgbWFyZ2luLWJvdHRvbTo2cHg7IGN1cnNvcjpwb2ludGVyO2BcclxuY29uc3Qgc3VtbWFyeUxpc3RTdHlsZSA9IGNzc2BcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDM2cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmBcclxuY29uc3Qgc3VtbWFyeUl0ZW1TdHlsZSA9IGNzc2BkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgbWFyZ2luLWJvdHRvbTo2cHg7YFxyXG5jb25zdCByYW5nZUxhYmVsU3R5bGUgPSBjc3NgZm9udC1zaXplOjAuOXJlbTtgXHJcbmNvbnN0IGZvb3RlclN0eWxlID0gY3NzYFxyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgcGFkZGluZzogNHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IGZvb3RlckxhYmVsU3R5bGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBgXHJcblxyXG4vKiA9PT09PSBRdWVicmFzIHBhcmEgbyBzdW3DoXJpbyA9PT09PSAqL1xyXG5mdW5jdGlvbiBjYWxjdWxhclF1ZWJyYXMoZGFkb3M6IHsgdG90YWw6IG51bWJlciB9W10sIGNvbG9yRmlsbDogc3RyaW5nKSB7XHJcbiAgY29uc3QgdmFsb3JlcyA9IGRhZG9zLm1hcChwID0+IHAudG90YWwpXHJcbiAgbGV0IG1pbiA9IE1hdGgubWluKC4uLnZhbG9yZXMpXHJcbiAgbGV0IG1heCA9IE1hdGgubWF4KC4uLnZhbG9yZXMpXHJcblxyXG4gIGNvbnN0IGluZm86IHsgbGFiZWw6IHN0cmluZzsgc2l6ZTogbnVtYmVyOyBjb3I6IHN0cmluZzsgY291bnQ6IG51bWJlciB9W10gPSBbXVxyXG5cclxuICBpZiAoIWlzRmluaXRlKG1pbikgfHwgIWlzRmluaXRlKG1heCkpIHtcclxuICAgIHJldHVybiBpbmZvXHJcbiAgfVxyXG5cclxuICBpZiAobWluID09PSAwICYmIG1heCA9PT0gMCkge1xyXG4gICAgaW5mby5wdXNoKHsgbGFiZWw6ICdOw6NvIGjDoSBkYWRvcyBzdWZpY2llbnRlcycsIHNpemU6IDAsIGNvcjogY29sb3JGaWxsLCBjb3VudDogMCB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB6ZXJhZG9zID0gdmFsb3Jlcy5maWx0ZXIodiA9PiB2ID09PSAwKS5sZW5ndGhcclxuICAgIGNvbnN0IG5hb1plcmFkb3MgPSB2YWxvcmVzLmZpbHRlcih2ID0+IHYgPiAwKVxyXG5cclxuICAgIGlmICh6ZXJhZG9zID4gMCkge1xyXG4gICAgICBpbmZvLnB1c2goe1xyXG4gICAgICAgIGxhYmVsOiBgfCAwIHwgKCR7emVyYWRvc30gcG/Dp28ke3plcmFkb3MgPiAxID8gJ3MnIDogJyd9KWAsXHJcbiAgICAgICAgc2l6ZTogNiwgY29yOiAncmdiYSgyMDAsMjAwLDIwMCwwLjMpJywgY291bnQ6IHplcmFkb3NcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBtaW4gPSAxXHJcbiAgICBjb25zdCBuID0gbmFvWmVyYWRvcy5sZW5ndGhcclxuICAgIGNvbnN0IG51bUNsYXNzZXMgPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKDEgKyAzLjMgKiBsb2cxMChuIHx8IDEpKSlcclxuICAgIGNvbnN0IGJyZWFrcyA9IE1hdGguY2VpbCgobWF4IC0gbWluICsgMSkgLyBudW1DbGFzc2VzKVxyXG4gICAgY29uc3QgbWF4U2l6ZSA9IDQwXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1DbGFzc2VzOyBpKyspIHtcclxuICAgICAgY29uc3QgbWluVmFsdWUgPSBtaW4gKyBpICogYnJlYWtzXHJcbiAgICAgIGNvbnN0IG1heFZhbHVlID0gbWluICsgKGkgKyAxKSAqIGJyZWFrcyAtIDFcclxuICAgICAgaWYgKG1pblZhbHVlID4gbWF4KSBicmVha1xyXG5cclxuICAgICAgY29uc3QgY291bnQgPSBuYW9aZXJhZG9zLmZpbHRlcih2ID0+IHYgPj0gbWluVmFsdWUgJiYgdiA8PSBtYXhWYWx1ZSkubGVuZ3RoXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gYCR7bWluVmFsdWV9IHwtLS18ICR7bWF4VmFsdWV9ICgke2NvdW50fSBwb8OnbyR7Y291bnQgPiAxID8gJ3MnIDogJyd9KWBcclxuICAgICAgY29uc3Qgc2l6ZSA9IDYgKyBpICogKG1heFNpemUgLyBudW1DbGFzc2VzKVxyXG5cclxuICAgICAgaW5mby5wdXNoKHsgbGFiZWwsIHNpemUsIGNvcjogY29sb3JGaWxsLCBjb3VudCB9KVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gaW5mb1xyXG59XHJcblxyXG4vKiA9PT09PSBBREnDh8ODTzogaGVscGVycyBtw61uaW1vcyBwYXJhIGxvY2FsaXphciBvIGRpYWxvZyBkbyBFQiA9PT09PSAqL1xyXG5mdW5jdGlvbiBmaW5kQ2xvc2VzdERpYWxvZyhlbDogSFRNTEVsZW1lbnQgfCBudWxsKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICBsZXQgY3VyOiBIVE1MRWxlbWVudCB8IG51bGwgPSBlbFxyXG4gIHdoaWxlIChjdXIpIHtcclxuICAgIGlmIChjdXIuZ2V0QXR0cmlidXRlICYmIGN1ci5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ2RpYWxvZycpIHJldHVybiBjdXJcclxuICAgIGN1ciA9IGN1ci5wYXJlbnRFbGVtZW50XHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbi8qID09PT09IENvbXBvbmVudGUgPT09PT0gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0KHByb3BzOiBhbnkpIHtcclxuICAvKiogRXN0YWRvIGJhc2UgKi9cclxuICBjb25zdCBbamltdU1hcFZpZXcsIHNldEppbXVNYXBWaWV3XSA9IFJlYWN0LnVzZVN0YXRlPEppbXVNYXBWaWV3PigpXHJcbiAgY29uc3QgW2NhdGVnb3JpYSwgc2V0Q2F0ZWdvcmlhXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpICAgICAgICAvLyBzZWxlY3RcclxuICBjb25zdCBbdGlwb3NTZWwsIHNldFRpcG9zU2VsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSkgICAgICAgIC8vIGNoZWNrYm94ZXNcclxuICBjb25zdCBbc2hvd0VtcHR5LCBzZXRTaG93RW1wdHldID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG4gIC8qKiBJbnRlcnZhbG8gZGUgaW50ZXJlc3NlICovXHJcbiAgY29uc3QgW3dpdGhJbnRlcmVzdCwgc2V0V2l0aEludGVyZXN0XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtzaG93V2l0aEludGVyZXN0LCBzZXRzaG93V2l0aEludGVyZXN0XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtmYWl4YVNldCwgc2V0RmFpeGFTZXRdID0gUmVhY3QudXNlU3RhdGU8U2V0PG51bWJlcj4+KFxyXG4gICAgKCkgPT4gbmV3IFNldDxudW1iZXI+KFxyXG4gICAgICAoQXJyYXkuaXNBcnJheShwcm9wcz8uY29kaWdvc0ZhaXhhSW50ZXJlc3NlKSA/IHByb3BzLmNvZGlnb3NGYWl4YUludGVyZXNzZSA6IFtdKVxyXG4gICAgICAgIC5tYXAoKHY6IGFueSkgPT4gTnVtYmVyKHYpKS5maWx0ZXIoKHY6IGFueSkgPT4gIWlzTmFOKHYpKVxyXG4gICAgKVxyXG4gIClcclxuXHJcbiAgLyoqIEJhc2VzIGRlIGRhZG9zICovXHJcbiAgY29uc3QgW2RhZG9zRnVsbCwgc2V0RGFkb3NGdWxsXSA9IFJlYWN0LnVzZVN0YXRlPEFtb3N0cmFJdGVtW10gfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFtkYWRvc0ZhaXhhQVBJLCBzZXREYWRvc0ZhaXhhQVBJXSA9IFJlYWN0LnVzZVN0YXRlPEFtb3N0cmFJdGVtW10gfCBudWxsPihudWxsKVxyXG5cclxuICAvKiogTG9hZGluZyAvIGVycm9zICovXHJcbiAgY29uc3QgW2xvYWRpbmdGdWxsLCBzZXRMb2FkaW5nRnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbG9hZGluZ0ludGVyZXN0LCBzZXRMb2FkaW5nSW50ZXJlc3RdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2Vycm9yRnVsbCwgc2V0RXJyb3JGdWxsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpXHJcbiAgY29uc3QgW2Vycm9ySW50ZXJlc3QsIHNldEVycm9ySW50ZXJlc3RdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJylcclxuXHJcbiAgLyogQURJw4fDg086IHJlZiBwYXJhIGxvY2FsaXphciBvIGRpYWxvZyBkbyBFQiBxdWUgY29udMOpbSBvIHdpZGdldCAqL1xyXG4gIGNvbnN0IHJvb3RSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXHJcblxyXG4gIC8qID4+Pj4+IEFEScOHw4NPOiBsb2dhciBvIHZhbG9yIGVudmlhZG8gcGVsbyBwYWkgKGNvbmNHZW8gLT4gc3RhcnRXaXRoSW50ZXJlc3QpIDw8PDw8ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiV2lkZ2V0IGF0dWFsaXphZG8gZW0gMzAvMDgvMjAyNVwiKVxyXG4gICAgY29uc3Qgb25DZmcgPSAoZXY6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBkOiBhbnkgPSBldj8uZGF0YSB8fCB7fVxyXG4gICAgICBpZiAoZD8udHlwZSA9PT0gJ2ZldGNoRGlzdHJpYnVpY2FvQW1vc3RyYXM6b2snKSB7XHJcbiAgICAgICAgc2V0c2hvd1dpdGhJbnRlcmVzdCghIWQuc3RhcnRXaXRoSW50ZXJlc3QpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25DZmcpXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbkNmZylcclxuICB9LCBbXSlcclxuICAvKiA+Pj4+PiBGSU0gREEgQURJw4fDg08gPDw8PDwgKi9cclxuXHJcbiAgLyogUmVjZWJlIGZhaXhhIGRlIGludGVyZXNzZSB2aWEgcG9zdE1lc3NhZ2UgKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb25Nc2cgPSAoZXY6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gZXY/LmRhdGEgYXMgTXNnRmFpeGFJbnRlcmVzc2VcclxuICAgICAgaWYgKCFkYXRhIHx8IGRhdGEudHlwZSAhPT0gJ2ZhaXhhLWludGVyZXNzZScgfHwgIUFycmF5LmlzQXJyYXkoZGF0YS5jb2RpZ29zUG9jb3MpKSByZXR1cm5cclxuICAgICAgY29uc3QgbnVtcyA9IGRhdGEuY29kaWdvc1BvY29zLm1hcCgodikgPT4gTnVtYmVyKHYpKS5maWx0ZXIodiA9PiAhaXNOYU4odikpXHJcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1tpbnRlcnZhbG9dIFJlY2ViaWRvcycsIGRhdGEuY29kaWdvc1BvY29zLmxlbmd0aCwgJy0+IHbDoWxpZG9zIChuw7ptZXJvcyk6JywgbnVtcy5sZW5ndGgpXHJcbiAgICAgIHNldEZhaXhhU2V0KG5ldyBTZXQ8bnVtYmVyPihudW1zKSlcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Nc2cpXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1zZylcclxuICB9LCBbXSlcclxuXHJcbiAgLyoqIENhcnJlZ2EgYmFzZSBjb21wbGV0YSBhbyBzZWxlY2lvbmFyIGEgY2F0ZWdvcmlhIFwic2FtcGxlXCIgKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXHJcbiAgICBhc3luYyBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICAgIGlmIChjYXRlZ29yaWEgIT09ICdzYW1wbGUnKSByZXR1cm5cclxuICAgICAgc2V0TG9hZGluZ0Z1bGwodHJ1ZSlcclxuICAgICAgc2V0RXJyb3JGdWxsKCcnKVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERpc3RyaWJ1aWNhb0Ftb3N0cmFzKERFRkFVTFRfRkFJWEFfSU5URVJFU1NFKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICBzZXREYWRvc0Z1bGwoZGF0YSlcclxuICAgICAgICAgIHNldFRpcG9zU2VsKFtdKSAvLyBsaW1wYSBzZWxlw6fDo28gYW50ZXJpb3JcclxuICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1tmdWxsXSBUb3RhbCBkZSBwb8Onb3M6JywgZGF0YS5sZW5ndGgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgc2V0RXJyb3JGdWxsKGU/Lm1lc3NhZ2UgfHwgJ0ZhbGhhIGFvIGJ1c2NhciBkYWRvcyAoYmFzZSBjb21wbGV0YSknKVxyXG4gICAgICAgICAgc2V0RGFkb3NGdWxsKFtdKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBpZiAoIWNhbmNlbGxlZCkgc2V0TG9hZGluZ0Z1bGwoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJ1bigpXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbY2F0ZWdvcmlhXSlcclxuXHJcbiAgLyoqIEJ1c2NhIGJhc2UgZG8gaW50ZXJlc3NlIG5vIHNlcnZpZG9yIHF1YW5kbyBuZWNlc3PDoXJpbyAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgaWYgKGNhdGVnb3JpYSAhPT0gJ3NhbXBsZScpIHJldHVyblxyXG4gICAgICBpZiAoIXdpdGhJbnRlcmVzdCkgcmV0dXJuXHJcbiAgICAgIGlmIChmYWl4YVNldC5zaXplID4gMCkgcmV0dXJuIC8vIGrDoSB2YW1vcyBmaWx0cmFyIGxvY2FsXHJcbiAgICAgIGlmIChkYWRvc0ZhaXhhQVBJICE9PSBudWxsKSByZXR1cm4gLy8gasOhIHRlbW9zIChvdSBqw6EgZmFsaG91KVxyXG4gICAgICBzZXRMb2FkaW5nSW50ZXJlc3QodHJ1ZSlcclxuICAgICAgc2V0RXJyb3JJbnRlcmVzdCgnJylcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEaXN0cmlidWljYW9BbW9zdHJhcyh0cnVlKVxyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICBzZXREYWRvc0ZhaXhhQVBJKGRhdGEpXHJcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKCdbZmFpeGFBUEldIFRvdGFsIGRlIHBvw6dvcyAoQVBJKTonLCBkYXRhLmxlbmd0aClcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICBzZXRFcnJvckludGVyZXN0KGU/Lm1lc3NhZ2UgfHwgJ0ZhbGhhIGFvIGJ1c2NhciBkYWRvcyBkbyBpbnRlcnZhbG8gZGUgaW50ZXJlc3NlJylcclxuICAgICAgICAgIHNldERhZG9zRmFpeGFBUEkoW10pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGlmICghY2FuY2VsbGVkKSBzZXRMb2FkaW5nSW50ZXJlc3QoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJ1bigpXHJcbiAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cclxuICB9LCBbY2F0ZWdvcmlhLCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0LCBkYWRvc0ZhaXhhQVBJXSlcclxuXHJcbiAgLyoqIFJlZGVzZW5oYSBhcyBjYW1hZGFzIHF1YW5kbyBiYXNlL3NlbGXDp8Ojby9pbnRlcnNzZSBtdWRhbSAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWppbXVNYXBWaWV3KSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBiYXNlOiBBbW9zdHJhSXRlbVtdID0gd2l0aEludGVyZXN0XHJcbiAgICAgID8gKGZhaXhhU2V0LnNpemUgPiAwXHJcbiAgICAgICAgICA/IChkYWRvc0Z1bGwgPz8gW10pLmZpbHRlcih4ID0+IGZhaXhhU2V0LmhhcyhOdW1iZXIoeC5jb2RpZ29Qb2NvKSkpXHJcbiAgICAgICAgICA6IChkYWRvc0ZhaXhhQVBJID8/IGRhZG9zRnVsbCA/PyBbXSkpXHJcbiAgICAgIDogKGRhZG9zRnVsbCA/PyBbXSlcclxuXHJcbiAgICBpZiAoIWJhc2UgfHwgYmFzZS5sZW5ndGggPT09IDApIHJldHVybiAvLyBldml0YSBhcGFnYXIgc2VtIHRlciBzdWJzdGl0dXRvXHJcblxyXG4gICAgY29uc3QgeyB2aWV3IH0gPSBqaW11TWFwVmlld1xyXG5cclxuICAgIC8vIGxpbXBhIGNhbWFkYXMgYW50aWdhcyBkYSBub3NzYSBkaXN0cmlidWnDp8Ojb1xyXG4gICAgTElTVF9UWVBFUy5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICBjb25zdCBsYXllciA9IHZpZXcubWFwLmZpbmRMYXllckJ5SWQoJ2Ftb3N0cmFzXycgKyB0KVxyXG4gICAgICBpZiAobGF5ZXIpIHZpZXcubWFwLnJlbW92ZShsYXllcilcclxuICAgIH0pXHJcblxyXG4gICAgLy8gZGVzZW5oYSBwb3IgdGlwbyBzZWxlY2lvbmFkbyAoY29yZXMgcG9yIHRpcG8gc2UgbWFudMOqbSlcclxuICAgIHRpcG9zU2VsLmZvckVhY2godGlwbyA9PiB7XHJcbiAgICAgIGNvbnN0IGRhZG9zID0gYmFzZS5tYXAoZCA9PiAoe1xyXG4gICAgICAgIGNvZGlnb1BvY286IGQuY29kaWdvUG9jbyxcclxuICAgICAgICB0b3RhbDogZFtUWVBFX0ZJRUxEW3RpcG9dXSA/PyAwXHJcbiAgICAgIH0pKVxyXG5cclxuICAgICAgY29uc3QgbnVtQ29tVmFsb3IgPSBkYWRvcy5maWx0ZXIoZCA9PiAoZC50b3RhbCA/PyAwKSA+IDApLmxlbmd0aFxyXG4gICAgICBjb25zb2xlLmRlYnVnKGBbZHJhd10gdGlwbz0ke3RpcG99IGNvbSB2YWxvcj4wOmAsIG51bUNvbVZhbG9yLCAnZGUnLCBkYWRvcy5sZW5ndGgpXHJcblxyXG4gICAgICBjb25zdCBjb3IgPSBjb3Jlc1RpcG9zW3RpcG9dIHx8ICdyZ2JhKDAsMCwwLDAuNSknXHJcblxyXG4gICAgICBnZXJhck1hcGFEaXN0cmlidWljYW9FQih7XHJcbiAgICAgICAgamltdU1hcFZpZXcsXHJcbiAgICAgICAgZGFkb3MsXHJcbiAgICAgICAgY29sb3JGaWxsOiBjb3IsXHJcbiAgICAgICAgaWRDYW1hZGE6ICdhbW9zdHJhc18nICsgdGlwbyxcclxuICAgICAgICBpZExlZ2VuZGE6ICdsZ2RfYW1vc3RyYXNfJyArIHRpcG8sXHJcbiAgICAgICAgdGl0bGVMZWdlbmRhOiAod2l0aEludGVyZXN0ID8gJ0ludGVydmFsbyBkZSBJbnRlcmVzc2UgLSAnIDogJycpICtcclxuICAgICAgICAgICAgICAgICAgICAgICh0aXBvLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGlwby5zbGljZSgxKSksXHJcbiAgICAgICAgd2l0aEludGVyZXN0XHJcbiAgICAgIH0gYXMgYW55KVxyXG4gICAgfSlcclxuICB9LCBbamltdU1hcFZpZXcsIHRpcG9zU2VsLCB3aXRoSW50ZXJlc3QsIGZhaXhhU2V0LCBkYWRvc0Z1bGwsIGRhZG9zRmFpeGFBUEldKVxyXG5cclxuICAvKiA9PT09PSBBREnDh8ODTzogbGltcGFyIGNhbWFkYXMgYW8gY2xpY2FyIG5vIFwiRmVjaGFyXCIgZG8gZGlhbG9nIGRvIEVCID09PT09ICovXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldz8udmlld1xyXG4gICAgaWYgKCF2aWV3KSByZXR1cm5cclxuICAgIGNvbnN0IHJvb3QgPSByb290UmVmLmN1cnJlbnRcclxuICAgIGlmICghcm9vdCkgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgZGxnID0gZmluZENsb3Nlc3REaWFsb2cocm9vdClcclxuICAgIGlmICghZGxnKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRsZy5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnYnV0dG9uW2FyaWEtbGFiZWw9XCJDbG9zZVwiXSwgYnV0dG9uW3RpdGxlPVwiQ2xvc2VcIl0sIGJ1dHRvblthcmlhLWxhYmVsPVwiRmVjaGFyXCJdLCBidXR0b25bdGl0bGU9XCJGZWNoYXJcIl0sIFtkYXRhLWFjdGlvbj1cImNsb3NlXCJdJ1xyXG4gICAgKSBhcyBIVE1MRWxlbWVudCB8IG51bGxcclxuICAgIGlmICghY2xvc2VCdG4pIHJldHVyblxyXG5cclxuICAgIGNvbnN0IGNsZWFyT25DbG9zZSA9ICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyByZW1vdmUgYXMgY2FtYWRhcyBxdWUgZXN0ZSB3aWRnZXQgYWRpY2lvbm91XHJcbiAgICAgICAgTElTVF9UWVBFUy5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbHlyID0gdmlldy5tYXAuZmluZExheWVyQnlJZCgnYW1vc3RyYXNfJyArIHQpXHJcbiAgICAgICAgICBpZiAobHlyKSB2aWV3Lm1hcC5yZW1vdmUobHlyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdmFycmVkdXJhIGV4dHJhOiBxdWFscXVlciBsYXllciBjb20gaWQgaW5pY2lhbmRvIHBvciBcImFtb3N0cmFzX1wiXHJcbiAgICAgICAgY29uc3QgYWxsID0gKHZpZXcubWFwIGFzIGFueSkuYWxsTGF5ZXJzPy50b0FycmF5Py4oKSA/PyB2aWV3Lm1hcC5sYXllcnM/LnRvQXJyYXk/LigpID8/IFtdXHJcbiAgICAgICAgYWxsLmZvckVhY2goKGx5OiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGx5Py5pZCA/PyAnJylcclxuICAgICAgICAgIGlmIChpZC5zdGFydHNXaXRoKCdhbW9zdHJhc18nKSkgdmlldy5tYXAucmVtb3ZlKGx5KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gY2F0Y2ggeyAvKiBub29wICovIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyT25DbG9zZSlcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsb3NlQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJPbkNsb3NlKVxyXG4gICAgfVxyXG4gIH0sIFtqaW11TWFwVmlld10pXHJcblxyXG4gIC8qIEFEScOHw4NPOiBwb3Igc2VndXJhbsOnYSwgdGFtYsOpbSBsaW1wYSBubyB1bm1vdW50IGRvIHdpZGdldCAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXc/LnZpZXdcclxuICAgICAgaWYgKCF2aWV3KSByZXR1cm5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBMSVNUX1RZUEVTLmZvckVhY2godCA9PiB7XHJcbiAgICAgICAgICBjb25zdCBseXIgPSB2aWV3Lm1hcC5maW5kTGF5ZXJCeUlkKCdhbW9zdHJhc18nICsgdClcclxuICAgICAgICAgIGlmIChseXIpIHZpZXcubWFwLnJlbW92ZShseXIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBhbGwgPSAodmlldy5tYXAgYXMgYW55KS5hbGxMYXllcnM/LnRvQXJyYXk/LigpID8/IHZpZXcubWFwLmxheWVycz8udG9BcnJheT8uKCkgPz8gW11cclxuICAgICAgICBhbGwuZm9yRWFjaCgobHk6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcobHk/LmlkID8/ICcnKVxyXG4gICAgICAgICAgaWYgKGlkLnN0YXJ0c1dpdGgoJ2Ftb3N0cmFzXycpKSB2aWV3Lm1hcC5yZW1vdmUobHkpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBjYXRjaCB7IC8qIG5vb3AgKi8gfVxyXG4gICAgfVxyXG4gIH0sIFtqaW11TWFwVmlld10pXHJcblxyXG4gIC8qKiBTdW3DoXJpbyBwb3IgdGlwbyB1c2FuZG8gU0VNUFJFIGEgYmFzZSBhdHVhbCAqL1xyXG4gIGNvbnN0IHN1bW1hcnlHcm91cHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGJhc2U6IEFtb3N0cmFJdGVtW10gPSB3aXRoSW50ZXJlc3RcclxuICAgICAgPyAoZmFpeGFTZXQuc2l6ZSA+IDBcclxuICAgICAgICAgID8gKGRhZG9zRnVsbCA/PyBbXSkuZmlsdGVyKHggPT4gZmFpeGFTZXQuaGFzKE51bWJlcih4LmNvZGlnb1BvY28pKSlcclxuICAgICAgICAgIDogKGRhZG9zRmFpeGFBUEkgPz8gZGFkb3NGdWxsID8/IFtdKSlcclxuICAgICAgOiAoZGFkb3NGdWxsID8/IFtdKVxyXG5cclxuICAgIHJldHVybiB0aXBvc1NlbC5tYXAodGlwbyA9PiB7XHJcbiAgICAgIGNvbnN0IGNvciA9IGNvcmVzVGlwb3NbdGlwb11cclxuICAgICAgY29uc3QgZGFkb3MgPSBiYXNlLm1hcChkID0+ICh7XHJcbiAgICAgICAgY29kaWdvUG9jbzogZC5jb2RpZ29Qb2NvLFxyXG4gICAgICAgIHRvdGFsOiBkW1RZUEVfRklFTERbdGlwb11dID8/IDBcclxuICAgICAgfSkpXHJcbiAgICAgIGxldCByb3dzID0gY2FsY3VsYXJRdWVicmFzKGRhZG9zLCBjb3IpLnJldmVyc2UoKVxyXG4gICAgICBpZiAoIXNob3dFbXB0eSkge1xyXG4gICAgICAgIHJvd3MgPSByb3dzLmZpbHRlcihyID0+IHIuY291bnQgPiAwIHx8IHIubGFiZWwuc3RhcnRzV2l0aCgnfCAwIHwnKSlcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyB0aXBvLCByb3dzIH1cclxuICAgIH0pXHJcbiAgfSwgW3RpcG9zU2VsLCBzaG93RW1wdHksIHdpdGhJbnRlcmVzdCwgZmFpeGFTZXQsIGRhZG9zRnVsbCwgZGFkb3NGYWl4YUFQSV0pXHJcblxyXG4gIC8qKiBIZWxwZXJzIFVJICovXHJcbiAgY29uc3QgdG9nZ2xlVGlwbyA9ICh0aXBvOiBzdHJpbmcpID0+XHJcbiAgICBzZXRUaXBvc1NlbChwcmV2ID0+IHByZXYuaW5jbHVkZXModGlwbykgPyBwcmV2LmZpbHRlcih0ID0+IHQgIT09IHRpcG8pIDogWy4uLnByZXYsIHRpcG9dKVxyXG5cclxuICBjb25zdCBoYXNBbnlCYXNlID0gKEFycmF5LmlzQXJyYXkoZGFkb3NGdWxsKSAmJiBkYWRvc0Z1bGwubGVuZ3RoID4gMCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkoZGFkb3NGYWl4YUFQSSkgJiYgZGFkb3NGYWl4YUFQSS5sZW5ndGggPiAwKVxyXG5cclxuICAvKiA9PT09PSBSZW5kZXIgPT09PT0gKi9cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e3dyYXBwZXJTdHlsZX0gcmVmPXtyb290UmVmfT4gIFxyXG4gICAgICA8R2xvYmFsIHN0eWxlcz17Z2xvYmFsUGFuZWxTdHlsZX0gLz5cclxuICAgICAgPGxhYmVsIGNzcz17dGl0bGVTdHlsZX0+U2VsZWNpb25lIGEgZGlzdHJpYnVpw6fDo288L2xhYmVsPlxyXG5cclxuICAgICAgPHNlbGVjdFxyXG4gICAgICAgIGNzcz17c2VsZWN0U3R5bGV9XHJcbiAgICAgICAgdmFsdWU9e2NhdGVnb3JpYX1cclxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDYXRlZ29yaWEoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nJz5TZWxlY2lvbmUgbyB0aXBvPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nc2FtcGxlJz5EaXN0cmlidWnDp8OjbyBkZSBhbW9zdHJhPC9vcHRpb24+XHJcbiAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAge2NhdGVnb3JpYSA9PT0gJ3NhbXBsZScgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7bG9hZGluZ0Z1bGwgJiYgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDggfX0+Q2FycmVnYW5kbyBiYXNlIGNvbXBsZXRh4oCmPC9kaXY+fVxyXG4gICAgICAgICAgeyEhZXJyb3JGdWxsICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6ICcjYjAwJywgbWFyZ2luQm90dG9tOiA4IH19PkVycm86IHtlcnJvckZ1bGx9PC9kaXY+fVxyXG4gICAgICAgICAge3dpdGhJbnRlcmVzdCAmJiBsb2FkaW5nSW50ZXJlc3QgJiYgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDggfX0+Q2FycmVnYW5kbyBpbnRlcnZhbG8gZGUgaW50ZXJlc3Nl4oCmPC9kaXY+fVxyXG4gICAgICAgICAge3dpdGhJbnRlcmVzdCAmJiAhIWVycm9ySW50ZXJlc3QgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogJyNiMDAnLCBtYXJnaW5Cb3R0b206IDggfX0+RXJybzoge2Vycm9ySW50ZXJlc3R9PC9kaXY+fVxyXG5cclxuICAgICAgICAgIHtoYXNBbnlCYXNlICYmIChcclxuICAgICAgICAgICAgPGRpdiBjc3M9e2xpc3RTdHlsZX0+XHJcbiAgICAgICAgICAgICAge0xJU1RfVFlQRVMubWFwKHQgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3R9IGNzcz17Y2hlY2tib3hSb3dTdHlsZX0gb25DbGljaz17KCkgPT4gdG9nZ2xlVGlwbyh0KX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J2NoZWNrYm94J1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RpcG9zU2VsLmluY2x1ZGVzKHQpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDYgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3QuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0LnNsaWNlKDEpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7c3VtbWFyeUdyb3Vwcy5sZW5ndGggPiAwICYmICg8ZGl2IGNzcz17Zm9vdGVyU3R5bGV9PlxyXG4gICAgICAgICAgICA8bGFiZWwgY3NzPXtmb290ZXJMYWJlbFN0eWxlfSB0aXRsZT1cIkV4aWJpciB0YW1iw6ltIGNsYXNzZXMgc2VtIHBvw6dvc1wiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Nob3dFbXB0eX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNob3dFbXB0eShlLnRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIEV4aWJpciBjbGFzc2VzIHZhemlhc1xyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgeyBzaG93V2l0aEludGVyZXN0ICYmIChcclxuICAgICAgICAgICAgICA8bGFiZWwgY3NzPXtmb290ZXJMYWJlbFN0eWxlfSB0aXRsZT1cIlF1YW5kbyBtYXJjYWRvLCBhcGxpY2EgbyBmaWx0cm8gZGUgSW50ZXJ2YWxvIGRlIEludGVyZXNzZSAoY8OzZGlnb3MgdmluZG9zIGRvIEV4cGxvcmEgb3UgdmlhIEFQSSlcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt3aXRoSW50ZXJlc3R9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRXaXRoSW50ZXJlc3QoZS50YXJnZXQuY2hlY2tlZCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICBJbnRlcnZhbG8gZGUgaW50ZXJlc3NlXHJcbiAgICAgICAgICAgIDwvbGFiZWw+KSB9XHJcbiAgICAgIDwvZGl2Pil9XHJcblxyXG4gICAgICB7c3VtbWFyeUdyb3Vwcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IGNzcz17c3VtbWFyeUxpc3RTdHlsZX0+XHJcbiAgICAgICAgICB7c3VtbWFyeUdyb3Vwcy5tYXAoZ3JvdXAgPT4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtncm91cC50aXBvfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNzcz17Y3NzYGZvbnQtd2VpZ2h0OjYwMDsgbWFyZ2luOjRweCAwO2B9PlxyXG4gICAgICAgICAgICAgICAgeyh3aXRoSW50ZXJlc3QgPyAnSW50ZXJ2YWxvIGRlIEludGVyZXNzZSAtICcgOiAnJyl9XHJcbiAgICAgICAgICAgICAgICB7Z3JvdXAudGlwby5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGdyb3VwLnRpcG8uc2xpY2UoMSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIHtncm91cC5yb3dzLm1hcCgociwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7Z3JvdXAudGlwb30tJHtpZHh9YH0gY3NzPXtzdW1tYXJ5SXRlbVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjc3M9e2J1YmJsZUJveFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPXtyLnNpemV9IGhlaWdodD17ci5zaXplfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9e3Iuc2l6ZSAvIDJ9IGN5PXtyLnNpemUgLyAyfSByPXtyLnNpemUgLyAyfSBmaWxsPXtyLmNvcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNzcz17cmFuZ2VMYWJlbFN0eWxlfT57ci5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxyXG4gICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17c2V0SmltdU1hcFZpZXd9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0gLy8gTWVsaG9yYW1lbnRvXHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=