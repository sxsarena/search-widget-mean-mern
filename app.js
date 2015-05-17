var express   = require('express');
var load      = require('express-load');
var http      = require('http');
var path      = require('path');
var fs 		  = require('fs');
var bodyParser = require('body-parser')
var mongoose  = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/desafiohu', function(error){
  if(error){
    console.log('Error ao conectar ao mongoDB');
  }
});

app.set('views', path.join(__dirname, 'app/views/pages'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

// dynamically include routes (Controller)
fs.readdirSync('./app/controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./app/controllers/' + file);
      route.controller(app);
  }
});

load('models').then('controllers').into(app);

var server = app.listen(9000, function () {
  console.log('Acesse pelo browser http://localhost:9000');
});
