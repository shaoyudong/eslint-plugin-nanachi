nanachi eslint插件，结合vscode使用，智能提示错误语法
## usage
``` bash
npm install eslint eslint-plugin-nanachi --save-dev
```
## 配置文件
``` javascript
// .eslintrc.js
module.exports = {
    extends: ["plugin:nanachi/wx"] // platform包括wx、tt、qq、ali、bu、quick
}
```
## vscode设置
``` json
"eslint.validate": [
    "javascript",
    "javascriptreact"
],
```