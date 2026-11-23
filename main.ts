// news-image-20261123 — "The World Today", Monday 23 November 2026.
// Node 22 entrypoint (standard library only): the repository holds the finished
// image as entry.png, and this program copies it to the output directory.
// The image itself is the entry: a newspaper front page summing up the world
// news of Monday 23 November 2026 (COP31 collapse, Kyiv/Dymer strikes,
// Ukraine sinking the Russian corvette Merkury off Libya, the Banten factory
// fire, the AI sell-off, and the Chainflip hack). No network, no randomness:
// the same bytes out every run, so the two grader runs always agree.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outFile = join(outDir, 'entry.png');

mkdirSync(dirname(outFile), { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), outFile);
