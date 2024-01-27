"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/prices/page",{

/***/ "(app-pages-browser)/./src/app/prices/page.jsx":
/*!*********************************!*\
  !*** ./src/app/prices/page.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Prices_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Prices.module.scss */ \"(app-pages-browser)/./src/app/prices/Prices.module.scss\");\n/* harmony import */ var _Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_pricesPageComponents_ansver_Ansver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/pricesPageComponents/ansver/Ansver */ \"(app-pages-browser)/./src/components/pricesPageComponents/ansver/Ansver.jsx\");\n/* harmony import */ var _components_Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Transition */ \"(app-pages-browser)/./src/components/Transition.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/api */ \"(app-pages-browser)/./src/utils/api.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Prices = ()=>{\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const isActive = (name)=>active === name;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_utils_api__WEBPACK_IMPORTED_MODULE_4__.fetchData)(\"prices\", setItems);\n    }, []);\n    console.log(items, \"it\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().fake)\n            }, void 0, false, {\n                fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),\n                children: \"ЦІНИ\"\n            }, void 0, false, {\n                fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().list),\n                children: [\n                    items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Transition__WEBPACK_IMPORTED_MODULE_3__.Transition, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                    fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),\n                                    onClick: ()=>setActive(isActive(item.name) ? \"\" : item.name),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().itemTitle),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().name),\n                                                    children: item.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.span, {\n                                                    animate: {\n                                                        rotate: isActive(item.name) ? 0 : 90\n                                                    },\n                                                    transition: {\n                                                        duration: 0.5\n                                                    },\n                                                    children: [\n                                                        \" \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().action),\n                                                            children: isActive(item.name) ? \"-\" : \"+\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                                            lineNumber: 40,\n                                                            columnNumber: 19\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                                    lineNumber: 33,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            style: {\n                                                maxHeight: isActive(item.name) ? \"500px\" : \"0\",\n                                                transition: \"max-height 0.5s ease\",\n                                                overflow: \"hidden\"\n                                            },\n                                            className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().children),\n                                            children: item.servises.map((child)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().description),\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().servise),\n                                                            children: child.name\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                                            lineNumber: 53,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_Prices_module_scss__WEBPACK_IMPORTED_MODULE_5___default().price),\n                                                            children: [\n                                                                child.price,\n                                                                \" грн\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                                            lineNumber: 54,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, child.name, true, {\n                                                    fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 19\n                                                }, undefined))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, item.id, true, {\n                            fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pricesPageComponents_ansver_Ansver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/marina/Documents/GitHub/fox_dental/src/app/prices/page.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Prices, \"Rmr9Xe0LSlYThAAIZx9VJbxIEgU=\");\n_c = Prices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prices);\nvar _c;\n$RefreshReg$(_c, \"Prices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJpY2VzL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM0QztBQUNOO0FBRStCO0FBQ2hCO0FBQ2Q7QUFDQztBQUV4QyxNQUFNTyxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ1UsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNWSxXQUFXLENBQUNDLE9BQVNILFdBQVdHO0lBRXRDWixnREFBU0EsQ0FBQztRQUNSSyxxREFBU0EsQ0FBQyxVQUFVRztJQUN0QixHQUFHLEVBQUU7SUFDTEssUUFBUUMsR0FBRyxDQUFDUCxPQUFPO0lBQ25CLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFXZixzRUFBWTs7MEJBQzFCLDhEQUFDYztnQkFBSUMsV0FBV2YsaUVBQU87Ozs7OzswQkFDdkIsOERBQUNrQjtnQkFBR0gsV0FBV2Ysa0VBQVE7MEJBQUU7Ozs7OzswQkFDekIsOERBQUNjO2dCQUFJQyxXQUFXZixpRUFBTzs7b0JBQ3BCTSxNQUFNZSxHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNwQiw4REFBVUE7OzhDQUNULDhEQUFDcUI7Ozs7OzhDQUNELDhEQUFDVDtvQ0FDQ0MsV0FBV2YsaUVBQU87b0NBQ2xCd0IsU0FBUyxJQUFNZixVQUFVQyxTQUFTWSxLQUFLWCxJQUFJLElBQUksS0FBS1csS0FBS1gsSUFBSTs7c0RBRTdELDhEQUFDRzs0Q0FBSUMsV0FBV2Ysc0VBQVk7OzhEQUMxQiw4REFBQ2M7b0RBQUlDLFdBQVdmLGlFQUFPOzhEQUFHc0IsS0FBS1gsSUFBSTs7Ozs7OzhEQUNuQyw4REFBQ1IsaURBQU1BLENBQUN1QixJQUFJO29EQUNWQyxTQUFTO3dEQUNQQyxRQUFRbEIsU0FBU1ksS0FBS1gsSUFBSSxJQUFJLElBQUk7b0RBQ3BDO29EQUNBa0IsWUFBWTt3REFBRUMsVUFBVTtvREFBSTs7d0RBRTNCO3NFQUNELDhEQUFDaEI7NERBQUlDLFdBQVdmLG1FQUFTO3NFQUFHVSxTQUFTWSxLQUFLWCxJQUFJLElBQUksTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUc1RCw4REFBQ0c7NENBQ0NrQixPQUFPO2dEQUNMQyxXQUFXdkIsU0FBU1ksS0FBS1gsSUFBSSxJQUFJLFVBQVU7Z0RBQzNDa0IsWUFBWTtnREFDWkssVUFBVTs0Q0FDWjs0Q0FDQW5CLFdBQVdmLHFFQUFXO3NEQUVyQnNCLEtBQUtjLFFBQVEsQ0FBQ2YsR0FBRyxDQUFDLENBQUNnQixzQkFDbEIsOERBQUN2QjtvREFBSUMsV0FBV2Ysd0VBQWM7O3NFQUM1Qiw4REFBQ2M7NERBQUlDLFdBQVdmLG9FQUFVO3NFQUFHcUMsTUFBTTFCLElBQUk7Ozs7OztzRUFDdkMsOERBQUNHOzREQUFJQyxXQUFXZixrRUFBUTs7Z0VBQUdxQyxNQUFNRyxLQUFLO2dFQUFDOzs7Ozs7OzttREFGSkgsTUFBTTFCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQTNCdENXLEtBQUttQixFQUFFOzs7OztrQ0FvQzFCLDhEQUFDbEI7Ozs7Ozs7Ozs7OzBCQUVILDhEQUFDdEIsc0ZBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBeERNSTtLQUFBQTtBQTBETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3ByaWNlcy9wYWdlLmpzeD9iMmRlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3QgZnJvbSAnLi9QcmljZXMubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgQW5zdmVyIGZyb20gJ0AvY29tcG9uZW50cy9wcmljZXNQYWdlQ29tcG9uZW50cy9hbnN2ZXIvQW5zdmVyJztcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tICdAL2NvbXBvbmVudHMvVHJhbnNpdGlvbic7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJ0AvdXRpbHMvYXBpJztcblxuY29uc3QgUHJpY2VzID0gKCkgPT4ge1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBpc0FjdGl2ZSA9IChuYW1lKSA9PiBhY3RpdmUgPT09IG5hbWU7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaERhdGEoJ3ByaWNlcycsIHNldEl0ZW1zKTtcbiAgfSwgW10pO1xuICBjb25zb2xlLmxvZyhpdGVtcywgJ2l0Jyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0LmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3QuZmFrZX0+PC9kaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdC50aXRsZX0+0KbQhtCd0Jg8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0Lmxpc3R9PlxuICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPFRyYW5zaXRpb24ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0Lml0ZW19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShpc0FjdGl2ZShpdGVtLm5hbWUpID8gJycgOiBpdGVtLm5hbWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3QuaXRlbVRpdGxlfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3QubmFtZX0+e2l0ZW0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLnNwYW5cbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlOiBpc0FjdGl2ZShpdGVtLm5hbWUpID8gMCA6IDkwLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3QuYWN0aW9ufT57aXNBY3RpdmUoaXRlbS5uYW1lKSA/ICctJyA6ICcrJ308L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IGlzQWN0aXZlKGl0ZW0ubmFtZSkgPyAnNTAwcHgnIDogJzAnLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ21heC1oZWlnaHQgMC41cyBlYXNlJyxcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3QuY2hpbGRyZW59XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aXRlbS5zZXJ2aXNlcy5tYXAoKGNoaWxkKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3QuZGVzY3JpcHRpb259IGtleT17Y2hpbGQubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdC5zZXJ2aXNlfT57Y2hpbGQubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0LnByaWNlfT57Y2hpbGQucHJpY2V9INCz0YDQvTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICApKX1cbiAgICAgICAgPGhyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxBbnN2ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlcztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0IiwiQW5zdmVyIiwiVHJhbnNpdGlvbiIsIm1vdGlvbiIsImZldGNoRGF0YSIsIlByaWNlcyIsIml0ZW1zIiwic2V0SXRlbXMiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJpc0FjdGl2ZSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiZmFrZSIsImgxIiwidGl0bGUiLCJsaXN0IiwibWFwIiwiaXRlbSIsImhyIiwib25DbGljayIsIml0ZW1UaXRsZSIsInNwYW4iLCJhbmltYXRlIiwicm90YXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiYWN0aW9uIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsImNoaWxkcmVuIiwic2VydmlzZXMiLCJjaGlsZCIsImRlc2NyaXB0aW9uIiwic2VydmlzZSIsInByaWNlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/prices/page.jsx\n"));

/***/ })

});