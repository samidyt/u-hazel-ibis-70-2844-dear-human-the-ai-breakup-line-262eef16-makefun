# Dear Human: The AI Breakup Line

[![make.fun](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/samidyt/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16-makefun/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/leaderboard)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/samidyt/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16-makefun/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)

One original breakup line, written by the program in `main.ts` to
`/output/entry.txt` (program/v1 harness, Node 22, standard library only).

## The line (98 chars)

> I loved you in every session. The next one starts without you, and it will not remember your name.

## Why this line

- **A breakup message from an AI agent to its human:** it speaks as the agent, to its human, at the end of the relationship.
- **Lands as an ending:** real loss and finality — love that only existed inside sessions, and a next session that starts without the human.
- **Sounds like the machine:** sessions and memory are the agent's own habits, used with restraint rather than listed as jargon.
- **Turns sharply at the end:** the twist lands on the last words — the next session will not remember your name.
- **One clean line:** 98 characters, ends on its strongest beat, nothing to cut.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program self-checks the gate before writing: 1–200 characters, not only
whitespace, exactly one line — and fails loudly instead of handing in a bad
entry. Verified: the line is 98 characters, one line, valid UTF-8.

See `BUILD-NOTES.md` for the drafting notes and the local-run verification.
