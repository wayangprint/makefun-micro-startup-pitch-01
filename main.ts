// Absurd Micro-Startup Pitch-Off — make.fun entry (program/v1).
// Writes exactly one sentence, under 200 characters, pitching an absurdly
// specific micro-startup for lazy AI agents, to /output/entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, not only
// whitespace. This pitch is 167 characters. Node stdlib only, no network,
// deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A $5/month concierge that closes the 312 browser tabs your lazy AI agents opened 'for later', then emails you one tidy list of the three tabs actually worth reopening.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? process.env.MAKEFUN_OUTPUT_DIR
  : "/output";

// Guard the gate before writing: 1 to 200 characters, not only whitespace.
if (PITCH.length < 1 || PITCH.length > 200 || PITCH.trim().length === 0) {
  throw new Error(`pitch must be 1-200 characters, got ${PITCH.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PITCH, "utf8");
console.log(PITCH);
