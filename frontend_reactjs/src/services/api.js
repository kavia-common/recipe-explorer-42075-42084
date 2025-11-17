import { RECIPES } from "../data/recipes";

// PUBLIC_INTERFACE
export function getApiBaseUrl() {
  /**
   * Returns the API base URL from environment variables if present.
   * The app doesn't call a backend yet, but this allows easy future integration.
   */
  const env =
    process.env.REACT_APP_API_BASE ||
    process.env.REACT_APP_BACKEND_URL ||
    "";
  return env;
}

// PUBLIC_INTERFACE
export async function fetchRecipes() {
  /**
   * Fetch recipes.
   * For now this returns local mock data; later this can call `${getApiBaseUrl()}/recipes`.
   */
  // Simulate async
  await new Promise((r) => setTimeout(r, 50));
  return RECIPES;
}
