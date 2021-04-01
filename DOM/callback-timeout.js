//event - we can tie behavior to them.
function exec(func, arg) {
  func(arg);
}
exec((something) => {
  console.log(something);
}, 'Greetings, everyone!');
// one function passes to another function - allow you more control overe when and how a function gets executed


//timeout
var timeoutID = scope.setTimeout(function[, delay, arg1, arg2, ...]);
window.setTimeout((something) => {
  console.log(something);
}, 3000, 'Greetings, everyone!');


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


// ===============
// YIKES!!!!!!!!!!!
// ===============
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

// STILL A LOT OF NESTING!!!
delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {

                })
            })
        })
    })
});


// searchMoviesAPI('amadeus', () => {
//     saveToMyDB(movies, () => {
//         //if it works, run this:
//     }, () => {
//         //if it doesn't work, run this:
//     })
// }, () => {
//     //if API is down, or request failed
// })
