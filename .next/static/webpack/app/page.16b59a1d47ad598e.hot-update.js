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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/action */ \"(app-pages-browser)/./src/store/action.ts\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/hooks */ \"(app-pages-browser)/./src/store/hooks.ts\");\n/* harmony import */ var _CreateTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateTask */ \"(app-pages-browser)/./src/widgets/task/CreateTask.tsx\");\n/* harmony import */ var _TaskItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskItem */ \"(app-pages-browser)/./src/widgets/task/TaskItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TaskWidget = ()=>{\n    _s();\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    let arr = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.todo.dataStoreArray);\n    const dataStoreArray = arr;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_2__.fetchTodosAsync)());\n    }, [\n        dispatch\n    ]);\n    console.debug(dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_2__.fetchTodosAsync)()));\n    console.debug(dataStoreArray);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center text-lg text-semibold\",\n                children: \"Задачи\"\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateTask__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, undefined),\n            dataStoreArray && dataStoreArray.map((item)=>item.id !== undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TaskItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    title: item.title,\n                    status: item.status,\n                    text: item.text,\n                    id: item.id\n                }, item.id, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 8\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n        lineNumber: 30,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TaskWidget, \"pTZ3u0UccRigR9T+NTcPTTTlVGw=\", false, function() {\n    return [\n        _store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = TaskWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskWidget);\nvar _c;\n$RefreshReg$(_c, \"TaskWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza1dpZGdldC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUVlO0FBQ2M7QUFDekI7QUFDSjtBQVNqQyxNQUFNTSxhQUFhOztJQUNsQixNQUFNQyxXQUFXTCw0REFBY0E7SUFFL0IsSUFBSU0sTUFBTUwsNERBQWNBLENBQUNNLENBQUFBLFFBQVNBLE1BQU1DLElBQUksQ0FBQ0MsY0FBYztJQUMzRCxNQUFNQSxpQkFBaUJIO0lBRXZCUixnREFBU0EsQ0FBQztRQUNUTyxTQUFTTiw4REFBZUE7SUFDekIsR0FBRztRQUFDTTtLQUFTO0lBRWJLLFFBQVFDLEtBQUssQ0FBQ04sU0FBU04sOERBQWVBO0lBQ3RDVyxRQUFRQyxLQUFLLENBQUNGO0lBRWQscUJBQ0MsOERBQUNHOzswQkFDQSw4REFBQ0E7Z0JBQUlDLFdBQVU7MEJBQW9DOzs7Ozs7MEJBQ25ELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDZCw0RUFBQ1gsbURBQVVBOzs7Ozs7Ozs7O1lBRVhPLGtCQUNBQSxlQUFlSyxHQUFHLENBQ2pCQyxDQUFBQSxPQUNDQSxLQUFLQyxFQUFFLEtBQUtDLDJCQUNYLDhEQUFDZCxpREFBUUE7b0JBRVJlLE9BQU9ILEtBQUtHLEtBQUs7b0JBQ2pCQyxRQUFRSixLQUFLSSxNQUFNO29CQUNuQkMsTUFBTUwsS0FBS0ssSUFBSTtvQkFDZkosSUFBSUQsS0FBS0MsRUFBRTttQkFKTkQsS0FBS0MsRUFBRTs7Ozs7Ozs7Ozs7QUFVcEI7R0FsQ01aOztRQUNZSix3REFBY0E7UUFFckJDLHdEQUFjQTs7O0tBSG5CRztBQW9DTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvd2lkZ2V0cy90YXNrL1Rhc2tXaWRnZXQudHN4PzQ3NzAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgZmV0Y2hUb2Rvc0FzeW5jIH0gZnJvbSAnQC9zdG9yZS9hY3Rpb24nXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL3N0b3JlL2hvb2tzJ1xuaW1wb3J0IENyZWF0ZVRvZG8gZnJvbSAnLi9DcmVhdGVUYXNrJ1xuaW1wb3J0IFRhc2tJdGVtIGZyb20gJy4vVGFza0l0ZW0nXG5cbmludGVyZmFjZSBJVGFzayB7XG5cdGlkPzogbnVtYmVyXG5cdHRpdGxlOiBzdHJpbmdcblx0dGV4dDogc3RyaW5nXG5cdHN0YXR1czogc3RyaW5nXG59XG5cbmNvbnN0IFRhc2tXaWRnZXQgPSAoKSA9PiB7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxuXG5cdGxldCBhcnIgPSB1c2VBcHBTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS50b2RvLmRhdGFTdG9yZUFycmF5KVxuXHRjb25zdCBkYXRhU3RvcmVBcnJheSA9IGFyclxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZGlzcGF0Y2goZmV0Y2hUb2Rvc0FzeW5jKCkpXG5cdH0sIFtkaXNwYXRjaF0pXG5cblx0Y29uc29sZS5kZWJ1ZyhkaXNwYXRjaChmZXRjaFRvZG9zQXN5bmMoKSkpXG5cdGNvbnNvbGUuZGVidWcoZGF0YVN0b3JlQXJyYXkpXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtbGcgdGV4dC1zZW1pYm9sZCc+0JfQsNC00LDRh9C4PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byB0ZXh0LWNlbnRlcic+XG5cdFx0XHRcdDxDcmVhdGVUb2RvIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHtkYXRhU3RvcmVBcnJheSAmJlxuXHRcdFx0XHRkYXRhU3RvcmVBcnJheS5tYXAoXG5cdFx0XHRcdFx0aXRlbSA9PlxuXHRcdFx0XHRcdFx0aXRlbS5pZCAhPT0gdW5kZWZpbmVkICYmIChcblx0XHRcdFx0XHRcdFx0PFRhc2tJdGVtXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtpdGVtLmlkfVxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtpdGVtLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdHN0YXR1cz17aXRlbS5zdGF0dXN9XG5cdFx0XHRcdFx0XHRcdFx0dGV4dD17aXRlbS50ZXh0fVxuXHRcdFx0XHRcdFx0XHRcdGlkPXtpdGVtLmlkfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tXaWRnZXRcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJmZXRjaFRvZG9zQXN5bmMiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiQ3JlYXRlVG9kbyIsIlRhc2tJdGVtIiwiVGFza1dpZGdldCIsImRpc3BhdGNoIiwiYXJyIiwic3RhdGUiLCJ0b2RvIiwiZGF0YVN0b3JlQXJyYXkiLCJjb25zb2xlIiwiZGVidWciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaWQiLCJ1bmRlZmluZWQiLCJ0aXRsZSIsInN0YXR1cyIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widgets/task/TaskWidget.tsx\n"));

/***/ })

});