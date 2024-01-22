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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   statusLib: function() { return /* binding */ statusLib; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.ts\");\n/* harmony import */ var _store_zustand_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/zustand.store */ \"(app-pages-browser)/./src/store/zustand.store.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CreateTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateTask */ \"(app-pages-browser)/./src/widgets/task/CreateTask.tsx\");\n/* harmony import */ var _TaskFullWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskFullWidget */ \"(app-pages-browser)/./src/widgets/task/TaskFullWidget.tsx\");\n/* harmony import */ var _TaskItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TaskItem */ \"(app-pages-browser)/./src/widgets/task/TaskItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ statusLib,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst statusLib = (status)=>{\n    switch(status){\n        case \"wait\":\n            return {\n                num: 0,\n                name: \"Ожидается\"\n            };\n        case \"inProgress\":\n            return {\n                num: 1,\n                name: \"В прогрессе\"\n            };\n        case \"completed\":\n            return {\n                num: 2,\n                name: \"Завершено\"\n            };\n        default:\n            return {\n                num: 3,\n                name: \"Ошибка присвоение типа\"\n            };\n    }\n};\nconst TaskWidget = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function name() {\n            setData(await (0,_api__WEBPACK_IMPORTED_MODULE_1__.getAllTodos)());\n        }\n        name();\n    }, []);\n    data === null || data === void 0 ? void 0 : data.sort((a, b)=>new Date(b.createdAt) - new Date(a.createdAt));\n    const { demoView } = (0,_store_zustand_store__WEBPACK_IMPORTED_MODULE_2__.useTaskView)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center flex-row-reverse\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: demoView ? \"10%\" : \"0%\"\n                },\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TaskFullWidget__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                lineNumber: 52,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-lg text-semibold\",\n                        children: \"Задачи\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateTask__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"transition-all\",\n                        children: data && data.map((item)=>item.id !== undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TaskItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                title: item.title,\n                                status: item.status,\n                                text: item.text,\n                                id: item.id\n                            }, item.id, false, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 10\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                lineNumber: 55,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n        lineNumber: 51,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TaskWidget, \"+z80GDvix8+gsZeoS/8s0zOU+90=\", false, function() {\n    return [\n        _store_zustand_store__WEBPACK_IMPORTED_MODULE_2__.useTaskView\n    ];\n});\n_c = TaskWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskWidget);\nvar _c;\n$RefreshReg$(_c, \"TaskWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza1dpZGdldC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFbUM7QUFDZ0I7QUFDUjtBQUNOO0FBQ1E7QUFDWjtBQUUxQixNQUFNTyxZQUFZLENBQUNDO0lBQ3pCLE9BQVFBO1FBQ1AsS0FBSztZQUNKLE9BQU87Z0JBQUVDLEtBQUs7Z0JBQUdDLE1BQU07WUFBWTtRQUNwQyxLQUFLO1lBQ0osT0FBTztnQkFBRUQsS0FBSztnQkFBR0MsTUFBTTtZQUFjO1FBQ3RDLEtBQUs7WUFDSixPQUFPO2dCQUFFRCxLQUFLO2dCQUFHQyxNQUFNO1lBQVk7UUFDcEM7WUFDQyxPQUFPO2dCQUFFRCxLQUFLO2dCQUFHQyxNQUFNO1lBQXlCO0lBQ2xEO0FBQ0QsRUFBQztBQVdELE1BQU1DLGFBQWE7O0lBQ2xCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUE7SUFFaENELGdEQUFTQSxDQUFDO1FBQ1QsZUFBZVE7WUFDZEcsUUFBUSxNQUFNYixpREFBV0E7UUFDMUI7UUFFQVU7SUFDRCxHQUFHLEVBQUU7SUFFTEUsaUJBQUFBLDJCQUFBQSxLQUFNRSxJQUFJLENBQ1QsQ0FBQ0MsR0FBR0MsSUFDSCxJQUFLQyxLQUFLRCxFQUFFRSxTQUFTLElBQ3BCLElBQUlELEtBQUtGLEVBQUVHLFNBQVM7SUFFdkIsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR2xCLGlFQUFXQTtJQUVoQyxxQkFDQyw4REFBQ21CO1FBQUlDLFdBQVU7OzBCQUNkLDhEQUFDRDtnQkFBSUUsT0FBTztvQkFBRUMsT0FBT0osV0FBVyxRQUFRO2dCQUFLO2dCQUFHRSxXQUFVOzBCQUN6RCw0RUFBQ2hCLHVEQUFjQTs7Ozs7Ozs7OzswQkFFaEIsOERBQUNlO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQW9DOzs7Ozs7a0NBQ25ELDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDZCw0RUFBQ2pCLG1EQUFVQTs7Ozs7Ozs7OztrQ0FFWiw4REFBQ2dCO3dCQUFJQyxXQUFVO2tDQUNiVCxRQUNBQSxLQUFLWSxHQUFHLENBQ1BDLENBQUFBLE9BQ0NBLEtBQUtDLEVBQUUsS0FBS0MsMkJBQ1gsOERBQUNyQixpREFBUUE7Z0NBRVJzQixPQUFPSCxLQUFLRyxLQUFLO2dDQUNqQnBCLFFBQVFpQixLQUFLakIsTUFBTTtnQ0FDbkJxQixNQUFNSixLQUFLSSxJQUFJO2dDQUNmSCxJQUFJRCxLQUFLQyxFQUFFOytCQUpORCxLQUFLQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXRCO0dBOUNNZjs7UUFnQmdCViw2REFBV0E7OztLQWhCM0JVO0FBZ0ROLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza1dpZGdldC50c3g/NDc3MCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgZ2V0QWxsVG9kb3MgfSBmcm9tICdAL2FwaSdcbmltcG9ydCB7IHVzZVRhc2tWaWV3IH0gZnJvbSAnQC9zdG9yZS96dXN0YW5kLnN0b3JlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENyZWF0ZVRvZG8gZnJvbSAnLi9DcmVhdGVUYXNrJ1xuaW1wb3J0IFRhc2tGdWxsV2lkZ2V0IGZyb20gJy4vVGFza0Z1bGxXaWRnZXQnXG5pbXBvcnQgVGFza0l0ZW0gZnJvbSAnLi9UYXNrSXRlbSdcblxuZXhwb3J0IGNvbnN0IHN0YXR1c0xpYiA9IChzdGF0dXM6IHN0cmluZykgPT4ge1xuXHRzd2l0Y2ggKHN0YXR1cykge1xuXHRcdGNhc2UgJ3dhaXQnOlxuXHRcdFx0cmV0dXJuIHsgbnVtOiAwLCBuYW1lOiAn0J7QttC40LTQsNC10YLRgdGPJyB9XG5cdFx0Y2FzZSAnaW5Qcm9ncmVzcyc6XG5cdFx0XHRyZXR1cm4geyBudW06IDEsIG5hbWU6ICfQkiDQv9GA0L7Qs9GA0LXRgdGB0LUnIH1cblx0XHRjYXNlICdjb21wbGV0ZWQnOlxuXHRcdFx0cmV0dXJuIHsgbnVtOiAyLCBuYW1lOiAn0JfQsNCy0LXRgNGI0LXQvdC+JyB9XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiB7IG51bTogMywgbmFtZTogJ9Ce0YjQuNCx0LrQsCDQv9GA0LjRgdCy0L7QtdC90LjQtSDRgtC40L/QsCcgfVxuXHR9XG59XG5cbmludGVyZmFjZSBJVG9kbyB7XG5cdGlkPzogbnVtYmVyXG5cdHRpdGxlOiBzdHJpbmdcblx0dGV4dDogc3RyaW5nXG5cdHN0YXR1czogc3RyaW5nXG5cdGNyZWF0ZWRBdD86IHN0cmluZ1xuXHR1cGRhdGVkQXQ/OiBzdHJpbmdcbn1cblxuY29uc3QgVGFza1dpZGdldCA9ICgpID0+IHtcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8SVRvZG9bXT4oKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0YXN5bmMgZnVuY3Rpb24gbmFtZSgpIHtcblx0XHRcdHNldERhdGEoYXdhaXQgZ2V0QWxsVG9kb3MoKSlcblx0XHR9XG5cblx0XHRuYW1lKClcblx0fSwgW10pXG5cblx0ZGF0YT8uc29ydChcblx0XHQoYSwgYikgPT5cblx0XHRcdChuZXcgRGF0ZShiLmNyZWF0ZWRBdCBhcyBzdHJpbmcpIGFzIGFueSkgLVxuXHRcdFx0KG5ldyBEYXRlKGEuY3JlYXRlZEF0IGFzIHN0cmluZykgYXMgYW55KVxuXHQpXG5cdGNvbnN0IHsgZGVtb1ZpZXcgfSA9IHVzZVRhc2tWaWV3KClcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXJvdy1yZXZlcnNlJz5cblx0XHRcdDxkaXYgc3R5bGU9e3sgd2lkdGg6IGRlbW9WaWV3ID8gJzEwJScgOiAnMCUnIH19IGNsYXNzTmFtZT0nJz5cblx0XHRcdFx0PFRhc2tGdWxsV2lkZ2V0IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LXNlbWlib2xkJz7Ql9Cw0LTQsNGH0Lg8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J214LWF1dG8gdGV4dC1jZW50ZXInPlxuXHRcdFx0XHRcdDxDcmVhdGVUb2RvIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndHJhbnNpdGlvbi1hbGwnPlxuXHRcdFx0XHRcdHtkYXRhICYmXG5cdFx0XHRcdFx0XHRkYXRhLm1hcChcblx0XHRcdFx0XHRcdFx0aXRlbSA9PlxuXHRcdFx0XHRcdFx0XHRcdGl0ZW0uaWQgIT09IHVuZGVmaW5lZCAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFza0l0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpdGVtLmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT17aXRlbS50aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c3RhdHVzPXtpdGVtLnN0YXR1c31cblx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dD17aXRlbS50ZXh0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZD17aXRlbS5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrV2lkZ2V0XG4iXSwibmFtZXMiOlsiZ2V0QWxsVG9kb3MiLCJ1c2VUYXNrVmlldyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ3JlYXRlVG9kbyIsIlRhc2tGdWxsV2lkZ2V0IiwiVGFza0l0ZW0iLCJzdGF0dXNMaWIiLCJzdGF0dXMiLCJudW0iLCJuYW1lIiwiVGFza1dpZGdldCIsImRhdGEiLCJzZXREYXRhIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsImNyZWF0ZWRBdCIsImRlbW9WaWV3IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsIm1hcCIsIml0ZW0iLCJpZCIsInVuZGVmaW5lZCIsInRpdGxlIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widgets/task/TaskWidget.tsx\n"));

/***/ })

});