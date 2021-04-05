function getJSON(url) {       //if you use Promise, don't need callback here, convert to promise
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if(xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        resolve(data);
      } else {
        reject( Error(xhr.statusText) );
      }
    };
    xhr.onerror = () => reject( Error('A network error occurred') ); //onerror eventhandler here
    xhr.send();
  });
}



btn.addEventListener('click', (event) => {
  getJSON(astrosUrl)       //something happens after something else is resolved
    .then(getProfiles)    //this is going to fetch the data from the open notify API
                          //if this task is resolved, it is going to pass the return data down to the then()
    .then( data => console.log(data) )    //then used in getProfiles to request data here from Wikipedia API
                                          //once the promise is fulfilled, this handler function will be called asynchronousely and it is going to return a value in JSON
    .catch( err => console.log(err) )

  event.target.remove();
});




//Promise.all() - keep track of multiple asynchronous operations 

function getProfiles(json) {
  const profiles = json.people.map( person => {
    return getJSON(wikiUrl + person.name);      
  }); 
  return Promise.all(profiles);
}
//promise.all is going to wait on all of the individual promise objects then joins them into one and returns a value when all the specific promises are fulfilled.
//promise.all will reject as soon as any of the promises passed to it failed, it rejects the entire promise. 


