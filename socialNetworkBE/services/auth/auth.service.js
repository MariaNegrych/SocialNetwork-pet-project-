const {TokenModel, UserModel} = require('../../models');

class AuthService {
  createTokenPair(tokenObject) {
    return TokenModel.create(tokenObject);
  }

  findUserByToken(params) {
    return TokenModel.findOne({
      where: params,
      attributes: [],
      include: [{
        model: UserModel,
        as: 'user',
        attributes: ['id', 'name', 'surname', 'email']
      }],
      nest: true,
      raw: true
    })
  }

  deleteTokenPairByParams(params) {
    return TokenModel.destroy({where: params});
  }

}

module.exports = new AuthService();
