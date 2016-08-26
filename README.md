# User required middleware

A simple Express middleware to check user in the session.

### Usage

```javascript
var express = require('express');
var userRequired = require('user-required');

var router = express.Router();

router.use('/admin', userRequired({
    errorStatus: 401,
    errorMessage: "Unauthorized",
    userField: "userId"
}));
```

### Notes
The middleware will check that `req.session` has a property named as spceficied by the `userField` option. The status, message and userField are optional and will default to `401`, `Unauthorized`, `userId`. The error generated is an `http-error` and can be dealt by `http-error-express` (see related modules).
