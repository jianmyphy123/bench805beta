var express = require('express');
var router = express.Router();
var User = require('../models').User;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config/data');


router.post('/', function(req, res) {
  const { email, password } = req.body;

  User.findOne({where: {email}}).then(user => {
    if(user) {
      bcrypt.compare(password, user.get('password'), (err, isMatch) => {
        if(err) {
          res.status(401).json({errors: { form: 'Invalid Credentials' }});
        } else {

          if(isMatch) {
            const token = jwt.sign({
              id: user.get('id'),
              firstname: user.get('firstname'),
              lastname: user.get('lastname'),
              email: user.get('email'),
              privilege: user.get('privilege')
            }, config.secret);

            res.json({success: true, token});
          } else {
            res.status(401).json({errors: { form: 'Invalid Credentials' }});
          }

        }

      });
    } else {
      res.status(401).json({errors: { form: 'Invalid Credentials' }});
    }
  });
});

module.exports = router;
