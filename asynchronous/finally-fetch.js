
//finally()
//it gets called once a promise is fully settled, regardless of whether it's fulfilled or rejected. 
//Finally is useful when you need to do some clean up after the promise sequence finished.

btn.addEventListener('click', (event) => {
  event.target.textContent = "Loading...";  //the text shows up on the button while loading
 
  getJSON(astrosUrl)     
    .then(getProfiles)    
    .then( data => console.log(data) )                  
    .catch( err => {
    peopleList.innerHTML = '<h3>Something went wrong</h3>'  //this message will appear on the page if there is something wrong 
    console.log(err) })
    .finally ( ()=> event.target.remove() );   // the button removes from the page after the page is loaded
}); //finally is always at the end

//fetch()    fetch('api.com')
//network request, only takes one mandatory argument, the path to the resource you want to fetch
////the best part to use fetch is that we can get rid of the getJSON part entirely because fetch() itself handles it
//fetch itself returns to promise, then .then and pass it to the json
//need a response, in order to use it, we need to parse it to json
//.then(response => response.json() ) this code will read, and return a promise that response to json


btn.addEventListener('click', (event) => {
  event.target.textContent = "Loading...";  //the text shows up on the button while loading
  
  fetch(astrosUrl)     //the fetch itself returns back to promise
    .then(response => response.json() )     //need to pass to json
    .then(getProfiles)    // once resolve, pass to getProfiles
    .then( data => console.log(data) )                  
    .catch( err => {
    peopleList.innerHTML = '<h3>Something went wrong</h3>'  //this message will appear on the page if there is something wrong 
    console.log(err) })
    .finally ( ()=> event.target.remove() );   // the button removes from the page after the page is loaded
}); 


//original code
function getProfile(json){
  const profiles = json.people.map( person => {
    return getJSON(wikiUrl + person.name);
  });
  return Promise.all(profiles);
}

//fetch json code
function getProfile(json){
  const profiles = json.people.map( person => {
    return fetch(wikiUrl + person.name);
           .then(response => response.json() )
           .then( profile => {
             return {...profile, craft};
           })
           .catch(err => console.log( 'Error Fetching  Wiki' ,err) )
  });
  return Promise.all(profiles);   //exactly as before once the code is fulfilled
}

