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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/action */ \"(app-pages-browser)/./src/store/action.ts\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/hooks */ \"(app-pages-browser)/./src/store/hooks.ts\");\n/* harmony import */ var _store_zustand_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/zustand.store */ \"(app-pages-browser)/./src/store/zustand.store.ts\");\n/* harmony import */ var _CreateTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreateTask */ \"(app-pages-browser)/./src/widgets/task/CreateTask.tsx\");\n/* harmony import */ var _CreateTaskModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CreateTaskModal */ \"(app-pages-browser)/./src/widgets/task/CreateTaskModal.tsx\");\n/* harmony import */ var _TaskItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TaskItem */ \"(app-pages-browser)/./src/widgets/task/TaskItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst TaskWidget = ()=>{\n    _s();\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const { isOpen, openModal } = (0,_store_zustand_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const arr = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.todo.dataStoreArray);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_2__.fetchTodosAsync)());\n    }, [\n        dispatch\n    ]);\n    console.debug(dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_2__.fetchTodosAsync)()));\n    console.debug(arr);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center text-lg text-semibold\",\n                children: \"Задачи\"\n            }, void 0, false, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto text-center\",\n                children: [\n                    isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateTaskModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 16\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateTask__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, undefined),\n            arr && arr.map((item)=>item.id !== undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TaskItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    title: item.title,\n                    status: item.status,\n                    text: item.text,\n                    id: item.id\n                }, item.id, false, {\n                    fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 8\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danilgrebnev/Documents/Projects/fullstack-todo-app/frontend/src/widgets/task/TaskWidget.tsx\",\n        lineNumber: 31,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TaskWidget, \"MehjiyAAKYcqjKsvwpfxjnmYaZ8=\", false, function() {\n    return [\n        _store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _store_zustand_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = TaskWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskWidget);\nvar _c;\n$RefreshReg$(_c, \"TaskWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza1dpZGdldC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBRWU7QUFDYztBQUNiO0FBQ1o7QUFDVTtBQUNkO0FBU2pDLE1BQU1RLGFBQWE7O0lBQ2xCLE1BQU1DLFdBQVdQLDREQUFjQTtJQUMvQixNQUFNLEVBQUVRLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdQLGdFQUFhQTtJQUMzQyxNQUFNUSxNQUFNVCw0REFBY0EsQ0FBQ1UsQ0FBQUEsUUFBU0EsTUFBTUMsSUFBSSxDQUFDQyxjQUFjO0lBRTdEZixnREFBU0EsQ0FBQztRQUNUUyxTQUFTUiw4REFBZUE7SUFDekIsR0FBRztRQUFDUTtLQUFTO0lBRWJPLFFBQVFDLEtBQUssQ0FBQ1IsU0FBU1IsOERBQWVBO0lBQ3RDZSxRQUFRQyxLQUFLLENBQUNMO0lBRWQscUJBQ0MsOERBQUNNOzswQkFDQSw4REFBQ0E7Z0JBQUlDLFdBQVU7MEJBQW9DOzs7Ozs7MEJBQ25ELDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQ2JULHdCQUFVLDhEQUFDSix3REFBZUE7Ozs7O2tDQUMzQiw4REFBQ0QsbURBQVVBOzs7Ozs7Ozs7OztZQUVYTyxPQUNBQSxJQUFJUSxHQUFHLENBQ05DLENBQUFBLE9BQ0NBLEtBQUtDLEVBQUUsS0FBS0MsMkJBQ1gsOERBQUNoQixpREFBUUE7b0JBRVJpQixPQUFPSCxLQUFLRyxLQUFLO29CQUNqQkMsUUFBUUosS0FBS0ksTUFBTTtvQkFDbkJDLE1BQU1MLEtBQUtLLElBQUk7b0JBQ2ZKLElBQUlELEtBQUtDLEVBQUU7bUJBSk5ELEtBQUtDLEVBQUU7Ozs7Ozs7Ozs7O0FBVXBCO0dBbENNZDs7UUFDWU4sd0RBQWNBO1FBQ0RFLDREQUFhQTtRQUMvQkQsd0RBQWNBOzs7S0FIckJLO0FBb0NOLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy93aWRnZXRzL3Rhc2svVGFza1dpZGdldC50c3g/NDc3MCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBmZXRjaFRvZG9zQXN5bmMgfSBmcm9tICdAL3N0b3JlL2FjdGlvbidcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0Avc3RvcmUvaG9va3MnXG5pbXBvcnQgdXNlTW9kYWxTdG9yZSBmcm9tICdAL3N0b3JlL3p1c3RhbmQuc3RvcmUnXG5pbXBvcnQgQ3JlYXRlVG9kbyBmcm9tICcuL0NyZWF0ZVRhc2snXG5pbXBvcnQgQ3JlYXRlVGFza01vZGFsIGZyb20gJy4vQ3JlYXRlVGFza01vZGFsJ1xuaW1wb3J0IFRhc2tJdGVtIGZyb20gJy4vVGFza0l0ZW0nXG5cbmludGVyZmFjZSBJVGFzayB7XG5cdGlkPzogbnVtYmVyXG5cdHRpdGxlOiBzdHJpbmdcblx0dGV4dDogc3RyaW5nXG5cdHN0YXR1czogc3RyaW5nXG59XG5cbmNvbnN0IFRhc2tXaWRnZXQgPSAoKSA9PiB7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxuXHRjb25zdCB7IGlzT3Blbiwgb3Blbk1vZGFsIH0gPSB1c2VNb2RhbFN0b3JlKClcblx0Y29uc3QgYXJyID0gdXNlQXBwU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudG9kby5kYXRhU3RvcmVBcnJheSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGRpc3BhdGNoKGZldGNoVG9kb3NBc3luYygpKVxuXHR9LCBbZGlzcGF0Y2hdKVxuXG5cdGNvbnNvbGUuZGVidWcoZGlzcGF0Y2goZmV0Y2hUb2Rvc0FzeW5jKCkpKVxuXHRjb25zb2xlLmRlYnVnKGFycilcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LXNlbWlib2xkJz7Ql9Cw0LTQsNGH0Lg8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIHRleHQtY2VudGVyJz5cblx0XHRcdFx0e2lzT3BlbiAmJiA8Q3JlYXRlVGFza01vZGFsIC8+fVxuXHRcdFx0XHQ8Q3JlYXRlVG9kbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7YXJyICYmXG5cdFx0XHRcdGFyci5tYXAoXG5cdFx0XHRcdFx0aXRlbSA9PlxuXHRcdFx0XHRcdFx0aXRlbS5pZCAhPT0gdW5kZWZpbmVkICYmIChcblx0XHRcdFx0XHRcdFx0PFRhc2tJdGVtXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtpdGVtLmlkfVxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtpdGVtLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdHN0YXR1cz17aXRlbS5zdGF0dXN9XG5cdFx0XHRcdFx0XHRcdFx0dGV4dD17aXRlbS50ZXh0fVxuXHRcdFx0XHRcdFx0XHRcdGlkPXtpdGVtLmlkfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tXaWRnZXRcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJmZXRjaFRvZG9zQXN5bmMiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwidXNlTW9kYWxTdG9yZSIsIkNyZWF0ZVRvZG8iLCJDcmVhdGVUYXNrTW9kYWwiLCJUYXNrSXRlbSIsIlRhc2tXaWRnZXQiLCJkaXNwYXRjaCIsImlzT3BlbiIsIm9wZW5Nb2RhbCIsImFyciIsInN0YXRlIiwidG9kbyIsImRhdGFTdG9yZUFycmF5IiwiY29uc29sZSIsImRlYnVnIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImlkIiwidW5kZWZpbmVkIiwidGl0bGUiLCJzdGF0dXMiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widgets/task/TaskWidget.tsx\n"));

/***/ })

});