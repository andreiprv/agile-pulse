# Agile Pulse - Sprint Retrospective Tool

A modern, real-time collaborative retrospective board application for agile teams. Create anonymous retrospective sessions with multiple templates, real-time voting, and instant collaboration.

## Features

✨ **Real-time Collaboration** - Multiple team members can contribute simultaneously  
🗳️ **Anonymous Voting** - Vote on cards with activation controls  
📱 **Responsive Design** - Works seamlessly on desktop and mobile  
🎯 **Multiple Templates** - Start/Stop/Continue, Mad/Sad/Glad, 4 L's formats  
⚡ **Optimistic Updates** - Instant UI feedback for smooth experience  
🔒 **Card Ownership** - Only authors can edit their own cards  
🎨 **Modern UI** - Clean design with semantic color system  

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI**: shadcn/ui components + Tailwind CSS
- **Database**: Supabase (PostgreSQL) with real-time subscriptions
- **State**: TanStack Query with optimistic updates
- **Routing**: React Router DOM

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Supabase account (for database)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd agile-pulse-room

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your Supabase credentials to .env

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## How It Works

1. **Create a Board** - Choose from multiple retrospective templates
2. **Share the Link** - Team members join using the board URL
3. **Add Cards** - Contributors add anonymous cards to columns
4. **Start Voting** - Enable voting when ready to prioritize
5. **Discuss Results** - Focus on highest-voted items

## Templates

- **Start/Stop/Continue** - Classic retrospective format
- **Mad/Sad/Glad** - Emotional reflection approach  
- **4 L's** - Liked, Learned, Lacked, Longed For

## Security Features

- Environment-based configuration (no hardcoded secrets)
- Card ownership controls
- Server-side vote limit enforcement
- Input validation and sanitization
- Row Level Security (RLS) policies

## Performance Optimizations

- Optimistic UI updates for instant feedback
- Efficient real-time subscriptions
- Minimal re-renders with smart caching
- Database query optimization

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Architecture

The application follows a clean architecture pattern:

- `src/pages/` - Route components (Landing, CreateBoard, Board)
- `src/components/` - Reusable UI components
- `src/components/retro/` - Retrospective-specific components
- `src/lib/` - Utilities and configurations
- `src/integrations/` - External service integrations
- `supabase/` - Database migrations and schema

## Database Schema

- **boards** - Retrospective board configurations
- **retro_cards** - Individual cards with content and metadata
- **votes** - Anonymous votes tied to session IDs
- **board_participants** - Active participant tracking

## License

MIT License - see LICENSE file for details.

## Support

For questions or issues, please open a GitHub issue or check the documentation in `CLAUDE.md` for development guidance.