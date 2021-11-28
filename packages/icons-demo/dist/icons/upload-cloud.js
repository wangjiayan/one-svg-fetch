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

var UploadCloud = function UploadCloud(props) {
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
    d: "M9.419 3.049a6.655 6.655 0 013.143.652 7.152 7.152 0 012.54 2.055c.541.693.961 1.48 1.244 2.324h.296c1.078 0 2.116.392 2.95 1.097a5.144 5.144 0 011.668 2.76 5.437 5.437 0 01-.244 3.255 4.99 4.99 0 01-2.069 2.448.9.9 0 01-.917-1.549 3.191 3.191 0 001.316-1.569 3.638 3.638 0 00.161-2.174 3.344 3.344 0 00-1.077-1.796 2.772 2.772 0 00-1.788-.672h-.974a.9.9 0 01-.876-.692 6.038 6.038 0 00-1.108-2.323 5.352 5.352 0 00-1.9-1.54 4.856 4.856 0 00-2.293-.478 4.905 4.905 0 00-2.26.661 5.465 5.465 0 00-1.794 1.693 6.131 6.131 0 00-.95 2.41 6.383 6.383 0 00.112 2.633c.22.856.615 1.641 1.149 2.299a.9.9 0 01-1.397 1.135 7.813 7.813 0 01-1.495-2.986 8.182 8.182 0 01-.145-3.377 7.931 7.931 0 011.232-3.118c.625-.93 1.44-1.7 2.389-2.248a6.704 6.704 0 013.087-.9zm2.586 8.55a.9.9 0 01.662.29l3.091 3.36a.9.9 0 01-1.324 1.219l-1.53-1.662v5.251a.9.9 0 01-1.8 0v-5.25l-1.528 1.66A.9.9 0 118.25 15.25l3.091-3.36a.9.9 0 01.663-.29z"
  }));
};

var _default = UploadCloud;
exports["default"] = _default;