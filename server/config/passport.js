var FacebookStrategy = require("passport-facebook").Strategy;

const verifyCallback = (token, refreshToken, profile, done) => {
  console.log(profile);

  done(profile);
};

module.exports = {
  FacebookAuth(passport) {
    passport.use(
      new FacebookStrategy(
        {
          clientID: process.env.FACEBOOK_APP_ID,
          clientSecret: process.env.FACEBOOK_APP_SECRET,
          callbackURL: process.env.FACEBOOK_CALLBACK_URL,
        },
        verifyCallback
      )
    );
  },
};
