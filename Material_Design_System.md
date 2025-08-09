Material Design 3 Design System - Essential Implementation Guide
Quick Start
This design system provides everything you need to refactor your web app to Material Design 3. Copy the relevant code blocks and adapt them to your needs.

1. Foundation Setup
1.1 Install Base CSS
Add this to your main CSS file or <head>:
```css
/* Material Design 3 - Core Variables */
:root {
  /* Primary Colors */
  --md-primary: #6750A4;
  --md-on-primary: #FFFFFF;
  --md-primary-container: #EADDFF;
  --md-on-primary-container: #21005D;
  
  /* Secondary Colors */
  --md-secondary: #625B71;
  --md-on-secondary: #FFFFFF;
  --md-secondary-container: #E8DEF8;
  --md-on-secondary-container: #1D192B;
  
  /* Error Colors */
  --md-error: #BA1A1A;
  --md-on-error: #FFFFFF;
  --md-error-container: #FFDAD6;
  --md-on-error-container: #410002;
  
  /* Surface Colors */
  --md-surface: #FFFBFE;
  --md-on-surface: #1C1B1F;
  --md-surface-variant: #E7E0EC;
  --md-on-surface-variant: #49454F;
  --md-outline: #79747E;
  --md-outline-variant: #CAC4D0;
  
  /* Background */
  --md-background: #FFFBFE;
  --md-on-background: #1C1B1F;
  
  /* Elevation Shadows */
  --md-elevation-1: 0 1px 2px rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15);
  --md-elevation-2: 0 1px 2px rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15);
  --md-elevation-3: 0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.3);
  
  /* Typography Scale */
  --md-headline-large: 400 32px/40px 'Roboto', sans-serif;
  --md-headline-medium: 400 28px/36px 'Roboto', sans-serif;
  --md-headline-small: 400 24px/32px 'Roboto', sans-serif;
  --md-title-large: 400 22px/28px 'Roboto', sans-serif;
  --md-title-medium: 500 16px/24px 'Roboto', sans-serif;
  --md-title-small: 500 14px/20px 'Roboto', sans-serif;
  --md-body-large: 400 16px/24px 'Roboto', sans-serif;
  --md-body-medium: 400 14px/20px 'Roboto', sans-serif;
  --md-body-small: 400 12px/16px 'Roboto', sans-serif;
  --md-label-large: 500 14px/20px 'Roboto', sans-serif;
  --md-label-medium: 500 12px/16px 'Roboto', sans-serif;
  --md-label-small: 500 11px/16px 'Roboto', sans-serif;
  
  /* Spacing (8dp grid) */
  --md-spacing-xs: 4px;
  --md-spacing-sm: 8px;
  --md-spacing-md: 16px;
  --md-spacing-lg: 24px;
  --md-spacing-xl: 32px;
  --md-spacing-xxl: 48px;
  
  /* Border Radius */
  --md-radius-xs: 4px;
  --md-radius-sm: 8px;
  --md-radius-md: 12px;
  --md-radius-lg: 16px;
  --md-radius-xl: 28px;
  --md-radius-full: 9999px;
  
  /* Transitions */
  --md-transition-fast: 200ms cubic-bezier(0.2, 0, 0, 1);
  --md-transition-medium: 300ms cubic-bezier(0.2, 0, 0, 1);
  --md-transition-slow: 400ms cubic-bezier(0.2, 0, 0, 1);
}

/* Dark Theme */
[data-theme="dark"] {
  --md-primary: #D0BCFF;
  --md-on-primary: #381E72;
  --md-primary-container: #4F378B;
  --md-on-primary-container: #EADDFF;
  
  --md-secondary: #CCC2DC;
  --md-on-secondary: #332D41;
  --md-secondary-container: #4A4458;
  --md-on-secondary-container: #E8DEF8;
  
  --md-surface: #1C1B1F;
  --md-on-surface: #E6E1E5;
  --md-surface-variant: #49454F;
  --md-on-surface-variant: #CAC4D0;
  --md-outline: #938F99;
  --md-outline-variant: #49454F;
  
  --md-background: #1C1B1F;
  --md-on-background: #E6E1E5;
}

/* Base Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: var(--md-body-large);
  background-color: var(--md-background);
  color: var(--md-on-background);
}
```

1.2 Add Google Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

2. Component Library
2.1 Buttons
```html
<!-- Button Types -->
<button class="md-button filled">Filled</button>
<button class="md-button outlined">Outlined</button>
<button class="md-button text">Text</button>
<button class="md-button elevated">Elevated</button>
<button class="md-button tonal">Tonal</button>

<!-- With Icons -->
<button class="md-button filled">
  <span class="material-icons">add</span>
  With Icon
</button>
```

```css
/* Button Base */
.md-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  padding: 0 24px;
  border: none;
  border-radius: var(--md-radius-full);
  font: var(--md-label-large);
  cursor: pointer;
  transition: var(--md-transition-fast);
  text-transform: none;
  text-decoration: none;
  overflow: hidden;
}

/* Filled Button */
.md-button.filled {
  background-color: var(--md-primary);
  color: var(--md-on-primary);
}

.md-button.filled:hover {
  box-shadow: var(--md-elevation-1);
  opacity: 0.92;
}

.md-button.filled:active {
  opacity: 0.88;
}

.md-button.filled:disabled {
  background-color: rgba(var(--md-on-surface), 0.12);
  color: rgba(var(--md-on-surface), 0.38);
  cursor: not-allowed;
}

/* Outlined Button */
.md-button.outlined {
  background-color: transparent;
  color: var(--md-primary);
  border: 1px solid var(--md-outline);
}

.md-button.outlined:hover {
  background-color: rgba(var(--md-primary), 0.08);
}

/* Text Button */
.md-button.text {
  background-color: transparent;
  color: var(--md-primary);
  padding: 0 12px;
}

.md-button.text:hover {
  background-color: rgba(var(--md-primary), 0.08);
}

/* Elevated Button */
.md-button.elevated {
  background-color: var(--md-surface);
  color: var(--md-primary);
  box-shadow: var(--md-elevation-1);
}

.md-button.elevated:hover {
  box-shadow: var(--md-elevation-2);
}

/* Tonal Button */
.md-button.tonal {
  background-color: var(--md-secondary-container);
  color: var(--md-on-secondary-container);
}

.md-button.tonal:hover {
  box-shadow: var(--md-elevation-1);
  opacity: 0.92;
}

/* Icon in button */
.md-button .material-icons {
  font-size: 18px;
}
```

2.2 Cards
```html
<!-- Basic Card -->
<div class="md-card">
  <img class="md-card-media" src="image.jpg" alt="Card image">
  <div class="md-card-content">
    <h3 class="md-card-title">Card Title</h3>
    <p class="md-card-text">Supporting text for the card goes here.</p>
  </div>
  <div class="md-card-actions">
    <button class="md-button text">Action 1</button>
    <button class="md-button text">Action 2</button>
  </div>
</div>

<!-- Variants -->
<div class="md-card elevated">...</div>
<div class="md-card outlined">...</div>
```

```css
/* Card Base */
.md-card {
  border-radius: var(--md-radius-md);
  background-color: var(--md-surface);
  overflow: hidden;
  transition: var(--md-transition-fast);
}

/* Card Variants */
.md-card.elevated {
  box-shadow: var(--md-elevation-1);
}

.md-card.elevated:hover {
  box-shadow: var(--md-elevation-2);
}

.md-card.outlined {
  border: 1px solid var(--md-outline-variant);
}

/* Card Content */
.md-card-media {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.md-card-content {
  padding: var(--md-spacing-md);
}

.md-card-title {
  font: var(--md-headline-small);
  color: var(--md-on-surface);
  margin-bottom: var(--md-spacing-xs);
}

.md-card-text {
  font: var(--md-body-medium);
  color: var(--md-on-surface-variant);
}

.md-card-actions {
  padding: var(--md-spacing-sm);
  display: flex;
  gap: var(--md-spacing-sm);
  justify-content: flex-end;
}
```

2.3 Text Fields
```html
<!-- Filled Text Field -->
<div class="md-textfield filled">
  <input type="text" id="field1" placeholder=" " required>
  <label for="field1">Label</label>
  <span class="supporting-text">Supporting text</span>
</div>

<!-- Outlined Text Field -->
<div class="md-textfield outlined">
  <input type="text" id="field2" placeholder=" " required>
  <label for="field2">Label</label>
  <span class="supporting-text">Supporting text</span>
</div>

<!-- With Icons -->
<div class="md-textfield outlined">
  <span class="material-icons leading">search</span>
  <input type="text" id="field3" placeholder=" ">
  <label for="field3">Search</label>
</div>
```

```css
/* Text Field Base */
.md-textfield {
  position: relative;
  display: inline-block;
  min-width: 280px;
  margin-bottom: var(--md-spacing-md);
}

.md-textfield input {
  width: 100%;
  height: 56px;
  padding: 20px 16px 8px;
  font: var(--md-body-large);
  border: none;
  outline: none;
  background: transparent;
  color: var(--md-on-surface);
}

.md-textfield label {
  position: absolute;
  left: 16px;
  top: 16px;
  font: var(--md-body-large);
  color: var(--md-on-surface-variant);
  pointer-events: none;
  transition: var(--md-transition-fast);
}

/* Filled Variant */
.md-textfield.filled {
  background-color: var(--md-surface-variant);
  border-radius: var(--md-radius-xs) var(--md-radius-xs) 0 0;
  border-bottom: 1px solid var(--md-on-surface-variant);
}

.md-textfield.filled:focus-within {
  border-bottom: 2px solid var(--md-primary);
}

/* Outlined Variant */
.md-textfield.outlined {
  background-color: transparent;
}

.md-textfield.outlined input {
  border: 1px solid var(--md-outline);
  border-radius: var(--md-radius-xs);
}

.md-textfield.outlined:focus-within input {
  border: 2px solid var(--md-primary);
  padding: 19px 15px 7px;
}

/* Floating Label */
.md-textfield input:focus ~ label,
.md-textfield input:not(:placeholder-shown) ~ label {
  top: 8px;
  font: var(--md-body-small);
  color: var(--md-primary);
}

.md-textfield.outlined input:focus ~ label,
.md-textfield.outlined input:not(:placeholder-shown) ~ label {
  top: -8px;
  left: 12px;
  padding: 0 4px;
  background-color: var(--md-surface);
}

/* Supporting Text */
.md-textfield .supporting-text {
  display: block;
  padding: 4px 16px 0;
  font: var(--md-body-small);
  color: var(--md-on-surface-variant);
}

/* Icons */
.md-textfield .material-icons {
  position: absolute;
  top: 16px;
  color: var(--md-on-surface-variant);
}

.md-textfield .material-icons.leading {
  left: 12px;
}

.md-textfield .material-icons.trailing {
  right: 12px;
}

.md-textfield .material-icons ~ input {
  padding-left: 48px;
}

.md-textfield .material-icons ~ label {
  left: 48px;
}
```

2.4 Navigation
```html
<!-- Top App Bar -->
<header class="md-top-app-bar">
  <button class="md-icon-button">
    <span class="material-icons">menu</span>
  </button>
  <h1 class="md-top-app-bar-title">Page Title</h1>
  <div class="md-top-app-bar-actions">
    <button class="md-icon-button">
      <span class="material-icons">search</span>
    </button>
    <button class="md-icon-button">
      <span class="material-icons">more_vert</span>
    </button>
  </div>
</header>

<!-- Navigation Rail -->
<nav class="md-nav-rail">
  <button class="md-fab">
    <span class="material-icons">edit</span>
  </button>
  <a class="md-nav-item active" href="#">
    <span class="material-icons">home</span>
    <span>Home</span>
  </a>
  <a class="md-nav-item" href="#">
    <span class="material-icons">search</span>
    <span>Search</span>
  </a>
  <a class="md-nav-item" href="#">
    <span class="material-icons">favorite</span>
    <span>Favorites</span>
  </a>
</nav>

<!-- Bottom Navigation -->
<nav class="md-bottom-nav">
  <a class="md-bottom-nav-item active" href="#">
    <span class="material-icons">home</span>
    <span>Home</span>
  </a>
  <a class="md-bottom-nav-item" href="#">
    <span class="material-icons">explore</span>
    <span>Explore</span>
  </a>
  <a class="md-bottom-nav-item" href="#">
    <span class="material-icons">bookmark</span>
    <span>Saved</span>
  </a>
  <a class="md-bottom-nav-item" href="#">
    <span class="material-icons">person</span>
    <span>Profile</span>
  </a>
</nav>
```

```css
/* Top App Bar */
.md-top-app-bar {
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 var(--md-spacing-xs);
  background-color: var(--md-surface);
  color: var(--md-on-surface);
}

.md-top-app-bar-title {
  flex: 1;
  font: var(--md-title-large);
  margin: 0 var(--md-spacing-md);
}

.md-top-app-bar-actions {
  display: flex;
  gap: var(--md-spacing-xs);
}

/* Icon Button */
.md-icon-button {
  width: 48px;
  height: 48px;
  border: none;
  border-radius: var(--md-radius-full);
  background: transparent;
  color: var(--md-on-surface-variant);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--md-transition-fast);
}

.md-icon-button:hover {
  background-color: rgba(var(--md-on-surface), 0.08);
}

/* FAB */
.md-fab {
  width: 56px;
  height: 56px;
  border: none;
  border-radius: var(--md-radius-lg);
  background-color: var(--md-primary-container);
  color: var(--md-on-primary-container);
  box-shadow: var(--md-elevation-3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--md-transition-fast);
}

.md-fab:hover {
  box-shadow: var(--md-elevation-3);
  opacity: 0.92;
}

/* Navigation Rail */
.md-nav-rail {
  width: 80px;
  background-color: var(--md-surface);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--md-spacing-md) 0;
  gap: var(--md-spacing-md);
}

.md-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 56px;
  border-radius: var(--md-radius-lg);
  color: var(--md-on-surface-variant);
  text-decoration: none;
  font: var(--md-label-medium);
  transition: var(--md-transition-fast);
}

.md-nav-item:hover {
  background-color: rgba(var(--md-on-surface), 0.08);
}

.md-nav-item.active {
  background-color: var(--md-secondary-container);
  color: var(--md-on-secondary-container);
}

.md-nav-item .material-icons {
  font-size: 24px;
  margin-bottom: 4px;
}

/* Bottom Navigation */
.md-bottom-nav {
  display: flex;
  height: 80px;
  background-color: var(--md-surface);
  box-shadow: 0 -1px 0 var(--md-outline-variant);
}

.md-bottom-nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: var(--md-on-surface-variant);
  text-decoration: none;
  font: var(--md-label-medium);
  transition: var(--md-transition-fast);
}

.md-bottom-nav-item.active {
  color: var(--md-primary);
}

.md-bottom-nav-item .material-icons {
  font-size: 24px;
}
```

2.5 Common UI Elements
```html
<!-- Chips -->
<div class="md-chip-group">
  <button class="md-chip">Filter 1</button>
  <button class="md-chip selected">Filter 2</button>
  <button class="md-chip">Filter 3</button>
</div>

<!-- Switch -->
<label class="md-switch">
  <input type="checkbox">
  <span class="md-switch-track"></span>
  <span class="md-switch-thumb"></span>
</label>

<!-- Progress Indicator -->
<div class="md-progress linear">
  <div class="md-progress-bar" style="width: 50%"></div>
</div>

<div class="md-progress circular">
  <svg viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="20" stroke-width="4" fill="none"/>
  </svg>
</div>

<!-- Snackbar -->
<div class="md-snackbar">
  <span>Message sent</span>
  <button class="md-button text">Undo</button>
</div>
```

```css
/* Chips */
.md-chip-group {
  display: flex;
  gap: var(--md-spacing-sm);
  flex-wrap: wrap;
}

.md-chip {
  height: 32px;
  padding: 0 var(--md-spacing-md);
  border: 1px solid var(--md-outline);
  border-radius: var(--md-radius-sm);
  background: transparent;
  color: var(--md-on-surface-variant);
  font: var(--md-label-large);
  cursor: pointer;
  transition: var(--md-transition-fast);
}

.md-chip:hover {
  background-color: rgba(var(--md-on-surface), 0.08);
}

.md-chip.selected {
  background-color: var(--md-secondary-container);
  color: var(--md-on-secondary-container);
  border-color: transparent;
}

/* Switch */
.md-switch {
  position: relative;
  display: inline-block;
  width: 52px;
  height: 32px;
}

.md-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.md-switch-track {
  position: absolute;
  inset: 0;
  background-color: var(--md-surface-variant);
  border: 2px solid var(--md-outline);
  border-radius: var(--md-radius-full);
  transition: var(--md-transition-fast);
}

.md-switch-thumb {
  position: absolute;
  height: 16px;
  width: 16px;
  left: 6px;
  top: 6px;
  background-color: var(--md-outline);
  border-radius: 50%;
  transition: var(--md-transition-fast);
}

.md-switch input:checked ~ .md-switch-track {
  background-color: var(--md-primary);
  border-color: var(--md-primary);
}

.md-switch input:checked ~ .md-switch-thumb {
  transform: translateX(20px);
  width: 24px;
  height: 24px;
  top: 2px;
  background-color: var(--md-on-primary);
}

/* Progress Indicators */
.md-progress.linear {
  height: 4px;
  background-color: var(--md-surface-variant);
  border-radius: var(--md-radius-full);
  overflow: hidden;
}

.md-progress-bar {
  height: 100%;
  background-color: var(--md-primary);
  transition: width var(--md-transition-medium);
}

.md-progress.circular {
  width: 48px;
  height: 48px;
  animation: rotate 1.4s linear infinite;
}

.md-progress.circular circle {
  stroke: var(--md-primary);
  stroke-dasharray: 126;
  stroke-dashoffset: 63;
  animation: dash 1.4s ease-in-out infinite;
}

@keyframes rotate {
  to { transform: rotate(360deg); }
}

@keyframes dash {
  0% { stroke-dashoffset: 126; }
  50% { stroke-dashoffset: 63; }
  100% { stroke-dashoffset: 126; }
}

/* Snackbar */
.md-snackbar {
  position: fixed;
  bottom: var(--md-spacing-md);
  left: var(--md-spacing-md);
  right: var(--md-spacing-md);
  max-width: 400px;
  background-color: var(--md-inverse-surface);
  color: var(--md-inverse-on-surface);
  padding: var(--md-spacing-md);
  border-radius: var(--md-radius-xs);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--md-elevation-3);
  font: var(--md-body-medium);
  animation: slide-up var(--md-transition-medium);
}

@keyframes slide-up {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

3. Layout System
3.1 Responsive Grid
```html
<!-- Container -->
<div class="md-container">
  <div class="md-grid">
    <div class="md-col-12 md-col-md-6 md-col-lg-4">Column 1</div>
    <div class="md-col-12 md-col-md-6 md-col-lg-4">Column 2</div>
    <div class="md-col-12 md-col-md-12 md-col-lg-4">Column 3</div>
  </div>
</div>
```

```css
/* Container */
.md-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--md-spacing-md);
}

/* Grid System */
.md-grid {
  display: grid;
  gap: var(--md-spacing-md);
  grid-template-columns: repeat(12, 1fr);
}

/* Column Spans */
[class*="md-col-"] {
  grid-column: span 12;
}

.md-col-1 { grid-column: span 1; }
.md-col-2 { grid-column: span 2; }
.md-col-3 { grid-column: span 3; }
.md-col-4 { grid-column: span 4; }
.md-col-5 { grid-column: span 5; }
.md-col-6 { grid-column: span 6; }
.md-col-7 { grid-column: span 7; }
.md-col-8 { grid-column: span 8; }
.md-col-9 { grid-column: span 9; }
.md-col-10 { grid-column: span 10; }
.md-col-11 { grid-column: span 11; }
.md-col-12 { grid-column: span 12; }

/* Tablet Breakpoint */
@media (min-width: 600px) {
  .md-col-md-1 { grid-column: span 1; }
  .md-col-md-2 { grid-column: span 2; }
  .md-col-md-3 { grid-column: span 3; }
  .md-col-md-4 { grid-column: span 4; }
  .md-col-md-5 { grid-column: span 5; }
  .md-col-md-6 { grid-column: span 6; }
  .md-col-md-7 { grid-column: span 7; }
  .md-col-md-8 { grid-column: span 8; }
  .md-col-md-9 { grid-column: span 9; }
  .md-col-md-10 { grid-column: span 10; }
  .md-col-md-11 { grid-column: span 11; }
  .md-col-md-12 { grid-column: span 12; }
}

/* Desktop Breakpoint */
@media (min-width: 1240px) {
  .md-col-lg-1 { grid-column: span 1; }
  .md-col-lg-2 { grid-column: span 2; }
  .md-col-lg-3 { grid-column: span 3; }
  .md-col-lg-4 { grid-column: span 4; }
  .md-col-lg-5 { grid-column: span 5; }
  .md-col-lg-6 { grid-column: span 6; }
  .md-col-lg-7 { grid-column: span 7; }
  .md-col-lg-8 { grid-column: span 8; }
  .md-col-lg-9 { grid-column: span 9; }
  .md-col-lg-10 { grid-column: span 10; }
  .md-col-lg-11 { grid-column: span 11; }
  .md-col-lg-12 { grid-column: span 12; }
}
```

4. Implementation Checklist

**Phase 1: Setup (Week 1)**
- [x] Add Material Design 3 CSS variables to your project
- [x] Include Google Fonts (Roboto)
- [ ] Set up dark theme toggle
- [x] Test color system across app

**Phase 2: Core Components (Week 2-3)**
- [x] Replace all buttons with MD3 buttons
- [ ] Update form inputs to MD3 text fields
- [x] Implement MD3 cards for content containers
- [ ] Add MD3 navigation components

**Phase 3: Layout & Spacing (Week 4)**
- [x] Apply 8dp grid system
- [x] Update all spacing to use MD3 tokens
- [ ] Implement responsive breakpoints
- [x] Update typography scale

**Phase 4: Polish (Week 5)**
- [x] Add elevation/shadow system
- [ ] Implement state layers (hover, focus, active)
- [x] Add motion/transitions
- [ ] Ensure accessibility (ARIA labels, keyboard navigation)

5. Common Patterns

**Form Example**
```html
<form class="md-form">
  <div class="md-textfield outlined">
    <input type="email" id="email" placeholder=" " required>
    <label for="email">Email</label>
  </div>
  
  <div class="md-textfield outlined">
    <input type="password" id="password" placeholder=" " required>
    <label for="password">Password</label>
  </div>
  
  <label class="md-switch">
    <input type="checkbox">
    <span class="md-switch-track"></span>
    <span class="md-switch-thumb"></span>
    Remember me
  </label>
  
  <div class="md-form-actions">
    <button type="submit" class="md-button filled">Sign In</button>
    <button type="button" class="md-button text">Forgot Password?</button>
  </div>
</form>
```

**Dashboard Layout**
```html
<div class="md-layout">
  <header class="md-top-app-bar">
    <!-- App bar content -->
  </header>
  
  <nav class="md-nav-rail">
    <!-- Navigation items -->
  </nav>
  
  <main class="md-content">
    <div class="md-container">
      <div class="md-grid">
        <!-- Dashboard cards -->
      </div>
    </div>
  </main>
</div>
```

```css
.md-layout {
  display: flex;
  min-height: 100vh;
}

.md-content {
  flex: 1;
  margin-left: 80px; /* Width of nav rail */
  margin-top: 64px; /* Height of app bar */
  padding: var(--md-spacing-lg);
}

.md-form-actions {
  display: flex;
  gap: var(--md-spacing-md);
  margin-top: var(--md-spacing-lg);
}
```

6. Quick Reference

**When to Use Each Component**

**Buttons:**
- Filled: Primary actions (Submit, Save)
- Outlined: Secondary actions (Cancel, Learn More)
- Text: Tertiary actions (Skip, Dismiss)
- Elevated: When you need visual separation
- Tonal: Alternative primary actions

**Cards:**
- Elevated: Interactive content, clickable items
- Outlined: Grouped content, lists
- Filled: Default container for content

**Text Fields:**
- Outlined: Most form inputs
- Filled: Dense forms, mobile interfaces

**Navigation:**
- Top App Bar: Main app header
- Navigation Rail: Desktop side navigation
- Bottom Navigation: Mobile primary navigation (3-5 items)
- Navigation Drawer: Complex navigation structures

**Accessibility Requirements**
- All interactive elements need :focus-visible states
- Use semantic HTML (`<button>`, `<nav>`, `<main>`)
- Include ARIA labels for icon-only buttons
- Ensure color contrast ratios meet WCAG AA standards
- Support keyboard navigation (Tab, Enter, Escape)

**Browser Support**
- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Use CSS custom properties (CSS variables)
- Flexbox and Grid layout support required
- For older browsers, provide fallbacks or use PostCSS

7. Migration Tips

**From Bootstrap/Other Frameworks**

**Replace Classes Gradually:**
- Start with buttons: `.btn` ’ `.md-button`
- Then forms: `.form-control` ’ `.md-textfield`
- Finally layout: `.container` ’ `.md-container`

**Color Migration:**
- Map your brand colors to MD3 color roles
- Use the Material Theme Builder: https://m3.material.io/theme-builder

**Component Mapping:**
- Bootstrap ’ Material Design 3
- `.btn-primary` ’ `.md-button.filled`
- `.btn-secondary` ’ `.md-button.outlined`
- `.card` ’ `.md-card`
- `.form-control` ’ `.md-textfield`
- `.navbar` ’ `.md-top-app-bar`

**Testing Your Implementation**

**Visual Regression Testing:**
- Screenshot before/after each component update
- Use tools like Percy or Chromatic

**Accessibility Testing:**
- Run axe DevTools
- Test keyboard navigation
- Check color contrast

**Performance Testing:**
- Monitor CSS file size
- Check paint/layout metrics
- Ensure smooth animations (60fps)

## Support & Resources

- **Material Design 3 Docs**: https://m3.material.io
- **Icons**: https://fonts.google.com/icons
- **Color Tool**: https://m3.material.io/theme-builder
- **Figma Kit**: Search "Material Design 3 Kit" in Figma Community