let express = require("express");
const { AddUser, getUser } = require("../../controllers/register.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
let router = express.Router();

router.post("/adduser" ,Authenticate , Authorize("admin") ,AddUser);
router.get("/" , getUser);

module.exports = router;