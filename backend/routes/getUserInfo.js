var express = require('express');
var router = express.Router();

// req>body>params> uid, password
router.get('/', function(req, res, next) {
    
    console.log(req.query)
    console.log('hi getuser')

    var metadata={
        uid:req.query.uid,
        length:1
    }
    //console.log(metadata)
    res.json(metadata)
});

module.exports = router;
