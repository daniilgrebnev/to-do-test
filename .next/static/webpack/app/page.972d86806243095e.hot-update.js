"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/widgets/task/TaskFullWidget.tsx":
/*!*********************************************!*\
  !*** ./src/widgets/task/TaskFullWidget.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _store_zustand_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/zustand.store */ \"(app-pages-browser)/./src/store/zustand.store.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst TaskFullWidget = ()=>{\n    _s();\n    const { closeDemoView, activeArray } = (0,_store_zustand_store__WEBPACK_IMPORTED_MODULE_1__.useTaskView)();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setTitle(activeArray === null || activeArray === void 0 ? void 0 : activeArray.title);\n    });\n    const [updateMode, setUpdateMode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden relative w-full h-full p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: closeDemoView,\n                className: \"absolute left-2 top-2 cursor-pointer\",\n                children: \"Закрыть\"\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                lineNumber: 14,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute right-2 top-2 cursor-pointer\",\n                children: updateMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    onClick: ()=>setUpdateMode(false),\n                    children: \"Сохранить\"\n                }, void 0, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 6\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    onClick: ()=>setUpdateMode(true),\n                    children: \"Изменить\"\n                }, void 0, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10 relative\",\n                children: [\n                    updateMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"text-6xl font-bold mb-10\",\n                        value: activeArray === null || activeArray === void 0 ? void 0 : activeArray.title,\n                        onChange: (e)=>setTitle(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 6\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-6xl font-bold mb-10\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: activeArray === null || activeArray === void 0 ? void 0 : activeArray.text\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TaskFullWidget, \"vbaDonzl+edaLn7isOIou4dE+k8=\", false, function() {\n    return [\n        _store_zustand_store__WEBPACK_IMPORTED_MODULE_1__.useTaskView\n    ];\n});\n_c = TaskFullWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskFullWidget);\nvar _c;\n$RefreshReg$(_c, \"TaskFullWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza0Z1bGxXaWRnZXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUQ7QUFDUjtBQUUzQyxNQUFNRyxpQkFBaUI7O0lBQ3RCLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxXQUFXLEVBQUUsR0FBR0wsaUVBQVdBO0lBQ2xELE1BQU0sQ0FBQ00sTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUE7SUFDaEMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQTtJQUNsQ0QsZ0RBQVNBLENBQUM7UUFDVFEsU0FBU0osd0JBQUFBLGtDQUFBQSxZQUFhRyxLQUFLO0lBQzVCO0lBQ0EsTUFBTSxDQUFDRSxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO0lBQzdDLHFCQUNDLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDZCw4REFBQ0Q7Z0JBQ0FFLFNBQVNWO2dCQUNUUyxXQUFVOzBCQUNWOzs7Ozs7MEJBR0QsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiSCwyQkFDQSw4REFBQ0s7b0JBQUVELFNBQVMsSUFBTUgsY0FBYzs4QkFBUTs7Ozs7OENBRXhDLDhEQUFDSTtvQkFBRUQsU0FBUyxJQUFNSCxjQUFjOzhCQUFPOzs7Ozs7Ozs7OzswQkFHekMsOERBQUNDO2dCQUFJQyxXQUFVOztvQkFDYkgsMkJBQ0EsOERBQUNNO3dCQUNBSCxXQUFVO3dCQUNWSSxLQUFLLEVBQUVaLHdCQUFBQSxrQ0FBQUEsWUFBYUcsS0FBSzt3QkFDekJVLFVBQVVDLENBQUFBLElBQUtWLFNBQVNVLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7a0RBR3ZDLDhEQUFDTDt3QkFBSUMsV0FBVTtrQ0FBNEJMOzs7Ozs7a0NBRTVDLDhEQUFDSTt3QkFBSUMsV0FBVTtrQ0FBSVIsd0JBQUFBLGtDQUFBQSxZQUFhQyxJQUFJOzs7Ozs7a0NBQ3BDLDhEQUFDTTt3QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5CO0dBdENNVjs7UUFDa0NILDZEQUFXQTs7O0tBRDdDRztBQXdDTiwrREFBZUEsY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvd2lkZ2V0cy90YXNrL1Rhc2tGdWxsV2lkZ2V0LnRzeD82MWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRhc2tWaWV3IH0gZnJvbSAnQC9zdG9yZS96dXN0YW5kLnN0b3JlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBUYXNrRnVsbFdpZGdldCA9ICgpID0+IHtcblx0Y29uc3QgeyBjbG9zZURlbW9WaWV3LCBhY3RpdmVBcnJheSB9ID0gdXNlVGFza1ZpZXcoKVxuXHRjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KClcblx0Y29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KClcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRUaXRsZShhY3RpdmVBcnJheT8udGl0bGUpXG5cdH0pXG5cdGNvbnN0IFt1cGRhdGVNb2RlLCBzZXRVcGRhdGVNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgdy1mdWxsIGgtZnVsbCBwLTQnPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRvbkNsaWNrPXtjbG9zZURlbW9WaWV3fVxuXHRcdFx0XHRjbGFzc05hbWU9J2Fic29sdXRlIGxlZnQtMiB0b3AtMiBjdXJzb3ItcG9pbnRlcidcblx0XHRcdD5cblx0XHRcdFx00JfQsNC60YDRi9GC0Yxcblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHJpZ2h0LTIgdG9wLTIgY3Vyc29yLXBvaW50ZXInPlxuXHRcdFx0XHR7dXBkYXRlTW9kZSA/IChcblx0XHRcdFx0XHQ8cCBvbkNsaWNrPXsoKSA9PiBzZXRVcGRhdGVNb2RlKGZhbHNlKX0+0KHQvtGF0YDQsNC90LjRgtGMPC9wPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxwIG9uQ2xpY2s9eygpID0+IHNldFVwZGF0ZU1vZGUodHJ1ZSl9PtCY0LfQvNC10L3QuNGC0Yw8L3A+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtdC0xMCByZWxhdGl2ZSc+XG5cdFx0XHRcdHt1cGRhdGVNb2RlID8gKFxuXHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSd0ZXh0LTZ4bCBmb250LWJvbGQgbWItMTAnXG5cdFx0XHRcdFx0XHR2YWx1ZT17YWN0aXZlQXJyYXk/LnRpdGxlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdD48L3RleHRhcmVhPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LTZ4bCBmb250LWJvbGQgbWItMTAnPnt0aXRsZX08L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9Jyc+e2FjdGl2ZUFycmF5Py50ZXh0fTwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tGdWxsV2lkZ2V0XG4iXSwibmFtZXMiOlsidXNlVGFza1ZpZXciLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRhc2tGdWxsV2lkZ2V0IiwiY2xvc2VEZW1vVmlldyIsImFjdGl2ZUFycmF5IiwidGV4dCIsInNldFRleHQiLCJ0aXRsZSIsInNldFRpdGxlIiwidXBkYXRlTW9kZSIsInNldFVwZGF0ZU1vZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicCIsInRleHRhcmVhIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widgets/task/TaskFullWidget.tsx\n"));

/***/ })

});