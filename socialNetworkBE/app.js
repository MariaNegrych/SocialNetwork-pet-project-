require('dotenv').config();

const express = require('express');
const fileUpload = require('express-fileupload');
const expressRateLimit = require('express-rate-limit');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');


const path = require('path');

const {configs: {ALLOWED_ORIGIN, serverRateLimits}} = require('./configs');
const {responseStatusCodesEnum: {SERVER}} = require('./constants');
const {authRouter, userRouter} = require('./routes');
const {dataBase} = require('./dataBase');
const {UserModel, StatusModel, UserStatusModel, TokenModel} = require('./models');

const serverRequestLimit = expressRateLimit({
    windowMs: serverRateLimits.period,
    max: serverRateLimits.maxRequests
});

class App {
    app = express();

    constructor() {
        this.app.use(morgan('dev'));
        this.app.use(helmet());
        this.app.use(serverRequestLimit);

        this.app.use(cors({
            origin: this.configureCors
        }));

        this.app.use(fileUpload({}));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.static(path.resolve(process.cwd(), 'public')));

        this.mountRoutes();
        this.setupDB();
    }

    configureCors(origin, callback) {
        const whiteList = ALLOWED_ORIGIN.split(';');

        if (!origin) return callback(null, true); // FOR POSTMAN

        if (!whiteList.includes(origin)) return callback(new Error('Cors not allowed'), false);

        return callback(null, true);
    }

    customErrorHandler(err, req, res, next) {
        res
            .status(err.status || SERVER)
            .json({
                message: err.message || 'Unknown Error',
                code: err.customCode
            });
    }

    mountRoutes() {
        this.app.use('/auth', authRouter);
        this.app.use('/users', userRouter);

        this.app.use(this.customErrorHandler);
    }

    setupDB() {
        UserModel.belongsToMany(StatusModel, {through: UserStatusModel});
        StatusModel.belongsToMany(UserModel, {through: UserStatusModel});

        UserModel.hasOne(UserStatusModel, {
            foreignKey: 'userId',
            as: 'userId'
        });

        UserModel.hasOne(UserStatusModel, {
            foreignKey: 'userIdFriend',
            as: 'userIdFriend'
        });

        TokenModel.belongsTo(UserModel);

        // dataBase
        //   // .sync({force: true})
        //   .sync()
        // .then(() =>
        // Promise.all([
        //   StatusModel.create({type: 'friend'}),
        //   StatusModel.create({type: 'pending'}),
        // ])
        // )
    }
}

module.exports.app = new App().app;
