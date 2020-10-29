const db = require('../model/model');

const requestController = {};

//CREATE TABLE questions (_id SERIAL PRIMARY KEY, frontId INT NOT NULL, question VARCHAR(8000) NOT NULL, users INT NOT NULL, FOREIGN KEY(users) REFERENCES users(_id));

requestController.postQuestions = (req, res, next) => {

  const { frontId, text, usersource } = req.body;
  const values = [frontId, text, usersource];
  const queryString = `INSERT INTO questions (frontid, question, usersource) VALUES ($1, $2, $3) returning *;`;
  
  db.query(queryString, values, (err, res) => {
    if (err) return next(err);
    return next();
  });
};

module.exports = requestController;
