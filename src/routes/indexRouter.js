const express = require(express);
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


module.exports = router;