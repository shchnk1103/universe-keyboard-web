<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## KOS 工作路由

对于非平凡的变更、外部副作用或发布工作，依次阅读 `docs/KNOWLEDGE_INDEX.md`、`docs/ACTIVE_WORK.md` 与 `docs/READING_MAPS.md`，再定位适用的 Assignment、ADR、Source of Truth 和 Playbook。

- Assignment 中的 Product、Architecture、Quality 接受结论仅由 `@shchnk1103`（人类项目负责人）作出；Codex 与子代理只能提供执行、分析和独立复核证据。
- `docs/assignments/` 是任务授权、生命周期与各发布 Go/No-Go 的唯一事实来源，`docs/adr/` 是长期技术决策唯一事实来源，`docs/evidence/` 是验证证据唯一事实来源。`docs/releases/RELEASE_STATUS.md` 仅路由当前发布状态，不替代 Release Assignment。
- 未明确 Assignment、必填输入为 `UNKNOWN`，或证据不足以支持所声称 Gate 时，停止并交由人类项目负责人决定。
