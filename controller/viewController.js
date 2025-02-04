const catchAsync = require('../utils/catchAsync')
const Brand = require('../models/brandModel')

exports.overview = catchAsync(async (req, res, next) => {
  const doc = await Brand.find()
  res.status(200).render('brand', {
    title: "Overview",
    data: doc
  })
})