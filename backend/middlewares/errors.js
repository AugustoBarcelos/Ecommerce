const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

    if (process.env.NODE_ENV === 'DEVELOPMENT') {
      console.log(err);

      res.status(err.statusCode).json({
          success: false,
          error: err,
          errMessage: err.message,
          stack: err.stack
      })
  }

    if (process.env.NODE_ENV === 'PRODUCTION') {
      let error = {...err}

      error.message = err.message;

      //Wrong Mongoose Object ID
      if(err.name ==='CastError'){
        const message = `Resource not found. Invalid: ${err.path}`
        erroor = new ErrorHandler(message, 400)
      }

      //Handling Mongoose Validation Error
      if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).maps(value => value.message);
        erroor = new ErrorHandler(message, 400)
      }

      res.status(err.statusCode).json({
      success: false,
      error:error.message || 'Internal Server Error'
  })
    }

}