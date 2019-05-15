const router = require('express').Router();
const dbController = require('../controllers/dbController');
let jwt = require('jsonwebtoken');
let config = require('../config');

const verifyToken = (req, res, next) => {
  //if token matches, call next()
  jwt.verify(req.cookies.token, config.secret, (err, decode) => {
    if (err) {
      return res.status(401).send('Unauthorized User. Please sign in');
    }
    console.log('the decode:', decode);
    res.locals.user = decode;
    next();
  });
  //if it doesn't call res.redirect
};

//router.use(verifyToken());

module.exports = verifyToken;
