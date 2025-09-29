"use strict";
(self["webpackChunkwebpack_ver5"] = self["webpackChunkwebpack_ver5"] || []).push([["common"],{

/***/ "./src/js/sub.js":
/*!***********************!*\
  !*** ./src/js/sub.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils/index.js");

console.log('Hello, sub.js');
const subinit = () => {
  _utils__WEBPACK_IMPORTED_MODULE_0__["default"].log('hello sub.js(utils/index.js)');
};
subinit();

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  log: function (str) {
    console.log(str);
  }
});

/***/ })

}]);
//# sourceMappingURL=common.js.map