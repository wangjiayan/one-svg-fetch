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

var Calculation = function Calculation(props) {
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
    d: "M7.053 3.564a.9.9 0 01.9.9v1.85h2.1a.9.9 0 010 1.8h-2.1v1.993a.9.9 0 11-1.8 0V8.114h-2.1a.9.9 0 010-1.8h2.1v-1.85a.9.9 0 01.9-.9z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.563 6.335a.9.9 0 000 1.8h5.99a.9.9 0 100-1.8h-5.99z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8.092 13.736a1.072 1.072 0 11-2.143 0 1.072 1.072 0 012.143 0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3.07 16.441a.9.9 0 01.9-.9h6a.9.9 0 110 1.8h-6a.9.9 0 01-.9-.9z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.02 20.217a1.072 1.072 0 100-2.143 1.072 1.072 0 000 2.143z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.612 19.583a.875.875 0 01-.014-1.258l1.808-1.808-1.95-1.949a.875.875 0 01.015-1.258.925.925 0 011.287.015l1.92 1.92 1.92-1.92a.925.925 0 011.287-.015c.36.343.366.907.015 1.258l-1.95 1.95 1.809 1.808a.875.875 0 01-.015 1.258.925.925 0 01-1.287-.015l-1.779-1.78-1.779 1.78a.925.925 0 01-1.287.014z"
  }));
};

var _default = Calculation;
exports["default"] = _default;