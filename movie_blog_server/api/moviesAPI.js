const axios = require("axios");

const moviesAPI = (url) => {	
	const options = {
		method: 'GET',
		// url: 'https://movies-and-serials-torrent.p.rapidapi.com/movies/latest',
		url: `https://movies-and-serials-torrent.p.rapidapi.com/${url}`,
		headers: {
			'X-RapidAPI-Key': process.env.SECRET_KEY,
			'X-RapidAPI-Host': 'movies-and-serials-torrent.p.rapidapi.com'
		}
	};

	axios.request(options).then(function (response) {
		console.log(response.data);
	}).catch(function (error) {
		console.error(error);
	});
}

module.exports = { moviesAPI };
