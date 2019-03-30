var express = require('express');
var router  = express.Router();
var db      = require('../mysql_database/db');
//Display dashboard

router.use('/:folderid',function(req,res){
    var fid = req.params.folderid;
    console.log(fid);
    var navback=1;
    var parent;
    //set user object here as well
        db.query("SELECT * FROM `directory` WHERE `parent` = '" + fid + "'",function(err,result){
          if (err)throw err;
          // if (result.length) {
          //     parent= result[0]
          // }
          db.query("SELECT `parent` FROM `directory` WHERE  `id` = '" + fid + "'", function(err, response) {
            console.log("navback here: ",response);
            setValue(response)
          })
          function setValue(response) {
            navback= response[0].parent;
          }
          res.render('dashboard',{
            res:result,
            globalpname:fid,
            navback: navback
          });
      });
});

// router.use(function(req,res){
//   var navback=1;
//   var parent;
//   //set user object here as well
//       db.query("SELECT * FROM `directory` WHERE `parent` = '" + req.body.id + "'",function(err,result){
//         if (err)throw err;
//         // if (result.length) {
//         //     parent= result[0]
//         // }
//         db.query("SELECT `parent` FROM `directory` WHERE  `id` = '" + req.body.id + "'", function(err, response) {
//           console.log("navback here: ",response);
//           setValue(response);
//         })
//         function setValue(response) {
//           navback= response;
//         }
//         res.render('dashboard',{
//           res:result,
//           globalpname:req.body.id,
//           navback: navback
//         });
//     });
// });

module.exports = router;
