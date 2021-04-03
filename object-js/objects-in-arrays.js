//example
const questions = [
  { question: 'How many planets are in the Solar System?', answer: '8' },
  { question: 'How many continents are there?', answer: '7' },
  { question: 'How many legs does an insect have?', answer: '6' },
  { question: 'What year was JavaScript created?', answer: '1995' }
];



//how to access data
const users = [
  {name: 'Samir'},
  {name: 'Angela'},
  {name: 'Beatrice'}
];

const newUsersArray = users.filter(user => user.name !== 'Samir');
console.log (newUsersArray)



//change format to ~ is 27 years old
const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42}
];

const newUsersArray = users.map(user => `${user.name} is ${user.age) years old.`);
console.log (newUsersArray)



// use 'reduce' here

const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42}
];
const usersObject = users.reduce((usersObject, user) => {
  usersObject[user.name] = user.age;
  return usersObject;     //always return in reduce
}, {});

console.log (usersObject)
// Samir: 27, Angela: 33, Beatrice: 42



//Using the map method on the authors array, create an array of full name strings, comprising the first name, then a space, then the last name. 

const authors = [
  { firstName: "Beatrix", lastName: "Potter" },
  { firstName: "Ann", lastName: "Martin" },
  { firstName: "Beverly", lastName: "Cleary" },
  { firstName: "Roald", lastName: "Dahl" },
  { firstName: "Lewis", lastName: "Carroll" }
];
let fullAuthorNames = authors.map(name => `${name.firstName} ${name.lastName}`);



