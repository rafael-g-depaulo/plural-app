var FacebookStrategy = require("passport-facebook").Strategy;
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const Utils = require("../utils");
const User = require("../models/User");

async function createUserFromProvider(providerId, provider) {
  const user = await User.create({
    provider_id: providerId,
    provider: provider,
    active: true
  });

  console.log(`Created user: ${JSON.stringify(user)}`);

  return user;
}

async function getUserByProviderId(providerId) {
  console.log(`\nSearching for user with id: ${providerId}\n`);

  const user = await User.findOne({ where: { provider_id: providerId } });

  user == null
    ? console.log("\nNo records found.\n")
    : console.log(`\nFound the following user: ${JSON.stringify(user)}\n`);

  return user;
}

const verifyCallback = async (req, token, refreshToken, profile, done) => {
  console.log(profile);

  const providerId = profile.id;
  const provider = profile.provider;

  let user = await getUserByProviderId(providerId);

  if (user != null) {
    const userToken = await Utils.signToken(user.id, user.email, user.active, user.is_lgbtq);

    req.token = userToken;

    return done(null, user);
  }

  user = await createUserFromProvider(providerId, provider);

  //Check if user was created.

  const userToken = await Utils.signToken(user.id, user.email, user.active, user.is_lgbtq);

  req.token = userToken;

  return done(null, user);
};

module.exports = {
  FacebookAuth(passport) {
    passport.use(
      new FacebookStrategy(
        {
          clientID: process.env.FACEBOOK_APP_ID,
          clientSecret: process.env.FACEBOOK_APP_SECRET,
          callbackURL: process.env.FACEBOOK_CALLBACK_URL,
          passReqToCallback: true,
        },
        verifyCallback
      )
    );
  },
  GoogleAuth(passport) {
    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: process.env.GOOGLE_CALLBACK_URL,
          passReqToCallback: true,
        },
        verifyCallback
      )
    );
  },
};
