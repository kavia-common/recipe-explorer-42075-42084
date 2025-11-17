import React from "react";
import RecipeCard from "./RecipeCard";

// PUBLIC_INTERFACE
export default function RecipeGrid({ recipes, onOpen }) {
  /** Grid of recipe cards */
  if (!recipes.length) {
    return (
      <div className="card" style={{ padding: 24 }}>
        <strong>No recipes found.</strong>
        <div style={{ color: "#6b7280", marginTop: 6 }}>
          Try adjusting search or filters.
        </div>
      </div>
    );
  }

  return (
    <div className="grid">
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} onOpen={onOpen} />
      ))}
    </div>
  );
}
