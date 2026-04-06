const app = require("./app");
const { port, nodeEnv } = require("./config/env");
const ensureSchema = require("./config/schema");

console.log(`Attempting to start server on port: ${port}`);

ensureSchema()
  .then(() => {
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`✅ Backend running on http://localhost:${port} (${nodeEnv})`);
    });
  })
  .catch((error) => {
    console.warn("⚠️ Database schema preparation had issues:", error.message);
    // Start server anyway for testing purposes
    app.listen(port, () => {
      console.log(`⚠️ Backend running in degraded mode on http://localhost:${port} (${nodeEnv})`);
      console.log("Database connectivity issues detected - API may return errors");
    });
  });
