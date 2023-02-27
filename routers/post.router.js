const express = require("express");
const router = express.Router();

const PostApi = require("../controllers/post.controller");

router.get("", PostApi.fetchAllPost);
router.get("/id-post/:id", PostApi.fetchPostById);
router.get("/slug/:slug", PostApi.fetchPostBySlug);
router.get("/status/:status", PostApi.fetchPostByStatus);
router.post("", PostApi.addNewPost);

module.exports = router;
