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

var Carrier = function Carrier(props) {
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
    d: "M2.178 7.723C2.251 7 2.642 6.28 3.49 5.79c.848-.49 1.667-.468 2.328-.17.61.275 1.028.755 1.243 1.127l5.18 8.973a3.478 3.478 0 013.352.898l4.89-2.823a.9.9 0 01.9 1.558l-4.89 2.824a3.473 3.473 0 01-6.36 2.633 3.473 3.473 0 01.55-4.19l-5.18-8.973a1.02 1.02 0 00-.424-.386c-.14-.063-.35-.108-.69.088-.34.196-.405.4-.42.553-.021.21.052.437.123.56a.9.9 0 01-1.56.9 2.814 2.814 0 01-.354-1.64zm10.125 9.905a1.671 1.671 0 101.671 2.894 1.671 1.671 0 00-1.671-2.894z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.819 5.902a1.4 1.4 0 01.473-1.976L13.25 1.64a1.4 1.4 0 011.873.449l5.305 8.153a1.4 1.4 0 01-.474 1.976l-3.958 2.285a1.4 1.4 0 01-1.873-.45L8.819 5.903zm1.738-.628L12.5 8.259l3.264-1.884-1.943-2.986-3.264 1.885zm6.19 2.612L13.483 9.77l1.942 2.985 3.264-1.884-1.942-2.985z"
  }));
};

var _default = Carrier;
exports["default"] = _default;