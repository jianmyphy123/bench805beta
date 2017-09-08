var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('./models').sequelize;

var app = express();

var PORT = process.env.PORT || 3000;

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
db
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
//
// var tempTable = db.define('concierge_items', {
//   title: Sequelize.STRING,
//   body: Sequelize.STRING,
// }, { timestamps: false });
//
// tempTable.create({title: 'title value', body: 'body value'}).then(data => {
//   console.log(data.get({
//    plain: true
//  }));
// });



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src/build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './src/build', 'index.html'));
});

app.listen(PORT, process.env.IP, function() {
  console.log("Server has started " + PORT);
});
