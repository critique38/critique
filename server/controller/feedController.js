const db = require('../model/model');

const feedController = {};

feedController.outstandingQuestions = (req, res, next) => {
  console.log('I am here in the feed controller');
  // const values = ['2'];
  const queryString = `with refined as (select * from questions q
    left join answers a on a.questions = q._id
    where a.answer is null and usertarget = 2)
    select * from refined r
    left join users u on u._id = r.usersource;`;

  db.query(queryString)
    .then((data) => {
      res.locals.outstanding = data.rows;
      next();
    })
    .catch((err) => next(err));
};

module.exports = feedController;
