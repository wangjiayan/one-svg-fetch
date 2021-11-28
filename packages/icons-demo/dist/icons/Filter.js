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

var Filter = function Filter(props) {
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
    d: "M2.611 3.907a.9.9 0 01.817-.521H20.57a.9.9 0 01.687 1.48l-6.645 7.858v7.847a.9.9 0 01-1.302.805l-3.429-1.714a.9.9 0 01-.497-.805v-6.133L2.74 4.867a.9.9 0 01-.13-.96zm2.757 1.279l5.604 6.627a.9.9 0 01.213.581v5.907l1.628.814v-6.72a.9.9 0 01.213-.582l5.605-6.627H5.368z"
  }));
};

var _default = Filter;
exports["default"] = _default;