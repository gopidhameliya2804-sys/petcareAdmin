let express = require("express");
const { AddPet,  getAllPet, EditPet, DeletePet } = require("../../controllers/pet.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const upload = require("../../middleware/multer.middleware");
let router = express.Router();

router.post("/addpet" ,Authenticate , Authorize("admin") , upload.single("image"), AddPet);
router.get("/" ,Authenticate , Authorize("admin") ,getAllPet);
router.put("/edit/:id",Authenticate , Authorize("admin") , upload.single("image"), EditPet);
router.delete("/delete/:id",Authenticate , Authorize("admin") , DeletePet);

module.exports = router;