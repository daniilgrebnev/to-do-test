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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.ts\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/hooks */ \"(app-pages-browser)/./src/store/hooks.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CreateTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateTask */ \"(app-pages-browser)/./src/widgets/task/CreateTask.tsx\");\n/* harmony import */ var _TaskItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskItem */ \"(app-pages-browser)/./src/widgets/task/TaskItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TaskWidget = ()=>{\n    _s();\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)() // Предположим, что данные хранятся в 'state.todo.dataStoreArray'\n    ;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function name() {\n            setData(await (0,_api__WEBPACK_IMPORTED_MODULE_1__.getAllTodos)());\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center text-lg text-semibold\",\n                children: \"Задачи\"\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                lineNumber: 28,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateTask__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, undefined),\n            data && data.map((item)=>item.id !== undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TaskItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    title: item.title,\n                    status: item.status,\n                    text: item.text,\n                    id: item.id\n                }, item.id, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 8\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n        lineNumber: 27,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TaskWidget, \"Rm4GTYQS2m4APO9Hn2Er49RLbpk=\", false, function() {\n    return [\n        _store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = TaskWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskWidget);\nvar _c;\n$RefreshReg$(_c, \"TaskWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza1dpZGdldC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtQztBQUNXO0FBQ0g7QUFDTjtBQUNKO0FBU2pDLE1BQU1NLGFBQWE7O0lBQ2xCLE1BQU1DLFdBQVdOLDREQUFjQTtJQUMvQixNQUFNLENBQUNPLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLEdBQVksaUVBQWlFOztJQUU3R0QsZ0RBQVNBLENBQUM7UUFDVCxlQUFlUTtZQUNkRCxRQUFRLE1BQU1ULGlEQUFXQTtRQUMxQjtJQUNELEdBQUcsRUFBRTtJQUVMLHFCQUNDLDhEQUFDVzs7MEJBQ0EsOERBQUNBO2dCQUFJQyxXQUFVOzBCQUFvQzs7Ozs7OzBCQUNuRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2QsNEVBQUNSLG1EQUFVQTs7Ozs7Ozs7OztZQUVYSSxRQUNBQSxLQUFLSyxHQUFHLENBQ1BDLENBQUFBLE9BQ0NBLEtBQUtDLEVBQUUsS0FBS0MsMkJBQ1gsOERBQUNYLGlEQUFRQTtvQkFFUlksT0FBT0gsS0FBS0csS0FBSztvQkFDakJDLFFBQVFKLEtBQUtJLE1BQU07b0JBQ25CQyxNQUFNTCxLQUFLSyxJQUFJO29CQUNmSixJQUFJRCxLQUFLQyxFQUFFO21CQUpORCxLQUFLQyxFQUFFOzs7Ozs7Ozs7OztBQVVwQjtHQS9CTVQ7O1FBQ1lMLHdEQUFjQTs7O0tBRDFCSztBQWlDTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvd2lkZ2V0cy90YXNrL1Rhc2tXaWRnZXQudHN4PzQ3NzAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IGdldEFsbFRvZG9zIH0gZnJvbSAnQC9hcGknXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ0Avc3RvcmUvaG9va3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ3JlYXRlVG9kbyBmcm9tICcuL0NyZWF0ZVRhc2snXG5pbXBvcnQgVGFza0l0ZW0gZnJvbSAnLi9UYXNrSXRlbSdcblxuaW50ZXJmYWNlIElUb2RvIHtcblx0aWQ/OiBudW1iZXJcblx0dGl0bGU6IHN0cmluZ1xuXHR0ZXh0OiBzdHJpbmdcblx0c3RhdHVzOiBzdHJpbmdcbn1cblxuY29uc3QgVGFza1dpZGdldCA9ICgpID0+IHtcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpXG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPElUb2RvW10+KCkgLy8g0J/RgNC10LTQv9C+0LvQvtC20LjQvCwg0YfRgtC+INC00LDQvdC90YvQtSDRhdGA0LDQvdGP0YLRgdGPINCyICdzdGF0ZS50b2RvLmRhdGFTdG9yZUFycmF5J1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0YXN5bmMgZnVuY3Rpb24gbmFtZSgpIHtcblx0XHRcdHNldERhdGEoYXdhaXQgZ2V0QWxsVG9kb3MoKSlcblx0XHR9XG5cdH0sIFtdKVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LWxnIHRleHQtc2VtaWJvbGQnPtCX0LDQtNCw0YfQuDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J214LWF1dG8gdGV4dC1jZW50ZXInPlxuXHRcdFx0XHQ8Q3JlYXRlVG9kbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7ZGF0YSAmJlxuXHRcdFx0XHRkYXRhLm1hcChcblx0XHRcdFx0XHRpdGVtID0+XG5cdFx0XHRcdFx0XHRpdGVtLmlkICE9PSB1bmRlZmluZWQgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8VGFza0l0ZW1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e2l0ZW0uaWR9XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU9e2l0ZW0udGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0c3RhdHVzPXtpdGVtLnN0YXR1c31cblx0XHRcdFx0XHRcdFx0XHR0ZXh0PXtpdGVtLnRleHR9XG5cdFx0XHRcdFx0XHRcdFx0aWQ9e2l0ZW0uaWR9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza1dpZGdldFxuIl0sIm5hbWVzIjpbImdldEFsbFRvZG9zIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNyZWF0ZVRvZG8iLCJUYXNrSXRlbSIsIlRhc2tXaWRnZXQiLCJkaXNwYXRjaCIsImRhdGEiLCJzZXREYXRhIiwibmFtZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpZCIsInVuZGVmaW5lZCIsInRpdGxlIiwic3RhdHVzIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widgets/task/TaskWidget.tsx\n"));

/***/ })

});