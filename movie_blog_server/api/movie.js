const router = express.Router();
const express = require('express');
const moviesAPI = require('./moviesAPI');


router.get('/movie', (req, res) => {
  moviesAPI(`movies/latest?page=${req.params.page}`)
    .then(resp => res.json(resp))
    .catch(err => res.status(404).send(err));
});

module.exports = router;