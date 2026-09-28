# Animation Preview QA

Status: Active parity gate
Date: 2026-09-28

## Goal

The Figma Make preview must feel like the app: users need to see motion, screen transitions, receipts, and XP changes in the browser preview before the same behavior is implemented or validated natively.

## Required Preview Routes

- `?screen=motion-source-truth`
- `?screen=practice-question`
- `?screen=practice-level-complete`
- `?screen=path-practice-handoff`
- `?screen=path-session-complete`
- `?screen=prototype-graph`

## QA Results

- Motion source route shows all 20 semantic events with visible Start -> Impact -> Resolve animation samples.
- Practice question route supports answer selection animation, enabled CTA state, Scripture sheet access, and feedback transition.
- Practice feedback uses native text over separated content, animated hero reveal, animated correct/reconsider icon, and delayed teaching/boundary cards.
- Practice completion shows an animated medallion, receipt-row reveal, passage mastery progress, and verified XP bar animation.
- Path practice handoff no longer places low-contrast text directly over the image. The route uses a readable native card in the image area and keeps the CTA visible.
- Path session complete shows animated receipt rows, visible XP progress, and both continuation controls.

## Motion Requirements

- XP only animates after a verified receipt is visible.
- Level-crossing XP bars must animate through the old level, reset, then fill the new level.
- Medallions rise or pulse only for meaningful completed states.
- Prayer completion uses quiet settle motion and does not look like XP reward.
- Incorrect answer feedback uses calm correction motion, not punishment.
- Reduced Motion must leave the final state readable with no essential information hidden behind animation.

## Re-run Checklist

1. Build with the bundled Node 22 runtime.
2. Open each required preview route.
3. Trigger at least one practice answer and verify feedback is animated.
4. Verify every visible CTA is fully inside the frame and reachable.
5. Verify every text-over-image area is either on a readable native card or has enough overlay contrast.
6. Verify the XP bar animates on `practice-level-complete` and `path-session-complete`.
