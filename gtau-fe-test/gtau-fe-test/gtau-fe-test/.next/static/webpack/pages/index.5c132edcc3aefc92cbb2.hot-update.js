webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Listings.js":
/*!********************************!*\
  !*** ./components/Listings.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_text_truncate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-text-truncate */ "./node_modules/react-text-truncate/lib/index.js");
/* harmony import */ var react_text_truncate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_text_truncate__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "D:\\ReactStuff\\gtau-fe-test\\gtau-fe-test\\gtau-fe-test\\components\\Listings.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ACTIONS = ["View", "Reply"];

var formatAsCurrency = function formatAsCurrency(_int) {
  var formatter = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD"
  }).format(_int);
  return formatter;
};

var Listing = function Listing(props) {
  var handleClick = function handleClick(title) {
    console.log(title.currentTarget.textContent + ":" + title.currentTarget.value);
  };

  return __jsx("div", {
    className: "search-grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, props.loader ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "loading...") : props.data && props.data.length ? props.data.map(function (image, index) {
    return __jsx("div", {
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "title",
      key: "title".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, __jsx(react_text_truncate__WEBPACK_IMPORTED_MODULE_2___default.a, {
      line: 1,
      truncateText: "\u2026",
      text: image.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, image.price !== "Wanted" ? __jsx("span", {
      className: "price",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }, formatAsCurrency(image.price)) : __jsx("span", {
      className: "price",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, image.price), __jsx("span", {
      className: "location",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }, image.location)), image.imgUrl ? __jsx("img", {
      key: "img".concat(index),
      src: image.imgUrl,
      alt: "img".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    }) : "", __jsx("div", {
      className: "description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, __jsx(react_text_truncate__WEBPACK_IMPORTED_MODULE_2___default.a, {
      line: 3,
      element: "span",
      truncateText: "\u2026",
      text: image.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    })), __jsx("button", {
      className: "button-style",
      value: image.title,
      onClick: handleClick,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, ACTIONS[0]), __jsx("button", {
      className: "button-style",
      value: image.title,
      onClick: handleClick,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, ACTIONS[1]));
  }) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, "Records not found"));
};

_c = Listing;

var Listings = function Listings(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      searchList = _useState[0],
      setSearchList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(props.dataEndpoint).then(function (resp) {
      setSearchList(resp.data);
      setLoading(true);
    })["catch"](function (err) {
      console.log("err", err.message);
    });
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, "Search Results"), __jsx("div", {
    className: "results_header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, searchList.length > 1 ? __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 31
    }
  }, searchList.length, " results") : __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 73
    }
  }, searchList.length, " result"), "  ", __jsx("span", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 115
    }
  }, "for"), " Ferrari ", __jsx("span", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 158
    }
  }, "in"), " Australia"), __jsx("div", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx(Listing, {
    data: searchList,
    loader: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  })));
};

_s(Listings, "nV8G4lLb28D5rTczITZbxl12v+s=");

_c2 = Listings;
/* harmony default export */ __webpack_exports__["default"] = (Listings);

var _c, _c2;

$RefreshReg$(_c, "Listing");
$RefreshReg$(_c2, "Listings");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJBQ1RJT05TIiwiZm9ybWF0QXNDdXJyZW5jeSIsImludCIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0IiwiTGlzdGluZyIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwidGV4dENvbnRlbnQiLCJ2YWx1ZSIsImxvYWRlciIsImRhdGEiLCJsZW5ndGgiLCJtYXAiLCJpbWFnZSIsImluZGV4IiwicHJpY2UiLCJsb2NhdGlvbiIsImltZ1VybCIsImRlc2NyaXB0aW9uIiwiTGlzdGluZ3MiLCJ1c2VTdGF0ZSIsInNlYXJjaExpc3QiLCJzZXRTZWFyY2hMaXN0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsImRhdGFFbmRwb2ludCIsInRoZW4iLCJyZXNwIiwiZXJyIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxDQUFDLE1BQUQsRUFBUyxPQUFULENBQWhCOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFTO0FBQ2hDLE1BQU1DLFNBQVMsR0FBRyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDL0NDLFNBQUssRUFBRSxVQUR3QztBQUUvQ0MsWUFBUSxFQUFFO0FBRnFDLEdBQS9CLEVBR2ZDLE1BSGUsQ0FHUk4sSUFIUSxDQUFsQjtBQUlBLFNBQU9DLFNBQVA7QUFDRCxDQU5EOztBQVFBLElBQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUN6QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FB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QTtBQUFBO0FBQUEsV0FENUcsZUFDdUo7QUFBTSxhQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUR2SixlQUZGLEVBS0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUFTLFFBQUksRUFBRVUsVUFBZjtBQUEyQixVQUFNLEVBQUVFLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUxGLENBREY7QUFXRCxDQXpCRDs7R0FBTUosUTs7TUFBQUEsUTtBQTJCU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWMxMzJlZGNjM2FlZmM5MmNiYjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgVGV4dFRydW5jYXRlIGZyb20gXCJyZWFjdC10ZXh0LXRydW5jYXRlXCI7XG5cbmNvbnN0IEFDVElPTlMgPSBbXCJWaWV3XCIsIFwiUmVwbHlcIl07XG5cbmNvbnN0IGZvcm1hdEFzQ3VycmVuY3kgPSAoaW50KSA9PiB7XG4gIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChcImVuLUFVXCIsIHtcbiAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgIGN1cnJlbmN5OiBcIkFVRFwiLFxuICB9KS5mb3JtYXQoaW50KTtcbiAgcmV0dXJuIGZvcm1hdHRlcjtcbn07XG5cbmNvbnN0IExpc3RpbmcgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAodGl0bGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIHRpdGxlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQgKyBcIjpcIiArIHRpdGxlLmN1cnJlbnRUYXJnZXQudmFsdWVcbiAgICApO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWdyaWRcIj5cbiAgICAgIHtwcm9wcy5sb2FkZXI/KFxuICAgICAgICAgIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxuICAgICAgICApOlxuICAgICAgcHJvcHMuZGF0YSAmJiBwcm9wcy5kYXRhLmxlbmd0aCA/IChcbiAgICAgICAgcHJvcHMuZGF0YS5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCIga2V5PXtgdGl0bGUke2luZGV4fWB9PlxuICAgICAgICAgICAgICA8VGV4dFRydW5jYXRlIGxpbmU9ezF9IHRydW5jYXRlVGV4dD1cIuKAplwiIHRleHQ9e2ltYWdlLnRpdGxlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7aW1hZ2UucHJpY2UgIT09IFwiV2FudGVkXCIgPyAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj57Zm9ybWF0QXNDdXJyZW5jeShpbWFnZS5wcmljZSl9PC9zcGFuPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+e2ltYWdlLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9jYXRpb25cIj57aW1hZ2UubG9jYXRpb259PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aW1hZ2UuaW1nVXJsID8gKFxuICAgICAgICAgICAgICA8aW1nIGtleT17YGltZyR7aW5kZXh9YH0gc3JjPXtpbWFnZS5pbWdVcmx9IGFsdD17YGltZyR7aW5kZXh9YH0gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+ICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxUZXh0VHJ1bmNhdGVcbiAgICAgICAgICAgICAgICBsaW5lPXszfVxuICAgICAgICAgICAgICAgIGVsZW1lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICB0cnVuY2F0ZVRleHQ9XCLigKZcIlxuICAgICAgICAgICAgICAgIHRleHQ9e2ltYWdlLmRlc2NyaXB0aW9ufSAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1zdHlsZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbWFnZS50aXRsZX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtBQ1RJT05TWzBdfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1zdHlsZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbWFnZS50aXRsZX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtBQ1RJT05TWzFdfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpXG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PlJlY29yZHMgbm90IGZvdW5kPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTGlzdGluZ3MgPSAocHJvcHMpID0+IHsgXG4gIGNvbnN0IFtzZWFyY2hMaXN0LCBzZXRTZWFyY2hMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7IFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KHByb3BzLmRhdGFFbmRwb2ludClcbiAgICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgIHNldFNlYXJjaExpc3QocmVzcC5kYXRhKTsgXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nc19faGVhZGVyXCI+U2VhcmNoIFJlc3VsdHM8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c19oZWFkZXJcIj5cbiAgICAgICAge3NlYXJjaExpc3QubGVuZ3RoPjE/KDxzcGFuPntzZWFyY2hMaXN0Lmxlbmd0aH0gcmVzdWx0czwvc3Bhbj4pOjxzcGFuPntzZWFyY2hMaXN0Lmxlbmd0aH0gcmVzdWx0PC9zcGFuPn0gIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+Zm9yPC9zcGFuPiBGZXJyYXJpIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+aW48L3NwYW4+IEF1c3RyYWxpYVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdzX19ncmlkXCI+XG4gICAgICAgIDxMaXN0aW5nIGRhdGE9e3NlYXJjaExpc3R9IGxvYWRlcj17bG9hZGluZ30+PC9MaXN0aW5nPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5ncztcbiJdLCJzb3VyY2VSb290IjoiIn0=