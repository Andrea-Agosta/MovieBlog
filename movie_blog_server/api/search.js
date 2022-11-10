const axios = require("axios");
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {

  const options = {
    method: 'GET',
    url: `https://movies-and-serials-torrent.p.rapidapi.com/movies/search/${req.query.search}`,
    headers: {
      'X-RapidAPI-Key': process.env.SECRET_KEY,
      'X-RapidAPI-Host': 'movies-and-serials-torrent.p.rapidapi.com'
    }
  };

  axios.request(options)
    .then(resp => resp.data.data.movies)
    .then(data => res.status(200).json({ data }))
    .catch(error => console.error(error));
})

module.exports = router;
