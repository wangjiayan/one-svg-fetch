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

var Currency = function Currency(props) {
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
    d: "M12 3.9a8.1 8.1 0 100 16.2 8.1 8.1 0 000-16.2zM2.1 12c0-5.468 4.432-9.9 9.9-9.9s9.9 4.432 9.9 9.9-4.432 9.9-9.9 9.9-9.9-4.432-9.9-9.9zm8.23 2.18a.98.98 0 00.13.78c.144.23.369.436.64.582v-2.979c-.511-.16-1.04-.4-1.501-.82-.431-.37-.824-.954-.889-1.63-.07-.67.158-1.308.502-1.772.497-.635 1.165-1.024 1.888-1.21v-.659a.9.9 0 111.8 0v.61a3.731 3.731 0 012.14 1.238l.054.065a.73.73 0 01-.081 1.036.73.73 0 01-1.178-.343c-.123-.397-.49-.72-.935-.899v3.254c.44.117.918.275 1.377.572.485.311.948.802 1.134 1.472.349 1.33-.475 2.58-1.456 3.053a4.35 4.35 0 01-1.055.375v.567a.9.9 0 01-1.8 0v-.575a3.84 3.84 0 01-.335-.094 3.514 3.514 0 01-1.444-.905 3.372 3.372 0 01-.53-.769 3.092 3.092 0 01-.26-.954l-.017-.136a.938.938 0 011.859-.234c0 .13-.011.261-.044.376zm2.57 1.425c.123-.063.24-.138.346-.22.273-.217.513-.474.638-.724.136-.268.17-.568.098-.786-.06-.212-.245-.436-.523-.605a2.532 2.532 0 00-.56-.25v2.585zm-1.8-4.677V8.373c-.298.21-.544.492-.7.77-.338.572-.3 1.036.213 1.466.134.125.299.23.487.319z"
  }));
};

var _default = Currency;
exports["default"] = _default;