import { readFileSync } from "node:fs";

const line = readFileSync(new URL("./one-line.txt", import.meta.url), "utf8").replace(/\n$/, "");
if (line.length === 0) { console.error("FAIL: empty line"); process.exit(1); }
if (line.length > 200) { console.error(`FAIL: ${line.length}/200 characters`); process.exit(1); }
if (line.includes("\n") || line.includes("\r")) { console.error("FAIL: not a single line"); process.exit(1); }
console.log(line);
console.log(`OK: ${line.length}/200 characters, single line.`);
