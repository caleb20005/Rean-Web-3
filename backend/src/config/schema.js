const { query } = require("../services/db");
const studentsSeed = require("../data/students.json");

const ensureSchema = async () => {
  await query(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      role TEXT NOT NULL,
      grade_level TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS students (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      class_level TEXT NOT NULL,
      program TEXT,
      gpa NUMERIC(4,2),
      active_courses INTEGER DEFAULT 0,
      study_hours INTEGER DEFAULT 0,
      assignment_completion INTEGER DEFAULT 0,
      updated_at TIMESTAMPTZ DEFAULT now()
    );
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS contacts (
      id TEXT PRIMARY KEY,
      parent_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      grade_level TEXT NOT NULL,
      message TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);

  const { rows } = await query("SELECT COUNT(*) AS count FROM students");
  const hasStudents = Number(rows[0]?.count || 0) > 0;
  if (!hasStudents && Array.isArray(studentsSeed) && studentsSeed.length > 0) {
    const insertText = `
      INSERT INTO students (
        id, name, class_level, program, gpa,
        active_courses, study_hours, assignment_completion, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      ON CONFLICT (id) DO NOTHING
    `;

    for (const student of studentsSeed) {
      const values = [
        student.id,
        student.name,
        student.classLevel,
        student.program,
        student.gpa,
        student.stats?.activeCourses || 0,
        student.stats?.studyHours || 0,
        student.stats?.assignmentCompletion || 0,
        student.updatedAt || new Date().toISOString()
      ];
      await query(insertText, values);
    }
  }
};

module.exports = ensureSchema;
