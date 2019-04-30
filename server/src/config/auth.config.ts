export const oauth2Config = {
  config: {
    state: true,
    authorizationURL: 'https://login-staging.telescopeai.com/core/connect/authorize',
    tokenURL: 'https://login-staging.telescopeai.com/core/connect/token',
    clientID: 'dojo',
    clientSecret: 'secret',
    callbackURL: 'http://localhost:3000/auth/callback',
    passReqToCallback: true
  },

  authEndpoints: {
    login: '/login',
    authCallBack: '/auth/callback',
    logout: '/logout',
    root: 'http://localhost:3030'
  },

  scope: ['openid', 'email', 'profile']
};
