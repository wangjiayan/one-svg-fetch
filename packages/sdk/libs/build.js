"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable prefer-template */
var path = require('path');

var fs = require('fs');

var format = require('prettier-eslint');

var processSvg = require('./processSvg');

var _require = require('./utils'),
    parseName = _require.parseName;

var defaultStyle = 'stroke'; // where icons code in

function process(options) {
  var outputDir = options.outputDir,
      getElementCode = options.componentTpl;

  var icons = require(path.join(outputDir, 'data.json'));

  var srcDir = path.join(outputDir);
  var iconsDir = path.join(outputDir, 'icons'); // generate icons.js and icons.d.ts file

  var generateIconsIndex = function generateIconsIndex() {
    if (!fs.existsSync(srcDir)) {
      fs.mkdirSync(srcDir);
      fs.mkdirSync(iconsDir);
    } else if (!fs.existsSync(iconsDir)) {
      fs.mkdirSync(iconsDir);
    }

    var initialTypeDefinitions = "/// <reference types=\"react\" />\n  import { ComponentType, SVGAttributes } from 'react';\n\n  interface Props extends SVGAttributes<SVGElement> {\n    color?: string;\n    size?: string | number;\n  }\n\n  type Icon = ComponentType<Props>;\n  ";
    fs.writeFileSync(path.join(srcDir, 'icons.js'), '', 'utf-8');
    fs.writeFileSync(path.join(srcDir, 'icons.d.ts'), initialTypeDefinitions, 'utf-8');
  }; // generate attributes code


  var attrsToString = function attrsToString(attrs, style) {
    return Object.keys(attrs).map(function (key) {
      // should distinguish fill or stroke
      if (key === 'width' || key === 'height' || key === style) {
        return key + '={' + attrs[key] + '}';
      }

      if (key === 'otherProps') {
        return '{...otherProps}';
      }

      return key + '="' + attrs[key] + '"';
    }).join(' ');
  }; // generate icon code separately


  var generateIconCode = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
      var name, names, location, destination, code, svgCode, ComponentName, element, component;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = _ref.name;
              names = parseName(name, defaultStyle);
              location = path.join(srcDir, 'svg', "".concat(names.name, ".svg"));
              destination = path.join(srcDir, 'icons', "".concat(names.name, ".js"));
              code = fs.readFileSync(location);
              _context.next = 7;
              return processSvg(code);

            case 7:
              svgCode = _context.sent;
              ComponentName = names.componentName; // console.log('ComponentName',ComponentName)

              element = getElementCode(ComponentName, svgCode);
              console.log('element', element);
              _context.prev = 11;
              component = format({
                text: element,
                eslintConfig: {
                  "extends": 'airbnb'
                },
                prettierOptions: {
                  bracketSpacing: true,
                  singleQuote: true,
                  parser: 'flow'
                }
              });
              fs.writeFileSync(destination, element, 'utf-8');
              console.log('Successfully built', ComponentName);
              return _context.abrupt("return", {
                ComponentName: ComponentName,
                name: names.name
              });

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](11);
              console.log('err', _context.t0);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[11, 18]]);
    }));

    return function generateIconCode(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // append export code to icons.js


  var appendToIconsIndex = function appendToIconsIndex(_ref3) {
    var ComponentName = _ref3.ComponentName,
        name = _ref3.name;
    var exportString = "export { default as ".concat(ComponentName, " } from './icons/").concat(name, "';\r\n");
    fs.appendFileSync(path.join(srcDir, 'icons.js'), exportString, 'utf-8');
    var exportTypeString = "export const ".concat(ComponentName, ": Icon;\n");
    fs.appendFileSync(path.join(srcDir, 'icons.d.ts'), exportTypeString, 'utf-8');
  };
  /**
   * 检查组件名重复
   */


  var checkDuplication = function checkDuplication() {
    var nameVols = Object.values(icons).map(function (item) {
      return item.name;
    });
    var nameUniqVols = (0, _toConsumableArray2["default"])(new Set(nameVols));

    if (nameVols.length !== nameUniqVols.length) {
      throw 'icons存在重复命名,请检查后重试';
    }
  };

  generateIconsIndex();
  checkDuplication();
  Object.keys(icons).map(function (key) {
    return icons[key];
  }).forEach(function (_ref4) {
    var name = _ref4.name;
    generateIconCode({
      name: name
    }).then(function (_ref5) {
      var ComponentName = _ref5.ComponentName,
          name = _ref5.name;
      appendToIconsIndex({
        ComponentName: ComponentName,
        name: name
      });
    });
  });
}

module.exports = process;