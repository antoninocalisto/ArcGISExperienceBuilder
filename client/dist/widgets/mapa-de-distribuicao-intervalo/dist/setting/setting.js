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

/***/ "./your-extensions/widgets/mapa-de-distribuicao-intervalo/src/setting/translations/default.ts":
/*!****************************************************************************************************!*\
  !*** ./your-extensions/widgets/mapa-de-distribuicao-intervalo/src/setting/translations/default.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Mapas de Distribuição',
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
/*!****************************************************************************************!*\
  !*** ./your-extensions/widgets/mapa-de-distribuicao-intervalo/src/setting/setting.tsx ***!
  \****************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/mapa-de-distribuicao-intervalo/src/setting/translations/default.ts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXBhLWRlLWRpc3RyaWJ1aWNhby1pbnRlcnZhbG8vZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsWUFBWSxFQUFFLHVCQUF1QjtJQUNyQyxHQUFHLEVBQUUsWUFBWTtJQUNqQixHQUFHLEVBQUUsYUFBYTtJQUNsQixJQUFJLEVBQUUsTUFBTTtJQUNaLGdCQUFnQixFQUFFLHdDQUF3QztDQUMzRDs7Ozs7Ozs7Ozs7O0FDTkQ7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRCxlQUFlO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRTtBQUMyRDtBQU1qQjtBQUVZO0FBR3hELDZCQUFlLG9DQUFVLEtBQXNDO0lBQzdELE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxlQUF5QixFQUFFLEVBQUU7UUFDeEQsS0FBSyxDQUFDLGVBQWUsQ0FBQztZQUNwQixFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDWixlQUFlLEVBQUUsZUFBZTtTQUNqQyxDQUFDO0lBQ0osQ0FBQztJQUVELG1FQUFtRTtJQUNuRSw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLDhEQUE4RDtJQUM5RCxPQUFPO0lBQ1AsSUFBSTtJQUVKLG1FQUFtRTtJQUNuRSw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLDhEQUE4RDtJQUM5RCxPQUFPO0lBQ1AsSUFBSTtJQUVKLG1FQUFtRTtJQUNuRSw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLDhEQUE4RDtJQUM5RCxPQUFPO0lBQ1AsUUFBUTtJQUVSLE9BQU8sQ0FDTDtRQUNFLHdEQUFLLFNBQVMsRUFBQyxvQ0FBb0M7WUFDakQsK0NBQUMsK0VBQWMsSUFDYixTQUFTLEVBQUMsc0JBQXNCLEVBQ2hDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztvQkFDOUIsRUFBRSxFQUFFLHVCQUF1QjtvQkFDM0IsY0FBYyxFQUFFLDZEQUFtQixDQUFDLGVBQWU7aUJBQ3BELENBQUM7Z0JBRUYsK0NBQUMsMkVBQVU7b0JBQ1QsK0NBQUMsa0ZBQWlCLElBQ2hCLFFBQVEsRUFBRSxtQkFBbUIsRUFDN0IsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlLEdBQ3RDLENBQ1MsQ0FDRSxDQUNiLENBNkJGLENBR1A7QUFDSCxDQUFDO0FBQUEsQ0FBQztBQUVNLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcGEtZGUtZGlzdHJpYnVpY2FvLWludGVydmFsby9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcGEtZGUtZGlzdHJpYnVpY2FvLWludGVydmFsby9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgX3dpZGdldExhYmVsOiAnTWFwYXMgZGUgRGlzdHJpYnVpw6fDo28nLFxyXG4gIGxhdDogJ0xhdGl0dWRlOiAnLFxyXG4gIGxvbjogJ0xvbmdpdHVkZTogJyxcclxuICB6b29tOiAnWm9vbScsXHJcbiAgbGF0TG9uV2lsbEJlSGVyZTogJ0xhdC9Mb24gKE5vbmUgLSBwbGVhc2UgbW91c2Ugb3ZlciBtYXApJyxcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbi8qKlxyXG4gIExpY2Vuc2luZ1xyXG5cclxuICBDb3B5cmlnaHQgMjAyMiBFc3JpXHJcblxyXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxyXG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XHJcbiAgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxyXG4gIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xyXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuXHJcbiAgQSBjb3B5IG9mIHRoZSBsaWNlbnNlIGlzIGF2YWlsYWJsZSBpbiB0aGUgcmVwb3NpdG9yeSdzXHJcbiAgTElDRU5TRSBmaWxlLlxyXG4qL1xyXG5pbXBvcnQgeyBSZWFjdCwgRm9ybWF0dGVkTWVzc2FnZSwgY3NzLCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcclxuaW1wb3J0IHtcclxuICBNYXBXaWRnZXRTZWxlY3RvcixcclxuICBTZXR0aW5nU2VjdGlvbixcclxuICBTZXR0aW5nUm93XHJcbn0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBkZWZhdWx0STE4bk1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wczogQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPikge1xyXG4gIGNvbnN0IG9uTWFwV2lkZ2V0U2VsZWN0ZWQgPSAodXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICB1c2VNYXBXaWRnZXRJZHM6IHVzZU1hcFdpZGdldElkc1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIGNvbnN0IG9uUDFDaGFuZ2UgPSAoZXZ0OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAvLyAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgLy8gICAgIGlkOiBwcm9wcy5pZCxcclxuICAvLyAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KCdwMScsIGV2dC5jdXJyZW50VGFyZ2V0LnZhbHVlKVxyXG4gIC8vICAgfSlcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbnN0IG9uUDJDaGFuZ2UgPSAoZXZ0OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAvLyAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgLy8gICAgIGlkOiBwcm9wcy5pZCxcclxuICAvLyAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KCdwMicsIGV2dC5jdXJyZW50VGFyZ2V0LnZhbHVlKVxyXG4gIC8vICAgfSlcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbnN0IG9uUDNDaGFuZ2UgPSAoZXZ0OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAvLyAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgLy8gICAgIGlkOiBwcm9wcy5pZCxcclxuICAvLyAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KCdwMycsIGV2dC5jdXJyZW50VGFyZ2V0LnZhbHVlKVxyXG4gIC8vICAgfSlcclxuICAvLyB9ICAgIFxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZXR0aW5nLWdldC1tYXAtY29vcmRpbmF0ZXNcIj5cclxuICAgICAgICA8U2V0dGluZ1NlY3Rpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcC1zZWxlY3Rvci1zZWN0aW9uXCJcclxuICAgICAgICAgIHRpdGxlPXtwcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBpZDogJ1NlbGVjaW9uZSBvIG1hcGEgYmFzZScsXHJcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0STE4bk1lc3NhZ2VzLnNlbGVjdE1hcFdpZGdldFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxNYXBXaWRnZXRTZWxlY3RvclxyXG4gICAgICAgICAgICAgIG9uU2VsZWN0PXtvbk1hcFdpZGdldFNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17cHJvcHMudXNlTWFwV2lkZ2V0SWRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPGRpdj5cclxuICAgICAgICA8U2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwicDFcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5wMX0vPjogXHJcbiAgICAgICAgICAgICAgPGlucHV0IGRlZmF1bHRWYWx1ZT17cHJvcHMuY29uZmlnLnAxfSBvbkNoYW5nZT17b25QMUNoYW5nZX0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwicDJcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5wMn0vPjogXHJcbiAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9e3Byb3BzLmNvbmZpZy5wMn0gb25DaGFuZ2U9e29uUDJDaGFuZ2V9Lz4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PiAgICAgICAgIFxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cInAzXCIgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRJMThuTWVzc2FnZXMucDN9Lz46IFxyXG4gICAgICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXtwcm9wcy5jb25maWcucDN9IG9uQ2hhbmdlPXtvblAzQ2hhbmdlfS8+ICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj4gICAgICAgICBcclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtYXRfdGV4dH0+XHJcbiAgICAgICAgICAgICAge2RlZmF1bHRJMThuTWVzc2FnZXMuZXhlbXBsb19saW5rfVxyXG4gICAgICAgICAgPC9kaXY+ICAgICAgIFxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcblxyXG4gIClcclxufTtcclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==