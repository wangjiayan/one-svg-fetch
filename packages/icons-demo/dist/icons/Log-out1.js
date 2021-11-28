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

var LogOut1 = function LogOut1(props) {
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
    d: "M7.6 4.887a.1.1 0 00-.131-.095l-2.5.834a.1.1 0 00-.069.094V18.28a.1.1 0 00.069.095l2.5.833a.1.1 0 00.131-.095V4.887zm-.7-1.802a1.9 1.9 0 012.5 1.802v14.225a1.9 1.9 0 01-2.5 1.803l-2.5-.834a1.9 1.9 0 01-1.3-1.802V5.72a1.9 1.9 0 011.3-1.802l2.5-.833zM10.788 5a.9.9 0 01.9-.9H13.5a1.9 1.9 0 011.9 1.899V8.53a.9.9 0 11-1.8 0V6a.1.1 0 00-.1-.1h-1.812a.9.9 0 01-.9-.9zm3.712 9.627a.9.9 0 01.9.9V18a1.9 1.9 0 01-1.9 1.9h-1.812a.9.9 0 110-1.8H13.5a.1.1 0 00.1-.1v-2.473a.9.9 0 01.9-.9zm4.14-5.275a.9.9 0 10-1.277 1.268l.476.48h-5.85a.9.9 0 100 1.8h5.856l-.483.489a.9.9 0 101.28 1.265l1.998-2.022a.9.9 0 00-.001-1.267L18.64 9.352z"
  }));
};

var _default = LogOut1;
exports["default"] = _default;