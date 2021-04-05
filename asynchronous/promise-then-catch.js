//new keyword with promise() constructor function
const breakfastPromise = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('Your order is ready. Come and get it!');
  }, 3000);
});
console.log(breakfastPromise);


//then() - handle both fulfilled or rejected promises
breakfastPromise.then( val => console.log(val) )

//then - the function passed to then() immediate revoke 
//for 3 seconds, change from pending to fulfill 


//catch() - catch the rejected
const breakfastPromise = new Promise ((resolve, reject) => {
  setTimeout(() => {
    reject('oh no! there was a problem with your order');
  }, 3000);
});
console.log(breakfastPromise);
breakfastPromise.then( val => console.log(val).catch(err => console.log (err) );

//the error get caught and pass to the function err, the reject message revokes


                      
//new better version with conditional statement                      
const order = false;

const breakfastPromise = new Promise( (resolve, reject) => {
  setTimeout(() => {
    if (order) {
      resolve('Your order is ready. Come and get it!');
    } else {
      reject( Error('Your order cannot be made.') ); //here we pass an error object to reject versus a string only for debugging purpose, not required. 
    }
  }, 3000);
});

console.log(breakfastPromise);
breakfastPromise
  .then( val => console.log(val) )
  .catch( err => console.log(err) )                      
                      
                     
