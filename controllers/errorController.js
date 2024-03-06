const errorController = (err, req, res, next) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: "fail",
      message: err.message,
    });
  }

  res.status(500).json({
    status: "error",
    message: "Something went really wrong",
  });
};

module.exports = errorController;
