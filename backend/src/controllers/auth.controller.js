const { query } = require("../services/db");

async function signup(req, res, next) {
  try {
    const { fullName, email, password, role, gradeLevel } = req.body;

    if (!fullName || !email || !password || !role) {
      return res.status(400).json({ message: "Full name, email, password, and role are required." });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const existing = await query("SELECT id FROM users WHERE email = $1", [normalizedEmail]);
    if (existing.rows.length > 0) {
      return res.status(409).json({ message: "An account with that email already exists." });
    }

    const id = `U${Date.now()}`;
    await query(
      `
      INSERT INTO users (id, full_name, email, password, role, grade_level)
      VALUES ($1, $2, $3, $4, $5, $6)
      `,
      [id, fullName.trim(), normalizedEmail, password, role, gradeLevel || null]
    );

    return res.status(201).json({
      message: "Account created successfully.",
      user: { id, fullName, email: normalizedEmail, role, gradeLevel }
    });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { identifier, password, role } = req.body;
    if (!identifier || !password) {
      return res.status(400).json({ message: "Identifier and password are required." });
    }

    const normalizedIdentifier = String(identifier).trim().toLowerCase();
    const normalizedRole = String(role || "student").trim();
    const { rows } = await query(
      `
      SELECT id, full_name, email, role, grade_level, password
      FROM users
      WHERE (email = $1 OR id = $1) AND role = $2
      `,
      [normalizedIdentifier, normalizedRole]
    );

    if (rows.length === 0 || rows[0].password !== password) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const user = rows[0];
    return res.json({
      message: "Login successful.",
      user: {
        id: user.id,
        fullName: user.full_name,
        email: user.email,
        role: user.role,
        gradeLevel: user.grade_level
      }
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signup,
  login
};
