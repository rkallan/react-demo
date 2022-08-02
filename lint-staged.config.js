module.exports = {
    "package.json": ["npx sort-package-json"],
    "*": ["npm run format"],
    "*.{js,jsx,ts,tsx}": ["npm run lint"],
};
