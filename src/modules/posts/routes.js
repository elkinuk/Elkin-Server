import express from 'express';
import req from './controlles.js';

const router = express.Router();

// const passport = require('passport');

router.route('/')
  .get((...args) => req.getAllData(...args))
//   .post(passport.authorize('basic'), (...args) => req.postData(...args));

router.route('/:id')
  .get((...args) => req.getDataByID(...args))
//   .put(passport.authorize('basic'), (...args) => req.putDataByID(...args))
//   .delete(passport.authorize('basic'), (...args) => req.delDataByID(...args));

module.exports = router