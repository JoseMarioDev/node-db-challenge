const express = require('express');

const tasks = require('./tasks-model');

const router = express.Router();

// [ ] adding tasks.

router.get('/', (req, res) => {
  tasks
    .getTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({
        message: 'error retrieving tasks, project name and description',
      });
    });
});

router.post('/', (req, res) => {
  const task = req.body;
  tasks
    .addTask(task)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: 'unable to add task' });
    });
});

module.exports = router;
