const { Pool } = require("pg");
const { databaseUrl } = require("../config/env");

console.log('🗄️  Database URL:', databaseUrl.substring(0, 60) + '...');

const pool = new Pool({
  connectionString: databaseUrl,
  ssl: {
    rejectUnauthorized: false,
    checkServerIdentity: () => undefined
  },
  connectionTimeoutMillis: 15000,
  queryTimeoutMillis: 15000,
  idleTimeoutMillis: 30000,
  max: 5
});

// Handle connection errors
pool.on('error', (err) => {
  console.error('❌ Unexpected error on idle client:', err);
});

pool.on('connect', () => {
  console.log('✅ Successfully connected to PostgreSQL');
});

module.exports = {
  query: (text, params = []) => {
    return pool.query(text, params).catch(err => {
      console.error('⚠️  Query error:', err.message);
      // Return empty result instead of throwing
      return { rows: [], rowCount: 0 };
    });
  },
  pool // Export pool for debugging
};
