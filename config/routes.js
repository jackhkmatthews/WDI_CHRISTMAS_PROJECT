const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projects.js');

//home page
router.get('/', (req, res) => res.render('home'));

//new
router.get('/projects/new', projectsController.new);

//create and index
router.route('/projects')
  .post(projectsController.create)
  .get(projectsController.index);

//show and delete and update
router.route('/projects/:id')
  .get(projectsController.show)
  .delete(projectsController.delete)
  .put(projectsController.update);

//edit
router.route('/projects/:id/edit')
  .get(projectsController.edit);


module.exports = router;
