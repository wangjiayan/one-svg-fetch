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

var ChevronsSortUp = function ChevronsSortUp(props) {
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
    d: "M12.001 4.243a.9.9 0 01.637.263l4.285 4.286a.9.9 0 11-1.272 1.273L12 6.415l-3.649 3.65a.9.9 0 11-1.273-1.273l4.286-4.286A.9.9 0 0112 4.243z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 19.758a.9.9 0 01-.636-.264l-4.286-4.286a.9.9 0 011.273-1.273l3.65 3.65 3.649-3.65a.9.9 0 111.272 1.273l-4.285 4.286a.9.9 0 01-.637.264z"
  }));
};

var _default = ChevronsSortUp;
exports["default"] = _default;