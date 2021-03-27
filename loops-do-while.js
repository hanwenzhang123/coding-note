function getRandomNumber(upper){
return Math.floor( Math.random() * upper) + 1
}

let counter = 0;
do {
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter += 1;
} while (counter < 10 );

/* do the action over and over again while the condition is true, similar to the while.
but do while always run before the while.
use do while when your code at least run one time */
