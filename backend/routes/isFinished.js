var express = require('express');
var router = express.Router();

// req>body>params> uid
router.get('/', function(req, res, next) {

  console.log(req.query)
  console.log('hi isfinidish')

  var metadata={
    uid:'',
    CNT:0
  }
  
  if(req.query['uid'] == 'abc')[
    metadata.uid=req.query['uid']
  ]

    console.log(metadata)
    res.json(metadata)
});

module.exports = router;
