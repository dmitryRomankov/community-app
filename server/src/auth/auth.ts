import express, { Request, Response } from 'express';
import { oauth2Config } from '../config/auth.config';
import passport from 'passport';

const auth = express.Router();

export const authLogin = auth.get(
  oauth2Config.authEndpoints.login,
  passport.authenticate('oauth2', {
    session: false,
    failureRedirect: oauth2Config.authEndpoints.root,
    scope: oauth2Config.scope
  })
);

export const authLogout = auth.get(
  oauth2Config.authEndpoints.logout,
  (request: Request, response: Response) => {
    request.logOut();
    response.redirect(oauth2Config.authEndpoints.root);
  }
);

export const authCallBack = auth.get(
  oauth2Config.authEndpoints.authCallBack,
  passport.authenticate('oauth2', {
    session: false,
    failureRedirect: oauth2Config.authEndpoints.login,
    failureFlash: false
  }),
  (request: Request, response: Response) => {
    response.send(request.user);
  }
);

export const authRoutes = [
  authLogin,
  authLogout,
  authCallBack
];
