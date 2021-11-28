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

var Share = function Share(props) {
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
    d: "M11.363 2.792a.9.9 0 011.273 0l3.429 3.429a.9.9 0 11-1.273 1.273L12.9 5.6v8.97a.9.9 0 01-1.8 0v-8.97L9.208 7.494A.9.9 0 117.935 6.22l3.428-3.429zM4.143 11.1a.9.9 0 01.9.9v6.857a.814.814 0 00.814.815h12.286a.814.814 0 00.814-.815V12a.9.9 0 011.8 0v6.857a2.615 2.615 0 01-2.614 2.615H5.857a2.615 2.615 0 01-2.614-2.615V12a.9.9 0 01.9-.9z"
  }));
};

var _default = Share;
exports["default"] = _default;