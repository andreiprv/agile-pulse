# Agile Pulse Color System

## Overview

This document describes the centralized color management system for Agile Pulse. The system is designed to make future color palette changes easy and maintainable.

## Current Palette

The current color palette is based on: [Coolors Palette #000000-14213D-FCA311-E5E5E5-FFFFFF](https://coolors.co/palette/000000-14213d-fca311-e5e5e5-ffffff)

- **#000000** - Pure Black
- **#14213D** - Dark Navy Blue  
- **#FCA311** - Bright Orange/Amber
- **#E5E5E5** - Light Gray
- **#FFFFFF** - Pure White

## Architecture

### 1. Centralized Configuration (`src/lib/colors.ts`)

All color definitions are centralized in this single file:

```typescript
export const PALETTE = {
  black: '#000000',
  navy: '#14213D', 
  orange: '#FCA311',
  lightGray: '#E5E5E5',
  white: '#FFFFFF',
} as const;
```

### 2. Semantic Color Mapping

Colors are mapped to semantic purposes, not their literal colors:

```typescript
export const SEMANTIC_COLORS = {
  retro: {
    positive: PALETTE.orange,     // For "Start", "Liked", "Glad"
    neutral: PALETTE.navy,        // For "Continue", "Learned", "Sad"  
    negative: PALETTE.black,      // For "Stop", "Lacked", "Mad"
    highlight: PALETTE.orange,    // Special emphasis
  },
  // ... other semantic mappings
}
```

### 3. CSS Custom Properties (`src/index.css`)

CSS variables are automatically generated and documented:

```css
:root {
  --retro-positive: 39 100% 54%;  /* Orange - Positive actions */
  --retro-neutral: 216 69% 16%;   /* Navy - Neutral actions */
  --retro-negative: 0 0% 0%;      /* Black - Negative actions */
}
```

### 4. Tailwind Integration (`tailwind.config.ts`)

Tailwind classes are extended with semantic color names:

```typescript
colors: {
  retro: {
    positive: 'hsl(var(--retro-positive))',
    neutral: 'hsl(var(--retro-neutral))',
    negative: 'hsl(var(--retro-negative))',
  }
}
```

## Usage

### In Components

```typescript
import { colors } from '@/lib/colors';

// Use semantic colors
const columnColor = colors.semantic.retro.positive;

// Use utility functions
const dynamicColor = colors.utils.getRetroColumnColor('start');
```

### In CSS/Tailwind

```jsx
// Tailwind classes
<div className="bg-retro-positive text-retro-negative">

// CSS custom properties
<div style={{ backgroundColor: 'hsl(var(--retro-positive))' }}>
```

## Changing the Color Palette

To change the entire color scheme:

### 1. Update the Base Palette

Edit `src/lib/colors.ts`:

```typescript
export const PALETTE = {
  black: '#YOUR_NEW_BLACK',
  navy: '#YOUR_NEW_NAVY', 
  orange: '#YOUR_NEW_ORANGE',
  lightGray: '#YOUR_NEW_GRAY',
  white: '#YOUR_NEW_WHITE',
} as const;
```

### 2. Review Semantic Mappings (Optional)

Check if the semantic color mappings still make sense:

```typescript
export const SEMANTIC_COLORS = {
  retro: {
    positive: PALETTE.orange,  // Still appropriate?
    neutral: PALETTE.navy,     // Still appropriate?
    negative: PALETTE.black,   // Still appropriate?
  }
}
```

### 3. Test the Changes

- Run the application
- Check all UI components
- Verify readability and contrast
- Test both light and dark modes (if applicable)

That's it! The entire application will automatically use the new colors.

## Color Categories

### Core UI Colors
- **Background/Foreground**: Page backgrounds and main text
- **Primary**: Main action buttons, navigation
- **Secondary**: Supporting elements, secondary actions
- **Accent**: Highlights, call-to-action elements
- **Muted**: Disabled states, subtle elements

### Retrospective Colors
- **Positive**: Start doing, things we liked, glad
- **Neutral**: Continue doing, things we learned, sad
- **Negative**: Stop doing, things we lacked, mad
- **Highlight**: Special emphasis, focused elements

### System Colors
- **Border**: Element boundaries
- **Input**: Form field backgrounds
- **Ring**: Focus indicators
- **Destructive**: Error states, dangerous actions

## Best Practices

### Do's ✅
- Always use semantic color names (`retro.positive` not `orange`)
- Import colors from `@/lib/colors` in components
- Use CSS custom properties for dynamic styling
- Test color changes across all components
- Maintain accessibility standards (contrast ratios)

### Don'ts ❌
- Don't hardcode hex values in components
- Don't use literal color names in class names
- Don't modify CSS variables directly in `index.css`
- Don't bypass the color system for one-off colors

## TypeScript Support

The color system includes full TypeScript support:

```typescript
import { PaletteColor, RetroColumnType } from '@/lib/colors';

function getColumnColor(type: RetroColumnType): string {
  return colors.utils.getRetroColumnColor(type);
}
```

## Accessibility

All color combinations are designed with accessibility in mind:
- High contrast ratios between text and backgrounds
- Colors work for users with color vision deficiencies
- Semantic meaning doesn't rely solely on color

## Migration Guide

If you're updating from hardcoded colors:

1. Replace hex values with semantic color imports
2. Update Tailwind classes to use new color names
3. Replace CSS color values with custom properties
4. Test thoroughly across all components

## Future Considerations

- Dark mode support can be added by extending CSS custom properties
- Additional semantic categories can be added as needed
- Color validation tools can be integrated for accessibility checking
- Theme switching functionality can be built on top of this system
