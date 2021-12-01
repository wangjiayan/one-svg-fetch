'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var _excluded = ["color", "size"];

var ChevronsSortDown = function ChevronsSortDown(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.078 13.935a.9.9 0 011.273 0L12 17.585l3.65-3.65a.9.9 0 011.272 1.273l-4.286 4.286a.9.9 0 01-1.272 0l-4.286-4.286a.9.9 0 010-1.273z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 4.243a.9.9 0 01.636.263l4.286 4.286a.9.9 0 11-1.273 1.273L12 6.415l-3.65 3.65a.9.9 0 01-1.272-1.273l4.286-4.286A.9.9 0 0112 4.243z"
  }));
};

var _excluded$1 = ["color", "size"];

var ChevronsSortUp = function ChevronsSortUp(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$1);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.001 4.243a.9.9 0 01.637.263l4.285 4.286a.9.9 0 11-1.272 1.273L12 6.415l-3.649 3.65a.9.9 0 11-1.273-1.273l4.286-4.286A.9.9 0 0112 4.243z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 19.758a.9.9 0 01-.636-.264l-4.286-4.286a.9.9 0 011.273-1.273l3.65 3.65 3.649-3.65a.9.9 0 111.272 1.273l-4.285 4.286a.9.9 0 01-.637.264z"
  }));
};

var _excluded$2 = ["color", "size"];

var ChevronDown = function ChevronDown(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$2);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.363 7.863a.9.9 0 011.273 0L12 14.227l6.363-6.364a.9.9 0 011.273 1.273l-7 7a.9.9 0 01-1.273 0l-7-7a.9.9 0 010-1.273z"
  }));
};

var _excluded$3 = ["color", "size"];

var ChevronRight = function ChevronRight(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$3);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.864 4.364a.9.9 0 011.272 0l7 7a.9.9 0 010 1.272l-7 7a.9.9 0 11-1.272-1.272L14.227 12 7.864 5.636a.9.9 0 010-1.272z"
  }));
};

var _excluded$4 = ["color", "size"];

var ChevronUp = function ChevronUp(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$4);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.636 16.136a.9.9 0 01-1.272 0L12 9.773l-6.364 6.363a.9.9 0 11-1.272-1.272l7-7a.9.9 0 011.272 0l7 7a.9.9 0 010 1.272z"
  }));
};

var _excluded$5 = ["color", "size"];

var ChevronLeft = function ChevronLeft(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$5);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.136 4.364a.9.9 0 010 1.272L9.773 12l6.363 6.364a.9.9 0 11-1.272 1.272l-7-7a.9.9 0 010-1.272l7-7a.9.9 0 011.272 0z"
  }));
};

var _excluded$6 = ["color", "size"];

var ChevronLeftOver = function ChevronLeftOver(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$6);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.972 5.637A.9.9 0 1016.7 4.364l-7 7a.9.9 0 000 1.273l7 7a.9.9 0 101.273-1.273L11.608 12l6.364-6.363zM7.564 5.9a.9.9 0 10-1.8 0v12.2a.9.9 0 001.8 0V5.9z"
  }));
};

var _excluded$7 = ["color", "size"];

var ChevronRightOver = function ChevronRightOver(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$7);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.027 18.364A.9.9 0 107.3 19.637l7-7a.9.9 0 000-1.273l-7-7a.9.9 0 00-1.273 1.273l6.364 6.364-6.364 6.363zm10.408-.264a.9.9 0 101.8 0V5.9a.9.9 0 10-1.8 0v12.2z"
  }));
};

var _excluded$8 = ["color", "size"];

var ArrowRight = function ArrowRight(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$8);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.364 18.636a.9.9 0 010-1.272l4.463-4.464H6a.9.9 0 010-1.8h9.827l-4.463-4.464a.9.9 0 111.272-1.272l6 6a.9.9 0 010 1.272l-6 6a.9.9 0 01-1.272 0z"
  }));
};

var _excluded$9 = ["color", "size"];

var ArrowLeft = function ArrowLeft(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$9);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.636 5.364a.9.9 0 010 1.272L8.173 11.1H18a.9.9 0 010 1.8H8.173l4.463 4.464a.9.9 0 11-1.272 1.272l-6-6a.9.9 0 010-1.272l6-6a.9.9 0 011.272 0z"
  }));
};

var _excluded$a = ["color", "size"];

var Min = function Min(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$a);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.243 12a.9.9 0 01.9-.9h13.714a.9.9 0 010 1.8H5.143a.9.9 0 01-.9-.9z"
  }));
};

var _excluded$b = ["color", "size"];

var Plus = function Plus(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$b);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 4.243a.9.9 0 01.9.9V11.1h5.957a.9.9 0 010 1.8H12.9v5.957a.9.9 0 01-1.8 0V12.9H5.143a.9.9 0 110-1.8H11.1V5.143a.9.9 0 01.9-.9z"
  }));
};

var _excluded$c = ["color", "size"];

var Cross = function Cross(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$c);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.364 5.364a.9.9 0 011.272 0L12 10.727l5.364-5.363a.9.9 0 011.272 1.272L13.273 12l5.363 5.364a.9.9 0 11-1.272 1.272L12 13.273l-5.364 5.363a.9.9 0 11-1.272-1.272L10.727 12 5.364 6.636a.9.9 0 010-1.272z"
  }));
};

var _excluded$d = ["color", "size"];

var Tick = function Tick(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$d);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.493 6.221a.9.9 0 010 1.273l-9.428 9.428a.9.9 0 01-1.273 0l-4.286-4.285a.9.9 0 011.273-1.273l3.65 3.65L18.22 6.22a.9.9 0 011.272 0z"
  }));
};

var _excluded$e = ["color", "size"];

var AlertTriangle = function AlertTriangle(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$e);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.9 9.823a.9.9 0 00-1.8 0v2.628a.9.9 0 101.8 0V9.823z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17.248a1.248 1.248 0 100-2.496 1.248 1.248 0 000 2.496z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3.297a2.614 2.614 0 00-2.235 1.258l-.003.005-7.26 12.12-.007.012a2.614 2.614 0 002.235 3.921h14.54a2.615 2.615 0 002.235-3.921l-.007-.012-7.26-12.12-.003-.005A2.614 2.614 0 0012 3.297zm-.4 1.905a.814.814 0 011.095.285l.001.002 7.253 12.108a.814.814 0 01-.695 1.216H4.746a.813.813 0 01-.695-1.216L11.304 5.49v-.002a.814.814 0 01.296-.285z"
  }));
};

var _excluded$f = ["color", "size"];

var Info = function Info(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$f);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.899 12.567a.9.9 0 00-1.8 0v3.429a.9.9 0 101.8 0v-3.429z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 10.252a1.264 1.264 0 100-2.53 1.264 1.264 0 000 2.53z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.999 2.528a9.471 9.471 0 100 18.943 9.471 9.471 0 000-18.943zM4.327 12a7.671 7.671 0 1115.343 0 7.671 7.671 0 01-15.343 0z"
  }));
};

var _excluded$g = ["color", "size"];

var HelpCircle = function HelpCircle(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$g);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.917 4.969C6.896 2.989 9.257 2 12 2c2.743 0 5.096.98 7.057 2.943C21.02 6.905 22 9.257 22 12c0 2.743-.98 5.096-2.943 7.057C17.096 21.02 14.743 22 12 22c-2.743 0-5.095-.98-7.057-2.943C2.98 17.096 2 14.743 2 12c0-2.743.972-5.087 2.917-7.031zm12.97 1.146C16.253 4.483 14.291 3.667 12 3.667c-2.292 0-4.254.816-5.886 2.448C4.483 7.747 3.667 9.709 3.667 12c0 2.292.816 4.254 2.448 5.886 1.632 1.632 3.594 2.448 5.886 2.448 2.292 0 4.253-.816 5.885-2.448 1.632-1.632 2.448-3.594 2.448-5.886 0-2.291-.816-4.253-2.448-5.885zM9.656 7.99c.66-.66 1.441-.99 2.344-.99.903 0 1.684.33 2.344.99.66.66.99 1.44.99 2.343 0 .66-.2 1.268-.6 1.823-.4.556-.929.955-1.588 1.198l-.313.104V14.5h-1.666v-1.042c0-.833.381-1.371 1.145-1.614l.313-.104c.694-.209 1.042-.678 1.042-1.407 0-.451-.165-.842-.495-1.172-.33-.33-.72-.494-1.172-.494-.452 0-.842.165-1.172.494-.33.33-.495.72-.495 1.172H8.667c0-.902.33-1.684.99-2.343zm1.51 7.343h1.667V17h-1.666v-1.667z"
  }));
};

var _excluded$h = ["color", "size"];

var Edit = function Edit(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$h);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.792 2.792a.9.9 0 011.273 0l3.428 3.429a.9.9 0 010 1.273l-9.428 9.428a.9.9 0 01-.637.264H6a.9.9 0 01-.9-.9v-3.429a.9.9 0 01.263-.636l9.429-9.429zM6.9 13.23v2.156h2.155l8.53-8.529-2.157-2.155L6.9 13.23zm-2.657 7.342a.9.9 0 01.9-.9h14.571a.9.9 0 110 1.8H5.143a.9.9 0 01-.9-.9z"
  }));
};

var _excluded$i = ["color", "size"];

var Carrier = function Carrier(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$i);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.178 7.723C2.251 7 2.642 6.28 3.49 5.79c.848-.49 1.667-.468 2.328-.17.61.275 1.028.755 1.243 1.127l5.18 8.973a3.478 3.478 0 013.352.898l4.89-2.823a.9.9 0 01.9 1.558l-4.89 2.824a3.473 3.473 0 01-6.36 2.633 3.473 3.473 0 01.55-4.19l-5.18-8.973a1.02 1.02 0 00-.424-.386c-.14-.063-.35-.108-.69.088-.34.196-.405.4-.42.553-.021.21.052.437.123.56a.9.9 0 01-1.56.9 2.814 2.814 0 01-.354-1.64zm10.125 9.905a1.671 1.671 0 101.671 2.894 1.671 1.671 0 00-1.671-2.894z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.819 5.902a1.4 1.4 0 01.473-1.976L13.25 1.64a1.4 1.4 0 011.873.449l5.305 8.153a1.4 1.4 0 01-.474 1.976l-3.958 2.285a1.4 1.4 0 01-1.873-.45L8.819 5.903zm1.738-.628L12.5 8.259l3.264-1.884-1.943-2.986-3.264 1.885zm6.19 2.612L13.483 9.77l1.942 2.985 3.264-1.884-1.942-2.985z"
  }));
};

var _excluded$j = ["color", "size"];

var Key = function Key(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$j);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.173 9.005a1.248 1.248 0 11-2.495 0 1.248 1.248 0 012.495 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.876 2.476a6.633 6.633 0 00-6.171 9.071l-1.312 1.306-.01-.011a1.4 1.4 0 00-1.98 0l-1.794 1.793a1.4 1.4 0 000 1.98l.01.01-.51.51a1.4 1.4 0 000 1.98l1.79 1.79a1.4 1.4 0 001.988-.008l5.536-5.623a6.633 6.633 0 102.452-12.799zm-4.834 6.633a4.833 4.833 0 112.599 4.287l-.59-.308-6.164 6.259-1.222-1.222 1.5-1.5-1-1 1.227-1.228.999 1 3.494-3.48-.304-.587a4.81 4.81 0 01-.539-2.22z"
  }));
};

var _excluded$k = ["color", "size"];

var Currency = function Currency(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$k);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3.9a8.1 8.1 0 100 16.2 8.1 8.1 0 000-16.2zM2.1 12c0-5.468 4.432-9.9 9.9-9.9s9.9 4.432 9.9 9.9-4.432 9.9-9.9 9.9-9.9-4.432-9.9-9.9zm8.23 2.18a.98.98 0 00.13.78c.144.23.369.436.64.582v-2.979c-.511-.16-1.04-.4-1.501-.82-.431-.37-.824-.954-.889-1.63-.07-.67.158-1.308.502-1.772.497-.635 1.165-1.024 1.888-1.21v-.659a.9.9 0 111.8 0v.61a3.731 3.731 0 012.14 1.238l.054.065a.73.73 0 01-.081 1.036.73.73 0 01-1.178-.343c-.123-.397-.49-.72-.935-.899v3.254c.44.117.918.275 1.377.572.485.311.948.802 1.134 1.472.349 1.33-.475 2.58-1.456 3.053a4.35 4.35 0 01-1.055.375v.567a.9.9 0 01-1.8 0v-.575a3.84 3.84 0 01-.335-.094 3.514 3.514 0 01-1.444-.905 3.372 3.372 0 01-.53-.769 3.092 3.092 0 01-.26-.954l-.017-.136a.938.938 0 011.859-.234c0 .13-.011.261-.044.376zm2.57 1.425c.123-.063.24-.138.346-.22.273-.217.513-.474.638-.724.136-.268.17-.568.098-.786-.06-.212-.245-.436-.523-.605a2.532 2.532 0 00-.56-.25v2.585zm-1.8-4.677V8.373c-.298.21-.544.492-.7.77-.338.572-.3 1.036.213 1.466.134.125.299.23.487.319z"
  }));
};

var _excluded$l = ["color", "size"];

var ExternalLink = function ExternalLink(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$l);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 5.186a.9.9 0 110-1.8h4.714a.9.9 0 01.9.9V9a.9.9 0 11-1.8 0V6.458l-7.892 7.893a.9.9 0 11-1.273-1.273l7.892-7.892H15zM6 7.757a.814.814 0 00-.815.814V18a.814.814 0 00.814.814h9.429a.814.814 0 00.814-.814v-5.143a.9.9 0 111.8 0V18a2.614 2.614 0 01-2.614 2.614H5.999A2.614 2.614 0 013.385 18V8.57A2.614 2.614 0 016 5.957h5.143a.9.9 0 110 1.8H6z"
  }));
};

var _excluded$m = ["color", "size"];

var Share = function Share(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$m);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.363 2.792a.9.9 0 011.273 0l3.429 3.429a.9.9 0 11-1.273 1.273L12.9 5.6v8.97a.9.9 0 01-1.8 0v-8.97L9.208 7.494A.9.9 0 117.935 6.22l3.428-3.429zM4.143 11.1a.9.9 0 01.9.9v6.857a.814.814 0 00.814.815h12.286a.814.814 0 00.814-.815V12a.9.9 0 011.8 0v6.857a2.615 2.615 0 01-2.614 2.615H5.857a2.615 2.615 0 01-2.614-2.615V12a.9.9 0 01.9-.9z"
  }));
};

var _excluded$n = ["color", "size"];

var Import = function Import(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$n);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.365 14.208a.9.9 0 001.272 0l3.43-3.429a.9.9 0 10-1.274-1.273L12.901 11.4v-7.97a.9.9 0 10-1.8 0v7.97L9.21 9.505a.9.9 0 00-1.273 1.273l3.429 3.429z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.043 12a.9.9 0 10-1.8 0v6.857a2.614 2.614 0 002.614 2.614h12.286a2.614 2.614 0 002.614-2.614V12a.9.9 0 00-1.8 0v6.857a.814.814 0 01-.814.814H5.857a.814.814 0 01-.814-.814V12z"
  }));
};

var _excluded$o = ["color", "size"];

var DollarSign = function DollarSign(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$o);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1.671a.9.9 0 01.9.9V5.1h3.386a.9.9 0 110 1.8H12.9v4.2h1.243a3.9 3.9 0 110 7.8H12.9v2.528a.9.9 0 01-1.8 0V18.9H6.857a.9.9 0 010-1.8H11.1v-4.2H9.857a3.9 3.9 0 010-7.8H11.1V2.57a.9.9 0 01.9-.9zM11.1 6.9H9.857a2.1 2.1 0 100 4.2H11.1V6.9zm1.8 6v4.2h1.243a2.1 2.1 0 000-4.2H12.9z"
  }));
};

var _excluded$p = ["color", "size"];

var Loader = function Loader(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$p);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.1 4a.9.9 0 01.9-.9 8.901 8.901 0 010 17.8 8.9 8.9 0 01-8.744-10.568.9.9 0 111.769.336A7.1 7.1 0 1012 4.9a.9.9 0 01-.9-.9z"
  }));
};

var _excluded$q = ["color", "size"];

var Clock = function Clock(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$q);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 4.329a7.671 7.671 0 100 15.343 7.671 7.671 0 000-15.343zM2.527 12a9.471 9.471 0 1118.943 0 9.471 9.471 0 01-18.943 0zm9.471-6.043a.9.9 0 01.9.9v4.587l2.931 1.465a.9.9 0 11-.805 1.61l-3.428-1.714a.9.9 0 01-.498-.805V6.857a.9.9 0 01.9-.9z"
  }));
};

var _excluded$r = ["color", "size"];

var Calendar = function Calendar(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$r);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.57 2.529a.9.9 0 01.9.9v.814h5.058v-.814a.9.9 0 011.8 0v.814h1.671a2.614 2.614 0 012.615 2.614v12a2.614 2.614 0 01-2.615 2.615H6a2.614 2.614 0 01-2.614-2.615v-12A2.614 2.614 0 016 4.243h1.672v-.814a.9.9 0 01.9-.9zm-.9 3.514H6a.814.814 0 00-.815.814v2.529h13.629V6.857a.814.814 0 00-.815-.814h-1.671v.814a.9.9 0 11-1.8 0v-.814H9.471v.814a.9.9 0 11-1.8 0v-.814zm11.144 5.143H5.185v7.671c0 .45.365.815.814.815h12c.45 0 .815-.365.815-.815v-7.671z"
  }));
};

var _excluded$s = ["color", "size"];

var Filter = function Filter(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$s);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.611 3.907a.9.9 0 01.817-.521H20.57a.9.9 0 01.687 1.48l-6.645 7.858v7.847a.9.9 0 01-1.302.805l-3.429-1.714a.9.9 0 01-.497-.805v-6.133L2.74 4.867a.9.9 0 01-.13-.96zm2.757 1.279l5.604 6.627a.9.9 0 01.213.581v5.907l1.628.814v-6.72a.9.9 0 01.213-.582l5.605-6.627H5.368z"
  }));
};

var _excluded$t = ["color", "size"];

var MoreHorizontal = function MoreHorizontal(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$t);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 10.393a1.607 1.607 0 100 3.214 1.607 1.607 0 000-3.214z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 10.393a1.607 1.607 0 100 3.214 1.607 1.607 0 000-3.214z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 10.393a1.607 1.607 0 100 3.214 1.607 1.607 0 000-3.214z"
  }));
};

var _excluded$u = ["color", "size"];

var Calculation = function Calculation(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$u);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.053 3.564a.9.9 0 01.9.9v1.85h2.1a.9.9 0 010 1.8h-2.1v1.993a.9.9 0 11-1.8 0V8.114h-2.1a.9.9 0 010-1.8h2.1v-1.85a.9.9 0 01.9-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.563 6.335a.9.9 0 000 1.8h5.99a.9.9 0 100-1.8h-5.99z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.092 13.736a1.072 1.072 0 11-2.143 0 1.072 1.072 0 012.143 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.07 16.441a.9.9 0 01.9-.9h6a.9.9 0 110 1.8h-6a.9.9 0 01-.9-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.02 20.217a1.072 1.072 0 100-2.143 1.072 1.072 0 000 2.143z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.612 19.583a.875.875 0 01-.014-1.258l1.808-1.808-1.95-1.949a.875.875 0 01.015-1.258.925.925 0 011.287.015l1.92 1.92 1.92-1.92a.925.925 0 011.287-.015c.36.343.366.907.015 1.258l-1.95 1.95 1.809 1.808a.875.875 0 01-.015 1.258.925.925 0 01-1.287-.015l-1.779-1.78-1.779 1.78a.925.925 0 01-1.287.014z"
  }));
};

var _excluded$v = ["color", "size"];

var MoreVertical = function MoreVertical(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$v);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.143 12a.857.857 0 101.715 0 .857.857 0 00-1.715 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.143 18a.857.857 0 101.715 0 .857.857 0 00-1.715 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.143 6a.857.857 0 101.714 0 .857.857 0 00-1.714 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.143 12a.857.857 0 101.715 0 .857.857 0 00-1.715 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.143 18a.857.857 0 101.715 0 .857.857 0 00-1.715 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.143 6a.857.857 0 101.714 0 .857.857 0 00-1.714 0z"
  }));
};

var _excluded$w = ["color", "size"];

var Folder = function Folder(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$w);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.142 5.186A.814.814 0 004.328 6v12a.814.814 0 00.814.815h13.714a.814.814 0 00.815-.815V8.572a.814.814 0 00-.815-.814h-7.714a.9.9 0 01-.749-.401l-1.447-2.17H5.142zM3.293 4.152a2.614 2.614 0 011.849-.766h4.286a.9.9 0 01.749.4l1.447 2.172h7.232a2.614 2.614 0 012.615 2.614V18a2.614 2.614 0 01-2.615 2.615H5.142A2.614 2.614 0 012.528 18V6c0-.693.275-1.358.765-1.848z"
  }));
};

var _excluded$x = ["color", "size"];

var Language = function Language(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$x);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.382 11.1h3.337a14.015 14.015 0 012.235-6.495A7.679 7.679 0 004.382 11.1zm7.62-6.272A12.215 12.215 0 009.525 11.1h4.95a12.215 12.215 0 00-2.475-6.272zm2.474 8.072a12.215 12.215 0 01-2.475 6.272A12.215 12.215 0 019.526 12.9h4.95zm-6.757 0H4.382a7.679 7.679 0 005.572 6.495A14.015 14.015 0 017.719 12.9zm6.33 6.495a14.016 14.016 0 002.234-6.495h3.337a7.679 7.679 0 01-5.572 6.495zM19.62 11.1h-3.337a14.015 14.015 0 00-2.235-6.495A7.679 7.679 0 0119.62 11.1zM2.53 12a9.471 9.471 0 1118.943 0A9.471 9.471 0 012.53 12z"
  }));
};

var _excluded$y = ["color", "size"];

var Eye = function Eye(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$y);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.6 12a15.963 15.963 0 002.094 2.813c1.53 1.633 3.666 3.144 6.307 3.144 2.64 0 4.776-1.51 6.307-3.144A15.955 15.955 0 0020.402 12a15.958 15.958 0 00-2.094-2.813c-1.531-1.634-3.667-3.144-6.307-3.144-2.64 0-4.776 1.51-6.308 3.144A15.966 15.966 0 003.6 12zm17.83 0l.804-.403-.001-.003-.003-.006-.01-.02a16 16 0 00-.664-1.129 17.765 17.765 0 00-1.934-2.483C17.939 6.16 15.36 4.243 12 4.243c-3.36 0-5.938 1.918-7.621 3.713a17.766 17.766 0 00-2.433 3.308 10.693 10.693 0 00-.165.305l-.01.019-.003.006-.001.002.804.404-.805-.403a.9.9 0 000 .805L2.572 12l-.805.402.001.002.001.002.003.006.01.019a7.891 7.891 0 00.165.305 17.763 17.763 0 002.433 3.308c1.683 1.795 4.261 3.713 7.62 3.713 3.36 0 5.939-1.918 7.622-3.713a17.762 17.762 0 002.433-3.308 10.41 10.41 0 00.165-.305l.01-.02.003-.005v-.002s.001-.002-.804-.404zm0 0l.804.402a.901.901 0 000-.805L21.43 12zM12 10.328a1.671 1.671 0 100 3.343 1.671 1.671 0 000-3.343zM8.53 12a3.471 3.471 0 116.942 0 3.471 3.471 0 01-6.943 0z"
  }));
};

var _excluded$z = ["color", "size"];

var EyeOff = function EyeOff(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$z);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.936 2.935a.9.9 0 011.273 0l6.608 6.608.006.006 3.629 3.629a.365.365 0 01.006.006l6.608 6.608a.9.9 0 11-1.273 1.273l-2.804-2.805a9.531 9.531 0 01-4.973 1.497H12c-3.36 0-5.938-1.918-7.621-3.713a17.763 17.763 0 01-2.433-3.308 10.505 10.505 0 01-.165-.305l-.01-.02-.003-.005-.001-.002s0-.002.804-.404l-.805.402a.9.9 0 01.012-.828A16.714 16.714 0 015.57 6.84L2.935 4.208a.9.9 0 010-1.273zm3.909 5.181A14.915 14.915 0 003.6 12.002a15.969 15.969 0 002.092 2.81c1.53 1.633 3.663 3.142 6.3 3.145a7.73 7.73 0 003.685-1.007l-1.927-1.927a3.464 3.464 0 01-1.753.512 3.471 3.471 0 01-3.02-5.286L6.844 8.116zm3.485 3.486A1.673 1.673 0 0012.4 13.67l-2.069-2.068zm1.839-5.557l7.33 7.336c.325-.444.627-.906.902-1.383a15.958 15.958 0 00-2.093-2.811c-1.498-1.599-3.576-3.08-6.14-3.142zM21.429 12l.805-.403a.9.9 0 01-.01.827 16.748 16.748 0 01-1.957 2.89.9.9 0 01-1.326.056L9.564 5.985a.9.9 0 01.432-1.513 8.716 8.716 0 012.006-.23h.001-.002c3.36.001 5.938 1.919 7.62 3.714a17.761 17.761 0 012.434 3.308 10.2 10.2 0 01.165.305l.01.019.003.006v.002l.001.001-.805.403z"
  }));
};

var _excluded$A = ["color", "size"];

var Search = function Search(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$A);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.142 5.186a5.957 5.957 0 104.13 10.25.913.913 0 01.163-.162 5.957 5.957 0 00-4.292-10.088zm6.085 10.77a7.757 7.757 0 10-1.273 1.273l3.123 3.122a.9.9 0 101.273-1.273l-3.123-3.123z"
  }));
};

var _excluded$B = ["color", "size"];

var Menu = function Menu(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$B);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.385 6.857a.9.9 0 01.9-.9h15.429a.9.9 0 110 1.8H4.285a.9.9 0 01-.9-.9zm0 5.143a.9.9 0 01.9-.9h15.429a.9.9 0 110 1.8H4.285a.9.9 0 01-.9-.9zm0 5.143a.9.9 0 01.9-.9h15.429a.9.9 0 010 1.8H4.285a.9.9 0 01-.9-.9z"
  }));
};

var _excluded$C = ["color", "size"];

var Trash = function Trash(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$C);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.283 4.4a.826.826 0 00-.581.237.791.791 0 00-.236.563V6h5.068v-.8a.791.791 0 00-.236-.563.826.826 0 00-.58-.237h-3.435zM16.334 6v-.8c0-.692-.278-1.355-.77-1.842a2.626 2.626 0 00-1.847-.758h-3.434c-.691 0-1.356.272-1.848.758a2.591 2.591 0 00-.77 1.842V6H4.274a.9.9 0 100 1.8h.817v11c0 .692.278 1.355.77 1.842a2.626 2.626 0 001.847.758h8.586c.691 0 1.356-.272 1.847-.758.492-.487.77-1.15.77-1.842v-11h.817a.9.9 0 000-1.8h-3.393zM6.89 7.8v11c0 .21.084.412.236.563a.826.826 0 00.581.237h8.586c.22 0 .428-.087.581-.238a.792.792 0 00.236-.562v-11H6.89zm3.393 2.45a.9.9 0 01.9.9v5.1a.9.9 0 11-1.8 0v-5.1a.9.9 0 01.9-.9zm3.434 0a.9.9 0 01.9.9v5.1a.9.9 0 01-1.8 0v-5.1a.9.9 0 01.9-.9z"
  }));
};

var _excluded$D = ["color", "size"];

var FileText = function FileText(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$D);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.008 3.294a2.614 2.614 0 011.849-.765h6.857a.9.9 0 01.636.263l5.143 5.143a.9.9 0 01.264.637v10.285a2.615 2.615 0 01-2.614 2.615H6.857a2.615 2.615 0 01-2.614-2.615V5.143c0-.693.275-1.358.765-1.849zM6.857 4.33a.814.814 0 00-.814.814v13.714a.814.814 0 00.814.815h10.286a.814.814 0 00.814-.815V9.472h-4.243a.9.9 0 01-.9-.9V4.329H6.857zM14.614 5.6l2.07 2.07h-2.07v-2.07zM7.671 9.43a.9.9 0 01.9-.9h1.714a.9.9 0 110 1.8H8.571a.9.9 0 01-.9-.9zm0 3.428a.9.9 0 01.9-.9h6.857a.9.9 0 010 1.8H8.571a.9.9 0 01-.9-.9zm0 3.429a.9.9 0 01.9-.9h6.857a.9.9 0 010 1.8H8.571a.9.9 0 01-.9-.9z"
  }));
};

var _excluded$E = ["color", "size"];

var Shopping = function Shopping(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$E);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.543 2.717a.9.9 0 01.72-.36h10.285a.9.9 0 01.72.36l2.572 3.428a.9.9 0 01.18.54v12a2.615 2.615 0 01-2.614 2.615h-12a2.614 2.614 0 01-2.615-2.615v-12a.9.9 0 01.18-.54l2.572-3.428zm1.17 1.44L6.49 5.785H18.32l-1.221-1.628H7.713zM19.22 7.585H5.591v11.1a.814.814 0 00.815.815h12a.814.814 0 00.814-.815v-11.1zM8.977 9.214a.9.9 0 01.9.9 2.528 2.528 0 105.057 0 .9.9 0 111.8 0 4.329 4.329 0 01-8.657 0 .9.9 0 01.9-.9z"
  }));
};

var _excluded$F = ["color", "size"];

var Lock = function Lock(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$F);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 4.329a3.386 3.386 0 00-3.386 3.385v2.529h6.771V7.714A3.386 3.386 0 0012 4.33zm5.185 5.914V7.714a5.186 5.186 0 00-10.371 0v2.529h-.815a2.614 2.614 0 00-2.614 2.614v6A2.614 2.614 0 006 21.472h12a2.614 2.614 0 002.615-2.615v-6a2.614 2.614 0 00-2.615-2.614h-.814zM6 12.043a.814.814 0 00-.814.814v6c0 .45.365.815.814.815h12c.45 0 .815-.365.815-.815v-6a.814.814 0 00-.815-.814H6z"
  }));
};

var _excluded$G = ["color", "size"];

var LogOut = function LogOut(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$G);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 5.186A.814.814 0 005.186 6v12a.814.814 0 00.814.815H9.43a.9.9 0 110 1.8H6A2.614 2.614 0 013.386 18V6A2.614 2.614 0 016 3.386H9.43a.9.9 0 010 1.8H6zm8.793 1.892a.9.9 0 011.272 0l4.286 4.286a.9.9 0 010 1.273l-4.286 4.285a.9.9 0 11-1.272-1.272l2.749-2.75H9.429a.9.9 0 110-1.8h8.113l-2.75-2.749a.9.9 0 010-1.273z"
  }));
};

var _excluded$H = ["color", "size"];

var Email = function Email(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$H);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.432 6.461l7.567 5.297 7.567-5.297a.819.819 0 00-.71-.418H5.142c-.303 0-.57.17-.71.418zM19.67 8.585l-7.156 5.01a.9.9 0 01-1.032 0l-7.155-5.01v8.558a.82.82 0 00.814.814h13.714a.82.82 0 00.815-.814V8.585zM2.528 6.857a2.62 2.62 0 012.614-2.614h13.714a2.62 2.62 0 012.615 2.614v10.286a2.62 2.62 0 01-2.615 2.614H5.142a2.62 2.62 0 01-2.614-2.614V6.857z"
  }));
};

var _excluded$I = ["color", "size"];

var User = function User(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$I);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 5.186a2.529 2.529 0 100 5.057 2.529 2.529 0 000-5.057zM7.67 7.715a4.329 4.329 0 118.657 0 4.329 4.329 0 01-8.657 0zm-2.16 7.225a4.329 4.329 0 013.06-1.268h6.857A4.329 4.329 0 0119.757 18v1.715a.9.9 0 01-1.8 0V18a2.529 2.529 0 00-2.529-2.528H8.571A2.529 2.529 0 006.043 18v1.715a.9.9 0 11-1.8 0V18c0-1.148.456-2.249 1.267-3.06z"
  }));
};

var _excluded$J = ["color", "size"];

var Mobile = function Mobile(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$J);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.9 5.143c0-.45.365-.814.814-.814h8.572c.45 0 .814.364.814.814v13.714c0 .45-.365.815-.814.815H7.714a.814.814 0 01-.814-.815V5.143zm.814-2.614A2.614 2.614 0 005.1 5.143v13.714a2.614 2.614 0 002.614 2.615h8.572a2.614 2.614 0 002.614-2.615V5.143a2.614 2.614 0 00-2.614-2.614H7.714zm4.073 15.006a1.496 1.496 0 100-2.992 1.496 1.496 0 000 2.992z"
  }));
};

var _excluded$K = ["color", "size"];

var LogOut1 = function LogOut1(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$K);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.6 4.887a.1.1 0 00-.131-.095l-2.5.834a.1.1 0 00-.069.094V18.28a.1.1 0 00.069.095l2.5.833a.1.1 0 00.131-.095V4.887zm-.7-1.802a1.9 1.9 0 012.5 1.802v14.225a1.9 1.9 0 01-2.5 1.803l-2.5-.834a1.9 1.9 0 01-1.3-1.802V5.72a1.9 1.9 0 011.3-1.802l2.5-.833zM10.788 5a.9.9 0 01.9-.9H13.5a1.9 1.9 0 011.9 1.899V8.53a.9.9 0 11-1.8 0V6a.1.1 0 00-.1-.1h-1.812a.9.9 0 01-.9-.9zm3.712 9.627a.9.9 0 01.9.9V18a1.9 1.9 0 01-1.9 1.9h-1.812a.9.9 0 110-1.8H13.5a.1.1 0 00.1-.1v-2.473a.9.9 0 01.9-.9zm4.14-5.275a.9.9 0 10-1.277 1.268l.476.48h-5.85a.9.9 0 100 1.8h5.856l-.483.489a.9.9 0 101.28 1.265l1.998-2.022a.9.9 0 00-.001-1.267L18.64 9.352z"
  }));
};

var _excluded$L = ["color", "size"];

var DownloadCloud = function DownloadCloud(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$L);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.424 3.15a7.078 7.078 0 016.902 4.644c.992.026 2.103.166 3.124.913a4.761 4.761 0 01-.072 7.737.9.9 0 01-1.036-1.472 2.962 2.962 0 00.045-4.813c-.722-.528-1.534-.57-2.724-.57a.9.9 0 01-.872-.677 5.278 5.278 0 10-9.066 4.81.9.9 0 11-1.348 1.192A7.078 7.078 0 019.424 3.15zm2.578 8.955a.9.9 0 01.9.9v4.778l1.553-1.553a.9.9 0 111.272 1.273l-3.089 3.089a.9.9 0 01-1.272 0l-3.09-3.09A.9.9 0 019.55 16.23l1.553 1.553v-4.778a.9.9 0 01.9-.9z"
  }));
};

var _excluded$M = ["color", "size"];

var UploadCloud = function UploadCloud(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$M);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.419 3.049a6.655 6.655 0 013.143.652 7.152 7.152 0 012.54 2.055c.541.693.961 1.48 1.244 2.324h.296c1.078 0 2.116.392 2.95 1.097a5.144 5.144 0 011.668 2.76 5.437 5.437 0 01-.244 3.255 4.99 4.99 0 01-2.069 2.448.9.9 0 01-.917-1.549 3.191 3.191 0 001.316-1.569 3.638 3.638 0 00.161-2.174 3.344 3.344 0 00-1.077-1.796 2.772 2.772 0 00-1.788-.672h-.974a.9.9 0 01-.876-.692 6.038 6.038 0 00-1.108-2.323 5.352 5.352 0 00-1.9-1.54 4.856 4.856 0 00-2.293-.478 4.905 4.905 0 00-2.26.661 5.465 5.465 0 00-1.794 1.693 6.131 6.131 0 00-.95 2.41 6.383 6.383 0 00.112 2.633c.22.856.615 1.641 1.149 2.299a.9.9 0 01-1.397 1.135 7.813 7.813 0 01-1.495-2.986 8.182 8.182 0 01-.145-3.377 7.931 7.931 0 011.232-3.118c.625-.93 1.44-1.7 2.389-2.248a6.704 6.704 0 013.087-.9zm2.586 8.55a.9.9 0 01.662.29l3.091 3.36a.9.9 0 01-1.324 1.219l-1.53-1.662v5.251a.9.9 0 01-1.8 0v-5.25l-1.528 1.66A.9.9 0 118.25 15.25l3.091-3.36a.9.9 0 01.663-.29z"
  }));
};

var _excluded$N = ["color", "size"];

var Setting = function Setting(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$N);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.442 3.289a2.9 2.9 0 00-2.9 0L5.18 6.384a2.9 2.9 0 00-1.45 2.512v6.19a2.9 2.9 0 001.45 2.512l5.362 3.095a2.9 2.9 0 002.9 0l5.36-3.095a2.9 2.9 0 001.45-2.512v-6.19a2.9 2.9 0 00-1.45-2.512l-5.36-3.095zm-2 1.559a1.1 1.1 0 011.1 0l5.36 3.095c.341.197.55.56.55.953v6.19a1.1 1.1 0 01-.55.953l-5.36 3.095a1.1 1.1 0 01-1.1 0L6.08 16.04a1.1 1.1 0 01-.55-.953v-6.19c0-.393.21-.756.55-.953l5.362-3.095zm-.87 7.143a1.42 1.42 0 112.84 0 1.42 1.42 0 01-2.84 0zm1.42-3.22a3.22 3.22 0 100 6.44 3.22 3.22 0 000-6.44z"
  }));
};

var _excluded$O = ["color", "size"];

var Bell = function Bell(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$O);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1.887a.9.9 0 01.9.9v1.566A6.509 6.509 0 0118.51 10.8v4.006a1.504 1.504 0 001.504 1.504.9.9 0 110 1.8H3.988a.9.9 0 010-1.8 1.504 1.504 0 001.504-1.504V10.8A6.509 6.509 0 0111.1 4.353V2.787a.9.9 0 01.9-.9zM6.93 16.31H17.07a3.303 3.303 0 01-.362-1.504V10.8a4.709 4.709 0 10-9.417 0v4.006c0 .528-.126 1.043-.362 1.504zm3.233 3.326a.9.9 0 011.23.327.703.703 0 001.215 0 .9.9 0 011.557.903 2.501 2.501 0 01-4.33 0 .9.9 0 01.328-1.23z"
  }));
};

var _excluded$P = ["color", "size"];

var Image = function Image(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$P);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.185 6c0-.45.364-.814.814-.814h12c.45 0 .814.364.814.814v6.399l-2.749-2.75a.9.9 0 00-1.273 0l-9.103 9.104A.814.814 0 015.185 18V6zm10.243 5.559l3.385 3.385V18c0 .45-.364.814-.814.814H8.172l7.256-7.255zM5.999 3.386A2.614 2.614 0 003.385 6v12a2.614 2.614 0 002.614 2.614h12A2.614 2.614 0 0020.613 18V6A2.614 2.614 0 0018 3.386H6zM10.252 9a1.497 1.497 0 11-2.994 0 1.497 1.497 0 012.994 0z"
  }));
};

var _excluded$Q = ["color", "size"];

var BookOpen = function BookOpen(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$Q);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.527 4.286a.9.9 0 01.9-.9H8.57A4.329 4.329 0 0112 5.072a4.328 4.328 0 013.428-1.686h5.143a.9.9 0 01.9.9v12.857a.9.9 0 01-.9.9h-6a1.672 1.672 0 00-1.671 1.671.9.9 0 01-1.8 0 1.671 1.671 0 00-1.672-1.671h-6a.9.9 0 01-.9-.9V4.286zM11.1 16.672a3.472 3.472 0 00-1.672-.43h-5.1V5.187H8.57A2.529 2.529 0 0111.1 7.714v8.958zm1.8 0a3.472 3.472 0 011.671-.43h5.1V5.187h-4.243A2.528 2.528 0 0012.9 7.714v8.958z"
  }));
};

var _excluded$R = ["color", "size"];

var MapPin = function MapPin(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$R);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 4.399a6.055 6.055 0 00-6.055 6.055c0 2.343 1.528 4.635 3.23 6.433A22.624 22.624 0 0012 19.394a22.613 22.613 0 002.824-2.507c1.703-1.798 3.231-4.09 3.231-6.433A6.056 6.056 0 0012 4.4zm0 16.102l-.5.748-.002-.001-.005-.004-.018-.012a10.691 10.691 0 01-.3-.212 24.414 24.414 0 01-3.305-2.895c-1.775-1.873-3.725-4.604-3.725-7.67a7.855 7.855 0 1115.71 0c0 3.066-1.95 5.797-3.724 7.67a24.408 24.408 0 01-3.54 3.062l-.065.045-.018.012-.006.004H12.5c0 .001 0 .002-.5-.747zm0 0l.5.748a.9.9 0 01-1 0l.5-.748zm0-11.465a1.418 1.418 0 100 2.837 1.418 1.418 0 000-2.837zm-3.218 1.418a3.218 3.218 0 116.437 0 3.218 3.218 0 01-6.437 0z"
  }));
};

var _excluded$S = ["color", "size"];

var Truck = function Truck(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$S);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.6 5.393c0-1.05.85-1.9 1.9-1.9h10.06c1.05 0 1.9.85 1.9 1.9V6.8h1.464a.9.9 0 01.709.346l2.576 3.297a.9.9 0 01.19.554v6.106a.9.9 0 11-1.8 0v-5.796L17.486 8.6H15.56a.9.9 0 01-.9-.9V5.393a.1.1 0 00-.1-.1H4.5a.1.1 0 00-.1.1v11.71a.9.9 0 11-1.8 0V5.393zm13.206 4.201a.9.9 0 01.9.9v.484h.505a.9.9 0 010 1.8h-1.405a.9.9 0 01-.9-.9v-1.384a.9.9 0 01.9-.9zM7.4 17.855a.852.852 0 111.704 0 .852.852 0 01-1.704 0zm.852-2.652a2.652 2.652 0 102.492 3.559h2.464a2.653 2.653 0 10-.005-1.8h-2.454a2.653 2.653 0 00-2.497-1.759zm6.604 2.765a.912.912 0 000-.22.852.852 0 110 .22z"
  }));
};

var _excluded$T = ["color", "size"];

var Order = function Order(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$T);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.726 19.619V4.38h1.759v1.501c0 .74.574 1.456 1.416 1.456h6.206c.837 0 1.419-.711 1.41-1.461V4.38h1.758V19.62H5.726zM14.718 4.38H9.285v1.157h5.433V4.38zm.384-1.8h3.441c.782 0 1.532.608 1.532 1.488v15.864c0 .88-.75 1.487-1.532 1.487H5.458c-.782 0-1.532-.607-1.532-1.488V4.069c0-.88.75-1.488 1.532-1.488H15.1zm-7.348 8.954a.9.9 0 01.9-.9h6.963a.9.9 0 110 1.8H8.654a.9.9 0 01-.9-.9zm.9 2.638a.9.9 0 100 1.8h6.963a.9.9 0 000-1.8H8.654z"
  }));
};

var _excluded$U = ["color", "size"];

var Store = function Store(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$U);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.6 16.5a.9.9 0 01.9-.9h3a.9.9 0 010 1.8h-3a.9.9 0 01-.9-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.559 5.054A3.9 3.9 0 017.342 2.1h9.316a3.9 3.9 0 013.783 2.954l1.432 5.727c.035.142.1.284.069.418.03.136-.033.28-.07.424-.25.977-1.025 1.685-1.972 2.034V18a2.9 2.9 0 01-2.9 2.9H7A2.9 2.9 0 014.1 18v-4.344c-.948-.348-1.722-1.056-1.972-2.033-.037-.143-.086-.29-.055-.425-.031-.133.018-.274.054-.417l1.432-5.727zm2.34 8.823V18A1.1 1.1 0 007 19.1h10a1.1 1.1 0 001.1-1.1v-4.123c-.847-.093-1.67-.46-2.239-1.043-.201.15-.416.279-.63.385-.872.437-2.016.681-3.23.681s-2.358-.244-3.23-.68a4.184 4.184 0 01-.63-.386c-.57.583-1.393.95-2.24 1.043zM18.696 5.49l1.427 5.709c-.118.4-.675.901-1.597.901-1.104 0-1.624-.676-1.625-1.1a.9.9 0 00-1.8 0c0 .028-.046.295-.674.61-.574.286-1.43.49-2.426.49-.995 0-1.852-.204-2.426-.49-.628-.315-.674-.582-.674-.61a.9.9 0 10-1.8 0c0 .423-.52 1.1-1.625 1.1-.922 0-1.48-.502-1.597-.902L5.305 5.49A2.1 2.1 0 017.342 3.9h9.316a2.1 2.1 0 012.037 1.59z"
  }));
};

var _excluded$V = ["color", "size"];

var Warehouse = function Warehouse(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$V);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.9 4a.9.9 0 00-1.122-.873l-9 2.286a.9.9 0 00-.678.872V20a.9.9 0 00.9.9h16a.9.9 0 00.9-.9v-8.8a.9.9 0 00-.63-.859L13.9 8.339V4zm0 6.226V19.1h1.7v-1.6a.9.9 0 011.8 0v1.6h1.7v-7.24l-5.2-1.634zM12.1 9V5.157L4.9 6.985V19.1h7.2V9zM8 9.1a.9.9 0 01.9.9v2a.9.9 0 11-1.8 0v-2a.9.9 0 01.9-.9z"
  }));
};

var _excluded$W = ["color", "size"];

var Link = function Link(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$W);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.294 4.535a4.9 4.9 0 00-6.93 0L10.95 5.95l1.273 1.273 1.414-1.414a3.1 3.1 0 114.384 4.384l-2.829 2.829a3.1 3.1 0 01-4.384 0l-1.272 1.272a4.9 4.9 0 006.93 0l2.828-2.828a4.9 4.9 0 000-6.93zm-5 5a4.9 4.9 0 00-6.93 0l-2.829 2.829a4.9 4.9 0 106.93 6.93l1.414-1.415-1.273-1.273-1.414 1.414a3.1 3.1 0 01-4.384-4.384l2.828-2.828a3.1 3.1 0 014.917.711l1.581-.86c-.22-.404-.5-.783-.84-1.124z"
  }));
};

var _excluded$X = ["color", "size"];

var SlSolid = function SlSolid(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$X);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.79 2C6.383 2 2 6.477 2 12s4.383 10 9.79 10c5.406 0 9.79-4.477 9.79-10-.001-5.523-4.384-10-9.79-10zM9.757 20.47c-.316-1.309-1.273-5.202-1.273-5.202l4.507 5.497s-2 .268-3.234-.295zm3.674.148c-1.676-2.027-5.29-6.333-5.29-6.333l8.376 4.86c.001 0-.728.93-3.086 1.473zm3.363-1.654l-8.644-5.19-1.458-5.267s-.086-.47-.021-.702c.04-.133.492-.283.492-.283l5.294-1.508s4.675 2.401 7.882 4.147c.784 3.51-1.569 7.478-3.545 8.803zM10.744 8.83c-.623 0-1.13.516-1.13 1.152a1.14 1.14 0 001.13 1.151 1.14 1.14 0 001.13-1.151 1.14 1.14 0 00-1.13-1.152z"
  }));
};

var _excluded$Y = ["color", "size"];

var Package = function Package(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$Y);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.594 4.971l-1.63.815 5.88 2.94 1.931-.966-5.577-2.789a.683.683 0 00-.604 0zm7.298 4.243v7.047a.68.68 0 01-.377.608h-.002l-5.717 2.86v-7.467l3.442-1.721.018-.01 2.636-1.317zm-5.06.518l-5.88-2.94-1.936.968 5.88 2.94 1.935-.968zm-2.836 2.53L4.9 9.214v7.046a.68.68 0 00.372.61l.002.001 5.722 2.861v-7.47zm-.213 9.376L4.466 18.48l-.002-.002A2.479 2.479 0 013.1 16.252V8.737a2.48 2.48 0 011.376-2.22l2.999-1.499a.903.903 0 01.143-.072l3.173-1.586.002-.001a2.48 2.48 0 012.206 0l.002.001 6.315 3.157a2.48 2.48 0 011.376 2.22v7.524a2.482 2.482 0 01-1.375 2.219h-.001L13 21.639a2.48 2.48 0 01-2.218 0z"
  }));
};

var _excluded$Z = ["color", "size"];

var Printer = function Printer(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$Z);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 3.5a.9.9 0 01.9-.9h10.2a.9.9 0 01.9.9v5.05h.8a2.6 2.6 0 012.6 2.6v4.25a2.6 2.6 0 01-2.6 2.6H18v2.5a.9.9 0 01-.9.9H6.9a.9.9 0 01-.9-.9V18h-.8a2.6 2.6 0 01-2.6-2.6v-4.25a2.6 2.6 0 012.6-2.6H6V3.5zm-.8 6.85a.8.8 0 00-.8.8v4.25a.8.8 0 00.8.8H6v-2.5a.9.9 0 01.9-.9h10.2a.9.9 0 01.9.9v2.5h.8a.8.8 0 00.8-.8v-4.25a.8.8 0 00-.8-.8H5.2zm11-1.8H7.8V4.4h8.4v4.15zm0 6.05H7.8v5h8.4v-5z"
  }));
};

var _excluded$_ = ["color", "size"];

var Hash = function Hash(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$_);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.528 3.392a.9.9 0 01.795.994l-.46 4.143h2.994a.9.9 0 010 1.8h-3.195l-.371 3.343h3.566a.9.9 0 110 1.8H15.09l-.482 4.342a.9.9 0 01-1.79-.199l.46-4.143H9.95l-.483 4.342a.9.9 0 11-1.79-.199l.461-4.143H5.143a.9.9 0 110-1.8h3.194l.371-3.343H5.143a.9.9 0 010-1.8h3.765l.483-4.342a.9.9 0 111.789.199l-.46 4.143h3.331l.483-4.342a.9.9 0 01.994-.795zm-1.677 6.937H10.52l-.372 3.343h3.332l.371-3.343z"
  }));
};

var _excluded$$ = ["color", "size"];

var Help = function Help(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$$);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.977 7.25A7.639 7.639 0 004.33 12c0 1.794.616 3.444 1.647 4.751l2.393-2.393A4.309 4.309 0 017.673 12c0-.87.256-1.68.697-2.358L5.977 7.25zM7.25 5.975L9.643 8.37a4.308 4.308 0 012.358-.698c.87 0 1.68.256 2.358.698l2.393-2.394a7.639 7.639 0 00-4.75-1.647A7.639 7.639 0 007.25 5.976zM18.025 7.25l-2.393 2.393c.441.679.698 1.488.698 2.358 0 .87-.257 1.68-.698 2.358l2.393 2.393a7.639 7.639 0 001.648-4.75 7.638 7.638 0 00-1.648-4.752zm-1.273 10.775l-2.393-2.393a4.309 4.309 0 01-2.358.698c-.87 0-1.68-.257-2.358-.698L7.25 18.024a7.639 7.639 0 004.751 1.648 7.639 7.639 0 004.751-1.648zM2.53 12a9.471 9.471 0 1118.943 0A9.471 9.471 0 012.53 12zM12 9.472a2.529 2.529 0 100 5.057 2.529 2.529 0 000-5.057z"
  }));
};

var _excluded$10 = ["color", "size"];

var Arrival = function Arrival(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$10);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.821 5.32L6.086 10.88l4.417 1.104a.9.9 0 01.655.655l1.104 4.417 5.56-11.735zm.242-2.105c1.189-.563 2.428.675 1.864 1.864l-6.516 13.758c-.563 1.188-2.305 1.016-2.624-.26L9.543 13.6l-4.978-1.244c-1.275-.319-1.448-2.06-.26-2.623l13.758-6.517z"
  }));
};

var _excluded$11 = ["color", "size"];

var Cart = function Cart(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$11);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.466 3.251a.9.9 0 100 1.8h2.366l.624 3.12a.897.897 0 00.014.072l1.296 6.471a2.451 2.451 0 002.441 1.973h7.525a2.452 2.452 0 002.442-1.974l1.242-6.515a.9.9 0 00-.884-1.068H8.083l-.631-3.156a.9.9 0 00-.883-.723H3.466zm6.065 11.112L8.444 8.93h11l-1.035 5.433-.001.002a.651.651 0 01-.65.522h-7.576a.651.651 0 01-.651-.524zm1.418 5.422a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm8.881 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
  }));
};

var _excluded$12 = ["color", "size"];

var Copy = function Copy(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$12);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.142 4.329a.814.814 0 00-.814.814v7.714a.814.814 0 00.814.815h.857a.9.9 0 110 1.8h-.857a2.615 2.615 0 01-2.614-2.615V5.143a2.614 2.614 0 012.614-2.614h7.714a2.614 2.614 0 012.615 2.614V6a.9.9 0 01-1.8 0v-.857a.814.814 0 00-.815-.814H5.142zm6 6a.814.814 0 00-.814.814v7.714c0 .45.364.815.814.815h7.714c.45 0 .815-.365.815-.815v-7.714a.814.814 0 00-.815-.814h-7.714zm-2.614.814a2.614 2.614 0 012.614-2.614h7.714a2.614 2.614 0 012.615 2.614v7.714a2.614 2.614 0 01-2.615 2.615h-7.714a2.614 2.614 0 01-2.614-2.615v-7.714z"
  }));
};

var _excluded$13 = ["color", "size"];

var Refresh = function Refresh(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$13);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.032 7.293A7.6 7.6 0 0119.6 12a.9.9 0 101.8 0A9.4 9.4 0 003.858 7.3a.9.9 0 00.476 1.297l2.64.945a.9.9 0 10.607-1.695l-1.549-.554zM3.5 11.1a.9.9 0 01.9.9 7.6 7.6 0 0013.568 4.707l-1.549-.554a.9.9 0 01.606-1.695l2.64.945a.9.9 0 01.477 1.298A9.4 9.4 0 012.6 12a.9.9 0 01.9-.901z"
  }));
};

var _excluded$14 = ["color", "size"];

var Save = function Save(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$14);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.6 10a.9.9 0 01.9-.9h5a.9.9 0 010 1.8h-5a.9.9 0 01-.9-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 20.9a1.9 1.9 0 001.9-1.9V8.406A5.306 5.306 0 0015.595 3.1H5A1.9 1.9 0 003.1 5v14c0 1.05.851 1.9 1.9 1.9h14zM5 4.9a.1.1 0 00-.1.1v14a.1.1 0 00.1.1h2.1V15c0-1.049.851-1.9 1.9-1.9h6c1.05 0 1.9.851 1.9 1.9v4.1H19a.1.1 0 00.1-.1V8.406A3.505 3.505 0 0015.595 4.9H5zm10.1 14.2V15a.1.1 0 00-.1-.1H9a.1.1 0 00-.1.1v4.1h6.2z"
  }));
};

var _excluded$15 = ["color", "size"];

var CrossCircle = function CrossCircle(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = _objectWithoutProperties(props, _excluded$15);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM8.957 7.543a1 1 0 00-1.414 1.414L10.586 12l-3.043 3.043a1 1 0 101.414 1.414L12 13.414l3.043 3.043a1 1 0 001.414-1.414L13.414 12l3.043-3.043a1 1 0 00-1.414-1.414L12 10.586 8.957 7.543z"
  }));
};

exports.AlertTriangle = AlertTriangle;
exports.Arrival = Arrival;
exports.ArrowLeft = ArrowLeft;
exports.ArrowRight = ArrowRight;
exports.Bell = Bell;
exports.BookOpen = BookOpen;
exports.Calculation = Calculation;
exports.Calendar = Calendar;
exports.Carrier = Carrier;
exports.Cart = Cart;
exports.ChevronDown = ChevronDown;
exports.ChevronLeft = ChevronLeft;
exports.ChevronLeftOver = ChevronLeftOver;
exports.ChevronRight = ChevronRight;
exports.ChevronRightOver = ChevronRightOver;
exports.ChevronUp = ChevronUp;
exports.ChevronsSortDown = ChevronsSortDown;
exports.ChevronsSortUp = ChevronsSortUp;
exports.Clock = Clock;
exports.Copy = Copy;
exports.Cross = Cross;
exports.CrossCircle = CrossCircle;
exports.Currency = Currency;
exports.DollarSign = DollarSign;
exports.DownloadCloud = DownloadCloud;
exports.Edit = Edit;
exports.Email = Email;
exports.ExternalLink = ExternalLink;
exports.Eye = Eye;
exports.EyeOff = EyeOff;
exports.FileText = FileText;
exports.Filter = Filter;
exports.Folder = Folder;
exports.Hash = Hash;
exports.Help = Help;
exports.HelpCircle = HelpCircle;
exports.Image = Image;
exports.Import = Import;
exports.Info = Info;
exports.Key = Key;
exports.Language = Language;
exports.Link = Link;
exports.Loader = Loader;
exports.Lock = Lock;
exports.LogOut = LogOut;
exports.LogOut1 = LogOut1;
exports.MapPin = MapPin;
exports.Menu = Menu;
exports.Min = Min;
exports.Mobile = Mobile;
exports.MoreHorizontal = MoreHorizontal;
exports.MoreVertical = MoreVertical;
exports.Order = Order;
exports.Package = Package;
exports.Plus = Plus;
exports.Printer = Printer;
exports.Refresh = Refresh;
exports.Save = Save;
exports.Search = Search;
exports.Setting = Setting;
exports.Share = Share;
exports.Shopping = Shopping;
exports.SlSolid = SlSolid;
exports.Store = Store;
exports.Tick = Tick;
exports.Trash = Trash;
exports.Truck = Truck;
exports.UploadCloud = UploadCloud;
exports.User = User;
exports.Warehouse = Warehouse;
