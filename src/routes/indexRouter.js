const express = require("express");
const links = require("./links");
const pages = require("./pages")[0];
const router = express.Router();
const messages = require("./messages");

router.get("/", (req, res) => {
    res.render("index", { links: links, messages: messages, pages: pages });
});

module.exports = router;