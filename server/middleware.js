let jwt = require('jsonwebtoken');
const config = require('./config');

const checkToken = (req, res, next) => {
  //capture headers with one of two names
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if (token.startsWith('Bearer ')) {
    //remove Bearer from the string
    token = token.slice(7, token.length);
  }

  if (token) {
    // Use jwt package and secret string, validate the token
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        //return error message before passing control to next handler
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};

module.exports = {
  checkToken: checkToken
};
