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
          res.status(401).json({errors: ['Invalid email or password']});
        } else {

          if(isMatch) {

            if(!user.enabled) {
              res.status(401).json({errors: ["Please contact administrator at <a href='mailto:info@bench805.com' title='info@bench805.com'>info@bench805.com</a> regarding your account"]});
            } else if(!user.active) {
              res.status(401).json({errors: ['Your account is not yet activated. Please check your e-mail for activation link.']});
            } else {
              const token = jwt.sign({
                id: user.get('id'),
                firstname: user.get('firstname'),
                lastname: user.get('lastname'),
                email: user.get('email'),
                privilege: user.get('privilege')
              }, config.secret);

              res.json({success: true, token});
            }

          } else {
            res.status(401).json({errors: ['Invalid email or password']});
          }

        }

      });
    } else {
      res.status(401).json({errors: ['Invalid email or password']});
    }
  });
});

module.exports = router;
