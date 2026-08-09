# Documentation Governance

| Knowledge type | Primary source | Boundary |
|---|---|---|
| Navigation | `docs/KNOWLEDGE_INDEX.md` | 仅路由，不复制规则 |
| Task authority and lifecycle | `docs/assignments/` | 每项正式任务的授权与状态 |
| Permanent ownership | `docs/VIRTUAL_ENGINEERING_TEAM.md` | 长期职责，不是任务状态 |
| Durable technical decisions | `docs/adr/` | 决策理由与 supersession |
| Current website configuration | `package.json` and `next.config.ts` | 已确认的运行命令和 Next.js 配置 |
| Product, content and deployment facts | `README.md` | 当前公开的站点定位、内容同步与部署说明 |
| Validation evidence | `docs/evidence/` | 按 Assignment 保存命令、环境、结果、证据等级与残余项 |
| Third-party binary artifact supply chain | `docs/SUPPLY_CHAIN_ARTIFACT_GATE.md` | 构建期/运行期预编译 artifact 的来源、许可证、构建、目标、激活与回滚合同 |
| Release Gate | `docs/assignments/RELEASE-*.md` | 对应 Release Assignment 记录固定 SHA、证据与人类 Go/No-Go；GitHub 状态不替代该决定 |
| Open risk | `docs/TECH_DEBT.md` | 未关闭风险与 owner |

任何事实冲突先定位 Owner Source；修复 Owner 后，用链接或非权威摘要替代重复内容。

`README.md`、`package.json` 与 `next.config.ts` 的长期权威边界尚未由人类确认；本表只记录 Bootstrap 时可从仓库读取的事实，不授予产品、架构或质量结论。
