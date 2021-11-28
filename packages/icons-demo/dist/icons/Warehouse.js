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

var Warehouse = function Warehouse(props) {
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
    d: "M13.9 4a.9.9 0 00-1.122-.873l-9 2.286a.9.9 0 00-.678.872V20a.9.9 0 00.9.9h16a.9.9 0 00.9-.9v-8.8a.9.9 0 00-.63-.859L13.9 8.339V4zm0 6.226V19.1h1.7v-1.6a.9.9 0 011.8 0v1.6h1.7v-7.24l-5.2-1.634zM12.1 9V5.157L4.9 6.985V19.1h7.2V9zM8 9.1a.9.9 0 01.9.9v2a.9.9 0 11-1.8 0v-2a.9.9 0 01.9-.9z"
  }));
};

var _default = Warehouse;
exports["default"] = _default;