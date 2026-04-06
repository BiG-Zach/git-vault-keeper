# 🔐 Security Report — Nightly Scan
**Generated:** 2026-04-06 02:00 AM ET (audit/nightly-scan branch)  
**Repo:** bradfordinformedguidance.com workspace

---

## Summary

| Check | Status | Severity |
|---|---|---|
| Hardcoded API Keys / Secrets in source | ✅ CLEAN | — |
| `npm audit` dependency vulnerabilities | ⚠️ ISSUES FOUND | Critical/High/Moderate |
| `console.log` sensitive data leakage (source) | ⚠️ LOW RISK | Low |

---

## 1. Hardcoded Secrets Scan

**Result: CLEAN**

No hardcoded API keys, `sk-` prefixed tokens, or `AIza` Google API keys were found in any source files (`.ts`, `.tsx`, `.js`, `.jsx`).

- `SANITY_API_TOKEN` is only referenced as an environment variable name — never hardcoded.
- `.env.local` exists with credentials but is (assumed) in `.gitignore` and is never read by grep as a secret match.
- `.env.example` and `.env.local` both contain only proper placeholder/env-var references.

---

## 2. npm audit — Dependency Vulnerabilities

**Result: ACTION REQUIRED**

| Severity | Count |
|---|---|
| 🔴 Critical | 1 |
| 🟠 High | 32 |
| 🟡 Moderate | 10 |
| 🟢 Low | 2 |
| **Total** | **45** |

### Critical Vulnerabilities

| Package | Issue | CVE/Advisory |
|---|---|---|
| `happy-dom` | `--disallow-code-generation-from-strings` insufficient for isolating untrusted JS; ECMAScriptModuleCompiler: unsanitized export names interpolated as executable code; fetch credentials use page-origin cookies | GHSA (multiple) |

### High Severity (Selected Key Items)

| Package | Issue |
|---|---|
| `react-router` / `react-router-dom` / `@remix-run/router` | XSS via open redirects (CVSS 8.0) |
| `undici` | CRLF injection, HTTP smuggling, unbounded memory via permessage-deflate, DoS via bad cert data (7 advisories) |
| `axios` | DoS via unchecked data size; Prototype Pollution via `__proto__` in mergeConfig |
| `lodash` | Prototype Pollution + Code Injection via `_.template` |
| `tar` | Arbitrary file read/write via hardlink/symlink path traversal |
| `rollup` | Arbitrary file write via path traversal |
| `jws` | Improper HMAC signature verification |
| `minimatch` | ReDoS via repeated wildcards / nested extglobs (9 advisories) |
| `path-to-regexp` | ReDoS + backtracking regex DoS (3 advisories) |
| `picomatch` | ReDoS via extglob quantifiers; method injection in POSIX character classes |
| `glob` | CLI command injection via `-c/--cmd` with `shell: true` |
| `flatted` | Prototype Pollution + unbounded recursion DoS |

### Moderate Severity (Selected)

| Package | Issue |
|---|---|
| `esbuild` | Dev server accessible cross-origin (dev environment only) |
| `vite` | `server.fs.deny` bypass; HTML files not subject to `server.fs` settings |
| `ajv` | ReDoS via `$data` option |
| `brace-expansion` | Zero-step sequence causes process hang |
| `yaml` | Stack overflow via deeply nested YAML |

### Fix Availability

Many vulnerabilities can be resolved with `npm audit fix`. Several `@vercel/*` packages require a **major version bump** to `vercel@32.3.0`.

**Recommended action:**
```bash
npm audit fix
# For remaining issues requiring semver major bump:
npm audit fix --force   # (review changes carefully)
```

---

## 3. console.log Sensitive Data Leakage

**Result: LOW RISK (dev/infra logs only)**

`console.log` statements were found in the `openclaw-nerve/` server codebase (infrastructure code, not the BIG site source). No `console.log` statements exist in the main `src/` application source.

**Findings in `openclaw-nerve/server/` (infrastructure):**

These are operational/diagnostic logs — none appear to log raw credentials, tokens, or PII. Examples:
- `[tts] provider=... voice=... text="..."` — logs first 50 chars of TTS text (low risk, internal server)
- `[kanban] Run completed for task ...` — task IDs only
- `[device-identity] Loaded existing identity: ${id.substring(0,12)}…` — truncated ID, safe
- Server startup banners, connection status, file watcher events

**No logs found in main `src/` pages, components, or scripts.**

**Recommendation:** Review `[tts]` route log (line 90 of `tts.ts`) to confirm no sensitive user input is captured. Otherwise, these logs are appropriate for a development/server context.

---

## Risk Assessment

**Overall Risk: HIGH**

The repository contains 1 critical and 32 high-severity dependency vulnerabilities, including code execution risks (`happy-dom`), XSS vectors (`react-router`), prototype pollution (`lodash`, `flatted`), and path traversal in `tar`/`rollup`. While no hardcoded secrets were found (positive signal), the dependency surface requires immediate attention before any production deployment or elevated-trust execution context.

---

*Scan performed by THE PUBLISHER nightly security audit — 2026-04-06 02:00 AM ET*
