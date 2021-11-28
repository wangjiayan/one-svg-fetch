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

var Package = function Package(props) {
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
    d: "M11.594 4.971l-1.63.815 5.88 2.94 1.931-.966-5.577-2.789a.683.683 0 00-.604 0zm7.298 4.243v7.047a.68.68 0 01-.377.608h-.002l-5.717 2.86v-7.467l3.442-1.721.018-.01 2.636-1.317zm-5.06.518l-5.88-2.94-1.936.968 5.88 2.94 1.935-.968zm-2.836 2.53L4.9 9.214v7.046a.68.68 0 00.372.61l.002.001 5.722 2.861v-7.47zm-.213 9.376L4.466 18.48l-.002-.002A2.479 2.479 0 013.1 16.252V8.737a2.48 2.48 0 011.376-2.22l2.999-1.499a.903.903 0 01.143-.072l3.173-1.586.002-.001a2.48 2.48 0 012.206 0l.002.001 6.315 3.157a2.48 2.48 0 011.376 2.22v7.524a2.482 2.482 0 01-1.375 2.219h-.001L13 21.639a2.48 2.48 0 01-2.218 0z"
  }));
};

var _default = Package;
exports["default"] = _default;