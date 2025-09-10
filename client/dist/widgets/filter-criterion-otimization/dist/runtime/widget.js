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
  !*** ./your-extensions/widgets/filter-criterion-otimization/src/runtime/widget.tsx ***!
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
    const origensPermitidas = [
        'https://localhost:3001',
        'https://portalgis.petrobras.com.br',
        'http://localhost:8080',
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
    // Quando mapa e lista de códigos estiverem prontos, cria os lotes dentro de um GroupLayer
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (mapViewReady && codigosPocos.length > 0) {
            desenharComSimbologiaDoServico(mapViewReady, codigosPocos);
        }
    }, [mapViewReady, codigosPocos]);
    function desenharComSimbologiaDoServico(jmv, codigos) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (jmv.view)
                    jmv.view.extent = extentBrasil;
            }
            catch (_a) { }
            const map = jmv.view.map;
            // Recupera ou cria o GroupLayer "Poços"
            let group = map.layers.find((l) => l.id === 'pocos-group');
            if (!group) {
                group = new _arcgis_core_layers_GroupLayer__WEBPACK_IMPORTED_MODULE_5__["default"]({
                    id: 'pocos-group',
                    title: 'Poços',
                    visibilityMode: 'inherited', // filhos herdam visibilidade do grupo
                    listMode: 'show'
                });
                map.add(group);
            }
            // Remove apenas os filhos (lotes) anteriores criados por este widget
            const toRemove = [];
            group.layers.forEach((l) => {
                var _a;
                if ((_a = l.id) === null || _a === void 0 ? void 0 : _a.startsWith('pocos-lote-'))
                    toRemove.push(l);
            });
            toRemove.forEach((l) => group.remove(l));
            // Descobre se POCO_CD_POCO é string (para quotar corretamente)
            const probe = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_3__["default"]({ url: FEATURE_URL });
            yield probe.load();
            const campo = probe.fields.find((f) => f.name === 'POCO_CD_POCO');
            const precisaAspas = (campo === null || campo === void 0 ? void 0 : campo.type) === 'string';
            // Calcula lotes e aplica limite
            const totalLotes = Math.ceil(codigos.length / CHUNK_SIZE);
            if (totalLotes > MAX_LAYERS) {
                console.warn(`Quantidade de camadas estimada (${totalLotes}) excede o limite (${MAX_LAYERS}). ` +
                    `Aumente CHUNK_SIZE, reduza a lista ou considere backend.`);
            }
            // Progresso (opcional)
            let acumulado = 0;
            const esperado = codigos.length;
            console.log(`▶️ Iniciando plotagem: ${esperado} códigos em até ${Math.min(totalLotes, MAX_LAYERS)} lotes.`);
            // Cria FeatureLayers por lote DENTRO do GroupLayer
            for (let i = 0; i < codigos.length && i / CHUNK_SIZE < MAX_LAYERS; i += CHUNK_SIZE) {
                const idxLote = Math.floor(i / CHUNK_SIZE) + 1;
                const lote = codigos.slice(i, i + CHUNK_SIZE);
                const valores = precisaAspas
                    ? lote.map((v) => `'${String(v).trim()}'`).join(',')
                    : lote.join(',');
                const where = `POCO_CD_POCO IN (${valores})`;
                // 👇 LOG antes de criar/adicionar a camada
                console.log(`🧩 Preparando lote ${idxLote}: ${lote.length} códigos`);
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
                    // 👇 LOG com a contagem retornada para este lote (respeita o where)
                    const count = yield fl.queryFeatureCount({ where });
                    acumulado += count;
                    console.log(`✅ Lote ${idxLote}: +${count} (acumulado ${acumulado}/${esperado})`);
                }
                catch (e) {
                    console.error('Erro ao carregar/contar lote', idxLote, e);
                }
            }
            console.log(`🏁 Plotagem concluída. Total retornado: ${acumulado}/${esperado}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0ZXItY3JpdGVyaW9uLW90aW1pemF0aW9uL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQsZ0RBQWdEO0FBQ1U7QUFDSztBQUluQjtBQUNlO0FBQ1Y7QUFDTTtBQUV2RCw4QkFBOEI7QUFDOUIsbUVBQWtCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztJQUNuQyxJQUFJLEVBQUUsc0NBQXNDO0lBQzVDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2pCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxtQ0FDdEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEtBQzlCLENBQUMsRUFBRSxNQUFNLEdBQ1Y7SUFDSCxDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUNmLGtHQUFrRztBQUVwRyxNQUFN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LFdBQVc7b0JBQ3BDLGVBQWUsQ0FBQyxXQUFXLENBQUM7Z0JBQzlCLENBQUM7WUFDSCxDQUFDLEdBQ0QsQ0FDRSxDQUNQO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2NvbmZpZ1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9FeHRlbnRcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvR3JvdXBMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdGVyLWNyaXRlcmlvbi1vdGltaXphdGlvbi9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfY29uZmlnX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9nZW9tZXRyeV9FeHRlbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2xheWVyc19Hcm91cExheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLy8gc3JjL3dpZGdldHMvc2V1LXdpZGdldC9zcmMvcnVudGltZS93aWRnZXQudHN4XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7IEFsbFdpZGdldFByb3BzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmltcG9ydCBlc3JpQ29uZmlnIGZyb20gJ0BhcmNnaXMvY29yZS9jb25maWcnXHJcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnQGFyY2dpcy9jb3JlL2xheWVycy9GZWF0dXJlTGF5ZXInXHJcbmltcG9ydCBFeHRlbnQgZnJvbSAnQGFyY2dpcy9jb3JlL2dlb21ldHJ5L0V4dGVudCdcclxuaW1wb3J0IEdyb3VwTGF5ZXIgZnJvbSAnQGFyY2dpcy9jb3JlL2xheWVycy9Hcm91cExheWVyJ1xyXG5cclxuLy8gSW50ZXJjZXB0b3I6IGdhcmFudGUgZj1qc29uXHJcbmVzcmlDb25maWcucmVxdWVzdC5pbnRlcmNlcHRvcnMucHVzaCh7XHJcbiAgdXJsczogL1BvY29zX1NlbV9TaW1ib2xvc1xcL0ZlYXR1cmVTZXJ2ZXJcXC8wLyxcclxuICBiZWZvcmU6IChwYXJhbXMpID0+IHtcclxuICAgIHBhcmFtcy5yZXF1ZXN0T3B0aW9ucy5xdWVyeSA9IHtcclxuICAgICAgLi4ucGFyYW1zLnJlcXVlc3RPcHRpb25zLnF1ZXJ5LFxyXG4gICAgICBmOiAnanNvbidcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBGRUFUVVJFX1VSTCA9XHJcbiAgJ2h0dHBzOi8vYmFzZWdpcy5wZXRyb2JyYXMuY29tLmJyL2FyY2dpcy9yZXN0L3NlcnZpY2VzL0VYUExPUkEvUG9jb3NfU2VtX1NpbWJvbG9zL0ZlYXR1cmVTZXJ2ZXIvMCdcclxuXHJcbmNvbnN0IENIVU5LX1NJWkUgPSA2MDBcclxuY29uc3QgTUFYX0xBWUVSUyA9IDQwXHJcblxyXG5jb25zdCBleHRlbnRCcmFzaWwgPSBuZXcgRXh0ZW50KHtcclxuICB4bWluOiAtNzQuMCxcclxuICB5bWluOiAtMzQuMCxcclxuICB4bWF4OiAtMzQuMCxcclxuICB5bWF4OiA1LjAsXHJcbiAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XHJcbiAgY29uc3QgamltdU1hcFZpZXdSZWYgPSB1c2VSZWY8SmltdU1hcFZpZXc+KClcclxuICBjb25zdCBbbWFwVmlld1JlYWR5LCBzZXRNYXBWaWV3UmVhZHldID0gdXNlU3RhdGU8SmltdU1hcFZpZXcgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFtjb2RpZ29zUG9jb3MsIHNldENvZGlnb3NQb2Nvc10gPSB1c2VTdGF0ZTwobnVtYmVyIHwgc3RyaW5nKVtdPihbXSlcclxuXHJcbiAgY29uc3Qgb3JpZ2Vuc1Blcm1pdGlkYXMgPSBbXHJcbiAgICAnaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMScsXHJcbiAgICAnaHR0cHM6Ly9wb3J0YWxnaXMucGV0cm9icmFzLmNvbS5icicsXHJcbiAgICAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJywgXHJcbiAgICBcclxuICBdXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKCFvcmlnZW5zUGVybWl0aWRhcy5pbmNsdWRlcyhldmVudC5vcmlnaW4pKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdPcmlnZW0gbsOjbyBwZXJtaXRpZGE6JywgZXZlbnQub3JpZ2luKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHsgdHlwZSwgZGF0YSB9ID0gZXZlbnQuZGF0YSB8fCB7fVxyXG4gICAgICBpZiAodHlwZSA9PT0gJ2NvZGlnb3NQb2NvcycgJiYgQXJyYXkuaXNBcnJheShkYXRhKSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZXRDb2RpZ29zUG9jb3MoZGF0YSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVyKVxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlcilcclxuICB9LCBbXSlcclxuXHJcbiAgLy8gSW5mb3JtYSBhbyBwYWkgcXVlIG8gd2lkZ2V0IGVzdMOhIHByb250b1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobWFwVmlld1JlYWR5KSB7XHJcbiAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoeyB0eXBlOiAnd2lkZ2V0UmVhZHknIH0sICcqJylcclxuICAgIH1cclxuICB9LCBbbWFwVmlld1JlYWR5XSlcclxuXHJcbiAgLy8gUXVhbmRvIG1hcGEgZSBsaXN0YSBkZSBjw7NkaWdvcyBlc3RpdmVyZW0gcHJvbnRvcywgY3JpYSBvcyBsb3RlcyBkZW50cm8gZGUgdW0gR3JvdXBMYXllclxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobWFwVmlld1JlYWR5ICYmIGNvZGlnb3NQb2Nvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGRlc2VuaGFyQ29tU2ltYm9sb2dpYURvU2VydmljbyhtYXBWaWV3UmVhZHksIGNvZGlnb3NQb2NvcylcclxuICAgIH1cclxuICB9LCBbbWFwVmlld1JlYWR5LCBjb2RpZ29zUG9jb3NdKVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBkZXNlbmhhckNvbVNpbWJvbG9naWFEb1NlcnZpY28oXHJcbiAgICBqbXY6IEppbXVNYXBWaWV3LFxyXG4gICAgY29kaWdvczogKG51bWJlciB8IHN0cmluZylbXVxyXG4gICkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGptdi52aWV3KSBqbXYudmlldy5leHRlbnQgPSBleHRlbnRCcmFzaWxcclxuICAgIH0gY2F0Y2gge31cclxuXHJcbiAgICBjb25zdCBtYXAgPSBqbXYudmlldy5tYXBcclxuXHJcbiAgICAvLyBSZWN1cGVyYSBvdSBjcmlhIG8gR3JvdXBMYXllciBcIlBvw6dvc1wiXHJcbiAgICBsZXQgZ3JvdXAgPSBtYXAubGF5ZXJzLmZpbmQoKGw6IGFueSkgPT4gbC5pZCA9PT0gJ3BvY29zLWdyb3VwJykgYXMgR3JvdXBMYXllclxyXG4gICAgaWYgKCFncm91cCkge1xyXG4gICAgICBncm91cCA9IG5ldyBHcm91cExheWVyKHtcclxuICAgICAgICBpZDogJ3BvY29zLWdyb3VwJyxcclxuICAgICAgICB0aXRsZTogJ1Bvw6dvcycsXHJcbiAgICAgICAgdmlzaWJpbGl0eU1vZGU6ICdpbmhlcml0ZWQnLCAvLyBmaWxob3MgaGVyZGFtIHZpc2liaWxpZGFkZSBkbyBncnVwb1xyXG4gICAgICAgIGxpc3RNb2RlOiAnc2hvdydcclxuICAgICAgfSlcclxuICAgICAgbWFwLmFkZChncm91cClcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgYXBlbmFzIG9zIGZpbGhvcyAobG90ZXMpIGFudGVyaW9yZXMgY3JpYWRvcyBwb3IgZXN0ZSB3aWRnZXRcclxuICAgIGNvbnN0IHRvUmVtb3ZlOiBhbnlbXSA9IFtdXHJcbiAgICBncm91cC5sYXllcnMuZm9yRWFjaCgobDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChsLmlkPy5zdGFydHNXaXRoKCdwb2Nvcy1sb3RlLScpKSB0b1JlbW92ZS5wdXNoKGwpXHJcbiAgICB9KVxyXG4gICAgdG9SZW1vdmUuZm9yRWFjaCgobCkgPT4gZ3JvdXAucmVtb3ZlKGwpKVxyXG5cclxuICAgIC8vIERlc2NvYnJlIHNlIFBPQ09fQ0RfUE9DTyDDqSBzdHJpbmcgKHBhcmEgcXVvdGFyIGNvcnJldGFtZW50ZSlcclxuICAgIGNvbnN0IHByb2JlID0gbmV3IEZlYXR1cmVMYXllcih7IHVybDogRkVBVFVSRV9VUkwgfSlcclxuICAgIGF3YWl0IHByb2JlLmxvYWQoKVxyXG4gICAgY29uc3QgY2FtcG8gPSBwcm9iZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAnUE9DT19DRF9QT0NPJylcclxuICAgIGNvbnN0IHByZWNpc2FBc3BhcyA9IGNhbXBvPy50eXBlID09PSAnc3RyaW5nJ1xyXG5cclxuICAgIC8vIENhbGN1bGEgbG90ZXMgZSBhcGxpY2EgbGltaXRlXHJcbiAgICBjb25zdCB0b3RhbExvdGVzID0gTWF0aC5jZWlsKGNvZGlnb3MubGVuZ3RoIC8gQ0hVTktfU0laRSlcclxuICAgIGlmICh0b3RhbExvdGVzID4gTUFYX0xBWUVSUykge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYFF1YW50aWRhZGUgZGUgY2FtYWRhcyBlc3RpbWFkYSAoJHt0b3RhbExvdGVzfSkgZXhjZWRlIG8gbGltaXRlICgke01BWF9MQVlFUlN9KS4gYCArXHJcbiAgICAgICAgICBgQXVtZW50ZSBDSFVOS19TSVpFLCByZWR1emEgYSBsaXN0YSBvdSBjb25zaWRlcmUgYmFja2VuZC5gXHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9ncmVzc28gKG9wY2lvbmFsKVxyXG4gICAgbGV0IGFjdW11bGFkbyA9IDBcclxuICAgIGNvbnN0IGVzcGVyYWRvID0gY29kaWdvcy5sZW5ndGhcclxuICAgIGNvbnNvbGUubG9nKGDilrbvuI8gSW5pY2lhbmRvIHBsb3RhZ2VtOiAke2VzcGVyYWRvfSBjw7NkaWdvcyBlbSBhdMOpICR7TWF0aC5taW4odG90YWxMb3RlcywgTUFYX0xBWUVSUyl9IGxvdGVzLmApXHJcblxyXG4gICAgLy8gQ3JpYSBGZWF0dXJlTGF5ZXJzIHBvciBsb3RlIERFTlRSTyBkbyBHcm91cExheWVyXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvZGlnb3MubGVuZ3RoICYmIGkgLyBDSFVOS19TSVpFIDwgTUFYX0xBWUVSUzsgaSArPSBDSFVOS19TSVpFKSB7XHJcbiAgICAgIGNvbnN0IGlkeExvdGUgPSBNYXRoLmZsb29yKGkgLyBDSFVOS19TSVpFKSArIDFcclxuICAgICAgY29uc3QgbG90ZSA9IGNvZGlnb3Muc2xpY2UoaSwgaSArIENIVU5LX1NJWkUpXHJcbiAgICAgIGNvbnN0IHZhbG9yZXMgPSBwcmVjaXNhQXNwYXNcclxuICAgICAgICA/IGxvdGUubWFwKCh2KSA9PiBgJyR7U3RyaW5nKHYpLnRyaW0oKX0nYCkuam9pbignLCcpXHJcbiAgICAgICAgOiBsb3RlLmpvaW4oJywnKVxyXG4gICAgICBjb25zdCB3aGVyZSA9IGBQT0NPX0NEX1BPQ08gSU4gKCR7dmFsb3Jlc30pYFxyXG5cclxuICAgICAgLy8g8J+RhyBMT0cgYW50ZXMgZGUgY3JpYXIvYWRpY2lvbmFyIGEgY2FtYWRhXHJcbiAgICAgIGNvbnNvbGUubG9nKGDwn6epIFByZXBhcmFuZG8gbG90ZSAke2lkeExvdGV9OiAke2xvdGUubGVuZ3RofSBjw7NkaWdvc2ApXHJcblxyXG4gICAgICBjb25zdCBmbCA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgIGlkOiBgcG9jb3MtbG90ZS0ke1N0cmluZyhpZHhMb3RlKS5wYWRTdGFydCgzLCAnMCcpfWAsXHJcbiAgICAgICAgdXJsOiBGRUFUVVJFX1VSTCxcclxuICAgICAgICB0aXRsZTogYFBvw6dvcyAobG90ZSAke2lkeExvdGV9KWAsXHJcbiAgICAgICAgZGVmaW5pdGlvbkV4cHJlc3Npb246IHdoZXJlLFxyXG4gICAgICAgIG91dEZpZWxkczogWydQT0NPX0NEX1BPQ08nXSxcclxuICAgICAgICBmZWF0dXJlUmVkdWN0aW9uOiBudWxsLFxyXG4gICAgICAgIGxpc3RNb2RlOiAnaGlkZSdcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZmwubG9hZCgpXHJcbiAgICAgICAgZ3JvdXAuYWRkKGZsKVxyXG5cclxuICAgICAgICAvLyDwn5GHIExPRyBjb20gYSBjb250YWdlbSByZXRvcm5hZGEgcGFyYSBlc3RlIGxvdGUgKHJlc3BlaXRhIG8gd2hlcmUpXHJcbiAgICAgICAgY29uc3QgY291bnQgPSBhd2FpdCBmbC5xdWVyeUZlYXR1cmVDb3VudCh7IHdoZXJlIH0pXHJcbiAgICAgICAgYWN1bXVsYWRvICs9IGNvdW50XHJcbiAgICAgICAgY29uc29sZS5sb2coYOKchSBMb3RlICR7aWR4TG90ZX06ICske2NvdW50fSAoYWN1bXVsYWRvICR7YWN1bXVsYWRvfS8ke2VzcGVyYWRvfSlgKVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjYXJyZWdhci9jb250YXIgbG90ZScsIGlkeExvdGUsIGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhg8J+PgSBQbG90YWdlbSBjb25jbHXDrWRhLiBUb3RhbCByZXRvcm5hZG86ICR7YWN1bXVsYWRvfS8ke2VzcGVyYWRvfWApXHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cclxuICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqaW11TWFwVmlldykgPT4ge1xyXG4gICAgICAgICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgICAgICAgIGppbXVNYXBWaWV3UmVmLmN1cnJlbnQgPSBqaW11TWFwVmlld1xyXG4gICAgICAgICAgICBzZXRNYXBWaWV3UmVhZHkoamltdU1hcFZpZXcpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9