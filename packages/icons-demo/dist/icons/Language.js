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

var Language = function Language(props) {
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
    d: "M4.382 11.1h3.337a14.015 14.015 0 012.235-6.495A7.679 7.679 0 004.382 11.1zm7.62-6.272A12.215 12.215 0 009.525 11.1h4.95a12.215 12.215 0 00-2.475-6.272zm2.474 8.072a12.215 12.215 0 01-2.475 6.272A12.215 12.215 0 019.526 12.9h4.95zm-6.757 0H4.382a7.679 7.679 0 005.572 6.495A14.015 14.015 0 017.719 12.9zm6.33 6.495a14.016 14.016 0 002.234-6.495h3.337a7.679 7.679 0 01-5.572 6.495zM19.62 11.1h-3.337a14.015 14.015 0 00-2.235-6.495A7.679 7.679 0 0119.62 11.1zM2.53 12a9.471 9.471 0 1118.943 0A9.471 9.471 0 012.53 12z"
  }));
};

var _default = Language;
exports["default"] = _default;