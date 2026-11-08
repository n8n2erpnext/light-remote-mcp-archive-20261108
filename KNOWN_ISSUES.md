# Known issues and verification limits

| Item | Status / evidence | Required next step |
|---|---|---|
| Source/runtime drift | Existing A/B Lab Operator, Plugin, Wall and supervisor use different candidate/STAGED paths; hashes fingerprinted | Deploy exact Unified commit only to new runtime after acceptance |
| Old runtime commit provenance | Some deployed hashes have no known Git blob match; folder names not accepted as commit evidence | Preserve unknown source, compare individually, retain UNKNOWN where unresolved |
| New native Windows build | NOT_RUN until CI artifact produced | Build exact baseline SHA; verify installer + manifest |
| New physical Windows acceptance | NOT_RUN | One integrated candidate acceptance, not inferred from historical 4dddf511 |
| Candidate Agent/B and SSO | Real candidate Agent enrollment/heartbeat/connect and mTLS ticket issuance PASS; signed B/remote command and SSO redemption not yet exercised | Complete remaining device-bound live flows |
| Project Continuity | Source restored; active core hook / Windows DACL incomplete | Keep opt-in, validate hook/permissions before enabling |
| Chrome LM extension | Complete source restored; current Wall compatibility unverified | Dedicated extension/Wall compatibility test |
| RC50 portability / Guest | Prototypes restored; Guest native wiring incomplete | Do not apply Guest044 or claim deployed feature |
| macOS/Linux full package | Source/QA retained, new complete installer NOT_BUILT | Dedicated exact-commit platform packaging integration |
| Two Windows primary EXEs | Existing C# host + Tauri UI retained | Later single `LightRemote.exe` design; preserve Node/RM/updater boundaries |
| Endpoint/schema catalog | Critical V4 endpoints centralized; legacy families not exhaustively typed | Complete route/schema coverage incrementally without breaking authority |
| Windows process inventory | WMI process read denied in current local session | File identity available; no bypass or unsupported runtime provenance claim |
| GitHub reset/config secrets | No destructive action performed, Owner approval pending | Verify recreate capability and legitimate secret/config restore sources first |

The original Wall wrapping, asynchronous module state and local B approval reports are represented by retained T11 corrections and source regressions. They require the new integrated package to be deployed before claiming the user's installed build is repaired. No change has been made to that installation during reconstruction.

Recovered-subsystem source checks: extension integrity/manual-staging contract PASS and Continuity multi-OS fail-closed contract PASS. Continuity P1 currently fails because its optional Project UI hook is absent from selected modern Wall (404). Its device-module packaging regression also references an old Git SHA; the new repository intentionally has no old parents. These two recovered tests are retained as known incomplete integration evidence, not counted as active profile PASS.
