# Suggested Order of Work (Server Last)

Use this strict sequence. Complete each file before moving to the next one.

## Phase 1: Project foundation (no server yet)

1. Create/update `README.md` with project goal, setup, and module map.
2. Create/update `public/index.html` with the full page structure and IDs used by JS.
3. Create/update `public/css/styles.css` for layout, components, and states.
4. Create/update `package.json` scripts and metadata (`start`, optional `dev`, optional `seed`).
5. Create/update `data/books.json` with initial sample data shape used by the app.

## Phase 2: Frontend utilities and domain

6. Create/update `public/js/utils/domHelpers.js`.
7. Create/update `public/js/utils/formatters.js`.
8. Create/update `public/js/utils/closures.js`.
9. Create/update `public/js/utils/recursion.js`.
10. Create/update `public/js/models/LibraryItem.js`.
11. Create/update `public/js/models/Book.js`.
12. Create/update `public/js/models/Magazine.js`.
13. Create/update `public/js/models/Library.js`.
14. Create/update `public/js/state/store.js`.

## Phase 3: Frontend data access

15. Create/update `public/js/services/apiClient.js`.
16. Create/update `public/js/services/bookApi.js`.

## Phase 4: Frontend UI rendering

17. Create/update `public/js/ui/renderBooks.js`.
18. Create/update `public/js/ui/renderBookDetails.js`.
19. Create/update `public/js/ui/renderCategories.js`.
20. Create/update `public/js/ui/formUI.js`.
21. Create/update `public/js/ui/notifications.js`.

## Phase 5: Frontend behavior wiring

22. Create/update `public/js/handlers/bookHandlers.js`.
23. Create/update `public/js/handlers/filterHandlers.js`.
24. Create/update `public/js/handlers/searchHandlers.js`.
25. Create/update `public/js/main.js` (final frontend bootstrap and event wiring).

## Phase 6: Scripts (still before server runtime)

26. Create/update `scripts/seedDatabase.js`.

## Phase 7: Server implementation (last)

27. Create/update `server/config/env.js`.
28. Create/update `server/utils/fileHelpers.js`.
29. Create/update `server/utils/responseHelpers.js`.
30. Create/update `server/services/bookFileService.js`.
31. Create/update `server/services/libraryService.js`.
32. Create/update `server/services/openLibraryService.js`.
33. Create/update `server/controllers/bookController.js`.
34. Create/update `server/controllers/viewController.js`.
35. Create/update `server/routes/apiRoutes.js`.
36. Create/update `server/routes/viewRoutes.js`.
37. Create/update `server/app.js`.
38. Create/update `server/server.js` (only after everything else works).

## Final pass

39. Run seed task if needed and verify `data/books.json` updates correctly.
40. Run the app and validate core flows: list, search, add, update status, and UI feedback.
41. Refactor small issues, then update docs with final decisions.
