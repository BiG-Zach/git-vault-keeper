# Nightly Security Audit Report

## 1. Hardcoded API Keys / Secrets
- `src/components/contact/OfficeLocationLuxury.tsx`: Contains a hardcoded Google Maps API key (`AIza...`).
- `.vscode/roocode.json`: Contains a hardcoded Roo/OpenRouter API key (`sk-or-v1-...`).

## 2. Outdated Dependencies (NPM Audit)
- Found 21 vulnerabilities (1 low, 6 moderate, 13 high, 1 critical). Issues include undici vulnerabilities. Running `npm audit fix` is recommended.

## 3. Data Leaks (console.log)
- Multiple `console.log` statements were found that might leak sensitive user data (e.g., form submissions, Captcha tokens). Key files include:
  - `src/components/contact/EnhancedMessageForm.tsx`
  - `src/components/forms/RingyLeadCaptureForm.tsx`
  - `src/components/security/HCaptcha.tsx`
  - `src/api/ringyProxy.ts`
  - `api/ringy-proxy.ts`

## Risk Assessment
High
