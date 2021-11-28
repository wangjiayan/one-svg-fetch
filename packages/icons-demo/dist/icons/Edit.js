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

var Edit = function Edit(props) {
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
    d: "M14.792 2.792a.9.9 0 011.273 0l3.428 3.429a.9.9 0 010 1.273l-9.428 9.428a.9.9 0 01-.637.264H6a.9.9 0 01-.9-.9v-3.429a.9.9 0 01.263-.636l9.429-9.429zM6.9 13.23v2.156h2.155l8.53-8.529-2.157-2.155L6.9 13.23zm-2.657 7.342a.9.9 0 01.9-.9h14.571a.9.9 0 110 1.8H5.143a.9.9 0 01-.9-.9z"
  }));
};

var _default = Edit;
exports["default"] = _default;