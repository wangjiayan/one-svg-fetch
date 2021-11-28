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

var Save = function Save(props) {
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
    d: "M8.6 10a.9.9 0 01.9-.9h5a.9.9 0 010 1.8h-5a.9.9 0 01-.9-.9z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 20.9a1.9 1.9 0 001.9-1.9V8.406A5.306 5.306 0 0015.595 3.1H5A1.9 1.9 0 003.1 5v14c0 1.05.851 1.9 1.9 1.9h14zM5 4.9a.1.1 0 00-.1.1v14a.1.1 0 00.1.1h2.1V15c0-1.049.851-1.9 1.9-1.9h6c1.05 0 1.9.851 1.9 1.9v4.1H19a.1.1 0 00.1-.1V8.406A3.505 3.505 0 0015.595 4.9H5zm10.1 14.2V15a.1.1 0 00-.1-.1H9a.1.1 0 00-.1.1v4.1h6.2z"
  }));
};

var _default = Save;
exports["default"] = _default;