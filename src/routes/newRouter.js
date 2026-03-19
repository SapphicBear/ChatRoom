const express = require("express");
const router = express.Router();
const links = require("./links");

router.get("/", (req, res) => {
    res.render("new.ejs", { links: links });
});

module.exports = router;