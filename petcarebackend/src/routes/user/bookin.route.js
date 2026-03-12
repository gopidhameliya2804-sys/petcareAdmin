let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { AddBooking, getBookig, getAllBookig } = require("../../controllers/booking.controller");
let router = express.Router();

router.post("/addbooking" , Authenticate , Authorize("user") , AddBooking);
router.get("/" ,Authenticate , Authorize("user"), getBookig);

module.exports = router;