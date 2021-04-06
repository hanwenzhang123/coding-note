//make the application flexible

//wrap the code in a function get Profile
function getProfile(username) {
  // Connect to the API URL (https://teamtreehouse.com/username.json)
  const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
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
}


// const username = ['chalkers','alenaholligan', 'dave'];
// getProfile('chalkers');
// getProfile('alenaholligan');

                        //slice here from the 3rd number in an array, we don't want the first 2
const users = process.argv.slice(2);  //command line like node app.js chalker alena dave to check data
users.forEach(getProfile);  //shorten
//users.forEach(usernmae => { getProfile(usernmae); }


//console.dir(process.argv)	check/explore the process to see what is available on the process object
//process - the global object we can access the current version of node and arguments passed in to the command line
//argv - The command line arguments can be accessed through this property on the `process` object
