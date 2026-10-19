# configure reviewer notes

## Architecture

This is a small Vite-powered React dashboard starter named Atlas React Starter. The app is organized into shared UI components under `src/components`, page-level views under `src/pages`, local data under `src/data`, hooks, and SVG assets. `src/App.jsx` provides lightweight page selection and wraps the active page in the shared `Layout`.

## Conventions

- Use functional React components with default exports, as shown in `src/components/Badge.jsx`, `src/components/Button.jsx`, and `src/components/Layout.jsx`.
- Shared layout and UI primitives belong in `src/components`; pages are selected from `src/App.jsx` (`Dashboard`, `Projects`, `Settings`, and `NotFound`).
- Navigation is currently represented by page-name strings and callback props: `App.jsx` owns `page` state, while `Layout` and child pages receive `activePage`/`onNavigate`.
- Reusable or changing content is kept in local data modules and imported by components, e.g. `src/components/ActivityList.jsx` imports `src/data/activities` and `src/components/ProgressCard.jsx` imports `src/data/projects`.
- Icons use `lucide-react`; `ActivityList.jsx` maps activity types to icon components through the `icons` object rather than embedding conditional markup.
- Components use CSS class names for visual styling (`card`, `primary-button`, `activity-row`, etc.); project-specific progress colors are passed as inline styles in `src/components/ProgressCard.jsx`.
- The repository is JavaScript/JSX rather than TypeScript. `tsconfig.json` enables `allowJs`, disables checking with `checkJs: false`, and uses `noEmit: true`; do not assume TypeScript diagnostics enforce prop types.
- Vite configuration is intentionally minimal: `vite.config.js` only registers the React plugin, and `package.json` exposes `dev`, `build`, and `preview` scripts.

## Intentional non-standard choices

- This app does not use a router. `src/App.jsx` intentionally implements simple in-memory page switching with a `pages` object and falls back to `NotFound` for unknown page names.
- Several components are deliberately compact, single-line implementations, including `src/App.jsx`, `src/components/Badge.jsx`, and `src/components/Modal.jsx`; formatting alone should not be treated as a behavioral issue.
- Data is static and local rather than fetched from an API, consistent with the starter-dashboard scope and imports in `ActivityList.jsx` and `ProgressCard.jsx`.

## Watch out for

- When adding a page, update the `pages` map in `src/App.jsx`; otherwise navigation will render `NotFound`.
- Keep navigation labels synchronized with the string keys used by `App.jsx` and `Sidebar`; changing casing or spelling can silently break page selection.
- Guard data-driven lookups such as `icons[item.type]` in `src/components/ActivityList.jsx` if new activity types can be introduced; an unknown type currently causes an invalid icon render.
- Preserve stable keys for mapped content (`item.id` and `project.id`); do not replace them with array indexes without a specific reason.
- Interactive components should preserve existing accessibility behavior: `Header.jsx` gives the notification button an `aria-label`, while `Modal.jsx` supplies dialog roles and `LoadingSkeleton.jsx` supplies a loading label.