const express = require('express');

const answersController = require('../controller/answersControllers');
const answersRouter = express.Router();
// to populate answers to questionnaire so that user can view feedback received
// * currently waiting for front end location to make this call from
// answersRouter.get()

// posting feedback response to database
answersRouter.post('/', answersController.postAnswers, (req, res) => {
   res.send(200);
});

module.exports = answersRouter;
