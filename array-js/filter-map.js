const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];
  
const users = userNames
.filter(name => name.charAt(0) === 'S')
.map(name => ( {name: name} ));   //{name} is the shorthand for {name: name}
//arrow function here does not know it is the object literal if we only use { } which is also 

console.log(users)

// Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];
    
    
const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42},
  {name: 'Shaniqua', age: 30},
  {name: 'Marvin', age: 23},
  {name: 'Sean', age: 47}
];

    // Result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];
    
    
    
    
