/*How would you set the following function `add` up to run after 5 seconds pass, using Window.setTimeout? 
  In addition, how would you pass `add` the arguments 2 and 2 when it runs? */
  
  function add(num1, num2) {
  console.log(num1 + num2);
}

window.setTimeout(add, 5000, 2, 2);

/*the first argument to setTimeout is a callback function.
The second argument is the duration of the delay in milliseconds (5 seconds).
The rest of the arguments are any parameters required by the add callback function.*/


const square = function(num) {
  return num * num;
}

const quad = function(func, num) { // func is the callback function
  return func(num) * func(num); // parameters passed to the callback function here
}

console.log( quad(square, 3) ); // square is the callback function passed in
