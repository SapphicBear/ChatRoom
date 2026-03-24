#! /usr/bin/env node
const { argv } = require("node:process");
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR (255),
    message VARCHAR (255),
    date VARCHAR (255)
);

INSERT INTO messages (username, message, date)
VALUES
('Tay', 'Hope everyone is doing good!', '${new Date()}');
`;

async function main(arg) {
    console.log("Seeding Database");
    const client = new Client({
        connectionString: arg,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("Done");
}

main(argv[2]);