module.exports = {
    // 400
    BAD_REQUEST_USER_REGISTERED: {
        message: 'User is already registered',
        code: 4001
    },
    BAD_REQUEST_USER_PASSWORD_INVALID: {
        message: 'Wrong password',
        code: 4002
    },
    BAD_REQUEST_USER_ACTIVATED: {
        message: 'User is already activated',
        code: 4003
    },

    BAD_REQUEST_USER_HAS_RELATIONS: {
        message: 'User is already related',
        code: 4004
    },

    BAD_REQUEST_INVITE_NOT_IN_PENDING: {
        message: 'No invite in pending',
        code: 4005
    },

    BAD_REQUEST_NO_TOKEN: {
        message: 'Token is not present',
        code: 4006
    },
    BAD_REQUEST_USER_IS_NOT_VALID: {
        message: 'User is not valid',
        code: 4007
    },

    //401
    UNAUTHORIZED_BAD_TOKEN: {
        message: 'Something wrong with token',
        code: 4011
    },

    //403
    FORBIDDEN_USER_NOT_CONFIRMED: {
        message: 'User is not confirmed',
        code: 4031
    },

    // 404
    NOT_FOUND: {
        message: 'Record not found',
        code: 4041
    }
};
