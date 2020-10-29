const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const env = require('.././.env');
const db = require('../server/model/model');
// require('dotenv').config();

const pass = (passport) => {
  passport.serializeUser(function (user, cb) {
    cb(null, user.id);
  });

  passport.deserializeUser(function (id, cb) {
    User.findById(id, function (err, cb) {
      cb(err, user);
    });
  });

  passport.use(
    new GoogleStrategy(
      {
        // clientID: process.env.GOOGLE_CLIENT_ID,
        clientID:
          '756408053557-ikirm3d1fubthido54e612iqtf2m5old.apps.googleusercontent.com',
        // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
};

module.exports = pass;
