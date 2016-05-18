[![CircleCI](https://circleci.com/gh/palantir/stylelint-config-palantir.svg?style=shield&circle-token=f4447e3c4df0f0edee55b1f1823f07bb43c94604)](https://circleci.com/gh/palantir/stylelint-config-palantir)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# Linting CSS & Less

[stylelint](https://github.com/stylelint/stylelint) is the preferred CSS / Less linter.

1. Install `stylelint` and `stylelint-config-standard` as devDependencies (we do not force users to
install these as dependencies, peer or otherwise, of `stylelint-config-palantir`).

2. Configure your `.stylelintrc` to extend the one in this package:

```js
{
  "extends": "./node_modules/stylelint-config-palantir/.stylelintrc.json",
  "rules": {
    // Add overrides and additional rules here
  }
}
```
