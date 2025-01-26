var express = require('express');
var router = express.Router();
var authController = require('../controller/authController');
router.post('/signup', authController.signup)
// router.route('/:id').get(categoryController.getOne).patch(categoryController.update).delete(categoryController.delete);

module.exports = router;