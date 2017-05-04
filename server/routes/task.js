const express = require('express');
const db = require('../models');

const { Task } = db;

const router = express.Router();

router.route('/tasks')
  .get((req, res) => {
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

router.route('/tasks/:id')
  .delete((req, res) => {
    const { id } = req.params;
    Task.destroy({
      where: {
        id,
      },
    })
    .then((data) => {
      console.log(data);
      res.send('good');
    })
    .catch((err) => {
      console.log(err);
      res.send('bad');
    });
  });


module.exports = router;
