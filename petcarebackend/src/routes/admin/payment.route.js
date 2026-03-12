let express = require("express");
const { AddPayment, getPayemnt } = require("../../controllers/payment.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
let router = express.Router();

// router.post("/addpayment" ,Authenticate , Authorize("admin") , AddPayment);
// router.get("/" , getPayemnt);

module.exports = router;