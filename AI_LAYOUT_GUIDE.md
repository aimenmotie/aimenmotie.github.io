# AI Layout Control Guide

This project has been optimized for **Direct Layout Swapping** via AI commands. To change the visual personality of the portfolio, you do not need to rewrite CSS files.

## How to Change the Layout
Simply modify the `SELECTED_LAYOUT` constant in `src/Config/Config.js`.

### Available Layout Options:
1.  `"academic"` (Default): Professional Academic Red, high-contrast dark/light modes.
2.  `"industrial"`: Steel Blue & Navy theme, focused on Industrial Chemical Engineering.
3.  `"modern_lab"`: Mint/Teal highlights with glassmorphism and clean off-white/slate backgrounds.

### Example Command to AI:
> "Change my layout to Industrial Steel."

**AI Action**: Update `src/Config/Config.js`:
```javascript
export const SELECTED_LAYOUT = "industrial";
```

## Adding New Layouts
New layouts can be registered in `src/Config/LayoutPresets.js`. Each preset requires a `light` and `dark` object with the following tokens:
- `bg`: Main background color.
- `highlight`: Primary accent color.
- `highlightRgb`: RGB triplet (e.g., "0, 91, 150").
- `titlePrimary`: Color for main text.
- `titleSecondary`: Color for sub-text.
- `bgGradient`: CSS gradient for the main container.

---
*Created by Antigravity (AI Coding Assistant)*
