
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
  
  
  //JSON format - key and string values must have double quotes "" and seperate with ,
