# 🔧 KILO CODE PROMPT: Fix Dev Server Access & Verify Blog Post Updates

## OBJECTIVE
Fix the Vite dev server blocking issue in the sandbox environment and verify all 2025 blog post updates are working correctly, including Google Drive multimedia streaming and URL redirects.

---

## CONTEXT
- **Project**: bradfordinformedguidance.com
- **Tech Stack**: React 18.2 + TypeScript 5.4 + Vite 5.4 + React Router v6
- **Working Directory**: `/home/user/webapp`
- **Current Issue**: Vite blocks sandbox hostname with "Blocked request" error
- **Target Article**: Term vs Whole Life Insurance (updated to 2025)
- **Changes Made**: URL changed from 2024 → 2025, multimedia integration, market data updates

---

## PROBLEM STATEMENT

The dev server is running on port 8081 but Vite's security settings block access from the sandbox domain:

```
Blocked request. This host ("8081-iegbm5k4xykf91qmwv1ag-2e77fc33.sandbox.novita.ai") is not allowed.
```

**Root Cause**: Vite's `server.allowedHosts` needs to include the sandbox domain pattern.

---

## TASK BREAKDOWN

### TASK 1: Fix Vite Configuration for Sandbox Access

**File**: `vite.config.ts`

**Current Configuration**:
```typescript
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      clientPort: 8080,
    },
  },
  // ... rest of config
}));
```

**Required Changes**:
```typescript
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      clientPort: 8080,
    },
    // ADD THIS: Allow sandbox domains
    allowedHosts: [
      'localhost',
      '.novita.ai',
      '.sandbox.novita.ai',
      /^\d+-[a-z0-9]+\.sandbox\.novita\.ai$/,  // Matches pattern: 8081-iegbm5k4xykf91qmwv1ag-2e77fc33.sandbox.novita.ai
    ],
  },
  // ... rest of config
}));
```

**Action**: Update `vite.config.ts` with the `allowedHosts` configuration.

---

### TASK 2: Restart Dev Server

**Actions**:
1. Kill any running dev servers
2. Start fresh dev server on port 8080
3. Capture the sandbox URL
4. Verify server is accessible

**Commands**:
```bash
# Navigate to project directory
cd /home/user/webapp

# Kill any existing node/vite processes
pkill -f vite || true
pkill -f node || true

# Start dev server in background
npm run dev > /tmp/vite-server.log 2>&1 &

# Wait for server to start
sleep 5

# Verify server is running
curl -I http://localhost:8080 || echo "Server not ready yet, waiting..."
sleep 3
curl -I http://localhost:8080
```

---

### TASK 3: Get Public Sandbox URL

**Use GetServiceUrl tool** to obtain the public sandbox URL for port 8080.

**Expected Output**: `https://8080-[sandbox-id].sandbox.novita.ai`

---

### TASK 4: Verify URL Structure Changes

**Test Cases**:

1. **New 2025 URL** - Should load successfully:
   - Path: `/blog/term-vs-whole-life-insurance-2025`
   - Expected: Article displays with "2025" in title
   - Expected: Last updated shows "October 19, 2025"

2. **Old 2024 URL** - Should redirect to 2025:
   - Path: `/blog/term-vs-whole-life-insurance-2024`
   - Expected: 301 redirect to `/blog/term-vs-whole-life-insurance-2025`
   - Verification: React Router `<Navigate>` component handles redirect

**Commands**:
```bash
# Test new URL
curl -s http://localhost:8080/blog/term-vs-whole-life-insurance-2025 | grep -o "<h1[^>]*>.*</h1>" | head -1

# Test redirect (should show React app handles routing)
curl -I http://localhost:8080/blog/term-vs-whole-life-insurance-2024
```

---

### TASK 5: Verify Multimedia Integration

**Google Drive URLs Embedded**:

**Audio**:
- Direct URL: `https://drive.google.com/uc?export=download&id=1sDVCLmLoLIrRjuZx6VtHz_yVBt9lOqma`
- Component: `<MultimediaOverview>` in article

**Video**:
- Direct URL: `https://drive.google.com/uc?export=download&id=1HwO4BO_MwoK-GpwvOnaIYWYp0LrFbOCk`
- Component: `<MultimediaOverview>` in article

**Verification Steps**:
1. Check that `MultimediaOverview` component exists:
   ```bash
   cat src/components/blog/MultimediaOverview.tsx | head -20
   ```

2. Verify it's imported in the article:
   ```bash
   grep -n "MultimediaOverview" src/pages/blog/TermVsWholeLifeInsurance2024.tsx
   ```

3. Confirm Google Drive URLs are present:
   ```bash
   grep -n "drive.google.com" src/pages/blog/TermVsWholeLifeInsurance2024.tsx
   ```

---

### TASK 6: Verify FAQ Schema Implementation

**Files to Check**:
1. `src/utils/faqSchema.ts` - Should exist
2. `src/pages/blog/TermVsWholeLifeInsurance2024.tsx` - Should import and use FAQ schema

**Verification Commands**:
```bash
# Check FAQ schema utility exists
ls -lh src/utils/faqSchema.ts

# Check it's imported in article
grep -n "faqSchema" src/pages/blog/TermVsWholeLifeInsurance2024.tsx

# Verify FAQ data is defined
grep -n "const faqs =" src/pages/blog/TermVsWholeLifeInsurance2024.tsx
```

---

### TASK 7: Check Internal Links

**5 Internal Links Added**:
1. `/blog/life-insurance-young-adults-guide`
2. `/blog/life-insurance-pre-existing-conditions`
3. `/blog/indexed-universal-life-iul-insurance`
4. `/blog/how-much-life-insurance-calculator`
5. `/blog/life-insurance-companies-financial-strength`

**Verification**:
```bash
# Count internal links in article
grep -o 'to="/blog/' src/pages/blog/TermVsWholeLifeInsurance2024.tsx | wc -l

# List all internal links
grep -o 'to="/blog/[^"]*"' src/pages/blog/TermVsWholeLifeInsurance2024.tsx | sort | uniq
```

---

### TASK 8: TypeScript & Lint Validation

**Run Quality Checks**:
```bash
cd /home/user/webapp

# TypeScript type checking
npm run type-check

# ESLint validation
npm run lint
```

**Expected Output**: No errors (warnings are acceptable).

---

### TASK 9: Test in Browser (Using PlaywrightConsoleCapture)

**Use PlaywrightConsoleCapture tool** to:
1. Load the 2025 article URL
2. Capture console logs for errors
3. Verify page loads without JavaScript errors

**Target URL**: `https://8080-[sandbox-id].sandbox.novita.ai/blog/term-vs-whole-life-insurance-2025`

**What to Check**:
- No 404 errors
- No CORS errors for Google Drive
- No React errors
- Page renders correctly

---

### TASK 10: Document Results

**Create Results File**: `DEV_SERVER_VERIFICATION_RESULTS.md`

**Template**:
```markdown
# Dev Server Fix & Blog Post Verification Results
**Date**: [Current Date]
**Sandbox URL**: [Actual URL from GetServiceUrl]

## ✅ Tasks Completed

### 1. Vite Configuration Updated
- [x] Added `allowedHosts` configuration
- [x] Included sandbox domain patterns
- File: `vite.config.ts`

### 2. Dev Server Status
- [x] Server running on port 8080
- [x] Public URL accessible: [URL]
- [x] No blocking errors

### 3. URL Structure Verified
- [x] New 2025 URL loads: `/blog/term-vs-whole-life-insurance-2025`
- [x] Old 2024 URL redirects: `/blog/term-vs-whole-life-insurance-2024` → 2025
- [x] Title shows "2025"
- [x] Last updated: October 19, 2025

### 4. Multimedia Integration
- [x] `MultimediaOverview` component exists
- [x] Imported in article
- [x] Audio URL present: [ID: 1sDVCLmLoLIrRjuZx6VtHz_yVBt9lOqma]
- [x] Video URL present: [ID: 1HwO4BO_MwoK-GpwvOnaIYWYp0LrFbOCk]

### 5. FAQ Schema
- [x] `faqSchema.ts` utility created
- [x] Imported and used in article
- [x] 5 FAQ questions defined

### 6. Internal Links
- [x] 5 internal links added
- List: [Display actual links found]

### 7. Quality Checks
- [x] TypeScript: No errors
- [x] ESLint: [Results]
- [x] Console logs: [No critical errors]

## 🔗 Access URLs

**Live Article**: [Sandbox URL]/blog/term-vs-whole-life-insurance-2025
**Old URL (Redirect)**: [Sandbox URL]/blog/term-vs-whole-life-insurance-2024

## 📊 Verification Summary

| Check | Status | Notes |
|-------|--------|-------|
| Vite Config | ✅ | allowedHosts added |
| Server Access | ✅ | [URL accessible] |
| 2025 URL | ✅ | Loads correctly |
| 2024 Redirect | ✅ | Redirects to 2025 |
| Multimedia | ✅ | Audio/Video URLs embedded |
| FAQ Schema | ✅ | 5 questions defined |
| Internal Links | ✅ | 5 links added |
| TypeScript | ✅ | No errors |
| Console | ✅ | [No critical errors] |

## 📝 Next Steps

1. Test audio playback in browser
2. Test video playback in browser
3. Validate FAQ schema with https://validator.schema.org/
4. Monitor organic traffic over 30-90 days
5. Track multimedia engagement metrics

## 🎉 Conclusion

All tasks completed successfully. The dev server is now accessible, the 2025 blog post updates are live, and multimedia integration is functional.

**Ready for production deployment.**
```

---

## EXECUTION CHECKLIST

Complete these in order:

- [ ] **STEP 1**: Update `vite.config.ts` with `allowedHosts`
- [ ] **STEP 2**: Restart dev server (kill + start fresh on port 8080)
- [ ] **STEP 3**: Use GetServiceUrl to get public sandbox URL
- [ ] **STEP 4**: Verify 2025 URL loads correctly
- [ ] **STEP 5**: Verify 2024 URL redirects to 2025
- [ ] **STEP 6**: Check `MultimediaOverview` component exists
- [ ] **STEP 7**: Verify Google Drive URLs in article
- [ ] **STEP 8**: Check FAQ schema implementation
- [ ] **STEP 9**: Count and list internal links (should be 5+)
- [ ] **STEP 10**: Run `npm run type-check` (no errors)
- [ ] **STEP 11**: Run `npm run lint` (no critical errors)
- [ ] **STEP 12**: Use PlaywrightConsoleCapture on article URL
- [ ] **STEP 13**: Create `DEV_SERVER_VERIFICATION_RESULTS.md`
- [ ] **STEP 14**: Provide public URL to user

---

## CRITICAL REMINDERS

1. **Always prepend commands with `cd /home/user/webapp &&`**
2. **Use GetServiceUrl tool** for public sandbox URL (don't construct manually)
3. **PlaywrightConsoleCapture** to verify page loads without errors
4. **Document all findings** in the results file
5. **Provide the final public URL** to the user for testing

---

## EXPECTED FINAL OUTPUT

**When all tasks complete, provide**:

1. ✅ **Public Sandbox URL**: `https://8080-[id].sandbox.novita.ai/blog/term-vs-whole-life-insurance-2025`
2. ✅ **Verification Results**: Complete checklist with all items marked
3. ✅ **Results File**: `DEV_SERVER_VERIFICATION_RESULTS.md` created and saved
4. ✅ **Status Summary**: "All systems operational, ready for user testing"

---

## SUCCESS CRITERIA

- ✅ Vite server accessible from sandbox URL (no "Blocked request" error)
- ✅ 2025 article loads with correct title and date
- ✅ 2024 URL redirects to 2025
- ✅ Multimedia components present with Google Drive URLs
- ✅ FAQ schema implemented
- ✅ 5+ internal links present
- ✅ No TypeScript errors
- ✅ No critical console errors
- ✅ Results documented

---

## 🚀 READY TO EXECUTE

**Simply paste this entire prompt into Kilo Code and press Enter.**

The AI will:
1. Fix the Vite configuration
2. Restart the dev server
3. Verify all blog post updates
4. Test multimedia integration
5. Validate code quality
6. Provide you with a working public URL

**Estimated Time**: 3-5 minutes
