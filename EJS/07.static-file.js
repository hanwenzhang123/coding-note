static file works as a middleware

express.static(root, [option]);

//in the index.js
app.use(express.static('public"));     //public directory, you can store css, img, etc
app.use(express.static(path.join(__dirname, 'public')))   //use this so you can run it any path even one folder out
                                                        //it takes the absolute path to the index.js file


//in the subreddit.ejs
<link rel="stylesheet" href="/app.css">   // we do not need to indicate the public folder but just the file name



    
