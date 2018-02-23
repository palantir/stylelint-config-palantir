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
        "content", "each", "else", "error", "extend", "for", "function", "if", "include", "mixin", "return",
      ],
    }],
    "block-closing-brace-newline-after": ["always", {
      // allow @else to come on same line as closing @if brace
      ignoreAtRules: ["else", "if"],
    }],
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-pattern": namingPattern,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": ["scss"],
    // "scss/at-mixin-argumentless-call-parentheses": "always", // TODO: coming in next stylelint-scss release
    "scss/at-mixin-pattern": namingPattern,
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/dollar-variable-pattern": namingPattern,
    "scss/media-feature-value-dollar-variable": "always",
    "scss/percent-placeholder-pattern": namingPattern,
    "scss/selector-no-redundant-nesting-selector": true,
  },
}
