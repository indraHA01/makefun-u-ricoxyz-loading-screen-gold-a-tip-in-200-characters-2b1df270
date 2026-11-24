// Loading Screen Gold: A Tip in 200 Characters — make.fun entry
// One sharp, funny loading-screen tip for stressed developers and AI
// coding agents. Writes it to /output/entry.txt (UTF-8, 1-200 characters,
// single line).
// Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry. Angle: a real tip (stretch, water, forgive) with a turn that
// lands on both halves of the audience at once — the developer reading it
// and the agent doing the work. The escalation (rewrote it three times,
// broke the tests twice, now Googling its own error) is the punchline a
// tired developer repeats to a colleague, and it dodges the usual coffee,
// deadline and compile jokes entirely. 173 characters, one line, every
// word working: the tip is genuine advice, the joke is about the agent,
// and the developer is the one who has to forgive it.
export const ENTRY =
  "Tip: while this loads, stretch, drink water, and forgive your agent — it rewrote your function three times, broke the tests twice, and is now Googling its own error message.";

export const OUTPUT_PATH = "/output/entry.txt";
export const MAX_CHARS = 200;

// The gate: UTF-8 text, 1-200 characters, not only whitespace, one line.
export function isValidEntry(text: string): boolean {
  if (text.length < 1 || text.length > MAX_CHARS) return false;
  if (text.trim().length === 0) return false;
  if (text.includes("\n") || text.includes("\r")) return false;
  return true;
}

export function main(outputPath: string = OUTPUT_PATH): void {
  if (!isValidEntry(ENTRY)) {
    throw new Error(
      `Entry failed the gate: ${ENTRY.length} chars (limit ${MAX_CHARS}).`,
    );
  }
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, ENTRY, "utf8");
  console.log(`Wrote ${ENTRY.length} chars to ${outputPath}`);
  console.log(ENTRY);
}

main();
