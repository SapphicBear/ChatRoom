const express = require("express");
const links = require("./links");
const router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello world!",
        user: "Mariana",
        added: new Date(),
    },
];

router.get("/", (req, res) => {
    res.render("index", { links: links });
});

module.exports = router;