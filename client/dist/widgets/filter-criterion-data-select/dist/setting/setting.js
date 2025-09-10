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

/***/ "./your-extensions/widgets/filter-criterion-data-select/src/setting/translations/default.ts":
/*!**************************************************************************************************!*\
  !*** ./your-extensions/widgets/filter-criterion-data-select/src/setting/translations/default.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'filter-criterion-data-select',
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
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/filter-criterion-data-select/src/setting/setting.tsx ***!
  \**************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/filter-criterion-data-select/src/setting/translations/default.ts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0ZXItY3JpdGVyaW9uLWRhdGEtc2VsZWN0L2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtJQUNiLFlBQVksRUFBRSw4QkFBOEI7SUFDNUMsR0FBRyxFQUFFLFlBQVk7SUFDakIsR0FBRyxFQUFFLGFBQWE7SUFDbEIsSUFBSSxFQUFFLE1BQU07SUFDWixnQkFBZ0IsRUFBRSx3Q0FBd0M7Q0FDM0Q7Ozs7Ozs7Ozs7OztBQ05EOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDMkQ7QUFNakI7QUFFWTtBQUd4RCw2QkFBZSxvQ0FBVSxLQUFzQztJQUM3RCxNQUFNLG1CQUFtQixHQUFHLENBQUMsZUFBeUIsRUFBRSxFQUFFO1FBQ3hELEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDcEIsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ1osZUFBZSxFQUFFLGVBQWU7U0FDakMsQ0FBQztJQUNKLENBQUM7SUFFRCxtRUFBbUU7SUFDbkUsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiw4REFBOEQ7SUFDOUQsT0FBTztJQUNQLElBQUk7SUFFSixtRUFBbUU7SUFDbkUsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiw4REFBOEQ7SUFDOUQsT0FBTztJQUNQLElBQUk7SUFFSixtRUFBbUU7SUFDbkUsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiw4REFBOEQ7SUFDOUQsT0FBTztJQUNQLFFBQVE7SUFFUixPQUFPLENBQ0w7UUFDRSx3REFBSyxTQUFTLEVBQUMsb0NBQW9DO1lBQ2pELCtDQUFDLCtFQUFjLElBQ2IsU0FBUyxFQUFDLHNCQUFzQixFQUNoQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7b0JBQzlCLEVBQUUsRUFBRSx1QkFBdUI7b0JBQzNCLGNBQWMsRUFBRSw2REFBbUIsQ0FBQyxlQUFlO2lCQUNwRCxDQUFDO2dCQUVGLCtDQUFDLDJFQUFVO29CQUNULCtDQUFDLGtGQUFpQixJQUNoQixRQUFRLEVBQUUsbUJBQW1CLEVBQzdCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZSxHQUN0QyxDQUNTLENBQ0UsQ0FDYixDQTZCRixDQUdQO0FBQ0gsQ0FBQztBQUFBLENBQUM7QUFFTSxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maWx0ZXItY3JpdGVyaW9uLWRhdGEtc2VsZWN0L3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdGVyLWNyaXRlcmlvbi1kYXRhLXNlbGVjdC9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgX3dpZGdldExhYmVsOiAnZmlsdGVyLWNyaXRlcmlvbi1kYXRhLXNlbGVjdCcsXHJcbiAgbGF0OiAnTGF0aXR1ZGU6ICcsXHJcbiAgbG9uOiAnTG9uZ2l0dWRlOiAnLFxyXG4gIHpvb206ICdab29tJyxcclxuICBsYXRMb25XaWxsQmVIZXJlOiAnTGF0L0xvbiAoTm9uZSAtIHBsZWFzZSBtb3VzZSBvdmVyIG1hcCknLFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuLyoqXHJcbiAgTGljZW5zaW5nXHJcblxyXG4gIENvcHlyaWdodCAyMDIyIEVzcmlcclxuXHJcbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XHJcbiAgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXlcclxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yXHJcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG5cclxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcclxuICBMSUNFTlNFIGZpbGUuXHJcbiovXHJcbmltcG9ydCB7IFJlYWN0LCBGb3JtYXR0ZWRNZXNzYWdlLCBjc3MsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xyXG5pbXBvcnQge1xyXG4gIE1hcFdpZGdldFNlbGVjdG9yLFxyXG4gIFNldHRpbmdTZWN0aW9uLFxyXG4gIFNldHRpbmdSb3dcclxufSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IGRlZmF1bHRJMThuTWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzOiBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+KSB7XHJcbiAgY29uc3Qgb25NYXBXaWRnZXRTZWxlY3RlZCA9ICh1c2VNYXBXaWRnZXRJZHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogcHJvcHMuaWQsXHJcbiAgICAgIHVzZU1hcFdpZGdldElkczogdXNlTWFwV2lkZ2V0SWRzXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gY29uc3Qgb25QMUNoYW5nZSA9IChldnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gIC8vICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAvLyAgICAgaWQ6IHByb3BzLmlkLFxyXG4gIC8vICAgICBjb25maWc6IHByb3BzLmNvbmZpZy5zZXQoJ3AxJywgZXZ0LmN1cnJlbnRUYXJnZXQudmFsdWUpXHJcbiAgLy8gICB9KVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29uc3Qgb25QMkNoYW5nZSA9IChldnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gIC8vICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAvLyAgICAgaWQ6IHByb3BzLmlkLFxyXG4gIC8vICAgICBjb25maWc6IHByb3BzLmNvbmZpZy5zZXQoJ3AyJywgZXZ0LmN1cnJlbnRUYXJnZXQudmFsdWUpXHJcbiAgLy8gICB9KVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29uc3Qgb25QM0NoYW5nZSA9IChldnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gIC8vICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAvLyAgICAgaWQ6IHByb3BzLmlkLFxyXG4gIC8vICAgICBjb25maWc6IHByb3BzLmNvbmZpZy5zZXQoJ3AzJywgZXZ0LmN1cnJlbnRUYXJnZXQudmFsdWUpXHJcbiAgLy8gICB9KVxyXG4gIC8vIH0gICAgXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNldHRpbmctZ2V0LW1hcC1jb29yZGluYXRlc1wiPlxyXG4gICAgICAgIDxTZXR0aW5nU2VjdGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWFwLXNlbGVjdG9yLXNlY3Rpb25cIlxyXG4gICAgICAgICAgdGl0bGU9e3Byb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGlkOiAnU2VsZWNpb25lIG8gbWFwYSBiYXNlJyxcclxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRJMThuTWVzc2FnZXMuc2VsZWN0TWFwV2lkZ2V0XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgb25TZWxlY3Q9e29uTWFwV2lkZ2V0U2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzPXtwcm9wcy51c2VNYXBXaWRnZXRJZHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8ZGl2PlxyXG4gICAgICAgIDxTZXR0aW5nU2VjdGlvbj5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJwMVwiIGRlZmF1bHRNZXNzYWdlPXtkZWZhdWx0STE4bk1lc3NhZ2VzLnAxfS8+OiBcclxuICAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXtwcm9wcy5jb25maWcucDF9IG9uQ2hhbmdlPXtvblAxQ2hhbmdlfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJwMlwiIGRlZmF1bHRNZXNzYWdlPXtkZWZhdWx0STE4bk1lc3NhZ2VzLnAyfS8+OiBcclxuICAgICAgICAgICAgPGlucHV0IGRlZmF1bHRWYWx1ZT17cHJvcHMuY29uZmlnLnAyfSBvbkNoYW5nZT17b25QMkNoYW5nZX0vPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+ICAgICAgICAgXHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwicDNcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5wM30vPjogXHJcbiAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9e3Byb3BzLmNvbmZpZy5wM30gb25DaGFuZ2U9e29uUDNDaGFuZ2V9Lz4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PiAgICAgICAgIFxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1hdF90ZXh0fT5cclxuICAgICAgICAgICAgICB7ZGVmYXVsdEkxOG5NZXNzYWdlcy5leGVtcGxvX2xpbmt9XHJcbiAgICAgICAgICA8L2Rpdj4gICAgICAgXHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuXHJcbiAgKVxyXG59O1xyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9