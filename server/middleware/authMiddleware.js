import jwt from 'jsonwebtoken';
import catchAsyc from 'express-async-handler';
import User from '../models/userModel.js';

const protect = catchAsyc(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decode = jwt.verify(token, process.env.JWT_SECRECT);
      // console.log(decode);
      req.user = await User.findById(decode.id).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized,token fail');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('There is no authorization');
  }

  // req.user = token;
});

export { protect };
