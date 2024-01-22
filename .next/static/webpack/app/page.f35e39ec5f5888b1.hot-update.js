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

/***/ "(app-pages-browser)/./src/widgets/task/CreateTaskModal.tsx":
/*!**********************************************!*\
  !*** ./src/widgets/task/CreateTaskModal.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.ts\");\n/* harmony import */ var _store_zustand_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/zustand.store */ \"(app-pages-browser)/./src/store/zustand.store.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst CreateTaskModal = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const { closeModal } = (0,_store_zustand_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [isError, setIsError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const formHandler = (title, text)=>{\n        const item = {\n            title,\n            text,\n            status: \"wait\"\n        };\n        if (title.length || text.length == 0) {\n            return setIsError(true);\n        }\n        (0,_api__WEBPACK_IMPORTED_MODULE_1__.addTodo)(item);\n        location.reload();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute w-screen h-screen bg-black bg-opacity-80 top-0 left-0 z-40 flex items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute mx-auto w-1/2 h-24 top-5 rounded-lg  flex items-center justify-center bg-red-600 text-center text-white\",\n                children: \"Форма не заполнена\"\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/CreateTaskModal.tsx\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white h-50% text-left p-4 px-8 rounded-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-4xl mb-10 text-center\",\n                        children: \"Создание задачи\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/CreateTaskModal.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Заголовок\"\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/CreateTaskModal.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"px-2 py-2 my-2 rounded-lg text-xl transition-all outline focus-within:outline-4 outline-emerald-800 w-full\",\n                                type: \"text\",\n                                placeholder: \"Заголовок задачи\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/CreateTaskModal.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/CreateTaskModal.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Текст\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/CreateTaskModal.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"px-2 py-2 my-2 rounded-lg text-xl transition-all outline focus-within:outline-4 outline-emerald-800 w-full\",\n                        rows: 10,\n                        cols: 100,\n                        value: text,\n                        onChange: (e)=>setText(e.target.value),\n                        placeholder: \"Текст задачи\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/CreateTaskModal.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>formHandler(title, text),\n                        className: \"px-6 py-2 bg-emerald-800 text-white rounded-lg cursor-pointer\",\n                        children: \"Создать\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/CreateTaskModal.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/CreateTaskModal.tsx\",\n                lineNumber: 30,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/CreateTaskModal.tsx\",\n        lineNumber: 26,\n        columnNumber: 3\n    }, undefined);\n};\n_s(CreateTaskModal, \"ADo1M8zM03KWpa2szuzzOHs/ez8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        _store_zustand_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = CreateTaskModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateTaskModal);\nvar _c;\n$RefreshReg$(_c, \"CreateTaskModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXRzL3Rhc2svQ3JlYXRlVGFza01vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFK0I7QUFDa0I7QUFDakI7QUFDUztBQUV6QyxNQUFNSSxrQkFBa0I7O0lBQ3ZCLE1BQU1DLFdBQVdGLHdEQUFXQTtJQUM1QixNQUFNLEVBQUVHLFVBQVUsRUFBRSxHQUFHTCxnRUFBYUE7SUFFcEMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFTO0lBQzNDLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBUztJQUN6QyxNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFFdkMsTUFBTVcsY0FBYyxDQUFDTixPQUFlRTtRQUNuQyxNQUFNSyxPQUFPO1lBQUVQO1lBQU9FO1lBQU1NLFFBQVE7UUFBTztRQUMzQyxJQUFJUixNQUFNUyxNQUFNLElBQUlQLEtBQUtPLE1BQU0sSUFBSSxHQUFHO1lBQ3JDLE9BQU9KLFdBQVc7UUFDbkI7UUFDQVosNkNBQU9BLENBQUNjO1FBQ1JHLFNBQVNDLE1BQU07SUFDaEI7SUFFQSxxQkFDQyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFtSDs7Ozs7OzBCQUdsSSw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBNkI7Ozs7OztrQ0FFM0MsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDZCw4REFBQ0M7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7Z0NBQ0FGLFdBQVU7Z0NBQ1ZHLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLE9BQU9sQjtnQ0FDUG1CLFVBQVVDLENBQUFBLElBQUtuQixTQUFTbUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7a0NBSXhDLDhEQUFDSjtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDUTt3QkFDQVQsV0FBVTt3QkFDVlUsTUFBTTt3QkFDTkMsTUFBTTt3QkFDTk4sT0FBT2hCO3dCQUNQaUIsVUFBVUMsQ0FBQUEsSUFBS2pCLFFBQVFpQixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQ3JDRCxhQUFZOzs7Ozs7a0NBR2IsOERBQUNMO3dCQUNBYSxTQUFTLElBQU1uQixZQUFZTixPQUFPRTt3QkFDbENXLFdBQVU7a0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1MO0dBdkRNaEI7O1FBQ1lELG9EQUFXQTtRQUNMRiw0REFBYUE7OztLQUYvQkc7QUF5RE4sK0RBQWVBLGVBQWVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3dpZGdldHMvdGFzay9DcmVhdGVUYXNrTW9kYWwudHN4PzE1YTMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IGFkZFRvZG8gfSBmcm9tICdAL2FwaSdcbmltcG9ydCB1c2VNb2RhbFN0b3JlIGZyb20gJ0Avc3RvcmUvenVzdGFuZC5zdG9yZSdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jb25zdCBDcmVhdGVUYXNrTW9kYWwgPSAoKSA9PiB7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXHRjb25zdCB7IGNsb3NlTW9kYWwgfSA9IHVzZU1vZGFsU3RvcmUoKVxuXG5cdGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPignJylcblx0Y29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPignJylcblx0Y29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG5cblx0Y29uc3QgZm9ybUhhbmRsZXIgPSAodGl0bGU6IHN0cmluZywgdGV4dDogc3RyaW5nKSA9PiB7XG5cdFx0Y29uc3QgaXRlbSA9IHsgdGl0bGUsIHRleHQsIHN0YXR1czogJ3dhaXQnIH1cblx0XHRpZiAodGl0bGUubGVuZ3RoIHx8IHRleHQubGVuZ3RoID09IDApIHtcblx0XHRcdHJldHVybiBzZXRJc0Vycm9yKHRydWUpXG5cdFx0fVxuXHRcdGFkZFRvZG8oaXRlbSlcblx0XHRsb2NhdGlvbi5yZWxvYWQoKVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgdy1zY3JlZW4gaC1zY3JlZW4gYmctYmxhY2sgYmctb3BhY2l0eS04MCB0b3AtMCBsZWZ0LTAgei00MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgbXgtYXV0byB3LTEvMiBoLTI0IHRvcC01IHJvdW5kZWQtbGcgIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXJlZC02MDAgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSc+XG5cdFx0XHRcdNCk0L7RgNC80LAg0L3QtSDQt9Cw0L/QvtC70L3QtdC90LBcblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlIGgtNTAlIHRleHQtbGVmdCBwLTQgcHgtOCByb3VuZGVkLWxnJz5cblx0XHRcdFx0PGgzIGNsYXNzTmFtZT0ndGV4dC00eGwgbWItMTAgdGV4dC1jZW50ZXInPtCh0L7Qt9C00LDQvdC40LUg0LfQsNC00LDRh9C4PC9oMz5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWItMyc+XG5cdFx0XHRcdFx0PGgzPtCX0LDQs9C+0LvQvtCy0L7QujwvaDM+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J3B4LTIgcHktMiBteS0yIHJvdW5kZWQtbGcgdGV4dC14bCB0cmFuc2l0aW9uLWFsbCBvdXRsaW5lIGZvY3VzLXdpdGhpbjpvdXRsaW5lLTQgb3V0bGluZS1lbWVyYWxkLTgwMCB3LWZ1bGwnXG5cdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J9CX0LDQs9C+0LvQvtCy0L7QuiDQt9Cw0LTQsNGH0LgnXG5cdFx0XHRcdFx0XHR2YWx1ZT17dGl0bGV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGgzPtCi0LXQutGB0YI8L2gzPlxuXHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRjbGFzc05hbWU9J3B4LTIgcHktMiBteS0yIHJvdW5kZWQtbGcgdGV4dC14bCB0cmFuc2l0aW9uLWFsbCBvdXRsaW5lIGZvY3VzLXdpdGhpbjpvdXRsaW5lLTQgb3V0bGluZS1lbWVyYWxkLTgwMCB3LWZ1bGwnXG5cdFx0XHRcdFx0cm93cz17MTB9XG5cdFx0XHRcdFx0Y29scz17MTAwfVxuXHRcdFx0XHRcdHZhbHVlPXt0ZXh0fVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPSfQotC10LrRgdGCINC30LDQtNCw0YfQuCdcblx0XHRcdFx0Lz5cblxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZm9ybUhhbmRsZXIodGl0bGUsIHRleHQpfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT0ncHgtNiBweS0yIGJnLWVtZXJhbGQtODAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlcidcblx0XHRcdFx0PlxuXHRcdFx0XHRcdNCh0L7Qt9C00LDRgtGMXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlVGFza01vZGFsXG4iXSwibmFtZXMiOlsiYWRkVG9kbyIsInVzZU1vZGFsU3RvcmUiLCJ1c2VTdGF0ZSIsInVzZURpc3BhdGNoIiwiQ3JlYXRlVGFza01vZGFsIiwiZGlzcGF0Y2giLCJjbG9zZU1vZGFsIiwidGl0bGUiLCJzZXRUaXRsZSIsInRleHQiLCJzZXRUZXh0IiwiaXNFcnJvciIsInNldElzRXJyb3IiLCJmb3JtSGFuZGxlciIsIml0ZW0iLCJzdGF0dXMiLCJsZW5ndGgiLCJsb2NhdGlvbiIsInJlbG9hZCIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInRleHRhcmVhIiwicm93cyIsImNvbHMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widgets/task/CreateTaskModal.tsx\n"));

/***/ })

});