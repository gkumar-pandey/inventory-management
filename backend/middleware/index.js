const globalErrorHandler = (err, req, res, next) => {
  console.log(err.stack);
  res
    .status(500)
    .json({ success: false, message: "Internal server error.", error: err });
};

const routeNotFoundErrorHandler = (req, res, next) => {
  res.status(404).json({ success: false, message: "Route not found." });
};

module.exports = { globalErrorHandler, routeNotFoundErrorHandler };
