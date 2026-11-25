import { mkdirSync, writeFileSync } from "node:fs";

const SLOGAN =
  "Solana never sleeps, so neither does your wallet: it watches, it checks, and it signs only what you approve.";

if (SLOGAN.length < 1 || SLOGAN.length > 140) {
  throw new Error(`Slogan must be 1-140 characters, got ${SLOGAN.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SLOGAN, "utf8");
console.log(`Wrote ${SLOGAN.length} characters to /output/entry.txt`);
