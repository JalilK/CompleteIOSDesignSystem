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

- `ALIGN-GAP-006A Home`: normal Home still needs exact native composition against the September board, including the correct activated-home hierarchy, image crop, card spacing, and first-viewport balance.
- `ALIGN-GAP-006B Onboarding`: visual states are native, but the spec-required four-question Onboarding Level 1 is not fully represented yet. The current preview uses one question to match the attached onboarding board.
- `ALIGN-GAP-006C Paywall`: native and routeable, but prices are static preview labels, not StoreKit-backed metadata.
- `ALIGN-GAP-006D Case`: intake/report/action are native, but exact board parity and full case lifecycle states are not fully proven.
- `ALIGN-GAP-006E Practice`: entrance/question/feedback/completion are native, but the preview still uses a three-question demo instead of proving the full six-question renderer across every source.
- `ALIGN-GAP-006F Library`: native screen exists, but saved journey, continuation, recent rows, and screenshot-level composition need comparison evidence.
- `ALIGN-GAP-006G Progress`: native screen exists, but achievement medallions and level ring need closer asset/typography parity.
- `ALIGN-GAP-006H Devotional`: native screen exists, but saved journey/detail composition and passive-reading XP boundaries need explicit QA evidence.
- `ALIGN-GAP-006I Prayer/meditation`: native route stack now exists, but screenshot comparison and non-XP passive-completion proof remain.
- `ALIGN-GAP-006J Sound controls`: native route exists, but sliders are preview controls and need production sensory preference binding.
- `ALIGN-GAP-006K Privacy/settings`: native route exists, but deletion/history actions need confirmation states and persistence behavior.
- `ALIGN-GAP-006L Icons/medallions/assets/typography`: still needs a shared native icon/medallion system instead of emoji fallbacks and one-off SVGs.
- `ALIGN-GAP-008 Fresh onboarding/paywall`: fresh-user route reaches Home in preview, but production StoreKit and simulator recording remain required.
- `ALIGN-GAP-010 Full app recording`: no full accepted recording has been produced for this preview pass.
- `ALIGN-GAP-011 Physical/accessibility/offline`: remains unverified.

## Verification Evidence From This Pass

- `pnpm build` passed.
- Browser accessibility inspection confirmed native headings, buttons, toggles, and routeable controls for:
  - Home
  - Prayer doorway
  - Sound controls
  - Privacy settings
  - Meditation player
  - Onboarding question and completion routing

