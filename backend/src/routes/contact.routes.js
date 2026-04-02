const express = require("express");
const { listContacts, createContact } = require("../controllers/contact.controller");

const router = express.Router();

router.get("/", listContacts);
router.post("/", createContact);

module.exports = router;
