do {
  // code to run
}
while ( condition );


function getRandomNumber(upper){
return Math.floor( Math.random() * upper) + 1
}

let counter = 0;
do {
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter += 1;
} while (counter < 10 );

/* do the action over and over again while the condition is true, similar to the while.
but do while always runs a block of code before checking the condition
use do while when your code at least run one time */


let secret;
do {
     secret = prompt("What is the secret password?");
} while (secret !== 'sesame');

alert("You know the secret password. Welcome!");



function getRandomNumber(upper) { ... }

let counter = 0;
do {
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter++; // increment operator
} while ( counter < 10 );
                                 
                                 
function getRandomNumber(upper) { ... }

let counter = 10;
do {
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter--; // decrement operator
} while ( counter > 0 );
