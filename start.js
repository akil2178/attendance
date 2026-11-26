// Start Laudea server + web page on port 5000 (or PORT)
const path = require("path"), fs = require("fs");
const dir = path.join(__dirname, "server");
process.env.LAUDEA_SERVER_DIR = dir;
process.env.LAUDEA_DATA_DIR = process.env.LAUDEA_DATA_DIR || path.join(__dirname, "data");
fs.mkdirSync(process.env.LAUDEA_DATA_DIR, { recursive: true });
const s = path.join(process.env.LAUDEA_DATA_DIR, "settings.json");
if (!fs.existsSync(s)) fs.copyFileSync(path.join(dir, "default-settings.json"), s);
process.env.PORT = process.env.PORT || "5000";
require("./server/server.cjs");
