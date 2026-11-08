# Báo cáo Owner — baseline Light Remote MCP

Ngày xác minh: 2026-11-08T10:28:09.307114+00:00. Phiên bản **0.10.0-dev.1**, API **light-remote.api.v1**.

## A. Đã có gì

Một Git repository độc lập tại `/home/ubuntu/n8n2erpnext/light-remote-unified-20261108/source/light-remote-mcp`, initial commit không có parent/history cũ. Một Project Truth, Master Checkpoint, version/schema manifest, contract catalog và pipeline CI. Source Agent/Plugin/Operator/Wall/Desktop V4/native Windows được chọn theo implementation và chứng cứ, kèm source prototype còn thiếu được giữ rõ trạng thái.

Commit build: `eb6b2e6eee45213a385cd7ef0d0c1ef2aaa77ba8`. Tree: `d517bb7b10bb99af6db346eff4e1f53af6f416a9`. [CI 42468832737](https://github.com/n8n2erpnext/light-remote-mcp/actions/runs/42468832737) **8/8 PASS**: Core, schema/PG/Redis integration, Desktop web/browser QA, native Mac/Linux và Windows full installer/install/update/rollback/uninstall.

**270 unit test**, **69 source invocation** thành công; 3 kiểm tra Windows runtime skip khi chạy trên ARM được ghi riêng. **21 kiểm tra DEV thật** PASS với account, consent/PKCE, Agent enrollment/chữ ký/heartbeat/connect, Wall bảo vệ, snapshot, dữ liệu thiết bị thực, năm loại trang, mTLS ticket, refresh và revoke. Đây không phải chứng nhận mọi tính năng đã PASS trên Windows thật.

## B. Còn thiếu gì

Native Windows kết nối backend mới chưa nghiệm thu; backend candidate hiện chỉ trong Docker internal, còn installer giữ profile GoldABV2 Lab. Phải chuẩn bị routing/state cách ly trước một vòng UAT, không cài vào máy đang dùng rồi nhầm backend cũ là backend mới. Local SSO Agent/browser wiring còn thiếu; live B/command trên candidate chưa thử. Continuity hook/DACL, Guest, extension compatibility và full Mac/Linux installer vẫn có phần chưa hoàn thiện. Hai EXE chính Windows chưa được gộp. Catalog endpoint đã có nhưng chưa bao phủ mọi route/constant cũ. Chi tiết: KNOWN_ISSUES.md và FEATURE_STATUS_MATRIX.md.

## C. Đã thu hồi được gì

3 Git store; archive **2.285 refs**, thử phục hồi/fsck/ref equality PASS. So sánh **277 head/tag refs /145 revision** và15 nhóm component. Đã giữ dirty source, worktree/reflog/checkpoint, source runtime chưa truy nguyên và metadata GitHub. **22 release /421 asset record /372 object** (14.440.600.519 byte) đã kiểm size/SHA256. Có thêm bản sao bundle Git trên máy local.

Thu hồi Continuity từ834d4984, legacy LM0.2 bundle6cafb33b và phần portability RC50 thiếu từ55429664; GoldABV2 LM0.3 của Desktop được giữ riêng. Không chép đè mù quáng implementation cũ lên core mới. Đã sửa một lỗi build thực: Cargo.lock cũ chỉ có UI, thiếu dependency Owner; lock mới được CI tạo/rà soát, checksum phiên bản cũ giữ nguyên, mọi native build/test dùng --locked và gate source sạch đã PASS.

## D. Dự án ở đâu

- Source độc lập: `/home/ubuntu/n8n2erpnext/light-remote-unified-20261108/source/light-remote-mcp`.
- [Nhánh CI kiểm chứng](https://github.com/n8n2erpnext/light-remote-mcp/tree/codex/reconstruction-validation-20261108) trong repo hiện có; không thay main/history cũ.
- Đích cuối duy nhất: `n8n2erpnext/light-remote-mcp`; không tạo GitHub repository light-remote-unified.
- Candidate riêng đang chạy: `lru-eb6b2e6eee-100808`, đúng commit build, không publish host port và không chạm runtime cũ.

## E. Phiên bản/artifact

Agent, Plugin, Operator, Wall, Desktop cùng **0.10.0-dev.1**; schema core043 + extension owner-authority.v1; Guest044 không bật.

[Windows CI artifact](https://github.com/n8n2erpnext/light-remote-mcp/actions/runs/42468832737/artifacts/13613101863): ZIP SHA256 `5aef8c6071ddb36f8df888d223812e7a3bdf4f4f149cc49ee2a6812bdda0e76c`. Installer `Light-Remote-MCP-Setup-x64.exe` SHA256 **`2c2c7a8a94638a1dbbed378a289d562d53b696a1dcece6d6684f39ca5dc6e41e`**. Đã kiểm bytes trong ZIP đối chiếu manifest/commit, không chạy/cài trên máy Owner. Manifest: docs/evidence/windows-build-manifest.json. Chưa xác minh chữ ký phát hành production.

## F. Chưa được kiểm chứng

Không suy diễn physical PASS từ CI. Bằng chứng Windows cũ chỉ gắn với source/artifact4dddf511. Snapshot/IPC/vault/B/SSO trong một phiên native mới, reboot và rollback vật lý chưa được nghiệm thu đầy đủ. Browser QA là layout preview. Lab cũ thực tế schema43+Owner, UAT42 chưa có Owner; PostgreSQL17.11/Redis8.10.2 được đọc bằng READ ONLY. 941 source path của UAT khớp commit49b0a2e; Lab stage trộn vẫn giữ UNKNOWN ở nơi chưa chứng minh được commit.

## G. Bước tiếp theo và ranh giới chuyển đổi

Review baseline và phần thiếu; chuẩn bị một UAT native/backend mới có routing/state cách ly. Sau khi nghiệm thu, xác minh khả năng xoá/tạo lại cùng tên và nguồn phục hồi setting/permission/secret, rồi mới xin xác nhận chuyển đổi cuối của Owner theo chỉ thị. Công cụ hiện có push SSH hoạt động nhưng chưa thiết lập API create/delete/admin export đầy đủ; lần đọc browser bị timeout. Không tự ý xoá repo, không force-push thay thế. Sau chuyển đổi phải build từ commit GitHub mới, clone sang runtime mới, nghiệm thu rồi mới chuyển traffic; giữ runtime cũ để rollback.

Chỉ thị bổ sung về reset GitHub **chưa được thực hiện**. Source/runtime/database cũ được giữ nguyên; AMD ngoài phạm vi theo xác nhận của Owner.
