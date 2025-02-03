const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
}

const createSendToken = async function (user, statusCode, res) {
  const token = signToken(user._id)
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user
    }
  })
}
exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  const token = signToken(newUser._id);
  res.status(200).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
    message: 'User signed up successfully',
  });
});

exports.logIn = catchAsync(async (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    return next(new AppError("Email o Password errati", 500))
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user || (!await user.checkPassword(password, user.password))) {
    return next(new AppError("Dati non validi", 500))
  }
  createSendToken(user, 200, res)
})