let express = require("express");
const { AddPetAdoption, getPetAdoption, getAllAdoptions } = require("../../controllers/adoption.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
let router = express.Router();

router.post("/petadoption" , Authenticate , Authorize("user") ,AddPetAdoption);
router.get("/" , getPetAdoption);
router.get("/all" , getAllAdoptions);

module.exports = router;