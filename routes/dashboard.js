var express = require('express');
var router  = express.Router();
var db      = require('../mysql_database/db');
//Display dashboard

router.use(function(req,res){
  //set user object here as well
  db.query("SELECT * FROM `users` WHERE `username` = '" + req.user.username + "'",function(err,rows){
      if (err)throw err;
      
      db.query("SELECT * FROM `directory` WHERE `parent` = '" + rows[0].root_id + "'",function(err,result){
        if (err)throw err;
        console.log(result);
        res.render('dashboard',{
        	file:result
        });
	  }); 
	    
  });
});

module.exports = router;