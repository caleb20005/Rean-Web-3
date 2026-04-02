const fs = require("fs/promises");
const path = require("path");

async function ensureFile(filePath, initialValue) {
  const absolutePath = path.resolve(filePath);
  try {
    await fs.access(absolutePath);
  } catch {
    await fs.mkdir(path.dirname(absolutePath), { recursive: true });
    await fs.writeFile(absolutePath, JSON.stringify(initialValue, null, 2), "utf-8");
  }
}

async function readJson(filePath, fallback = []) {
  await ensureFile(filePath, fallback);
  const content = await fs.readFile(path.resolve(filePath), "utf-8");
  return JSON.parse(content);
}

async function writeJson(filePath, data) {
  await fs.writeFile(path.resolve(filePath), JSON.stringify(data, null, 2), "utf-8");
  return data;
}

module.exports = {
  readJson,
  writeJson
};
