module.exports = {
    meta: {
        docs: {},
        messages: {
            maxLine: "文件代码不能超过{{MAX_LINE}}行, 请优化."
        }
    },
    create(context) {
        return {
            "Program": function (node) {
                const MAX_LINE = 500;
                if (context.getSourceLines().length > MAX_LINE) {
                    context.report({
                        node,
                        messageId: 'maxLine',
                        data: {
                            MAX_LINE
                        },
                        loc: node.loc.start
                    });
                }
            }
        }
    }
}