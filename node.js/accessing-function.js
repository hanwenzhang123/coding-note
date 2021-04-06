//accessing functionality from another file

function sayGreeting() {
  console.log("Hello World"); }
module.exports.say = sayGreeting; 
// need this module.export outside the function in order to require from another file
---------
const greeting = require('./greeting'); //same directory file
greeting.say()
