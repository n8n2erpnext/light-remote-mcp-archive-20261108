# Light Remote MCP — Project Truth

Updated 2026-11-08. Reconstruction is in progress in an independent Git repository. The official target remains `n8n2erpnext/light-remote-mcp`. No GitHub repository replacement, production deployment, old-worktree write or existing-runtime cutover has occurred.

The sole active checkpoint is `MASTER_CHECKPOINT.json`; imported checkpoints under `docs/history/pre-reconstruction` are historical evidence. Version and schema selection are in `project.manifest.json`. Source origin and selected/rejected alternatives are in `MIGRATION_PROVENANCE.json` until final provenance consolidation.

Verified recovery: three source Git stores, all advertised GitHub refs, reflogs and worktree changes were recovered into a private archive. The combined bundle restored 2,285 identical refs and passed full fsck. Release binary archival is running independently and is not yet claimed complete.

Selected source combines reviewed current core/Desktop/native implementations with missing Project Continuity, Chrome LM and RC50 portability modules. Standalone/unfinished modules are not reported as integrated features. Native A/B launch, Owner browser login, Wall B and cold app restore have scoped historical physical evidence; new-repository build and integration acceptance are still pending.

Next: finish reproducible contracts/schema/DEV profile and one CI orchestrator; run independent automated and candidate integration checks. Repository deletion/recreation requires a separate final Owner confirmation after concrete reviewable results and verified recovery.

Current verification step: run the exact-commit disposable DEV bootstrap and consolidate final regression evidence. New native CI and physical acceptance remain NOT_RUN. Official documents are the root documents listed in PROJECT_HANDOFF.md; historical documents under docs/history have no current authority.

Isolated DEV attempt 1 applied core 001..043 and Owner extension successfully. Redis image UID could not read the private mounted config; fixture-only permissions corrected without weakening application credential permissions or existing services. Retrying from a clean commit. CI now skips native rebuilds for truth/document-only updates.

Full automated suite completed: Node units +69 source script invocations exited successfully; Windows-only runtime checks explicitly skipped on ARM. Real DEV proved Portal/PKCE/snapshot and five typed pages. The non-Owner negative expects a 303 login redirect without a code. Next candidate adds a real separately enrolled Agent and Local Wall, with canonical packaged profile binding and signed heartbeat/connect.

Verified 2026-11-08T09:12:02.018680+00:00: 270 Node tests PASS and 69 portable source invocations exit zero (3 Windows runtime cases SKIP on ARM); real disposable DEV integration 21 checks PASS at `7d87f94b7a3577cd228ab1c95217a46f3d249853` including a genuinely enrolled Agent/Wall and mTLS ticket issuance. New Windows native CI and physical acceptance remain pending. Owner confirms all project source is on ARM; AMD is out of scope.

First unified GitHub CI: real core/contract/PG/Redis job PASS at run 42466304367. Desktop browser QA and Windows reached one obsolete packaging-contract assertion requiring the old branch name. It now verifies the actual unified controller trigger, reusable full Windows workflow and explicit build profile; actual packaging/feature checks remain. Targeted production packaging contract PASS locally.

CI 42466803326 proved core/real integration, browser QA and macOS/Linux native source builds. Windows built the full installer and completed runtime/update smoke phases, but the final clean-source provenance gate rejected source drift. The committed Cargo.lock still describes the old UI-only root: keyring/rand and reqwest0.12 Owner dependencies are absent. Native builds now receive --locked and a fast CI resolver checks the committed graph before expensive builds. A generated candidate lock is review evidence only, never silently accepted or used to label an artifact source-exact.

Reviewed CI resolver artifact 13611704289 from run 42468219416. Cargo graph expands from 407 to 465 packages for the already-existing Owner implementation; checksums of existing package versions are unchanged. Accepted lock SHA-256 29f6cff2b0591f3655d6d32483df4f31f9b0f7cef8b78c959f2d0c62fe6057fd. Root dependencies now include keyring, rand0.8 and reqwest0.12 as required by the source manifest. All native builds/tests remain locked. The old exact command-prefix source guard remains valid with --locked appended, preserving its behavior and argument coverage.
