for ( let i = 5; i >= 1; i-- ) {  
  let guess = prompt(`Enter the secret word. You have ${i} tries.`);
  if ( guess === secretWord ) {
    message = 'Welcome to the secret loop world!';
    break;  // immediately terminate the loop
  }
}

alert(message);

/* forces the JavaScript engine to exit a loop even when the loop condition is still true.
if the user guesses the secret word before five tries
the loop immediately ends, and the "Welcome" message appears on the page.
without the break, the loop continues to run and keeps asking the user to guess the secret word
until it has run five times -- even if they've already entered a guess that matches the secret word. */


const tMinus = 10;
let message = 'Liftoff! 🚀';

for ( let i = tMinus; i >= 1; i-- ) { 
  let status = prompt(`T-Minus ${i}... Continue? (Y/N)`);
  if ( status === null || status.toLowerCase() === 'n' ) {
    message = 'Abort launch!';
    break;
  }
}

alert(message);
