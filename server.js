/* eslint-disable import/no-dynamic-require */

const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const appPath = `./${dev ? 'src/server' : 'build'}/app`;

const appListen = require(appPath).default;

nextApp
  .prepare()
  .then(() => {
    appListen(handle);
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
