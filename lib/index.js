const checkCodeLine = require('./rules/checkCodeLine.js');
const checkFilePath = require('./rules/checkFilePath.js');

module.exports = {
    rules: {
        'check-code-line': checkCodeLine,
        'check-file-path': checkFilePath
    },
    configs: {
        wx: {
            plugins: ["nanachi"],
            rules: {
                "nanachi/check-code-line": "error",
                "nanachi/check-file-path": "error",
            }
        },
        tt: {}
    }
};
