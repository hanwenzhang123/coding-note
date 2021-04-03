 
const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

function makeRed(element) {
    element.style.backgroundColor = "red";
}

function makeBlue(element) {
    element.style.backgroundColor = "blue";
}

function makeGreen(element) {
    element.style.backgroundColor = "green";
}

function addStyleToElement(element, callback) {
    callback(element);
}

addStyleToElement(div1, makeRed);   //makeRed(div1)
addStyleToElement(div2, makeBlue);  //makeBlue(div2)
addStyleToElement(div3, makeGreen); //makeGreen(div3)




//refresher
element.addEventListener(evenType, callback)
function(event){
  //Do something
}
event => {
  //Do something
}
event.type
event.target //element - it triggers the event!!!




//original
const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

nameInput.addEventListener('focus', event => {
  event.target.className = 'highlight';
});

nameInput.addEventListener('blur', event => {
  event.target.className = '';
});

messageTextArea.addEventListener('focus', event => {
  event.target.className = 'highlight';
});

messageTextArea.addEventListener('blur', event => {
  event.target.className = '';
});


//final
const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

const focusHandler = event => {
  event.target.className = 'highlight';
};

const blurHandler = event => {
  event.target.className = '';
};

nameInput.addEventListener('focus', focusHandler);
nameInput.addEventListener('blur', blurHandler);

messageTextArea.addEventListener('focus', focusHandler);
messageTextArea.addEventListener('blur', blurHandler);


