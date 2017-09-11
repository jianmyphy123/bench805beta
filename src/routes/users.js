var express = require('express');
var router = express.Router();
var Validator = require('validator');
var _ = require('lodash');
var User = require('../models').User;
var bcrypt = require('bcryptjs');


function validateInput(data) {
  var errors = {};

  if(Validator.isEmpty(data.firstname))
    errors.firstname = 'This field is required';

  if(Validator.isEmpty(data.lastname))
    errors.lastname = 'This field is required';

  if(Validator.isEmpty(data.email))
    errors.email = 'This field is required';

  if(!Validator.isEmail(data.email))
    errors.email = 'Email is invalid';

  if(Validator.isEmpty(data.jobfunction))
    errors.jobfunction = 'This field is required';

  if(Validator.isEmpty(data.password))
    errors.password = 'This field is required';

  if(Validator.isEmpty(data.password2))
    errors.password2 = 'This field is required';

  if(!Validator.equals(data.password, data.password2))
    errors.password2 = 'Password must match';

  return User.find( { where: {email: data.email} }).then(user => {

    if(user) {
      if(user.get('email') == data.email) {
        errors.email = 'There is user with such email';
      }
    }

    return {
      errors,
      isValid: _.isEmpty(errors)
    }

  });
}

router.post('/', function(req, res, next) {

  var data = req.body;

  validateInput(data).then(({errors, isValid}) => {
    if(isValid) {
      data.password = bcrypt.hashSync(data.password, 10);
      User.create(data).then(user => res.json({confirmation: 'success'}));
    } else {
      res.status(400).json(errors);
    }
  })

});

router.post('/:identifier', function(req, res) {

  var email = req.params.identifier;
  User.findOne({where: {email}, attributes: ['email']}).then(user => {res.json({user})});

});

module.exports = router;
