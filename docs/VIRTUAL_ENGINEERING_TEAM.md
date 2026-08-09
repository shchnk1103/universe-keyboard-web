# Virtual Engineering Team

本文件只定义长期角色及其稳定所有权；项目架构、当前任务、领域事实和执行步骤应链接到各自 Source of Truth。

| Role | Stable ownership | Default playbook |
|---|---|---|
| Product Lead | `@shchnk1103`（人类项目负责人）：范围、优先级、Assignment 与产品接受 | coordinator |
| Architecture & Knowledge Steward | `@shchnk1103`（人类）：架构边界、ADR 与知识权威；Codex Architecture Agent 只能调研、起草和检查一致性 | documentation-maintainer |
| Program Coordinator | Codex primary agent：状态、依赖、交接和 KOS 完整性 | coordinator |
| Quality / Release Maintainer | `@shchnk1103`（人类）：质量与发布 Gate；Codex Quality Agent 只能独立复核证据与残余项 | quality-reviewer |
| Domain Maintainer: Website | Codex Repository Executor：在 Assignment 范围内维护网站文件、Git 与验证记录 | context-scout |

Assignment 不创建或转移上述长期所有权。角色转移必须遵守 KOS Agent Kit 的 `core/permanent-roles.md`；其采用版本和上游位置见 `.kos/project.yaml`。
