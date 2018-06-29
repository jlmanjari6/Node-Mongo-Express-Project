var express = require('express');
var router = express.Router();

/* GET student dashboard page. */
router.get('/', function (req, res, next) {
  res.render('Student/Dashboard', { title: 'Welcome' });
});

module.exports = router;