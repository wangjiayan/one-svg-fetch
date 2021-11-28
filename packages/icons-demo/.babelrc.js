module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: "commonjs",
      },
    ],
    ["@babel/preset-react"]
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
  ]
}
