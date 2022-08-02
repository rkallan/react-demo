module.exports = {
    "*": ["npx sort-package-json"],
    "*": ["npm run format"],
    "*.{js,jsx,ts,tsx}": ["npm run lint"],
};
