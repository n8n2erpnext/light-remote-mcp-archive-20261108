# Project Truth — Light Remote MCP

Verified baseline: **0.10.0-dev.1**, contract **light-remote.api.v1**, profile **goldabv2-desktop-v4**.

Build/deploy source: `eb6b2e6eee45213a385cd7ef0d0c1ef2aaa77ba8`; source tree `d517bb7b10bb99af6db346eff4e1f53af6f416a9`. [CI 42468832737](https://github.com/n8n2erpnext/light-remote-mcp/actions/runs/42468832737) passed **8/8 jobs**. Later truth/receipt-only commits do not change this artifact's identified source.

Official destination is `n8n2erpnext/light-remote-mcp`. The independent development repository is `/home/ubuntu/n8n2erpnext/light-remote-unified-20261108/source/light-remote-mcp`. Its initial commit has no old parents/alternates. `codex/reconstruction-validation-20261108` is a temporary CI validation ref in the existing GitHub repository, not a replacement for the required clean repository conversion. GitHub main and all old source/runtime remain intact.

Evidence: 270 Node tests PASS; 69 portable source invocations exit zero (3 Windows runtime checks skip on ARM, with Windows CI coverage separately scoped). Real private PG/Redis/Operator/Plugin/Agent/Wall integration: 21 checks PASS. Windows CI built, installed, checked updater promotion and broken-update rollback, uninstalled and emitted a strict clean-source manifest. macOS/Linux native source builds/tests PASS; complete platform installers are not claimed. Browser QA is explicitly preview/unauthenticated layout coverage, not physical authenticated acceptance.

One retained independent DEV candidate `lru-eb6b2e6eee-100808` runs from the same build commit. It has new labelled containers/volumes, an internal network, private test CAs/credentials and zero published host ports. Core schema 043 plus checksum-pinned Owner extension are enabled. Owner consent/token/read, A/B backend gates and mTLS SSO issuer gates are enabled; actual authorization remains mandatory. Desktop has not been installed on the Owner's Windows machine during reconstruction.

Historical physical PASS remains scoped to source `4dddf5114248a014c0695e853109358039afa7ad` and its archived artifact. It does not become physical PASS for this new binary. New signed B-command flow, native vault/IPC acceptance, positive SSO redemption/browser relay and OS reboot/physical rollback remain unverified. Local Agent/browser SSO production wiring is unfinished; its Desktop feature remains disabled rather than represented as shipped. Continuity and legacy extension/RC50 prototypes are retained with explicit missing-integration status.

Recovery: 3 Git stores; 2,285 refs restored and full-fsck/ref equality PASS. Old bundle SHA-256 `95a4764f213abb649a2df25f92906918bca79987908edda42b110d7880bed8fe`. 22 releases / 421 asset records / 372 deduplicated verified objects (14,440,600,519 bytes). Old runtime source hotfixes, dirty source and GitHub metadata are preserved privately. Component comparison covers 277 head/tag refs and 145 revisions. AMD is out of scope, confirmed by Owner.

Observed old DBs by READ ONLY inspection: A/B Lab schema43 + Owner table; UAT schema42 without Owner table; both PG17.11 / Redis8.10.2. UAT's 941 fingerprinted source paths match commit49b0a2e9f98640a6081b54481858e765125b9f9e. Mixed Lab stages retain UNKNOWN where exact commit provenance is unsupported. No old database migration ran.

Current phase: **F — Owner review/acceptance of the prepared baseline**. Repository deletion/recreation, official-source cutover and runtime traffic cutover have **not** occurred. They require the later Owner confirmation and verified recreation/config/secret restore capability. Never replace old history by an implicit force-push. Connected tools can push source, but repository create/delete and full administrative setting export have not been established; browser access timed out. These are explicit conversion prerequisites.

Read MASTER_CHECKPOINT.json, PROJECT_HANDOFF.md, FEATURE_STATUS_MATRIX.md and KNOWN_ISSUES.md for current scope. Historical lane/checkpoint documents have no current authority.
