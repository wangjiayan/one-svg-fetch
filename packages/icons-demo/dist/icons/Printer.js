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

var Printer = function Printer(props) {
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
    d: "M6 3.5a.9.9 0 01.9-.9h10.2a.9.9 0 01.9.9v5.05h.8a2.6 2.6 0 012.6 2.6v4.25a2.6 2.6 0 01-2.6 2.6H18v2.5a.9.9 0 01-.9.9H6.9a.9.9 0 01-.9-.9V18h-.8a2.6 2.6 0 01-2.6-2.6v-4.25a2.6 2.6 0 012.6-2.6H6V3.5zm-.8 6.85a.8.8 0 00-.8.8v4.25a.8.8 0 00.8.8H6v-2.5a.9.9 0 01.9-.9h10.2a.9.9 0 01.9.9v2.5h.8a.8.8 0 00.8-.8v-4.25a.8.8 0 00-.8-.8H5.2zm11-1.8H7.8V4.4h8.4v4.15zm0 6.05H7.8v5h8.4v-5z"
  }));
};

var _default = Printer;
exports["default"] = _default;