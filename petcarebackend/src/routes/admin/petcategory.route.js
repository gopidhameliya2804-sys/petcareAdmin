let express = require("express");
const { AddPetCategory, getPetCategory, EditPetCategory, DeletePetCategory } = require("../../controllers/petcategory.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const upload = require("../../middleware/multer.middleware");
let router = express.Router();

router.post("/addpetcategory" ,Authenticate , Authorize("admin"), upload.single("image") ,AddPetCategory);
router.get("/" , getPetCategory);
router.put("/edit/:id" ,upload.single("image"), EditPetCategory);
router.delete("/delete/:id" , DeletePetCategory);

module.exports = router;