const jwt = require("jsonwebtoken");

function userAuthMiddleware(req, res, next) {
  // console.log("In userMiddleware.js");

  //we will get the token from the user and validate/authenticate from that token

  const token = req.headers.token; //we get the jwt token from the headers
  console.log(token);

  if (!token) {
    res.status(403).json({
      message: "Please sigin first. Token doesn't exist",
    });
  }

  try {
    const validToken = jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (e) {
    res.status(403).json({
      // message: "Auth issue from the userAuthMiddleware",
      message: e.message,
    });
  }
}

module.exports = {
  userAuthMiddleware,
};
