import js from "@eslint/js";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import cypress from "eslint-plugin-cypress";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
  // 1) Глобальні ігнори
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      ".vite/**",
      "coverage/**",
      "cypress/screenshots/**",
      "cypress/videos/**",
    ],
  },

  // 2) Базові JS-рекомендації
  js.configs.recommended,

  // 3) TS/TSX + React
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react,
      "react-hooks": hooks,
      import: importPlugin,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...hooks.configs.recommended.rules,

      // Vite/TS самі резолвлять імпорти
      "import/no-unresolved": "off",
      // сучасний React
      "react/react-in-jsx-scope": "off",
      // корисно для HMR
      "react-refresh/only-export-components": "warn",
    },
    settings: {
      react: { version: "detect" },
    },
  },

  // 4) Cypress (e2e + component)
  {
    files: ["cypress/**/*.{ts,tsx,js,jsx}"],
    plugins: { cypress },
    languageOptions: {
      // важливо: НЕ використовуємо cypress.environments.globals
      globals: {
        ...globals.browser, // window, document
        ...globals.node, // process і т.д. (часто треба у support файлах)
        ...globals.mocha, // describe, it, before, after
        cy: "readonly",
        Cypress: "readonly",
      },
    },
    rules: {
      ...cypress.configs.recommended.rules,
      // якщо chai-асерти конфліктують із no-unused-expressions — розкоментуй:
      // 'no-unused-expressions': 'off',
    },
  },
];
