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

var EyeOff = function EyeOff(props) {
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
    d: "M2.936 2.935a.9.9 0 011.273 0l6.608 6.608.006.006 3.629 3.629a.365.365 0 01.006.006l6.608 6.608a.9.9 0 11-1.273 1.273l-2.804-2.805a9.531 9.531 0 01-4.973 1.497H12c-3.36 0-5.938-1.918-7.621-3.713a17.763 17.763 0 01-2.433-3.308 10.505 10.505 0 01-.165-.305l-.01-.02-.003-.005-.001-.002s0-.002.804-.404l-.805.402a.9.9 0 01.012-.828A16.714 16.714 0 015.57 6.84L2.935 4.208a.9.9 0 010-1.273zm3.909 5.181A14.915 14.915 0 003.6 12.002a15.969 15.969 0 002.092 2.81c1.53 1.633 3.663 3.142 6.3 3.145a7.73 7.73 0 003.685-1.007l-1.927-1.927a3.464 3.464 0 01-1.753.512 3.471 3.471 0 01-3.02-5.286L6.844 8.116zm3.485 3.486A1.673 1.673 0 0012.4 13.67l-2.069-2.068zm1.839-5.557l7.33 7.336c.325-.444.627-.906.902-1.383a15.958 15.958 0 00-2.093-2.811c-1.498-1.599-3.576-3.08-6.14-3.142zM21.429 12l.805-.403a.9.9 0 01-.01.827 16.748 16.748 0 01-1.957 2.89.9.9 0 01-1.326.056L9.564 5.985a.9.9 0 01.432-1.513 8.716 8.716 0 012.006-.23h.001-.002c3.36.001 5.938 1.919 7.62 3.714a17.761 17.761 0 012.434 3.308 10.2 10.2 0 01.165.305l.01.019.003.006v.002l.001.001-.805.403z"
  }));
};

var _default = EyeOff;
exports["default"] = _default;