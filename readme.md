# jethrodaniel.github.io

![](https://github.com/jethrodaniel/productivity/workflows/build/badge.svg)

- [yarn setup](https://classic.yarnpkg.com/en/docs/install/#centos-stable)

```makefile
# makefile
yarn:
	curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
	curl --silent --location https://rpm.nodesource.com/setup_12.x > setup_node.sh
	bash setup_node.sh
```

```
yarn init
yarn add react react-dom react-semantic-ui-datepickers semantic-ui-react semantic-ui-css
yarn add --dev webpack webpack-cli
yarn add --dev @babel/core @babel/preset-env @babel/preset-react babel-loader
yarn add --dev html-webpack-plugin css-loader sass-loader node-sass file-loader
```
