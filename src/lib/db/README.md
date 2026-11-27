# Database utilities

Reserved for server-only database clients, queries, and utilities. No provider,
ORM, connection, or schema is selected. When database modules are introduced,
guard them with `import "server-only"` and keep credentials in ignored
environment files. API handlers belong in `src/app/api/`.
