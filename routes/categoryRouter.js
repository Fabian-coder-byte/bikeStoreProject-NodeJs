var express = require('express');
var router = express.Router();
var categoryController = require('../controller/categoryController');
router.route('/').get(categoryController.getAll).post(categoryController.create);
// router.route('/:id').get(categoryController.getOne).patch(categoryController.update).delete(categoryController.delete);

module.exports = router;