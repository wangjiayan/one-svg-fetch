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

var DownloadCloud = function DownloadCloud(props) {
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
    d: "M9.424 3.15a7.078 7.078 0 016.902 4.644c.992.026 2.103.166 3.124.913a4.761 4.761 0 01-.072 7.737.9.9 0 01-1.036-1.472 2.962 2.962 0 00.045-4.813c-.722-.528-1.534-.57-2.724-.57a.9.9 0 01-.872-.677 5.278 5.278 0 10-9.066 4.81.9.9 0 11-1.348 1.192A7.078 7.078 0 019.424 3.15zm2.578 8.955a.9.9 0 01.9.9v4.778l1.553-1.553a.9.9 0 111.272 1.273l-3.089 3.089a.9.9 0 01-1.272 0l-3.09-3.09A.9.9 0 019.55 16.23l1.553 1.553v-4.778a.9.9 0 01.9-.9z"
  }));
};

var _default = DownloadCloud;
exports["default"] = _default;