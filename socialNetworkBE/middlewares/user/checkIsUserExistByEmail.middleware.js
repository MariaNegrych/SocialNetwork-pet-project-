const {userService} = require('../../services');
const {customErrors, ErrorHandler} = require('../../errors');
const {responseStatusCodesEnum: {NOT_FOUND}} = require('../../constants');

module.exports = async (req, res, next) => {
  const {email} = req.body;
  const userByEmail = await userService.findOneByParams({email});

  if (!userByEmail) return next(new ErrorHandler(customErrors.NOT_FOUND.message, NOT_FOUND));

  req.user = userByEmail;

  next();
};

