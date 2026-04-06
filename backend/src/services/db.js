const { Pool } = require("pg");
const { databaseUrl } = require("../config/env");

console.log('DB URL:', databaseUrl.substring(0, 50) + '...');
console.log('SSL config: permissive mode');

const pool = new Pool({
  connectionString: databaseUrl,
  ssl: {
    rejectUnauthorized: false,
    checkServerIdentity: () => undefined
  },
  connectionTimeoutMillis: 10000,
  query_timeout: 10000
});

module.exports = {
  query: (text, params = []) => pool.query(text, params)
};
