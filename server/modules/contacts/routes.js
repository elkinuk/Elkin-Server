import express from 'express';
import data from './../../db/contacts';

const router = express.Router();

router.route('/')
  .get((req, res, next) => {
    try{
      res.send(data.data)
    } catch(error) {
      next(error);
    }
  })

module.exports = router