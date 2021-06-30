import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';

import conntetDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { errorHandelar, notFound } from './middleware/errorMiddleware.js';

dotenv.config();
conntetDB();

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/products', productRoutes);

// error handling
app.use(notFound);
app.use(errorHandelar);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server is running ${process.env.NODE_ENV} mode on port ${PORT}`.bgMagenta
      .bold
  )
);
