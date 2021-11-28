'use strict';
const fetcher = require('tool')
const path = require('path');

const getElementCode = require('./template')

function fetch() {
  const options = {
    format: 'svg',
    outputDir: path.resolve(__dirname,'src'),
    scale: '1',
    figmaToke: '206489-ce466b4e-ba21-43c5-a2cf-5375529735a1',
    figmaFileUrl: 'https://www.figma.com/file/Jwg2DwGhyNclL9F0GrNHIC/testSvg?node-id=0%3A1',
    componentTpl: getElementCode

  }
  fetcher(options)
}
fetch()