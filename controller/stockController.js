const catchAsync = require('../utils/catchAsync');
const Stock = require('../models/stockModel');
const AppError = require('../utils/AppError');
exports.getAll = catchAsync(async (req, res, next) => {
  const stockList = await Stock.find().populate('product').populate('store')
  res.status(200).json({
    status: 'success',
    data: {
      stockList,
    },
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const newStock = await Stock.create(req.body)
  res.status(200).json({
    status: 'success',
    data: {
      newStock,
    },
  });
});
