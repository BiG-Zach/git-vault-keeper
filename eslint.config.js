import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { enforceSemanticHtml } from "./eslint-rules/enforce-semantic-html.js";

const localRules = {
  plugins: { local: { rules: { "enforce-semantic-html": enforceSemanticHtml } } },
  rules: { "local/enforce-semantic-html": "warn" },
};

export default tseslint.config(
  { ignores: ["dist", "node_modules", ".vercel", "luxury-mobile-boost", "openclaw-nerve"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  // Semantic HTML rule scoped to blog pages and components only
  {
    files: ["src/pages/blog/**/*.{ts,tsx}", "src/components/blog/**/*.{ts,tsx}"],
    ...localRules,
  }
);
