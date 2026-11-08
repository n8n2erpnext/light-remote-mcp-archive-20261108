# Light Remote MCP — Project Truth

Updated 2026-11-08. Reconstruction is in progress in an independent Git repository. The official target remains `n8n2erpnext/light-remote-mcp`. No GitHub repository replacement, production deployment, old-worktree write or existing-runtime cutover has occurred.

The sole active checkpoint is `MASTER_CHECKPOINT.json`; imported checkpoints under `docs/history/pre-reconstruction` are historical evidence. Version and schema selection are in `project.manifest.json`. Source origin and selected/rejected alternatives are in `MIGRATION_PROVENANCE.json` until final provenance consolidation.

Verified recovery: three source Git stores, all advertised GitHub refs, reflogs and worktree changes were recovered into a private archive. The combined bundle restored 2,285 identical refs and passed full fsck. Release binary archival is running independently and is not yet claimed complete.

Selected source combines reviewed current core/Desktop/native implementations with missing Project Continuity, Chrome LM and RC50 portability modules. Standalone/unfinished modules are not reported as integrated features. Native A/B launch, Owner browser login, Wall B and cold app restore have scoped historical physical evidence; new-repository build and integration acceptance are still pending.

Next: finish reproducible contracts/schema/DEV profile and one CI orchestrator; run independent automated and candidate integration checks. Repository deletion/recreation requires a separate final Owner confirmation after concrete reviewable results and verified recovery.

Current verification step: run the exact-commit disposable DEV bootstrap and consolidate final regression evidence. New native CI and physical acceptance remain NOT_RUN. Official documents are the root documents listed in PROJECT_HANDOFF.md; historical documents under docs/history have no current authority.

Isolated DEV attempt 1 applied core 001..043 and Owner extension successfully. Redis image UID could not read the private mounted config; fixture-only permissions corrected without weakening application credential permissions or existing services. Retrying from a clean commit. CI now skips native rebuilds for truth/document-only updates.
