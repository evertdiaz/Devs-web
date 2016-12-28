var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', { title: 'Express' });
});

router.get('/feedback', function(req, res, next) {
  res.render('admin/feedback', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('admin/dashboard', { title: 'Express' });
}); 

module.exports = router;
