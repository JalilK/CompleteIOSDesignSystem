# Prototype Destination Graph

Status: Active no-gap interaction requirement
Date: 2026-09-28

## Purpose

Every visible control in the design source must resolve to a real product outcome. A button may navigate, open a sheet, mutate visible state, show a disabled explanation, show a destructive confirmation, show a truthful preview-only notice, or be removed. It may not do nothing.

Preview route:

- `?screen=prototype-graph`

## Required Destination Fields

Every Figma and native control should be auditable with:

- source screen;
- control label or accessibility name;
- destination screen, sheet, state, notice, disabled reason, confirmation, or external document;
- transition or motion event where relevant;
- back/close destination;
- side effect, if any;
- native route/sheet/state mapping;
- QA status.

## Highest-Risk Controls

These require explicit screenshot or recording evidence before parity closes:

- Paywall `Restore Purchases`, `Terms`, `Privacy`, annual/monthly selection, and purchase CTA.
- Practice `View Scripture`, answer selection, `Check Answer`, feedback, and completion receipt.
- Practice `What You'll Learn` sheet.
- Home `Continue your study` cards and `See All`.
- Devotional filters, reader actions, Practice, Prayer, and Listen.
- Prayer doorway, Pray Scripture, Guided Prayer, and Meditation player controls.
- Path Learn -> Practice -> Prayer handoffs and returns.
- Profile/privacy destructive confirmations.
- Bottom navigation and every icon-only button.

## Current Evidence

- Preview graph screen added at `src/screens/SourceOfTruth.tsx`.
- Route added to `src/context.tsx` and `src/App.tsx`.
- Profile entry added under Experience.
- Graph currently marks items as `Covered`, `Needs native QA`, or `Create in Figma`.

## Remaining Work

- Push matching prototype links into the live Figma file once connector access is working.
- Export a Figma audit with zero unresolved controls.
- Run preview and native route audits and attach screenshots or recordings.
