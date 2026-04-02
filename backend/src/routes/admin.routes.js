const express = require("express");
const { listUsers, removeUser } = require("../controllers/admin.controller");
const { authenticateAdminSession } = require("../middleware/auth");

const router = express.Router();

// Apply admin authentication to all admin routes
router.use(authenticateAdminSession);

router.get("/users", listUsers);
router.delete("/users/:id", removeUser);

module.exports = router;
