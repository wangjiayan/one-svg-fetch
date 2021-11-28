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

var Clock = function Clock(props) {
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
    d: "M12 4.329a7.671 7.671 0 100 15.343 7.671 7.671 0 000-15.343zM2.527 12a9.471 9.471 0 1118.943 0 9.471 9.471 0 01-18.943 0zm9.471-6.043a.9.9 0 01.9.9v4.587l2.931 1.465a.9.9 0 11-.805 1.61l-3.428-1.714a.9.9 0 01-.498-.805V6.857a.9.9 0 01.9-.9z"
  }));
};

var _default = Clock;
exports["default"] = _default;