var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });

    var metadata={
        test:'hi'
    }
    console.log(metadata)
    res.json(metadata)
});

module.exports = router;
