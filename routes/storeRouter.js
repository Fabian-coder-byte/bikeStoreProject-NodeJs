var express = require('express');
var router = express.Router();
var storeController = require('../controller/storeController');
router.route('/').get(storeController.getAll).post(storeController.create);
router.route('/:id').get(storeController.getOne).patch(storeController.update).delete(storeController.delete);

module.exports = router;