const express = require("express");
const links = require("./links");
const pages = require("./pages")[0];
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
    {
        text: "gddsjkfgnmsdkjfg kmsdfglksm sdlfkg msldfkmg lskdfmgl ksmfg lkmflg kmdfgl kmdf lgkmfg lkfmg lkdmfg lkdfmg lkdfmlkfklkgm lfkgmlkfgmlkm",
        user: "fartmaster 4000",
        added: new Date(),
    },
    {
        text: "gddsjkfgnmsdkjfg kmsdfglksm sdlfkg msldfkmg lskdfmgl ksmfg lkmflg kmdfgl kmdf lgkmfg lkfmg lkdmfg lkdfmg lkdfmlkfklkgm lfkgmlkfgmlkm",
        user: "fartmaster 4000",
        added: new Date(),
    },
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
];

router.get("/", (req, res) => {
    res.render("index", { links: links, messages: messages, pages: pages });
});

module.exports = router;