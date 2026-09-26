# Preview Parity Audit - 2026-09-26

Authoritative product spec: `/Users/jalilkennedy/Desktop/Alignment_Product_Spec_V21.md`  
Authoritative ticket backlog: `/Users/jalilkennedy/Desktop/bible_study_system_v6_8/docs/alignment_current_parity_gap_tickets_2026-09-25.md`  
Authoritative visual target: September 25 concept boards.

## Current Rule

The preview must use the screenshots as visual references, but behavior must follow the master spec and active parity tickets. Full-screen screenshots remain reference assets only. Active screens need native text, native controls, route state, accessible elements, and no embedded UI/text inside scenic assets.

## Current Evidence

Audit baseline commit: `3042f6d Regenerate parity audit`

Current browser preview routes inspected through accessibility trees:

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
- `/?screen=context-study`

No direct Paywall preview route exists yet. Paywall remains reachable only inside onboarding step state, which blocks isolated Paywall QA.

## Verified Since The Earlier Audit

- Active screens no longer use remote Unsplash URLs.
- Active screens no longer expose `KJV` or `King James Version`; visible edition labels use the selected-edition placeholder.
- Emoji placeholder icons have been replaced with the shared native `AppIcon` system on audited screens.
- Practice now exposes a six-question level.
- `View Scripture` on Practice question opens a native Scripture reference sheet.
- `What You'll Learn` on Practice entrance opens a native Level 2 learning sheet.
- Practice image-to-content spacing was improved on entrance and feedback.
- Shared screens now use contextual back navigation instead of hardcoded guesses.
- Home now uses the September 25 Home board hierarchy: Level 3/275 XP header, `Your Path` card, current Alignment card, `Today's Devotionals`, and `Home / Align / Devotionals / More` navigation.
- `Home -> Devotional -> Practice -> Back` was manually verified to return to Devotional.
- Build passes with the current route set.

## QA Verdict

The preview is now more coherent and routeable, but no visual parity ticket should be marked complete yet without saved screenshot evidence against the reference. Home has been implemented against the board and needs final screenshot comparison; the remaining blockers are screen-composition parity on the other route sets, functional persistence, direct Paywall QA, and end-to-end proof.

The next implementation target after Home proof is `ALIGN-GAP-006B Onboarding` or `ALIGN-GAP-006C Paywall`, depending on whether we prioritize fresh-user flow or direct monetization QA.

## Remaining Gaps Before Tickets Can Be Marked Complete

- `ALIGN-GAP-006A Home`: implemented, pending final screenshot evidence. Current Home is native and routeable, uses the September board Path/Alignment/Devotionals hierarchy, fits at the target phone viewport, and uses the referenced four-item bottom nav labels (`Home`, `Align`, `Devotionals`, `More`). It still needs simulator/reference screenshot comparison before the ticket is marked complete.
- `ALIGN-GAP-006B Onboarding`: blocked. Visual states are native, but the flow still needs a fresh proof pass for four-question Level 1, safe-area behavior, and completion routing.
- `ALIGN-GAP-006C Paywall`: blocked. No direct preview route exists. Pricing is static preview copy, StoreKit metadata is not proven, and production unavailable-product handling is not verified.
- `ALIGN-GAP-006D Case`: blocked. Intake/report/action are native, but exact board parity, full case lifecycle states, active privacy controls, and result-to-action state are not proven.
- `ALIGN-GAP-006E Practice`: blocked. The six-question flow and helper sheets exist, but entrance/question/feedback/completion still need exact screenshot spacing, typography, medallion, safe-area, persistence, and no-duplicate-XP proof.
- `ALIGN-GAP-006F Library`: blocked. Native route exists and uses local assets, but visual card composition, saved journey behavior, continuation state, and exact screenshot comparison remain incomplete.
- `ALIGN-GAP-006G Progress`: blocked. Native route exists and shares baseline XP with Home, but the level presentation, medallions, row layout, and screenshot comparison remain incomplete.
- `ALIGN-GAP-006H Devotional`: blocked. Native route exists with local assets and selected-edition labels, but image crop, editorial layout, saved journey/detail behavior, and passive-reading XP boundaries need proof.
- `ALIGN-GAP-006I Prayer/meditation`: blocked. Doorway, Pray Scripture, Guided Prayer, Meditation Player, and Sound Controls are native, but audio state, transcript behavior, completion/history, and exact screenshot comparison remain unproven.
- `ALIGN-GAP-006J Sound controls`: blocked. Native route exists, but sliders/toggles are not proven bound to stored sensory/audio preferences, and bottom safe-area/scroll proof is still needed.
- `ALIGN-GAP-006K Privacy/settings`: blocked. Native route exists, but destructive actions and history clearing need confirmation states, actual persistence behavior, and safe-area/scroll proof.
- `ALIGN-GAP-006L Icons/medallions/assets/typography`: blocked. Emoji/remote-image cleanup is much better, but final medallion assets, typography matching, icon weight, and screenshot proof remain.
- `ALIGN-GAP-008 Fresh onboarding/paywall`: blocked until fresh-user onboarding, Paywall, entitlement activation, and Home landing are recorded.
- `ALIGN-GAP-010 Full app recording`: blocked until a full accepted recording is produced.
- `ALIGN-GAP-011 Physical/accessibility/offline`: remains unverified.

## Screen Notes From Current Preview

- **Home**: native board hierarchy is now implemented and visually checked at a 390 x 844 phone viewport. Needs saved simulator/reference evidence before completion.
- **Onboarding**: native and close in structure. Needs a focused fresh-user run after Paywall route/work is fixed.
- **Paywall**: cannot be directly inspected through `?screen=paywall`. Add direct route before Paywall parity work.
- **Library**: native and local-image based. Still needs board-level image crops, card dimensions, and saved journey/continuation behavior.
- **Progress**: native and local state-aware. Needs concept-grade ring, medallion visuals, spacing, and exact screenshot proof.
- **Devotional**: native, routeable, and no longer hardcodes edition labels. Needs board-level composition and saved journey/detail state.
- **Prayer/Meditation**: native stack exists. Needs persistent audio controls, transcript behavior, history behavior, and screenshot-safe spacing.
- **Sound Controls**: native, routeable, and selectable in preview. Needs persistence and bottom safe-area proof.
- **Privacy/Settings**: native, routeable, and no longer emoji-based. Needs confirmation dialogs/states and persistence.
- **Alignment/Case**: native intake/report/action exist. Needs exact board parity and clearer lifecycle behavior.
- **Practice**: six-question route exists; `View Scripture` and `What You'll Learn` now work. Needs final visual tuning, persistence, and XP reconciliation proof.

## Home Parity Acceptance Checklist

Home is implemented but cannot be marked complete until current simulator/preview evidence proves:

- Greeting/header matches the reference board.
- Current Path card uses the September board composition: scenic image, `Your Path`, `Trusting God Through Uncertainty`, session label, and `Continue Path`.
- Current Alignment card exists below the Path card with leaf medallion, title, next-step subcopy, and `Continue Alignment`.
- `Today's Devotionals` section uses two image cards with `For You` and `For Everyone` language.
- Bottom nav matches the referenced Home board labels and selected state for this Home variant.
- All images are local assets with no embedded text/UI.
- Text, buttons, and icons are native layers.
- Content fits without clipping at the target phone viewport.
- Back/nav behavior still passes after the Home change.

## Verification Evidence From This Regeneration

- `pnpm build` passed before audit regeneration and after the Home parity update.
- Browser accessibility inspection confirmed routeable native headings/buttons/controls for all direct preview routes listed above.
- Browser inspection of `/?screen=home` confirmed the target Home copy stack, CTA labels, current Alignment card, `Today's Devotionals`, and `Home / Align / Devotionals / More` nav.
- Visual preview at 390 x 844 confirmed the Home screen fits with the devotional section visible above the bottom navigation.
- Manual contextual navigation smoke test passed for `Home -> Devotional -> Practice -> Back`.
