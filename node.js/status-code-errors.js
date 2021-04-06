//200 - OK
//500 - Internal Server Error
//301 - Moved Permanently
//404 - Not Found


//require https module
const https = require('https')

//require http module for status code
const http = require('http');

if(response.statusCode === 200) {
  
  
} else {
const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
const statusCodeError = new Error(message);
  printError(statusCodeError);
}



//STATUS_CODES
//The STATUS_CODES array is not on the https object. 
//STATUS_CODES can be found on the http object. 
//To include the STATUS_CODES use the following code:

const http = require('http'); //require http module for status code at the beginning of the codes

http.STATUS_CODES;
//access the short descriptions for standard HTTP status codes


