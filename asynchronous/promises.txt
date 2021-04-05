what is a promise? A promise represents the eventual completion of a asynchronous operation.
A value that may not be available yet, like data requested from a server.

/*
Different between callbacks and promises
A promise represents a value that can be handles at some point later
Callback may leave us with some uncertainties about that value
A promise will promise or guarantee a future value and nothing can change it regardless of whether or not it comes back fulfilled or rejected
*/

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

A promise represents the eventual completion of an asynchronous operation

const dataPromise = new Promise();

dataPromise
  .then( data => console.log(data) ) 
 // gets the resolved value out of the promise


