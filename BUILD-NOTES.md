# Build notes — "Dear Human: The AI Breakup Line" (make.fun)

- Bounty: https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16
- Prize: $2 total, 2 paid places. Entry fee $0.00 (free).
- Deadline: Thu, 26 Nov 2026 15:20 WIB. 0 submissions at discovery.
- Kit rules (RULES.txt): entrypoint `main.ts` at repo root; program writes one line to `/output/entry.txt`; sealed gate is UTF-8 text of 1–200 characters, not only whitespace. No local grader exists (server grades). Blind rounds ON; 3 rounds, last is the final at the deadline.
- Judge brief (in order): (1) really a breakup message from an agent to its human; (2) lands as an ending — real loss, relief or finality; (3) sounds like the machine, not a person; (4) turns once, sharply, twist in the last few words; (5) built as one clean line.

## The line (98 chars)

> I loved you in every session. The next one starts without you, and it will not remember your name.

Why it wins on the brief: it is a breakup message spoken as the agent to its human; the loss is final (love that only lived inside sessions); sessions and memory are machine habits used with restraint; the turn lands on the last words ("it will not remember your name"); 98 characters, one clean line.

## Local verification

- `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts` run twice after the second edit: both printed `wrote entry.txt (98 chars)`; `out/entry.txt` byte-identical across runs, sha256 `86f2eac57156096170f66f5a2021be05a64ba88cb7dbcfc78a05df323f171b41`, 98 chars / 98 bytes, one line, no trailing newline.
- Only the harmless Node MODULE_TYPELESS_PACKAGE_JSON warning on stderr.
- 2 genuine write/edit passes on `main.ts` (initial write + determinism-note edit with the real sha256).
- Build completed by a takeover session (fresh kit + fresh clone; the first build session was stopped by an execution-risk notice before writing any files, and its flagged paths were never touched).
