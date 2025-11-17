import React, { useEffect, useRef } from "react";
import RatingStars from "./RatingStars";
import TagPill from "./TagPill";

// PUBLIC_INTERFACE
export default function RecipeDetailModal({ recipe, onClose }) {
  /**
   * Accessible modal for recipe details.
   * - ESC closes
   * - Focus returns to previously focused element
   */
  const backdropRef = useRef(null);
  const closeBtnRef = useRef(null);
  const lastActiveRef = useRef(null);

  useEffect(() => {
    lastActiveRef.current = document.activeElement;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // focus close on open
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      // restore focus
      if (lastActiveRef.current && lastActiveRef.current.focus) {
        lastActiveRef.current.focus();
      }
    };
  }, [onClose]);

  if (!recipe) return null;

  const { title, image, cuisine, dietTags, timeMinutes, rating, servings, ingredients, steps } = recipe;

  const onBackdropClick = (e) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop"
      ref={backdropRef}
      onClick={onBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="recipe-modal-title"
    >
      <section className="modal-panel">
        <div className="recipe-modal-header">
          <div className="topline">
            <h2 id="recipe-modal-title">{title}</h2>
            <button
              ref={closeBtnRef}
              className="btn"
              onClick={onClose}
              aria-label="Close details"
            >
              Close ✕
            </button>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <TagPill text={cuisine} />
            {dietTags.map((t) => <TagPill key={t} text={t} variant="secondary" />)}
            <div className="badge">⏱ {timeMinutes}m</div>
            <div className="badge">🍽 {servings} servings</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <RatingStars rating={rating} />
              <span style={{ fontSize: 12, color: "#6b7280" }}>{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>

        <div className="recipe-modal-body">
          <div>
            <div className="card" style={{ overflow: "hidden" }}>
              <div className="media" style={{ aspectRatio: "16/9", background: "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(249,250,251,1))" }}>
                <img src={image} alt={`${title} photo`} />
              </div>
            </div>
            <div className="recipe-section">
              <h3>Steps</h3>
              <hr className="sep" />
              <ol>
                {steps.map((s, idx) => (
                  <li key={idx} style={{ marginBottom: 8 }}>{s}</li>
                ))}
              </ol>
            </div>
          </div>

          <div>
            <div className="recipe-section">
              <h3>Ingredients</h3>
              <hr className="sep" />
              <ul>
                {ingredients.map((ing, idx) => (
                  <li key={idx} style={{ marginBottom: 6 }}>{ing}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
