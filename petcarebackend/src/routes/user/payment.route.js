let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { createOrder } = require("../../controllers/payment.controller");
let rounter = express.Router();

rounter.post("/get-services" , Authenticate , Authorize("user") , createOrder);


module.exports = rounter;