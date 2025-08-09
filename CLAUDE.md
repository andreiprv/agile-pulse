# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Agile Sprint Retrospective Tool - a React application for creating collaborative retrospective boards for agile teams. The application allows teams to create real-time collaborative boards using different retrospective templates (Start/Stop/Continue, Mad/Sad/Glad, 4 L's).

## Common Development Commands

```bash
# Install dependencies
npm i

# Start development server
npm run dev

# Build for production
npm run build

# Build in development mode
npm run build:dev

# Run linting
npm run lint

# Preview production build
npm run preview
```

## Tech Stack & Architecture

- **Frontend**: React 18 with TypeScript, Vite build tool
- **UI**: shadcn/ui components with Tailwind CSS, Material Design 3 design system
- **Routing**: React Router DOM with routes: `/` (landing), `/create` (board creation), `/board/:boardId` (board view)
- **State Management**: TanStack Query for server state with optimistic updates, React hooks for local state
- **Database**: Supabase (PostgreSQL) with real-time subscriptions
- **Authentication**: Session-based with auto-generated session IDs (no user accounts yet)
- **Styling**: Material Design 3 color system with centralized token management

## Key Components Architecture

### Application Structure
- `App.tsx`: Root component with routing, query client, and toast providers
- `pages/Landing.tsx`: Marketing landing page with feature highlights
- `pages/CreateBoard.tsx`: Board creation page with template selection
- `pages/Index.tsx`: Deprecated (kept for compatibility)
- `pages/Board.tsx`: Individual board view with real-time collaboration
- `components/shared/Navigation.tsx`: Consistent header navigation across pages
- `components/retro/`: Retrospective-specific components
  - `RetroBoard`: Main board container with real-time subscriptions
  - `RetroColumn`: Column component for each retrospective category
  - `RetroCard`: Individual card with voting, editing, and deletion
  - `BoardHeader`: Board controls (voting, visibility, locking, timer)

### Database Integration
- Supabase client configured in `src/integrations/supabase/client.ts` (uses environment variables)
- Real-time subscriptions for live collaboration on cards and votes
- Optimistic updates for instant UI feedback (card operations appear immediately)
- Main tables: `boards`, `retro_cards`, `votes`, `board_participants`
- Board participants are tracked with session IDs and last-seen timestamps
- Polling interval reduced to 2 seconds for better real-time sync

### Real-time Features
- Live card updates using Supabase real-time subscriptions
- Voting system with activation control (Start/Stop Voting button)
- Participant tracking with periodic heartbeat updates
- Optimistic updates for card creation, editing, and deletion
- Card ownership controls - only authors can edit/delete their cards

## Material Design 3 System Architecture

### Design System Implementation
- **Complete MD3 Integration**: Full Material Design 3 color palette, typography, and component system
- **Color Tokens**: `src/lib/colors.ts` implements MD3 semantic color roles (Primary, Secondary, Error, Surface)
- **Typography Scale**: Roboto font with MD3 typography hierarchy (headline, title, body, label variants)
- **Component Library**: Updated shadcn/ui components with MD3 styling and elevation system
- **8dp Grid System**: Consistent spacing tokens following Material Design principles

### CSS Architecture
- **MD3 Color Variables**: All colors use Material Design 3 token structure in `src/index.css`
- **HSL Format**: Colors defined in HSL for maximum flexibility and theming support
- **Dark Theme Support**: Complete dark theme implementation with MD3 dark color variants
- **Legacy Compatibility**: Backward compatibility maintained for existing retro color classes

### Tailwind Integration
- **MD3 Color Classes**: Extended Tailwind config with Material Design color utilities
- **Spacing Tokens**: MD3 spacing scale (4px, 8px, 16px, 24px, 32px, 48px)
- **Border Radius**: MD3 radius tokens (xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 28px)
- **Elevation System**: Box shadow utilities for MD3 elevation levels
- **Typography Classes**: Utility classes for MD3 typography scale

### Design Documentation
- **Implementation Guide**: Complete Material Design 3 documentation in `Material_Design_System.md`
- **Component Reference**: Usage guidelines and examples for all MD3 components
- **Migration Guide**: Instructions for transitioning from other design systems

## Board Templates

The application supports three retrospective templates using Material Design 3 semantic colors:
1. **Start/Stop/Continue**: Classic format using MD3 Primary (positive), Secondary (neutral), Error (negative)
2. **Mad/Sad/Glad**: Emotional reflection using MD3 Error (mad), Secondary (sad), Primary (glad)
3. **4 L's**: Comprehensive learning format (Liked/Learned/Lacked/Longed For)

Templates are defined in `RetroBoard.tsx:getDefaultColumns()` using the Material Design 3 color system with automatic semantic mapping.

## Recent Major Updates

### Material Design 3 Implementation (Latest)
- **Complete Design System Refactor**: Full migration to Material Design 3 principles
- **Color System**: Replaced custom palette with MD3 semantic color tokens
- **Typography**: Integrated Roboto font with complete MD3 typography hierarchy
- **Component Updates**: Updated Button and Card components with MD3 styling variants
- **Spacing System**: Implemented 8dp grid system with consistent spacing tokens  
- **Elevation**: Added MD3 shadow system with proper elevation levels
- **Dark Theme**: Full MD3 dark theme support with proper color variants
- **Documentation**: Complete implementation guide in `Material_Design_System.md`
- **Backward Compatibility**: Maintained compatibility with existing retro color classes

### Security Improvements
- **Environment Variables**: Supabase credentials moved from hardcoded values to `.env`
- **Card Ownership**: Only card authors can edit/delete their own cards
- **Voting Controls**: Board admins must explicitly enable voting
- **Input Validation**: Client-side validation with character limits
- **Server-side Vote Limits**: Database-enforced vote caps via triggers (default 3 votes per user)

## Performance Optimizations

- **Optimistic Updates**: Cards appear instantly without waiting for database
- **Efficient Queries**: Eliminated N+1 query patterns in voting system
- **Reduced Polling**: Real-time fallback polling reduced from 5s to 2s
- **Query Optimization**: ~60% faster vote operations

## Development Notes

- **Component Library**: Uses shadcn/ui with Material Design 3 styling - check existing components before creating new ones
- **Material Design 3**: All new components should use MD3 design tokens and follow Material Design principles
- **Form Handling**: All forms use react-hook-form with zod validation
- **Typography**: Use MD3 typography classes (md-headline-*, md-title-*, md-body-*, md-label-*)
- **Spacing**: Follow 8dp grid system using MD3 spacing tokens (md-spacing-*)
- **Colors**: Use semantic MD3 color references (md-primary, md-surface, etc.)
- **Elevation**: Apply MD3 shadow system (shadow-md-1, shadow-md-2, shadow-md-3)
- **Toast Notifications**: Via sonner for user feedback
- **Session Management**: Client-side only using crypto.randomUUID()
- **Error Boundaries**: Handle Supabase connection issues gracefully
- **Board Defaults**: New boards default to voting disabled (must be explicitly enabled)

## Database Schema Notes

- Board IDs are 6-character uppercase strings generated by database triggers
- Cards have positions for ordering and belong to specific columns
- Votes are anonymous and tied to voter session IDs
- Board participants are soft-tracked (no authentication required)
- Vote limits enforced per board (configurable via max_votes_per_user)
- Server-side vote constraint prevents duplicate votes and enforces limits via database triggers

## Common Tasks

### Adding a New Feature
1. Check existing components in `src/components/ui/` first
2. Follow Material Design 3 principles and use MD3 design tokens from `src/lib/colors.ts`
3. Use MD3 component variants (filled, outlined, text, elevated, tonal)
4. Apply proper spacing using 8dp grid system (md-spacing-* classes)
5. Use MD3 typography scale for consistent text hierarchy
6. Implement optimistic updates for better UX
7. Add proper TypeScript types (avoid `any`)
8. Reference `Material_Design_System.md` for implementation guidelines

### Debugging Real-time Issues
1. Check browser console for WebSocket connection status
2. Verify Supabase real-time is enabled for tables
3. Check if fallback polling is working (2-second intervals)
4. Ensure proper cleanup in useEffect hooks

### Modifying Colors/Theme
1. Update Material Design 3 color tokens in `src/lib/colors.ts`
2. Adjust CSS variables in `src/index.css` following MD3 structure
3. Use semantic MD3 color names (md-primary, md-surface, etc.)
4. Test both light and dark themes
5. Ensure WCAG AA color contrast compliance
6. Reference `Material_Design_System.md` for complete color system documentation
7. Use Material Theme Builder (https://m3.material.io/theme-builder) for custom palettes