const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){  
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){         //catch the form
  const query = req.body.cityName;
  const unit = 'imperial';
  const apiKey = '195948cc05953e4976469ce55ec3325d';
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&units=' + unit + '&appid=' + apiKey + '';
  
  https.get(url, function(response){

    response.on('data', function(data){
        const weatherData = JSON.parse(data)
        const temp = weatherData.main.temp
        const weatherDescription = weatherData.weather[0].description
        const icon = weatherData.weather[0].icon
        const imageURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'
        res.write('<p>The weather is currently ' + weatherDescription + '!</p>');
        res.write('<h1>The temperature in NYC is ' + temp + ' degree Fahrenheit.</h1>');
        res.write('<img src = ' + imageURL + '>'); 
        res.send()       //we can have only one res.send but multiple res.write
    })
  })
})


app.listen(3000, function(){
    console.log('Server started on port 3000.');
  });
