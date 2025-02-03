const catchAsync = require('../utils/catchAsync');
const Brand = require('../models/brandModel');
const AppError = require('../utils/AppError');
const factory = require('./handlerFactory')

exports.getAll = factory.getAll(Brand);
exports.getOne = factory.getOne(Brand)
exports.update = factory.update(Brand)
exports.create = factory.create(Brand)
exports.delete = factory.delete(Brand)