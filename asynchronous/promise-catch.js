/*
promises is an object representing the eventual completion or failure of an asynchronous operation, the promis of eventual value may or may not workout
always be one of thee 3 states: 
 - pending:	the default state of a promis, waiting period
 - fulfilled:	the operation completede successfully
 - rejected: the operation failed
 
 Working with promises
  - create a promise instancee using the Promis() constructor
  - Define what should happne when the promis is fulfilled or rejected
  - Consume the value of a fulfilled promise, or provide a rejection reason for a rejected promise
  */

const breakfastPromise = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('Your order is ready. Come and get it!');
  }, 3000);
});
console.log(breakfastPromise);


//then - handle both fulfilled or rejected promises
breakfastPromise.then( val => console.log(val) )
//for 3 seconds, change from pending to fulfill 




//catch - catch the rejected
const breakfastPromise = new Promise ((resolve, reject) => {
  setTimeout(() => {
    reject('oh no! there was a problem with your order');
  }, 3000);
});
console.log(breakfastPromise);
breakfastPromise.then( val => console.log(val).catch(err => console.log (err) );



                      
//new version                      
const order = false;

const breakfastPromise = new Promise( (resolve, reject) => {
  setTimeout(() => {
    if (order) {
      resolve('Your order is ready. Come and get it!');
    } else {
      reject( Error('Your order cannot be made.') );
    }
  }, 3000);
});

console.log(breakfastPromise);
breakfastPromise
  .then( val => console.log(val) )
  .catch( err => console.log(err) )                      
                      
                     
