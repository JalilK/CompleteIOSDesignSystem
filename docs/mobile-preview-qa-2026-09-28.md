# Mobile Preview QA - 2026-09-28

## Scope

Audited the Figma Make/local preview at a 390 x 844 phone viewport after the parity graph reached `33 covered controls` and `0 unresolved gaps`.

## Automated Checks

- Route smoke-tested all preview routes exposed by `src/context.tsx`.
- Checked for horizontal overflow at phone width.
- Checked for visible interactive controls clipped outside the viewport.
- Checked for content hidden inside non-scrollable `overflow-hidden` containers.
- Rechecked Profile after fixing collapsed settings sections.

## Fix Applied

- `Profile` settings content now preserves natural card height and scrolls instead of shrinking cards under the bottom tab bar.
- Profile scroll content now has tab-bar-safe bottom padding.

## Current Preview Gate

- Prototype graph remains the source-of-truth gate: `33 covered controls`, `0 unresolved gaps`.
- No hidden non-scroll card content detected across all preview routes.
- Production build passes.

## Native QA Still Required

- StoreKit purchase/restore, subscription entitlement failure states, and legal links.
- iOS keyboard avoidance and dismissal for Alignment intake.
- VoiceOver traversal order for bottom sheets, Profile settings, and practice questions.
- Reduced Motion behavior for XP gain, level-up, sheet rise, and route transitions.
- Real-device safe-area checks on small and large iPhones.
