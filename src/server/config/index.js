import express from 'express';

import indexRouter from '../modules';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

/* eslint-disable-next-line no-unused-vars */
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.status = err.status || 500;

  res.status(err.status || 500);
  res.render('error');
});

export default app;
