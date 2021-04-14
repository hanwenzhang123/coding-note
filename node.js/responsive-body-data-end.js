//https.get(options, callback)

const https = require('https');

const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
  let body = ""; //empty data initially
  
  //read the data
  response.on('data', data => {   //what it prints out is not string, it is buffer, a common data type emitted by the node network and file events
    body += data.toString()); //make the buffer to string by toString method
  });      // when you see 'data' in node.js, it will be an end event. they emit a data event and a chunk of data comes in
  

//The 'end' event is emitted when there is no more data to be consumed from the stream.
//The 'end' event will not be emitted unless the data is completely consumed.

  response.on(('end', () => {
    //parse the data
     const profile = JSON.parse(body);  //if you are unsure about the type of the object, always use typeof() keyword
     //print the data
     printMessage(username, profile.badges.length, profile.points.javascript);
    
    
    
    
    // from node.js website
const readable = getReadableStreamSomehow();
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});
readable.on('end', () => {
  console.log('There will be no more data.');
});
    

    
    
//exercise
    const https = require("https");
const request = https.get("https://teamtreehouse.com/chalkers.json", response => {
    let responseBody = "";

    response.on("data", dataChunk => {
responseBody += dataChunk.toString();
    }); // take the stream of data that's being passed as an argument into the callback (when the "data" event is fired) and concatenate it to the response (which is the empty string stored into the responseBody variable).

    response.on("end", () => {     // Without renaming any of the variables, modify the data callback to concatenate the stream of data to the responseBody.
        console.log(responseBody); //the callback gets executed when the response has fully finished
    });

});

request.on("error", error => {
    console.error(error.message);
});
    
    
    
