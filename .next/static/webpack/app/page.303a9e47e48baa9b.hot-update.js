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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TaskWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskWidget */ \"(app-pages-browser)/./src/widgets/task/TaskWidget.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst colorsLib = (typeNumber)=>{\n    switch(typeNumber){\n        case 0:\n            return \"#374151\";\n        case 1:\n            return \"#ca8a04\";\n        case 2:\n            return \"#059669\";\n    }\n};\nconst TaskItem = (param)=>{\n    let { title, text, status, id } = param;\n    _s();\n    const statusArr = (0,_TaskWidget__WEBPACK_IMPORTED_MODULE_3__.statusLib)(status);\n    const [isDeleted, setIsDeleted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [statusHook, setStatusHook] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((0,_TaskWidget__WEBPACK_IMPORTED_MODULE_3__.statusLib)(status).num);\n    const updateStatusHandler = (id, newStatus)=>{\n        setStatusHook(Number(newStatus));\n        function getValidStatus(newStatus) {\n            switch(newStatus){\n                case \"0\":\n                    return \"wait\";\n                case \"1\":\n                    return \"inProgress\";\n                case \"2\":\n                    return \"completed\";\n                default:\n                    return \"errored\";\n            }\n        }\n        const status = getValidStatus(newStatus);\n        const updateTodo = {\n            status: status\n        };\n        (0,_api__WEBPACK_IMPORTED_MODULE_1__.putTodo)(id, updateTodo);\n    };\n    const color = colorsLib(statusHook);\n    // Delete\n    const removeItem = async (id)=>{\n        await (0,_api__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                borderColor: color\n            },\n            className: \"  text-black w-8/12 overflow-hidden mx-auto my-6  border-2 grid-task-item rounded-lg cursor-pointer transition-all hover:shadow-lg border-teal-700 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-2xl  hover:bg-gray-50 font-semibold pl-8 py-3\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-full w-full flex items-center justify-center p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" flex items-center justify-center w-0.5 text-center   absolute b h-full top-0 left-0 \"\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" text-white py-1 px-2 rounded-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"bg-inherit focus-within:outline-0\",\n                                value: statusHook,\n                                onChange: (e)=>updateStatusHandler(id, e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        className: \"bg-[#374151]\",\n                                        value: 0,\n                                        children: \"Ожидает\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        className: \"bg-[#ca8a04]\",\n                                        value: 1,\n                                        children: \"В работе\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        className: \"bg-[#059669]\",\n                                        value: 2,\n                                        children: \"Завершен\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-full w-full flex items-center justify-center p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" flex  items-center justify-center w-0.5 text-center   absolute b h-full top-0 left-0 \"\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 6\n                        }, undefined),\n                        \"Изменить\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>removeItem(id),\n                    className: \"relative h-full w-full flex items-center justify-center p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" flex  items-center justify-center w-0.5 text-center absolute b h-full top-0 left-0\"\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 6\n                        }, undefined),\n                        \"Delete\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n            lineNumber: 59,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n        lineNumber: 58,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TaskItem, \"63OuXZbj3QueJ3NCXNnyI5PY0b0=\");\n_c = TaskItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskItem);\nvar _c;\n$RefreshReg$(_c, \"TaskItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza0l0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzJDO0FBQ1g7QUFDUTtBQVN4QyxNQUFNSSxZQUFZLENBQUNDO0lBQ2xCLE9BQVFBO1FBQ1AsS0FBSztZQUNKLE9BQU87UUFDUixLQUFLO1lBQ0osT0FBTztRQUNSLEtBQUs7WUFDSixPQUFPO0lBQ1Q7QUFDRDtBQUVBLE1BQU1DLFdBQVc7UUFBQyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxFQUFFLEVBQVM7O0lBQ25ELE1BQU1DLFlBQVlSLHNEQUFTQSxDQUFDTTtJQUM1QixNQUFNLENBQUNHLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBO0lBRTFDLE1BQU0sQ0FBQ1ksWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQ0Msc0RBQVNBLENBQUNNLFFBQVFPLEdBQUc7SUFDbEUsTUFBTUMsc0JBQXNCLENBQUNQLElBQVlRO1FBQ3hDSCxjQUFjSSxPQUFPRDtRQUVyQixTQUFTRSxlQUFlRixTQUFpQjtZQUN4QyxPQUFRQTtnQkFDUCxLQUFLO29CQUNKLE9BQU87Z0JBQ1IsS0FBSztvQkFDSixPQUFPO2dCQUNSLEtBQUs7b0JBQ0osT0FBTztnQkFDUjtvQkFDQyxPQUFPO1lBQ1Q7UUFDRDtRQUVBLE1BQU1ULFNBQVNXLGVBQWVGO1FBRTlCLE1BQU1HLGFBQWE7WUFBRVosUUFBUUE7UUFBTztRQUNwQ1IsNkNBQU9BLENBQUNTLElBQUlXO0lBQ2I7SUFDQSxNQUFNQyxRQUFRbEIsVUFBVVU7SUFFeEIsU0FBUztJQUNULE1BQU1TLGFBQWEsT0FBT2I7UUFDekIsTUFBTVYsZ0RBQVVBLENBQUNVO0lBQ2xCO0lBRUEscUJBQ0MsOERBQUNjO1FBQUlDLFdBQVU7a0JBQ2QsNEVBQUNEO1lBQ0FFLE9BQU87Z0JBQ05DLGFBQWFMO1lBQ2Q7WUFDQUcsV0FBVTs7OEJBRVYsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNibEI7Ozs7Ozs4QkFFRiw4REFBQ2lCO29CQUFJQyxXQUFVOztzQ0FDZCw4REFBQ0Q7NEJBQ0FFLE9BQU87Z0NBQUVFLFlBQVlOOzRCQUFNOzRCQUMzQkcsV0FBVTs7Ozs7O3NDQUVYLDhEQUFDRDs0QkFDQUUsT0FBTztnQ0FBRUUsWUFBWU47NEJBQU07NEJBQzNCRyxXQUFVO3NDQUVWLDRFQUFDSTtnQ0FDQUosV0FBVTtnQ0FDVkssT0FBT2hCO2dDQUNQaUIsVUFBVUMsQ0FBQUEsSUFBS2Ysb0JBQW9CUCxJQUFJc0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOztrREFFckQsOERBQUNJO3dDQUFPVCxXQUFVO3dDQUFlSyxPQUFPO2tEQUFHOzs7Ozs7a0RBRzNDLDhEQUFDSTt3Q0FBT1QsV0FBVTt3Q0FBZUssT0FBTztrREFBRzs7Ozs7O2tEQUczQyw4REFBQ0k7d0NBQU9ULFdBQVU7d0NBQWVLLE9BQU87a0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU05Qyw4REFBQ047b0JBQUlDLFdBQVU7O3NDQUNkLDhEQUFDRDs0QkFDQUUsT0FBTztnQ0FBRUUsWUFBWU47NEJBQU07NEJBQzNCRyxXQUFVOzs7Ozs7d0JBQ0o7Ozs7Ozs7OEJBR1IsOERBQUNEO29CQUNBVyxTQUFTLElBQU1aLFdBQVdiO29CQUMxQmUsV0FBVTs7c0NBRVYsOERBQUNEOzRCQUNBRSxPQUFPO2dDQUFFRSxZQUFZTjs0QkFBTTs0QkFDM0JHLFdBQVU7Ozs7Ozt3QkFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7R0ExRk1uQjtLQUFBQTtBQTRGTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvd2lkZ2V0cy90YXNrL1Rhc2tJdGVtLnRzeD81MDI1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgZGVsZXRlVG9kbywgcHV0VG9kbyB9IGZyb20gJ0AvYXBpJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHN0YXR1c0xpYiB9IGZyb20gJy4vVGFza1dpZGdldCdcblxuaW50ZXJmYWNlIElUYXNrIHtcblx0aWQ6IG51bWJlclxuXHR0aXRsZTogc3RyaW5nXG5cdHRleHQ6IHN0cmluZ1xuXHRzdGF0dXM6IHN0cmluZ1xufVxuXG5jb25zdCBjb2xvcnNMaWIgPSAodHlwZU51bWJlcjogbnVtYmVyKSA9PiB7XG5cdHN3aXRjaCAodHlwZU51bWJlcikge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiAnIzM3NDE1MSdcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gJyNjYThhMDQnXG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuICcjMDU5NjY5J1xuXHR9XG59XG5cbmNvbnN0IFRhc2tJdGVtID0gKHsgdGl0bGUsIHRleHQsIHN0YXR1cywgaWQgfTogSVRhc2spID0+IHtcblx0Y29uc3Qgc3RhdHVzQXJyID0gc3RhdHVzTGliKHN0YXR1cylcblx0Y29uc3QgW2lzRGVsZXRlZCwgc2V0SXNEZWxldGVkXSA9IHVzZVN0YXRlKClcblxuXHRjb25zdCBbc3RhdHVzSG9vaywgc2V0U3RhdHVzSG9va10gPSB1c2VTdGF0ZShzdGF0dXNMaWIoc3RhdHVzKS5udW0pXG5cdGNvbnN0IHVwZGF0ZVN0YXR1c0hhbmRsZXIgPSAoaWQ6IG51bWJlciwgbmV3U3RhdHVzOiBzdHJpbmcpID0+IHtcblx0XHRzZXRTdGF0dXNIb29rKE51bWJlcihuZXdTdGF0dXMpKVxuXG5cdFx0ZnVuY3Rpb24gZ2V0VmFsaWRTdGF0dXMobmV3U3RhdHVzOiBzdHJpbmcpIHtcblx0XHRcdHN3aXRjaCAobmV3U3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgJzAnOlxuXHRcdFx0XHRcdHJldHVybiAnd2FpdCdcblx0XHRcdFx0Y2FzZSAnMSc6XG5cdFx0XHRcdFx0cmV0dXJuICdpblByb2dyZXNzJ1xuXHRcdFx0XHRjYXNlICcyJzpcblx0XHRcdFx0XHRyZXR1cm4gJ2NvbXBsZXRlZCdcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gJ2Vycm9yZWQnXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3RhdHVzID0gZ2V0VmFsaWRTdGF0dXMobmV3U3RhdHVzKVxuXG5cdFx0Y29uc3QgdXBkYXRlVG9kbyA9IHsgc3RhdHVzOiBzdGF0dXMgfVxuXHRcdHB1dFRvZG8oaWQsIHVwZGF0ZVRvZG8pXG5cdH1cblx0Y29uc3QgY29sb3IgPSBjb2xvcnNMaWIoc3RhdHVzSG9vaylcblxuXHQvLyBEZWxldGVcblx0Y29uc3QgcmVtb3ZlSXRlbSA9IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XG5cdFx0YXdhaXQgZGVsZXRlVG9kbyhpZClcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9Jyc+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0Ym9yZGVyQ29sb3I6IGNvbG9yLFxuXHRcdFx0XHR9fVxuXHRcdFx0XHRjbGFzc05hbWU9JyAgdGV4dC1ibGFjayB3LTgvMTIgb3ZlcmZsb3ctaGlkZGVuIG14LWF1dG8gbXktNiAgYm9yZGVyLTIgZ3JpZC10YXNrLWl0ZW0gcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzaGFkb3ctbGcgYm9yZGVyLXRlYWwtNzAwICdcblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtMnhsICBob3ZlcjpiZy1ncmF5LTUwIGZvbnQtc2VtaWJvbGQgcGwtOCBweS0zJz5cblx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTMnPlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmQ6IGNvbG9yIH19XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9JyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTAuNSB0ZXh0LWNlbnRlciAgIGFic29sdXRlIGIgaC1mdWxsIHRvcC0wIGxlZnQtMCAnXG5cdFx0XHRcdFx0PjwvZGl2PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmQ6IGNvbG9yIH19XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9JyB0ZXh0LXdoaXRlIHB5LTEgcHgtMiByb3VuZGVkLWxnJ1xuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdiZy1pbmhlcml0IGZvY3VzLXdpdGhpbjpvdXRsaW5lLTAnXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtzdGF0dXNIb29rfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiB1cGRhdGVTdGF0dXNIYW5kbGVyKGlkLCBlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gY2xhc3NOYW1lPSdiZy1bIzM3NDE1MV0nIHZhbHVlPXswfT5cblx0XHRcdFx0XHRcdFx0XHTQntC20LjQtNCw0LXRglxuXHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiBjbGFzc05hbWU9J2JnLVsjY2E4YTA0XScgdmFsdWU9ezF9PlxuXHRcdFx0XHRcdFx0XHRcdNCSINGA0LDQsdC+0YLQtVxuXHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiBjbGFzc05hbWU9J2JnLVsjMDU5NjY5XScgdmFsdWU9ezJ9PlxuXHRcdFx0XHRcdFx0XHRcdNCX0LDQstC10YDRiNC10L1cblx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMyc+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3IgfX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nIGZsZXggIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTAuNSB0ZXh0LWNlbnRlciAgIGFic29sdXRlIGIgaC1mdWxsIHRvcC0wIGxlZnQtMCAnXG5cdFx0XHRcdFx0PjwvZGl2PlxuXHRcdFx0XHRcdNCY0LfQvNC10L3QuNGC0Yxcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtKGlkKX1cblx0XHRcdFx0XHRjbGFzc05hbWU9J3JlbGF0aXZlIGgtZnVsbCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0zJ1xuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3IgfX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nIGZsZXggIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTAuNSB0ZXh0LWNlbnRlciBhYnNvbHV0ZSBiIGgtZnVsbCB0b3AtMCBsZWZ0LTAnXG5cdFx0XHRcdFx0PjwvZGl2PlxuXHRcdFx0XHRcdERlbGV0ZVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tJdGVtXG4iXSwibmFtZXMiOlsiZGVsZXRlVG9kbyIsInB1dFRvZG8iLCJ1c2VTdGF0ZSIsInN0YXR1c0xpYiIsImNvbG9yc0xpYiIsInR5cGVOdW1iZXIiLCJUYXNrSXRlbSIsInRpdGxlIiwidGV4dCIsInN0YXR1cyIsImlkIiwic3RhdHVzQXJyIiwiaXNEZWxldGVkIiwic2V0SXNEZWxldGVkIiwic3RhdHVzSG9vayIsInNldFN0YXR1c0hvb2siLCJudW0iLCJ1cGRhdGVTdGF0dXNIYW5kbGVyIiwibmV3U3RhdHVzIiwiTnVtYmVyIiwiZ2V0VmFsaWRTdGF0dXMiLCJ1cGRhdGVUb2RvIiwiY29sb3IiLCJyZW1vdmVJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3JkZXJDb2xvciIsImJhY2tncm91bmQiLCJzZWxlY3QiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9wdGlvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widgets/task/TaskItem.tsx\n"));

/***/ })

});