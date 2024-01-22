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

/***/ "(app-pages-browser)/./src/widgets/task/TaskWidget.tsx":
/*!*****************************************!*\
  !*** ./src/widgets/task/TaskWidget.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   statusLib: function() { return /* binding */ statusLib; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CreateTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateTask */ \"(app-pages-browser)/./src/widgets/task/CreateTask.tsx\");\n/* harmony import */ var _TaskFullWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskFullWidget */ \"(app-pages-browser)/./src/widgets/task/TaskFullWidget.tsx\");\n/* harmony import */ var _TaskItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskItem */ \"(app-pages-browser)/./src/widgets/task/TaskItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ statusLib,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst statusLib = (status)=>{\n    switch(status){\n        case \"wait\":\n            return {\n                num: 0,\n                name: \"Ожидается\"\n            };\n        case \"inProgress\":\n            return {\n                num: 1,\n                name: \"В прогрессе\"\n            };\n        case \"completed\":\n            return {\n                num: 2,\n                name: \"Завершено\"\n            };\n        default:\n            return {\n                num: 3,\n                name: \"Ошибка присвоение типа\"\n            };\n    }\n};\nconst TaskWidget = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function name() {\n            setData(await (0,_api__WEBPACK_IMPORTED_MODULE_1__.getAllTodos)());\n        }\n        name();\n    }, []);\n    data === null || data === void 0 ? void 0 : data.sort((a, b)=>new Date(b.createdAt) - new Date(a.createdAt));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TaskFullWidget__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                lineNumber: 50,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-lg text-semibold\",\n                        children: \"Задачи\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"transition-all\",\n                        children: data && data.map((item)=>item.id !== undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TaskItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                title: item.title,\n                                status: item.status,\n                                text: item.text,\n                                id: item.id\n                            }, item.id, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 10\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                lineNumber: 51,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n        lineNumber: 49,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TaskWidget, \"WZ2PO9A64oHRexE1CE+yX3ebuoA=\");\n_c = TaskWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskWidget);\nvar _c;\n$RefreshReg$(_c, \"TaskWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza1dpZGdldC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVtQztBQUNRO0FBQ047QUFDUTtBQUNaO0FBRTFCLE1BQU1NLFlBQVksQ0FBQ0M7SUFDekIsT0FBUUE7UUFDUCxLQUFLO1lBQ0osT0FBTztnQkFBRUMsS0FBSztnQkFBR0MsTUFBTTtZQUFZO1FBQ3BDLEtBQUs7WUFDSixPQUFPO2dCQUFFRCxLQUFLO2dCQUFHQyxNQUFNO1lBQWM7UUFDdEMsS0FBSztZQUNKLE9BQU87Z0JBQUVELEtBQUs7Z0JBQUdDLE1BQU07WUFBWTtRQUNwQztZQUNDLE9BQU87Z0JBQUVELEtBQUs7Z0JBQUdDLE1BQU07WUFBeUI7SUFDbEQ7QUFDRCxFQUFDO0FBV0QsTUFBTUMsYUFBYTs7SUFDbEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQTtJQUVoQ0QsZ0RBQVNBLENBQUM7UUFDVCxlQUFlUTtZQUNkRyxRQUFRLE1BQU1aLGlEQUFXQTtRQUMxQjtRQUVBUztJQUNELEdBQUcsRUFBRTtJQUVMRSxpQkFBQUEsMkJBQUFBLEtBQU1FLElBQUksQ0FDVCxDQUFDQyxHQUFHQyxJQUNILElBQUtDLEtBQUtELEVBQUVFLFNBQVMsSUFDcEIsSUFBSUQsS0FBS0YsRUFBRUcsU0FBUztJQUd2QixxQkFDQyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNmLHVEQUFjQTs7Ozs7MEJBQ2YsOERBQUNjOztrQ0FDQSw4REFBQ0E7d0JBQUlDLFdBQVU7a0NBQW9DOzs7Ozs7a0NBQ25ELDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDZCw0RUFBQ2hCLG1EQUFVQTs7Ozs7Ozs7OztrQ0FFWiw4REFBQ2U7d0JBQUlDLFdBQVU7a0NBQ2JSLFFBQ0FBLEtBQUtTLEdBQUcsQ0FDUEMsQ0FBQUEsT0FDQ0EsS0FBS0MsRUFBRSxLQUFLQywyQkFDWCw4REFBQ2xCLGlEQUFRQTtnQ0FFUm1CLE9BQU9ILEtBQUtHLEtBQUs7Z0NBQ2pCakIsUUFBUWMsS0FBS2QsTUFBTTtnQ0FDbkJrQixNQUFNSixLQUFLSSxJQUFJO2dDQUNmSCxJQUFJRCxLQUFLQyxFQUFFOytCQUpORCxLQUFLQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXRCO0dBM0NNWjtLQUFBQTtBQTZDTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvd2lkZ2V0cy90YXNrL1Rhc2tXaWRnZXQudHN4PzQ3NzAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IGdldEFsbFRvZG9zIH0gZnJvbSAnQC9hcGknXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ3JlYXRlVG9kbyBmcm9tICcuL0NyZWF0ZVRhc2snXG5pbXBvcnQgVGFza0Z1bGxXaWRnZXQgZnJvbSAnLi9UYXNrRnVsbFdpZGdldCdcbmltcG9ydCBUYXNrSXRlbSBmcm9tICcuL1Rhc2tJdGVtJ1xuXG5leHBvcnQgY29uc3Qgc3RhdHVzTGliID0gKHN0YXR1czogc3RyaW5nKSA9PiB7XG5cdHN3aXRjaCAoc3RhdHVzKSB7XG5cdFx0Y2FzZSAnd2FpdCc6XG5cdFx0XHRyZXR1cm4geyBudW06IDAsIG5hbWU6ICfQntC20LjQtNCw0LXRgtGB0Y8nIH1cblx0XHRjYXNlICdpblByb2dyZXNzJzpcblx0XHRcdHJldHVybiB7IG51bTogMSwgbmFtZTogJ9CSINC/0YDQvtCz0YDQtdGB0YHQtScgfVxuXHRcdGNhc2UgJ2NvbXBsZXRlZCc6XG5cdFx0XHRyZXR1cm4geyBudW06IDIsIG5hbWU6ICfQl9Cw0LLQtdGA0YjQtdC90L4nIH1cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHsgbnVtOiAzLCBuYW1lOiAn0J7RiNC40LHQutCwINC/0YDQuNGB0LLQvtC10L3QuNC1INGC0LjQv9CwJyB9XG5cdH1cbn1cblxuaW50ZXJmYWNlIElUb2RvIHtcblx0aWQ/OiBudW1iZXJcblx0dGl0bGU6IHN0cmluZ1xuXHR0ZXh0OiBzdHJpbmdcblx0c3RhdHVzOiBzdHJpbmdcblx0Y3JlYXRlZEF0Pzogc3RyaW5nXG5cdHVwZGF0ZWRBdD86IHN0cmluZ1xufVxuXG5jb25zdCBUYXNrV2lkZ2V0ID0gKCkgPT4ge1xuXHRjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxJVG9kb1tdPigpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRhc3luYyBmdW5jdGlvbiBuYW1lKCkge1xuXHRcdFx0c2V0RGF0YShhd2FpdCBnZXRBbGxUb2RvcygpKVxuXHRcdH1cblxuXHRcdG5hbWUoKVxuXHR9LCBbXSlcblxuXHRkYXRhPy5zb3J0KFxuXHRcdChhLCBiKSA9PlxuXHRcdFx0KG5ldyBEYXRlKGIuY3JlYXRlZEF0IGFzIHN0cmluZykgYXMgYW55KSAtXG5cdFx0XHQobmV3IERhdGUoYS5jcmVhdGVkQXQgYXMgc3RyaW5nKSBhcyBhbnkpXG5cdClcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG5cdFx0XHQ8VGFza0Z1bGxXaWRnZXQgLz5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LWxnIHRleHQtc2VtaWJvbGQnPtCX0LDQtNCw0YfQuDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byB0ZXh0LWNlbnRlcic+XG5cdFx0XHRcdFx0PENyZWF0ZVRvZG8gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0cmFuc2l0aW9uLWFsbCc+XG5cdFx0XHRcdFx0e2RhdGEgJiZcblx0XHRcdFx0XHRcdGRhdGEubWFwKFxuXHRcdFx0XHRcdFx0XHRpdGVtID0+XG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5pZCAhPT0gdW5kZWZpbmVkICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdDxUYXNrSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2l0ZW0uaWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtpdGVtLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdGF0dXM9e2l0ZW0uc3RhdHVzfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0PXtpdGVtLnRleHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtpdGVtLmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tXaWRnZXRcbiJdLCJuYW1lcyI6WyJnZXRBbGxUb2RvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ3JlYXRlVG9kbyIsIlRhc2tGdWxsV2lkZ2V0IiwiVGFza0l0ZW0iLCJzdGF0dXNMaWIiLCJzdGF0dXMiLCJudW0iLCJuYW1lIiwiVGFza1dpZGdldCIsImRhdGEiLCJzZXREYXRhIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsImNyZWF0ZWRBdCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpZCIsInVuZGVmaW5lZCIsInRpdGxlIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widgets/task/TaskWidget.tsx\n"));

/***/ })

});