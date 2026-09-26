# UI Interaction QA Audit - September 26, 2026

## Scope

Audited visible UI controls in the Figma Make preview against the current Alignment spec/ticket direction: the preview should behave like the app flow, not like static screenshots.

## Fixed in this pass

- Library search button now opens an actual search field with filtered Scripture results.
- Library `See All` controls now either route to practice or expand/collapse their sections.
- Library Scripture rows are tappable and route to the appropriate Scripture/practice surface.
- Progress settings gear routes to profile/settings.
- Progress achievements `See All` expands the full achievement set instead of doing nothing.
- Profile/settings rows now route to relevant surfaces or show explicit preview-state feedback.
- Privacy controls now provide feedback for clear/delete/preferred voice actions.
- Alignment intake helper buttons now fill an example and explain personalization use.
- Alignment report menu now opens options and supports save/unsave state.
- Onboarding recommended path card now advances like the primary CTA.
- Devotional bookmark saves/unsaves the devotional.
- Devotional `Why this was selected` opens a real explanation panel.
- Devotional `Listen` routes to the meditation player.
- Pray Scripture and Guided Prayer overflow menus now provide preview feedback.
- Guided Prayer `Edit prayer` now toggles an editable prayer field.
- Meditation player controls now update local state: rewind, forward, play/pause, playback speed, and transcript.
- Sound controls `Sensory settings` now routes to privacy/settings.

## Verification

- Ran production build successfully with `pnpm build`.
- Re-ran the inert-button text audit. Remaining hits are expected false positives for multiline buttons with `onClick` on the next line, disabled buttons, or navigation controls already wired.

## Still Needs Native QA

- Physical device accessibility matrix: VoiceOver, Dynamic Type, Reduce Motion, touch target checks.
- StoreKit unavailable/restore/purchase paths in the native container.
- Offline behavior across active Path, case practice, prayer/meditation, and Library.
- Screen-by-screen visual parity screenshots against the September 25 boards after each remaining parity ticket lands.
