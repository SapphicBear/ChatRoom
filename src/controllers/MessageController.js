const links = require("./../routes/links");
const db = require("./../../db/queries");
const { body, validationResult, matchedData} = require("express-validator");


const errors = {
    alphaNum: "Must only contain letters and numbers",
    lengthUser: "Must be between 1 and 20 characters long",
    lengthBody: "Must be between 1 and 500 characters long",
};
const validateUser = [
    body("username").trim().escape()
        .isAlphanumeric().withMessage(`username: ${errors.alphaNum}`)
        .isLength({ min: 1, max: 20}).withMessage(`username: ${errors.lengthUser}`),
    body("message").trim().escape()
        .isLength({ min: 1, max: 500 }).withMessage(`message body: ${errors.lengthBody}`),
];

const usersCreatePost = [
    validateUser,
    async (req, res) => {
        const errors = validationResult(req);
        const {username} = matchedData(req);
        const message = req.body.message; 
        if (!errors.isEmpty()) {
            return res.status(400).render("new.ejs", {
                links: links,
                pages: "New",
                errors: errors.array(),
                username: username,
                message: message,
            });
        }
        
        await db.addNewMessage(username, message);
        console.log("Added to database");
        res.redirect("/");
    }
];

async function newMessageGet(req, res) {
    res.render("new", { links: links, pages: "New", username: "", message: ""});
}

async function messagesGet(req, res) {
    const messages = await db.getAllMessages();
    res.render("index", { links: links, pages: "Home", messages: messages })
}

module.exports = {
    newMessageGet,
    usersCreatePost,
    messagesGet
}