'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _asyncToGenerator = _interopDefault(require('@babel/runtime/helpers/asyncToGenerator'));
var _regeneratorRuntime = _interopDefault(require('@babel/runtime/regenerator'));
var _slicedToArray = _interopDefault(require('@babel/runtime/helpers/slicedToArray'));
var got = _interopDefault(require('got'));
var fsExtra = _interopDefault(require('fs-extra'));
var path = _interopDefault(require('path'));
var figmaJs = _interopDefault(require('figma-js'));
var pQueue = _interopDefault(require('p-queue'));
var dotenv = _interopDefault(require('dotenv'));
var _toConsumableArray = _interopDefault(require('@babel/runtime/helpers/toConsumableArray'));
var fs = _interopDefault(require('fs'));
var prettierEslint = _interopDefault(require('prettier-eslint'));
var svgo = _interopDefault(require('svgo'));
var cheerio = _interopDefault(require('cheerio'));
var uppercamelcase = _interopDefault(require('uppercamelcase'));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var ensureDir = fsExtra.ensureDir,
    writeFile = fsExtra.writeFile;
var join = path.join,
    resolve = path.resolve;
dotenv.config();

var fetchSvg = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(options) {
    var FIGMA_TOKEN, FIGMA_FILE_URL, _iterator, _step, arg, _arg$split, _arg$split2, param, value, client, fileId;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            FIGMA_TOKEN = options.figmaToke, FIGMA_FILE_URL = options.figmaFileUrl;
            _iterator = _createForOfIteratorHelper(process.argv.slice(2));

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                arg = _step.value;
                _arg$split = arg.split('='), _arg$split2 = _slicedToArray(_arg$split, 2), param = _arg$split2[0], value = _arg$split2[1];

                if (options[param]) {
                  options[param] = value;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (FIGMA_TOKEN) {
              _context.next = 5;
              break;
            }

            throw Error('Cannot find FIGMA_TOKEN in process!');

          case 5:
            client = figmaJs.Client({
              personalAccessToken: FIGMA_TOKEN
            }); // Fail if there's no figma file key

            fileId = null;

            if (fileId) {
              _context.next = 15;
              break;
            }

            _context.prev = 8;
            fileId = FIGMA_FILE_URL.match(/file\/([a-z0-9]+)\//i)[1];
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](8);
            throw Error('Cannot find FIGMA_FILE_URL key in process!');

          case 15:
            console.log("Exporting ".concat(FIGMA_FILE_URL, " components"));
            return _context.abrupt("return", client.file(fileId).then(function (_ref2) {
              var data = _ref2.data;
              console.log('Processing response...');
              var components = {};

              function check(c) {
                if (c.type === 'COMPONENT') {
                  var name = c.name,
                      id = c.id;
                  var _data$components$c$id = data.components[c.id],
                      _data$components$c$id2 = _data$components$c$id.description,
                      description = _data$components$c$id2 === void 0 ? '' : _data$components$c$id2,
                      key = _data$components$c$id.key;
                  var _c$absoluteBoundingBo = c.absoluteBoundingBox,
                      width = _c$absoluteBoundingBo.width,
                      height = _c$absoluteBoundingBo.height;
                  components[id] = {
                    name: name,
                    id: id,
                    key: key,
                    file: fileId,
                    description: description,
                    width: width,
                    height: height
                  };
                } else if (c.children) {
                  // eslint-disable-next-line github/array-foreach
                  c.children.forEach(check);
                }
              }

              data.document.children.forEach(check);

              if (Object.values(components).length === 0) {
                throw Error('No components found!');
              }

              console.log("".concat(Object.values(components).length, " components found in the figma file"));
              return components;
            }).then(function (components) {
              console.log('Getting export urls');
              return client.fileImages(fileId, {
                format: options.format,
                ids: Object.keys(components),
                scale: options.scale
              }).then(function (_ref3) {
                var data = _ref3.data;

                for (var _i = 0, _Object$keys = Object.keys(data.images); _i < _Object$keys.length; _i++) {
                  var id = _Object$keys[_i];
                  components[id].image = data.images[id];
                }

                return components;
              });
            }).then(function (components) {
              return ensureDir(join(options.outputDir)).then(function () {
                return writeFile(resolve(options.outputDir, 'data.json'), JSON.stringify(components), 'utf8');
              }).then(function () {
                return components;
              });
            }).then(function (components) {
              var contentTypes = {
                'svg': 'image/svg+xml',
                'png': 'image/png',
                'jpg': 'image/jpeg'
              };
              return queueTasks(Object.values(components).map(function (component) {
                return function () {
                  return got.get(component.image, {
                    headers: {
                      'Content-Type': contentTypes[options.format]
                    },
                    encoding: options.format === 'svg' ? 'utf8' : null
                  }).then(function (response) {
                    return ensureDir(join(options.outputDir, options.format)).then(function () {
                      return writeFile(join(options.outputDir, options.format, "".concat(component.name, ".").concat(options.format)), response.body, options.format === 'svg' ? 'utf8' : 'binary');
                    });
                  });
                };
              }));
            })["catch"](function (error) {
              throw Error("Error fetching components from Figma: ".concat(error));
            }));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[8, 12]]);
  }));

  return function fetchSvg(_x) {
    return _ref.apply(this, arguments);
  };
}();

function queueTasks(tasks) {
  var queue = new pQueue(Object.assign({
    concurrency: 3
  }));

  var _iterator2 = _createForOfIteratorHelper(tasks),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var task = _step2.value;
      queue.add(task);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  queue.start();
  return queue.onIdle();
}

var fetchSVG = fetchSvg;

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
  var svgo$1 = new svgo({
    plugins: [{
      convertShapeToPath: false
    }, {
      mergePaths: false
    }, // { removeAttrs: { attrs: '(fill|stroke.*)' } },
    {
      removeTitle: true
    }]
  });
  return new Promise(function (resolve) {
    svgo$1.optimize(svg).then(function (_ref) {
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
  _processSvg = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(svg) {
    var optimized;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return optimize(svg) // remove semicolon inserted by prettier
            // because prettier thinks it's formatting JSX not HTML
            .then(function (svg) {
              return svg.replace(/;/g, '');
            }).then(removeSVGElement).then(function (svg) {
              svg.replace(/([a-z]+)-([a-z]+)=/g, function (_, a, b) {
                return "".concat(a).concat(CamelCase(b), "=");
              }).replace(/([a-z]+):([a-z]+)=/g, function (_, a, b) {
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

var processSvg_1 = processSvg;

var parseName = function parseName(name, defaultStyle) {
  var nameSlices = name.split('-');
  var style = nameSlices[nameSlices.length - 1];
  return {
    name: name,
    componentName: uppercamelcase(name),
    style: style === 'fill' || style === 'stroke' ? style : defaultStyle
  };
};

var utils = {
  parseName: parseName
};

/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable prefer-template */

var parseName$1 = utils.parseName;
var defaultStyle = 'stroke';

function generateSvg(_x) {
  return _generateSvg.apply(this, arguments);
}

function _generateSvg() {
  _generateSvg = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(options) {
    var outputDir, getElementCode, iconsMap, srcDir, iconsDir, generateIconsIndex, generateIconCode, appendToIconsIndex, checkDuplication;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            outputDir = options.outputDir, getElementCode = options.componentTpl;
            _context2.next = 3;
            return fsExtra.readJson(path.join(outputDir, 'data.json'));

          case 3:
            iconsMap = _context2.sent;
            srcDir = path.join(outputDir);
            iconsDir = path.join(outputDir, 'icons');
            /**
             * 生成 icons.js 和 icons.d.ts 文件
             *  */

            generateIconsIndex = function generateIconsIndex() {
              if (!fs.existsSync(srcDir)) {
                fs.mkdirSync(srcDir);
                fs.mkdirSync(iconsDir);
              } else if (!fs.existsSync(iconsDir)) {
                fs.mkdirSync(iconsDir);
              }

              var initialTypeDefinitions = "/// <reference types=\"react\" />\n  import { ComponentType, SVGAttributes } from 'react';\n\n  interface Props extends SVGAttributes<SVGElement> {\n    color?: string;\n    size?: string | number;\n  }\n\n  type Icon = ComponentType<Props>;\n  ";
              fs.writeFileSync(path.join(srcDir, 'icons.js'), '', 'utf-8');
              fs.writeFileSync(path.join(srcDir, 'icons.d.ts'), initialTypeDefinitions, 'utf-8');
            }; // generate icon code separately


            generateIconCode = /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
                var name, names, location, destination, code, svgCode, ComponentName, element, component;
                return _regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        name = _ref.name;
                        names = parseName$1(name, defaultStyle);
                        location = path.join(srcDir, 'svg', "".concat(names.name, ".svg"));
                        destination = path.join(srcDir, 'icons', "".concat(names.name, ".js"));
                        code = fs.readFileSync(location);
                        _context.next = 7;
                        return processSvg_1(code);

                      case 7:
                        svgCode = _context.sent;
                        ComponentName = names.componentName;
                        element = getElementCode(ComponentName, svgCode);
                        _context.prev = 10;
                        component = prettierEslint({
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

                      case 17:
                        _context.prev = 17;
                        _context.t0 = _context["catch"](10);
                        console.log('err', _context.t0);

                      case 20:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[10, 17]]);
              }));

              return function generateIconCode(_x2) {
                return _ref2.apply(this, arguments);
              };
            }(); // append export code to icons.js


            appendToIconsIndex = function appendToIconsIndex(_ref3) {
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


            checkDuplication = function checkDuplication() {
              var nameVols = Object.values(iconsMap).map(function (item) {
                return item === null || item === void 0 ? void 0 : item.name;
              });

              var nameUniqVols = _toConsumableArray(new Set(nameVols));

              if (nameVols.length !== nameUniqVols.length) {
                throw 'icons存在重复命名,请检查后重试';
              }
            };

            generateIconsIndex();
            checkDuplication();
            Object.keys(iconsMap).map(function (key) {
              return iconsMap[key];
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

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _generateSvg.apply(this, arguments);
}

var build = generateSvg;

function fetch(_x) {
  return _fetch.apply(this, arguments);
}

function _fetch() {
  _fetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(opts) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetchSVG(opts);

          case 3:
            build(opts);
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _fetch.apply(this, arguments);
}

var src = fetch;

module.exports = src;
