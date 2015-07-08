var express = require('express');
var router = express.Router();
var merge = require('utils-merge');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.locals = {};
	res.locals = merge(res.locals,req.app.locals)

  res.render('index', {
  	title: 'Express'
  });
});

module.exports = router;
