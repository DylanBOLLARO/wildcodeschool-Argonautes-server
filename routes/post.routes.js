// import
const router = require("express").Router();
const postController = require("../controllers/post.controller.js");

router.get("/", postController.getall);
router.post("/", postController.addone);
router.delete("/:id", postController.deleteone);

module.exports = router;
