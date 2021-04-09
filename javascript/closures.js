//the problem with gobals

// var count = 0;
// we can not use count for both, if so our two functions are sharing the counts variable in the global scope

// we have to use seperate counts of variables in this case

var dogCount = 0;
var birdCount = 0;

function countBirds(){
  birdCount += ;
  return count + ' birds';
}


function countDogs(){
  dogCount += ;
  return count + ' dogs';
}


//closure is a function with its own private store of variables that no other function knows about or can access.




