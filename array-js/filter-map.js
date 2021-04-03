const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];
  
const users = userNames
.filter(name => name.charAt(0) === 'S')
.map(name => ( {name} ));   //{name} here is the short version for {name: name} 
//name => ({ 'name': name })
//arrow function here does not know it is the object literal if we only use { } which is also 

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



    
    
const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42},
  {name: 'Shaniqua', age: 30},
  {name: 'Marvin', age: 23},
  {name: 'Sean', age: 47}
];

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
  .filter( if ( arr % 2 !== 0) )
  .map( arr => { return arr } )
;


