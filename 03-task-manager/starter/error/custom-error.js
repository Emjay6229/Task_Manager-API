//Extend the express Error class to create custom error sub-class
class CustomAPIError extends Error {
    constructor (message, statusCode) {
        super(message)
        this.statusCode = statusCode;
    }
}

// Instantiate a custom error object from the custom error class
const createCustomError = (msg, statusCode) => {
    return new CustomAPIError (msg, statusCode)
}

module.exports = {
    CustomAPIError,
    createCustomError
}