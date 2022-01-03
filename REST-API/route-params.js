app.get('/news/:topics', function(req, res) => {            // for the pattern
    console.log(req.params.topics);      //match the /:{name of the parameter)
})

app.get('/r/:subreddit', (req, res) => {            // for the pattern
    const { subreddit } = req.params;
    res.send('<h1> Browsing the ${subreddit} subreddit')
})

app.get('/r/:subreddit/:postID', (req, res) => {            // for the pattern
    const { subreddit, postID } = req.params;
    res.send('<h1> Viewing Post ID: {postID} on the ${subreddit} subreddit </1>')
})

app.get('/search', (req, res) => { 
    const { q } = req.query;
    res.send('<h1> Search result for: ${q} </1>')
})

app.get('*', (req, res) => {            // * means everything, always at the end, first will be problem as it runs first even though the path exists
    res.send('I don\'t know that path!')
})

