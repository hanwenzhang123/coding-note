
var express = require('express');
var app = express();
var PORT = 3000;
  
// View engine setup
app.set('view engine', 'ejs');
  
// Without middleware
app.get('/user', function(req, res){
  
    // Rendering home.ejs page
    res.render('home');
})
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});





//example 2
var express = require('express');
var app = express();
var PORT = 3000;
  
// View engine setup
app.set('view engine', 'ejs');
  
// With middleware
app.use('/', function(req, res, next){
    res.render('User')    // User.ejs
    next();
});
  
app.get('/', function(req, res){
    console.log("Render Working")
    res.send();
});
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});




// here you set that all templates are located in `/views` directory
app.set('views', __dirname + '/views');

// here you set that you're using `ejs` template engine, and the
// default extension is `ejs`
app.set('view engine', 'ejs');

// here you render `orders` template
response.render("orders", {orders: orders_json});

What does res.render do and what does the html file look like?

res.render() function compiles your template (please don't use ejs), inserts locals there, and creates html output out of those two things.

Answering Edit 2 part.

// here you set that all templates are located in `/views` directory
app.set('views', __dirname + '/views');

// here you set that you're using `ejs` template engine, and the
// default extension is `ejs`
app.set('view engine', 'ejs');

// here you render `orders` template
response.render("orders", {orders: orders_json});

//So, the template path is views/ (first part) + orders (second part) + .ejs (third part) === views/orders.ejs


