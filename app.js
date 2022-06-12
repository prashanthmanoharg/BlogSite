const express = require('express'); 
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const app = express()



let sessionOptions = session({
      secret: "JavaScript is cool",
      store: MongoStore.create({client: require('./db')}),
      resave: false,
      saveUninitialized: false,
      cookie: {maxAge: 1000 * 60 * 60 * 24,httpOnly: true}
})

app.use(sessionOptions)
app.use(flash())

const router = require('./router')

app.use(express.urlencoded({extended: false})) //Submitting Data in the Web
app.use(express.json())    //Sending JSON File

app.use(express.static('public'));
app.set('views','views'); // Express 
app.set('view engine','ejs'); //Setting up EJS Engine

app.use('/',router);

module.exports = app