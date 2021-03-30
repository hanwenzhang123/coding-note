const card = document.querySelector('.card');
const footer = document.querySelector('footer');
const div = document.createElement('div');
...
card.insertBefore(div, footer);

//let insertedNode = parentNode.insertBefore(newNode, referenceNode)
//insert a div before a footer element as a child of .card
