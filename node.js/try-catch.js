//try-catch

response.on('end', () => { 
  try {
   // Parse the data
  const profile = JSON.parse(body);                            
    // Print the data
  printMessage(username, profile.badges.length, profile.points.JavaScript);
     } catch (error) {
     console.log(error.message);
    }});
//catch (error) {printError(error); } after using the error function as below


//print error message function that we will only need one function for all
function printError(error){
  console.error(error.message);
}     // then we can update where all the console.errors are with printError(error)

request.on('error', printError);
  } catch (error) {
    printError(error);
  }
}




//Something bad is going to happen. Use a try block in the appropriate place to catch an error. Include a catch block with error as the parameter.
//In the catch block, call console.error to print out the error's message property.

try {
const jsonString = 'This is not a JSON String';
const jsonObject = JSON.parse(jsonString);

} catch (error) {
     console.log(error.message);
}

