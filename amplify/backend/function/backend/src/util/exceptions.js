class BaseError extends Error {
    /**
     * @param {string} message 
     * @param {Error} cause 
     */
    constructor(message, cause, httpCode) {
        super(message)
        this.cause = cause
        this.httpCode = httpCode
    }
}

class TechnicalError extends BaseError {
    constructor(message, cause, httpCode) {
        super(message, cause, httpCode || 500)
    }
}

class InternalServerError extends TechnicalError {
}

class ConfigurationError extends InternalServerError {
}

class DatabaseError extends InternalServerError {
}

class BizError extends BaseError {
    constructor(message, cause, httpCode) {
        super(message, cause, httpCode || 400)
    }
}

class NotFoundError extends BizError {
    constructor(message, cause, httpCode) {
        super(message, cause, httpCode || 404)
    }
}

class ValidationError extends BizError {
}

class MethodNotAllowedError extends ValidationError {
}

class AuthorizationError extends ValidationError {
    constructor(message, cause, httpCode) {
        super(message, cause, httpCode || 401)
    }
}

class NotAuthorizedError extends AuthorizationError {
    constructor(message, cause, httpCode) {
        super(message, cause, httpCode || 401)
    }
}


module.exports = {
    TechnicalError, ValidationError, MethodNotAllowedError,
    NotAuthorizedError, AuthorizationError, NotFoundError
}