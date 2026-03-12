let express = require("express");
const { getServiceCategory } = require("../../controllers/servicecategory.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
let router = express.Router();

router.get("/" , Authenticate , Authorize("user") ,getServiceCategory);

module.exports = router;