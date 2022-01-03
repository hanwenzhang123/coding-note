What & Why?
XMLHttpRequest & fetch() API
JSON Data & FormData
GETing Data & POSTing Data

your script
- get user input, update list of posts etc
web page(rendered HTML)
- should not directly comminucate (avoid page reloads)
backend server (API)
(behond the scene communication - avoid reloading the page)

//HTTP Overciew
script(client-side)
frontend, detached from backend
responsible for fetching and sending data

server
- may run on different server (different domain)
- responsible for storing and retrieving data (with database)

client side- http request/response - server-side
url(domain + path) - http method (get, post, patch, put, delete) - http headers (metadata) - http body (data)
data format: JSON data, FormData format, binary, etc

Client Browser -> Request GET -> Your Server -> Request through API (Path, Parameter) -> Someone Else's Server -> Response through API (DATA) -> Your Server -> Response POST -> Client Browser
When doing https request, make sure your url starts with https:// not http://
const url = 'https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=195948cc05953e4976469ce55ec3325d';

//JSON
Data is transferred as "JSON" data between your client-side code and your backend ("the server").
JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.
It is commonly used for transmitting data in web applications 
(e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).


//JSON stands for JavaScript Object Notation - must be wrapped with double quotes ("")
{
    "name": "Max",
    "age": 30,
    "hobbies": [
        { "id": "h1", "title": "Sports" },
        { "id": "h2", "title": "Cooking" }
    ],
    "isInstructor": true
}
//JSON Syntax
The curly braces, {..}, hold objects.
The square brackets, [..], hold arrays.
Data is stored in name-value pairs separated by a colon, :.
Every name-value pair is separated from another pair by a comma, ,. Similarly, every item in an array is delimited by a comma as well.
JSON property names must be in double-quoted (" ") text even though JavaScript names do not hold by this stringency.


// this is NOT JSON - it's a normal ("raw") JavaScript object!
const person = { 
    name: 'Max',
    age: 30,
    hobbies: [
        { id: 'h1', title: 'Sports' },
        { id: 'h2', title: 'Cooking' }
    ],
    isInstructor: true
};

//JSON.stringify() convert it to JSON data.
const jsonData = JSON.stringify(person); // convert raw JS data to JSON data string
console.log(jsonData); // a string with machine-readable JSON data in it
console.log(typeof jsonData); // string

//JSON.parse() converts it back into normal JS data
const parsedData = JSON.parse(jsonData); // yields a "raw" JS object/ array etc.

whenever we receive data from a web server, the data is always a string. 
So we need to parse the data with JSON.parse() so the data becomes a JavaScript object. 
This object could be anything that can be represented by JSON — an object, an array, a string, a number... 
Once we have the data as a JS object, then we can do whatever we need with it.


//JSON Data Types
//You're NOT LIMITED to objects when converting data to JSON. You can also convert numbers, arrays, booleans or just strings - all data types JSON supports
const jsonNumber = JSON.stringify(2); // "2"
const jsonText = JSON.stringify('Hi there! I use single quotes in raw JS'); // ""Hi there! ...""
const jsonArray = JSON.stringify([1, 2, 3]); // "[1,2,3]"
const jsonBoolean = JSON.stringify(true); // "true"

string (double-quoted)
number (integer or floating point)
object (name-value pair)
array (comma-delimited)
boolean (true or false)
null
 
