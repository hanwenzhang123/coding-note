//node.appendChild(childElement)
//node belongs to the DOM while plain element is HTML.

//Place the new element p as the last child of the element stored in the div constant

const div = document.querySelector('div#feedback');
const p = document.createElement('p');
div.appendChild(p);

var contentDiv = document.getElementById('content');
//Create a paragraph element and assign it to the newParagraph variable.
var newParagraph = document.createElement('p');
//set the class attribute of the new paragraph to panel
newParagraph.className = 'panel';
//append the newParagraph element to contentDiv
contentDiv.appendChild(newParagraph)


const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});
  
/*
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript and the DOM</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1 id="myHeading">JavaScript and the DOM</h1>
    <p>Making a web page interactive</p>
    <button id="toggleList">Hide list</button>
    <div class="list">
      <p class="description">Things that are purple:</p>
      <input type="text" class="description">
      <button class="description">Change list description</button>
      <ul>
        <li>grapes</li>
        <li>amethyst</li>
        <li>lavender</li>
        <li>plums</li>
      </ul>
      <input type="text" class="addItemInput">
      <button class="addItemButton">Add item</button>   
            <button class="addItemButton">Add item</button>   
    </div>
    <script src="app.js"></script>
  </body>
</html>
*/
Element.textContent
Element.innerHTML
Element.attribute
Element.style.prop
document.createElement
Node.appendChild(childElement)
Node.removeChild(childElement)

EventTarget.addEventListener('type', listener[,options]);
//event type: click, mouseover, mousedown, mouseup, keypress, keyup, keydown

//event object
EventTarget.addEventListner('click',()=>{
  //handle event, event is an object with info and methods
});

ParentNode.children 
//read-only property that returns HTML of the child elements of Node. 

parentNode.firstElementChild
parentNode.lastElementChild


//insertBefore
const card = document.querySelector('.card');
const footer = document.querySelector('footer');
const div = document.createElement('div');
...
card.insertBefore(div, footer);

//let insertedNode = parentNode.insertBefore(newNode, referenceNode)
//insert a div before a footer element as a child of .card
  
