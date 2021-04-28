webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider, lightTheme, darkTheme, GlobalStyles, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContext\", function() { return PlayerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContextProvider\", function() { return PlayerContextProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lightTheme\", function() { return lightTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darkTheme\", function() { return darkTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyles\", function() { return GlobalStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePlayer\", function() { return usePlayer; });\n/* harmony import */ var _home_giovane_Documentos_nlw5_www_podcastrnext_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _jsxFileName = \"/home/giovane/Documentos/nlw5/www/podcastrnext/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_home_giovane_Documentos_nlw5_www_podcastrnext_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  body{\\n      background-color: \", \"\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])({});\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isLooping = _useState4[0],\n      setIsLooping = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isShuffling = _useState5[0],\n      setIsShuffling = _useState5[1]; //Darkmode\n\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('light'),\n      theme = _useState6[0],\n      setTheme = _useState6[1];\n  /*------------------------------------------------Play the episode ----------------------------------*/\n\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  function togglePlay() {\n    setIsPlaying(!isPlaying);\n  }\n\n  function setIsPlayingState(state) {\n    setIsPlaying(state);\n  }\n  /*--------------------X----------------------------Play the episode ----------------X------------------*/\n\n  /*------------------------------------------------Next and ant episode ----------------------------------*/\n\n\n  var hasPrevious = currentEpisodeIndex > 0;\n  var hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;\n\n  function playNext() {\n    if (isShuffling) {\n      var nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);\n      setCurrentEpisodeIndex(nextRandomEpisodeIndex);\n    } else if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  function playPrevious() {\n    {\n      hasPrevious && setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n  /*---------------------X---------------------------Next and ant episode ---------------X-------------------*/\n\n  /*------------------------------------------------Loop the episode ----------------------------------*/\n\n\n  function toggleLoop() {\n    setIsLooping(!isLooping);\n  }\n  /*-------------------------X-----------------------Loop the episode -----------------X-----------------*/\n\n  /*------------------------------------------------Shoffle the episodes ----------------------------------*/\n\n\n  function toggleShuffle() {\n    setIsShuffling(!isShuffling);\n  }\n\n  function clearPlayerState() {\n    setEpisodeList([]);\n    setCurrentEpisodeIndex(0);\n  }\n  /*-------------------------X-----------------------Shoffle the episodes -----------------X-----------------*/\n\n  /*-----------------------------------------Darkmode -----------------------------------------------------------*/\n\n\n  var toggleTheme = function toggleTheme() {\n    theme === 'light' ? setTheme('dark') : setTheme('light');\n  }; // toggleTheme \n\n  /*-------------------X---------------------Darkmode -----------------------------X------------------------------*/\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      isPlaying: isPlaying,\n      togglePlay: togglePlay,\n      setIsPlayingState: setIsPlayingState,\n      playNext: playNext,\n      playPrevious: playPrevious,\n      playList: playList,\n      hasPrevious: hasPrevious,\n      hasNext: hasNext,\n      toggleLoop: toggleLoop,\n      isLooping: isLooping,\n      isShuffling: isShuffling,\n      toggleShuffle: toggleShuffle,\n      clearPlayerState: clearPlayerState,\n      toggleTheme: toggleTheme,\n      theme: theme\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 131,\n    columnNumber: 7\n  }, this);\n}\n\n_s(PlayerContextProvider, \"mzoqD66JNASMEJmII9l/5HXEjXw=\");\n\n_c = PlayerContextProvider;\nvar lightTheme = {\n  body: \"#F7F8FA\",\n  color: \"#808080\"\n};\nvar darkTheme = {\n  body: \"#15202b\",\n  color: \"#FFF\"\n};\nvar GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"createGlobalStyle\"])(_templateObject(), body);\nvar usePlayer = function usePlayer() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(PlayerContext);\n};\n\n_s2(usePlayer, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiaXNMb29waW5nIiwic2V0SXNMb29waW5nIiwiaXNTaHVmZmxpbmciLCJzZXRJc1NodWZmbGluZyIsInRoZW1lIiwic2V0VGhlbWUiLCJwbGF5IiwiZXBpc29kZSIsInBsYXlMaXN0IiwibGlzdCIsImluZGV4IiwidG9nZ2xlUGxheSIsInNldElzUGxheWluZ1N0YXRlIiwic3RhdGUiLCJoYXNQcmV2aW91cyIsImhhc05leHQiLCJsZW5ndGgiLCJwbGF5TmV4dCIsIm5leHRSYW5kb21FcGlzb2RlSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwbGF5UHJldmlvdXMiLCJ0b2dnbGVMb29wIiwidG9nZ2xlU2h1ZmZsZSIsImNsZWFyUGxheWVyU3RhdGUiLCJ0b2dnbGVUaGVtZSIsImxpZ2h0VGhlbWUiLCJib2R5IiwiY29sb3IiLCJkYXJrVGhlbWUiLCJHbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInVzZVBsYXllciIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFrQ08sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQW5DO0FBU0EsU0FBU0MscUJBQVQsT0FBc0U7QUFBQTs7QUFBQSxNQUF0Q0MsUUFBc0MsUUFBdENBLFFBQXNDOztBQUFBLGtCQUNuQ0Msc0RBQVEsQ0FBQyxFQUFELENBRDJCO0FB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REE7QUFFQVUsVUFBSSxFQUFKQSxJQUZBO0FBR0FSLGVBQVMsRUFBVEEsU0FIQTtBQUlBYSxnQkFBVSxFQUFWQSxVQUpBO0FBS0FDLHVCQUFpQixFQUFqQkEsaUJBTEE7QUFNQUssY0FBUSxFQUFSQSxRQU5BO0FBT0FLLGtCQUFZLEVBQVpBLFlBUEE7QUFRQWQsY0FBUSxFQUFSQSxRQVJBO0FBU0FNLGlCQUFXLEVBQVhBLFdBVEE7QUFVQUMsYUFBTyxFQUFQQSxPQVZBO0FBV0FRLGdCQUFVLEVBQVZBLFVBWEE7QUFZQXZCLGVBQVMsRUFBVEEsU0FaQTtBQWFBRSxpQkFBVyxFQUFYQSxXQWJBO0FBY0FzQixtQkFBYSxFQUFiQSxhQWRBO0FBZUFDLHNCQUFnQixFQUFoQkEsZ0JBZkE7QUFpQkFDLGlCQUFXLEVBQVhBLFdBakJBO0FBa0JBdEIsV0FBSyxFQUFMQTtBQWxCQSxLQUROO0FBQUEsY0FzQktaO0FBdEJMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRCSDs7R0FqSGVELHFCOztLQUFBQSxxQjtBQXNIVCxJQUFNb0MsVUFBVSxHQUFHO0FBQ3hCQyxNQUFJLEVBQUUsU0FEa0I7QUFFeEJDLE9BQUssRUFBRTtBQUZpQixDQUFuQjtBQUtBLElBQU1DLFNBQVMsR0FBRztBQUN2QkYsTUFBSSxFQUFFLFNBRGlCO0FBRXZCQyxPQUFLLEVBQUU7QUFGZ0IsQ0FBbEI7QUFLQSxJQUFNRSxZQUFZLEdBQUdDLDJFQUFILG9CQUVDSixJQUZELENBQWxCO0FBTUEsSUFBTUssU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUM3QixTQUFPQyx3REFBVSxDQUFDN0MsYUFBRCxDQUFqQjtBQUNELENBRk07O0lBQU00QyxTIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBFcGlzb2RlID0ge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbWVtYmVyczogc3RyaW5nO1xuICAgIHRodW1ibmFpbDogc3RyaW5nO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgdXJsOiBzdHJpbmc7XG59XG5cbnR5cGUgUGxheWVyQ29udGV4dERhdGEgPSB7XG4gICAgZXBpc29kZUxpc3Q6IEVwaXNvZGVbXTtcbiAgICBjdXJyZW50RXBpc29kZUluZGV4OiBudW1iZXI7XG4gICAgaXNQbGF5aW5nOiBib29sZWFuO1xuICAgIHBsYXk6KGVwaXNvZGU6RXBpc29kZSkgPT4gdm9pZDtcbiAgICB0b2dnbGVQbGF5OigpID0+IHZvaWQ7XG4gICAgc2V0SXNQbGF5aW5nU3RhdGU6KHN0YXRlKSA9PiB2b2lkO1xuICAgIHBsYXlMaXN0OihsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpID0+dm9pZDtcbiAgICBwbGF5TmV4dDooKT0+IHZvaWQ7XG4gICAgcGxheVByZXZpb3VzOigpID0+IHZvaWQ7XG4gICAgdG9nZ2xlTG9vcDooKSA9PiB2b2lkO1xuICAgIHRvZ2dsZVNodWZmbGU6KCkgPT4gdm9pZDtcbiAgICBjbGVhclBsYXllclN0YXRlOigpID0+IHZvaWQ7ICAgXG4gICAgaXNMb29waW5nOiBib29sZWFuO1xuICAgIGlzU2h1ZmZsaW5nOiBib29sZWFuO1xuICAgIGhhc1ByZXZpb3VzOiBib29sZWFuO1xuICAgIGhhc05leHQ6IGJvb2xlYW47XG5cblxuICAgIHRvZ2dsZVRoZW1lOigpID0+IHZvaWQ7XG4gICAgdGhlbWU6IHN0cmluZztcblxufVxuXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgUGxheWVyQ29udGV4dERhdGEpO1xuXG5cblxudHlwZSBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyA9IHsgXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllckNvbnRleHRQcm92aWRlcih7Y2hpbGRyZW59OiBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyl7XG4gICAgY29uc3QgW2VwaXNvZGVMaXN0LCBzZXRFcGlzb2RlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNMb29waW5nLCBzZXRJc0xvb3BpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc1NodWZmbGluZywgc2V0SXNTaHVmZmxpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy9EYXJrbW9kZVxuXG4gICAgY29uc3QgW3RoZW1lLHNldFRoZW1lXSA9IHVzZVN0YXRlKCdsaWdodCcpO1xuXG5cblxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1QbGF5IHRoZSBlcGlzb2RlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgICBmdW5jdGlvbiBwbGF5KGVwaXNvZGUpe1xuICAgICAgc2V0RXBpc29kZUxpc3QoW2VwaXNvZGVdKVxuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKVxuICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYXlMaXN0KGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcil7XG4gICAgICBzZXRFcGlzb2RlTGlzdChsaXN0KVxuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChpbmRleClcbiAgICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKXtcbiAgICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTsgXG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldElzUGxheWluZ1N0YXRlKHN0YXRlOiBib29sZWFuKXtcbiAgICAgIHNldElzUGxheWluZyhzdGF0ZSlcbiAgICB9XG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLVgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tUGxheSB0aGUgZXBpc29kZSAtLS0tLS0tLS0tLS0tLS0tWC0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OZXh0IGFuZCBhbnQgZXBpc29kZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBjb25zdCBoYXNQcmV2aW91cyA9IGN1cnJlbnRFcGlzb2RlSW5kZXggPiAwO1xuICAgIGNvbnN0IGhhc05leHQgPSBpc1NodWZmbGluZyB8fCAoY3VycmVudEVwaXNvZGVJbmRleCArMSApIDwgZXBpc29kZUxpc3QubGVuZ3RoXG5cbiAgICBmdW5jdGlvbiBwbGF5TmV4dCgpe1xuICAgICAgaWYoaXNTaHVmZmxpbmcpe1xuICAgICAgICBjb25zdCBuZXh0UmFuZG9tRXBpc29kZUluZGV4ID0gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIGVwaXNvZGVMaXN0Lmxlbmd0aCApO1xuXG4gICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgobmV4dFJhbmRvbUVwaXNvZGVJbmRleClcblxuICAgICAgfWVsc2UgaWYoaGFzTmV4dCl7XG4gICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCArIDEpXG4gICAgICB9XG5cblxuICAgIH1cbiAgICBmdW5jdGlvbiBwbGF5UHJldmlvdXMoKXtcbiAgICAgIHsgaGFzUHJldmlvdXMgICYmIChcbiAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4ICsgMSlcbiAgICAgICl9XG5cbiAgICB9XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OZXh0IGFuZCBhbnQgZXBpc29kZSAtLS0tLS0tLS0tLS0tLS1YLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Mb29wIHRoZSBlcGlzb2RlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgZnVuY3Rpb24gdG9nZ2xlTG9vcCgpe1xuICAgICAgICBzZXRJc0xvb3BpbmcoIWlzTG9vcGluZyk7IFxuICAgICAgfVxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxvb3AgdGhlIGVwaXNvZGUgLS0tLS0tLS0tLS0tLS0tLS1YLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNob2ZmbGUgdGhlIGVwaXNvZGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICBmdW5jdGlvbiB0b2dnbGVTaHVmZmxlKCl7XG4gICAgICBzZXRJc1NodWZmbGluZyghaXNTaHVmZmxpbmcpOyBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhclBsYXllclN0YXRlKCl7XG4gICAgICBzZXRFcGlzb2RlTGlzdChbXSk7XG4gICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xuXG4gICAgfVxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNob2ZmbGUgdGhlIGVwaXNvZGVzIC0tLS0tLS0tLS0tLS0tLS0tWC0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLURhcmttb2RlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+e1xuICAgICB0aGVtZSA9PT0gJ2xpZ2h0JyA/IHNldFRoZW1lKCdkYXJrJykgOiBzZXRUaGVtZSgnbGlnaHQnKVxuICB9XG4gICAgXG4gLy8gdG9nZ2xlVGhlbWUgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLVgtLS0tLS0tLS0tLS0tLS0tLS0tLS1EYXJrbW9kZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVgtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1xuICAgICAgICAgICAge2VwaXNvZGVMaXN0LFxuICAgICAgICAgICAgY3VycmVudEVwaXNvZGVJbmRleCxcbiAgICAgICAgICAgIHBsYXksXG4gICAgICAgICAgICBpc1BsYXlpbmcsXG4gICAgICAgICAgICB0b2dnbGVQbGF5LFxuICAgICAgICAgICAgc2V0SXNQbGF5aW5nU3RhdGUsXG4gICAgICAgICAgICBwbGF5TmV4dCxcbiAgICAgICAgICAgIHBsYXlQcmV2aW91cyxcbiAgICAgICAgICAgIHBsYXlMaXN0LCBcbiAgICAgICAgICAgIGhhc1ByZXZpb3VzLFxuICAgICAgICAgICAgaGFzTmV4dCxcbiAgICAgICAgICAgIHRvZ2dsZUxvb3AsXG4gICAgICAgICAgICBpc0xvb3BpbmcsXG4gICAgICAgICAgICBpc1NodWZmbGluZyxcbiAgICAgICAgICAgIHRvZ2dsZVNodWZmbGUsXG4gICAgICAgICAgICBjbGVhclBsYXllclN0YXRlLFxuXG4gICAgICAgICAgICB0b2dnbGVUaGVtZSxcbiAgICAgICAgICAgIHRoZW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9QbGF5ZXJDb250ZXh0LlByb3ZpZGVyPlxuXG4gICAgKVxuICBcbn1cblxuXG5cblxuZXhwb3J0IGNvbnN0IGxpZ2h0VGhlbWUgPSB7XG4gIGJvZHk6IFwiI0Y3RjhGQVwiLFxuICBjb2xvcjogXCIjODA4MDgwXCJcbn1cblxuZXhwb3J0IGNvbnN0IGRhcmtUaGVtZSA9IHtcbiAgYm9keTogXCIjMTUyMDJiXCIsXG4gIGNvbG9yOiBcIiNGRkZcIixcbn1cblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlIGBcbiAgYm9keXtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Ym9keX1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgdXNlUGxheWVyID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ })

})