var FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../models/User");

async function createUserFromProvider(facebookId) {
  const user = await User.create({ facebook_id: facebookId });

  console.log(`Created user: ${JSON.stringify(user)}`);

  return user;
}

async function getUserByProviderId(facebookId) {
  console.log(`\nSearching for user with id: ${facebookId}\n`);

  const user = await User.findOne({ where: { facebook_id: facebookId } });

  user == null
    ? console.log("\nNo records found.\n")
    : console.log(`\nFound the following user: ${JSON.stringify(user)}\n`);

  return user;
}

const verifyCallback = async (token, refreshToken, profile, done) => {
  console.log(profile);

  let user = await getUserByProviderId(profile.id);

  if (user != null) {
    return done(null, user);
  }

  user = await createUserFromProvider(profile.id);

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
        },
        verifyCallback
      )
    );
  },
};
