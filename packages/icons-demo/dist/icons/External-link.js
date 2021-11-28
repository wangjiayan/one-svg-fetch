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

var ExternalLink = function ExternalLink(props) {
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
    d: "M15 5.186a.9.9 0 110-1.8h4.714a.9.9 0 01.9.9V9a.9.9 0 11-1.8 0V6.458l-7.892 7.893a.9.9 0 11-1.273-1.273l7.892-7.892H15zM6 7.757a.814.814 0 00-.815.814V18a.814.814 0 00.814.814h9.429a.814.814 0 00.814-.814v-5.143a.9.9 0 111.8 0V18a2.614 2.614 0 01-2.614 2.614H5.999A2.614 2.614 0 013.385 18V8.57A2.614 2.614 0 016 5.957h5.143a.9.9 0 110 1.8H6z"
  }));
};

var _default = ExternalLink;
exports["default"] = _default;