const express = require;
// will need more functionality but checks if user is logged in by checking if there is a user on the request object
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};
