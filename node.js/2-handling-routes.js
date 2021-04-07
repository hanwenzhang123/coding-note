// 1st file - app.js

//1. Create a web server     // copied the frame from node.js website

var router = require('/router.js') //require access from the 2nd file, and need / to require the path
//Problem: We need a simple way to look at a user's badge count and JavaScript point from a web browser
//Solution: Use Node.js to perform the profile look ups and server our template via HTTP

var http = require('http');
http.createServer(function (request, response) {
 router.home(request, response); 
 router.user(request, response); 
}).listen(3000); 
console.log('Server running at http://<workspace-url>/');


//2nd file here - router.js

//1. Handle HTTP route GET / and POST / i.e. Home

//home-route
function home(request, response){
    //if url == "/" && GET
    if(request.url === '/'){
    //show search
  response.writeHead(200, {'Content-Type': 'text/plan'});
  response.write('Header\n');
  response.write('Search\n');
  response.end('Footer\n');
}
  //if url == "/" && POST
    //redirect to /:username
}

//2. Handle HTTP route GET /:username i.e. /chalkers

//user-route
function userrequest, response){
  //if url == "/...."
  var username = request.url.replace('/',''); //replace / with the empty string here
  if(username.length > 0){
    response.writeHead(200, {'Content-Type': 'text/plan'});
    response.write('Header\n');
    response.write('Username\n');
    response.end('Footer\n');
    
    //get json from Treehouse
      //on "end"
        //show profile
      //on "error"
        //show error
      }
}


module.exports.home = home;
module.exports.user = user;




