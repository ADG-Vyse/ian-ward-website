/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  semi: true,
  trailingComma: "es5",
  arrowParens: "avoid",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
