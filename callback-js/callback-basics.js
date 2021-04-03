//if the first one callback not working, call next one; 
//it is a function passeed into another function as a parameter

function callbackFunction(){
  //do something
  }
function executeCallback(callback){
  //do something
  } 
executeCallback(callbackFunction);

// examples of  callbacks
onClick(showHint);
everySecond(tickClick); //like a clock, clock is a callback function
readFile('mystory.txt', printStory);

//Which part of the code is a callback? 
openImage(addFilter);
//openImage(addFilter);

//there's a callback and a function that takes a callback. Which part of the code is a callback?
readFile('essay.txt', checkForPlagiarism);
//checkForPlagiarism
const people = [ { name: "Andrew", age: 34 }, { name: "Lauren", age: 29 } ];
sortArray(people, sortByAge);
//sortByAge


//How do you access the element from the event object triggered by the addEventListener method?
event.target

//What is the correct syntax for adding an event handler callback to an HTML element?
element.addEventListener(eventType, callback);
