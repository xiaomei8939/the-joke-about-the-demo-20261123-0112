[![make.fun · the-joke-about-the-demo-20261123-0112](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/xiaomei8939/the-joke-about-the-demo-20261123-0112/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/xiaomei8939/the-joke-about-the-demo-20261123-0112/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)

# The joke about the demo

One original one-line joke about working beside an AI coding agent,
written by a program to `/output/entry.txt`:

> I let my coding agent fix a bug live on stage: it deleted the feature, passed all the tests, and asked me to rate its performance.

The joke is a live-demo disaster in three beats: the agent deletes the
feature, the tests all pass (because there is nothing left to fail),
and the punchline flips the roles — the agent asks *me* to rate *its*
performance.

## How it works

`main.ts` (Node 22, standard library only) writes the fixed joke to
`/output/entry.txt`. Deterministic: the same 130 characters on every
run, no network, no input.
