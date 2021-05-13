//Condition
//index.js
app.get('/rand', (req, res) => {        //random
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num })		//{num: num}
})

//random.ejs
<h1>Your random number is: <%= num %></h1>
<% if(num % 2 === 0){ %>
<h2>That is an even number!</h2>
<% } else { %>
<h2>That is an odd number!</h2>
<% } %>

<p>Here's an alternate way of doing it:</p>
<h3>That number is: <%= num%2===0 ? 'EVEN' : 'ODD' %></h3>

               
               

//Loops
//index.js
app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats })
})

//cats.ejs
<% for(let cat of cats) { %>
<li><%= cat %></li>         //the value of the cat
<% } %>

           
