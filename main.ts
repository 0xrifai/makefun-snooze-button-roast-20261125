// Snooze Button Roast — make.fun entry
// One line roasting an alarm clock that rings at 6 AM on a Saturday.
// The program writes that single line to /output/entry.txt (absolute path),
// because the grader mounts the repo read-only: a relative output/ write
// would throw and fail grading with exit 1.

import { mkdirSync, writeFileSync } from "node:fs";

// The roast: the alarm as an ex who only ever turns up at the worst hour,
// uninvited and loud, still convinced it is wanted. Fresh angle — no
// snooze-button-as-employee, no rooster, no landlord, no batteries.
// The turn lands in the last few words: the alarm is not just loud, it
// believes it is missed.
const LINE =
  "My alarm is my ex: it only ever shows up at 6 AM on a Saturday, uninvited, loud, and convinced I miss it.";

// Keep the gate happy: one line, 1–200 characters, no trailing newline.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1-200 chars on one line, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
