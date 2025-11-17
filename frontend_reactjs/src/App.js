import React, { useEffect, useMemo, useState } from "react";
import "./styles/global.css";
import { applyThemeToDocument } from "./theme";
import Header from "./components/Header";
import SidebarFilters from "./components/SidebarFilters";
import RecipeGrid from "./components/RecipeGrid";
import RecipeDetailModal from "./components/RecipeDetailModal";
import { fetchRecipes } from "./services/api";

/**
 * PUBLIC_INTERFACE
 * App - Main entry for Recipe Explorer.
 * Manages search, filters, and selected recipe state.
 */
function App() {
  // Apply theme to document
  useEffect(() => {
    applyThemeToDocument();
  }, []);

  const [query, setQuery] = useState("");
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedDiets, setSelectedDiets] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load mock data via service
  useEffect(() => {
    let alive = true;
    (async () => {
      setLoading(true);
      const data = await fetchRecipes();
      if (alive) {
        setRecipes(data);
        setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  // Filtering logic
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    const matchTime = (minutes) => {
      if (selectedTimes.length === 0) return true;
      return selectedTimes.some((key) => {
        if (key === "<15") return minutes < 15;
        if (key === "15-30") return minutes >= 15 && minutes <= 30;
        if (key === "30-60") return minutes > 30 && minutes <= 60;
        if (key === "60+") return minutes > 60;
        return true;
      });
    };

    return recipes.filter((r) => {
      // search
      const text = [r.title, ...(r.ingredients || [])].join(" ").toLowerCase();
      const matchesQuery = q === "" ? true : text.includes(q);

      const matchesCuisine =
        selectedCuisines.length === 0 || selectedCuisines.includes(r.cuisine);

      const matchesDiet =
        selectedDiets.length === 0 ||
        selectedDiets.every((d) => (r.dietTags || []).includes(d));

      const matchesTime = matchTime(r.timeMinutes);

      return matchesQuery && matchesCuisine && matchesDiet && matchesTime;
    });
  }, [recipes, query, selectedCuisines, selectedDiets, selectedTimes]);

  return (
    <div className="app-shell">
      <Header query={query} onChangeQuery={setQuery} />

      <main className="container main">
        <SidebarFilters
          selectedCuisines={selectedCuisines}
          setSelectedCuisines={setSelectedCuisines}
          selectedDiets={selectedDiets}
          setSelectedDiets={setSelectedDiets}
          selectedTimes={selectedTimes}
          setSelectedTimes={setSelectedTimes}
        />

        <section>
          {loading ? (
            <div className="card" style={{ padding: 24 }}>Loading recipes…</div>
          ) : (
            <RecipeGrid recipes={filtered} onOpen={setSelectedRecipe} />
          )}
        </section>
      </main>

      <RecipeDetailModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </div>
  );
}

export default App;
