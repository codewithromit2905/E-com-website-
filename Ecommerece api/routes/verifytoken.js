
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header('auth-token')
  if (authHeader) {
   
    jwt.verify( authHeader , process.env. JWT_SECRET, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};
// only admin can do various functipon 
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if ( req.user.isAdmin)  {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};