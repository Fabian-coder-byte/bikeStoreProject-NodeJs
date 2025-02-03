var express = require('express');
var router = express.Router();
var orderController = require('../controller/orderController');
router.route('/').get(orderController.getAll).post(orderController.create);
// router.route('/:id').get(brandController.getOne).patch(brandController.update).delete(brandController.delete);

module.exports = router;