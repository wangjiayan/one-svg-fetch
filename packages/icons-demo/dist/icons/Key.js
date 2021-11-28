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

var Key = function Key(props) {
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
    d: "M16.173 9.005a1.248 1.248 0 11-2.495 0 1.248 1.248 0 012.495 0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.876 2.476a6.633 6.633 0 00-6.171 9.071l-1.312 1.306-.01-.011a1.4 1.4 0 00-1.98 0l-1.794 1.793a1.4 1.4 0 000 1.98l.01.01-.51.51a1.4 1.4 0 000 1.98l1.79 1.79a1.4 1.4 0 001.988-.008l5.536-5.623a6.633 6.633 0 102.452-12.799zm-4.834 6.633a4.833 4.833 0 112.599 4.287l-.59-.308-6.164 6.259-1.222-1.222 1.5-1.5-1-1 1.227-1.228.999 1 3.494-3.48-.304-.587a4.81 4.81 0 01-.539-2.22z"
  }));
};

var _default = Key;
exports["default"] = _default;