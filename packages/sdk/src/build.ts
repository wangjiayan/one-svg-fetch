/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-template */
const path = require('path')
const fs = require('fs')
const format = require('prettier-eslint')
const processSvg = require('./processSvg')
const { parseName } = require('./utils')
const defaultStyle =  'stroke'


function generateSvg(options){
  const {outputDir,componentTpl:getElementCode} = options
  const iconsMap = require(path.join(outputDir, 'data.json'))
  const srcDir = path.join(outputDir)
  const iconsDir = path.join(outputDir, 'icons')

/**
 * 生成 icons.js 和 icons.d.ts 文件
 *  */
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

// generate icon code separately
const generateIconCode = async ({ name }) => {
  const names = parseName(name, defaultStyle)
  const location = path.join(srcDir, 'svg', `${names.name}.svg`)
  const destination = path.join(srcDir, 'icons', `${names.name}.js`)
  const code = fs.readFileSync(location)
  const svgCode = await processSvg(code)
  const ComponentName = names.componentName

  const element = getElementCode(
    ComponentName,
    svgCode
  )
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
  const nameVols = Object.values(iconsMap).map((item) => item?.name)
  const nameUniqVols = [...new Set(nameVols)]
  if (nameVols.length !== nameUniqVols.length) {
    throw 'icons存在重复命名,请检查后重试'
  }
}

  generateIconsIndex()
  checkDuplication()
  Object.keys(iconsMap)
    .map((key) => iconsMap[key])
    .forEach(({ name }) => {
      generateIconCode({ name }).then(({ ComponentName, name }) => {
        appendToIconsIndex({ ComponentName, name })
      })
    })
}

module.exports = generateSvg
