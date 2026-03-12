let express = require("express");
const { getService } = require("../../controllers/service.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
let router = express.Router();

router.get("/:sercategoryid", Authenticate, Authorize("user"), getService);

module.exports = router;
