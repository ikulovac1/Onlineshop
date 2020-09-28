

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "admin",
    database: "auction",
    host: "localhost",
    port: 5433
});

module.exports = pool;