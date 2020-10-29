const express = require('express');
const feedRouter = express.Router();
const feedController = require('../controller/feedController');

// get all feed items on load of page
// routes to feedController
feedRouter.get('/', feedController.outstandingQuestions, (req, res) => {
  console.log('in feed controller');
  console.log('res.locals', res.locals.outstandingQuestions);
  res.sendStatus(200).json(res.locals.outstandingQuestions);
});

// how do we not populate feed with completed forms (boolean check on db)
// Delete TBD (stretch)
// feedRouter.delete();

module.exports = feedRouter;
