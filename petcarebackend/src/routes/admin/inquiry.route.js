let express = require("express");
const { AddInquiry, getInquiry, DeleteInquiry } = require("../../controllers/Inquiry.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
let router = express.Router();

router.get("/" , Authenticate , Authorize("admin"), getInquiry);
router.delete("/delete/:id" , DeleteInquiry);

module.exports = router;