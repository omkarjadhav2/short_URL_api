const express = require("express");
const {HandleUserSignUp ,HandleUserLogin } = require("../controllers/user");

const router = express.Router();

router.post("/", HandleUserSignUp)
router.post("/login", HandleUserLogin)


module.exports = router;