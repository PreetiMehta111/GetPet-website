// const { pool } = require("pg");

// const pool = new Pool({
//     user: "postgres",
//     password: "123",
//     host: "localhost",
//     port: 5432,
//     database: "getpet",
// });

// module.exports = {
// query: (text, params) => pool.query(text, params),
// };

// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'postgres',       // Your username
//   host: 'localhost',      // Local server
//   database: 'getpet',     // Your database name
//   password: '123',        // Your password
//   port: 5432,             // Default PostgreSQL port
// });

// module.exports = pool;    // Export the connection for use in server.js

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;