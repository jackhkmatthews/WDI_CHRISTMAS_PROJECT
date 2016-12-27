const Project = require('../models/project.js');

function projectsNew(req, res) {
  res.render('new');
}

function projectsCreate(req, res) {
  console.log(req.body);
  const project = new Project(req.body.project);
  project.save((err, project) => {
    if(err) return console.log(err);
    return res.redirect('/projects');
  });
}

function projectsIndex(req, res) {
  res.render('index');
}

module.exports = {
  new: projectsNew,
  create: projectsCreate,
  index: projectsIndex
};
