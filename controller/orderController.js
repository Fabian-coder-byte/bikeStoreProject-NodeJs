const catchAsync = require('../utils/catchAsync');
const Order = require('../models/orderModel');
const OrderItem = require('../models/orderItemModel');
const AppError = require('../utils/AppError');
const Product = require('../models/productModel');
exports.getAll = catchAsync(async (req, res, next) => {
  const orderUserList = await Order.find({ user: req.params.userId }).populate('customer').populate('orderItems')
  res.status(200).json({
    status: 'success',
    data: {
      orderUserList,
    },
  });
});

exports.create = catchAsync(async (req, res, next) => {
  // Creazione iniziale dell'ordine senza OrderItems
  let newOrder = await Order.create({
    customer: req.body.customer,
    status: req.body.status,
    orderDate: req.body.orderDate,
    deliveryDate: req.body.deliveryDate,
    staff: req.body.staff,
    store: req.body.store,
  });

  // Creazione degli OrderItems associati all'ordine
  const orderItems = await Promise.all(req.body.orderItems.map(async (orderItem) => {
    const product = await Product.findById(orderItem.product);
    if (!product) {
      return next(new AppError(`Product with ID ${orderItem.product} not found`, 404));
    }
    let newOrderItem = new OrderItem({
      quantity: orderItem.quantity,
      product: orderItem.product,
      price: product.price,
      discount: orderItem.discount,
      order: newOrder._id,
    });

    newOrderItem = await newOrderItem.save();
    return newOrderItem._id;
  }));

  // Aggiorna l'ordine con gli OrderItems
  newOrder.orderItems = orderItems;
  newOrder = await newOrder.save();

  // Risposta
  res.status(200).json({
    status: 'success',
    data: {
      newOrder,
    },
  });
});

