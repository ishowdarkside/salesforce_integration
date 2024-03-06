const catchAsync = (fn) => {
  console.log("message on server");
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

module.exports = catchAsync;
