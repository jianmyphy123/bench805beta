var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var models = require('./models');

var users = require('./routes/users');

var app = express();

var PORT = process.env.PORT || 8080;

// var db = new Sequelize('bench805', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
//
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });
//


// var User = models.User;
//
// console.log(models['User']);
//
// User.create({firstname: 'alex', lastname: 'burk', email: 'jianmyphy1232', password: 'wefwewi', jobfunction: 'wef'}).then(data => {
//   console.log(data.get({
//    plain: true
//  }));
// });



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/users', users);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

models.sequelize.sync().then(function() {
  app.listen(PORT, process.env.IP, function() {
    console.log("Server has started " + PORT);
  });
});
