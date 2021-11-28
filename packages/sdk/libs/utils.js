"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var upperCamelCase = require('uppercamelcase');

var parseName = function parseName(name, defaultStyle) {
  var nameSlices = name.split('-');
  var style = nameSlices[nameSlices.length - 1];
  return {
    name: name,
    componentName: upperCamelCase(name),
    style: style === 'fill' || style === 'stroke' ? style : defaultStyle
  };
};

module.exports = {
  parseName: parseName
};