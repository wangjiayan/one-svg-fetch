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

var Link = function Link(props) {
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
    d: "M19.294 4.535a4.9 4.9 0 00-6.93 0L10.95 5.95l1.273 1.273 1.414-1.414a3.1 3.1 0 114.384 4.384l-2.829 2.829a3.1 3.1 0 01-4.384 0l-1.272 1.272a4.9 4.9 0 006.93 0l2.828-2.828a4.9 4.9 0 000-6.93zm-5 5a4.9 4.9 0 00-6.93 0l-2.829 2.829a4.9 4.9 0 106.93 6.93l1.414-1.415-1.273-1.273-1.414 1.414a3.1 3.1 0 01-4.384-4.384l2.828-2.828a3.1 3.1 0 014.917.711l1.581-.86c-.22-.404-.5-.783-.84-1.124z"
  }));
};

var _default = Link;
exports["default"] = _default;