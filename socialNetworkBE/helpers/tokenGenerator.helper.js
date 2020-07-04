const jwt = require('jsonwebtoken');

const {
  responseStatusCodesEnum: {SERVER},
  actionEnum: {USER_AUTH, USER_REFRESH}
} = require('../constants');
const {ErrorHandler} = require('../errors');
const {
  configs: {
    JWT_SECRET, JWT_SECRET_TIME,
    JWT_REFRESH_SECRET, JWT_REFRESH_SECRET_TIME
  }
} = require('../configs');

module.exports.tokinizer = action => {
  let access_token = '';
  let refresh_token = '';

  switch (action) {
    case USER_AUTH:
      access_token = jwt.sign({}, JWT_SECRET, {expiresIn: JWT_SECRET_TIME});
      refresh_token = jwt.sign({}, JWT_REFRESH_SECRET, {expiresIn: JWT_REFRESH_SECRET_TIME});
      break;
    case USER_REFRESH:
      access_token = jwt.sign({}, JWT_SECRET, {expiresIn: JWT_SECRET_TIME});
      refresh_token = jwt.sign({}, JWT_REFRESH_SECRET, {expiresIn: JWT_REFRESH_SECRET_TIME});
      break;

    default:
      throw new ErrorHandler('wrong Action type', SERVER);
  }

  return {
    access_token,
    refresh_token
  };
};
