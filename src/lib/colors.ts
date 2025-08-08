/**
 * Agile Pulse Color System
 * 
 * This file contains the centralized color palette and semantic color mappings.
 * To change the color scheme in the future, simply update the PALETTE object below.
 * 
 * Palette source: https://coolors.co/palette/000000-14213d-fca311-e5e5e5-ffffff
 */

// Base color palette - change these hex values to update the entire theme
export const PALETTE = {
  black: '#000000',      // Pure Black
  navy: '#14213D',       // Dark Navy Blue  
  orange: '#FCA311',     // Bright Orange/Amber
  lightGray: '#E5E5E5',  // Light Gray
  white: '#FFFFFF',      // Pure White
} as const;

// Convert hex to HSL for CSS custom properties
function hexToHsl(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: number, s: number, l: number;

  l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
      default: h = 0;
    }
    h /= 6;
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

// HSL versions of the palette for CSS custom properties
export const PALETTE_HSL = {
  black: hexToHsl(PALETTE.black),
  navy: hexToHsl(PALETTE.navy),
  orange: hexToHsl(PALETTE.orange),
  lightGray: hexToHsl(PALETTE.lightGray),
  white: hexToHsl(PALETTE.white),
} as const;

// Semantic color mappings - these define the meaning/purpose of colors
export const SEMANTIC_COLORS = {
  // Core UI colors
  background: {
    primary: PALETTE.white,
    secondary: PALETTE.lightGray,
    accent: PALETTE.navy,
  },
  
  text: {
    primary: PALETTE.black,
    secondary: PALETTE.navy,
    inverse: PALETTE.white,
    muted: PALETTE.navy,
  },
  
  interactive: {
    primary: PALETTE.navy,        // Main buttons, links
    primaryHover: PALETTE.black,  // Hover state for primary
    accent: PALETTE.orange,       // Call-to-action, highlights
    accentHover: PALETTE.black,   // Hover state for accent
  },
  
  border: {
    default: PALETTE.lightGray,
    focus: PALETTE.orange,
    strong: PALETTE.navy,
  },
  
  // Retrospective-specific semantic colors
  retro: {
    positive: PALETTE.orange,     // "Start", "Liked", "Glad"
    neutral: PALETTE.navy,        // "Continue", "Learned", "Sad"  
    negative: PALETTE.black,      // "Stop", "Lacked", "Mad"
    highlight: PALETTE.orange,    // Special emphasis
    background: PALETTE.white,    // Card backgrounds
  },
  
  // Status colors
  status: {
    success: PALETTE.orange,      // Using orange as our "positive" color
    warning: PALETTE.navy,        // Using navy as "caution"
    error: PALETTE.black,         // Using black as "negative"
    info: PALETTE.lightGray,      // Using gray for information
  },
} as const;

// CSS custom property names mapped to HSL values
export const CSS_VARIABLES = {
  // Core UI
  '--background': PALETTE_HSL.white,
  '--foreground': PALETTE_HSL.black,
  '--card': PALETTE_HSL.white,
  '--card-foreground': PALETTE_HSL.black,
  '--popover': PALETTE_HSL.white,
  '--popover-foreground': PALETTE_HSL.black,
  '--primary': PALETTE_HSL.navy,
  '--primary-foreground': PALETTE_HSL.white,
  '--secondary': PALETTE_HSL.lightGray,
  '--secondary-foreground': PALETTE_HSL.black,
  '--muted': PALETTE_HSL.lightGray,
  '--muted-foreground': PALETTE_HSL.navy,
  '--accent': PALETTE_HSL.orange,
  '--accent-foreground': PALETTE_HSL.black,
  '--border': PALETTE_HSL.lightGray,
  '--input': PALETTE_HSL.lightGray,
  '--ring': PALETTE_HSL.orange,
  
  // Retro-specific
  '--retro-positive': PALETTE_HSL.orange,
  '--retro-neutral': PALETTE_HSL.navy,
  '--retro-negative': PALETTE_HSL.black,
  '--retro-highlight': PALETTE_HSL.orange,
  '--retro-card-bg': PALETTE_HSL.white,
  
  // Legacy retro colors (mapped to new system)
  '--retro-green': PALETTE_HSL.orange,
  '--retro-yellow': PALETTE_HSL.navy,
  '--retro-red': PALETTE_HSL.black,
  '--retro-blue': PALETTE_HSL.navy,
  '--retro-purple': PALETTE_HSL.black,
  '--retro-orange': PALETTE_HSL.orange,
  
  // Sidebar
  '--sidebar-background': PALETTE_HSL.white,
  '--sidebar-foreground': PALETTE_HSL.black,
  '--sidebar-primary': PALETTE_HSL.navy,
  '--sidebar-primary-foreground': PALETTE_HSL.white,
  '--sidebar-accent': PALETTE_HSL.lightGray,
  '--sidebar-accent-foreground': PALETTE_HSL.black,
  '--sidebar-border': PALETTE_HSL.lightGray,
  '--sidebar-ring': PALETTE_HSL.orange,
} as const;

// Utility functions for components
export const getRetroColumnColor = (columnType: string): string => {
  switch (columnType.toLowerCase()) {
    case 'start':
    case 'liked': 
    case 'glad':
      return SEMANTIC_COLORS.retro.positive;
    
    case 'continue':
    case 'learned':
    case 'sad':
      return SEMANTIC_COLORS.retro.neutral;
    
    case 'stop':
    case 'lacked':
    case 'mad':
      return SEMANTIC_COLORS.retro.negative;
    
    default:
      return SEMANTIC_COLORS.retro.highlight;
  }
};

// Type definitions for better TypeScript support
export type PaletteColor = keyof typeof PALETTE;
export type SemanticColorCategory = keyof typeof SEMANTIC_COLORS;
export type RetroColumnType = 'start' | 'stop' | 'continue' | 'liked' | 'learned' | 'lacked' | 'longed' | 'glad' | 'sad' | 'mad';

// Export individual colors for easy importing
export const colors = {
  palette: PALETTE,
  semantic: SEMANTIC_COLORS,
  css: CSS_VARIABLES,
  utils: {
    getRetroColumnColor,
  },
} as const;
