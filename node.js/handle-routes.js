//in index.js

var http = require("http");
var routes = require("./routes.js");

http.createServer(function(request, response){
  routes.root(request, response);
  routes.contact(request, response);
  routes.about(request, response);
}).listen(3000);

//route is being handled by the HTTP server



// in routes.js

function root(request, response) {
    if(request.url == "/") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("Home\n");
    }
}

function contact(request, response) {
    if(request.url == "/contact") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("Contact\n");
    }
}

function about(request, response) {
    if(request.url == "/about") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("About\n");
    }
}

//create an about function for a /about route. Have it print out "About\n" to the response.

module.exports.root = root;
module.exports.contact = contact;
module.exports.about = about;
