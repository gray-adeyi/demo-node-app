const express = require('express');
const path = require('path');
const auth = require('http-auth');
const Registration = require('../models/Registration');

const basic = auth.basic({
  file: path.join(__dirname, '../users.htpasswd'),
});

const {
  check,
  validationResult
} = require('express-validator');

router = express.Router();

router.get('/', (req, res) => {
  res.render('form', {
    title: 'Registration Form'
  });
});

router.post('/',
  [
    check('name')
    .isLength({
      min: 1
    })
    .withMessage('Please enter a name'),
    check('email')
    .isLength({
      min: 1
    })
    .withMessage('Plese enter an email')
  ], (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const registration = new Registration(req.body);
      registration.save()
        .then(() => {res.send('Thank you for your registration!');})
        .catch(err => {res.send('Sorry! Something went wrong.');});
    } else {
      res.render('form', {
        title: 'Registration Form',
        errors: errors.array(),
        data: req.body,
      });
    }

  });

router.get('/registrations', basic.check((req, res) => {
  Registration.find()
    .then((registrations) => {
      res.render('index', {title: 'Listing registrations', registrations});
    })
    .catch(err => { res.send('Sorry! Something went wrong.');});
}));

module.exports = router
