let express = require("express");
const { AddService, getAllService, EditService, DeleteService } = require("../../controllers/service.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const upload = require("../../middleware/multer.middleware");
let router = express.Router();

router.post("/addservice" , Authenticate , Authorize("admin"),upload.single("image") ,AddService);
router.get("/" , Authenticate , Authorize("admin") , getAllService);
router.put("/edit/:id" , Authenticate , Authorize("admin") , upload.single("image") ,EditService);
router.delete("/delete/:id" , Authenticate , Authorize("admin") , DeleteService);

module.exports = router;