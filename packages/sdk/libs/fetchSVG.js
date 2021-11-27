"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var got = require('got');

var _require = require('fs-extra'),
    ensureDir = _require.ensureDir,
    writeFile = _require.writeFile;

var _require2 = require('path'),
    join = _require2.join,
    resolve = _require2.resolve;

var Figma = require('figma-js');

var PQueue = require('p-queue');

require('dotenv').config();

var fetchSvg = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(options) {
    var FIGMA_TOKEN, FIGMA_FILE_URL, _iterator, _step, arg, _arg$split, _arg$split2, param, value, client, fileId;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            FIGMA_TOKEN = options.figmaToke, FIGMA_FILE_URL = options.figmaFileUrl;
            _iterator = _createForOfIteratorHelper(process.argv.slice(2));

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                arg = _step.value;
                _arg$split = arg.split('='), _arg$split2 = (0, _slicedToArray2["default"])(_arg$split, 2), param = _arg$split2[0], value = _arg$split2[1];

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
            client = Figma.Client({
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
              console.log('Processing response');
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
  var queue = new PQueue(Object.assign({
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

module.exports = fetchSvg;