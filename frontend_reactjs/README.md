# Recipe Explorer - Frontend (React)

A modern, lightweight Recipe Explorer UI following the Ocean Professional theme.

## Run
- npm start (dev server at http://localhost:3000)
- npm test
- npm run build

## Theme
- Tokens in `src/theme.js`
- CSS variables and styles in `src/styles/global.css`
- Colors: primary #2563EB, secondary/success #F59E0B, error #EF4444, background #f9fafb, surface #ffffff, text #111827
- Subtle gradients and rounded corners applied, with smooth transitions and shadows.

## Structure
- `src/components`: Header, SidebarFilters, RecipeGrid, RecipeCard, RecipeDetailModal, RatingStars, TagPill
- `src/data/recipes.js`: Mock dataset
- `src/services/api.js`: Service layer reading `REACT_APP_API_BASE` or `REACT_APP_BACKEND_URL` (mock data for now)

## Integrating a real API
Update `fetchRecipes()` in `src/services/api.js` to call your backend:
```js
export async function fetchRecipes() {
  const res = await fetch(`${getApiBaseUrl()}/recipes`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}
```
Provide `.env` with:
- REACT_APP_API_BASE or REACT_APP_BACKEND_URL

Expected recipe JSON shape:
```json
{
  "id": "string",
  "title": "string",
  "image": "url",
  "cuisine": "string",
  "dietTags": ["Vegan", "Vegetarian", "Gluten-Free"],
  "timeMinutes": 30,
  "rating": 4.5,
  "servings": 2,
  "ingredients": ["string"],
  "steps": ["string"]
}
```

## Accessibility
- Modal has role="dialog", aria-modal, ESC to close, and focus return.
- Cards are keyboard-activatable (Enter to open).
