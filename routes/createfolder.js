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

db.query("SELECT * FROM `directory` WHERE `parent` = '" + req.body.parent + "'",function(err,result){
        if (err)throw err;
        console.log(result);  
        res.render('dashboard',{
          res:result,
          globalpname:req.body.parent
        });
    }); 

  // res.render('/dashboard');
});

module.exports = router;