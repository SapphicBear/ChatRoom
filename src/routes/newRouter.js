const express = require("express");
const router = express.Router();
const controller = require("./../controllers/MessageController");

router.get("/", controller.newMessageGet);
router.post("/", controller.usersCreatePost);

module.exports = router;