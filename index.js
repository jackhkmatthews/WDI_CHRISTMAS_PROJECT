const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const router = require('./config/routes');
const ejsLayouts = require('express-ejs-layouts');

//initialise express app
const app = express();

//views settings
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

//middleware
app.use(morgan('div'));
app.use(ejsLayouts);
app.use('/', router);

//listening
app.listen(port, () => console.log(`express listening at ${port}`));
