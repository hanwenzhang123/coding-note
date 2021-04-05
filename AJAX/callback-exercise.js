//Invoke just means call/run/execute/trigger (that funtion), which is what () does.
//For example: playSound(); is invoking the playSound function - much like hitting a 'PLAY' button on a CD player.

function makeMeal(meal, cb) {
  alert(`Preparing ${meal}.`);
  cb() ;
}
makeMeal('lunch', () => {
  alert('Finished the meal!');
});




//the pyramid of doom - multiple callbacks are nested one after the other, making your code difficult to understand and maintain.

//A callback function in an asynchronous program executes at some point later, once the parent function receives the data it needs.

  
  
  
function handleChange() { console.log('I was changed!'); }
select.addEventListener('change', handleChange);  
//leaving off the (), because you are not running it yet, Later it will be ran/executed by calling it (or "invoking it") by using handleChange(); (In this case, "later" is whenever select is changed.)
// "pass a reference to the function", that just means the name of the function.



//  the function assigned to xhr.onload considered callback
function getJSON(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {
    if(xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      console.log(data);
    }
  };
  xhr.send();
}
