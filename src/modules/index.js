import express from 'express';
import postsRouter from './posts/routes.js';

const indexRouter = express.Router();

indexRouter.use('/posts', postsRouter)
indexRouter.all('*', (_, res) => { res.send('Hello, it is Me'); });

module.exports.indexRouter = indexRouter;