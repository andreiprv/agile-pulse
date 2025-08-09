/**
 * Material Design 3 Color System for Agile Pulse
 * 
 * This file implements Material Design 3 color tokens and semantic mappings.
 * Based on Material Design 3 specifications with token-based approach.
 * 
 * Reference: https://m3.material.io/styles/color/system
 */

// Material Design 3 Color Palette - Core color values
export const MD3_PALETTE = {
  // Primary colors
  primary: '#6750A4',           // Material Purple
  onPrimary: '#FFFFFF',         // White
  primaryContainer: '#EADDFF',   // Light Purple
  onPrimaryContainer: '#21005D', // Dark Purple
  
  // Secondary colors
  secondary: '#625B71',          // Material Gray-Purple
  onSecondary: '#FFFFFF',        // White
  secondaryContainer: '#E8DEF8', // Light Gray-Purple
  onSecondaryContainer: '#1D192B', // Dark Gray-Purple
  
  // Error colors
  error: '#BA1A1A',             // Material Red
  onError: '#FFFFFF',           // White
  errorContainer: '#FFDAD6',     // Light Red
  onErrorContainer: '#410002',   // Dark Red
  
  // Surface colors
  surface: '#FFFBFE',           // Off-white
  onSurface: '#1C1B1F',         // Dark Gray
  surfaceVariant: '#E7E0EC',    // Light Gray-Purple
  onSurfaceVariant: '#49454F',  // Medium Gray
  outline: '#79747E',           // Medium Gray
  outlineVariant: '#CAC4D0',    // Light Gray
  
  // Background
  background: '#FFFBFE',        // Off-white
  onBackground: '#1C1B1F',      // Dark Gray
  
  // Dark theme colors
  darkPrimary: '#D0BCFF',       // Light Purple
  darkOnPrimary: '#381E72',     // Dark Purple
  darkPrimaryContainer: '#4F378B', // Medium Purple
  darkOnPrimaryContainer: '#EADDFF', // Light Purple
  
  darkSecondary: '#CCC2DC',     // Light Gray-Purple
  darkOnSecondary: '#332D41',   // Dark Gray-Purple
  darkSecondaryContainer: '#4A4458', // Medium Gray-Purple
  darkOnSecondaryContainer: '#E8DEF8', // Light Gray-Purple
  
  darkSurface: '#1C1B1F',       // Dark Gray
  darkOnSurface: '#E6E1E5',     // Light Gray
  darkSurfaceVariant: '#49454F', // Medium Gray
  darkOnSurfaceVariant: '#CAC4D0', // Light Gray
  darkOutline: '#938F99',       // Medium Gray
  darkOutlineVariant: '#49454F', // Medium Gray
  
  darkBackground: '#1C1B1F',    // Dark Gray
  darkOnBackground: '#E6E1E5',  // Light Gray
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

// HSL versions of MD3 palette for CSS custom properties
export const MD3_PALETTE_HSL = {
  // Primary colors
  primary: hexToHsl(MD3_PALETTE.primary),
  onPrimary: hexToHsl(MD3_PALETTE.onPrimary),
  primaryContainer: hexToHsl(MD3_PALETTE.primaryContainer),
  onPrimaryContainer: hexToHsl(MD3_PALETTE.onPrimaryContainer),
  
  // Secondary colors
  secondary: hexToHsl(MD3_PALETTE.secondary),
  onSecondary: hexToHsl(MD3_PALETTE.onSecondary),
  secondaryContainer: hexToHsl(MD3_PALETTE.secondaryContainer),
  onSecondaryContainer: hexToHsl(MD3_PALETTE.onSecondaryContainer),
  
  // Error colors
  error: hexToHsl(MD3_PALETTE.error),
  onError: hexToHsl(MD3_PALETTE.onError),
  errorContainer: hexToHsl(MD3_PALETTE.errorContainer),
  onErrorContainer: hexToHsl(MD3_PALETTE.onErrorContainer),
  
  // Surface colors
  surface: hexToHsl(MD3_PALETTE.surface),
  onSurface: hexToHsl(MD3_PALETTE.onSurface),
  surfaceVariant: hexToHsl(MD3_PALETTE.surfaceVariant),
  onSurfaceVariant: hexToHsl(MD3_PALETTE.onSurfaceVariant),
  outline: hexToHsl(MD3_PALETTE.outline),
  outlineVariant: hexToHsl(MD3_PALETTE.outlineVariant),
  
  // Background
  background: hexToHsl(MD3_PALETTE.background),
  onBackground: hexToHsl(MD3_PALETTE.onBackground),
} as const;

// Material Design 3 semantic color mappings
export const MD3_SEMANTIC_COLORS = {
  // Core UI colors using MD3 tokens
  background: {
    primary: MD3_PALETTE.background,
    secondary: MD3_PALETTE.surface,
    accent: MD3_PALETTE.primaryContainer,
  },
  
  text: {
    primary: MD3_PALETTE.onBackground,
    secondary: MD3_PALETTE.onSurfaceVariant,
    inverse: MD3_PALETTE.onPrimary,
    muted: MD3_PALETTE.onSurfaceVariant,
  },
  
  interactive: {
    primary: MD3_PALETTE.primary,
    primaryHover: MD3_PALETTE.onPrimaryContainer,
    accent: MD3_PALETTE.primaryContainer,
    accentHover: MD3_PALETTE.onPrimaryContainer,
  },
  
  border: {
    default: MD3_PALETTE.outlineVariant,
    focus: MD3_PALETTE.primary,
    strong: MD3_PALETTE.outline,
  },
  
  // Retrospective-specific semantic colors using MD3 tokens
  retro: {
    positive: MD3_PALETTE.primary,         // "Start", "Liked", "Glad" - Primary color
    neutral: MD3_PALETTE.secondary,        // "Continue", "Learned", "Sad" - Secondary color  
    negative: MD3_PALETTE.error,           // "Stop", "Lacked", "Mad" - Error color
    highlight: MD3_PALETTE.primaryContainer, // Special emphasis - Primary container
    background: MD3_PALETTE.surface,       // Card backgrounds - Surface
  },
  
  // Status colors using MD3 error system
  status: {
    success: MD3_PALETTE.primary,          // Success using primary color
    warning: MD3_PALETTE.secondary,        // Warning using secondary color
    error: MD3_PALETTE.error,              // Error using MD3 error color
    info: MD3_PALETTE.surfaceVariant,      // Info using surface variant
  },
} as const;

// Material Design 3 CSS custom property mappings
export const MD3_CSS_VARIABLES = {
  // MD3 Core tokens
  '--md-primary': MD3_PALETTE_HSL.primary,
  '--md-on-primary': MD3_PALETTE_HSL.onPrimary,
  '--md-primary-container': MD3_PALETTE_HSL.primaryContainer,
  '--md-on-primary-container': MD3_PALETTE_HSL.onPrimaryContainer,
  '--md-secondary': MD3_PALETTE_HSL.secondary,
  '--md-on-secondary': MD3_PALETTE_HSL.onSecondary,
  '--md-secondary-container': MD3_PALETTE_HSL.secondaryContainer,
  '--md-on-secondary-container': MD3_PALETTE_HSL.onSecondaryContainer,
  '--md-error': MD3_PALETTE_HSL.error,
  '--md-on-error': MD3_PALETTE_HSL.onError,
  '--md-error-container': MD3_PALETTE_HSL.errorContainer,
  '--md-on-error-container': MD3_PALETTE_HSL.onErrorContainer,
  '--md-surface': MD3_PALETTE_HSL.surface,
  '--md-on-surface': MD3_PALETTE_HSL.onSurface,
  '--md-surface-variant': MD3_PALETTE_HSL.surfaceVariant,
  '--md-on-surface-variant': MD3_PALETTE_HSL.onSurfaceVariant,
  '--md-outline': MD3_PALETTE_HSL.outline,
  '--md-outline-variant': MD3_PALETTE_HSL.outlineVariant,
  '--md-background': MD3_PALETTE_HSL.background,
  '--md-on-background': MD3_PALETTE_HSL.onBackground,
  
  // Tailwind/shadcn compatibility (using CSS var references)
  '--background': 'var(--md-background)',
  '--foreground': 'var(--md-on-background)',
  '--card': 'var(--md-surface)',
  '--card-foreground': 'var(--md-on-surface)',
  '--popover': 'var(--md-surface)',
  '--popover-foreground': 'var(--md-on-surface)',
  '--primary': 'var(--md-primary)',
  '--primary-foreground': 'var(--md-on-primary)',
  '--secondary': 'var(--md-secondary-container)',
  '--secondary-foreground': 'var(--md-on-secondary-container)',
  '--muted': 'var(--md-surface-variant)',
  '--muted-foreground': 'var(--md-on-surface-variant)',
  '--accent': 'var(--md-primary-container)',
  '--accent-foreground': 'var(--md-on-primary-container)',
  '--destructive': 'var(--md-error)',
  '--destructive-foreground': 'var(--md-on-error)',
  '--border': 'var(--md-outline-variant)',
  '--input': 'var(--md-outline-variant)',
  '--ring': 'var(--md-primary)',
  
  // Retro-specific using MD3 tokens
  '--retro-positive': 'var(--md-primary)',
  '--retro-neutral': 'var(--md-secondary)',
  '--retro-negative': 'var(--md-error)',
  '--retro-highlight': 'var(--md-primary-container)',
  '--retro-card-bg': 'var(--md-surface)',
  
  // Legacy retro colors (mapped to MD3 system)
  '--retro-green': 'var(--md-primary)',
  '--retro-yellow': 'var(--md-secondary)',
  '--retro-red': 'var(--md-error)',
  '--retro-blue': 'var(--md-primary)',
  '--retro-purple': 'var(--md-secondary)',
  '--retro-orange': 'var(--md-primary-container)',
  
  // Sidebar using MD3 tokens
  '--sidebar-background': 'var(--md-surface)',
  '--sidebar-foreground': 'var(--md-on-surface)',
  '--sidebar-primary': 'var(--md-primary)',
  '--sidebar-primary-foreground': 'var(--md-on-primary)',
  '--sidebar-accent': 'var(--md-surface-variant)',
  '--sidebar-accent-foreground': 'var(--md-on-surface-variant)',
  '--sidebar-border': 'var(--md-outline-variant)',
  '--sidebar-ring': 'var(--md-primary)',
} as const;

// Material Design 3 spacing tokens (8dp grid)
export const MD3_SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
} as const;

// Material Design 3 border radius tokens
export const MD3_RADIUS = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '28px',
  full: '9999px',
} as const;

// Material Design 3 elevation tokens
export const MD3_ELEVATION = {
  1: '0 1px 2px rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)',
  2: '0 1px 2px rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15)',
  3: '0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.3)',
} as const;

// Material Design 3 transitions
export const MD3_TRANSITIONS = {
  fast: '200ms cubic-bezier(0.2, 0, 0, 1)',
  medium: '300ms cubic-bezier(0.2, 0, 0, 1)',
  slow: '400ms cubic-bezier(0.2, 0, 0, 1)',
} as const;

// Utility functions for components using MD3 colors
export const getRetroColumnColor = (columnType: string): string => {
  switch (columnType.toLowerCase()) {
    case 'start':
    case 'liked': 
    case 'glad':
      return MD3_SEMANTIC_COLORS.retro.positive;
    
    case 'continue':
    case 'learned':
    case 'sad':
      return MD3_SEMANTIC_COLORS.retro.neutral;
    
    case 'stop':
    case 'lacked':
    case 'mad':
      return MD3_SEMANTIC_COLORS.retro.negative;
    
    default:
      return MD3_SEMANTIC_COLORS.retro.highlight;
  }
};

// Type definitions for Material Design 3 system
export type MD3PaletteColor = keyof typeof MD3_PALETTE;
export type MD3SemanticColorCategory = keyof typeof MD3_SEMANTIC_COLORS;
export type MD3SpacingToken = keyof typeof MD3_SPACING;
export type MD3RadiusToken = keyof typeof MD3_RADIUS;
export type MD3ElevationLevel = keyof typeof MD3_ELEVATION;
export type MD3TransitionSpeed = keyof typeof MD3_TRANSITIONS;
export type RetroColumnType = 'start' | 'stop' | 'continue' | 'liked' | 'learned' | 'lacked' | 'longed' | 'glad' | 'sad' | 'mad';

// Main export object with Material Design 3 system
export const md3Colors = {
  palette: MD3_PALETTE,
  semantic: MD3_SEMANTIC_COLORS,
  css: MD3_CSS_VARIABLES,
  spacing: MD3_SPACING,
  radius: MD3_RADIUS,
  elevation: MD3_ELEVATION,
  transitions: MD3_TRANSITIONS,
  utils: {
    getRetroColumnColor,
    hexToHsl,
  },
} as const;

// Legacy exports for backward compatibility
export const colors = md3Colors;
export const PALETTE = MD3_PALETTE;
export const SEMANTIC_COLORS = MD3_SEMANTIC_COLORS;
export const CSS_VARIABLES = MD3_CSS_VARIABLES;