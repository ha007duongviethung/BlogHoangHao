const express = require("express");
const router = express.Router();

const SlugApi = require("../controllers/slug.controller");

router.post("", SlugApi.addNewSlug);

module.exports = router;