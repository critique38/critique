const { Pool } = require('pg');
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

CREATE TABLE questions (_id SERIAL PRIMARY KEY, question VARCHAR(8000) NOT NULL);

CREATE TABLE questionnaire (_id SERIAL PRIMARY KEY, question1 INT NOT NULL, question2 INT, question3 INT, question4 INT, question5 INT, FOREIGN KEY (question1) REFERENCES questions(_id), FOREIGN KEY (question2) REFERENCES questions(_id), FOREIGN KEY (question3) REFERENCES questions(_id), FOREIGN KEY (question4) REFERENCES questions(_id), FOREIGN KEY (question5) REFERENCES questions(_id));

CREATE TABLE users (_id SERIAL PRIMARY KEY, username VARCHAR(255) NOT NULL, name VARCHAR(255), authentication_token VARCHAR(255), email VARCHAR(255), other VARCHAR(255));

CREATE TABLE links (_id SERIAL PRIMARY KEY, users INT NOT NULL, questionnaire INT NOT NULL, link VARCHAR(500) NOT NULL, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), FOREIGN KEY (users) REFERENCES users(_id), FOREIGN KEY (questionnaire) REFERENCES questionnaire(_id));

CREATE TABLE answers (_id SERIAL PRIMARY KEY, link INT NOT NULL, users INT NOT NULL, question INT NOT NULL, questionnaire INT NOT NULL, answer VARCHAR(8000), FOREIGN KEY (link) REFERENCES links(_id), FOREIGN KEY (users) REFERENCES users(_id), FOREIGN KEY (question) REFERENCES questions(_id), FOREIGN KEY (questionnaire) REFERENCES questionnaire(_id))
)
*/
