import eslintPluginAstro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";

export default [
	{
		ignores: ["dist", "node_modules", ".astro"],
	},
	...eslintPluginAstro.configs.recommended,
	{
		files: ["**/*.astro"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				extraFileExtensions: [".astro"],
			},
		},
	},
];
