import express from 'express';
import { getAllProduct, getProduct } from '../controller/productController.js';

const router = express.Router();

router.route('/').get(getAllProduct);

router.route('/:id').get(getProduct);

export default router;
