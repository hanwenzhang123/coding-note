// 1. Create a web server     
// copied the frame from node.js website

var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  setInterval(function(){
    response.write(new Date() + "\n");    //print the date of the response every second
  }, 1000);
  //response.end('Hello World\n'); when we call the end, we can't write anything after it
}).listen(3000);    // HTTP server is listening on port 3000 here. we can pick any number from thr port and remove the local IP 
console.log('Server running at http://<workspace-url>/');


//127.0.0.1 - the local IP address assigned to all computers 

//NGINX - an example of an HTTP server

// The way computers agree to talk to each other is called a protocol.


var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});

  setTimeout(function(){
    response.end('Goodbye World\n');
  }, 1000);
  
  response.write("Hello World\n");
}).listen(3000);

//What is the output from the following code?  Hello World Goodbye World



var http = require("http");
var i = 5;

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});

  setInterval(function(){
    response.write(i + "\n");
    if(i === 0) {
      response.end("Blast off\n");
    }
    i--;
  }, 1000);
}).listen(3000);

//What is the output from the following code? 5 4 3 2 1 0 Blast off
