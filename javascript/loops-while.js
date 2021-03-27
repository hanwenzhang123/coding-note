function getRandomNumber(upper){
return Math.floor( Math.random() * upper) + 1
}

let counter = 0;
while ( counter < 10 ) {
  console.log( `The random number is ${getRandomNumber(10)}` );
  counter += 1;
}
// it's important to use the keyword let, lets you change (or manipulate) a variable's value through reassignment.
