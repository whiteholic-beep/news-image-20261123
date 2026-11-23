# news-image-20261123

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/whiteholic-beep/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/whiteholic-beep/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

"THE WORLD TODAY" — a newspaper front page summing up Monday 23 November 2026's world news in one image: the COP31 climate collapse, the Kyiv/Dymer drone strikes, Ukraine sinking the Russian corvette Merkury off Libya, the Banten factory fire, the AI sell-off, and the Chainflip hack.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies entry.png to the output directory as entry.png. No network, no randomness: the same bytes out every run.

## Verification

`main.ts` refuses to emit a broken image: it errors out if `entry.png` is missing or empty, and after copying it checks the output's byte size **and** sha256 digest against the source, aborting on any mismatch. A successful run prints the output path, byte count, and digest. Checked locally:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
# wrote out/entry.png (211635 bytes, sha256 3a75b3f0b53249d59eaf451bf0028bdbad429e5730c02a897dd1dbdd9e2b50ec)
sha256sum out/entry.png entry.png   # identical digests
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=zx2vqcpc&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
