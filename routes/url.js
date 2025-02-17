const express = require("express");
const { HandleGenrateNewUrl , HandleGetAnalytics} = require("../controllers/url")
const router = express.Router();

router.post("/" , HandleGenrateNewUrl);

router.get("/analytics/:shortId" ,HandleGetAnalytics)

module.exports = router;