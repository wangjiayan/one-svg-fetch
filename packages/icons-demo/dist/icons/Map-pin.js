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

var MapPin = function MapPin(props) {
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
    d: "M12 4.399a6.055 6.055 0 00-6.055 6.055c0 2.343 1.528 4.635 3.23 6.433A22.624 22.624 0 0012 19.394a22.613 22.613 0 002.824-2.507c1.703-1.798 3.231-4.09 3.231-6.433A6.056 6.056 0 0012 4.4zm0 16.102l-.5.748-.002-.001-.005-.004-.018-.012a10.691 10.691 0 01-.3-.212 24.414 24.414 0 01-3.305-2.895c-1.775-1.873-3.725-4.604-3.725-7.67a7.855 7.855 0 1115.71 0c0 3.066-1.95 5.797-3.724 7.67a24.408 24.408 0 01-3.54 3.062l-.065.045-.018.012-.006.004H12.5c0 .001 0 .002-.5-.747zm0 0l.5.748a.9.9 0 01-1 0l.5-.748zm0-11.465a1.418 1.418 0 100 2.837 1.418 1.418 0 000-2.837zm-3.218 1.418a3.218 3.218 0 116.437 0 3.218 3.218 0 01-6.437 0z"
  }));
};

var _default = MapPin;
exports["default"] = _default;