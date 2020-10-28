const express = require('express');
const loginRouter = express.Router();
const passport = require('passport');
const Strategy = require('passport-google-oauth20').Strategy;
// handles user authenticaion from login page

const loginRouter = {};

loginRouter.authenticate = () => {};

module.exports = loginRouter;
