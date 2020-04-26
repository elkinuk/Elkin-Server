import express from 'express';
import postsRouter from './posts/routes.js';
import projectsRouter from './projects/routes.js';
import contactsRouter from './contacts/routes.js';
import fiddlesRouter from './fiddles/routes.js';
import defaultsRouter from './defaults/routes.js';

const indexRouter = express.Router();

indexRouter.use('/api/posts', postsRouter);
indexRouter.use('/api/projects', projectsRouter);
indexRouter.use('/api/contacts', contactsRouter);
indexRouter.use('/api/fiddles', fiddlesRouter);
indexRouter.use('/api/defaults', defaultsRouter);
indexRouter.all('*', (_, res) => { res.send('No such Endpoint'); });

module.exports.indexRouter = indexRouter;