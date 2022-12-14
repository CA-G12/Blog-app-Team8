const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, process.env.secret, (err, decoded) => {
    if (err) { res.status(300).json({ massage: 'signup.html' }); } else {
      req.token = decoded;
      next();
    }
  });
};

module.exports = verifyToken;
