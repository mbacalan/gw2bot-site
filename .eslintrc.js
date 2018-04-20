module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
    ],
    "plugins": [
        "prettier",
        "vue"
      ],
    "parserOptions": {
        "parser": "babel-eslint",
        "sourceType": "module"
    },
    "rules": {
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "indent": ["error", 2],
        "linebreak-style": ["error", "windows"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"]
    }
};

