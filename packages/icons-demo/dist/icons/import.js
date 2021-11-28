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

var Import = function Import(props) {
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
    d: "M11.365 14.208a.9.9 0 001.272 0l3.43-3.429a.9.9 0 10-1.274-1.273L12.901 11.4v-7.97a.9.9 0 10-1.8 0v7.97L9.21 9.505a.9.9 0 00-1.273 1.273l3.429 3.429z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5.043 12a.9.9 0 10-1.8 0v6.857a2.614 2.614 0 002.614 2.614h12.286a2.614 2.614 0 002.614-2.614V12a.9.9 0 00-1.8 0v6.857a.814.814 0 01-.814.814H5.857a.814.814 0 01-.814-.814V12z"
  }));
};

var _default = Import;
exports["default"] = _default;