# Onboarding Functional Parity Contract

The September 25 onboarding screenshots are the visual target for composition, typography, imagery, pacing, CTA placement, and emotional tone. They are not the complete product contract by themselves.

The master Alignment spec remains authoritative for behavior, state, XP, StoreKit, privacy, accessibility, persistence, and route semantics.

## Required Flow

1. Mission opener
   - Visual target: `onboarding-01-mission.png`
   - Primary action: `Begin`
   - Behavior: advances into the Scripture-before-advice teaching step.

2. Scripture-before-advice teaching
   - Visual target: `onboarding-02-method.png`
   - Primary action: `Try it`
   - Behavior: advances to the situation intake screen before the first practice question.

3. Situation intake
   - Visual target: native editable version of the September 25 situation-input board.
   - Primary action: `Tailor My First Scripture`
   - Behavior: requires a short user-entered situation or editable example before the first practice question. The situation is used to tailor the recommended Scripture/Path context, not to score the user's emotions or personal history.
   - Keyboard contract: text entry must provide an obvious keyboard-dismiss action and keep the primary CTA reachable.

4. Onboarding practice question
   - Visual target: `onboarding-03-question.png`
   - Passage: Proverbs 14:12
   - Prompt: `What should determine whether the belief is true?`
   - Correct answer: `What Scripture establishes`
   - Behavior: the user must select the correct answer before the demo can advance. This is not a generic tap-through slide.

5. First practice completion
   - Visual target: `onboarding-04-completion.png`
   - Receipt: `First Scripture practice complete`, `+25 XP`, `Text Before Assumption · 1 of 3`
   - Behavior: completion represents the one real Onboarding Level 1 evidence event. Production must award verified XP exactly once and persist the completion receipt.

6. Account level-up
   - Visual target: readable Level 2 ceremony with animated XP bar.
   - Behavior: shows verified XP transfer, account level change, unlocked Level 2 practice, and a next-route explanation.

7. Purpose selection
   - Behavior source: master onboarding profile contract.
   - Behavior: records the user's first focus so the recommended Path has a visible reason.

8. Recommended Path
   - Behavior source: master spec O10.
   - Must show a validated recommended Path and the next learning outcome.

9. Paywall
   - Behavior source: master spec O11 and StoreKit rules.
   - Must use StoreKit-backed product labels/prices in production.
   - Restore, Terms, and Privacy must remain available.

10. Activated Home
   - Behavior source: master spec Activated Home and Home hierarchy sections.
   - Must land on Home after activation, not directly into a Case or Practice.
   - Home must reflect the verified onboarding XP and selected/recommended Path state.

## Current Implementation Evidence

- 2026-10-03: React/Figma Make preview route updated to include the situation-intake screen before the first question.
- 2026-10-03: Local build passes with the bundled Codex Node runtime.
- 2026-10-03: Local settled screenshots captured at `.qa/onboarding_playable_2026-10-03_v2/`.
- 2026-10-03: Live Figma core route patched:
  - `PROTO-CORE-01 — Mission / Begin` now routes to `PROTO-CORE-01B — Method / Scripture Before Advice`.
  - `PROTO-CORE-01B — Method / Scripture Before Advice` routes to `PROTO-CORE-02 — Situation Intake / Tailor Scripture`.
  - Core prototype CTA labels were centered and engineering destination labels hidden so the preview reads like an app instead of a route map.
- 2026-10-03: Live Figma prototype playback now starts on onboarding. Flow 1 node `38:667` is `PROTO-ONBOARDING-START — Mission / Begin`; the previous Home content from that node is retained as `ARCHIVE — Home frame before onboarding start fix`.

## Implementation Notes

- The current React/Figma Make prototype uses native layout for the onboarding route and must remain directly playable from mission through situation intake, practice, completion, level-up, recommended Path, paywall, and activated Home.
- Extracted raster assets are limited to photographic/illustrative ingredients under `src/assets/alignment/onboarding-native/`.
- Full-screen screenshot rasters are not retained in the active source tree. Reference boards live outside the implementation repo; active screens must be native UI composed from clean scenic assets under `src/assets/alignment/onboarding-native/`.
- Production SwiftUI must rebuild these screens with editable text, real controls, accessible labels, dynamic type behavior, and state-driven progress.
- Do not hardcode Bible edition labels in production; use the user's selected/current Bible edition.
- Do not hardcode prices in production; use StoreKit product metadata.
- Do not mark onboarding parity complete until a fresh-user screen recording proves: onboarding demo -> completion receipt -> recommended Path -> paywall -> entitlement -> activated Home.

## Extracted Native Assets

- `mission-landscape.png`: mission opener background photography.
- `method-bible-room.png`: Scripture-before-advice background photography.
- `question-landscape.png`: Proverbs 14 question landscape strip.
- `completion-landscape.png`: completion hero background.

The visible text, buttons, answer rows, progress dots, medallion, XP receipt, and navigation actions are native UI, not baked into those assets.

## Clean Asset Rule

The active onboarding artwork files must not contain UI chrome, status bars, headings, CTA labels, or ghosted screenshot text. Scenic background artwork remains high-resolution responsive raster imagery so it preserves the photographic September 25 look across device sizes. Icons, progress marks, medallions, dividers, buttons, typography, and controls must be native vector/UI layers so they scale cleanly, remain accessible, and can be edited in Figma or production SwiftUI.
