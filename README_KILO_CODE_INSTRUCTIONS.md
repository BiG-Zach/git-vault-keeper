# 🚀 Quick Start: Execute Kilo Code Prompt

## ⚡ **3-Step Process to Fix Dev Server & Verify Blog Post**

---

## 📋 **STEP 1: Locate the Prompt File**

**File Name**: `KILO_CODE_PROMPT_DEV_SERVER_FIX.md`  
**Location**: `/home/user/webapp/KILO_CODE_PROMPT_DEV_SERVER_FIX.md`  
**Size**: ~11 KB (comprehensive instructions)

---

## 📝 **STEP 2: Copy the Entire Prompt**

### **Option A: Using Command Line**
```bash
cat /home/user/webapp/KILO_CODE_PROMPT_DEV_SERVER_FIX.md
```
Then select all text and copy to clipboard.

### **Option B: Using File Viewer**
1. Open the file in your text editor
2. Select all (Ctrl+A / Cmd+A)
3. Copy (Ctrl+C / Cmd+C)

---

## 🎯 **STEP 3: Paste into Kilo Code**

1. **Open Kilo Code interface**
2. **Paste the entire prompt** (all contents from the file)
3. **Press Enter** to execute
4. **Wait 3-5 minutes** for completion

---

## ✅ **What Happens Automatically**

The Kilo Code AI will:

1. ✅ **Fix Vite Configuration**
   - Add `allowedHosts` for sandbox domains
   - Update `vite.config.ts`

2. ✅ **Restart Dev Server**
   - Kill old processes
   - Start fresh on port 8080
   - Verify accessibility

3. ✅ **Get Public URL**
   - Use GetServiceUrl tool
   - Provide working sandbox URL

4. ✅ **Verify Blog Post Updates**
   - Check 2025 URL loads
   - Test 2024 → 2025 redirect
   - Validate title/date changes

5. ✅ **Test Multimedia**
   - Verify `MultimediaOverview` component
   - Check Google Drive URLs
   - Confirm audio/video players

6. ✅ **Validate SEO**
   - Check FAQ schema implementation
   - Count internal links (should be 5+)
   - Verify structured data

7. ✅ **Run Quality Checks**
   - TypeScript: `npm run type-check`
   - ESLint: `npm run lint`
   - Browser test: Playwright

8. ✅ **Create Report**
   - Generate `DEV_SERVER_VERIFICATION_RESULTS.md`
   - Document all findings
   - Provide public URL

9. ✅ **Deliver Results**
   - Working sandbox URL
   - Verification checklist
   - Status summary

---

## 🎁 **What You'll Receive**

### **1. Working Public URL**
```
https://8080-[sandbox-id].sandbox.novita.ai/blog/term-vs-whole-life-insurance-2025
```

### **2. Verification Report**
File: `DEV_SERVER_VERIFICATION_RESULTS.md`
- ✅ All tasks completed
- ✅ Quality checks passed
- ✅ URLs working
- ✅ Multimedia functional

### **3. Status Update**
- Server status
- All URLs tested
- Multimedia verified
- No errors found

---

## 🧪 **Manual Testing (After Kilo Code Completes)**

Once you have the public URL, test these:

### **URL Tests**
1. **New 2025 URL**: Should load article
   ```
   https://[sandbox-url]/blog/term-vs-whole-life-insurance-2025
   ```

2. **Old 2024 URL**: Should redirect to 2025
   ```
   https://[sandbox-url]/blog/term-vs-whole-life-insurance-2024
   ```

### **Content Tests**
- [ ] Title shows "2025" (not 2024)
- [ ] Last updated: October 19, 2025
- [ ] 2025 market statistics visible
- [ ] Cost comparison section present

### **Multimedia Tests**
- [ ] Audio player visible
- [ ] Audio plays when clicked
- [ ] Video player visible
- [ ] Video plays when clicked

### **SEO Tests**
- [ ] View page source
- [ ] Search for "FAQPage"
- [ ] Verify 5 FAQ questions present
- [ ] Check internal links clickable

---

## 📚 **Reference Documents**

### **For You (User)**
1. **This File**: Quick start instructions
2. **EXECUTIVE_SUMMARY.md**: High-level overview
3. **PROJECT_STATUS_SUMMARY.md**: Detailed status

### **For Claude (AI)**
1. **KILO_CODE_PROMPT_DEV_SERVER_FIX.md**: Execution prompt
2. **FINAL_PROMPT_READY_TO_EXECUTE.md**: Original master prompt

---

## 🆘 **Troubleshooting**

### **If Kilo Code Fails**

**Issue 1**: "Cannot find file"
- **Solution**: Use absolute path `/home/user/webapp/KILO_CODE_PROMPT_DEV_SERVER_FIX.md`

**Issue 2**: "Server still blocked"
- **Solution**: Check `vite.config.ts` has `allowedHosts` added
- **Fallback**: Manually add the configuration

**Issue 3**: "Multimedia not loading"
- **Solution**: Check browser console for CORS errors
- **Fallback**: Google Drive files may need permission adjustment

---

## 🎯 **Success Criteria**

You'll know it worked when:

✅ Public URL loads without "Blocked request" error  
✅ Article shows "2025" in title  
✅ Audio player is visible and functional  
✅ Video player is visible and functional  
✅ Old 2024 URL redirects to 2025  
✅ No console errors in browser  

---

## ⏱️ **Timeline**

- **Kilo Code Execution**: 3-5 minutes
- **Manual Testing**: 5-10 minutes
- **Total Time**: ~10-15 minutes

---

## 🎉 **Ready to Execute?**

### **Copy this entire file and paste into Kilo Code**:

```
/home/user/webapp/KILO_CODE_PROMPT_DEV_SERVER_FIX.md
```

**That's it!** The AI handles the rest. 🚀

---

## 💡 **Pro Tips**

1. **Don't Edit the Prompt**: Copy it exactly as-is
2. **Wait for Completion**: Don't interrupt the process
3. **Save the URL**: Bookmark the public sandbox URL
4. **Test Immediately**: URLs may expire after sandbox timeout

---

## 📞 **Need Help?**

All documentation is in `/home/user/webapp/`:
- `README_KILO_CODE_INSTRUCTIONS.md` (this file)
- `EXECUTIVE_SUMMARY.md`
- `PROJECT_STATUS_SUMMARY.md`
- `KILO_CODE_PROMPT_DEV_SERVER_FIX.md`

---

**Good luck! The hard work is done—now just execute and verify!** ✨
