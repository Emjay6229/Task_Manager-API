const { CustomAPIError } = require('../error/custom-error')

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        res.status(err.statusCode).json({
          msg: err.message
        })
    }
    res.status(500).json({
        error: 'Something went wrong. Please try again;'
    })
}

module.exports = errorHandler;

// create a wrapper function to catch erors
// create a custom error which can 