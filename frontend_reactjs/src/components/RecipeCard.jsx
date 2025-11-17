import React from "react";
import RatingStars from "./RatingStars";
import TagPill from "./TagPill";

// PUBLIC_INTERFACE
export default function RecipeCard({ recipe, onOpen }) {
  /**
   * Card for a single recipe within the grid.
   */
  const { title, image, cuisine, dietTags, timeMinutes, rating } = recipe;

  return (
    <article className="recipe-card card" onClick={() => onOpen(recipe)} tabIndex={0} role="button" onKeyDown={(e)=>{ if(e.key === 'Enter') onOpen(recipe); }} aria-label={`Open details for ${title}`}>
      <div className="media">
        <img src={image} alt={`${title} image`} onError={(e)=>{ e.currentTarget.style.visibility='hidden'; }} />
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <div className="meta">
          <TagPill text={cuisine} />
          {dietTags.map((t) => <TagPill key={t} text={t} variant="secondary" />)}
        </div>
        <div className="actions">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <RatingStars rating={rating} />
            <span style={{ fontSize: 12, color: "#6b7280" }}>{rating.toFixed(1)}</span>
          </div>
          <div className="badge" aria-label={`Time ${timeMinutes} minutes`}>⏱ {timeMinutes}m</div>
        </div>
      </div>
    </article>
  );
}
