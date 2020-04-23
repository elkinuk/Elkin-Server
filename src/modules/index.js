import express from 'express';
import postsRouter from './posts/routes.js';

const indexRouter = express.Router();

indexRouter.use('/api/posts', postsRouter)
indexRouter.all('*', (_, res) => { res.send('No such Endpoint'); });

module.exports.indexRouter = indexRouter;