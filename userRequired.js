var HttpError = require('http-error');

module.exports = function(opts) {
	opts = opts || {};
	opts.errorStatus = opts.errorStatus || 401;
	opts.errorMessage = opts.errorMessage || "Unauthorized";
	opts.userField = opts.userField || "userId";

	function middleware(req, res, next) {
		if (req.session[opts.userField]) {
			next();
			return;
		}

		if (next)
			next(new HttpError(opts.errorStatus, opts.errorMessage));
		else
			throw new HttpError(opts.errorStatus, opts.errorMessage);
	}

	return middleware;
}

