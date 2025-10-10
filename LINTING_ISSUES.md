# Linting Issues to Fix

This document tracks the 22 ESLint errors that need to be fixed for full compliance.

## Summary

- **Total Issues**: 128 (22 errors, 106 warnings)
- **Status**: Non-blocking in CI (continue-on-error)
- **Priority**: Medium (fix incrementally)

---

## 🔴 Critical Errors (22)

### 1. React Hooks Violations

#### `src/components/about/LicensingAndNetworks.tsx` (3 errors)
**Issue**: Components created during render
```typescript
// ❌ Bad: Creating component inside render
const Wrap: React.FC<...> = ({ children, delay = 0 }) => ...

// ✅ Fix: Move component outside
const Wrap: React.FC<...> = ({ children, delay = 0 }) => {
  // component body
};
// Then declare it outside the main component
```

**Lines**: 43, 51, 59

---

#### `src/components/luxury/SocialProofTicker.tsx` (1 error)
**Issue**: Component created during render
```typescript
// ❌ Bad
const Icon = getIcon(current.type);

// ✅ Fix: Use useMemo or move logic
const Icon = useMemo(() => getIcon(current.type), [current.type]);
```

**Line**: 190

---

#### `src/components/luxury/EnhancedMap.tsx` (4 errors)
**Issue**: Accessing refs during render
```typescript
// ❌ Bad: Accessing ref in render
{hover && mapContainerRef.current && (
  <MapTooltip
    containerWidth={mapContainerRef.current.offsetWidth}
  />
)}

// ✅ Fix: Use state or useEffect
useEffect(() => {
  if (hover && mapContainerRef.current) {
    setTooltipDimensions({
      width: mapContainerRef.current.offsetWidth,
      height: mapContainerRef.current.offsetHeight
    });
  }
}, [hover]);
```

**Lines**: 282 (×2), 290, 291

---

#### `src/components/marketing/InteractiveMap.tsx` (4 errors)
**Issue**: Same as EnhancedMap - accessing refs during render

**Lines**: 221 (×2), 229, 230

---

#### `src/components/ui/MapTooltip.tsx` (1 error)
**Issue**: Calling setState directly in effect
```typescript
// ❌ Bad
useEffect(() => {
  setPosition({ x, y, arrowSide });
}, [x, y]);

// ✅ Fix: Use useMemo or derive state
const position = useMemo(() => ({
  x: clampedX,
  y: clampedY,
  arrowSide
}), [clampedX, clampedY, arrowSide]);
```

**Line**: 92

---

#### `src/components/chat/AskZachWidget.tsx` (1 error)
**Issue**: Calling impure function during render
```typescript
// ❌ Bad
const userMessage: ChatMessage = {
  id: Date.now().toString(),
  ...
};

// ✅ Fix: Use crypto.randomUUID() or move to handler
const userMessage: ChatMessage = {
  id: crypto.randomUUID(),
  ...
};
```

**Line**: 35

---

#### `src/pages/states/[code].tsx` (2 errors)
**Issue**: 1. Impure function call, 2. Hook called conditionally
```typescript
// ❌ Bad
const waitlistCount = Math.floor(Math.random() * 500) + 200;

// ✅ Fix: Use useState to maintain stable value
const [waitlistCount] = useState(() => Math.floor(Math.random() * 500) + 200);
```

**Lines**: 229, 572

---

### 2. Code Quality Errors

#### `scripts/tunnel.js` (1 error)
**Issue**: Unused eslint-disable directive
```javascript
// ❌ Remove this line if not needed
/* eslint-disable no-console */
```

**Line**: 2

---

#### `src/components/luxury/LuxuryHeroForm.tsx` (1 error)
**Issue**: Lexical declaration in case block
```typescript
// ❌ Bad
case 'some-case':
  const x = ...;

// ✅ Fix: Add braces
case 'some-case': {
  const x = ...;
  break;
}
```

**Line**: 71

---

#### `src/pages/quote/Quote.tsx` (2 errors)
**Issue**: Empty block statements
```typescript
// ❌ Bad
try {
  // ...
} catch (e) {}

// ✅ Fix: Add comment or handle error
try {
  // ...
} catch (e) {
  console.warn('Error:', e);
}
```

**Lines**: 28, 39

---

#### `src/test/vitest.d.ts` (2 errors)
**Issue**: Empty interface extending supertype
```typescript
// ❌ Bad
interface Assertion<T = any> extends TestingLibraryMatchers<T, void> {}

// ✅ Fix: Add @ts-expect-error or eslint-disable
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Assertion<T = any> extends TestingLibraryMatchers<T, void> {}
```

**Lines**: 5, 6

---

## ⚠️ Warnings (106)

Most warnings are:
1. **Unused variables/imports** - Safe to ignore or clean up
2. **`any` types** - Should be typed properly over time
3. **Fast refresh warnings** - Export patterns that prevent HMR

### Quick Wins

1. **Remove unused imports** (~50 warnings)
2. **Add `_ ` prefix to unused params** (~20 warnings)
3. **Type `any` parameters** (~25 warnings)

---

## 🎯 Recommended Approach

### Phase 1: Fix Critical Errors (High Impact)
1. Fix React Hooks violations (most critical)
2. Fix empty catch blocks
3. Fix ref access during render

### Phase 2: Clean Up Warnings (Low Priority)
1. Remove unused imports with auto-fix: `npm run lint:fix`
2. Gradually type `any` parameters
3. Add proper error handling

### Phase 3: Enable Strict Linting
1. Remove `continue-on-error` from CI
2. Set `--max-warnings 0`
3. Enable all React Hooks rules

---

## 📝 Notes

- **CI Impact**: Currently non-blocking (continue-on-error: true)
- **Auto-fixable**: ~1 error + many warnings via `npm run lint:fix`
- **Time Estimate**:
  - Critical errors: 2-3 hours
  - All warnings: 4-6 hours

---

**Last Updated**: 2025-10-09
**CI Status**: ⚠️ Passing with warnings
