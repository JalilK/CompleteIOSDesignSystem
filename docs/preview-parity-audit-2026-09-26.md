# Preview Parity Audit - 2026-09-26

Authoritative product spec: `/Users/jalilkennedy/Desktop/Alignment_Product_Spec_V21.md`
Authoritative ticket backlog: `/Users/jalilkennedy/Desktop/bible_study_system_v6_8/docs/alignment_current_parity_gap_tickets_2026-09-25.md`
Authoritative visual target: September 25 concept boards.

## Current Rule

The preview must use the screenshots as visual references, but screen behavior must follow the master spec and active parity tickets. Full-screen screenshots must remain reference assets only. Active screens need native text, controls, route state, and accessible elements.

## Verified In This Pass

- Onboarding first four visual states are native UI, not full-screen screenshots.
- Onboarding question exposes native answer controls and keeps `Check Answer` disabled until the correct answer is selected.
- The acquisition route no longer shows the removed “starting area” selector after the onboarding receipt.
- Onboarding receipt routes to Recommended Path, then Paywall, then Activated Home.
- Activated Home and normal Home now share the same fresh-user progress baseline: `Level 1 · 25 XP`.
- Direct preview routes now exist for individual screen QA via `?screen=<screen-id>`.
- Prayer doorway, Pray Scripture, Guided Prayer, Meditation Player, Sound Controls, and Privacy Settings are native routeable screens.
- Home prayer card now uses the same Proverbs 3:5-6 journey as the prayer flow.

## Manual QA Evidence

Current evidence bundle: `/Users/jalilkennedy/Desktop/preview-qa-2026-09-26/`

- Direct route screenshots and accessibility trees were captured for Home, Onboarding, Library, Progress, Profile, Devotional, Prayer, Meditation, Sound, Privacy, Alignment, Practice, and Context Study.
- Onboarding flow screenshots were captured in `/Users/jalilkennedy/Desktop/preview-qa-2026-09-26/flow-onboarding/`:
  - `01-mission.jpg`
  - `02-method.jpg`
  - `03-question-disabled.jpg`
  - `04-question-selected.jpg`
  - `05-completion.jpg`
  - `06-recommended.jpg`
  - `07-paywall.jpg`
  - `08-after-trial.jpg`

## QA Verdict

The preview is routeable and partially native, but it is not ready to mark any visual parity ticket complete. The remaining failures are product-level and visual-level gaps, not polish-only issues.

Most important blockers:

- Several active screens still resolve to incorrect remote Unsplash imagery. Home, Paywall, Alignment Report, Practice Completion, Devotional, and Library do not consistently use the September 25 ancient-road / Scripture / still-waters art direction. The Paywall evidence is especially clear: accessibility text says `Ancient city at golden hour`, but the visible hero image is sneakers.
- There are multiple Home implementations or states. `?screen=home` and the post-trial Activated Home look and behave differently, so passing one route does not prove Home parity.
- Onboarding is still not spec-complete. The preview demonstrates one onboarding question before `+25 XP`, while the master spec requires fixed Onboarding Level 1 with four multiple-choice questions and completion only after the full level.
- Practice is not spec-complete. The practice intro promises a six-question level, but `?screen=practice-question` exposes `Question 1 of 3`.
- Hardcoded Bible edition strings remain visible across production-like surfaces, including `KJV` and `King James Version`.
- Emoji or fallback symbols remain in multiple nav, profile, achievement, devotional, alignment, and practice surfaces. This blocks the native icons/medallions/typography ticket.
- Several screens still clip important content or controls near the bottom safe area in browser preview evidence, including Onboarding Completion, Guided Prayer, Sound Controls, Privacy Settings, and Practice Completion.
- XP/state is not proven as a single source of truth. Home and Progress show `25 XP`, while the direct Practice Completion route shows a separate `+50 XP · 325 XP total` state without proving that Home/Progress update from the same event.
- StoreKit, offline behavior, persistence, physical-device layout, dynamic type, VoiceOver labels, sensory preferences, privacy deletion confirmation, and history clearing remain unverified.

## Direct Preview Routes

- `/?screen=home`
- `/?screen=library`
- `/?screen=progress`
- `/?screen=profile`
- `/?screen=devotional`
- `/?screen=prayer-mode`
- `/?screen=pray-scripture`
- `/?screen=guided-prayer`
- `/?screen=meditation-player`
- `/?screen=sound-controls`
- `/?screen=privacy-settings`
- `/?screen=alignment-intake`
- `/?screen=alignment-report`
- `/?screen=faithful-action`
- `/?screen=practice-intro`
- `/?screen=practice-question`
- `/?screen=practice-level-complete`

## Remaining Gaps Before Any Ticket Can Be Marked Complete

- `ALIGN-GAP-006A Home`: blocked. Normal Home does not match the September board, uses incorrect imagery, has divergent post-trial Activated Home state, and does not yet prove the full Home hierarchy from the spec.
- `ALIGN-GAP-006B Onboarding`: blocked. Visual states are native, but the flow still represents one question before XP instead of the spec-required four-question Onboarding Level 1. Completion also needs safe-area proof outside browser chrome.
- `ALIGN-GAP-006C Paywall`: blocked. Native and routeable, but imagery is incorrect, prices are static preview labels, StoreKit metadata is not proven, and production unavailable-product handling is not verified.
- `ALIGN-GAP-006D Case`: blocked. Intake/report/action are native, but exact board parity, full case lifecycle states, active privacy controls, and result-to-action state are not proven.
- `ALIGN-GAP-006E Practice`: blocked. Entrance/question/feedback/completion are native, but the preview uses a three-question flow where the spec requires six-question levels. Completion/XP state is not tied back to Home/Progress.
- `ALIGN-GAP-006F Library`: blocked. Native screen exists, but imagery, card composition, saved journey behavior, and continuation state are not screenshot-equivalent.
- `ALIGN-GAP-006G Progress`: blocked. Native screen exists and shares the fresh-user baseline with Home, but achievement medallions, level ring, typography, and row layout are not concept-grade.
- `ALIGN-GAP-006H Devotional`: blocked. Native screen exists, but visual composition, image asset, hardcoded edition text, saved journey/detail behavior, and passive-reading XP boundaries need explicit proof.
- `ALIGN-GAP-006I Prayer/meditation`: blocked. Native route stack exists, but audio behavior, transcript, passive completion, history, and exact screenshot comparison remain unproven.
- `ALIGN-GAP-006J Sound controls`: blocked. Native route exists, but sliders/toggles are not proven bound to stored sensory/audio preferences, and bottom controls are clipped in current evidence.
- `ALIGN-GAP-006K Privacy/settings`: blocked. Native route exists, but deletion/history controls need confirmation states, actual persistence behavior, and safe-area/scroll proof.
- `ALIGN-GAP-006L Icons/medallions/assets/typography`: blocked. Emoji fallbacks, one-off symbols, wrong raster assets, hardcoded colors, and non-final medallions remain visible.
- `ALIGN-GAP-008 Fresh onboarding/paywall`: fresh-user route reaches Home in preview, but production StoreKit and simulator recording remain required.
- `ALIGN-GAP-010 Full app recording`: no full accepted recording has been produced for this preview pass.
- `ALIGN-GAP-011 Physical/accessibility/offline`: remains unverified.

## Screen Notes From The 2026-09-26 Preview Run

- Home: visually fails the target. It uses the wrong hero image, an older hierarchy, and does not match the current Path/current Alignment/today's devotional layout in the September 25 Home board.
- Onboarding: the first four frames are native and close in structure, but the behavior is still a one-question demo. Recommended Path, Paywall, and Activated Home route correctly in preview, but Paywall uses the wrong asset and static pricing.
- Library: route exists and is native, but image art, card layout, spacing, and bottom visibility are not exact.
- Progress: route exists and baseline XP matches Home, but the medallions/ring/icons are not final.
- Devotional: route exists, but image, typography placement, hardcoded Bible edition, and action set do not yet match the board.
- Prayer and Meditation: doorway, pray scripture, guided prayer, player, and sound controls are native, but controls are not proven functional/persistent and some bottom content clips.
- Privacy/Settings: route exists, but is not complete as a real privacy control surface because destructive actions and history clearing are not confirmed or proven.
- Alignment: intake/report/action are native, but visual parity and state behavior remain incomplete. Intake also displays sample text while the CTA is disabled, which can read like a broken filled state.
- Practice: direct question route says `Question 1 of 3`, blocking parity with the six-question spec. Completion screen clips and shows unproven XP totals.

## Verification Evidence From This Pass

- `pnpm build` passed.
- Browser accessibility inspection confirmed native headings, buttons, toggles, and routeable controls for:
  - Home
  - Prayer doorway
  - Sound controls
  - Privacy settings
  - Meditation player
  - Onboarding question and completion routing
