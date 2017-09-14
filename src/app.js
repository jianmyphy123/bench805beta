var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var models = require('./models');
var multer = require('multer');

var users = require('./routes/users');
var auth = require('./routes/auth');
var resetpassword = require('./routes/resetpassword');
var admin = require('./routes/admin');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(multer({dest: 'src/uploads'}).any());

app.use('/users', users);
app.use('/auth', auth);
app.use('/resetpassword', resetpassword);
app.use('/admin', admin);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

models.sequelize.sync().then(function() {
  app.listen(PORT, process.env.IP, function() {
    console.log("Server has started " + PORT);
  });
});
