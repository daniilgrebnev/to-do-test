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

/***/ "(app-pages-browser)/./src/widgets/task/TaskItem.tsx":
/*!***************************************!*\
  !*** ./src/widgets/task/TaskItem.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst statusLib = (status)=>{\n    switch(status){\n        case \"wait\":\n            return {\n                num: 0,\n                name: \"Ожидается\"\n            };\n        case \"inProgress\":\n            return {\n                num: 1,\n                name: \"В прогрессе\"\n            };\n        case \"completed\":\n            return {\n                num: 2,\n                name: \"Завершено\"\n            };\n        default:\n            return {\n                num: 3,\n                name: \"Ошибка присвоение типа\"\n            };\n    }\n};\nconst colorsLib = (typeNumber)=>{\n    switch(typeNumber){\n        case 0:\n            return \"#374151\";\n        case 1:\n            return \"#ca8a04\";\n        case 2:\n            return \"#059669\";\n    }\n};\nconst TaskItem = (param)=>{\n    let { title, text, status, id } = param;\n    _s();\n    const statusArr = statusLib(status);\n    const [statusHook, setStatusHook] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(statusLib(status).num);\n    const updateStatusHandler = (id, newStatus)=>{\n        setStatusHook(Number(newStatus));\n        function getValidStatus(newStatus) {\n            switch(newStatus){\n                case \"0\":\n                    return \"wait\";\n                case \"1\":\n                    return \"inProgress\";\n                case \"2\":\n                    return \"completed\";\n                default:\n                    return \"errored\";\n            }\n        }\n        const status = getValidStatus(newStatus);\n        const updateTodo = {\n            status: status\n        };\n        updateTodo(id, updateTodo);\n    };\n    const color = colorsLib(statusHook);\n    // Delete\n    const removeItem = async (id)=>{\n        await (0,_api__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                borderColor: color\n            },\n            className: \"  text-black w-8/12 overflow-hidden mx-auto my-6  border-2 grid-task-item rounded-lg cursor-pointer transition-all hover:shadow-lg border-teal-700 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-2xl  hover:bg-gray-50 font-semibold pl-8 py-3\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-full w-full flex items-center justify-center p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" flex items-center justify-center w-0.5 text-center   absolute b h-full top-0 left-0 \"\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" text-white py-1 px-2 rounded-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"bg-inherit focus-within:outline-0\",\n                                value: statusHook,\n                                onChange: (e)=>updateStatusHandler(id, e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        className: \"bg-[#374151]\",\n                                        value: 0,\n                                        children: \"Ожидает\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        className: \"bg-[#ca8a04]\",\n                                        value: 1,\n                                        children: \"В работе\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        className: \"bg-[#059669]\",\n                                        value: 2,\n                                        children: \"Завершен\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-full w-full flex items-center justify-center p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" flex  items-center justify-center w-0.5 text-center   absolute b h-full top-0 left-0 \"\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 6\n                        }, undefined),\n                        \"Изменить\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>removeItem(id),\n                    className: \"relative h-full w-full flex items-center justify-center p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" flex  items-center justify-center w-0.5 text-center absolute b h-full top-0 left-0\"\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 6\n                        }, undefined),\n                        \"Delete\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n            lineNumber: 70,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n        lineNumber: 69,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TaskItem, \"H0Rqm1xAiot8dW57pedtU77CtSA=\");\n_c = TaskItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskItem);\nvar _c;\n$RefreshReg$(_c, \"TaskItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza0l0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDa0M7QUFDRjtBQVNoQyxNQUFNRSxZQUFZLENBQUNDO0lBQ2xCLE9BQVFBO1FBQ1AsS0FBSztZQUNKLE9BQU87Z0JBQUVDLEtBQUs7Z0JBQUdDLE1BQU07WUFBWTtRQUNwQyxLQUFLO1lBQ0osT0FBTztnQkFBRUQsS0FBSztnQkFBR0MsTUFBTTtZQUFjO1FBQ3RDLEtBQUs7WUFDSixPQUFPO2dCQUFFRCxLQUFLO2dCQUFHQyxNQUFNO1lBQVk7UUFDcEM7WUFDQyxPQUFPO2dCQUFFRCxLQUFLO2dCQUFHQyxNQUFNO1lBQXlCO0lBQ2xEO0FBQ0Q7QUFFQSxNQUFNQyxZQUFZLENBQUNDO0lBQ2xCLE9BQVFBO1FBQ1AsS0FBSztZQUNKLE9BQU87UUFDUixLQUFLO1lBQ0osT0FBTztRQUNSLEtBQUs7WUFDSixPQUFPO0lBQ1Q7QUFDRDtBQUVBLE1BQU1DLFdBQVc7UUFBQyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRVAsTUFBTSxFQUFFUSxFQUFFLEVBQVM7O0lBQ25ELE1BQU1DLFlBQVlWLFVBQVVDO0lBRTVCLE1BQU0sQ0FBQ1UsWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQ0MsVUFBVUMsUUFBUUMsR0FBRztJQUNsRSxNQUFNVyxzQkFBc0IsQ0FBQ0osSUFBWUs7UUFDeENGLGNBQWNHLE9BQU9EO1FBRXJCLFNBQVNFLGVBQWVGLFNBQWlCO1lBQ3hDLE9BQVFBO2dCQUNQLEtBQUs7b0JBQ0osT0FBTztnQkFDUixLQUFLO29CQUNKLE9BQU87Z0JBQ1IsS0FBSztvQkFDSixPQUFPO2dCQUNSO29CQUNDLE9BQU87WUFDVDtRQUNEO1FBRUEsTUFBTWIsU0FBU2UsZUFBZUY7UUFFOUIsTUFBTUcsYUFBYTtZQUFFaEIsUUFBUUE7UUFBTztRQUNwQ2dCLFdBQVdSLElBQUlRO0lBQ2hCO0lBQ0EsTUFBTUMsUUFBUWQsVUFBVU87SUFFeEIsU0FBUztJQUNULE1BQU1RLGFBQWEsT0FBT1Y7UUFDekIsTUFBTVgsZ0RBQVVBLENBQUNXO0lBQ2xCO0lBRUEscUJBQ0MsOERBQUNXO1FBQUlDLFdBQVU7a0JBQ2QsNEVBQUNEO1lBQ0FFLE9BQU87Z0JBQ05DLGFBQWFMO1lBQ2Q7WUFDQUcsV0FBVTs7OEJBRVYsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiZDs7Ozs7OzhCQUVGLDhEQUFDYTtvQkFBSUMsV0FBVTs7c0NBQ2QsOERBQUNEOzRCQUNBRSxPQUFPO2dDQUFFRSxZQUFZTjs0QkFBTTs0QkFDM0JHLFdBQVU7Ozs7OztzQ0FFWCw4REFBQ0Q7NEJBQ0FFLE9BQU87Z0NBQUVFLFlBQVlOOzRCQUFNOzRCQUMzQkcsV0FBVTtzQ0FFViw0RUFBQ0k7Z0NBQ0FKLFdBQVU7Z0NBQ1ZLLE9BQU9mO2dDQUNQZ0IsVUFBVUMsQ0FBQUEsSUFBS2Ysb0JBQW9CSixJQUFJbUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOztrREFFckQsOERBQUNJO3dDQUFPVCxXQUFVO3dDQUFlSyxPQUFPO2tEQUFHOzs7Ozs7a0RBRzNDLDhEQUFDSTt3Q0FBT1QsV0FBVTt3Q0FBZUssT0FBTztrREFBRzs7Ozs7O2tEQUczQyw4REFBQ0k7d0NBQU9ULFdBQVU7d0NBQWVLLE9BQU87a0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU05Qyw4REFBQ047b0JBQUlDLFdBQVU7O3NDQUNkLDhEQUFDRDs0QkFDQUUsT0FBTztnQ0FBRUUsWUFBWU47NEJBQU07NEJBQzNCRyxXQUFVOzs7Ozs7d0JBQ0o7Ozs7Ozs7OEJBR1IsOERBQUNEO29CQUNBVyxTQUFTLElBQU1aLFdBQVdWO29CQUMxQlksV0FBVTs7c0NBRVYsOERBQUNEOzRCQUNBRSxPQUFPO2dDQUFFRSxZQUFZTjs0QkFBTTs0QkFDM0JHLFdBQVU7Ozs7Ozt3QkFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7R0F6Rk1mO0tBQUFBO0FBMkZOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza0l0ZW0udHN4PzUwMjUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyBkZWxldGVUb2RvIH0gZnJvbSAnQC9hcGknXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbnRlcmZhY2UgSVRhc2sge1xuXHRpZDogbnVtYmVyXG5cdHRpdGxlOiBzdHJpbmdcblx0dGV4dDogc3RyaW5nXG5cdHN0YXR1czogc3RyaW5nXG59XG5cbmNvbnN0IHN0YXR1c0xpYiA9IChzdGF0dXM6IHN0cmluZykgPT4ge1xuXHRzd2l0Y2ggKHN0YXR1cykge1xuXHRcdGNhc2UgJ3dhaXQnOlxuXHRcdFx0cmV0dXJuIHsgbnVtOiAwLCBuYW1lOiAn0J7QttC40LTQsNC10YLRgdGPJyB9XG5cdFx0Y2FzZSAnaW5Qcm9ncmVzcyc6XG5cdFx0XHRyZXR1cm4geyBudW06IDEsIG5hbWU6ICfQkiDQv9GA0L7Qs9GA0LXRgdGB0LUnIH1cblx0XHRjYXNlICdjb21wbGV0ZWQnOlxuXHRcdFx0cmV0dXJuIHsgbnVtOiAyLCBuYW1lOiAn0JfQsNCy0LXRgNGI0LXQvdC+JyB9XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiB7IG51bTogMywgbmFtZTogJ9Ce0YjQuNCx0LrQsCDQv9GA0LjRgdCy0L7QtdC90LjQtSDRgtC40L/QsCcgfVxuXHR9XG59XG5cbmNvbnN0IGNvbG9yc0xpYiA9ICh0eXBlTnVtYmVyOiBudW1iZXIpID0+IHtcblx0c3dpdGNoICh0eXBlTnVtYmVyKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuICcjMzc0MTUxJ1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiAnI2NhOGEwNCdcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gJyMwNTk2NjknXG5cdH1cbn1cblxuY29uc3QgVGFza0l0ZW0gPSAoeyB0aXRsZSwgdGV4dCwgc3RhdHVzLCBpZCB9OiBJVGFzaykgPT4ge1xuXHRjb25zdCBzdGF0dXNBcnIgPSBzdGF0dXNMaWIoc3RhdHVzKVxuXG5cdGNvbnN0IFtzdGF0dXNIb29rLCBzZXRTdGF0dXNIb29rXSA9IHVzZVN0YXRlKHN0YXR1c0xpYihzdGF0dXMpLm51bSlcblx0Y29uc3QgdXBkYXRlU3RhdHVzSGFuZGxlciA9IChpZDogbnVtYmVyLCBuZXdTdGF0dXM6IHN0cmluZykgPT4ge1xuXHRcdHNldFN0YXR1c0hvb2soTnVtYmVyKG5ld1N0YXR1cykpXG5cblx0XHRmdW5jdGlvbiBnZXRWYWxpZFN0YXR1cyhuZXdTdGF0dXM6IHN0cmluZykge1xuXHRcdFx0c3dpdGNoIChuZXdTdGF0dXMpIHtcblx0XHRcdFx0Y2FzZSAnMCc6XG5cdFx0XHRcdFx0cmV0dXJuICd3YWl0J1xuXHRcdFx0XHRjYXNlICcxJzpcblx0XHRcdFx0XHRyZXR1cm4gJ2luUHJvZ3Jlc3MnXG5cdFx0XHRcdGNhc2UgJzInOlxuXHRcdFx0XHRcdHJldHVybiAnY29tcGxldGVkJ1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiAnZXJyb3JlZCdcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBzdGF0dXMgPSBnZXRWYWxpZFN0YXR1cyhuZXdTdGF0dXMpXG5cblx0XHRjb25zdCB1cGRhdGVUb2RvID0geyBzdGF0dXM6IHN0YXR1cyB9XG5cdFx0dXBkYXRlVG9kbyhpZCwgdXBkYXRlVG9kbylcblx0fVxuXHRjb25zdCBjb2xvciA9IGNvbG9yc0xpYihzdGF0dXNIb29rKVxuXG5cdC8vIERlbGV0ZVxuXHRjb25zdCByZW1vdmVJdGVtID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcblx0XHRhd2FpdCBkZWxldGVUb2RvKGlkKVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cblx0XHRcdDxkaXZcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRib3JkZXJDb2xvcjogY29sb3IsXG5cdFx0XHRcdH19XG5cdFx0XHRcdGNsYXNzTmFtZT0nICB0ZXh0LWJsYWNrIHctOC8xMiBvdmVyZmxvdy1oaWRkZW4gbXgtYXV0byBteS02ICBib3JkZXItMiBncmlkLXRhc2staXRlbSByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tYWxsIGhvdmVyOnNoYWRvdy1sZyBib3JkZXItdGVhbC03MDAgJ1xuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC0yeGwgIGhvdmVyOmJnLWdyYXktNTAgZm9udC1zZW1pYm9sZCBwbC04IHB5LTMnPlxuXHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMyc+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3IgfX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMC41IHRleHQtY2VudGVyICAgYWJzb2x1dGUgYiBoLWZ1bGwgdG9wLTAgbGVmdC0wICdcblx0XHRcdFx0XHQ+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3IgfX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nIHRleHQtd2hpdGUgcHktMSBweC0yIHJvdW5kZWQtbGcnXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHNlbGVjdFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2JnLWluaGVyaXQgZm9jdXMtd2l0aGluOm91dGxpbmUtMCdcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3N0YXR1c0hvb2t9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHVwZGF0ZVN0YXR1c0hhbmRsZXIoaWQsIGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiBjbGFzc05hbWU9J2JnLVsjMzc0MTUxXScgdmFsdWU9ezB9PlxuXHRcdFx0XHRcdFx0XHRcdNCe0LbQuNC00LDQtdGCXG5cdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGNsYXNzTmFtZT0nYmctWyNjYThhMDRdJyB2YWx1ZT17MX0+XG5cdFx0XHRcdFx0XHRcdFx00JIg0YDQsNCx0L7RgtC1XG5cdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGNsYXNzTmFtZT0nYmctWyMwNTk2NjldJyB2YWx1ZT17Mn0+XG5cdFx0XHRcdFx0XHRcdFx00JfQsNCy0LXRgNGI0LXQvVxuXHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGgtZnVsbCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0zJz5cblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kOiBjb2xvciB9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPScgZmxleCAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMC41IHRleHQtY2VudGVyICAgYWJzb2x1dGUgYiBoLWZ1bGwgdG9wLTAgbGVmdC0wICdcblx0XHRcdFx0XHQ+PC9kaXY+XG5cdFx0XHRcdFx00JjQt9C80LXQvdC40YLRjFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaWQpfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT0ncmVsYXRpdmUgaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTMnXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kOiBjb2xvciB9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPScgZmxleCAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMC41IHRleHQtY2VudGVyIGFic29sdXRlIGIgaC1mdWxsIHRvcC0wIGxlZnQtMCdcblx0XHRcdFx0XHQ+PC9kaXY+XG5cdFx0XHRcdFx0RGVsZXRlXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza0l0ZW1cbiJdLCJuYW1lcyI6WyJkZWxldGVUb2RvIiwidXNlU3RhdGUiLCJzdGF0dXNMaWIiLCJzdGF0dXMiLCJudW0iLCJuYW1lIiwiY29sb3JzTGliIiwidHlwZU51bWJlciIsIlRhc2tJdGVtIiwidGl0bGUiLCJ0ZXh0IiwiaWQiLCJzdGF0dXNBcnIiLCJzdGF0dXNIb29rIiwic2V0U3RhdHVzSG9vayIsInVwZGF0ZVN0YXR1c0hhbmRsZXIiLCJuZXdTdGF0dXMiLCJOdW1iZXIiLCJnZXRWYWxpZFN0YXR1cyIsInVwZGF0ZVRvZG8iLCJjb2xvciIsInJlbW92ZUl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZCIsInNlbGVjdCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib3B0aW9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widgets/task/TaskItem.tsx\n"));

/***/ })

});