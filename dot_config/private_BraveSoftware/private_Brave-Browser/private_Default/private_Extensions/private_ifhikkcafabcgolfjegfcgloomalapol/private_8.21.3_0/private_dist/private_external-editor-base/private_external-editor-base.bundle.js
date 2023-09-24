/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/appUtils/myWin.js":
/*!***********************************!*\
  !*** ./scripts/appUtils/myWin.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myWin": () => (/* binding */ myWin)
/* harmony export */ });
let myWin;
if (typeof window !== 'undefined') {
  myWin = window;
} else {
  myWin = {};
}


/*
const myWin = {};

export { myWin };
*/

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./external-editor-base.js ***!
  \*********************************/
/* harmony import */ var _scripts_appUtils_myWin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/appUtils/myWin.js */ "./scripts/appUtils/myWin.js");

(function () {
  try {
    const urlParams = new URLSearchParams(window.location.search),
      tabTitle = urlParams.get('tabTitle');
    if (tabTitle) {
      document.title = 'Magic CSS: ' + tabTitle;
    } else {
      document.title = 'Magic CSS';
    }
  } catch (e) {
    // do nothing
  }
  _scripts_appUtils_myWin_js__WEBPACK_IMPORTED_MODULE_0__.myWin.flagEditorInExternalWindow = true;
  _scripts_appUtils_myWin_js__WEBPACK_IMPORTED_MODULE_0__.myWin.treatAsNormalWebpage = true;
})();
})();

/******/ })()
;