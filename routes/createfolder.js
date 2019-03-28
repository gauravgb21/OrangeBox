var express = require('express');
var router  = express.Router();
var db      = require('../mysql_database/db');

//store user data in database

router.use(function(req,res){
var name = req.body.name;
 var directory={
  name:name,
  type:1,
  parent:req.body.parent,
  link:null,
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
  //res.redirect('/dashboard');
});

module.exports = router;