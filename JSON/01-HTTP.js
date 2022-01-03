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


const person = { // this is NOT JSON - it's a normal ("raw") JavaScript object!
    name: 'Max',
    age: 30,
    hobbies: [
        { id: 'h1', title: 'Sports' },
        { id: 'h2', title: 'Cooking' }
    ],
    isInstructor: true
};
 
const jsonData = JSON.stringify(person); // convert raw JS data to JSON data string
console.log(jsonData); // a string with machine-readable JSON data in it
console.log(typeof jsonData); // string
