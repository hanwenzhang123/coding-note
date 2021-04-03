const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];
  
const users = userNames
.filter(name => name.charAt(0) === 'S')
.map(name => ( {name} ));   //Because they use curly braces to surround their function bodies, the arrow function doesn't know this is an object literal, which also uses curly braces{}. Surround this object with parenthesis(), That's just to tell JavaScript that I want to return this object literal from the callback.
//{name} here is the short version for {name: name} , same as name => ({ 'name': name })

console.log(users)

// Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];



// cleaner way
const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

const users = userNames
    .filter(name => name[0] === 'S')
    .map(name => {
        return "name: " + name;
    });

console.log(users);

//["name: Samir", "name: Shaniqua", "name: Sean"]




// filter 30 years and over, map return only user name  
const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42},
  {name: 'Shaniqua', age: 30},
  {name: 'Marvin', age: 23},
  {name: 'Sean', age: 47}
];
const userNames = users
  .filter(user => user.age >= 30)
  .map(user => user.name);
    // Result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];





//Using the filter and map methods on the todos array, create an array of unfinished task strings. 
//See the comments below to see the correct result. Store the new array in the variable unfinishedTasks.
    
const todos = [
    {
        todo: 'Buy apples',
        done: false
    },
    {
        todo: 'Wash car',
        done: true
    },
    {
        todo: 'Write web app',
        done: false
    },
    {
        todo: 'Read MDN page on JavaScript arrays',
        done: true
    },
    {
        todo: 'Call mom',
        done: false
    }
];
let unfinishedTasks = todos
  .filter(todo => todo.done === false)
  .map(todo => todo.todo);
// unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
