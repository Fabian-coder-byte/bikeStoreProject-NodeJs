var express = require('express');
var router = express.Router();
var brandController = require('../controller/brandController');
router.route('/').get(brandController.getAll).post(brandController.create);
router.route('/:id').get(brandController.getOne).patch(brandController.update).delete(brandController.delete);

module.exports = router;