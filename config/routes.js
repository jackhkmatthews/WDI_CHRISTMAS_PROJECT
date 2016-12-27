const express = require('express');
const router = express.Router();

//home page

router.get('/', (req, res) => res.render('home'));

//new

router.get('/projects/new', (req, res) => res.render('new'));

//create
//index
//show
//edit
//update
//delete

module.exports = router;
