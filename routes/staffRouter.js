var express = require('express');
var router = express.Router();
var staffController = require('../controller/staffController');
router.route('/').get(staffController.getAll).post(staffController.create);
router.route('/:id').get(staffController.getOne).patch(staffController.update).delete(staffController.delete);

module.exports = router;