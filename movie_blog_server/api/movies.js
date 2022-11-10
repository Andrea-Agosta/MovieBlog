const axios = require("axios");
const express = require('express');
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

  const dataFromApi = axios.request(options)
    .then(resp => resp.data.data.movies)
    .then(data => res.status(200).json(data))
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = router;