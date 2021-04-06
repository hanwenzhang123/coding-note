// an async function always returns a promise
// that promise resolves with the value returned by the async function
// or rejects with an error thrown from within the function
// async/await is syntactic sugar for creating functions that return and wait for promises, it is supplement to promises but not replacement
// benefit: you wirte asynchronous code in a way that resembles synchrnous code

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data  
}

fetchData('dog.ceo/dog-api/breeds')
.then( data=> console.log(data) )


// await
// - pauses the execution of an async function and waits for the resolution of a promise
// - resumes execution and returns the resolved value
// - pausing execution is not going to cause blocking behavior
// - valid only inside functionas marked async


async function getPeopleInSpace(url){
  const peopleResponse = await fetch(url)  //fetch return promise, await handles promise
  //the await keyword is going to wait for a resolves promise returned by fetch
  //then it is going to get the fulfillment value out of the promise and assign it to peopleResponse
  const peopleJson = await peopleResponse.json();
  
  const profiles = peopleJSON.people.map( async (person) => {
    const craft = person.craft;
    const profileResponse = await fetch (wikiUrl + person.name);
    const profileJSON = await profileResponse.json();
    
    return { ...profileJSON, craft };
  });
  
  return Promise.all(profiles);   // here is each of the map call.
}


//async-await example
btn.addEventListener('click', async (event) => {
  event.target.textContent = 'Loading...';

  const astros = await getPeopleInSpace(astrosUrl);
  generateHTML(astros);
  event.target.remove();
});

//better way writing it without the asnc-await
btn.addEventListener('click', event => {
  event.target.textContent = 'Loading...';

  getPeopleInSpace(astrosUrl)
    .then(generateHTML)
    .finally( () =>  event.target.remove()  )
});



// Anonymous async function
(async function() {
  const response = await fetch('...');
})();

// Async function assignment
const getData = async function() {
  const response = await fetch('...');
};

// Arrow functions
const getData = async () => {
  const response = await fetch('...');
};

// Async Function as an argument
btn.addEventListener('click', async () => {
  const response = await fetch('...');
});
