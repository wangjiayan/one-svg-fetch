/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-template */
const path = require('path')
const fs = require('fs')
const format = require('prettier-eslint')
const processSvg = require('./processSvg')
const { parseName } = require('./utils')
const defaultStyle =  'stroke'

// where icons code in

function process(options){
  const {outputDir,componentTpl:getElementCode} = options
  const icons = require(path.join(outputDir, 'data.json'))
  const srcDir = path.join(outputDir)
  const iconsDir = path.join(outputDir, 'icons')
// generate icons.js and icons.d.ts file
const generateIconsIndex = () => {
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir)
    fs.mkdirSync(iconsDir)
  } else if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir)
  }

  const initialTypeDefinitions = `/// <reference types="react" />
  import { ComponentType, SVGAttributes } from 'react';

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  `

  fs.writeFileSync(path.join(srcDir, 'icons.js'), '', 'utf-8')
  fs.writeFileSync(
    path.join(srcDir,'icons.d.ts'),
    initialTypeDefinitions,
    'utf-8'
  )
}

// generate attributes code
const attrsToString = (attrs, style) => {
  return Object.keys(attrs)
    .map((key) => {
      // should distinguish fill or stroke
      if (key === 'width' || key === 'height' || key === style) {
        return key + '={' + attrs[key] + '}'
      }
      if (key === 'otherProps') {
        return '{...otherProps}'
      }
      return key + '="' + attrs[key] + '"'
    })
    .join(' ')
}

// generate icon code separately
const generateIconCode = async ({ name }) => {
  const names = parseName(name, defaultStyle)
  const location = path.join(srcDir, 'svg', `${names.name}.svg`)
  const destination = path.join(srcDir, 'icons', `${names.name}.js`)
  const code = fs.readFileSync(location)
  const svgCode = await processSvg(code)
  const ComponentName = names.componentName
  // console.log('ComponentName',ComponentName)
  const element = getElementCode(
    ComponentName,
    svgCode
  )
  console.log('element',element)
  try{
    const component = format({
      text: element,
      eslintConfig: {
        extends: 'airbnb'
      },
      prettierOptions: {
        bracketSpacing: true,
        singleQuote: true,
        parser: 'flow'
      }
    })
    fs.writeFileSync(destination, element, 'utf-8')
    console.log('Successfully built', ComponentName)
    return { ComponentName, name: names.name }
  }catch(err){
    console.log('err',err)
  }


}

// append export code to icons.js
const appendToIconsIndex = ({ ComponentName, name }) => {
  const exportString = `export { default as ${ComponentName} } from './icons/${name}';\r\n`
  fs.appendFileSync(
    path.join(srcDir, 'icons.js'),
    exportString,
    'utf-8'
  )

  const exportTypeString = `export const ${ComponentName}: Icon;\n`
  fs.appendFileSync(
    path.join(srcDir, 'icons.d.ts'),
    exportTypeString,
    'utf-8'
  )
}


/**
 * 检查组件名重复
 */
const checkDuplication = () => {
  const nameVols = Object.values(icons).map((item) => item.name)
  const nameUniqVols = [...new Set(nameVols)]
  if (nameVols.length !== nameUniqVols.length) {
    throw 'icons存在重复命名,请检查后重试'
  }
}

  generateIconsIndex()
  checkDuplication()
  Object.keys(icons)
    .map((key) => icons[key])
    .forEach(({ name }) => {
      generateIconCode({ name }).then(({ ComponentName, name }) => {
        appendToIconsIndex({ ComponentName, name })
      })
    })
}

module.exports = process
