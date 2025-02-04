var express = require('express');
var router = express.Router();
var viewController = require('../controller/viewController');
router.route('/').get(viewController.overview)
module.exports = router;