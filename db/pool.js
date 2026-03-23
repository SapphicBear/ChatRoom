require("@dotenvx/dotenvx").config(); 

const { Pool } = require("pg");

module.exports = new Pool({
    connectionString: process.env.PRIVATE_CONNECTION_STRING,
});