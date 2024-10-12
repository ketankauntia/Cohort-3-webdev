const jwt = require("jsonwebtoken");

function adminAuthMiddleware(req, res, next) {
  const token = req.headers.token;
  console.log(`token from admin authMiddleware : ${token}`);
  if (!token) {
    res.status(403).json({
      message: "Please sign in. Token doesn't exists",
    });
  }

  try {
    const verifedToken = jwt.verify(token, process.env.JWT_SECRET_KEY_ADMIN);
    if (verifedToken) {
      // setting the userId field into the req object.So, from now on, id of the user can be accessed from req.userId property
      req.userId = verifedToken.id; //[IMP] To pass the user details via the token to the authenticated endpoints
      next();
    } else {
      res.status(403).json({
        message: "Invalid Token. Signin Again",
      });
    }
  } catch (e) {
    res.status(403).json({
      message: e.message,
    });
  }
}

module.exports = {
  adminAuthMiddleware,
};
