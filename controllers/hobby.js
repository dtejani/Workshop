//Require the express package and use express.Router()
var express = require('express');
var router = express.Router();

//GET HTTP method to /hobby
router.get('/', (req,res,next) => {
    res.send("GET");
});

//POST HTTP method to /hobby
router.post('/', (req,res,next) => {
    res.send("POST");
});

//DELETE HTTP method to /hobby. Here, we pass in a params
//which is the object id.
router.delete('/:id', (req,res,next) => {
    res.send("DELETE");
});

module.exports = router;