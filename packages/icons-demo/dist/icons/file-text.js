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

var FileText = function FileText(props) {
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
    d: "M5.008 3.294a2.614 2.614 0 011.849-.765h6.857a.9.9 0 01.636.263l5.143 5.143a.9.9 0 01.264.637v10.285a2.615 2.615 0 01-2.614 2.615H6.857a2.615 2.615 0 01-2.614-2.615V5.143c0-.693.275-1.358.765-1.849zM6.857 4.33a.814.814 0 00-.814.814v13.714a.814.814 0 00.814.815h10.286a.814.814 0 00.814-.815V9.472h-4.243a.9.9 0 01-.9-.9V4.329H6.857zM14.614 5.6l2.07 2.07h-2.07v-2.07zM7.671 9.43a.9.9 0 01.9-.9h1.714a.9.9 0 110 1.8H8.571a.9.9 0 01-.9-.9zm0 3.428a.9.9 0 01.9-.9h6.857a.9.9 0 010 1.8H8.571a.9.9 0 01-.9-.9zm0 3.429a.9.9 0 01.9-.9h6.857a.9.9 0 010 1.8H8.571a.9.9 0 01-.9-.9z"
  }));
};

var _default = FileText;
exports["default"] = _default;