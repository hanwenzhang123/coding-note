whenever we receive data from a web server, the data is always a string. 
So we need to parse the data with JSON.parse() so the data becomes a JavaScript object. 
This object could be anything that can be represented by JSON — an object, an array, a string, a number... 
Once we have the data as a JS object, then we can do whatever we need with it.



JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.
It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).



JSON Syntax
The curly braces, {..}, hold objects.
The square brackets, [..], hold arrays.
Data is stored in name-value pairs separated by a colon, :.
Every name-value pair is separated from another pair by a comma, ,. Similarly, every item in an array is delimited by a comma as well.
JSON property names must be in double-quoted (" ") text even though JavaScript names do not hold by this stringency.


JSON Data Types
string (double-quoted)
number (integer or floating point)
object (name-value pair)
array (comma-delimited)
boolean (true or false)
null



Client Browser -> Request GET -> Your Server -> Request through API (Path, Parameter) -> Someone Else's Server -> Response through API (DATA) -> Your Server -> Response POST -> Client Browser


When doing https request, make sure your url starts with https:// not http://

const url = 'https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=195948cc05953e4976469ce55ec3325d';
  
