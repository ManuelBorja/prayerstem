var express = require('express');
var router = express.Router();

/* GET regsiter page. */
router.get('/', function(req, res, next) {
  res.render('fastReg', { title: 'Register' });
});

module.exports = router;
