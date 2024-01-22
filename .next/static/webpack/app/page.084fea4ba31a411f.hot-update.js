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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.ts\");\n/* harmony import */ var _store_zustand_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/zustand.store */ \"(app-pages-browser)/./src/store/zustand.store.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst TaskFullWidget = ()=>{\n    _s();\n    const { closeDemoView, activeArray } = (0,_store_zustand_store__WEBPACK_IMPORTED_MODULE_2__.useTaskView)();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(activeArray === null || activeArray === void 0 ? void 0 : activeArray.text);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setTitle((activeArray === null || activeArray === void 0 ? void 0 : activeArray.title) || \"null\");\n    }, [\n        activeArray === null || activeArray === void 0 ? void 0 : activeArray.title,\n        text\n    ]);\n    const [updateMode, setUpdateMode] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    async function updateHandler() {\n        setUpdateMode(false);\n        const item = {\n            text,\n            title\n        };\n        if (activeArray === null || activeArray === void 0 ? void 0 : activeArray.id) {\n            const result = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.putTodo)(activeArray === null || activeArray === void 0 ? void 0 : activeArray.id, item);\n            // Обработка результата, если необходимо\n            console.log(\"Результат сохранения:\", result);\n        }\n        location.reload();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden relative w-full h-full p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: closeDemoView,\n                className: \"absolute left-2 top-2 cursor-pointer\",\n                children: \"Закрыть\"\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute right-2 top-2 cursor-pointer\",\n                children: updateMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    onClick: ()=>updateHandler(),\n                    children: \"Сохранить\"\n                }, void 0, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 6\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    onClick: ()=>setUpdateMode(true),\n                    children: \"Изменить\"\n                }, void 0, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10 relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-10\",\n                        children: updateMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            className: \"text-6xl font-bold overflow-y-hidden w-full h-auto\",\n                            value: title,\n                            onChange: (e)=>setTitle(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 7\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-6xl font-bold  h-auto\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-10\",\n                        children: updateMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            className: \"text-6xl font-bold overflow-y-hidden w-full h-auto\",\n                            value: text,\n                            onChange: (e)=>setText(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 7\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-6xl font-bold  h-auto\",\n                            children: text\n                        }, void 0, false, {\n                            fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                lineNumber: 39,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TaskFullWidget, \"vvnkjZZ9DMDgJsdpS83KWVA9/Nk=\", false, function() {\n    return [\n        _store_zustand_store__WEBPACK_IMPORTED_MODULE_2__.useTaskView\n    ];\n});\n_c = TaskFullWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskFullWidget);\nvar _c;\n$RefreshReg$(_c, \"TaskFullWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza0Z1bGxXaWRnZXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStCO0FBQ29CO0FBQ1I7QUFFM0MsTUFBTUksaUJBQWlCOztJQUN0QixNQUFNLEVBQUVDLGFBQWEsRUFBRUMsV0FBVyxFQUFFLEdBQUdMLGlFQUFXQTtJQUNsRCxNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQVNHLHdCQUFBQSxrQ0FBQUEsWUFBYUMsSUFBSTtJQUMxRCxNQUFNLENBQUNFLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBO0lBQ2xDRCxnREFBU0EsQ0FBQztRQUNUUSxTQUFTSixDQUFBQSx3QkFBQUEsa0NBQUFBLFlBQWFHLEtBQUssS0FBSTtJQUNoQyxHQUFHO1FBQUNILHdCQUFBQSxrQ0FBQUEsWUFBYUcsS0FBSztRQUFFRjtLQUFLO0lBQzdCLE1BQU0sQ0FBQ0ksWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUU3QyxlQUFlVTtRQUNkRCxjQUFjO1FBQ2QsTUFBTUUsT0FBTztZQUFFUDtZQUFNRTtRQUFNO1FBQzNCLElBQUlILHdCQUFBQSxrQ0FBQUEsWUFBYVMsRUFBRSxFQUFFO1lBQ3BCLE1BQU1DLFNBQVMsTUFBTWhCLDZDQUFPQSxDQUFDTSx3QkFBQUEsa0NBQUFBLFlBQWFTLEVBQUUsRUFBRUQ7WUFDOUMsd0NBQXdDO1lBQ3hDRyxRQUFRQyxHQUFHLENBQUMseUJBQXlCRjtRQUN0QztRQUNBRyxTQUFTQyxNQUFNO0lBQ2hCO0lBQ0EscUJBQ0MsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNkLDhEQUFDRDtnQkFDQUUsU0FBU2xCO2dCQUNUaUIsV0FBVTswQkFDVjs7Ozs7OzBCQUdELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYlgsMkJBQ0EsOERBQUNhO29CQUFFRCxTQUFTLElBQU1WOzhCQUFpQjs7Ozs7OENBRW5DLDhEQUFDVztvQkFBRUQsU0FBUyxJQUFNWCxjQUFjOzhCQUFPOzs7Ozs7Ozs7OzswQkFHekMsOERBQUNTO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2JYLDJCQUNBLDhEQUFDYzs0QkFDQUgsV0FBVTs0QkFDVkksT0FBT2pCOzRCQUNQa0IsVUFBVUMsQ0FBQUEsSUFBS2xCLFNBQVNrQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7O3NEQUd2Qyw4REFBQ0w7NEJBQUlDLFdBQVU7c0NBQThCYjs7Ozs7Ozs7Ozs7a0NBRy9DLDhEQUFDWTt3QkFBSUMsV0FBVTtrQ0FDYlgsMkJBQ0EsOERBQUNjOzRCQUNBSCxXQUFVOzRCQUNWSSxPQUFPbkI7NEJBQ1BvQixVQUFVQyxDQUFBQSxJQUFLcEIsUUFBUW9CLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7c0RBR3RDLDhEQUFDTDs0QkFBSUMsV0FBVTtzQ0FBOEJmOzs7Ozs7Ozs7OztrQ0FHL0MsOERBQUNjO3dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkI7R0E3RE1sQjs7UUFDa0NILDZEQUFXQTs7O0tBRDdDRztBQStETiwrREFBZUEsY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvd2lkZ2V0cy90YXNrL1Rhc2tGdWxsV2lkZ2V0LnRzeD82MWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1dFRvZG8gfSBmcm9tICdAL2FwaSdcbmltcG9ydCB7IHVzZVRhc2tWaWV3IH0gZnJvbSAnQC9zdG9yZS96dXN0YW5kLnN0b3JlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBUYXNrRnVsbFdpZGdldCA9ICgpID0+IHtcblx0Y29uc3QgeyBjbG9zZURlbW9WaWV3LCBhY3RpdmVBcnJheSB9ID0gdXNlVGFza1ZpZXcoKVxuXHRjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KGFjdGl2ZUFycmF5Py50ZXh0KVxuXHRjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlPHN0cmluZz4oKVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldFRpdGxlKGFjdGl2ZUFycmF5Py50aXRsZSB8fCAnbnVsbCcpXG5cdH0sIFthY3RpdmVBcnJheT8udGl0bGUsIHRleHRdKVxuXHRjb25zdCBbdXBkYXRlTW9kZSwgc2V0VXBkYXRlTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXHRhc3luYyBmdW5jdGlvbiB1cGRhdGVIYW5kbGVyKCkge1xuXHRcdHNldFVwZGF0ZU1vZGUoZmFsc2UpXG5cdFx0Y29uc3QgaXRlbSA9IHsgdGV4dCwgdGl0bGUgfVxuXHRcdGlmIChhY3RpdmVBcnJheT8uaWQpIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHB1dFRvZG8oYWN0aXZlQXJyYXk/LmlkLCBpdGVtKVxuXHRcdFx0Ly8g0J7QsdGA0LDQsdC+0YLQutCwINGA0LXQt9GD0LvRjNGC0LDRgtCwLCDQtdGB0LvQuCDQvdC10L7QsdGF0L7QtNC40LzQvlxuXHRcdFx0Y29uc29sZS5sb2coJ9Cg0LXQt9GD0LvRjNGC0LDRgiDRgdC+0YXRgNCw0L3QtdC90LjRjzonLCByZXN1bHQpXG5cdFx0fVxuXHRcdGxvY2F0aW9uLnJlbG9hZCgpXG5cdH1cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlIHctZnVsbCBoLWZ1bGwgcC00Jz5cblx0XHRcdDxkaXZcblx0XHRcdFx0b25DbGljaz17Y2xvc2VEZW1vVmlld31cblx0XHRcdFx0Y2xhc3NOYW1lPSdhYnNvbHV0ZSBsZWZ0LTIgdG9wLTIgY3Vyc29yLXBvaW50ZXInXG5cdFx0XHQ+XG5cdFx0XHRcdNCX0LDQutGA0YvRgtGMXG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSByaWdodC0yIHRvcC0yIGN1cnNvci1wb2ludGVyJz5cblx0XHRcdFx0e3VwZGF0ZU1vZGUgPyAoXG5cdFx0XHRcdFx0PHAgb25DbGljaz17KCkgPT4gdXBkYXRlSGFuZGxlcigpfT7QodC+0YXRgNCw0L3QuNGC0Yw8L3A+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PHAgb25DbGljaz17KCkgPT4gc2V0VXBkYXRlTW9kZSh0cnVlKX0+0JjQt9C80LXQvdC40YLRjDwvcD5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J210LTEwIHJlbGF0aXZlJz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21iLTEwJz5cblx0XHRcdFx0XHR7dXBkYXRlTW9kZSA/IChcblx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3RleHQtNnhsIGZvbnQtYm9sZCBvdmVyZmxvdy15LWhpZGRlbiB3LWZ1bGwgaC1hdXRvJ1xuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGl0bGV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdD48L3RleHRhcmVhPlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC02eGwgZm9udC1ib2xkICBoLWF1dG8nPnt0aXRsZX08L2Rpdj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21iLTEwJz5cblx0XHRcdFx0XHR7dXBkYXRlTW9kZSA/IChcblx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3RleHQtNnhsIGZvbnQtYm9sZCBvdmVyZmxvdy15LWhpZGRlbiB3LWZ1bGwgaC1hdXRvJ1xuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGV4dH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gc2V0VGV4dChlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQ+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtNnhsIGZvbnQtYm9sZCAgaC1hdXRvJz57dGV4dH08L2Rpdj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9Jyc+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrRnVsbFdpZGdldFxuIl0sIm5hbWVzIjpbInB1dFRvZG8iLCJ1c2VUYXNrVmlldyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGFza0Z1bGxXaWRnZXQiLCJjbG9zZURlbW9WaWV3IiwiYWN0aXZlQXJyYXkiLCJ0ZXh0Iiwic2V0VGV4dCIsInRpdGxlIiwic2V0VGl0bGUiLCJ1cGRhdGVNb2RlIiwic2V0VXBkYXRlTW9kZSIsInVwZGF0ZUhhbmRsZXIiLCJpdGVtIiwiaWQiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJyZWxvYWQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicCIsInRleHRhcmVhIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widgets/task/TaskFullWidget.tsx\n"));

/***/ })

});