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

var ChevronsSortDown = function ChevronsSortDown(props) {
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
    d: "M7.078 13.935a.9.9 0 011.273 0L12 17.585l3.65-3.65a.9.9 0 011.272 1.273l-4.286 4.286a.9.9 0 01-1.272 0l-4.286-4.286a.9.9 0 010-1.273z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 4.243a.9.9 0 01.636.263l4.286 4.286a.9.9 0 11-1.273 1.273L12 6.415l-3.65 3.65a.9.9 0 01-1.272-1.273l4.286-4.286A.9.9 0 0112 4.243z"
  }));
};

var _default = ChevronsSortDown;
exports["default"] = _default;