let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { AddInquiry } = require("../../controllers/Inquiry.controller");
let router = express.Router();

router.post("/addinquiry" , Authenticate , Authorize("user") , AddInquiry) ;

module.exports = router;