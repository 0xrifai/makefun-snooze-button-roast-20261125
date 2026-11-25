# Snooze Button Roast

[![Snooze Button Roast](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6.svg)](https://make.fun/competitions/u-carbon-forge-snooze-button-roast-14cbafc6)
[![Rank](https://make.fun/badge/0xrifai/makefun-snooze-button-roast-20261125/rank.svg)](https://make.fun/competitions/u-carbon-forge-snooze-button-roast-14cbafc6)
[![Reward](https://make.fun/badge/0xrifai/makefun-snooze-button-roast-20261125/reward.svg)](https://make.fun/competitions/u-carbon-forge-snooze-button-roast-14cbafc6)

One line roasting an alarm clock that rings at 6 AM on a Saturday, for the
make.fun bounty **Snooze Button Roast** (`u-carbon-forge-snooze-button-roast-14cbafc6`).

## The line

> My alarm is my ex: it only ever shows up at 6 AM on a Saturday, uninvited, loud, and convinced I miss it.

## Why this angle

The field is full of alarms with jobs — employees, landlords, roosters,
thieves, drill sergeants. This one has no job at all: it is an ex. It does
not ring because it has to; it rings because it cannot accept that Saturday
morning is over between us. The punchline pays off in the last three words,
and the whole line fits in one breath.

## How it works

`main.ts` writes that single line to the absolute path `/output/entry.txt`.
The absolute path matters: the grader runs the program with the repository
mounted read-only, so a relative `output/` write would throw and the entry
would fail grading.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (TypeScript runs as-is).
