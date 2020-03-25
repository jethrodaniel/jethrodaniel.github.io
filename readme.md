# jethrodaniel.github.io

![](https://github.com/jethrodaniel/productivity/workflows/build/badge.svg)

Simple github pages site.

Visit it at <https://jethrodaniel.com>.

### About

`dev` is the code branch, `master` is the static site that is deployed.

### development

```
# TODO: make `cake start` do everything here.

# in one tab
yarn run coffee --compile --watch src/

# in another tab
cake start
```

### deployment

```
# TODO: make this a cake task
NODE_DEBUG=gh-pages yarn run gh-pages -b master -d build
```

### license

All rights reserved.
