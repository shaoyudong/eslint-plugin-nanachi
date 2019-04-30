nanachi eslint插件，结合vscode使用，智能提示错误语法

![invalidate-func](https://user-images.githubusercontent.com/16398401/56954527-8fd3a700-6b71-11e9-8ac6-84daea91cf33.png)
![invalidate-comp-name](https://user-images.githubusercontent.com/16398401/56954565-ada10c00-6b71-11e9-9e79-2d6e18f0bd12.png)

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