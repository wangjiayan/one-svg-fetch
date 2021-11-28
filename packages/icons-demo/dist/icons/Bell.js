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

var Bell = function Bell(props) {
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
    d: "M12 1.887a.9.9 0 01.9.9v1.566A6.509 6.509 0 0118.51 10.8v4.006a1.504 1.504 0 001.504 1.504.9.9 0 110 1.8H3.988a.9.9 0 010-1.8 1.504 1.504 0 001.504-1.504V10.8A6.509 6.509 0 0111.1 4.353V2.787a.9.9 0 01.9-.9zM6.93 16.31H17.07a3.303 3.303 0 01-.362-1.504V10.8a4.709 4.709 0 10-9.417 0v4.006c0 .528-.126 1.043-.362 1.504zm3.233 3.326a.9.9 0 011.23.327.703.703 0 001.215 0 .9.9 0 011.557.903 2.501 2.501 0 01-4.33 0 .9.9 0 01.328-1.23z"
  }));
};

var _default = Bell;
exports["default"] = _default;