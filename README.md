# webpack

## 安装 node 及 npm

### 安装nvm
Node Version Manager  http://nvm.sh
```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
### 安装node
```bash
# 安装最新lts版本的node

$ nvm install --lts
Installing latest LTS version.
Downloading and installing node v12.13.0...
Downloading https://npm.taobao.org/mirrors/node/v12.13.0/node-v12.13.0-darwin-x64.tar.xz...
##################################################################################################################################################################################################################################### 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v12.13.0 (npm v6.12.0)

```

## 创建项目

```bash

$ mkdir webpack-demo

$ cd webpack-demo

$ npm init -y  # 生成package.json 文件

# 安装webpack依赖

$ npm install --save-dev webpack webpack-cli  # 简写 npm i -D webpack webpack-cli

```

## 添加代码 执行构建

* 创建src目录
* 创建index.js 添加内容

webpack 4 开始零配置打包，但只能完成最基本的打包功能。

项目里安装的webpack可执行文件位于 `node_modules/.bin/webpack`，调用方式：
* ./node_modules/.bin/webpack
* npx webpack
* 在package.json中添加scripts


```bash
$ npx webpack
Hash: 7ff79145556702339d2a
Version: webpack 4.41.2
Time: 214ms
Built at: 11/14/2019 11:34:47 AM
  Asset       Size  Chunks             Chunk Names
main.js  948 bytes       0  [emitted]  main
Entrypoint main = main.js
[0] ./src/index.js 19 bytes {0} [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

```
