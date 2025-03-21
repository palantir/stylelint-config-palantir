/**
 * Copyright 2017-present Palantir Technologies
 * @license Apache-2.0
 */

// Additional configuration for Sass code.
// Be sure to install `stylelint-scss` for the `scss/*` rules (it's only optional if you're not using Sass).

const namingPattern = require("./stylelint.config.js").namingPattern;

module.exports = {
  "plugins": [
    "stylelint-scss",
  ],
  customSyntax: "postcss-scss",
  "rules": {
    "at-rule-empty-line-before": ["always", {
      except: ["blockless-after-blockless", "first-nested"],
      ignore: ["after-comment"],
      // allow @else to come on same line as closing @if brace
      ignoreAtRules: ["import", "else"],
    }],
    "at-rule-no-unknown": [true, {
      ignoreAtRules: [
        // additional scss at-rules:
        "content", "each", "else", "error", "extend", "for", "function", "if", "include", "mixin", "return", "use",
      ],
    }],
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-pattern": namingPattern,
    "scss/load-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-disallowed-list": ["scss"],
    "scss/at-mixin-argumentless-call-parentheses": "never",
    "scss/at-mixin-pattern": namingPattern,
    "scss/dollar-variable-colon-space-after": "always-single-line",
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/dollar-variable-pattern": namingPattern,
    "scss/media-feature-value-dollar-variable": "always",
    "scss/percent-placeholder-pattern": namingPattern,
    "scss/selector-no-redundant-nesting-selector": true,

    // The rules below aren't exactly appropriate for LESS/SCSS. Following the stylelint-config-recommended-scss config,
    // we disable them.
    "annotation-no-unknown": null,
    "at-rule-no-unknown": null,
    "comment-no-empty": null,
    "function-no-unknown": null,
    "import-notation": null,
    "media-query-no-invalid": null,
  },
}
