// A callback function in an asynchronous program executes at some point later, once the parent function receives the data it needs.

const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Make an AJAX request
function getJSON(url, callback) {   //this represents a function that is going to be passed into any getJSON function call.
//   it is going to get callback and executed at a later time using the value returned by AJAX call. 
//   It should be called as soon as the server sends back the response and it gets parsed t JSON.
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {    //onload event
    if(xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      return callback(data);  
    }         //use the first argument url to make the ajax request
    //if it is valid, it is going to call the function that gets passed as the second argument and return data in JSON.
  };  
  xhr.send();
}

function getProfiles(json){
    json.people.map(person => {     //the name - data, json, item, x, el (for element) - is arbitrary, meaning it doesn't matter what you call it. For...of or forEach were better alternatives
    getJson(wikiUrl + person.name, generateHTML);
   });
};
  

// Generate the markup for each profile
function generateHTML(data) {
  const section = document.createElement('section');
  peopleList.appendChild(section);
  // Check if request returns a 'standard' page from Wiki
  if (data.type === 'standard') {
    section.innerHTML = `
      <img src=${data.thumbnail.source}>
      <h2>${data.title}</h2>
      <p>${data.description}</p>
      <p>${data.extract}</p>
    `;
  } else {
    section.innerHTML = `
      <img src="img/profile.jpg" alt="ocean clouds seen from space">
      <h2>${data.title}</h2>
      <p>Results unavailable for ${data.title}</p>
      ${data.extract_html}
    `;
  }
}

btn.addEventListener('click', (event) => {    
  getJSON(astrosUrl, getProfiles);     //callback here receive the parent function passed to here from getJSON
  event.target.remove();
  });

//getJSON(astrosUrl) - is to get the data from the URL with all the information
