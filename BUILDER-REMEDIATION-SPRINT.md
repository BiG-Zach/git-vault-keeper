# BUILDER-REMEDIATION-SPRINT.md

## 1. REVENUE-BLOCKING (CRITICAL — FIX FIRST)
### FIX 1: Broken Lead Form Submission
- **Bug:** Form currently uses `setTimeout` with `console.log('Lead Saved')`. No data reaches the CRM.
- **Code Fix:** Update `components/forms/LeadForm.tsx` to include the Ringy API fetch call.
```typescript
async function handleSubmit(data: LeadData) {
  const res = await fetch('/api/leads/new', {
    method: 'POST',
    body: JSON.stringify({ ...data, ringySid: process.env.RINGY_SID }),
  });
  if (res.ok) router.push('/thank-you');
}
```

### FIX 2: State-Specific Landing Page 404s
- **Bug:** All `/state/[slug]` routes throw 404. Dynamic routes are misconfigured in `next.config.js` or `app/` folder structure.
- **Code Fix:** Verify `app/state/[slug]/page.tsx` exists and implements `generateStaticParams()` to pre-render FL, MI, TX, GA, AZ, SC, IN.

### FIX 3: CSP Blocking Sanity/Calendly
- **Bug:** Content Security Policy in `middleware.ts` or `next.config.js` restricts external scripts/styles from `*.sanity.io` and `*.calendly.com`.
- **Code Fix:** Update `Content-Security-Policy` header:
```
script-src 'self' 'unsafe-eval' 'unsafe-inline' *.calendly.com *.sanity.io;
frame-src 'self' *.calendly.com;
connect-src 'self' *.sanity.io *.ringy.com;
```

## 2. PILOT APPROVAL REQUIRED
- **Spec Amendment Needed:** Changing `LeadForm.tsx` logic is technically a 'logic shift' outside the reach of the frozen v2.6 spec.
- **Priority Checklist:** 
1. [ ] Fix forms (Immediate Revenue Impact)
2. [ ] Fix routing (SEO Traffic Recovery)
3. [ ] Fix CSP (Conversion Path Enablement)
