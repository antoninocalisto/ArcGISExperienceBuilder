System.register(["jimu-core","jimu-ui/advanced/setting-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/filter-criterion-otimization-console-origin/src/setting/translations/default.ts":
/*!*****************************************************************************************************************!*\
  !*** ./your-extensions/widgets/filter-criterion-otimization-console-origin/src/setting/translations/default.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'filter-criterion-otimization-console',
    lat: 'Latitude: ',
    lon: 'Longitude: ',
    zoom: 'Zoom',
    latLonWillBeHere: 'Lat/Lon (None - please mouse over map)',
});


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/*!*****************************************************************************************************!*\
  !*** ./your-extensions/widgets/filter-criterion-otimization-console-origin/src/setting/setting.tsx ***!
  \*****************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/filter-criterion-otimization-console-origin/src/setting/translations/default.ts");
/** @jsx jsx */
/**
  Licensing

  Copyright 2022 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
    const onMapWidgetSelected = (useMapWidgetIds) => {
        props.onSettingChange({
            id: props.id,
            useMapWidgetIds: useMapWidgetIds
        });
    };
    // const onP1Change = (evt: React.FormEvent<HTMLInputElement>) => {
    //   props.onSettingChange({
    //     id: props.id,
    //     config: props.config.set('p1', evt.currentTarget.value)
    //   })
    // }
    // const onP2Change = (evt: React.FormEvent<HTMLInputElement>) => {
    //   props.onSettingChange({
    //     id: props.id,
    //     config: props.config.set('p2', evt.currentTarget.value)
    //   })
    // }
    // const onP3Change = (evt: React.FormEvent<HTMLInputElement>) => {
    //   props.onSettingChange({
    //     id: props.id,
    //     config: props.config.set('p3', evt.currentTarget.value)
    //   })
    // }    
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-setting-get-map-coordinates" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { className: "map-selector-section", title: props.intl.formatMessage({
                    id: 'Selecione o mapa base',
                    defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].selectMapWidget
                }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { onSelect: onMapWidgetSelected, useMapWidgetIds: props.useMapWidgetIds }))))));
}
;
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0ZXItY3JpdGVyaW9uLW90aW1pemF0aW9uLWNvbnNvbGUtb3JpZ2luL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtJQUNiLFlBQVksRUFBRSxzQ0FBc0M7SUFDcEQsR0FBRyxFQUFFLFlBQVk7SUFDakIsR0FBRyxFQUFFLGFBQWE7SUFDbEIsSUFBSSxFQUFFLE1BQU07SUFDWixnQkFBZ0IsRUFBRSx3Q0FBd0M7Q0FDM0Q7Ozs7Ozs7Ozs7OztBQ05EOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDMkQ7QUFNakI7QUFFWTtBQUd4RCw2QkFBZSxvQ0FBVSxLQUFzQztJQUM3RCxNQUFNLG1CQUFtQixHQUFHLENBQUMsZUFBeUIsRUFBRSxFQUFFO1FBQ3hELEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDcEIsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ1osZUFBZSxFQUFFLGVBQWU7U0FDakMsQ0FBQztJQUNKLENBQUM7SUFFRCxtRUFBbUU7SUFDbkUsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiw4REFBOEQ7SUFDOUQsT0FBTztJQUNQLElBQUk7SUFFSixtRUFBbUU7SUFDbkUsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiw4REFBOEQ7SUFDOUQsT0FBTztJQUNQLElBQUk7SUFFSixtRUFBbUU7SUFDbkUsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiw4REFBOEQ7SUFDOUQsT0FBTztJQUNQLFFBQVE7SUFFUixPQUFPLENBQ0w7UUFDRSx3REFBSyxTQUFTLEVBQUMsb0NBQW9DO1lBQ2pELCtDQUFDLCtFQUFjLElBQ2IsU0FBUyxFQUFDLHNCQUFzQixFQUNoQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7b0JBQzlCLEVBQUUsRUFBRSx1QkFBdUI7b0JBQzNCLGNBQWMsRUFBRSw2REFBbUIsQ0FBQyxlQUFlO2lCQUNwRCxDQUFDO2dCQUVGLCtDQUFDLDJFQUFVO29CQUNULCtDQUFDLGtGQUFpQixJQUNoQixRQUFRLEVBQUUsbUJBQW1CLEVBQzdCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZSxHQUN0QyxDQUNTLENBQ0UsQ0FDYixDQTZCRixDQUdQO0FBQ0gsQ0FBQztBQUFBLENBQUM7QUFFTSxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maWx0ZXItY3JpdGVyaW9uLW90aW1pemF0aW9uLWNvbnNvbGUtb3JpZ2luL3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdGVyLWNyaXRlcmlvbi1vdGltaXphdGlvbi1jb25zb2xlLW9yaWdpbi9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgX3dpZGdldExhYmVsOiAnZmlsdGVyLWNyaXRlcmlvbi1vdGltaXphdGlvbi1jb25zb2xlJyxcclxuICBsYXQ6ICdMYXRpdHVkZTogJyxcclxuICBsb246ICdMb25naXR1ZGU6ICcsXHJcbiAgem9vbTogJ1pvb20nLFxyXG4gIGxhdExvbldpbGxCZUhlcmU6ICdMYXQvTG9uIChOb25lIC0gcGxlYXNlIG1vdXNlIG92ZXIgbWFwKScsXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG4vKipcclxuICBMaWNlbnNpbmdcclxuXHJcbiAgQ29weXJpZ2h0IDIwMjIgRXNyaVxyXG5cclxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyBZb3VcclxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxyXG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcclxuICBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcblxyXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xyXG4gIExJQ0VOU0UgZmlsZS5cclxuKi9cclxuaW1wb3J0IHsgUmVhY3QsIEZvcm1hdHRlZE1lc3NhZ2UsIGNzcywganN4IH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gJ2ppbXUtZm9yLWJ1aWxkZXInXHJcbmltcG9ydCB7XHJcbiAgTWFwV2lkZ2V0U2VsZWN0b3IsXHJcbiAgU2V0dGluZ1NlY3Rpb24sXHJcbiAgU2V0dGluZ1Jvd1xyXG59IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgZGVmYXVsdEkxOG5NZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4pIHtcclxuICBjb25zdCBvbk1hcFdpZGdldFNlbGVjdGVkID0gKHVzZU1hcFdpZGdldElkczogc3RyaW5nW10pID0+IHtcclxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgdXNlTWFwV2lkZ2V0SWRzOiB1c2VNYXBXaWRnZXRJZHNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBjb25zdCBvblAxQ2hhbmdlID0gKGV2dDogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgLy8gICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gIC8vICAgICBpZDogcHJvcHMuaWQsXHJcbiAgLy8gICAgIGNvbmZpZzogcHJvcHMuY29uZmlnLnNldCgncDEnLCBldnQuY3VycmVudFRhcmdldC52YWx1ZSlcclxuICAvLyAgIH0pXHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb25zdCBvblAyQ2hhbmdlID0gKGV2dDogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgLy8gICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gIC8vICAgICBpZDogcHJvcHMuaWQsXHJcbiAgLy8gICAgIGNvbmZpZzogcHJvcHMuY29uZmlnLnNldCgncDInLCBldnQuY3VycmVudFRhcmdldC52YWx1ZSlcclxuICAvLyAgIH0pXHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb25zdCBvblAzQ2hhbmdlID0gKGV2dDogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgLy8gICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gIC8vICAgICBpZDogcHJvcHMuaWQsXHJcbiAgLy8gICAgIGNvbmZpZzogcHJvcHMuY29uZmlnLnNldCgncDMnLCBldnQuY3VycmVudFRhcmdldC52YWx1ZSlcclxuICAvLyAgIH0pXHJcbiAgLy8gfSAgICBcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc2V0dGluZy1nZXQtbWFwLWNvb3JkaW5hdGVzXCI+XHJcbiAgICAgICAgPFNldHRpbmdTZWN0aW9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYXAtc2VsZWN0b3Itc2VjdGlvblwiXHJcbiAgICAgICAgICB0aXRsZT17cHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgaWQ6ICdTZWxlY2lvbmUgbyBtYXBhIGJhc2UnLFxyXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdEkxOG5NZXNzYWdlcy5zZWxlY3RNYXBXaWRnZXRcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8TWFwV2lkZ2V0U2VsZWN0b3JcclxuICAgICAgICAgICAgICBvblNlbGVjdD17b25NYXBXaWRnZXRTZWxlY3RlZH1cclxuICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e3Byb3BzLnVzZU1hcFdpZGdldElkc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxkaXY+XHJcbiAgICAgICAgPFNldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cInAxXCIgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRJMThuTWVzc2FnZXMucDF9Lz46IFxyXG4gICAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9e3Byb3BzLmNvbmZpZy5wMX0gb25DaGFuZ2U9e29uUDFDaGFuZ2V9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cInAyXCIgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRJMThuTWVzc2FnZXMucDJ9Lz46IFxyXG4gICAgICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXtwcm9wcy5jb25maWcucDJ9IG9uQ2hhbmdlPXtvblAyQ2hhbmdlfS8+ICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj4gICAgICAgICBcclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJwM1wiIGRlZmF1bHRNZXNzYWdlPXtkZWZhdWx0STE4bk1lc3NhZ2VzLnAzfS8+OiBcclxuICAgICAgICAgICAgPGlucHV0IGRlZmF1bHRWYWx1ZT17cHJvcHMuY29uZmlnLnAzfSBvbkNoYW5nZT17b25QM0NoYW5nZX0vPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+ICAgICAgICAgXHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybWF0X3RleHR9PlxyXG4gICAgICAgICAgICAgIHtkZWZhdWx0STE4bk1lc3NhZ2VzLmV4ZW1wbG9fbGlua31cclxuICAgICAgICAgIDwvZGl2PiAgICAgICBcclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG5cclxuICApXHJcbn07XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=