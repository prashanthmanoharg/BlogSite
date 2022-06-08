const express = require('express'); 
const app = express()

const router = require('./router')

app.use(express.urlencoded({extended: false})) //Submitting Data in the Web
app.use(express.json())    //Sending JSON File

app.use(express.static('public'));
app.set('views','views'); // Express 
app.set('view engine','ejs'); //Setting up EJS Engine

app.use('/',router);

module.exports = app