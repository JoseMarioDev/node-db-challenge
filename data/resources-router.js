const express = require('express');

const resources = require('./resources-model');

const router = express.Router();

// [ ] adding resources.
// [ ] retrieving a list of resources.
// [ ] adding projects.
// [ ] adding tasks.
// [ ] retrieving a list of tasks. The list of tasks should include the project name and project description.

//retrieve list of resources
router.get('/', (req, res) => {
  resources
    .getResources()
    .then(resources => {
      res.status(200).json(resources);
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
