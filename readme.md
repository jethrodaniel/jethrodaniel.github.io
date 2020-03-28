# jethrodaniel.github.io

![](https://github.com/jethrodaniel/productivity/workflows/build/badge.svg)

Personal website.

### about

This is a simple one-page app with React, using CoffeeScript, and no JSX.

Death by complexity is an issue I see alot in the JS ecosystem, with projects such as [create-react-app](https://github.com/facebook/create-react-app) (which is nice, btw) generating 600-line webpack configs. Besides just being intimidating to JS beginners, that _amount_ of code feels wrong for what it's doing. This code (all `git ls-files`'s worth) aims to be understandable in its entirety.

Some (relatively) strong opinions:

- CoffeeScript is beautiful
- ES6 is a pain to type
- JSX is hideous
- Webpack is pretty amazing (once you finally get the config working)

### deployment

This site is deployed as a simple static site, using [Github pages](https://pages.github.com/).

Branch `dev` is the code branch, `master` is the static site that is deployed when you run `cake deploy`.

### development

See the cakefile

```
$ cake

Cakefile defines the following tasks:

cake build                # build project
cake deploy               # deploy this gh-pages site
cake test                 # run the tests
cake serve                # run the site locally with hot-module replacement
```

In general, `cake serve`, then start coding.

We're using [yarn](https://classic.yarnpkg.com/en/docs/install/) here to manage dependencies.

### license

All rights reserved.

I'd like to make the _code_ available under MIT, and the _content_ unlicensed, but since this is a personal website, it seems safer _legally_ to just leave all this unlicensed. Feel free to read the code or suggest improvements. Ideally, we all help each other code better.

Thanks.
