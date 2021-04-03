//filter returns a new array
//['A','B','C'].filter((letter) => {return letter !== 'B'}) - callback function
//if it returns true, filter will add that item to the new array. if returns false, it won't be added.

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

//because filter returns to a new array, we don't need to delare an empty one like "let sName = [];"
const sName = names.filter(name => {      
  if(name.charAt(0) === 'S') {
    return true;
  } else {
    return false;
  }
});
console.log(sNames);

//we can just simply do this because filter returns itself
const sName = names.filter(name => name.charAt(0) === 'S');
console.log(sNames);

//this works too
const startsWithS = name => name.charAt(0) === 'S';
const sName = names.filter(startsWithS)
console.log(sNames);



//filter with number
const numbers = [1, 2, 3, 4, 5]
const no3 = nunmbers.filter(number => number !== 3);
console.log(no3)

const numbers = [1, 2, 3, 4, 5]
const only2 = nunmbers.filter(number => number === 2);
console.log(only2)

const numbers = [1,2,3,4,5,6,7,8,9,10];
const evens = numbers.filter(number => number % 2 === 0);    // Result: [2,4,6,8,10]
console.log(evens)

