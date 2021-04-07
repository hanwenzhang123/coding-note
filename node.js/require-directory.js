// mkdir shelter
// cd shelter
// touch blue.js sadie.js janet.js

//each file with the following information
module.exports = {
  name: 'janet',
  color: 'orange'
}

// a new file index.js
const blue = require('./blue')
const sadie = require('./sadie')
const janet = require('./janet')

const allCats = [blue, sadie, janet]

module.exports = allCats;


//make a new app.js - outside the current directory
const cats = require ('./shelter')  // shelter folder is in current directory
condole.log('requested an entire directory', cats)

