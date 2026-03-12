let express = require("express");
const { getAllUsers } = require("../../controllers/users.controller");
let router = express.Router();

router.get("/" , getAllUsers);

module.exports = router;