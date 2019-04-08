var express = require('express');
var router  = express.Router();
var db      = require('../mysql_database/db');
//Display dashboard

router.use('/:folderid',function(req,res){
  if(req.user == null){
    res.redirect('/');
  }
  else{
    var fid = req.params.folderid;
    console.log(fid);
    //set user object here as well
    db.query("SELECT `access` FROM `directory` WHERE `id` = '" + fid + "'" , function(err,resultt){
        if(err)throw err;
        if(resultt[0].access == 0){
            db.query("SELECT * FROM `directory` WHERE `parent` = '" + fid + "'",function(err,result){
              if (err)throw err;
              res.render('dashboard',{
                res:result,
                globalpname:fid
              });
          });
        }
        else {
            res.send('Access Denied');
        }
    });
  }
});

module.exports = router;
