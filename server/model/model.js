const Pool = require('pg');
require('dotenv').config();

const PG_URI = process.env.DB_URI;                                                                 

const pool = new Pool({
    connectionString: PG_URI,
  });
  
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query --> ', text);
    return pool.query(text, params, callback);
  },
};

/*
 DB schemas below for reference 

CREATE TABLE questions (_id SERIAL PRIMARY KEY, question VARCHAR(255) NOT NULL);

CREATE TABLE questionaire (_id SERIAL PRIMARY KEY, question1 INT FOREIGN KEY(questions._id) NOT NULL, question2 INT FOREIGN KEY(questions._id), question3 INT FOREIGN KEY(questions._id), question4 INT FOREIGN KEY(questions._id), question5 INT FOREIGN KEY(questions._id), created_at TIMESTAMPTZ NOT NULL DEFAULT NOW());

*/