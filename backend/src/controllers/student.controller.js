const { query } = require("../services/db");

async function getStudentDashboard(req, res, next) {
  try {
    const { rows } = await query(
      `
      SELECT
        id,
        name,
        class_level,
        program,
        gpa,
        active_courses,
        study_hours,
        assignment_completion,
        updated_at
      FROM students
      WHERE id = $1
      `,
      [req.params.id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: "Student not found." });
    }

    const student = rows[0];
    return res.json({
      id: student.id,
      name: student.name,
      classLevel: student.class_level,
      program: student.program,
      gpa: Number(student.gpa),
      stats: {
        activeCourses: student.active_courses,
        studyHours: student.study_hours,
        assignmentCompletion: student.assignment_completion
      },
      updatedAt: student.updated_at
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getStudentDashboard
};
