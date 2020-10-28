const express = require('express');
const feedRouter = express.Router();

// get all feed items on load of page
// routes to feedController
feedRouter.get();

// how do we not populate feed with completed forms (boolean check on db)
// Delete TBD (stretch)
// feedRouter.delete();

module.exports = feedRouter;
