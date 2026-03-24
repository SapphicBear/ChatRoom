const express = require("express");
const router = express.Router();
const controller = require("./../controllers/MessageController");

router.get("/", controller.messagesGet);

module.exports = router;