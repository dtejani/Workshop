//Declaring dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

//Initialize app variable
var app = express();

//Declaring port
var port = 8080;

//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*express.static is a built in middleware function to serve 
static files. We are telling express server public folder is the
place to look for the static files
*/
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) =>{
    res.send("Invalid page");
});

//Listen to port 8080
app.listen(port, () =>{
    console.log('Magic happens on port 8080');
})

//Connect mongoose to our database
var config = require('./config/datase');
mongoose.connect(config.database);