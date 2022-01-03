const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = 'json';
    
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {    //status code is good
        resolve(xhr.response);   //resolve with our xhr.response data
      } else {      //not a working status code
        reject(new Error('Something went wrong!'));
      }
      // const listOfPosts = JSON.parse(xhr.response);
    };

    
    xhr.onerror = function() {    //technically failed, like no internet connection
      reject(new Error('Failed to send request!'));   //reject then we send error
      console.log(xhr.response)
      console.log(xhr.status)
    }

    xhr.send(JSON.stringify(data));   //send the JSON data
  });

  return promise;
}

//GET
async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(   //await the request
      'GET',
      'https://jsonplaceholder.typicode.com/posts'
    );
    const listOfPosts = responseData;   //the promise data we get
    for (const post of listOfPosts) {   //the place we get the post available
      const postEl = document.importNode(postTemplate.content, true);   //node from another document, true makes it deep clone
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      listElement.append(postEl);
    }
  } catch (error) {     //catch the error
    alert(error.message);   //display the error message to user
  }
}

//POST
async function createPost(title, content) {
  const userId = Math.random();   //assign id to each post
  const post = {
    title: title,
    body: content,
    userId: userId
  };

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', event => {
  event.preventDefault();   //for form
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;

  createPost(enteredTitle, enteredContent);   //create the post based on the value
});

//DELETE
postList.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
});
