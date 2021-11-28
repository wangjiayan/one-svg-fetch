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

var Order = function Order(props) {
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
    d: "M5.726 19.619V4.38h1.759v1.501c0 .74.574 1.456 1.416 1.456h6.206c.837 0 1.419-.711 1.41-1.461V4.38h1.758V19.62H5.726zM14.718 4.38H9.285v1.157h5.433V4.38zm.384-1.8h3.441c.782 0 1.532.608 1.532 1.488v15.864c0 .88-.75 1.487-1.532 1.487H5.458c-.782 0-1.532-.607-1.532-1.488V4.069c0-.88.75-1.488 1.532-1.488H15.1zm-7.348 8.954a.9.9 0 01.9-.9h6.963a.9.9 0 110 1.8H8.654a.9.9 0 01-.9-.9zm.9 2.638a.9.9 0 100 1.8h6.963a.9.9 0 000-1.8H8.654z"
  }));
};

var _default = Order;
exports["default"] = _default;