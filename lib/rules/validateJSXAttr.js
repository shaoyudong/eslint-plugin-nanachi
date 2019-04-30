module.exports = {
    meta: {
        docs: {},
        messages: {
            noFunction: "jsx属性中无法调用函数.",
            conditionalNoFunction: "jsx属性中三元表式无法调用非map函数."
        }
    },
    create(context) {
        return {
            "JSXExpressionContainer": function (node) {
                console.log(node.parent.type);

            }
        }
    }
}