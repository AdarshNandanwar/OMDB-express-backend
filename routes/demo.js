var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */

// callback function
// req -> request (input)
// res -> response (output)
// next -> middleware part () i.e. goes to next router of the same url

router.get('/next', function (req, res, next) {
    // some preprocessing
    console.log("User trying to do something");
    // now it will go next router of the same url
    next();
});
router.get('/next', function (req, res, next) {
    res.send('next endpoint');
});

router.get('/query-param', function (req, res, next) {
    // Query parameters
    // ?title=harry&year=2003
    // Express gives query params in req.query
    const title= req.query.title;
    res.send(title);
});

router.get('/route-param/:title', function (req, res, next) {
    // Route parameters
    // /harry
    // Express gives route params in req.query
    const title= req.params.title;
    res.send(title);
});

module.exports = router;