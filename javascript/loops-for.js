function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

for ( let i = 0; i < 10; i++ ) {
/* let i = 0 is the first expression same as the while loop, 
runs before the loops begins */
  console.log( `The random number is ${getRandomNumber(10)}` );
}

//Display HTML with a Loop
const main = document.querySelector('main');
let html = "";
for ( let i = 1; i <= 100; i++ ) {
  html += `<div>${i}</div>`
}
  main.innerHTML = html;
