var express = require('express');
var router  = express.Router();
var db      = require('../mysql_database/db');

//store user data in database

router.use(function(req,res){
  var url  = req.body.url;
  var name = req.body.name;
  var globalpname = req.body.globalpname;

  db.query("SELECT * FROM `users` WHERE `username` = '" + req.user.username + "'",function(err,rows){
      if (err)
                return done(err);
      var directory={
      name:name,
      type:0,
      parent:globalpname,
      link:url,
      access:1
    }

    db.query('INSERT INTO directory SET ?',directory,function(error,results,fields){
      if(error)
        throw error;
      else
      {
        console.log("directory RECORD ADDED!");
      }
    });
  });
  //res.redirect('/dashboard');
});

module.exports = router;
