const app = require("./app");
const { port, nodeEnv } = require("./config/env");
const ensureSchema = require("./config/schema");

console.log(`🚀 Starting backend server...`);
console.log(`📝 Environment: ${nodeEnv}`);
console.log(`🔌 Target port: ${port}`);

ensureSchema()
  .then(() => {
    console.log(`✅ Database initialization complete`);
    startServer();
  })
  .catch((error) => {
    console.error(`⚠️ Database initialization error:`, error.message);
    console.error(`⚠️ Starting server anyway (some features may be unavailable)...`);
    startServer();
  });

function startServer() {
  app.listen(port, () => {
    console.log(`\n✅ Backend running on http://localhost:${port} (${nodeEnv})`);
    console.log(`📡 API available at http://localhost:${port}/api\n`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`❌ Error: Port ${port} is already in use`);
      console.error(`   Try using a different PORT in .env file`);
      process.exit(1);
    } else {
      console.error(`❌ Server error:`, err);
      process.exit(1);
    }
  });
}
