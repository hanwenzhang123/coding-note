arr.unshift //add to the beginning of the array
arr.shift //remove the beginning of the array
arr.push //add to the end of the array
arr.pop //remove the end of the array

const daysInWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

daysInWeek.join(', '); // to seperate arrays, like a , or ;

const fruit = [
  'apple', 
  'orange', 
  'grapefruit', 
  'pineapple', 
  'strawberry'
];

fruit.includes('apple'); // whether an array includes a certain value among its entries, and returns either true or false
fruit.indexOf('apple'); // return an index or position of an element inside an array
fruit.indexOf('pear'); // return -1 only when it can not find the index of an element
