const { Pool } = require("pg");
const { databaseUrl } = require("../config/env");

console.log('Initializing database connection pool...');
console.log('DB Host:', databaseUrl.substring(0, 60) + '...');

const pool = new Pool({
  connectionString: databaseUrl,
  ssl: {
    rejectUnauthorized: false,
    checkServerIdentity: () => undefined
  },
  connectionTimeoutMillis: 8000,
  idleTimeoutMillis: 30000,
  max: 5,
  statement_timeout: 5000
});

// Log connection errors
pool.on('error', (err) => {
  console.error('Unexpected error on idle client:', err);
});

pool.on('connect', () => {
  console.log('✅ Database pool connected');
});

module.exports = {
  query: (text, params = []) => {
    console.log(`Executing query: ${text.substring(0, 50)}...`);
    return pool.query(text, params).catch(err => {
      console.error('Query error:', err.message);
      throw err;
    });
  }
};
