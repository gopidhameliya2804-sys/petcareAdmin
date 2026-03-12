let express = require("express");
const { AddFeedback, getfeedback, DeleteFeedback } = require("../../controllers/feedback.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
let router = express.Router();

router.post("/addfeedback" ,Authenticate , Authorize("admin"), AddFeedback);
router.get("/" , getfeedback);
router.delete("/delete/:id" , DeleteFeedback);

module.exports = router;