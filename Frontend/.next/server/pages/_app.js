/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/TaskContext.jsx":
/*!**********************************!*\
  !*** ./contexts/TaskContext.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskProvider\": () => (/* binding */ TaskProvider),\n/* harmony export */   \"useTask\": () => (/* binding */ useTask)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst TaskContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    openedEditTask: 1,\n    openedCreateTask: 1,\n    setOpenedEditTask: 1,\n    setOpenedCreateTask: 1\n});\nfunction TaskProvider({ children  }) {\n    const [openedCreateTask, setOpenedCreateTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openedEditTask, setOpenedEditTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TaskContext.Provider, {\n        value: {\n            openedEditTask,\n            openedCreateTask,\n            setOpenedEditTask,\n            setOpenedCreateTask\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\Taskpoint\\\\Frontend\\\\contexts\\\\TaskContext.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\nfunction useTask() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TaskContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9UYXNrQ29udGV4dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBNEQ7QUFFNUQsTUFBTUcsNEJBQWNILG9EQUFhQSxDQUFDO0lBQ2hDSSxnQkFBZ0I7SUFDaEJDLGtCQUFrQjtJQUNsQkMsbUJBQW1CO0lBQ25CQyxxQkFBcUI7QUFDdkI7QUFFTyxTQUFTQyxhQUFhLEVBQUNDLFNBQVEsRUFBQyxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0osa0JBQWtCRSxvQkFBb0IsR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUM5RCxNQUFNLENBQUNFLGdCQUFnQkUsa0JBQWtCLEdBQUdKLCtDQUFRQSxDQUFDLEtBQUs7SUFFMUQscUJBQ0UsOERBQUNDLFlBQVlPLFFBQVE7UUFDbkJDLE9BQU87WUFDTFA7WUFDQUM7WUFDQUM7WUFDQUM7UUFDRjtrQkFDQ0U7Ozs7OztBQUdQLENBQUM7QUFFTSxTQUFTRyxVQUFVO0lBQ3hCLE9BQU9YLGlEQUFVQSxDQUFDRTtBQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29udGV4dHMvVGFza0NvbnRleHQuanN4P2M4ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRhc2tDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgb3BlbmVkRWRpdFRhc2s6IDEsXHJcbiAgb3BlbmVkQ3JlYXRlVGFzazogMSxcclxuICBzZXRPcGVuZWRFZGl0VGFzazogMSxcclxuICBzZXRPcGVuZWRDcmVhdGVUYXNrOiAxXHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRhc2tQcm92aWRlcih7Y2hpbGRyZW59KSB7XHJcbiAgY29uc3QgW29wZW5lZENyZWF0ZVRhc2ssIHNldE9wZW5lZENyZWF0ZVRhc2tdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuZWRFZGl0VGFzaywgc2V0T3BlbmVkRWRpdFRhc2tdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRhc2tDb250ZXh0LlByb3ZpZGVyIFxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIG9wZW5lZEVkaXRUYXNrLFxyXG4gICAgICAgIG9wZW5lZENyZWF0ZVRhc2ssXHJcbiAgICAgICAgc2V0T3BlbmVkRWRpdFRhc2ssXHJcbiAgICAgICAgc2V0T3BlbmVkQ3JlYXRlVGFza1xyXG4gICAgICB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9UYXNrQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUYXNrKCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KFRhc2tDb250ZXh0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlRhc2tDb250ZXh0Iiwib3BlbmVkRWRpdFRhc2siLCJvcGVuZWRDcmVhdGVUYXNrIiwic2V0T3BlbmVkRWRpdFRhc2siLCJzZXRPcGVuZWRDcmVhdGVUYXNrIiwiVGFza1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJQcm92aWRlciIsInZhbHVlIiwidXNlVGFzayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/TaskContext.jsx\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_variables_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/variables.scss */ \"./styles/variables.scss\");\n/* harmony import */ var _styles_variables_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_variables_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fontsource_poppins_200_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fontsource/poppins/200.css */ \"./node_modules/@fontsource/poppins/200.css\");\n/* harmony import */ var _fontsource_poppins_200_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fontsource_poppins_200_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fontsource_poppins_300_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fontsource/poppins/300.css */ \"./node_modules/@fontsource/poppins/300.css\");\n/* harmony import */ var _fontsource_poppins_300_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fontsource_poppins_300_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fontsource_poppins_400_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fontsource/poppins/400.css */ \"./node_modules/@fontsource/poppins/400.css\");\n/* harmony import */ var _fontsource_poppins_400_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fontsource_poppins_400_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fontsource_poppins_500_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fontsource/poppins/500.css */ \"./node_modules/@fontsource/poppins/500.css\");\n/* harmony import */ var _fontsource_poppins_500_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fontsource_poppins_500_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fontsource_poppins_600_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fontsource/poppins/600.css */ \"./node_modules/@fontsource/poppins/600.css\");\n/* harmony import */ var _fontsource_poppins_600_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fontsource_poppins_600_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _fontsource_poppins_700_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fontsource/poppins/700.css */ \"./node_modules/@fontsource/poppins/700.css\");\n/* harmony import */ var _fontsource_poppins_700_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fontsource_poppins_700_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _fontsource_poppins_800_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fontsource/poppins/800.css */ \"./node_modules/@fontsource/poppins/800.css\");\n/* harmony import */ var _fontsource_poppins_800_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fontsource_poppins_800_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _fontsource_poppins_900_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fontsource/poppins/900.css */ \"./node_modules/@fontsource/poppins/900.css\");\n/* harmony import */ var _fontsource_poppins_900_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fontsource_poppins_900_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ \"./node_modules/react-loading-skeleton/dist/skeleton.css\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-loading-skeleton */ \"react-loading-skeleton\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _contexts_TaskContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../contexts/TaskContext */ \"./contexts/TaskContext.jsx\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_14__.QueryClient({\n    defaultOptions: {\n        queries: {\n            staleTime: Infinity\n        }\n    }\n});\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_13__.SkeletonTheme, {\n        baseColor: \"#e5e5ee\",\n        highlightColor: \"#fff\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_TaskContext__WEBPACK_IMPORTED_MODULE_15__.TaskProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_14__.QueryClientProvider, {\n                client: queryClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\Taskpoint\\\\Frontend\\\\pages\\\\_app.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\Taskpoint\\\\Frontend\\\\pages\\\\_app.jsx\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\Taskpoint\\\\Frontend\\\\pages\\\\_app.jsx\",\n            lineNumber: 29,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cristian\\\\Desktop\\\\Code\\\\Web\\\\Projects\\\\Taskpoint\\\\Frontend\\\\pages\\\\_app.jsx\",\n        lineNumber: 28,\n        columnNumber: 7\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWdDO0FBQ0U7QUFDRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFFeEI7QUFDNkI7QUFDUTtBQUNSO0FBRXZELE1BQU1LLGNBQWMsSUFBSUgscURBQVdBLENBQUM7SUFDbENJLGdCQUFnQjtRQUNkQyxTQUFTO1lBQ1BDLFdBQVdDO1FBQ2I7SUFDRjtBQUNGO0FBRWUsU0FBU0MsSUFBSSxFQUFDQyxVQUFTLEVBQUVDLFVBQVMsRUFBQyxFQUFFO0lBQ2xELHFCQUNJLDhEQUFDWCxrRUFBYUE7UUFBQ1ksV0FBVTtRQUFVQyxnQkFBZTtrQkFDaEQsNEVBQUNWLGdFQUFZQTtzQkFDWCw0RUFBQ0QsNkRBQW1CQTtnQkFBQ1ksUUFBUVY7MEJBQzNCLDRFQUFDTTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAuanN4PzRjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5zY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xyXG5pbXBvcnQgJ0Bmb250c291cmNlL3BvcHBpbnMvMjAwLmNzcyc7XHJcbmltcG9ydCAnQGZvbnRzb3VyY2UvcG9wcGlucy8zMDAuY3NzJztcclxuaW1wb3J0ICdAZm9udHNvdXJjZS9wb3BwaW5zLzQwMC5jc3MnO1xyXG5pbXBvcnQgJ0Bmb250c291cmNlL3BvcHBpbnMvNTAwLmNzcyc7XHJcbmltcG9ydCAnQGZvbnRzb3VyY2UvcG9wcGlucy82MDAuY3NzJztcclxuaW1wb3J0ICdAZm9udHNvdXJjZS9wb3BwaW5zLzcwMC5jc3MnO1xyXG5pbXBvcnQgJ0Bmb250c291cmNlL3BvcHBpbnMvODAwLmNzcyc7XHJcbmltcG9ydCAnQGZvbnRzb3VyY2UvcG9wcGlucy85MDAuY3NzJztcclxuaW1wb3J0ICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uL2Rpc3Qvc2tlbGV0b24uY3NzJztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2tlbGV0b25UaGVtZSB9IGZyb20gXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCI7XHJcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgeyBUYXNrUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9UYXNrQ29udGV4dCc7XHJcblxyXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCh7XHJcbiAgZGVmYXVsdE9wdGlvbnM6IHtcclxuICAgIHF1ZXJpZXM6IHtcclxuICAgICAgc3RhbGVUaW1lOiBJbmZpbml0eVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoe0NvbXBvbmVudCwgcGFnZVByb3BzfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxTa2VsZXRvblRoZW1lIGJhc2VDb2xvcj1cIiNlNWU1ZWVcIiBoaWdobGlnaHRDb2xvcj1cIiNmZmZcIj5cclxuICAgICAgICA8VGFza1Byb3ZpZGVyPlxyXG4gICAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxyXG4gICAgICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxyXG4gICAgICAgIDwvVGFza1Byb3ZpZGVyPlxyXG4gICAgICA8L1NrZWxldG9uVGhlbWU+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNrZWxldG9uVGhlbWUiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJUYXNrUHJvdmlkZXIiLCJxdWVyeUNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInN0YWxlVGltZSIsIkluZmluaXR5IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYmFzZUNvbG9yIiwiaGlnaGxpZ2h0Q29sb3IiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./node_modules/@fontsource/poppins/200.css":
/*!**************************************************!*\
  !*** ./node_modules/@fontsource/poppins/200.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/poppins/300.css":
/*!**************************************************!*\
  !*** ./node_modules/@fontsource/poppins/300.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/poppins/400.css":
/*!**************************************************!*\
  !*** ./node_modules/@fontsource/poppins/400.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/poppins/500.css":
/*!**************************************************!*\
  !*** ./node_modules/@fontsource/poppins/500.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/poppins/600.css":
/*!**************************************************!*\
  !*** ./node_modules/@fontsource/poppins/600.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/poppins/700.css":
/*!**************************************************!*\
  !*** ./node_modules/@fontsource/poppins/700.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/poppins/800.css":
/*!**************************************************!*\
  !*** ./node_modules/@fontsource/poppins/800.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/poppins/900.css":
/*!**************************************************!*\
  !*** ./node_modules/@fontsource/poppins/900.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-loading-skeleton/dist/skeleton.css":
/*!***************************************************************!*\
  !*** ./node_modules/react-loading-skeleton/dist/skeleton.css ***!
  \***************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/variables.scss":
/*!*******************************!*\
  !*** ./styles/variables.scss ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-loading-skeleton":
/*!*****************************************!*\
  !*** external "react-loading-skeleton" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-loading-skeleton");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();