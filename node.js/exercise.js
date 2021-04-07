//Given the following code...
const https = require('https');
try {
    const request = https.get('myawesomeapi.com/comments.json', (response) => {
    }); 
    request.on(error => console.error('Asynchronous error') );
} catch(error) {
    console.error('URL parse error');
}

//Which error will be triggered?
  //URL parse error



// toString() method can you call on a buffer to convert it to a string?

// argv - property on the process object that lists all arguments passed in to the command line

// string object is native object



//Given the following code in `dog.js`:
function bark() {
  console.log("Woof!");}
module.exports.makeNoise = bark;

//How would you access the functionality from another file?
const dog = require('./dog');
dog.makeNoise()



//require("./tweets.js") and require("./tweets") are both valid ways to include it in another JavaScript file in the same directory would this work

//The HTTPS (https) API is available in which environment? Node.js

// dir - When I do debug some code and log out the contents of an object what should I call on the console to see all properties

// process - What is the global object we can access the current version of node and arguments passed in to the command line
