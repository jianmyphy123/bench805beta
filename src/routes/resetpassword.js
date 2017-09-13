var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var bcrypt = require('bcryptjs');
var User = require('../models').User;
var jwt = require('jsonwebtoken');
var config = require('../config/data');

var mailTransporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: config.email.username,
    pass: config.email.password
  }
});

router.post('/', function(req, res) {

  let email = req.body.email;

  User.findOne({where: {email}}).then(user => {
    if(!user) {
      res.status(400).json({errors: ['Email not found']});
    } else {

      if(!user.active) {
        res.status(400).json({errors: ['Account has not activated']});
      } else {
        let resetToken = jwt.sign({ email }, config.secret, { expiresIn: '24h'});
        user.update({resetToken}).then(() => {

          var emailOptions = {
            from: config.email.serviceName + ' <'+ config.email.serviceEmail +'>',
            to: email,
            subject: 'Reset Password Request',
            text: 'Hello '+user.get('firstname')+', You recently request a password reset link. Please click on the following link to complete your activation: '+ config.domain +'/resetpassword/'+resetToken,
            html: 'Hello <strong>'+user.get('firstname')+'</strong>,<br><br>You recently request a password reset link. Please click on the following link to complete your activation: <br><br><a href="'+ config.domain +'/resetpassword/'+resetToken+'">'+ config.domain +'/resetpassword/</a>'
          }
          mailTransporter.sendMail(emailOptions, (error, info) => {
            if(error) {
              console.log(error);
            }
            else {
              console.log('Message Sent: '+info.response);

              res.json({success: true});
            }
          });

        })
      }

    }
  });

});

router.post('/reset', function(req, res) {

  let { token, password } = req.body;

  User.findOne({where: {resetToken: token}}).then(user => {
    if(user) {
      jwt.verify(token, config.secret, (err, decoded) => {
        if(err) {
          res.status(400).json({errors: ['Reset password link has expires']});
        } else if(!user) {
          res.status(400).json({errors: ['Reset password link has expires']});
        } else {
          let hashPassword = bcrypt.hashSync(password, 10);
          user.update({password: hashPassword, resetToken: null}).then(() => {
            res.json({success: true});
          });

        }
      })
    } else {
      res.status(400).json({errors: ['Reset password link has expires']});
    }
  })

});

module.exports = router;
