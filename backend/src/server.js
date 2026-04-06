const app = require("./app");
const { port, nodeEnv } = require("./config/env");
const ensureSchema = require("./config/schema");

console.log(`Attempting to start server on port: ${port}`);

ensureSchema()
  .then(() => {
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Backend running on http://localhost:${port} (${nodeEnv})`);
    });
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error("Failed to prepare database:", error);
    process.exit(1);
  });
