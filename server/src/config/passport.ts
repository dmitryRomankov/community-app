import { Request } from 'express';
import passportOAuth2Strategy from 'passport-oauth2';
import jwt from 'jsonwebtoken';

import { keys } from './keys';
import { db, UserModel } from 'models';
import { PassportStatic } from 'passport';
import { User } from 'interfaces';
import { oauth2Config } from './auth.config';

// export const passportConfig = (passport: PassportStatic) => {
//     passport.use(new passportOAuth2Strategy(oauth2Config, (
//         req: Request,
//         accessToken: string,
//         refreshToken: string,
//         results: any,
//         profile: any,
//         done: any
//     ) => {
//         try {
//             db.connect.sync();
//             const idToken = results['id_token'];
//             const userID = jwt.decode(idToken)['sub'];
//             console.log(userID);
//             // const user = await UserModel.findById(userID);
//             return done(null, profile);
//         } catch {
//             return (err: Error) => done(err);
//         }
//     }));
// };

export const strategy = new passportOAuth2Strategy(oauth2Config.config, (
    req: Request,
    accessToken: string,
    refreshToken: string,
    results: any,
    profile: any,
    done: any
) => {
    const idToken = results['id_token'];
    const userEmail = jwt.decode(idToken)['email'];
    const userToken = jwt.decode(idToken)['sub'];
    const userinfo = {
        email: userEmail,
        userToken
    }
    profile = userinfo;
    console.log(profile);
    return done(null, profile);
});
