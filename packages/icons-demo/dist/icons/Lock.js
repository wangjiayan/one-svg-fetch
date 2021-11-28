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

var Lock = function Lock(props) {
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
    d: "M12 4.329a3.386 3.386 0 00-3.386 3.385v2.529h6.771V7.714A3.386 3.386 0 0012 4.33zm5.185 5.914V7.714a5.186 5.186 0 00-10.371 0v2.529h-.815a2.614 2.614 0 00-2.614 2.614v6A2.614 2.614 0 006 21.472h12a2.614 2.614 0 002.615-2.615v-6a2.614 2.614 0 00-2.615-2.614h-.814zM6 12.043a.814.814 0 00-.814.814v6c0 .45.365.815.814.815h12c.45 0 .815-.365.815-.815v-6a.814.814 0 00-.815-.814H6z"
  }));
};

var _default = Lock;
exports["default"] = _default;