const dotenv = require("dotenv");
const path = require("path");

// Load .env from the backend directory
dotenv.config({ path: path.join(__dirname, '../../.env') });

module.exports = {
  port: Number(process.env.PORT) || 5001,
  nodeEnv: process.env.NODE_ENV || "development",
  corsOrigin: process.env.CORS_ORIGIN || "*",
  databaseUrl: process.env.DATABASE_URL || "postgres://postgres:caleb123@localhost:5000/clownrean"
};
