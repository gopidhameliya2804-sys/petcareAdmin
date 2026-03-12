let express = require("express");
const { AddServiceCategory, getServiceCategory, EditServiceCategory, DeleteServiceCategory } = require("../../controllers/servicecategory.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const upload = require("../../middleware/multer.middleware");
let router = express.Router();

router.post("/addservicecategory" ,Authenticate, Authorize("admin") , upload.single("image") ,AddServiceCategory);
router.get("/" ,Authenticate , Authorize("admin") ,getServiceCategory);
router.put("/edit/:id", Authenticate , Authorize("admin") ,upload.single("image") , EditServiceCategory);
router.delete("/delete/:id" , Authenticate , Authorize("admin") , DeleteServiceCategory);

module.exports = router;