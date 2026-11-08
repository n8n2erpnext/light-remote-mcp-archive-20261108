# Project handoff

Read `PROJECT_TRUTH.md` and `MASTER_CHECKPOINT.json` first; they are the only current truth/checkpoint. Official destination: `n8n2erpnext/light-remote-mcp`. Temporary independent source: `/home/ubuntu/n8n2erpnext/light-remote-unified-20261108/source/light-remote-mcp`. Version `0.10.0-dev.1`; contract `light-remote.api.v1`; profile `goldabv2-desktop-v4`.

This is real reconstruction work: selected implementation imported, missing subsystems recovered, contracts wired to actual handlers, core/schema/version manifests and executable build/DEV pipeline added. Old source/runtime has not been modified. Historical physical evidence is scoped to its exact Windows artifact; new CI/DEV/physical states are separately recorded in the checkpoint.

Continue with the roadmap's first incomplete step and use the baseline's own scripts. Do not resume a historical lane checkpoint, mirror new docs into old worktrees, build from STAGED paths, activate a production feed, weaken authorization or infer commit identity from folder names. All new source changes must update truth/checkpoint. Source publication uses VPS Git-over-SSH.

Repository deletion/recreation is a separate final conversion, allowed only after verified archive, independent baseline and explicit Owner confirmation. Preserve the official name and start clean history. If recreation permissions/config/secrets cannot be restored, report that fact and retain the prepared independent repository; never use force-push as an implicit alternative.

Verified 2026-11-08T09:12:02.018680+00:00: 270 Node tests PASS and 69 portable source invocations exit zero (3 Windows runtime cases SKIP on ARM); real disposable DEV integration 21 checks PASS at `7d87f94b7a3577cd228ab1c95217a46f3d249853` including a genuinely enrolled Agent/Wall and mTLS ticket issuance. New Windows native CI and physical acceptance remain pending. Owner confirms all project source is on ARM; AMD is out of scope.
