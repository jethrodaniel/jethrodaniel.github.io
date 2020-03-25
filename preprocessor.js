// Enable testing with coffescript files & React

const coffee = require('coffeescript')

console.log("tada!")

module.exports = {
  process: function(src, path) {
    if (coffee.helpers.isCoffee(path))
      return coffee.compile(src, {bare: true,  inlineMap: true})
    else
      return null
  }
}
