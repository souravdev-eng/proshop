import catchAsync from 'express-async-handler';
import User from '../models/userModel.js';
import genarateToken from '../utils/genarateToken.js';

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: genarateToken(user._id),
    });
  } else {
    throw new Error('Invalid email or password');
  }
});

export const signUp = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;

  const exsistUser = await User.findOne({ email });
  if (exsistUser) {
    res.status(500);
    throw new Error('User already exsist');
  }

  const user = await User.create({ name, email, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: genarateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error('user not found');
  }
});

export const getProfile = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('No user found');
  }
});

export const updateProfile = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updateUser = await user.save();
    res.status(201).json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
      token: genarateToken(updateUser._id),
    });
  } else {
    res.status(404);
    throw new Error('No user found');
  }
});
