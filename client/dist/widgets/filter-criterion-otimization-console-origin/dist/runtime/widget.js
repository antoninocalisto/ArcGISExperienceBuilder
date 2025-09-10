System.register(["jimu-core/react","jimu-arcgis","esri/config","esri/layers/FeatureLayer","esri/geometry/Extent","esri/layers/GroupLayer","esri/Basemap"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_config__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_Extent__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_GroupLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_Basemap__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_config__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_Extent__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_GroupLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_Basemap__, "__esModule", { value: true });
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
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_Basemap__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "@arcgis/core/Basemap":
/*!*******************************!*\
  !*** external "esri/Basemap" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_Basemap__;

/***/ }),

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
/*!****************************************************************************************************!*\
  !*** ./your-extensions/widgets/filter-criterion-otimization-console-origin/src/runtime/widget.tsx ***!
  \****************************************************************************************************/
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
/* harmony import */ var _arcgis_core_Basemap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @arcgis/core/Basemap */ "@arcgis/core/Basemap");
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
            // === GroupLayer único "Poços" ===
            let group = map.layers.find((l) => l.id === 'pocos-group');
            if (!group) {
                group = new _arcgis_core_layers_GroupLayer__WEBPACK_IMPORTED_MODULE_5__["default"]({
                    id: 'pocos-group',
                    title: 'Poços',
                    visibilityMode: 'inherited',
                    listMode: 'show'
                });
                map.add(group);
                console.log('🧱 Criado GroupLayer "Poços".');
            }
            // === FeatureLayer base único (mantém simbologia do serviço) ===
            let flBase = group.layers.find((l) => l.id === 'pocos-base');
            if (!flBase) {
                flBase = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_3__["default"]({
                    id: 'pocos-base',
                    url: FEATURE_URL,
                    title: 'Poços (base)',
                    listMode: 'show',
                    popupEnabled: false, // evita fetch extra durante hover
                    outFields: ['POCO_CD_POCO'] // mínimo necessário
                });
                group.add(flBase);
                yield flBase.load();
                console.log('➕ FeatureLayer base criado e carregado.');
            }
            else {
                yield flBase.load();
                console.log('♻️ Reutilizando FeatureLayer base.');
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
                // Basemap mais leve
                try {
                    map.basemap = _arcgis_core_Basemap__WEBPACK_IMPORTED_MODULE_6__["default"].fromId('osm');
                }
                catch (_a) { }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0ZXItY3JpdGVyaW9uLW90aW1pemF0aW9uLWNvbnNvbGUtb3JpZ2luL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRCwrQkFBK0I7QUFDL0IsZ0RBQWdEOzs7Ozs7Ozs7O0FBRVU7QUFDSztBQUluQjtBQUNlO0FBQ1Y7QUFDTTtBQUNiO0FBRzFDLDBCQUEwQjtBQUMxQixnREFBZ0Q7QUFDaEQsbUVBQWtCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztJQUNuQyxJQUFJLEVBQUUsMkNBQTJDO0lBQ2pELE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFDLENBQUM7Q0FDcEQsQ0FBQztBQUNGLDREQUE0RDtBQUM1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O2dCQUFDLENBQUM7Z0JBQUMsV0FBTSxDQUFDLEVBQUM7Z0JBRXBELDREQUE0RDtnQkFDNUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTs7b0JBQzlCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxXQUFXLElBQUksd0JBQXdCLENBQUMsSUFBSSxDQUFFLEdBQXFCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzt3QkFDMUYsTUFBTSxLQUFLLEdBQUksR0FBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7d0JBQ3pELElBQUksS0FBSyxFQUFFLENBQUM7NEJBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7NEJBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNO3dCQUFDLENBQUM7b0JBQy9ELENBQUM7b0JBQ0QsSUFBSSxTQUFHLENBQUMsR0FBRywwQ0FBRSxRQUFRLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDO3dCQUNoRCxHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUs7d0JBQ25CLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTTtvQkFDdkIsQ0FBQztnQkFDSCxDQUFDLENBQUM7Z0JBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnRUFBZ0UsQ0FBQztZQUMvRSxDQUFDLEdBQ0QsQ0FDRSxDQUNQO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL0Jhc2VtYXBcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L0V4dGVudFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9Hcm91cExheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maWx0ZXItY3JpdGVyaW9uLW90aW1pemF0aW9uLWNvbnNvbGUtb3JpZ2luL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9CYXNlbWFwX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9jb25maWdfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2dlb21ldHJ5X0V4dGVudF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfbGF5ZXJzX0ZlYXR1cmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfbGF5ZXJzX0dyb3VwTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXHJcbi8vIHNyYy93aWRnZXRzL3NldS13aWRnZXQvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeFxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuaW1wb3J0IGVzcmlDb25maWcgZnJvbSAnQGFyY2dpcy9jb3JlL2NvbmZpZydcclxuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdAYXJjZ2lzL2NvcmUvbGF5ZXJzL0ZlYXR1cmVMYXllcidcclxuaW1wb3J0IEV4dGVudCBmcm9tICdAYXJjZ2lzL2NvcmUvZ2VvbWV0cnkvRXh0ZW50J1xyXG5pbXBvcnQgR3JvdXBMYXllciBmcm9tICdAYXJjZ2lzL2NvcmUvbGF5ZXJzL0dyb3VwTGF5ZXInXHJcbmltcG9ydCBCYXNlbWFwIGZyb20gJ0BhcmNnaXMvY29yZS9CYXNlbWFwJ1xyXG5pbXBvcnQgTWFwSW1hZ2VMYXllciBmcm9tICdAYXJjZ2lzL2NvcmUvbGF5ZXJzL01hcEltYWdlTGF5ZXInXHJcblxyXG4vLyA9PT09IEludGVyY2VwdG9yZXMgPT09PVxyXG4vLyAxKSBGb3LDp2EgUE9TVCBuYXMgcXVlcmllcyAoZXZpdGEgVVJMIGdpZ2FudGUpXHJcbmVzcmlDb25maWcucmVxdWVzdC5pbnRlcmNlcHRvcnMucHVzaCh7XHJcbiAgdXJsczogL1xcLyhGZWF0dXJlU2VydmVyfE1hcFNlcnZlcilcXC9cXGQrXFwvcXVlcnkkL2ksXHJcbiAgYmVmb3JlOiAocCkgPT4geyBwLnJlcXVlc3RPcHRpb25zLm1ldGhvZCA9ICdwb3N0JyB9XHJcbn0pXHJcbi8vIDIpIEdhcmFudGUgZj1qc29uIG5vIHNlcnZpw6dvIGRlIFBvw6dvcyAocGFyYSBjb25zaXN0w6puY2lhKVxyXG5lc3JpQ29uZmlnLnJlcXVlc3QuaW50ZXJjZXB0b3JzLnB1c2goe1xyXG4gIHVybHM6IC9Qb2Nvc19TZW1fU2ltYm9sb3NcXC9GZWF0dXJlU2VydmVyXFwvMC9pLFxyXG4gIGJlZm9yZTogKHApID0+IHtcclxuICAgIHAucmVxdWVzdE9wdGlvbnMucXVlcnkgPSB7IC4uLihwLnJlcXVlc3RPcHRpb25zLnF1ZXJ5IHx8IHt9KSwgZjogJ2pzb24nIH1cclxuICB9XHJcbn0pXHJcblxyXG4vLyA9PT09IENvbnN0YW50ZXMgPT09PVxyXG5jb25zdCBGRUFUVVJFX1VSTCA9XHJcbiAgJ2h0dHBzOi8vYmFzZWdpcy5wZXRyb2JyYXMuY29tLmJyL2FyY2dpcy9yZXN0L3NlcnZpY2VzL0VYUExPUkEvUG9jb3NfU2VtX1NpbWJvbG9zL0ZlYXR1cmVTZXJ2ZXIvMCdcclxuXHJcbmNvbnN0IENIVU5LX1NJWkUgPSA1MDAgLy8gdGFtYW5obyBkZSBsb3RlIHBhcmEgY29uc3VsdGFzIChhanVzdGUgY29uZm9ybWUgbmVjZXNzw6FyaW8pXHJcblxyXG5jb25zdCBleHRlbnRCcmFzaWwgPSBuZXcgRXh0ZW50KHtcclxuICB4bWluOiAtNzQuMCxcclxuICB5bWluOiAtMzQuMCxcclxuICB4bWF4OiAtMzQuMCxcclxuICB5bWF4OiA1LjAsXHJcbiAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldCAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikge1xyXG4gIGNvbnN0IGppbXVNYXBWaWV3UmVmID0gdXNlUmVmPEppbXVNYXBWaWV3PigpXHJcbiAgY29uc3QgW21hcFZpZXdSZWFkeSwgc2V0TWFwVmlld1JlYWR5XSA9IHVzZVN0YXRlPEppbXVNYXBWaWV3IHwgbnVsbD4obnVsbClcclxuICBjb25zdCBbY29kaWdvc1BvY29zLCBzZXRDb2RpZ29zUG9jb3NdID0gdXNlU3RhdGU8KG51bWJlciB8IHN0cmluZylbXT4oW10pXHJcblxyXG4gIGNvbnN0IG9yaWdlbnNQZXJtaXRpZGFzID0gW1xyXG4gICAgJ2h0dHBzOi8vbG9jYWxob3N0OjMwMDEnLFxyXG4gICAgJ2h0dHBzOi8vcG9ydGFsZ2lzLnBldHJvYnJhcy5jb20uYnInLFxyXG4gICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcsXHJcbiAgICAnaHR0cHM6Ly9leHBsb3JhZC5wZXRyb2JyYXMuY29tLmJyJyxcclxuICAgICdodHRwczovL2V4cGxvcmFoLnBldHJvYnJhcy5jb20uYnInLFxyXG4gICAgJ2h0dHBzOi8vZXhwbG9yYS5wZXRyb2JyYXMuY29tLmJyJ1xyXG4gIF1cclxuXHJcbiAgLy8gUmVjZWJlIGEgbGlzdGEgZGUgY8OzZGlnb3MgdmlhIHBvc3RNZXNzYWdlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICBpZiAoIW9yaWdlbnNQZXJtaXRpZGFzLmluY2x1ZGVzKGV2ZW50Lm9yaWdpbikpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ+KaoO+4jyBPcmlnZW0gbsOjbyBwZXJtaXRpZGE6JywgZXZlbnQub3JpZ2luKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHsgdHlwZSwgZGF0YSB9ID0gZXZlbnQuZGF0YSB8fCB7fVxyXG4gICAgICBpZiAodHlwZSA9PT0gJ2NvZGlnb3NQb2NvcycgJiYgQXJyYXkuaXNBcnJheShkYXRhKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfwn5OlIFJlY2ViaWRvcyBjb2RpZ29zUG9jb3M6JywgZGF0YS5sZW5ndGgsICd8IGFtb3N0cmE6JywgZGF0YS5zbGljZSgwLCA1KSlcclxuICAgICAgICBzZXRDb2RpZ29zUG9jb3MoZGF0YSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVyKVxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlcilcclxuICB9LCBbXSlcclxuXHJcbiAgLy8gU2luYWxpemEgcXVlIG8gd2lkZ2V0IGVzdMOhIHByb250b1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobWFwVmlld1JlYWR5KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfinIUgV2lkZ2V0IHByb250byEgRW52aWFuZG8gcG9zdE1lc3NhZ2UgYWdvcmEuLi4nKVxyXG4gICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHsgdHlwZTogJ3dpZGdldFJlYWR5JyB9LCAnKicpXHJcbiAgICB9XHJcbiAgfSwgW21hcFZpZXdSZWFkeV0pXHJcblxyXG4gIC8vIERpc3BhcmEgYSBwbG90YWdlbSBxdWFuZG8gbWFwYSBlIGxpc3RhIGVzdGl2ZXJlbSBwcm9udG9zXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCfij7HvuI8gdXNlRWZmZWN0IHBsb3RhZ2VtIHwgcmVhZHk6JywgISFtYXBWaWV3UmVhZHksICd8IG5Db2RpZ29zOicsIGNvZGlnb3NQb2Nvcy5sZW5ndGgpXHJcbiAgICBpZiAobWFwVmlld1JlYWR5ICYmIGNvZGlnb3NQb2Nvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnNvbGUud2Fybign8J+agCBEaXNwYXJhbmRvIGRlc2VuaGFyQ29tU2ltYm9sb2dpYURvU2VydmljbyAoMSBsYXllciArIGZpbHRybyBwb3IgT0JKRUNUSURzKS4uLicpXHJcbiAgICAgIGRlc2VuaGFyQ29tU2ltYm9sb2dpYURvU2VydmljbyhtYXBWaWV3UmVhZHksIGNvZGlnb3NQb2NvcylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghbWFwVmlld1JlYWR5KSBjb25zb2xlLmxvZygn4oCmIGFndWFyZGFuZG8gbWFwVmlld1JlYWR5IChvbkFjdGl2ZVZpZXdDaGFuZ2UpJylcclxuICAgICAgaWYgKGNvZGlnb3NQb2Nvcy5sZW5ndGggPT09IDApIGNvbnNvbGUubG9nKCfigKYgYWd1YXJkYW5kbyBjb2RpZ29zUG9jb3MgKHBvc3RNZXNzYWdlKScpXHJcbiAgICB9XHJcbiAgfSwgW21hcFZpZXdSZWFkeSwgY29kaWdvc1BvY29zXSlcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZGVzZW5oYXJDb21TaW1ib2xvZ2lhRG9TZXJ2aWNvIChcclxuICAgIGptdjogSmltdU1hcFZpZXcsXHJcbiAgICBjb2RpZ29zOiAobnVtYmVyIHwgc3RyaW5nKVtdXHJcbiAgKSB7XHJcbiAgICBjb25zb2xlLmxvZygn8J+OryBkZXNlbmhhckNvbVNpbWJvbG9naWFEb1NlcnZpY28oKScsICdxdGQ6JywgY29kaWdvcy5sZW5ndGgsICdhbW9zdHJhOicsIGNvZGlnb3Muc2xpY2UoMCwgNSkpXHJcblxyXG4gICAgY29uc3QgdmlldyA9IGptdi52aWV3XHJcbiAgICB0cnkgeyBpZiAodmlldykgdmlldy5leHRlbnQgPSBleHRlbnRCcmFzaWwgfSBjYXRjaCB7fVxyXG5cclxuICAgIGNvbnN0IG1hcCA9IHZpZXcubWFwXHJcblxyXG4gICAgLy8gPT09IEdyb3VwTGF5ZXIgw7puaWNvIFwiUG/Dp29zXCIgPT09XHJcbiAgICBsZXQgZ3JvdXAgPSBtYXAubGF5ZXJzLmZpbmQoKGw6IGFueSkgPT4gbC5pZCA9PT0gJ3BvY29zLWdyb3VwJykgYXMgR3JvdXBMYXllclxyXG4gICAgaWYgKCFncm91cCkge1xyXG4gICAgICBncm91cCA9IG5ldyBHcm91cExheWVyKHtcclxuICAgICAgICBpZDogJ3BvY29zLWdyb3VwJyxcclxuICAgICAgICB0aXRsZTogJ1Bvw6dvcycsXHJcbiAgICAgICAgdmlzaWJpbGl0eU1vZGU6ICdpbmhlcml0ZWQnLFxyXG4gICAgICAgIGxpc3RNb2RlOiAnc2hvdydcclxuICAgICAgfSlcclxuICAgICAgbWFwLmFkZChncm91cClcclxuICAgICAgY29uc29sZS5sb2coJ/Cfp7EgQ3JpYWRvIEdyb3VwTGF5ZXIgXCJQb8Onb3NcIi4nKVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PSBGZWF0dXJlTGF5ZXIgYmFzZSDDum5pY28gKG1hbnTDqW0gc2ltYm9sb2dpYSBkbyBzZXJ2acOnbykgPT09XHJcbiAgICBsZXQgZmxCYXNlID0gZ3JvdXAubGF5ZXJzLmZpbmQoKGw6IGFueSkgPT4gbC5pZCA9PT0gJ3BvY29zLWJhc2UnKSBhcyBGZWF0dXJlTGF5ZXJcclxuICAgIGlmICghZmxCYXNlKSB7XHJcbiAgICAgIGZsQmFzZSA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgIGlkOiAncG9jb3MtYmFzZScsXHJcbiAgICAgICAgdXJsOiBGRUFUVVJFX1VSTCxcclxuICAgICAgICB0aXRsZTogJ1Bvw6dvcyAoYmFzZSknLFxyXG4gICAgICAgIGxpc3RNb2RlOiAnc2hvdycsXHJcbiAgICAgICAgcG9wdXBFbmFibGVkOiBmYWxzZSwgICAgICAgIC8vIGV2aXRhIGZldGNoIGV4dHJhIGR1cmFudGUgaG92ZXJcclxuICAgICAgICBvdXRGaWVsZHM6IFsnUE9DT19DRF9QT0NPJ10gLy8gbcOtbmltbyBuZWNlc3PDoXJpb1xyXG4gICAgICB9KVxyXG4gICAgICBncm91cC5hZGQoZmxCYXNlKVxyXG4gICAgICBhd2FpdCBmbEJhc2UubG9hZCgpXHJcbiAgICAgIGNvbnNvbGUubG9nKCfinpUgRmVhdHVyZUxheWVyIGJhc2UgY3JpYWRvIGUgY2FycmVnYWRvLicpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCBmbEJhc2UubG9hZCgpXHJcbiAgICAgIGNvbnNvbGUubG9nKCfimbvvuI8gUmV1dGlsaXphbmRvIEZlYXR1cmVMYXllciBiYXNlLicpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVzY29icmUgc2UgY2FtcG8gw6kgc3RyaW5nIHAvIG1vbnRhciBXSEVSRSAodW1hIMO6bmljYSB2ZXopXHJcbiAgICBjb25zdCBjYW1wbyA9IGZsQmFzZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAnUE9DT19DRF9QT0NPJylcclxuICAgIGNvbnN0IHByZWNpc2FBc3BhcyA9IGNhbXBvPy50eXBlID09PSAnc3RyaW5nJ1xyXG4gICAgY29uc29sZS5sb2coJ/CflI4gQ2FtcG8gUE9DT19DRF9QT0NPIHRpcG86JywgY2FtcG8/LnR5cGUsICd8IHByZWNpc2FBc3BhczonLCAhIXByZWNpc2FBc3BhcylcclxuXHJcbiAgICAvLyBEZWR1cCBlIHNhbmVhbWVudG8gZGUgY8OzZGlnb3NcclxuICAgIGNvbnN0IHVuaXF1ZUNvZGlnb3MgPSBBcnJheS5mcm9tKG5ldyBTZXQoXHJcbiAgICAgIGNvZGlnb3MubWFwKFN0cmluZykubWFwKHMgPT4gcy50cmltKCkpLmZpbHRlcihCb29sZWFuKVxyXG4gICAgKSlcclxuICAgIGlmICh1bmlxdWVDb2RpZ29zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ+KblCBOYWRhIGEgcGxvdGFyIChsaXN0YSB2YXppYSBhcMOzcyBkZWR1cGxpY2HDp8OjbykuJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUXVlYnJhIGVtIGNodW5rcyBhcGVuYXMgcGFyYSBjb25zdWx0YSAobsOjbyBjcmlhIGNhbWFkYXMgcG9yIGNodW5rISlcclxuICAgIGNvbnN0IGNodW5rczogc3RyaW5nW11bXSA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuaXF1ZUNvZGlnb3MubGVuZ3RoOyBpICs9IENIVU5LX1NJWkUpIHtcclxuICAgICAgY2h1bmtzLnB1c2godW5pcXVlQ29kaWdvcy5zbGljZShpLCBpICsgQ0hVTktfU0laRSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXNjID0gKHY6IHN0cmluZykgPT4gcHJlY2lzYUFzcGFzID8gYCcke3YucmVwbGFjZSgvJy9nLCBcIicnXCIpfSdgIDogdlxyXG4gICAgY29uc3Qgd2hlcmVMaXN0ID0gY2h1bmtzLm1hcChjID0+IGBQT0NPX0NEX1BPQ08gSU4gKCR7Yy5tYXAoZXNjKS5qb2luKCcsJyl9KWApXHJcblxyXG4gICAgY29uc29sZS50aW1lKCfij7HvuI8gcXVlcnlPYmplY3RJZHMocGFyYWxlbG8pJylcclxuICAgIGNvbnN0IG9iaklkc0FycmF5cyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICB3aGVyZUxpc3QubWFwKHcgPT4gZmxCYXNlLnF1ZXJ5T2JqZWN0SWRzKHsgd2hlcmU6IHcgfSkpXHJcbiAgICApXHJcbiAgICBjb25zb2xlLnRpbWVFbmQoJ+KPse+4jyBxdWVyeU9iamVjdElkcyhwYXJhbGVsbyknKVxyXG5cclxuICAgIC8vIENvbmNhdGVuYSBlIGRlZHVwbGljYSBPQkpFQ1RJRHNcclxuICAgIGNvbnN0IG9iamVjdElkcyA9IEFycmF5LmZyb20obmV3IFNldChvYmpJZHNBcnJheXMuZmxhdCgpKSlcclxuICAgIGNvbnNvbGUubG9nKGDinIUgT0JKRUNUSURzIGNvbGV0YWRvczogJHtvYmplY3RJZHMubGVuZ3RofWApXHJcblxyXG4gICAgLy8gQXBsaWNhIGZpbHRybyBjbGllbnQtc2lkZSDigJMgcmVuZGVyaXphIHPDsyBvIHF1ZSBwcmVjaXNhbW9zIHNlbSBtZXhlciBuYSBzaW1ib2xvZ2lhXHJcbiAgICBjb25zdCBsYXllclZpZXcgPSBhd2FpdCB2aWV3LndoZW5MYXllclZpZXcoZmxCYXNlKVxyXG4gICAgbGF5ZXJWaWV3LmZpbHRlciA9IHsgb2JqZWN0SWRzIH1cclxuXHJcbiAgICAvLyAoT3BjaW9uYWwpIGNoZWNhZ2VtIHLDoXBpZGEgZGUgZmFsdGFudGVzIChsaW1pdGFkYSBwYXJhIG7Do28gcGVzYXIpXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBTQU1QTEVfTElNSVQgPSA1MDAwXHJcbiAgICAgIGNvbnN0IHNhbXBsZSA9IHVuaXF1ZUNvZGlnb3Muc2xpY2UoMCwgU0FNUExFX0xJTUlUKVxyXG4gICAgICBjb25zdCBxID0gZmxCYXNlLmNyZWF0ZVF1ZXJ5KClcclxuICAgICAgcS53aGVyZSA9IGBQT0NPX0NEX1BPQ08gSU4gKCR7c2FtcGxlLm1hcChlc2MpLmpvaW4oJywnKX0pYFxyXG4gICAgICBxLm91dEZpZWxkcyA9IFsnUE9DT19DRF9QT0NPJ11cclxuICAgICAgcS5yZXR1cm5EaXN0aW5jdFZhbHVlcyA9IHRydWVcclxuICAgICAgcS5yZXR1cm5HZW9tZXRyeSA9IGZhbHNlXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZsQmFzZS5xdWVyeUZlYXR1cmVzKHEpXHJcbiAgICAgIGNvbnN0IHByZXNlbnRlcyA9IG5ldyBTZXQocmVzLmZlYXR1cmVzLm1hcChmID0+IFN0cmluZyhmLmF0dHJpYnV0ZXMuUE9DT19DRF9QT0NPKS50cmltKCkpKVxyXG4gICAgICBjb25zdCBmYWx0YW50ZXMgPSBzYW1wbGUuZmlsdGVyKGMgPT4gIXByZXNlbnRlcy5oYXMoYykpXHJcbiAgICAgIGNvbnNvbGUud2Fybihg8J+PgSBEaXN0aW50b3MgcmV0b3JuYWRvcyAoYW1vc3RyYSAke3ByZXNlbnRlcy5zaXplfS8ke3NhbXBsZS5sZW5ndGh9KTsgZmFsdGFudGVz4omIICR7ZmFsdGFudGVzLmxlbmd0aH0gKG5hIGFtb3N0cmEpLmApXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZGVidWcoJ+KEue+4jyBQdWxvIGNoZWNhZ2VtIGRlIGZhbHRhbnRlcyAobGlzdGEgZ3JhbmRlL27Do28gbmVjZXNzw6FyaWEpLicsIGUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS53YXJuKCfwn4+BIFBsb3RhZ2VtIGNvbmNsdcOtZGEgKDEgbGF5ZXIgKyBmaWx0cm8gcG9yIE9CSkVDVElEcykuJylcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XHJcbiAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXsoamltdU1hcFZpZXcpID0+IHtcclxuICAgICAgICAgIGlmICghamltdU1hcFZpZXcpIHJldHVyblxyXG4gICAgICAgICAgamltdU1hcFZpZXdSZWYuY3VycmVudCA9IGppbXVNYXBWaWV3XHJcbiAgICAgICAgICBzZXRNYXBWaWV3UmVhZHkoamltdU1hcFZpZXcpXHJcblxyXG4gICAgICAgICAgY29uc3QgbWFwID0gamltdU1hcFZpZXcudmlldy5tYXBcclxuXHJcbiAgICAgICAgICAvLyBCYXNlbWFwIG1haXMgbGV2ZVxyXG4gICAgICAgICAgdHJ5IHsgbWFwLmJhc2VtYXAgPSBCYXNlbWFwLmZyb21JZCgnb3NtJykgfSBjYXRjaCB7fVxyXG5cclxuICAgICAgICAgIC8vIERlc2xpZ2Egc3VibGF5ZXIgZGUgQ29udGV4dG8gcXVlIGNvc3R1bWEgZXN0b3VyYXIgdGltZW91dFxyXG4gICAgICAgICAgbWFwLmxheWVycy5mb3JFYWNoKChseXI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobHlyLnR5cGUgPT09ICdtYXAtaW1hZ2UnICYmIC9cXC9Db250ZXh0b1xcL01hcFNlcnZlci9pLnRlc3QoKGx5ciBhcyBNYXBJbWFnZUxheWVyKS51cmwpKSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3ViMTQgPSAobHlyIGFzIE1hcEltYWdlTGF5ZXIpLmZpbmRTdWJsYXllckJ5SWQoMTQpXHJcbiAgICAgICAgICAgICAgaWYgKHN1YjE0KSB7IHN1YjE0LnZpc2libGUgPSBmYWxzZTsgc3ViMTQubGlzdE1vZGUgPSAnaGlkZScgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChseXIudXJsPy5pbmNsdWRlcygnL0NvbnRleHRvL01hcFNlcnZlci8xNCcpKSB7XHJcbiAgICAgICAgICAgICAgbHlyLnZpc2libGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgIGx5ci5saXN0TW9kZSA9ICdoaWRlJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfwn5e677iPIG9uQWN0aXZlVmlld0NoYW5nZSBjb25jbHXDrWRvLiBCYXNlbWFwL3N1YmxheWVycyBhanVzdGFkb3MuJylcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=