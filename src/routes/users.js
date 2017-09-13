var express = require('express');
var router = express.Router();
var Validator = require('validator');
var _ = require('lodash');
var User = require('../models').User;
var bcrypt = require('bcryptjs');
var nodemailer = require('nodemailer');
var jwt = require('jsonwebtoken');
var config = require('../config/data');


var mailTransporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: config.email.username,
    pass: config.email.password
  }
});

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
    errors.jobfunction = 'Select one of the items';

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

      const { firstname, lastname, email } = data;

      data.password = bcrypt.hashSync(data.password, 10);
      data.temporaryToken = jwt.sign({ firstname, lastname, email }, config.secret, { expiresIn: '24h'});
      User.create(data).then(user => {

        var emailOptions = {
          from: config.email.serviceName + ' <'+ config.email.serviceEmail +'>',
          to: email,
          subject: config.domain + ' Activation Link',
          text: 'Hello '+firstname+',Thank you for your registering at '+ config.domain +'. Please click on the link to complete your activation: '+config.domain+'/activate/'+data.temporaryToken,
          html: 'Hello <strong>'+firstname+'</strong>,<br><br>Thank you for your registering at '+ config.domain +'. Please click on the link to complete your activation: <br><br><a href="'+config.domain+'/activate/'+data.temporaryToken+'">'+config.domain+'/activate</a>'
        }

        mailTransporter.sendMail(emailOptions, (error, info) => {
          if(error) {
            console.log(error);
          }
          else {
            console.log('Message Sent: '+info.response);
            res.json({confirmation: 'success'});
          }
        });


      });
    } else {
      res.status(400).json(errors);
    }
  })

});

router.post('/:identifier', function(req, res) {

  var email = req.params.identifier;
  User.findOne({where: {email}, attributes: ['email']}).then(user => {res.json({user})});

});

router.post('/activate/:token', function(req, res) {

  let token = req.params.token;

  User.findOne({where: {temporaryToken: token}}).then(user => {
    if(!user) {
      res.status(400).json({errors: 'Activation link has expires'});
    } else {
      jwt.verify(token, config.secret, (err, decoded) => {
        if(err) {
          res.status(400).json({errors: 'Activation link has expires'});
        } else {
          user.update({active: true, temporaryToken: null}).then(() => {
            return res.json({confirmation: 'success'});
          });
        }
      });
    }
  });

});

module.exports = router;
