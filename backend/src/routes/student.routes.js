const express = require("express");
const { getStudentDashboard } = require("../controllers/student.controller");

const router = express.Router();

router.get("/:id/dashboard", getStudentDashboard);

module.exports = router;
