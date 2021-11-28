"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _excluded = ["color", "size"];

var Calendar = function Calendar(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return /*#__PURE__*/_react["default"].createElement("svg", (0, _extends2["default"])({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.57 2.529a.9.9 0 01.9.9v.814h5.058v-.814a.9.9 0 011.8 0v.814h1.671a2.614 2.614 0 012.615 2.614v12a2.614 2.614 0 01-2.615 2.615H6a2.614 2.614 0 01-2.614-2.615v-12A2.614 2.614 0 016 4.243h1.672v-.814a.9.9 0 01.9-.9zm-.9 3.514H6a.814.814 0 00-.815.814v2.529h13.629V6.857a.814.814 0 00-.815-.814h-1.671v.814a.9.9 0 11-1.8 0v-.814H9.471v.814a.9.9 0 11-1.8 0v-.814zm11.144 5.143H5.185v7.671c0 .45.365.815.814.815h12c.45 0 .815-.365.815-.815v-7.671z"
  }));
};

var _default = Calendar;
exports["default"] = _default;