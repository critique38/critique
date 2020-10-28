const express = require('express');
const app = express();
const path = require('path');
const port = 3838;
const loginRouter = require('./router/loginRouter');
const feedRouter = require('./router/feedRouter');
const answersRouter = require('./router/answersRouter');
const requestRouter = require('./router/requestRouter');

app.use(express.json());

app.use(express.urlencoded({extended: true}));

// routes users to login
app.use('/login', loginRouter)

// route to allow users to give answers to requested feedback questionnaires 
app.use('/answers', answersRouter);

// route allowing users to see their feedback feed
app.use('/feed', feedRouter);

// route to allow users to request feedback, AKA create a questionnaire 
app.use('/request', requestRouter);



// app.use('*', express.static(path.resolve(__dirname, '../index.html')));
app.use('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'))
});

// currently error doesnt catch because '/' acounts for all possible paths 
// catch all error handler
app.use('*', (req, res) => {
  res.status(404).send('You are wayyyyy lost my friend')
})

// global error handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error',
    status: 500,
    message: { err: `An error occurred ${err}`}
  };
  const finalError = Object.assign(defaulterror, err);
  res.status(finalError.status).json(finalError.message);
})

app.listen(port, () => console.log(`Listening to all your thoughts on port ${port}`));