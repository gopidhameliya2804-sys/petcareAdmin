let express = require("express");
const { Login, signup } = require("../controllers/auth.controller");
let router = express.Router();

router.post("/signup", signup)
router.post("/signin", Login)


module.exports = router;