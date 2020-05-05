import mongoose from 'mongoose';

import app from './config';

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || (dev ? 4000 : 4001);

const appListen = handle => {
  
  app.get('*', (req, res) => handle(req, res)); // for SSR

  app.listen(port, () => {
    console.log(`...... Listening on port ${port}! \n`);

    const mongooseUrl = 'mongodb://' + (dev ? 'localhost/blog' : 'test:test1test1@ds145273.mlab.com:45273/heroku_lm857r9v');

    mongoose.connect(mongooseUrl, {useUnifiedTopology: true, useNewUrlParser: true});
    const dbConnection = mongoose.connection;
    dbConnection.on('error', console.error.bind(console, 'connection error:'));
    dbConnection.once('open', () => {
      console.log(`...... Connected to db -> ${mongooseUrl}`);
    });
  });
}

module.exports = appListen;
