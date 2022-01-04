//XMLHttpRequest - some older browser supports only xml not fetch
//fetch() - modern JS method, fetch resources asynchronously across the network, fetch uses promise by default
//when use fetch(), need response.json() to parse response json data, and it yields a promise - so the result is not available in the next line

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  // const xhr = new XMLHttpRequest();
  // xhr.setRequestHeader('Content-Type', 'application/json');    //add header here in using xhr

  //   xhr.open(method, url);

  //   xhr.responseType = 'json';

  //   xhr.onload = function() {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       resolve(xhr.response);
  //     } else {
  // xhr.response;
  //       reject(new Error('Something went wrong!'));
  //     }
  //     // const listOfPosts = JSON.parse(xhr.response);
  //   };

  //   xhr.onerror = function() {
  //     reject(new Error('Failed to send request!'));
  //   };

  //   xhr.send(JSON.stringify(data));
  // });

  // return promise;
  return fetch(url, {   //pass a second parameter to configure the request
    method: method,   //set the method
    body: data,   //set the JSON data 
    // body: JSON.stringify(data),
    // headers: {   //metadata - what kind of data will be required, required only if the server required
    //   'Content-Type': 'application/json'   //typical header for JSON data
    // }
  })
    .then(response => {   //have to do this extra .then() step to turn the streamed response body data into a snapshot which you can work
      if (response.status >= 200 && response.status < 300) {    //check response data, here is the successful case
        return response.json();   //covert response body into a snapshot parsed body (from JSON to JS object array)
        //response.text() - return plain text
        //response.blob() - downloading file, access to the file
      } else {    //error case
        return response.json().then(errData => {     //error data handling, when use fetch, look into the error response body 
          console.log(errData);
          throw new Error('Something went wrong - server-side.');
        });
      }
    })  
    .catch(error => {   //for catching general technical error, like no network connection
      console.log(error);
      throw new Error('Something went wrong!');
    });
}

async function fetchPosts() { 
  try {
    const responseData = await sendHttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts'
    );
    const listOfPosts = responseData;
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  };

  const fd = new FormData(form);    //built-in function, working with FormData, not json format, passing in form, collect data from form
  // fd.append('title', title);   //pass in key and value
  // fd.append('body', content);    //if we have title and content as id on form, no needs to append here
  fd.append('userId', userId);

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', fd);
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', event => {
  event.preventDefault(); //collect the form data and send to server
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;

  createPost(enteredTitle, enteredContent);
});

postList.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    sendHttpRequest(
      'DELETE',
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});
 
