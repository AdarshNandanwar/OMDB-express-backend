var express = require('express');
var router = express.Router();
const axios = require('axios');

const apiKey = '191dc0a9';

/* GET users listing. */

// callback function
// req -> request (input)
// res -> response (output)
// next -> middleware part () i.e. goes to next router of the same url

router.get('/search', function (req, res, next) {
    const search = req.query.title;
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;
    console.log("Trying to get data from "+url);
    // Make a request for a user with a given ID
    axios.get(url)
        .then(function (response) {
            // handle success
            res.send(response.data);
        })
        .catch(function (error) {
            // handle error
            res.send(error);
        })
});

router.get('/movie/:imdbid', function (req, res, next) {
    const imdbid = req.params.imdbid;
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbid}`;
    console.log("Trying to get data from "+url);
    // Make a request for a user with a given ID
    axios.get(url)
        .then(function (response) {
            // handle success
            res.send(response.data);
        })
        .catch(function (error) {
            // handle error
            res.send(error);
        })
});

module.exports = router;