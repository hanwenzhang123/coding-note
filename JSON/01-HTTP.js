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

//JSON
Data is transferred as "JSON" data between your client-side code and your backend ("the server").

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

//You're NOT LIMITED to objects when converting data to JSON. You can also convert numbers, arrays, booleans or just strings - all data types JSON supports
const jsonNumber = JSON.stringify(2); // "2"
const jsonText = JSON.stringify('Hi there! I use single quotes in raw JS'); // ""Hi there! ...""
const jsonArray = JSON.stringify([1, 2, 3]); // "[1,2,3]"
const jsonBoolean = JSON.stringify(true); // "true"
 
