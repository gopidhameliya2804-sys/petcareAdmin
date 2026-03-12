let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { AddFeedback, getfeedback } = require("../../controllers/feedback.controller");
let router = express.Router();

router.post("/addfeedback" , Authenticate , Authorize("user") , AddFeedback);
router.get("/" , getfeedback);

module.exports = router;