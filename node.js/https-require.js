// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

//Require https module first before using https.get(option, callback)
const https = require('https');  //Require Node.js' https module and assign it to the variable https.
const username = "chalkers";

//Function to print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
  console.log(message);
}

// Connect to the API URL (https://teamtreehouse.com/username.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
                                                     //callback with the parameter of response
                          console.log(response.statusCode);
                                      //log out the response's statusCode
                          // Read the data
                          // Parse the data
                          // Print the data
                          
                          });



//example
const https = require('https');

https.get('https://teamtreehouse.com/chalkers.json', response => {
  console.log(response.statusCode);});
