import React, { useEffect, useRef } from "react";

// PUBLIC_INTERFACE
export default function Header({ query, onChangeQuery }) {
  /**
   * Header with logo/title and search input.
   */
  const inputRef = useRef(null);

  useEffect(() => {
    // Keep focus behavior friendly for keyboard users if needed later
  }, []);

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="header-title">
          <div className="logo" aria-hidden="true" />
          <h1>Recipe Explorer</h1>
        </div>
        <div className="header-search" role="search">
          <label htmlFor="recipe-search" className="sr-only">Search recipes</label>
          <input
            id="recipe-search"
            ref={inputRef}
            className="input"
            type="search"
            placeholder="Search by name or ingredient..."
            value={query}
            onChange={(e) => onChangeQuery(e.target.value)}
            aria-label="Search recipes"
          />
        </div>
      </div>
    </header>
  );
}
