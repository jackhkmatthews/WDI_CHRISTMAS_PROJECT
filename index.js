const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const router = require('./config/routes');
const ejsLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//database bits
const databaseName = 'projects-app';
const databaseUrl  = `mongodb://localhost/${databaseName}`;

mongoose.connect(databaseUrl, () => {
  return console.log(`Connected to db: ${databaseUrl}`);
});

//initialise express app
const app = express();

//views settings
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

//middleware
app.use(morgan('div'));
app.use(ejsLayouts);
app.use(express.static('bower_components'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

//listening
app.listen(port, () => console.log(`express listening at ${port}`));
