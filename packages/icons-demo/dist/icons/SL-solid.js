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

var SlSolid = function SlSolid(props) {
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
    d: "M11.79 2C6.383 2 2 6.477 2 12s4.383 10 9.79 10c5.406 0 9.79-4.477 9.79-10-.001-5.523-4.384-10-9.79-10zM9.757 20.47c-.316-1.309-1.273-5.202-1.273-5.202l4.507 5.497s-2 .268-3.234-.295zm3.674.148c-1.676-2.027-5.29-6.333-5.29-6.333l8.376 4.86c.001 0-.728.93-3.086 1.473zm3.363-1.654l-8.644-5.19-1.458-5.267s-.086-.47-.021-.702c.04-.133.492-.283.492-.283l5.294-1.508s4.675 2.401 7.882 4.147c.784 3.51-1.569 7.478-3.545 8.803zM10.744 8.83c-.623 0-1.13.516-1.13 1.152a1.14 1.14 0 001.13 1.151 1.14 1.14 0 001.13-1.151 1.14 1.14 0 00-1.13-1.152z"
  }));
};

var _default = SlSolid;
exports["default"] = _default;