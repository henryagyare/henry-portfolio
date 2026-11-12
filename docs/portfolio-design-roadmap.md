# Portfolio design roadmap

Project Spotlight is the preferred direction. Lead with a concrete example of the work and keep the original bio in About. This roadmap records design options and their dependencies for future review.

## Ready to prototype

1. **Reorder the homepage.** Lead with Henry's name and focus, then feature IntelliJobs before the longer experience and project sections. Keep Résumé and Contact easy to find. Use two short lines for Dell and Allstate near the top and retain the detailed experience farther down.
2. **Try three light palettes on the same layout.** Start with warm white and teal (`#FAF8F3` / `#075E56`). Compare cool white and cobalt (`#F5F7FC` / `#2149CB`) and ivory and burnt orange (`#FFF8EE` / `#9A3D1F`). Use one accent, simplify background glows and badge styling, and check contrast and mobile layouts. Revisit the palette with the actual product screenshot.
3. **Prototype the IntelliJobs interaction with clearly labeled sample data.** Show a few listings and let the visitor change a location preference. Explain why the order changes. The prototype can run locally in the page without a login or live feed.
4. **Give Orbit-sh its own presentation.** Use a short, verified pipeline example and a note about how the shell handles background processes. Keep the output selectable and readable on mobile. This can be built without an image.
5. **Draft short engineering notes.** Start with one decision and one trade-off per note. Possible topics include child-process cleanup in Orbit-sh, validating generated questions in BrillaAI, and teaching branch prediction in a club workshop. Verify implementation details before publishing.

## Needs source material

- **IntelliJobs screenshot.** Capture the ranked listings and the relevant filter using demo data. Crop around the feature and check readability at mobile sizes.
- **Balloon payload visual.** Use a real payload or workbench photo, or a shareable telemetry trace. Add a caption explaining the sensor setup or a calibration decision.
- **Personal photo or workshop photo.** Optional for About or the leadership section. Choose a photo Henry is comfortable publishing.
- **Internship case studies.** Confirm which details can be shared publicly before writing about evaluation at Dell or state-dependent test coverage at Allstate.

## Suggested first pass

Build the homepage hierarchy and a static IntelliJobs spotlight in warm white and teal. Follow with the sample-data interaction, then add the product screenshot and payload photo as they become available. Keep each implementation change small enough to preview and review on its own.
