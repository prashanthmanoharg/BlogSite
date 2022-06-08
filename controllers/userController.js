//These are the functions that will be called when userController.js is called

const User = require('../models/User');

exports.login = function() {


}

exports.logout = function() {


}

exports.register = function(req,res) 
{
   let user = new User(req.body)
   user.register()
   if(user.errors.length){
            res.send(user.errors);
         
   }else{
           res.send("No Errors");

   }
   
}

exports.home = function(req,res) {

res.render('home-guest');
}