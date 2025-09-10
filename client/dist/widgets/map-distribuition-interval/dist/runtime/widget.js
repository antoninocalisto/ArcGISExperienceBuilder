System.register(["jimu-core","jimu-arcgis","esri/layers/FeatureLayer","esri/widgets/Legend","esri/renderers/ClassBreaksRenderer","esri/symbols/SimpleMarkerSymbol"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Legend__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_renderers_ClassBreaksRenderer__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_symbols_SimpleMarkerSymbol__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Legend__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_renderers_ClassBreaksRenderer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_symbols_SimpleMarkerSymbol__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
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
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Legend__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_renderers_ClassBreaksRenderer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_symbols_SimpleMarkerSymbol__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/map-distribuition-interval/src/runtime/utils.ts":
/*!*********************************************************************************!*\
  !*** ./your-extensions/widgets/map-distribuition-interval/src/runtime/utils.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coresTipos: () => (/* binding */ coresTipos),
/* harmony export */   gerarMapaDistribuicaoEB: () => (/* binding */ gerarMapaDistribuicaoEB)
/* harmony export */ });
/* harmony import */ var _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @arcgis/core/layers/FeatureLayer */ "@arcgis/core/layers/FeatureLayer");
/* harmony import */ var _arcgis_core_widgets_Legend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @arcgis/core/widgets/Legend */ "@arcgis/core/widgets/Legend");
/* harmony import */ var _arcgis_core_renderers_ClassBreaksRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @arcgis/core/renderers/ClassBreaksRenderer */ "@arcgis/core/renderers/ClassBreaksRenderer");
/* harmony import */ var _arcgis_core_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @arcgis/core/symbols/SimpleMarkerSymbol */ "@arcgis/core/symbols/SimpleMarkerSymbol");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// utils.ts




const coresTipos = {
    lateral: "rgba(88, 19, 252, 0.7)",
    testemunho: "rgba(255, 0, 255, 0.7)",
    calha: "rgba(245, 201, 38, 0.7)",
    plug: "rgba(125, 253, 148, 0.7)",
    "whole core": "rgba(255, 43, 24, 0.7)"
};
function gerarMapaDistribuicaoEB(_a) {
    return __awaiter(this, arguments, void 0, function* ({ jimuMapView, dados, colorFill, idCamada, idLegenda, titleLegenda }) {
        const view = jimuMapView.view;
        const map = view.map;
        const codigos = dados.map(p => p.codigoPoco).join(',');
        const expression = `POCO_CD_POCO IN (${codigos})`;
        const camadaPoços = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_0__["default"]({
            url: 'https://basegis.petrobras.com.br/arcgis/rest/services/EXPLORA/Feature_Pocos/MapServer/0',
            definitionExpression: expression,
            title: 'Poços',
            outFields: ['*'],
            visible: false
        });
        yield camadaPoços.load();
        const queryResult = yield camadaPoços.queryFeatures({
            where: expression,
            outFields: ['*'],
            returnGeometry: true
        });
        const features = queryResult.features.map((feature) => {
            const dado = dados.find(p => p.codigoPoco === feature.attributes.POCO_CD_POCO);
            feature.attributes.POCO_MD_MERID_CENT = dado ? dado.total : 0;
            return feature;
        });
        const valores = dados.map(p => p.total);
        let min = Math.min(...valores);
        let max = Math.max(...valores);
        const info = [];
        const outline = { color: "black", width: "1px" };
        if (min === max && min === 0) {
            info.push({
                minValue: 0,
                maxValue: 0,
                label: "Não há dados suficientes",
                symbol: new _arcgis_core_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_3__["default"]({ color: "rgba(255,255,255,0)", size: 0, style: "circle", outline })
            });
        }
        else {
            const zerados = valores.filter(v => v === 0).length;
            const naoZerados = valores.filter(v => v > 0);
            if (zerados > 0) {
                info.push({
                    minValue: 0,
                    maxValue: 0,
                    label: `| 0 | (${zerados} poço${zerados > 1 ? 's' : ''})`,
                    symbol: new _arcgis_core_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_3__["default"]({ color: "rgba(200,200,200,0.3)", size: 6, style: "circle", outline })
                });
            }
            min = 1;
            const n = naoZerados.length;
            const numClasses = Math.max(2, Math.round(1 + 3.3 * Math.log10(n)));
            const breaks = Math.ceil((max - min + 1) / numClasses);
            const maxSize = 40;
            for (let i = 0; i < numClasses; i++) {
                const minValue = min + (i * breaks);
                const maxValue = min + ((i + 1) * breaks) - 1;
                if (minValue > max)
                    break;
                const count = naoZerados.filter(v => v >= minValue && v <= maxValue).length;
                const label = `${minValue} |---| ${maxValue} (${count} poço${count > 1 ? 's' : ''})`;
                const size = 6 + (i * (maxSize / numClasses));
                info.push({
                    minValue,
                    maxValue,
                    label,
                    symbol: new _arcgis_core_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_3__["default"]({ color: colorFill, size, style: "circle", outline })
                });
            }
        }
        const renderer = new _arcgis_core_renderers_ClassBreaksRenderer__WEBPACK_IMPORTED_MODULE_2__["default"]({
            field: "POCO_MD_MERID_CENT",
            classBreakInfos: info
        });
        const camadaDistribuicao = new _arcgis_core_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_0__["default"]({
            id: idCamada,
            source: features,
            fields: camadaPoços.fields,
            objectIdField: "OBJECTID",
            geometryType: "point",
            spatialReference: { wkid: 102100 },
            renderer,
            title: titleLegenda,
            listMode: "hide",
            // layerCreatedFromPortal: false
        });
        const existente = map.findLayerById(idCamada);
        if (existente)
            map.remove(existente);
        map.add(camadaDistribuicao);
        const legend = new _arcgis_core_widgets_Legend__WEBPACK_IMPORTED_MODULE_1__["default"]({
            view,
            layerInfos: [{ layer: camadaDistribuicao, title: titleLegenda }]
        });
        // view.ui.add(legend, "bottom-left")
    });
}



/***/ }),

/***/ "@arcgis/core/layers/FeatureLayer":
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_layers_FeatureLayer__;

/***/ }),

/***/ "@arcgis/core/renderers/ClassBreaksRenderer":
/*!*****************************************************!*\
  !*** external "esri/renderers/ClassBreaksRenderer" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_renderers_ClassBreaksRenderer__;

/***/ }),

/***/ "@arcgis/core/symbols/SimpleMarkerSymbol":
/*!**************************************************!*\
  !*** external "esri/symbols/SimpleMarkerSymbol" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_symbols_SimpleMarkerSymbol__;

/***/ }),

/***/ "@arcgis/core/widgets/Legend":
/*!**************************************!*\
  !*** external "esri/widgets/Legend" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_widgets_Legend__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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
  !*** ./your-extensions/widgets/map-distribuition-interval/src/runtime/widget.tsx ***!
  \***********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/map-distribuition-interval/src/runtime/utils.ts");
/** @jsx jsx */
/** @jsxFrag React.Fragment */



const log10 = (x) => Math.log10 ? Math.log10(x) : Math.log(x) / Math.LN10;
function calcularQuebras(dados, colorFill) {
    const valores = dados.map(p => p.total);
    let min = Math.min(...valores);
    let max = Math.max(...valores);
    const info = [];
    const outlineSize0 = 0;
    if (min === 0 && max === 0) {
        info.push({ label: 'Não há dados suficientes', size: 0, cor: colorFill, count: 0 });
    }
    else {
        const zerados = valores.filter(v => v === 0).length;
        const naoZerados = valores.filter(v => v > 0);
        if (zerados > 0) {
            info.push({
                label: `| 0 | (${zerados} poço${zerados > 1 ? 's' : ''})`,
                size: 6, cor: 'rgba(200,200,200,0.3)', count: zerados
            });
        }
        min = 1;
        const n = naoZerados.length;
        const numClasses = Math.max(2, Math.round(1 + 3.3 * log10(n)));
        const breaks = Math.ceil((max - min + 1) / numClasses);
        const maxSize = 40;
        for (let i = 0; i < numClasses; i++) {
            const minValue = min + i * breaks;
            const maxValue = min + (i + 1) * breaks - 1;
            if (minValue > max)
                break;
            const count = naoZerados.filter(v => v >= minValue && v <= maxValue).length;
            const label = `${minValue} |---| ${maxValue} (${count} poço${count > 1 ? 's' : ''})`;
            const size = 6 + i * (maxSize / numClasses);
            info.push({ label, size, cor: colorFill, count });
        }
    }
    return info;
}
const MAX_BUBBLE = 40;
const globalPanelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  div[role='dialog'][aria-label='mapa de distribuição'] {
    height: 550px !important;
    max-height: 550px !important;
  }
`;
const bubbleBoxStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  width: ${MAX_BUBBLE}px;
  height: ${MAX_BUBBLE}px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;
/* ----------  Estilos reutilizados do widget antigo  ---------- */
const wrapperStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  position: relative; width: 100%; height: 100%;
  background: #fff; border: 1px solid #ddd; border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,.1); padding: 16px; overflow: hidden;
`;
const titleStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `font-weight:600; margin-bottom:4px; display:block;`;
const selectStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `width:100%; padding:6px 8px; margin-bottom:12px;
  border:1px solid #ccc; border-radius:4px;`;
const listStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `overflow-y:auto; margin-bottom:12px;
  padding:8px; background:#fafafa; border:1px solid #eee; border-radius:4px;`;
const checkboxRowStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `display:flex; align-items:center; margin-bottom:6px; cursor:pointer;`;
const summaryListStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  max-height: 300px;
  overflow-y: auto;
  margin-top: 8px;
  padding: 8px;
  padding-bottom: 36px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  position: relative;
`;
const summaryItemStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `display:flex; align-items:center; margin-bottom:6px;`;
const rangeLabelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `font-size:0.9rem;`;
const footerStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  position: sticky;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #eee;
  padding: 4px 0;
  display: flex;
  align-items: center;
  gap: 16px; /* espaço entre os controles do rodapé */
`;
const footerLabelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 0.9rem;
`;
const TYPE_FIELD = {
    lateral: 'totalAmostrasLaterais',
    testemunho: 'totalTestemunhos',
    calha: 'totalCalhas',
    plug: 'totalPlugs',
    'whole core': 'totalWholeCore'
};
const LIST_TYPES = Object.keys(TYPE_FIELD);
/* ----------  MOCK já existente ---------- */
const DADOS_MOCK = [
    { codigoPoco: 1010, totalAmostrasLaterais: 0, totalCalhas: 3, totalPlugs: 0, totalTestemunhos: 14, totalWholeCore: 0 },
    { codigoPoco: 1340, totalAmostrasLaterais: 0, totalCalhas: 269, totalPlugs: 0, totalTestemunhos: 33, totalWholeCore: 0 },
    { codigoPoco: 1592, totalAmostrasLaterais: 0, totalCalhas: 19, totalPlugs: 0, totalTestemunhos: 20, totalWholeCore: 0 },
    { codigoPoco: 2014, totalAmostrasLaterais: 0, totalCalhas: 0, totalPlugs: 0, totalTestemunhos: 15, totalWholeCore: 0 },
    { codigoPoco: 4230, totalAmostrasLaterais: 24, totalCalhas: 0, totalPlugs: 0, totalTestemunhos: 7, totalWholeCore: 0 },
    { codigoPoco: 4327, totalAmostrasLaterais: 12, totalCalhas: 26, totalPlugs: 0, totalTestemunhos: 16, totalWholeCore: 0 },
    { codigoPoco: 4437, totalAmostrasLaterais: 0, totalCalhas: 0, totalPlugs: 0, totalTestemunhos: 5, totalWholeCore: 0 },
    { codigoPoco: 4523, totalAmostrasLaterais: 0, totalCalhas: 0, totalPlugs: 0, totalTestemunhos: 2, totalWholeCore: 0 },
    { codigoPoco: 7944, totalAmostrasLaterais: 0, totalCalhas: 228, totalPlugs: 0, totalTestemunhos: 3, totalWholeCore: 0 },
    { codigoPoco: 8830, totalAmostrasLaterais: 0, totalCalhas: 40, totalPlugs: 51, totalTestemunhos: 3, totalWholeCore: 0 },
    { codigoPoco: 17696, totalAmostrasLaterais: 44, totalCalhas: 17, totalPlugs: 0, totalTestemunhos: 1, totalWholeCore: 0 }
];
function Widget(props) {
    var _a;
    /* ---------- estados ---------- */
    const [jimuMapView, setJimuMapView] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState();
    const [categoria, setCategoria] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('');
    const [tiposSel, setTiposSel] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState([]);
    const [showEmpty, setShowEmpty] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    /* ===== NOVO: flag + conjunto da faixa ===== */
    const [withInterest, setWithInterest] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [faixaSet, setFaixaSet] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(() => new Set(Array.isArray(props === null || props === void 0 ? void 0 : props.codigosFaixaInteresse) ? props.codigosFaixaInteresse : []));
    /* Recebe faixa via postMessage: { type:'faixa-interesse', codigosPocos:[...] } */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const onMsg = (ev) => {
            const data = ev === null || ev === void 0 ? void 0 : ev.data;
            if (!data || data.type !== 'faixa-interesse' || !Array.isArray(data.codigosPocos))
                return;
            setFaixaSet(new Set(data.codigosPocos));
        };
        window.addEventListener('message', onMsg);
        return () => window.removeEventListener('message', onMsg);
    }, []);
    /* ---------- helper: aplica faixa de interesse ---------- */
    const aplicarFaixaInteresse = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((arr) => {
        if (!withInterest)
            return arr;
        if (!faixaSet || faixaSet.size === 0)
            return arr;
        return arr.filter(i => faixaSet.has(i.codigoPoco));
    }, [withInterest, faixaSet]);
    /* ---------- helper: gera [{codigoPoco,total}] p/ 1 tipo (com/faixa) ---------- */
    const gerarArrayTotal = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((tipo) => aplicarFaixaInteresse(DADOS_MOCK.map(d => ({
        codigoPoco: d.codigoPoco,
        total: d[TYPE_FIELD[tipo]]
    }))), [aplicarFaixaInteresse]);
    /* ---------- efeito: redesenha quando checkboxes/flag mudam ---------- */
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (!jimuMapView)
            return;
        const { view } = jimuMapView;
        /* Limpa camadas antigas de distribuição */
        LIST_TYPES.forEach(t => {
            const layer = view.map.findLayerById('amostras_' + t);
            if (layer)
                view.map.remove(layer);
        });
        /* Desenha cada tipo marcado */
        tiposSel.forEach(tipo => {
            const dados = gerarArrayTotal(tipo);
            const cor = _utils__WEBPACK_IMPORTED_MODULE_2__.coresTipos[tipo] || 'rgba(0,0,0,0.5)';
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.gerarMapaDistribuicaoEB)({
                jimuMapView,
                dados,
                colorFill: cor,
                idCamada: 'amostras_' + tipo,
                idLegenda: 'lgd_amostras_' + tipo,
                titleLegenda: (withInterest ? 'Intervalo de Interesse - ' : '') + (tipo.charAt(0).toUpperCase() + tipo.slice(1)),
                withInterest // opcional, caso a util trate internamente
            });
        });
    }, [jimuMapView, tiposSel, gerarArrayTotal, withInterest]);
    /* ---------- toggle checkbox ---------- */
    const toggleTipo = (tipo) => setTiposSel(prev => prev.includes(tipo) ? prev.filter(t => t !== tipo) : [...prev, tipo]);
    const summaryGroups = tiposSel.map(tipo => {
        const dados = gerarArrayTotal(tipo);
        const cor = _utils__WEBPACK_IMPORTED_MODULE_2__.coresTipos[tipo];
        let rows = calcularQuebras(dados, cor).reverse();
        if (!showEmpty) {
            rows = rows.filter(r => r.count > 0 || r.label.startsWith('| 0 |'));
        }
        return { tipo, rows };
    });
    /* ---------- render ---------- */
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: wrapperStyle },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.Global, { styles: globalPanelStyle }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: titleStyle }, "Selecione a distribui\u00E7\u00E3o"),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", { css: selectStyle, value: categoria, onChange: e => { setCategoria(e.target.value); setTiposSel([]); } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: '' }, "Selecione o tipo"),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 'sample' }, "Distribui\u00E7\u00E3o de amostra")),
        categoria === 'sample' && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: listStyle }, LIST_TYPES.map(t => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: t, css: checkboxRowStyle, onClick: () => toggleTipo(t) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'checkbox', checked: tiposSel.includes(t), readOnly: true, style: { marginRight: 6 } }),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, t.charAt(0).toUpperCase() + t.slice(1))))))),
        summaryGroups.length > 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: summaryListStyle },
            summaryGroups.map(group => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, { key: group.tipo },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `font-weight:600; margin:4px 0;` },
                    (withInterest ? 'Intervalo de Interesse - ' : ''),
                    group.tipo.charAt(0).toUpperCase() + group.tipo.slice(1)),
                group.rows.map((r, idx) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: `${group.tipo}-${idx}`, css: summaryItemStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: bubbleBoxStyle },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: r.size, height: r.size },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: r.size / 2, cy: r.size / 2, r: r.size / 2, fill: r.cor }))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { css: rangeLabelStyle }, r.label))))))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: footerStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: footerLabelStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: showEmpty, onChange: e => setShowEmpty(e.target.checked) }),
                    "Exibir classes vazias"),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { css: footerLabelStyle, title: "Quando marcado, filtra apenas os po\u00E7os do intervalo de interesse" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: withInterest, onChange: e => setWithInterest(e.target.checked) }),
                    "Intervalo de interesse")))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: setJimuMapView })));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXAtZGlzdHJpYnVpdGlvbi1pbnRlcnZhbC9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxXQUFXO0FBQ2dEO0FBQ1g7QUFDNEI7QUFDSjtBQUV4RSxNQUFNLFVBQVUsR0FBMkI7SUFDekMsT0FBTyxFQUFFLHdCQUF3QjtJQUNqQyxVQUFVLEVBQUUsd0JBQXdCO0lBQ3BDLEtBQUssRUFBRSx5QkFBeUI7SUFDaEMsSUFBSSxFQUFFLDBCQUEwQjtJQUNoQyxZQUFZLEVBQUUsd0JBQXdCO0NBQ3ZDO0FBRU0sU0FBZSx1QkFBdUI7eURBQUMsRUFDNUMsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsUUFBUSxFQUNSLFNBQVMsRUFDVCxZQUFZLEVBUWI7UUFDQyxNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSTtRQUM3QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRztRQUVwQixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDdEQsTUFBTSxVQUFVLEdBQUcsb0JBQW9CLE9BQU8sR0FBRztRQUVqRCxNQUFNLFdBQVcsR0FBRyxJQUFJLHdFQUFZLENBQUM7WUFDbkMsR0FBRyxFQUFFLHlGQUF5RjtZQUM5RixvQkFBb0IsRUFBRSxVQUFVO1lBQ2hDLEtBQUssRUFBRSxPQUFPO1lBQ2QsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztRQUVGLE1BQU0sV0FBVyxDQUFDLElBQUksRUFBRTtRQUV4QixNQUFNLFdBQVcsR0FBRyxNQUFNLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDbEQsS0FBSyxF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Q0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBSSxDQUNsRSxDQUNGO29CQUNOLHlEQUFNLEdBQUcsRUFBRSxlQUFlLElBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBUSxDQUN4QyxDQUNQLENBQUMsQ0FDYSxDQUNsQixDQUFDO1lBRUYsd0RBQUssR0FBRyxFQUFFLFdBQVc7Z0JBQ25CLDBEQUFPLEdBQUcsRUFBRSxnQkFBZ0I7b0JBQzFCLDBEQUNFLElBQUksRUFBQyxVQUFVLEVBQ2YsT0FBTyxFQUFFLFNBQVMsRUFDbEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQzdDOzRDQUVJO2dCQUdSLDBEQUFPLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUMsdUVBQWtFO29CQUNwRywwREFDRSxJQUFJLEVBQUMsVUFBVSxFQUNmLE9BQU8sRUFBRSxZQUFZLEVBQ3JCLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUNoRDs2Q0FFSSxDQUNKLENBQ0YsQ0FDUDtRQUVELCtDQUFDLDZEQUFvQixJQUNuQixjQUFjLEVBQUUsV0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEVBQzFDLGtCQUFrQixFQUFFLGNBQWMsR0FDbEMsQ0FDRSxDQUNQO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL21hcC1kaXN0cmlidWl0aW9uLWludGVydmFsL3NyYy9ydW50aW1lL3V0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3JlbmRlcmVycy9DbGFzc0JyZWFrc1JlbmRlcmVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3N5bWJvbHMvU2ltcGxlTWFya2VyU3ltYm9sXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3dpZGdldHMvTGVnZW5kXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9tYXAtZGlzdHJpYnVpdGlvbi1pbnRlcnZhbC9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHV0aWxzLnRzXHJcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvRmVhdHVyZUxheWVyXCJcclxuaW1wb3J0IExlZ2VuZCBmcm9tIFwiQGFyY2dpcy9jb3JlL3dpZGdldHMvTGVnZW5kXCJcclxuaW1wb3J0IENsYXNzQnJlYWtzUmVuZGVyZXIgZnJvbSBcIkBhcmNnaXMvY29yZS9yZW5kZXJlcnMvQ2xhc3NCcmVha3NSZW5kZXJlclwiXHJcbmltcG9ydCBTaW1wbGVNYXJrZXJTeW1ib2wgZnJvbSBcIkBhcmNnaXMvY29yZS9zeW1ib2xzL1NpbXBsZU1hcmtlclN5bWJvbFwiXHJcblxyXG5jb25zdCBjb3Jlc1RpcG9zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gIGxhdGVyYWw6IFwicmdiYSg4OCwgMTksIDI1MiwgMC43KVwiLFxyXG4gIHRlc3RlbXVuaG86IFwicmdiYSgyNTUsIDAsIDI1NSwgMC43KVwiLFxyXG4gIGNhbGhhOiBcInJnYmEoMjQ1LCAyMDEsIDM4LCAwLjcpXCIsXHJcbiAgcGx1ZzogXCJyZ2JhKDEyNSwgMjUzLCAxNDgsIDAuNylcIixcclxuICBcIndob2xlIGNvcmVcIjogXCJyZ2JhKDI1NSwgNDMsIDI0LCAwLjcpXCJcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCKHtcclxuICBqaW11TWFwVmlldyxcclxuICBkYWRvcyxcclxuICBjb2xvckZpbGwsXHJcbiAgaWRDYW1hZGEsXHJcbiAgaWRMZWdlbmRhLFxyXG4gIHRpdGxlTGVnZW5kYVxyXG59OiB7XHJcbiAgamltdU1hcFZpZXc6IGFueVxyXG4gIGRhZG9zOiB7IGNvZGlnb1BvY286IG51bWJlcjsgdG90YWw6IG51bWJlciB9W11cclxuICBjb2xvckZpbGw6IHN0cmluZ1xyXG4gIGlkQ2FtYWRhOiBzdHJpbmdcclxuICBpZExlZ2VuZGE6IHN0cmluZ1xyXG4gIHRpdGxlTGVnZW5kYTogc3RyaW5nXHJcbn0pIHtcclxuICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlld1xyXG4gIGNvbnN0IG1hcCA9IHZpZXcubWFwXHJcblxyXG4gIGNvbnN0IGNvZGlnb3MgPSBkYWRvcy5tYXAocCA9PiBwLmNvZGlnb1BvY28pLmpvaW4oJywnKVxyXG4gIGNvbnN0IGV4cHJlc3Npb24gPSBgUE9DT19DRF9QT0NPIElOICgke2NvZGlnb3N9KWBcclxuXHJcbiAgY29uc3QgY2FtYWRhUG/Dp29zID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICB1cmw6ICdodHRwczovL2Jhc2VnaXMucGV0cm9icmFzLmNvbS5ici9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9FWFBMT1JBL0ZlYXR1cmVfUG9jb3MvTWFwU2VydmVyLzAnLFxyXG4gICAgZGVmaW5pdGlvbkV4cHJlc3Npb246IGV4cHJlc3Npb24sXHJcbiAgICB0aXRsZTogJ1Bvw6dvcycsXHJcbiAgICBvdXRGaWVsZHM6IFsnKiddLFxyXG4gICAgdmlzaWJsZTogZmFsc2VcclxuICB9KVxyXG5cclxuICBhd2FpdCBjYW1hZGFQb8Onb3MubG9hZCgpXHJcblxyXG4gIGNvbnN0IHF1ZXJ5UmVzdWx0ID0gYXdhaXQgY2FtYWRhUG/Dp29zLnF1ZXJ5RmVhdHVyZXMoe1xyXG4gICAgd2hlcmU6IGV4cHJlc3Npb24sXHJcbiAgICBvdXRGaWVsZHM6IFsnKiddLFxyXG4gICAgcmV0dXJuR2VvbWV0cnk6IHRydWVcclxuICB9KVxyXG5cclxuICBjb25zdCBmZWF0dXJlcyA9IHF1ZXJ5UmVzdWx0LmZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4ge1xyXG4gICAgY29uc3QgZGFkbyA9IGRhZG9zLmZpbmQocCA9PiBwLmNvZGlnb1BvY28gPT09IGZlYXR1cmUuYXR0cmlidXRlcy5QT0NPX0NEX1BPQ08pXHJcbiAgICBmZWF0dXJlLmF0dHJpYnV0ZXMuUE9DT19NRF9NRVJJRF9DRU5UID0gZGFkbyA/IGRhZG8udG90YWwgOiAwXHJcbiAgICByZXR1cm4gZmVhdHVyZVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHZhbG9yZXMgPSBkYWRvcy5tYXAocCA9PiBwLnRvdGFsKVxyXG4gIGxldCBtaW4gPSBNYXRoLm1pbiguLi52YWxvcmVzKVxyXG4gIGxldCBtYXggPSBNYXRoLm1heCguLi52YWxvcmVzKVxyXG5cclxuICBjb25zdCBpbmZvID0gW11cclxuICBjb25zdCBvdXRsaW5lID0geyBjb2xvcjogXCJibGFja1wiLCB3aWR0aDogXCIxcHhcIiB9XHJcblxyXG4gIGlmIChtaW4gPT09IG1heCAmJiBtaW4gPT09IDApIHtcclxuICAgIGluZm8ucHVzaCh7XHJcbiAgICAgIG1pblZhbHVlOiAwLFxyXG4gICAgICBtYXhWYWx1ZTogMCxcclxuICAgICAgbGFiZWw6IFwiTsOjbyBow6EgZGFkb3Mgc3VmaWNpZW50ZXNcIixcclxuICAgICAgc3ltYm9sOiBuZXcgU2ltcGxlTWFya2VyU3ltYm9sKHsgY29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwwKVwiLCBzaXplOiAwLCBzdHlsZTogXCJjaXJjbGVcIiwgb3V0bGluZSB9KVxyXG4gICAgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgemVyYWRvcyA9IHZhbG9yZXMuZmlsdGVyKHYgPT4gdiA9PT0gMCkubGVuZ3RoXHJcbiAgICBjb25zdCBuYW9aZXJhZG9zID0gdmFsb3Jlcy5maWx0ZXIodiA9PiB2ID4gMClcclxuXHJcbiAgICBpZiAoemVyYWRvcyA+IDApIHtcclxuICAgICAgaW5mby5wdXNoKHtcclxuICAgICAgICBtaW5WYWx1ZTogMCxcclxuICAgICAgICBtYXhWYWx1ZTogMCxcclxuICAgICAgICBsYWJlbDogYHwgMCB8ICgke3plcmFkb3N9IHBvw6dvJHt6ZXJhZG9zID4gMSA/ICdzJyA6ICcnfSlgLFxyXG4gICAgICAgIHN5bWJvbDogbmV3IFNpbXBsZU1hcmtlclN5bWJvbCh7IGNvbG9yOiBcInJnYmEoMjAwLDIwMCwyMDAsMC4zKVwiLCBzaXplOiA2LCBzdHlsZTogXCJjaXJjbGVcIiwgb3V0bGluZSB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1pbiA9IDFcclxuICAgIGNvbnN0IG4gPSBuYW9aZXJhZG9zLmxlbmd0aFxyXG4gICAgY29uc3QgbnVtQ2xhc3NlcyA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQoMSArIDMuMyAqIE1hdGgubG9nMTAobikpKVxyXG4gICAgY29uc3QgYnJlYWtzID0gTWF0aC5jZWlsKChtYXggLSBtaW4gKyAxKSAvIG51bUNsYXNzZXMpXHJcbiAgICBjb25zdCBtYXhTaXplID0gNDBcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNsYXNzZXM7IGkrKykge1xyXG4gICAgICBjb25zdCBtaW5WYWx1ZSA9IG1pbiArIChpICogYnJlYWtzKVxyXG4gICAgICBjb25zdCBtYXhWYWx1ZSA9IG1pbiArICgoaSArIDEpICogYnJlYWtzKSAtIDFcclxuICAgICAgaWYgKG1pblZhbHVlID4gbWF4KSBicmVha1xyXG5cclxuICAgICAgY29uc3QgY291bnQgPSBuYW9aZXJhZG9zLmZpbHRlcih2ID0+IHYgPj0gbWluVmFsdWUgJiYgdiA8PSBtYXhWYWx1ZSkubGVuZ3RoXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gYCR7bWluVmFsdWV9IHwtLS18ICR7bWF4VmFsdWV9ICgke2NvdW50fSBwb8OnbyR7Y291bnQgPiAxID8gJ3MnIDogJyd9KWBcclxuXHJcbiAgICAgIGNvbnN0IHNpemUgPSA2ICsgKGkgKiAobWF4U2l6ZSAvIG51bUNsYXNzZXMpKVxyXG5cclxuICAgICAgaW5mby5wdXNoKHtcclxuICAgICAgICBtaW5WYWx1ZSxcclxuICAgICAgICBtYXhWYWx1ZSxcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICBzeW1ib2w6IG5ldyBTaW1wbGVNYXJrZXJTeW1ib2woeyBjb2xvcjogY29sb3JGaWxsLCBzaXplLCBzdHlsZTogXCJjaXJjbGVcIiwgb3V0bGluZSB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVuZGVyZXIgPSBuZXcgQ2xhc3NCcmVha3NSZW5kZXJlcih7XHJcbiAgICBmaWVsZDogXCJQT0NPX01EX01FUklEX0NFTlRcIixcclxuICAgIGNsYXNzQnJlYWtJbmZvczogaW5mb1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGNhbWFkYURpc3RyaWJ1aWNhbyA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgaWQ6IGlkQ2FtYWRhLFxyXG4gICAgc291cmNlOiBmZWF0dXJlcyxcclxuICAgIGZpZWxkczogY2FtYWRhUG/Dp29zLmZpZWxkcyxcclxuICAgIG9iamVjdElkRmllbGQ6IFwiT0JKRUNUSURcIixcclxuICAgIGdlb21ldHJ5VHlwZTogXCJwb2ludFwiLFxyXG4gICAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiAxMDIxMDAgfSxcclxuICAgIHJlbmRlcmVyLFxyXG4gICAgdGl0bGU6IHRpdGxlTGVnZW5kYSxcclxuICAgIGxpc3RNb2RlOiBcImhpZGVcIixcclxuICAgIC8vIGxheWVyQ3JlYXRlZEZyb21Qb3J0YWw6IGZhbHNlXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZXhpc3RlbnRlID0gbWFwLmZpbmRMYXllckJ5SWQoaWRDYW1hZGEpXHJcbiAgaWYgKGV4aXN0ZW50ZSkgbWFwLnJlbW92ZShleGlzdGVudGUpXHJcbiAgbWFwLmFkZChjYW1hZGFEaXN0cmlidWljYW8pXHJcblxyXG4gIGNvbnN0IGxlZ2VuZCA9IG5ldyBMZWdlbmQoe1xyXG4gICAgdmlldyxcclxuICAgIGxheWVySW5mb3M6IFt7IGxheWVyOiBjYW1hZGFEaXN0cmlidWljYW8sIHRpdGxlOiB0aXRsZUxlZ2VuZGEgfV1cclxuICB9KVxyXG4gIC8vIHZpZXcudWkuYWRkKGxlZ2VuZCwgXCJib3R0b20tbGVmdFwiKVxyXG59XHJcblxyXG5leHBvcnQgeyBjb3Jlc1RpcG9zIH0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX3JlbmRlcmVyc19DbGFzc0JyZWFrc1JlbmRlcmVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9zeW1ib2xzX1NpbXBsZU1hcmtlclN5bWJvbF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfd2lkZ2V0c19MZWdlbmRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbi8qKiBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCAqL1xyXG5pbXBvcnQgeyBSZWFjdCwganN4LCBjc3MsIEdsb2JhbCB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7IGdlcmFyTWFwYURpc3RyaWJ1aWNhb0VCLCBjb3Jlc1RpcG9zIH0gZnJvbSAnLi91dGlscydcclxuXHJcbi8qID09PT09IFRpcG9zIGF1eGlsaWFyZXMgcC8gYSBmYWl4YSA9PT09PSAqL1xyXG50eXBlIENvZGlnb1BvY28gPSBudW1iZXJcclxudHlwZSBNc2dGYWl4YUludGVyZXNzZSA9IHsgdHlwZTogJ2ZhaXhhLWludGVyZXNzZSc7IGNvZGlnb3NQb2NvczogQ29kaWdvUG9jb1tdIH1cclxuXHJcbmNvbnN0IGxvZzEwID0gKHg6IG51bWJlcikgPT4gTWF0aC5sb2cxMCA/IE1hdGgubG9nMTAoeCkgOiBNYXRoLmxvZyh4KSAvIE1hdGguTE4xMFxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXJRdWVicmFzKGRhZG9zOiB7IHRvdGFsOiBudW1iZXIgfVtdLCBjb2xvckZpbGw6IHN0cmluZykge1xyXG4gIGNvbnN0IHZhbG9yZXMgPSBkYWRvcy5tYXAocCA9PiBwLnRvdGFsKVxyXG4gIGxldCBtaW4gPSBNYXRoLm1pbiguLi52YWxvcmVzKVxyXG4gIGxldCBtYXggPSBNYXRoLm1heCguLi52YWxvcmVzKVxyXG5cclxuICBjb25zdCBpbmZvOiB7IGxhYmVsOiBzdHJpbmc7IHNpemU6IG51bWJlcjsgY29yOiBzdHJpbmcsIGNvdW50OiBudW1iZXIgfVtdID0gW11cclxuICBjb25zdCBvdXRsaW5lU2l6ZTAgPSAwXHJcblxyXG4gIGlmIChtaW4gPT09IDAgJiYgbWF4ID09PSAwKSB7XHJcbiAgICBpbmZvLnB1c2goeyBsYWJlbDogJ07Do28gaMOhIGRhZG9zIHN1ZmljaWVudGVzJywgc2l6ZTogMCwgY29yOiBjb2xvckZpbGwsIGNvdW50OiAwIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHplcmFkb3MgPSB2YWxvcmVzLmZpbHRlcih2ID0+IHYgPT09IDApLmxlbmd0aFxyXG4gICAgY29uc3QgbmFvWmVyYWRvcyA9IHZhbG9yZXMuZmlsdGVyKHYgPT4gdiA+IDApXHJcblxyXG4gICAgaWYgKHplcmFkb3MgPiAwKSB7XHJcbiAgICAgIGluZm8ucHVzaCh7XHJcbiAgICAgICAgbGFiZWw6IGB8IDAgfCAoJHt6ZXJhZG9zfSBwb8OnbyR7emVyYWRvcyA+IDEgPyAncycgOiAnJ30pYCxcclxuICAgICAgICBzaXplOiA2LCBjb3I6ICdyZ2JhKDIwMCwyMDAsMjAwLDAuMyknLCBjb3VudDogemVyYWRvc1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1pbiA9IDFcclxuICAgIGNvbnN0IG4gPSBuYW9aZXJhZG9zLmxlbmd0aFxyXG4gICAgY29uc3QgbnVtQ2xhc3NlcyA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQoMSArIDMuMyAqIGxvZzEwKG4pKSlcclxuICAgIGNvbnN0IGJyZWFrcyA9IE1hdGguY2VpbCgobWF4IC0gbWluICsgMSkgLyBudW1DbGFzc2VzKVxyXG4gICAgY29uc3QgbWF4U2l6ZSA9IDQwXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1DbGFzc2VzOyBpKyspIHtcclxuICAgICAgY29uc3QgbWluVmFsdWUgPSBtaW4gKyBpICogYnJlYWtzXHJcbiAgICAgIGNvbnN0IG1heFZhbHVlID0gbWluICsgKGkgKyAxKSAqIGJyZWFrcyAtIDFcclxuICAgICAgaWYgKG1pblZhbHVlID4gbWF4KSBicmVha1xyXG5cclxuICAgICAgY29uc3QgY291bnQgPSBuYW9aZXJhZG9zLmZpbHRlcih2ID0+IHYgPj0gbWluVmFsdWUgJiYgdiA8PSBtYXhWYWx1ZSkubGVuZ3RoXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gYCR7bWluVmFsdWV9IHwtLS18ICR7bWF4VmFsdWV9ICgke2NvdW50fSBwb8OnbyR7Y291bnQgPiAxID8gJ3MnIDogJyd9KWBcclxuICAgICAgY29uc3Qgc2l6ZSA9IDYgKyBpICogKG1heFNpemUgLyBudW1DbGFzc2VzKVxyXG5cclxuICAgICAgaW5mby5wdXNoKHsgbGFiZWwsIHNpemUsIGNvcjogY29sb3JGaWxsLCBjb3VudCB9KVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gaW5mb1xyXG59XHJcblxyXG5jb25zdCBNQVhfQlVCQkxFID0gNDBcclxuY29uc3QgZ2xvYmFsUGFuZWxTdHlsZSA9IGNzc2BcclxuICBkaXZbcm9sZT0nZGlhbG9nJ11bYXJpYS1sYWJlbD0nbWFwYSBkZSBkaXN0cmlidWnDp8OjbyddIHtcclxuICAgIGhlaWdodDogNTUwcHggIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDU1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IGJ1YmJsZUJveFN0eWxlID0gY3NzYFxyXG4gIHdpZHRoOiAke01BWF9CVUJCTEV9cHg7XHJcbiAgaGVpZ2h0OiAke01BWF9CVUJCTEV9cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG5gXHJcblxyXG4vKiAtLS0tLS0tLS0tICBFc3RpbG9zIHJldXRpbGl6YWRvcyBkbyB3aWRnZXQgYW50aWdvICAtLS0tLS0tLS0tICovXHJcbmNvbnN0IHdyYXBwZXJTdHlsZSA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLDAsMCwuMSk7IHBhZGRpbmc6IDE2cHg7IG92ZXJmbG93OiBoaWRkZW47XHJcbmBcclxuY29uc3QgdGl0bGVTdHlsZSA9IGNzc2Bmb250LXdlaWdodDo2MDA7IG1hcmdpbi1ib3R0b206NHB4OyBkaXNwbGF5OmJsb2NrO2BcclxuY29uc3Qgc2VsZWN0U3R5bGUgPSBjc3Ngd2lkdGg6MTAwJTsgcGFkZGluZzo2cHggOHB4OyBtYXJnaW4tYm90dG9tOjEycHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjY2NjOyBib3JkZXItcmFkaXVzOjRweDtgXHJcbmNvbnN0IGxpc3RTdHlsZSA9IGNzc2BvdmVyZmxvdy15OmF1dG87IG1hcmdpbi1ib3R0b206MTJweDtcclxuICBwYWRkaW5nOjhweDsgYmFja2dyb3VuZDojZmFmYWZhOyBib3JkZXI6MXB4IHNvbGlkICNlZWU7IGJvcmRlci1yYWRpdXM6NHB4O2BcclxuY29uc3QgY2hlY2tib3hSb3dTdHlsZSA9IGNzc2BkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgbWFyZ2luLWJvdHRvbTo2cHg7IGN1cnNvcjpwb2ludGVyO2BcclxuY29uc3Qgc3VtbWFyeUxpc3RTdHlsZSA9IGNzc2BcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDM2cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmBcclxuY29uc3Qgc3VtbWFyeUl0ZW1TdHlsZSA9IGNzc2BkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgbWFyZ2luLWJvdHRvbTo2cHg7YFxyXG5jb25zdCByYW5nZUxhYmVsU3R5bGUgPSBjc3NgZm9udC1zaXplOjAuOXJlbTtgXHJcbmNvbnN0IGZvb3RlclN0eWxlID0gY3NzYFxyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgcGFkZGluZzogNHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTZweDsgLyogZXNwYcOnbyBlbnRyZSBvcyBjb250cm9sZXMgZG8gcm9kYXDDqSAqL1xyXG5gXHJcbmNvbnN0IGZvb3RlckxhYmVsU3R5bGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuYFxyXG5cclxuLyogLS0tLS0tLS0tLSAgTWFwZWFtZW50byBjYW1wb3MgIC0tLS0tLS0tLS0gKi9cclxuaW50ZXJmYWNlIEFtb3N0cmFJdGVtIHtcclxuICBjb2RpZ29Qb2NvOiBudW1iZXJcclxuICB0b3RhbEFtb3N0cmFzTGF0ZXJhaXM6IG51bWJlclxyXG4gIHRvdGFsQ2FsaGFzOiBudW1iZXJcclxuICB0b3RhbFBsdWdzOiBudW1iZXJcclxuICB0b3RhbFRlc3RlbXVuaG9zOiBudW1iZXJcclxuICB0b3RhbFdob2xlQ29yZTogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IFRZUEVfRklFTEQ6IFJlY29yZDxzdHJpbmcsIGtleW9mIEFtb3N0cmFJdGVtPiA9IHtcclxuICBsYXRlcmFsOiAndG90YWxBbW9zdHJhc0xhdGVyYWlzJyxcclxuICB0ZXN0ZW11bmhvOiAndG90YWxUZXN0ZW11bmhvcycsXHJcbiAgY2FsaGE6ICd0b3RhbENhbGhhcycsXHJcbiAgcGx1ZzogJ3RvdGFsUGx1Z3MnLFxyXG4gICd3aG9sZSBjb3JlJzogJ3RvdGFsV2hvbGVDb3JlJ1xyXG59XHJcblxyXG5jb25zdCBMSVNUX1RZUEVTID0gT2JqZWN0LmtleXMoVFlQRV9GSUVMRClcclxuXHJcbi8qIC0tLS0tLS0tLS0gIE1PQ0sgasOhIGV4aXN0ZW50ZSAtLS0tLS0tLS0tICovXHJcbmNvbnN0IERBRE9TX01PQ0s6IEFtb3N0cmFJdGVtW10gPSBbXHJcbiAgeyBjb2RpZ29Qb2NvOiAxMDEwLCB0b3RhbEFtb3N0cmFzTGF0ZXJhaXM6IDAsIHRvdGFsQ2FsaGFzOiAzLCB0b3RhbFBsdWdzOiAwLCB0b3RhbFRlc3RlbXVuaG9zOiAxNCwgdG90YWxXaG9sZUNvcmU6IDAgfSxcclxuICB7IGNvZGlnb1BvY286IDEzNDAsIHRvdGFsQW1vc3RyYXNMYXRlcmFpczogMCwgdG90YWxDYWxoYXM6IDI2OSwgdG90YWxQbHVnczogMCwgdG90YWxUZXN0ZW11bmhvczogMzMsIHRvdGFsV2hvbGVDb3JlOiAwIH0sXHJcbiAgeyBjb2RpZ29Qb2NvOiAxNTkyLCB0b3RhbEFtb3N0cmFzTGF0ZXJhaXM6IDAsIHRvdGFsQ2FsaGFzOiAxOSwgdG90YWxQbHVnczogMCwgdG90YWxUZXN0ZW11bmhvczogMjAsIHRvdGFsV2hvbGVDb3JlOiAwIH0sXHJcbiAgeyBjb2RpZ29Qb2NvOiAyMDE0LCB0b3RhbEFtb3N0cmFzTGF0ZXJhaXM6IDAsIHRvdGFsQ2FsaGFzOiAwLCB0b3RhbFBsdWdzOiAwLCB0b3RhbFRlc3RlbXVuaG9zOiAxNSwgdG90YWxXaG9sZUNvcmU6IDAgfSxcclxuICB7IGNvZGlnb1BvY286IDQyMzAsIHRvdGFsQW1vc3RyYXNMYXRlcmFpczogMjQsIHRvdGFsQ2FsaGFzOiAwLCB0b3RhbFBsdWdzOiAwLCB0b3RhbFRlc3RlbXVuaG9zOiA3LCB0b3RhbFdob2xlQ29yZTogMCB9LFxyXG4gIHsgY29kaWdvUG9jbzogNDMyNywgdG90YWxBbW9zdHJhc0xhdGVyYWlzOiAxMiwgdG90YWxDYWxoYXM6IDI2LCB0b3RhbFBsdWdzOiAwLCB0b3RhbFRlc3RlbXVuaG9zOiAxNiwgdG90YWxXaG9sZUNvcmU6IDAgfSxcclxuICB7IGNvZGlnb1BvY286IDQ0MzcsIHRvdGFsQW1vc3RyYXNMYXRlcmFpczogMCwgdG90YWxDYWxoYXM6IDAsIHRvdGFsUGx1Z3M6IDAsIHRvdGFsVGVzdGVtdW5ob3M6IDUsIHRvdGFsV2hvbGVDb3JlOiAwIH0sXHJcbiAgeyBjb2RpZ29Qb2NvOiA0NTIzLCB0b3RhbEFtb3N0cmFzTGF0ZXJhaXM6IDAsIHRvdGFsQ2FsaGFzOiAwLCB0b3RhbFBsdWdzOiAwLCB0b3RhbFRlc3RlbXVuaG9zOiAyLCB0b3RhbFdob2xlQ29yZTogMCB9LFxyXG4gIHsgY29kaWdvUG9jbzogNzk0NCwgdG90YWxBbW9zdHJhc0xhdGVyYWlzOiAwLCB0b3RhbENhbGhhczogMjI4LCB0b3RhbFBsdWdzOiAwLCB0b3RhbFRlc3RlbXVuaG9zOiAzLCB0b3RhbFdob2xlQ29yZTogMCB9LFxyXG4gIHsgY29kaWdvUG9jbzogODgzMCwgdG90YWxBbW9zdHJhc0xhdGVyYWlzOiAwLCB0b3RhbENhbGhhczogNDAsIHRvdGFsUGx1Z3M6IDUxLCB0b3RhbFRlc3RlbXVuaG9zOiAzLCB0b3RhbFdob2xlQ29yZTogMCB9LFxyXG4gIHsgY29kaWdvUG9jbzogMTc2OTYsIHRvdGFsQW1vc3RyYXNMYXRlcmFpczogNDQsIHRvdGFsQ2FsaGFzOiAxNywgdG90YWxQbHVnczogMCwgdG90YWxUZXN0ZW11bmhvczogMSwgdG90YWxXaG9sZUNvcmU6IDAgfVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQocHJvcHM6IGFueSkge1xyXG4gIC8qIC0tLS0tLS0tLS0gZXN0YWRvcyAtLS0tLS0tLS0tICovXHJcbiAgY29uc3QgW2ppbXVNYXBWaWV3LCBzZXRKaW11TWFwVmlld10gPSBSZWFjdC51c2VTdGF0ZTxKaW11TWFwVmlldz4oKVxyXG4gIGNvbnN0IFtjYXRlZ29yaWEsIHNldENhdGVnb3JpYV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKVxyXG4gIGNvbnN0IFt0aXBvc1NlbCwgc2V0VGlwb3NTZWxdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKVxyXG4gIGNvbnN0IFtzaG93RW1wdHksIHNldFNob3dFbXB0eV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuXHJcbiAgLyogPT09PT0gTk9WTzogZmxhZyArIGNvbmp1bnRvIGRhIGZhaXhhID09PT09ICovXHJcbiAgY29uc3QgW3dpdGhJbnRlcmVzdCwgc2V0V2l0aEludGVyZXN0XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtmYWl4YVNldCwgc2V0RmFpeGFTZXRdID0gUmVhY3QudXNlU3RhdGU8U2V0PENvZGlnb1BvY28+PihcclxuICAgICgpID0+IG5ldyBTZXQ8Q29kaWdvUG9jbz4oQXJyYXkuaXNBcnJheShwcm9wcz8uY29kaWdvc0ZhaXhhSW50ZXJlc3NlKSA/IHByb3BzLmNvZGlnb3NGYWl4YUludGVyZXNzZSA6IFtdKVxyXG4gIClcclxuXHJcbiAgLyogUmVjZWJlIGZhaXhhIHZpYSBwb3N0TWVzc2FnZTogeyB0eXBlOidmYWl4YS1pbnRlcmVzc2UnLCBjb2RpZ29zUG9jb3M6Wy4uLl0gfSAqL1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvbk1zZyA9IChldjogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBldj8uZGF0YSBhcyBNc2dGYWl4YUludGVyZXNzZVxyXG4gICAgICBpZiAoIWRhdGEgfHwgZGF0YS50eXBlICE9PSAnZmFpeGEtaW50ZXJlc3NlJyB8fCAhQXJyYXkuaXNBcnJheShkYXRhLmNvZGlnb3NQb2NvcykpIHJldHVyblxyXG4gICAgICBzZXRGYWl4YVNldChuZXcgU2V0PENvZGlnb1BvY28+KGRhdGEuY29kaWdvc1BvY29zKSlcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Nc2cpXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1zZylcclxuICB9LCBbXSlcclxuXHJcbiAgLyogLS0tLS0tLS0tLSBoZWxwZXI6IGFwbGljYSBmYWl4YSBkZSBpbnRlcmVzc2UgLS0tLS0tLS0tLSAqL1xyXG4gIGNvbnN0IGFwbGljYXJGYWl4YUludGVyZXNzZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKGFycjogeyBjb2RpZ29Qb2NvOiBudW1iZXI7IHRvdGFsOiBudW1iZXIgfVtdKSA9PiB7XHJcbiAgICAgIGlmICghd2l0aEludGVyZXN0KSByZXR1cm4gYXJyXHJcbiAgICAgIGlmICghZmFpeGFTZXQgfHwgZmFpeGFTZXQuc2l6ZSA9PT0gMCkgcmV0dXJuIGFyclxyXG4gICAgICByZXR1cm4gYXJyLmZpbHRlcihpID0+IGZhaXhhU2V0LmhhcyhpLmNvZGlnb1BvY28pKVxyXG4gICAgfSxcclxuICAgIFt3aXRoSW50ZXJlc3QsIGZhaXhhU2V0XVxyXG4gIClcclxuXHJcbiAgLyogLS0tLS0tLS0tLSBoZWxwZXI6IGdlcmEgW3tjb2RpZ29Qb2NvLHRvdGFsfV0gcC8gMSB0aXBvIChjb20vZmFpeGEpIC0tLS0tLS0tLS0gKi9cclxuICBjb25zdCBnZXJhckFycmF5VG90YWwgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgICh0aXBvOiBzdHJpbmcpID0+IGFwbGljYXJGYWl4YUludGVyZXNzZShcclxuICAgICAgREFET1NfTU9DSy5tYXAoZCA9PiAoe1xyXG4gICAgICAgIGNvZGlnb1BvY286IGQuY29kaWdvUG9jbyxcclxuICAgICAgICB0b3RhbDogZFtUWVBFX0ZJRUxEW3RpcG9dXVxyXG4gICAgICB9KSlcclxuICAgICksXHJcbiAgICBbYXBsaWNhckZhaXhhSW50ZXJlc3NlXVxyXG4gIClcclxuXHJcbiAgLyogLS0tLS0tLS0tLSBlZmVpdG86IHJlZGVzZW5oYSBxdWFuZG8gY2hlY2tib3hlcy9mbGFnIG11ZGFtIC0tLS0tLS0tLS0gKi9cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFqaW11TWFwVmlldykgcmV0dXJuXHJcbiAgICBjb25zdCB7IHZpZXcgfSA9IGppbXVNYXBWaWV3XHJcblxyXG4gICAgLyogTGltcGEgY2FtYWRhcyBhbnRpZ2FzIGRlIGRpc3RyaWJ1acOnw6NvICovXHJcbiAgICBMSVNUX1RZUEVTLmZvckVhY2godCA9PiB7XHJcbiAgICAgIGNvbnN0IGxheWVyID0gdmlldy5tYXAuZmluZExheWVyQnlJZCgnYW1vc3RyYXNfJyArIHQpXHJcbiAgICAgIGlmIChsYXllcikgdmlldy5tYXAucmVtb3ZlKGxheWVyKVxyXG4gICAgfSlcclxuXHJcbiAgICAvKiBEZXNlbmhhIGNhZGEgdGlwbyBtYXJjYWRvICovXHJcbiAgICB0aXBvc1NlbC5mb3JFYWNoKHRpcG8gPT4ge1xyXG4gICAgICBjb25zdCBkYWRvcyA9IGdlcmFyQXJyYXlUb3RhbCh0aXBvKVxyXG4gICAgICBjb25zdCBjb3IgPSBjb3Jlc1RpcG9zW3RpcG9dIHx8ICdyZ2JhKDAsMCwwLDAuNSknXHJcblxyXG4gICAgICBnZXJhck1hcGFEaXN0cmlidWljYW9FQih7XHJcbiAgICAgICAgamltdU1hcFZpZXcsXHJcbiAgICAgICAgZGFkb3MsXHJcbiAgICAgICAgY29sb3JGaWxsOiBjb3IsXHJcbiAgICAgICAgaWRDYW1hZGE6ICdhbW9zdHJhc18nICsgdGlwbyxcclxuICAgICAgICBpZExlZ2VuZGE6ICdsZ2RfYW1vc3RyYXNfJyArIHRpcG8sXHJcbiAgICAgICAgdGl0bGVMZWdlbmRhOiAod2l0aEludGVyZXN0ID8gJ0ludGVydmFsbyBkZSBJbnRlcmVzc2UgLSAnIDogJycpICsgKHRpcG8uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aXBvLnNsaWNlKDEpKSxcclxuICAgICAgICB3aXRoSW50ZXJlc3QgICAvLyBvcGNpb25hbCwgY2FzbyBhIHV0aWwgdHJhdGUgaW50ZXJuYW1lbnRlXHJcbiAgICAgIH0gYXMgYW55KVxyXG4gICAgfSlcclxuICB9LCBbamltdU1hcFZpZXcsIHRpcG9zU2VsLCBnZXJhckFycmF5VG90YWwsIHdpdGhJbnRlcmVzdF0pXHJcblxyXG4gIC8qIC0tLS0tLS0tLS0gdG9nZ2xlIGNoZWNrYm94IC0tLS0tLS0tLS0gKi9cclxuICBjb25zdCB0b2dnbGVUaXBvID0gKHRpcG86IHN0cmluZykgPT5cclxuICAgIHNldFRpcG9zU2VsKHByZXYgPT5cclxuICAgICAgcHJldi5pbmNsdWRlcyh0aXBvKSA/IHByZXYuZmlsdGVyKHQgPT4gdCAhPT0gdGlwbykgOiBbLi4ucHJldiwgdGlwb11cclxuICAgIClcclxuXHJcbiAgY29uc3Qgc3VtbWFyeUdyb3VwcyA9IHRpcG9zU2VsLm1hcCh0aXBvID0+IHtcclxuICAgIGNvbnN0IGRhZG9zID0gZ2VyYXJBcnJheVRvdGFsKHRpcG8pXHJcbiAgICBjb25zdCBjb3IgPSBjb3Jlc1RpcG9zW3RpcG9dXHJcblxyXG4gICAgbGV0IHJvd3MgPSBjYWxjdWxhclF1ZWJyYXMoZGFkb3MsIGNvcikucmV2ZXJzZSgpXHJcbiAgICBpZiAoIXNob3dFbXB0eSkge1xyXG4gICAgICByb3dzID0gcm93cy5maWx0ZXIociA9PiByLmNvdW50ID4gMCB8fCByLmxhYmVsLnN0YXJ0c1dpdGgoJ3wgMCB8JykpXHJcbiAgICB9XHJcbiAgICByZXR1cm4geyB0aXBvLCByb3dzIH1cclxuICB9KVxyXG5cclxuICAvKiAtLS0tLS0tLS0tIHJlbmRlciAtLS0tLS0tLS0tICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY3NzPXt3cmFwcGVyU3R5bGV9PlxyXG4gICAgICA8R2xvYmFsIHN0eWxlcz17Z2xvYmFsUGFuZWxTdHlsZX0gLz5cclxuICAgICAgPGxhYmVsIGNzcz17dGl0bGVTdHlsZX0+U2VsZWNpb25lIGEgZGlzdHJpYnVpw6fDo288L2xhYmVsPlxyXG5cclxuICAgICAgPHNlbGVjdCBjc3M9e3NlbGVjdFN0eWxlfVxyXG4gICAgICAgIHZhbHVlPXtjYXRlZ29yaWF9XHJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBzZXRDYXRlZ29yaWEoZS50YXJnZXQudmFsdWUpOyBzZXRUaXBvc1NlbChbXSkgfX0+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nJz5TZWxlY2lvbmUgbyB0aXBvPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nc2FtcGxlJz5EaXN0cmlidWnDp8OjbyBkZSBhbW9zdHJhPC9vcHRpb24+XHJcbiAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAge2NhdGVnb3JpYSA9PT0gJ3NhbXBsZScgJiYgKFxyXG4gICAgICAgIDxkaXYgY3NzPXtsaXN0U3R5bGV9PlxyXG4gICAgICAgICAge0xJU1RfVFlQRVMubWFwKHQgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17dH0gY3NzPXtjaGVja2JveFJvd1N0eWxlfSBvbkNsaWNrPXsoKSA9PiB0b2dnbGVUaXBvKHQpfT5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aXBvc1NlbC5pbmNsdWRlcyh0KX1cclxuICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogNiB9fSAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdC5zbGljZSgxKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7c3VtbWFyeUdyb3Vwcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IGNzcz17c3VtbWFyeUxpc3RTdHlsZX0+XHJcbiAgICAgICAgICB7c3VtbWFyeUdyb3Vwcy5tYXAoZ3JvdXAgPT4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtncm91cC50aXBvfT5cclxuICAgICAgICAgICAgICB7LyogdMOtdHVsbyBkbyBjb25qdW50byAoYXBhcmVjZSBzw7MgMXgpICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY3NzPXtjc3NgZm9udC13ZWlnaHQ6NjAwOyBtYXJnaW46NHB4IDA7YH0+XHJcbiAgICAgICAgICAgICAgICB7KHdpdGhJbnRlcmVzdCA/ICdJbnRlcnZhbG8gZGUgSW50ZXJlc3NlIC0gJyA6ICcnKX1cclxuICAgICAgICAgICAgICAgIHtncm91cC50aXBvLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZ3JvdXAudGlwby5zbGljZSgxKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgey8qIGxpbmhhcyBkYSBmYWl4YSwgasOhIGVtIG9yZGVtIGRlY3Jlc2NlbnRlICovfVxyXG4gICAgICAgICAgICAgIHtncm91cC5yb3dzLm1hcCgociwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7Z3JvdXAudGlwb30tJHtpZHh9YH0gY3NzPXtzdW1tYXJ5SXRlbVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjc3M9e2J1YmJsZUJveFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPXtyLnNpemV9IGhlaWdodD17ci5zaXplfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9e3Iuc2l6ZSAvIDJ9IGN5PXtyLnNpemUgLyAyfSByPXtyLnNpemUgLyAyfSBmaWxsPXtyLmNvcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNzcz17cmFuZ2VMYWJlbFN0eWxlfT57ci5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgIDxkaXYgY3NzPXtmb290ZXJTdHlsZX0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjc3M9e2Zvb3RlckxhYmVsU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Nob3dFbXB0eX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNob3dFbXB0eShlLnRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIEV4aWJpciBjbGFzc2VzIHZhemlhc1xyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgey8qID09PT09IE5PVk86IGNoZWNrYm94IEludGVydmFsbyBkZSBpbnRlcmVzc2UgPT09PT0gKi99XHJcbiAgICAgICAgICAgIDxsYWJlbCBjc3M9e2Zvb3RlckxhYmVsU3R5bGV9IHRpdGxlPVwiUXVhbmRvIG1hcmNhZG8sIGZpbHRyYSBhcGVuYXMgb3MgcG/Dp29zIGRvIGludGVydmFsbyBkZSBpbnRlcmVzc2VcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt3aXRoSW50ZXJlc3R9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRXaXRoSW50ZXJlc3QoZS50YXJnZXQuY2hlY2tlZCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICBJbnRlcnZhbG8gZGUgaW50ZXJlc3NlXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cclxuICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3NldEppbXVNYXBWaWV3fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=