var express = require('express');
var router  = express.Router();
var db      = require('../mysql_database/db');
//Display dashboard



router.use(function(req,res){
  var navback=1;
  var parent;
  //set user object here as well
      db.query("SELECT * FROM `directory` WHERE `parent` = '" + req.body.id + "'",function(err,result){
        if (err)throw err;
        // if (result.length) {
        //     parent= result[0]
        // }
        db.query("SELECT `parent` FROM `directory` WHERE  `id` = '" + req.body.id + "'", function(err, response) {
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
