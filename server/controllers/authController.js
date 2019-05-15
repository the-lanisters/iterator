const Database = require('./dbController');
const bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
let config = require('../config');
let middleware = require('../middleware');

function validUser(user) {
  //check if user and password
  const validUser =
    typeof user.username === 'string' && user.username.trim() != '';
  const validPassword =
    typeof user.password === 'string' &&
    user.password.trim() != '' &&
    user.password.trim().length >= 6;

  return validUser && validPassword;
}

//route paths are prepended with /auth

const signUp = (req, res, next) => {
  if (validUser(req.body)) {
    Database.getOneUserByUsername(req.body.username).then(user => {
      console.log('user', user);
      // if user not found
      if (!user) {
        // then this is a unique user
        // hash password - bcrypt.hash(myPlaintextPassword, saltRounds)
        bcrypt.hash(req.body.password, 10).then(hash => {
          // insert user in db
          const user = {
            user: req.body.username,
            password: hash
          };
          Database.createUser(user).then(id => {
            // return id as json
            //id,
            res.json({
              message: 'signup'
            });
          });
          // stay on page, rather than redirect
        });
      } else {
        //user in use
        next(new Error('user in use'));
      }
    });
  } else {
    //send error
    next(new Error('Invalid user'));
  }
};

const signIn = (req, res, next) => {
  if (validUser(req.body)) {
    // check to see if in DB
    Database.getOneUserByUsername(req.body.username).then(user => {
      console.log('user', user);
      if (user) {
        // compare entered password with hashed password in db
        bcrypt.compare(req.body.password, user.password).then(result => {
          // if the passwords matched
          if (result) {
            // set the 'set-cookie' header
            const isSecure = req.app.get('env') !== 'development';
            res.cookie('user_id', user.id, {
              httpOnly: true,
              secure: isSecure, //secure when in production
              signed: true
            });
            //adding JWT
            let token = jwt.sign(
              { username: req.body.username },
              config.secret,
              { expiresIn: '24h' }
            );
            res.cookie('token', token, {
              httpOnly: true,
              secure: isSecure
            });
            //
            //login in
            res.json({
              result,
              message: 'Logging in'
            });
            // redirect ?
          } else {
            next(new Error('Invalid login'));
          }
        });
      } else {
        next(new Error('Invalid login'));
      }
    });
  } else {
    next(new Error('invalid user'));
  }
};

module.exports = {
  signIn,
  signUp
};
