/**
 * Copyright 2017-present Palantir Technologies
 * @license Apache-2.0
 */

"use strict";

// lowercase-single-dashed-names-only-0
const namingPattern = /^-?[a-z0-9]+(-[a-z0-9]+)*$/;

module.exports = {
  extends: "stylelint-config-standard",

  // export namingPattern so it can be used in your own rules
  namingPattern,

  plugins: [
    "stylelint-order",
  ],

  rules: {
    "at-rule-no-unknown": true,
    "at-rule-no-vendor-prefix": true,
    "block-opening-brace-space-before": "always-multi-line",
    "color-hex-length": "long",
    "color-named": "never",
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-colon-newline-after": null,
    "declaration-colon-space-after": "always-single-line",
    "declaration-empty-line-before": ["never", {
      ignore: ["after-declaration"],
    }],
    "declaration-no-important": true,
    "font-family-name-quotes": "always-unless-keyword",
    "font-weight-notation": "numeric",
    "function-max-empty-lines": 1,
    "function-url-quotes": "always",
    "indentation": [4, {
      // align multiline property values
      ignore: ["value"],
    }],
    "length-zero-no-unit": true,
    "max-empty-lines": 3,
    "max-line-length": 100,
    "max-nesting-depth": 4,
    "media-feature-name-no-vendor-prefix": true,
    "no-descending-specificity": null,
    "no-duplicate-selectors": true,
    "no-unknown-animations": true,
    "number-max-precision": 8,
    "number-no-trailing-zeros": true,
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": ["always-multi-line", {
      except: ["first-nested"],
      ignore: ["after-comment"],
    }],
    "selector-attribute-quotes": "always",
    "selector-class-pattern": namingPattern,
    "selector-id-pattern": namingPattern,
    "selector-max-compound-selectors": 4,
    // "id,class,type"
    "selector-max-specificity": "1,3,3",
    "selector-max-id": 0,
    "selector-max-universal": 0,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-no-unknown": [true, {
      // :global is used by css modules
      "ignorePseudoClasses": ["global"]
    }],
    "string-quotes": "double",
    "time-min-milliseconds": 100,
    "unit-blacklist": ["pt"],
    "value-keyword-case": "lower",
    "value-list-comma-newline-before": "never-multi-line",
    "value-no-vendor-prefix": true,
    "order/order": [
      [
        "custom-properties",
        "at-variables",
        "dollar-variables",
        "less-mixins",
        {
          "type": "at-rule",
          "name": "include"
        },
        "declarations",
        "rules",
      ],
      { unspecified: "ignore" }
    ],
    // property order is defined in a separate file for legibility
    "order/properties-order": [
      require("./property-order.js"),
      { unspecified: "bottomAlphabetical" }
    ],
  },
};
