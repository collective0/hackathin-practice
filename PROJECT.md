# Hackathon Practice

Shared foundation for a three-person hackathon team. This is a runnable starter;
product features, API endpoints, and a database integration are not implemented.

## Technology stack

- Next.js 16 App Router and React 19
- TypeScript with strict type checking and the `@/*` alias for `src/*`
- Tailwind CSS 4
- ESLint with Next.js and TypeScript rules
- npm and a committed `package-lock.json`
- Recommended runtime: Node.js 24 LTS and npm 11 (see `.nvmrc`)

Dependency versions in `package.json` and `package-lock.json` are the source of
truth. No database provider, ORM, auth service, or hosting platform is selected.

## Project structure

```text
src/
  app/
    api/                    Backend Route Handlers (reserved; no endpoints)
    favicon.ico             Application icon
    globals.css             Tailwind import and global styles
    layout.tsx              Shared root layout and metadata
    page.tsx                Root route; renders the landing placeholder
  components/
    dashboard/              Dashboard components (reserved)
    landing/                Landing page components
      landing-placeholder.tsx
  lib/
    db/                     Server-side database clients, queries, utilities (reserved)
public/                     Static assets
AGENTS.md                   Instructions for coding agents
PROJECT.md                  Architecture and collaboration rules
eslint.config.mjs           Lint configuration
next.config.ts              Next.js and Tailwind build configuration
package.json                Dependencies and npm scripts
package-lock.json           Reproducible npm dependency versions
tsconfig.json               TypeScript configuration
```

Next.js requires HTTP handlers at `src/app/api/<resource>/route.ts`. Keep these
thin and put database access in `src/lib/db/`. When database code is introduced,
install `server-only` and guard database modules with `import "server-only"`.
Never import credentials or database modules into client components.

Route files compose UI from `src/components/landing/` and
`src/components/dashboard/`. Components are Server Components by default; add
`"use client"` only for browser APIs, state, or event handlers. No dashboard route
exists yet. README files preserve the reserved directories in Git.

## Local development

```sh
git clone https://github.com/collective0/hackathin-practice.git
cd hackathin-practice
npm ci
npm run dev
```

Open the Local URL printed by Next.js (normally http://localhost:3000).
No environment variables or external services are required yet.

```sh
npm run lint       # ESLint; warnings fail the check
npm run typecheck  # Generate Next.js route types, then check TypeScript
npm run build      # Production build
npm start          # Serve the production build after npm run build
```

## Three-person collaboration

1. Keep `main` runnable. After this initial setup, use separate task branches,
   such as `feature/backend-api`, `feature/dashboard`, and `feature/landing`.
   Do not share working branches or push directly to `main`.
2. Start from current `main`: `git switch main`, `git pull --ff-only`, then
   `git switch -c feature/<task>`.
3. Suggested ownership: teammate one owns `src/app/api/` and `src/lib/db/`;
   teammate two owns `src/components/dashboard/` and future dashboard routes;
   teammate three owns `src/components/landing/` and `src/app/page.tsx`.
   Agree before editing another teammate's work area.
4. Coordinate shared-file changes before editing: `package.json`,
   `package-lock.json`, `src/app/layout.tsx`, `src/app/globals.css`, configuration,
   and shared types. Agree on API request/response contracts before connecting UI.
5. Use npm only. Commit dependency changes with `package-lock.json`; never edit
   the lockfile manually. Run `npm ci` after pulling dependency changes.
6. Keep commits focused. Push your branch and open a pull request into `main`.
   Get at least one teammate's review and run lint, typecheck, and build before
   merging. These are team rules; branch protection and CI are not configured.
7. Merge current `main` into feature branches regularly with `git fetch origin`
   and `git merge origin/main`. Resolve conflicts with the relevant file owner.
   Never force-push `main` or overwrite a teammate's work.
8. Store local configuration in ignored `.env.local` files. Never commit tokens,
   private keys, passwords, or real credentials, including in documentation.
   `NEXT_PUBLIC_` variables are visible in the browser. Share secrets privately.
   Revoke any accidentally committed secret immediately; ignoring it later does
   not remove it from history.

When environment variables are introduced, document names and purpose here
without values. Coordinate future database migrations with the backend owner.
