import catchAsync from 'express-async-handler';
import Product from '../models/productModel.js';

export const getAllProduct = catchAsync(async (req, res, next) => {
  const product = await Product.find({});
  res.status(200).json(product);
});

export const getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }
  res.status(200).json(product);
});

// module.exports = { getAllProduct, getProduct };
