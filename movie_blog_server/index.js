require('dotenv').config();
const express = require('express');
const app = express();
const movies = require('./api/movies');
const search = require('./api/search');
const genre = require('./api/genre');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("public"));

app.use('/api/movies', movies);
app.use('/api/search', search);
app.use('/api/genre', genre);


module.exports = app;
