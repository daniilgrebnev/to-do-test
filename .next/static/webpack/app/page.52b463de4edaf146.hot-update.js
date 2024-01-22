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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TaskWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskWidget */ \"(app-pages-browser)/./src/widgets/task/TaskWidget.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst colorsLib = (typeNumber)=>{\n    switch(typeNumber){\n        case 0:\n            return \"#374151\";\n        case 1:\n            return \"#ca8a04\";\n        case 2:\n            return \"#059669\";\n    }\n};\nconst TaskItem = (param)=>{\n    let { title, text, status, id } = param;\n    _s();\n    const statusArr = (0,_TaskWidget__WEBPACK_IMPORTED_MODULE_3__.statusLib)(status);\n    const [statusHook, setStatusHook] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((0,_TaskWidget__WEBPACK_IMPORTED_MODULE_3__.statusLib)(status).num);\n    const updateStatusHandler = (id, newStatus)=>{\n        setStatusHook(Number(newStatus));\n        function getValidStatus(newStatus) {\n            switch(newStatus){\n                case \"0\":\n                    return \"wait\";\n                case \"1\":\n                    return \"inProgress\";\n                case \"2\":\n                    return \"completed\";\n                default:\n                    return \"errored\";\n            }\n        }\n        const status = getValidStatus(newStatus);\n        const updateTodo = {\n            status: status\n        };\n        (0,_api__WEBPACK_IMPORTED_MODULE_1__.putTodo)(id, updateTodo);\n    };\n    const color = colorsLib(statusHook);\n    // Delete\n    const removeItem = async (id)=>{\n        await (0,_api__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(id);\n        location.reload();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                borderColor: color\n            },\n            className: \"  text-black w-8/12 overflow-hidden mx-auto my-6  border-2 grid-task-item rounded-lg cursor-pointer transition-all hover:shadow-lg border-teal-700 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-2xl  hover:bg-gray-50 font-semibold pl-8 py-3\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-full w-full flex items-center justify-center p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" flex items-center justify-center w-0.5 text-center   absolute b h-full top-0 left-0 \"\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" text-white py-1 px-2 rounded-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"bg-inherit focus-within:outline-0\",\n                                value: statusHook,\n                                onChange: (e)=>updateStatusHandler(id, e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        className: \"bg-[#374151]\",\n                                        value: 0,\n                                        children: \"Ожидает\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        className: \"bg-[#ca8a04]\",\n                                        value: 1,\n                                        children: \"В работе\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        className: \"bg-[#059669]\",\n                                        value: 2,\n                                        children: \"Завершен\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-full w-full flex items-center justify-center p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" flex  items-center justify-center w-0.5 text-center   absolute b h-full top-0 left-0 \"\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 6\n                        }, undefined),\n                        \"Изменить\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>removeItem(id),\n                    className: \"relative h-full w-full flex items-center justify-center p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: color\n                            },\n                            className: \" flex  items-center justify-center w-0.5 text-center absolute b h-full top-0 left-0\"\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 6\n                        }, undefined),\n                        \"Delete\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n            lineNumber: 59,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskItem.tsx\",\n        lineNumber: 58,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TaskItem, \"H0Rqm1xAiot8dW57pedtU77CtSA=\");\n_c = TaskItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskItem);\nvar _c;\n$RefreshReg$(_c, \"TaskItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza0l0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzJDO0FBQ1g7QUFDUTtBQVN4QyxNQUFNSSxZQUFZLENBQUNDO0lBQ2xCLE9BQVFBO1FBQ1AsS0FBSztZQUNKLE9BQU87UUFDUixLQUFLO1lBQ0osT0FBTztRQUNSLEtBQUs7WUFDSixPQUFPO0lBQ1Q7QUFDRDtBQUVBLE1BQU1DLFdBQVc7UUFBQyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxFQUFFLEVBQVM7O0lBQ25ELE1BQU1DLFlBQVlSLHNEQUFTQSxDQUFDTTtJQUU1QixNQUFNLENBQUNHLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUNDLHNEQUFTQSxDQUFDTSxRQUFRSyxHQUFHO0lBQ2xFLE1BQU1DLHNCQUFzQixDQUFDTCxJQUFZTTtRQUN4Q0gsY0FBY0ksT0FBT0Q7UUFFckIsU0FBU0UsZUFBZUYsU0FBaUI7WUFDeEMsT0FBUUE7Z0JBQ1AsS0FBSztvQkFDSixPQUFPO2dCQUNSLEtBQUs7b0JBQ0osT0FBTztnQkFDUixLQUFLO29CQUNKLE9BQU87Z0JBQ1I7b0JBQ0MsT0FBTztZQUNUO1FBQ0Q7UUFFQSxNQUFNUCxTQUFTUyxlQUFlRjtRQUU5QixNQUFNRyxhQUFhO1lBQUVWLFFBQVFBO1FBQU87UUFDcENSLDZDQUFPQSxDQUFDUyxJQUFJUztJQUNiO0lBQ0EsTUFBTUMsUUFBUWhCLFVBQVVRO0lBRXhCLFNBQVM7SUFDVCxNQUFNUyxhQUFhLE9BQU9YO1FBQ3pCLE1BQU1WLGdEQUFVQSxDQUFDVTtRQUNqQlksU0FBU0MsTUFBTTtJQUNoQjtJQUVBLHFCQUNDLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNkLDRFQUFDRDtZQUNBRSxPQUFPO2dCQUNOQyxhQUFhUDtZQUNkO1lBQ0FLLFdBQVU7OzhCQUVWLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYmxCOzs7Ozs7OEJBRUYsOERBQUNpQjtvQkFBSUMsV0FBVTs7c0NBQ2QsOERBQUNEOzRCQUNBRSxPQUFPO2dDQUFFRSxZQUFZUjs0QkFBTTs0QkFDM0JLLFdBQVU7Ozs7OztzQ0FFWCw4REFBQ0Q7NEJBQ0FFLE9BQU87Z0NBQUVFLFlBQVlSOzRCQUFNOzRCQUMzQkssV0FBVTtzQ0FFViw0RUFBQ0k7Z0NBQ0FKLFdBQVU7Z0NBQ1ZLLE9BQU9sQjtnQ0FDUG1CLFVBQVVDLENBQUFBLElBQUtqQixvQkFBb0JMLElBQUlzQixFQUFFQyxNQUFNLENBQUNILEtBQUs7O2tEQUVyRCw4REFBQ0k7d0NBQU9ULFdBQVU7d0NBQWVLLE9BQU87a0RBQUc7Ozs7OztrREFHM0MsOERBQUNJO3dDQUFPVCxXQUFVO3dDQUFlSyxPQUFPO2tEQUFHOzs7Ozs7a0RBRzNDLDhEQUFDSTt3Q0FBT1QsV0FBVTt3Q0FBZUssT0FBTztrREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTTlDLDhEQUFDTjtvQkFBSUMsV0FBVTs7c0NBQ2QsOERBQUNEOzRCQUNBRSxPQUFPO2dDQUFFRSxZQUFZUjs0QkFBTTs0QkFDM0JLLFdBQVU7Ozs7Ozt3QkFDSjs7Ozs7Ozs4QkFHUiw4REFBQ0Q7b0JBQ0FXLFNBQVMsSUFBTWQsV0FBV1g7b0JBQzFCZSxXQUFVOztzQ0FFViw4REFBQ0Q7NEJBQ0FFLE9BQU87Z0NBQUVFLFlBQVlSOzRCQUFNOzRCQUMzQkssV0FBVTs7Ozs7O3dCQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWjtHQTFGTW5CO0tBQUFBO0FBNEZOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza0l0ZW0udHN4PzUwMjUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyBkZWxldGVUb2RvLCBwdXRUb2RvIH0gZnJvbSAnQC9hcGknXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgc3RhdHVzTGliIH0gZnJvbSAnLi9UYXNrV2lkZ2V0J1xuXG5pbnRlcmZhY2UgSVRhc2sge1xuXHRpZDogbnVtYmVyXG5cdHRpdGxlOiBzdHJpbmdcblx0dGV4dDogc3RyaW5nXG5cdHN0YXR1czogc3RyaW5nXG59XG5cbmNvbnN0IGNvbG9yc0xpYiA9ICh0eXBlTnVtYmVyOiBudW1iZXIpID0+IHtcblx0c3dpdGNoICh0eXBlTnVtYmVyKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuICcjMzc0MTUxJ1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiAnI2NhOGEwNCdcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gJyMwNTk2NjknXG5cdH1cbn1cblxuY29uc3QgVGFza0l0ZW0gPSAoeyB0aXRsZSwgdGV4dCwgc3RhdHVzLCBpZCB9OiBJVGFzaykgPT4ge1xuXHRjb25zdCBzdGF0dXNBcnIgPSBzdGF0dXNMaWIoc3RhdHVzKVxuXG5cdGNvbnN0IFtzdGF0dXNIb29rLCBzZXRTdGF0dXNIb29rXSA9IHVzZVN0YXRlKHN0YXR1c0xpYihzdGF0dXMpLm51bSlcblx0Y29uc3QgdXBkYXRlU3RhdHVzSGFuZGxlciA9IChpZDogbnVtYmVyLCBuZXdTdGF0dXM6IHN0cmluZykgPT4ge1xuXHRcdHNldFN0YXR1c0hvb2soTnVtYmVyKG5ld1N0YXR1cykpXG5cblx0XHRmdW5jdGlvbiBnZXRWYWxpZFN0YXR1cyhuZXdTdGF0dXM6IHN0cmluZykge1xuXHRcdFx0c3dpdGNoIChuZXdTdGF0dXMpIHtcblx0XHRcdFx0Y2FzZSAnMCc6XG5cdFx0XHRcdFx0cmV0dXJuICd3YWl0J1xuXHRcdFx0XHRjYXNlICcxJzpcblx0XHRcdFx0XHRyZXR1cm4gJ2luUHJvZ3Jlc3MnXG5cdFx0XHRcdGNhc2UgJzInOlxuXHRcdFx0XHRcdHJldHVybiAnY29tcGxldGVkJ1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiAnZXJyb3JlZCdcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBzdGF0dXMgPSBnZXRWYWxpZFN0YXR1cyhuZXdTdGF0dXMpXG5cblx0XHRjb25zdCB1cGRhdGVUb2RvID0geyBzdGF0dXM6IHN0YXR1cyB9XG5cdFx0cHV0VG9kbyhpZCwgdXBkYXRlVG9kbylcblx0fVxuXHRjb25zdCBjb2xvciA9IGNvbG9yc0xpYihzdGF0dXNIb29rKVxuXG5cdC8vIERlbGV0ZVxuXHRjb25zdCByZW1vdmVJdGVtID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcblx0XHRhd2FpdCBkZWxldGVUb2RvKGlkKVxuXHRcdGxvY2F0aW9uLnJlbG9hZCgpXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPScnPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdGJvcmRlckNvbG9yOiBjb2xvcixcblx0XHRcdFx0fX1cblx0XHRcdFx0Y2xhc3NOYW1lPScgIHRleHQtYmxhY2sgdy04LzEyIG92ZXJmbG93LWhpZGRlbiBteC1hdXRvIG15LTYgIGJvcmRlci0yIGdyaWQtdGFzay1pdGVtIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgaG92ZXI6c2hhZG93LWxnIGJvcmRlci10ZWFsLTcwMCAnXG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LTJ4bCAgaG92ZXI6YmctZ3JheS01MCBmb250LXNlbWlib2xkIHBsLTggcHktMyc+XG5cdFx0XHRcdFx0e3RpdGxlfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGgtZnVsbCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0zJz5cblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kOiBjb2xvciB9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPScgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy0wLjUgdGV4dC1jZW50ZXIgICBhYnNvbHV0ZSBiIGgtZnVsbCB0b3AtMCBsZWZ0LTAgJ1xuXHRcdFx0XHRcdD48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kOiBjb2xvciB9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPScgdGV4dC13aGl0ZSBweS0xIHB4LTIgcm91bmRlZC1sZydcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYmctaW5oZXJpdCBmb2N1cy13aXRoaW46b3V0bGluZS0wJ1xuXHRcdFx0XHRcdFx0XHR2YWx1ZT17c3RhdHVzSG9va31cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gdXBkYXRlU3RhdHVzSGFuZGxlcihpZCwgZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGNsYXNzTmFtZT0nYmctWyMzNzQxNTFdJyB2YWx1ZT17MH0+XG5cdFx0XHRcdFx0XHRcdFx00J7QttC40LTQsNC10YJcblx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gY2xhc3NOYW1lPSdiZy1bI2NhOGEwNF0nIHZhbHVlPXsxfT5cblx0XHRcdFx0XHRcdFx0XHTQkiDRgNCw0LHQvtGC0LVcblx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gY2xhc3NOYW1lPSdiZy1bIzA1OTY2OV0nIHZhbHVlPXsyfT5cblx0XHRcdFx0XHRcdFx0XHTQl9Cw0LLQtdGA0YjQtdC9XG5cdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTMnPlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmQ6IGNvbG9yIH19XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9JyBmbGV4ICBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy0wLjUgdGV4dC1jZW50ZXIgICBhYnNvbHV0ZSBiIGgtZnVsbCB0b3AtMCBsZWZ0LTAgJ1xuXHRcdFx0XHRcdD48L2Rpdj5cblx0XHRcdFx0XHTQmNC30LzQtdC90LjRgtGMXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcmVtb3ZlSXRlbShpZCl9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdyZWxhdGl2ZSBoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMydcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdHN0eWxlPXt7IGJhY2tncm91bmQ6IGNvbG9yIH19XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9JyBmbGV4ICBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy0wLjUgdGV4dC1jZW50ZXIgYWJzb2x1dGUgYiBoLWZ1bGwgdG9wLTAgbGVmdC0wJ1xuXHRcdFx0XHRcdD48L2Rpdj5cblx0XHRcdFx0XHREZWxldGVcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrSXRlbVxuIl0sIm5hbWVzIjpbImRlbGV0ZVRvZG8iLCJwdXRUb2RvIiwidXNlU3RhdGUiLCJzdGF0dXNMaWIiLCJjb2xvcnNMaWIiLCJ0eXBlTnVtYmVyIiwiVGFza0l0ZW0iLCJ0aXRsZSIsInRleHQiLCJzdGF0dXMiLCJpZCIsInN0YXR1c0FyciIsInN0YXR1c0hvb2siLCJzZXRTdGF0dXNIb29rIiwibnVtIiwidXBkYXRlU3RhdHVzSGFuZGxlciIsIm5ld1N0YXR1cyIsIk51bWJlciIsImdldFZhbGlkU3RhdHVzIiwidXBkYXRlVG9kbyIsImNvbG9yIiwicmVtb3ZlSXRlbSIsImxvY2F0aW9uIiwicmVsb2FkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3JkZXJDb2xvciIsImJhY2tncm91bmQiLCJzZWxlY3QiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9wdGlvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widgets/task/TaskItem.tsx\n"));

/***/ })

});