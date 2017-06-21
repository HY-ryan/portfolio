const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// route files
const recipes = require('./routes/recipes');
const blog = require('./routes/blog');
const contact = require('./routes/contact');

// nodemailer for handling sending of emails from contact form
const nodemailer = require('nodemailer');

const app = express();

// connect to database
// seperate this into a config file eventually
const dbName = 'portfolio'
const connectionString = 'mongodb://localhost:27017/' + dbName
mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', recipes); //route to recipes
app.use('/api', blog); //route to blog
app.use(contact); // route to contact

app.set('port', process.env.PORT || 8000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});