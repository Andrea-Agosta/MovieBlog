const axios = require("axios");
const express = require('express');
const { saveComments, getComments } = require("../database/database");
const router = express.Router();
const { moviesAPI } = require('./moviesAPI');


router.get('/', (req, res) => {
  const options = {
    method: 'GET',
    url: `https://movies-and-serials-torrent.p.rapidapi.com/movies/latest?page=${req.query.page}`,
    headers: {
      'X-RapidAPI-Key': process.env.SECRET_KEY,
      'X-RapidAPI-Host': 'movies-and-serials-torrent.p.rapidapi.com'
    }
  };

  getComments()
    .then(comment => {
      axios.request(options)
        .then(async resp => {
          return await [[...comment], resp.data.data.movies]
        })
        .then(data => res.status(200).json({ data }))
    })
    .catch(function (error) {
      console.error(error);
    });
});

router.post('/:id', (req, res) => {
  if (req.body.id && req.body.name && req.body.description) {
    saveComments(req.body);
  }
});

module.exports = router;