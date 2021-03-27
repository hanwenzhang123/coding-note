function getRandomNumber(lower, upper = 100) {
if( isNaN(lower) || isNaN(upper) ) {
 throw Error('both arguments must be numbers.'); }
 return Math.floor(math.random() * ( upper - lower + 1) ) + lower; }
