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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.ts\");\n/* harmony import */ var _store_zustand_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/zustand.store */ \"(app-pages-browser)/./src/store/zustand.store.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TaskWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskWidget */ \"(app-pages-browser)/./src/widgets/task/TaskWidget.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst colorsLib = (typeNumber)=>{\n    switch(typeNumber){\n        case 0:\n            return \"#374151\";\n        case 1:\n            return \"#ca8a04\";\n        case 2:\n            return \"#059669\";\n    }\n};\nconst TaskItem = (param)=>{\n    let { title, text, status, id, createdAt } = param;\n    _s();\n    const statusArr = (0,_TaskWidget__WEBPACK_IMPORTED_MODULE_4__.statusLib)(status);\n    const [isDeleted, setIsDeleted] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [statusHook, setStatusHook] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,_TaskWidget__WEBPACK_IMPORTED_MODULE_4__.statusLib)(status).num);\n    const updateStatusHandler = (id, newStatus)=>{\n        setStatusHook(Number(newStatus));\n        function getValidStatus(newStatus) {\n            switch(newStatus){\n                case \"0\":\n                    return \"wait\";\n                case \"1\":\n                    return \"inProgress\";\n                case \"2\":\n                    return \"completed\";\n                default:\n                    return \"errored\";\n            }\n        }\n        const status = getValidStatus(newStatus);\n        const updateTodo = {\n            status: status\n        };\n        (0,_api__WEBPACK_IMPORTED_MODULE_1__.putTodo)(id, updateTodo);\n    };\n    const color = colorsLib(statusHook);\n    const itemData = {\n        title,\n        status,\n        text,\n        id,\n        createdAt\n    };\n    // Delete\n    const removeItem = async (id)=>{\n        setIsDeleted(true);\n        await (0,_api__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(id);\n    };\n    const { demoView, openDemoView, closeDemoView } = (0,_store_zustand_store__WEBPACK_IMPORTED_MODULE_2__.useTaskView)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(isDeleted && \"deleted-item\", \" transition-all duration-500\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                borderColor: color\n            },\n            className: \"  text-black overflow-hidden w-8/12 mx-auto my-6  border-2 grid-task-item rounded-lg cursor-pointer transition-all hover:shadow-lg border-teal-700 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>openDemoView(itemData),\n                    className: \"text-2xl  hover:bg-gray-50 font-semibold pl-8 py-3\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-full w-full flex items-center justify-center p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" flex items-center justify-center w-0.5 text-center   absolute b h-full top-0 left-0 \"\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" text-white py-1 px-4 rounded-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"bg-inherit focus-within:outline-0\",\n                                value: statusHook,\n                                onChange: (e)=>updateStatusHandler(id, e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        className: \"bg-[#374151]\",\n                                        value: 0,\n                                        children: \"Ожидает\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        className: \"bg-[#ca8a04]\",\n                                        value: 1,\n                                        children: \"В работе\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        className: \"bg-[#059669]\",\n                                        value: 2,\n                                        children: \"Завершен\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-full w-full flex items-center justify-center p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" flex  items-center justify-center w-0.5 text-center   absolute b h-full top-0 left-0 \"\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 6\n                        }, undefined),\n                        \"Изменить\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>removeItem(id),\n                    className: \"relative h-full text-red-400 w-full flex items-center justify-center p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" flex  items-center justify-center w-0.5 text-center absolute b h-full top-0 left-0\"\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 6\n                        }, undefined),\n                        \"Удалить\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n            lineNumber: 66,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n        lineNumber: 63,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TaskItem, \"J/7ZYdVyQdCusdWtqrSFHQMmSz8=\", false, function() {\n    return [\n        _store_zustand_store__WEBPACK_IMPORTED_MODULE_2__.useTaskView\n    ];\n});\n_c = TaskItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskItem);\nvar _c;\n$RefreshReg$(_c, \"TaskItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza0l0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMyQztBQUNRO0FBQ25CO0FBQ1E7QUFVeEMsTUFBTUssWUFBWSxDQUFDQztJQUNsQixPQUFRQTtRQUNQLEtBQUs7WUFDSixPQUFPO1FBQ1IsS0FBSztZQUNKLE9BQU87UUFDUixLQUFLO1lBQ0osT0FBTztJQUNUO0FBQ0Q7QUFFQSxNQUFNQyxXQUFXO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsRUFBRSxFQUFFQyxTQUFTLEVBQVM7O0lBQzlELE1BQU1DLFlBQVlULHNEQUFTQSxDQUFDTTtJQUM1QixNQUFNLENBQUNJLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUM7SUFFM0MsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDQyxzREFBU0EsQ0FBQ00sUUFBUVEsR0FBRztJQUNsRSxNQUFNQyxzQkFBc0IsQ0FBQ1IsSUFBWVM7UUFDeENILGNBQWNJLE9BQU9EO1FBRXJCLFNBQVNFLGVBQWVGLFNBQWlCO1lBQ3hDLE9BQVFBO2dCQUNQLEtBQUs7b0JBQ0osT0FBTztnQkFDUixLQUFLO29CQUNKLE9BQU87Z0JBQ1IsS0FBSztvQkFDSixPQUFPO2dCQUNSO29CQUNDLE9BQU87WUFDVDtRQUNEO1FBRUEsTUFBTVYsU0FBU1ksZUFBZUY7UUFFOUIsTUFBTUcsYUFBYTtZQUFFYixRQUFRQTtRQUFPO1FBQ3BDVCw2Q0FBT0EsQ0FBQ1UsSUFBSVk7SUFDYjtJQUNBLE1BQU1DLFFBQVFuQixVQUFVVztJQUN4QixNQUFNUyxXQUFXO1FBQUVqQjtRQUFPRTtRQUFRRDtRQUFNRTtRQUFJQztJQUFVO0lBQ3RELFNBQVM7SUFDVCxNQUFNYyxhQUFhLE9BQU9mO1FBQ3pCSSxhQUFhO1FBQ2IsTUFBTWYsZ0RBQVVBLENBQUNXO0lBQ2xCO0lBRUEsTUFBTSxFQUFFZ0IsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLGFBQWEsRUFBRSxHQUFHM0IsaUVBQVdBO0lBRTdELHFCQUNDLDhEQUFDNEI7UUFDQUMsV0FBVyxHQUErQixPQUE1QmpCLGFBQWEsZ0JBQWU7a0JBRTFDLDRFQUFDZ0I7WUFDQUUsT0FBTztnQkFDTkMsYUFBYVQ7WUFDZDtZQUNBTyxXQUFVOzs4QkFFViw4REFBQ0Q7b0JBQ0FJLFNBQVMsSUFBTU4sYUFBYUg7b0JBQzVCTSxXQUFVOzhCQUVUdkI7Ozs7Ozs4QkFFRiw4REFBQ3NCO29CQUFJQyxXQUFVOztzQ0FDZCw4REFBQ0Q7NEJBQ0FFLE9BQU87Z0NBQUVHLFlBQVlYOzRCQUFNOzRCQUMzQk8sV0FBVTs7Ozs7O3NDQUVYLDhEQUFDRDs0QkFDQUUsT0FBTztnQ0FBRUcsWUFBWVg7NEJBQU07NEJBQzNCTyxXQUFVO3NDQUVWLDRFQUFDSztnQ0FDQUwsV0FBVTtnQ0FDVk0sT0FBT3JCO2dDQUNQc0IsVUFBVUMsQ0FBQUEsSUFBS3BCLG9CQUFvQlIsSUFBSTRCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7a0RBRXJELDhEQUFDSTt3Q0FBT1YsV0FBVTt3Q0FBZU0sT0FBTztrREFBRzs7Ozs7O2tEQUczQyw4REFBQ0k7d0NBQU9WLFdBQVU7d0NBQWVNLE9BQU87a0RBQUc7Ozs7OztrREFHM0MsOERBQUNJO3dDQUFPVixXQUFVO3dDQUFlTSxPQUFPO2tEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFNOUMsOERBQUNQO29CQUFJQyxXQUFVOztzQ0FDZCw4REFBQ0Q7NEJBQ0FFLE9BQU87Z0NBQUVHLFlBQVlYOzRCQUFNOzRCQUMzQk8sV0FBVTs7Ozs7O3dCQUNKOzs7Ozs7OzhCQUdSLDhEQUFDRDtvQkFDQUksU0FBUyxJQUFNUixXQUFXZjtvQkFDMUJvQixXQUFVOztzQ0FFViw4REFBQ0Q7NEJBQ0FFLE9BQU87Z0NBQUVHLFlBQVlYOzRCQUFNOzRCQUMzQk8sV0FBVTs7Ozs7O3dCQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWjtHQWxHTXhCOztRQWtDNkNMLDZEQUFXQTs7O0tBbEN4REs7QUFvR04sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3dpZGdldHMvdGFzay9UYXNrSXRlbS50c3g/NTAyNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IGRlbGV0ZVRvZG8sIHB1dFRvZG8gfSBmcm9tICdAL2FwaSdcbmltcG9ydCB7IHVzZVRhc2tWaWV3IH0gZnJvbSAnQC9zdG9yZS96dXN0YW5kLnN0b3JlJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHN0YXR1c0xpYiB9IGZyb20gJy4vVGFza1dpZGdldCdcblxuaW50ZXJmYWNlIElUYXNrIHtcblx0aWQ6IG51bWJlclxuXHR0aXRsZTogc3RyaW5nXG5cdHRleHQ6IHN0cmluZ1xuXHRzdGF0dXM6IHN0cmluZ1xuXHRjcmVhdGVkQXQ/OiBzdHJpbmdcbn1cblxuY29uc3QgY29sb3JzTGliID0gKHR5cGVOdW1iZXI6IG51bWJlcikgPT4ge1xuXHRzd2l0Y2ggKHR5cGVOdW1iZXIpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gJyMzNzQxNTEnXG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuICcjY2E4YTA0J1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiAnIzA1OTY2OSdcblx0fVxufVxuXG5jb25zdCBUYXNrSXRlbSA9ICh7IHRpdGxlLCB0ZXh0LCBzdGF0dXMsIGlkLCBjcmVhdGVkQXQgfTogSVRhc2spID0+IHtcblx0Y29uc3Qgc3RhdHVzQXJyID0gc3RhdHVzTGliKHN0YXR1cylcblx0Y29uc3QgW2lzRGVsZXRlZCwgc2V0SXNEZWxldGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cdGNvbnN0IFtzdGF0dXNIb29rLCBzZXRTdGF0dXNIb29rXSA9IHVzZVN0YXRlKHN0YXR1c0xpYihzdGF0dXMpLm51bSlcblx0Y29uc3QgdXBkYXRlU3RhdHVzSGFuZGxlciA9IChpZDogbnVtYmVyLCBuZXdTdGF0dXM6IHN0cmluZykgPT4ge1xuXHRcdHNldFN0YXR1c0hvb2soTnVtYmVyKG5ld1N0YXR1cykpXG5cblx0XHRmdW5jdGlvbiBnZXRWYWxpZFN0YXR1cyhuZXdTdGF0dXM6IHN0cmluZykge1xuXHRcdFx0c3dpdGNoIChuZXdTdGF0dXMpIHtcblx0XHRcdFx0Y2FzZSAnMCc6XG5cdFx0XHRcdFx0cmV0dXJuICd3YWl0J1xuXHRcdFx0XHRjYXNlICcxJzpcblx0XHRcdFx0XHRyZXR1cm4gJ2luUHJvZ3Jlc3MnXG5cdFx0XHRcdGNhc2UgJzInOlxuXHRcdFx0XHRcdHJldHVybiAnY29tcGxldGVkJ1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiAnZXJyb3JlZCdcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBzdGF0dXMgPSBnZXRWYWxpZFN0YXR1cyhuZXdTdGF0dXMpXG5cblx0XHRjb25zdCB1cGRhdGVUb2RvID0geyBzdGF0dXM6IHN0YXR1cyB9XG5cdFx0cHV0VG9kbyhpZCwgdXBkYXRlVG9kbylcblx0fVxuXHRjb25zdCBjb2xvciA9IGNvbG9yc0xpYihzdGF0dXNIb29rKVxuXHRjb25zdCBpdGVtRGF0YSA9IHsgdGl0bGUsIHN0YXR1cywgdGV4dCwgaWQsIGNyZWF0ZWRBdCB9XG5cdC8vIERlbGV0ZVxuXHRjb25zdCByZW1vdmVJdGVtID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcblx0XHRzZXRJc0RlbGV0ZWQodHJ1ZSlcblx0XHRhd2FpdCBkZWxldGVUb2RvKGlkKVxuXHR9XG5cblx0Y29uc3QgeyBkZW1vVmlldywgb3BlbkRlbW9WaWV3LCBjbG9zZURlbW9WaWV3IH0gPSB1c2VUYXNrVmlldygpXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e2Ake2lzRGVsZXRlZCAmJiAnZGVsZXRlZC1pdGVtJ30gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwYH1cblx0XHQ+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0Ym9yZGVyQ29sb3I6IGNvbG9yLFxuXHRcdFx0XHR9fVxuXHRcdFx0XHRjbGFzc05hbWU9JyAgdGV4dC1ibGFjayBvdmVyZmxvdy1oaWRkZW4gdy04LzEyIG14LWF1dG8gbXktNiAgYm9yZGVyLTIgZ3JpZC10YXNrLWl0ZW0gcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzaGFkb3ctbGcgYm9yZGVyLXRlYWwtNzAwICdcblx0XHRcdD5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9wZW5EZW1vVmlldyhpdGVtRGF0YSl9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSd0ZXh0LTJ4bCAgaG92ZXI6YmctZ3JheS01MCBmb250LXNlbWlib2xkIHBsLTggcHktMydcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMyc+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3IgfX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMC41IHRleHQtY2VudGVyICAgYWJzb2x1dGUgYiBoLWZ1bGwgdG9wLTAgbGVmdC0wICdcblx0XHRcdFx0XHQ+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3IgfX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nIHRleHQtd2hpdGUgcHktMSBweC00IHJvdW5kZWQtbGcnXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHNlbGVjdFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2JnLWluaGVyaXQgZm9jdXMtd2l0aGluOm91dGxpbmUtMCdcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3N0YXR1c0hvb2t9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHVwZGF0ZVN0YXR1c0hhbmRsZXIoaWQsIGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiBjbGFzc05hbWU9J2JnLVsjMzc0MTUxXScgdmFsdWU9ezB9PlxuXHRcdFx0XHRcdFx0XHRcdNCe0LbQuNC00LDQtdGCXG5cdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGNsYXNzTmFtZT0nYmctWyNjYThhMDRdJyB2YWx1ZT17MX0+XG5cdFx0XHRcdFx0XHRcdFx00JIg0YDQsNCx0L7RgtC1XG5cdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGNsYXNzTmFtZT0nYmctWyMwNTk2NjldJyB2YWx1ZT17Mn0+XG5cdFx0XHRcdFx0XHRcdFx00JfQsNCy0LXRgNGI0LXQvVxuXHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGgtZnVsbCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0zJz5cblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kOiBjb2xvciB9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPScgZmxleCAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMC41IHRleHQtY2VudGVyICAgYWJzb2x1dGUgYiBoLWZ1bGwgdG9wLTAgbGVmdC0wICdcblx0XHRcdFx0XHQ+PC9kaXY+XG5cdFx0XHRcdFx00JjQt9C80LXQvdC40YLRjFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaWQpfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT0ncmVsYXRpdmUgaC1mdWxsIHRleHQtcmVkLTQwMCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0zJ1xuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3IgfX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nIGZsZXggIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTAuNSB0ZXh0LWNlbnRlciBhYnNvbHV0ZSBiIGgtZnVsbCB0b3AtMCBsZWZ0LTAnXG5cdFx0XHRcdFx0PjwvZGl2PlxuXHRcdFx0XHRcdNCj0LTQsNC70LjRgtGMXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza0l0ZW1cbiJdLCJuYW1lcyI6WyJkZWxldGVUb2RvIiwicHV0VG9kbyIsInVzZVRhc2tWaWV3IiwidXNlU3RhdGUiLCJzdGF0dXNMaWIiLCJjb2xvcnNMaWIiLCJ0eXBlTnVtYmVyIiwiVGFza0l0ZW0iLCJ0aXRsZSIsInRleHQiLCJzdGF0dXMiLCJpZCIsImNyZWF0ZWRBdCIsInN0YXR1c0FyciIsImlzRGVsZXRlZCIsInNldElzRGVsZXRlZCIsInN0YXR1c0hvb2siLCJzZXRTdGF0dXNIb29rIiwibnVtIiwidXBkYXRlU3RhdHVzSGFuZGxlciIsIm5ld1N0YXR1cyIsIk51bWJlciIsImdldFZhbGlkU3RhdHVzIiwidXBkYXRlVG9kbyIsImNvbG9yIiwiaXRlbURhdGEiLCJyZW1vdmVJdGVtIiwiZGVtb1ZpZXciLCJvcGVuRGVtb1ZpZXciLCJjbG9zZURlbW9WaWV3IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3JkZXJDb2xvciIsIm9uQ2xpY2siLCJiYWNrZ3JvdW5kIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widgets/task/TaskItem.tsx\n"));

/***/ })

});