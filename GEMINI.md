# GEMINI.md

This file provides guidance to Gemini when working with code in this repository.

## Project Overview

This is an Agile Sprint Retrospective Tool - a React application for creating collaborative retrospective boards for agile teams. The application allows teams to create real-time collaborative boards using different retrospective templates (Start/Stop/Continue, Mad/Sad/Glad, 4 L's).

The application is built with a modern tech stack, including:

*   **Frontend**: React 18 with TypeScript and Vite
*   **UI**: shadcn/ui components with Tailwind CSS, following a Material Design 3 design system
*   **Routing**: React Router DOM
*   **State Management**: TanStack Query for server state with optimistic updates
*   **Database**: Supabase (PostgreSQL) with real-time subscriptions

## Building and Running

The following scripts are available to build, run, and test the project:

*   `npm install`: Install dependencies
*   `npm run dev`: Start the development server
*   `npm run build`: Build the application for production
*   `npm run preview`: Preview the production build
*   `npm run lint`: Run ESLint to check for code quality

To get started, you will need to create a `.env` file with your Supabase credentials. You can use the `.env.example` file as a template.

## Project Structure

*   `src/`: This directory contains all of the source code for the application.
*   `src/components/`: This directory contains all of the reusable UI components.
*   `src/pages/`: This directory contains all of the page components.
*   `src/lib/`: This directory contains all of the utility functions and configurations.
*   `src/integrations/`: This directory contains all of the integrations with external services.
*   `supabase/`: This directory contains all of the database migrations and schema.

## Development Conventions

The primary development convention to follow is the Material Design 3 design system, which is documented in the `Material_Design_System.md` file.
