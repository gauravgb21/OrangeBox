var express = require('express');
var router  = express.Router();
var db      = require('../mysql_database/db');
//Display dashboard



router.use(function(req,res){
var navback=1;
  //set user object here as well
        db.query("SELECT `parent` FROM `directory` WHERE  `id` = '" + req.body.id + "'", function(err, response) {
            // console.log(response);
          db.query("Delete from `directory` WHERE `id` = '"+ req.body.id+"'",function(err,result){
              if(err)throw err;
          });
          db.query("SELECT * FROM `directory` WHERE `parent` = '" + response[0].parent + "'",function(err,result){
                if (err)throw err;
                console.log("response", response);
                console.log(result);
                res.render('dashboard',{
                  res:result,
                  globalpname:response,
                  navback: navback
                });
          });
      });

});

module.exports = router;
