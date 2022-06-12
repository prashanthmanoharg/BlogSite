//These are the functions that will be called when userController.js is called

const User = require('../models/User');

exports.login = function(req, res) {
let user = new User(req.body);
user.login().then(function(result)  { //Promise for True Condition
       req.session.user = {username: user.data.username}
       req.session.save(function(){

           res.redirect('/')

       })
}).catch(function(e) {  
        //Promise for False Condition
        req.flash('errors',e)
        req.session.save(function(){

                res.redirect('/')

        })
})    
}


exports.logout = function(req,res) {

        req.session.destroy(function(){

                res.redirect('/')

        })
        
}

exports.register = function(req,res) 
{
   let user = new User(req.body)
   user.register()
   if(user.errors.length){
            user.errors.forEach(function(error){

                req.flash('regErrors', error)

            })
            req.session.save(function(){

                res.redirect('/')

            })
         
   }else{
           res.send("No Errors");

   }
   
}

exports.home = function(req,res) {

if(req.session.user)
{

res.render('home-dashboard',{username: req.session.user.username}) // For Successful Login

}else{
res.render('home-guest',{errors: req.flash('errors'),regErrors: req.flash('regErrors')})  // Failed Login

}
}