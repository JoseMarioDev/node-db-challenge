const express = require('express');

const projects = require('./projects-model');

const router = express.Router();

// [ ] adding resources.
// [ ] retrieving a list of resources.
// [ ] adding projects.
// [x] retrieving a list of projects.
// [ ] adding tasks.
// [ ] retrieving a list of tasks. The list of tasks should include the project name and project description.

router.get('/', (req, res) => {
  projects
    .getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'error' });
    });
});

router.get('/:id/ingredients', (req, res) => {
  const { id } = req.params;
  recipes
    .getShoppingList(id)
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(err => {
      res.status(500).json({ message: 'failed to get ingredients' });
    });
});

module.exports = router;
