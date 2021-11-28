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

var Help = function Help(props) {
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
    d: "M5.977 7.25A7.639 7.639 0 004.33 12c0 1.794.616 3.444 1.647 4.751l2.393-2.393A4.309 4.309 0 017.673 12c0-.87.256-1.68.697-2.358L5.977 7.25zM7.25 5.975L9.643 8.37a4.308 4.308 0 012.358-.698c.87 0 1.68.256 2.358.698l2.393-2.394a7.639 7.639 0 00-4.75-1.647A7.639 7.639 0 007.25 5.976zM18.025 7.25l-2.393 2.393c.441.679.698 1.488.698 2.358 0 .87-.257 1.68-.698 2.358l2.393 2.393a7.639 7.639 0 001.648-4.75 7.638 7.638 0 00-1.648-4.752zm-1.273 10.775l-2.393-2.393a4.309 4.309 0 01-2.358.698c-.87 0-1.68-.257-2.358-.698L7.25 18.024a7.639 7.639 0 004.751 1.648 7.639 7.639 0 004.751-1.648zM2.53 12a9.471 9.471 0 1118.943 0A9.471 9.471 0 012.53 12zM12 9.472a2.529 2.529 0 100 5.057 2.529 2.529 0 000-5.057z"
  }));
};

var _default = Help;
exports["default"] = _default;