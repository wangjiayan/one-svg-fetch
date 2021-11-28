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

var HelpCircle = function HelpCircle(props) {
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
    d: "M4.917 4.969C6.896 2.989 9.257 2 12 2c2.743 0 5.096.98 7.057 2.943C21.02 6.905 22 9.257 22 12c0 2.743-.98 5.096-2.943 7.057C17.096 21.02 14.743 22 12 22c-2.743 0-5.095-.98-7.057-2.943C2.98 17.096 2 14.743 2 12c0-2.743.972-5.087 2.917-7.031zm12.97 1.146C16.253 4.483 14.291 3.667 12 3.667c-2.292 0-4.254.816-5.886 2.448C4.483 7.747 3.667 9.709 3.667 12c0 2.292.816 4.254 2.448 5.886 1.632 1.632 3.594 2.448 5.886 2.448 2.292 0 4.253-.816 5.885-2.448 1.632-1.632 2.448-3.594 2.448-5.886 0-2.291-.816-4.253-2.448-5.885zM9.656 7.99c.66-.66 1.441-.99 2.344-.99.903 0 1.684.33 2.344.99.66.66.99 1.44.99 2.343 0 .66-.2 1.268-.6 1.823-.4.556-.929.955-1.588 1.198l-.313.104V14.5h-1.666v-1.042c0-.833.381-1.371 1.145-1.614l.313-.104c.694-.209 1.042-.678 1.042-1.407 0-.451-.165-.842-.495-1.172-.33-.33-.72-.494-1.172-.494-.452 0-.842.165-1.172.494-.33.33-.495.72-.495 1.172H8.667c0-.902.33-1.684.99-2.343zm1.51 7.343h1.667V17h-1.666v-1.667z"
  }));
};

var _default = HelpCircle;
exports["default"] = _default;