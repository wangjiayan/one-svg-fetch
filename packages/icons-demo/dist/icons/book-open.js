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

var BookOpen = function BookOpen(props) {
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
    d: "M2.527 4.286a.9.9 0 01.9-.9H8.57A4.329 4.329 0 0112 5.072a4.328 4.328 0 013.428-1.686h5.143a.9.9 0 01.9.9v12.857a.9.9 0 01-.9.9h-6a1.672 1.672 0 00-1.671 1.671.9.9 0 01-1.8 0 1.671 1.671 0 00-1.672-1.671h-6a.9.9 0 01-.9-.9V4.286zM11.1 16.672a3.472 3.472 0 00-1.672-.43h-5.1V5.187H8.57A2.529 2.529 0 0111.1 7.714v8.958zm1.8 0a3.472 3.472 0 011.671-.43h5.1V5.187h-4.243A2.528 2.528 0 0012.9 7.714v8.958z"
  }));
};

var _default = BookOpen;
exports["default"] = _default;