System.register(["jimu-core/react","jimu-arcgis","esri/config","esri/layers/FeatureLayer","esri/geometry/Extent","esri/layers/GroupLayer"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_config__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_Extent__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_GroupLayer__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_config__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_Extent__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_GroupLayer__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_config__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_Extent__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_GroupLayer__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "@arcgis/core/config":
/*!******************************!*\
  !*** external "esri/config" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_config__;

/***/ }),

/***/ "@arcgis/core/geometry/Extent":
/*!***************************************!*\
  !*** external "esri/geometry/Extent" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_Extent__;

/***/ }),

/***/ "@arcgis/core/layers/FeatureLayer":
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__;

/***/ }),

/***/ "@arcgis/core/layers/GroupLayer":
/*!*****************************************!*\
  !*** external "esri/layers/GroupLayer" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_GroupLayer__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/*!*************************************************************************************!*\
  !*** ./your-extensions/widgets/filter-criterion-data-select/src/runtime/widget.tsx ***!
  \*************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _arcgis_core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @arcgis/core/config */ "@arcgis/core/config");
/* harmony import */ var _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @arcgis/core/layers/FeatureLayer */ "@arcgis/core/layers/FeatureLayer");
/* harmony import */ var _arcgis_core_geometry_Extent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @arcgis/core/geometry/Extent */ "@arcgis/core/geometry/Extent");
/* harmony import */ var _arcgis_core_layers_GroupLayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @arcgis/core/layers/GroupLayer */ "@arcgis/core/layers/GroupLayer");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// src/widgets/seu-widget/src/runtime/widget.tsx






// Interceptor: garante f=json
_arcgis_core_config__WEBPACK_IMPORTED_MODULE_2__["default"].request.interceptors.push({
    urls: /Pocos_Sem_Simbolos\/FeatureServer\/0/,
    before: (params) => {
        params.requestOptions.query = Object.assign(Object.assign({}, params.requestOptions.query), { f: 'json' });
    }
});
const FEATURE_URL = 'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Pocos_Sem_Simbolos/FeatureServer/0';
const CHUNK_SIZE = 600;
const MAX_LAYERS = 40;
const extentBrasil = new _arcgis_core_geometry_Extent__WEBPACK_IMPORTED_MODULE_4__["default"]({
    xmin: -74.0,
    ymin: -34.0,
    xmax: -34.0,
    ymax: 5.0,
    spatialReference: { wkid: 4326 }
});
function Widget(props) {
    var _a;
    const jimuMapViewRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const [mapViewReady, setMapViewReady] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [codigosPocos, setCodigosPocos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const present = new Set();
    const origensPermitidas = [
        'https://localhost:3001',
        'https://portalgis.petrobras.com.br',
        'http://localhost:8080'
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const handler = (event) => {
            if (!origensPermitidas.includes(event.origin)) {
                console.warn('Origem não permitida:', event.origin);
                return;
            }
            const { type, data } = event.data || {};
            if (type === 'codigosPocos' && Array.isArray(data) && data.length > 0) {
                setCodigosPocos(data);
            }
        };
        window.addEventListener('message', handler);
        return () => window.removeEventListener('message', handler);
    }, []);
    // Informa ao pai que o widget está pronto
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (mapViewReady) {
            window.parent.postMessage({ type: 'widgetReady' }, '*');
        }
    }, [mapViewReady]);
    // Quando mapa e lista de códigos estiverem prontos, plota
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (mapViewReady && codigosPocos.length > 0) {
            desenharComSimbologiaDoServico(mapViewReady, codigosPocos);
        }
    }, [mapViewReady, codigosPocos]);
    function desenharComSimbologiaDoServico(jmv, codigos) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                if (jmv.view)
                    jmv.view.extent = extentBrasil;
            }
            catch (_d) { }
            const map = jmv.view.map;
            // GroupLayer "Poços"
            let group = map.layers.find((l) => l.id === 'pocos-group');
            if (!group) {
                group = new _arcgis_core_layers_GroupLayer__WEBPACK_IMPORTED_MODULE_5__["default"]({
                    id: 'pocos-group',
                    title: 'Poços',
                    visibilityMode: 'inherited',
                    listMode: 'show'
                });
                map.add(group);
            }
            // Remove filhos antigos do grupo
            const toRemove = [];
            group.layers.forEach((l) => {
                var _a;
                if ((_a = l.id) === null || _a === void 0 ? void 0 : _a.startsWith('pocos-lote-'))
                    toRemove.push(l);
            });
            toRemove.forEach((l) => group.remove(l));
            // Deduplica os códigos e aplica o limite real que será usado
            const uniqueCodigos = Array.from(new Set(codigos.map((v) => String(v).trim())));
            const maxItems = MAX_LAYERS * CHUNK_SIZE;
            const codigosUsados = uniqueCodigos.slice(0, maxItems);
            // Descobre se precisa de aspas
            const probe = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_3__["default"]({ url: FEATURE_URL });
            yield probe.load();
            const campo = probe.fields.find((f) => f.name === 'POCO_CD_POCO');
            const precisaAspas = (campo === null || campo === void 0 ? void 0 : campo.type) === 'string';
            // Lotes
            const totalLotes = Math.ceil(codigosUsados.length / CHUNK_SIZE);
            if (totalLotes > MAX_LAYERS) {
                console.warn(`Estimado ${totalLotes} lotes (> ${MAX_LAYERS}). Considerando apenas os primeiros ${MAX_LAYERS} lotes (${maxItems} códigos).`);
            }
            // Progresso acumulado
            let acumulado = 0;
            const esperado = codigosUsados.length;
            console.log(`▶️ Iniciando plotagem de poços: ${esperado} códigos únicos em até ${Math.min(totalLotes, MAX_LAYERS)} lotes.`);
            // Cria camadas por lote, conta e imprime progresso
            for (let i = 0; i < codigosUsados.length && i / CHUNK_SIZE < MAX_LAYERS; i += CHUNK_SIZE) {
                const idxLote = i / CHUNK_SIZE + 1;
                const lote = codigosUsados.slice(i, i + CHUNK_SIZE);
                const valores = precisaAspas ? lote.map((v) => `'${v}'`).join(',') : lote.join(',');
                const where = `POCO_CD_POCO IN (${valores})`;
                const fl = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_3__["default"]({
                    id: `pocos-lote-${String(idxLote).padStart(3, '0')}`,
                    url: FEATURE_URL,
                    title: `Poços (lote ${idxLote})`,
                    definitionExpression: where,
                    outFields: ['POCO_CD_POCO'],
                    featureReduction: null,
                    listMode: 'hide'
                });
                try {
                    yield fl.load();
                    group.add(fl);
                    const q = fl.createQuery();
                    q.where = where;
                    q.outFields = ['POCO_CD_POCO'];
                    q.returnDistinctValues = true;
                    q.returnGeometry = false;
                    // Coleta códigos realmente encontrados neste lote
                    const res = yield fl.queryFeatures(q);
                    const foundCodes = res.features.map(f => String(f.attributes.POCO_CD_POCO).trim());
                    // Mantenha um Set global ao início da função:
                    //// const present = new Set<string>();
                    foundCodes.forEach(c => present.add(c));
                    // Se você quer contar "poços" (códigos únicos):
                    const distintosAcumulado = present.size;
                    console.log(`✅ Lote ${idxLote}: +${foundCodes.length} únicos (acumulado ${distintosAcumulado}/${esperado})`);
                    // (Opcional) também conte feições (se houver múltiplas por poço)
                    const countFeicoes = yield fl.queryFeatureCount({ where });
                    console.log(`ℹ️  Lote ${idxLote}: ${countFeicoes} feições (p/ depuração)`);
                    // Notifica o pai (opcional)
                    try {
                        (_a = window.parent) === null || _a === void 0 ? void 0 : _a.postMessage({ type: 'plotProgress', count: acumulado, expected: esperado, lot: idxLote }, '*');
                    }
                    catch (_e) { }
                }
                catch (e) {
                    console.error('Erro ao carregar/contar lote', idxLote, e);
                }
            }
            const usadosSet = new Set(codigosUsados.map(v => String(v).trim()));
            const missing = [...usadosSet].filter(c => !present.has(c));
            console.log(`🏁 Distintos retornados: ${present.size}/${esperado}`);
            console.log(`🔎 Códigos sem feição (${missing.length}):`, missing.slice(0, 50), missing.length > 50 ? '...' : '');
            // Se quiser notificar o pai com os faltantes:
            try {
                (_b = window.parent) === null || _b === void 0 ? void 0 : _b.postMessage({
                    type: 'plotDiagnostics',
                    distinctFound: present.size,
                    expected: esperado,
                    missingCount: missing.length,
                    sampleMissing: missing.slice(0, 50)
                }, '*');
            }
            catch (_f) { }
            console.log(`🏁 Plotagem concluída. Total efetivamente retornado pelo serviço: ${acumulado}/${esperado}.`);
            try {
                (_c = window.parent) === null || _c === void 0 ? void 0 : _c.postMessage({ type: 'plotDone', total: acumulado, expected: esperado }, '*');
            }
            catch (_g) { }
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: { height: '100%', width: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: (jimuMapView) => {
                if (jimuMapView) {
                    jimuMapViewRef.current = jimuMapView;
                    setMapViewReady(jimuMapView);
                }
            } })));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0ZXItY3JpdGVyaW9uLWRhdGEtc2VsZWN0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQsZ0RBQWdEO0FBQ1U7QUFDSztBQUluQjtBQUNlO0FBQ1Y7QUFDTTtBQUV2RCw4QkFBOEI7QUFDOUIsbUVBQWtCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztJQUNuQyxJQUFJLEVBQUUsc0NBQXNDO0lBQzVDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2pCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxtQ0FDdEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEtBQzlCLENBQUMsRUFBRSxNQUFNLEdBQ1Y7SUFDSCxDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUNmLGtHQUFrRztBQUVwRyxNQUFN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V0FBVyxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksV0FBVyxFQUFFLENBQUM7b0JBQ2hCLGNBQWMsQ0FBQyxPQUFPLEdBQUcsV0FBVztvQkFDcEMsZUFBZSxDQUFDLFdBQVcsQ0FBQztnQkFDOUIsQ0FBQztZQUNILENBQUMsR0FDRCxDQUNFLENBQ1A7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L0V4dGVudFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9Hcm91cExheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maWx0ZXItY3JpdGVyaW9uLWRhdGEtc2VsZWN0L3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9jb25maWdfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2dlb21ldHJ5X0V4dGVudF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfbGF5ZXJzX0ZlYXR1cmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfbGF5ZXJzX0dyb3VwTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvLyBzcmMvd2lkZ2V0cy9zZXUtd2lkZ2V0L3NyYy9ydW50aW1lL3dpZGdldC50c3hcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuaW1wb3J0IGVzcmlDb25maWcgZnJvbSAnQGFyY2dpcy9jb3JlL2NvbmZpZydcclxuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdAYXJjZ2lzL2NvcmUvbGF5ZXJzL0ZlYXR1cmVMYXllcidcclxuaW1wb3J0IEV4dGVudCBmcm9tICdAYXJjZ2lzL2NvcmUvZ2VvbWV0cnkvRXh0ZW50J1xyXG5pbXBvcnQgR3JvdXBMYXllciBmcm9tICdAYXJjZ2lzL2NvcmUvbGF5ZXJzL0dyb3VwTGF5ZXInXHJcblxyXG4vLyBJbnRlcmNlcHRvcjogZ2FyYW50ZSBmPWpzb25cclxuZXNyaUNvbmZpZy5yZXF1ZXN0LmludGVyY2VwdG9ycy5wdXNoKHtcclxuICB1cmxzOiAvUG9jb3NfU2VtX1NpbWJvbG9zXFwvRmVhdHVyZVNlcnZlclxcLzAvLFxyXG4gIGJlZm9yZTogKHBhcmFtcykgPT4ge1xyXG4gICAgcGFyYW1zLnJlcXVlc3RPcHRpb25zLnF1ZXJ5ID0ge1xyXG4gICAgICAuLi5wYXJhbXMucmVxdWVzdE9wdGlvbnMucXVlcnksXHJcbiAgICAgIGY6ICdqc29uJ1xyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IEZFQVRVUkVfVVJMID1cclxuICAnaHR0cHM6Ly9iYXNlZ2lzLnBldHJvYnJhcy5jb20uYnIvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvRVhQTE9SQS9Qb2Nvc19TZW1fU2ltYm9sb3MvRmVhdHVyZVNlcnZlci8wJ1xyXG5cclxuY29uc3QgQ0hVTktfU0laRSA9IDYwMFxyXG5jb25zdCBNQVhfTEFZRVJTID0gNDBcclxuXHJcbmNvbnN0IGV4dGVudEJyYXNpbCA9IG5ldyBFeHRlbnQoe1xyXG4gIHhtaW46IC03NC4wLFxyXG4gIHltaW46IC0zNC4wLFxyXG4gIHhtYXg6IC0zNC4wLFxyXG4gIHltYXg6IDUuMCxcclxuICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0KHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcclxuICBjb25zdCBqaW11TWFwVmlld1JlZiA9IHVzZVJlZjxKaW11TWFwVmlldz4oKVxyXG4gIGNvbnN0IFttYXBWaWV3UmVhZHksIHNldE1hcFZpZXdSZWFkeV0gPSB1c2VTdGF0ZTxKaW11TWFwVmlldyB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW2NvZGlnb3NQb2Nvcywgc2V0Q29kaWdvc1BvY29zXSA9IHVzZVN0YXRlPChudW1iZXIgfCBzdHJpbmcpW10+KFtdKVxyXG4gIGNvbnN0IHByZXNlbnQgPSBuZXcgU2V0PHN0cmluZz4oKVxyXG5cclxuXHJcbiAgY29uc3Qgb3JpZ2Vuc1Blcm1pdGlkYXMgPSBbXHJcbiAgICAnaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMScsXHJcbiAgICAnaHR0cHM6Ly9wb3J0YWxnaXMucGV0cm9icmFzLmNvbS5icicsXHJcbiAgICAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJ1xyXG4gIF1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICBpZiAoIW9yaWdlbnNQZXJtaXRpZGFzLmluY2x1ZGVzKGV2ZW50Lm9yaWdpbikpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ09yaWdlbSBuw6NvIHBlcm1pdGlkYTonLCBldmVudC5vcmlnaW4pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeyB0eXBlLCBkYXRhIH0gPSBldmVudC5kYXRhIHx8IHt9XHJcbiAgICAgIGlmICh0eXBlID09PSAnY29kaWdvc1BvY29zJyAmJiBBcnJheS5pc0FycmF5KGRhdGEpICYmIGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNldENvZGlnb3NQb2NvcyhkYXRhKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZXIpXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVyKVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyBJbmZvcm1hIGFvIHBhaSBxdWUgbyB3aWRnZXQgZXN0w6EgcHJvbnRvXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtYXBWaWV3UmVhZHkpIHtcclxuICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh7IHR5cGU6ICd3aWRnZXRSZWFkeScgfSwgJyonKVxyXG4gICAgfVxyXG4gIH0sIFttYXBWaWV3UmVhZHldKVxyXG5cclxuICAvLyBRdWFuZG8gbWFwYSBlIGxpc3RhIGRlIGPDs2RpZ29zIGVzdGl2ZXJlbSBwcm9udG9zLCBwbG90YVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobWFwVmlld1JlYWR5ICYmIGNvZGlnb3NQb2Nvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGRlc2VuaGFyQ29tU2ltYm9sb2dpYURvU2VydmljbyhtYXBWaWV3UmVhZHksIGNvZGlnb3NQb2NvcylcclxuICAgIH1cclxuICB9LCBbbWFwVmlld1JlYWR5LCBjb2RpZ29zUG9jb3NdKVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBkZXNlbmhhckNvbVNpbWJvbG9naWFEb1NlcnZpY28oXHJcbiAgICBqbXY6IEppbXVNYXBWaWV3LFxyXG4gICAgY29kaWdvczogKG51bWJlciB8IHN0cmluZylbXVxyXG4gICkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGptdi52aWV3KSBqbXYudmlldy5leHRlbnQgPSBleHRlbnRCcmFzaWxcclxuICAgIH0gY2F0Y2gge31cclxuXHJcbiAgICBjb25zdCBtYXAgPSBqbXYudmlldy5tYXBcclxuXHJcbiAgICAvLyBHcm91cExheWVyIFwiUG/Dp29zXCJcclxuICAgIGxldCBncm91cCA9IG1hcC5sYXllcnMuZmluZCgobDogYW55KSA9PiBsLmlkID09PSAncG9jb3MtZ3JvdXAnKSBhcyBHcm91cExheWVyXHJcbiAgICBpZiAoIWdyb3VwKSB7XHJcbiAgICAgIGdyb3VwID0gbmV3IEdyb3VwTGF5ZXIoe1xyXG4gICAgICAgIGlkOiAncG9jb3MtZ3JvdXAnLFxyXG4gICAgICAgIHRpdGxlOiAnUG/Dp29zJyxcclxuICAgICAgICB2aXNpYmlsaXR5TW9kZTogJ2luaGVyaXRlZCcsXHJcbiAgICAgICAgbGlzdE1vZGU6ICdzaG93J1xyXG4gICAgICB9KVxyXG4gICAgICBtYXAuYWRkKGdyb3VwKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSBmaWxob3MgYW50aWdvcyBkbyBncnVwb1xyXG4gICAgY29uc3QgdG9SZW1vdmU6IGFueVtdID0gW11cclxuICAgIGdyb3VwLmxheWVycy5mb3JFYWNoKChsOiBhbnkpID0+IHtcclxuICAgICAgaWYgKGwuaWQ/LnN0YXJ0c1dpdGgoJ3BvY29zLWxvdGUtJykpIHRvUmVtb3ZlLnB1c2gobClcclxuICAgIH0pXHJcbiAgICB0b1JlbW92ZS5mb3JFYWNoKChsKSA9PiBncm91cC5yZW1vdmUobCkpXHJcblxyXG4gICAgLy8gRGVkdXBsaWNhIG9zIGPDs2RpZ29zIGUgYXBsaWNhIG8gbGltaXRlIHJlYWwgcXVlIHNlcsOhIHVzYWRvXHJcbiAgICBjb25zdCB1bmlxdWVDb2RpZ29zID0gQXJyYXkuZnJvbShuZXcgU2V0KGNvZGlnb3MubWFwKCh2KSA9PiBTdHJpbmcodikudHJpbSgpKSkpXHJcbiAgICBjb25zdCBtYXhJdGVtcyA9IE1BWF9MQVlFUlMgKiBDSFVOS19TSVpFXHJcbiAgICBjb25zdCBjb2RpZ29zVXNhZG9zID0gdW5pcXVlQ29kaWdvcy5zbGljZSgwLCBtYXhJdGVtcylcclxuXHJcbiAgICAvLyBEZXNjb2JyZSBzZSBwcmVjaXNhIGRlIGFzcGFzXHJcbiAgICBjb25zdCBwcm9iZSA9IG5ldyBGZWF0dXJlTGF5ZXIoeyB1cmw6IEZFQVRVUkVfVVJMIH0pXHJcbiAgICBhd2FpdCBwcm9iZS5sb2FkKClcclxuICAgIGNvbnN0IGNhbXBvID0gcHJvYmUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ1BPQ09fQ0RfUE9DTycpXHJcbiAgICBjb25zdCBwcmVjaXNhQXNwYXMgPSBjYW1wbz8udHlwZSA9PT0gJ3N0cmluZydcclxuXHJcbiAgICAvLyBMb3Rlc1xyXG4gICAgY29uc3QgdG90YWxMb3RlcyA9IE1hdGguY2VpbChjb2RpZ29zVXNhZG9zLmxlbmd0aCAvIENIVU5LX1NJWkUpXHJcbiAgICBpZiAodG90YWxMb3RlcyA+IE1BWF9MQVlFUlMpIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGBFc3RpbWFkbyAke3RvdGFsTG90ZXN9IGxvdGVzICg+ICR7TUFYX0xBWUVSU30pLiBDb25zaWRlcmFuZG8gYXBlbmFzIG9zIHByaW1laXJvcyAke01BWF9MQVlFUlN9IGxvdGVzICgke21heEl0ZW1zfSBjw7NkaWdvcykuYFxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvZ3Jlc3NvIGFjdW11bGFkb1xyXG4gICAgbGV0IGFjdW11bGFkbyA9IDBcclxuICAgIGNvbnN0IGVzcGVyYWRvID0gY29kaWdvc1VzYWRvcy5sZW5ndGhcclxuXHJcbiAgICBjb25zb2xlLmxvZyhg4pa277iPIEluaWNpYW5kbyBwbG90YWdlbSBkZSBwb8Onb3M6ICR7ZXNwZXJhZG99IGPDs2RpZ29zIMO6bmljb3MgZW0gYXTDqSAke01hdGgubWluKHRvdGFsTG90ZXMsIE1BWF9MQVlFUlMpfSBsb3Rlcy5gKVxyXG5cclxuICAgIC8vIENyaWEgY2FtYWRhcyBwb3IgbG90ZSwgY29udGEgZSBpbXByaW1lIHByb2dyZXNzb1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2RpZ29zVXNhZG9zLmxlbmd0aCAmJiBpIC8gQ0hVTktfU0laRSA8IE1BWF9MQVlFUlM7IGkgKz0gQ0hVTktfU0laRSkge1xyXG4gICAgICBjb25zdCBpZHhMb3RlID0gaSAvIENIVU5LX1NJWkUgKyAxXHJcbiAgICAgIGNvbnN0IGxvdGUgPSBjb2RpZ29zVXNhZG9zLnNsaWNlKGksIGkgKyBDSFVOS19TSVpFKVxyXG4gICAgICBjb25zdCB2YWxvcmVzID0gcHJlY2lzYUFzcGFzID8gbG90ZS5tYXAoKHYpID0+IGAnJHt2fSdgKS5qb2luKCcsJykgOiBsb3RlLmpvaW4oJywnKVxyXG4gICAgICBjb25zdCB3aGVyZSA9IGBQT0NPX0NEX1BPQ08gSU4gKCR7dmFsb3Jlc30pYFxyXG5cclxuICAgICAgY29uc3QgZmwgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgICBpZDogYHBvY29zLWxvdGUtJHtTdHJpbmcoaWR4TG90ZSkucGFkU3RhcnQoMywgJzAnKX1gLFxyXG4gICAgICAgIHVybDogRkVBVFVSRV9VUkwsXHJcbiAgICAgICAgdGl0bGU6IGBQb8Onb3MgKGxvdGUgJHtpZHhMb3RlfSlgLFxyXG4gICAgICAgIGRlZmluaXRpb25FeHByZXNzaW9uOiB3aGVyZSxcclxuICAgICAgICBvdXRGaWVsZHM6IFsnUE9DT19DRF9QT0NPJ10sXHJcbiAgICAgICAgZmVhdHVyZVJlZHVjdGlvbjogbnVsbCxcclxuICAgICAgICBsaXN0TW9kZTogJ2hpZGUnXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGZsLmxvYWQoKVxyXG4gICAgICAgIGdyb3VwLmFkZChmbClcclxuXHJcbiAgICAgICAgY29uc3QgcSA9IGZsLmNyZWF0ZVF1ZXJ5KClcclxuICAgICAgICBxLndoZXJlID0gd2hlcmVcclxuICAgICAgICBxLm91dEZpZWxkcyA9IFsnUE9DT19DRF9QT0NPJ11cclxuICAgICAgICBxLnJldHVybkRpc3RpbmN0VmFsdWVzID0gdHJ1ZVxyXG4gICAgICAgIHEucmV0dXJuR2VvbWV0cnkgPSBmYWxzZVxyXG5cclxuICAgICAgICAvLyBDb2xldGEgY8OzZGlnb3MgcmVhbG1lbnRlIGVuY29udHJhZG9zIG5lc3RlIGxvdGVcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmbC5xdWVyeUZlYXR1cmVzKHEpXHJcbiAgICAgICAgY29uc3QgZm91bmRDb2RlcyA9IHJlcy5mZWF0dXJlcy5tYXAoZiA9PiBTdHJpbmcoZi5hdHRyaWJ1dGVzLlBPQ09fQ0RfUE9DTykudHJpbSgpKVxyXG5cclxuICAgICAgICAvLyBNYW50ZW5oYSB1bSBTZXQgZ2xvYmFsIGFvIGluw61jaW8gZGEgZnVuw6fDo286XHJcbiAgICAgICAgLy8vLyBjb25zdCBwcmVzZW50ID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcblxyXG4gICAgICAgIGZvdW5kQ29kZXMuZm9yRWFjaChjID0+IHByZXNlbnQuYWRkKGMpKVxyXG5cclxuICAgICAgICAvLyBTZSB2b2PDqiBxdWVyIGNvbnRhciBcInBvw6dvc1wiIChjw7NkaWdvcyDDum5pY29zKTpcclxuICAgICAgICBjb25zdCBkaXN0aW50b3NBY3VtdWxhZG8gPSBwcmVzZW50LnNpemVcclxuICAgICAgICBjb25zb2xlLmxvZyhg4pyFIExvdGUgJHtpZHhMb3RlfTogKyR7Zm91bmRDb2Rlcy5sZW5ndGh9IMO6bmljb3MgKGFjdW11bGFkbyAke2Rpc3RpbnRvc0FjdW11bGFkb30vJHtlc3BlcmFkb30pYClcclxuXHJcbiAgICAgICAgLy8gKE9wY2lvbmFsKSB0YW1iw6ltIGNvbnRlIGZlacOnw7VlcyAoc2UgaG91dmVyIG3Dumx0aXBsYXMgcG9yIHBvw6dvKVxyXG4gICAgICAgIGNvbnN0IGNvdW50RmVpY29lcyA9IGF3YWl0IGZsLnF1ZXJ5RmVhdHVyZUNvdW50KHsgd2hlcmUgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhg4oS577iPICBMb3RlICR7aWR4TG90ZX06ICR7Y291bnRGZWljb2VzfSBmZWnDp8O1ZXMgKHAvIGRlcHVyYcOnw6NvKWApXHJcbiAgICAgICAgLy8gTm90aWZpY2EgbyBwYWkgKG9wY2lvbmFsKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB3aW5kb3cucGFyZW50Py5wb3N0TWVzc2FnZSh7IHR5cGU6ICdwbG90UHJvZ3Jlc3MnLCBjb3VudDogYWN1bXVsYWRvLCBleHBlY3RlZDogZXNwZXJhZG8sIGxvdDogaWR4TG90ZSB9LCAnKicpXHJcbiAgICAgICAgfSBjYXRjaCB7fVxyXG5cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY2FycmVnYXIvY29udGFyIGxvdGUnLCBpZHhMb3RlLCBlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNhZG9zU2V0ID0gbmV3IFNldChjb2RpZ29zVXNhZG9zLm1hcCh2ID0+IFN0cmluZyh2KS50cmltKCkpKVxyXG4gICAgY29uc3QgbWlzc2luZyA9IFsuLi51c2Fkb3NTZXRdLmZpbHRlcihjID0+ICFwcmVzZW50LmhhcyhjKSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhg8J+PgSBEaXN0aW50b3MgcmV0b3JuYWRvczogJHtwcmVzZW50LnNpemV9LyR7ZXNwZXJhZG99YClcclxuICAgIGNvbnNvbGUubG9nKGDwn5SOIEPDs2RpZ29zIHNlbSBmZWnDp8OjbyAoJHttaXNzaW5nLmxlbmd0aH0pOmAsIG1pc3Npbmcuc2xpY2UoMCwgNTApLCBtaXNzaW5nLmxlbmd0aCA+IDUwID8gJy4uLicgOiAnJylcclxuXHJcbiAgICAvLyBTZSBxdWlzZXIgbm90aWZpY2FyIG8gcGFpIGNvbSBvcyBmYWx0YW50ZXM6XHJcbiAgICB0cnkge1xyXG4gICAgICB3aW5kb3cucGFyZW50Py5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgdHlwZTogJ3Bsb3REaWFnbm9zdGljcycsXHJcbiAgICAgICAgZGlzdGluY3RGb3VuZDogcHJlc2VudC5zaXplLFxyXG4gICAgICAgIGV4cGVjdGVkOiBlc3BlcmFkbyxcclxuICAgICAgICBtaXNzaW5nQ291bnQ6IG1pc3NpbmcubGVuZ3RoLFxyXG4gICAgICAgIHNhbXBsZU1pc3Npbmc6IG1pc3Npbmcuc2xpY2UoMCwgNTApXHJcbiAgICAgIH0sICcqJylcclxuICAgIH0gY2F0Y2gge31cclxuXHJcbiAgICBjb25zb2xlLmxvZyhg8J+PgSBQbG90YWdlbSBjb25jbHXDrWRhLiBUb3RhbCBlZmV0aXZhbWVudGUgcmV0b3JuYWRvIHBlbG8gc2VydmnDp286ICR7YWN1bXVsYWRvfS8ke2VzcGVyYWRvfS5gKVxyXG4gICAgdHJ5IHtcclxuICAgICAgd2luZG93LnBhcmVudD8ucG9zdE1lc3NhZ2UoeyB0eXBlOiAncGxvdERvbmUnLCB0b3RhbDogYWN1bXVsYWRvLCBleHBlY3RlZDogZXNwZXJhZG8gfSwgJyonKVxyXG4gICAgfSBjYXRjaCB7fVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cclxuICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqaW11TWFwVmlldykgPT4ge1xyXG4gICAgICAgICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgICAgICAgIGppbXVNYXBWaWV3UmVmLmN1cnJlbnQgPSBqaW11TWFwVmlld1xyXG4gICAgICAgICAgICBzZXRNYXBWaWV3UmVhZHkoamltdU1hcFZpZXcpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9