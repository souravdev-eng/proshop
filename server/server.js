import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import products from './data/products.js';
import conntetDB from './config/db.js';

dotenv.config();
conntetDB();

const app = express();

app.use(express.json());

app.get('/api/products', (req, res, next) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res, next) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server is running ${process.env.NODE_ENV} mode on port ${PORT}`.bgMagenta
      .bold
  )
);
