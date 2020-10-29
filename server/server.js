const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const port = 3838;
// const loginRouter = require('./router/loginRouter');
const feedRouter = require('./router/feedRouter');
const answersRouter = require('./router/answersRouter');
const requestRouter = require('./router/requestRouter');
const session = require('express-session');
const passport = require('passport');
const cookieSession = require('cookie-session');

// const Strategy = require('passport-google-oauth20').Strategy;
require('../config/passport');

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// load config
// dotenv.config({ path: './config/.env' });

// passport config
// require('../config/passport')(passport);

// routes users to login
// app.use('/login', loginRouter);

app.use(
  cookieSession({
    name: 'critique-session',
    keys: ['key1', 'key2'],
  })
);

// temp until we create our loginController
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
    // res.send('user not in db');
  }
};

// in case of failed authentication
app.use('/failed', (req, res) => res.send('You failed to login'));
app.use('/chill', isLoggedIn, (req, res) =>
  res.send('Successfully logged in!!')
);

// route to allow users to give answers to requested feedback questionnaires
app.use('/answers', answersRouter);

// route to allow users to request feedback, AKA create a questionnaire
app.use('/request', requestRouter);

// session
app.use(
  session({
    secret: 'keyboard dog',
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// passport and routes for google oauth
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function (req, res) {
    // console.log('do we get here?');
    // Successful authentication, redirect home.
    res.redirect('/chill');
  }
);

//* logout ability
// app.get('/logout', (req,res) => {
//   req.session = null;
//   req.logout()
//   res.redirect('/')
// })

// route allowing users to see their feedback feed
app.use('/feed', feedRouter);

// app.use('*', express.static(path.resolve(__dirname, '../index.html')));
app.use('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/App.js'));
});

// currently error doesnt catch because '/' acounts for all possible paths
// catch all error handler
app.use('*', (req, res) => {
  res.status(404).send('You are wayyyyy lost my friend');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error',
    status: 500,
    message: { err: `An error occurred ${err}` },
  };
  const finalError = Object.assign(defaultError, err);
  res.status(finalError.status).json(finalError.message);
});

app.listen(port, () =>
  console.log(`Listening to all your thoughts on port ${port}`)
);
