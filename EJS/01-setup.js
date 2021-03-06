// $ npm i ejs
// $ mkdir views    - expect a view folder, it is a default ejs file
// $ mkdir public   - a default folder named public for css img
// $ touch home.ejs     -create a ejs file named home in this case

const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');       //path with the specific join()

const app = express();

app.set('view engine', 'ejs');    //ejs setup
app.set('views', path.join(__dirname, '/views');    //join the full path of current file to get /views, so you can access anywhere

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));    // the stylesheet

app.get('/', function(req, res){ 
    res.render('home');       //the home.ejs
});  

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})
