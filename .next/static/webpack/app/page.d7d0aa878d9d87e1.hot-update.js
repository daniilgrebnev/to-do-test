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

/***/ "(app-pages-browser)/./src/store/action.ts":
/*!*****************************!*\
  !*** ./src/store/action.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchTodosAsync: function() { return /* binding */ fetchTodosAsync; }\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.ts\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\n\nconst fetchTodosAsync = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"todos/fetchTodos\", async ()=>{\n    const dataFromApi = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getAllTodos)();\n    console.debug(dataFromApi);\n    return dataFromApi.map((todoData)=>({\n            id: todoData.id,\n            title: todoData.title,\n            text: todoData.text,\n            status: todoData.status\n        }));\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9hY3Rpb24udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRUs7QUFNNUMsTUFBTUUsa0JBQWtCRCxrRUFBZ0JBLENBQzlDLG9CQUNBO0lBQ0MsTUFBTUUsY0FBaUMsTUFBTUgsaURBQVdBO0lBQ3hESSxRQUFRQyxLQUFLLENBQUNGO0lBRWQsT0FBT0EsWUFBWUcsR0FBRyxDQUFDQyxDQUFBQSxXQUFhO1lBQ25DQyxJQUFJRCxTQUFTQyxFQUFFO1lBQ2ZDLE9BQU9GLFNBQVNFLEtBQUs7WUFDckJDLE1BQU1ILFNBQVNHLElBQUk7WUFDbkJDLFFBQVFKLFNBQVNJLE1BQU07UUFDeEI7QUFDRCxHQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9hY3Rpb24udHM/MTk2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVG9kb0RhdGEsIGdldEFsbFRvZG9zIH0gZnJvbSAnQC9hcGknXG5cbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuXG5pbnRlcmZhY2UgSVRvZG9DcmVhdGVEYXRhIGV4dGVuZHMgSVRvZG9EYXRhIHtcblx0aWQ/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoVG9kb3NBc3luYyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG5cdCd0b2Rvcy9mZXRjaFRvZG9zJyxcblx0YXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IGRhdGFGcm9tQXBpOiBJVG9kb0NyZWF0ZURhdGFbXSA9IGF3YWl0IGdldEFsbFRvZG9zKClcblx0XHRjb25zb2xlLmRlYnVnKGRhdGFGcm9tQXBpKVxuXG5cdFx0cmV0dXJuIGRhdGFGcm9tQXBpLm1hcCh0b2RvRGF0YSA9PiAoe1xuXHRcdFx0aWQ6IHRvZG9EYXRhLmlkLFxuXHRcdFx0dGl0bGU6IHRvZG9EYXRhLnRpdGxlLFxuXHRcdFx0dGV4dDogdG9kb0RhdGEudGV4dCxcblx0XHRcdHN0YXR1czogdG9kb0RhdGEuc3RhdHVzLFxuXHRcdH0pKVxuXHR9XG4pXG4iXSwibmFtZXMiOlsiZ2V0QWxsVG9kb3MiLCJjcmVhdGVBc3luY1RodW5rIiwiZmV0Y2hUb2Rvc0FzeW5jIiwiZGF0YUZyb21BcGkiLCJjb25zb2xlIiwiZGVidWciLCJtYXAiLCJ0b2RvRGF0YSIsImlkIiwidGl0bGUiLCJ0ZXh0Iiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/action.ts\n"));

/***/ })

});