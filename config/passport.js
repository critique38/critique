const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const env = require('.././.env');
const db = require('../server/model/model');
// require('dotenv').config();

//* serializingUser section
// const pass = (passport) => {
//   passport.serializeUser(function (user, cb) {
//     cb(null, user.id);
//   });
passport.serializeUser((user, done) => {
  done(null, user._id);
});

//* deserializingUser section
// passport.deserializeUser(function (id, cb) {
//   User.findById(id, function (err, cb) {
//     cb(err, user);
//   });
// });
passport.deserializeUser((id, done) => {
  db.query(`SELECT * FROM users WHERE _id='${id}'`)
    .then((user) => {
      done(null, user.rows[0]);
    })
    .catch((err) => console.log(err));
});

//   passport.use(
//     new GoogleStrategy(
//       {
//         // clientID: process.env.GOOGLE_CLIENT_ID,
//         clientID:
//           '756408053557-ikirm3d1fubthido54e612iqtf2m5old.apps.googleusercontent.com',
//         // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         clientSecret: 'm0g5vATElWyaA6_wh1SWtRaF',
//         callbackURL: 'http://localhost:3838/auth/google/callback',
//       },
//       function (accessToken, refreshToken, profile, cb) {
//         // use profile info to check if user is in our database
//         User.findOrCreate({ googleId: profile.id }, function (err, user) {
//           return cb(err, user);
//         });
//       }
//     )
//   );
// };
passport.use(
  new GoogleStrategy(
    {
      // options for the google strategy
      clientID:
        '756408053557-ikirm3d1fubthido54e612iqtf2m5old.apps.googleusercontent.com',
      clientSecret: 'm0g5vATElWyaA6_wh1SWtRaF',
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // passport callback function
      // check if user already exists in DB
      // console.log('profile is ', profile);
      // console.log('email is ', profile.emails[0].value);
      // // console.log('email is ', email);
      // console.log('profile id is ', profile.id);
      // console.log('profile familyName is ', profile.name.familyName);
      // console.log('profile givenName is ', profile.name.givenName);
      // console.log('profile displayName is ', profile.displayName);
      db.query(`SELECT * FROM users WHERE email='${profile.emails[0].value}'`)
        .then((user) => {
          // console.log('user is ', user);
          // if the returned object's row property (an array) is empty, we know we're dealing with a new user
          if (user.rows.length) {
            done(null, user.rows[0]);
            // otherwise we want to add the user to our DB
          } else {
            // console.log('INSIDE OF ELSE STATEMENT IN FIRST DB QUERY');
            // const queryText = `INSERT INTO users (_id, username, skill, language, readyStatus) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
            const values = [
              profile.name.givenName,
              profile.displayName,
              profile.emails[0].value,
            ];
            const queryText = `INSERT INTO users (username, name, email) VALUES ($1, $2, $3) RETURNING *`;
            // const queryParams = [
            //   profile.id,
            //   profile.displayName,
            //   'Easy',
            //   'Javascript',
            //   false,
            // ];
            db.query(queryText, values)
              .then((newUser) => {
                done(null, newUser.rows[0]);
              })
              .catch((err) => console.log(err));
          }
        })
        .catch(
          (err) => {
            console.log('IN CATCH ERROR HANDLER');
            const values = [
              profile.id.displayName,
              profile.id.givenName,
              profile.emails[0].value,
            ];
            const queryText = `INSERT INTO users (username, name, email) VALUES ($1, $2, $3) RETURNING *`;
            // const queryParams = [
            //   profile.id,
            //   profile.displayName,
            //   'Easy',
            //   'Javascript',
            //   false,
            // ];
            db.query(queryText, values)
              .then((newUser) => {
                done(null, newUser.rows[0]);
              })
              .catch((err) =>
                console.log('error inserting into database', err)
              );
          }
          // console.log('Inside catch ERROR BLOCK', err));
        );
    }
  )
);

// module.exports = pass;

// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20');
// const db = require('../server/models/userModel.js');

// passport.serializeUser((user, done) => {
//   done(null, user._id)
// });

// passport.deserializeUser((id, done) => {
//   db.query(`SELECT * FROM users WHERE _id='${id}'`)
//     .then((user) => {
//       done(null, user.rows[0]);
//     })
//     .catch(err => console.log(err));
// });

// passport.use(
//   new GoogleStrategy({
//     // options for the google strategy
//     clientID: keys.google.clientID,
//     clientSecret: keys.google.clientSecret,
//     callbackURL: '/auth/google/redirect',
//   },
//   (accessToken, refreshToken, profile, done) => {
//     // passport callback function
//     // check if user already exists in DB
//     db.query(`SELECT * FROM users WHERE _id='${profile.id}'`)
//       .then((user) => {
//         // if the returned object's row property (an array) is empty, we know we're dealing with a new user
//         if (user.rows.length) {
//           done(null, user.rows[0]);
//         // otherwise we want to add the user to our DB
//         } else {
//           const queryText = `INSERT INTO users (_id, username, skill, language, readyStatus) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
//           const queryParams = [profile.id, profile.displayName, 'Easy', 'Javascript', false];
//           db.query(queryText, queryParams)
//           .then((newUser) => {
//             done(null, newUser.rows[0]);
//           })
//           .catch(err => console.log(err))
//         }
//       })
//       .catch(err => console.log(err));
//     }

// ));
