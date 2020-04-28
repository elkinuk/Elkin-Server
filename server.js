const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const appPath = `./${ dev ? 'server' : 'build' }/app.js`;

const appListen = require(appPath);

nextApp
  .prepare()
  .then(() => { appListen(handle) })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })