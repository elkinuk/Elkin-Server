import express from 'express';
import req from './controlles.js';

const router = express.Router();

router.route('/')
  .get((...args) => req.getAllData(...args))

module.exports = router