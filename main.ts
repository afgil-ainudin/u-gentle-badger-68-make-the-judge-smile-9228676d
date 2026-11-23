// Make the Judge Smile — writes one warm line about a small good thing today.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This morning the warung lady slipped an extra krupuk into my bag and whispered, 'for the road' — I crunched it at a red light, still warm, and for one green light the whole city felt on my side.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
