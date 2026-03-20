const express = require("express");
const router = express.Router();
const links = require("./links");
const pages = require("./pages")[1];

router.get("/", (req, res) => {
    res.render("new.ejs", { links: links, pages: pages });
});

module.exports = router;