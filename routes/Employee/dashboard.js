var express = require('express');
var router = express.Router();

/* GET employee dashboard page. */
router.get('/', function (req, res, next) {
    res.render('Employee/Dashboard', { title: 'Welcome' });
});

module.exports = router;