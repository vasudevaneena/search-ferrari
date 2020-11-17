module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/listings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/listings.js":
/*!*******************************!*\
  !*** ./pages/api/listings.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shuffle = __webpack_require__(/*! shuffle-array */ "shuffle-array");

const data = [{
  title: "2005 Ferrari F430 Convertible",
  description: "We are proud to offer one of the rarest modern-day Ferrari's in existence today.There are only approximately 130 RIGHT HAND DRIVE 6 SPEED GATED MANUAL F430 SPIDERS IN THE WORLD",
  imgUrl: "/img/ferrari01.webp",
  price: 299999,
  location: "Sydney, NSW"
}, {
  title: "2006 Ferrari F430 Spider Black 6 Speed Formula One Convertible",
  description: "Traralgon Car City is located in Victoria, 1.5 hrs from Melbourne down the South Eastern freeway. We are the largest non-franchise dealership in the Gippsland Region, locally owned and operated for over 30 years. Our team have the knowledge and the expertise to help you find the right car to perfectly suit your needs.",
  imgUrl: "/img/ferrari02.webp",
  price: 249990,
  location: "Taralgon, VIC"
}, {
  title: "2000 Ferrari 360 Modena F1 Blue 6 Speed Seq Manual Auto-Clutch Coupe",
  description: "This Magnificent car is one for the collector, becoming harder to find in this condition this is definitely a rare car. It has always been serviced and maintained by Ferrari by its single owner and has undoubtedly been loved. It has its genuine",
  imgUrl: "/img/ferrari03.webp",
  price: 148888,
  location: "Perth, WA"
}, {
  title: "1979 Ferrari 308 GTB Red 5 Speed Manual Coupe",
  description: "1979 Australian Delivered Ferrari 308 GTB in the World Famous Rosso Corsa Red with Black Leather Trim - Matching Numbers 2.9L V8 Engine - Classic 5 Speed Manual Gated Transmission - Very low 40,817KMs",
  imgUrl: "/img/ferrari04.webp",
  price: 179990,
  location: "Hobart, TAS"
}, {
  title: "1997 Ferrari F355 GTS Manual Coupe",
  description: "For sales this beautiful rare F355 GTS 6 speed manual gearbox is in outstanding and perfect original condition, full Ferrari service history, only 1000km, done since last service, fully documented service history.",
  imgUrl: "/img/ferrari05.webp",
  price: 200000,
  location: "Sydney, NSW"
}, {
  title: "Ferrari spare parts",
  description: "Wanted to buy: spare parts for my Ferrari. Will travel to inspect",
  price: "Wanted",
  location: "Adelaide, SA"
}];
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  const remove = Math.floor(Math.random() * Math.floor(6));
  const response = shuffle(data, {
    copy: true
  }).splice(0, remove);
  res.statusCode = 200;
  res.json(response);
});

/***/ }),

/***/ "shuffle-array":
/*!********************************!*\
  !*** external "shuffle-array" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shuffle-array");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2xpc3RpbmdzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInNodWZmbGUtYXJyYXlcIiJdLCJuYW1lcyI6WyJzaHVmZmxlIiwicmVxdWlyZSIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nVXJsIiwicHJpY2UiLCJsb2NhdGlvbiIsInJlcSIsInJlcyIsInJlbW92ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJlc3BvbnNlIiwiY29weSIsInNwbGljZSIsInN0YXR1c0NvZGUiLCJqc29uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUEsSUFBSUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLG9DQUFELENBQXJCOztBQUVBLE1BQU1DLElBQUksR0FBRyxDQUNUO0FBQ0lDLE9BQUssRUFBRSwrQkFEWDtBQUVJQyxhQUFXLEVBQ1Asa0xBSFI7QUFJSUMsUUFBTSxFQUFFLHFCQUpaO0FBS0lDLE9BQUssRUFBRSxNQUxYO0FBTUlDLFVBQVEsRUFBRTtBQU5kLENBRFMsRUFTVDtBQUNJSixPQUFLLEVBQUUsZ0VBRFg7QUFFSUMsYUFBVyxFQUNQLGlVQUhSO0FBSUlDLFFBQU0sRUFBRSxxQkFKWjtBQUtJQyxPQUFLLEVBQUUsTUFMWDtBQU1JQyxVQUFRLEVBQUU7QUFOZCxDQVRTLEVBaUJUO0FBQ0lKLE9BQUssRUFDRCxzRUFGUjtBQUdJQyxhQUFXLEVBQ1Asc1BBSlI7QUFLSUMsUUFBTSxFQUFFLHFCQUxaO0FBTUlDLE9BQUssRUFBRSxNQU5YO0FBT0lDLFVBQVEsRUFBRTtBQVBkLENBakJTLEVBMEJUO0FBQ0lKLE9BQUssRUFBRSwrQ0FEWDtBQUVJQyxhQUFXLEVBQ1AsME1BSFI7QUFJSUMsUUFBTSxFQUFFLHFCQUpaO0FBS0lDLE9BQUssRUFBRSxNQUxYO0FBTUlDLFVBQVEsRUFBRTtBQU5kLENBMUJTLEVBa0NUO0FBQ0lKLE9BQUssRUFBRSxvQ0FEWDtBQUVJQyxhQUFXLEVBQ1AsdU5BSFI7QUFJSUMsUUFBTSxFQUFFLHFCQUpaO0FBS0lDLE9BQUssRUFBRSxNQUxYO0FBTUlDLFVBQVEsRUFBRTtBQU5kLENBbENTLEVBMENUO0FBQ0lKLE9BQUssRUFBRSxxQkFEWDtBQUVJQyxhQUFXLEVBQ1AsbUVBSFI7QUFJSUUsT0FBSyxFQUFFLFFBSlg7QUFLSUMsVUFBUSxFQUFFO0FBTGQsQ0ExQ1MsQ0FBYjtBQW1EZSxnRUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDekIsUUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCRixJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFYLENBQTNCLENBQWY7QUFDQSxRQUFNRSxRQUFRLEdBQUdkLE9BQU8sQ0FBQ0UsSUFBRCxFQUFPO0FBQUVhLFFBQUksRUFBRTtBQUFSLEdBQVAsQ0FBUCxDQUE4QkMsTUFBOUIsQ0FBcUMsQ0FBckMsRUFBd0NOLE1BQXhDLENBQWpCO0FBRUFELEtBQUcsQ0FBQ1EsVUFBSixHQUFpQixHQUFqQjtBQUNBUixLQUFHLENBQUNTLElBQUosQ0FBU0osUUFBVDtBQUNILENBTkQsRTs7Ozs7Ozs7Ozs7QUNyREEsMEMiLCJmaWxlIjoicGFnZXMvYXBpL2xpc3RpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvbGlzdGluZ3MuanNcIik7XG4iLCJ2YXIgc2h1ZmZsZSA9IHJlcXVpcmUoXCJzaHVmZmxlLWFycmF5XCIpO1xuXG5jb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiMjAwNSBGZXJyYXJpIEY0MzAgQ29udmVydGlibGVcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIldlIGFyZSBwcm91ZCB0byBvZmZlciBvbmUgb2YgdGhlIHJhcmVzdCBtb2Rlcm4tZGF5IEZlcnJhcmkncyBpbiBleGlzdGVuY2UgdG9kYXkuVGhlcmUgYXJlIG9ubHkgYXBwcm94aW1hdGVseSAxMzAgUklHSFQgSEFORCBEUklWRSA2IFNQRUVEIEdBVEVEIE1BTlVBTCBGNDMwIFNQSURFUlMgSU4gVEhFIFdPUkxEXCIsXG4gICAgICAgIGltZ1VybDogXCIvaW1nL2ZlcnJhcmkwMS53ZWJwXCIsXG4gICAgICAgIHByaWNlOiAyOTk5OTksXG4gICAgICAgIGxvY2F0aW9uOiBcIlN5ZG5leSwgTlNXXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIjIwMDYgRmVycmFyaSBGNDMwIFNwaWRlciBCbGFjayA2IFNwZWVkIEZvcm11bGEgT25lIENvbnZlcnRpYmxlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJUcmFyYWxnb24gQ2FyIENpdHkgaXMgbG9jYXRlZCBpbiBWaWN0b3JpYSwgMS41IGhycyBmcm9tIE1lbGJvdXJuZSBkb3duIHRoZSBTb3V0aCBFYXN0ZXJuIGZyZWV3YXkuIFdlIGFyZSB0aGUgbGFyZ2VzdCBub24tZnJhbmNoaXNlIGRlYWxlcnNoaXAgaW4gdGhlIEdpcHBzbGFuZCBSZWdpb24sIGxvY2FsbHkgb3duZWQgYW5kIG9wZXJhdGVkIGZvciBvdmVyIDMwIHllYXJzLiBPdXIgdGVhbSBoYXZlIHRoZSBrbm93bGVkZ2UgYW5kIHRoZSBleHBlcnRpc2UgdG8gaGVscCB5b3UgZmluZCB0aGUgcmlnaHQgY2FyIHRvIHBlcmZlY3RseSBzdWl0IHlvdXIgbmVlZHMuXCIsXG4gICAgICAgIGltZ1VybDogXCIvaW1nL2ZlcnJhcmkwMi53ZWJwXCIsXG4gICAgICAgIHByaWNlOiAyNDk5OTAsXG4gICAgICAgIGxvY2F0aW9uOiBcIlRhcmFsZ29uLCBWSUNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6XG4gICAgICAgICAgICBcIjIwMDAgRmVycmFyaSAzNjAgTW9kZW5hIEYxIEJsdWUgNiBTcGVlZCBTZXEgTWFudWFsIEF1dG8tQ2x1dGNoIENvdXBlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJUaGlzIE1hZ25pZmljZW50IGNhciBpcyBvbmUgZm9yIHRoZSBjb2xsZWN0b3IsIGJlY29taW5nIGhhcmRlciB0byBmaW5kIGluIHRoaXMgY29uZGl0aW9uIHRoaXMgaXMgZGVmaW5pdGVseSBhIHJhcmUgY2FyLiBJdCBoYXMgYWx3YXlzIGJlZW4gc2VydmljZWQgYW5kIG1haW50YWluZWQgYnkgRmVycmFyaSBieSBpdHMgc2luZ2xlIG93bmVyIGFuZCBoYXMgdW5kb3VidGVkbHkgYmVlbiBsb3ZlZC4gSXQgaGFzIGl0cyBnZW51aW5lXCIsXG4gICAgICAgIGltZ1VybDogXCIvaW1nL2ZlcnJhcmkwMy53ZWJwXCIsXG4gICAgICAgIHByaWNlOiAxNDg4ODgsXG4gICAgICAgIGxvY2F0aW9uOiBcIlBlcnRoLCBXQVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCIxOTc5IEZlcnJhcmkgMzA4IEdUQiBSZWQgNSBTcGVlZCBNYW51YWwgQ291cGVcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIjE5NzkgQXVzdHJhbGlhbiBEZWxpdmVyZWQgRmVycmFyaSAzMDggR1RCIGluIHRoZSBXb3JsZCBGYW1vdXMgUm9zc28gQ29yc2EgUmVkIHdpdGggQmxhY2sgTGVhdGhlciBUcmltIC0gTWF0Y2hpbmcgTnVtYmVycyAyLjlMIFY4IEVuZ2luZSAtIENsYXNzaWMgNSBTcGVlZCBNYW51YWwgR2F0ZWQgVHJhbnNtaXNzaW9uIC0gVmVyeSBsb3cgNDAsODE3S01zXCIsXG4gICAgICAgIGltZ1VybDogXCIvaW1nL2ZlcnJhcmkwNC53ZWJwXCIsXG4gICAgICAgIHByaWNlOiAxNzk5OTAsXG4gICAgICAgIGxvY2F0aW9uOiBcIkhvYmFydCwgVEFTXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIjE5OTcgRmVycmFyaSBGMzU1IEdUUyBNYW51YWwgQ291cGVcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIkZvciBzYWxlcyB0aGlzIGJlYXV0aWZ1bCByYXJlIEYzNTUgR1RTIDYgc3BlZWQgbWFudWFsIGdlYXJib3ggaXMgaW4gb3V0c3RhbmRpbmcgYW5kIHBlcmZlY3Qgb3JpZ2luYWwgY29uZGl0aW9uLCBmdWxsIEZlcnJhcmkgc2VydmljZSBoaXN0b3J5LCBvbmx5IDEwMDBrbSwgZG9uZSBzaW5jZSBsYXN0IHNlcnZpY2UsIGZ1bGx5IGRvY3VtZW50ZWQgc2VydmljZSBoaXN0b3J5LlwiLFxuICAgICAgICBpbWdVcmw6IFwiL2ltZy9mZXJyYXJpMDUud2VicFwiLFxuICAgICAgICBwcmljZTogMjAwMDAwLFxuICAgICAgICBsb2NhdGlvbjogXCJTeWRuZXksIE5TV1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJGZXJyYXJpIHNwYXJlIHBhcnRzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJXYW50ZWQgdG8gYnV5OiBzcGFyZSBwYXJ0cyBmb3IgbXkgRmVycmFyaS4gV2lsbCB0cmF2ZWwgdG8gaW5zcGVjdFwiLFxuICAgICAgICBwcmljZTogXCJXYW50ZWRcIixcbiAgICAgICAgbG9jYXRpb246IFwiQWRlbGFpZGUsIFNBXCIsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHJlbW92ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoNikpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gc2h1ZmZsZShkYXRhLCB7IGNvcHk6IHRydWUgfSkuc3BsaWNlKDAsIHJlbW92ZSk7XG5cbiAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICByZXMuanNvbihyZXNwb25zZSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2h1ZmZsZS1hcnJheVwiKTsiXSwic291cmNlUm9vdCI6IiJ9