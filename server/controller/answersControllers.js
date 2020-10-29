const db = require('../model/model');

const answersController = {};

answersController.postAnswers = (req, res, next) => {
  const { feedbackAnswer, writer, questionId } = req.body;
  console.log(req.body)
  const values = [feedbackAnswer, writer, questionId];
  const queryString =
    'INSERT INTO answers (answer, answeruser, questions) VALUES ($1, $2, $3) returning *;';

  db.query(queryString, values, (err, res) => {
    
    if (err) return next(err);
    return next();
  });
};

module.exports = answersController;
