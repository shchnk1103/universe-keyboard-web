# Reading Maps

## 零上下文进入

先阅读项目根目录的 `AGENTS.md`、本 Knowledge Index 与 Active Work，再按任务选择下列路径。

## 创建或变更正式任务

阅读 Assignment Policy、相关 Product Decision、长期角色边界和该领域 Source of Truth。确认所有必填 Assignment 字段后才能 Ready。

## 实现或修复

先阅读根目录 `AGENTS.md` 的 Next.js 版本约束，再阅读 `package.json`、`next.config.ts`、适用 ADR、领域 Source of Truth 与测试/发布规则。根因不清时先走调查路径。

## 第三方二进制、原生插件或预编译模型

若工作会构建、链接、分发、下载或部署预编译 artifact，先阅读
[`SUPPLY_CHAIN_ARTIFACT_GATE.md`](SUPPLY_CHAIN_ARTIFACT_GATE.md) 与对应领域架构/发布规则；再由 Assignment 确认来源、许可证、构建、运行时激活、回滚和独立验证门。不要把一次链接、下载或构建成功当作运行时能力或分发批准。

## 文档或治理

确认知识类型、唯一 Source of Truth、链接影响、生命周期和必要 ADR。索引只路由，不复制。

## 质量或发布

从 Assignment、[`playbooks/release-gate.md`](playbooks/release-gate.md) 和 `.kos/project.yaml` 获取当前验证矩阵、环境、人工 Gate 与残余项。历史绿色结果不能代替本次证据。

## Bootstrap 限制

产品、架构与质量的最终接受结论由人类项目负责人 `@shchnk1103` 作出；Codex 子代理可以分别承担执行、架构分析和独立质量复核，但不得替代该人类 Gate。
