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

var Info = function Info(props) {
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
    d: "M12.899 12.567a.9.9 0 00-1.8 0v3.429a.9.9 0 101.8 0v-3.429z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 10.252a1.264 1.264 0 100-2.53 1.264 1.264 0 000 2.53z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.999 2.528a9.471 9.471 0 100 18.943 9.471 9.471 0 000-18.943zM4.327 12a7.671 7.671 0 1115.343 0 7.671 7.671 0 01-15.343 0z"
  }));
};

var _default = Info;
exports["default"] = _default;