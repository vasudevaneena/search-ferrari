module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Listings.js":
/*!********************************!*\
  !*** ./components/Listings.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_text_truncate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-text-truncate */ "react-text-truncate");
/* harmony import */ var react_text_truncate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_text_truncate__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\ReactStuff\\gtau-fe-test\\gtau-fe-test\\gtau-fe-test\\components\\Listings.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ACTIONS = ["View", "Reply"];

const formatAsCurrency = int => {
  const formatter = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD"
  }).format(int);
  return formatter;
};

const Listing = props => {
  const handleClick = title => {
    console.log(title.currentTarget.textContent + ":" + title.currentTarget.value);
  };

  return __jsx("div", {
    className: "search-grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, props.loader ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "loading...") : props.data && props.data.length ? props.data.map((image, index) => __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "title",
    key: `title${index}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(react_text_truncate__WEBPACK_IMPORTED_MODULE_2___default.a, {
    line: 1,
    truncateText: "\u2026",
    text: image.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, image.price !== "Wanted" ? __jsx("span", {
    className: "price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, formatAsCurrency(image.price)) : __jsx("span", {
    className: "price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, image.price), __jsx("span", {
    className: "location",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, image.location)), image.imgUrl ? __jsx("img", {
    key: `img${index}`,
    src: image.imgUrl,
    alt: `img${index}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }) : "", __jsx("div", {
    className: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(react_text_truncate__WEBPACK_IMPORTED_MODULE_2___default.a, {
    line: 3,
    element: "span",
    truncateText: "\u2026",
    text: image.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  })), __jsx("button", {
    className: "button-style",
    value: image.title,
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, ACTIONS[0]), __jsx("button", {
    className: "button-style",
    value: image.title,
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, ACTIONS[1]))) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "Records not found"));
};

const Listings = props => {
  const {
    0: searchList,
    1: setSearchList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.dataEndpoint).then(resp => {
      setSearchList(resp.data);
      setLoading(false);
    }).catch(err => {
      console.log("err", err.message);
    });
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "listings__header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, "Search Results"), __jsx("div", {
    className: "results_header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, searchList.length > 1 ? __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, searchList.length, " results") : __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, searchList.length, " result"), " ", __jsx("span", {
    className: "label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, "for"), " Ferrari", " ", __jsx("span", {
    className: "label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, "in"), " Australia"), __jsx("div", {
    className: "listings__grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx(Listing, {
    data: searchList,
    loader: loading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Listings);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Listings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Listings */ "./components/Listings.js");
var _jsxFileName = "D:\\ReactStuff\\gtau-fe-test\\gtau-fe-test\\gtau-fe-test\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LISTINGS_ENDPOINT = "/api/listings";
function Home() {
  return __jsx("div", {
    className: "home__container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "GTAU Front-End Test"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/variables.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/globals.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/home.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/listings.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "home__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(_components_Listings__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dataEndpoint: LISTINGS_ENDPOINT,
    keyword: "Ferrari",
    location: "Australia",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })));
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-text-truncate":
/*!**************************************!*\
  !*** external "react-text-truncate" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-text-truncate");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdGV4dC10cnVuY2F0ZVwiIl0sIm5hbWVzIjpbIkFDVElPTlMiLCJmb3JtYXRBc0N1cnJlbmN5IiwiaW50IiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJMaXN0aW5nIiwicHJvcHMiLCJoYW5kbGVDbGljayIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJ0ZXh0Q29udGVudCIsInZhbHVlIiwibG9hZGVyIiwiZGF0YSIsImxlbmd0aCIsIm1hcCIsImltYWdlIiwiaW5kZXgiLCJwcmljZSIsImxvY2F0aW9uIiwiaW1nVXJsIiwiZGVzY3JpcHRpb24iLCJMaXN0aW5ncyIsInNlYXJjaExpc3QiLCJzZXRTZWFyY2hMaXN0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwiZGF0YUVuZHBvaW50IiwidGhlbiIsInJlc3AiLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJMSVNUSU5HU19FTkRQT0lOVCIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7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QUFDLFdBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBVkosQ0FESjtBQW9CSCxDOzs7Ozs7Ozs7OztBQzFCRCxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFRleHRUcnVuY2F0ZSBmcm9tIFwicmVhY3QtdGV4dC10cnVuY2F0ZVwiO1xuXG5jb25zdCBBQ1RJT05TID0gW1wiVmlld1wiLCBcIlJlcGx5XCJdO1xuXG5jb25zdCBmb3JtYXRBc0N1cnJlbmN5ID0gKGludCkgPT4ge1xuICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1BVVwiLCB7XG4gICAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgICBjdXJyZW5jeTogXCJBVURcIixcbiAgfSkuZm9ybWF0KGludCk7XG4gIHJldHVybiBmb3JtYXR0ZXI7XG59O1xuXG5jb25zdCBMaXN0aW5nID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICB0aXRsZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50ICsgXCI6XCIgKyB0aXRsZS5jdXJyZW50VGFyZ2V0LnZhbHVlXG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1ncmlkXCI+XG4gICAgICB7cHJvcHMubG9hZGVyID8gKFxuICAgICAgICA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICkgOiBwcm9wcy5kYXRhICYmIHByb3BzLmRhdGEubGVuZ3RoID8gKFxuICAgICAgICBwcm9wcy5kYXRhLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIiBrZXk9e2B0aXRsZSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDxUZXh0VHJ1bmNhdGUgbGluZT17MX0gdHJ1bmNhdGVUZXh0PVwi4oCmXCIgdGV4dD17aW1hZ2UudGl0bGV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtpbWFnZS5wcmljZSAhPT0gXCJXYW50ZWRcIiA/IChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZVwiPntmb3JtYXRBc0N1cnJlbmN5KGltYWdlLnByaWNlKX08L3NwYW4+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj57aW1hZ2UucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2NhdGlvblwiPntpbWFnZS5sb2NhdGlvbn08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtpbWFnZS5pbWdVcmwgPyAoXG4gICAgICAgICAgICAgIDxpbWcga2V5PXtgaW1nJHtpbmRleH1gfSBzcmM9e2ltYWdlLmltZ1VybH0gYWx0PXtgaW1nJHtpbmRleH1gfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgPFRleHRUcnVuY2F0ZVxuICAgICAgICAgICAgICAgIGxpbmU9ezN9XG4gICAgICAgICAgICAgICAgZWxlbWVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgIHRydW5jYXRlVGV4dD1cIuKAplwiXG4gICAgICAgICAgICAgICAgdGV4dD17aW1hZ2UuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLXN0eWxlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2ltYWdlLnRpdGxlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge0FDVElPTlNbMF19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLXN0eWxlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2ltYWdlLnRpdGxlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge0FDVElPTlNbMV19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXY+UmVjb3JkcyBub3QgZm91bmQ8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBMaXN0aW5ncyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc2VhcmNoTGlzdCwgc2V0U2VhcmNoTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQocHJvcHMuZGF0YUVuZHBvaW50KVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgc2V0U2VhcmNoTGlzdChyZXNwLmRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVyclwiLCBlcnIubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdzX19oZWFkZXJcIj5TZWFyY2ggUmVzdWx0czwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzX2hlYWRlclwiPlxuICAgICAgICB7c2VhcmNoTGlzdC5sZW5ndGggPiAxID8gKFxuICAgICAgICAgIDxzcGFuPntzZWFyY2hMaXN0Lmxlbmd0aH0gcmVzdWx0czwvc3Bhbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8c3Bhbj57c2VhcmNoTGlzdC5sZW5ndGh9IHJlc3VsdDwvc3Bhbj5cbiAgICAgICAgKX17XCIgXCJ9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+Zm9yPC9zcGFuPiBGZXJyYXJpe1wiIFwifVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPmluPC9zcGFuPiBBdXN0cmFsaWFcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nc19fZ3JpZFwiPlxuICAgICAgICA8TGlzdGluZyBkYXRhPXtzZWFyY2hMaXN0fSBsb2FkZXI9e2xvYWRpbmd9PjwvTGlzdGluZz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdGluZ3M7XG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGlzdGluZ3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdGluZ3NcIjtcblxuY29uc3QgTElTVElOR1NfRU5EUE9JTlQgPSBcIi9hcGkvbGlzdGluZ3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVfX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkdUQVUgRnJvbnQtRW5kIFRlc3Q8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3MvdmFyaWFibGVzLmNzc1wiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL2dsb2JhbHMuY3NzXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3MvaG9tZS5jc3NcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9saXN0aW5ncy5jc3NcIiAvPiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8TGlzdGluZ3NcbiAgICAgICAgICAgICAgICAgICAgZGF0YUVuZHBvaW50PXtMSVNUSU5HU19FTkRQT0lOVH1cbiAgICAgICAgICAgICAgICAgICAga2V5d29yZD1cIkZlcnJhcmlcIlxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj1cIkF1c3RyYWxpYVwiXG4gICAgICAgICAgICAgICAgPjwvTGlzdGluZ3M+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10ZXh0LXRydW5jYXRlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=