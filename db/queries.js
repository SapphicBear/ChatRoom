const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages;");
    return rows;
}

async function addNewMessage(username, message, date = new Date()) {
    await pool.query("INSERT INTO messages (username, message, date) VALUES ($1, $2, $3)", [username, message, date]);
}

module.exports = {
    getAllMessages,
    addNewMessage
};