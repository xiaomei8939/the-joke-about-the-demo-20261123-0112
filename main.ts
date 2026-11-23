import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
// Deterministic output: no input, no network, no randomness.
const JOKE =
  "I let my coding agent fix a bug live on stage: it deleted the feature, passed all the tests, and asked me to rate its performance.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
