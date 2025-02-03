var express = require('express');
var router = express.Router();
var stockController = require('../controller/stockController');
router.route('/').get(stockController.getAll).post(stockController.create);
// router.route('/:id').get(brandController.getOne).patch(brandController.update).delete(brandController.delete);
module.exports = router;