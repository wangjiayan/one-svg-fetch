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

var Copy = function Copy(props) {
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
    d: "M5.142 4.329a.814.814 0 00-.814.814v7.714a.814.814 0 00.814.815h.857a.9.9 0 110 1.8h-.857a2.615 2.615 0 01-2.614-2.615V5.143a2.614 2.614 0 012.614-2.614h7.714a2.614 2.614 0 012.615 2.614V6a.9.9 0 01-1.8 0v-.857a.814.814 0 00-.815-.814H5.142zm6 6a.814.814 0 00-.814.814v7.714c0 .45.364.815.814.815h7.714c.45 0 .815-.365.815-.815v-7.714a.814.814 0 00-.815-.814h-7.714zm-2.614.814a2.614 2.614 0 012.614-2.614h7.714a2.614 2.614 0 012.615 2.614v7.714a2.614 2.614 0 01-2.615 2.615h-7.714a2.614 2.614 0 01-2.614-2.615v-7.714z"
  }));
};

var _default = Copy;
exports["default"] = _default;