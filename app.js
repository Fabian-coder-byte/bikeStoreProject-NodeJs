var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var brandRouter = require('./routes/brandRouters');
var categoryRouter = require('./routes/categoryRouter');
var productRouter = require('./routes/productRouter');
var authRouter = require('./routes/authRouter');
var storeRouter = require('./routes/storeRouter');
var staffRouter = require('./routes/staffRouter');
var stockRouter = require('./routes/stockRouter');
var orderRouter = require('./routes/orderRouter');
var userRouter = require('./routes/userRouter');
var viewRouter = require('./routes/viewRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/brands', brandRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/stores', storeRouter);
app.use('/api/v1/staffs', staffRouter);
app.use('/api/v1/stock', stockRouter);
app.use('/api/v1/order', orderRouter);
app.use('/api/v1/users', userRouter);
app.use('/', viewRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
