import React from "react";

// PUBLIC_INTERFACE
export default function RatingStars({ rating = 0, max = 5, size = 14, ariaLabel = "Rating" }) {
  /** Render star rating with partial fill support using unicode stars */
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const empty = Math.max(0, max - full - (hasHalf ? 1 : 0));

  return (
    <span className="stars" aria-label={`${ariaLabel}: ${rating.toFixed(1)} out of ${max}`}>
      {Array.from({ length: full }).map((_, i) => (
        <span key={`f-${i}`} style={{ fontSize: size }}>★</span>
      ))}
      {hasHalf && (
        <span key="half" style={{ position: "relative", display: "inline-block", width: size, height: size }}>
          <span aria-hidden="true" style={{ fontSize: size, color: "#fbbf24", position: "absolute", left: 0, top: -2 }}>
            ★
          </span>
          <span aria-hidden="true" style={{ position: "absolute", left: 0, top: -2, width: size / 2, overflow: "hidden", color: "#d1d5db", fontSize: size }}>
            ★
          </span>
        </span>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={`e-${i}`} style={{ fontSize: size, color: "#d1d5db" }}>★</span>
      ))}
    </span>
  );
}
