# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Kaplan Business School Interactive Content Card System** - a mobile-first platform connecting prospective students with student ambassadors. The app features a social-style feed (inspired by IDP.com), ambassador profiles, university pages, Q&A sections, and a "Dreamwall" for bookmarking content.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite 7
- **Styling**: Tailwind CSS 4, Shadcn/UI components, Lucide icons
- **Animation**: Framer Motion
- **Routing**: Wouter (lightweight router)
- **State Management**: TanStack React Query, local React state
- **Backend**: Express.js with TypeScript
- **Database**: Drizzle ORM with PostgreSQL (Neon serverless)
- **Validation**: Zod schemas

## Project Structure

```
├── client/               # Frontend React application
│   └── src/
│       ├── components/   # React components
│       │   └── ui/       # Shadcn/UI component library
│       ├── hooks/        # Custom React hooks
│       ├── lib/          # Utilities, mock data, query client
│       └── pages/        # Page components (home, ambassador-profile, etc.)
├── server/               # Express backend
│   ├── app.ts            # Express app configuration
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Data storage interface
│   └── index-dev.ts      # Development server entry
├── shared/               # Shared code between client/server
│   └── schema.ts         # Drizzle/Zod schemas and types
└── attached_assets/      # Static assets and images
```

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (runs on port 5000)
npm run dev:client   # Start Vite client only
npm run build        # Build for production
npm run start        # Run production build
npm run check        # TypeScript type checking
npm run db:push      # Push Drizzle schema to database
```

## Path Aliases

Configured in `tsconfig.json`:
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`

## Key Architectural Patterns

### Mobile-First Design
- "One Thumb, One Eye" principle: Bottom-heavy navigation, sticky CTAs
- Touch targets > 44px for mobile accessibility
- No modals - uses dedicated pages or slide-overs

### Component Organization
- UI primitives in `client/src/components/ui/` (Shadcn/UI)
- Page components in `client/src/pages/`
- Custom hooks in `client/src/hooks/`

### Data Flow
- Mock data currently in `client/src/lib/mock-data.ts`
- React Query for server state management
- LocalStorage for Dreamwall persistence

### Key Pages
- `/` - Home feed with content cards
- `/post/:id` - Individual post detail
- `/ambassador/:id` - Ambassador profile
- `/university/:id` - University profile
- `/university/:id/enquire` - Enquiry form
- `/qa` - Q&A list
- `/qa/:id` - Q&A detail
- `/dreamwall` - Saved posts

## Conventions

- Use TypeScript strict mode
- Follow existing Shadcn/UI component patterns
- Use Tailwind CSS for styling (no separate CSS files for components)
- Use Zod for runtime validation alongside TypeScript types
- Keep components small and focused
- Prefer composition over prop drilling
