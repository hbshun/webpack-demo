
/**
 * babel简介
 * https://babeljs.io/
 * 
 * es标准的过程
 * Stage 0 - Strawman（展示阶段）
 * Stage 1 - Proposal（征求意见阶段）
 * Stage 2 - Draft（草案阶段）
 * Stage 3 - Candidate（候选人阶段）
 * Stage 4 - Finished（定案阶段）
 * 
 * plugins 一个功能是一个plugin
 * presets 是plugins的集合
 * * @babel/env
 * * @babel/preset-react
 * * @babel/preset-typescript
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