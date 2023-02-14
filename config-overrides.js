const { addBabelPlugins, override } = require("customize-cra");
module.exports = override(
  ...addBabelPlugins(
    [
      "formatjs",
      {
        "idInterpolationPattern": "[sha512:contenthash:base64:6]",
        "ast": true
      }
    ]
    /* Add plug-in names here (separate each value by a comma) */
  )
);