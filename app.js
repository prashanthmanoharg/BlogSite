const express = require('express'); 
const app = express();
const router = require('./router')

app.use(express.static('public'));
app.set('views','views'); // Express 
app.set('view engine','ejs'); //Setting up EJS Engine

app.use('/',router);

app.listen(3003,()=>{

console.log("App Connected to localhost:3003");

});
