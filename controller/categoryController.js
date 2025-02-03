const catchAsync = require('../utils/catchAsync');
const Category = require('../models/categoryModel');
const AppError = require('../utils/AppError');
const factory = require('./handlerFactory')

exports.getAll = factory.getAll(Category)
exports.getOne = factory.getOne(Category)
exports.create = factory.create(Category)
exports.update = factory.update(Category)
exports.delete = factory.delete(Category)


