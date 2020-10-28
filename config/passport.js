const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../server/model/model');

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, done) {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      // clientID: process.env.GOOGLE_CLIENT_ID,
      clientID:
        '756408053557-ikirm3d1fubthido54e612iqtf2m5old.apps.googleusercontent.com',
      clientSecret: 'm0g5vATElWyaA6_wh1SWtRaF',
      callbackURL: 'http://localhost:3838/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, cb) {
      // use profile info to check if user is in our database
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);
