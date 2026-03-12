let express = require("express");
const { Profile } = require("../../controllers/user.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { updateUserStatus } = require("../../controllers/users.controller");


let router = express.Router();

router.get("/profile", Authenticate, Authorize("user"), Profile);
router.get("/profileHome" , Profile);
router.put("/edit/:id" , Authenticate , Authorize("user") , updateUserStatus);

module.exports = router;