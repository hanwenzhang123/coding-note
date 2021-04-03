//A for...in loop only iterates over enumerable, non-Symbol properties
//The for...in statement iterates over all enumerable properties of an object that are keyed by strings 
//(ignoring ones keyed by Symbols), including inherited enumerable properties.

for (variable in object)
  statement
  

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"


//LOOP over an object, not as common as for of

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}
// ===================================
// USING FOR...IN TO ITERATE AN OBJECT
// ===================================

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

// ==============================================
// Using Object methods to iterate
// (turn data into an array and then use for...of)
// ==============================================

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)


//Object.key(testScores). ----- the name 
//Object.value(testScores)  ----- the score
//Object.entries(testScores)  ----- nested array of the key value pairs


const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

for ( let prop in person ) {
  console.log(prop);
}


//The Object.keys() method returns an array containing the property names (or keys) of an object
//Since Object.keys() stores an object's keys inside a new array, you can use it for checking the length of an object
const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// Store the keys of the `person` object in `personProps`
const personProps = Object.keys(person); 
console.log(personProps);
> (4) ["name", "role", "skills", "isTeacher"]



const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

console.log( Object.keys(person).length );  // 4


//The Object.values() method returns an array of a given object's property values, in the same order as provided by a for...in loop. 
const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// Store the `person` object's property values in `personVals`
const personVals = Object.values(person); 
console.log(personVals);
> (4)
[
  "Reggie",
  "Software developer",
  ["JavaScript","HTML","CSS"],
  true
]


const name = {
  firstName: 'Reggie',
  lastName: 'Williams',
};

const role = {
  title: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// merge `name` and `role` into a `person` object
const person = {  
  ...name,
  ...role
};
console.log(person);

{
  firstName: "Reggie",
  lastName: "Williams",
  title: "Software developer",
  skills: ["JavaScript", "HTML", "CSS"],
  isTeacher: true
}

