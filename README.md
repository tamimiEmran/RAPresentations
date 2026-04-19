# RA Presentations

Weekly research-assistant presentation archive.

**Live:** https://tamimiemran.github.io/RAPresentations/

## Structure

```
.
├── index.html              # Dashboard — registry of all presentations
└── 19april26/              # 19 April 2026 presentation
    ├── index.html          # Topic hub (4 cards)
    ├── progress.html       # Pitfalls paper — revision progress
    ├── gaf_experiment_design.html
    ├── safefl_results_p0_p1.html   # FactorGraphs — Phase 0 + Phase 1 results
    └── safefl_windowed_bp.html
```

Each topic page has a fixed top nav for back-to-hub and cross-topic navigation.

## Adding a new presentation

1. Create a new folder named `DDmonthYY` (e.g. `26april26`).
2. Add an `index.html` hub + topic pages inside.
3. Append an entry to the `PRESENTATIONS` array in the root `index.html`.
