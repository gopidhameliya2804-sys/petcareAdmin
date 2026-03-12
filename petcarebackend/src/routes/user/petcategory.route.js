let express = require("express");
const { getPetCategory } = require("../../controllers/petcategory.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
let router = express.Router();

router.get("/" , getPetCategory);

module.exports = router;