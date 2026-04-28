const pool = require("./pool");
const { format } = require("date-fns");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages;");
    return rows;
}

async function addNewMessage(username, message, date = format(Date.now(), "HH:mm - PPP")) {
    await pool.query("INSERT INTO messages (username, message, date) VALUES ($1, $2, $3)", [username, message, date]);
}

class Message {
    
    async getAllMessages() {
        const { rows } = await pool.query("SELECT * FROM messages;");
        return rows;
    }

    async addMessage(username, message, date = format(Date.now(), "HH:mm - PPP")) {
        await pool.query("INSERT INTO messages (username, message, date) VALUES ($1, $2, $3);", [username, message, date]);
    }

}

module.exports = {
    Message
};