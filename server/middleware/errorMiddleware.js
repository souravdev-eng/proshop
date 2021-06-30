const notFound = (req, res, next) => {
  const err = new Error(`Not found ${req.originalUrl}`);
  res.status(404);
  next(err);
};

const errorHandelar = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
  next();
};

export { notFound, errorHandelar };
