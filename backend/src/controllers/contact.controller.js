const { query } = require("../services/db");
const { validateContactPayload } = require("../models/contact.model");

async function listContacts(_req, res, next) {
  try {
    const { rows } = await query(
      `
      SELECT id, parent_name, phone, grade_level, message, created_at
      FROM contacts
      ORDER BY created_at DESC
      `
    );
    const items = rows.map((row) => ({
      id: row.id,
      parentName: row.parent_name,
      phone: row.phone,
      gradeLevel: row.grade_level,
      message: row.message,
      createdAt: row.created_at
    }));
    res.json({ count: items.length, items });
  } catch (error) {
    next(error);
  }
}

async function createContact(req, res, next) {
  try {
    const errors = validateContactPayload(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ message: "Validation failed", errors });
    }

    const id = Date.now().toString();
    const now = new Date().toISOString();
    const insertText = `
      INSERT INTO contacts (id, parent_name, phone, grade_level, message, created_at)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id, parent_name, phone, grade_level, message, created_at
    `;
    const values = [
      id,
      String(req.body.parentName).trim(),
      String(req.body.phone).trim(),
      String(req.body.gradeLevel).trim(),
      String(req.body.message || "").trim(),
      now
    ];
    const { rows } = await query(insertText, values);
    const created = rows[0];

    return res.status(201).json({
      message: "Contact request submitted successfully.",
      item: {
        id: created.id,
        parentName: created.parent_name,
        phone: created.phone,
        gradeLevel: created.grade_level,
        message: created.message,
        createdAt: created.created_at
      }
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listContacts,
  createContact
};
