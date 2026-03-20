const express = require("express");
const router = express.Router();
const links = require("./links");
const pages = require("./pages")[1];
const messages = require("./messages");

router.get("/", (req, res) => {
    res.render("new.ejs", { links: links, pages: pages });
});
router.post("/", (req, res) => {
    let message = {
        user: req.body.username,
        text: req.body.comment,
        added: new Date(),
    }
    messages.push(message);
    res.redirect("/");
});

module.exports = router;