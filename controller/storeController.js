const catchAsync = require('../utils/catchAsync');
const Store = require('../models/storeModel');
const AppError = require('../utils/AppError');
const factory = require('./handlerFactory')

exports.getAll = factory.getAll(Store)
exports.getOne = factory.getOne(Store)
exports.create = factory.create(Store)
exports.update = factory.update(Store)
exports.delete = factory.delete(Store)