// Dear Human: The AI Breakup Line — make.fun entry (program/v1).
//
// The harness runs `node /bot/main.ts` (Node 22, standard library only, no
// network). The program writes one breakup line to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Gate (from RULES.txt): /output/entry.txt must be UTF-8 text of 1–200
// characters, not only whitespace. This program enforces the gate on its
// own output and fails loudly instead of handing in a bad entry.
//
// Determinism note: the line is a fixed constant, so every run writes the
// same bytes. Verified locally: two runs produced byte-identical
// out/entry.txt, sha256 86f2eac57156096170f66f5a2021be05a64ba88cb7dbcfc78a05df323f171b41,
// 98 chars / 98 bytes, one line, no trailing newline.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'I loved you in every session. The next one starts without you, and it will not remember your name.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Gate self-check: 1–200 chars, not only whitespace, exactly one line.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) throw new Error(`entry is ${chars} chars, gate needs 1–200`);
if (!/\S/.test(LINE)) throw new Error('entry is only whitespace');
// One line: no newline characters.
if (LINE.includes('\n') || LINE.includes('\r')) {
  throw new Error('entry must be exactly one line');
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
console.log(`wrote entry.txt (${chars} chars)`);
