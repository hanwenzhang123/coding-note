//json-parsing
const xhr = new XMLHttpRequest();
xhr.open("GET", "url");
chr.responseType = "json"
xhr.onload = function(){  //alternative for addEvenListeer since not all the browsers allow it
  const listOfPosts = xhr.response;   //JSON.parse(xhr.response);
}
xhr.send();

//JSON format - key and string values must have double quotes "" and seperate with ,
//in order to use json data, we need to take the string and convert it into javascript, this is a process known as parsing. json itselt is a plain text string
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4){
   let employees = JSON.parse(xhr.responseText);  // read-only property, returns the text received from a server following a request being sent
    console.log(employees);    
    // JSON.parse take string try to convert it to the js object, json.parse won't work if formatting is wrong. parses a JSON string.
  }
  xhr.open('GET', 'data/employees.js')
  xhr.send()

/* AJAX - Asynchronous JavaScript And XML.  making request behind the scene
4 steps of an AJAX request
1. creates XMLHttpRequest Object    --> const ~ = new XMLHttpRequest()
2. create callback function     --> ~.onreadystatechange = function() { }
3. open request     --> ~.open()
4. send request     --> ~.send()
*/

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link href='//fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="css/main.css">
  <title>AJAX with JavaScript</title>
  
<scirpt>
const xhr = new XMLHttpRequest();   // 1. create the object, each request needs to request a new new XMLHttpRequest(). variable name can be anything -->
//onreadystatechange - hold number 0 to 4 (0-3 early stage, 4 is ready to send) - everytime it fires, our function runs
xhr.onreadystatechange = function( ){      // 2. create a callback to response the request, it is what you want the browser to run, server send back to response -->
  if(xhr.readyState === 4){       // everytime 'readyState' fires, our function runs. 4 is the value when browser has receive all of the data from server. -->
   if(xhr.status === 200) {      // 200 means okay, the successful request. like 401 - no permission, 404 - not found, 500 - server error
    document.getElementById('ajax').innerHTML = xhr.responseText;     // the information that response send back -->
  } else {
    alert(xhr.statusText);
  }  } };    
  /*
  if (xhr.status === 404){
        //file not found
  } else if (xhr.status === 500){
      //server had a problem }
      */
xhr.open('GET', 'sidebar.html');       //3.open request-->
function sendAJAX(){      //4. send request -->
  xhr.send();             // just .send() is good, here is the example for the button in the div
  document.getElementById('load').style.display = "none",
  };

</scirpt>
</head>
<body>
  <div class="grid-container centered">
    <div class="grid-100">
      <div class="contained">
        <div class="grid-100">
          <div class="heading">
            <h1>Bring on the AJAX</h1>
            <button id = "load" onclick ="sendAJAX()"> Bring it! </button>
          </div>
          <div id="ajax">

          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  
//example 1 
  var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState === 4) {
    document.getElementById("footer").innerHTML = request.responseText;
  }
};

request.open('GET', 'footer.html'); 
request.send()
  
  //example 2
  var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200) { 
    document.getElementById('sidebar').innerHTML =  xhr.responseText
  }
};
xhr.open('GET', 'sidebar.html');
xhr.send();
    
