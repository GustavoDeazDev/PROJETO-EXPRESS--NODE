var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
  titulo: 'Ola Mundo'
 }
  );
});

module.exports = router;
