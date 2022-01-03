//What is DOM?
JavaScript (hosted language)
Broswer
- the document object model (DOM)
- parsed & rendered by browser
DOM is not strictly tied to broswers! there are other tools that can parse HTML.

//Document & Window Object
document
- root DOM node
- provides access to element querying, dom content, etc
window
- top most document
- the active browser window / tab
- acts as global storage for script, also provides access to window-specific properties and methods (measure window width)

console.dir(document) //access to document object
window  //access to window object

//Understanding the DOM and how it created
element node
text node (empty spaces that you do not see)

$0 always gives you access to the last element you selected in the element tab.

//Querying elements
querySelector(), getElementById()
- return single elements
- different ways of querying elements(by css selector, by id)
- direct reference to dom element is return (dom nodes are just javascript objects in the end - reference values). 
  these methods return the object references (addresses)
.querySelectorAll(), getElementsByTagName()
- return collections of elements(array-like objects): NodeList
- different ways of querying elements(by css selector, by tag name, by css class)
- .querySelectorAll() returns a non-live nodelist, getXByY return live NodeList

//Nodes & Element
//Nodes
- the objects that make up the DOM
- HTML tags are element nodes or just elements
- text creates text nodes
- attributes creates attribute nodes
//Elements
//elements are one type of nodes
- special properties and methods to interact with the elements
- available methods and properties depend on the kind of element
- can be selected in various different ways via javascript
- can be created and removed via javascript

//Attributes vs Properties
- often (but not always), attibutes are mapped to properties and "live synchronization" is set up
- attributes (placed in HTML code, on element tags)
- const input (input.id(live-sync), input.className(live-sync), input.value(1-way live-sync))
- properties (automatically added on created DOM objects)

//Styling DOM Elements
via style property
- direct target individual css style (on the element)
- controls styles as inline styles on the element
- style property names are based on css properties but have adjusted names (eg backgroundColor)
via className
- directly
- set/control all classes at once
- you can also control the id or other properties
via classList
- conveniently add, remove or toggle CSS classes
- fine-grained control over classes that are added
- can be used with className (with care)


//Summary: Node Query Methods
document.body => Selects the <body> element node.
document.head => Selects the <head> element node.
document.documentElement => Selects the <html> element node
document.getElementById(<ID>);
document.querySelectorAll(<CSS selector>);
document.getElementsByClassName(<CSS CLASS>);
document.getElementsByTagName(<HTML TAG>);
document.querySelector(selectors);
document.querySelectorAll(selectors);

//Adding Elements
.createElement("<HTML TAG>")
.setAttribute("attribute", "value")
.getAttribute

//Change DOM Properties
.textContent
.id
.className
.style.color
.style.backgroundColor

//Parent
.parentNode
.parenElement
.closest()

//Sibling
.previousSibling
.previousElementSibling
.nextSibling
.nextElementSibling

//Child
.firstChild
.firstElementChild
.lastChild
.lastElementChild
.childNodes
.children
.querySelector()

//Clone - copy element
.cloneNode(false) (default, only the list item itself is cloned, but no nested elements you might have in there)
.cloneNode(true) (deep clone - direct child, and all child elements of that element, and all descendants in general will be cloned)

//Adding Elements via HTML in code
.textContent - everything in the content
.innerHTML - contain html code, add(render) html string

//Summary: Insert, Replace, Remove
//Insert 
append(); appendChild();  //append new dom element/node
prepend(); insertBefore(); before(); after();  //insert new dom element/node in specific position

//Replace
replaceWith(); replaceChild();  //replace existing dom element/node with new one

//Remove
someElement.innerHTML = '' => Clears all HTML content of someElement and hence removes any objects rendered in there.
someElement.remove() => Removes a single element (someElement) from the DOM
someElement.parentNode.removeChild(someElement) =>  Removes the provided child element (NOT the element on which you call it). 
  
