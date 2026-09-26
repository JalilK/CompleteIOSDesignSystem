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
   - Behavior: starts a fixed, editorially approved onboarding practice demonstration.

3. Onboarding practice question
   - Visual target: `onboarding-03-question.png`
   - Passage: Proverbs 14:12
   - Prompt: `What should determine whether the belief is true?`
   - Correct answer: `What Scripture establishes`
   - Behavior: the user must select the correct answer before the demo can advance. This is not a generic tap-through slide.

4. First practice completion
   - Visual target: `onboarding-04-completion.png`
   - Receipt: `First Scripture practice complete`, `+25 XP`, `Text Before Assumption · 1 of 3`
   - Behavior: completion represents the one real Onboarding Level 1 evidence event. Production must award verified XP exactly once and persist the completion receipt.

5. Recommended Path
   - Behavior source: master spec O10.
   - Must show a validated recommended Path and the next learning outcome.

6. Paywall
   - Behavior source: master spec O11 and StoreKit rules.
   - Must use StoreKit-backed product labels/prices in production.
   - Restore, Terms, and Privacy must remain available.

7. Activated Home
   - Behavior source: master spec Activated Home and Home hierarchy sections.
   - Must land on Home after activation, not directly into a Case or Practice.
   - Home must reflect the verified onboarding XP and selected/recommended Path state.

## Implementation Notes

- The current React/Figma Make prototype uses native layout for the first four onboarding screens.
- Extracted raster assets are limited to photographic/illustrative ingredients under `src/assets/alignment/onboarding-native/`.
- Full-screen screenshot rasters are retained only as visual references under `src/assets/alignment/onboarding-reference/`; they must not be used as active screen implementations.
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
