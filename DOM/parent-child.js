//returns the parent node of the specified node, as a Node object
//This property is read-only
//In HTML, the document itself is the parent node of the HTML element, HEAD and BODY are child nodes of the HTML element

Element.parentNode // get the parent node

let paragraph = document.getElementById('myParagraph')
let parent = paragraph.parentNode
parent.removeChild (paragraph);
//get the reference to parent node
//removes a child node from the DOM and returns the removed node.

if (event.target.tagName == 'LI' {
let li = event.target;
let ul = li.parentNode;
ul.removeChild(li)
}

//traverse to the parent element of the removeMe element
//remove the removeMe element from the parent element

var removeMe = document.querySelector('.remove_me');
var parent = removeMe.parentNode;
parent.removeChild(removeMe);
