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

var Truck = function Truck(props) {
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
    d: "M2.6 5.393c0-1.05.85-1.9 1.9-1.9h10.06c1.05 0 1.9.85 1.9 1.9V6.8h1.464a.9.9 0 01.709.346l2.576 3.297a.9.9 0 01.19.554v6.106a.9.9 0 11-1.8 0v-5.796L17.486 8.6H15.56a.9.9 0 01-.9-.9V5.393a.1.1 0 00-.1-.1H4.5a.1.1 0 00-.1.1v11.71a.9.9 0 11-1.8 0V5.393zm13.206 4.201a.9.9 0 01.9.9v.484h.505a.9.9 0 010 1.8h-1.405a.9.9 0 01-.9-.9v-1.384a.9.9 0 01.9-.9zM7.4 17.855a.852.852 0 111.704 0 .852.852 0 01-1.704 0zm.852-2.652a2.652 2.652 0 102.492 3.559h2.464a2.653 2.653 0 10-.005-1.8h-2.454a2.653 2.653 0 00-2.497-1.759zm6.604 2.765a.912.912 0 000-.22.852.852 0 110 .22z"
  }));
};

var _default = Truck;
exports["default"] = _default;