import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": "warn",
      "react/prop-types": "off",
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",

        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ["**/*.{config,cjs,mjs}.js", "eslint.config.js"],
    languageOptions: { globals: { ...globals.node } }
  },

  // slår formatterings-konflikter fra
  eslintConfigPrettier,

  // tænd specifikt for dine linjebrudsregler igen
  {
    files: ["**/*.{js,jsx}"],
    rules: {
      "react/jsx-max-props-per-line": ["error", { maximum: 1, when: "always" }],
      "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
      "react/jsx-closing-bracket-location": ["error", "line-aligned"]
    }
  }
];