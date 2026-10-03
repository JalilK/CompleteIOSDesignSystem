# Preview Parity Audit - 2026-09-26

Authoritative product spec: `/Users/jalilkennedy/Desktop/Alignment_Product_Spec_V21.md`  
Authoritative ticket backlog: `/Users/jalilkennedy/Desktop/bible_study_system_v6_8/docs/alignment_current_parity_gap_tickets_2026-09-25.md`  
Authoritative visual target: September 25 concept boards.

## Current Rule

The preview must use the screenshots as visual references, but behavior must follow the master spec and active parity tickets. Full-screen screenshots remain reference assets only. Active screens need native text, native controls, route state, accessible elements, and no embedded UI/text inside scenic assets.

## Current Evidence

Audit baseline commit: `d527bde Add Home parity evidence`

Current browser preview routes inspected through accessibility trees:

- `/?screen=home`
- `/?screen=paywall`
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

Paywall now has a direct preview route at `/?screen=paywall`, with unavailable product state at `/?screen=paywall&storekit=unavailable`.

## Verified Since The Earlier Audit

- Active screens no longer use remote Unsplash URLs.
- Active screens no longer expose `KJV` or `King James Version`; visible edition labels use the selected-edition placeholder.
- Emoji placeholder icons have been replaced with the shared native `AppIcon` system on audited screens.
- Practice now exposes a six-question level.
- `View Scripture` on Practice question opens a native Scripture reference bottom sheet with dimmed backdrop and upward sheet entrance motion.
- `What You'll Learn` on Practice entrance opens a native Level 2 learning sheet.
- Practice image-to-content spacing was improved on entrance and feedback.
- Shared screens now use contextual back navigation instead of hardcoded guesses.
- Alignment intake preview includes keyboard-safe behavior approximation: a visible `Done typing` affordance, blur-on-scroll dismissal, and extra scroll padding so bottom content remains reachable while editing.
- Home now uses the September 25 Home board hierarchy: Level 3/275 XP header, `Your Path` card, current Alignment card, `Today's Devotionals`, and `Home / Align / Devotionals / More` navigation.
- Home, Progress, Onboarding first-practice completion, and Practice completion now share a native verified XP bar that animates earned XP from the prior total to the new committed total, including level-crossing fill behavior and reduced-motion fallback.
- Progress now uses the shared scenic visual system behind the level ring so the route moves closer to the September 25 Progress board rather than a flat utility page.
- Practice completion now uses a compact verified XP meter inside the medallion/progress card, preserving the completion actions on the first scrollable surface.
- Practice completion `Return to Alignment` now routes back to the active faithful-action/alignment surface instead of Home.
- Onboarding now uses direct preview routes for each step, includes mission/method/demo/completion/purpose/recommended Path states, and provides Scripture-based feedback after checked demo answers.
- Paywall now uses the September 25 scenic continuation layout, direct QA route, explicit unavailable-product state, restore/terms/privacy preview notices, and activation to Home.
- `Home -> Devotional -> Practice -> Back` was manually verified to return to Devotional.
- Build passes with the current route set.

## QA Verdict

The preview is now more coherent and routeable. `ALIGN-GAP-006A Home`, `ALIGN-GAP-006B Onboarding`, and `ALIGN-GAP-006C Paywall` have saved visual evidence and can be marked complete for the Figma Make/design-system preview. The remaining blockers are screen-composition parity on the other route sets, deeper functional persistence, and end-to-end proof.

The next implementation target is `ALIGN-GAP-006D Case`, covering intake, report, and faithful action visual/function parity.

## Remaining Gaps Before Tickets Can Be Marked Complete

- `ALIGN-GAP-006A Home`: complete for the Figma Make/design-system preview. Current Home is native and routeable, uses the September board Path/Alignment/Devotionals hierarchy, fits at the target phone viewport, uses the referenced four-item bottom nav labels (`Home`, `Align`, `Devotionals`, `More`), and has saved screenshot evidence at `.qa/home_parity_2026_09_26/home_390x844.png`.
- `ALIGN-GAP-006B Onboarding`: complete for the Figma Make/design-system preview. Mission, method, demo question, Scripture feedback, completion, purpose selection, and recommended Path are native and saved under `.qa/onboarding_parity_2026_09_26/`. Paywall is intentionally left to `ALIGN-GAP-006C`.
- `ALIGN-GAP-006C Paywall`: complete for the Figma Make/design-system preview. Direct route exists, the visual state matches the September continuation board, available/unavailable product states are captured, and the CTA routes to activated Home.
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

- **Home**: native board hierarchy is implemented and visually checked at a 390 x 844 phone viewport. Saved evidence exists at `.qa/home_parity_2026_09_26/home_390x844.png` and `.qa/home_parity_2026_09_26/home_390x844.ax.txt`.
- **Onboarding**: native board hierarchy is implemented for mission, method, demo question, feedback, completion, purpose selection, and recommended Path. Saved evidence exists under `.qa/onboarding_parity_2026_09_26/`.
- **Paywall**: direct route exists at `/?screen=paywall`; unavailable-product state exists at `/?screen=paywall&storekit=unavailable`; activation routes to Home.
- **Library**: native and local-image based. Still needs board-level image crops, card dimensions, and saved journey/continuation behavior.
- **Progress**: native and local state-aware. Needs concept-grade ring, medallion visuals, spacing, and exact screenshot proof.
- **Devotional**: native, routeable, and no longer hardcodes edition labels. Needs board-level composition and saved journey/detail state.
- **Prayer/Meditation**: native stack exists. Needs persistent audio controls, transcript behavior, history behavior, and screenshot-safe spacing.
- **Sound Controls**: native, routeable, and selectable in preview. Needs persistence and bottom safe-area proof.
- **Privacy/Settings**: native, routeable, and no longer emoji-based. Needs confirmation dialogs/states and persistence.
- **Alignment/Case**: native intake/report/action exist. Intake now approximates keyboard-safe scroll/dismiss behavior in the browser preview. Needs exact board parity and clearer lifecycle behavior.
- **Practice**: six-question route exists; `View Scripture` and `What You'll Learn` now work. Needs final visual tuning, persistence, and XP reconciliation proof.

## Home Parity Acceptance Checklist

Home completion evidence proves:

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

- `pnpm build` passed before audit regeneration and after the Home and Onboarding parity updates.
- Browser accessibility inspection confirmed routeable native headings/buttons/controls for all direct preview routes listed above.
- Browser inspection of `/?screen=home` confirmed the target Home copy stack, CTA labels, current Alignment card, `Today's Devotionals`, and `Home / Align / Devotionals / More` nav.
- Manual click audit on 2026-09-27 confirmed Home primary controls route or toggle: Profile -> You, Continue Path -> Practice intro, Current Alignment/Continue Alignment -> faithful action, devotional tiles/See All -> Devotional, bottom nav -> Home/Align/Devotionals/More.
- Manual click audit on 2026-09-27 confirmed Progress controls route or toggle: settings -> You, Achievements `See All` -> expanded achievements, bottom nav -> Home/Align/Devotionals/More.
- Manual click audit on 2026-09-27 confirmed Practice controls route or toggle: intro Back -> Home fallback, Begin Practice -> question, `What You'll Learn` -> native sheet, `View Scripture` -> native Scripture reference bottom sheet, selecting an answer enables Check Answer, Check Answer -> feedback, completion `Return to Alignment` -> faithful action, completion `Continue to Level 3` -> next practice intro placeholder.
- Known remaining Practice interaction gap from the 2026-09-27 audit: `Continue to Level 3` is routeable, but still opens the same hardcoded Level 2 practice-intro content. It needs a real Level 3 state/content model before `ALIGN-GAP-006E Practice` can be marked complete.
- Visual preview at 390 x 844 confirmed the Home screen fits with the devotional section visible above the bottom navigation.
- Saved Home evidence: `.qa/home_parity_2026_09_26/home_390x844.png` and `.qa/home_parity_2026_09_26/home_390x844.ax.txt`. Desktop copy: `/Users/jalilkennedy/Desktop/alignment-home-parity-2026-09-26.png`.
- Saved Onboarding evidence: `.qa/onboarding_parity_2026_09_26/01_mission.png`, `02_method.png`, `03_question_1.png`, `04_question_1_feedback.png`, `05_completion.png`, `06_purpose_selection.png`, and `07_recommended_path.png`, each with matching `.ax.txt` files.
- Direct QA URLs now support `?screen=onboarding&onboardingStep=1...9` and `questionIndex=0...3` for stable screenshot capture.
- Onboarding Paywall activation smoke test should now start from `/?screen=onboarding&onboardingStep=9` -> `Start 7-Day Free Trial` -> Home after the situation intake, level-up, purpose, and recommended Path steps are included.
- 2026-10-03 superseding evidence: `.qa/onboarding_playable_2026-10-03_v2/` captures the expanded playable onboarding route, including the new Situation Intake state and example-enabled CTA state.
- 2026-10-03 live Figma patch: file `uRIDtKoKGqWVCI6ayQVjwt`, `PROTO-CORE-01B — Method / Scripture Before Advice` (`118:1146`) inserted into the central route; core CTA labels fixed and engineering route labels hidden.
- 2026-10-03 live Figma prototype entry fix: Flow 1 now opens onboarding at `PROTO-ONBOARDING-START — Mission / Begin` (`38:667`) instead of the old Home frame, with the old Home content archived as a non-flow frame.
- Saved Paywall evidence: `.qa/paywall_parity_2026_09_26/01_paywall_available.png`, `02_paywall_unavailable.png`, and `03_paywall_activation_home.png`, each with matching `.ax.txt` files.
- Paywall restore control smoke test passed by rendering a visible StoreKit-connected preview notice.
- Manual contextual navigation smoke test passed for `Home -> Devotional -> Practice -> Back`.
