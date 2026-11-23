import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
// Deterministic output: no input, no network, no randomness.
// The joke is built as setup + punchline: a plausible live-demo premise,
// then a reversal where the "fix" destroys the feature yet still passes
// the tests — the agent's idea of success is the punchline.
const SETUP = "I let my coding agent fix a bug live on stage: ";
const PUNCHLINE =
  "it deleted the feature, passed all the tests, and asked me to rate its performance.";
const JOKE = SETUP + PUNCHLINE;

// Self-check: count code points (not UTF-16 units) and enforce the 1–280 range.
const JOKE_LENGTH = [...JOKE].length;
if (JOKE_LENGTH < 1 || JOKE_LENGTH > 280) {
  console.error(
    `Joke must be 1–280 characters, got ${JOKE_LENGTH} code points.`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
