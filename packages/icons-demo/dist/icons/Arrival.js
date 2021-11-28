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

var Arrival = function Arrival(props) {
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
    d: "M17.821 5.32L6.086 10.88l4.417 1.104a.9.9 0 01.655.655l1.104 4.417 5.56-11.735zm.242-2.105c1.189-.563 2.428.675 1.864 1.864l-6.516 13.758c-.563 1.188-2.305 1.016-2.624-.26L9.543 13.6l-4.978-1.244c-1.275-.319-1.448-2.06-.26-2.623l13.758-6.517z"
  }));
};

var _default = Arrival;
exports["default"] = _default;