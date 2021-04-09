//sending content type headers in node
response.writeHead(statusCode[, statusMessage][, headers])

Returns a reference to the ServerResponse, so that calls can be chained.

const body = 'hello world';
response
  .writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain'
  })
  .end(body);


// http.STATUS_CODES only on http not https!!!
// example: const statusCodeError = new Error ('there was an error getting the message ${readableQuery}. (${http.STATUS_CODES [response.statusCode]})`);


// internet media type, wikipedia, check the list of common media types, for our project, type text, text/html
// As part of HTTP specification, or how servers and browsers agrees to talk to each other, there are values that are hidden from the user called headers. 
// These headers can be programmatically created by the clients and the service. once each headed that the service ends, it is called Content Type.
// This instructs the browser how to handle the string of information in the response. 

const commonHeaders = {'Content-Type': 'text/html'};    // original as text/plain



// //HTTP POST body
// There are two common HTTP methods or ways to communicate with an HTTP server - GET and POST
// Get - everytime you type in the website, you are retrieving information from a website address
// POST - encodes the form content into a query string at the end of the URL, where POST sends the form contents as part of the request body
// When you create a form, you can specify which method to use, GET or POST

// get information out of the ?= request (query string), just the information, the request is an incoming message

//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
  //if url == "/" && GET
  if(request.url === "/") {
    if(request.method.toLowerCase() === "get") {
      //show search
      response.writeHead(200, commonHeaders);  
      renderer.view("header", {}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    } else {
      //if url == "/" && POST
      
      //get the post data from body
      request.on("data", function(postBody) {
        //extract the username
        var query = querystring.parse(postBody.toString());
        
        
       
          //redirection header - http header field
        //redirect to /:username
        response.writeHead(303, { "Location": "/" + query.username });  //for local, if other sites, need full address
        response.end();
      }); 
    }
  }
  
    
  //What is the Content-type for HTML?
  //text/html
  
  //Status code 303 means "See Other". This is good for redirecting POST requests to GET.
// However there are other redirection headers better suited for other situations.
// Imagine I had an old URL that no longer can be accessed at it's original location, like /user/chalkers but it's now at /users/chalkers.
// What status code should I use when redirecting?
  //301
  
  
  //What is the Content-type for CSS files? You can use this Media Type list for reference.
  //test/css
  
  
  //Finish the following code. How do you find out the HTTP method of a request? (Remember a request is an IncomingMessage.)
  //request.method
  
  
  //What is the Content-type for PDF files? You can use this Media Type list for reference.
  //application/pdf
  
  
  //What Node module do you need to require to parse a query string or the body of a POST request?
  //querystring
  
  
  //What HTTP header do I use to redirect to another URL?
   //Location
  
    
  // What is the Content-type for PNG files?  You can use this Media Type list for reference.
    //image/png
    
 
    
    
    //https://www.iana.org/assignments/media-types/media-types.xhtml - media types
  //https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_Redirection - redirection
  
