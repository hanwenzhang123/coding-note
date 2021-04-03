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





