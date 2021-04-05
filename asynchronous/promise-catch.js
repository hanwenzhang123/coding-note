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
                      
                     
