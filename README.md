## Mobile Styling Policy

**Scope:**  
This project uses a **component-scoped mobile CSS** approach to ensure mobile changes never break desktop layouts.

**Rules:**  
1. All mobile-specific styles live in `*.mobile.module.css` files located next to their corresponding component in `src/components/...`.
2. Do **not** modify existing desktop styles or markup.
3. Append mobile classes to JSX elements without replacing existing desktop classes.
4. All media queries use:
```css
@media (max-width: 767.98px) { … }


