// const Traverser = require('eslint/lib/util/traverser.js');
module.exports = {
    meta: {
        docs: {},
        messages: {
            noMap: "jsx中无法调用非map函数",
            noFunction: "jsx属性中无法调用函数.",
            conditionalNoFunction: "jsx属性中三元表式无法调用非map函数."
        }
    },
    create(context) {
        return {
            "JSXExpressionContainer": function (node) {
                const expression = node.expression;
                const callee = expression.callee;
                const type = expression.type;
                if (type === 'StringLiteral') return;
                if (typeof node.loc === 'undefined') return;
                //判断map的数组是否经过函数处理. 例如: list.slice(0,2).map
                if (type === 'CallExpression'
                    && callee && callee.property && callee.property.name === 'map'
                    && callee.object.type === 'CallExpression'
                ) {
                    context.report({
                        node,
                        messageId: 'noMap'
                    });
                }

                //属性插值中，不能调用函数
                if (
                    node.parent.type === 'JSXAttribute' //属性节点
                    && !/^(on)|(catch)/.test(node.parent.name.name) //跳过属性中事件on|catch绑定  属性名不是事件绑定
                    && type === 'CallExpression'     //属性值是函数调用
                    && callee.property && callee.property.name != 'bind'   //属性值是非bind函数调用
                ) {
                    context.report({
                        node,
                        messageId: 'noFunction'
                    });
                }

                //三元表达式中不能调用函数
                // if (node.parent.type === 'JSXAttribute' && type === 'ConditionalExpression') {
                //     Traverser.traverse(node, {
                //         enter(node) {
                //             if (node.type === 'CallExpression') {
                //                 context.report({
                //                     node,
                //                     messageId: 'conditionalNoFunction'
                //                 });
                //             }
                //         }
                //     });
                // }
            }
        }
    }
}