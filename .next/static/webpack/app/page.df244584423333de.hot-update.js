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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _store_zustand_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/zustand.store */ \"(app-pages-browser)/./src/store/zustand.store.ts\");\n\nvar _s = $RefreshSig$();\n\nconst TaskFullWidget = ()=>{\n    _s();\n    const { closeDemoView, activeArray } = (0,_store_zustand_store__WEBPACK_IMPORTED_MODULE_1__.useTaskView)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden relative w-full h-full p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: closeDemoView,\n                className: \"absolute left-2 top-2 cursor-pointer\",\n                children: \"Закрыть\"\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                lineNumber: 7,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-10\",\n                children: activeArray === null || activeArray === void 0 ? void 0 : activeArray.title\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskFullWidget.tsx\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TaskFullWidget, \"A+P7ss/FXgZKqTn75qHxyWOEo2Y=\", false, function() {\n    return [\n        _store_zustand_store__WEBPACK_IMPORTED_MODULE_1__.useTaskView\n    ];\n});\n_c = TaskFullWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskFullWidget);\nvar _c;\n$RefreshReg$(_c, \"TaskFullWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza0Z1bGxXaWRnZXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1EO0FBRW5ELE1BQU1DLGlCQUFpQjs7SUFDdEIsTUFBTSxFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRSxHQUFHSCxpRUFBV0E7SUFDbEQscUJBQ0MsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNkLDhEQUFDRDtnQkFDQUUsU0FBU0o7Z0JBQ1RHLFdBQVU7MEJBQ1Y7Ozs7OzswQkFHRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQVNGLHdCQUFBQSxrQ0FBQUEsWUFBYUksS0FBSzs7Ozs7Ozs7Ozs7O0FBRzdDO0dBYk1OOztRQUNrQ0QsNkRBQVdBOzs7S0FEN0NDO0FBZU4sK0RBQWVBLGNBQWNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3dpZGdldHMvdGFzay9UYXNrRnVsbFdpZGdldC50c3g/NjFkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VUYXNrVmlldyB9IGZyb20gJ0Avc3RvcmUvenVzdGFuZC5zdG9yZSdcblxuY29uc3QgVGFza0Z1bGxXaWRnZXQgPSAoKSA9PiB7XG5cdGNvbnN0IHsgY2xvc2VEZW1vVmlldywgYWN0aXZlQXJyYXkgfSA9IHVzZVRhc2tWaWV3KClcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlIHctZnVsbCBoLWZ1bGwgcC0xMCc+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdG9uQ2xpY2s9e2Nsb3NlRGVtb1ZpZXd9XG5cdFx0XHRcdGNsYXNzTmFtZT0nYWJzb2x1dGUgbGVmdC0yIHRvcC0yIGN1cnNvci1wb2ludGVyJ1xuXHRcdFx0PlxuXHRcdFx0XHTQl9Cw0LrRgNGL0YLRjFxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHQtMTAnPnthY3RpdmVBcnJheT8udGl0bGV9PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza0Z1bGxXaWRnZXRcbiJdLCJuYW1lcyI6WyJ1c2VUYXNrVmlldyIsIlRhc2tGdWxsV2lkZ2V0IiwiY2xvc2VEZW1vVmlldyIsImFjdGl2ZUFycmF5IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widgets/task/TaskFullWidget.tsx\n"));

/***/ })

});