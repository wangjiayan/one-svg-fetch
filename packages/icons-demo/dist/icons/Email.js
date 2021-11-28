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

var Email = function Email(props) {
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
    d: "M4.432 6.461l7.567 5.297 7.567-5.297a.819.819 0 00-.71-.418H5.142c-.303 0-.57.17-.71.418zM19.67 8.585l-7.156 5.01a.9.9 0 01-1.032 0l-7.155-5.01v8.558a.82.82 0 00.814.814h13.714a.82.82 0 00.815-.814V8.585zM2.528 6.857a2.62 2.62 0 012.614-2.614h13.714a2.62 2.62 0 012.615 2.614v10.286a2.62 2.62 0 01-2.615 2.614H5.142a2.62 2.62 0 01-2.614-2.614V6.857z"
  }));
};

var _default = Email;
exports["default"] = _default;