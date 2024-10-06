function adminAuthMiddleware(req, res, next) {
  res.json({
    msg: "admin Middleware",
  });
}
