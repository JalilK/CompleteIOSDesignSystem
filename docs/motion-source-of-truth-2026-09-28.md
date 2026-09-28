# Motion Source Of Truth

Status: Active design-source requirement
Date: 2026-09-28

## Purpose

Figma and the preview repo must define the authored motion moments before production Lottie assets are shipped. The native app now has a Revision 22.3 semantic motion registry; this preview makes those same event names visible as design frames so motion can be reviewed instead of guessed.

Preview route:

- `?screen=motion-source-truth`

## Required Event Coverage

Each event must have a Figma frame/state with:

- exact semantic event name;
- surface and trigger;
- duration and easing;
- final visual state;
- Reduce Motion fallback;
- Quiet fallback;
- VoiceOver announcement;
- authoritative receipt requirement.

Required events:

- `alignment_mark_intro`
- `scripture_reveal`
- `answer_correct`
- `answer_reconsider`
- `saved_scripture`
- `xp_transfer`
- `mastery_segment_complete`
- `user_level_up`
- `achievement_unlock`
- `achievement_progress`
- `review_ready`
- `learn_stage_complete`
- `practice_stage_complete`
- `prayer_stage_complete`
- `path_session_complete`
- `path_complete`
- `onboarding_loop_complete`
- `sync_complete`
- `offline_saved`
- `prayer_audio_ready`

## Design Rules

- Scripture text, XP values, labels, buttons, and instructions stay native text.
- Lottie/raster assets must not contain UI copy.
- Completion and progress motion require an authoritative receipt.
- Prayer/listening motion must not look like XP or mastery reward.
- Incorrect-answer motion must be corrective and calm, never punitive or celebratory.
- Reduced Motion and Quiet Mode must still answer what happened and what the user can do next.

## Current Evidence

- Preview screen added at `src/screens/SourceOfTruth.tsx`.
- Route added to `src/context.tsx` and `src/App.tsx`.
- Profile entry added under Experience.

## Remaining Work

- Push these frames into the live Figma design file once Figma connector access is working.
- Add real keyframe/prototype motion in Figma where available.
- Export sampled motion evidence for answer feedback, XP transfer, level up, Path session complete, and bottom-sheet reveal.
