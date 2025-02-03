const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');
const AppError = require('../utils/AppError');

exports.getAll = catchAsync(async (req, res, next) => {
  const doc = await User.find()
  res.status(200).json({
    status: "success",
    data: {
      doc
    }
  })
})