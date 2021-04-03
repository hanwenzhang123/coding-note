// one function pass to another function as callback

function sayHello(){
  console.log('Hello');
}
function executeCallback( callback ) {
  callback();
}
executeCallback(sayHello)


//anonymous function is a function without name
function executeCallback( callback ) {
  callback();
}
executeCallback(function (){
  console.log('Hello');
})
executeCallback(function (){
  console.log('Goodbye');
})


//arrow function
function executeCallback( callback ) {
  callback();
}

executeCallback(() => console.log('Hello'));
executeCallback(() => console.log('Goodbye'));
