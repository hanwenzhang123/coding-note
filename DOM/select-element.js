const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});


//get a collection in a loop
const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}

const errorNotPurple = document.getElementsByClassName('error-not-purple');

for (let i = 0; i < errorNotPurple.length; i += 1) {
  errorNotPurple[i].style.color = 'red';
}



//document.querySelector() select only the first element

//Using CSS Queries to Select Page Elements4:50

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}

const errorNotPurple = document.querySelectorAll('.error-not-purple'); // .is for class

for (let i = 0; i < errorNotPurple.length; i += 1) {
  errorNotPurple[i].style.color = 'red';
}

const evens = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < evens.length; i += 1) {
  evens[i].style.backgroundColor = 'lightgray';
}



//select all link insidee the nav
let navigationLinks = document.querySelectorAll('nav a'); 

//select all links inside the unordered list with the ID gallery
let galleryLinks = document.querySelectorAll('#gallery a');
