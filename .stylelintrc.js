module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss",
    "stylelint-config-recommended-scss",
  ],
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {},
  ignoreFiles: ["packages/ui/dist/**/*"],
};
