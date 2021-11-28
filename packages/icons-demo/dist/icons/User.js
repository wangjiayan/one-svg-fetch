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

var User = function User(props) {
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
    d: "M12 5.186a2.529 2.529 0 100 5.057 2.529 2.529 0 000-5.057zM7.67 7.715a4.329 4.329 0 118.657 0 4.329 4.329 0 01-8.657 0zm-2.16 7.225a4.329 4.329 0 013.06-1.268h6.857A4.329 4.329 0 0119.757 18v1.715a.9.9 0 01-1.8 0V18a2.529 2.529 0 00-2.529-2.528H8.571A2.529 2.529 0 006.043 18v1.715a.9.9 0 11-1.8 0V18c0-1.148.456-2.249 1.267-3.06z"
  }));
};

var _default = User;
exports["default"] = _default;