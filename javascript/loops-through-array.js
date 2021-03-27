const playlist = [
  'So What',
  'Respect',
  'What a Wonderful World',
  'At Last',
  'Three Little Birds',
  'The Way You Look Tonight',
  'Cool Song'
];

function createListItems(arr) { //accept arr as argument to create the list
  //arr is just a parameter in the function for the any array that can be later passed into it
  let items = ''; //to hold the items with initial empty string that can build and store
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<li>${ arr[i] }</li>`;
  }
  return items;
}

document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(playlist)}
  </ol>
`;

/*Get the average of an array of scores
In the following example, a for loop accesses each number in the scores array and adds it to the current value of total. 
When the loop completes, the console displays the average score by dividing the value of total by the length of the scores array. */

const scores = [ 20, 50, 75, 100, 115 ];
let total = 0;

for ( let i = 0; i < scores.length; i++ ) {
  total += scores[i];
}

console.log( total / scores.length );
