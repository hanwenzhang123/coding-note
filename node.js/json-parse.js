//native object, pass in a string to get parsed into a JSON object
//JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true


//An optional function, prescribes how the value originally produced by parsing is transformed, before being returned.
JSON.parse(text[, reviver]) 




https.get(`https://teamtreehouse.com/${username}.json`, response => {
 let body = "";
  // Read the data
  response.on('data', data => {
   body += data.toString();
 });

   response.on('end', () => {
   // Parse the data
    const profile = JSON.parse(body);                            
  // Print the data
printMessage(username, profile.badges.length, profile.points.JavaScript);
});
});


//we can use console.dir output to fingure out(check) the json values, like console.dir(profile)



const jsonString = '{"name": "Andrew", "languages": ["javascript", "swift", "java", "ruby", "html", "css", "qbasic"]}';

const jsonObject = JSON.parse(jsonString)

