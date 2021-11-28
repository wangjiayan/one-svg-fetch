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

var MoreHorizontal = function MoreHorizontal(props) {
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
    d: "M6 10.393a1.607 1.607 0 100 3.214 1.607 1.607 0 000-3.214z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 10.393a1.607 1.607 0 100 3.214 1.607 1.607 0 000-3.214z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 10.393a1.607 1.607 0 100 3.214 1.607 1.607 0 000-3.214z"
  }));
};

var _default = MoreHorizontal;
exports["default"] = _default;