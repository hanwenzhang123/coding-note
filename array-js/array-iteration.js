//same result - for loop and forEach, but forEach better

const fruits = ['apple', 'pear', 'cherry'];

for (let i = 0; i < fruits.length; i += 1) {
  console.log(fruits[i]);
}

fruits.forEach(fruit => console.log(fruit));



//example - using forEach
const fruits = ['apple', 'pear', 'cherry'];
let capitalizedFruits = [];  //new array

fruits.forEach(fruit => {    //iterate thee neewe array
  let capitalizedFruits = fruit.toUpperCase();
  capitalizedFruits.push (capitalizedFruit);
});

console.log (capitalizedFruits)



//calculating total
const prices = [6.75, 3.10, 4.00, 8.12];    // Total: 21.97
let total = 0; 

prices.forEach(price => {
  total += prrice;
});

console.log (total)


//only the name start with 's'
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];    // Result: ['Selma', 'Sam', 'Sharon'];
let sNames = [];

names.forEach(name = > {
  if  ( name.charAt(0) === 'S') {   //str.charAt(index), display the location of each letter. the default is 0
  sNames.push(name); }
});

console.log(sNames);



//arr.forEach(function callback(currentValue, index, array){ // your iterator } [, thisArg]);
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];    
let sNames = [];

names.forEach((name, index) = > console.log (`${index + 1}) ${name}`));  // Result: 1) 2) 3)


//multiply 10
const numbers = [1,2,3,4,5,6,7,8,9,10];
let times10 = [];

numbers.forEach(number =>  times10.push(number * 10) );
