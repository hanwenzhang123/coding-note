//if else

var day = 1;

if(day === 0) {
	console.log('Sunday');
} else if (day === 1) {
	console.log('Monday');
} else if (day === 2) {
	console.log('Tuesday');
} else if (day === 3) {
	console.log('Wednesday');
} else if (day === 4) {
	console.log('Thursday');
} else if (day === 5) {
	console.log('Friday');
} else if (day === 6) {
	console.log('Saturday');
} else {
	console.log('Invalid Day');
}


// switch case break default

var day = 0;

switch (day) {
    case 0:
      console.log('Sunday');
      break;
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    default:
      console.log('Invalid Day');
      break;
}



//boolean
var isTrue = true;

//if(isTrue) {
//	console.log('yes');
//} else {
//	console.log('no');
//}

var yesOrNo = isTrue ? 'yes' : 'no';

console.log(yesOrNo);




// && - and || - or
if (time =< 0 || numberOfLives === 0) {
  endGame();
}

console.log( 3 === 3 && 'a' === 'a'). //true



function isAdult( age ) {
  return age && age >= 18;
}

//console.log(isAdult(33));

function countToFive(start = 1) {
  for(var i = start; i <= 5; i +=1) {
    console.log(i);
  }
}

//countToFive(0);

function greet(name) {
  name && console.log('Hi, ' + name + '!');
}

greet("Sam");

