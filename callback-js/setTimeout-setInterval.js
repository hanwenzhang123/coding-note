const surpriseSection = document.getElementById('surprise');

function showSurprise() {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}

const randomTime = Math.random() * 4000;

setTimeout(showSurprise, randomTime)

//setTimeout - delay function
//setTimeout(showSurprise, 1000)


//anonymoous function with setTimeout
setTimeout(() => surpriseSection.textContent = '🎉 Surprise! 🎉', randomTime)

setTimeout(callback, delay); //only run one time
setInterval(callback, delay); // run continuously



//clock application example
const clockSection = document.getElementById("clock");

function getTime() {
  function pad(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  const now = new Date();

  const hh = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());

  return `${hh}:${mm}:${ss}`;
}

function tickClock() {
  clockSection.textContent = getTime();
}

tickClock(); // you have to invoke the callback yourself first mannually you want it to run immediately. it is important to call the function first then the clock goes itself
setInterval (tickClock, 1000);
