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

var Eye = function Eye(props) {
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
    d: "M3.6 12a15.963 15.963 0 002.094 2.813c1.53 1.633 3.666 3.144 6.307 3.144 2.64 0 4.776-1.51 6.307-3.144A15.955 15.955 0 0020.402 12a15.958 15.958 0 00-2.094-2.813c-1.531-1.634-3.667-3.144-6.307-3.144-2.64 0-4.776 1.51-6.308 3.144A15.966 15.966 0 003.6 12zm17.83 0l.804-.403-.001-.003-.003-.006-.01-.02a16 16 0 00-.664-1.129 17.765 17.765 0 00-1.934-2.483C17.939 6.16 15.36 4.243 12 4.243c-3.36 0-5.938 1.918-7.621 3.713a17.766 17.766 0 00-2.433 3.308 10.693 10.693 0 00-.165.305l-.01.019-.003.006-.001.002.804.404-.805-.403a.9.9 0 000 .805L2.572 12l-.805.402.001.002.001.002.003.006.01.019a7.891 7.891 0 00.165.305 17.763 17.763 0 002.433 3.308c1.683 1.795 4.261 3.713 7.62 3.713 3.36 0 5.939-1.918 7.622-3.713a17.762 17.762 0 002.433-3.308 10.41 10.41 0 00.165-.305l.01-.02.003-.005v-.002s.001-.002-.804-.404zm0 0l.804.402a.901.901 0 000-.805L21.43 12zM12 10.328a1.671 1.671 0 100 3.343 1.671 1.671 0 000-3.343zM8.53 12a3.471 3.471 0 116.942 0 3.471 3.471 0 01-6.943 0z"
  }));
};

var _default = Eye;
exports["default"] = _default;