# stylelint-config-palantir

[![CircleCI](https://circleci.com/gh/palantir/stylelint-config-palantir.svg?style=shield&circle-token=f4447e3c4df0f0edee55b1f1823f07bb43c94604)](https://circleci.com/gh/palantir/stylelint-config-palantir)
[![npm version](https://badge.fury.io/js/stylelint-config-palantir.svg)](https://badge.fury.io/js/stylelint-config-palantir)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

This repository contains Palantir's standard configuration for [Stylelint](https://github.com/stylelint/stylelint), our preferred stylesheet linter. These rules enforce 4-space indentation, comfortable whitespace, and property ordering that mimics the CSS box model. Properly formatted CSS looks like this (blank lines optional):

```css
.sidebar {
    display: flex;
    flex-direction: column;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1;

    box-shadow: inset -1px 0 0 #000000;
    box-sizing: border-box;
    background-color: #ffffff;

    width: 250px;
    padding: 20px;
}
```

## Usage

1. Install a compatible version of `stylelint` (we express it as a `peerDependency` so you can choose a version that works for you).

  ```
  npm install --save-dev stylelint stylelint-config-palantir
  ```

2. Configure your stylelint configuration file to extend this package:

  ```js
  {
    "extends": "stylelint-config-palantir",
    "rules": {
      // Add overrides and additional rules here
    }
  }
  ```

### Linting Sass

Stylelint works with preprocessor syntaxes such as Sass and Less [out of the box](http://stylelint.io/user-guide/css-processors/) but an additional library and config file are suggested for true linter superpowers.

1. Install a compatible version of `stylelint-scss` which provides a collection of linter rules for Sass syntax.
  ```
  npm install --save-dev stylelint-scss
  ```

2. Configure your stylelint configuration file to _also_ extend `sass.js` in this package.
  This file configures the stylelint-scss rules and updates some existing rules to support Sass syntax.

  ```js
  {
    "extends": [
      "stylelint-config-palantir",
      "stylelint-config-palantir/sass.js",
    ],
    "rules": {
      // Add overrides and additional rules here
    }
  }
  ```

### Customization

We use a `lowercase-single-dashed-names-only` naming pattern for all rules that support a pattern. The regular expression for this pattern is exported as `namingPattern` in the main `stylelint.config.js` file. You can use it in your own rules like so:

```js
const { namingPattern } = require("stylelint-config-palantir");
```

### Maintenance

To release this package:
1. Bump the version in `package.json` by opening a new PR to the `master` branch.
1. Click on the `Releases` link at the top of the repository's homepage.
1. Click on the "Draft a new release button".
1. Create a new tag matching the version in `package.json`.
1. Click on "Generate release notes" to list the latest commits that will be part of the release.
1. Check the "Set as the latest release" checkbox.
1. Publish the release.

### FAQ

__How do I order my CSS properties in a declaration block?__

We use alphabetical ordering enforced by [stylelint-order](https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-alphabetical-order/README.md).
