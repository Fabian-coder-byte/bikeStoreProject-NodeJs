var express = require('express');
var router = express.Router();
var productController = require('../controller/productController');
router.route('/').get(productController.getAll).post(productController.create);
// router.route('/:id').get(productController.getOne).patch(productController.update).delete(productController.delete);

module.exports = router;