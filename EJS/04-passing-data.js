// index.js

app.get('/rand', (req, res) => {        //random
    const num = Math.floor(Math.random() * 10) + 1;   //number 1-10
    res.render('random', { bubble: num })     //render to random.ejs file - you can name anything you want but make sure match the name in the ejs file
          //if here we do { num: num }, we can simply use { num } but change the ejs file to num as well
})


//random.ejs

<h1>Your random number is: <%= bubble %></h1>
                          // <%= num %>

  
