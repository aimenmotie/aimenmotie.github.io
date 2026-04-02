/**
 * LayoutPresets.js
 * Central registry for different visual themes and layout tokens.
 * This allows the AI to swap layouts instantly by changing the SELECTED_LAYOUT in Config.js.
 */

export const THEMES = {
  // 1. THE CLASSIC ACADEMIC (Current)
  academic: {
    name: "Scholarly Red",
    light: {
      bg: "#ffffff",
      highlight: "#d32f2f",
      highlightRgb: "211, 47, 47",
      titlePrimary: "0,0,0",
      titleSecondary: "60, 60, 60",
      bgGradient: "linear-gradient(to bottom right, #f8f9fa 0%, #e0e0e0 100%)",
    },
    dark: {
      bg: "#1a1a1d",
      highlight: "#ff5252",
      highlightRgb: "255, 82, 82",
      titlePrimary: "255, 255, 255",
      titleSecondary: "160, 160, 160",
      bgGradient: "linear-gradient(to bottom right, #0f0f12 0%, #1a1a1d 100%)",
    }
  },

  // 2. THE INDUSTRIAL ENGINEER (Chemical Focus)
  industrial: {
    name: "Industrial Steel",
    light: {
      bg: "#f4f7f6",
      highlight: "#005b96",
      highlightRgb: "0, 91, 150",
      titlePrimary: "10, 10, 10",
      titleSecondary: "80, 80, 80",
      bgGradient: "linear-gradient(135deg, #f4f7f6 0%, #d1d9d9 100%)",
    },
    dark: {
      bg: "#0b1117",
      highlight: "#4cd3ff",
      highlightRgb: "76, 211, 255",
      titlePrimary: "220, 220, 220",
      titleSecondary: "140, 150, 160",
      bgGradient: "linear-gradient(to bottom right, #05080a 0%, #0b1117 100%)",
    }
  },

  // 3. THE MODERN LAB (High Contrast / Glass)
  modern_lab: {
    name: "Modern Lab",
    light: {
      bg: "#ffffff",
      highlight: "#00cec9",
      highlightRgb: "0, 206, 201",
      titlePrimary: "45, 52, 54",
      titleSecondary: "99, 110, 114",
      bgGradient: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
    },
    dark: {
      bg: "#1e272e",
      highlight: "#00d2d3",
      highlightRgb: "0, 210, 211",
      titlePrimary: "241, 242, 246",
      titleSecondary: "164, 176, 190",
      bgGradient: "linear-gradient(315deg, #1e272e 0%, #2f3640 74%)",
    }
  }
};

export const getActiveTheme = (layoutKey, isDark) => {
  const preset = THEMES[layoutKey] || THEMES.academic;
  return isDark ? preset.dark : preset.light;
};
