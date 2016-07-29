"use strict";

// This config file was modified from this file: https://github.com/stylelint/stylelint/blob/master/docs/user-guide/example-config.md
// Most disabled rules have been removed from the file, instead of commented out.

// lowercase-single-dashed-names-only-0
const namingPattern = /^[a-z0-9]+(-[a-z0-9]+)*$/;

module.exports = {
  extends: "stylelint-config-standard",
  namingPattern,
  rules: {
    "at-rule-no-unknown": true,
    "at-rule-no-vendor-prefix": true,
    "block-opening-brace-space-before": "always-multi-line",
    "color-hex-length": "long",
    "color-named": "never",
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-properties-order": [require("./property-order.js"), {
      unspecified: "bottomAlphabetical",
    }],
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-colon-newline-after": null,
    "declaration-colon-space-after": "always",
    "declaration-no-important": true,
    "font-family-name-quotes": "always-unless-keyword",
    "font-weight-notation": "numeric",
    "function-max-empty-lines": 1,
    "function-url-quotes": "always",
    "indentation": [4, {
      ignore: ["value"], // so we can align multiline property values
    }],
    "max-empty-lines": 3,
    "max-line-length": 100,
    "max-nesting-depth": 4,
    "media-feature-name-no-vendor-prefix": true,
    "no-duplicate-selectors": true,
    "no-unknown-animations": true,
    "number-max-precision": 8,
    "number-no-trailing-zeros": true,
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "root-no-standard-properties": true,
    "rule-nested-empty-line-before": ["always-multi-line", {
      except: ["first-nested"],
      ignore: ["after-comment"],
    }],
    "selector-attribute-quotes": "always",
    "selector-class-pattern": namingPattern,
    "selector-id-pattern": namingPattern,
    "selector-max-compound-selectors": 4,
    "selector-max-specificity": "1,3,3", // "id,class,type"
    "selector-no-id": true,
    "selector-no-universal": true,
    "selector-no-vendor-prefix": true,
    "selector-root-no-composition": true,
    "string-quotes": "double",
    "stylelint-disable-reason": "always-before",
    "time-no-imperceptible": true,
    "unit-blacklist": ["pt"],
    "value-keyword-case": "lower",
    "value-list-comma-newline-before": "never-multi-line",
    "value-no-vendor-prefix": true,
  },
};
