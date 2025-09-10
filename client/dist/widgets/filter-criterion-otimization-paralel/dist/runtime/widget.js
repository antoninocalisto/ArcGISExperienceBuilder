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
/*!*********************************************************************************************!*\
  !*** ./your-extensions/widgets/filter-criterion-otimization-paralel/src/runtime/widget.tsx ***!
  \*********************************************************************************************/
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
/* eslint-disable no-console */
// src/widgets/seu-widget/src/runtime/widget.tsx
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






// ==== Interceptores ====
// 1) Força POST nas queries (evita URL gigante)
_arcgis_core_config__WEBPACK_IMPORTED_MODULE_2__["default"].request.interceptors.push({
    urls: /\/(FeatureServer|MapServer)\/\d+\/query$/i,
    before: (p) => { p.requestOptions.method = 'post'; }
});
// 2) Garante f=json no serviço de Poços (para consistência)
_arcgis_core_config__WEBPACK_IMPORTED_MODULE_2__["default"].request.interceptors.push({
    urls: /Pocos_Sem_Simbolos\/FeatureServer\/0/i,
    before: (p) => {
        p.requestOptions.query = Object.assign(Object.assign({}, (p.requestOptions.query || {})), { f: 'json' });
    }
});
// ==== Constantes ====
const FEATURE_URL = 'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Pocos_Sem_Simbolos/FeatureServer/0';
const CHUNK_SIZE = 500; // tamanho de lote para consultas (ajuste conforme necessário)
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
        'https://explorad.petrobras.com.br',
        'https://explorah.petrobras.com.br',
        'https://explora.petrobras.com.br'
    ];
    // Recebe a lista de códigos via postMessage
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const handler = (event) => {
            if (!origensPermitidas.includes(event.origin)) {
                console.warn('⚠️ Origem não permitida:', event.origin);
                return;
            }
            const { type, data } = event.data || {};
            if (type === 'codigosPocos' && Array.isArray(data)) {
                console.log('📥 Recebidos codigosPocos:', data.length, '| amostra:', data.slice(0, 5));
                setCodigosPocos(data);
            }
        };
        window.addEventListener('message', handler);
        return () => window.removeEventListener('message', handler);
    }, []);
    // Sinaliza que o widget está pronto
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (mapViewReady) {
            console.log('✅ Widget pronto! Enviando postMessage agora...');
            window.parent.postMessage({ type: 'widgetReady' }, '*');
        }
    }, [mapViewReady]);
    // Dispara a plotagem quando mapa e lista estiverem prontos
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        console.log('⏱️ useEffect plotagem | ready:', !!mapViewReady, '| nCodigos:', codigosPocos.length);
        if (mapViewReady && codigosPocos.length > 0) {
            console.warn('🚀 Disparando desenharComSimbologiaDoServico (1 layer + filtro por OBJECTIDs)...');
            desenharComSimbologiaDoServico(mapViewReady, codigosPocos);
        }
        else {
            if (!mapViewReady)
                console.log('… aguardando mapViewReady (onActiveViewChange)');
            if (codigosPocos.length === 0)
                console.log('… aguardando codigosPocos (postMessage)');
        }
    }, [mapViewReady, codigosPocos]);
    function desenharComSimbologiaDoServico(jmv, codigos) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('🎯 desenharComSimbologiaDoServico()', 'qtd:', codigos.length, 'amostra:', codigos.slice(0, 5));
            const view = jmv.view;
            try {
                if (view)
                    view.extent = extentBrasil;
            }
            catch (_a) { }
            const map = view.map;
            // === GroupLayer único "Poços" visível na lista ===
            let group = map.layers.find((l) => l.id === 'pocos-group');
            if (!group) {
                group = new _arcgis_core_layers_GroupLayer__WEBPACK_IMPORTED_MODULE_5__["default"]({
                    id: 'pocos-group',
                    title: 'Poços',
                    visibilityMode: 'inherited', // liga/desliga todos os filhos junto
                    listMode: 'show', // aparece na Layer List
                    legendEnabled: false // (opcional) não mostrar "Poços" na Legend
                });
                map.add(group);
            }
            // === FeatureLayer filho, oculto na Layer List ===
            let flBase = group.layers.find((l) => l.id === 'pocos-base');
            if (!flBase) {
                flBase = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_3__["default"]({
                    id: 'pocos-base',
                    url: FEATURE_URL,
                    title: 'Poços (base)', // título não aparecerá na Layer List
                    listMode: 'hide', // 🔴 esconde na Layer List
                    legendEnabled: false, // 🔴 (opcional) esconde na Legend também
                    popupEnabled: false,
                    outFields: ['POCO_CD_POCO']
                });
                group.add(flBase);
                yield flBase.load();
            }
            else {
                yield flBase.load();
            }
            // Descobre se campo é string p/ montar WHERE (uma única vez)
            const campo = flBase.fields.find((f) => f.name === 'POCO_CD_POCO');
            const precisaAspas = (campo === null || campo === void 0 ? void 0 : campo.type) === 'string';
            console.log('🔎 Campo POCO_CD_POCO tipo:', campo === null || campo === void 0 ? void 0 : campo.type, '| precisaAspas:', !!precisaAspas);
            // Dedup e saneamento de códigos
            const uniqueCodigos = Array.from(new Set(codigos.map(String).map(s => s.trim()).filter(Boolean)));
            if (uniqueCodigos.length === 0) {
                console.warn('⛔ Nada a plotar (lista vazia após deduplicação).');
                return;
            }
            // Quebra em chunks apenas para consulta (não cria camadas por chunk!)
            const chunks = [];
            for (let i = 0; i < uniqueCodigos.length; i += CHUNK_SIZE) {
                chunks.push(uniqueCodigos.slice(i, i + CHUNK_SIZE));
            }
            const esc = (v) => precisaAspas ? `'${v.replace(/'/g, "''")}'` : v;
            const whereList = chunks.map(c => `POCO_CD_POCO IN (${c.map(esc).join(',')})`);
            console.time('⏱️ queryObjectIds(paralelo)');
            const objIdsArrays = yield Promise.all(whereList.map(w => flBase.queryObjectIds({ where: w })));
            console.timeEnd('⏱️ queryObjectIds(paralelo)');
            // Concatena e deduplica OBJECTIDs
            const objectIds = Array.from(new Set(objIdsArrays.flat()));
            console.log(`✅ OBJECTIDs coletados: ${objectIds.length}`);
            // Aplica filtro client-side – renderiza só o que precisamos sem mexer na simbologia
            const layerView = yield view.whenLayerView(flBase);
            layerView.filter = { objectIds };
            // (Opcional) checagem rápida de faltantes (limitada para não pesar)
            try {
                const SAMPLE_LIMIT = 5000;
                const sample = uniqueCodigos.slice(0, SAMPLE_LIMIT);
                const q = flBase.createQuery();
                q.where = `POCO_CD_POCO IN (${sample.map(esc).join(',')})`;
                q.outFields = ['POCO_CD_POCO'];
                q.returnDistinctValues = true;
                q.returnGeometry = false;
                const res = yield flBase.queryFeatures(q);
                const presentes = new Set(res.features.map(f => String(f.attributes.POCO_CD_POCO).trim()));
                const faltantes = sample.filter(c => !presentes.has(c));
                console.warn(`🏁 Distintos retornados (amostra ${presentes.size}/${sample.length}); faltantes≈ ${faltantes.length} (na amostra).`);
            }
            catch (e) {
                console.debug('ℹ️ Pulo checagem de faltantes (lista grande/não necessária).', e);
            }
            console.warn('🏁 Plotagem concluída (1 layer + filtro por OBJECTIDs).');
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: { height: '100%', width: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: (jimuMapView) => {
                if (!jimuMapView)
                    return;
                jimuMapViewRef.current = jimuMapView;
                setMapViewReady(jimuMapView);
                const map = jimuMapView.view.map;
                // Desliga sublayer de Contexto que costuma estourar timeout
                map.layers.forEach((lyr) => {
                    var _a;
                    if (lyr.type === 'map-image' && /\/Contexto\/MapServer/i.test(lyr.url)) {
                        const sub14 = lyr.findSublayerById(14);
                        if (sub14) {
                            sub14.visible = false;
                            sub14.listMode = 'hide';
                        }
                    }
                    if ((_a = lyr.url) === null || _a === void 0 ? void 0 : _a.includes('/Contexto/MapServer/14')) {
                        lyr.visible = false;
                        lyr.listMode = 'hide';
                    }
                });
                console.log('🗺️ onActiveViewChange concluído. Basemap/sublayers ajustados.');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0ZXItY3JpdGVyaW9uLW90aW1pemF0aW9uLXBhcmFsZWwvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRCwrQkFBK0I7QUFDL0IsZ0RBQWdEOzs7Ozs7Ozs7O0FBRVU7QUFDSztBQUluQjtBQUNlO0FBQ1Y7QUFDTTtBQUl2RCwwQkFBMEI7QUFDMUIsZ0RBQWdEO0FBQ2hELG1FQUFrQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDbkMsSUFBSSxFQUFFLDJDQUEyQztJQUNqRCxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBQyxDQUFDO0NBQ3BELENBQUM7QUFDRiw0REFBNEQ7QUFDNUQsbUVBQWtCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztJ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R0FBcUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO3dCQUMxRixNQUFNLEtBQUssR0FBSSxHQUFxQixDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQzt3QkFDekQsSUFBSSxLQUFLLEVBQUUsQ0FBQzs0QkFBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs0QkFBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU07d0JBQUMsQ0FBQztvQkFDL0QsQ0FBQztvQkFDRCxJQUFJLFNBQUcsQ0FBQyxHQUFHLDBDQUFFLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLENBQUM7d0JBQ2hELEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSzt3QkFDbkIsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNO29CQUN2QixDQUFDO2dCQUNILENBQUMsQ0FBQztnQkFFRixPQUFPLENBQUMsR0FBRyxDQUFDLGdFQUFnRSxDQUFDO1lBQy9FLENBQUMsR0FDRCxDQUNFLENBQ1A7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L0V4dGVudFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9Hcm91cExheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maWx0ZXItY3JpdGVyaW9uLW90aW1pemF0aW9uLXBhcmFsZWwvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2NvbmZpZ19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfZ2VvbWV0cnlfRXh0ZW50X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9sYXllcnNfRmVhdHVyZUxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9sYXllcnNfR3JvdXBMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cclxuLy8gc3JjL3dpZGdldHMvc2V1LXdpZGdldC9zcmMvcnVudGltZS93aWRnZXQudHN4XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5pbXBvcnQgZXNyaUNvbmZpZyBmcm9tICdAYXJjZ2lzL2NvcmUvY29uZmlnJ1xyXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ0BhcmNnaXMvY29yZS9sYXllcnMvRmVhdHVyZUxheWVyJ1xyXG5pbXBvcnQgRXh0ZW50IGZyb20gJ0BhcmNnaXMvY29yZS9nZW9tZXRyeS9FeHRlbnQnXHJcbmltcG9ydCBHcm91cExheWVyIGZyb20gJ0BhcmNnaXMvY29yZS9sYXllcnMvR3JvdXBMYXllcidcclxuaW1wb3J0IEJhc2VtYXAgZnJvbSAnQGFyY2dpcy9jb3JlL0Jhc2VtYXAnXHJcbmltcG9ydCBNYXBJbWFnZUxheWVyIGZyb20gJ0BhcmNnaXMvY29yZS9sYXllcnMvTWFwSW1hZ2VMYXllcidcclxuXHJcbi8vID09PT0gSW50ZXJjZXB0b3JlcyA9PT09XHJcbi8vIDEpIEZvcsOnYSBQT1NUIG5hcyBxdWVyaWVzIChldml0YSBVUkwgZ2lnYW50ZSlcclxuZXNyaUNvbmZpZy5yZXF1ZXN0LmludGVyY2VwdG9ycy5wdXNoKHtcclxuICB1cmxzOiAvXFwvKEZlYXR1cmVTZXJ2ZXJ8TWFwU2VydmVyKVxcL1xcZCtcXC9xdWVyeSQvaSxcclxuICBiZWZvcmU6IChwKSA9PiB7IHAucmVxdWVzdE9wdGlvbnMubWV0aG9kID0gJ3Bvc3QnIH1cclxufSlcclxuLy8gMikgR2FyYW50ZSBmPWpzb24gbm8gc2VydmnDp28gZGUgUG/Dp29zIChwYXJhIGNvbnNpc3TDqm5jaWEpXHJcbmVzcmlDb25maWcucmVxdWVzdC5pbnRlcmNlcHRvcnMucHVzaCh7XHJcbiAgdXJsczogL1BvY29zX1NlbV9TaW1ib2xvc1xcL0ZlYXR1cmVTZXJ2ZXJcXC8wL2ksXHJcbiAgYmVmb3JlOiAocCkgPT4ge1xyXG4gICAgcC5yZXF1ZXN0T3B0aW9ucy5xdWVyeSA9IHsgLi4uKHAucmVxdWVzdE9wdGlvbnMucXVlcnkgfHwge30pLCBmOiAnanNvbicgfVxyXG4gIH1cclxufSlcclxuXHJcbi8vID09PT0gQ29uc3RhbnRlcyA9PT09XHJcbmNvbnN0IEZFQVRVUkVfVVJMID1cclxuICAnaHR0cHM6Ly9iYXNlZ2lzLnBldHJvYnJhcy5jb20uYnIvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvRVhQTE9SQS9Qb2Nvc19TZW1fU2ltYm9sb3MvRmVhdHVyZVNlcnZlci8wJ1xyXG5cclxuY29uc3QgQ0hVTktfU0laRSA9IDUwMCAvLyB0YW1hbmhvIGRlIGxvdGUgcGFyYSBjb25zdWx0YXMgKGFqdXN0ZSBjb25mb3JtZSBuZWNlc3PDoXJpbylcclxuXHJcbmNvbnN0IGV4dGVudEJyYXNpbCA9IG5ldyBFeHRlbnQoe1xyXG4gIHhtaW46IC03NC4wLFxyXG4gIHltaW46IC0zNC4wLFxyXG4gIHhtYXg6IC0zNC4wLFxyXG4gIHltYXg6IDUuMCxcclxuICBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDQzMjYgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XHJcbiAgY29uc3QgamltdU1hcFZpZXdSZWYgPSB1c2VSZWY8SmltdU1hcFZpZXc+KClcclxuICBjb25zdCBbbWFwVmlld1JlYWR5LCBzZXRNYXBWaWV3UmVhZHldID0gdXNlU3RhdGU8SmltdU1hcFZpZXcgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFtjb2RpZ29zUG9jb3MsIHNldENvZGlnb3NQb2Nvc10gPSB1c2VTdGF0ZTwobnVtYmVyIHwgc3RyaW5nKVtdPihbXSlcclxuXHJcbiAgY29uc3Qgb3JpZ2Vuc1Blcm1pdGlkYXMgPSBbXHJcbiAgICAnaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMScsXHJcbiAgICAnaHR0cHM6Ly9wb3J0YWxnaXMucGV0cm9icmFzLmNvbS5icicsXHJcbiAgICAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyxcclxuICAgICdodHRwczovL2V4cGxvcmFkLnBldHJvYnJhcy5jb20uYnInLFxyXG4gICAgJ2h0dHBzOi8vZXhwbG9yYWgucGV0cm9icmFzLmNvbS5icicsXHJcbiAgICAnaHR0cHM6Ly9leHBsb3JhLnBldHJvYnJhcy5jb20uYnInXHJcbiAgXVxyXG5cclxuICAvLyBSZWNlYmUgYSBsaXN0YSBkZSBjw7NkaWdvcyB2aWEgcG9zdE1lc3NhZ2VcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlciA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICghb3JpZ2Vuc1Blcm1pdGlkYXMuaW5jbHVkZXMoZXZlbnQub3JpZ2luKSkge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybign4pqg77iPIE9yaWdlbSBuw6NvIHBlcm1pdGlkYTonLCBldmVudC5vcmlnaW4pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeyB0eXBlLCBkYXRhIH0gPSBldmVudC5kYXRhIHx8IHt9XHJcbiAgICAgIGlmICh0eXBlID09PSAnY29kaWdvc1BvY29zJyAmJiBBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ/Cfk6UgUmVjZWJpZG9zIGNvZGlnb3NQb2NvczonLCBkYXRhLmxlbmd0aCwgJ3wgYW1vc3RyYTonLCBkYXRhLnNsaWNlKDAsIDUpKVxyXG4gICAgICAgIHNldENvZGlnb3NQb2NvcyhkYXRhKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZXIpXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVyKVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyBTaW5hbGl6YSBxdWUgbyB3aWRnZXQgZXN0w6EgcHJvbnRvXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtYXBWaWV3UmVhZHkpIHtcclxuICAgICAgY29uc29sZS5sb2coJ+KchSBXaWRnZXQgcHJvbnRvISBFbnZpYW5kbyBwb3N0TWVzc2FnZSBhZ29yYS4uLicpXHJcbiAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoeyB0eXBlOiAnd2lkZ2V0UmVhZHknIH0sICcqJylcclxuICAgIH1cclxuICB9LCBbbWFwVmlld1JlYWR5XSlcclxuXHJcbiAgLy8gRGlzcGFyYSBhIHBsb3RhZ2VtIHF1YW5kbyBtYXBhIGUgbGlzdGEgZXN0aXZlcmVtIHByb250b3NcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ+KPse+4jyB1c2VFZmZlY3QgcGxvdGFnZW0gfCByZWFkeTonLCAhIW1hcFZpZXdSZWFkeSwgJ3wgbkNvZGlnb3M6JywgY29kaWdvc1BvY29zLmxlbmd0aClcclxuICAgIGlmIChtYXBWaWV3UmVhZHkgJiYgY29kaWdvc1BvY29zLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc29sZS53YXJuKCfwn5qAIERpc3BhcmFuZG8gZGVzZW5oYXJDb21TaW1ib2xvZ2lhRG9TZXJ2aWNvICgxIGxheWVyICsgZmlsdHJvIHBvciBPQkpFQ1RJRHMpLi4uJylcclxuICAgICAgZGVzZW5oYXJDb21TaW1ib2xvZ2lhRG9TZXJ2aWNvKG1hcFZpZXdSZWFkeSwgY29kaWdvc1BvY29zKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFtYXBWaWV3UmVhZHkpIGNvbnNvbGUubG9nKCfigKYgYWd1YXJkYW5kbyBtYXBWaWV3UmVhZHkgKG9uQWN0aXZlVmlld0NoYW5nZSknKVxyXG4gICAgICBpZiAoY29kaWdvc1BvY29zLmxlbmd0aCA9PT0gMCkgY29uc29sZS5sb2coJ+KApiBhZ3VhcmRhbmRvIGNvZGlnb3NQb2NvcyAocG9zdE1lc3NhZ2UpJylcclxuICAgIH1cclxuICB9LCBbbWFwVmlld1JlYWR5LCBjb2RpZ29zUG9jb3NdKVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBkZXNlbmhhckNvbVNpbWJvbG9naWFEb1NlcnZpY28gKFxyXG4gICAgam12OiBKaW11TWFwVmlldyxcclxuICAgIGNvZGlnb3M6IChudW1iZXIgfCBzdHJpbmcpW11cclxuICApIHtcclxuICAgIGNvbnNvbGUubG9nKCfwn46vIGRlc2VuaGFyQ29tU2ltYm9sb2dpYURvU2VydmljbygpJywgJ3F0ZDonLCBjb2RpZ29zLmxlbmd0aCwgJ2Ftb3N0cmE6JywgY29kaWdvcy5zbGljZSgwLCA1KSlcclxuXHJcbiAgICBjb25zdCB2aWV3ID0gam12LnZpZXdcclxuICAgIHRyeSB7IGlmICh2aWV3KSB2aWV3LmV4dGVudCA9IGV4dGVudEJyYXNpbCB9IGNhdGNoIHt9XHJcblxyXG4gICAgY29uc3QgbWFwID0gdmlldy5tYXBcclxuXHJcbiAgICAvLyA9PT0gR3JvdXBMYXllciDDum5pY28gXCJQb8Onb3NcIiB2aXPDrXZlbCBuYSBsaXN0YSA9PT1cclxuICAgIGxldCBncm91cCA9IG1hcC5sYXllcnMuZmluZCgobDogYW55KSA9PiBsLmlkID09PSAncG9jb3MtZ3JvdXAnKSBhcyBHcm91cExheWVyXHJcbiAgICBpZiAoIWdyb3VwKSB7XHJcbiAgICAgIGdyb3VwID0gbmV3IEdyb3VwTGF5ZXIoe1xyXG4gICAgICAgIGlkOiAncG9jb3MtZ3JvdXAnLFxyXG4gICAgICAgIHRpdGxlOiAnUG/Dp29zJyxcclxuICAgICAgICB2aXNpYmlsaXR5TW9kZTogJ2luaGVyaXRlZCcsIC8vIGxpZ2EvZGVzbGlnYSB0b2RvcyBvcyBmaWxob3MganVudG9cclxuICAgICAgICBsaXN0TW9kZTogJ3Nob3cnLCAgICAgICAgICAgICAvLyBhcGFyZWNlIG5hIExheWVyIExpc3RcclxuICAgICAgICBsZWdlbmRFbmFibGVkOiBmYWxzZSAgICAgICAgICAvLyAob3BjaW9uYWwpIG7Do28gbW9zdHJhciBcIlBvw6dvc1wiIG5hIExlZ2VuZFxyXG4gICAgICB9KVxyXG4gICAgICBtYXAuYWRkKGdyb3VwKVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PSBGZWF0dXJlTGF5ZXIgZmlsaG8sIG9jdWx0byBuYSBMYXllciBMaXN0ID09PVxyXG4gICAgbGV0IGZsQmFzZSA9IGdyb3VwLmxheWVycy5maW5kKChsOiBhbnkpID0+IGwuaWQgPT09ICdwb2Nvcy1iYXNlJykgYXMgRmVhdHVyZUxheWVyXHJcbiAgICBpZiAoIWZsQmFzZSkge1xyXG4gICAgICBmbEJhc2UgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgICBpZDogJ3BvY29zLWJhc2UnLFxyXG4gICAgICAgIHVybDogRkVBVFVSRV9VUkwsXHJcbiAgICAgICAgdGl0bGU6ICdQb8Onb3MgKGJhc2UpJywgLy8gdMOtdHVsbyBuw6NvIGFwYXJlY2Vyw6EgbmEgTGF5ZXIgTGlzdFxyXG4gICAgICAgIGxpc3RNb2RlOiAnaGlkZScsICAgICAgLy8g8J+UtCBlc2NvbmRlIG5hIExheWVyIExpc3RcclxuICAgICAgICBsZWdlbmRFbmFibGVkOiBmYWxzZSwgIC8vIPCflLQgKG9wY2lvbmFsKSBlc2NvbmRlIG5hIExlZ2VuZCB0YW1iw6ltXHJcbiAgICAgICAgcG9wdXBFbmFibGVkOiBmYWxzZSxcclxuICAgICAgICBvdXRGaWVsZHM6IFsnUE9DT19DRF9QT0NPJ11cclxuICAgICAgfSlcclxuICAgICAgZ3JvdXAuYWRkKGZsQmFzZSlcclxuICAgICAgYXdhaXQgZmxCYXNlLmxvYWQoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgZmxCYXNlLmxvYWQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERlc2NvYnJlIHNlIGNhbXBvIMOpIHN0cmluZyBwLyBtb250YXIgV0hFUkUgKHVtYSDDum5pY2EgdmV6KVxyXG4gICAgY29uc3QgY2FtcG8gPSBmbEJhc2UuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ1BPQ09fQ0RfUE9DTycpXHJcbiAgICBjb25zdCBwcmVjaXNhQXNwYXMgPSBjYW1wbz8udHlwZSA9PT0gJ3N0cmluZydcclxuICAgIGNvbnNvbGUubG9nKCfwn5SOIENhbXBvIFBPQ09fQ0RfUE9DTyB0aXBvOicsIGNhbXBvPy50eXBlLCAnfCBwcmVjaXNhQXNwYXM6JywgISFwcmVjaXNhQXNwYXMpXHJcblxyXG4gICAgLy8gRGVkdXAgZSBzYW5lYW1lbnRvIGRlIGPDs2RpZ29zXHJcbiAgICBjb25zdCB1bmlxdWVDb2RpZ29zID0gQXJyYXkuZnJvbShuZXcgU2V0KFxyXG4gICAgICBjb2RpZ29zLm1hcChTdHJpbmcpLm1hcChzID0+IHMudHJpbSgpKS5maWx0ZXIoQm9vbGVhbilcclxuICAgICkpXHJcbiAgICBpZiAodW5pcXVlQ29kaWdvcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS53YXJuKCfim5QgTmFkYSBhIHBsb3RhciAobGlzdGEgdmF6aWEgYXDDs3MgZGVkdXBsaWNhw6fDo28pLicpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIC8vIFF1ZWJyYSBlbSBjaHVua3MgYXBlbmFzIHBhcmEgY29uc3VsdGEgKG7Do28gY3JpYSBjYW1hZGFzIHBvciBjaHVuayEpXHJcbiAgICBjb25zdCBjaHVua3M6IHN0cmluZ1tdW10gPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bmlxdWVDb2RpZ29zLmxlbmd0aDsgaSArPSBDSFVOS19TSVpFKSB7XHJcbiAgICAgIGNodW5rcy5wdXNoKHVuaXF1ZUNvZGlnb3Muc2xpY2UoaSwgaSArIENIVU5LX1NJWkUpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVzYyA9ICh2OiBzdHJpbmcpID0+IHByZWNpc2FBc3BhcyA/IGAnJHt2LnJlcGxhY2UoLycvZywgXCInJ1wiKX0nYCA6IHZcclxuICAgIGNvbnN0IHdoZXJlTGlzdCA9IGNodW5rcy5tYXAoYyA9PiBgUE9DT19DRF9QT0NPIElOICgke2MubWFwKGVzYykuam9pbignLCcpfSlgKVxyXG5cclxuICAgIGNvbnNvbGUudGltZSgn4o+x77iPIHF1ZXJ5T2JqZWN0SWRzKHBhcmFsZWxvKScpXHJcbiAgICBjb25zdCBvYmpJZHNBcnJheXMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgd2hlcmVMaXN0Lm1hcCh3ID0+IGZsQmFzZS5xdWVyeU9iamVjdElkcyh7IHdoZXJlOiB3IH0pKVxyXG4gICAgKVxyXG4gICAgY29uc29sZS50aW1lRW5kKCfij7HvuI8gcXVlcnlPYmplY3RJZHMocGFyYWxlbG8pJylcclxuXHJcbiAgICAvLyBDb25jYXRlbmEgZSBkZWR1cGxpY2EgT0JKRUNUSURzXHJcbiAgICBjb25zdCBvYmplY3RJZHMgPSBBcnJheS5mcm9tKG5ldyBTZXQob2JqSWRzQXJyYXlzLmZsYXQoKSkpXHJcbiAgICBjb25zb2xlLmxvZyhg4pyFIE9CSkVDVElEcyBjb2xldGFkb3M6ICR7b2JqZWN0SWRzLmxlbmd0aH1gKVxyXG5cclxuICAgIC8vIEFwbGljYSBmaWx0cm8gY2xpZW50LXNpZGUg4oCTIHJlbmRlcml6YSBzw7MgbyBxdWUgcHJlY2lzYW1vcyBzZW0gbWV4ZXIgbmEgc2ltYm9sb2dpYVxyXG4gICAgY29uc3QgbGF5ZXJWaWV3ID0gYXdhaXQgdmlldy53aGVuTGF5ZXJWaWV3KGZsQmFzZSlcclxuICAgIGxheWVyVmlldy5maWx0ZXIgPSB7IG9iamVjdElkcyB9XHJcblxyXG4gICAgLy8gKE9wY2lvbmFsKSBjaGVjYWdlbSByw6FwaWRhIGRlIGZhbHRhbnRlcyAobGltaXRhZGEgcGFyYSBuw6NvIHBlc2FyKVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgU0FNUExFX0xJTUlUID0gNTAwMFxyXG4gICAgICBjb25zdCBzYW1wbGUgPSB1bmlxdWVDb2RpZ29zLnNsaWNlKDAsIFNBTVBMRV9MSU1JVClcclxuICAgICAgY29uc3QgcSA9IGZsQmFzZS5jcmVhdGVRdWVyeSgpXHJcbiAgICAgIHEud2hlcmUgPSBgUE9DT19DRF9QT0NPIElOICgke3NhbXBsZS5tYXAoZXNjKS5qb2luKCcsJyl9KWBcclxuICAgICAgcS5vdXRGaWVsZHMgPSBbJ1BPQ09fQ0RfUE9DTyddXHJcbiAgICAgIHEucmV0dXJuRGlzdGluY3RWYWx1ZXMgPSB0cnVlXHJcbiAgICAgIHEucmV0dXJuR2VvbWV0cnkgPSBmYWxzZVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmbEJhc2UucXVlcnlGZWF0dXJlcyhxKVxyXG4gICAgICBjb25zdCBwcmVzZW50ZXMgPSBuZXcgU2V0KHJlcy5mZWF0dXJlcy5tYXAoZiA9PiBTdHJpbmcoZi5hdHRyaWJ1dGVzLlBPQ09fQ0RfUE9DTykudHJpbSgpKSlcclxuICAgICAgY29uc3QgZmFsdGFudGVzID0gc2FtcGxlLmZpbHRlcihjID0+ICFwcmVzZW50ZXMuaGFzKGMpKVxyXG4gICAgICBjb25zb2xlLndhcm4oYPCfj4EgRGlzdGludG9zIHJldG9ybmFkb3MgKGFtb3N0cmEgJHtwcmVzZW50ZXMuc2l6ZX0vJHtzYW1wbGUubGVuZ3RofSk7IGZhbHRhbnRlc+KJiCAke2ZhbHRhbnRlcy5sZW5ndGh9IChuYSBhbW9zdHJhKS5gKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmRlYnVnKCfihLnvuI8gUHVsbyBjaGVjYWdlbSBkZSBmYWx0YW50ZXMgKGxpc3RhIGdyYW5kZS9uw6NvIG5lY2Vzc8OhcmlhKS4nLCBlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUud2Fybign8J+PgSBQbG90YWdlbSBjb25jbHXDrWRhICgxIGxheWVyICsgZmlsdHJvIHBvciBPQkpFQ1RJRHMpLicpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxyXG4gICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17KGppbXVNYXBWaWV3KSA9PiB7XHJcbiAgICAgICAgICBpZiAoIWppbXVNYXBWaWV3KSByZXR1cm5cclxuICAgICAgICAgIGppbXVNYXBWaWV3UmVmLmN1cnJlbnQgPSBqaW11TWFwVmlld1xyXG4gICAgICAgICAgc2V0TWFwVmlld1JlYWR5KGppbXVNYXBWaWV3KVxyXG5cclxuICAgICAgICAgIGNvbnN0IG1hcCA9IGppbXVNYXBWaWV3LnZpZXcubWFwXHJcblxyXG4gICAgICAgICAgLy8gRGVzbGlnYSBzdWJsYXllciBkZSBDb250ZXh0byBxdWUgY29zdHVtYSBlc3RvdXJhciB0aW1lb3V0XHJcbiAgICAgICAgICBtYXAubGF5ZXJzLmZvckVhY2goKGx5cjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChseXIudHlwZSA9PT0gJ21hcC1pbWFnZScgJiYgL1xcL0NvbnRleHRvXFwvTWFwU2VydmVyL2kudGVzdCgobHlyIGFzIE1hcEltYWdlTGF5ZXIpLnVybCkpIHtcclxuICAgICAgICAgICAgICBjb25zdCBzdWIxNCA9IChseXIgYXMgTWFwSW1hZ2VMYXllcikuZmluZFN1YmxheWVyQnlJZCgxNClcclxuICAgICAgICAgICAgICBpZiAoc3ViMTQpIHsgc3ViMTQudmlzaWJsZSA9IGZhbHNlOyBzdWIxNC5saXN0TW9kZSA9ICdoaWRlJyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGx5ci51cmw/LmluY2x1ZGVzKCcvQ29udGV4dG8vTWFwU2VydmVyLzE0JykpIHtcclxuICAgICAgICAgICAgICBseXIudmlzaWJsZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgbHlyLmxpc3RNb2RlID0gJ2hpZGUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ/Cfl7rvuI8gb25BY3RpdmVWaWV3Q2hhbmdlIGNvbmNsdcOtZG8uIEJhc2VtYXAvc3VibGF5ZXJzIGFqdXN0YWRvcy4nKVxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==