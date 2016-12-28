var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Devs Imagen Digital' });
});

router.get('/brief', function(req, res, next) {
  res.render('brief', { title: 'Express' });
});

router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Express' });
});

module.exports = router;
