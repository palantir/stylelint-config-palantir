[![CircleCI](https://circleci.com/gh/palantir/stylelint-config-palantir.svg?style=shield&circle-token=f4447e3c4df0f0edee55b1f1823f07bb43c94604)](https://circleci.com/gh/palantir/stylelint-config-palantir)
[![npm version](https://badge.fury.io/js/stylelint-config-palantir.svg)](https://badge.fury.io/js/stylelint-config-palantir)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# Linting CSS

[stylelint](https://github.com/stylelint/stylelint) is the preferred CSS / Less / Sass linter.

1. Install a compatible version of `stylelint` (we bundle a compatible version of `stylelint-config-standard`)

2. Configure your stylelint configuration file to extend this package:

```js
{
  "extends": "stylelint-config-palantir",
  "rules": {
    // Add overrides and additional rules here
  }
}
```

# Linting Sass

1. Install a compatible version of `stylelint` and `stylelint-scss` (we bundle a compatible version of `stylelint-config-standard`)

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

# Customization

We use a `lowercase-single-dashed-names-only` naming pattern for all rules that support a pattern. The regular expression for this pattern is exported as `namingPattern` in the main `stylelint.config.js` file. You can use it in your own rules like so:

```js
const { namingPattern } = require("stylelint-config-palantir");
```
