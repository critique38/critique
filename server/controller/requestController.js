const db = require('../model/model');

const requestController = {};

//CREATE TABLE questions (_id SERIAL PRIMARY KEY, frontId INT NOT NULL, question VARCHAR(8000) NOT NULL, users INT NOT NULL, FOREIGN KEY(users) REFERENCES users(_id));

requestController.postQuestions = (req, res, next) => {
  const { frontId, question, users } = req.body;
  const values = [frontId, question, users];
  const queryString = `INSERT INTO questions (frontID, question, users) VALUES ($1, $2, $3) returning *;`;
  db.query(queryString, values, (err, res) => {
    if (err) return next(err);
    res.locals.questions = res.rows;
    return next();
  });
};

module.exports = requestController;
