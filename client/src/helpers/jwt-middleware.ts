import {expressjwt} from 'express-jwt';

const util = require('util');
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export { jwtMiddleware };

function jwtMiddleware(req: any, res: any) {
    const middleware = expressjwt({ secret: serverRuntimeConfig.secret, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/auth/register',
            '/auth/login',
            '/auth/forgot'
        ]
    });

    return util.promisify(middleware)(req, res);
}