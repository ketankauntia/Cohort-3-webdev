function userAuthMiddleware(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = userModel.findOne((u) => u.username === username);

  if (foundUser) {
    res.json("Signin Successfull");
  } else {
    res.json("Credentials invalid, Signup declined");
  }
  //   res.json({
  //     msg: "User Middleware",
  //   });
}

module.exports({
  userAuthMiddleware,
});
