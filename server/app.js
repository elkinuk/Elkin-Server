import mongoose from 'mongoose';

import app from './config';

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || (dev ? 4000 : 4001);

const appListen = handle => {
  
  app.get('*', (req, res) => handle(req, res)); // for SSR

  app.listen(port, () => {
    console.log(`...... Listening on port ${port}! \n`);
  });
}

module.exports = appListen;
