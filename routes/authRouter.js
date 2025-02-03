var express = require('express');
var router = express.Router();
var authController = require('../controller/authController');
router.post('/signup', authController.signup)
router.post('/login', authController.logIn)

module.exports = router;