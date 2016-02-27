var HttpError = require('http-error');

module.exports = function(opts) {
	opts = opts || {};
	opts.errorStatus = opts.errorStatus || 401;
	opts.errorMessage = opts.errorMessage || "Unauthorized";

	function middleware(req, res, next) {
		if (req.session.userId) {
			next();
			return;
		}

		next(new HttpError(opts.errorStatus, opts.errorMessage));
	}

	return middleware;
}
