const express = require('express');
const requestRouter = express.Router();
const requestController = require('../controller/requestController');

// get request pulling down user feed
//CREATE TABLE questions (_id SERIAL PRIMARY KEY, frontId INT NOT NULL, question VARCHAR(8000) NOT NULL, users INT NOT NULL, FOREIGN KEY(users) REFERENCES users(_id));

// Sending [{}]

requestRouter.post('/', requestController.postQuestions, (res, req) => {
  res.snedStatus(200);
});

module.exports = requestRouter;
