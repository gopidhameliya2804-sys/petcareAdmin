let express = require("express");
const { getPet, getAllPet } = require("../../controllers/pet.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
let router = express.Router();

router.get("/:petcategoryid" , getPet);
router.get("/" , getAllPet);

module.exports = router;