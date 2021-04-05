//sync - no good
const btn = document.getElementById('btn');

function wait() {
 console.log('starting...');
 let start = new Date().getTime();
 while (new Date().getTime() - start < 8000);
 console.log('finished!');    //this line can not run until the previous line finishes
}

btn.addEventListener('click', wait);



//async - good
const btn = document.getElementById('btn');

function carryOn() {
  console.log('starting...');
  setTimeout(() => {  //asynchronously, while the web runs, you can do other things
    console.log('finished!');
  }, 8000);
};

btn.addEventListener('click', carryOn);



//real world example - request data from server
function getJSON(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      data.map(p => console.log(p));
    }
  };
  xhr.send(null);
}

getJSON('https://jsonplaceholder.typicode.com/photos'); // like 500 photos here, large data
alert('Welcome to this page!');


