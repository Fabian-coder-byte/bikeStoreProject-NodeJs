const catchAsync = require('../utils/catchAsync');
const Category = require('../models/categoryModel');
const AppError = require('../utils/AppError');
exports.getAll = catchAsync(async (req, res, next) => {
  const categoryList = await Category.find()
  res.status(200).json({
    status: 'success',
    data: {
      categoryList,
    },
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const newCategory = await Category.create(req.body)
  res.status(200).json({
    status: 'success',
    data: {
      newCategory,
    },
  });
});
