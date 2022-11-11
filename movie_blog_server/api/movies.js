const axios = require("axios");
const express = require('express');
const { saveComments, getComments, deleteComments } = require("../database/database");
const router = express.Router();


router.get('/', (req, res) => {
  const options = {
    method: 'GET',
    url: `https://movies-and-serials-torrent.p.rapidapi.com/movies/latest?page=${req.query.page}`,
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

router.post('/:id', (req, res) => {
  if (req.body.id && req.body.name && req.body.description) {
    saveComments(req.body);
  }
});

router.get('/:id', (req, res) => {
  if (req.params.id) {
    getComments(req.params.id)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(error => console.error(error));
  }
});

router.delete('/:id', (req, res) => {
  if (req.body.id) {
    deleteComments(req.body);
  }
});

module.exports = router;