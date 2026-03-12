let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { ForgotPassword } = require("../../controllers/password.controller");
const { resetPassword } = require("../../controllers/reset.controller");
let router = express.Router();

router.post("/forgot" ,  ForgotPassword);
router.post("/reset" , resetPassword);


module.exports = router;