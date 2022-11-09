require('dotenv').config();
const express = require('express');
const { testDb } = require('./database/database');
const { moviesAPI } = require('./moviesAPI');
const app = express();

app.use(express.static("public"));

// testDb(); CONNECTION MONGO

app.get('/api', (req, res) => {
  // moviesAPI(); //CONNECTION API
  res.json({ name: 'Hello World!' })
});

// CREATE ENDPOINT
// TAKE CARE ABOUT VALIDATION!!!!!

// IF YOU HAVE TIME LOOK FOR MONGOOSE

module.exports = app;
