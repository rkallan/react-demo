module.exports = {
    arrowParens: "always",
    bracketSpacing: true,
    cursorOffset: -1,
    endOfLine: "lf",
    embeddedLanguageFormatting: "auto",
    htmlWhitespaceSensitivity: "css",
    insertPragma: false,
    bracketSameLine: false,
    jsxSingleQuote: false,
    printWidth: 140,
    semi: true,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "es5",
    useTabs: false,
    quoteProps: "as-needed",
    overrides: [
        {
            files: "*.svg",
            options: { parser: "xml" },
        },
    ],
};
