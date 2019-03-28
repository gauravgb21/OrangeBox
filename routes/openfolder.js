var express = require('express');
var router  = express.Router();
var db      = require('../mysql_database/db');
//Display dashboard



router.use(function(req,res){
  var navback=1;
  //set user object here as well
      db.query("SELECT * FROM `directory` WHERE `parent` = '" + req.body.id + "'",function(err,result){
        if (err)throw err;
        // console.log(result[0].parent);
        
        db.query("SELECT `parent` FROM `directory` WHERE  `id` = '" + result[0].parent + "'", function(err, response) {
          setValue(response);
        }) 
        function setValue(response) {
          navback= response;
        } 
        res.render('dashboard',{
          res:result,
          globalpname:req.body.id,
          navback: navback
        });
    }); 
});

module.exports = router;