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
  Project.find({}, (err, projects) => {
    if (err) return console.log(err);
    return res.render('index', {projects});
  });
}

module.exports = {
  new: projectsNew,
  create: projectsCreate,
  index: projectsIndex
};
