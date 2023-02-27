const express = require("express");
const router = express.Router();

const TypeApi = require("../controllers/type.controller");

router.post("", TypeApi.addNewType);

module.exports = router;