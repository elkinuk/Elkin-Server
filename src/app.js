import mongoose from 'mongoose';

import app from './config';

const port = process.env.PORT || 4000;
const dev = process.env.NODE_ENV !== 'production'

const appListen = handle => {
  
  app.get('*', (req, res) => handle(req, res)); // for SSR

  app.listen(port, () => {
    console.log(`...... Listening on port ${port}! \n`);

    const mongooseUrl = 'mongodb://' + (dev ? 'mongodb://localhost/blog' : 'mongodb://test:test1test1@ds145273.mlab.com:45273/heroku_lm857r9v');

    mongoose.connect(mongooseUrl, {useUnifiedTopology: true, useNewUrlParser: true});
    const dbConnection = mongoose.connection;
    dbConnection.on('error', console.error.bind(console, 'connection error:'));
    dbConnection.once('open', () => {
      console.log('...... Connected to db -> 27017');
    });
  });
}

module.exports = appListen;
