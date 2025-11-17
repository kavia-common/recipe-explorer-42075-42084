Recipe Explorer - Frontend Notes

Overview
- This React app implements a Recipe Explorer with search, filters, grid, and a recipe detail modal.
- Styling follows the Ocean Professional theme (primary #2563EB, secondary/success #F59E0B, error #EF4444, background #f9fafb, surface #ffffff, text #111827).

Structure
- src/theme.js: exports theme tokens and applyThemeToDocument().
- src/styles/global.css: CSS variables, base resets, and component utility classes.
- src/data/recipes.js: local mock dataset (16 recipes).
- src/services/api.js: service layer for fetching recipes (mock). Reads REACT_APP_API_BASE or REACT_APP_BACKEND_URL for future integration.
- src/components/*: Header, SidebarFilters, RecipeGrid, RecipeCard, RecipeDetailModal, RatingStars, TagPill.
- src/App.js: top-level state for search, filters, and modal.

Theme customization
- Update tokens in src/theme.js.
- CSS variables are defined in src/styles/global.css under :root — adjust if necessary.
- Header uses a subtle gradient via --gradient-header (defined inline as a linear-gradient).

Future API integration
- Replace fetchRecipes in src/services/api.js to call your backend, e.g.:
  const res = await fetch(`${getApiBaseUrl()}/recipes`);
  const data = await res.json();
  return data;
- Set environment variables (.env) for:
  REACT_APP_API_BASE or REACT_APP_BACKEND_URL
- Data shape expected by the UI:
  {
    id, title, image, cuisine, dietTags: string[], timeMinutes: number, rating: number, servings: number,
    ingredients: string[], steps: string[]
  }

Accessibility
- Modal uses role="dialog" with aria-modal and returns focus when closed.
- ESC closes modal. Clicking backdrop closes modal.
- Search input has appropriate labels; Cards are keyboard-activatable (Enter to open).

Running locally
- npm start and open http://localhost:3000
- Modify mock data in src/data/recipes.js for testing filters and search.

Notes
- Keep components presentational and prop-driven for simplicity.
