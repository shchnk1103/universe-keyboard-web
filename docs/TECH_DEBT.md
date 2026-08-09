# Technical Debt

| ID | Risk / gap | Owner | Disposition / next action | Evidence / decision |
|---|---|---|---|---|
| WEB-QUALITY-001 | `npm run lint` 在初次公开上传前失败：`src/app/not-found.tsx` 使用内部导航 `<a>`，另有未使用变量警告。 | Codex Website Executor | fix：执行 [`WEB-QUALITY-001`](assignments/web-quality-001.md)，随后由独立 Quality Agent 复核。 | `docs/evidence/web-publish-001/pre-push-lint.md` |

KOS 2.1 的残余项若处置为 `tech_debt:<ID>`，必须存在对应条目。
