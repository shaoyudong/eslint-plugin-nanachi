const path = require('path');

module.exports = {
    meta: {
        docs: {},
        messages: {
            invalidPath: "{{parent}} 目录下不能包含 {{child}} 目录, 请修复.",
            invalidFileName: "组件文件名必须是{{NAME}}",
            invalidPageName: "页面文件名必须是{{NAME}}",
            invalidComponentName: "引用的组件名必须和组件所在的文件夹名保持一致" 
                + '\n例如: import {{componentName}} from \'@components/{{componentName}}/index\''
        }
    },
    create(context) {
        const sourcePath = context.getFilename();;
        return {
            "Program": function (node) {
                const filePath = context.getFilename();
                //把目录分割成数组
                const pathArray = filePath.replace(/\\/, '/').split('/');  //把目录分割成数组
                const componentsPos = pathArray.indexOf('components');
                const pagesPos = pathArray.indexOf('pages');

                if (componentsPos === -1 || pagesPos === -1) return;
                let parent, child;
                if (componentsPos < pagesPos) {
                    parent = 'components';
                    child = 'pages';
                    context.report({
                        node,
                        messageId: 'invalidPath',
                        data: {
                            parent,
                            child
                        },
                        loc: node.loc.start
                    });
                }
            },
            "ImportDeclaration": function(node) {
                const NAME = 'index';
                const filePath = node.source.value;
                if (/app\.js/.test(sourcePath) && /\/pages\//.test(filePath) && path.basename(filePath) !== 'index') {
                    context.report({
                        node,
                        messageId: 'invalidPageName',
                        data: {
                            NAME
                        }
                    });
                    return;
                }
                if (!/([\\/]|@)components[\\/]/.test(filePath)) {
                    return;
                }
                const fileName = path.parse(filePath).name;
                const componentName = path.dirname(filePath).replace(/\\/, '/').split('/').pop();
                const importName = node.specifiers[0] && node.specifiers[0].local.name;
                if (fileName !== NAME) {
                    context.report({
                        node,
                        messageId: 'invalidFileName',
                        data: {
                            NAME
                        }
                    })
                } else if (importName !== componentName) {
                    context.report({
                        node,
                        messageId: 'invalidComponentName',
                        data: {
                            componentName
                        }
                    });
                }
                
            }
        }
    }
}