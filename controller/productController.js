const catchAsync = require('../utils/catchAsync');
const Product = require('../models/productModel');
const AppError = require('../utils/AppError');
exports.getAll = catchAsync(async (req, res, next) => {
  const productList = await Product.find().populate('category')
    .populate('brand')
  res.status(200).json({
    status: 'success',
    data: {
      productList,
    },
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const newProduct = await Product.create(req.body)
  res.status(200).json({
    status: 'success',
    data: {
      newProduct,
    },
  });
});