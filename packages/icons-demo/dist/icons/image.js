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

var Image = function Image(props) {
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
    d: "M5.185 6c0-.45.364-.814.814-.814h12c.45 0 .814.364.814.814v6.399l-2.749-2.75a.9.9 0 00-1.273 0l-9.103 9.104A.814.814 0 015.185 18V6zm10.243 5.559l3.385 3.385V18c0 .45-.364.814-.814.814H8.172l7.256-7.255zM5.999 3.386A2.614 2.614 0 003.385 6v12a2.614 2.614 0 002.614 2.614h12A2.614 2.614 0 0020.613 18V6A2.614 2.614 0 0018 3.386H6zM10.252 9a1.497 1.497 0 11-2.994 0 1.497 1.497 0 012.994 0z"
  }));
};

var _default = Image;
exports["default"] = _default;