const { query } = require("../services/db");

async function listUsers(_req, res, next) {
  try {
    const { rows } = await query(
      `
      SELECT id, full_name, email, role, grade_level, created_at
      FROM users
      ORDER BY created_at DESC
      LIMIT 50
      `
    );
    res.json(rows);
  } catch (error) {
    next(error);
  }
}

async function removeUser(req, res, next) {
  try {
    const { id } = req.params;
    const { rowCount } = await query("DELETE FROM users WHERE id = $1", [id]);
    if (rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User removed" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listUsers,
  removeUser
};
