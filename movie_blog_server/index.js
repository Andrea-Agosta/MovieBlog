require('dotenv').config();
const express = require('express');
const { testDb } = require('./database/database');
const { moviesAPI } = require('./api/moviesAPI');
const app = express();
const movies = require('./api/movies');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("public"));
app.use('/api/movies', movies);


// testDb(); CONNECTION MONGO



app.get('/api', (req, res) => {
  // moviesAPI(); //CONNECTION API
  res.json({ name: 'Hello World!' })
});

// CREATE ENDPOINT
// TAKE CARE ABOUT VALIDATION!!!!!

// IF YOU HAVE TIME LOOK FOR MONGOOSE

module.exports = app;
