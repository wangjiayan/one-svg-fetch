"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var Svgo = require('svgo');

var cheerio = require('cheerio');
/**
 * Convert string to CamelCase.
 * @param {string} str - A string.
 * @returns {string}
 */


function CamelCase(str) {
  return str.replace(/(^|-)([a-z])/g, function (_, __, c) {
    return c.toUpperCase();
  });
}
/**
 * Optimize SVG with `svgo`.
 * @param {string} svg - An SVG string.
 * @returns {Promise<string>}
 */


function optimize(svg) {
  var svgo = new Svgo({
    plugins: [{
      convertShapeToPath: false
    }, {
      mergePaths: false
    }, {
      removeAttrs: {
        attrs: '(fill|stroke.*)'
      }
    }, {
      removeTitle: true
    }]
  });
  return new Promise(function (resolve) {
    svgo.optimize(svg).then(function (_ref) {
      var data = _ref.data;
      return resolve(data);
    });
  });
}
/**
 * remove SVG element.
 * @param {string} svg - An SVG string.
 * @returns {string}
 */


function removeSVGElement(svg) {
  var $ = cheerio.load(svg);
  return $('body').children().html();
}
/**
 * Process SVG string.
 * @param {string} svg - An SVG string.
 * @param {Promise<string>}
 */


function processSvg(_x) {
  return _processSvg.apply(this, arguments);
}

function _processSvg() {
  _processSvg = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(svg) {
    var optimized;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return optimize(svg) // remove semicolon inserted by prettier
            // because prettier thinks it's formatting JSX not HTML
            .then(function (svg) {
              return svg.replace(/;/g, '');
            }).then(removeSVGElement).then(function (svg) {
              return svg.replace(/([a-z]+)-([a-z]+)=/g, function (_, a, b) {
                return "".concat(a).concat(CamelCase(b), "=");
              });
            });

          case 2:
            optimized = _context.sent;
            return _context.abrupt("return", optimized);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _processSvg.apply(this, arguments);
}

module.exports = processSvg;