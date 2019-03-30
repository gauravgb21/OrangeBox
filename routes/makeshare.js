var express = require('express');
var router  = express.Router();
var db      = require('../mysql_database/db');
//Display dashboard

router.use('/:folderid',function(req,res){
    console.log("here");
    var fid = req.params.folderid;
    db.query("UPDATE directory SET access = ? WHERE id = ?",[0,fid],function(err,result){
        if(err)throw err;
        console.log("Sharing...\n");
        console.log(fid);
        console.log(result);
        var tmpurl = "/sharefolder/"+fid;
        res.redirect(tmpurl);
    });
});


module.exports = router;
