function validateContactPayload(payload) {
  const errors = [];

  if (!payload || typeof payload !== "object") {
    return ["Payload must be an object."];
  }

  if (!payload.parentName || String(payload.parentName).trim().length < 2) {
    errors.push("parentName is required and must be at least 2 characters.");
  }

  if (!payload.phone || String(payload.phone).trim().length < 7) {
    errors.push("phone is required and must be a valid phone number.");
  }

  if (!payload.gradeLevel || String(payload.gradeLevel).trim().length < 2) {
    errors.push("gradeLevel is required.");
  }

  return errors;
}

module.exports = {
  validateContactPayload
};
