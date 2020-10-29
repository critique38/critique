const passport = require('passport');
const router = require('express').Router();
const session = require('express-session');

// auth logout
router.get('/logout', (req, res) => {
  // handle passport here
  req.session = null;
  req.logout();
  res.send('You are logged out');
  res.redirect('/');
});

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

// callback route for Google to redirect
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('http://192.168.1.177:3838/');
});

module.exports = router;
