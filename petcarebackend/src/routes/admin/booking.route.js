let express = require("express");
const { AddBooking, getBookig, getAllBookig, DeleteBooking, UpdateBookingStatus } = require("../../controllers/booking.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { updateUserStatus } = require("../../controllers/users.controller");
let router = express.Router();

router.post("/addbooking" , Authenticate , Authorize("admin") , AddBooking);
// router.get("/" ,Authenticate, Authorize("admin") ,getBookig);
router.get("/" , Authenticate , Authorize("admin") , getAllBookig);
router.delete("/delete/:id", Authenticate, Authorize("admin") ,DeleteBooking);
router.put("/status/:id" , Authenticate, Authorize("admin"), UpdateBookingStatus);

module.exports = router;