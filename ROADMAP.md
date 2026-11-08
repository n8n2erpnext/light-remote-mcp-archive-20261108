# Roadmap

1. Finish the independent core/contract/source suite and real private PG/Redis integration. Fix failures in the new workspace only. Acceptance: exact clean commit, build manifest, sanitized real API report.
2. Run one CI controller against the independent root commit. Produce Windows installer and Desktop QA evidence. Acceptance: source SHA matches artifact manifest and SHA-256; no legacy stage input.
3. Retain one isolated DEV candidate with compatible component manifest. Finish candidate Agent/Wall B approval and positive SSO relay where feasible; record missing physical-only behavior explicitly.
4. One integrated Windows acceptance for vault/IPC/Wall/tray/relink/RM/update/rollback behavior affected by integration. Reuse historical evidence for unchanged behavior with a clear scope boundary.
5. Only after reconstruction readiness: Owner confirms final GitHub reset. Verify recoverability and recreation/config/secret sources, recreate the same official name, initial clean commit, CI/protections/permissions restored. Never silently force-push.
6. Clone/fetch the new official repo into a new runtime location, verify commit/artifact and integration, then controlled runtime cutover with old rollback retained. No old worktree overwrite.
7. Product backlog: single primary Windows executable; complete Guest runtime, Continuity Windows permissions/core hook, extension compatibility, full macOS/Linux package, exhaustive API schemas. None is relabelled PASS by importing source.
