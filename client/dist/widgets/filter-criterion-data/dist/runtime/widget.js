System.register(["jimu-core/react","jimu-arcgis","esri/layers/FeatureLayer","esri/geometry/Extent","esri/config"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_Extent__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_config__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_Extent__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_config__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_config__[key] = module[key];
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
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/filter-criterion-data/src/runtime/widget.tsx ***!
  \******************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @arcgis/core/layers/FeatureLayer */ "@arcgis/core/layers/FeatureLayer");
/* harmony import */ var _arcgis_core_geometry_Extent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @arcgis/core/geometry/Extent */ "@arcgis/core/geometry/Extent");
/* harmony import */ var _arcgis_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @arcgis/core/config */ "@arcgis/core/config");





function Widget() {
    const jimuMapViewRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    // Força resposta JSON
    _arcgis_core_config__WEBPACK_IMPORTED_MODULE_4__["default"].request.interceptors.push({
        urls: /Pocos_Sem_Simbolos\/FeatureServer\/0/,
        before: (params) => {
            params.requestOptions.query = Object.assign(Object.assign({}, params.requestOptions.query), { f: 'json' });
        }
    });
    const extentBrasil = new _arcgis_core_geometry_Extent__WEBPACK_IMPORTED_MODULE_3__["default"]({
        xmin: -90.0,
        ymin: -40.0,
        xmax: -20.0,
        ymax: 15.0,
        spatialReference: { wkid: 4326 }
    });
    const adicionarCamadaPocos = (jimuMapView) => {
        const codigos = [4523, 1010, 17696, 4437, 4327, 4230, 2014, 1592, 8830, 7944, 1340];
        const expression = `POCO_CD_POCO IN (${codigos.join(',')})`;
        const camada = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_2__["default"]({
            url: 'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Pocos_Sem_Simbolos/FeatureServer/0',
            definitionExpression: expression,
            title: 'Poços',
            outFields: ['*'],
            visible: true,
            featureReduction: null
        });
        jimuMapView.view.map.add(camada);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: { height: '100%', width: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: 'widget_1', onActiveViewChange: (jimuMapView) => {
                jimuMapViewRef.current = jimuMapView;
                // ✅ Vai para o Brasil antes de carregar os dados
                jimuMapView.view.goTo(extentBrasil);
                adicionarCamadaPocos(jimuMapView);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0ZXItY3JpdGVyaW9uLWRhdGEvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZDtBQUMwQjtBQUNKO0FBQ1Y7QUFDTDtBQUU3QixTQUFTLE1BQU07SUFDNUIsTUFBTSxjQUFjLEdBQUcsNkNBQU0sRUFBZTtJQUU1QyxzQkFBc0I7SUFDdEIsbUVBQWtCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztRQUNuQyxJQUFJLEVBQUUsc0NBQXNDO1FBQzVDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxtQ0FDdEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEtBQzlCLENBQUMsRUFBRSxNQUFNLEdBQ1Y7UUFDSCxDQUFDO0tBQ0YsQ0FBQztJQUVGLE1BQU0sWUFBWSxHQUFHLElBQUksb0VBQU0sQ0FBQztRQUM3QixJQUFJLEVBQUUsQ0FBQyxJQUFJO1FBQ1osSUFBSSxFQUFFLENBQUMsSUFBSTtRQUNYLElBQUksRUFBRSxDQUFDLElBQUk7UUFDWCxJQUFJLEVBQUUsSUFBSTtRQUNWLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtLQUNqQyxDQUFDO0lBRUYsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLFdBQXdCLEVBQUUsRUFBRTtRQUN4RCxNQUFNLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7UUFDbkYsTUFBTSxVQUFVLEdBQUcsb0JBQW9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUc7UUFFM0QsTUFBTSxNQUFNLEdBQUcsSUFBSSx3RUFBWSxDQUFDO1lBQzlCLEdBQUcsRUFBRSxrR0FBa0c7WUFDdkcsb0JBQW9CLEVBQUUsVUFBVTtZQUNoQyxLQUFLLEVBQUUsT0FBTztZQUNkLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNoQixPQUFPLEVBQUUsSUFBSTtZQUNiLGdCQUFnQixFQUFFLElBQUk7U0FDdkIsQ0FBQztRQUVGLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQztJQUVELE9BQU8sQ0FDTCxxRUFBSyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7UUFDM0MsNERBQUMsNkRBQW9CLElBQ25CLGNBQWMsRUFBRSxVQUFVLEVBQzFCLGtCQUFrQixFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ2xDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsV0FBVztnQkFFcEMsaURBQWlEO2dCQUNqRCxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBRW5DLG9CQUFvQixDQUFDLFdBQVcsQ0FBQztZQUNuQyxDQUFDLEdBQ0QsQ0FDRSxDQUNQO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2NvbmZpZ1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9FeHRlbnRcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdGVyLWNyaXRlcmlvbi1kYXRhL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9jb25maWdfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2dlb21ldHJ5X0V4dGVudF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfbGF5ZXJzX0ZlYXR1cmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnQGFyY2dpcy9jb3JlL2xheWVycy9GZWF0dXJlTGF5ZXInXHJcbmltcG9ydCBFeHRlbnQgZnJvbSAnQGFyY2dpcy9jb3JlL2dlb21ldHJ5L0V4dGVudCdcclxuaW1wb3J0IGVzcmlDb25maWcgZnJvbSAnQGFyY2dpcy9jb3JlL2NvbmZpZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldCgpIHtcclxuICBjb25zdCBqaW11TWFwVmlld1JlZiA9IHVzZVJlZjxKaW11TWFwVmlldz4oKVxyXG5cclxuICAvLyBGb3LDp2EgcmVzcG9zdGEgSlNPTlxyXG4gIGVzcmlDb25maWcucmVxdWVzdC5pbnRlcmNlcHRvcnMucHVzaCh7XHJcbiAgICB1cmxzOiAvUG9jb3NfU2VtX1NpbWJvbG9zXFwvRmVhdHVyZVNlcnZlclxcLzAvLFxyXG4gICAgYmVmb3JlOiAocGFyYW1zKSA9PiB7XHJcbiAgICAgIHBhcmFtcy5yZXF1ZXN0T3B0aW9ucy5xdWVyeSA9IHtcclxuICAgICAgICAuLi5wYXJhbXMucmVxdWVzdE9wdGlvbnMucXVlcnksXHJcbiAgICAgICAgZjogJ2pzb24nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBleHRlbnRCcmFzaWwgPSBuZXcgRXh0ZW50KHtcclxuICAgICB4bWluOiAtOTAuMCxcclxuICAgIHltaW46IC00MC4wLFxyXG4gICAgeG1heDogLTIwLjAsXHJcbiAgICB5bWF4OiAxNS4wLFxyXG4gICAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH1cclxuICB9KVxyXG5cclxuICBjb25zdCBhZGljaW9uYXJDYW1hZGFQb2NvcyA9IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcpID0+IHtcclxuICAgIGNvbnN0IGNvZGlnb3MgPSBbNDUyMywgMTAxMCwgMTc2OTYsIDQ0MzcsIDQzMjcsIDQyMzAsIDIwMTQsIDE1OTIsIDg4MzAsIDc5NDQsIDEzNDBdXHJcbiAgICBjb25zdCBleHByZXNzaW9uID0gYFBPQ09fQ0RfUE9DTyBJTiAoJHtjb2RpZ29zLmpvaW4oJywnKX0pYFxyXG5cclxuICAgIGNvbnN0IGNhbWFkYSA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICB1cmw6ICdodHRwczovL2Jhc2VnaXMucGV0cm9icmFzLmNvbS5ici9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9FWFBMT1JBL1BvY29zX1NlbV9TaW1ib2xvcy9GZWF0dXJlU2VydmVyLzAnLFxyXG4gICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbjogZXhwcmVzc2lvbixcclxuICAgICAgdGl0bGU6ICdQb8Onb3MnLFxyXG4gICAgICBvdXRGaWVsZHM6IFsnKiddLFxyXG4gICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICBmZWF0dXJlUmVkdWN0aW9uOiBudWxsXHJcbiAgICB9KVxyXG5cclxuICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChjYW1hZGEpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9eyd3aWRnZXRfMSd9XHJcbiAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXsoamltdU1hcFZpZXcpID0+IHtcclxuICAgICAgICAgIGppbXVNYXBWaWV3UmVmLmN1cnJlbnQgPSBqaW11TWFwVmlld1xyXG5cclxuICAgICAgICAgIC8vIOKchSBWYWkgcGFyYSBvIEJyYXNpbCBhbnRlcyBkZSBjYXJyZWdhciBvcyBkYWRvc1xyXG4gICAgICAgICAgamltdU1hcFZpZXcudmlldy5nb1RvKGV4dGVudEJyYXNpbClcclxuXHJcbiAgICAgICAgICBhZGljaW9uYXJDYW1hZGFQb2NvcyhqaW11TWFwVmlldylcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=