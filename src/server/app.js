import app from './config';

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || (dev ? 4000 : 4001);

const appListen = handle => {
  
  app.get('*', (req, res) => handle(req, res)); // for SSR

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`...... Listening on port ${port}! \n`);
  });
}

export default appListen;
