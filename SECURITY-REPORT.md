# Nightly Security Audit Report - 2026-03-15

## 1. Hardcoded Secrets
- `.env.local`: Contains hardcoded `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (`AIza...`) and `OPENROUTER_API_KEY` (`sk-or...`). Note: `.env.local` is tracked in Git, which is a major security risk.

## 2. Outdated Dependencies
- `npm audit` was executed to check for vulnerabilities.

## 3. Sensitive Data Leaks (console.log)
- Multiple `console.log` statements were found that log sensitive user data and form contents. Key files include:
  - `src/components/contact/EnhancedMessageForm.tsx` (logs form data, headers, raw response texts)
  - `src/components/forms/RingyLeadCaptureForm.tsx` (logs complete formData and hcaptchaToken)
  - `src/api/ringyProxy.ts` & `api/ringy-proxy.ts` (logs payload contents)
  - `src/components/security/HCaptcha.tsx` (logs widget initialization and site keys)