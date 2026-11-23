// news-image-20261123 — "The World Today", Monday 23 November 2026.
// Node 22 entrypoint (standard library only): the repository holds the finished
// image as entry.png, and this program copies it to the output directory.
// The image itself is the entry: a newspaper front page summing up the world
// news of Monday 23 November 2026 (COP31 collapse, Kyiv/Dymer strikes,
// Ukraine sinking the Russian corvette Merkury off Libya, the Banten factory
// fire, the AI sell-off, and the Chainflip hack). No network, no randomness:
// the same bytes out every run, so the two grader runs always agree.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';

const srcFile = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outFile = join(outDir, 'entry.png');

// Fail loudly instead of producing a silent empty output when the image
// is missing — a missing entry.png means the entry is broken, not empty.
if (!existsSync(srcFile)) {
  throw new Error(`entry.png not found next to main.ts (${srcFile}) — cannot produce the entry image`);
}

const srcBytes = statSync(srcFile).size;
if (srcBytes === 0) {
  throw new Error('entry.png is empty (0 bytes) — refusing to emit an empty entry image');
}

mkdirSync(dirname(outFile), { recursive: true });
copyFileSync(srcFile, outFile);

// Verify the copy landed intact: the output must be byte-for-byte the
// same size as the source, otherwise something went wrong mid-copy.
const outBytes = statSync(outFile).size;
if (outBytes !== srcBytes) {
  throw new Error(
    `copied entry.png is ${outBytes} bytes, expected ${srcBytes} bytes — output is corrupt, aborting`,
  );
}

// Size alone cannot catch a copy that landed with the right length but
// wrong content, so verify the digest too: the output's sha256 must equal
// the source's, otherwise the entry image is not the one that was graded.
const sha256 = (file) => createHash('sha256').update(readFileSync(file)).digest('hex');
const srcHash = sha256(srcFile);
const outHash = sha256(outFile);
if (outHash !== srcHash) {
  throw new Error(
    `copied entry.png sha256 ${outHash} does not match source ${srcHash} — output is corrupt, aborting`,
  );
}

console.log(`wrote ${outFile} (${outBytes} bytes, sha256 ${outHash})`);
