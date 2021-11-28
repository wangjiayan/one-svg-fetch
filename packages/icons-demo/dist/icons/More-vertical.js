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

var MoreVertical = function MoreVertical(props) {
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
    d: "M11.143 12a.857.857 0 101.715 0 .857.857 0 00-1.715 0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.143 18a.857.857 0 101.715 0 .857.857 0 00-1.715 0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.143 6a.857.857 0 101.714 0 .857.857 0 00-1.714 0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.143 12a.857.857 0 101.715 0 .857.857 0 00-1.715 0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.143 18a.857.857 0 101.715 0 .857.857 0 00-1.715 0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.143 6a.857.857 0 101.714 0 .857.857 0 00-1.714 0z"
  }));
};

var _default = MoreVertical;
exports["default"] = _default;