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
            env: {
                "node": true,
                "es6": true
            },
            parser: 'babel-eslint',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                sourceType: "module"
            },
            plugins: ["nanachi"],
            rules: {
                "nanachi/check-code-line": 'off',
                "nanachi/check-file-path": "off",
                "nanachi/validate-jsx-expression": "error",
            }
        },
        tt: {
            env: {
                "node": true,
                "es6": true
            },
            parser: 'babel-eslint',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                sourceType: "module"
            },
            plugins: ["nanachi"],
            rules: {
                "nanachi/check-code-line": 'off',
                "nanachi/check-file-path": "off",
                "nanachi/validate-jsx-expression": "error",
            }
        },
        qq: {
            env: {
                "node": true,
                "es6": true
            },
            parser: 'babel-eslint',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                sourceType: "module"
            },
            plugins: ["nanachi"],
            rules: {
                "nanachi/check-code-line": 'off',
                "nanachi/check-file-path": "off",
                "nanachi/validate-jsx-expression": "error",
            }
        },
        quick: {
            env: {
                "node": true,
                "es6": true
            },
            parser: 'babel-eslint',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                sourceType: "module"
            },
            plugins: ["nanachi"],
            rules: {
                "nanachi/check-code-line": 'off',
                "nanachi/check-file-path": "off",
            }
        },
        bu: {
            env: {
                "node": true,
                "es6": true
            },
            parser: 'babel-eslint',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                sourceType: "module"
            },
            plugins: ["nanachi"],
            rules: {
                "nanachi/check-code-line": 'off',
                "nanachi/check-file-path": "off",
            }
        },
        ali: {
            env: {
                "node": true,
                "es6": true
            },
            parser: 'babel-eslint',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                sourceType: "module"
            },
            plugins: ["nanachi"],
            rules: {
                "nanachi/check-code-line": 'off',
                "nanachi/check-file-path": "'off'",
            }
        }
    }
};
