Event.target	
//reference the element that is first receive the event

document.addEventListener('click',(event) => {
  condole.log (event.target);  //check the target of the event you click on
});

event.target.tagName == "TAG NAME ALL CAPITAL"
//read-only property of the Element interface returns the tag name of the element on which it's called
