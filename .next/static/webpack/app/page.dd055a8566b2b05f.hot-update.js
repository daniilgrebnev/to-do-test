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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TaskWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskWidget */ \"(app-pages-browser)/./src/widgets/task/TaskWidget.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst colorsLib = (typeNumber)=>{\n    switch(typeNumber){\n        case 0:\n            return \"#374151\";\n        case 1:\n            return \"#ca8a04\";\n        case 2:\n            return \"#059669\";\n    }\n};\nconst TaskItem = (param)=>{\n    let { title, text, status, id } = param;\n    _s();\n    const statusArr = (0,_TaskWidget__WEBPACK_IMPORTED_MODULE_3__.statusLib)(status);\n    const [isDeleted, setIsDeleted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [statusHook, setStatusHook] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((0,_TaskWidget__WEBPACK_IMPORTED_MODULE_3__.statusLib)(status).num);\n    const updateStatusHandler = (id, newStatus)=>{\n        setStatusHook(Number(newStatus));\n        function getValidStatus(newStatus) {\n            switch(newStatus){\n                case \"0\":\n                    return \"wait\";\n                case \"1\":\n                    return \"inProgress\";\n                case \"2\":\n                    return \"completed\";\n                default:\n                    return \"errored\";\n            }\n        }\n        const status = getValidStatus(newStatus);\n        const updateTodo = {\n            status: status\n        };\n        (0,_api__WEBPACK_IMPORTED_MODULE_1__.putTodo)(id, updateTodo);\n    };\n    const color = colorsLib(statusHook);\n    // Delete\n    const removeItem = async (id)=>{\n        setIsDeleted(true);\n        await (0,_api__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(isDeleted && \"deleted-item\", \" transition-all duration-500\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                borderColor: color\n            },\n            className: \"  text-black w-8/12 overflow-hidden mx-auto my-6  border-2 grid-task-item rounded-lg cursor-pointer transition-all hover:shadow-lg border-teal-700 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-2xl  hover:bg-gray-50 font-semibold pl-8 py-3\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-full w-full flex items-center justify-center p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" flex items-center justify-center w-0.5 text-center   absolute b h-full top-0 left-0 \"\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" text-white py-1 px-2 rounded-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"bg-inherit focus-within:outline-0\",\n                                value: statusHook,\n                                onChange: (e)=>updateStatusHandler(id, e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        className: \"bg-[#374151]\",\n                                        value: 0,\n                                        children: \"Ожидает\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        className: \"bg-[#ca8a04]\",\n                                        value: 1,\n                                        children: \"В работе\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        className: \"bg-[#059669]\",\n                                        value: 2,\n                                        children: \"Завершен\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-full w-full flex items-center justify-center p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" flex  items-center justify-center w-0.5 text-center   absolute b h-full top-0 left-0 \"\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 6\n                        }, undefined),\n                        \"Изменить\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>removeItem(id),\n                    className: \"relative h-full text-red-200 w-full flex items-center justify-center p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" flex  items-center justify-center w-0.5 text-center absolute b h-full top-0 left-0\"\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 6\n                        }, undefined),\n                        \"Удалить\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n            lineNumber: 62,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n        lineNumber: 59,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TaskItem, \"lfNe2iBtr+5dlhf3qxsg+mQj8RI=\");\n_c = TaskItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskItem);\nvar _c;\n$RefreshReg$(_c, \"TaskItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza0l0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzJDO0FBQ1g7QUFDUTtBQVN4QyxNQUFNSSxZQUFZLENBQUNDO0lBQ2xCLE9BQVFBO1FBQ1AsS0FBSztZQUNKLE9BQU87UUFDUixLQUFLO1lBQ0osT0FBTztRQUNSLEtBQUs7WUFDSixPQUFPO0lBQ1Q7QUFDRDtBQUVBLE1BQU1DLFdBQVc7UUFBQyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxFQUFFLEVBQVM7O0lBQ25ELE1BQU1DLFlBQVlSLHNEQUFTQSxDQUFDTTtJQUM1QixNQUFNLENBQUNHLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBLENBQUM7SUFFM0MsTUFBTSxDQUFDWSxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDQyxzREFBU0EsQ0FBQ00sUUFBUU8sR0FBRztJQUNsRSxNQUFNQyxzQkFBc0IsQ0FBQ1AsSUFBWVE7UUFDeENILGNBQWNJLE9BQU9EO1FBRXJCLFNBQVNFLGVBQWVGLFNBQWlCO1lBQ3hDLE9BQVFBO2dCQUNQLEtBQUs7b0JBQ0osT0FBTztnQkFDUixLQUFLO29CQUNKLE9BQU87Z0JBQ1IsS0FBSztvQkFDSixPQUFPO2dCQUNSO29CQUNDLE9BQU87WUFDVDtRQUNEO1FBRUEsTUFBTVQsU0FBU1csZUFBZUY7UUFFOUIsTUFBTUcsYUFBYTtZQUFFWixRQUFRQTtRQUFPO1FBQ3BDUiw2Q0FBT0EsQ0FBQ1MsSUFBSVc7SUFDYjtJQUNBLE1BQU1DLFFBQVFsQixVQUFVVTtJQUV4QixTQUFTO0lBQ1QsTUFBTVMsYUFBYSxPQUFPYjtRQUN6QkcsYUFBYTtRQUNiLE1BQU1iLGdEQUFVQSxDQUFDVTtJQUNsQjtJQUVBLHFCQUNDLDhEQUFDYztRQUNBQyxXQUFXLEdBQStCLE9BQTVCYixhQUFhLGdCQUFlO2tCQUUxQyw0RUFBQ1k7WUFDQUUsT0FBTztnQkFDTkMsYUFBYUw7WUFDZDtZQUNBRyxXQUFVOzs4QkFFViw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2JsQjs7Ozs7OzhCQUVGLDhEQUFDaUI7b0JBQUlDLFdBQVU7O3NDQUNkLDhEQUFDRDs0QkFDQUUsT0FBTztnQ0FBRUUsWUFBWU47NEJBQU07NEJBQzNCRyxXQUFVOzs7Ozs7c0NBRVgsOERBQUNEOzRCQUNBRSxPQUFPO2dDQUFFRSxZQUFZTjs0QkFBTTs0QkFDM0JHLFdBQVU7c0NBRVYsNEVBQUNJO2dDQUNBSixXQUFVO2dDQUNWSyxPQUFPaEI7Z0NBQ1BpQixVQUFVQyxDQUFBQSxJQUFLZixvQkFBb0JQLElBQUlzQixFQUFFQyxNQUFNLENBQUNILEtBQUs7O2tEQUVyRCw4REFBQ0k7d0NBQU9ULFdBQVU7d0NBQWVLLE9BQU87a0RBQUc7Ozs7OztrREFHM0MsOERBQUNJO3dDQUFPVCxXQUFVO3dDQUFlSyxPQUFPO2tEQUFHOzs7Ozs7a0RBRzNDLDhEQUFDSTt3Q0FBT1QsV0FBVTt3Q0FBZUssT0FBTztrREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTTlDLDhEQUFDTjtvQkFBSUMsV0FBVTs7c0NBQ2QsOERBQUNEOzRCQUNBRSxPQUFPO2dDQUFFRSxZQUFZTjs0QkFBTTs0QkFDM0JHLFdBQVU7Ozs7Ozt3QkFDSjs7Ozs7Ozs4QkFHUiw4REFBQ0Q7b0JBQ0FXLFNBQVMsSUFBTVosV0FBV2I7b0JBQzFCZSxXQUFVOztzQ0FFViw4REFBQ0Q7NEJBQ0FFLE9BQU87Z0NBQUVFLFlBQVlOOzRCQUFNOzRCQUMzQkcsV0FBVTs7Ozs7O3dCQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWjtHQTdGTW5CO0tBQUFBO0FBK0ZOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza0l0ZW0udHN4PzUwMjUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyBkZWxldGVUb2RvLCBwdXRUb2RvIH0gZnJvbSAnQC9hcGknXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgc3RhdHVzTGliIH0gZnJvbSAnLi9UYXNrV2lkZ2V0J1xuXG5pbnRlcmZhY2UgSVRhc2sge1xuXHRpZDogbnVtYmVyXG5cdHRpdGxlOiBzdHJpbmdcblx0dGV4dDogc3RyaW5nXG5cdHN0YXR1czogc3RyaW5nXG59XG5cbmNvbnN0IGNvbG9yc0xpYiA9ICh0eXBlTnVtYmVyOiBudW1iZXIpID0+IHtcblx0c3dpdGNoICh0eXBlTnVtYmVyKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuICcjMzc0MTUxJ1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiAnI2NhOGEwNCdcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gJyMwNTk2NjknXG5cdH1cbn1cblxuY29uc3QgVGFza0l0ZW0gPSAoeyB0aXRsZSwgdGV4dCwgc3RhdHVzLCBpZCB9OiBJVGFzaykgPT4ge1xuXHRjb25zdCBzdGF0dXNBcnIgPSBzdGF0dXNMaWIoc3RhdHVzKVxuXHRjb25zdCBbaXNEZWxldGVkLCBzZXRJc0RlbGV0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cblx0Y29uc3QgW3N0YXR1c0hvb2ssIHNldFN0YXR1c0hvb2tdID0gdXNlU3RhdGUoc3RhdHVzTGliKHN0YXR1cykubnVtKVxuXHRjb25zdCB1cGRhdGVTdGF0dXNIYW5kbGVyID0gKGlkOiBudW1iZXIsIG5ld1N0YXR1czogc3RyaW5nKSA9PiB7XG5cdFx0c2V0U3RhdHVzSG9vayhOdW1iZXIobmV3U3RhdHVzKSlcblxuXHRcdGZ1bmN0aW9uIGdldFZhbGlkU3RhdHVzKG5ld1N0YXR1czogc3RyaW5nKSB7XG5cdFx0XHRzd2l0Y2ggKG5ld1N0YXR1cykge1xuXHRcdFx0XHRjYXNlICcwJzpcblx0XHRcdFx0XHRyZXR1cm4gJ3dhaXQnXG5cdFx0XHRcdGNhc2UgJzEnOlxuXHRcdFx0XHRcdHJldHVybiAnaW5Qcm9ncmVzcydcblx0XHRcdFx0Y2FzZSAnMic6XG5cdFx0XHRcdFx0cmV0dXJuICdjb21wbGV0ZWQnXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuICdlcnJvcmVkJ1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IHN0YXR1cyA9IGdldFZhbGlkU3RhdHVzKG5ld1N0YXR1cylcblxuXHRcdGNvbnN0IHVwZGF0ZVRvZG8gPSB7IHN0YXR1czogc3RhdHVzIH1cblx0XHRwdXRUb2RvKGlkLCB1cGRhdGVUb2RvKVxuXHR9XG5cdGNvbnN0IGNvbG9yID0gY29sb3JzTGliKHN0YXR1c0hvb2spXG5cblx0Ly8gRGVsZXRlXG5cdGNvbnN0IHJlbW92ZUl0ZW0gPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xuXHRcdHNldElzRGVsZXRlZCh0cnVlKVxuXHRcdGF3YWl0IGRlbGV0ZVRvZG8oaWQpXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17YCR7aXNEZWxldGVkICYmICdkZWxldGVkLWl0ZW0nfSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDBgfVxuXHRcdD5cblx0XHRcdDxkaXZcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRib3JkZXJDb2xvcjogY29sb3IsXG5cdFx0XHRcdH19XG5cdFx0XHRcdGNsYXNzTmFtZT0nICB0ZXh0LWJsYWNrIHctOC8xMiBvdmVyZmxvdy1oaWRkZW4gbXgtYXV0byBteS02ICBib3JkZXItMiBncmlkLXRhc2staXRlbSByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tYWxsIGhvdmVyOnNoYWRvdy1sZyBib3JkZXItdGVhbC03MDAgJ1xuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC0yeGwgIGhvdmVyOmJnLWdyYXktNTAgZm9udC1zZW1pYm9sZCBwbC04IHB5LTMnPlxuXHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMyc+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3IgfX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMC41IHRleHQtY2VudGVyICAgYWJzb2x1dGUgYiBoLWZ1bGwgdG9wLTAgbGVmdC0wICdcblx0XHRcdFx0XHQ+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3IgfX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nIHRleHQtd2hpdGUgcHktMSBweC0yIHJvdW5kZWQtbGcnXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHNlbGVjdFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2JnLWluaGVyaXQgZm9jdXMtd2l0aGluOm91dGxpbmUtMCdcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3N0YXR1c0hvb2t9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHVwZGF0ZVN0YXR1c0hhbmRsZXIoaWQsIGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiBjbGFzc05hbWU9J2JnLVsjMzc0MTUxXScgdmFsdWU9ezB9PlxuXHRcdFx0XHRcdFx0XHRcdNCe0LbQuNC00LDQtdGCXG5cdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGNsYXNzTmFtZT0nYmctWyNjYThhMDRdJyB2YWx1ZT17MX0+XG5cdFx0XHRcdFx0XHRcdFx00JIg0YDQsNCx0L7RgtC1XG5cdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGNsYXNzTmFtZT0nYmctWyMwNTk2NjldJyB2YWx1ZT17Mn0+XG5cdFx0XHRcdFx0XHRcdFx00JfQsNCy0LXRgNGI0LXQvVxuXHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGgtZnVsbCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0zJz5cblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kOiBjb2xvciB9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPScgZmxleCAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMC41IHRleHQtY2VudGVyICAgYWJzb2x1dGUgYiBoLWZ1bGwgdG9wLTAgbGVmdC0wICdcblx0XHRcdFx0XHQ+PC9kaXY+XG5cdFx0XHRcdFx00JjQt9C80LXQvdC40YLRjFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaWQpfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT0ncmVsYXRpdmUgaC1mdWxsIHRleHQtcmVkLTIwMCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0zJ1xuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3IgfX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nIGZsZXggIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTAuNSB0ZXh0LWNlbnRlciBhYnNvbHV0ZSBiIGgtZnVsbCB0b3AtMCBsZWZ0LTAnXG5cdFx0XHRcdFx0PjwvZGl2PlxuXHRcdFx0XHRcdNCj0LTQsNC70LjRgtGMXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza0l0ZW1cbiJdLCJuYW1lcyI6WyJkZWxldGVUb2RvIiwicHV0VG9kbyIsInVzZVN0YXRlIiwic3RhdHVzTGliIiwiY29sb3JzTGliIiwidHlwZU51bWJlciIsIlRhc2tJdGVtIiwidGl0bGUiLCJ0ZXh0Iiwic3RhdHVzIiwiaWQiLCJzdGF0dXNBcnIiLCJpc0RlbGV0ZWQiLCJzZXRJc0RlbGV0ZWQiLCJzdGF0dXNIb29rIiwic2V0U3RhdHVzSG9vayIsIm51bSIsInVwZGF0ZVN0YXR1c0hhbmRsZXIiLCJuZXdTdGF0dXMiLCJOdW1iZXIiLCJnZXRWYWxpZFN0YXR1cyIsInVwZGF0ZVRvZG8iLCJjb2xvciIsInJlbW92ZUl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZCIsInNlbGVjdCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib3B0aW9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widgets/task/TaskItem.tsx\n"));

/***/ })

});