import React from "react";

const CUISINES = ["Italian", "Indian", "Mexican", "Mediterranean", "Chinese", "Greek", "Thai", "Japanese", "American", "Fusion"];
const DIETS = ["Vegan", "Vegetarian", "Gluten-Free"];
const TIME_BUCKETS = [
  { key: "<15", label: "< 15 min", match: (m) => m < 15 },
  { key: "15-30", label: "15 - 30 min", match: (m) => m >= 15 && m <= 30 },
  { key: "30-60", label: "30 - 60 min", match: (m) => m > 30 && m <= 60 },
  { key: "60+", label: "60+ min", match: (m) => m > 60 },
];

// PUBLIC_INTERFACE
export function getTimeBuckets() {
  /** Export buckets for reuse in filter logic if needed elsewhere */
  return TIME_BUCKETS;
}

// PUBLIC_INTERFACE
export default function SidebarFilters({
  selectedCuisines,
  setSelectedCuisines,
  selectedDiets,
  setSelectedDiets,
  selectedTimes,
  setSelectedTimes,
}) {
  /**
   * Sidebar filters with checkboxes.
   */
  const toggle = (value, list, setList) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <aside className="sidebar card" aria-label="Filters">
      <h3>Filters</h3>

      <section className="group" aria-labelledby="cuisine-label">
        <h4 id="cuisine-label" style={{ margin: 0, fontSize: 14, opacity: 0.9 }}>Cuisine</h4>
        {CUISINES.map((c) => (
          <label key={c}>
            <input
              type="checkbox"
              checked={selectedCuisines.includes(c)}
              onChange={() => toggle(c, selectedCuisines, setSelectedCuisines)}
            />
            {c}
          </label>
        ))}
      </section>

      <section className="group" aria-labelledby="diet-label">
        <h4 id="diet-label" style={{ margin: 0, fontSize: 14, opacity: 0.9 }}>Diet</h4>
        {DIETS.map((d) => (
          <label key={d}>
            <input
              type="checkbox"
              checked={selectedDiets.includes(d)}
              onChange={() => toggle(d, selectedDiets, setSelectedDiets)}
            />
            {d}
          </label>
        ))}
      </section>

      <section className="group" aria-labelledby="time-label">
        <h4 id="time-label" style={{ margin: 0, fontSize: 14, opacity: 0.9 }}>Time</h4>
        {TIME_BUCKETS.map((t) => (
          <label key={t.key}>
            <input
              type="checkbox"
              checked={selectedTimes.includes(t.key)}
              onChange={() => toggle(t.key, selectedTimes, setSelectedTimes)}
            />
            {t.label}
          </label>
        ))}
      </section>
    </aside>
  );
}
