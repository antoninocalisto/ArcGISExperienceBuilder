System.register(["jimu-core/react","jimu-arcgis","esri/layers/FeatureLayer","esri/config"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_config__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__, "__esModule", { value: true });
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
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/dados-da-selecao-criterios/src/runtime/widget.tsx ***!
  \***********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @arcgis/core/layers/FeatureLayer */ "@arcgis/core/layers/FeatureLayer");
/* harmony import */ var _arcgis_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @arcgis/core/config */ "@arcgis/core/config");




_arcgis_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].request.interceptors.push({
    urls: /Pocos_Sem_Simbolos\/FeatureServer\/0/,
    before: (params) => {
        params.requestOptions.query = Object.assign(Object.assign({}, params.requestOptions.query), { f: 'json' });
    }
});
function Widget(props) {
    var _a;
    const jimuMapViewRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const [codigosPocos, setCodigosPocos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [mapViewReady, setMapViewReady] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    console.log('🔍 Experience Builder Widget iniciado [dados-da-selecao-criterios]');
    const origensPermitidas = [
        'https://localhost:3001',
        'https://portalgis.petrobras.com.br',
        'https://portalgisd.petrobras.com.br',
        'http://localhost:8080',
        'https://explorad.petrobras.com.br',
        'https://explora.petrobras.com.br'
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        console.log('Widget rodando em window.location.origin:', window.location.origin);
        window.addEventListener('message', (event) => {
            console.log('Entrou no message do EB...');
            if (!origensPermitidas.includes(event.origin)) {
                console.warn('Origem não permitida:', event.origin);
                return;
            }
            const { type, data } = event.data;
            console.log('Mensagem recebida:', event.data);
            console.log('Tipo:', type);
            console.log('Dados brutos:', data);
            console.log('Array?', Array.isArray(data), '| Tamanho:', data === null || data === void 0 ? void 0 : data.length);
            if (type === 'codigosPocos' && Array.isArray(data)) {
                console.log('Poços válidos recebidos:', data.join(', '));
                setCodigosPocos(data);
            }
            else {
                console.warn('Dados inválidos recebidos:', data);
            }
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (mapViewReady) {
            console.log('Enviando confirmação de prontidão do widget (widgetReady)');
            window.parent.postMessage({ type: 'widgetReady' }, '*');
        }
    }, [mapViewReady]);
    // Espera o mapa e os poços estarem prontos
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        console.log('useEffect 2 -> Widget rodando em window.location.origin:', window.location.origin);
        if (mapViewReady && codigosPocos.length > 0) {
            console.log('Estado atual de codigosPocos:', codigosPocos);
            adicionarCamadaPocos(mapViewReady);
        }
    }, [mapViewReady, codigosPocos]);
    const adicionarCamadaPocos = (jimuMapView) => {
        const expression = `POCO_CD_POCO IN (${codigosPocos.join(',')})`;
        // const expression = `POCO_CD_POCO IN (1010,4523)`
        console.log('Adicionando camada com expressão:', expression);
        //CAMPOS PARA VERIFICAR:
        const outFields = [
            'AMBI_CD_AMBI_BS', 'AMBI_CD_AMBI_FN', 'ARBA_CD_AREA_BACIA',
            'BACI_CD_BACIA', 'BACI_NM_BACIA', 'BLOC_CD_BLOCO_CONT',
            'BLOC_CD_BLOCO_PEM', 'CAEM_CD_CATEGORIA', 'CAMP_CD_CAMPO',
            'CAMP_NM_CAMPO', 'CLPO_CD_CLASS_POCO', 'CLPO_NM_CLASS_POCO',
            'DAGE_CD_DATUM_GEOD', 'DAGE_NM_DATUM_GEOD', 'DEPO_NM_DESIGNACAO',
            'DEPO_SG_REF_NOMINA', 'DOCM_TX_FILEID', 'EMEP_NM_NOME_ABREV',
            'EVRE_DT_RECLASSIF', 'FPOC_CD_FINALIDADE', 'GRCU_TX_GRUPO_CURVA',
            'MAEO_TX_MARCADOR_PROFUNDIDADE', 'MUNI_CD_MUNICIPIO', 'MUNI_NM_MUNICIPIO',
            'ODAP_NM_ORIG_DADO_ADQ_POCO', 'OPERADOR_BLOCO', 'PAIS_CD_PAIS',
            'PAIS_NM_PAIS', 'POCO_CD_CONDICAO', 'POCO_CD_POCO_ORIG',
            'POCO_CD_PROPRIET', 'POCO_CD_REPERF', 'POCO_DT_CONCLUSAO',
            'POCO_DT_PREV_INOP', 'POCO_DT_TERMINO', 'POCO_IN_ATING_ALVO',
            'POCO_IN_CO2_PREV', 'POCO_IN_DIRECIONAL', 'POCO_IN_H2S_PREV',
            'POCO_IN_LOCACAO', 'POCO_IN_MULTILATER', 'POCO_IN_OCORR_CO2',
            'POCO_IN_OCORR_H2S', 'POCO_IN_PARCERIA', 'POCO_IN_PERDIDO',
            'POCO_MD_COT_FN_PREV', 'POCO_MD_COTA_ALTIM', 'POCO_MD_DIST_COSTA',
            'POCO_MD_L_AGUA_PR', 'POCO_MD_LAMIN_AGUA', 'POCO_MD_LATI_FUNDO',
            'POCO_MD_LONG_FUNDO', 'POCO_MD_LUTM_BASE', 'POCO_MD_LUTM_FUNDO',
            'POCO_MD_LUTM_PR_BS', 'POCO_MD_LUTM_PR_FN', 'POCO_MD_MERID_CENT',
            'POCO_MD_METROS_PERF', 'POCO_MD_NUTM_BASE', 'POCO_MD_NUTM_FUNDO',
            'POCO_MD_NUTM_PR_BS', 'POCO_MD_NUTM_PR_FN', 'POCO_MD_PROF_FN_PR',
            'POCO_MD_PROF_PREVI', 'POCO_MD_PUTM_BASE', 'POCO_NM_COMPLETO',
            'POCO_NR_ANO_PAT', 'POCO_NR_BOCA_TEMPL', 'POCO_NR_GEDOC',
            'POCO_NR_ORDEM_POCO', 'POCO_NR_POCO', 'POCO_SG_API',
            'POCO_SG_LOCACAO', 'POCO_SG_LOCALIZA', 'POCO_SG_PREF_DEPEX',
            'POCO_SG_PREF_POCO_COMP', 'POCO_SG_REPETICAO', 'POCO_SG_SUBM',
            'POCO_TX_DET_LOCAL', 'POCO_TX_FINALIDADE', 'POCO_TX_OBS_LOCA',
            'POCO_TX_QUADR_PREV', 'POUI_HR_FIM_VINCUL', 'POUI_HR_IN_VINCUL',
            'POUI_MD_ALTUR_MESA', 'PRFP_SG_PREF_POCO', 'RSTD_NM_RESULTADO_POCO',
            'SEPR_CD_SERV_PROD', 'STPO_CD_STATUS', 'STPO_TX_STATUS',
            'TDIR_CD_TIPO_DIR', 'TIRC_CD_RECLASSIF', 'TIRC_TX_RECLASSIF',
            'TMPL_CD_TEMPLATE', 'UNAD_CD_UNID_ADM_A', 'UNAD_CD_UNID_ADM_G',
            'UNAD_CD_UNID_ADM_L', 'UNAD_CD_UNID_ADM_P', 'UNFE_CD_UF',
            'UNFE_NM_UF', 'UNLI_CD_UNID_LITO', 'UNLI_NM_UNID_LITO',
            'UNOP_CD_UNID_OPER', 'UNOP_CD_UNID_RESP', 'UNOP_SG_UNID_OPER',
            'UNOP_SG_UNID_OPER_RESP'
        ];
        const camada = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_2__["default"]({
            url: 'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Pocos_Sem_Simbolos/FeatureServer/0', //'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Feature_Pocos/MapServer/0', //'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Pocos_Sem_Simbolos/FeatureServer/0', //'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Feature_Pocos/MapServer/0',
            definitionExpression: expression,
            title: 'Poços',
            outFields: ['POCO_CD_POCO'],
            visible: true,
            featureReduction: null
        });
        camada.load()
            .then(() => {
            console.log('Camada carregada com sucesso:', camada.title);
            jimuMapView.view.map.add(camada);
            setTimeout(() => {
                console.log('camadas atuais no mapa:', jimuMapView.view.map.layers);
            }, 1000);
        })
            .catch((err) => {
            console.error('Erro ao carregar camada:', err);
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: { height: '100%', width: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: (jimuMapView) => {
                if (jimuMapView) {
                    console.log('Mapa carregado e pronto.');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9kYWRvcy1kYS1zZWxlY2FvLWNyaXRlcmlvcy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNLO0FBQ0o7QUFDZjtBQUs1QyxtRUFBa0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO0lBQ25DLElBQUksRUFBRSxzQ0FBc0M7SUFDNUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDakIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLG1DQUN0QixNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssS0FDOUIsQ0FBQyxFQUFFLE1BQU0sR0FDVjtJQUNILENBQUM7Q0FDRixDQUFDO0FBRWEsU0FBUyxNQUFNLENBQUMsS0FBK0I7O0lBQzVELE1BQU0sY0FBYyxHQUFHLDZDQUFNLEVBQWU7SUFDNUMsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsR0FBRywrQ0FBUSxDQUFXLEVBQUUsQ0FBQztJQUM5RCxNQUFN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Q0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ3JFLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDVixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDO1FBQ2hELENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCxPQUFPLENBQ0wscUVBQUssS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1FBQzNDLDREQUFDLDZEQUFvQixJQUNuQixjQUFjLEVBQUUsV0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEVBQzFDLGtCQUFrQixFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksV0FBVyxFQUFFLENBQUM7b0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUM7b0JBQ3ZDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsV0FBVztvQkFDcEMsZUFBZSxDQUFDLFdBQVcsQ0FBQztnQkFDOUIsQ0FBQztZQUNILENBQUMsR0FDRCxDQUNFLENBQ1A7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2RhZG9zLWRhLXNlbGVjYW8tY3JpdGVyaW9zL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9jb25maWdfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ0BhcmNnaXMvY29yZS9sYXllcnMvRmVhdHVyZUxheWVyJ1xyXG5pbXBvcnQgZXNyaUNvbmZpZyBmcm9tICdAYXJjZ2lzL2NvcmUvY29uZmlnJ1xyXG5cclxuaW1wb3J0IHsgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuZXNyaUNvbmZpZy5yZXF1ZXN0LmludGVyY2VwdG9ycy5wdXNoKHtcclxuICB1cmxzOiAvUG9jb3NfU2VtX1NpbWJvbG9zXFwvRmVhdHVyZVNlcnZlclxcLzAvLFxyXG4gIGJlZm9yZTogKHBhcmFtcykgPT4ge1xyXG4gICAgcGFyYW1zLnJlcXVlc3RPcHRpb25zLnF1ZXJ5ID0ge1xyXG4gICAgICAuLi5wYXJhbXMucmVxdWVzdE9wdGlvbnMucXVlcnksXHJcbiAgICAgIGY6ICdqc29uJ1xyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XHJcbiAgY29uc3QgamltdU1hcFZpZXdSZWYgPSB1c2VSZWY8SmltdU1hcFZpZXc+KClcclxuICBjb25zdCBbY29kaWdvc1BvY29zLCBzZXRDb2RpZ29zUG9jb3NdID0gdXNlU3RhdGU8bnVtYmVyW10+KFtdKVxyXG4gIGNvbnN0IFttYXBWaWV3UmVhZHksIHNldE1hcFZpZXdSZWFkeV0gPSB1c2VTdGF0ZTxKaW11TWFwVmlldyB8IG51bGw+KG51bGwpXHJcblxyXG4gIGNvbnNvbGUubG9nKCfwn5SNIEV4cGVyaWVuY2UgQnVpbGRlciBXaWRnZXQgaW5pY2lhZG8gW2RhZG9zLWRhLXNlbGVjYW8tY3JpdGVyaW9zXScpXHJcblxyXG4gIGNvbnN0IG9yaWdlbnNQZXJtaXRpZGFzID0gW1xyXG4gICAgJ2h0dHBzOi8vbG9jYWxob3N0OjMwMDEnLFxyXG4gICAgJ2h0dHBzOi8vcG9ydGFsZ2lzLnBldHJvYnJhcy5jb20uYnInLFxyXG4gICAgJ2h0dHBzOi8vcG9ydGFsZ2lzZC5wZXRyb2JyYXMuY29tLmJyJyxcclxuICAgICdodHRwOi8vbG9jYWxob3N0OjgwODAnLFxyXG4gICAgJ2h0dHBzOi8vZXhwbG9yYWQucGV0cm9icmFzLmNvbS5icicsXHJcbiAgICAnaHR0cHM6Ly9leHBsb3JhLnBldHJvYnJhcy5jb20uYnInXHJcbiAgXVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1dpZGdldCByb2RhbmRvIGVtIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW46Jywgd2luZG93LmxvY2F0aW9uLm9yaWdpbilcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFbnRyb3Ugbm8gbWVzc2FnZSBkbyBFQi4uLicpXHJcbiAgICAgIGlmICghb3JpZ2Vuc1Blcm1pdGlkYXMuaW5jbHVkZXMoZXZlbnQub3JpZ2luKSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignT3JpZ2VtIG7Do28gcGVybWl0aWRhOicsIGV2ZW50Lm9yaWdpbilcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgeyB0eXBlLCBkYXRhIH0gPSBldmVudC5kYXRhXHJcbiAgICAgIGNvbnNvbGUubG9nKCdNZW5zYWdlbSByZWNlYmlkYTonLCBldmVudC5kYXRhKVxyXG4gICAgICBjb25zb2xlLmxvZygnVGlwbzonLCB0eXBlKVxyXG4gICAgICBjb25zb2xlLmxvZygnRGFkb3MgYnJ1dG9zOicsIGRhdGEpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdBcnJheT8nLCBBcnJheS5pc0FycmF5KGRhdGEpLCAnfCBUYW1hbmhvOicsIGRhdGE/Lmxlbmd0aClcclxuXHJcbiAgICAgIGlmICh0eXBlID09PSAnY29kaWdvc1BvY29zJyAmJiBBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Bvw6dvcyB2w6FsaWRvcyByZWNlYmlkb3M6JywgZGF0YS5qb2luKCcsICcpKVxyXG4gICAgICAgIHNldENvZGlnb3NQb2NvcyhkYXRhKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignRGFkb3MgaW52w6FsaWRvcyByZWNlYmlkb3M6JywgZGF0YSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtYXBWaWV3UmVhZHkpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0VudmlhbmRvIGNvbmZpcm1hw6fDo28gZGUgcHJvbnRpZMOjbyBkbyB3aWRnZXQgKHdpZGdldFJlYWR5KScpXHJcbiAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoeyB0eXBlOiAnd2lkZ2V0UmVhZHknIH0sICcqJylcclxuICAgIH1cclxuICB9LCBbbWFwVmlld1JlYWR5XSlcclxuXHJcbiAgLy8gRXNwZXJhIG8gbWFwYSBlIG9zIHBvw6dvcyBlc3RhcmVtIHByb250b3NcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3VzZUVmZmVjdCAyIC0+IFdpZGdldCByb2RhbmRvIGVtIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW46Jywgd2luZG93LmxvY2F0aW9uLm9yaWdpbilcclxuICAgIGlmIChtYXBWaWV3UmVhZHkgJiYgY29kaWdvc1BvY29zLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc29sZS5sb2coJ0VzdGFkbyBhdHVhbCBkZSBjb2RpZ29zUG9jb3M6JywgY29kaWdvc1BvY29zKVxyXG4gICAgICBhZGljaW9uYXJDYW1hZGFQb2NvcyhtYXBWaWV3UmVhZHkpXHJcbiAgICB9XHJcbiAgfSwgW21hcFZpZXdSZWFkeSwgY29kaWdvc1BvY29zXSlcclxuXHJcblxyXG4gIGNvbnN0IGFkaWNpb25hckNhbWFkYVBvY29zID0gKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldykgPT4ge1xyXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IGBQT0NPX0NEX1BPQ08gSU4gKCR7Y29kaWdvc1BvY29zLmpvaW4oJywnKX0pYFxyXG4gICAgLy8gY29uc3QgZXhwcmVzc2lvbiA9IGBQT0NPX0NEX1BPQ08gSU4gKDEwMTAsNDUyMylgXHJcblxyXG4gICAgY29uc29sZS5sb2coJ0FkaWNpb25hbmRvIGNhbWFkYSBjb20gZXhwcmVzc8OjbzonLCBleHByZXNzaW9uKVxyXG5cclxuICAgIC8vQ0FNUE9TIFBBUkEgVkVSSUZJQ0FSOlxyXG5cclxuICAgIGNvbnN0IG91dEZpZWxkcyA9IFtcclxuICAgICAgJ0FNQklfQ0RfQU1CSV9CUycsICdBTUJJX0NEX0FNQklfRk4nLCAnQVJCQV9DRF9BUkVBX0JBQ0lBJyxcclxuICAgICAgJ0JBQ0lfQ0RfQkFDSUEnLCAnQkFDSV9OTV9CQUNJQScsICdCTE9DX0NEX0JMT0NPX0NPTlQnLFxyXG4gICAgICAnQkxPQ19DRF9CTE9DT19QRU0nLCAnQ0FFTV9DRF9DQVRFR09SSUEnLCAnQ0FNUF9DRF9DQU1QTycsXHJcbiAgICAgICdDQU1QX05NX0NBTVBPJywgJ0NMUE9fQ0RfQ0xBU1NfUE9DTycsICdDTFBPX05NX0NMQVNTX1BPQ08nLFxyXG4gICAgICAnREFHRV9DRF9EQVRVTV9HRU9EJywgJ0RBR0VfTk1fREFUVU1fR0VPRCcsICdERVBPX05NX0RFU0lHTkFDQU8nLFxyXG4gICAgICAnREVQT19TR19SRUZfTk9NSU5BJywgJ0RPQ01fVFhfRklMRUlEJywgJ0VNRVBfTk1fTk9NRV9BQlJFVicsXHJcbiAgICAgICdFVlJFX0RUX1JFQ0xBU1NJRicsICdGUE9DX0NEX0ZJTkFMSURBREUnLCAnR1JDVV9UWF9HUlVQT19DVVJWQScsXHJcbiAgICAgICdNQUVPX1RYX01BUkNBRE9SX1BST0ZVTkRJREFERScsICdNVU5JX0NEX01VTklDSVBJTycsICdNVU5JX05NX01VTklDSVBJTycsXHJcbiAgICAgICdPREFQX05NX09SSUdfREFET19BRFFfUE9DTycsICdPUEVSQURPUl9CTE9DTycsICdQQUlTX0NEX1BBSVMnLFxyXG4gICAgICAnUEFJU19OTV9QQUlTJywgJ1BPQ09fQ0RfQ09ORElDQU8nLCAnUE9DT19DRF9QT0NPX09SSUcnLFxyXG4gICAgICAnUE9DT19DRF9QUk9QUklFVCcsICdQT0NPX0NEX1JFUEVSRicsICdQT0NPX0RUX0NPTkNMVVNBTycsXHJcbiAgICAgICdQT0NPX0RUX1BSRVZfSU5PUCcsICdQT0NPX0RUX1RFUk1JTk8nLCAnUE9DT19JTl9BVElOR19BTFZPJyxcclxuICAgICAgJ1BPQ09fSU5fQ08yX1BSRVYnLCAnUE9DT19JTl9ESVJFQ0lPTkFMJywgJ1BPQ09fSU5fSDJTX1BSRVYnLFxyXG4gICAgICAnUE9DT19JTl9MT0NBQ0FPJywgJ1BPQ09fSU5fTVVMVElMQVRFUicsICdQT0NPX0lOX09DT1JSX0NPMicsXHJcbiAgICAgICdQT0NPX0lOX09DT1JSX0gyUycsICdQT0NPX0lOX1BBUkNFUklBJywgJ1BPQ09fSU5fUEVSRElETycsXHJcbiAgICAgICdQT0NPX01EX0NPVF9GTl9QUkVWJywgJ1BPQ09fTURfQ09UQV9BTFRJTScsICdQT0NPX01EX0RJU1RfQ09TVEEnLFxyXG4gICAgICAnUE9DT19NRF9MX0FHVUFfUFInLCAnUE9DT19NRF9MQU1JTl9BR1VBJywgJ1BPQ09fTURfTEFUSV9GVU5ETycsXHJcbiAgICAgICdQT0NPX01EX0xPTkdfRlVORE8nLCAnUE9DT19NRF9MVVRNX0JBU0UnLCAnUE9DT19NRF9MVVRNX0ZVTkRPJyxcclxuICAgICAgJ1BPQ09fTURfTFVUTV9QUl9CUycsICdQT0NPX01EX0xVVE1fUFJfRk4nLCAnUE9DT19NRF9NRVJJRF9DRU5UJyxcclxuICAgICAgJ1BPQ09fTURfTUVUUk9TX1BFUkYnLCAnUE9DT19NRF9OVVRNX0JBU0UnLCAnUE9DT19NRF9OVVRNX0ZVTkRPJyxcclxuICAgICAgJ1BPQ09fTURfTlVUTV9QUl9CUycsICdQT0NPX01EX05VVE1fUFJfRk4nLCAnUE9DT19NRF9QUk9GX0ZOX1BSJyxcclxuICAgICAgJ1BPQ09fTURfUFJPRl9QUkVWSScsICdQT0NPX01EX1BVVE1fQkFTRScsICdQT0NPX05NX0NPTVBMRVRPJyxcclxuICAgICAgJ1BPQ09fTlJfQU5PX1BBVCcsICdQT0NPX05SX0JPQ0FfVEVNUEwnLCAnUE9DT19OUl9HRURPQycsXHJcbiAgICAgICdQT0NPX05SX09SREVNX1BPQ08nLCAnUE9DT19OUl9QT0NPJywgJ1BPQ09fU0dfQVBJJyxcclxuICAgICAgJ1BPQ09fU0dfTE9DQUNBTycsICdQT0NPX1NHX0xPQ0FMSVpBJywgJ1BPQ09fU0dfUFJFRl9ERVBFWCcsXHJcbiAgICAgICdQT0NPX1NHX1BSRUZfUE9DT19DT01QJywgJ1BPQ09fU0dfUkVQRVRJQ0FPJywgJ1BPQ09fU0dfU1VCTScsXHJcbiAgICAgICdQT0NPX1RYX0RFVF9MT0NBTCcsICdQT0NPX1RYX0ZJTkFMSURBREUnLCAnUE9DT19UWF9PQlNfTE9DQScsXHJcbiAgICAgICdQT0NPX1RYX1FVQURSX1BSRVYnLCAnUE9VSV9IUl9GSU1fVklOQ1VMJywgJ1BPVUlfSFJfSU5fVklOQ1VMJyxcclxuICAgICAgJ1BPVUlfTURfQUxUVVJfTUVTQScsICdQUkZQX1NHX1BSRUZfUE9DTycsICdSU1REX05NX1JFU1VMVEFET19QT0NPJyxcclxuICAgICAgJ1NFUFJfQ0RfU0VSVl9QUk9EJywgJ1NUUE9fQ0RfU1RBVFVTJywgJ1NUUE9fVFhfU1RBVFVTJyxcclxuICAgICAgJ1RESVJfQ0RfVElQT19ESVInLCAnVElSQ19DRF9SRUNMQVNTSUYnLCAnVElSQ19UWF9SRUNMQVNTSUYnLFxyXG4gICAgICAnVE1QTF9DRF9URU1QTEFURScsICdVTkFEX0NEX1VOSURfQURNX0EnLCAnVU5BRF9DRF9VTklEX0FETV9HJyxcclxuICAgICAgJ1VOQURfQ0RfVU5JRF9BRE1fTCcsICdVTkFEX0NEX1VOSURfQURNX1AnLCAnVU5GRV9DRF9VRicsXHJcbiAgICAgICdVTkZFX05NX1VGJywgJ1VOTElfQ0RfVU5JRF9MSVRPJywgJ1VOTElfTk1fVU5JRF9MSVRPJyxcclxuICAgICAgJ1VOT1BfQ0RfVU5JRF9PUEVSJywgJ1VOT1BfQ0RfVU5JRF9SRVNQJywgJ1VOT1BfU0dfVU5JRF9PUEVSJyxcclxuICAgICAgJ1VOT1BfU0dfVU5JRF9PUEVSX1JFU1AnXHJcbiAgICBdO1xyXG5cclxuXHJcbiAgICBjb25zdCBjYW1hZGEgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9iYXNlZ2lzLnBldHJvYnJhcy5jb20uYnIvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvRVhQTE9SQS9Qb2Nvc19TZW1fU2ltYm9sb3MvRmVhdHVyZVNlcnZlci8wJywgLy8naHR0cHM6Ly9iYXNlZ2lzLnBldHJvYnJhcy5jb20uYnIvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvRVhQTE9SQS9GZWF0dXJlX1BvY29zL01hcFNlcnZlci8wJywgLy8naHR0cHM6Ly9iYXNlZ2lzLnBldHJvYnJhcy5jb20uYnIvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvRVhQTE9SQS9Qb2Nvc19TZW1fU2ltYm9sb3MvRmVhdHVyZVNlcnZlci8wJywgLy8naHR0cHM6Ly9iYXNlZ2lzLnBldHJvYnJhcy5jb20uYnIvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvRVhQTE9SQS9GZWF0dXJlX1BvY29zL01hcFNlcnZlci8wJyxcclxuICAgICAgZGVmaW5pdGlvbkV4cHJlc3Npb246IGV4cHJlc3Npb24sXHJcbiAgICAgIHRpdGxlOiAnUG/Dp29zJyxcclxuICAgICAgb3V0RmllbGRzOiBbJ1BPQ09fQ0RfUE9DTyddLFxyXG4gICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICBmZWF0dXJlUmVkdWN0aW9uOiBudWxsXHJcbiAgICB9KVxyXG5cclxuICAgIGNhbWFkYS5sb2FkKClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDYW1hZGEgY2FycmVnYWRhIGNvbSBzdWNlc3NvOicsIGNhbWFkYS50aXRsZSlcclxuICAgICAgICBqaW11TWFwVmlldy52aWV3Lm1hcC5hZGQoY2FtYWRhKVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdjYW1hZGFzIGF0dWFpcyBubyBtYXBhOicsIGppbXVNYXBWaWV3LnZpZXcubWFwLmxheWVycylcclxuICAgICAgICB9LCAxMDAwKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY2FycmVnYXIgY2FtYWRhOicsIGVycilcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XHJcbiAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXsoamltdU1hcFZpZXcpID0+IHtcclxuICAgICAgICAgIGlmIChqaW11TWFwVmlldykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTWFwYSBjYXJyZWdhZG8gZSBwcm9udG8uJylcclxuICAgICAgICAgICAgamltdU1hcFZpZXdSZWYuY3VycmVudCA9IGppbXVNYXBWaWV3XHJcbiAgICAgICAgICAgIHNldE1hcFZpZXdSZWFkeShqaW11TWFwVmlldylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=