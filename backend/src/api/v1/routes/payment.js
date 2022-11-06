const router = require('express').Router();
const { processPayment, sendStripApi } = require("../payment/controller");
const { isAuthenticatedUser } = require('../middleware/auth')

router.post('/process',  processPayment);
router.get('/stripeapi', isAuthenticatedUser, sendStripApi);

module.exports = router;