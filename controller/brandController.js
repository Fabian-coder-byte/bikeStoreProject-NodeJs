const catchAsync = require('../utils/catchAsync');
const Brand = require('../models/brandModel');
const AppError = require('../utils/AppError');
exports.getAll = catchAsync(async (req, res, next) => {
  const brandList = await Brand.find()
  res.status(200).json({
    status: 'success',
    data: {
      brandList,
    },
  });
});
exports.getOne = catchAsync(async (req, res, next) => {
  const brand = await Brand.findById(req.params.id);
  if (!brand) {
    return next(new AppError('No brand found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      brand,
    },
  });
});
exports.update = catchAsync(async (req, res, next) => {
  const brand = await Brand.findByIdAndUpdate(req.params.id, req.body);
  if (!brand) {
    return next(new AppError('No brand found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      brand,
    },
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const newBrand = await Brand.create(req.body)
  res.status(200).json({
    status: 'success',
    data: {
      newBrand,
    },
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  const brand = await Brand.findByIdAndDelete(req.params.id);
  if (!brand) {
    return next(new AppError('No brand found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      brand,
    },
  });
});