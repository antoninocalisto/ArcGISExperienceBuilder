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
/*!*********************************************************************************!*\
  !*** ./your-extensions/widgets/filter-criterion-data-v3/src/runtime/widget.tsx ***!
  \*********************************************************************************/
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





function Widget(props) {
    const jimuMapViewRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
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
            outFields: ['*'],
            visible: true,
            featureReduction: null
        });
        jimuMapView.view.map.add(camada);
    };
    const mapId = props.config.mapWidgetId;
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: { height: '100%', width: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: "widget_1", onActiveViewChange: (jimuMapView) => {
                jimuMapViewRef.current = jimuMapView;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0ZXItY3JpdGVyaW9uLWRhdGEtdjMvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZDtBQUMwQjtBQUNKO0FBQ1Y7QUFDTDtBQUk3QixTQUFTLE1BQU0sQ0FBQyxLQUE2QjtJQUMxRCxNQUFNLGNBQWMsR0FBRyw2Q0FBTSxFQUFlO0lBRTVDLG1FQUFrQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDbkMsSUFBSSxFQUFFLHNDQUFzQztRQUM1QyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNqQixNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssbUNBQ3RCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxLQUM5QixDQUFDLEVBQUUsTUFBTSxHQUNWO1FBQ0gsQ0FBQztLQUNGLENBQUM7SUFFRixNQUFNLFlBQVksR0FBRyxJQUFJLG9FQUFNLENBQUM7UUFDOUIsSUFBSSxFQUFFLENBQUMsSUFBSTtRQUNYLElBQUksRUFBRSxDQUFDLElBQUk7UUFDWCxJQUFJLEVBQUUsQ0FBQyxJQUFJO1FBQ1gsSUFBSSxFQUFFLElBQUk7UUFDVixnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7S0FDakMsQ0FBQztJQUVGLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxXQUF3QixFQUFFLEVBQUU7UUFDeEQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBQ25GLE1BQU0sVUFBVSxHQUFHLG9CQUFvQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHO1FBRTNELE1BQU0sTUFBTSxHQUFHLElBQUksd0VBQVksQ0FBQztZQUM5QixHQUFHLEVBQUUsa0dBQWtHO1lBQ3ZHLG9CQUFvQixFQUFFLFVBQVU7WUFDaEMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsZ0JBQWdCLEVBQUUsSUFBSTtTQUN2QixDQUFDO1FBRUYsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNsQyxDQUFDO0lBRUQsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXO0lBRXRDLE9BQU8sQ0FDTCxxRUFBSyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7UUFDdkMsNERBQUMsNkRBQW9CLElBQ25CLGNBQWMsRUFBRSxVQUFVLEVBQzFCLGtCQUFrQixFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ2xDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsV0FBVztnQkFDcEMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNuQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUM7WUFDbkMsQ0FBQyxHQUNELENBQ0YsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9jb25maWdcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvRXh0ZW50XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2ZpbHRlci1jcml0ZXJpb24tZGF0YS12My9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfY29uZmlnX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9nZW9tZXRyeV9FeHRlbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ0BhcmNnaXMvY29yZS9sYXllcnMvRmVhdHVyZUxheWVyJ1xyXG5pbXBvcnQgRXh0ZW50IGZyb20gJ0BhcmNnaXMvY29yZS9nZW9tZXRyeS9FeHRlbnQnXHJcbmltcG9ydCBlc3JpQ29uZmlnIGZyb20gJ0BhcmNnaXMvY29yZS9jb25maWcnXHJcbmltcG9ydCB7IEFsbFdpZGdldFByb3BzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQocHJvcHM6IEFsbFdpZGdldFByb3BzPENvbmZpZz4pIHtcclxuICBjb25zdCBqaW11TWFwVmlld1JlZiA9IHVzZVJlZjxKaW11TWFwVmlldz4oKVxyXG5cclxuICBlc3JpQ29uZmlnLnJlcXVlc3QuaW50ZXJjZXB0b3JzLnB1c2goe1xyXG4gICAgdXJsczogL1BvY29zX1NlbV9TaW1ib2xvc1xcL0ZlYXR1cmVTZXJ2ZXJcXC8wLyxcclxuICAgIGJlZm9yZTogKHBhcmFtcykgPT4ge1xyXG4gICAgICBwYXJhbXMucmVxdWVzdE9wdGlvbnMucXVlcnkgPSB7XHJcbiAgICAgICAgLi4ucGFyYW1zLnJlcXVlc3RPcHRpb25zLnF1ZXJ5LFxyXG4gICAgICAgIGY6ICdqc29uJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZXh0ZW50QnJhc2lsID0gbmV3IEV4dGVudCh7XHJcbiAgICB4bWluOiAtOTAuMCxcclxuICAgIHltaW46IC00MC4wLFxyXG4gICAgeG1heDogLTIwLjAsXHJcbiAgICB5bWF4OiAxNS4wLFxyXG4gICAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH1cclxuICB9KVxyXG5cclxuICBjb25zdCBhZGljaW9uYXJDYW1hZGFQb2NvcyA9IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcpID0+IHtcclxuICAgIGNvbnN0IGNvZGlnb3MgPSBbNDUyMywgMTAxMCwgMTc2OTYsIDQ0MzcsIDQzMjcsIDQyMzAsIDIwMTQsIDE1OTIsIDg4MzAsIDc5NDQsIDEzNDBdXHJcbiAgICBjb25zdCBleHByZXNzaW9uID0gYFBPQ09fQ0RfUE9DTyBJTiAoJHtjb2RpZ29zLmpvaW4oJywnKX0pYFxyXG5cclxuICAgIGNvbnN0IGNhbWFkYSA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICB1cmw6ICdodHRwczovL2Jhc2VnaXMucGV0cm9icmFzLmNvbS5ici9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9FWFBMT1JBL1BvY29zX1NlbV9TaW1ib2xvcy9GZWF0dXJlU2VydmVyLzAnLFxyXG4gICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbjogZXhwcmVzc2lvbixcclxuICAgICAgb3V0RmllbGRzOiBbJyonXSxcclxuICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgZmVhdHVyZVJlZHVjdGlvbjogbnVsbFxyXG4gICAgfSlcclxuXHJcbiAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5hZGQoY2FtYWRhKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFwSWQgPSBwcm9wcy5jb25maWcubWFwV2lkZ2V0SWRcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e1wid2lkZ2V0XzFcIn1cclxuICAgICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXsoamltdU1hcFZpZXcpID0+IHtcclxuICAgICAgICAgICAgICBqaW11TWFwVmlld1JlZi5jdXJyZW50ID0gamltdU1hcFZpZXdcclxuICAgICAgICAgICAgICBqaW11TWFwVmlldy52aWV3LmdvVG8oZXh0ZW50QnJhc2lsKVxyXG4gICAgICAgICAgICAgIGFkaWNpb25hckNhbWFkYVBvY29zKGppbXVNYXBWaWV3KVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9