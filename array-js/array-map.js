// you can use map to transform each item in an array into something else.
// like filter, map returns a new array leaving the original array unchanged. unlike filter it returns a new array with the same number of array elements
// example: pluralize words in array, change C to F in an array of temperature, $ in front of an array of price

const strings = ['1','2','3','4','5'];
const numbers = strings.map(string => parseInt(string, 10)); //parseInt - get a number from string to an exact number, number 10 is for base 10.
console.log (numbers)   //[1, 2, 3, 4, 5]



//capitalize
const fruits = ['apple', 'pear', 'cherry'];

const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase();
console.log(capitalizedFruits);


//add $ to the beginning
const prices = [5, 4.23, 6.4, 8.09, 3.20];
const priceToDollars = price => '$${price.toFixed(2)}`;
const displayPrices = prices.map(priceToDollars);
console.log(displayPrices)
    // Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]

