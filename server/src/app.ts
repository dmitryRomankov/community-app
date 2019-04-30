import 'reflect-metadata';

import { InversifyExpressServer } from 'inversify-express-utils';

import bodyParser from 'body-parser';
import morgan from 'morgan';
import SocketIO from 'socket.io';
import passport from 'passport';
import cors from 'cors';
import session from 'express-session';

import configFile from '../../frontend/src/config.json';

import {
    LoggerService,
    LoggerServiceImplementation,
    SocketService,
    SocketServiceImplementation
} from './service';

import './controller';
import { CONTAINER } from './service/services-registration';

import { db, RoleModel, Roles } from 'models';
import { strategy } from './config/passport';
import { authRoutes } from './auth';

const server = new InversifyExpressServer(CONTAINER);

import config from './config/app.config.json';

server.setConfig((app) => {
    process.env.NODE_ENV !== config.production ? app.use(morgan('dev')) : app.use(morgan('prod'));

    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(bodyParser.json());
    app.use('/', authRoutes);
});

passport.use(strategy);

// makeAssosiations();

db.connect.sync({
    logging: console.log
})
    .then(() => {
        return RoleModel.upsert({
            name: Roles.User,
            createAt: Date.now(),
            updatedAt: Date.now()
        });
    })
    .then(() => {
        return RoleModel.upsert({
            name: Roles.Admin,
            createAt: Date.now(),
            updatedAt: Date.now()
        });
    })
    .catch((err) => {
        logger.errorLog(err);
    });

const logger: LoggerService = new LoggerServiceImplementation();
const application = server.build();

const serverInstance = application.listen(config.port, () => {
    logger.infoLog(`App is running at
    ${configFile.backEndPath.schema}://
    ${configFile.backEndPath.host}:
    ${configFile.backEndPath.port}`);
    logger.infoLog('Press CTRL+C to stop\n');
});

const socketService: SocketServiceImplementation = SocketServiceImplementation.getInstance();
socketService.setSocket(SocketIO(serverInstance));
