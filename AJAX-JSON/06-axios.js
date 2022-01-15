axios.get(url).then((res) => console.log(res))
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

//performing a post request
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


//axios.js 
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
  axios.get('https://reqres.in/api/users').then(response => {
    console.log(response);
  });
};

const sendData = () => {
  axios
    .post(
      'https://reqres.in/api/register',   //takes url where you want to send the data
      {      //append the data
        email: 'eve.holt@reqres.in' 
        // password: 'pistol'
      },
      {      //no needs to configure the header manually
        // headers: {
        //   'Content-Type': 'application/json'
        // }
      }
    )
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err, err.response);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);


//fetch.js
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
  return fetch(url, {   //fetch() - JS built-in function
    method: method,
    body: JSON.stringify(data),
    headers: data ? { 'Content-Type': 'application/json' } : {}
  }).then(response => {
    if (response.status >= 400) {
      // !response.ok - error handling
      return response.json().then(errResData => { //return the error
        const error = new Error('Something went wrong!');
        error.data = errResData;  //create error data
        throw error;
      });
    }
    return response.json(); //return the data
  });
};

const getData = () => {
  sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
    console.log(responseData);
  });
};

const sendData = () => {
  sendHttpRequest('POST', 'https://reqres.in/api/register', {
    email: 'eve.holt@reqres.in'
    // password: 'pistol'
  })
    .then(responseData => {
      console.log(responseData);
    })
    .catch(err => {
      console.log(err, err.data); //get the err.data
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);


//xhr.js 
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = 'json';

    if (data) {
      xhr.setRequestHeader('Content-Type', 'application/json');
    }

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject('Something went wrong!');
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
};

const getData = () => {
  sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
    console.log(responseData);
  });
};

const sendData = () => {
  sendHttpRequest('POST', 'https://reqres.in/api/register', {
    email: 'eve.holt@reqres.in'
    // password: 'pistol'
  })
    .then(responseData => {
      console.log(responseData);
    })
    .catch(err => {
      console.log(err);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
 
