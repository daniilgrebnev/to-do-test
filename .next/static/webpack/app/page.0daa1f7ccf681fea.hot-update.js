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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/hooks */ \"(app-pages-browser)/./src/store/hooks.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CreateTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateTask */ \"(app-pages-browser)/./src/widgets/task/CreateTask.tsx\");\n/* harmony import */ var _TaskItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskItem */ \"(app-pages-browser)/./src/widgets/task/TaskItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TaskWidget = ()=>{\n    _s();\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]) // Предположим, что данные хранятся в 'state.todo.dataStoreArray'\n    ;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"\");\n    }, []) // Добавлен dataStoreArray в зависимости\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center text-lg text-semibold\",\n                children: \"Задачи\"\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, undefined),\n            data && data.map((item)=>item.id !== undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TaskItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    title: item.title,\n                    status: item.status,\n                    text: item.text,\n                    id: item.id\n                }, item.id, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 8\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TaskWidget, \"BYY1GFU9NPhFRDDBwtWdEfGeFOU=\", false, function() {\n    return [\n        _store_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch\n    ];\n});\n_c = TaskWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskWidget);\nvar _c;\n$RefreshReg$(_c, \"TaskWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza1dpZGdldC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU4QztBQUNyQjtBQUNrQjtBQUNOO0FBQ0o7QUFTakMsTUFBTU0sYUFBYTs7SUFDbEIsTUFBTUMsV0FBV1AsNERBQWNBO0lBQy9CLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBVSxFQUFFLEVBQUUsaUVBQWlFOztJQUUvR0QsZ0RBQVNBLENBQUM7UUFDVEQsNkNBQUtBLENBQUNTLEdBQUcsQ0FBQztJQUNYLEdBQUcsRUFBRSxFQUFFLHdDQUF3Qzs7SUFFL0MscUJBQ0MsOERBQUNDOzswQkFDQSw4REFBQ0E7Z0JBQUlDLFdBQVU7MEJBQW9DOzs7Ozs7MEJBQ25ELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDZCw0RUFBQ1IsbURBQVVBOzs7Ozs7Ozs7O1lBRVhJLFFBQ0FBLEtBQUtLLEdBQUcsQ0FDUEMsQ0FBQUEsT0FDQ0EsS0FBS0MsRUFBRSxLQUFLQywyQkFDWCw4REFBQ1gsaURBQVFBO29CQUVSWSxPQUFPSCxLQUFLRyxLQUFLO29CQUNqQkMsUUFBUUosS0FBS0ksTUFBTTtvQkFDbkJDLE1BQU1MLEtBQUtLLElBQUk7b0JBQ2ZKLElBQUlELEtBQUtDLEVBQUU7bUJBSk5ELEtBQUtDLEVBQUU7Ozs7Ozs7Ozs7O0FBVXBCO0dBN0JNVDs7UUFDWU4sd0RBQWNBOzs7S0FEMUJNO0FBK0JOLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza1dpZGdldC50c3g/NDc3MCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdAL3N0b3JlL2hvb2tzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENyZWF0ZVRvZG8gZnJvbSAnLi9DcmVhdGVUYXNrJ1xuaW1wb3J0IFRhc2tJdGVtIGZyb20gJy4vVGFza0l0ZW0nXG5cbmludGVyZmFjZSBJVG9kbyB7XG5cdGlkPzogbnVtYmVyXG5cdHRpdGxlOiBzdHJpbmdcblx0dGV4dDogc3RyaW5nXG5cdHN0YXR1czogc3RyaW5nXG59XG5cbmNvbnN0IFRhc2tXaWRnZXQgPSAoKSA9PiB7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxuXHRjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxJVG9kb1tdPihbXSkgLy8g0J/RgNC10LTQv9C+0LvQvtC20LjQvCwg0YfRgtC+INC00LDQvdC90YvQtSDRhdGA0LDQvdGP0YLRgdGPINCyICdzdGF0ZS50b2RvLmRhdGFTdG9yZUFycmF5J1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0YXhpb3MuZ2V0KCcnKVxuXHR9LCBbXSkgLy8g0JTQvtCx0LDQstC70LXQvSBkYXRhU3RvcmVBcnJheSDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtbGcgdGV4dC1zZW1pYm9sZCc+0JfQsNC00LDRh9C4PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byB0ZXh0LWNlbnRlcic+XG5cdFx0XHRcdDxDcmVhdGVUb2RvIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHtkYXRhICYmXG5cdFx0XHRcdGRhdGEubWFwKFxuXHRcdFx0XHRcdGl0ZW0gPT5cblx0XHRcdFx0XHRcdGl0ZW0uaWQgIT09IHVuZGVmaW5lZCAmJiAoXG5cdFx0XHRcdFx0XHRcdDxUYXNrSXRlbVxuXHRcdFx0XHRcdFx0XHRcdGtleT17aXRlbS5pZH1cblx0XHRcdFx0XHRcdFx0XHR0aXRsZT17aXRlbS50aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRzdGF0dXM9e2l0ZW0uc3RhdHVzfVxuXHRcdFx0XHRcdFx0XHRcdHRleHQ9e2l0ZW0udGV4dH1cblx0XHRcdFx0XHRcdFx0XHRpZD17aXRlbS5pZH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrV2lkZ2V0XG4iXSwibmFtZXMiOlsidXNlQXBwRGlzcGF0Y2giLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ3JlYXRlVG9kbyIsIlRhc2tJdGVtIiwiVGFza1dpZGdldCIsImRpc3BhdGNoIiwiZGF0YSIsInNldERhdGEiLCJnZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaWQiLCJ1bmRlZmluZWQiLCJ0aXRsZSIsInN0YXR1cyIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widgets/task/TaskWidget.tsx\n"));

/***/ })

});