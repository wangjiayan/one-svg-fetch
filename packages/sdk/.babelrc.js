const fs = require('fs-extra')
const path = require('path')
const pkg = fs.readJSONSync(path.join(__dirname, 'package.json'))

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: "commonjs",
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      /**
       * 必须处于 @babel/plugin-proposal-class-properties 之前
       * @link https://babel.dev/docs/en/babel-plugin-proposal-decoratorss
       */
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
  ],
}
