// most common way to handle exceptions(errors) when using async/await, handle all fetch requests


async function getJSON(url){
  try{
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;      //any error catch here will bubble up
  }
}



btn.addEventListener('click', event => {
  event.target.textContent = 'Loading...';

  getPeopleInSpace(astrosUrl)
    .then(generateHTML)
    .catch ( e => {
      peopleList.innerHTML ='<h3>Something went wrong!</h3/';
      console.error(e)      //print the error message in the console 
  })
    .finally( () =>  event.target.remove()  )
});



//Using try...catch and async/await in the event listener:

btn.addEventListener('click', async (event) => {
  event.target.textContent = 'Loading...';
  try {
    const astros = await getPeopleInSpace(astrosUrl);
    generateHTML(astros);
  } catch(e) {
    peopleList.innerHTML = '<h3>Something went wrong!</h3>';
    console.error(e);    
  } finally {
    event.target.remove();
  }
});
