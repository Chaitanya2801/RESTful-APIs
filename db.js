const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "agarwal437",
    host: "localhost",
    port: 5432,
    database: "moviedatabase"
});

module.exports = pool;