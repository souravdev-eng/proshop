import jwt from 'jsonwebtoken';

const genarateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRECT, {
    expiresIn: process.env.JWT_SECRECT_EXP,
  });
};

export default genarateToken;
