//data.json
We have a data.json file now
const redditData = require('./data.json');    // we have objects - name, subscribers, description and posts


//index.js
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];     //now we can do localhost:3000/r/chicken - then the data comes out from out JSON file
    if (data) {   //only the data exists we pass to subreddit.ejs
        res.render('subreddit', { ...data });   // spread the data to the dobject we pass in, give access to individual property 
    } else {      //not the data we found then passs to notfound.ejs
        res.render('notfound', { subreddit })
    }
})


// subreddit.ejs
// we used ...data above so we can access to all name, subscribers, description and posts from JSON file
<body>
    <h1>Browsing The <%= name %> subreddit</h1>
    <h2><%= description %></h2>
    <p><%=subscribers %> Total Subscribers</p>
    <hr>

    <% for(let post of posts) { %>
    <article>
        <p><%= post.title %> - <b><%=post.author %></b></p>
        <% if(post.img) { %>
        <img src="<%= post.img %>" alt="">
        <% } %>
    </article>
    <% } %>
</body>
                         
 
                         
//notfound.ejs  
<body>
    <h1>I'm sorry, we couldn't find the <%= subreddit %> subreddit!</h1>
</body>
                         
                         
                          
