const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

exports.getOne = Model => catchAsync(async (req, res, next) => {
  const doc = await Model.findById(req.params.id)
  if (!doc) {
    next(new AppError("Documento non trovato", 404))
  }
  res.status(200).json({
    status: "success",
    data: {
      doc
    }
  })
})

exports.getAll = Model => catchAsync(async (req, res, next) => {
  const doc = await Model.find()
  res.status(200).json({
    status: "success",
    data: {
      doc
    }
  })
})

exports.update = Model => catchAsync(async (req, res, next) => {
  const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!doc) {
    return next(new AppError('No doc found with that ID', 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      doc
    }
  })
})

exports.create = Model => catchAsync(async (req, res, next) => {
  const doc = await Model.create(req.body)
  res.status(200).json({
    status: 'success',
    data: {
      doc,
    },
  });
});

exports.delete = Model => catchAsync(async (req, res, next) => {
  const doc = await Model.findByIdAndDelete(req.params.id);
  if (!doc) {
    return next(new AppError('No doc found with that ID', 404));
  }
  res.status(204).json({
    status: 'success',
    data: {
      doc,
    },
  });
});