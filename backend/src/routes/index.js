const express = require("express");
const contactRoutes = require("./contact.routes");
const studentRoutes = require("./student.routes");
const authRoutes = require("./auth.routes");
const adminRoutes = require("./admin.routes");

const router = express.Router();

router.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "rean-backend",
    time: new Date().toISOString()
  });
});

router.use("/contacts", contactRoutes);
router.use("/students", studentRoutes);
router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
