let express = require("express");
const { AddPetAdoption, getPetAdoption,  getAllAdoptions, DeleteAdopt } = require("../../controllers/adoption.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
let router = express.Router();

router.post("/petadoption" , Authenticate , Authorize("admin") ,AddPetAdoption);
router.get("/" , getPetAdoption);
router.get("/all" , getAllAdoptions);
router.delete("/delete/:id" , DeleteAdopt);

module.exports = router;