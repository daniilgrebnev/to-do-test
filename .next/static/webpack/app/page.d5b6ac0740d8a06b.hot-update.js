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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CreateTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateTask */ \"(app-pages-browser)/./src/widgets/task/CreateTask.tsx\");\n/* harmony import */ var _TaskItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskItem */ \"(app-pages-browser)/./src/widgets/task/TaskItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst TaskWidget = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function name() {\n            setData(await (0,_api__WEBPACK_IMPORTED_MODULE_1__.getAllTodos)());\n        }\n        name();\n    }, []);\n    console.log(data.sort((a, b)=>(0,_TaskItem__WEBPACK_IMPORTED_MODULE_4__.statusLib)(a.status).num - (0,_TaskItem__WEBPACK_IMPORTED_MODULE_4__.statusLib)(a.status).num));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center text-lg text-semibold\",\n                children: \"Задачи\"\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, undefined),\n            data && data.map((item)=>item.id !== undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TaskItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    title: item.title,\n                    status: item.status,\n                    text: item.text,\n                    id: item.id\n                }, item.id, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 8\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n        lineNumber: 31,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TaskWidget, \"WZ2PO9A64oHRexE1CE+yX3ebuoA=\");\n_c = TaskWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskWidget);\nvar _c;\n$RefreshReg$(_c, \"TaskWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza1dpZGdldC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRW1DO0FBQ1E7QUFDTjtBQUNXO0FBU2hELE1BQU1NLGFBQWE7O0lBQ2xCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUE7SUFFaENELGdEQUFTQSxDQUFDO1FBQ1QsZUFBZVE7WUFDZEQsUUFBUSxNQUFNUixpREFBV0E7UUFDMUI7UUFFQVM7SUFDRCxHQUFHLEVBQUU7SUFFTEMsUUFBUUMsR0FBRyxDQUNWSixLQUFLSyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTVQsb0RBQVNBLENBQUNRLEVBQUVFLE1BQU0sRUFBRUMsR0FBRyxHQUFHWCxvREFBU0EsQ0FBQ1EsRUFBRUUsTUFBTSxFQUFFQyxHQUFHO0lBR3RFLHFCQUNDLDhEQUFDQzs7MEJBQ0EsOERBQUNBO2dCQUFJQyxXQUFVOzBCQUFvQzs7Ozs7OzBCQUNuRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2QsNEVBQUNmLG1EQUFVQTs7Ozs7Ozs7OztZQUVYSSxRQUNBQSxLQUFLWSxHQUFHLENBQ1BDLENBQUFBLE9BQ0NBLEtBQUtDLEVBQUUsS0FBS0MsMkJBQ1gsOERBQUNsQixpREFBUUE7b0JBRVJtQixPQUFPSCxLQUFLRyxLQUFLO29CQUNqQlIsUUFBUUssS0FBS0wsTUFBTTtvQkFDbkJTLE1BQU1KLEtBQUtJLElBQUk7b0JBQ2ZILElBQUlELEtBQUtDLEVBQUU7bUJBSk5ELEtBQUtDLEVBQUU7Ozs7Ozs7Ozs7O0FBVXBCO0dBcENNZjtLQUFBQTtBQXNDTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvd2lkZ2V0cy90YXNrL1Rhc2tXaWRnZXQudHN4PzQ3NzAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IGdldEFsbFRvZG9zIH0gZnJvbSAnQC9hcGknXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ3JlYXRlVG9kbyBmcm9tICcuL0NyZWF0ZVRhc2snXG5pbXBvcnQgVGFza0l0ZW0sIHsgc3RhdHVzTGliIH0gZnJvbSAnLi9UYXNrSXRlbSdcblxuaW50ZXJmYWNlIElUb2RvIHtcblx0aWQ/OiBudW1iZXJcblx0dGl0bGU6IHN0cmluZ1xuXHR0ZXh0OiBzdHJpbmdcblx0c3RhdHVzOiBzdHJpbmdcbn1cblxuY29uc3QgVGFza1dpZGdldCA9ICgpID0+IHtcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8SVRvZG9bXT4oKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0YXN5bmMgZnVuY3Rpb24gbmFtZSgpIHtcblx0XHRcdHNldERhdGEoYXdhaXQgZ2V0QWxsVG9kb3MoKSlcblx0XHR9XG5cblx0XHRuYW1lKClcblx0fSwgW10pXG5cblx0Y29uc29sZS5sb2coXG5cdFx0ZGF0YS5zb3J0KChhLCBiKSA9PiBzdGF0dXNMaWIoYS5zdGF0dXMpLm51bSAtIHN0YXR1c0xpYihhLnN0YXR1cykubnVtKVxuXHQpXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtbGcgdGV4dC1zZW1pYm9sZCc+0JfQsNC00LDRh9C4PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byB0ZXh0LWNlbnRlcic+XG5cdFx0XHRcdDxDcmVhdGVUb2RvIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHtkYXRhICYmXG5cdFx0XHRcdGRhdGEubWFwKFxuXHRcdFx0XHRcdGl0ZW0gPT5cblx0XHRcdFx0XHRcdGl0ZW0uaWQgIT09IHVuZGVmaW5lZCAmJiAoXG5cdFx0XHRcdFx0XHRcdDxUYXNrSXRlbVxuXHRcdFx0XHRcdFx0XHRcdGtleT17aXRlbS5pZH1cblx0XHRcdFx0XHRcdFx0XHR0aXRsZT17aXRlbS50aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRzdGF0dXM9e2l0ZW0uc3RhdHVzfVxuXHRcdFx0XHRcdFx0XHRcdHRleHQ9e2l0ZW0udGV4dH1cblx0XHRcdFx0XHRcdFx0XHRpZD17aXRlbS5pZH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrV2lkZ2V0XG4iXSwibmFtZXMiOlsiZ2V0QWxsVG9kb3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNyZWF0ZVRvZG8iLCJUYXNrSXRlbSIsInN0YXR1c0xpYiIsIlRhc2tXaWRnZXQiLCJkYXRhIiwic2V0RGF0YSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwic29ydCIsImEiLCJiIiwic3RhdHVzIiwibnVtIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImlkIiwidW5kZWZpbmVkIiwidGl0bGUiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widgets/task/TaskWidget.tsx\n"));

/***/ })

});