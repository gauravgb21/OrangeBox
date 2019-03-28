var express = require('express');
var router  = express.Router();
var db      = require('../mysql_database/db');
//Display dashboard



router.use(function(req,res){
  //set user object here as well
      db.query("SELECT * FROM `directory` WHERE `parent` = '" + req.body.id + "'",function(err,result){
        if (err)throw err;
        console.log(result);  
        res.render('dashboard',{
          res:result,
          globalpname:req.body.id
        });
    }); 
});

module.exports = router;