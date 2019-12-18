
/**
 * babel简介
 * https://babeljs.io/
 * 
 * es标准的过程
 * 
 * plugins 一个功能是一个plugin
 * presets 是plugins的集合
 */

module.exports = {
  presets: [
    "@babel/env",
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
  ]
};