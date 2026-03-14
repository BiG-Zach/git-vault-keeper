# Nightly Security Audit Report

## 1. Hardcoded Secrets
- `.env.local`: Contains hardcoded `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (`AIza...`) and `OPENROUTER_API_KEY` (`sk-or...`). Note: `.env.local` appears to be tracked in Git.

## 2. Outdated Dependencies
- `npm audit` check failed to run successfully due to an npm registry endpoint error.

## 3. Sensitive Data Leaks (console.log)
- `src/components/contact/EnhancedMessageForm.tsx`: Logs form submissions, `loadedSiteKey`, and form data contents.
- `src/components/security/HCaptcha.tsx`: Logs `siteKey` strings.
- `src/components/forms/RingyLeadCaptureForm.tsx`: Logs raw `formData` and `hcaptchaToken`.
- `src/api/ringyProxy.ts`: Logs payload content.
