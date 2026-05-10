import eslintPluginAstro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import tsParser from "@typescript-eslint/parser";

export default [
	{
		ignores: ["dist", "node_modules", ".astro"],
	},
	...eslintPluginAstro.configs.recommended,
	{
		files: ["**/*.astro"],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: tsParser,
				extraFileExtensions: [".astro"],
				sourceType: "module",
				ecmaVersion: "latest",
			},
		},
	},
];
