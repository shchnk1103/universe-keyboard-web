# Third-Party Binary Artifact Gate

> **Status:** Active — governance contract adopted for build-time artifacts; no artifact version-change Assignment is Ready.
>
> **Use when:** This website runs Next.js's precompiled SWC compiler packages during local/CI builds. The final `out/` static website does not contain or execute these packages.
>
> **KOS source:** KOS Agent Kit `v0.4.0`, KOS 2.1 G-01. This file records project facts and does not provide legal advice or approve an implementation, deployment or release Gate.

## Current Status

| Field | Value |
|---|---|
| Lifecycle / phase | Active — document the existing build-time artifact boundary; future artifact changes require a dedicated Assignment. |
| Artifact scope | Next.js `16.2.12` optional `@next/swc-*` platform packages, selected by npm for the build host. |
| Material non-claims | No SWC binary is emitted into `out/`, distributed to site visitors, linked into a product runtime, or approved for a release by this document. |
| Next handoff / decision | `@shchnk1103` records written license/provenance disposition before any SWC/registry/version change enters Ready. |
| Residuals | `KOS-G01-001` |

---

## Owner Source and scope

- Artifact identity / version: `@next/swc-{darwin,linux,win32}-*` `16.2.12`, optional dependencies of `next` `16.2.12`; see `package-lock.json`.
- Purpose and affected product boundary: Turbopack/Next.js build compiler for `npm run dev` and `npm run build`; final public boundary is the static `out/` directory.
- Owner Source: `package.json`, `package-lock.json`, `next.config.ts`, and this file.
- Related Assignment / ADR / Product Decision: `KOS-UPGRADE-001`; future dependency/artifact changes must define their own Assignment.
- Out of scope: Third-party libraries that are pure source/JavaScript dependencies; static hosting infrastructure; end-user native app artifacts; legal advice.

## Provenance and licensing

| Input | Exact immutable identity | Retrieval / checksum evidence | License / notice source | Disposition owner and conclusion |
|---|---|---|---|---|
| Primary upstream | `next@16.2.12` and optional `@next/swc-*@16.2.12` | Exact npm-mirror tarball URLs and `sha512` integrity values are committed in `package-lock.json`. | Lockfile records `MIT` for `next` and each inspected SWC package. | `@shchnk1103`: legal/provenance disposition not yet recorded; this Gate cannot authorize an artifact change. |
| Direct dependency | `next@16.2.12` in `package.json` | Lockfile resolves the dependency and enumerates host-specific optional SWC packages. | `package-lock.json` `license` metadata; authoritative notice text requires review when changing artifacts. | Same as primary upstream. |
| Build toolchain / SDK | Node/npm plus Next.js build script | `package.json` scripts; executor build evidence under `docs/evidence/`. | Node/Next notices are not inventoried by this Gate. | Not a legal conclusion. |

## Reproducible build and target contract

| Contract | Project-specific fact / evidence |
|---|---|
| Build recipe and inputs | `npm ci` with committed `package-lock.json`, then `npm run build`; build runs `scripts/sync-content.mjs` before `next build`. |
| Patches and their origin | No committed patches for `@next/swc-*` are known. Any future patch requires a dedicated Assignment and source record. |
| Target platforms / architecture slices | npm selects an optional SWC package for the build host. The lockfile pins Darwin, Linux and Windows slices; only the current host slice is installed/executed. |
| ABI / loader / signing constraints | SWC is a build-tool dependency. No SWC ABI, loader or signing contract is shipped to browser clients in the static output. |
| Artifact inventory and final checksum | `out/` is the final static payload. SWC binaries are build inputs and are not expected in that directory; final-output hashing is a future release-evidence requirement. |
| Immutable delivery / restore location | Git commit + lockfile restore the declared dependency graph; deployed static artifacts are outside this Assignment. |

## Runtime and recovery contract

| Topic | Required behavior / proof |
|---|---|
| Link / registration / feature activation | Not applicable to the shipped website: SWC executes only while building. |
| Resource discovery or install path | npm installs the host-selected optional package under `node_modules`; no browser resource path exists. |
| Core-capability fallback | A missing/incompatible compiler blocks local build but does not alter an already deployed static site. Any deployment fallback is governed by a Release Assignment. |
| Diagnostics boundary | Build logs may identify package/build failures; they must not contain secrets or user content. |
| Rollback / coexistence / deletion safety | Restore the prior committed lockfile and rebuild from that commit. Do not delete deployed static assets as an artifact rollback substitute. |

## Verification matrix

| Claim | Method and frozen inputs | Evidence grade | Result | Residual / revalidation trigger |
|---|---|---|---|---|
| Artifact provenance | Inspect committed `package-lock.json` for exact version, resolved URL and `sha512` integrity. | Executor-recorded | Present for all listed SWC slices. | `KOS-G01-001`: written legal/provenance disposition required before an artifact change. |
| Target payload contract | Build at a fixed commit and inspect `out/` for absence of SWC binary payloads. | Executor-recorded | Build output is static website content; no SWC payload is declared for delivery. | Re-run after build/deployment model changes. |
| Runtime activation | Verify `npm run build` completes using the fixed lockfile. | Executor-recorded | Existing build evidence passed; this document creates no new runtime claim. | Re-run on Next.js/SWC change. |
| Failure / rollback | Review the lockfile restoration path and static-site boundary. | Executor-recorded | Documented; no destructive rollback was performed. | Revalidate before dependency change or deployment. |
| Performance / memory / device gate | Not applicable to build-only SWC artifact for the delivered static site. | Executor-recorded | No device claim. | Reassess if a runtime native artifact is introduced. |
| Independent Architecture / Quality conclusion | Independent documentation review of this Gate and the fixed lockfile facts. | Quality-reverified | Pending. | Required to close `KOS-UPGRADE-001`. |

## Stop conditions and handoff

- Stop conditions: any artifact version/registry/integrity/host slice change; unknown or conflicting provenance/license requirement; inclusion of a native artifact in `out/`; a request to distribute a native artifact; or a change needing legal/release approval.
- Handoff target: Codex Quality Agent, then `@shchnk1103` for any license/provenance disposition.
- Required handoff content: fixed Kit tag, lockfile identity/integrity facts, output boundary, validation evidence, and every unresolved disposition.
- Closure or abandonment decision: the governance adoption may close after independent documentation review. G-01 stays Active and blocks future artifact-change Assignments from Ready until their own required provenance/license disposition is recorded.
