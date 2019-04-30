const checkCodeLine = require('./rules/checkCodeLine.js');
const checkFilePath = require('./rules/checkFilePath.js');
const validateJSXExpression = require('./rules/validateJSXExpression');

module.exports = {
    rules: {
        'check-code-line': checkCodeLine,
        'check-file-path': checkFilePath,
        'validate-jsx-expression': validateJSXExpression,
    },
    configs: {
        wx: {
            plugins: ["nanachi"],
            rules: {
                "nanachi/check-code-line": "error",
                "nanachi/check-file-path": "error",
                "nanachi/validate-jsx-expression": "error",
            }
        },
        tt: {
            plugins: ["nanachi"],
            rules: {
                "nanachi/check-code-line": "error",
                "nanachi/check-file-path": "error",
                "nanachi/validate-jsx-expression": "error",
            }
        },
        qq: {
            plugins: ["nanachi"],
            rules: {
                "nanachi/check-code-line": "error",
                "nanachi/check-file-path": "error",
                "nanachi/validate-jsx-expression": "error",
            }
        },
        quick: {
            plugins: ["nanachi"],
            rules: {
                "nanachi/check-code-line": "error",
                "nanachi/check-file-path": "error",
            }
        },
        bu: {
            plugins: ["nanachi"],
            rules: {
                "nanachi/check-code-line": "error",
                "nanachi/check-file-path": "error",
            }
        },
        ali: {
            plugins: ["nanachi"],
            rules: {
                "nanachi/check-code-line": "error",
                "nanachi/check-file-path": "error",
            }
        }
    }
};
