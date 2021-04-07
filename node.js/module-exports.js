// in math.js

const add = (x, y) => x + y;
const PI = 3.14159
const square = x => x * x;

const math = {
  add: add,
  PI: PI,
  square: square
}

module.exports = math 


// or we can directly add to module.exports
module.exports.add = (x, y) => x + y;
module.exports.PI = 3.14159
module.exports.square = x => x * x;

// we can use the short version just by  export like exports.PI = 3.14159


// in app.js
const math = require('./math');    // ./indicate in this directory
console.log(math)


