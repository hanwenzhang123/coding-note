Element.textContent
Element.innerHTML
Element.attribute
Element.style.prop
document.createElement
Node.appendChild(childElement)
Nod.removeChild(childElement)


//event - we can tie behavior to them
function exec(func, arg) {
  func(arg);
}
exec((something) => {
  console.log(something);
}, 'Greetings, everyone!');
// one function passes to another function - alloow you more control overe when and how a function gets executed

//timeout
var timeoutID = scope.setTimeout(function[, delay, arg1, arg2, ...]);
window.setTimeout((something) => {
  console.log(something);
}, 3000, 'Greetings, everyone!');


EventTarget.addEventListener('type', listener[,options]);

//event type: click, mouseover, mousedown, mouseup, keypress, keyup, keydown


//event object
EventTarget.addEventListner('click',()=>{
  //handle event, event is an object with info and methods
});


Event.target	
//reference the element that is first receive the event

document.addEventListener('click',(event) => {
  condole.log (event.target);  //check the target of the event you click on
});

event.target.tagName == "TAG NAME ALL CAPITAL"
//read-only property of the Element interface returns the tag name of the element on which it's called


Element.parentNode // get the parent node

let paragraph = document.getElementById('myParagraph')
let parent = paragraph.parentNode
parent.removeChild (paragraph);
//get the reference to parent node

if (event.target.tagName == 'LI' {
let li = event.target;
let ul = li.parentNoe;
ul.removeChild(li)
}
