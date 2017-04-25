const express = require('express');
const db = require('../models');

const { Task } = db;

const router = express.Router();

router.route('/tasks')
  .get((req, res) => {
    console.log('route hit!!');
    Task.findAll()
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      res.json({ err });
    });
  })
  .post((req, res) => {
    const {
      title,
      description,
    } = req.body;

    const payload = {
      title,
      description,
    };

    Task.create(payload)
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      res.json({ err });
    });
  });

module.exports = router;
