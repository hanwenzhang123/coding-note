//original one
const arr = [1,2,3];

const smallerArr = arr.filter(number => number !== 2);
const incrementedArr = smallerArr.map(number => number + 1);

console.log(incrementedArr); // => [2,4]

//method-chaining

const arr = [1,2,3];

const smallerArr = arr
  .filter(number => number !== 2)
  .map(number => number + 1);
//filter removes 2 then map has no 2 and adds 1 to each element

console.log(incrementedArr); // => [2,4]
//does not affect the original array



//Using the filter and map methods on the years array, create an array of display strings for each year in the 21st century 
//Each display string should be the year followed by "A.D."

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears = years
  .filter(year => year > 2000)
  .map(year=> `${year} A.D.`);

// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]
