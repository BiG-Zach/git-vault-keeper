# ⚡ QUICK START GUIDE - Cursor Implementation

Use this guide to efficiently implement all homepage content improvements using Cursor/Codex.

---

## 📋 Implementation Plan

### Step 1: Critical Fixes (30 minutes) - DO THIS FIRST
**File:** `CURSOR_PROMPT_CRITICAL.md`

**What it fixes:**
- 🔴 Legal liability exposure (personal guarantees, "money back")
- 🔴 Geographic inaccuracies (missing 3 states)
- 🔴 First-person liability language
- 🔴 Imperative marketing commands

**Files modified:** 5
- `src/components/luxury/RiskReversalSection.tsx` (CRITICAL)
- `src/components/luxury/LuxuryHero.tsx` (CRITICAL)
- `src/components/FAQ.tsx`
- `src/components/Hero.tsx`
- `src/pages/Home.tsx`

**How to use:**
1. Open Cursor
2. Open file: `CURSOR_PROMPT_CRITICAL.md`
3. Copy entire contents
4. Paste into Cursor Chat
5. Hit Enter
6. Review changes
7. Accept all (or review individually)
8. Test the site

---

### Step 2: Professional Tone (20 minutes) - DO THIS SECOND
**File:** `CURSOR_PROMPT_PROFESSIONAL_TONE.md`

**What it fixes:**
- 🟡 Casual/conversational language
- 🟡 Defensive marketing phrases
- 🟡 Vague platitudes
- 🟡 Unverified credentials

**Files modified:** 5
- `src/components/HowItWorks.tsx`
- `src/components/About.tsx`
- `src/components/OurCarriers.tsx`
- `src/components/luxury/AuthoritySection.tsx`
- `src/components/FAQ.tsx` (additional updates)

**How to use:**
1. Open Cursor
2. Open file: `CURSOR_PROMPT_PROFESSIONAL_TONE.md`
3. Copy entire contents
4. Paste into Cursor Chat
5. Hit Enter
6. Review changes
7. Accept all
8. Test the site

---

## 🎯 What You Get

### Before
- 3,200+ words of marketing copy
- Personal guarantees creating liability
- Outdated state information (missing AZ, TX, GA)
- First-person promises ("I guarantee")
- Defensive language ("no hidden fees")
- Marketing imperatives ("Stop overpaying")

### After
- ~1,600 words (50% reduction)
- Professional service commitments
- Accurate 6-state coverage info
- Institutional voice throughout
- Confident, factual statements
- Professional declarative tone

---

## 🔍 Testing Checklist

After implementing each prompt, verify:

### Critical Fixes Verification
- [ ] Open `src/components/luxury/RiskReversalSection.tsx`
- [ ] Search for "guarantee" - should find ZERO instances
- [ ] Search for "money back" - should find ZERO instances
- [ ] Search for "I'll make it right" - should find ZERO instances
- [ ] Open `src/components/FAQ.tsx`
- [ ] Check states listed: should show FL, MI, NC, AZ, TX, GA
- [ ] Run dev server: `npm run dev`
- [ ] Check homepage renders correctly
- [ ] Check all sections display properly

### Professional Tone Verification
- [ ] Search entire project for "truly understand" - should be GONE
- [ ] Search for "no obligation" - should be REMOVED
- [ ] Search for "Stop overpaying" - should be GONE
- [ ] Check "How It Works" section shows "Enrollment Process"
- [ ] Check About section mentions all 6 states
- [ ] Verify all changes are TEXT ONLY (no layout changes)

---

## 🚀 Quick Commands

### Start Development Server
```bash
npm run dev
```
Then open: http://localhost:8080

### Check for Issues
```bash
# Search for problematic text
grep -r "guarantee" src/components/
grep -r "money back" src/components/
grep -r "Stop overpaying" src/components/
grep -r "I've helped" src/components/
```

### Build for Production
```bash
npm run build
```

---

## 💡 Cursor Tips

### Best Practices
1. **One prompt at a time** - Complete Critical before Professional Tone
2. **Review before accepting** - Check changes make sense
3. **Use Cursor's diff view** - See exactly what's changing
4. **Test after each prompt** - Don't wait until the end
5. **Keep dev server running** - See changes live

### If Something Goes Wrong
1. **Undo in Cursor**: `Cmd+Z` (Mac) or `Ctrl+Z` (Windows)
2. **Git reset**: `git checkout -- <file>` to reset individual file
3. **Start over**: `git reset --hard HEAD` to reset everything
4. **Review prompts**: Open the prompt file and manually verify changes

---

## 📊 Expected Results

### Word Count Reduction
| Section | Before | After | Savings |
|---------|--------|-------|---------|
| Risk Reversal | 89 words | 22 words | 75% |
| Luxury Hero | 73 words | 32 words | 56% |
| How It Works | 52 words | 15 words | 71% |
| FAQ (avg answer) | 35 words | 15 words | 57% |
| About | 34 words | 18 words | 47% |

### Legal Compliance
- ✅ Zero personal guarantees
- ✅ Zero refund promises
- ✅ Zero first-person liability
- ✅ Professional service commitments only

### Geographic Accuracy
- ✅ All mentions show 6 states (FL, MI, NC, AZ, TX, GA)
- ✅ No "expanding nationwide" language
- ✅ No "across the country" claims

### Professional Tone
- ✅ Institutional voice throughout
- ✅ Credential-forward positioning
- ✅ Factual, verifiable claims
- ✅ No defensive or emotional language

---

## ⏱️ Time Estimate

### Total Time: ~50 minutes

- **Critical Fixes**: 30 minutes
  - Copy prompt: 1 min
  - Cursor processing: 5 min
  - Review changes: 10 min
  - Testing: 14 min

- **Professional Tone**: 20 minutes
  - Copy prompt: 1 min
  - Cursor processing: 4 min
  - Review changes: 8 min
  - Testing: 7 min

---

## 🎓 What Cursor Will Do

### Automatic Actions
1. **Find exact code blocks** specified in prompts
2. **Replace with new text** exactly as specified
3. **Preserve all formatting** and indentation
4. **Maintain all imports** and structure
5. **Keep all styles** and classNames
6. **Leave functionality** completely intact

### What It Won't Do
- ❌ Change layouts or styles
- ❌ Modify component structure
- ❌ Alter functionality
- ❌ Remove or add components
- ❌ Change routing
- ❌ Modify build configuration

---

## 🆘 Troubleshooting

### "Code not found" Error
**Problem:** Cursor can't find the exact text  
**Solution:** 
1. Open the file manually
2. Verify the line numbers in the prompt
3. Copy just that section's prompt to Cursor
4. Check for any recent code changes

### Changes Don't Appear
**Problem:** Dev server showing old content  
**Solution:**
1. Stop dev server (`Ctrl+C`)
2. Clear cache: `rm -rf node_modules/.vite`
3. Restart: `npm run dev`
4. Hard refresh browser: `Cmd+Shift+R` or `Ctrl+Shift+R`

### Too Many Changes at Once
**Problem:** Cursor making unexpected changes  
**Solution:**
1. Undo all (`Cmd+Z` multiple times)
2. Copy just ONE file's changes from prompt
3. Apply one file at a time
4. Test each individually

---

## ✅ Final Checklist

After completing both prompts:

- [ ] All changes are text-only
- [ ] No layout or styling modified
- [ ] No component structure changed
- [ ] Dev server runs without errors
- [ ] Homepage loads correctly
- [ ] All sections render properly
- [ ] No console errors in browser
- [ ] Mobile view still works
- [ ] All buttons/links functional
- [ ] Ready to commit changes

---

## 📝 Commit Message Template

After successful implementation:

```bash
git add .
git commit -m "content: Professionalize homepage copy and remove legal liability

Critical changes:
- Remove personal guarantees and 'money back' promises
- Update geographic coverage to all 6 licensed states
- Convert first-person to institutional voice
- Remove imperative marketing commands

Professional improvements:
- Replace casual language with professional terminology
- Remove defensive marketing phrases
- Update credentials to verifiable facts
- Reduce word count by 50% (3,200 → 1,600 words)

Files modified:
- src/components/luxury/RiskReversalSection.tsx
- src/components/luxury/LuxuryHero.tsx
- src/components/luxury/AuthoritySection.tsx
- src/components/FAQ.tsx
- src/components/HowItWorks.tsx
- src/components/About.tsx
- src/components/OurCarriers.tsx
- src/components/Hero.tsx
- src/pages/Home.tsx

Legal compliance verified. Text-only changes. No layout impact."
```

---

**🎯 Ready to start? Open `CURSOR_PROMPT_CRITICAL.md` and follow Step 1!**
