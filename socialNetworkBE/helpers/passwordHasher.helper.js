const bcrypt = require('bcrypt');

module.exports.hashPassword = password => bcrypt.hash(password, 10);
module.exports.comparePassword = (password, hashPassword) => bcrypt.compare(password, hashPassword);
