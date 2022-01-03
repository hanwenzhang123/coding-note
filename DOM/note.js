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
 
