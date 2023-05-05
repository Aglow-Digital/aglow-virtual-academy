const CustomAPIError = require("./custom-api");
const UnauthenticatedError = require("./unauthenticated");
const NotFoundError = require("./not-found");
const BadRequestError = require("./bad-request");

module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
};

// // errors
// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

// how to call the error class in ur controller methods
// throw new BadRequestError('Please provide email and password')
