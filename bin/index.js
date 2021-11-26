const figmaSvgFetch = require('../lib/index.js')

 const options = {
  format: 'svg',
  outputDir: './src/',
  scale: '1',
  figmaToke: '206489-ce466b4e-ba21-43c5-a2cf-5375529735a1',
  figmaFileUrl: 'https://www.figma.com/file/Jwg2DwGhyNclL9F0GrNHIC/testSvg?node-id=0%3A1'
}

figmaSvgFetch.fetch(options)
